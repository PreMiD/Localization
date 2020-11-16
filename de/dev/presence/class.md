---
title: Presence-Klasse
description: Die Hauptklasse für jede PreMiD-Presence
published: true
date: 2020-07-29T15:12:55.925Z
tags:
editor: markdown
---

# Presence-Klasse

## Einführung

Die Klasse `Presence` ist sehr nützlich, da sie grundlegende Methoden zum Erstellen einer Presence enthält.

 Wenn du eine Klasse erstellst, musst du die Eigenschaft `clientId` angeben.

```typescript
let presence = new Presence({
    clientId: "514271496134389561" // Example clientId
});
```

Für die Klasse `Presence` stehen zwei Eigenschaften zur Verfügung.

#### `clientId`

Es muss die Eigenschaft `clientId` werden, damit ihre Anwesenheit funktioniert, da die Anwendungs-ID zum Anzeigen des Logos und der Elemente verwendet wird.

Du bekommst dies auf deiner[Anwendungsseite](https://discordapp.com/developers/applications).

## Methoden

### `getActivity()`

Gibt ein `presenceData` Objekt zurück, in dem die Presence angezeigt wird.

### `setActivity(presenceData, Boolean)`

Legt deine Profilaktivität gemäß den bereitgestellten Daten fest.

Der erste Parameter erfordert eine `presenceData`-Schnittstelle, um alle Informationen abzurufen, die du in deinem Profil anzeigen möchtst.

Der zweite Parameter definiert, wann die Presence etwas spielt oder nicht. Verwende immer `true`, wenn du Zeitstempel in `presentData` angibst.

### `clearActivity()`

Löscht deine aktuelle Aktivität, die Tastenkombinationen und den Tray-Titel.

### `setTrayTitle(String)`

> Diese Methode funktioniert nur unter Mac OS. 
> 
> {.is-warning}

Legt den Tray-Titel in der Menüleiste fest.

### `getStrings(Object)`

Eine asynchrone Methode, mit der du übersetzte Zeichenketten von der Erweiterung erhalten kannst. Du musst `Object` mit Schlüsseln versehen, die der Schlüssel für die Zeichenfolge sind. `keyValue` ist der Zeichenfolgenwert. Eine Zusammenstellung der übersetzten Zeichenketten kann mit diesem Endpunkt gefunden werden: `https://api.premid.app/v2/langFIle/extension/de`

```typescript
// Gibt `Playing` und `Paused` Strings
// der Erweiterung wieder.
strings = await presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
});

const playString = strings.play // result: Playing back
const pauseString = strings.pause // result: Playback paused
```

### `getPageletiable(String)`

Gibt eine Variable von der Webseite zurück, falls sie vorhanden ist.

```typescript
var pageVar = getPageletiable('.pageVar');
console.log(pageVar); // Dies protokolliert den "Variabelinhalt"
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

### `getSetting(String)`
Gibt den Wert der Einstellung zurück.
```typescript
var setting = await presence.getSetting("pdexID"); // pdexID mit der ID von der Einstellung ersetzen
console.log(setting); // Dies protokolliert den Wert der Einstellung
```

### `hideSetting(String)`
Versteckt die definierte Einstellung.
```typescript
presence.hideSetting("pdexID"); // pdexID mit der ID von der Einstellung ersetzen
```

### `showSetting(String)`
Zeigt definierte Einstellung (Funktioniert nur, wenn die Einstellung bereits versteckt war).
```typescript
presence.showSetting("pdexID"); // pdexID mit der ID von der Einstellung ersetzen
```

## `PresenceData`-Schnittstelle

Die `presenceData`-Schnittstelle wird empfohlen, wenn du die `setActivity()`-Methode verwendest.

Diese Schnittstelle hat folgende Variablen, die alle optional sind.

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
          <br>Du musst deine Zeit in <code>Zeitstempel</code> umwandeln, sonst erhälst du einen falschen Countdown.
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

## Events

Events ermöglicht dir, einige Änderungen oder Calls zu erkennen und zu bearbeiten. Du kannst Events mit der Methode `on` abonnieren.

```typescript
presence.on("UpdateData", async () => {
    // Tut etwas, wenn Daten aktualisiert werden.
});
```

Es sind einige Events verfügbar:

#### `UpdateData`

Dieses Event wird jedes Mal aktualisiert, wenn die Presence ebenfalls aktualisiert wird.

#### `iFrameData`

Wird ausgelöst, wenn Daten vom iFrame-Skript empfangen werden.
