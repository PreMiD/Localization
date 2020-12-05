---
title: Presence Ontwikkeling
description:
published: true
date: 2020-12-04T23:19:52.876Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:02.843Z
---

> Alle presences worden hier bewaard: https://github.com/PreMiD/Presences 
> 
> {.is-info}

Versie `2.x` introduceert de [presence winkel](https://premid.app/store). Gebruikers kunnen nu handmatig hun favoriete presences toevoegen en verwijderen via de gebruikersinterface op de [website](https://premid.app/).

> Voordat u aan de slag gaat, is het zeer aan te raden om onze presence richtlijnen te bekijken. 
> 
> {.is-warning}

- [Richtlijnen](https://docs.premid.app/en/dev/presence/guidelines)
{.links-list}

# Structuur
Alle presences zijn gecodeerd in [TypeScript](https://www.typescriptlang.org/). [TypeScript](https://www.typescriptlang.org/) heeft een paar extra type definities, dus het oplossen en vinden van bugs is veel eenvoudiger.

## Installatie
1. Installeer [Git](https://git-scm.com/).
2. Installeer [Node](https://nodejs.org/en/) (komt met [npm](https://www.npmjs.com/)).
3. Installeer [TypeScript](https://www.typescriptlang.org/index.html#download-links) (open een terminal en `npm install -g typescript`).

## Het project klonen
1. Open een terminal en typ `git clone https://github.com/PreMiD/Presences`.
2. Kies een map van je keuze.
3. Open het in uw code editor.

## Mappen en bestanden maken

1. Maak een map met de **naam** (niet een URL) van de service die je wilt ondersteunen.
2. Maak een `presence.ts` en een `tsconfig.json` bestand in de map.
3. Maak een map met de naam `dist` in de map.
4. Maak een `metadata.json` bestand in de `dist` map.

## Het tsconfig.json bestand invullen
Plaats de volgende code in het `tsconfig.json` bestand.
```javascript
{
  "extends": "../../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
}
```
Om meer te leren over TypeScript configuratie, klik [hier](/dev/presence/tsconfig).

## Het metadata.json bestand invullen
We hebben een `metadata.json` bestandsmaker gemaakt voor de luie mensen [hier](https://eggsy.xyz/projects/premid/mdcreator). Het wordt nog steeds aangeraden dit door te lezen, zodat u weet hoe het werkt.

```json
{
  "$schema": "https://schemas.premid.app/metadata/1.0",
  "author": {
    "name": "USER",
    "id": "ID"
  },
  "contributors": [{
    "name": "USER",
    "id": "ID"
  }],
  "service": "SERVICE",
  "altnames": ["SERVICE"],
  "description": {
    "en": "BESCHRIJVING"
  },
  "url": "URL",
  "version": "VERSIE",
  "logo": "URL",
  "thumbnail": "URL",
  "color": "#HEX000",
  "tags": ["TAG1", "TAG2"],
  "category": "CATEGORIE",
  "regExp": "REGEXP",
  "iFrameRegExp": "REGEXP",
  "iframe": false,
  "settings": [
        { 
            "id": "ID",
            "title": "DISPLAY TITEL",
            "icon": "FONTAWESOME GRATIS ICOON",
            "value": true
        },
        {
            "id": "ID",
            "if": {
                "ID": true
            },
            "title": "DISPLAY TITEL",
            "icon": "FONTAWESOME GRATIS ICOON",
            "value": "\"%song%\" by %artist%",
            "placeholder": "use %song% or %artist%"
        },
        {
            "id": "ID",
            "title": "DISPLAY TITEL",
            "icon": "FONTAWESOME GRATIS ICOON",
            "value": 0,
            "values": ["1", "2", "etc."]
        }
    ]
}
```

Kopieer de bovenstaande code en plaats deze in het `metadata.json` bestand. U moet nu de waarden van de eigenschappen bewerken. Houd er rekening mee dat de volgende eigenschappen optioneel in uw `metadata.json` bestand staan, als u niet van plan bent om ze te gebruiken, dan moet u ze verwijderen.
- `bijdragers`
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
      <td style="text-align:left"><b>bijdragers</b>
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
      <td style="text-align:left"><b>altnames</b>
      </td>
      <td style="text-align:left">Wees in staat om de presence te zoeken met een alternatieve naam. <br>Bedoeld voor presences met verschillende namen in verschillende talen (bijv. Pokémon en 포켓몬스몬).<br>Je kunt het ook gebruiken voor presences met speciale tekens, zodat je die niet hoeft te typen (bijv. Pokémon en Pokemon).
      </td>
      <td style="text-align:left"><code>Array&lt;String&gt;</code>
      </td>
      <td style="text-align:left"><code>Ja</code>
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
        Je kunt een handleiding video kijken <a href="https://youtu.be/sXQxhojSdZM">hier</a><br>
        Je kunt uw regExp testen bij <a href="https://regex101.com/">Regex101</a>
      </td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Ja</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>versie</b>
      </td>
      <td style="text-align:left">Je presence-versie.</td>
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

We hebben een `metadata.json` bestandsmaker gemaakt voor de luie mensen [hier](https://eggsy.xyz/projects/premid/mdcreator).

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

setInterval(myOutsideHeavyLiftingFunction, 10000); 
//Laat de functie elke 10 seconden apart lopen van de UpdateData-event om de variabelen te krijgen en te zetten die UpdateData verkrijgt.

*/


presence.on("UpdateData", async () => {
    /*UpdateData is altijd aan het lopen, en moet daarom jouw refresh-cyclus zijn, of `tick`. Dit wordt waar mogelijk meerdere keren per seconden opgeroepen.

    Het is aanbevolen om een andere functie buiten deze event-functie te maken die de variabelen zult veranderen en al het zware werk zal doen als je informatie roept vanuit een API*/

    var presenceData: presenceData = {
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
- Als dat je ook niet helpt, vraag dan een presence-ontwikkelaar op onze [Discord-server](https://discord.premid.app/) voor hulp.

# Uitleg van bestanden
- [Presence Klasse](/dev/presence/class)
- [iFrame Klasse](/dev/presence/iframe)
- [Metadata bestand](/dev/presence/metadata)
- [TypeScript configuratie](/dev/presence/tsconfig)
{.links-list}
