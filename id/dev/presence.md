---
title: Pengembangan Presence
description:
published: true
date: 2020-04-22T18:39:49.395Z
tags:
---

> Semua presence disimpan disini: https://github.com/PreMiD/Presences 
> 
> {.is-info}

Versi `2.x` memperkenalkan [toko presence](https://premid.app/store). Pengguna sekarang bisa menambah dan menghapus presence favorit lewat tampilan pengguna [website](https://premid.app/).

# Aturan
> Jika anda tidak mengikuti aturan, a `Presence Verifier` akan meminta perubahan sesuai aturan atau pull request anda mungkin bisa ditutup dalam situasi tertentu. 
> 
> {.is-warning}

> Ketika membuat pull request tentang menambahkan atau mengganti presence yang sudah ada, anda **HARUS** menyertakan screenshot. Tetapi, perubahan pada file `metadata.json` atau file `tsconfig.json` suatu presence tidak memerlukan screenshot. * Screenshot anda HARUS di upload langsung ke GitHub dengan pull request, jangan menggunakan website third party untuk share gambar.* 
> 
> {.is-warning}

Saat menerbitkan presence ke GitHub, kami mengharuskan anda mengikuti beberapa aturan. Bagi beberapa, peraturan ini mungkin agak kejam. Tapi penerapan aturan ini bertujuan untuk mencegah masalah pada server kami.

## Pembuatan
> Kode yang dibuat HARUS *ditulis dengan baik* dan HARUS *bisa dibaca*. `DeepScan` di GitHub akan melaporkan kualitas kode ke `Presence Verification Team`. Kami sarankan fork anda up to date saat membuat pull request, untuk mengurangi false positives. 
> 
> {.is-warning}

- Pull request **HARUS** lengkap, anda harus memiliki struktur file yang layak, draft **TIDAK** diperbolehkan. Termasuk file `dist` folder, `presence.js`, dan file `metadata.json` yang ditunjukkan di contoh berikut:
```bash
presence
└── dist
    ├── metadata.json
    └── presence.js
```
atau jika menggunakan TypeScript dan `iframe` (semaksimal mungkin) :
```bash
presence
├── dist
│   ├── metadata.json
│   ├── presence.js
│   └── iframe.js
├── presence.ts
├── iframe.ts
└── tsconfig.json
```

Sebelum anda memulai mengerjakan presence, selalu ingat daftar berikut.
- Presence **HARUS** terkait website yang telah anda pilih.
- Presence **HARUS TIDAK** terkait website ilegal. Ini termasuk stresor, narkoba, pornografi dibawah umur, dll...
- Metadata presence **HARUS** memiliki konten yang ditulis dengan baik, termasuk judul sesuai, dan deskripsi.
- Media yang disertakan meliputi (icon/thumbnail) **HARUS** terkait dengan website dan memiliki ukuran dan kualitas yang wajar.
- Struktur file **HARUS** bersih dan terurus, jangan ada file sembarangan yang tidak berguna pada kegunaan presence.
- Presence **HARUS TIDAK** memiliki tujuan negatif. Ini meliputi mencuri/membocorkan informasi pribadi, memperburuk kinerja website, dll...
- Jika anda membuat presence untuk website yang berubah di masa mendatang, adalah tanggung jawab **ANDA** untuk memperbarui presence agar bekerja sesuai harapan. Jika anda tidak memperbaiki dalam 7 hari, maka pengembang presence lainnya diizinkan untuk **MENGGANTI** presence anda untuk menyesuaikan perubahan.
- Presence **HARUS** di uji coba sebelum penerbitan untuk memastikan semua bekerja sesuai yang diharapkan.
- Presence anda **HARUS** memiliki gambar dan deskripsi SFW terlepas dari apakah itu NSFW atau tidak. Jika presence anda tentang website NSFW, harap tambahkan tag `nsfw` pada metadata.
- Presence anda **TIDAK BISA** merubah penyimpanan lokal pada browser.
- Presence anda boleh menggunakan cookies untuk menyimpan data. Semua data disimpan oleh presence harus memiliki prefix `pmd_`.

## Perubahan
> Anda HARUS merubah versi **metadata** menjadi nilai lebih tinggi dari versi sebelumnya saat membuat perubahan ke **presence.js** atau **metadata.json**. 
> 
> {.is-warning}

Pada situasi tertentu, presence mungkin berperilaku aneh atau membutuhkan sedikit perubahan untuk meningkatkan kegunaannya. Berikut daftar yang **HARUS** diikuti dalam merubah presence.
- Anda tidak diperbolehkan menulis kembali sebuah presence atau merubah penciptanya. Jika pencipta presence telah terbanned dari server official atau belum membuat perubahan yang dibutuhkan dalam jangka 7 hari, anda boleh menghubungi `Presence Verifier` PreMiD untuk memeriksa apakah anda dapat menulis ulang presence yang dipilih.
- Jika anda membuat perubahan pada presence dan merubah setidaknya **SEPEREMPAT** dari codebase presence maka anda diperbolehkan menambahkan diri sebagai kontributor. Hubungi `Presence Verifier` untuk informasi lebih lanjut tentang hal ini.
- Pastikan perubahan memiliki fungsi. Ini meliputi perbaikan (kode dan typo), penambahan (deskripsi dan tag), dll... Jangan merubah gambar jika tidak outdated dan memiliki resolusi yang layak.
- Pastikan perubahan bisa bekerja sebelum diterbitkan. Jangan membuat pull request tanpa mengetahui hasil dari perubahan yang dibuat.

# Verifikasi

> Jika anda ingin menghubungi seseorang, gunakan server Discord official kami. Semua `Presence Verifiers` akan memiliki role tersendiri di profilnya.

Agar presence anda dapat mencapai toko, presence HARUS melalui suatu proses di GitHub untuk memastikan bekerja sesuai harapan. Berikut beberapa hal yang harus diperhatkan saat membuat pull request.

1. Dibutuhkan dua verifier untuk memastikan presence anda sesuai standar. Jika anda mendapatkan permintaan perubahan, lakukan upaya tepat untuk memperbaikinya atau presence tidak akan ditambahkan.
2. Jika kami meminta perubahan dan pull request anda melebihi **7 hari inaktif** tanpa membuat perubahan yang dibutuhkan, terpaksa akan kami tutup.
3. Anda diperbolehkan untuk mengambil screenshot perubahan yang dibuat bersama dengan pengguna lain, anda boleh menggabungkan screenshot untuk dilihat. ( misal pencipta tidak bisa mengaksesnya karena suatu alasan).
4. Jika ada sebuah update atau patch, screenshot **HARUS** menampilkan tambahan baru bekerja, bukan fitur lama dari pull requst sebelumnya.
5. Screenshot yang ditampilkan harus asli, tidak diedit.
6. Kode apapun yang digabung dalam repository akan terlisensi dalam **Mozilla Public License 2.0**.
7. Presence untuk domain gratis atau host (misal .TK, [all free Freenom domains], .RF.GD, dll...) **TIDAK** diperbolehkan, pengecualian dapat dibuat jika bukti pembayaran domain dapat ditunjukkan.
8. Bidang `smallImageKey` dan `smallImageText` berguna untuk memberi konteks tambahan/konteks sekunder (seperti "playing"/"paused" untuk website video, "browsing" untuk website reguler atau hal lain) bukan untuk mempromosikan profil discord atau yang tidak berhubungan PreMid.
9. Syarat logo adalah 1:1 (persegi) dalam 512px, untuk thumbnail, harus [wide promotional cards](https://i.imgur.com/3QfIc5v.jpg) atau [screenshot](https://i.imgur.com/OAcBmwW.png) jika pilihan pertama tidak tersedia.
10. Presence harus setidaknya memiliki 1 tag, ini merupakan syarat desain dan mungkin opsional dimasa depan.
11. Bidang `url` **HARUS TIDAK** berisi `http://` atau `https://`, ataupun parameter (misal presence untuk `https://www.google.com/search?gws_rd=ssl` akan hanya memiliki `www.google.com` pada bidang `url`).
12. Deskripsi dan tag harus selalu tersusun, walaupun hanya satu unsur. Untuk bidang `url`, harus hanya satu string jika satu domain.
13. Website tidak stabil yang selalu merubah API/domain, mengacak elemen HTML atau masih dalam pengembangan besar tidak diperbolehkan dan akan dihapus dari toko.

Setelah semua review tepat telah dicapai, pull request anda akan digabungkan dengan toko.

# Struktur (TypeScript)
Anda bisa memilih menulis presence menggunakan [JavaScript](https://www.javascript.com/) atau  [TypeScript](https://www.typescriptlang.org/). [TypeScript](https://www.typescriptlang.org/) memiliki beberapa definition tambahan, jadi identifikasi dan memeperbaiki bug akan jadi lebih mudah. Jika anda ingin menggunakan [JavaScript](https://www.javascript.com/) anda bisa langsung lanjut ke [Struktur (JavaScript)](/dev/presence#structure-javascript).

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
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
}
```
Untuk mempelajari lebih lanjut tentang konfgurasi TypeScript klik [disini](/dev/presence/tsconfig).

## Mengisi file metadata.json

Klik [disini](/dev/presence#filling-in-the-metadatajson-file-2) untuk melihat cara mengisinya. Anda akan dapat mengklik kembali dibawah dari penjelasannya.

Kami telah membuat pembuat file `metadata.json` bagi mereka yang malas [disini](https://eggsy.codes/projects/premid/mdcreator).

## Memulai

```javascript
var presence = new Presence({
    clientId: "000000000000000000" //Client ID dari Aplikasi yang dibuat di https://discordapp.com/developers/applications
}),

strings = presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
    //Gunakan ini untuk mendapat terjemahan string
});

