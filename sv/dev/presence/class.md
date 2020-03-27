---
title: Närvaro klass
description: Huvudklassen för varje PreMiD presence
published: true
date: 2020-02-12T22:15:28.557Z
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

#### `mediaKeys`

Denna egenskap talar om för vår app att registrera nyckelband för mediaknappar och tillåter oss att använda `MediaKeys` händelse för `Presence` klassen.

Denna egenskap är inte nödvändig, men om du vill aktivera mediaknappar bör du ställa in den till `true`.

**Alla mediaKey händelser är tillfälligt inaktiverade!**

```typescript
let presence = new Presence({
    clientId: "514271496134389561",
    mediaKeys: true // Tillåter användare att använda medietangenter
});
```

## Metoder

### `setActivity(presenceData, Boolean)`

Anger din profilaktivitet enligt angivna uppgifter.

Första parametern kräver ett `presenceData` -gränssnitt för att få all information som du vill visa i din profil.

Den andra parametern definierar när närvaron spelar något eller inte. Använd alltid `true` om du tillhandahåller tidsstämplar i `närvaroData`.

### `clearActivity()`

Rensar din nuvarande aktivitet, tangentbinden och brickans titel.

### `setTrayTitle(String)`

> Denna metod fungerar endast på Mac OS. 
> 
> {.is-warning}

Ställer in brickans titel på menyraden.

### `getStrings(Objekt)`

Låter dig få översatta strängar från tillägg. Du måste ange `Objekt` med nycklar som är nyckeln för sträng, `nyckelvärde` är strängvärdet. Du kan hitta några av strängarna med denna slutpunkt: `https://api.premid.app/v2/langFIle/extension/sv`

```typescript
// Returnerar `Spelar` och `Paused` strängar
// från förlängning.
strängar = väntar presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
});
```

### `getPageLetiable(sträng)`

Returnerar en variabel från webbplatsen om den finns.

```typescript
var pageVar = getPageLetiable('.pageVar');
console.log(pageVar); // Detta kommer att logga "Variabelt innehåll"
```

## `närvaroData` Gränssnitt

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
    detaljer: "Min titel",
    state: "Min beskrivning",
    largeImageKey: "service_logo",
    smallImageKey: "small_service_icon",
    smallImageText: "Du svävade mig, och vad nu? ,
    startTimestamp: 1564444631188,
    endTimestamp: 1564444634734
};
```

## Händelser

Händelser gör att du kan upptäcka och hantera vissa förändringar eller samtal som gjorts. Du kan prenumerera på händelser med `på` -metoden.

```typescript
presence.on("UpdateData", async () => {
    // Gör något när data uppdateras.
});
```

Det finns få evenemang tillgängliga:

#### `Uppdateringsdata`

Denna händelse avfyras varje gång närvaron uppdateras.

#### `MediaKeys` (inaktiverad)

Avskedas när användaren använder mediaknappar på sitt tangentbord, [klicka här](/dev/presence/class#mediakeys) för att få mer information om mediaknappar.

#### `iFrameData`

Sparas när data tas emot från iFrame script.