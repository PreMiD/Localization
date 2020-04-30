---
title: Kelas Presence
description: Kelas utama untuk setiap presence PreMiD
published: true
date: 2020-04-08T19:33:34.075Z
tags:
---

# Kelas Presence

## Perkenalan

Kelas `Presence` sangat berguna karena memiliki metode dasar yang kita perlukan untuk membuat presence.

 Saat Anda membuat kelas, Anda harus menentukan properti `clientId`.

```typescript
let presence = new Presence({
    clientId: "514271496134389561" // Contoh clientId
});
```

Ada dua properti yang tersedia untuk kelas `Presence`.

#### `clientId`

Properti `clientId` harus disediakan untuk membuat presence Anda berfungsi, karena properti menggunakan id aplikasi Anda untuk menampilkan logo dan asetnya.

Anda bisa mendapatkan di [halaman aplikasi anda](https://discordapp.com/developers/applications).

## Metode

### `setActivity(presenceData, Boolean)`

Tetapkan aktivitas profil Anda sesuai dengan data yang disediakan.

Parameter pertama memerlukan antarmuka `presenceData` untuk mendapatkan semua informasi yang ingin Anda tampilkan di profil Anda.

Parameter kedua menentukan kapan presence memainkan sesuatu atau tidak. Selalu gunakan `true` jika Anda memberikan cap waktu di `presenceData`.

### `clearActivity()`

Menghapus aktivitas Anda saat ini, pengikat tombol dan judul baki.

### `setTrayTitle(String)`

> Metode ini hanya bekerja di Mac OS. 
> 
> {.is-warning}

Setel judul baki pada bilah Menu.

### `getStrings(Object)`

Memungkinkan Anda mendapatkan string yang diterjemahkan dari ekstensi. Anda harus memberikan `Object` dengan kunci sebagai kunci untuk string, `keyValue` adalah nilai string. Anda dapat menemukan beberapa string menggunakan titik akhir ini: `https://api.premid.app/v2/langFIle/extension/en`

```typescript
// Mengembalikan string `Playing` dan` Paused`
// dari ekstensi.
strings = await presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
});
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

### `getExtensionVersion(Boolean)`
Returns version of the extension the user is using.
```typescript
getExtensionVersion(onlyNumeric?: boolean): string | number;

var numeric = presence.getExtensionVersion();
console.log(numeric); // Will log 210
var version = presence.getExtensionVersion(false);
console.log(version); // Will log 2.1.0
```

### `getPageLetiable(String)`

Mengembalikan variabel dari situs web jika ada.

```typescript
var pageVar = getPageLetiable('.pageVar');
console.log(pageVar); // Ini akan mencatat "konten Variabel"
```

## `presenceData` Antarmuka

Antarmuka `presenceData` disarankan untuk digunakan saat Anda menggunakan metode `setActivity()`.

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
          <br>Anda harus mengonversi waktu Anda menjadi <code>timestamp</code> atau Anda akan salah
          hitungan mundur.
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
var presenceData: presenceData = {
    details: "Judul saya",
    state: "Deskripsi saya",
    largeImageKey: "service_logo",
    smallImageKey: "small_service_icon",
    smallImageText: "Anda membawa saya, dan bagaimana sekarang?",
    startTimestamp: 1564444631188,
    endTimestamp: 1564444634734
};
```

## Acara

Acara memungkinkan Anda untuk mendeteksi dan menangani beberapa perubahan atau panggilan yang dilakukan. Anda dapat berlangganan acara menggunakan metode `on`.

```typescript
presence.on("UpdateData", async () => {
    // Lakukan sesuatu saat data diperbarui.
});
```

Ada beberapa acara yang tersedia:

#### `UpdateData`

This event is fired every time the presence is being updated.

#### `iFrameData`

Fired when data is received from iFrame script.
