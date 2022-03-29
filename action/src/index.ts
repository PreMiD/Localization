import "source-map-support/register";

import * as core from "@actions/core";
import Crowdin from "@crowdin/crowdin-api-client";
import delay from "delay";
import download from "download";
import { readFileSync, writeFileSync } from "fs";
import { copy } from "fs-extra";
import globby from "globby";
import { MongoClient } from "mongodb";
import pRetry from "p-retry";
import { dirname } from "path";

interface StringFileType {
	[key: string]: {
		message: string;
		description: string;
	};
}

type project = "website" | "presence" | "extension";

type LangFileType = Partial<Record<project, Record<string, string>>>;

try {
	require("dotenv").config({ path: ".env" });
} catch (e) {}

const inputs = {
	PROJECT_ID: process.env.PROJECT_ID
		? parseInt(process.env.PROJECT_ID)
		: parseInt(core.getInput("project_id", { required: true })),
	TOKEN: process.env.TOKEN || core.getInput("token", { required: true }),
	MONGO_URL:
		process.env.MONGO_URL || core.getInput("mongo_url", { required: true })
};

const client = new Crowdin({
		token: inputs.TOKEN
	}),
	mongoClient = new MongoClient(inputs.MONGO_URL, {
		appName: "PreMiD language updater"
	});

run();

/**
 * Gets the latest translations from Crowdin
 */
async function run() {
	core.info("Connecting to MongoDB...");
	await mongoClient.connect();
	core.info("Connected to MongoDB");

	core.info("Starting Crowdin Project Build");
	const {
		data: { status, id }
	} = await client.translationsApi.buildProject(inputs.PROJECT_ID, {
		branchId: 7918,
		skipUntranslatedStrings: true
	});

	if (status !== "finished")
		//* Start polling for build status until it's finished
		await pRetry(() => checkBuildStatus(id), {
			retries: 15,
			factor: 0,
			onFailedAttempt: () => delay(10_000)
		});
	core.info("Build is finished");

	//* Download translations
	core.info("Downloading translations...");
	const {
		data: { url }
	} = await client.translationsApi.downloadTranslations(inputs.PROJECT_ID, id);

	//* Download zip file
	await download(url, "./tmp", {
		extract: true,
		filename: "translations.zip"
	});

	core.info("Downloaded translations");

	core.info("Transforming translations...");

	await copy("./src", "./tmp/en");

	const langs = await globby("*", { cwd: "./tmp", onlyDirectories: true });

	let strings: { lang: string; projects: LangFileType }[] = [];

	for (const lang of langs) {
		const projects = ["Website", "Presence", "Extension"];

		const files = await globby(`**/*.json`, { cwd: `./tmp/${lang}` });

		let langFile: LangFileType = {};

		for (const project of projects) {
			const projectFiles = files.filter(file => dirname(file) === project);

			//* Merge files per project into one object and only keep 'message'
			const projectStrings: Record<string, string> = {};

			for (const file of projectFiles) {
				const fileStrings = JSON.parse(
					readFileSync(`./tmp/${lang}/${file}`, "utf8")
				) as StringFileType;

				Object.keys(fileStrings).forEach(key => {
					projectStrings[key] = fileStrings[key].message;
				});
			}

			//@ts-expect-error
			langFile[project.toLowerCase()] = projectStrings;
		}

		//* If lang === de_DE > de else keep it
		const key =
			lang.slice(0, 2) === lang.slice(3, 5).toLowerCase()
				? lang.slice(0, 2)
				: lang;

		strings.push({ lang: key, projects: langFile });
	}

	core.info("Transformed translations");

	writeFileSync("./tmp/strings.json", JSON.stringify(strings, null, 2));

	core.info("Updating translations in database...");
	const coll = mongoClient.db("PreMiD").collection<{
		lang: string;
		project: string;
		translations: Record<string, string>;
	}>("langFiles");

	//* Map strings by language and project
	await coll.bulkWrite(
		strings
			.flatMap(({ lang, projects }) =>
				Object.entries(projects).map(project => {
					return { lang, project: project[0], translations: project[1] };
				})
			)
			.map(s => ({
				updateOne: {
					filter: { lang: s.lang, project: s.project },
					update: {
						$set: {
							lang: s.lang,
							project: s.project,
							translations: s.translations
						}
					},
					upsert: true
				}
			}))
	);
	core.info("Updated translations in database");

	//* Delete languages on db that are not in Crowdin
	const languagesToDelete = (await coll.distinct("lang")).filter(
		l => !strings.map(s => s.lang).includes(l)
	);

	if (languagesToDelete.length > 0) {
		core.info(
			`Deleting ${languagesToDelete.length} languages from database...`
		);
		await coll.deleteMany({ lang: { $in: languagesToDelete } });
		core.info("Deleted languages from database");
	}

	await mongoClient.close();
}

/**
 * Polls for build status until it's finished
 * @param {number} buildId - The id of the build
 */
async function checkBuildStatus(buildId: number) {
	const { data: buildStatus } = await client.translationsApi.checkBuildStatus(
		inputs.PROJECT_ID,
		buildId
	);

	if (buildStatus.status !== "finished") {
		core.info("Build is still in progress");
		throw new Error("Build is still in progress");
	}
}
