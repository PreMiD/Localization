---
title: Närvaro klass
description: Huvudklassen för varje PreMiD presence
published: true
date: 2020-04-08T19:33:34.075Z
tags:
---

# Närvaro klass

## Introduktion

`Närvaro` klassen är mycket användbar eftersom den har grundläggande metoder som vi behöver för att skapa en presence.

 När du skapar en klass måste du ange `clientId` egenskap.

```typescript
let presence = new Presence({
    clientId: "514271496134389561" // Exempel clientId
});
```

Det finns två egenskaper tillgängliga för `Presence` klass.

#### `clientId`

`clientId` egenskap måste tillhandahållas för att få din närvaro att fungera, eftersom den använder ditt program-id för att visa sin logotyp och tillgångar.

Du kan få det på din [applikationssida](https://discordapp.com/developers/applications).

## Metoder

### `setActivity(presenceData, Boolean)`

Sets your profile activity according to provided data.

First parameter requires an `presenceData` interface to get all information that you want to display in your profile.

Second parameter defines when presence is playing something or not. Always use `true` if you provide timestamps in `presenceData`.

### `clearActivity()`

Clears your current activity, the keybinds and the tray title.

### `setTrayTitle(String)`

> Denna metod fungerar endast på Mac OS. 
> 
> {.is-warning}

Sets the tray title on the Menubar.

### `getStrings(Objekt)`

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
Returns version of the extension the user is using.
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

## `närvaroData` Gränssnitt

The `presenceData` interface is recommended to use when you are using the `setActivity()` method.

This interface has following variables, all of them are optional.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Variabel</th>
      <th style="text-align:left">Beskrivning</th>
      <th style="text-align:left">Typ</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">detaljer</td>
      <td style="text-align:left">Den första raden i din närvaro, används vanligtvis som rubrik.</td>
      <td style="text-align:left"><code>Sträng</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">delstat</td>
      <td style="text-align:left">Andra raden i din närvaro.</td>
      <td style="text-align:left"><code>Sträng</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">startTimestamp</td>
      <td style="text-align:left">Definierar aktuell tid.<br>
        Används om du vill visa hur mycket <code>timmar:minuter:sekunder</code> kvar.
          <br>Du måste konvertera din tid till <code>tidsstämpel</code> annars får du en felaktig
          nedräkning.
      </td>
      <td style="text-align:left"><code>Nummer</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">endTimestamp</td>
      <td style="text-align:left">Definierar hela varaktigheten.
        <br>Används om du vill visa hur mycket <code>timmar:minutes:sekunder</code> kvar.
          <br>Du måste konvertera din tid till <code>tidsstämpel</code> annars får du en felaktig
          nedräkning.
      </td>
      <td style="text-align:left"><code>Nummer</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">Stor ImageKey</td>
      <td style="text-align:left">Definierar logotypen för närvaron.</td>
      <td style="text-align:left"><code>Sträng</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">smallImageKey</td>
      <td style="text-align:left">Definierar den lilla ikonen bredvid närvaro&apos;s logotyp.</td>
      <td style="text-align:left"><code>Sträng</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">smallImageText</td>
      <td style="text-align:left">Definierar texten som kommer att visas för användaren när han kommer att sväva den lilla
        ikonen.</td>
      <td style="text-align:left"><code>Sträng</code>
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

## Händelser

Events allow you to detect and handle some changes or calls that were made. You can subscribe to events using the `on` method.

```typescript
presence.on("UpdateData", async () => {
    // Do something when data gets updated.
});
```

There are few events available:

#### `Uppdateringsdata`

This event is fired every time the presence is being updated.

#### `iFrameData`

Fired when data is received from iFrame script.
