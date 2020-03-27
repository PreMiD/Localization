---
title: Präsenzklasse
description: Die Hauptklasse für jede PreMiD-Präsenz
published: true
date: 2020-02-12T22:27:09.884Z
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

#### `mediaKeys`

Diese Eigenschaft weist unsere App an, die Tastenkombinationen für Medienschlüssel zu registrieren, und ermöglicht es uns, `MediaKeys` Ereignis für die `Presence` Klasse zu verwenden.

Diese Eigenschaft ist nicht erforderlich. Wenn Sie jedoch Medienschlüssel aktivieren möchten, müssen Sie sie auf `true`.

**Alle mediaKey-Ereignisse sind vorübergehend deaktiviert!**

```typescript
let presence = new Presence ({
    clientId: "514271496134389561",
    mediaKeys: true // Ermöglicht Benutzern die Verwendung von Medienschlüsseln
});
```

## Methoden

### `setActivity (presenceData, Boolean)`

Legt Ihre Profilaktivität anhand der bereitgestellten Daten fest.

Der erste Parameter erfordert eine `PresenceData-` Schnittstelle, um alle Informationen abzurufen, die in Ihrem Profil angezeigt werden sollen.

Der zweite Parameter definiert, wann Präsenz etwas spielt oder nicht. Verwenden Sie immer `true` wenn Sie Zeitstempel in `presenceData`angeben.

### `clearActivity ()`

Löscht Ihre aktuelle Aktivität, die Tastenkombinationen und den Titel der Taskleiste.

### `setTrayTitle (String)`

> Diese Methode funktioniert nur unter Mac OS. 
> 
> {.is-warning}

Legt den Titel der Taskleiste in der Menüleiste fest.

### `getStrings (Objekt)`

Ermöglicht es Ihnen, übersetzte Zeichenfolgen aus der Erweiterung abzurufen. Sie müssen `Objekt` mit Schlüsseln als Schlüssel für die Zeichenfolge bereitstellen, `Schlüsselwert` ist der Zeichenfolgenwert. Sie finden einige der Zeichenfolgen unter Verwendung dieses Endpunkts: `https://api.premid.app/v2/langFIle/extension/en`

```typescript
// Rückgabe `Playing` und` Paused` Strings
// aus der Erweiterung.
strings = warte auf presence.getStrings ({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
});
```

### `getPageLetiable (String)`

Gibt eine Variable von der Website zurück, falls vorhanden.

```typescript
var pageVar = getPageLetiable ('. pageVar');
console.log (pageVar); // Dies wird den "variablen Inhalt" protokollieren
```

## `PresenceData` Schnittstelle

Es wird empfohlen, die `PresenceData` Schnittstelle zu verwenden, wenn Sie die `SetActivity ()` Methode verwenden.

Diese Schnittstelle verfügt über folgende Variablen, die alle optional sind.

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
    details: "Mein Titel",
    state: "Meine Beschreibung",
    largeImageKey: "service_logo",
    smallImageKey: "small_service_icon",
    smallImageText: "Sie haben mich überfahren, und was jetzt?",
    startTimestamp: 1564444631188,
    endTimestamp: 1564444634734
};
```

## Veranstaltungen

Mithilfe von Ereignissen können Sie einige vorgenommene Änderungen oder Aufrufe erkennen und verarbeiten. Sie können Ereignisse mit der `zu-` Methode abonnieren.

```typescript
presence.on ("UpdateData", async () => {
    // Tun Sie etwas, wenn Daten aktualisiert werden.
});
```

Es sind einige Veranstaltungen verfügbar:

#### `Daten aktualisieren`

Dieses Ereignis wird jedes Mal ausgelöst, wenn die Anwesenheit aktualisiert wird.

#### `MediaKeys` (deaktiviert)

Wird ausgelöst, wenn der Benutzer Medientasten auf seiner Tastatur verwendet. [Klicken Sie hier](/dev/presence/class#mediakeys) , um weitere Informationen zu Medientasten zu erhalten.

#### `iFrameData`

Wird ausgelöst, wenn Daten vom iFrame-Skript empfangen werden.