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

## Sedang klon projek

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
    "name": "PENGGUNA",
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
      "value": "\"%song%\" by %artist% atau lainnya dalam bahasa Inggeris",
      "placeholder": "gunakan %song% atau %artist%"
    },
    {
      "id": "ID",
      "title": "TAJUK PAPARAN",
      "icon": "IKON FONTAWESOME",
      "value": 0,
      "values": ["1", "2", "dll."]
    }
  ]
}
```

Sila salin kod di atas dan letakkannya di dalam fail `metadata.json` anda. Kini anda perlu ubah nilai sifat. Ingat bahawa ia perlu dalam bahasa Inggeris kerana terjemahan akan ditambah kemudian. Ambil perhatian bahawa sifat berikut adalah pilihan dan tidak diwajibkan dalam fail `metadata.json` anda, jika anda tidak bercadang untuk menggunakannya maka anda perlu membuangnya.

- `contributors`
- `altnames`
- `regExp`
- `iframe`
- `iFrameRegExp`
- `readLogs`
- `settings`

**Menjelaskan beberapa nilai pratetap:**

<table>
  <thead>
    <tr>
      <th style="text-align:left">Pemboleh ubah</th>
      <th style="text-align:left">Keterangan</th>
      <th style="text-align:left">Jenis</th>
      <th style="text-align:left">Optional</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>author</b></td>
      <td style="text-align:left">Harus mengandungi objek dengan nilai nama <code>name</code> dan id <code>id</code> milik pembangun Presence. Name is your Discord username without the identifier(#0000). User <code>id</code> can be copied from Discord by enabling developer
        mode and right-clicking on your profile.</td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>contributors</b></td>
      <td style="text-align:left">Should contain an Object with the <code>name</code> and <code>id</code> of the presence developer. Name is your Discord username without the identifier(#0000). User <code>id</code> can be copied from Discord by enabling developer
        mode and right-clicking on your profile.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>Yes</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>service</b></td>
      <td style="text-align:left">Tajuk bagi perkhidmatan yang Presence ini sokong.<br>
      (Mestilah nama yang sama dengan nama folder di mana semuanya berada)</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>altnames</b></td>
      <td style="text-align:left">Membolehkan carian Presence menggunakan nama alternatif.<br>
      Untuk digunakan dalam Presence yang mempunyai nama berlainan dalam bahasa yang berlainan (spt. Pokémon dan 포켓몬스터).<br>
      Anda juga boleh gunakannya untuk Presence yang mempunyai aksara istimewa supaya anda tidak perlu menaip aksara tersebut (spt. Pokémon dan Pokemon).</td>
      <td style="text-align:left"><code>Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Yes</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>description</b></td>
      <td style="text-align:left">Keterangan kecil mengenai Presence, anda boleh gunakan keterangan perkhidmatan sekiranya anda tidak tahu apa untuk ditulis. Your description must have key pair values which indicate the language, and the description in that specific language. Make descriptions with the languages <i>that you know</i>, our translators will make changes to your metadata file.</td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b></td>
      <td style="text-align:left">URL perkhidmatan.<br><b>Contohnya:</b><code>vk.com</code><br>
      <b>URL ini mesti padan URL laman sesawang kerana ia akan mengesan sama ada laman sesawang tertentu itu laman sesawang yang akan disuntik skrip.</b><br> <b>JANGAN</b> tambah <code>https://</code> atau <code>http://</code> di dalam URL dan jangan letak tanda garis condong di penghujung:
      <code>https://premid.app/</code> -> <code>premid.app</code><br>
      <b>Nota</b>: Sesetengah URL mungkin ada <code>www.</code> atau benda lain di hadapan domain mereka. <b>JANGAN</b> lupa untuk menambahnya!<br>
      Anda boleh menambah banyak URL dengan membuat seperti ini:<br>
      <code>["URL1", "URL2", "DLL."]</code><br>
      Anda juga boleh gunakan ungkapan nalar (regExp) juga dikenali sebagai Regex untuk tugasan ini, dijelaskan lebih lanjut di bawah.</td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b></td>
      <td style="text-align:left">Rentetan ungkapan nalar digunakan untuk memadankan URL yang banyak.<br>
      Ungkapan nalar (regExp) atau juga dikenali sebagai Regex, boleh digunakan jika sesuatu laman sesawang mempunyai banyak subdomain.<br>
      Anda boleh gunakan regExp berikut untuk perkara tersebut:<br>
      <code>([a-z0-9]+)[.]domain[.]TLD"</code><br>
      TLD singkatan Top Level Domain iaitu Domain Paras Tertinggi seperti: .com .net (tetapi jangan masukkan titik).<br>
      <code>([a-z0-9]+)</code> maksudnya apa sahaja dari a ke z dan dari 0 ke 9.<br>
      Anda boleh mulakan dengan menonton <a href="https://youtu.be/sXQxhojSdZM">video</a> ini.<br>
      Anda boleh mencuba regExp anda di <a href="https://regex101.com/">Regex101</a>.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Yes</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>version</b></td>
      <td style="text-align:left">Version of your presence.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>logo</b></td>
      <td style="text-align:left">Link to service&apos;s logotype.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b></td>
      <td style="text-align:left">Link to your presence thumbnail.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>color</b></td>
      <td style="text-align:left"><code>#HEX</code> value. We recommend to use a primary color of the service
        that your presence supports.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>tags</b></td>
      <td style="text-align:left">Array with tags, they will help users to search your presence on the website.</td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>category</b></td>
      <td style="text-align:left">A string used to represent the category the presence falls under. Lihat kategori yang sah <a href="https://docs.premid.app/dev/presence/metadata#presence-categories">di sini</a>.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b></td>
      <td style="text-align:left">Menentukan sama ada <code>iFrames</code> akan digunakan.</td>
      <td style="text-align:left"><code>Boolean</code></td>
      <td style="text-align:left"><code>Yes</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b></td>
      <td style="text-align:left">A regular expression selector that selects iframes to inject into. Lihat regExp untuk maklumat lanjut.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Yes</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>readLogs</b></td>
      <td style="text-align:left">Menentukan sama ada sambungan patut baca log.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Yes</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>settings</b></td>
      <td style="text-align:left">Tatasusunan tetapan yang pengguna boleh ubah.<br>
      Baca lanjut mengenai tetapan Presence <a href="https://docs.premid.app/dev/presence/metadata#presence-settings">di sini</a>.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>Yes</code></td>
    </tr>
  </tbody>
</table>

We've made a `metadata.json` file creator for the lazy peeps [here](https://eggsy.xyz/projects/premid/mdcreator).

## Mulakan

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
  /*UpdateData sentiasa dijalankan, oleh itu ia patut digunakan sebagai kitaran segar semula anda, atau `tick`. Ini dipanggil beberapa kali sesaat apabila boleh.

    Ianya disyorkan untuk menetapkan fungsi lain di luar fungsi peristiwa ini yang akan mengubah nilai pemboleh ubah dan membuat kerja yang lebih berat jika anda memanggil data daripada sesuatu API.*/

  const presenceData: PresenceData = {
    largeImageKey:
      "key" /*Kekunci (nama fail) bagi Imej Besar atau Large Image pada Presence. Ini semua dimuat naik dan dinamakan di bahagian Rich Presence dalam aplikasi anda, dipanggil Art Assets atau Aset Seni*/,
    smallImageKey:
      "key" /*Kekunci (nama fail) gambar besar "Large Image" di Presence. Ini semua dimuat naik dan dinamakan di bahagian Rich Presence aplikasi anda yang dipanggil Art Assets atau Aset Seni*/,
    smallImageText: "Some hover text", //Tulisan yang akan dipaparkan apabila tetikus dilalukan atas imej kecil
    details: "Browsing Page Name", //Bahagian atas tulisan Presence
    state: "Reading section A", //Bahagian bawah tulisan Presence
    startTimestamp: 1577232000, //Cap masa epok unix untuk bila masa akan mula dikira
    endTimestamp: 1577151472000 //Jika anda ingin tunjukkan Baki Masa dan bukan Masa Berlalu, ini cap masa epok unix di mana pemasa akan berhenti
  }; /*Anda juga boleh memilih untuk menetapkan nilai largeImageKey di sini dan ubah yang lain menjadi subsifat pemboleh ubah, contohnya presenceSata.type = "blahblah"; contoh jenis: details, state, dll.*/

  if (presenceData.details == null) {
    //Ini akan dijalankan jika anda tidak tetapkan perincian Presence
    presence.setTrayTitle(); //Memadam tajuk talam bagi pengguna mac
    presence.setActivity(); /*Kemas kini Presence dengan tiada data, dengan itu memadamnya dan membuatkan imej besar sebagai ikon Aplikasi Discord, dan tulisan sebagai nama Aplikasi Discord*/
  } else {
    //Ini akan dijalankan jika anda tetapkan perincian Presence
    presence.setActivity(presenceData); //Kemas kini Presence dengan semua nilai daripada objek presenceData
  }
});
```

