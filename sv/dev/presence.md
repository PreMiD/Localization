---
title: Presence Utveckling
description:
published: true
date: 2021-01-30T10:59:26.700Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:02.843Z
---

> Alla närvaron lagras nu här: https://github.com/PreMiD/Presences 
> 
> {.is-info}

Version `2.x` introducerar [närvarobutik](https://premid.app/store). Användare har nu möjlighet att manuellt lägga till och ta bort sina favoritnärvaron genom användargränssnittet på [webbplats](https://premid.app/).

> Innan du börjar rekommenderas det att du tittar på våra riktlinjer för presences. 
> 
> {.is-warning}

- [Riktlinjer](https://docs.premid.app/dev/presence/guidelines)
{.links-list}

# Struktur

All presences är kodade i [TypeScript](https://www.typescriptlang.org/). [TypeScript](https://www.typescriptlang.org/) har några extra kryddiga typdefinitioner över JavaScript, så fastställande och identifiering av buggar är mycket lättare.

## Installation

1. Installera [Git](https://git-scm.com/).
2. Installera [Node](https://nodejs.org/en/) (levereras med [npm](https://www.npmjs.com/)).
3. Installera [TypeScript](https://www.typescriptlang.org/index.html#download-links) (öppna en terminal och skriv `npm install -g typescript`).

## Kloning av projektet

1. Öppna en terminal och skriv `git clone https://github.com/PreMiD/Presences`.
2. Välj en valfri mapp.
3. Öppna den i din kodredigerare.

## Skapa mappar och filer

1. Gå in i mappen `websites` och gå sedan in i mappen med den första bokstaven i **namnet** (inte en URL) i tjänsten du vill stödja.
2. Skapa en mapp med **namnet** (inte en URL) för tjänsten du vill stödja.
3. Skapa en `presence.ts`- och en `tsconfig.json` -fil inuti.
4. Skapa en mapp som heter `dist` inuti.
5. Skapa en `metadata.json` -fil i mappen `dist`.

## Ifyllning av tsconfig.json-filen

Vänligen ange följande kod i `tsconfig.json` -filen.

```typescript
{
  "extends": "../../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
}
```

För att läsa mer om TypeScript-konfiguration, klicka [här](/dev/presence/tsconfig).

## Ifylling av metadata.json-filen

Vi har gjort en `metadata.json`-filskapare för lata männsikor [här](https://eggsy.xyz/projects/premid/mdcreator). Det rekommenderas fortfarande att du läser igenom detta så du vet hur det fungerar.

```json
{
  "$schema": "https://schemas.premid.app/metadata/1.3",
  "author": {
    "name": "ANVÄNDARNAMN",
    "id": "ID"
  },
  "contributors": [
    {
      "name": "ANVÄNDARNAMN",
      "id": "ID"
    }
  ],
  "service": "TJÄNST",
  "altnames": ["TJÄNST"],
  "description": {
    "en": "BESKRIVNING"
  },
  "url": "URL",
  "version": "VERSION",
  "logo": "URL",
  "thumbnail": "URL",
  "color": "#HEX000",
  "tags": ["TAGG1", "TAGG2"],
  "category": "KATEGORI",
  "regExp": "REGEXP",
  "iFrameRegExp": "REGEXP",
  "iframe": false,
  "readLogs": false,
  "settings": [
    {
      "id": "ID",
      "multiLanguage": true
    },
    {
      "id": "ID",
      "title": "VISNINGSTITEL",
      "icon": "FONTAWESOME-ICON",
      "value": true
    },
    {
      "id": "ID",
      "if": {
        "ID": true
      },
      "title": "VISNINGSTITEL",
      "icon": "FONTAWESOME-IKON",
      "value": "\"%song%\" av  %artist%",
      "placeholder": "använd %song% eller  %artist%"
    },
    {
      "id": "ID",
      "title": "VISNINGSTITEL",
      "icon": "FONTAWESOME-IKON",
      "value": 0,
      "values": ["1", "2", "etc."]
    }
  ]
}
```

Väligen kopiera koden ovan och lägg den i din `metadata.json` -fil. Du måste nu redigera värden för egenskaperna. Observera att följande egenskaper är valfria att ha i din `metadata.json`-fil, om du inte planerar att använda dem måste du ta bort dem.

- `contributors`
- `altnames`
- `regExp`
- `iframe`
- `iFrameRegExp`
- `readLogs`
- `settings`

**Förtydligande av vissa värde-förinställningar:**

<table>
  <thead>
    <tr>
      <th style="text-align:left">Variabel</th>
      <th style="text-align:left">Beskrivning</th>
      <th style="text-align:left">Typ</th>
      <th style="text-align:left">Valfri</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>author</b></td>
      <td style="text-align:left">Bör innehålla ett Objekt med <code>-namnet</code> och <code>id</code> för presence-utvecklaren. Namnet är ditt Discord-användarnamn utan identifieraren (#0000). <code>Användar-id</code> kan kopieras från Discord genom att aktivera utvecklarläget
        och högerklicka på din profil.</td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>Nej</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>contributors</b></td>
      <td style="text-align:left">Bör innehålla ett Objekt med <code>-namnet</code> och <code>id</code> för presence-utvecklaren. Namnet är ditt Discord-användarnamn utan identifieraren (#0000). <code>Användar-id</code> kan kopieras från Discord genom att aktivera utvecklarläget
        och högerklicka på din profil.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>Ja</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>service</b></td>
      <td style="text-align:left">Titeln på tjänsten som denna presence stöder.<br>
      (måste vara samma namn som mappen där allt är i)</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Nej</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>altnames</b></td>
      <td style="text-align:left">Möjligheten att söka för presencet med hjälp av ett annat namn.<br>
      Tänkt att användas för presences som har olika namn på olika språk (t.ex. Poke<unk> mon och <unk> <unk> <unk> <unk> <unk> <unk> <unk> <unk> <unk> <unk> <unk> <unk> <unk> <unk> <unk> ).<br>
      Du kan också använda den för presences som har specialtecken så att du inte behöver skriva in dessa (t.ex. Poke<unk> mon och Pokemon).</td>
      <td style="text-align:left"><code>Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Ja</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>description</b></td>
      <td style="text-align:left">Liten beskrivning av presencet, du kan använda beskrivningen av tjänsten om du inte har några idéer. Din beskrivning måste innehålla nyckelparvärden som anger språket och beskrivningen i det specifika språket. Gör beskrivningar med språk <i>som du känner till</i>, våra översättare kommer att göra ändringar i din metadatafil.</td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>Nej</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b></td>
      <td style="text-align:left">URL för tjänsten.<br><b>Exempel:</b><code>vk.com</code><br>
      <b>Denna URL måste matcha webbadressen till webbplatsen eftersom den kommer att upptäcka om detta är webbplatsen att injicera skriptet på.</b><br> Lägg <b>INTE</b> till <code>https://</code> eller <code>http://</code> i URL:en eller ett snedstreck i slutet:
      <code>https://premid.app/</code> -> <code>premid.app</code><br>
      <b>Obs</b>: Vissa webbadresser kan ha <code>www.</code> eller någonting annat framför sin domän. Glöm inte <b></b> att lägga till det!<br>
      Du kan lägga till flera webbadresser genom att göra följande:<br>
      <code>["URL1", "URL2", "ETC. ]</code><br>
      Du kan också använda regExp (även kända som Regex) för denna uppgift, förklaras vidare nedan.</td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Nej</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b></td>
      <td style="text-align:left">En regular expression som används för att matcha webbadresser.<br>
      regExp eller även känd som Regex, kan användas om en webbplats har flera underdomäner.<br>
      Du kan använda följande regExp för det:<br>
      <code>([a-z0-9]+)[.]domän[.]TLD"</code><br>
      TLD står för toppdomänen, till exempel: .com .net (men ange inte punkten).<br>
      <code>([a-z0-9]+)</code> betyder allt från a till z och från 0 till 9.<br>
      Du kan få en snabb start genom att titta på denna <a href="https://youtu.be/sXQxhojSdZM">video</a>.<br>
      Du kan testa din regExp på <a href="https://regex101.com/">Regex101</a>.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Ja</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>version</b></td>
      <td style="text-align:left">Version av din presence.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Nej</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>logo</b></td>
      <td style="text-align:left">Länk till tjänst&apos;s logotyp.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Nej</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b></td>
      <td style="text-align:left">Länka till din presence-miniatyrbild.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Nej</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>color</b></td>
      <td style="text-align:left"><code>#HEX</code>-värde. Vi rekommenderar att använd färgen på tjänsten
        som ditt presence stöder som primär färg.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Nej</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>tags</b></td>
      <td style="text-align:left">Array med taggar, de kommer att hjälpa användare att söka efter ditt presence på webbplatsen.</td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Nej</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>category</b></td>
      <td style="text-align:left">En sträng som används för att representera kategorin presencet faller inom. Se de giltiga katergorierna <a href="https://docs.premid.app/dev/presence/metadata#presence-categories">här</a>.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Nej</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b></td>
      <td style="text-align:left">Anger om <code>iFrames</code> används.</td>
      <td style="text-align:left"><code>Boolean</code></td>
      <td style="text-align:left"><code>Ja</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b></td>
      <td style="text-align:left">En regular expression som väljer iframes att injicera i. Se regExp för mer info.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Ja</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>readLogs</b></td>
      <td style="text-align:left">Bestämmer om tillägget ska läsa loggar.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Ja</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>settings</b></td>
      <td style="text-align:left">En array av inställningar som användaren kan ändra.<br>
      Läs mer om presence-inställningar <a href="https://docs.premid.app/dev/presence/metadata#presence-settings">här</a>.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>Ja</code></td>
    </tr>
  </tbody>
</table>

Vi har skapat en `metadata.json`-filskapare för lata männsikor [här](https://eggsy.xyz/projects/premid/mdcreator).

## Kom igång

```typescript
const presence = new Presence({
    clientId: "000000000000000000" //The client ID of the Application created at https://discordapp.com/developers/applications
  }),
  strings = presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
    //You can use this to get translated strings in their browser language
  });

/*

function myOutsideHeavyLiftingFunction(){
    //Grab and process all your data here

    // element grabs //
    // api calls //
    // variable sets //
}

setInterval(myOutsideHeavyLiftingFunction, 10000);
//Run the function separate from the UpdateData event every 10 seconds to get and set the variables which UpdateData picks up

*/

presence.on("UpdateData", async () => {
  /*UpdateData is always firing, and therefore should be used as your refresh cycle, or `tick`. This is called several times a second where possible.

    It is recommended to set up another function outside of this event function which will change variable values and do the heavy lifting if you call data from an API.*/

  const presenceData: PresenceData = {
    largeImageKey:
      "key" /*The key (file name) of the Large Image on the presence. These are uploaded and named in the Rich Presence section of your application, called Art Assets*/,
    smallImageKey:
      "key" /*The key (file name) of the Large Image on the presence. These are uploaded and named in the Rich Presence section of your application, called Art Assets*/,
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

For examples we suggest to look at the code of presences like: 1337x or 9GAG. For more information about the `Presence` class click [here](/dev/presence/class).

Since v2.2.0 there are now Slideshows, this allows you to show multiple `PresenceData` interfaces on an interval, for more information click about the `Slideshow` class [here](/dev/presence/slideshow).

## Can't get certain data?!

A lot of websites are using [iframes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([Inlineframes](https://en.wikipedia.org/wiki/HTML_element#Frames)). These html tags can contain multiple sources such as videos. But they're not relevant every time. Some are hidden or just not actively used. Check if you can extract, the information you need, without them before you do unnecessary work.

1. Check for them in your browsers console (be sure that you are on the **Elements** tab).
2. Search (<kbd>CTRL</kbd>+<kbd>F</kbd> (Windows) or <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
3. Execute `document.querySelectorAll("iframe")`.

If you find that your data is in a iFrame you need to do the following:

1. Create a `iframe.ts` file.
2. Set iFrame to `true` in your metadata file.
3. Filling in your iFrame file.

```typescript
const iframe = new iFrame();
iframe.on("UpdateData", async () => {
  /*
  Get all the data you need out of the iFrame save them in variables
  and then sent them using iframe.send
  */
  iframe.send({
    //sending data
    video: video,
    time: video.duration
  });
});
```

4. Making your presence file receive data from the iFrame file.

```typescript
presence.on("iFrameData", (data) => {
  iFrameVideo = data.video;
  currentTime = data.time;
});
```

**Note:** This needs to be placed outside of the updateData event.

## Compiling

Open a console in your folder and type `tsc -w` to compile the `presence.ts` into the `/dist` folder.

# Loading the presence

1. Open the extension popup in the browser and hold the <kbd>Shift</kbd> button on your keyboard.
2. **Load Presence** will appear in the Presences section.
3. Click on it while you are still holding the <kbd>Shift</kbd> button.
4. Select the /dist folder of your presence.

# Some helpful things

## Hot-reloading

The website you are developing on is automatically reloading every time you save a file in your folder.

## Debugging

- You can put `console.log("Test");` between your code and see if your browser console gives you that output. If yes then go on and try again after the next function. If not then there is an error above.
- If that doesn't help you either then ask a presence developer on our [Discord server](https://discord.premid.app/) for help.

# Files explained

- [Prensence Klass](/dev/presence/class)
- [Bildspelsklass](/dev/presence/slideshow)
- [iFrame Class](/dev/presence/iframe)
- [Metadata File](/dev/presence/metadata)
- [TypeScript Configuration](/dev/presence/tsconfig ""){.links-list}
