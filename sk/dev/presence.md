---
title: Presence Development
description:
published: true
date: 2020-04-30T17:27:58.564Z
tags:
---

> All presences are now stored here: https://github.com/PreMiD/Presences 
> 
> {.is-info}

Version `2.x` introduces the [presence store](https://premid.app/store). Users now have the ability to manually add and remove their favourite presences through the user interface of the [website](https://premid.app/).

# Pokyny
> If you do **NOT** follow the guidelines, a `Presence Verifier` will request the proper changes, or will have to close it under certain circumstances. 
> 
> {.is-warning}

> When you make pull requests about adding or modifying existing Presences, you **MUST** include a screenshot. However, modifications to a Presence's `metadata.json` or `tsconfig.json` files do **NOT** require a screenshot. _Your screenshot **MUST** be directly uploaded to GitHub with the pull request, do **NOT** use third-party image sharing sites._ 
> 
> {.is-warning}

When publishing Presences to this GitHub, we require you to follow a set of guidelines. To some, these strict rules may seem harsh. However, the implementation of these rulesets will keep us and the users from running into any issues.

## Tvorba
> The code you write MUST be *well-written* and MUST be *readable*. `DeepScan` on GitHub will report code quality issues to the `Presence Verification Team`. We recommend that your fork is up to date when you make pull requests, it will help limit false positives. 
> 
> {.is-warning}

- The pull request **MUST** be complete, you need to have a proper file structure, drafts are **NOT** allowed. Including the `presence.ts` file, `tsconfig.json` file ,`dist` folder, `presence.js` file, and `metadata.json` file, which is represented in the following example schema:
```bash
presence
├── dist
│   ├── metadata.json
│   └── presence.js
├── presence.ts
└── tsconfig.json
```
or if you're using `iframe`:
```bash
presence
├── dist
│   ├── metadata.json
│   ├── presence.js
│   └── iframe.js
├── presence.ts
├── iframe.ts
└── tsconfig.json
```

Skôr ako začnete pracovať na svojej prítomnosti, majte na pamäti nasledujúci zoznam.
- The Presence **MUST** be related to the site you have chosen.
- The Presence **MUST NOT** be of any illegal sites. These include stressors, drugs, child porn, etc.
- The Presence metadata **MUST** have well-written content, including valid titles, and descriptions.
- The media you include (icon/thumbnail) **MUST** be related to the site and should be understandable in terms of size and quality.
- The file structure **MUST** be clean and managed, do **NOT** have random files that provide nothing to the Presence's function.
- The Presence **MUST NOT** have any malicious intentions. These include stealing/leaking private information, negatively affecting the behavior of the site, etc.
- If you design a Presence for a site that happens to change in the future and as a result, potentially breaking your Presence, you **ARE** responsible for updating it to work as expected. If you do **NOT** fix it within seven days, other Presence developers are allowed to **OVERWRITE** it to comply with the changes.
- The Presence **MUST** be tested before publishing to confirm that everything works as expected.
- Your Presence **MUST** have SFW images and descriptions regardless if it is NSFW or not. If your Presence is about an NSFW site, please add the `nsfw` tag to your metadata.
- Your Presence **CANNOT** manipulate local storage on the browser.
- Your Presence may use cookies to store data, you have to prefix all of them with `pmd_`.
- The name of your Presence **MUST** be the name of your Presence's directory name. For example, a Presence named `Google Docs` must have a directory of `/Google Docs/`. (you should include all spaces, periods, commas, and any other special characters)

## Úprava
> You MUST change the version in the **metadata** to be a higher value from previous version when making changes to either the **presence.ts**/**presence.js** or **metadata.json**. 
> 
> {.is-warning}

In some situations, Presences may behave unexpectedly or could use some minor changes to improve their functionality. Here is a compiled list that you **MUST** follow to modify Presences.

- You are **NOT** allowed to rewrite a Presence or change its author. If the Presence author was banned from the official server or hasn't made the required changes in seven days, you may contact a `Presence Verifier` to see if you can to rewrite the Presence of your choice.
- Anyone may provide hotfixes to fix bugs; however, try **NOT** to make changes to code that does **NOT** need to be fixed. Valid modifications are, but **NOT** limited to, _missing paths_, _typos_, _missing images_, etc.
- If you make modifications to a Presence and change at least a **QUARTER** of the Presence's codebase, you are allowed to add yourself as a contributor. Contact a `Presence Verifier` for more information about this subject.
- Make sure the modifications are useful. These may include fixes (code and typos), additions (descriptions and tags), etc. Do **NOT** change images if they are not outdated and have a decent resolution.
- Confirm that your changes work before publishing. Do **NOT** create pull requests without knowing the outcome of your changes.

# Overovanie

> If you need to contact someone, please use our official Discord server. All `Presence Verifiers` will have a unique role in their profile.

For your Presence to reach the stores, it **MUST** go through a process on GitHub to confirm that it works as expected. These are a few things to look out for when making your pull request.

1. It takes two verifiers to confirm that your Presence is up to standards. If you happen to get change requests, make the proper effort to fix it, or it will **NOT** be added.
2. If we request changes and your pull request exceeds **7 days of inactivity** without making the necessary ones, we'll be forced to close it.
3. You are allowed to take screenshots of changes made with the help of another user, and you are allowed to stitch screenshots for viewing pleasure. (e.g., its author in case you can't access it for any reason).
4. If it is an update or patch, the screenshot **MUST** show the new additions working, **NOT** any old features from previous pull requests.
5. The provided screenshots should be real, **NOT** edited.
6. Any contributed code that gets merged to this repository will be licensed under the **Mozilla Public License 2.0**.
7. Presences for free domains or hosts (e.g., .TK, [all free Freenom domains], .RF.GD, etc) are **NOT** allowed at all, exceptions can be made if a proof is presented showing that they paid for the domain.
8. The `smallImageKey` and `smallImageText` fields are intended to provide additional/secondary context (such as "playing"/"paused" for video sites, "browsing" for regular sites, and other cases) not to promote Discord profiles or anything unrelated to PreMiD.
9. The requirements for logos are 1:1 (Square) in 512px, thumbnails, however, should either be [wide promotional cards](https://i.imgur.com/3QfIc5v.jpg) or simply [screenshots](https://i.imgur.com/OAcBmwW.png) if the first is **NOT** available.
10. Presences should at least have one tag. Tags must **NOT** include any spaces, slashes, single/double quotation marks, Unicode characters, and should always be lowercase.
11. The `url` field **MUST NOT** include `http://` or `https://`, neither the parameters (e.g. a Presence for `https://www.google.com/search?gws_rd=ssl` will only have `www.google.com` in the `url` field).
12. Descriptions and tags should always be in an array, even when it's only one element. The `url` field, however, should only be a string if it's one domain.
13. Tags should be used as alternate names whenever possible, and shortened versions must be included as well (e.g., if an Amazon Presence had included AWS support, it would have its tags like "amazon-web-services" and "aws").
14. Unstable sites that constantly change APIs/domains, randomize HTML elements, or just still being in heavy development are not allowed and will be removed from the store.
15. The logo and thumbnail on your Presence **MUST** either be `i.imgur.com`, from a CDN that **YOU** own, or from a CDN that gives you permission to **CHANGE** image files.
16. Verifiers will check if the Presence contains an `__awaiter` function at the beginning of the code (which comes from an earlier version of ECMAScript), whether it's in Typescript or Javascript, and in addition to that, make sure the `UpdateData` event used is similar to this:

```ts
presence.on("UpdateData", async () => {
  /*...*/
  // Always use await when using async in the event
  data.smallImageText = (await strings).playing;
  /*...*/
});
```

It should **NOT** be this:

```ts
presence.on("UpdateData", () => __awaiter(this, void 0, void 0, function* () {
  /*...*/
  // Never use yield
  data.smallImageText = (yield strings).playing;
  /*...*/
});
```

17. You **MUST** include all source files (such as `presence.ts` or `iframe.ts`), do **NOT** include a source mapping url if your Presence's language is Javascript.
18. When **Deepscan** throws a lot of errors (and it will), it is mostly an issue with your branch being outdated, always update your GitHub fork when making pull requests.
19. Always make sure the version number follows [semantic versioning standards](https://semver.org), which translates to the following scheme : `<NEW-FEATURE>.<HUGE-BUGFIX>.<SMALL-BUGFIX-OR-METADATA-CHANGES>`. anything else like `1.0.0.1`, `1.0`, `1`, `1.0.0-BETA` or changing `1.0.0` to `2.0.0` on a bug fix/small change is **NOT** permitted.
20. Low-quality Presences (or ones with one context) are **NOT** allowed (e.g., only showing the logo and some text but never changing again).
21. **NEVER** use custom functions when [native variants are available](https://docs.premid.app/dev/presence#files-explained); this makes sure fixes on the extension level also apply to your Presences, you're free to use whatever you need if you do not find them listed in the docs.
22. It is **NOT** recommended to use comments on Javascript Presences unless necessary (TypeScript ones or their compiled files are fine), as it reduces code readability and increases file sizes.
23. Declare the Presence const **BEFORE** everything to avoid such rare issues that may occur; this is not a requirement by design so it could be removed in the future.
24. Presences that target internal browser pages (like Chrome Web Store, `chrome://`, `about:` pages, etc) are **NOT** allowed as they require an _experimental flag_ to be enabled on the user's end and could potentially cause damage to their browsers.
25. It is **FORBIDDEN** to code Presences for a site without adding support to its main language (e.g., a YouTube Presence coded with support for Portuguese and Japanese, but not English itself).

After meeting all of the guidelines and having your Presence reviewed at least twice, your Presence will be merged with the store.

# Structure
All presence are coded in [TypeScript](https://www.typescriptlang.org/). [TypeScript](https://www.typescriptlang.org/) has some extra spicy type definitions over JavaScript, so fixing and identifying bugs is way easier.

## Inštalácia
1. Nainštalujte si [Git](https://git-scm.com/).
2. Nainštalujte si [Node](https://nodejs.org/en/) (prichádza s [npm](https://www.npmjs.com/)).
3. Nainštalujte si [TypeScript](https://www.typescriptlang.org/index.html#download-links) (otvorte terminál a `npm install -g typescript`).

## Cloning the project
1. Open a terminal and type `git clone https://github.com/PreMiD/Presences`.
2. Choose a folder of your choice.
3. Open it in you code editor.

## Creating folders and files

1. Create a folder with the **name** (not an URL) of the service you want to support.
2. Create a `presence.ts` and a `tsconfig.json` file inside.
3. Create a folder named `dist` inside.
4. Create a `metadata.json` file inside the `dist` folder.

## Filling in the tsconfig.json file
Please put the following code inside of the `tsconfig.json` file.
```javascript
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist"
  }
}
```
To learn more about TypeScript configuration click [here](/dev/presence/tsconfig).

## Filling in the metadata.json file
We've made a `metadata.json` file creator for the lazy peeps [here](https://eggsy.codes/projects/premid/mdcreator). It's still suggested to read this through so you know how it works.

```javascript
{
  "author": {
    "name": "USER",
    "id": "ID"
  },
  "contributors": [{
    "name": "USER",
    "id": "ID"
  }],
  "service": "SERVICE",
  "description": {
    "en": "DESCRIPTION"
  },
  "url": "URL",
  "version": "VERSION",
  "logo": "URL",
  "thumbnail": "URL",
  "color": "#HEX000",
  "tags": ["TAG1", "TAG2"],
  "category": "CATEGORY",
  "regExp": "REGEXP",
  "iFrameRegExp": "REGEXP",
  "iframe": false,
  "settings": [
        { 
            "id": "ID",
            "title": "DISPLAY TITLE",
            "icon": "FONTAWESOME FREE ICON",
            "value": true
        },
        {
            "id": "ID",
            "if": {
                "ID": true
            },
            "title": "DISPLAY TITLE",
            "icon": "FONTAWESOME FREE ICON",
            "value": "\"%song%\" by %artist%",
            "placeholder": "use %song% or %artist%"
        },
        {
            "id": "ID",
            "title": "DISPLAY TITLE",
            "icon": "FONTAWESOME FREE ICON",
            "value": 0,
            "values": ["1", "2", "etc."]
        }
    ]
}
```

Please copy the code above and put it in your `metadata.json` file. You now need to edit values of the properties. Please note that the following properties are optional to have in your `metadata.json` file, if you do not plan on using them you need to remove them.
- `prispievatelia`
- `regExp`
- `iframe`
- `iFrameRegExp`
- `nastavenia`

**Clarifying some value presets:**
<table>
  <thead>
    <tr>
      <th style="text-align:left">Premenná</th>
      <th style="text-align:left">Popis</th>
      <th style="text-align:left">Typ</th>
      <th style="text-align:left">Nepovinné</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>autor</b>
      </td>
      <td style="text-align:left">Mal by obsahovať Objekt s <code>menom</code> a <code>id</code> vývojára prítomnosti. Meno je vaše Discord užívateľské meno bez identifikátoru(#0000). Užívateľské <code>id</code> možno skopírovať z Discordu povolením mód vývojára         a kliknutím pravým tlačítkom na váš profil.</td>
      <td style="text-align:left"><code>Objekt</code>
      </td>
      <td style="text-align:left"><code>Nie</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>prispievatelia</b>
      </td>
      <td style="text-align:left">Mal by obsahovať Objekt s <code>menom</code> a <code>id</code> vývojára prítomnosti. Meno je vaše Discord užívateľské meno bez identifikátoru(#0000). Užívateľské <code>id</code> možno skopírovať z Discordu povolením mód vývojára         a kliknutím pravým tlačítkom na váš profil.</td>
      <td style="text-align:left"><code>Poradie&lt;Objekt&gt;</code>
      </td>
      <td style="text-align:left"><code>Áno</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>služba</b>
      </td>
      <td style="text-align:left">Názov služby ktorú táto prítomnosť podporuje. <br>(Must be the same name as the folder where everything is in)</td>
      <td style="text-align:left"><code>Reťazec</code>
      </td>
      <td style="text-align:left"><code>Nie</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>popis</b>
      </td>
      <td style="text-align:left">Malý popis prítomnosti, môžete použiť popis služby        ak nemáte žiadne nápady. Váš popis musí mať hodnoty párov kľúčov ktoré označujú jazyk, a popis v tom konkrétnom jazyku. Urobte popisy s jazykmi <i>ktoré poznáte</i>, naši prekladatelia ich zmenia vo vašich metadata súborov.</td>
      <td style="text-align:left"><code>Objekt</code>
      </td>
      <td style="text-align:left"><code>Nie</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b>
      </td>
      <td style="text-align:left">URL of the service.<br><b>Example:</b><code>vk.com</code><br>
        <b>This URL must match the URL of the website as it will detect whether or not this is the website to inject the script to.</b><br> Do <b>NOT</b> add <code>https://</code> or <code>http://</code> inside of the URL nor a slash at the end:
<code>https://premid.app/</code> -> <code>premid.app</code><br>
<b>Note</b>: Some URLs may have <code>www.</code> or something else in front of their domain. Do <b>NOT</b> forget to add it!<br>
You can add multiple URLs by doing the following:<br>
<code>["URL1", "URL2", "ETC."]</code><br>
You could also use regExp also known as Regex for this task, explaned further below.
      </td>
      <td style="text-align:left"><code>Reťazec, Poradie&lt;String&gt;</code>
      </td>
      <td style="text-align:left"><code>Nie</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b>
      </td>
      <td style="text-align:left">A regular expression string used to match urls.<br>
      regExp or also known as Regex, can be used if a website has multiple subdomains.<br>
You could use the following regExp for that:<br>
<code>([a-z0-9]+)[.]domain[.]TLD"</code><br>
TLD standing for Top Level Domain for axample: .com .net<br> 
<code>([a-z0-9]+)</code> means anything from a to z and from 0 to 9.<br>
        You can test your regExp at <a href="https://regex101.com/">Regex101</a></td>
      <td style="text-align:left"><code>Reťazec</code>
      </td>
      <td style="text-align:left"><code>Áno</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>verzia</b>
      </td>
      <td style="text-align:left">Verzia vašej prítomnosti.</td>
      <td style="text-align:left"><code>Reťazec</code>
      </td>
      <td style="text-align:left"><code>Nie</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>logo</b>
      </td>
      <td style="text-align:left">Odkaz na službu&apos; s logotypom.</td>
      <td style="text-align:left"><code>Reťazec</code>
      </td>
      <td style="text-align:left"><code>Nie</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>náhľad</b>
      </td>
      <td style="text-align:left">Odkaz na náhľad vašej prítomnosti.</td>
      <td style="text-align:left"><code>Reťazec</code>
      </td>
      <td style="text-align:left"><code>Nie</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>farba</b>
      </td>
      <td style="text-align:left"><code>#HEX</code> hodnota. Odporúčame vám používať primárnu farbu služby        ktorá vaša prítomnosť podporuje.</td>
      <td style="text-align:left"><code>Reťazec</code>
      </td>
      <td style="text-align:left"><code>Nie</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>štítky</b>
      </td>
      <td style="text-align:left">Pole so značkami, pomôže používateľom vyhľadávať vašu prítomnosť na webovej stránke.</td>
      <td
      style="text-align:left"><code>Reťazec, Poradie&lt;String&gt;</code>
        </td>
      <td style="text-align:left"><code>Nie</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>kategória</b>
      </td>
      <td style="text-align:left">Reťazec použitý na označenie kategórie do ktorej patrí. See the valid catergories <a href="https://docs.premid.app/dev/presence/metadata#presence-categories">here</a>.</td>
      <td style="text-align:left"><code>Reťazec</code>
      </td>
      <td style="text-align:left"><code>Nie</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b>
      </td>
      <td style="text-align:left">Určuje či je použitý <code>iFrames</code></td>
      <td style="text-align:left"><code>Boolean</code>
      </td>
      <td style="text-align:left"><code>Áno</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b>
      </td>
      <td style="text-align:left">Selektor regulárneho výrazu ktorý vyberá prvky iframe do ktorých sa má vložiť. See regExp for more info.</td>
      <td style="text-align:left"><code>Reťazec</code>
      </td>
      <td style="text-align:left"><code>Áno</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>nastavenia</b>
      </td>
      <td style="text-align:left">An array of settings the user can change.<br>
      Read more about presence settings <a href="https://docs.premid.app/dev/presence/metadata#presence-settings">here</a>.</td>
      <td style="text-align:left"><code>Poradie&lt;Objekt&gt;</code>
      </td>
      <td style="text-align:left"><code>Áno</code>
      </td>
    </tr>
  </tbody>
</table>

We've made a `metadata.json` file creator for the lazy peeps [here](https://eggsy.codes/projects/premid/mdcreator).

## Začíname

```javascript
var presence = new Presence({
    clientId: "000000000000000000" //The client ID of the Application created at https://discordapp.com/developers/applications
}),

strings = presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
    //You can use this to get translated strings
});

/*

function myOutsideHeavyLiftingFunction(){
    //Grab and process all your data here

    // element grabs //
    // api calls //
    // variable sets //
}

setInterval(10000, myOutsideHeavyLiftingFunction); 
//Run the function seperate from the UpdateData event every 10 seconds to get and set the variables which UpdateData picks up

*/


presence.on("UpdateData", async () => {
    /*UpdateData is always firing, and therefore should be used as your refresh cycle, or `tick`. This is called several times a second where possible.

    It is recommended to set up another function outside of this event function which will change variable values and do the heavy lifting if you call data from an API.*/

    var presenceData = {
        largeImageKey: "key", /*The key (file name) of the Large Image on the presence. These are uploaded and named in the Rich Presence section of your application, called Art Assets*/
        smallImageKey: "key", /*The key (file name) of the Large Image on the presence. These are uploaded and named in the Rich Presence section of your application, called Art Assets*/
        smallImageText: "Some hover text", //The text which is displayed when hovering over the small image
        details: "Browsing Page Name", //The upper section of the presence text
        state: "Reading section A", //The lower section of the presence text
        startTimestamp: 1577232000, //The unix epoch timestamp for when to start counting from
        endTimestamp: 1577151472000 //If you want to show Time Left instead of Elapsed, this is the unix epoch timestamp at which the timer ends
    }; /*Optionally you can set a largeImageKey here and change the rest as variable subproperties, for example presenceSata.type = "blahblah"; type examples: details, state, etc.*/

    if (presenceData.details == null) {
        //This will fire if you do not set presence details
        presence.setTrayTitle(); //Clears the tray title for mac users
        presence.setActivity(); /*Update the presence with no data, therefore clearing it and making the large image the Discord Application icon, and the text the Discord Application name*/
    } else {
        //This will fire if you set presence details
        presence.setActivity(presenceData); //Update the presence with all the values from the presenceData object
    }
});
```
You can copy this into your `presence.ts` file and edit the values. Setting all the values is done inside of the updataData event.

For examples we suggest to look at the code of presences like: 1337x or 9GAG.

For more information about the Presence class click [here](/dev/presence/class).

## Nemôžem získať určité údaje?!

A lot of websites are using [iframes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([Inlineframes](https://en.wikipedia.org/wiki/HTML_element#Frames)). These html tags can contain multiple sources such as videos. But they're not relevant every time. Some are hidden or just not actively used. Check if you can extract, the information you need, without them before you do unnecessary work.

1. Check for them in your browsers console (be sure that you are on the **Elements** tab).
2. Search (<kbd>CTRL</kbd>+<kbd>F</kbd> (Windows) or <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
3. Execute `document.querySelectorAll("iframe")`.

If you find that your data is in a iFrame you need to do the following:
1. Create a `iframe.ts` file.
2. Set iFrame to `true` in your metadata file.
3. Filling in your iFrame file.
```javascript
var iframe = new iFrame();
iframe.on("UpdateData", async () => {
  /*
  Get all the data you need out of the iFrame save them in variables
  and then sent them using iframe.send
  */
  iframe.send({ //sending data
    video: video,
    time: video.duration
  }); 
});
```
4. Making your presence file receive data from the iFrame file.
```javascript
presence.on("iFrameData", data => {
  iFrameVideo = data.video;
  currentTime = data.time;
});
```
**Note:** This needs to be placed outside of the updateData event.
## Kompilovanie
Open a console in your folder and type `tsc -w` to compile the `presence.ts` into the `/dist` folder.

# Načítanie prítomnosti
1. Open the popup and hold the <kbd>Shift</kbd> button on your keyboard.
2. **Load Presence** will appear in the Presences section.
3. Click on it while you are still holding the <kbd>Shift</kbd> button.
4. Select the /dist folder of your presence.

# Some helpful things
## Hot-reloading
The website you are developing on is automatically reloading every time you save a file in your folder.

## Debugging
- You can put `console.log("Test");` between your code and see if your browser console gives you that output. If yes then go on and try again after the next function. If not then there is an error above.
- If that doesn't help you either then ask a presence developer on our [Discord server](https://discord.gg/WvfVZ8T) for help.

# Vysvetlené Súbory
- [Trieda Prítomnosti](/dev/presence/class)
- [iFrame Trieda](/dev/presence/iframe)
- [Metadata Súbor](/dev/presence/metadata)
- [Konfigurácia TypeScriptu](/dev/presence/tsconfig)
{.links-list}
