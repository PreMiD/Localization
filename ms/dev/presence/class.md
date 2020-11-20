---
title: Kelas Presence
description: Kelas utama untuk setiap Presence di PreMiD
published: true
date: 2020-07-29T15:12:55.925Z
tags:
editor: markdown
---

# Kelas Presence

## Pengenalan

Kelas `Presence` sangat berguna kerana ia mempunyai kaedah asas yang diperlukan untuk mencipta Presence.

 Apabila anda mencipta kelas, anda mesti nyatakan sifat `clientId`.

```typescript
let presence = new Presence({
    clientId: "514271496134389561" // Example clientId
});
```

Terdapat dua sifat yang wujud untuk kelas `Presence`.

#### `clientId`

Sifat `clientId` mesti disediakan untuk membolehkan Presence anda berfungsi, kerana ia menggunakan id aplikasi anda untuk memaparkan logo dan asetnya.

Anda boleh dapatkannya di [halaman aplikasi](https://discordapp.com/developers/applications) anda.

## Kaedah

### `getActivity()`

Mengembalikan objek `presenceData` berkaitan apa yang Presence paparkan.

### `setActivity(presenceData, Boolean)`

Tetapkan aktiviti profil anda mengikut data yang diberikan.

Parameter pertama memerlukan antara muka `presenceData` untuk mendapatkan segala maklumat yang ingin dipaparkan di profil anda.

Parameter kedua menentukan sama ada Presence sedang memainkan sesuatu atau tidak. Sentiasa gunakan nilai `true` sekiranya anda sediakan cap masa dalam `presenceData`.

### `clearActivity()`

Mengosongkan aktiviti semasa, ikatan kekunci dan tajuk talam.

### `setTrayTitle(String)`

> Kaedah ini hanya berfungsi di Mac OS. 
> 
> {.is-warning}

Menetapkan tajuk talam di bar menu.

### `getStrings(Object)`

An asyncronous method that allows you to get translated strings from extension. You must provide `Object` with keys being the key for string, `keyValue` is the string value. A compilation of translated strings can be found using this endpoint: `https://api.premid.app/v2/langFIle/extension/en`

```typescript
// Returns `Playing` and `Paused` strings
// from extension.
strings = await presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
});

const playString = strings.play // result: Playing back
const pauseString = strings.pause // result: Playback paused
```

### `getPageletiable(String)`

Returns a variable from the website if it exists.

```typescript
var pageVar = getPageletiable('.pageVar');
console.log(pageVar); // This will log the "Variable content"
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

## Antara Muka `presenceData`

Antara muka `presenceData` digalakkan penggunaannya apabila anda menggunakan kaedah `setActivity()`.

This interface has following variables, all of them are optional.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Variable</th>
      <th style="text-align:left">Keterangan</th>
      <th style="text-align:left">Jenis</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">details</td>
      <td style="text-align:left">Baris pertama dalam Presence anda, selalunya digunakan sebagai pengepala.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">state</td>
      <td style="text-align:left">Baris kedua dalam Presence anda.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">startTimestamp</td>
      <td style="text-align:left">Defines the current time.<br>
        Used if you want to display how much <code>hours:minutes:seconds</code> left.
          <br>You must convert your time to <code>timestamp</code> or you will get a wrong
          countdown.
      </td>
      <td style="text-align:left"><code>Number</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">endTimestamp</td>
      <td style="text-align:left">Defines the full duration.
        <br>Used if you want to display how much <code>hours:minutes:seconds</code> left.
          <br>You must convert your time to <code>timestamp</code> or you will get a wrong
          countdown.
      </td>
      <td style="text-align:left"><code>Number</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">largeImageKey</td>
      <td style="text-align:left">Menentukan logo untuk Presence anda.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">smallImageKey</td>
      <td style="text-align:left">Menentukan ikon kecil di sebelah logo Presence.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">smallImageText</td>
      <td style="text-align:left">Defines the text that will be shown to user when he will hover the small
        icon.</td>
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

Events allow you to detect and handle some changes or calls that were made. You can subscribe to events using the `on` method.

```typescript
presence.on("UpdateData", async () => {
    // Buat sesuatu apabila data dikemas kini.
});
```

There are few events available:

#### `UpdateData`

Peristiwa ini dijalankan setiap kali Presence dikemas kini.

#### `iFrameData`

Fired when data is received from iFrame script.
