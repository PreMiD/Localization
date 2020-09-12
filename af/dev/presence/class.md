---
title: Aanwesigheidsklas
description: Die hoofklas vir elke PreMiD-teenwoordigheid
published: true
date: 2020-07-29T15:12:55.925Z
tags:
editor: markdown
---

# Aanwesigheidsklas

## Inleiding

Die `Aanwesigheid` klas is baie handig, aangesien dit basiese metodes het wat ons benodig om 'n teenwoordigheid te skep.

 Wanneer u 'n klas skep, moet u dit spesifiseer `kliënt-Id` eiendom.

```typescript
let presence = new Presence({
    clientId: "514271496134389561" // Example clientId
});
```

Daar is twee eiendomme beskikbaar vir ` Aanwesigheid` class.

#### `clientId`

`kliënt-ID` eiendom moet voorsien word om u teenwoordigheid te laat werk, want dit gebruik u aansoek-ID om die logo en bates daarvan te vertoon.

U kan dit op u [toepassingsbladsy](https://discordapp.com/developers/applications).

## Metodes

### `getActivity()`

Opbrengste a `teenwoordigheidData` voorwerp van wat die teenwoordigheid vertoon.

### `setActivity(presenceData, Boolean)`

Stel u profielaktiwiteit in volgens die gegewe data.

Eerste parameter vereis 'n `presenceData` koppelvlak om alle inligting wat u wil vertoon in u profiel te kry.

Tweede parameter definieer wanneer teenwoordigheid iets speel of nie. Gebruik dit altyd `waar` if you provide timestamps in `teenwoordigheidData`.

### `clearActivity()`

Wis u huidige aktiwiteit, die sleutelbande en die skinkbordtitel uit.

### `setTrayTitle(String)`

> Hierdie metode werk slegs op Mac OS. 
> 
> {.is-warning}

Sets the tray title on the Menubar.

### `getStrings(Object)`

'N Asynkrone metode waarmee u vertaalde snare van die uitbreiding kan kry. You must provide `Voorwerp` met sleutels wat die sleutel vir toutjies is, `sleutelwaarde` is die stringwaarde. 'N Samestelling van vertaalde snare kan gevind word met behulp van hierdie eindpunt: `https://api.premid.app/v2/langFIle/extension/en`

```typescript
// Wys snare 'Speel' en 'Onderbreek'
// vanaf uitbreiding.
strings = await presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
});

const playString = strings.play // result: Playing back
const pauseString = strings.pause // result: Playback paused
```

### `getPageletiable(String)`

Wys 'n veranderlike van die webwerf as dit bestaan.

```typescript
var pageVar = getPageletiable ('. pageVar');
console.log (pageVar); // Dit sal die "Veranderlike inhoud" aanmeld
```

### `getExtensionVersion(Boolean)`
Wys weergawe van die uitbreiding wat die gebruiker gebruik.
```typescript
getExtensionVersion(onlyNumeric?: boolean): string | number;

var numeric = presence.getExtensionVersion();
console.log(numeric); // Will log 210
var version = presence.getExtensionVersion(false);
console.log(version); // Will log 2.1.0
```

### `getSetting(String)`
Wys die waarde van die instelling.
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

## `teenwoordigheidData` Koppelvlak

Die `teenwoordigheidData` koppelvlak word aanbeveel om te gebruik wanneer u die `setActivity()` metode.

Hierdie koppelvlak het die volgende veranderlikes, wat almal opsioneel is.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Veranderlik</th>
      <th style="text-align:left">Beskrywing</th>
      <th style="text-align:left">Soort</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">besonderhede</td>
      <td style="text-align:left">Die eerste reël in u teenwoordigheid, gewoonlik as koptekst gebruik.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">state</td>
      <td style="text-align:left">Tweede reël in u teenwoordigheid.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">startTimestamp</td>
      <td style="text-align:left">Defines the current time.<br>
        Word gebruik as u wil wys hoeveel <code>ure:minute:sekondes</code> links.
          <br>U moet u tyd omskakel na <code>tydstempel</code> of jy sal verkeerd wees countdown.
      </td>
      <td style="text-align:left"><code>Number</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">endTimestamp</td>
      <td style="text-align:left">Definieer die volle duur.
        <br>Word gebruik as u wil wys hoeveel <code>ure:minute:sekondes</code> links.
          <br>U moet u tyd omskakel na <code>tydstempel</code> of jy sal verkeerd wees countdown.
      </td>
      <td style="text-align:left"><code>Number</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">largeImageKey</td>
      <td style="text-align:left">Definieer die logo vir die teenwoordigheid.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">smallImageKey</td>
      <td style="text-align:left">Definieer die klein ikoon langs die teenwoordigheid&apos;s logo.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">smallImageText</td>
      <td style="text-align:left">Definieer die teks wat aan die gebruiker getoon sal word wanneer hy die klein bietjie sal hou ikoon.</td>
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

Met gebeure kan u sekere veranderings of oproepe wat gemaak is, opspoor en hanteer. U kan op die gebeure inteken op die `aan` metode.

```typescript
teenwoordigheid.op ("UpdateData", async () => {    // Doen iets as data opgedateer word.
});
```

Daar is min geleenthede beskikbaar:

#### `UpdateData`

Hierdie geleentheid word afgeskiet elke keer as die teenwoordigheid opgedateer word.

#### `iFrameData`

Uitgeskakel wanneer data vanaf die iFrame-skrif ontvang word.
