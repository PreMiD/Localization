---
title: Presence Klasse
description: De belangrijkste klasse voor elke PreMiD presence
published: true
date: 2020-12-25T00:42:46.948Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:42.004Z
---

# Presence Klasse

## Introductie

De `Presence` klasse is erg handig omdat deze over basismethoden beschikt die we nodig hebben om presence te creëren.

Wanneer u een klasse aanmaakt, dient u de eigenschap `clientId` te specificeren.

```typescript
const presence = new Presence({
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

First parameter requires a [`PresenceData`](#presencedata-interface) interface or a [`Slideshow`](/dev/presence/slideshow) class to get all information that you want to display in your profile.

Tweede parameter definieert wanneer presence iets afspeelt of niet. Always use `true` if you provide timestamps in `PresenceData`.

### `clearActivity()`

Wist je huidige activiteit, de keybinds en de titel van het vak.

### `setTrayTitle(String)`

> Deze methode werkt alleen op Mac OS. 
> 
> {.is-warning}

Stelt de systeemtitel in op de menubalk.

### `createSlideshow()`

Creates a new `Slideshow` class.

```typescript
const slideshow = presence.createSlideshow();
```

This is suggested to do right when you make the `Presence` class.

```typescript
const presence = new Presence({
    clientId: "514271496134389561" // Example clientId
  }),
  slideshow = presence.createSlideshow();
```

You can find the documentation for the `Slideshow` class [here](/dev/presence/slideshow).

### `getStrings(object)`

Een asynrone methode waarmee u vertaalde strings uit de extensie kunt krijgen.

U moet `Object` opgeven met sleutels die de sleutel voor teksten zijn, `keyValue` is de waarde van de tekst. A compilation of translated strings can be found using this endpoint: `https://api.premid.app/v2/langFile/presence/en/`

```typescript
// Retourneert `Playing` en `Paused` strings
// uit extensie.
const strings = await presence.getStrings({
  play: "general.playing",
  pause: "general.paused"
});

const playString = strings.play; // result: Playing
const pauseString = strings.pause; // result: Paused
```

Since v2.2.0 of the extension you can now get the strings of a certain language. This works well with the also newly added `multiLanguage` setting option.

We suggest you use the following code so it automatically updates the PresenceData if the user changes the selected language;

```typescript
// An interface of the strings you are getting (good for code quality and autocomplete).
interface LangStrings {
  play: string;
  pause: string;
}

async function getStrings(): Promise<LangStrings> {
  return presence.getStrings(
    {
      // The strings you are getting, make sure this fits with your LangStrings interface.
      play: "general.playing",
      pause: "general.paused"
    },
    // The ID is the ID of the multiLanguage setting.
    await presence.getSetting("ID")
  );
}

let strings: Promise<LangStrings> = getStrings(),
  // The ID is the ID of the multiLanguage setting.
  oldLang: string = await presence.getSetting("ID");

//! The following code must be inside the updateData event!
// The ID is the ID of the multiLanguage setting.
const newLang = await presence.getSetting("ID");
if (oldLang !== newLang) {
  oldLang = newLang;
  strings = getStrings();
}

const playString = strings.play; // result: Playing
const pauseString = strings.pause; // result: Paused
```

### `getPageletiable(String)`

Retourneert een variabele van de website als deze bestaat.

```typescript
const pageVar = getPageletiable(".pageVar");
console.log(pageVar); // This will log the "Variable content"
```

### `getExtensionVersion(Boolean)`

Geeft als resultaat de extensie versie die de gebruiker gebruikt.

```typescript
getExtensionVersion(onlyNumeric?: boolean): string | number;

const numeric = presence.getExtensionVersion();
console.log(numeric); // Will log 210
const version = presence.getExtensionVersion(false);
console.log(version); // Will log 2.1.0
```

### `getSetting(String)`

Retourneert de waarde van de instelling.

```typescript
const setting = await presence.getSetting("pdexID"); //Replace pdexID with the id of the setting
console.log(setting); // This will log the value of the setting
```

### `hideSetting(String)`

Verbergt de gegeven instelling.

```typescript
presence.hideSetting("pdexID"); // Replace pdexID with the id of the setting
```

### `showSetting(String)`

Toont gegeven instelling (werkt alleen als de instelling al verborgen was).

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

Console logs the given message in a format based of the presence in the `info` style.

```typescript
presence.info("Test") // This will log "test" in the correct styling.
```

### `success(String)`

Console logs the given message in a format based of the presence in the `success` style.

```typescript
presence.success("Test") // This will log "test" in the correct styling.
```

### `error(String)`

Console logs the given message in a format based of the presence in the `error` style.

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
  duration = timestampFromFormat(document.querySelector(".video-end").textContent);
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
const presenceData: PresenceData = {
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
