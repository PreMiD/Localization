---
title: Presence-Entwicklung
description:
published: true
date: 2020-12-26T15:02:54.817Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:02.843Z
---

> Alle Presences werden jetzt hier gespeichert: https://github.com/PreMiD/Presences 
> 
> {.is-info}

Version `2.x` führt den [Presence Store](https://premid.app/store) ein. Benutzer haben jetzt die Möglichkeit, ihre Lieblingspräsenzen manuell über die Benutzeroberfläche der [Website](https://premid.app/) hinzuzufügen und zu entfernen.

> Bevor du anfängst, solltest du dir unsere Presencerichtlinien anschauen. 
> 
> {.is-warning}

- [Richtlinien](https://docs.premid.app/dev/presence/guidelines)
{.links-list}

# Struktur

Alle Presences sind in [TypeScript](https://www.typescriptlang.org/) geschrieben. [TypeScript](https://www.typescriptlang.org/) enthält einige besonders strenge Typdefinitionen, sodass das Beheben und Erkennen von Fehlern viel einfacher ist.

## Installation

1. Installiere [Git](https://git-scm.com/).
2. Installiere [Node](https://nodejs.org/en/) ([npm](https://www.npmjs.com/) integriert).
3. Installiere [TypeScript](https://www.typescriptlang.org/index.html#download-links) (öffne ein Terminal und `npm install -g typescript`).

## Klont Projekt

1. Öffne ein Terminal und gib `git clone https://github.com/PreMiD/Presences` ein.
2. Wähle einen Ordner Deiner Wahl.
3. Öffne es in Deinem Code-Editor.

## Ordner und Dateien werden erstellt

1. Gehe in den `Webseiten` Ordner und dann in den Ordner mit dem ersten Buchstaben des **name** (keine URL) des Dienstes, den du unterstützen willst.
2. Erstelle einen Ordner mit dem **Namen** (keine URL) des Dienstes, den Du unterstützen möchtest.
3. Erstelle eine `presence.ts` und eine `tsconfig.json` Datei im Inneren.
4. Erstelle einen Ordner mit dem Namen `dist`.
5. Erstelle eine `metadata.json` im Ordner `dist`.

## Ausfüllen der tsconfig.json

Bitte gib den folgenden Code in die Datei `tsconfig.json` ein.

```typescript
{
  "extends": "../../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
}
```

Um mehr über die TypeScript-Konfiguration zu erfahren, klicke [hier](/dev/presence/tsconfig).

## Ausfüllen der metadata.json

Wir haben eine `metadata.json`-Datei für die Lazy Peeps [hier](https://eggsy.xyz/projects/premid/mdcreator). Es wird immer noch empfohlen, dies durchzulesen, damit Du weißt, wie es funktioniert.

```json
{
  "$schema": "https://schemas.premid.app/metadata/1.3",
  "author": {
    "name": "USER",
    "id": "ID"
  },
  "contributors": [
    {
      "name": "USER",
      "id": "ID"
    }
  ],
  "service": "SERVICE",
  "altnames": ["SERVICE"],
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
  "readLogs": false,
  "settings": [
    {
      "id": "ID",
      "multiLanguage": true
    },
    {
      "id": "ID",
      "title": "DISPLAY TITLE",
      "icon": "FONTAWESOME ICON",
      "value": true
    },
    {
      "id": "ID",
      "if": {
        "ID": true
      },
      "title": "DISPLAY TITLE",
      "icon": "FONTAWESOME ICON",
      "value": "\"%song%\" by %artist%",
      "placeholder": "use %song% or %artist%"
    },
    {
      "id": "ID",
      "title": "DISPLAY TITLE",
      "icon": "FONTAWESOME ICON",
      "value": 0,
      "values": ["1", "2", "etc."]
    }
  ]
}
```

Bitte kopiere den obigen Code und füge ihn in Deine `metadata.json` ein. Du musst jetzt die Werte der Eigenschaften bearbeiten. Beachte, dass die folgenden Eigenschaften in Deiner `metadata.json` optional sind. Wenn Du sie nicht verwenden möchten, musst Du sie entfernen.

- `contributors`
- `altnames`
- `regExp`
- `iframe`
- `iFrameRegExp`
- `readLogs`
- `settings`

**Klarstellung einiger Wertvoreinstellungen:**

<table>
  <thead>
    <tr>
      <th style="text-align:left">Variable</th>
      <th style="text-align:left">Beschreibung</th>
      <th style="text-align:left">Type</th>
      <th style="text-align:left">Optional</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>author</b></td>
      <td style="text-align:left">Sollte ein Objekt mit dem <code>name</code> und <code>id</code> des Presence-Entwickler enthalten. Name ist dein Discord-Benutzername ohne den Identifikator (#0000). User <code>Id</code> kann kopiert werden, indem der Entwicklermodus aktiviert ist und einem Rechtsclick auf deinem Profil.</td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>Nein</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>contributors</b></td>
      <td style="text-align:left">Sollte ein Objekt mit dem <code>name</code> und <code>id</code> des Presence-Entwickler enthalten. Name ist dein Discord-Benutzername ohne den Identifikator (#0000). User <code>Id</code> kann kopiert werden, indem der Entwicklermodus aktiviert ist und einem Rechtsclick auf deinem Profil.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>Ja</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>service</b></td>
      <td style="text-align:left">Der Titel des Dienstes, der diese Presence unterstützt.<br>(Gib den Namen des Ordner an, in dem sich alles befindet)</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Nein</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>altnames</b></td>
      <td style="text-align:left">Be able to search the presence using an alternative name.<br>
      Meant to be used for presences that have different names in different languages (e.g. Pokémon and 포켓몬스터).<br>
      You can also use it for presences that have special characters so you don't have to type those (e.g. Pokémon and Pokemon).</td>
      <td style="text-align:left"><code>Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Ja</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>description</b></td>
      <td style="text-align:left">Small description of the presence, you can use description of the service if you are out of ideas. Your description must have key pair values which indicate the language, and the description in that specific language. Make descriptions with the languages <i>that you know</i>, our translators will make changes to your metadata file.</td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>Nein</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b></td>
      <td style="text-align:left">URL of the service.<br><b>Example:</b><code>vk.com</code><br>
      <b>This URL must match the URL of the website as it will detect whether or not this is the website to inject the script to.</b><br> Do <b>NOT</b> add <code>https://</code> or <code>http://</code> inside of the URL nor a slash at the end:
      <code>https://premid.app/</code> -> <code>premid.app</code><br>
      <b>Note</b>: Some URLs may have <code>www.</code> or something else in front of their domain. Do <b>NOT</b> forget to add it!<br>
      You can add multiple URLs by doing the following:<br>
      <code>["URL1", "URL2", "ETC."]</code><br>
      You could also use regExp also known as Regex for this task, explained further below.</td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Nein</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b></td>
      <td style="text-align:left">A regular expression string used to match urls.<br>
      regExp or also known as Regex, can be used if a website has multiple subdomains.<br>
      You could use the following regExp for that:<br>
      <code>([a-z0-9]+)[.]domain[.]TLD"</code><br>
      TLD standing for Top Level Domain for axample: .com .net (but do not enter the dot).<br>
      <code>([a-z0-9]+)</code> means anything from a to z and from 0 to 9.<br>
      You can get a quick starter by watching this <a href="https://youtu.be/sXQxhojSdZM">video</a>.<br>
      You can test your regExp at <a href="https://regex101.com/">Regex101</a>.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Ja</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>version</b></td>
      <td style="text-align:left">Version of your presence.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Nein</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>logo</b></td>
      <td style="text-align:left">Link to service&apos;s logotype.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Nein</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b></td>
      <td style="text-align:left">Link to your presence thumbnail.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Nein</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>color</b></td>
      <td style="text-align:left"><code>#HEX</code> value. We recommend to use a primary color of the service
        that your presence supports.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Nein</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>tags</b></td>
      <td style="text-align:left">Array with tags, they will help users to search your presence on the website.</td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Nein</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>category</b></td>
      <td style="text-align:left">A string used to represent the category the presence falls under. Sehen Sie <a href="https://docs.premid.app/dev/presence/metadata#presence-categories">hier</a> die gültigen Kategorien.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Nein</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b></td>
      <td style="text-align:left">Defines whether <code>iFrames</code> are used.</td>
      <td style="text-align:left"><code>Boolean</code></td>
      <td style="text-align:left"><code>Nein</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b></td>
      <td style="text-align:left">A regular expression selector that selects iframes to inject into. Siehe regExp für weitere Informationen.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Yes</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>readLogs</b></td>
      <td style="text-align:left">Defines whether the extension should be reading logs.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Yes</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>settings</b></td>
      <td style="text-align:left">Ein Array von Einstellungen, die der Benutzer ändern kann.<br>
      Lese mehr über Presenceeinstellungen <a href="https://docs.premid.app/dev/presence/metadata#presence-settings">hier</a>.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>Yes</code></td>
    </tr>
  </tbody>
</table>

We've made a `metadata.json` file creator for the lazy peeps [here](https://eggsy.xyz/projects/premid/mdcreator).

## Erste Schritte

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
  /*UpdateData is always firing, and therefore should be used as your refresh cycle, or `tick`. Dies wird nach Möglichkeit mehrmals eine Sekunde aufgerufen.

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

Du kannst dies in Deine `presence.ts` kopieren und die Werte bearbeiten. Die Einstellung aller Werte ist fertig innerhalb des updataData Events.

Als Beispiele schlagen wir vor, den Präsenz-Code wie 1337x oder 9GAG zu betrachten. For more information about the `Presence` class click [here](/dev/presence/class).

Since v2.2.0 there are now Slideshows, this allows you to show multiple `PresenceData` interfaces on an interval, for more information click about the `Slideshow` class [here](/dev/presence/slideshow).

## Du kannst bestimmte Daten nicht abrufen?!

Viele Websites verwenden [iframes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([Inlineframes](https://en.wikipedia.org/wiki/HTML_element#Frames)). Diese HTML-Tags können mehrere Quellen enthalten, z.B. Videos. Aber sie sind nicht immer relevant. Manche sind versteckt oder einfach nicht aktiv genutzt. Prüfe, ob Du die benötigten Informationen extrahieren kannst, bevor Du Dir unnötige Arbeiten machst.

1. Überprüfe sie über die Browserkonsole (stelle sicher, dass Du Dich auf dem **Elements** Tab) befindest.
2. Suche (<kbd>Strg</kbd>+<kbd>F</kbd> (Windows) oder <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
3. Führe `document.querySelectorAll("iframe")` aus.

Wenn feststellst, dass sich Deine Daten in einem iFrame befinden, musst Du folgende Schritte ausführen:

1. Erstelle eine `iframe.ts`-Datei.
2. Setze iFrame in Ihrer Metadatendatei auf `true`.
3. Fülle Deine iFrame-Datei aus.

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

4. Ermögliche Deiner Präsenz-Datei, Daten aus der iFrame-Datei zu empfangen.

```typescript
presence.on("iFrameData", (data) => {
  iFrameVideo = data.video;
  currentTime = data.time;
});
```

**Hinweis:** Das muss außerhalb des updateData-Ereignisses platziert werden.

## Kompilieren

Öffne eine Konsole in Deinem Ordner und gib `tsc -w` ein, um die `presence.ts` in den Ordner `/dist` zu kompilieren.

# Presence laden

1. Öffne das Popup und halte die Taste <kbd>Shift</kbd> auf Deiner Tastatur gedrückt.
2. **Presence laden** wird im Presence-Bereich erscheinen.
3. Klicke darauf, während Du die Taste <kbd>Shift</kbd> weiterhin gedrückt hälst.
4. Wähle den Ordner /dist Deiner Präsenz.

# Einige hilfreiche Dinge

## Hot-Neuladen

Die Website, auf der Du Dich befindest, wird jedes Mal automatisch neu geladen, wenn Du eine Datei in Deinem Ordner speicherst.

## Debugging

- Du kannst `console.log("Test");` zwischen Deinen Code setzten und prüfen, ob Deine Browserkonsole diese Ausgabe liefert. Wenn ja, fahre fort und versuchen es nach der nächsten Funktion erneut. Falls nicht, liegt oben ein Fehler vor.
- If that doesn't help you either then ask a presence developer on our [Discord server](https://discord.premid.app/) for help.

# Dateien erklärt

- [Presence Klasse](/dev/presence/class)
- [Diashow Class](/dev/presence/slideshow)
- [iFrame Klasse](/dev/presence/iframe)
- [Metadatendatei](/dev/presence/metadata)
- [TypeScript Konfiguration](/dev/presence/tsconfig ""){.links-list}
