---
title: Pengembangan Presence
description:
published: true
date: 2020-10-17T23:04:47.105Z
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

- [Aturan](https://docs.premid.app/en/dev/presence/guidelines)
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

1. Buat folder dengan **nama** (bukan URL) dari layanan yang diinginkan.
2. Buatlah file `presence.ts` dan `tsconfig.json`.
3. Buatlah folder dinamakan `dist` didalamnya.
4. Buatlah file `metadata.json` didalam folder `dist`.

## Mengisi file tsconfig.json
Isi kode berikut kedalam file `tsconfig.json`.
```javascript
{
  "extends": "../../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
}
```
Untuk mempelajari lebih lanjut tentang konfgurasi TypeScript klik [disini](/dev/presence/tsconfig).

## Mengisi file metadata.json
We've made a `metadata.json` file creator for the lazy peeps [here](https://eggsy.xyz/projects/premid/mdcreator). Dianjurkan untuk membaca secara seksama agar anda mengerti bagaimana caranya.

```json
{
  "$schema": "https://schemas.premid.app/metadata/1.0",
  "author": {
    "name": "USER",
    "id": "ID"
  },
  "contributors": [{
    "name": "USER",
    "id": "ID"
  }],
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
  "settings": [
        { 
            "id": "ID",
            "title": "DISPLAY TITLE",
            "icon": "FONTAWESOME FREE ICON",
            "value": true
        },
        {
            "id": "ID",
            "if": {
                "ID": true
            },
            "title": "DISPLAY TITLE",
            "icon": "FONTAWESOME FREE ICON",
            "value": "\"%song%\" by %artist%",
            "placeholder": "use %song% or %artist%"
        },
        {
            "id": "ID",
            "title": "DISPLAY TITLE",
            "icon": "FONTAWESOME FREE ICON",
            "value": 0,
            "values": ["1", "2", "etc."]
        }
    ]
}
```

Salin kode diatas dan tempel pada file `metadata.json`. Sekarang anda harus merubah value dari properti tersebut. Harap diingat bahwa properti berikut adalah opsional dalam file `metadata.json` anda, jika anda tidak berniat menggunakannya anda harus menghapusnya.
- `contributors`
- `regExp`
- `iframe`
- `iFrameRegExp`
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
      <td style="text-align:left"><b>author</b>
      </td>
      <td style="text-align:left">Harus berisi object dengan <code>nama</code> dan <code>id</code> dari pengembang presence. Nama adalah username Discord anda tanpa identifier(#0000). <code>id</code> pengguna dapat disalin dari Discord dengan mengaktifkan developer
        mode dan klik kanan pada profil anda.</td>
      <td style="text-align:left"><code>Object</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>contributors</b>
      </td>
      <td style="text-align:left">Harus berisi object dengan <code>nama</code> dan <code>id</code> dari pengembang presence. Nama adalah username Discord anda tanpa identifier(#0000). <code>id</code> pengguna dapat disalin dari Discord dengan mengaktifkan developer
        mode dan klik kanan pada profil anda.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>Yes</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>service</b>
      </td>
      <td style="text-align:left">Judul dari layanan yang didukung oleh presence tersebut. <br>(harus memiliki nama sama dengan folder dimana semuanya terletak)</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>altnames</b>
      </td>
      <td style="text-align:left">Dapat mencari presence menggunakan nama alternatif. <br>Dimaksudkan untuk presence yang memiliki nama berbeda pada bahasa berbeda (misal Pokémon and 포켓몬스터). <br> Anda dapat juga menggunakannya untuk presence yang memilki karakter spesial agar anda tidak harus mengetiknya (misal Pokémon and Pokemon).
      </td>
      <td style="text-align:left"><code>Array&lt;String&gt;</code>
      </td>
      <td style="text-align:left"><code>Yes</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>description</b>
      </td>
      <td style="text-align:left">Sedikit deskripsi tentang presence, anda dapat menggunakan deskripsi dari layanan tersebut        jika anda kehabisan ide. Deskripsi harus memiliki value yang berpasangan yang menandakan bahasa, dan deskripsi dengan bahasa tertentu. Buat deskripsi dengan bahasa yang <i>anda mengerti</i>, translator kami yang akan merubah file metadata anda.</td>
      <td style="text-align:left"><code>Object</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b>
      </td>
      <td style="text-align:left">URL dari layanan <br><b>contoh:</b><code>vk.com</code><br>        <b>URL ini harus sama dengan URL yang dimiliki website sebab itu akan mendeteksi apakah ini adalah website yang akan diinject script. </b><br><b>JANGAN</b> menambahkan <code>https://</code> or <code>http://</code> kedalam URL atau garis miring diakhir: <code>https://premid.app/</code> -> <code>premid.app</code><br>
<b>Catatan</b>: beberapa URL mungkin memiliki <code>www.</code> atau sesuatu didepan domainnya. <b>JANGAN</b> lupa untuk menambahkannya!<br>
Kamu bisa menambahkan beberapa URL dengan cara seperti ini:<br>
<code>["URL1", "URL2", "DLL."]</code><br>
Kamu juga bisa menggunakan regExp juga dikenal sebagai Regex untuk hal ini, dijelaskan lebih lanjut di bawah.
      </td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b>
      </td>
      <td style="text-align:left">Sebuah string regular expression untuk mencocokkan beberapa url. <br>      regExp atau dikenal sebagai Regex, dapat digunakan jika sebuah website memiliki beberapa subdomain.<br>
Anda dapat menggunakan regExp yang telah disebut untuk itu:<br>
<code>([a-z0-9]+)[.]domain[.]TLD"</code><br>
TLD singkatan dari Top Level Domain contohnya: .com .net<br><code>([a-z0-9]+)</code> berarti apapun dari a sampai z dan 0 sampai 9<br>
        Anda bisa mendapatkan dasarnya dengan menonton <a href="https://youtu.be/sXQxhojSdZM">video ini</a><br> 
        Anda dapat menguji regExp pada <a href="https://regex101.com/">Regex101</a>
      </td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Yes</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>version</b>
      </td>
      <td style="text-align:left">Versi dari presence anda.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>logo</b>
      </td>
      <td style="text-align:left">Link ke logotype dari layanan.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b>
      </td>
      <td style="text-align:left">Link ke thumbnail presence.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>color</b>
      </td>
      <td style="text-align:left"><code>#HEX</code> value. Kami menganjurkan untuk menggunakan warna utama layanan         yang didukung oleh presence anda.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>tag</b>
      </td>
      <td style="text-align:left">Himpunan dengan tag, ini akan membantu pengguna untuk mencari presence anda pada website.</td>
      <td
      style="text-align:left"><code>String, Array&lt;String&gt;</code>
        </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>category</b>
      </td>
      <td style="text-align:left">String yang digunakan untuk mewakili kategori yang dimilki presence. Lihat semua kategori valid <a href="https://docs.premid.app/dev/presence/metadata#presence-categories">disini</a>.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b>
      </td>
      <td style="text-align:left">Menentukan apakah <code>iFrames</code> digunakan</td>
      <td style="text-align:left"><code>Boolean</code>
      </td>
      <td style="text-align:left"><code>Yes</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b>
      </td>
      <td style="text-align:left">Penentu regular expression yang memilih iframe yang di inject. Lihat regExp untuk informasi lebih lanjut.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Yes</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>settings</b>
      </td>
      <td style="text-align:left">Sebuah susunan pengaturan yang dapat dirubah oleh pengguna.<br>
      Baca lebih lanjut tentang pengaturan presence <a href="https://docs.premid.app/dev/presence/metadata#presence-settings">disini</a>.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>Yes</code>
      </td>
    </tr>
  </tbody>
</table>

We've made a `metadata.json` file creator for the lazy peeps [here](https://eggsy.xyz/projects/premid/mdcreator).

## Memulai

```javascript
var presence = new Presence({
    clientId: "000000000000000000" //The client ID of the Application created at https://discordapp.com/developers/applications
}),

strings = presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
    //You can use this to get translated strings
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

    Disarankan untuk mengatur function lainnya diluar event function tersebut yang akan merubah variable value dan melakukan kerja keras jika anda meminta data dari sebuah API.*/

    var presenceData: presenceData = {
        largeImageKey: "key", /*Key (nama file) dari gambar besar pada presence. Ini diupload dan dinamai pada bagian Rich Presence dari aplikasi anda, bernama Art Assets*/
        smallImageKey: "key", /*Key (nama file) dari gambar besar pada presence. Berikut adalah yang diupload dan dinamai pada bagian Rich Presence dari aplikasimu, bernama Art Assets*/
        smallImageText: "Some hover text", //Teks yang akan terlihat ketika hover pada gambar kecil
        details: "Browsing Page Name", //Bagian atas dari teks presence
        state: "Reading section A", //Bagian bawah dari teks presence
        startTimestamp: 1577232000, //Unix epoch timestamp untuk mulai menghitung
        endTimestamp: 1577151472000 //Jika anda ingin menampilkan waktu tersisa dari pada waktu berlalu, ini adalah unix epoch timestamp dimana hitung mundur selesai
    }; /*Secara opsional anda dapat mengatur largeimagekey disini dan merubahnya sebagai subproperti variabel, contohnya presenceSata.type = "blahblah"; type examples: details, state, etc.*/

    if (presenceData.details == null) {
        //Ini akan dijalankan jika anda tidak mengatur detail presence
        presence.setTrayTitle(); //Bersihkan tray title untuk pengguna mac
        presence.setActivity(); /*Update presence tanpa data, akan membersihkannya dan membuat gambar besar menjadi gambar Aplikasi Discord, dan teks menjadi nama Aplikasi Discord*/
    } else {
        //Ini akan dijalankan jika anda mengatur detail dari presence
        presence.setActivity(presenceData); //Update presence dengan semua value dari presenceData object
    }
});
```
Anda bisa menyalinnya ke file `presence.ts` dan merubah value nya. Pengaturan semua value dilakukan pada event updateData.

Contohnya kami sarankan unutuk melihat kode presence dari: 1337x or 9GAG.

Untuk informasi lebih lanjut tentang presence klik [disini](/dev/presence/class).

## Tidak bisa mendapat data tertentu?!

Banyak website menggunakan [iframes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([Inlineframes](https://en.wikipedia.org/wiki/HTML_element#Frames)). Tag html tersebut bisa berisi beberapa sumber seperti video. Tapi mereka kadang tidak relevan. Beberapa hanya tersembunyi atau tidak sering dipakai. Periksa jika anda bisa ekstrak, informasi yang dibutuhkan, tanpa infromasi tersebut sebelum melakukan pekerjaan sia-sia.

1. Periksa didalam konsol browser (pastikan anda berada pada tab **Elements**).
2. Cari (<kbd>CTRL</kbd>+<kbd>F</kbd> (Windows) atau <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
3. Jalankan `document.querySelectorAll("iframe")`.

Jika data anda ditemukan pada iFrame anda harus melakukan hal berikut:
1. Buatlah file `iframe.ts`.
2. Atur iFrame menjadi `true` pada file metadata.
3. Isi file iFrame anda.
```javascript
var iframe = new iFrame();
iframe.on("UpdateData", async () => {
  /*
  Ambil semua data yang anda butuhkan dari iFrame dan simpan dalam variable
  kemudian kirim menggunakan iframe.send
  */
  iframe.send({ //sending data
    video: video,
    time: video.duration
  }); 
});
```
4. Membuat file presence anda menerima data dari file iFrame.
```javascript
presence.on("iFrameData", data => {
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
- Jika itu tidak membantu anda dapat bertanya pengembang presence pada [server Discord kami](https://discord.premid.app/) untuk meminta bantuan.

# File dijelaskan
- [Kelas Presensi](/dev/presence/class)
- [Kelas iFrame](/dev/presence/iframe)
- [File Metadata](/dev/presence/metadata)
- [Konfigurasi TypeScript](/dev/presence/tsconfig)
{.links-list}
