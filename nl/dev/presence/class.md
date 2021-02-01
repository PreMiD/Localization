---
title: Presence Klasse
description: De belangrijkste klasse voor elke PreMiD presence
published: true
date: 2021-01-04T18:22:24.312Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:42.004Z
---

# Presence Klasse

## Introductie

De `Presence` klasse is erg handig omdat deze over basismethoden beschikt die we nodig hebben om presence te creëren.

Wanneer u een klasse aanmaakt, dient u de eigenschap `clientId` te specificeren.

```typescript
const presence = new presence({
  clientId: "514271496134389561" // Voorbeeld clientId
});
```

### Eigenschappen

Er zijn drie eigenschappen beschikbaar voor de `Presence` klasse.

#### `clientId`

Deze eigenschap is vereist om uw presence te laten werken, omdat uw client-id gebruikt word om het logo en de assets te weergeven. Je kunt het op je [applicatiepagina](https://discordapp.com/developers/applications) krijgen.

#### `injectOnComplete`

Wanneer je `injectOnComplete` op `true` zet dan wordt de eerste `UpdateData` evenement voor de `presence.ts` en `iframe.ts` bestanden pas afgevuurd als de pagina volledig geladen is.

#### `appMode`

Wanneer je `appMode` op `true` zet en de presence zou een lege `PresenceData` versturen, dan toont de app de applicatie (afbeelding en naam) op het profiel van de gebruiker in plaats van niets.

## Methodes

### `getActivity()`

Geeft als resultaat een `PresenceData` object van wat de presence die wordt weergegeven.

### `setActivity(PresenceData | Slideshow, Boolean)`

Stelt uw profielactiviteit in volgens de verstrekte gegevens.

De eerste parameter vereist een [`PresenceData`](#presencedata-interface) interface of een [`Slideshow`](/dev/presence/slideshow) klasse om alle informatie te krijgen die je wilt weergeven in je profiel.

Tweede parameter definieert wanneer presence iets afspeelt of niet. Gebruik altijd `true` als u timestamps verstrekt in `PresenceData`.

### `clearActivity()`

Wist je huidige activiteit en de tray titel.

### `setTrayTitle(String)`

> Deze methode werkt alleen op Mac OS. 
> 
> {.is-warning}

Stelt de systeemtitel in op de menubalk.

### `createSlideshow()`

Maakt een nieuwe `Slideshow` klasse aan.

```typescript
const slideshow = presence.createSlideshow();
```

Dit wordt aanbevolen om gelijk te doen wanneer je de `Presence` klasse maakt:

```typescript
const presence = new presence({
    clientId: "514271496134389561" // Voorbeeld clientId
  }),
  slideshow = presence.createSlideshow();
```

Je kunt de documentatie voor de `Slideshow` klasse [hier](/dev/presence/slideshow) vinden.

### `getStrings(object)`

Een asynrone methode waarmee u vertaalde strings uit de extensie kunt krijgen.

U moet `Object` opgeven met sleutels die de sleutel voor teksten zijn, `keyValue` is de waarde van de tekst. Op dit eindpunt kan een lijst van vertaalde tekenreeksen worden gevonden: `https://api.premid.app/v2/langFile/presence/en/`

```typescript
// Retourneert `Playing` en `Paused` strings
// uit extensie.
const strings = await presence.getStrings({
  play: "general.playing",
  pause: "general.paused"
});

const playString = strings.play; // Retourneert: Playing
const pauseString = strings.pause; // Retourneert: Paused
```

Sinds v2.2.0 van de extensie kunt u nu de strings van een bepaalde taal krijgen. Dit werkt goed met de nieuw toegevoegde `multiLanguage` instelling optie.

We raden je aan om de volgende code te gebruiken, zodat de presenceData automatisch wordt bijgewerkt als als de gebruiker de geselecteerde taal verandert;

```typescript
// Een interface van de strings die u krijgt (goed voor code kwaliteit en autocomplete).
interface LangStrings {
  play: string;
  pause: string;
}

async function getStrings(): Promise<LangStrings> {
  return presence.getStrings(
    {
      // De strings die je krijgt, zorg ervoor dat dit past bij uw LangStrings interface.
      play: "general.playing",
      pause: "general.paused"
    },
    // De ID is de ID van de multiLanguage instelling.
    await presence.getSetting("ID")
  );
}

let strings: Promise<LangStrings> = getStrings(),
  // De ID is de ID van de multiLanguage instelling.
  oldLang: string = await presence.getSetting("ID");

//! De volgende code moet binnen het updateData evenement!
// De ID is de ID van de multiLanguage instelling.
const newLang = await presence.getSetting("ID");
if (oldLang !== newLang) {
  oldLang = newLang;
  strings = getStrings();
}

const playString = strings.play; // Retourneert: Playing
const pauseString = strings.pause; // Retourneert: Paused
```

### `getPageletiable(String)`

Retourneert een variabele van de website als deze bestaat.

```typescript
const pageVar = getPageletiable(".pageVar");
console.log(pageVar); // Dit zal de "Variabele content" loggen
```

### `getExtensionVersion(Boolean)`

Geeft als resultaat de extensie versie die de gebruiker gebruikt.

```typescript
getExtensionVersion(onlyNumeric?: boolean): string | number;

const numeric = presence.getExtensionVersion();
console.log(numeric); // Geeft terug: 210
const version = presence.getExtensionVersion(false);
console.log(version); // Geeft terug: 2.1.0
```

### `getSetting(String)`

Retourneert de waarde van de instelling.

```typescript
const setting = await presence.getSetting("pdexID"); // Vervang pdexID met de id van de instelling
console.log(setting); // Dit zal de waarde van de instelling loggen
```

### `hideSetting(String)`

Verbergt de gegeven instelling.

```typescript
presence.hideSetting("pdexID"); // vervang pdexID met het id van de instelling
```

### `showSetting(String)`

Toont gegeven instelling (werkt alleen als de instelling al verborgen was).

```typescript
presence.showSetting("pdexID"); // vervang pdexID met het id van de instelling
```

### `getLogs()`

Geeft de logs van de websites console.

```typescript
const logs = await presence.getLogs();
console.log(logs); // Dit zal de laatste 100 logs loggen (in een array).
```

**Opmerking:** Vereist `readLogs` op `true` te zijn in het `metadata.json` bestand.

### `info(String)`

Toont het gegeven bericht in de console in een formaat gebaseerd op de presence in de `info` stijl.

```typescript
presence.info("Test") // Dit zal "test" in de juiste stijl loggen.
```

### `success(String)`

Toont het gegeven bericht in de console in een formaat gebaseerd op de presence in de `success` stijl.

```typescript
presence.success("Test") // Dit zal "test" in de juiste styling loggen.
```

### `error(String)`

Toont het gegeven bericht in de console in een formaat gebaseerd op de presence in de `error` stijl.

```typescript
presence.error("Test") // Dit zal "test" in de juiste stijl loggen.
```

### `getTimestampsfromMedia(HTMLMediaElement)`

Retourneert 2 `snowflake` timestamps in een `Array` die gebruikt kan worden voor `startTimestamp` en `endTimestamp`.

```typescript
const timestamps = getTimestampsfromMedia(document.querySelector(".video"));
presenceData.startTimestamp = timestamps[0];
presenceData.endTimestamp = timestamps[1];
```

**Opmerking:** De gegeven `String` in querySelector is een voorbeeld.

### `getTimestamps(Number, Number)`

Retourneert 2 `snowflake` timestamps in een `Array` die gebruikt kan worden voor `startTimestamp` en `endTimestamp`.

```typescript
const video = document.querySelector(".video"),
  timestamps = getTimestamps(video.currentTime, video.duration);
presenceData.startTimestamp = timestamps[0];
presenceData.endTimestamp = timestamps[1];
```

**Opmerking:** De gegeven `String` in querySelector is een voorbeeld.

### `timestampFromFormat(String)`

Zet een string met formaat `HH:MM:SS` of `MM:SS` of `SS` om in een getal (Geeft geen snowflake timestamp).

```typescript
const currentTime = timestampFromFormat(document.querySelector(".video-now").textContent),
  duration = timestampFromFormat(document.querySelector(".video-end").textContent),
  timestamps = getTimestamps(currentTime, duration);
presenceData.startTimestamp = timestamps[0];
presenceData.endTimestamp = timestamps[1];
```

**Opmerking:** De gegeven `String` in querySelector is een voorbeeld.

## `PresenceData` Interface

De `PresenceData` interface wordt aanbevolen om te gebruiken wanneer u de `setActivity()` methode gebruikt.

Dit scherm volgt variabelen, ze zijn allemaal optioneel.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Variabele</th>
      <th style="text-align:left">Beschrijving</th>
      <th style="text-align:left">Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">details</td>
      <td style="text-align:left">De eerste regel in uw presence, meestal gebruikt als header.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">state</td>
      <td style="text-align:left">Tweede regel in uw presence.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">startTimestamp</td>
      <td style="text-align:left">Definieert de huidige tijd.<br>
        Wordt gebruikt als je wilt weergeven hoeveel <code>uur:minuten:seconden</code> er over is.
          <br>Je moet je tijd omzetten in <code>timestamp</code> anders krijg je een verkeerde
          aftelling.
      </td>
      <td style="text-align:left"><code>Number</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">endTimestamp</td>
      <td style="text-align:left">Definieert de volledige duur.
        <br>Gebruikt als je wilt laten zien hoeveel <code>uren:minuten:seconden</code> er over is.
          <br>Je moet je tijd omzetten in <code>timestamp</code> anders krijg je een verkeerde
          aftelling.
      </td>
      <td style="text-align:left"><code>Number</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">largeImageKey</td>
      <td style="text-align:left">Definieert het logo voor de presence.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">smallImageKey</td>
      <td style="text-align:left">Definieert het kleine pictogram naast presence&apos;s logo.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">smallImageText</td>
      <td style="text-align:left">Definieert de tekst die wordt getoond aan de gebruiker wanneer hij over de kleine
        pictogram beweegt.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
  </tbody>
</table>

```typescript
const presenceData: presenceData = {
  details: "Mijn titel",
  state: "Mijn beschrijving",
  largeImageKey: "service_logo",
  smallImageKey: "small_service_icon",
  smallImageText: "Je hebt me bekeken, en wat nu?" ,
  startTimestamp: 1564444631188,
  endTimestamp: 1564444634734
};
```

## Events

Events stellen je in staat om wijzigingen of oproepen die zijn gemaakt te detecteren en te verwerken. Je kunt je abonneren op event met behulp van `on` methode.

```typescript
presence.on("UpdateData", async () => {
  // Doe iets wanneer data wordt bijgewerkt.
});
```

Er zijn een paar Events beschikbaar:

#### `UpdateData`

Dit evenement wordt afgevuurd elke keer dat de presence wordt bijgewerkt.

#### `iFrameData`

Wordt afgevuurd wanneer gegevens worden ontvangen uit iFrame script.
