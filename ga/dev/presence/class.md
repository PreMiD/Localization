---
title: Rang Láithreachta
description: An rang is mó do gach láithreacht PreMiD
published: true
date: 2021-02-26T20:42:26.910Z
tags:
editor: markdown
dateCreated: 2021-02-21T21:13:14.449Z
---

# Rang Láithreachta

## Réamhrá

Tá an `Presence` rang an-úsáideach mar tá modhanna bunúsacha aige a theastaíonn uainn chun láithreacht a chruthú.

Nuair a chruthaíonn tú rang caithfidh tú `clientId` maoin a shonrú.

```typescript
const presence = new Presence({
    clientId: "514271496134389561" // Sampla clientId
});
```

### Airíonna

Tá trí airí ar fáil don `Presence` rang.

#### `clientId`

Éilítear ar an maoin seo chun do láithreacht a chur ag obair, toisc go n-úsáideann sé d’aitheantas chun a lógó agus a shócmhainní a thaispeáint. Is féidir leat é a fháil ar do [leathanach iarratais](https://discordapp.com/developers/applications).

#### `injectOnComplete`

Nuair a bheidh tú ag socrú `injectOnComplete` chuig `true` an gcéad `UpdateData` imeacht le haghaidh na gcomhad `presence.ts` agus na `iframe.ts` gcomhad ní scaoilfear iad ach nuair a bheidh an leathanach luchtaithe go hiomlán.

#### `appMode`

Nuair a leagan síos `appMode` chun `true` a bhí agus an láithreacht a sheoladh folamh `PresenceData`, beidh an app thaispeáint ar an t-iarratas (íomhá agus ainm) ar an úsáideora phróifíl ionad rud ar bith.

## Modhanna

### `getActivity()`

Filleann sé `PresenceData` réad ar a bhfuil an láithreacht ag taispeáint.

### `setActivity(PresenceData | Slideshow, Boolean)`

Socraigh do ghníomhaíocht phróifíle de réir na sonraí a chuirtear ar fáil.

Éilíonn an chéad pharaiméadar [`PresenceData`](#presencedata-interface) comhéadan nó [`Slideshow`](/dev/presence/slideshow) rang chun gach faisnéis a theastaíonn uait a thaispeáint i do phróifíl a fháil.

Sainmhíníonn an dara paraiméadar nuair a bhíonn láithreacht ag imirt rud éigin nó nach bhfuil. Úsáid i gcónaí `true` má sholáthraíonn tú stampaí ama isteach `PresenceData`.

### `clearActivity()`

Glanann do ghníomhaíocht reatha agus teideal an tráidire.

### `setTrayTitle(String)`

> Ní oibríonn an modh seo ach ar Mac OS. 
> 
> {.is-warning}

Socraigh teideal an tráidire ar an Menubar.

### `createSlideshow()`

Cruthaíonn sé `Slideshow` rang nua.

```typescript
const slideshow = presence.createSlideshow();
```

Moltar é seo a dhéanamh i gceart tar éis an`Presence` rang a chruthú:

```typescript
const presence = new Presence({
    clientId: "514271496134389561" // Sampla clientId
  }),
  slideshow = presence.createSlideshow();
```

Is féidir leat na cáipéisí don `Slideshow` rang a fháil [anseo](/dev/presence/slideshow).

### `getStrings(Object)`

Modh asincrónach a ligeann duit teaghráin aistrithe a fháil ón síneadh.

Caithfidh tú `Object` eochracha a sholáthar mar eochair do shreang, `keyValue` is é luach na sreinge. Is féidir liosta de na teaghráin aistrithe a fháil ag an bpointe deiridh seo: `https://api.premid.app/v2/langFile/presence/en/`

```typescript
// Tuairisceáin teaghráin `Imeartha` agus `Sos`
// ón síneadh.
const strings = await presence.getStrings({
  play: "general.playing",
  pause: "general.paused"
});

const playString = strings.play; // result: Playing
const pauseString = strings.pause; // result: Paused
```

Ó v2.2.0 den síneadh is féidir leat teaghráin teanga áirithe a fháil anois. Oibríonn sé seo go maith leis an `multiLanguage` rogha socruithe nua-bhreise.

Molaimid duit an cód seo a leanas a úsáid ionas go ndéanann sé an PresenceData a nuashonrú go huathoibríoch má athraíonn an t-úsáideoir an teanga roghnaithe;

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

const playString = (await strings).play, // result: Playing
  pauseString = (await strings).pause; // result: Paused
```

### `getPageletiable(String)`

Seoltar athróg ar ais ón suíomh Gréasáin má tá sé ann.

```typescript
const pageVar = getPageletiable(".pageVar");
console.log(pageVar); // This will log the "Variable content"
```

### `getExtensionVersion(Boolean)`

Leagan ar ais den síneadh atá á úsáid ag an úsáideoir.

```typescript
getExtensionVersion(onlyNumeric?: boolean): string | number;

const numeric = presence.getExtensionVersion();
console.log(numeric); // Will log 210
const version = presence.getExtensionVersion(false);
console.log(version); // Will log 2.1.0
```

### `getSetting(String)`

Tuairisceáin luach an tsuímh.

```typescript
const const = await presence.getSetting("pdexID"); // Cuir id an tsuímh in ionad pdexID
console.log(setting); // Déanfaidh sé seo luach an tsuímh a logáil
```

### `hideSetting(String)`

Seithí tugtha suíomh.

```typescript
presence.hideSetting("pdexID"); // Cuir id an tsuímh in ionad pdexID
```

### `showSetting(String)`

Seónna a thugtar an socrú (Ní oibríonn sé ach má bhí an suíomh i bhfolach cheana féin).

```typescript
presence.showSetting("pdexID"); // Cuir id an tsuímh in ionad pdexID
```

### `getLogs()`

Filleann sé logaí an chonsóil láithreáin ghréasáin.

```typescript
const logs = await presence.getLogs();
console.log(logs); // Déanfaidh sé seo na 100 log is déanaí (in eagar) a logáil.
```

**Nóta:** Éilítear `readLogs` a bheith `true` sa `metadata.json` chomhad.

### `info(String)`

Priontaítear an teachtaireacht a thugtar sa chonsól i bhformáid bunaithe ar an láithreacht sa `info` stíl.

```typescript
presence.info("Tástáil") // Logálfaidh sé seo "tástáil" sa stíliú ceart.
```

### `success(String)`

Priontaítear an teachtaireacht a thugtar sa chonsól i bhformáid bunaithe ar an láithreacht sa `success` stíl.

```typescript
presence.success("Tástáil") // Logálfaidh sé seo "tástáil" sa stíliú ceart.
```

### `error(String)`

Priontaítear an teachtaireacht a thugtar sa chonsól i bhformáid bunaithe ar an láithreacht sa `error` stíl.

```typescript
presence.error("Tástáil") // Logálfaidh sé seo "tástáil" sa stíliú ceart.
```

### `getTimestampsfromMedia(HTMLMediaElement)`

Filleann 2 `snowflake` stampa ama ar cheann `Array` is féidir a úsáid le haghaidh `startTimestamp` agus `endTimestamp`.

```typescript
const timestamps = getTimestampsfromMedia(document.querySelector(".video"));
presenceData.startTimestamp = timestamps[0];
presenceData.endTimestamp = timestamps[1];
```

**Nóta** Is `String` sampla é an ceann a thugtar i querySelector.

### `getTimestamps(Number, Number)`

Filleann 2 `snowflake` stampa ama ar cheann `Array` is féidir a úsáid le haghaidh `startTimestamp` agus `endTimestamp`.

```typescript
const video = document.querySelector(".video"),
  timestamps = getTimestamps(video.currentTime, video.duration);
presenceData.startTimestamp = timestamps[0];
presenceData.endTimestamp = timestamps[1];
```

**Nóta** Is `String` sampla é an ceann a thugtar i querySelector.

### `timestampFromFormat(String)`

Athraíonn sé sreang le formáid `HH:MM:SS` nó `MM:SS` nó `SS` ina shlánuimhir (Ní fhilleann an stampa ama sciathán sneachta).

```typescript
const currentTime = timestampFromFormat(document.querySelector(".video-now").textContent),
  duration = timestampFromFormat(document.querySelector(".video-end").textContent),
  timestamps = getTimestamps(currentTime, duration);
presenceData.startTimestamp = timestamps[0];
presenceData.endTimestamp = timestamps[1];
```

**Nóta** Is `String` sampla é an ceann a thugtar i querySelector.

## Comhéadan `PresenceData`

Moltar an `PresenceData` comhéadan a úsáid agus an `setActivity()` modh á úsáid agat.

Tá na hathróga seo a leanas ag an gcomhéadan seo, tá gach ceann acu roghnach.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Athróg</th>
      <th style="text-align:left">Cur síos</th>
      <th style="text-align:left">Cineál</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">details</td>
      <td style="text-align:left">An chéad líne i do láthair, a úsáidtear de ghnáth mar cheanntásc.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">state</td>
      <td style="text-align:left">An dara líne i do láthair.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">startTimestamp</td>
      <td style="text-align:left">Sainmhínítear an t-am reatha.<br>
        Úsáidtear más mian leat an méid atá <code>hours:minutes:seconds</code> fágtha a thaispeáint.
          <br>Caithfidh tú do chuid ama a thiontú go dtí <code>timestamp</code> nó gheobhaidh tú comhaireamh síos mícheart.
      </td>
      <td style="text-align:left"><code>Number</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">endTimestamp</td>
      <td style="text-align:left">Sainmhínítear an fad iomlán.
        <br>Úsáidtear más mian leat an méid atá <code>hours:minutes:seconds</code> fágtha a thaispeáint.
          <br>Caithfidh tú do chuid ama a thiontú go dtí <code>timestamp</code> nó gheobhaidh tú comhaireamh síos mícheart.
      </td>
      <td style="text-align:left"><code>Number</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">largeImageKey</td>
      <td style="text-align:left">Sainmhínítear an deilbhín beag in aice le lógó an láithreachta.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">smallImageKey</td>
      <td style="text-align:left">Sainmhínítear an deilbhín beag in aice le lógó an láithreachta.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">smallImageText</td>
      <td style="text-align:left">Sainmhínítear an téacs a thaispeánfar don úsáideoir nuair a osclóidh sé an deilbhín beag.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
        <tr>
      <td style="text-align:left">buttons</td>
      <td style="text-align:left">Sraith de cnaipí, uas 2, lipéad is é an téacs cnaipe, agus is é url an nasc.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code>
      </td>
    </tr>
  </tbody>
</table>

```typescript
const presenceData: PresenceData = {
  details: "Mo theideal",
  state: "Mo thuairisc",
  largeImageKey: "service_logo",
  smallImageKey: "small_service_icon",
  smallImageText: "D'oscail tú mé, agus cad anois?",
  startTimestamp: 1564444631188,
  endTimestamp: 1564444634734
  buttons: [
    {
            label: "Cnaipe tástála1",
            url: "https://premid.app/"
        },
        {
            label: "Cnaipe tástála2",
            url: "https://premid.app/contributors"
        }
    ];
```

## Events

Ligeann imeachtaí duit roinnt athruithe nó glaonna a rinneadh a bhrath agus a láimhseáil. Is féidir leat liostáil le himeachtaí ag úsáid an `on` mhodha.

```typescript
presence.on("UpdateData", async () => {
  // Déan rud éigin nuair a dhéantar sonraí a nuashonrú.
});
```

Níl mórán imeachtaí ar fáil:

#### `UpdateData`

Scaoiltear an ócáid ​​seo gach uair a bhíonn an láithreacht á nuashonrú.

#### `iFrameData`

Breoslaithe nuair a fhaightear sonraí ó script iFrame.
