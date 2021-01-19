---
title: Kelas Presence
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

Ketika pengaturan `appMode` adalah `true` dan presence mengirim `PresenceData` kosong, maka app akan memunculkan aplikasi (gambar dan nama) ke profil user dari pada tidak sama sekali.

## Metode

### `getActivity()`

Mengembalikan objek `PresenceData` dari apa yang sedang ditampilkan presence.

### `setActivity(PresenceData | Slideshow, Boolean)`

Tetapkan aktivitas profil Anda sesuai dengan data yang disediakan.

Parameter pertama membutuhkan interface [`PresenceData`](#presencedata-interface) atau kelas [`Slideshow`](/dev/presence/slideshow) untuk mendapatkan semua informasi yang ingin kamu tampilkan di profilmu.

Parameter kedua menentukan kapan presence memainkan sesuatu atau tidak. Selalu gunakan `true` jika kamu memberikan timestamp di `PresenceData`.

### `clearActivity()`

Menghapus aktivitas Anda saat ini dan judul tray.

### `setTrayTitle(String)`

> Metode ini hanya bekerja di Mac OS. 
> 
> {.is-warning}

Setel judul baki pada bilah Menu.

### `createSlideshow()`

Membuat kelas `Slideshow` baru.

```typescript
const slideshow = presence.createSlideshow();
```

Disarankan untuk melakukan ini setelah membuat Kelas `Presence`:

```typescript
const presence = new Presence({
    clientId: "514271496134389561" // Contoh clientId
  }),
  slideshow = presence.createSlideshow();
```

Kamu bisa menemukan dokumentasi untuk kelas `Slideshow` [disini](/dev/presence/slideshow).

### `getStrings(Object)`

Metode asinkron yang memungkinkan kamu untuk mendapatkan string terjemahan dari extension.

Anda harus memberikan `Object` dengan kunci sebagai kunci untuk string, `keyValue` adalah nilai string. Daftar string terjemahan bisa ditemukan di titik akhir ini: `https://api.premid.app/v2/langFile/presence/en/`

```typescript
// Mengembalikan string `Playing` dan` Paused`
// dari ekstensi.
const strings = await presence.getStrings({
  play: "general.playing",
  pause: "general.paused"
});

const playString = strings.play; // hasil: Playing
const pauseString = strings.pause; // hasil: Paused
```

Sejak ekstensi v2.2.0 Anda sekarang bisa mendapatkan string bahasa tertentu. Ini sudah bekerja baik dengan opsi pengaturan `multiLanguage` yang baru ditambahkan.

Kami merekomendasikan Anda untuk menggunakan kode yang otomatis mengupdate PresenceData jika user mengganti bahasa yang dipilih;

```typescript
// Interface string yang Anda dapatkan (bagus untuk kualitas kode dan pelengkapan otomatis).
interface LangStrings {
  play: string;
  pause: string;
}

async function getStrings(): Promise<LangStrings> {
  return presence.getStrings(
    {
      // String yang Anda peroleh, pastikan ini sesuai dengan interface LangStrings Anda.
      play: "general.playing",
      pause: "general.paused"
    },
    // ID diisi dengan ID dari pengaturan multiLanguage.
    await presence.getSetting("ID")
  );
}

let strings: Promise<LangStrings> = getStrings(),
  // ID diisi dengan ID dari pengaturan multiLanguage.
  oldLang: string = await presence.getSetting("ID");

//! Kode dibawah harus berada didalam event updateData!
// ID diisi dengan ID dari pengaturan multiLanguage.
const newLang = await presence.getSetting("ID");
if (oldLang !== newLang) {
  oldLang = newLang;
  strings = getStrings();
}

const playString = strings.play; // hasil: Playing
const pauseString = strings.pause; // hasil: Paused
```

### `getPageletiable(String)`

Mengembalikan variabel dari situs web jika ada.

```typescript
const pageVar = getPageletiable(".pageVar");
console.log(pageVar); // Ini akan mencatat "Variable content"
```

### `getExtensionVersion(Boolean)`

Mengembalikan versi dari ekstensi yang digunakan pengguna.

```typescript
getExtensionVersion(onlyNumeric?: boolean): string | number;

const numeric = presence.getExtensionVersion();
console.log(numeric); // Akan mencatat 210
const version = presence.getExtensionVersion(false);
console.log(version); // Akan mencatat 2.1.0
```

### `getSetting(String)`

Mengembalikan isi dari pengaturan.

```typescript
const setting = await presence.getSetting("pdexID"); //Ubah pdexID dengan id dari setting
console.log(setting); // Ini akan mencatat isi dari setting
```

### `hideSetting(String)`

Sembunyikan pengaturan yang diberikan.

```typescript
presence.hideSetting("pdexID"); // Ubah pdexID dengan id dari pengaturan
```

### `showSetting(String)`

Tampilkan pengaturan yang diberikan (Hanya bekerja jika pengaturan telah disembunyikan).

```typescript
presence.showSetting("pdexID"); // Ubah pdexID dengan id dari pengaturan
```

### `getLogs()`

Mengembalikan catatan dari konsol situs web.

```typescript
const logs = await presence.getLogs();
console.log(logs); // Ini akan mencatat 100 catatan terbaru (dalam array).
```

**Catatan:** Membutuhkan `readLogs` untuk menjadi `true` di file `metadata.json`.

### `info(String)`

Mencetak pesan yang diberikan di konsol dalam format berdasarkan dengan presence di `info` style.

```typescript
presence.info("Test") // Ini akan mencatat "test" dengan styling yang benar.
```

### `success(String)`

Cetak pesan yang diberikan di konsol dengan format berdasarkan presence di `success` style.

```typescript
presence.success("Test") // Ini akan mencatat "test" dengan styling yang benar.
```

### `error(String)`

Cetak pesan yang diberikan di konsol dengan format berdasarkan presence di `error` style.

```typescript
presence.error("Test") // Ini akan mencatat "test" dengan styling yang benar.
```

### `getTimestampsfromMedia(HTMLMediaElement)`

Mengembalikan 2 `snowflake` timestamp pada `Array` yang bisa digunakan untuk `startTimestamp` dan `denTimestamp`.

```typescript
const timestamps = getTimestampsfromMedia(document.querySelector(".video"));
presenceData.startTimestamp = timestamps[0];
presenceData.endTimestamp = timestamps[1];
```

**Catatan:** `String` yang diberikan di querySelector di contoh.

### `getTimestamps(Number, Number)`

Mengembalikan 2 `snowflake` timestamp pada `Array` yang bisa digunakan untuk `startTimestamp` dan `denTimestamp`.

```typescript
const video = document.querySelector(".video"),
  timestamps = getTimestamps(video.currentTime, video.duration);
presenceData.startTimestamp = timestamps[0];
presenceData.endTimestamp = timestamps[1];
```

**Catatan:** `String` yang diberikan di querySelector di contoh.

### `timestampFromFormat(String)`

Mengkonversi string dengan forma t`HH:MM:SS` atau `MM:SS` atau `SS` menjadi integer (Tidak mengembalikan timestamp snowflake).

```typescript
const currentTime = timestampFromFormat(document.querySelector(".video-now").textContent),
  duration = timestampFromFormat(document.querySelector(".video-end").textContent),
  timestamps = getTimestamps(currentTime, duration);
presenceData.startTimestamp = timestamps[0];
presenceData.endTimestamp = timestamps[1];
```

**Catatan:** `String` yang diberikan di querySelector di contoh.

## `PresenceData` Antarmuka

Interface `PresenceData` disarankan untuk digunakan ketika kamu menggunakan metode `setActivity()`.

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
          <br>Anda harus mengonversi waktu Anda ke <code>timestamp</code> atau akan mendapatkan hitungan mundur yang salah.
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
  details: "Judul saya",
  state: "Deskripsi saya",
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
  // Melakukan sesuatu ketika data diperbarui.
});
```

Ada beberapa acara yang tersedia:

#### `UpdateData`

Event ini akan diluncurkan setiap kali presence diperbarui.

#### `iFrameData`

Diluncurkan saat menerima data dari iFrame script.
