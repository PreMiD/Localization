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

Kaedah tak segerak yang membolehkan anda dapatkan rentetan terjemahan dari sambungan. Amda mesti sediakan `Object` dengan kekuncinya sebagai kekunci untuk rentetan, `keyValue` ialah nilai rentetan. Himpunan rentetan terjemahan boleh dijumpai di titik akhir ini: `https://api.premid.app/v2/langFile/extension/ms`

```typescript
// Mengembalikan rentetan `Bermain` dan `Dijedakan`
// dari sambungan.
strings = await presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
});

const playString = strings.play // result: Playing back
const pauseString = strings.pause // result: Playback paused
```

### `getPageletiable(String)`

Mengembalikan pemboleh ubah dari laman sesawang jika ia wujud.

```typescript
var pageVar = getPageletiable('.pageVar');
console.log(pageVar); // Ini akan mengelog "Kandungan pemboleh ubah"
```

### `getExtensionVersion(Boolean)`
Mengembalikan versi sambungan yang pengguna guna.
```typescript
getExtensionVersion(onlyNumeric?: boolean): string | number;

var numeric = presence.getExtensionVersion();
console.log(numeric); // Will log 210
var version = presence.getExtensionVersion(false);
console.log(version); // Will log 2.1.0
```

### `getSetting(String)`
Mengembalikan nilai tetapan.
```typescript
var setting = await presence.getSetting("pdexID"); //Gantikan pdexID dengan ID tetapan
console.log(setting); // Ini akan log nilai tetapan
```

### `hideSetting(String)`
Menyembunyikan tetapan yang diberikan.
```typescript
presence.hideSetting("pdexID"); //Gantikan pdexID dengan ID tetapan
```

### `showSetting(String)`
Shows given setting (Only works if the setting was already hidden).
```typescript
presence.showSetting("pdexID"); //Replace pdexID with the id of the setting
```

## Antara Muka `presenceData`

Antara muka `presenceData` digalakkan penggunaannya apabila anda menggunakan kaedah `setActivity()`.

Antara muka ini mempunyai pemboleh ubah berikut, kesemuanya pilihan.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Pemboleh ubah</th>
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
          <br>Anda mesti ubah waktu anda ke bentuk <code>cap masa</code> atau anda akan
          dapat kiraan masa menurun yang salah.
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

Peristiwa membolehkan anda kesan dan urus beberapa perubahan atau panggilan yang dibuat. Anda boleh melanggan peristiwa menggunakan kaedah `on`.

```typescript
presence.on("UpdateData", async () => {
    // Buat sesuatu apabila data dikemas kini.
});
```

Terdapat beberapa peristiwa tersedia:

#### `UpdateData`

Peristiwa ini dijalankan setiap kali Presence dikemas kini.

#### `iFrameData`

Dijalankan apabila data diterima dari skrip iFrame.