Anda boleh salin ini ke dalam fail `presence.ts` anda dan sunting nilainya. Penetapan kesemua nilai dilakukan di dalam peristiwa updateData.

Contohnya kami cadangkan anda lihat kod Presence seperti: 1337x atau 9GAG. Untuk maklumat lanjut mengenai kelas `Presence` sila klik [di sini](/dev/presence/class).

Sejak v2.2.0 adanya Slideshow, ini membolehkan anda menunjukkan beberapa antara muka `PresenceData` pada selang masa sesuatu, untuk maklumat lanjut mengenai kelas `Slideshow` boleh klik [sini](/dev/presence/slideshow).

## Tidak mampu dapatkan sesetengah data?!

Banyak laman sesawang menggunakan [iFrame](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([Inlineframes](https://en.wikipedia.org/wiki/HTML_element#Frames)). Tag HTML ini boleh mengandungi beberapa sumber seperti video. Tetapi mereka bukanlah berkaitan setiap masa. Sesetengahnya disembunyikan atau cuma tidak digunakan dengan aktif. Periksa jika anda boleh sarikan, maklumat yang anda perlukan, tanpa mereka sebelum anda membuat apa-apa kerja yang tidak diperlukan.

1. Periksanya di konsol pelayar anda (pastikan anda berada di tab **Elements** atau Unsur).
2. Cari (<kbd>CTRL</kbd>+<kbd>F</kbd> (Windows) atau <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
3. Lakukan `document.querySelectorAll("iframe")`.

Jika anda jumpa data anda dalam iFrame anda perlu lakukan berikut:

1. Cipta fail `iframe.ts`.
2. Tetapkan iFrame menjadi `true` dalam fail metadata anda.
3. Isikan fail iFrame anda.

```typescript
const iframe = new iFrame();
iframe.on("UpdateData", async () => {
  /*
  Dapatkan semua data anda perlukan daripada iFrame dan simpan
  dalam pemboleh ubah dan hantarkannya menggunakan iframe.send
  */
  iframe.send({
    //menghantar data
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

## Kompil

Buka konsol dalam folder anda dan taip `tsc -w` untuk mengkompil fail `presence.ts` ke dalam folder `/dist`.

# Memuatkan Presence

1. Buka tetingkap timbul dan terus memegang butang <kbd>Shift</kbd> di papan kekunci anda.
2. **Muatkan Presence**akan muncul di bahagian Presence.
3. Klik padanya ketika anda masih memegang butang <kbd>Shift</kbd>.
4. Pilih folder /dist bagi Presence anda.

# Beberapa perkara yang berguna

## Muat semula panas

Laman sesawang yang anda bangunkan Presence-nya dimuat semula secara automatiknya setiap kali anda simpan fail di dalam folder anda.

## Nyahpepijat

- Anda boleh letakkan `console.log("Test");` di antara kod anda dan tengok jika konsol pelayar anda berikan output tersebut. Jika ya maka teruskan dan cuba lagi selepas fungsi seterusnya. Jika tidak maka adanya ralat di atas.
- Jika itu tidak membantu anda juga maka cuba minta bantuan pembangun Presence di [pelayan Discord kami](https://discord.premid.app/).

# Fail dijelaskan

- [Presence Class](/dev/presence/class)
- [Kelas Slideshow](/dev/presence/slideshow)
- [iFrame Class](/dev/presence/iframe)
- [Fail Metadata](/dev/presence/metadata)
- [TypeScript Configuration](/dev/presence/tsconfig ""){.links-list}
