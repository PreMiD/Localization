---
title: Développement de la présence
description:
published: vrai
date: 2020-03-05T03:52:35.531Z
tags:
---

> Toutes les présences sont maintenant stockées ici : https://github.com/PreMiD/Presences 
> 
> {.is-info}

La version `2.x` introduit le [magasin de présence](https://premid.app/store). Les utilisateurs ont maintenant la possibilité d'ajouter et de supprimer manuellement leurs présences favorites via l'interface utilisateur du [site web](https://premid.app/).

# Lignes directrices
> If you do not follow all of the guidelines, a `Presence Verifier` will request the proper changes or your pull request may even be closed under certain circumstances. 
> 
> {.is-warning}

> When you make pull requests about adding or modifying existing presences, you **MUST** include a screenshot. However, modifications to a presence's `metadata.json` or `tsconfig.json` files do not require a screenshot. *Your screenshot MUST be uploaded directly to GitHub with the pull request, do not use third-party image sharing websites.* 
> 
> {.is-warning}

When publishing presences to this GitHub, we require you to follow a set of guidelines. To some, these strict rules may seem harsh. However, the implementation of these rulesets will keep our servers from running into any issues.

## Création
> The code you write MUST be *well-written* and MUST be *readable*. `DeepScan` on GitHub will report code quality issues to the `Presence Verification Team`. We recommend that your fork is up to date when you make pull requests, it will help limit false positives. 
> 
> {.is-warning}

- The pull request **MUST** be complete, you need to have a proper file structure, drafts are **NOT** allowed. Including the `dist` folder, `presence.js` file, and `metadata.json` file, which is represented in the following example schema:
```bash
presence
└── dist
    ├── metadata.json
    └── presence.js
```
or if you're using TypeScript and `iframe` (the max you could reach) :
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

Before you begin working on your presence, keep the following list in mind.
- The presence **MUST** be related to the website you have chosen.
- The presence **MUST NOT** be of any illegal websites. These include stressors, drugs, child porn, etc...
- The presence metadata **MUST** have well-written content, including valid titles, and descriptions.
- The media you include (icon/thumbnail) **MUST** be related to the website and should be understandable in terms of size and quality.
- The file structure **MUST** be clean and managed, do not have random files that provide nothing to the presence's function.
- The presence **MUST NOT** have any malicious intentions. These include stealing/leaking private information, negatively affecting the behavior of the website, etc...
- If you design a presence for a website and the website happens to change in the future, you **ARE** responsible for updating the presence again to work as expected. If you do not fix it within 7 days, other presence developers are allowed to **OVERWRITE** your presence to comply with the changes.
- The presence **MUST** be tested before publishing to confirm that everything works as expected.
- Your presence **MUST** have SFW images and descriptions regardless if it is NSFW or not. If your presence is about an NSFW website, please add the `nsfw` tag to your metadata.
- Your presence **CANNOT** manipulate local storage on the browser.
- Your presence may use cookies to store data. All data stored by the presence should be prefixed with `pmd_`.

## Modifications
> You MUST change the version in the **metadata** to be a higher value from previous version when making changes to either the **presence.js** or **metadata.json**. 
> 
> {.is-warning}

In some situations, presences may behave unexpectedly or could use some minor changes to improve its functionality. Here is a compiled list that you **MUST** follow to modify presences.
- You are not allowed rewrite a presence or change it's author. If the presence author was banned from the official server or hasn't made required changes in a 7 day period, you may contact a PreMiD `Presence Verifier` to see if you are applicable to rewrite the presence of choice.
- If you make modifications to a presence and change at least a **QUARTER** of the presence's codebase, you are allowed to add yourself as a contributor. Contact a `Presence Verifier` for more information about this subject.
- Make sure the modifications are useful. These may include fixes (code and typos),  additions (descriptions and tags), etc... Do not change images if they are not outdated and have a decent resolution.
- Confirm that your changes work before publishing. Do not create pull requests without knowing the outcome of your changes.

# Vérification

> If you need to contact someone, please use our official Discord server. All `Presence Verifiers` will have a unique role on their profile.

For your presence to reach the stores, it MUST go through a process on GitHub to confirm that it works as expected. These are a few things to look out for when making your pull request.

1. Il faut deux vérificateurs pour confirmer que votre présence est à la hauteur. Si vous obtenez des demandes de modification, faites le bon effort pour le corriger ou il ne sera pas ajouté.
2. If we request changes and your pull request exceeds **7 days of inactivity** without making the necessary ones, we'll be forced to close it.
3. You are allowed to take screenshots of changes made with the help of another user, and you are allowed to stitch screenshots for viewing pleasure. (par exemple son auteur au cas où vous ne pouvez pas y accéder pour une raison quelconque).
4. If it is an update or patch, the screenshot **MUST** show the new additions working, not any old features from previous pull requests.
5. Les captures d'écran fournies doivent être réelles et non modifiées.
6. Tout code contribué qui sera fusionné dans ce dépôt sera sous la licence **Mozilla Public License 2.0**.
7. Presences for free domains or hosts (e.g. .TK, [all free Freenom domains], .RF.GD, etc...) are **NOT** allowed at all, exceptions can be made if a proof is presented showing that they paid for the domain.
8. The `smallImageKey` and `smallImageText` fields are intended to provide additional/secondary context (such as "playing"/"paused" for video sites, "browsing" for regular sites and other cases) not to promote Discord profiles or anything unrelated to PreMiD.
9. The requirements for logos are 1:1 (Square) in 512px, thumbnails, however, should either be [wide promotional cards](https://i.imgur.com/3QfIc5v.jpg) or simply [screenshots](https://i.imgur.com/OAcBmwW.png) if the first is not available.
10. Presences should at least have 1 tag, this is a requirement by design and may be optional in the future.
11. The `url` field **MUST NOT** include `http://` or `https://`, neither the parameters (e.g. a presence for `https://www.google.com/search?gws_rd=ssl` will only have `www.google.com` in the `url` field).
12. Descriptions and tags should always be in arrays, even when it's only one element. The `url` field, however, should only be a string if it's one domain.
13. Unstable sites that constantly change APIs/domains, randomize HTML elements or just still being in heavy development are not allowed and will be removed from the store.

After all of the proper reviews have been met, your pull request will be merged with the store.

# Structure (TypeScript)
You can choose if you want to code your Presence with [JavaScript](https://www.javascript.com/) or  [TypeScript](https://www.typescriptlang.org/). [TypeScript](https://www.typescriptlang.org/) has some extra spicy type definitions, so fixing and identifying bugs is way easier. If you just want to use [JavaScript](https://www.javascript.com/) you can skip to [Structure (JavaScript)](/dev/presence#structure-javascript).

## Installation
1. Install [Git](https://git-scm.com/).
2. Installez [Node](https://nodejs.org/en/) (livré avec [npm](https://www.npmjs.com/)).
3. Installez [TypeScript](https://www.typescriptlang.org/index.html#download-links) (ouvrez un terminal et `npm installez -g typescript`).

## Dupliquer le projet
1. Ouvrez un terminal et tapez `git clone https://github.com/PreMiD/Presences`.
2. Choisissez un fichier de votre choix.
3. Ouvrez-le dans votre éditeur de code.

## Création de dossiers et de fichiers

1. Créez un dossier avec le nom **** (pas une URL) du service que vous voulez supporter.
2. Create a `presence.ts` and a `tsconfig.json` file inside.
3. Créer un dossier nommé `dist` à l'intérieur.
4. Créer un fichier `metadata.json` dans le dossier `dist`.

## Remplir le fichier tsconfig.json
Please put the following code inside of the `tsconfig.json` file.
```javascript
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
}
```
To learn more about TypeScript configuration click [here](/dev/presence/tsconfig).

## Remplir le fichier metadata.json

Click [here](/dev/presence#filling-in-the-metadatajson-file-2) to see how to fill it in. You will be able to easily click back at the bottom of the explanation.

We've made a `metadata.json` file creator for the lazy peeps [here](https://eggsy.codes/projects/premid/mdcreator).

## Commencer

```javascript
var presence = new Presence({
    clientId: "000000000000000000", //The client ID of the Application created at https://discordapp.com/developers/applications
    mediaKeys: false //Enable use and detection of media key presses
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

## Impossible d'obtenir certaines données?!

A lot of websites are using [iframes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([Inlineframes](https://en.wikipedia.org/wiki/HTML_element#Frames)). These html tags can contain multiple sources such as videos. But they're not relevant every time. Some are hidden or just not actively used. Check if you can extract, the information you need, without them before you do unnecessary work.

1. Vérifiez-les par console du navigateur (assurez-vous que vous êtes sur l’onglet **Éléments**).
2. Recherche (<kbd>CTRL</kbd>+<kbd>F</kbd> (Windows) ou <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
3. Exécutez `document.querySelectorAll("iframe")`.

If you find that your data is in a iFrame you need to do the following:
1. Créer un fichier `iframe.ts`.
2. Définissez iFrame à `true` dans votre fichier de métadonnées.
3. Remplir votre fichier iFrame
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
4. Faire en sorte que votre fichier de présence reçoive les données du fichier iFrame.
```javascript
presence.on("iFrameData", data => {
  iFrameVideo = data.video;
  currentTime = data.time;
});
```
**Note:** This needs to be placed outside of the updateData event.
## Compilation
Open a console in your folder and type `tsc -w` to compile the `presence.ts` into the `/dist` folder.

# Structure (JavaScript)
## Dupliquer le projet
1. Install [Git](https://git-scm.com/).
2. Ouvrez un terminal et tapez `git clone https://github.com/PreMiD/Presences`.
3. Choisissez un fichier de votre choix.
4. Ouvrez-le dans votre éditeur de code.

## Création de dossiers et de fichiers

1. Créez un dossier avec le nom **** (pas une URL) du service que vous voulez supporter.
3. Créer un dossier nommé `dist` à l'intérieur.
4. Créez un fichier `metadata.json` et un fichier `presence.js` à l'intérieur du dossier `dist`.

## Remplir le fichier metadata.json

Click [here](/dev/presence#filling-in-the-metadatajson-file-2) to see how to fill it in. You will be able to easily click back at the bottom of the explanation.

We've made a `metadata.json` file creator for the lazy peeps [here](https://eggsy.codes/projects/premid/mdcreator).

## Commencer

```javascript
var presence = new Presence({
    clientId: "000000000000000000", //The client ID of the Application created at https://discordapp.com/developers/applications
    mediaKeys: false //Enable use and detection of media key presses
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


presence.on("UpdateData", () => {
    //UpdateData is always firing, and therefore should be used as your refresh cycle, or `tick`. This is called several times a second where possible.

    //It is recommended to set up another function outside of this event function which will change variable values and do the heavy lifting if you call data from an API.

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
You can copy this into your `presence.js` file and edit the values. Setting all the values is done inside of the updataData event.

For examples we suggest to look at the code of presences like: 1337x or 9GAG.

For more information about the Presence class click [here](/dev/presence/class).

## Impossible d'obtenir certaines données?!

A lot of websites are using [iframes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([Inlineframes](https://en.wikipedia.org/wiki/HTML_element#Frames)). These html tags can contain multiple sources such as videos. But they're not relevant every time. Some are hidden or just not actively used. Check if you can extract, the information you need, without them before you do unnecessary work.

1. Vérifiez-les par console du navigateur (assurez-vous que vous êtes sur l’onglet **Éléments**).
2. Recherche (<kbd>CTRL</kbd>+<kbd>F</kbd> (Windows) ou <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
3. Exécutez `document.querySelectorAll("iframe")`.

If you find that your data is in a iFrame you need to do the following:
1. Créer un fichier `iframe.js`.
2. Définissez iFrame à `true` dans votre fichier de métadonnées.
3. Remplir votre fichier iFrame
```javascript
var iframe = new iFrame();
iframe.on("UpdateData", () => {
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
4. Faire en sorte que votre fichier de présence reçoive les données du fichier iFrame.
```javascript
presence.on("iFrameData", data => {
  iFrameVideo = data.video;
  currentTime = data.time;
});
```
**Note:** This needs to be placed outside of the updateData event.
# Remplir le fichier metadata.json
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
  "tags": ["CATEGORY", "TAG"],
  "category": "CATEGORY",
  "regExp": "REGEXP",
  "iFrameRegExp": "REGEXP",
  "iframe": false
}
```

Please copy the code above and put it in your `metadata.json` file. You now need to edit values of the properties. Please note that the following properties are optional to have in your `metadata.json` file, if you do not plan on using them you need to remove them.
- `contributeurs`
- `regExp`
- `iframe`
- `iFrameRegExp`

**Clarifying some value presets:**
<table>
  <thead>
    <tr>
      <th style="text-align:left">Variable</th>
      <th style="text-align:left">Description</th>
      <th style="text-align:left">Type</th>
      <th style="text-align:left">Optionnel</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>auteur</b>
      </td>
      <td style="text-align:left">Doit contenir un objet avec le nom <code></code> et <code>id</code> du développeur de présence. Le nom est votre nom d'utilisateur Discord sans l'identifiant(#0000). L'utilisateur <code>id</code> peut être copié depuis Discord en activant le mode développeur
        et en faisant un clic droit sur votre profil.</td>
      <td style="text-align:left"><code>Objet</code>
      </td>
      <td style="text-align:left"><code>Non</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>contributeurs</b>
      </td>
      <td style="text-align:left">Doit contenir un objet avec le nom <code></code> et <code>id</code> du développeur de présence. Le nom est votre nom d'utilisateur Discord sans l'identifiant(#0000). L'utilisateur <code>id</code> peut être copié depuis Discord en activant le mode développeur
        et en faisant un clic droit sur votre profil.</td>
      <td style="text-align:left"><code>Tableau&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>Oui</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Service</b>
      </td>
      <td style="text-align:left">Le titre du service que cette présence supporte. <br>(Must be the same name as the folder where everything is in)</td>
      <td style="text-align:left"><code>Chaîne de caractères</code>
      </td>
      <td style="text-align:left"><code>Non</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>description</b>
      </td>
      <td style="text-align:left">Petite description de la présence, vous pouvez utiliser la description du service
        si vous n'avez pas d'idées. Votre description doit avoir des valeurs de paire de clés qui indiquent la langue, et la description dans cette langue spécifique. Faites des descriptions avec les langues <i>que vous connaissez</i>, nos traducteurs apporteront des modifications à votre fichier de métadonnées.</td>
      <td style="text-align:left"><code>Objet</code>
      </td>
      <td style="text-align:left"><code>Non</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Url</b>
      </td>
      <td style="text-align:left">URL of the service.<br><b>Example:</b><code>vk.com</code><br>
        <b>This URL must match the URL of the website as it will detect whether or not this is the website to inject the script to.</b><br> Do <b>NOT</b> add <code>https://</code> or <code>http://</code> inside of the URL nor a slash at the end:
<code>https://premid.app/</code> -> <code>premid.app</code><br>
<b>Note</b>: Some URLs may have <code>www.</code> or something else in front of their domain. Do <b>NOT</b> forget to add it!<br>
You can add multiple URLs by doing the following:<br>
<code>["URL1", "URL2", "ETC."]</code><br>
You could also use regExp also known as Regex for this task, explaned further below.
      </td>
      <td style="text-align:left"><code>Chaîne, Tableau&lt;String&gt;</code>
      </td>
      <td style="text-align:left"><code>Non</code>
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
      <td style="text-align:left"><code>Chaîne de caractères</code>
      </td>
      <td style="text-align:left"><code>Oui</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>version</b>
      </td>
      <td style="text-align:left">Version de votre présence.</td>
      <td style="text-align:left"><code>Chaîne de caractères</code>
      </td>
      <td style="text-align:left"><code>Non</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Logo</b>
      </td>
      <td style="text-align:left">Lien vers le logo du service&apos;s.</td>
      <td style="text-align:left"><code>Chaîne de caractères</code>
      </td>
      <td style="text-align:left"><code>Non</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b>
      </td>
      <td style="text-align:left">Lien vers votre miniature de présence.</td>
      <td style="text-align:left"><code>Chaîne de caractères</code>
      </td>
      <td style="text-align:left"><code>Non</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>couleur</b>
      </td>
      <td style="text-align:left"><code>valeur #HEX</code>. Nous vous recommandons d'utiliser une couleur primaire du service
        que votre présence supporte.</td>
      <td style="text-align:left"><code>Chaîne de caractères</code>
      </td>
      <td style="text-align:left"><code>Non</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>tags</b>
      </td>
      <td style="text-align:left">Tableau avec des tags, ils aideront les utilisateurs à rechercher votre présence sur le site Web.</td>
      <td
      style="text-align:left"><code>Chaîne, Tableau&lt;String&gt;</code>
        </td>
      <td style="text-align:left"><code>Non</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Catégorie</b>
      </td>
      <td style="text-align:left">Une chaîne utilisée pour représenter la catégorie sous laquelle tombe la présence. See the valid catergories <a href="https://docs.premid.app/dev/presence/metadata#presence-categories">here</a>.</td>
      <td style="text-align:left"><code>Chaîne de caractères</code>
      </td>
      <td style="text-align:left"><code>Non</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b>
      </td>
      <td style="text-align:left">Définit si <code>iFrames</code> sont utilisés</td>
      <td style="text-align:left"><code>Boolean</code>
      </td>
      <td style="text-align:left"><code>Oui</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b>
      </td>
      <td style="text-align:left">Un sélecteur d'expression régulière qui sélectionne les iframes à injecter. See regExp for more info.</td>
      <td style="text-align:left"><code>Chaîne de caractères</code>
      </td>
      <td style="text-align:left"><code>Oui</code>
      </td>
    </tr>
  </tbody>
</table>

Click [here](/dev/presence#filling-in-the-metadatajson-file) to go back to the TypeScript explanation. Click [here](/dev/presence#filling-in-the-metadatajson-file-1) to go back to the JavaScript explanation.

# Chargement de la présence
1. Ouvrez la popup et maintenez le bouton <kbd>Maj</kbd> sur votre clavier.
2. **Charger Presence** apparaîtra dans la section Presences.
3. Cliquez dessus alors que vous maintenez le bouton <kbd>Maj</kbd>.
4. Sélectionnez le dossier /dist de votre présence.

# Quelques choses utiles
## Rechargement chaud
The website you are developing on is automatically reloading every time you save a file in your folder.

## Débogage
- You can put `console.log("Test");` between your code and see if your browser console gives you that output. If yes then go on and try again after the next function. If not then there is an error above.
- If that doesn't help you either then ask a presence developer on our [Discord server](https://discord.gg/WvfVZ8T) for help.

# Fichiers expliqués
- [Classe de présence](/dev/presence/class)
- [Classe iFrame](/dev/presence/iframe)
- [Metadata File](/dev/presence/metadata)
- [Configuration TypeScript](/dev/presence/tsconfig)
{.links-list}