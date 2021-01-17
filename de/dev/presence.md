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
      <td style="text-align:left">Erlaubt es die Presence mit einem alternativen Namen zu suchen<br>
Nutzvoll für Presences, die verschiedene Namen in verschiedenen Sprachen haben (z.B.:. Pokémon und 포켓몬스터).<br>
Dies kann auch genutzt werden für Presences, die spezielle Zeichen  haben, sodass diese nicht eingegeben werden müssen (z.B.: Pokémon und Pokemon).</td>
      <td style="text-align:left"><code>Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Ja</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>description</b></td>
      <td style="text-align:left">Kurze Beschreibung der Presence, du kannst die Beschreibung des Dienstes verwenden, wenn dir die Ideen ausgehen. Deine Beschreibung muss Schlüsselpaarwerte enthalten, die die Sprache angeben und die Beschreibung in dieser bestimmten Sprache. Erstelle Beschreibungen mit den Sprachen <i>die du kennst</i>, unsere Übersetzer werden Änderungen an der Metadatendatei vornehmen.</td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>Nein</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b></td>
      <td style="text-align:left">URL des Dienstes<br><b>Beispiel</b><code>vk.com</code><br>
<b>Diese URL muss mit der URL der Webseite übereinstimmen, da diese erkennt, ob es sich um die richtige Seite handelt, in der das Skript injiziiert werden soll.</b><br> Füge <b>KEIN</b> <code>https://</code> oder <code>http://</code> zu der URL hinzu, auch kein Slash am Ende:
<code> https://premid.app/</code> -> <code>premid.app</code><br>
<b>Hinweis:</b> Einige URLs haben vielleicht ein <code>www.</code> oder ähnliches vor der Domain. <b>NICHT</b> vergessen, es hinzuzufügen!<br>
Du kannst mehrere URLs hinzufügen, indem du folgendes tust:<br>
<code>["URL1", "URL2", "ETC."]</code><br>
Du kannst auch Regulare Ausdrücke, auch bekannt als RegEx, für diese Aufgabe verwenden, welches dir weiter unten erklärt wird.</td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Nein</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b></td>
      <td style="text-align:left">Ein regulärer Ausdrucks-String zum übereinstimmen der URLs.<br>
regExp, auch bekannt als RegEx, kann genutzt werden, um zu überprüfen, ob eine Webseite mehere Subdomains hat.<br>
Du kannst das folgende regExp dafür verwenden:<br>
<code>"([a-z0-9]+)[.]domain[.]TLD"</code><br>
TLD steht für Top Level Domain, ein Beispiel: .com .net (aber nicht den Punkt mit eingeben).<br>
<code>([a-z0-9]+)</code> bedeutet alles von a bis z und 0 bis 9.<br>
Du kannst ein kleines Starter <a href="https://youtu.be/sXQxhojSdZM">Video</a> angucken.<br>
Deine regExp kannst du auf <a href="https://regex101.com/">Regex101</a> testen.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Ja</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>version</b></td>
      <td style="text-align:left">Version deiner Presence.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Nein</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>logo</b></td>
      <td style="text-align:left">Link des Dienstes Logotyp.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Nein</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b></td>
      <td style="text-align:left">Link zu deinem Presence-Vorschaubild.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Nein</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>color</b></td>
      <td style="text-align:left"><code>#HEX</code> Wert. Wir empfehlen das nutzen einer primären Farbe für den Dienst, der ihre Presence unterstützt.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Nein</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>tags</b></td>
      <td style="text-align:left">Array mit Schlagwörtern, die es Benutzern helfen wird, deine Presence auf der Webseite zu finden.</td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Nein</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>category</b></td>
      <td style="text-align:left">Eine Zeichenkette, die die Kategorie entspricht, in die deine Kategorie fällt. Sehen Sie <a href="https://docs.premid.app/dev/presence/metadata#presence-categories">hier</a> die gültigen Kategorien.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Nein</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b></td>
      <td style="text-align:left">Legt fest ob <code>iFrames</code> verwendet werden.</td>
      <td style="text-align:left"><code>Boolean</code></td>
      <td style="text-align:left"><code>Nein</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b></td>
      <td style="text-align:left">Einen regulären Ausdrück-Selector, der iFrames auswählt, in die injiziiert werden soll. Siehe regExp für weitere Informationen.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Ja</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>readLogs</b></td>
      <td style="text-align:left">Legt fest, ob die Erweiterung Logs lesen soll.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Ja</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>settings</b></td>
      <td style="text-align:left">Ein Array von Einstellungen, die der Benutzer ändern kann.<br>
      Lese mehr über Presenceeinstellungen <a href="https://docs.premid.app/dev/presence/metadata#presence-settings">hier</a>.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>Ja</code></td>
    </tr>
  </tbody>
</table>

Wir haben einen `metadata.json` Dateiersteller für die Faulen [hier](https://eggsy.xyz/projects/premid/mdcreator) erstellt.

## Erste Schritte

```typescript
const presence = new Presence({
    clientId: "000000000000000000" //Die Client-ID der Applikation, die auf https://discordapp.com/developers/applications erstellt wurde
  }),
  strings = presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
    //Dies kannst du verwenden, um die übersetzen String in derer Browsersprache zu bekommen
  });

/*

function myOutsideHeavyLiftingFunction(){
    //Nehme und verarbeite alle Daten hier

    // Nehmen von Elementen //
    // API-Calls //
    // Variablen setzen //
}

setInterval(myOutsideHeavyLiftingFunction, 10000);
//Laufe die Funktion seperat von dem UpdateData Event jede 10 Sekunden um die Variabeln zu bekommen oder zu setzen, welche UpdateData aufnimmt

*/

presence.on("UpdateData", async () => {
  /*UpdateData ist immer am laufen, deswegen sollte es auch als dein Erneuerungszykel verwendet werden oder als 'tick'. Dies wird nach Möglichkeit mehrmals eine Sekunde aufgerufen.

    Es wird empfohlen eine andere Funktion außerhalb dieser Event-Funktion zu verwenden, welche die Variablen-Werte und das "heavy Lifting" ausführen, wenn Sie Daten von der API aufrufen.

  const presenceData: PresenceData = {
    largeImageKey:
      "key" /*Der Schlüssel (Dateiname), des großen Bildes der Presence. These are uploaded and named in the Rich Presence section of your application, called Art Assets*/,
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
