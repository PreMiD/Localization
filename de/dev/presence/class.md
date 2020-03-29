---
title: Präsenzklasse
description: Die Hauptklasse für jede PreMiD-Präsenz
published: true
date: 2020-02-12T22:15:28.557Z
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

Clears your current activity, the keybinds and the tray title.

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

### `getPageLetiable (String)`

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

Events allow you to detect and handle some changes or calls that were made. You can subscribe to events using the `on` method.

```typescript
presence.on("UpdateData", async () => {
    // Do something when data gets updated.
});
```

There are few events available:

#### `Daten aktualisieren`

This event is fired every time the presence is being updated.

#### `iFrameData`

Fired when data is received from iFrame script.
