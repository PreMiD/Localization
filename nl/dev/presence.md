---
title: Presence Ontwikkeling
description:
published: true
date: 2020-04-28T21:01:01.004Z
tags:
---

> Alle presences worden hier bewaard: https://github.com/PreMiD/Presences 
> 
> {.is-info}

Versie `2.x` introduceert de [presence winkel](https://premid.app/store). Gebruikers kunnen nu handmatig hun favoriete presences toevoegen en verwijderen via de gebruikersinterface op de [website](https://premid.app/).

# Richtlijnen
> If you do **NOT** follow the guidelines, a `Presence Verifier` will request the proper changes, or will have to close it under certain circumstances. 
> 
> {.is-warning}

> When you make pull requests about adding or modifying existing Presences, you **MUST** include a screenshot. However, modifications to a Presence's `metadata.json` or `tsconfig.json` files do **NOT** require a screenshot. _Your screenshot **MUST** be directly uploaded to GitHub with the pull request, do **NOT** use third-party image sharing sites._ 
> 
> {.is-warning}

When publishing Presences to this GitHub, we require you to follow a set of guidelines. Voor sommigen lijken deze strenge regels misschien zwaar. However, the implementation of these rulesets will keep us and the users from running into any issues.

## Aanmaak
> De code die u schrijft moet *goed geschreven* zijn en MOET *leesbaar* zijn. `DeepScan` op GitHub zal problemen met de kwaliteit van de code melden aan het `Presence Verification Team`. We raden je aan dat je vork up to date is wanneer je pull-aanvragen doet, dit zal helpen valse positieve punten te beperken. 
> 
> {.is-warning}

- De pull-aanvraag **MOET** compleet zijn, u moet een goede bestandsstructuur hebben, concepten zijn **NIET** toegestaan. Including the `presence.ts` file, `tsconfig.json` file ,`dist` folder, `presence.js` file, and `metadata.json` file, which is represented in the following example schema:
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

Houd de volgende lijst in gedachten voordat je begint met het maken van je presence.
- The Presence **MUST** be related to the site you have chosen.
- The Presence **MUST NOT** be of any illegal sites. Hieronder vallen stressers, drugs, kinderporno, etc.
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

## Wijzigen
> You MUST change the version in the **metadata** to be a higher value from previous version when making changes to either the **presence.ts**/**presence.js** or **metadata.json**. 
> 
> {.is-warning}

In some situations, Presences may behave unexpectedly or could use some minor changes to improve their functionality. Here is a compiled list that you **MUST** follow to modify Presences.

- You are **NOT** allowed to rewrite a Presence or change its author. If the Presence author was banned from the official server or hasn't made the required changes in seven days, you may contact a `Presence Verifier` to see if you can to rewrite the Presence of your choice.
- Anyone may provide hotfixes to fix bugs; however, try **NOT** to make changes to code that does **NOT** need to be fixed. Valid modifications are, but **NOT** limited to, _missing paths_, _typos_, _missing images_, etc.
- If you make modifications to a Presence and change at least a **QUARTER** of the Presence's codebase, you are allowed to add yourself as a contributor. Neem contact op met een `Presence Verifier` voor meer informatie over dit onderwerp.
- Zorg dat de wijzigingen nuttig zijn. These may include fixes (code and typos), additions (descriptions and tags), etc. Do **NOT** change images if they are not outdated and have a decent resolution.
- Bevestig dat jouw wijzigingen werken voordat je het publiceert. Do **NOT** create pull requests without knowing the outcome of your changes.
- Maintain the language the Presence author used when writing the Presence. For example, do **NOT** delete typescript files and use the javascript files instead.

# Verificatie

> Als je contact wilt opnemen met iemand, gebruik dan onze officiële Discord server. All `Presence Verifiers` will have a unique role in their profile.

For your Presence to reach the stores, it **MUST** go through a process on GitHub to confirm that it works as expected. Hier zijn een paar dingen om uit te kijken wanneer je je pull-aanvraag maakt.

1. It takes two verifiers to confirm that your Presence is up to standards. If you happen to get change requests, make the proper effort to fix it, or it will **NOT** be added.
2. Als wij wijzigingen aanvragen en als jouw pull-aanvraag meer dan **7 dagen inactief is** zonder de benodigde wijzigingen te maken, zullen we het sluiten.
3. Je mag screenshots maken van wijzigingen die gemaakt zijn met behulp van een andere gebruiker, en je mag screenshots bij elkaar plakken. (e.g., its author in case you can't access it for any reason).
4. If it is an update or patch, the screenshot **MUST** show the new additions working, **NOT** any old features from previous pull requests.
5. The provided screenshots should be real, **NOT** edited.
6. Alle toegevoegde code die samengevoegd wordt met deze repository zal gelicentieerd worden onder de **Mozilla Public License 2.0**.
7. Presences for free domains or hosts (e.g., .TK, [all free Freenom domains], .RF.GD, etc) are **NOT** allowed at all, exceptions can be made if a proof is presented showing that they paid for the domain.
8. The `smallImageKey` and `smallImageText` fields are intended to provide additional/secondary context (such as "playing"/"paused" for video sites, "browsing" for regular sites, and other cases) not to promote Discord profiles or anything unrelated to PreMiD.
9. The requirements for logos are 1:1 (Square) in 512px, thumbnails, however, should either be [wide promotional cards](https://i.imgur.com/3QfIc5v.jpg) or simply [screenshots](https://i.imgur.com/OAcBmwW.png) if the first is **NOT** available.
10. Presences should at least have one tag. Tags must **NOT** include any spaces, slashes, single/double quotation marks, Unicode characters, and should always be lowercase.
11. The `url` field **MUST NOT** include `http://` or `https://`, neither the parameters (e.g. a Presence for `https://www.google.com/search?gws_rd=ssl` will only have `www.google.com` in the `url` field).
12. Descriptions and tags should always be in an array, even when it's only one element. Het `url` veld, mag echter alleen een string zijn als het één domein is.
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

## Installatie
1. Installeer [Git](https://git-scm.com/).
2. Installeer [Node](https://nodejs.org/en/) (komt met [npm](https://www.npmjs.com/)).
3. Installeer [TypeScript](https://www.typescriptlang.org/index.html#download-links) (open een terminal en `npm install -g typescript`).

## Het project klonen
1. Open een terminal en typ `git clone https://github.com/PreMiD/Presences`.
2. Kies een map van je keuze.
3. Open het in de code editor.

## Mappen en bestanden maken

1. Maak een map met de **naam** (niet een URL) van de service die je wilt ondersteunen.
2. Maak een `presence.ts` en een `tsconfig.json` bestand in de map.
3. Maak een map met de naam `dist` in de map.
4. Maak een `metadata.json` bestand in de `dist` map.

## Het tsconfig.json bestand invullen
Plaats de volgende code in het `tsconfig.json` bestand.
```javascript
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
}
```
Om meer te leren over TypeScript configuratie, klik [hier](/dev/presence/tsconfig).

## Het metadata.json bestand invullen
We hebben een `metadata.json` bestandsmaker gemaakt voor de luie mensen [hier](https://eggsy.codes/projects/premid/mdcreator). Het wordt nog steeds aangeraden dit door te lezen, zodat u weet hoe het werkt.

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

Kopieer de bovenstaande code en plaats deze in het `metadata.json` bestand. U moet nu de waarden van de eigenschappen bewerken. Houd er rekening mee dat de volgende eigenschappen optioneel in uw `metadata.json` bestand staan, als u niet van plan bent om ze te gebruiken, dan moet u ze verwijderen.
- `contributors`
- `regExp`
- `iframe`
- `iFrameRegExp`
- `settings`

**Bepaalde voorinstellingen van waarden verduidelijken:**
<table>
  <thead>
    <tr>
      <th style="text-align:left">Variabele</th>
      <th style="text-align:left">Beschrijving</th>
      <th style="text-align:left">Type</th>
      <th style="text-align:left">Optioneel</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>author</b>
      </td>
      <td style="text-align:left">Moet een object bevatten met <code>naam</code> en <code>id</code> van de presence-ontwikkelaar. Naam is je Discord gebruikersnaam zonder identificatie(#0000). Gebruiker <code>id</code> kan worden gekopieerd van Discord door de ontwikkelaar
        modus in te schakelen en de rechtermuisknop op je profiel te klikken.</td>
      <td style="text-align:left"><code>Object</code>
      </td>
      <td style="text-align:left"><code>Nee</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>contributors</b>
      </td>
      <td style="text-align:left">Moet een object bevatten met <code>naam</code> en <code>id</code> van de presence-ontwikkelaar. Naam is je Discord gebruikersnaam zonder identificatie(#0000). Gebruiker <code>id</code> kan worden gekopieerd van Discord door de ontwikkelaar
        modus in te schakelen en de rechtermuisknop op je profiel te klikken.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>Ja</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>service</b>
      </td>
      <td style="text-align:left">De titel van de dienst die door deze presence wordt ondersteund. <br>(Naam is dezelfde als de map waar alles in zit)</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Nee</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>description</b>
      </td>
      <td style="text-align:left">Kleine beschrijving van de presence, je kunt de beschrijving van de dienst
        gebruiken als je geen ideeën hebt. Je beschrijving moet key waarden bevatten die de taal en de beschrijving in die specifieke taal aangeven. Maak beschrijvingen met de talen <i>die u kent</i>, onze vertalers zullen wijzigingen aanbrengen in uw metadata bestand.</td>
      <td style="text-align:left"><code>Object</code>
      </td>
      <td style="text-align:left"><code>Nee</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b>
      </td>
      <td style="text-align:left">URL van de service.<br><b>Bijvoorbeeld:</b><code>vk.com</code><br>
        <b>Deze URL moet de URL van de website zijn, aangezien dit er voor zorgt of de script word ingeladen of niet.</b><br> Voeg <b>NIET</b> <code>https://</code> of <code>http://</code> toe in de URL, ook niet een slash aan het einde:
<code>https://premid.app/</code> -> <code>premid.app</code><br>
<b>Opmerking</b>: Sommige URLs hebben <code>www.</code> of iets anders voor hun domain naam. Vergeet <b>NIET</b> toe te voegen!<br>
U kunt meerdere URL's toevoegen door het volgende te doen:<br>
<code>["URL1", "URL2", "ETC.]</code><br>
U kunt regExp ook bekend als Regex gebruiken voor deze taak, word hier onder verder uitgelegd.
      </td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code>
      </td>
      <td style="text-align:left"><code>Nee</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b>
      </td>
      <td style="text-align:left">Een reguliere expressie die word gebruikt om URLs te vergelijken.<br>
      regExp ook bekend als Regex, kan worden gebruikt als een website meerdere subdomeinen heeft.<br>
U kunt de volgende regExp daarvoor gebruiken:<br>
<code>([a-z0-9]+)[.]domain[.]TLD"</code><br>
TLD staat voor Top Level Domain bijvoorbeeld: .com .net<br> 
<code>([a-z0-9]+)</code> betekent alles van a tot z en van 0 tot 9.<br>
        Je kunt uw regExp testen bij <a href="https://regex101.com/">Regex101</a></td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Ja</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>version</b>
      </td>
      <td style="text-align:left">Versie van uw presence.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Nee</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>logo</b>
      </td>
      <td style="text-align:left">Link naar service&apos;s logo.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Nee</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b>
      </td>
      <td style="text-align:left">Link naar de thumbnail van de presence.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Nee</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>color</b>
      </td>
      <td style="text-align:left"><code>#HEX</code> waarde. We raden u aan een primaire kleur van de service
        te gebruiken die uw presence ondersteunt.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Nee</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>tags</b>
      </td>
      <td style="text-align:left">Array met tags, ze helpen gebruikers uw presence op de website te vinden.</td>
      <td
      style="text-align:left"><code>String, Array&lt;String&gt;</code>
        </td>
      <td style="text-align:left"><code>Nee</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>category</b>
      </td>
      <td style="text-align:left">Een tekst die wordt gebruikt om de categorie aan te geven waar de presence onder valt. Zie de geldige categories <a href="https://docs.premid.app/dev/presence/metadata#presence-categories">hier</a>.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Nee</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b>
      </td>
      <td style="text-align:left">Definieert of <code>iFrames</code> worden gebruikt</td>
      <td style="text-align:left"><code>Boolean</code>
      </td>
      <td style="text-align:left"><code>Ja</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b>
      </td>
      <td style="text-align:left">Een reguliere expressie string gebruiken om iFrames te vergelijken. Zie regExp voor meer informatie.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Ja</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>settings</b>
      </td>
      <td style="text-align:left">Een reeks instellingen die de gebruiker kan wijzigen.<br>
      Lees meer over de presence instellingen <a href="https://docs.premid.app/dev/presence/metadata#presence-settings">hier</a>.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>Ja</code>
      </td>
    </tr>
  </tbody>
</table>

We hebben een `metadata.json` bestandsmaker gemaakt voor de luie mensen [hier](https://eggsy.codes/projects/premid/mdcreator).

## Aan de slag

```javascript
var presence = new Presence({
    clientId: "000000000000000000" //De client ID van de Applicatie gemaakt op https://discordapp.com/developers/applications
}),

strings = presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
    //Je kan dit gebruiken om vertaalde teksten te krijgen
});

/*

function myOutsideHeavyLiftingFunction(){
    //Pak en verwerk alle informatie hier

    // element grabs //
    // api calls //
    // variable sets //
}

setInterval(10000, myOutsideHeavyLiftingFunction); 
//Laat de functie elke 10 seconden apart lopen van de UpdateData-event om de variabelen te krijgen en te zetten die UpdateData verkrijgt.

*/


presence.on("UpdateData", async () => {
    /*UpdateData is altijd aan het lopen, en moet daarom jouw refresh-cyclus zijn, of `tick`. Dit wordt waar mogelijk meerdere keren per seconden opgeroepen.

    Het is aanbevolen om een andere functie buiten deze event-functie te maken die de variabelen zult veranderen en al het zware werk zal doen als je informatie roept vanuit een API*/

    var presenceData = {
        largeImageKey: "key", /*De sleutel (bestandsnaam) van de Grote Afbeelding op de presence. Deze worden geüpload en genoemd in de Rich Presence sectie van jouw applicatie, genaamd Art Assets*/
        smallImageKey: "key", /*De sleutel (bestandsnaam) van de Kleine Afbeelding op de presence. Deze worden geüpload en genoemd in de Rich Presence sectie van jouw applicatie, genaamd Art Assets*/
        smallImageText: "Some hover text", //De tekst die wordt weergeven wanneer je eroverheen wijst
        details: "Browsing Page Name", //Het bovenste gedeelte van je presence
        state: "Reading section A", //Het onderste gedeelte van je presence
        startTimestamp: 1577232000, //De unix epoch-tijdstempel vanaf wanneer geteld moet worden
        endTimestamp: 1577151472000 //Als je Tijd Over wilt laten zien in plaats van Voorbij, dit is de unix epoch-tijdstempel wanneer de timer stopt
    }; /*Optioneel, je kan hier ook een largeImageKey zetten en de rest als variabele sub-eigenschappen veranderen, bijvoorbeeld presenceData.type = "blahblah"; type voorbeelden: details, state, etc.*/

    if (presenceData.details == null) {
        //Dit wordt gestart als je geen presence-details instelt.
        presence.setTrayTitle(); // Wist de tray-titel voor mac-gebruikers.
        presence.setActivity(); /*Werk de presence bij zonder data, het wordt dus gewist en de grote afbeelding wordt de Discord Applicatie icoon, en de tekst wordt de Discord Applicatie naam*/
    } else {
        //Dit wordt gestart als je wel presence-details hebt ingesteld.
        presence.setActivity(presenceData); //Werk de presence bij met alle waardes van het presenceData-object.
    }
});
```
Je kan dit kopiëren naar je `presence.ts` bestand en de waardes bewerken. Het instellen van alle waardes wordt gedaan binnen het updateData-event.

Voor voorbeelden raden we aan om naar de code van de presences van bijvoorbeeld 1337x of 9GAG te kijken.

Voor meer informatie over de Presence-klas klik [hier](/dev/presence/class).

## Kan bepaalde data niet krijgen?!

Veel websites gebruiken [iframes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([Inlineframes](https://en.wikipedia.org/wiki/HTML_element#Frames)). Deze html-tags kunnen meerdere bronnen bevatten, zoals video's. Maar ze zijn niet altijd relevant. Sommige zijn verborgen of worden niet vaak gebruikt. Controleer of je de informatie die je nodig hebt, kan verkrijgen zonder dat je onnodig werk doet.

1. Controleer ze met de console van je browser (zorg dat je op de **Elements**-tab zit).
2. Zoeken (<kbd>CTRL</kbd>+<kbd>F</kbd> (Windows) of <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
3. Voer `document.querySelectorAll("iframe")` uit.

Als je vindt dat je gegevens zich in iFrame bevinden, moet je het volgende doen:
1. Maak een `iframe.ts` bestand aan.
2. Stel iFrame in op `true` in uw metadata bestand.
3. Vul je iFrame bestand in.
```javascript
var iframe = new iFrame();
iframe.on("UpdateData", async () => {
  /*
  Haal alle gegevens op die je nodig hebt uit het iFrame om ze op te slaan in variabelen
  en verzend ze vervolgens via iframe.send
  */
  iframe.send({ //verstuur data
    video: video,
    tijd: video.duration
  }); 
});
```
4. Zorgen dat je presence-bestand data ontvangt vanuit het iFrame bestand.
```javascript
presence.on("iFrameData", data => {
  iFrameVideo = data.video;
  currentTime = data.time;
});
```
**Opmerking:** Dit moet buiten de updateData event worden geplaatst.
## Compileren
Open een console in je map en typ `tsc -w` om de `presence.ts` te compileren in de `/dist` map.

# Laden van de presence
1. Open de pop-up en houd de <kbd>Shift</kbd> knop op je toetsenbord in.
2. **Laad Presence** verschijnt in de Presences sectie.
3. Klik erop terwijl je nog steeds de <kbd>Shift</kbd> knop ingedrukt houdt.
4. Selecteer de map /dist van uw presence.

# Enkele nuttige dingen
## Hot-herladen
De website waar je mee bezig bent wordt automatisch herladen wanneer je een bestand in je map opslaat.

## Foutopsporing
- Je kunt `console.log("Test");` tussen je code zetten en kijken of je browserconsole je die uitvoer geeft. Zo ja, ga dan verder en probeer het opnieuw na de volgende functie. Zo niet, dan is er een fout hierboven.
- Als dat je ook niet helpt, vraag dan een presence-ontwikkelaar op onze [Discord-server](https://discord.gg/WvfVZ8T) voor hulp.

# Uitleg van bestanden
- [Presence Klasse](/dev/presence/class)
- [iFrame Klasse](/dev/presence/iframe)
- [Metadata bestand](/dev/presence/metadata)
- [TypeScript configuratie](/dev/presence/tsconfig)
{.links-list}
