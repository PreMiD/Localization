---
title: Presence Ontwikkeling
description:
published: true
date: 2020-01-18T20:32:30.306Z
tags:
---

> Alle presences worden hier bewaard: https://github.com/PreMiD/Presences 
> 
> {.is-info}

Versie `2.x` introduceert de [presence winkel](https://premid.app/store). Gebruikers kunnen nu handmatig hun favoriete presences toevoegen en verwijderen via de gebruikersinterface op de [website](https://premid.app/).

# Richtlijnen
> Als je niet voldoet aan alle richtlijnen zal jouw presence of pull-aanvraag verwijderd worden van de github. 
> 
> {.is-danger}

## Aanmaak

Houd de volgende lijst in gedachten voordat je begint met het maken van je presence.
- De pull-aanvraag moet compleet zijn, je moet een goede bestandenstructuur hebben. Inclusief de `dist` map het `presence.js` bestand, en het `metadata.json` bestand.
- De presence **moet** gerelateerd zijn aan de website die je hebt gekozen.
- De presence mag niet voor een illegale website zijn. Hieronder vallen stressers, drugs, kinderporno, etc...
- De presence metadata moet een goed beschreven inhoud hebben, inclusief geldige titels, en bescrijvingen.
- De media die je toevoegt (icoon/thumbnail) moet gerelateerd zijn aan de website en moet begrijpelijk zijn in termen van grootte en kwaliteit.
- De bestandsstructuur moet schoon en beheerd zijn, en mag geen willekeurige bestanden hebben die niks met de functie van de presence te maken hebben.
- De presence **mag geen** kwaadaardige bedoelingen hebben. Dit zijn onder andere het stelen/lekken van privéinformatie, het negatief beïnvloeden van het gedrag van de website, etc...
- Als je een presence maakt voor een website die later wordt geüpdatet, ben **JIJ** verantwoordelijk voor het updaten van de presence om het weer werkend te krijgen. Als je het niet repareert in een tijdperiode, mogen andere presence ontwikkelaard jouw presence **overschrijven** om aan de wijzigingen te voldoen.
- De presence moet getest zijn vóór het publiceren om te bevestigen dat alles werkt.
- Jouw presence moet sfw-afbeeldingen en -beschrijvingen hebben, ongeacht of het nsfw is of niet. Als jouw presence van een `nsfw` website is, voeg dan de `nsfw` tag toe aan je metadata.

## Wijzigen

In sommige situaties kunnen presences onverwacht gedrag vertonen of enkele kleine veranderingen gebruiken om de functionaliteit te verbeteren. Hier is een gecompileerde lijst van alles wat je moet volgen om presences te mogen wijzigen.
- Je mag niet de maker van de presence aanpassen. Dit is alleen van toepassing als je het mag herschrijven. Je mag jezelf toevoegen als een [bijdrager](/dev/presence/metadata).
- Zorg dat de wijzigingen nuttig zijn. Dit kunnen fixes (code en typos) zijn, toevoegingen (beschrijvingen en tags) zijn, etc...
- Bevestig dat jouw wijzigingen werken voordat je het publiceert. Maak geen pull-requests zonder dat je het resultaat van je wijzigingen kent.
- Rebrand/overschrijf niet een presence volledig, tenzij het is toegestaan door een `Presence Verifier` of een staff-lid.

# Bevestiging
> Wanneer je een pull-aanvraag over het toevoegen of aanpassen van bestaande presences maakt, moet je een schermafbeelding toevoegen. Wijzigingen aan de metadata/tsconfig van een presence hebben echter geen schermafbeelding nodig. *Je schermafbeelding moet direct worden geüpload naar github met de pull-aanvraag, gebruik geen websites van derden voor het delen van afbeeldingen.* 
> 
> {.is-danger}

Om te zorgen dat jouw presence in de winkel komt, moet het foor een proces op github gaan om te bevestigen dat het werkt zoals verwacht. Hier zijn een paar dingen om uit te kijken wanneer je je pull-aanvraag maakt.

Ons presence-verificatieteam heeft zijn eigen rol, kijk uit voor `Presence Verigier` op de discord server om te weten wie betrokken is.

1. Er zijn twee verificateurs nodig om te bevestigen dat je presence voldoet aan de normen. Als je wijzigingsaanvragen krijgt, zorg dan dat je de juiste wijzigingen maakt, of het zal niet toegevoegd worden.
2. Als wij wijzigingen aanvragen en als jouw pull-aanvraag meer dan **7 dagen inactief is** zonder de benodigde wijzigingen te maken, zullen we het sluiten.
3. Je mag schermafbeeldingen maken van wijzigingen die gemaakt zijn met de hulp van een andere gebruiker. (bijv. de auteur in het geval dat je het niet kan benaderen).
4. Als het een update of patch is, moet de schermafbeelding de nieuwe toevoegingen werkend laten zien, niet oude functies van eerdere pull-aanvragen.
5. De meegeleverde schermafbeeldingen moeten echt zijn, niet bewerkt.
6. Alle toegevoegde code die samengevoegd wordt met deze repository zal gelicentieerd worden onder de **Mozilla Public License 2.0**.


Nadat alle juiste beoordelingen zijn uitgevoerd, zal jouw pull-aanvraag worden samengevoegd met de winkel.

# Structuur (TypeScript)
Je kan kiezen of je je Presence wilt coderen met [JavaScript](https://www.javascript.com/) of [TypeScript](https://www.typescriptlang.org/). [TypeScript](https://www.typescriptlang.org/) heeft een paar extra fijna type definities, dus het oplossen en vinden van bugs is veel eenvoudiger. Als je [JavaScript](https://www.javascript.com/) wilt gebruiken, kan je meteen naar [Structuur (JavaScript)](/dev/presence#structure-javascript).

## Installatie
1. Install [Git](https://git-scm.com/).
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

Klik [hier](/dev/presence#filling-in-the-metadatajson-file-2) om te zien hoe je het moet invullen. Je kan onder de uitleg gemakkelijk terugkomen.

We hebben een `metadata.json` bestandsmaker gemaakt voor de luie mensen [hier](https://eggsy.codes/projects/premid/mdcreator).

## Aan de slag

```javascript
var presence = new Presence({
    clientId: "000000000000000000", //De client ID van de Applicatie gemaakt op https://discordapp.com/developers/applications
    mediaKeys: false //Schakel het gebruik van mediaknoppen in
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
        smallImageKey: "key", /*De sleutel (bestandsnaam) van de Kleine Afbeelding op de presence. These are uploaded and named in the Rich Presence section of your application, called Art Assets*/
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

## Can't get certain data?!

A lot of websites are using [iframes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([Inlineframes](https://en.wikipedia.org/wiki/HTML_element#Frames)). These html tags can contain multiple sources such as videos. But they're not relevant every time. Some are hidden or just not actively used. Check if you can extract, the information you need, without them before you do unnecessary work.

1. Check for them by browser console (be sure that you are on the **Elements** tab).
2. Search (<kbd>Strg</kbd>+<kbd>F</kbd> (Windows) or <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
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
## Compiling
Open a console in your folder and type `tsc -w` to compile the `presence.ts` into the `/dist` folder.

# Structure (JavaScript)
## Het project klonen
1. Install [Git](https://git-scm.com/).
2. Open een terminal en typ `git clone https://github.com/PreMiD/Presences`.
3. Kies een map van je keuze.
4. Open het in de code editor.

## Mappen en bestanden maken

1. Maak een map met de **naam** (niet een URL) van de service die je wilt ondersteunen.
3. Maak een map met de naam `dist` in de map.
4. Create a `metadata.json` file and a `presence.js` file inside the `dist` folder.

## Het metadata.json bestand invullen

Klik [hier](/dev/presence#filling-in-the-metadatajson-file-2) om te zien hoe je het moet invullen. Je kan onder de uitleg gemakkelijk terugkomen.

We hebben een `metadata.json` bestandsmaker gemaakt voor de luie mensen [hier](https://eggsy.codes/projects/premid/mdcreator).

## Aan de slag

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
    //UpdateData is always firing, and therefore should be used as your refresh cycle, or `tick`. Dit wordt waar mogelijk meerdere keren per seconden opgeroepen.

    //It is recommended to set up another function outside of this event function which will change variable values and do the heavy lifting if you call data from an API.

    var presenceData = {
        largeImageKey: "key", /*The key (file name) of the Large Image on the presence. Deze worden geüpload en genoemd in de Rich Presence sectie van jouw applicatie, genaamd Art Assets*/
        smallImageKey: "key", /*De sleutel (bestandsnaam) van de Kleine Afbeelding op de presence. These are uploaded and named in the Rich Presence section of your application, called Art Assets*/
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

## Can't get certain data?!

A lot of websites are using [iframes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([Inlineframes](https://en.wikipedia.org/wiki/HTML_element#Frames)). These html tags can contain multiple sources such as videos. But they're not relevant every time. Some are hidden or just not actively used. Check if you can extract, the information you need, without them before you do unnecessary work.

1. Check for them by browser console (be sure that you are on the **Elements** tab).
2. Search (<kbd>Strg</kbd>+<kbd>F</kbd> (Windows) or <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
3. Execute `document.querySelectorAll("iframe")`.

If you find that your data is in a iFrame you need to do the following:
1. Create a `iframe.js` file.
2. Set iFrame to `true` in your metadata file.
3. Filling in your iFrame file.
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
4. Making your presence file receive data from the iFrame file.
```javascript
presence.on("iFrameData", data => {
  iFrameVideo = data.video;
  currentTime = data.time;
});
```
**Note:** This needs to be placed outside of the updateData event.
# Het metadata.json bestand invullen
We hebben een `metadata.json` bestandsmaker gemaakt voor de luie mensen [hier](https://eggsy.codes/projects/premid/mdcreator). It's still suggested to read this through so you know how it works.

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
- `contributors`
- `regExp`
- `iframe`
- `iFrameRegExp`

**Clarifying some value presets:**
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
      <td style="text-align:left">De titel van de dienst die door deze presence wordt ondersteund. <br>(Must be the same name as the folder where everything is in)</td>
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
      <td style="text-align:left">URL of the service.<br><b>Example:</b><code>vk.com</code><br>
        <b>This URL must match the URL of the website as it will detect whether or not this is the website to inject the script to.</b><br> Do <b>NOT</b> add <code>https://</code> or <code>http://</code> inside of the URL nor a slash at the end:
<code>https://premid.app/</code> -> <code>premid.app</code><br>
<b>Note</b>: Some URLs may have <code>www.</code> or something else in front of their domain. Do <b>NOT</b> forget to add it!<br>
You can add multiple URLs by doing the following:<br>
<code>["URL1", "URL2", "ETC."]</code><br>
You could also use regExp also known as Regex for this task, explaned further below.
      </td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code>
      </td>
      <td style="text-align:left"><code>Nee</code>
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
      <td style="text-align:left">Een tekst die wordt gebruikt om de categorie aan te geven waar de presence onder valt. See the valid catergories <a href="https://docs.premid.app/dev/presence/metadata#presence-categories">here</a>.</td>
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
      <td style="text-align:left">Een reguliere expressie string gebruiken om iFrames te vergelijken. See regExp for more info.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Ja</code>
      </td>
    </tr>
  </tbody>
</table>

Click [here](/dev/presence#filling-in-the-metadatajson-file) to go back to the TypeScript explanation. Click [here](/dev/presence#filling-in-the-metadatajson-file-1) to go back to the JavaScript explanation.

# Loading the presence
1. Open the popup and hold the <kbd>Shift</kbd> button on your keyboard.
2. **Load Presence** will appear in the Presences section.
3. Click on it while you are still holding the <kbd>Shift</kbd> button.
4. Select the /dist folder of your presence.

# Some helpful things
## Hot-reloading
The website you are developing on is automatically reloading every time you save a file in your folder.

## Debugging
- You can put `console.log("Test");` between your code and see if your browser console gives you that output. If yes then go on and try again after the next function. If not then there is an error above.
- If that doesn't help you either then ask a presence developer on our [Discord server](https://discord.gg/PreMiD) for help.

# Files explained
- [Presence Klasse](/dev/presence/class)
- [iFrame Klasse](/dev/presence/iframe)
- [Metadata File](/dev/presence/metadata)
- [TypeScript configuratie](/dev/presence/tsconfig)
{.links-list}