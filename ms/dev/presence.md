---
title: Pembangunan Presence
description:
published: true
date: 2020-12-26T15:02:54.817Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:02.843Z
---

> Kesemua Presence kini disimpan di sini: https://github.com/PreMiD/Presences 
> 
> {.is-info}

Versi `2.x` memperkenalkan [kedai Presence](https://premid.app/store). Pengguna kini boleh menambah dan membuang Presence kegemaran mereka secara manual menerusi antara muka pengguna di [laman sesawang](https://premid.app/).

> Sebelum anda mula, anda amat digalakkan untuk melihat garis panduan Presence kami. 
> 
> {.is-warning}

- [Garis Panduan](https://docs.premid.app/dev/presence/guidelines)
{.links-list}

# Struktur

Kesemua Presence dikodkan dalam [TypeScript](https://www.typescriptlang.org/). [TypeScript](https://www.typescriptlang.org/) mempunyai pentakrifan jenis yang lebih pedas berbanding JavaScript, jadi pembaikian dan pengenalpastian pepijat adalah lebih mudah.

## Pemasangan

1. Pasang [Git](https://git-scm.com/).
2. Pasang [Node](https://nodejs.org/en/) (didatangkan dengan [npm](https://www.npmjs.com/)).
3. Pasang [TypeScript](https://www.typescriptlang.org/index.html#download-links) (buka terminal dan hantarkan `npm install -g typescript`).

## Klon projek

1. Buka terminal dan taip `git clone https://github.com/PreMiD/Presences`.
2. Pilih folder yang anda suka.
3. Buka ia dalam penyunting kod anda.

## Cipta folder dan fail

1. Masuk ke folder `websites` kemudian masuk ke folder dengan huruf pertama bagi **nama** (bukannya URL) perkhidmatan yang anda ingin sokong.
2. Cipta folder dengan **nama** (bukannya URL) perkhidmatan yang anda ingin sokong.
3. Cipta fail `presence.ts` dan `tsconfig.json` di dalamnya.
4. Cipta folder bernama `dist` di dalamnya.
5. Cipta fail `metadata.json` di dalam folder `dist` tersebut.

## Isi fail tsconfig.json

Sila letakkan kod di bawah ke dalam fail `tsconfig.json`.

```typescript
{
  "extends": "../../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
}
```

Untuk ketahui lebih lanjut mengenai tatarajah TypeScript sila klik [sini](/dev/presence/tsconfig).

## Isi fail metadata.json

Kami telah terbitkan pencipta fail `metadata.json` bagi mereka yang pemalas [di sini](https://eggsy.xyz/projects/premid/mdcreator). Namun, anda masih digalakkan untuk membaca bahagian ini supaya anda tahu cara ia berfungsi.

```json
{
  "$schema": "https://schemas.premid.app/metadata/1.3",
  "author": {
    "name": "NAMA",
    "id": "ID"
  },
  "contributors": [
    {
      "name": "PENGGUNA",
      "id": "ID"
    }
  ],
  "service": "PERKHIDMATAN",
  "altnames": ["PERKHIDMATAN"],
  "description": {
    "en": "KETERANGAN DALAM BAHASA INGGERIS"
  },
  "url": "URL",
  "version": "VERSI",
  "logo": "URL",
  "thumbnail": "URL",
  "color": "#HEX000",
  "tags": ["TAG1", "TAG2"],
  "category": "KATEGORI",
  "regExp": "REGEXP",
  "iFrameRegExp": "REGEXP",
  "iframe": false,
  "readLogs": false,
  "settings": [
    {
      "id": "ID",
      "multiLanguage": true
    },
    {
      "id": "ID",
      "title": "TAJUK PAPARAN",
      "icon": "IKON FONTAWESOME",
      "value": true
    },
    {
      "id": "ID",
      "if": {
        "ID": true
      },
      "title": "TAJUK PAPARAN",
      "icon": "IKON FONTAWESOME",
      "value": "\"%song%\" oleh %artist%",
      "placeholder": "gunakan %song% atau %artist%"
    },
    {
      "id": "ID",
      "title": "TAJUK PAPARAN",
      "icon": "IKON FONTAWESOME",
      "value": 0,
      "values": ["1", "2", "etc."]
    }
  ]
}
```

Sila salin kod di atas dan letakkannya di dalam fail `metadata.json` anda. Kini anda perlu ubah nilai sifat. Ambil perhatian bahawa sifat berikut adalah pilihan dan tidak diwajibkan dalam fail `metadata.json` anda, jika anda tidak bercadang untuk menggunakannya maka anda perlu membuangnya.

- `contributors`
- `altnames`
- `regExp`
- `iframe`
- `iFrameRegExp`
- `readLogs`
- `tetapan`

**Menjelaskan beberapa nilai pratetap:**

<table>
  <thead>
    <tr>
      <th style="text-align:left">Pemboleh ubah</th>
      <th style="text-align:left">Keterangan</th>
      <th style="text-align:left">Jenis</th>
      <th style="text-align:left">Pilihan</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>author</b></td>
      <td style="text-align:left">Harus mengandungi objek dengan nilai nama <code>name</code> dan id <code>id</code> milik pembangun Presence. Nama merujuk kepada nama Discord anda tanpa pengenal pasti (#0000). <code>Id</code> pengguna boleh disalin dari Discord dengan membolehkan
        mod pembangun dan mengklik-kanan profil anda.</td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>Tidak</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>contributors</b></td>
      <td style="text-align:left">Harus mengandungi objek dengan nilai nama <code>name</code> dan id <code>id</code> milik pembangun Presence. Nama merujuk kepada nama Discord anda tanpa pengenal pasti (#0000). <code>Id</code> pengguna boleh disalin dari Discord dengan membolehkan
        mod pembangun dan mengklik-kanan profil anda.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>Ya</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>service</b></td>
      <td style="text-align:left">Tajuk bagi perkhidmatan yang Presence ini sokong.<br>
      (Mestilah nama yang sama dengan nama folder di mana semuanya berada)</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Tidak</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>altnames</b></td>
      <td style="text-align:left">Membolehkan carian Presence menggunakan nama alternatif.<br>
      Untuk digunakan dalam Presence yang mempunyai nama berlainan dalam bahasa yang berlainan (spt. Pokémon dan 포켓몬스터).<br>
      Anda juga boleh gunakannya untuk Presence yang mempunyai aksara istimewa supaya anda tidak perlu menaip aksara tersebut (spt. Pokémon dan Pokemon).</td>
      <td style="text-align:left"><code>Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Ya</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>keterangan</b></td>
      <td style="text-align:left">Keterangan kecil mengenai Presence, anda boleh gunakan keterangan perkhidmatan sekiranya anda tidak tahu apa untuk ditulis. Keterangan anda mesti mempunyai nilai pasangan kekunci yang menyatakan bahasa terlibat, beserta keterangan dalam bahasa tersebut. Cipta keterangan dengan bahasa <i>yang anda tahu</i>, penterjemah kami akan buat perubahan ke fail metadata anda.</td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>Tidak</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b></td>
      <td style="text-align:left">URL perkhidmatan.<br><b>Contohnya:</b><code>vk.com</code><br>
      <b>URL ini mesti padan URL laman sesawang kerana ia akan mengesan sama ada laman sesawang tertentu itu laman sesawang yang akan disuntikkan skrip.</b><br> <b>JANGAN</b> tambah <code>https://</code> atau <code>http://</code> di dalam URL dan jangan letak tanda garis condong di penghujung:
      <code>https://premid.app/</code> -> <code>premid.app</code><br>
      <b>Nota</b>: Sesetengah URL mungkin ada <code>www.</code> atau benda lain di hadapan domain mereka. <b>JANGAN</b> lupa untuk menambahnya!<br>
      Anda boleh menambah banyak URL dengan membuat seperti ini:<br>
      <code>["URL1", "URL2", "DLL."]</code><br>
      Anda juga boleh gunakan ungkapan nalar (regExp) juga dikenali sebagai Regex untuk tugasan ini, dijelaskan lebih lanjut di bawah.</td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Tidak</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b></td>
      <td style="text-align:left">A regular expression string used to match urls.<br>
      regExp or also known as Regex, can be used if a website has multiple subdomains.<br>
      You could use the following regExp for that:<br>
      <code>([a-z0-9]+)[.]domain[.]TLD"</code><br>
      TLD standing for Top Level Domain for axample: .com .net (but do not enter the dot).<br>
      <code>([a-z0-9]+)</code> means anything from a to z and from 0 to 9.<br>
      You can get a quick starter by watching this <a href="https://youtu.be/sXQxhojSdZM">video</a>.<br>
      You can test your regExp at <a href="https://regex101.com/">Regex101</a>.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Ya</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>versi</b></td>
      <td style="text-align:left">Versi Presence anda.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Tidak</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>logo</b></td>
      <td style="text-align:left">Link to service&apos;s logotype.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Tidak</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b></td>
      <td style="text-align:left">Pautan ke lakaran kecil Presence anda.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Tidak</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>color</b></td>
      <td style="text-align:left"><code>#HEX</code> value. Kami menggalakkan anda menggunakan warna utama
        dari perkhidmatan yang Presence anda sokong.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Tidak</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>tag</b></td>
      <td style="text-align:left">Tatasusunan dengan tag, ianya akan bantu pengguna mencari Presence anda di laman sesawang.</td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Tidak</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>kategori</b></td>
      <td style="text-align:left">Rentetan digunakan untuk mewakili kategori yang mana Presence berada. Lihat kategori yang sah <a href="https://docs.premid.app/dev/presence/metadata#presence-categories">di sini</a>.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Tidak</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b></td>
      <td style="text-align:left">Defines whether <code>iFrames</code> are used.</td>
      <td style="text-align:left"><code>Boolean</code></td>
      <td style="text-align:left"><code>Ya</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b></td>
      <td style="text-align:left">A regular expression selector that selects iframes to inject into. See regExp for more info.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Ya</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>readLogs</b></td>
      <td style="text-align:left">Defines whether the extension should be reading logs.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Ya</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>tetapan</b></td>
      <td style="text-align:left">Tatasusunan tetapan yang pengguna boleh ubah.<br>
      Baca lanjut mengenai tetapan Presence <a href="https://docs.premid.app/dev/presence/metadata#presence-settings">di sini</a>.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>Ya</code></td>
    </tr>
  </tbody>
</table>

Kami telah terbitkan pencipta fail `metadata.json` bagi mereka yang pemalas [di sini](https://eggsy.xyz/projects/premid/mdcreator).

## Getting started

```typescript
const presence = new Presence({
    clientId: "000000000000000000" //ID klien bagi Aplikasi yang dicipta di https://discordapp.com/developers/applications
  }),
  strings = presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
    //Anda boleh gunakan ini untuk dapatkan rentetan diterjemah dalam bahasa pelayar mereka
  });

/*

function myOutsideHeavyLiftingFunction(){
    //Ambil dan proses data anda di sini

    // ambil unsur-unsur //
    // buat panggilan API //
    // tetapkan pemboleh ubah //
}

setInterval(myOutsideHeavyLiftingFunction, 10000);
//Jalankan fungsi secara berasingan daripada peristiwa UpdateData setiap 10 saat untuk mendapatkan dan menetapkan pemboleh ubah yang diambil oleh UpdateData

*/

presence.on("UpdateData", async () => {
  /*UpdateData sentiasa dijalankan, oleh itu ia patut digunakan sebagai kitaran segar semula anda, atau `tick`. This is called several times a second where possible.

    Ianya disyorkan untuk menetapkan fungsi lain di luar fungsi peristiwa ini yang akan mengubah nilai pemboleh ubah dan membuat kerja yang lebih berat jika anda memanggil data daripada sesuatu API.*/

  const presenceData: PresenceData = {
    largeImageKey:
      "key" /*Kekunci (nama fail) bagi Imej Besar atau Large Image pada Presence. These are uploaded and named in the Rich Presence section of your application, called Art Assets*/,
    smallImageKey:
      "key" /*The key (file name) of the Large Image on the presence. These are uploaded and named in the Rich Presence section of your application, called Art Assets*/,
    smallImageText: "Some hover text", //The text which is displayed when hovering over the small image
    details: "Browsing Page Name", //The upper section of the presence text
    state: "Reading section A", //The lower section of the presence text
    startTimestamp: 1577232000, //The unix epoch timestamp for when to start counting from
    endTimestamp: 1577151472000 //If you want to show Time Left instead of Elapsed, this is the unix epoch timestamp at which the timer ends
  }; /*Optionally you can set a largeImageKey here and change the rest as variable subproperties, for example presenceSata.type = "blahblah"; type examples: details, state, etc.*/

  if (presenceData.details == null) {
    //This will fire if you do not set presence details
    presence.setTrayTitle(); //Clears the tray title for mac users
    presence.setActivity(); /*Update the presence with no data, therefore clearing it and making the large image the Discord Application icon, and the text the Discord Application name*/
  } else {
    //This will fire if you set presence details
    presence.setActivity(presenceData); //Update the presence with all the values from the presenceData object
  }
});
```

Anda boleh salin ini ke dalam fail `presence.ts` anda dan sunting nilainya. Penetapan kesemua nilai dilakukan di dalam peristiwa updateData.

Contohnya kami cadangkan anda lihat kod Presence seperti: 1337x atau 9GAG. For more information about the `Presence` class click [here](/dev/presence/class).

Since v2.2.0 there are now Slideshows, this allows you to show multiple `PresenceData` interfaces on an interval, for more information click about the `Slideshow` class [here](/dev/presence/slideshow).

## Can't get certain data?!

A lot of websites are using [iframes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([Inlineframes](https://en.wikipedia.org/wiki/HTML_element#Frames)). These html tags can contain multiple sources such as videos. But they're not relevant every time. Some are hidden or just not actively used. Check if you can extract, the information you need, without them before you do unnecessary work.

1. Check for them in your browsers console (be sure that you are on the **Elements** tab).
2. Search (<kbd>CTRL</kbd>+<kbd>F</kbd> (Windows) or <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
3. Execute `document.querySelectorAll("iframe")`.

If you find that your data is in a iFrame you need to do the following:

1. Create a `iframe.ts` file.
2. Set iFrame to `true` in your metadata file.
3. Filling in your iFrame file.

```typescript
const iframe = new iFrame();
iframe.on("UpdateData", async () => {
  /*
  Get all the data you need out of the iFrame save them in variables
  and then sent them using iframe.send
  */
  iframe.send({
    //sending data
    video: video,
    time: video.duration
  });
});
```

4. Buatkan fail Presence anda terima data dari fail iFrame.

```typescript
presence.on("iFrameData", (data) => {
  iFrameVideo = data.video;
  currentTime = data.time;
});
```

**Nota:** Ini perlu diletakkan di luar peristiwa updateData.

## Compiling

Buka konsol dalam folder anda dan taip `tsc -w` untuk mengkompil fail `presence.ts` ke dalam folder `/dist`.

# Memuatkan Presence

1. Open the popup and hold the <kbd>Shift</kbd> button on your keyboard.
2. **Muatkan Presence**akan muncul di bahagian Presence.
3. Klik padanya ketika anda masih memegang butang <kbd>Shift</kbd>.
4. Pilih folder /dist milik Presence anda.

# Some helpful things

## Hot-reloading

The website you are developing on is automatically reloading every time you save a file in your folder.

## Debugging

- You can put `console.log("Test");` between your code and see if your browser console gives you that output. If yes then go on and try again after the next function. If not then there is an error above.
- If that doesn't help you either then ask a presence developer on our [Discord server](https://discord.premid.app/) for help.

# Files explained

- [Kelas Presence](/dev/presence/class)
- [Slideshow Class](/dev/presence/slideshow)
- [Kelas iFrame](/dev/presence/iframe)
- [Metadata File](/dev/presence/metadata)
- [Tatarajah TypeScript](/dev/presence/tsconfig ""){.links-list}
