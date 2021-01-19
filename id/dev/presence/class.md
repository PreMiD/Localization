---
title: Kelas Presensi
description: Kelas utama untuk setiap presence PreMiD
published: true
date: 2021-01-04T18:22:24.312Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:42.004Z
---

# Kelas Presence

## Perkenalan

Kelas `Presence` sangat berguna karena memiliki metode dasar yang kita perlukan untuk membuat presence.

Saat Anda membuat kelas, Anda harus menentukan properti `clientId`.

```typescript
const presence = new Presence({
  clientId: "514271496134389561" // Contoh clientId
});
```

### Properti

Disini ada tiga properti yang tersedia untuk kelas `Presence`.

#### `clientId`

Properti ini diperlukan agar presencemu bekerja, karena menggunakan id aplikasimu untuk menampilkan logo dan asetnya. Anda bisa mendapatkan di [halaman aplikasi anda](https://discordapp.com/developers/applications).

#### `injectOnComplete`

Ketika pengaturan `injectOnComplete` adalah `true` maka event `UpdateData` pertama untuk file `presence.ts` dan `iframe.ts` hanya akan dinyalakan ketika halaman sudah sepenuhnya termuat.

#### `appMode`

When setting `appMode` to `true` and the presence were to send an empty `PresenceData`, the app will show the application (image and name) on the user's profile instead of nothing.

## Metode

### `getActivity()`

Mengembalikan objek `PresenceData` dari apa yang sedang ditampilkan presence.

### `setActivity(PresenceData | Slideshow, Boolean)`

Tetapkan aktivitas profil Anda sesuai dengan data yang disediakan.

Parameter pertama membutuhkan interface [`PresenceData`](#presencedata-interface) atau kelas [`Slideshow`](/dev/presence/slideshow) untuk mendapatkan semua informasi yang ingin kamu tampilkan di profilmu.

Parameter kedua menentukan kapan presence memainkan sesuatu atau tidak. Selalu gunakan `true` jika kamu memberikan timestamp di `PresenceData`.

### `clearActivity()`

Clears your current activity and the tray title.

### `setTrayTitle(String)`

> Metode ini hanya bekerja di Mac OS. 
> 
> {.is-warning}

Setel judul baki pada bilah Menu.

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

Metode asinkron yang memungkinkan kamu untuk mendapatkan string terjemahan dari extension.

Anda harus memberikan `Object` dengan kunci sebagai kunci untuk string, `keyValue` adalah nilai string. A list of translated strings can be found at this endpoint: `https://api.premid.app/v2/langFile/presence/en/`

```typescript
// Mengembalikan string `Playing` dan` Paused`
// dari ekstensi.
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

Mengembalikan variabel dari situs web jika ada.

```typescript
const pageVar = getPageletiable(".pageVar");
console.log(pageVar); // This will log the "Variable content"
```

### `getExtensionVersion(Boolean)`

Mengembalikan versi dari ekstensi yang digunakan pengguna.

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

Returns the logs of the websites console.

```typescript
const logs = await presence.getLogs();
console.log(logs); // This will log the latest 100 logs (in an array).
```

**Note:** Requires `readLogs` to be `true` in the `metadata.json` file.

### `info(String)`

Prints the given message in the console in a format based of the presence in the `info` style.

```typescript
presence.info("Test") // This will log "test" in the correct styling.
```

### `success(String)`

Prints the given message in the console in a format based of the presence in the `success` style.

```typescript
presence.success("Test") // This will log "test" in the correct styling.
```

### `error(String)`

Prints the given message in the console in a format based of the presence in the `error` style.

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

## `PresenceData` Antarmuka

The `PresenceData` interface is recommended to use when you are using the `setActivity()` method.

Antarmuka ini memiliki variabel berikut, semuanya adalah opsional.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Variabel</th>
      <th style="text-align:left">Deskripsi</th>
      <th style="text-align:left">Tipe</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">detail</td>
      <td style="text-align:left">Baris pertama di presence Anda, biasanya digunakan sebagai tajuk.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">state</td>
      <td style="text-align:left">Baris kedua di presence Anda.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">startTimestamp</td>
      <td style="text-align:left">Menentukan waktu saat ini.<br>
        Digunakan jika Anda ingin menampilkan berapa banyak <code>jam:menit:detik</code> tersisa.
          <br>Anda harus mengonversi waktu Anda menjadi <code>timestamp</code> atau Anda akan salah
          hitungan mundur.
      </td>
      <td style="text-align:left"><code>Number</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">endTimestamp</td>
      <td style="text-align:left">Menentukan durasi penuh.
        <br>Digunakan jika Anda ingin menampilkan berapa <code>jam:menit:detik</code> tersisa.
          <br>You must convert your time to <code>timestamp</code> or you will get a wrong
          countdown.
      </td>
      <td style="text-align:left"><code>Number</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">largeImageKey</td>
      <td style="text-align:left">Menentukan logo untuk presence.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">smallImageKey</td>
      <td style="text-align:left">Menentukan ikon kecil di sebelah logo presence.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">smallImageText</td>
      <td style="text-align:left">Menentukan teks yang akan ditampilkan kepada pengguna ketika ia akan mengarahkan ikon
        kecil.</td>
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

## Acara

Acara memungkinkan Anda untuk mendeteksi dan menangani beberapa perubahan atau panggilan yang dilakukan. Anda dapat berlangganan acara menggunakan metode `on`.

```typescript
presence.on("UpdateData", async () => {
  // Do something when data gets updated.
});
```

Ada beberapa acara yang tersedia:

#### `UpdateData`

Event ini akan diluncurkan setiap kali presence diperbarui.

#### `iFrameData`

Diluncurkan saat menerima data dari iFrame script.
