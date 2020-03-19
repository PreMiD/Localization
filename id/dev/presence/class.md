---
title: Kelas Presence
description: Kelas utama untuk setiap presence PreMiD
published: true
date: 2020-01-19T23:42:31.382Z
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

#### `tombolmedia`

Properti ini memberi tahu aplikasi kami untuk mendaftarkan ikatan kunci untuk kunci media dan memungkinkan kami menggunakan acara `MediaKeys` untuk kelas `Presence`.

Properti ini tidak diperlukan, tetapi jika Anda ingin mengaktifkan kunci media, Anda harus mengaturnya menjadi `true`.

**Semua acara kunci media dinonaktifkan untuk sementara waktu!**

```typescript
let presence = new Presence({
    clientId: "514271496134389561",
    mediaKeys: true // Mengizinkan pengguna menggunakan kunci media
});
```

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

### `getPageLetiable(String)`

Returns a variable from the website if it exists.

```typescript
var pageVar = getPageLetiable('.pageVar');
console.log(pageVar); // This will log the "Variable content"
```

## `presenceData` Interface

The `presenceData` interface is recommended to use when you are using the `setActivity()` method.

This interface has following variables, all of them are optional.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Variable</th>
      <th style="text-align:left">Deskripsi</th>
      <th style="text-align:left">Tipe</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">details</td>
      <td style="text-align:left">The first line in your presence, usually used as header.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">state</td>
      <td style="text-align:left">Second line in your presence.</td>
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
      <td style="text-align:left">Defines the logo for the presence.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">smallImageKey</td>
      <td style="text-align:left">Defines the small icon next to presence&apos;s logo.</td>
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
    // Do something when data gets updated.
});
```

There are few events available:

#### `UpdateData`

This event is fired every time the presence is being updated.

#### `MediaKeys` (disabled)

Fired when user uses media keys on his keyboard, [click here](/dev/presence/class#mediakeys) to get more information about media keys.

#### `iFrameData`

Fired when data is received from iFrame script.