/*

function myOutsideHeavyLiftingFunction(){
    //Ambil dan olah data anda disini

    // element grabs //
    // api calls //
    // variable sets //
}

setInterval(10000, myOutsideHeavyLiftingFunction); 
//Jalankan fungsi terpisah dari event UpdateData setiap 10 detik dan atur variabel yang diambil oleh UpdateData

*/


presence.on("UpdateData", async () => {
    /*UpdateData selalu berjalan, oleh karena itu sebaiknya digunakan sebagai refresh cycle, atau `tick`. This is called several times a second where possible.

    Dianjurkan untuk mempersiapkan function lain diluar event function ini yang akan merubah nilai variabel dan melakukan kerja keras jika anda meminta data dari API

    var presenceData = {
        largeImageKey: "key", /*Key (nama file) dari gambar besar pada presence. Ini diupload dan dinamai pada bagian Rich Presence dari aplikasi anda, bernama Art Assets*/
        smallImageKey: "key", /*Key (nama file) dari gambar besar pada presence. These are uploaded and named in the Rich Presence section of your application, called Art Assets*/
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

Contohnya kami sarankan unutuk melihat kode presence dari: 1337x or 9GAG.

Untuk informasi lebih lanjut tentang presence klik [disini](/dev/presence/class).

## Tidak bisa mendapat data tertentu?!

Banyak website menggunakan [iframes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([Inlineframes](https://en.wikipedia.org/wiki/HTML_element#Frames)). Tag html tersebut bisa berisi beberapa sumber seperti video. Tapi mereka kadang tidak relevan. Beberapa hanya tersembunyi atau tidak sering dipakai. Periksa jika anda bisa ekstrak, informasi yang dibutuhkan, tanpa infromasi tersebut sebelum melakukan pekerjaan sia-sia.

1. Check for them in your browsers console (be sure that you are on the **Elements** tab).
2. Cari (<kbd>CTRL</kbd>+<kbd>F</kbd> (Windows) atau <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
3. Jalankan `document.querySelectorAll("iframe")`.

If you find that your data is in a iFrame you need to do the following:
1. Create a `iframe.ts` file.
2. Set iFrame to `true` in your metadata file.
3. Filling in your iFrame file.
```javascript
var iframe = new iFrame();
iframe.on("UpdateData", async () => {
  /*
  Get all the data you need out of the iFrame save them in variables
  and then sent them using iframe.send
  */
  iframe.send({ //sending data
    video: video,
    time: video.duration
  }); 
});
```
4. Making your presence file receive data from the iFrame file.
```javascript
presence.on("iFrameData", data => {
  iFrameVideo = data.video;
  currentTime = data.time;
});
```
**Note:** This needs to be placed outside of the updateData event.
## Compiling
Open a console in your folder and type `tsc -w` to compile the `presence.ts` into the `/dist` folder.

# Structure (JavaScript)
## Mengcloning project
1. Install [Git](https://git-scm.com/).
2. Buka terminal dan ketik `git clone https://github.com/PreMiD/Presences`.
3. Pilih folder pilihanmu.
4. Buka di editor kodemu.

## Membuat folder dan file

1. Buat folder dengan **nama** (bukan URL) dari layanan yang diinginkan.
3. Buatlah folder dinamakan `dist` didalamnya.
4. Create a `metadata.json` file and a `presence.js` file inside the `dist` folder.

## Mengisi file metadata.json

Klik [disini](/dev/presence#filling-in-the-metadatajson-file-2) untuk melihat cara mengisinya. Anda akan dapat mengklik kembali dibawah dari penjelasannya.

Kami telah membuat pembuat file `metadata.json` bagi mereka yang malas [disini](https://eggsy.codes/projects/premid/mdcreator).

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

setInterval(10000, myOutsideHeavyLiftingFunction); 
//Run the function seperate from the UpdateData event every 10 seconds to get and set the variables which UpdateData picks up

*/


presence.on("UpdateData", () => {
    //UpdateData is always firing, and therefore should be used as your refresh cycle, or `tick`. This is called several times a second where possible.

    //It is recommended to set up another function outside of this event function which will change variable values and do the heavy lifting if you call data from an API.

    var presenceData = {
        largeImageKey: "key", /*The key (file name) of the Large Image on the presence. Ini diupload dan dinamai pada bagian Rich Presence dari aplikasi anda, bernama Art Assets*/
        smallImageKey: "key", /*Key (nama file) dari gambar besar pada presence. These are uploaded and named in the Rich Presence section of your application, called Art Assets*/
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
You can copy this into your `presence.js` file and edit the values. Pengaturan semua value dilakukan pada event updateData.

Contohnya kami sarankan unutuk melihat kode presence dari: 1337x or 9GAG.

Untuk informasi lebih lanjut tentang presence klik [disini](/dev/presence/class).

## Tidak bisa mendapat data tertentu?!

Banyak website menggunakan [iframes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([Inlineframes](https://en.wikipedia.org/wiki/HTML_element#Frames)). Tag html tersebut bisa berisi beberapa sumber seperti video. Tapi mereka kadang tidak relevan. Beberapa hanya tersembunyi atau tidak sering dipakai. Periksa jika anda bisa ekstrak, informasi yang dibutuhkan, tanpa infromasi tersebut sebelum melakukan pekerjaan sia-sia.

1. Check for them in your browsers console (be sure that you are on the **Elements** tab).
2. Cari (<kbd>CTRL</kbd>+<kbd>F</kbd> (Windows) atau <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
3. Jalankan `document.querySelectorAll("iframe")`.

If you find that your data is in a iFrame you need to do the following:
1. Create a `iframe.js` file.
2. Set iFrame to `true` in your metadata file.
3. Filling in your iFrame file.
```javascript
var iframe = new iFrame();
iframe.on("UpdateData", () => {
    /*
    Get all the data you need out of the iFrame save them in variables
    and then sent them using iframe.send
    */
    iframe.send({ //sending data
        video: video,
        time: video.duration  
    });
});
```
4. Making your presence file receive data from the iFrame file.
```javascript
presence.on("iFrameData", data => {
  iFrameVideo = data.video;
  currentTime = data.time;
});
```
**Note:** This needs to be placed outside of the updateData event.
# Mengisi file metadata.json
Kami telah membuat pembuat file `metadata.json` bagi mereka yang malas [disini](https://eggsy.codes/projects/premid/mdcreator). It's still suggested to read this through so you know how it works.

```javascript
{
  "author": {
    "name": "USER",
    "id": "ID"
  },
  "contributors": [{
    "name": "USER",
    "id": "ID"
  }],
  "service": "SERVICE",
  "description": {
    "en": "DESCRIPTION"
  },
  "url": "URL",
  "version": "VERSION",
  "logo": "URL",
  "thumbnail": "URL",
  "color": "#HEX000",
  "tags": ["CATEGORY", "TAG"],
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
            "value": "\"%song\" by %artist",
            "placeholder": "use %song or %artist"
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

Please copy the code above and put it in your `metadata.json` file. You now need to edit values of the properties. Please note that the following properties are optional to have in your `metadata.json` file, if you do not plan on using them you need to remove them.
- `kontributor`
- `regExp`
- `iframe`
- `iFrameRegExp`
- `settings`

**Clarifying some value presets:**
<table>
  <thead>
    <tr>
      <th style="text-align:left">Variabel</th>
      <th style="text-align:left">Deskripsi</th>
      <th style="text-align:left">Tipe</th>
      <th style="text-align:left">Optional</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>penulis</b>
      </td>
      <td style="text-align:left">Should contain Object with <code>name</code> and <code>id</code> of the presence developer. Name is your Discord username without the identifier(#0000). User <code>id</code> can be copied from Discord by enabling developer
        mode and right-clicking on your profile.</td>
      <td style="text-align:left"><code>Object</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>kontributor</b>
      </td>
      <td style="text-align:left">Should contain Object with <code>name</code> and <code>id</code> of the presence developer. Name is your Discord username without the identifier(#0000). User <code>id</code> can be copied from Discord by enabling developer
        mode and right-clicking on your profile.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>Yes</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>service</b>
      </td>
      <td style="text-align:left">The title of the service that this presence supports. <br>(Must be the same name as the folder where everything is in)</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>deskripsi</b>
      </td>
      <td style="text-align:left">Small description of the presence, you can use description of the service
        if you are out of ideas. Your description must have key pair values which indicate the language, and the description in that specific language. Make descriptions with the languages <i>that you know</i>, our translators will make changes to your metadata file.</td>
      <td style="text-align:left"><code>Object</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b>
      </td>
      <td style="text-align:left">URL of the service.<br><b>Example:</b><code>vk.com</code><br>
        <b>This URL must match the URL of the website as it will detect whether or not this is the website to inject the script to.</b><br> Do <b>NOT</b> add <code>https://</code> or <code>http://</code> inside of the URL nor a slash at the end:
<code>https://premid.app/</code> -> <code>premid.app</code><br>
<b>Note</b>: Some URLs may have <code>www.</code> or something else in front of their domain. Do <b>NOT</b> forget to add it!<br>
You can add multiple URLs by doing the following:<br>
<code>["URL1", "URL2", "ETC."]</code><br>
You could also use regExp also known as Regex for this task, explaned further below.
      </td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b>
      </td>
      <td style="text-align:left">A regular expression string used to match urls.<br>
      regExp or also known as Regex, can be used if a website has multiple subdomains.<br>
You could use the following regExp for that:<br>
<code>([a-z0-9]+)[.]domain[.]TLD"</code><br>
TLD standing for Top Level Domain for axample: .com .net<br> 
<code>([a-z0-9]+)</code> means anything from a to z and from 0 to 9.<br>
        You can test your regExp at <a href="https://regex101.com/">Regex101</a></td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Yes</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>versi</b>
      </td>
      <td style="text-align:left">Version of your presence.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>logo</b>
      </td>
      <td style="text-align:left">Link to service&apos;s logotype.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b>
      </td>
      <td style="text-align:left">Link to your presence thumbnail.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>color</b>
      </td>
      <td style="text-align:left"><code>#HEX</code> value. We recommend to use a primary color of the service
        that your presence supports.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>tag</b>
      </td>
      <td style="text-align:left">Array with tags, they will help users to search your presence on the website.</td>
      <td
      style="text-align:left"><code>String, Array&lt;String&gt;</code>
        </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>category</b>
      </td>
      <td style="text-align:left">A string used to represent the category the presence falls under. See the valid catergories <a href="https://docs.premid.app/dev/presence/metadata#presence-categories">here</a>.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b>
      </td>
      <td style="text-align:left">Defines whether <code>iFrames</code> are used</td>
      <td style="text-align:left"><code>Boolean</code>
      </td>
      <td style="text-align:left"><code>Yes</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b>
      </td>
      <td style="text-align:left">A regular expression selector that selects iframes to inject into. See regExp for more info.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Yes</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>settings</b>
      </td>
      <td style="text-align:left">An array of settings the user can change.<br>
      Read more about presence settings <a href="https://docs.premid.app/dev/presence/metadata#presence-settings">here</a>.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>Yes</code>
      </td>
    </tr>
  </tbody>
</table>

Click [here](/dev/presence#filling-in-the-metadatajson-file) to go back to the TypeScript explanation. Click [here](/dev/presence#filling-in-the-metadatajson-file-1) to go back to the JavaScript explanation.

# Loading the presence
1. Open the popup and hold the <kbd>Shift</kbd> button on your keyboard.
2. **Load Presence** will appear in the Presences section.
3. Click on it while you are still holding the <kbd>Shift</kbd> button.
4. Select the /dist folder of your presence.

# Some helpful things
## Hot-reloading
The website you are developing on is automatically reloading every time you save a file in your folder.

## Debugging
- You can put `console.log("Test");` between your code and see if your browser console gives you that output. If yes then go on and try again after the next function. If not then there is an error above.
- If that doesn't help you either then ask a presence developer on our [Discord server](https://discord.gg/WvfVZ8T) for help.

# Files explained
- [Kelas Presence](/dev/presence/class)
- [Kelas iFrame](/dev/presence/iframe)
- [Metadata File](/dev/presence/metadata)
- [TypeScript Configuration](/dev/presence/tsconfig)
{.links-list}
