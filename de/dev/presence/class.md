---
title: Präsenzenklasse
description: Die Hauptklasse für jede PreMiD-Präsenz
published: true
date: 2020-04-08T19:33:34.075Z
tags:
---

# Präsenzklasse

## Einführung

Die Klasse `Präsenz` ist sehr nützlich, da sie grundlegende Methoden zum Erstellen einer Präsenz enthält.

 Wenn Sie eine Klasse erstellen, müssen Sie die Eigenschaft `clientId` angeben.

```typescript
let presence = new Presence ({
    clientId: "514271496134389561" // Beispiel clientId
});
```

Für die Klasse `Präsenz` stehen zwei Eigenschaften zur Verfügung.

#### `clientId`

Es muss die Eigenschaft `clientId` werden, damit Ihre Anwesenheit funktioniert, da die Anwendungs-ID zum Anzeigen des Logos und der Elemente verwendet wird.

Sie können es auf Ihrer [Bewerbungsseite](https://discordapp.com/developers/applications).

## Methoden

### `setActivity (presenceData, Boolean)`

Sets your profile activity according to provided data.

First parameter requires an `presenceData` interface to get all information that you want to display in your profile.

Second parameter defines when presence is playing something or not. Always use `true` if you provide timestamps in `presenceData`.

### `clearActivity ()`

Löscht Ihre aktuelle Aktivität, die Tastenkombinationen und den Tray-Titel.

### `setTrayTitle (String)`

> Diese Methode funktioniert nur unter Mac OS. 
> 
> {.is-warning}

Sets the tray title on the Menubar.

### `getStrings (Objekt)`

Allows you to get translated strings from extension. You must provide `Object` with keys being the key for string, `keyValue` is the string value. You can find the some of the strings using this endpoint: `https://api.premid.app/v2/langFIle/extension/en`

```typescript
// Returns `Playing` and `Paused` strings
// from extension.
strings = await presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
});
```

### `getSetting(String)`
Returns value of setting.
```typescript
var setting = await presence.getSetting("pdexID"); //Replace pdexID with the id of the setting
console.log(setting); // This will log the value of the setting
```

### `hideSetting(String)`
Hides given setting.
```typescript
presence.hideSetting("pdexID"); //Replace pdexID with the id of the setting
```

### `showSetting(String)`
Shows given setting (Only works if the setting was already hidden).
```typescript
presence.showSetting("pdexID"); //Replace pdexID with the id of the setting
```

### `getExtensionVersion(Boolean)`
Gibt die Version, der Erweiterung aus, die der Benutzer verwendet.
```typescript
getExtensionVersion(onlyNumeric?: boolean): string | number;

var numeric = presence.getExtensionVersion();
console.log(numeric); // Will log 210
var version = presence.getExtensionVersion(false);
console.log(version); // Will log 2.1.0
```

### `getPageLetiable(String)`

Returns a variable from the website if it exists.

```typescript
var pageVar = getPageLetiable('.pageVar');
console.log(pageVar); // This will log the "Variable content"
```

## `PresenceData` Schnittstelle

The `presenceData` interface is recommended to use when you are using the `setActivity()` method.

This interface has following variables, all of them are optional.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Variable</th>
      <th style="text-align:left">Beschreibung</th>
      <th style="text-align:left">Art</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">Einzelheiten</td>
      <td style="text-align:left">Die erste Zeile in Ihrer Anwesenheit, die normalerweise als Überschrift verwendet wird.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">Zustand</td>
      <td style="text-align:left">Zweite Zeile in Ihrer Gegenwart.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">startTimestamp</td>
      <td style="text-align:left">Legt die aktuelle Uhrzeit fest.<br>
        Wird verwendet, wenn Sie anzeigen möchten, wie viel <code>Stunden: Minuten: Sekunden</code> übrig sind.
          <br>Sie müssen Ihre Zeit in <code>Zeitstempel</code> umwandeln, sonst erhalten Sie einen falschen Countdown
.
      </td>
      <td style="text-align:left"><code>Nummer</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">endTimestamp</td>
      <td style="text-align:left">Definiert die volle Dauer.
        <br>Wird verwendet, wenn Sie anzeigen möchten, wie viel <code>Stunden: Minuten: Sekunden</code> übrig sind.
          <br>Sie müssen Ihre Zeit in <code>Zeitstempel</code> umwandeln, sonst erhalten Sie einen falschen Countdown
.
      </td>
      <td style="text-align:left"><code>Nummer</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">largeImageKey</td>
      <td style="text-align:left">Definiert das Logo für die Anwesenheit.</td>
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
var presenceData: presenceData = {
    details: "My title",
    state: "My description",
    largeImageKey: "service_logo",
    smallImageKey: "small_service_icon",
    smallImageText: "You hovered me, and what now?",
    startTimestamp: 1564444631188,
    endTimestamp: 1564444634734
};
```

## Veranstaltungen

Events allow you to detect and handle some changes or calls that were made. Sie können Ereignisse mit der Methode `auf` abonnieren.

```typescript
presence.on("UpdateData", async () => {    // Tun Sie etwas, wenn Daten aktualisiert werden.
});
```

Es sind einige Menüs verfügbar:

#### `Daten aktualisieren`

Dieses Ereignis wird jedes Mal aktualisiert, wenn die Anwesenheit ebenfalls aktualisiert wird.

#### `iFrameData`

Fired when data is received from iFrame script.
