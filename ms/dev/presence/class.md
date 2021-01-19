---
title: Kelas Presence
description: Kelas utama untuk setiap Presence di PreMiD
published: true
date: 2021-01-04T18:22:24.312Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:42.004Z
---

# Kelas Presence

## Pengenalan

Kelas `Presence` sangat berguna kerana ia mempunyai kaedah asas yang diperlukan untuk mencipta Presence.

Apabila anda mencipta kelas, anda mesti nyatakan sifat `clientId`.

```typescript
const presence = new Presence({
  clientId: "514271496134389561" // Contoh clientId
});
```

### Sifat-sifat

Terdapat tiga sifat yang wujud untuk kelas `Presence`.

#### `clientId`

Sifat ini diperlukan untuk membolehkan Presence anda berfungsi, kerana ia menggunakan id aplikasi anda untuk memaparkan logo dan asetnya. Anda boleh dapatkannya di [halaman aplikasi](https://discordapp.com/developers/applications) anda.

#### `injectOnComplete`

Apabila tetapkan nilai `injectOnComplete` kepada `true`, peristiwa `UpdateData` yang pertama untuk kedua-dua fail `presence.ts` dan `iframe.ts` hanya akan dijalankan apabila halaman telah dimuatkan sepenuhnya.

#### `appMode`

When setting `appMode` to `true` and the presence were to send an empty `PresenceData`, the app will show the application (image and name) on the user's profile instead of nothing.

## Kaedah

### `getActivity()`

Returns a `PresenceData` object of what the presence is displaying.

### `setActivity(PresenceData | Slideshow, Boolean)`

Tetapkan aktiviti profil anda mengikut data yang diberikan.

First parameter requires a [`PresenceData`](#presencedata-interface) interface or a [`Slideshow`](/dev/presence/slideshow) class to get all information that you want to display in your profile.

Parameter kedua menentukan sama ada Presence sedang memainkan sesuatu atau tidak. Always use `true` if you provide timestamps in `PresenceData`.

### `clearActivity()`

Clears your current activity and the tray title.

### `setTrayTitle(String)`

> Kaedah ini hanya berfungsi di Mac OS. 
> 
> {.is-warning}

Menetapkan tajuk talam di bar menu.

### `createSlideshow()`

Creates a new `Slideshow` class.

```typescript
const slideshow = presence.createSlideshow();
```

It is suggested to do this right after creating the `Presence` class:

```typescript
const presence = new Presence({
    clientId: "514271496134389561" // Example clientId
  }),
  slideshow = presence.createSlideshow();
```

You can find the documentation for the `Slideshow` class [here](/dev/presence/slideshow).

### `getStrings(Object)`

Kaedah tak segerak yang membolehkan anda dapatkan rentetan terjemahan dari sambungan.

Amda mesti sediakan `Object` dengan kekuncinya sebagai kekunci untuk rentetan, `keyValue` ialah nilai rentetan. Senarai rentetan yang diterjemah boleh dijumpai di titik akhir ini: `https://api.premid.app/v2/langFile/presence/en/`

```typescript
// Mengembalikan rentetan `Bermain` dan `Dijedakan`
// dari sambungan.
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

//! Kod di bawah mestilah berada dalam peristiwa updateData!
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

Mengembalikan pemboleh ubah dari laman sesawang jika ia wujud.

```typescript
const pageVar = getPageletiable(".pageVar");
console.log(pageVar); // This will log the "Variable content"
```

### `getExtensionVersion(Boolean)`

Mengembalikan versi sambungan yang pengguna guna.

```typescript
getExtensionVersion(onlyNumeric?: boolean): string | number;

const numeric = presence.getExtensionVersion();
console.log(numeric); // Will log 210
const version = presence.getExtensionVersion(false);
console.log(version); // Will log 2.1.0
```

### `getSetting(String)`

Returns value of setting.

```typescript
const setting = await presence.getSetting("pdexID"); //Replace pdexID with the id of the setting
console.log(setting); // This will log the value of the setting
```

### `hideSetting(String)`

Hides given setting.

```typescript
presence.hideSetting("pdexID"); // Replace pdexID with the id of the setting
```

### `showSetting(String)`

Shows given setting (Only works if the setting was already hidden).

```typescript
presence.showSetting("pdexID"); // Replace pdexID with the id of the setting
```

### `getLogs()`

Mengembalikan log bagi konsol laman sesawang.

```typescript
const logs = await presence.getLogs();
console.log(logs); // This will log the latest 100 logs (in an array).
```

**Note:** Requires `readLogs` to be `true` in the `metadata.json` file.

### `info(String)`

Mencetak mesej diberi ke konsol dalam format berasaskan Presence dalam gaya `info`.

```typescript
presence.info("Test") // This will log "test" in the correct styling.
```

### `success(String)`

Mencetak mesej diberi ke konsol dalam format berasaskan Presence dalam gaya `success`.

```typescript
presence.success("Test") // This will log "test" in the correct styling.
```

### `error(String)`

Mencetak mesej diberi ke konsol dalam format berasaskan Presence dalam gaya `error`.

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
  duration = timestampFromFormat(document.querySelector(".video-end").textContent),
  timestamps = getTimestamps(currentTime, duration);
presenceData.startTimestamp = timestamps[0];
presenceData.endTimestamp = timestamps[1];
```

**Note:** The given `String` in querySelector is an example.

## Antara Muka `presenceData`

The `PresenceData` interface is recommended to use when you are using the `setActivity()` method.

Antara muka ini mempunyai pemboleh ubah berikut, kesemuanya pilihan.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Pemboleh ubah</th>
      <th style="text-align:left">Description</th>
      <th style="text-align:left">Type</th>
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
      <td style="text-align:left">Menentukan waktu semasa.<br>
        Digunakan jika anda ingin paparkan berapa <code>jam:minit:saat</code> yang tinggal.
          <br>Anda mesti ubah waktu anda ke bentuk <code>cap masa</code> atau anda akan
          dapat kiraan masa menurun yang salah.
      </td>
      <td style="text-align:left"><code>Number</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">endTimestamp</td>
      <td style="text-align:left">Menentukan jangka masa penuh.
        <br>Digunakan jika anda ingin paparkan berapa <code>jam:minit:saat</code> yang tinggal.
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
      <td style="text-align:left">Menentukan tulisan yang akan ditunjukkan kepada pengguna apabila
        dia melalukan tetikus di atas ikon kecil.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
  </tbody>
</table>

```typescript
const presenceData: PresenceData = {
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

Peristiwa membolehkan anda kesan dan urus beberapa perubahan atau panggilan yang dibuat. Anda boleh melanggan peristiwa menggunakan kaedah `on`.

```typescript
presence.on("UpdateData", async () => {
  // Do something when data gets updated.
});
```

Terdapat beberapa peristiwa tersedia:

#### `UpdateData`

Peristiwa ini dijalankan setiap kali Presence dikemas kini.

#### `iFrameData`

Dijalankan apabila data diterima dari skrip iFrame.
