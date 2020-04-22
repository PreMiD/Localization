---
title: Presence Ontwikkeling
description:
published: true
date: 2020-04-22T18:39:49.395Z
tags:
---

> Alle presences worden hier bewaard: https://github.com/PreMiD/Presences 
> 
> {.is-info}

Versie `2.x` introduceert de [presence winkel](https://premid.app/store). Gebruikers kunnen nu handmatig hun favoriete presences toevoegen en verwijderen via de gebruikersinterface op de [website](https://premid.app/).

# Richtlijnen
> Als je niet alle richtlijnen volgt, zal een `Presence Verifier` je vragen de juiste wijzigingen te maken anders kan uw pull-aanvraag onder bepaalde omstandigheden worden afgesloten. 
> 
> {.is-warning}

> Wanneer je een pull-aanvraag over het toevoegen of aanpassen van bestaande presences maakt, **MOET** je een schermafbeelding toevoegen. Voor wijzigingen aan de `metadata.json` of `tsconfig.json` bestanden is echter geen schermafbeelding nodig. *Je schermafbeelding moet direct worden geüpload naar GitHub met de pull-aanvraag, gebruik geen websites van derden voor het delen van afbeeldingen.* 
> 
> {.is-warning}

Bij het publiceren van presences naar GitHub, vragen we je om een set richtlijnen te volgen. Voor sommigen lijken deze strenge regels misschien zwaar. De tenuitvoerlegging van deze regels zal er echter voor zorgen dat onze servers zich niet met problemen bezighouden.

## Aanmaak
> De code die u schrijft moet *goed geschreven* zijn en MOET *leesbaar* zijn. `DeepScan` op GitHub zal problemen met de kwaliteit van de code melden aan het `Presence Verification Team`. We raden je aan dat je vork up to date is wanneer je pull-aanvragen doet, dit zal helpen valse positieve punten te beperken. 
> 
> {.is-warning}

- De pull-aanvraag **MOET** compleet zijn, u moet een goede bestandsstructuur hebben, concepten zijn **NIET** toegestaan. Inclusief het `dist` map, `presence.js` bestand en `metadata.json` bestand, dat wordt weergegeven in het volgende voorbeeld schema:
```bash
presence
└── dist
    ├── metadata.json
    └── presence.js
```
of als je TypeScript en `iframe` gebruikt (de max die je zou kunnen bereiken) :
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
- De presence **moet** gerelateerd zijn aan de website die je hebt gekozen.
- De presence **MOET NIET** van illegale websites zijn. Hieronder vallen stressers, drugs, kinderporno, etc...
- De presence metadata **MOET** een goed beschreven inhoud hebben, inclusief geldige titels, en beschrijvingen.
- De media die je toevoegt (icoon/thumbnail) **MOET** gerelateerd zijn aan de website en moet begrijpelijk zijn in termen van grootte en kwaliteit.
- De bestandsstructuur **MOET** schoon en beheerd zijn, en mag geen willekeurige bestanden hebben die niks met de functie van de presence te maken hebben.
- De presence **MAG GEEN** kwaadaardige bedoelingen hebben. Dit zijn onder andere het stelen/lekken van privé-informatie, het negatief beïnvloeden van het gedrag van de website, etc...
- Als je een presence maakt voor een website die later wordt geüpdatet, ben **JIJ** verantwoordelijk voor het updaten van de presence om het weer werkend te krijgen. Als je het niet repareert binnen 7 dagen, mogen andere presence ontwikkelaars jouw presence **overschrijven** om aan de wijzigingen te voldoen.
- De presence **MOET** getest zijn vóór het publiceren om te bevestigen dat alles werkt.
- Uw presence **MOET** bestaan uit SFW-afbeeldingen en -beschrijvingen, ongeacht of het NSFW is of niet. Als jouw presence van een NSFW website is, voeg dan de `nsfw` tag toe aan je metadata.
- Uw presence**MAG NIET** de lokale opslag van de browser manipuleren.
- Uw presence kan gebruik maken van cookies om gegevens op te slaan. Alle gegevens die door de presence worden opgeslagen moeten worden voorafgegaan worden door `pmd_`.

## Wijzigen
> U MOET de versie in de **metadata** wijzigen om een hogere waarde te hebben van de vorige versie bij wijzigingen in de **presence.js** of **metadata.json**. 
> 
> {.is-warning}

In sommige situaties kunnen presences onverwacht gedrag vertonen of enkele kleine veranderingen gebruiken om de functionaliteit te verbeteren. Hier is een gecompileerde lijst die u **MOET** volgen om presences te wijzigen.
- Je mag geen presences herschrijven of de auteur wijzigen. Als de auteur van de presence is verbannen van de officiële server of geen wijzigingen heeft aangebracht in een periode van 7 dagen, dan kunt u contact opnemen met een PreMiD `Presence Verifier` om te zien of u van toepassing bent om de presence van keuze te herschrijven.
- Als je wijzigingen aanbrengt in de presence en ten minste een **KWART** van de presence code wijzigt mag je jezelf toevoegen als bijdrager. Neem contact op met een `Presence Verifier` voor meer informatie over dit onderwerp.
- Zorg dat de wijzigingen nuttig zijn. Dit kunnen fixes (code en typos) zijn, toevoegingen (beschrijvingen en tags) zijn, etc... Verander de beelden niet als ze niet verouderd zijn en een fatsoenlijke resolutie hebben.
- Bevestig dat jouw wijzigingen werken voordat je het publiceert. Maak geen pull-requests zonder dat je het resultaat van je wijzigingen kent.

# Verificatie

> Als je contact wilt opnemen met iemand, gebruik dan onze officiële Discord server. Alle `Presence Verifiers` zullen een unieke rol hebben op hun profiel.

Om te zorgen dat jouw presence in de winkel komt, moet het door een proces op GitHub gaan om te bevestigen dat het werkt zoals verwacht. Hier zijn een paar dingen om uit te kijken wanneer je je pull-aanvraag maakt.

1. Er zijn twee verificateurs nodig om te bevestigen dat je presence voldoet aan de normen. Als je wijzigingsaanvragen krijgt, zorg dan dat je de juiste wijzigingen maakt, of het zal niet toegevoegd worden.
2. Als wij wijzigingen aanvragen en als jouw pull-aanvraag meer dan **7 dagen inactief is** zonder de benodigde wijzigingen te maken, zullen we het sluiten.
3. Je mag screenshots maken van wijzigingen die gemaakt zijn met behulp van een andere gebruiker, en je mag screenshots bij elkaar plakken. (bijv. de auteur in het geval dat je het niet kan benaderen).
4. Als het een update of patch is, **MOET** de schermafbeelding de nieuwe toevoegingen werkend laten zien, niet oude functies van eerdere pull-aanvragen.
5. De meegeleverde schermafbeeldingen moeten echt zijn, niet bewerkt.
6. Alle toegevoegde code die samengevoegd wordt met deze repository zal gelicentieerd worden onder de **Mozilla Public License 2.0**.
7. Presences voor gratis domeinen of hosts (bijv. .TK, [alle gratis Freenom domeinen], .RF.GD, etc...) zijn **NIET** toegestaan, uitzonderingen kunnen worden gemaakt als een bewijs wordt gepresenteerd dat aantoont dat ze voor het domein hebben betaald.
8. De velden `smallImageKey` en `smallImageText` zijn bedoeld om extra / secundaire context te bieden (zoals "afspelen"/"gepauzeerd" voor videosites, "bladeren" voor reguliere sites) niet voor het adverteren van uw Discord profile of iets wat niet gerelateerd is aan PreMiD.
9. Vereisten voor logo's zijn 1:1 (vierkant) in 512px, thumbnails moeten echter [brede promotiekaartjes](https://i.imgur.com/3QfIc5v.jpg) zijn of [screenshots](https://i.imgur.com/OAcBmwW.png) als de eerste niet beschikbaar is.
10. Presences moeten ten minste 1 tag bevatten, dit is een vereiste volgens ontwerp en kan in de toekomst facultatief zijn.
11. Het `url` veld **MAG GEEN** `http://` of `https://`bevatten, ook de parameters niet (bijv. een presence voor `https://www.google.com/search?gws_rd=ssl` heeft alleen `www.google.com` in de `url` veld).
12. Omschrijvingen en tags moeten altijd in arrays staan, zelfs als het maar één element is. Het `url` veld, mag echter alleen een string zijn als het één domein is.
13. Onstabiele sites die voortdurend API/domeinen wijzigen HTML-elementen willekeurig maken of nog steeds in volle ontwikkeling zijn, zijn niet toegestaan en zullen worden verwijderd uit de winkel.

Nadat alle juiste beoordelingen zijn uitgevoerd, zal jouw pull-aanvraag worden samengevoegd met de winkel.

# Structuur (TypeScript)
Je kan kiezen of je je Presence wilt coderen met [JavaScript](https://www.javascript.com/) of [TypeScript](https://www.typescriptlang.org/). [TypeScript](https://www.typescriptlang.org/) heeft een paar extra type definities, dus het oplossen en vinden van bugs is veel eenvoudiger. Als je [JavaScript](https://www.javascript.com/) wilt gebruiken, kan je meteen naar [Structuur (JavaScript)](/dev/presence#structure-javascript) gaan.

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

Klik [hier](/dev/presence#filling-in-the-metadatajson-file-2) om te zien hoe je het moet invullen. Je kan onder de uitleg gemakkelijk terugkomen.

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

1. Check for them in your browsers console (be sure that you are on the **Elements** tab).
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

# Structuur (JavaScript)
## Het project klonen
1. Installeer [Git](https://git-scm.com/).
2. Open een terminal en typ `git clone https://github.com/PreMiD/Presences`.
3. Kies een map van je keuze.
4. Open het in de code editor.

## Mappen en bestanden maken

1. Maak een map met de **naam** (niet een URL) van de service die je wilt ondersteunen.
3. Maak een map met de naam `dist` in de map.
4. Maak een `metadata.json` bestand en een `presence.js` bestand in de `dist` map.

## Het metadata.json bestand invullen

Klik [hier](/dev/presence#filling-in-the-metadatajson-file-2) om te zien hoe je het moet invullen. Je kan onder de uitleg gemakkelijk terugkomen.

We hebben een `metadata.json` bestandsmaker gemaakt voor de luie mensen [hier](https://eggsy.codes/projects/premid/mdcreator).

## Aan de slag

```javascript
var presence = nieuwe Presence({
    clientId: "000000000000000000" //de client ID van de applicatie gemaakt op https://discordapp. om/ontwikkelaars/applicaties
}),

strings = presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
    //Krijg vertaalde strings
});

/*

functie myOutsideHeavyLiftingFunction(){
    //Pak en verwerk al je data hier

    // element grabs//
    // api calls//
    // variabele sets //
}

setInterval(10000, myOutsideHeavyLiftingFunction); 
/Uitvoeren van de functie los van de UpdateData-event elke 10 seconden om de variabelen te krijgen en in te stellen die de UpdateData ophaalt

*/


presence.on("UpdateData", () => {
    //UpdateData wordt altijd afgevuurd, en daarom moet je als je ververscyclus of `tick` gebruiken. Dit wordt waar mogelijk meerdere keren per seconden opgeroepen.

    //Het wordt aangeraden om een andere functie buiten dit event in te stellen die de variabele waarden zal veranderen en het zware werk zal doen als u gegevens uit een API opvraagt.

    var presenceData = {
        largeImageKey: "key", /*De sleutel (bestandsnaam) van de grote afbeelding op de presence. Deze worden geüpload en genoemd in de Rich Presence sectie van jouw applicatie, genaamd Art Assets*/
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
Je kan dit kopiëren naar je `presence.js` bestand en de waardes bewerken. Het instellen van alle waardes wordt gedaan binnen het updateData-event.

Voor voorbeelden raden we aan om naar de code van de presences van bijvoorbeeld 1337x of 9GAG te kijken.

Voor meer informatie over de Presence-klas klik [hier](/dev/presence/class).

## Kan bepaalde data niet krijgen?!

Veel websites gebruiken [iframes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([Inlineframes](https://en.wikipedia.org/wiki/HTML_element#Frames)). Deze html-tags kunnen meerdere bronnen bevatten, zoals video's. Maar ze zijn niet altijd relevant. Sommige zijn verborgen of worden niet vaak gebruikt. Controleer of je de informatie die je nodig hebt, kan verkrijgen zonder dat je onnodig werk doet.

1. Check for them in your browsers console (be sure that you are on the **Elements** tab).
2. Zoeken (<kbd>CTRL</kbd>+<kbd>F</kbd> (Windows) of <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
3. Voer `document.querySelectorAll("iframe")` uit.

Als je vindt dat je gegevens zich in iFrame bevinden, moet je het volgende doen:
1. Maak een `iframe.js` bestand aan.
2. Stel iFrame in op `true` in uw metadata bestand.
3. Vul je iFrame bestand in.
```javascript
var iframe = new iFrame();
iframe.on("UpdateData", () => {
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
# Het metadata.json bestand invullen
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
  "tags": ["CATEGORY", "TAG"],
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
            "value": "\"%song\" by %artist",
            "placeholder": "use %song or %artist"
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

Klik [hier](/dev/presence#filling-in-the-metadatajson-file) om terug te gaan naar de TypeScript uitleg. Klik [hier](/dev/presence#filling-in-the-metadatajson-file-1) om terug te gaan naar de JavaScript uitleg.

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
