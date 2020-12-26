---
title: Pengembangan Presence
description:
published: true
date: 2020-12-26T15:02:54.817Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:02.843Z
---

> Semua presence disimpan disini: https://github.com/PreMiD/Presences 
> 
> {.is-info}

Versi `2.x` memperkenalkan [toko presence](https://premid.app/store). Pengguna sekarang bisa menambah dan menghapus presence favorit lewat tampilan pengguna [website](https://premid.app/).

> Sebelum memulai, sangat dianjurkan untuk melihat aturan presence kami. 
> 
> {.is-warning}

- [Aturan](https://docs.premid.app/dev/presence/guidelines)
{.links-list}

# Struktur

Semua presence ditulis dalam [TypeScript](https://www.typescriptlang.org/). [TypeScript](https://www.typescriptlang.org/) memiliki tipe definisi tambahan dari JavaScript, jadi identifikasi dan perbaikan bug menjadi lebih mudah.

## Instalasi

1. Install [Git](https://git-scm.com/).
2. Install [Node](https://nodejs.org/en/) (disertai [npm](https://www.npmjs.com/)).
3. Install [TypeScript](https://www.typescriptlang.org/index.html#download-links) (buka terminal dan `npm install -g typescript`).

## Mengcloning project

1. Buka terminal dan ketik `git clone https://github.com/PreMiD/Presences`.
2. Pilih folder pilihanmu.
3. Buka di editor kodemu.

## Membuat folder dan file

1. Go in the `websites` folder and then go into the folder with the first letter of the **name** (not an URL) of the service you want to support.
2. Buat folder dengan **nama** (bukan URL) dari layanan yang diinginkan.
3. Buatlah file `presence.ts` dan `tsconfig.json`.
4. Buatlah folder dinamakan `dist` didalamnya.
5. Buatlah file `metadata.json` didalam folder `dist`.

## Mengisi file tsconfig.json

Isi kode berikut kedalam file `tsconfig.json`.

```typescript
{
  "extends": "../../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
}
```

Untuk mempelajari lebih lanjut tentang konfgurasi TypeScript klik [disini](/dev/presence/tsconfig).

## Mengisi file metadata.json

Kami telah membuat pembuat file `metadata.json` untuk para pemalas [disini](https://eggsy.xyz/projects/premid/mdcreator). Dianjurkan untuk membaca secara seksama agar anda mengerti bagaimana caranya.

```json
{
  "$schema": "https://schemas.premid.app/metadata/1.3",
  "author": {
    "name": "USER",
    "id": "ID"
  },
  "contributors": [
    {
      "name": "USER",
      "id": "ID"
    }
  ],
  "service": "SERVICE",
  "altnames": ["SERVICE"],
  "description": {
    "en": "DESCRIPTION"
  },
  "url": "URL",
  "version": "VERSION",
  "logo": "URL",
  "thumbnail": "URL",
  "color": "#HEX000",
  "tags": ["TAG1", "TAG2"],
  "category": "CATEGORY",
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
      "title": "DISPLAY TITLE",
      "icon": "FONTAWESOME ICON",
      "value": true
    },
    {
      "id": "ID",
      "if": {
        "ID": true
      },
      "title": "DISPLAY TITLE",
      "icon": "FONTAWESOME ICON",
      "value": "\"%song%\" by %artist%",
      "placeholder": "use %song% or %artist%"
    },
    {
      "id": "ID",
      "title": "DISPLAY TITLE",
      "icon": "FONTAWESOME ICON",
      "value": 0,
      "values": ["1", "2", "etc."]
    }
  ]
}
```

Salin kode diatas dan tempel pada file `metadata.json`. Sekarang anda harus merubah value dari properti tersebut. Harap diingat bahwa properti berikut adalah opsional dalam file `metadata.json` anda, jika anda tidak berniat menggunakannya anda harus menghapusnya.

- `contributors`
- `altnames`
- `regExp`
- `iframe`
- `iFrameRegExp`
- `readLogs`
- `settings`

**Memperjelas beberapa preset value:**

<table>
  <thead>
    <tr>
      <th style="text-align:left">Variabel</th>
      <th style="text-align:left">Deskripsi</th>
      <th style="text-align:left">Tipe</th>
      <th style="text-align:left">Opsional</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>author</b></td>
      <td style="text-align:left">Should contain an Object with the <code>name</code> and <code>id</code> of the presence developer. Nama adalah username Discord anda tanpa identifier(#0000). <code>id</code> pengguna dapat disalin dari Discord dengan mengaktifkan developer
        mode dan klik kanan pada profil anda.</td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>contributors</b></td>
      <td style="text-align:left">Should contain an Object with the <code>name</code> and <code>id</code> of the presence developer. Nama adalah username Discord anda tanpa identifier(#0000). <code>id</code> pengguna dapat disalin dari Discord dengan mengaktifkan developer
        mode dan klik kanan pada profil anda.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>Yes</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>service</b></td>
      <td style="text-align:left">The title of the service that this presence supports.<br>
      (Must be the same name as the folder where everything is in)</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>altnames</b></td>
      <td style="text-align:left">Be able to search the presence using an alternative name.<br>
      Meant to be used for presences that have different names in different languages (e.g. Pokémon and 포켓몬스터).<br>
      You can also use it for presences that have special characters so you don't have to type those (e.g. Pokémon and Pokemon).</td>
      <td style="text-align:left"><code>Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Yes</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>description</b></td>
      <td style="text-align:left">Small description of the presence, you can use description of the service if you are out of ideas. Deskripsi harus memiliki value yang berpasangan yang menandakan bahasa, dan deskripsi dengan bahasa tertentu. Buat deskripsi dengan bahasa yang <i>anda mengerti</i>, translator kami yang akan merubah file metadata anda.</td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b></td>
      <td style="text-align:left">URL of the service.<br><b>Example:</b><code>vk.com</code><br>
      <b>This URL must match the URL of the website as it will detect whether or not this is the website to inject the script to.</b><br> Do <b>NOT</b> add <code>https://</code> or <code>http://</code> inside of the URL nor a slash at the end:
      <code>https://premid.app/</code> -> <code>premid.app</code><br>
      <b>Note</b>: Some URLs may have <code>www.</code> or something else in front of their domain. Do <b>NOT</b> forget to add it!<br>
      You can add multiple URLs by doing the following:<br>
      <code>["URL1", "URL2", "ETC."]</code><br>
      You could also use regExp also known as Regex for this task, explained further below.</td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>No</code></td>
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
      <td style="text-align:left"><code>Yes</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>version</b></td>
      <td style="text-align:left">Versi dari presence anda.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>logo</b></td>
      <td style="text-align:left">Link ke logotype dari layanan.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b></td>
      <td style="text-align:left">Link ke thumbnail presence.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>color</b></td>
      <td style="text-align:left"><code>#HEX</code> value. Kami menganjurkan untuk menggunakan warna utama layanan         yang didukung oleh presence anda.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>tag</b></td>
      <td style="text-align:left">Himpunan dengan tag, ini akan membantu pengguna untuk mencari presence anda pada website.</td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>category</b></td>
      <td style="text-align:left">String yang digunakan untuk mewakili kategori yang dimilki presence. Lihat semua kategori valid <a href="https://docs.premid.app/dev/presence/metadata#presence-categories">disini</a>.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b></td>
      <td style="text-align:left">Defines whether <code>iFrames</code> are used.</td>
      <td style="text-align:left"><code>Boolean</code></td>
      <td style="text-align:left"><code>Yes</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b></td>
      <td style="text-align:left">Penentu regular expression yang memilih iframe yang di inject. Lihat regExp untuk informasi lebih lanjut.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Yes</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>readLogs</b></td>
      <td style="text-align:left">Defines whether the extension should be reading logs.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Yes</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>settings</b></td>
      <td style="text-align:left">Sebuah susunan pengaturan yang dapat dirubah oleh pengguna.<br>
      Baca lebih lanjut tentang pengaturan presence <a href="https://docs.premid.app/dev/presence/metadata#presence-settings">disini</a>.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>Yes</code></td>
    </tr>
  </tbody>
</table>

Kami telah membuat pembuat file `metadata.json` untuk para pemalas [disini](https://eggsy.xyz/projects/premid/mdcreator).

## Memulai

```typescript
const presence = new Presence({
    clientId: "000000000000000000" //The client ID of the Application created at https://discordapp.com/developers/applications
  }),
  strings = presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
    //You can use this to get translated strings in their browser language
  });

/*

function myOutsideHeavyLiftingFunction(){
    //Grab and process all your data here

    // element grabs //
    // api calls //
    // variable sets //
}

setInterval(myOutsideHeavyLiftingFunction, 10000);
//Run the function separate from the UpdateData event every 10 seconds to get and set the variables which UpdateData picks up

*/

presence.on("UpdateData", async () => {
  /*UpdateData is always firing, and therefore should be used as your refresh cycle, or `tick`. Ini dinamakan beberapa kali dalam sedetik jika mungkin.

    It is recommended to set up another function outside of this event function which will change variable values and do the heavy lifting if you call data from an API.*/

  const presenceData: PresenceData = {
    largeImageKey:
      "key" /*The key (file name) of the Large Image on the presence. These are uploaded and named in the Rich Presence section of your application, called Art Assets*/,
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

Anda bisa menyalinnya ke file `presence.ts` dan merubah value nya. Pengaturan semua value dilakukan pada event updateData.

Contohnya kami sarankan unutuk melihat kode presence dari: 1337x or 9GAG. For more information about the `Presence` class click [here](/dev/presence/class).

Since v2.2.0 there are now Slideshows, this allows you to show multiple `PresenceData` interfaces on an interval, for more information click about the `Slideshow` class [here](/dev/presence/slideshow).

## Tidak bisa mendapat data tertentu?!

Banyak website menggunakan [iframes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([Inlineframes](https://en.wikipedia.org/wiki/HTML_element#Frames)). Tag html tersebut bisa berisi beberapa sumber seperti video. Tapi mereka kadang tidak relevan. Beberapa hanya tersembunyi atau tidak sering dipakai. Periksa jika anda bisa ekstrak, informasi yang dibutuhkan, tanpa infromasi tersebut sebelum melakukan pekerjaan sia-sia.

1. Periksa didalam konsol browser (pastikan anda berada pada tab **Elements**).
2. Cari (<kbd>CTRL</kbd>+<kbd>F</kbd> (Windows) atau <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
3. Jalankan `document.querySelectorAll("iframe")`.

Jika data anda ditemukan pada iFrame anda harus melakukan hal berikut:

1. Buatlah file `iframe.ts`.
2. Atur iFrame menjadi `true` pada file metadata.
3. Isi file iFrame anda.

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

4. Membuat file presence anda menerima data dari file iFrame.

```typescript
presence.on("iFrameData", (data) => {
  iFrameVideo = data.video;
  currentTime = data.time;
});
```

**Catatan:** Ini harus diletakkan diluar dari event updateData.

## Penyusunan

Buka konsol dalam folder anda dan ketik `tsc -w` untuk mengcompile `presence.ts` menjadi folder `/dist`.

# Memuat presence

1. Buka popup dan tahan tombol<kbd>Shift</kbd> pada keyboard.
2. **Load Presence** akan muncul pada bagian presence.
3. Klik sambil menahan tombol <kbd>Shift</kbd>.
4. Pilih folder /dist dari presence anda.

# Beberapa hal berguna

## Hot-reloading

Website yang anda sedang anda kembangkan akan otomatis reload setiap anda menyimpan file pada folder.

## Debugging

- Anda dapat memberi `console.log("Test");` diantara kode dan melihat apakah konsol browser memberi output tersebut. Jika iya lanjutkan dan ulangi pada function selanjutnya. Jika tidak berarti terdapat eror diatas.
- If that doesn't help you either then ask a presence developer on our [Discord server](https://discord.premid.app/) for help.

# File dijelaskan

- [Kelas Presensi](/dev/presence/class)
- [Slideshow Class](/dev/presence/slideshow)
- [Kelas iFrame](/dev/presence/iframe)
- [File Metadata](/dev/presence/metadata)
- [Konfigurasi TypeScript](/dev/presence/tsconfig ""){.links-list}
