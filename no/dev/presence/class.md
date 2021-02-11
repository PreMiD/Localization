---
title: Presence Klasse
description: Hovedklassen for hver preMiD tilstedeværelse
published: true
date: 2021-01-04T18:22:24.312Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:42.004Z
---

# Presence Klasse

## Introduksjon

`Presence` klassen er svært nyttig da den har grunnleggende metoder som vi trenger for å lage et nærvær.

Når du oppretter en klasse må du angi `klientId` egenskapen.

```typescript
const presence = new Presence({
  clientId: "514271496134389561" // eksempel clientId
});
```

### Egenskaper

Det er tre egenskaper tilgjengelig for `Presence` klasse.

#### `clientId`

Denne egenskapen er nødvendig for å gjøre ditt nærings arbeid, fordi den bruker program-ID for å vise dets logo og eiendeler. Du kan få det på [applikasjoner siden](https://discordapp.com/developers/applications).

#### `injectOnComplete`

Når du setter `injectOnComplete` to `true` den første `UpdateData` -hendelsen for begge det `trykket. s` og `integrerte rammer. ts` filer vil kun bli avfyrt når siden er fullstendig lastet.

#### `appMode`

Når du setter `appMode` til `sann` og nærværet skulle sende en tom `PresenceData`, appen vil vise programmet (bilde og navn) på brukerens profil i stedet for ingenting.

## Metoder

### `getActivity()`

Returnerer et `PresenceData` -objekt for hva tilstedeværelsen viser.

### `setActivity(PresenceData | Slideshow, Boolean)`

Angir din profilaktivitet i henhold til oppgitte data.

Første parameter krever en [`PresenceData`](#presencedata-interface) grensesnitt eller et [`Slideshow`](/dev/presence/slideshow) klasse for å få all informasjon som du vil vise i profilen din.

Andre parameter definerer når tilstedeværelse spiller noe eller ikke. Bruk alltid `sann` hvis du gir tidsstempler i `PresenceData`.

### `clearActivity()`

Fjerner din nåværende aktivitet og tittel på verktøyet.

### `setTrayTitle(String)`

> Denne metoden fungerer kun på Mac OS. 
> 
> {.is-warning}

Setter fellevennens tittel på menylinjen.

### `createSlideshow()`

Oppretter en ny `lysbildefremvisning` klassen.

```typescript
const slideshow = presence.createSlideshow();
```

Det er foreslått å gjøre dette rett etter å ha opprettet `Presence` klassen:

```typescript
const presence = new Presence({
    clientId: "514271496134389561" // Eksempel clientId
  }),
  slideshow = presence.createSlideshow();
```

Du finner dokumentasjon for `Slideshow` klasse [her](/dev/presence/slideshow).

### `getStrings(Object)`

En asynkronisk metode som lar deg få oversatt strenger fra utvidelse.

Du må oppgi `Object` med nøkler som nøkkel for streng, `nøkkelverdi` er strengverdien. En liste over oversatte strenger finnes på dette endepunktet: `https://api.premid.app/v2/langFile/presence/en/`

```typescript
// Returnerer `Playing` og `Paused` strenger
// fra utvidelsen.
const strings = await presence.getStrings({
  play: "gener.playing",
  pause: "generelle. aused"
});

konst playString = strenger.play; // resultat: Spiller
samtidig-pauseString = strenger.pause; // resultat: Paused
```

Siden v2.2.0 av utvidelsen kan du nå få strenger av et visst språk. Dette fungerer godt med den nylig lagt til `innstilling for multispråk`.

Vi foreslår at du bruker følgende kode, slik at det automatisk oppdaterer PresenceData hvis brukeren endrer det valgte språket;

```typescript
// Et grensesnitt av strengene du blir (bra for kodekvaliteten og autofullført).
interface LangStrings {
  spill: streng;
  pause: streng;
}

asynkroniske funksjoner getstringer(): Promise<LangStrings> {
  return presse. etStrings(
    {
      // trådene du hopper etter, Sørg for at dette passer med ditt LangStrings grensesnitt.
      spill: "generelt",
      pause: "general.paused"
    },
    // IDen er IDen for flerspråklig innstilling.
    await presence.getSetting("ID")
  );


la strenge: Promise<LangStrings> = getStrings(),
  // IDen er ID for flerspråklig innstilling.
  oldLang: string = await presence.getSetting("ID");

//! Følgende kode må være inne i oppdateringData hendelsen!
// ID-en er ID-en til flerspråklig innstilling.
const newLang = await presence. etSetting("ID");
hvis (oldLang ! = newLang) {
  oldLang = newLang;
  strenger = getStrings();
}

konst playString = strenger. lay; // resultat: Leke
konst pauseString = strenger.pause; // resultat: Paused
```

### `getPageletiable(String)`

Returnerer en variabel fra nettsiden hvis den eksisterer.

```typescript
const pageVar = getPageletiable(".pageVar");
console.log(pageVar); // Dette vil logge "Variable content"
```

### `getExtensionVersion(Boolean)`

Returnerer versjonen av utvidelsen brukeren bruker.

```typescript
getExtensionVersion(onlyNumeric?: boolean): strengnummer;

konst numerisk = presence.getExtensionVersion();
konsoll. og(numerisk); // Will log 210
const version = presence.getExtensionVersion(false);
console.log(versjon); // Will log 2.1.0
```

### `getSetting(String)`

Returverdien av innstillingen.

```typescript
const setting = await presence.getSetting("pdexID"); /Replace pdexID med id for setting
console.log(innstilling); // Dette vil logge verdien av innstillingen
```

### `hideSetting(String)`

Utlegg gitt innstilling.

```typescript
presence.hideSetting(«pdexID»); // Erstatt pdexID med id for innstillingen
```

### `showSetting(String)`

Viser gitte innstillinger (fungerer bare hvis innstillingen allerede var utlegg).

```typescript
presence.showSetting(«pdexID»); // Erstatt pdexID med id for innstillingen
```

### `getLogs()`

Returnerer loggene fra nettsidens konsoll.

```typescript
const logs = await presence.getLogs();
console.log(logs); // Dette vil logge de siste 100 loggene (i en arra).
```

**Merk:** krever `lesningslogger` for å være `sann` i filen `metadata.json`.

### `info(String)`

Skriver ut den oppgitte meldingen i konsollen på et format basert på tilstedeværelsen i `info`.

```typescript
presence.info("Test") // Dette kommer til å logge "test" på riktig stil.
```

### `success(String)`

Skriver ut den oppgitte meldingen i konsollen på et format basert på tilstedeværelsen i `suksess` stilen.

```typescript
presence.success("Test") // Dette kommer til å logge "test" på riktig stil.
```

### `error(String)`

Skriver ut den oppgitte meldingen i konsollen på et format basert på tilstedeværelsen i `feilstilen`.

```typescript
presence.error("Test") // Dette vil logge "test" i riktig stilling.
```

### `getTimestampsfromMedia(HTMLMediaElement)`

Returnerer 2 `snøflak` tidsstempler i en `matrise` som kan brukes i `starttidsstempel` og `sluttstempel`.

```typescript
const timestamps = getTimestampsfromMedia(document.querySelector(".video"));
presenceData.startTimestamp = timestamps[0];
presenceData.endTimestamp = timestamps[1];
```

**Note:** Den oppgitte `strengen` i querySelector er et eksempel.

### `getTimestamps(Number, Number)`

Returnerer 2 `snøflak` tidsstempler i en `matrise` som kan brukes i `starttidsstempel` og `sluttstempel`.

```typescript
const video = document.querySelector(".video"),
  timestamps = getTimestamps(video.currentTime, video.duration);
presenceData.startTimestamp = timestamps[0];
presenceData.endTimestamp = timestamps[1];
```

**Note:** Den oppgitte `strengen` i querySelector er et eksempel.

### `timestampFromFormat(String)`

Konverterer en streng med format `TT:MM:SS` eller `MM:SS` eller `SS` til et heltall (returnerer ikke snøflak tidsstempel).

```typescript
const currentTime = timestampFromFormat(document.querySelector(".video-now").textContent),
  duration = timestampFromFormat(document.querySelector(".video-end").textContent),
  timestamps = getTimestamps(currentTime, duration);
presenceData.startTimestamp = timestamps[0];
presenceData.endTimestamp = timestamps[1];
```

**Note:** Den oppgitte `strengen` i querySelector er et eksempel.

## `PresenceData` Grensesnitt

`PresenceData` grensesnittet anbefales å bruke når du bruker `setActivity() ()` metode.

Dette grensesnittet har fulgt variabler, alle er valgfrie.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Variabel</th>
      <th style="text-align:left">Beskrivelse</th>
      <th style="text-align:left">Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">detaljer</td>
      <td style="text-align:left">Første linje i nærvær, vanligvis brukt som topptekst.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">state</td>
      <td style="text-align:left">Andre linje i ditt nærvær.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">startTimestamp</td>
      <td style="text-align:left">Definerer det nåværende tidspunktet.<br>
        Brukes hvis du vil vise hvor mye <code>timer:minutter:sekunder</code> igjen.
          <br>Du må konvertere tid til <code>tidsstempel</code> eller du vil få feil
          nedtelling.
      </td>
      <td style="text-align:left"><code>Number</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">endTimestamp</td>
      <td style="text-align:left">Definerer hele varigheten.
        <br>Brukes hvis du vil vise hvor mye <code>timer:minutter:sekunder</code> igjen.
          <br>Du må konvertere tid til <code>tidsstempel</code> eller du vil få feil
          nedtelling.
      </td>
      <td style="text-align:left"><code>Number</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">largeImageKey</td>
      <td style="text-align:left">Definerer logoen for pressen.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">smallImageKey</td>
      <td style="text-align:left">Definerer det lille ikonet ved siden av nærvær&apos;s logo.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">smallImageText</td>
      <td style="text-align:left">Definerer teksten som vises til brukeren når han holder musen for det lille
        ikonet.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
  </tbody>
</table>

```typescript
const presenceData: PresenceData = {
  details: "My title",
  tilstand: "Min description",
  largeImageKey: "service_logo",
  small ImageKey: "small_service_icon",
  smallImageText: "Du hovret meg, og hva nå? ,
  startTimestamp: 1564444631188,
  endTimestamp: 1564444634734
};
```

## Events

Hendelser lar deg oppdage og håndtere noen endringer eller samtaler som er gjort. Du kan abonnere på hendelser ved hjelp av `i` metode.

```typescript
presence.on("UpdateData", async () => {
  // Gjøre noe når data blir oppdatert.
});
```

Det er få hendelser tilgjengelig:

#### `UpdateData`

Denne hendelsen avfyres hver gang nærværet blir oppdatert.

#### `iFrameData`

Lodd når data mottas fra iFrame script.
