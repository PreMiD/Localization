---
title: Närvaro klass
description: Huvudklassen för varje PreMiD presence
published: true
date: 2020-07-29T15:12:55.925Z
tags:
editor: markdown
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

### `getActivity()`

Returnerar ett `presenceData` objekt av vad presencen visar.

### `setActivity(presenceData, Boolean)`

Anger din profilaktivitet enligt angivna uppgifter.

First parameter requires an `presenceData` interface to get all information that you want to display in your profile.

Den andra parametern definierar när presencen spelar något eller inte. Använd alltid `true` om du tillhandahåller tidsstämplar i `presenceData`.

### `clearActivity()`

Rensar din nuvarande aktivitet, tangentbinden och systemfälts ikonens titel.

### `setTrayTitle(String)`

> Denna metod fungerar endast på Mac OS. 
> 
> {.is-warning}

Ställer in systemfälts ikonens titel.

### `getStrings(Object)`

En async metod som gör att du kan få översatta strängar från förlängning. Du måste ange `Objekt` med nycklar som är nyckeln för sträng, `keyValue` är strängvärdet. En sammanställning av översatta strängar kan hittas med denna slutpunkt: `https://api.premid.app/v2/langFIle/extension/sv`

```typescript
// Returnerar `Playing` (spelar) och `Paused` (pausad) strängar
// från förlängning.
strings = await presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
});

const playString = strings.play // result: Playing back
const pauseString = strings.pause // result: Playback paused
```

### `getPageletiable(String)`

Returnerar en variabel från hemsidan om den finns.

```typescript
var pageVar = getPageletiable('.pageVar');
console.log(pageVar); // Detta kommer att logga "Variabelt innehåll"
```

### `getExtensionVersion(Boolean)`
Returnerar versionen av tillägget du använder.
```typescript
getExtensionVersion(onlyNumeric?: boolean): string | number;

var numeric = presence.getExtensionVersion();
console.log(numeric); // Will log 210
var version = presence.getExtensionVersion(false);
console.log(version); // Will log 2.1.0
```

### `getSetting(String)`
Returnerar värdet av inställningen.
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

## `presenceData` gränssnitt

Gränssnittet `presenceData` rekommenderas att användas när du använder metoden `setActivity()`.

Detta gränssnitt har följande variabler, alla av dem är frivilliga.

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
      <td style="text-align:left">Den första raden i din presence, används vanligtvis som rubrik.</td>
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
      <td style="text-align:left">Definierar den aktuella tiden.<br>
        Används om du vill visa hur mycket <code>timmar:minuter:sekunder</code> du har  kvar.
          <br>Du måste konvertera din tid till <code>timestamp</code> annars får du en felaktig
          nedräkning.
      </td>
      <td style="text-align:left"><code>Nummer</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">endTimestamp</td>
      <td style="text-align:left">Definierar varaktigheten.
        <br>Används om du vill visa hur mycket <code>timmar:minuter:sekunder</code> du har kvar.
          <br>Du måste konvertera din tid till <code>timestamp</code> annars får du en felaktig
          nedräkning.
      </td>
      <td style="text-align:left"><code>Nummer</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">Stor ImageKey</td>
      <td style="text-align:left">Definierar logotypen för presencen.</td>
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
      <td style="text-align:left">Definierar texten som kommer att visas för användaren när han kommer att hålla den lilla
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

Events gör så att du kan upptäcka och hantera vissa förändringar eller samtal som gjorts. Du kan lyssna på händelser med `on` metoden.

```typescript
presence.on("UpdateData", async () => {
    // Do something when data gets updated.
});
```

Det finns några event:

#### `Uppdateringsdata`

Detta event avfyras varje gång presencen uppdateras.

#### `iFrameData`

Avfyras när data tas emot från ett iFrame script.
