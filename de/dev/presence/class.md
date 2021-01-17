---
title: Presence-Klasse
description: Die Hauptklasse für jede PreMiD-Presence
published: true
date: 2021-01-04T18:22:24.312Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:42.004Z
---

# Presence-Klasse

## Einführung

Die Klasse `Presence` ist sehr nützlich, da sie grundlegende Methoden zum Erstellen einer Presence enthält.

Wenn du eine Klasse erstellst, musst du die Eigenschaft `clientId` angeben.

```typescript
const presence = new Presence({
  clientId: "514271496134389561" // Beispiel clientid
});
```

### Eigenschaften

Für die `Presence`-Klasse, gibt es drei verfügbare Eigenschaften.

#### `clientId`

Diese Eigenschaft wird benötigt, damit deine Presence funktioniert, weil es die Anwendungs-Id benutzt, um Logo und Elemente anzuzeigen. Du bekommst dies auf deiner[Anwendungsseite](https://discordapp.com/developers/applications).

#### `injectOnComplete`

Beim setzen von `InjectOnComplete` zu `true`, wird das erste `UpdateData` Event für beide, die `presence.ts` und `iframe.js` Dateien erst gestartet, wenn die Seite fertig geladen ist.

#### `appMode`

Beim setzen von `appMode` zu `true` und die Presence sollte leere `PresenceData` senden, zeigt die App die Anwendung (Bild und Name) auf dem Benutzerprofil, anstatt nichts.

## Methoden

### `getActivity()`

Wirft ein `PresendeData` Objekt zurück, was die Presence anzeigt.

### `setActivity(PresenceData | Slideshow, Boolean)`

Legt Ihre Profilaktivität gemäß den bereitgestellten Daten fest.

Der erste Parameter benötig eine [`PresenceData`](#presencedata-interface) Schnittstelle oder eine [`Slideshow`](/dev/presence/slideshow) Klasse um alle Informationen zu erhalten, die Sie in Ihrem Profil anzeigen möchten.

Der zweite Parameter definiert, wann Präsenz etwas spielt oder nicht. Verwende immer `true`, wenn Sie einen Zeitstempel in `PresenceData` verwenden.

### `clearActivity()`

Löscht deine akutelle Aktivität und den Tray-Titel.

### `setTrayTitle(String)`

> Diese Methode funktioniert nur unter Mac OS. 
> 
> {.is-warning}

Legt den Tray-Titel in der Menüleiste fest.

### `createSlideshow()`

Erstellt eine neue `Slideshow` Klasse.

```typescript
const slideshow = presence.createSlideshow();
```

Es wird empfohlen, dies direkt nach dem erstellen der `Presence` Klasse zu tun:

```typescript
const presence = new Presence({
    clientId: "514271496134389561" // Beispiel clientId
  }),
  slideshow = presence.createSlideshow();
```

Die Dokumentation für die `Slideshow` Klasse kannst du [hier](/dev/presence/slideshow) finden.

### `getStrings(Object)`

Eine asynchrone Methode, mit der du übersetzte Zeichenketten von der Erweiterung erhalten kannst.

Sie müssen ` Object ` mit Schlüsseln versehen, die der Schlüssel für die Zeichenfolge sind. ` keyValue ` ist der Zeichenfolgenwert. Eine Zusammenstellung der übersetzten Zeichenketten kann mit diesem Endpunkt gefunden werden: `https://api.premid.app/v2/langFile/presence/en/`

```typescript
// Gibt `Playing` und `Paused` Strings
// der Erweiterung wieder.
const strings = await presence.getStrings({
  play: "general.playing",
  pause: "general.paused"
});

const playString = strings.play; // Ergebnis:  Playing
const pauseString = strings.pause; // Ergebnis: Paused
```

Seit v2.2.0 der Erweiterung können Sie nun die Zeichenketten einer bestimmten Sprache erhalten. Dies funktioniert gut mit der neu hinzugefügten `multiLanguage` Einstellung.

Wir empfehlen Ihnen, den folgenden Code zu verwenden, damit die PresenceData automatisch aktualisiert, wenn der Benutzer die ausgewählte Sprache ändert;

```typescript
// Eine Schnittstelle der Zeichenketten, die Sie erhalten (gut für Code-Qualität und Autovervollständigung).
interface LangStrings {
  play: string;
  pause: string;
}

async function getStrings(): Promise<LangStrings> {
  return presence.getStrings(
    {
      // Die Zeichenketten, die du erhältst, stellen sicher, dass diese zu Ihrer LangStrings Schnittstelle passen.
      play: "general.playing",
      pause: "general.paused"
    },
    // Die ID ist die ID der multiLanguage Einstellung.
    await presence.getSetting("ID")
  );
}

let strings: Promise<LangStrings> = getStrings(),
  // Die ID ist die ID der multiLanguage Einstellung.
  oldLang: string = await presence.getSetting("ID");

//! Der folgende Code muss innerhalb des updateData Events sein!
// Die ID ist die ID von der multiLanguage Einstellung.
const newLang = await presence.getSetting("ID");
if (oldLang !== newLang) {
  oldLang = newLang;
  strings = getStrings();
}

const playString = strings.play; // Ergebnis: Playing
const pauseString = strings.pause; // Ergebnis: Paused
```

### `getPageletiable(String)`

Gibt eine Variable von der Webseite zurück, falls sie vorhanden ist.

```typescript
const pageVar = getPageletiable(".pageVar");
console.log(pageVar); // Das loggt den "Variableninhalt"
```

### `getExtensionVersion(Boolean)`

Gibt die Version, der Erweiterung aus, die der Benutzer verwendet.

```typescript
getExtensionVersion(onlyNumeric?: boolean): string | number;

const numeric = presence.getExtensionVersion();
console.log(numeric); // Will log 210
const version = presence.getExtensionVersion(false);
console.log(version); // Will log 2.1.0
```

### `getSetting(String)`

Returns value of setting.

```typescript
const setting = await presence.getSetting("pdexID"); //Replace pdexID with the id of the setting
console.log(setting); // This will log the value of the setting
```

### `hideSetting(String)`

Hides given setting.

```typescript
presence.hideSetting("pdexID"); // Replace pdexID with the id of the setting
```

### `showSetting(String)`

Shows given setting (Only works if the setting was already hidden).

```typescript
presence.showSetting("pdexID"); // Replace pdexID with the id of the setting
```

### `getLogs()`

Returns the logs of the websites console.

```typescript
const logs = await presence.getLogs();
console.log(logs); // This will log the latest 100 logs (in an array).
```

**Note:** Requires `readLogs` to be `true` in the `metadata.json` file.

### `info(String)`

Gibt die angegebene Meldung in der Konsole in einem Format aus, das auf die Presence im `info` Style basiert.

```typescript
presence.info("Test") // This will log "test" in the correct styling.
```

### `success(String)`

Gibt die angegebene Meldung in der Konsole in einem Format aus, das auf die Presence im `erfolgreich` Style basiert.

```typescript
presence.success("Test") // This will log "test" in the correct styling.
```

### `error(String)`

Gibt die angegebene Meldung in der Konsole in einem Format aus, das auf die Presence im `Fehler` Style basiert.

```typescript
presence.error("Test") // This will log "test" in the correct styling.
```

### `getTimestampsfromMedia(HTMLMediaElement)`

Returns 2 `snowflake` timestamps in an `Array` that can be used for `startTimestamp` and `endTimestamp`.

```typescript
const timestamps = getTimestampsfromMedia(document.querySelector(".video"));
presenceData.startTimestamp = timestamps[0];
presenceData.endTimestamp = timestamps[1];
```

**Note:** The given `String` in querySelector is an example.

### `getTimestamps(Number, Number)`

Returns 2 `snowflake` timestamps in an `Array` that can be used for `startTimestamp` and `endTimestamp`.

```typescript
const video = document.querySelector(".video"),
  timestamps = getTimestamps(video.currentTime, video.duration);
presenceData.startTimestamp = timestamps[0];
presenceData.endTimestamp = timestamps[1];
```

**Note:** The given `String` in querySelector is an example.

### `timestampFromFormat(String)`

Converts a string with format `HH:MM:SS` or `MM:SS` or `SS` into an integer (Does not return snowflake timestamp).

```typescript
const currentTime = timestampFromFormat(document.querySelector(".video-now").textContent),
  duration = timestampFromFormat(document.querySelector(".video-end").textContent),
  timestamps = getTimestamps(currentTime, duration);
presenceData.startTimestamp = timestamps[0];
presenceData.endTimestamp = timestamps[1];
```

**Note:** The given `String` in querySelector is an example.

## `PresenceData`-Schnittstelle

The `PresenceData` interface is recommended to use when you are using the `setActivity()` method.

Diese Schnittstelle hat folgende Variablen, die alle optional sind.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Variable</th>
      <th style="text-align:left">Beschreibung</th>
      <th style="text-align:left">Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">details</td>
      <td style="text-align:left">Die erste Zeile in deiner Presence, die normalerweise als Überschrift verwendet wird.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">state</td>
      <td style="text-align:left">Zweite Zeile in deiner Presence.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">startTimestamp</td>
      <td style="text-align:left">Legt die aktuelle Uhrzeit fest.<br>
        Wird verwendet, wenn du anzeigen möchtest, wie viel <code>Stunden: Minuten: Sekunden</code> übrig sind.
          <br>Du musst deine Zeit in <code>Zeitstempel</code> umwandeln, sonst erhälst du einen falschen Countdown.
      </td>
      <td style="text-align:left"><code>Number</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">endTimestamp</td>
      <td style="text-align:left">Definiert die volle Dauer.
        <br>Wird verwendet, wenn du anzeigen möchtest, wie viel <code>Stunden: Minuten: Sekunden</code> übrig sind.
          <br>You must convert your time to <code>timestamp</code> or you will get a wrong
          countdown.
      </td>
      <td style="text-align:left"><code>Number</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">largeImageKey</td>
      <td style="text-align:left">Definiert das Logo für die Presence.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">smallImageKey</td>
      <td style="text-align:left">Definiert das kleine Symbol neben dem Logo der Anwesenheit&apos;.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">smallImageText</td>
      <td style="text-align:left">Definiert den Text, der dem Benutzer angezeigt wird, wenn er mit der Maus über das kleine
        Symbol fährt.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
  </tbody>
</table>

```typescript
const presenceData: PresenceData = {
  details: "My title",
  state: "My description",
  largeImageKey: "service_logo",
  smallImageKey: "small_service_icon",
  smallImageText: "You hovered me, and what now?",
  startTimestamp: 1564444631188,
  endTimestamp: 1564444634734
};
```

## Events

Events ermöglicht dir, einige Änderungen oder Calls zu erkennen und zu bearbeiten. Sie können Ereignisse mit der Methode `auf` abonnieren.

```typescript
presence.on("UpdateData", async () => {
  // Do something when data gets updated.
});
```

Es sind einige Menüs verfügbar:

#### `UpdateData`

Dieses Ereignis wird jedes Mal aktualisiert, wenn die Anwesenheit ebenfalls aktualisiert wird.

#### `iFrameData`

Wird ausgelöst, wenn Daten vom iFrame-Skript empfangen werden.
