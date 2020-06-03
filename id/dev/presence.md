---
title: Pengembangan Presence
description:
published: true
date: 2020-05-29T21:55:04.008Z
tags:
---

> Semua presence disimpan disini: https://github.com/PreMiD/Presences 
> 
> {.is-info}

Versi `2.x` memperkenalkan [toko presence](https://premid.app/store). Pengguna sekarang bisa menambah dan menghapus presence favorit lewat tampilan pengguna [website](https://premid.app/).

# Aturan

Saat menerbitkan presence ke GitHub, kami mengharuskan anda mengikuti beberapa aturan. Bagi beberapa, peraturan ini mungkin terlihat kejam. Tapi, penerapan aturan ini bertujuan untuk menjaga kami dan pengguna dari masalah.

## Pembuatan

Peraturan umum pembuatan presence sebagai berikut:

- Presence **harus** berhubungan dengan website yang dipilih.
- Presence **harus tidak** dibuat untuk website ilegal. ( misal stressors, drug marketing, child pornography, etc.). )
- Struktur file harus bersih dan teratur, jangan memasukkan file yang tidak ditentukan. ( misal, vscode dan git folders, image and text files, dll. )
- Anda harus memilki struktur file yang baik, draft **tidak** diperbolehkan.
- Presence untuk website dengan (`.onion` TLD ) atau website dengan domain/host gratis (misal, `.TK` [all free Freenomdomains], `.RF`, `GD`, dll. ) **tidak** diizinkan, pengecualian dapat dibuat jika bukti pembayaran domain dapat ditunjukkan.
- Presence yang mengarah pada halaman internal browser (seperti Chrome Web Store `chrome://`, `about:` pages, etc ) **tidak** diperbolehkan sebab membutuhkan flag experimental diaktifkan oleh pengguna dan bisa menyebabkan kerusakan pada browser.
- Presence dengan dukungan hanya satu halaman **tidak** diperbolehkan, sebab akan terlihat rusak bagi halaman lain ( seperti homepage ) pengecualian dapat dibuat untuk halaman kebijakan dan kontak (konten yang jarang digunakan ) atau website yang konten lainnya tidak berhubungan. ( misal, halaman wikia )
- Presence kualitas rendah ( atau yang memilki sedikit konteks ) **tidak** diperbolehkan (misal, hanya menampilkan logo dan teks tapi tidak pernah diganti). )
- Wajib mencantumkan folder `dist`, file `presence.ts`, file `iframe.ts`, dan file `metadata.json` agar hasil sesuai dengan skema berikut:

```bash
presence
├── dist
│   ├── metadata.json
│   └── presence.js
├── presence.ts
└── tsconfig.json
```

atau jika anda menggunakan file `iframe.ts`:

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

## [**metadata.json**](https://docs.premid.app/en/dev/presence/metadata)

> Untuk kemudahan para pengembang presence, kami telah menyediakan skema yang bisa digunakan untuk memeriksa keutuhan  dari file `metadata`. Ini sepenuhnya opsional dan tidak wajib dalam proses review.

> Sangat dianjurkan untuk mengorganisir file `metadata` pada format dibawah ini, dan anda harus memiliki  nama layanan yang benar secara tata bahasa, deskripsi, tag, dan bidang pengaturan. Apapun yang tidak terorganisir menurut spesifikasi  **tidak** diperbolehkan. 
> 
> {.is-warning}

Setiap presence memiliki file descriptor bernama `metadata.json`, metadata memilki standar yang ketat contoh file bisa dilihat sebagai berikut:

```json
{
  "$schema": "https://schemas.premid.app/metadata/1.0",
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

> Jika bidang terdaftar sebagai opsional pada [dokumentasi](https://docs.premid.app/en/dev/presence/metadata) dan  presence anda menggunakan value default, jangan mencantumkannya pada file `metadata`. ( misal, presence tanpa  iframe support tidak memerlukan bidang `iframe`. ) 
> 
> {.is-warning}

> Semua gambar pada file `metadata` harus dihost di `i.imgur.com` atau pada CDN yang memberi izin untuk **merubah** file gambar. Konten yang dihost pada website itu sendiri **tidak** diperbolehkan sebab mereka dapat merubah lokasi tersebut. 
> 
> {.is-warning}

Daftar bidang dan peraturannya tertulis dibawah:

### **`$schema`**

- Skema _key_ **harus** memuat tanda dollar pada awalan, hal ini menandakan editor teksmu untuk memeriksa file JSON pada suatu model. _ seperti yang telah disebutkan sebelumnya, anda tidak perlu mencantumkan skema, tapi jika anda mencantumkannya anda harus memperhatikannya</li> </ul>

### **`penulis`**

- ID _value_ **harus** ID snowflake Discordmu. Bisa didapatkan dengan mengaktifkan [developer mode](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-). _harap **tidak** disamakan dengan ID aplikasimu, yang hanya digunakan untuk Presence._

### **`kontributor`**

- **Jangan** menambahkan diri anda sebagai kontributor dan jangan menambahkan orang lain sebagai kontributor kecualimereka membantu dengan pembuatan presence.

### **`service`**

- Nama layanan **harus** sesuai dengan nama dari direktori presence. Contohnya, jika presence terletak di `/websites/Y/YouTube/`, nama layanan harus `YouTube`.

### **`deskripsi`**

- **Semua** presence **diharuskan** memilki deskripsi berbahasa inggris terlepas dari bahasa dari website.
- **Jangan** mencoba menerjemahkan deskripsi sendiri kecuali anda mengerti bahasa tersebut, penerjemah akan merubah `metadata.json` dan merubah deskripsi jika diperlukan.

### **`url`**

- Url **harus** berupa string jika website hanya menggunakan satu domain. Jika website menggunakan lebih dari satu, jadikan array dan tentukan masing-masing.
- **Jangan** mencantumkan protokol pada url (misal, `http` atau `https` ), dan jangan memasukkan query parameter pada url (contoh, `www.google.com/search?gws_rd=ssl` yang seharusnya `www.google.com/`)

### **`versi`**

- Selalu pastikan versi mengikuti [semantic versioning standards](https://semver.org), yang diterjemahkan ke skema berikut: `<NEW-FEATURE>.<HUGE-BUGFIX>.<SMALL-BUGFIX-OR-METADATA-CHANGES>`. Hal lain seperti `1.0.0.1`, `1.0`, `1`, `1.0.0-BETA` atau merubah `1.0.0` to `2.0.0` pada perbaikan bug/perubahan kecil **tidak** diperbolehkan.
- Versi **harus** dimulai dengan `1.0.0` kecuali diberitahu lainnya, versi lain **tidak** diperbolehkan.

### **`logo`**

- Logo **harus** berupa persegi dengan aspect ratio `1:1`.
- Gambar **diharuskan** memiliki resolusi minimal `512x512` pixel. Gambar dapat di upscale menggunakan alat seperti [waifu2x](http://waifu2x.udp.jp/).

### **`thumbnail`**

- Thumbnail **sebaiknya** sebuah [ wide promotional card](https://i.imgur.com/3QfIc5v.jpg) atau sebuah [ screenshot](https://i.imgur.com/OAcBmwW.png) jika opsi pertama **tidak ** tersedia.

### **`color`**

- Warna **harus** menggunakan hexadecimal value antara `#000000` dan `#FFFFFF`.
- String warna **harus** didahulukan dengan hash symbol.

### **`tag`**

- **Semua** presence diharuskan memiliki setidaknya _satu_ tag.
- Tag harus **tidak** memiliki spasi, garis miring, tanda kutip tunggal/ganda, karakter Unicode, dan harus selalu huruf kecil.
- Tag **sebaiknya** mencantumkan nama alternatif untuk memudahkan pencarian ( misal, jika presence Amazon memiliki AWS support, maka akan memiliki tag seperti `amazon-web-services` dan `aws` )
- Anda **diharuskan** menambahkan tag `NSFW` jika presence untuk website NSFW.

### **`category`**

- Kategori **diharuskan** salah satu dari yang tercantum pada [dokumentasi](https://docs.premid.app/en/dev/presence/metadata#presence-categories).

### **`regExp`** <br /> **`iFrameRegExp`**

- Regular expressions**harus** valid. Periksa expression menggunakan alat yang dicantumkan pada [dokumentasi](https://docs.premid.app/en/dev/presence/metadata#testing).

### **`pengaturan`**

- Jika anda memutuskan untuk membuat string format ( misal, `%song% by %artist%` ), anda harus membuat variabel dengan tanda persen diawal dan diakhir. Variabel seperti `%var`, `var%`, atau `%%var%%` dan apapun diantaranya **tidak** diperbolehkan demi standardisasi.

## [**presence.ts**](https://docs.premid.app/en/dev/presence/class)

> Kode yang anda tulis **harus**_ ditulis dengan baik_ dan **harus** _dapat dibaca_ dan semua string harus benar secara tata bahasa  ( kesalahan penulisan pada website dapat diabaikan ). 
> 
> {.is-warning}

Berikut daftar aturan yang harus diikuti saat menulis sebuah file `presence.ts`:

- **Selalu** menyatakan instance baru dari class `Presence` sebelum variabel lainnya untuk menghindari masalah yang mungkin terjadi; hal ini tidak diharuskan pada desain jadi bisa dihapus kedepannya.
- **Jangan pernah** menggunakan custom function jika [ tersedia native variant](https://docs.premid.app/dev/presence#files-explained); hal ini memastikan perbaikan pada tingkat ekstensi dapat berpengaruh pada presence anda juga. Anda bebas menggunakan apapun yang dibutuhkan jika tidak menemukannya tercantum di dokumen.
- **Dilarang** menulis kode presence untuk website tanpa menambahkan dukungan bahasa utama ( misal, YouTube presence dibuat dengan dukungan khusus untuk bahasa portugis dan bahasa jepang, tidak bahasa inggris. )
- Bidang `smallImageKey` dan `smallImageText` dimaksudkan untuk memberi konteks tambahan/konteks kedua ( seperti `putar/jeda` untuk website video, `browsing` untuk website biasa, dan hal lain ) bukan untuk mempromosikan profil Discord atau apapun yang tidak berhubungan PreMiD.
- Anda **tidak** diperbolehkan mengakses `localStorage`.
- Saat mengakses cookie untuk data tersimpan, harap memberi prefix pada key dengan `PMD_`.
- Membuat permintaan ke domain eksternal **tidak** diperbolehkan kecuali dapat menentukan sebab anda membutuhkannya.

## [**tsconfig.json**](https://docs.premid.app/en/dev/presence/tsconfig)

> **Jangan** menulis file `tsconfig.json` sendiri, gunakan yang telah disediakan [dokumentasi](https://docs.premid.app/en/dev/presence/tsconfig). 
> 
> {.is-warning}

## Perubahan

> Anda **harus** merubah versi di **metadata** menjadi lebih tinggi dari versi sebelumnya ketika membuat perubahan  pada **presence.ts**,**iframe** atau **metadata**. 
> 
> {.is-warning}

Pada situasi tertentu, presence mungkin berperilaku aneh atau mungkin membutuhkan sedikit perubahan untuk meningkatkan kegunaannya. Berikut daftar aturan yang **harus** diikuti ketika merubah presence.

- Anda **tidak** diperbolehkan untuk menulis ulang sebuah presence atau merubah penciptanya. Jika pencipta presence terkena ban dari server resmi atau belum membuat perubahan yang dibutuhkan dalam waktu satu bulan, anda dapat menghubungi verifier untuk meminta menulis ulang presence tersebut.
- Siapapun diperbolehkan untuk memberi hotfix untuk memperbaiki bug; tetapi, usahakan **tidak** merubah kode yang **tidak** memerlukan perbaikan. Modifikasi valid adalah, dan **tidak** terbatas pada _missing paths_, _typo_, _missing images_, dll.
- Jika anda membuat perubahan pada presence dan merubahnya setidaknya **seperempat** dari codebase presence, anda diperbolehkan untuk menambahkan diri sebgai kontributor. Hubungi verifier untuk informasi lebih lanjut tentang hal ini.
- Pastikan perubahan memiliki fungsi. Ini meliputi perbaikan ( kode dan typo ), penambahan ( deskripsi dan tag ), dll. **Jangan** menganti gambar jika tidak outdated dan masih dalam spesifikasi.

# Verifikasi

> Jika anda ingin menghubungi seseorang, gunakan server Discord official kami. Semua verifier memiliki role   `Presence Verifier` di profilnya.

> **Semua** kode yang dikontribusi ke toko akan terlisensi dengan `Mozilla Public License 2.0`.

> **Selalu** miliki fork yang up-to-date sebelum membuat pull request. Hal ini akan membantu mambatasi false positive dari   `DeepScan`. 
> 
> {.is-warning}

Proses yang penting dalam pengembangan presence adalah memasang presencemu di toko. Itu dapat dilakukan dengan membuat[pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) di github pada repository `PreMiD/Presences`. Verifier kami akan mengkonfirmasi jika presencemu sesuai standar dan akan segera di pasang di toko.

<div>
  <h2 style="font-size: 2rem; margin-bottom: 0;">Verifier</h2>
  <a href="https://github.com/Alanexei"><img src="https://github.com/Alanexei.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/Bas950"><img src="https://github.com/Bas950.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/doomlerd"><img src="https://github.com/doomlerd.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/frozaum"><img src="https://github.com/frozaum.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/TheDropX"><img src="https://github.com/TheDropX.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <br />
</div>

## `Memeriksa`

Beberapa hal yang harus anda ketahui setelah membuka pull request:

- Dibutuhkan 2 reviewer untuk merge sebuah pull request.
- Jika pull request tidak aktif selama 7 hari, pull request tersebut akan segera ditutup.
- Semua pemeriksaan **harus** berhasil untuk merge.
- ⚠️ Anda **harus** memberi screenshot baru, tidak dimodifikasi diambil ( diambil oleh anda ) menunjukkan perbandingan side-by-side dari profilmu dan websitenya untuk membuktikan presencemu bekerja. _Anda diperbolehkan menggabungkan screenshot untuk kemudahan melihat_ Ini berlaku baik dalam pembuatan dan perubahan.

## `Pemeriksaan`

![Pemeriksaan](https://i.imgur.com/bk0A1iY.png)

Saat ini, sebuah presence melewati 2 tahapan pemeriksaan. Pemeriksaan ini membantu verifier untuk menentukan apakah presencemu cocok untuk peluncuran.

- `DeepScan` adalah bot yang memeriksa kualitas kode. Jika anda menemui eror pada issue baru, anda **diharuskan** untuk memperbaikinya.
- `Schema Validation` akan mengscan file `metadata.json` mencari eror ( misal, missing fields, invalid value types, dll. ). Jika anda menemukan isu baru anda juga **diharuskan** memperbaikinya. Menambahkan bidang schema ke file `metadata.json` akan memungkinkan editor teks anda ( jika didukung ) untuk menunjukkan eror pada pengembangan.

## `Peraturan tambahan`

- **Selalu** pastikan untuk memulai presence dengan folder yang sesuai, jika namanya dimulai dengan huruf latin _apapun_ maka harus harus sesuai urutan abjad ( misal, `D/dアニメストア` atau `G/Google` ). Karakter unicode/non-latin **harus** dalam folder `#` folder ( misal, `#/巴哈姆特` ) dan nomer dalam folder `0-9` folder ( for e.g., `0-9/4anime` ).

Setelah memenuhi semua peraturan dengan review dan pemeriksaan yang sesuai, presence anda akan di merge dengan toko.

# Kontribusi

`Revisi 2` dari peraturan tertulis dan dikontribusikan oleh individu berikut:

<div>
<a href="https://github.com/Alanexei"><img src="https://github.com/Alanexei.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
</div>

`Revisi 1` diurus oleh individu berikut:

<div>
<a href="https://github.com/Alanexei"><img src="https://github.com/Alanexei.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
<a href="https://github.com/Bas950"><img src="https://github.com/Bas950.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
<a href="https://github.com/doomlerd"><img src="https://github.com/doomlerd.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
</div>

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
Kami telah membuat pembuat file `metadata.json` bagi mereka yang malas [disini](https://eggsy.codes/projects/premid/mdcreator). Dianjurkan untuk membaca secara seksama agar anda mengerti bagaimana caranya.

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
- `kontributor`
- `regExp`
- `iframe`
- `iFrameRegExp`
- `pengaturan`

**Memperjelas beberapa preset value:**
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
      <td style="text-align:left">The title of the service that this presence supports. <br>(harus memiliki nama sama dengan folder dimana semuanya terletak)</td>
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
      <td style="text-align:left">URL dari layanan <br><b>contoh:</b><code>vk.com</code><br>        <b>URL ini harus sama dengan URL yang dimiliki website sebab itu akan mendeteksi apakah ini adalah website yang akan diinject script. </b><br><b>JANGAN</b> menambahkan <code>https://</code> or <code>http://</code> kedalam URL atau garis miring diakhir: <code>https://premid.app/</code> -> <code>premid.app</code><br>
<b>Catatan</b>: beberapa URL mungkin memiliki <code>www.</code> atau sesuatu didepan domainnya. <b>JANGAN</b> lupa untuk menambahkannya <br>Anda dapat menambahkan beberapa URL dengan melakukan hal berikut:<br><code>["URL1", "URL2", "ETC."]</code><br>
Anda juga bisa menggunakan regExp juga dikenal sebagai Regex, dijelaskan lebih lanjut dibawah.
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
      <td style="text-align:left">A string used to represent the category the presence falls under. Lihat semua kategori valid <a href="https://docs.premid.app/dev/presence/metadata#presence-categories">disini</a>.</td>
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
      <td style="text-align:left">A regular expression selector that selects iframes to inject into. Lihat regExp untuk informasi lebih lanjut.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Yes</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>pengaturan</b>
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

    Disarankan untuk mengatur function lainnya diluar event function tersebut yang akan merubah variable value dan melakukan kerja keras jika anda meminta data dari sebuah API.*/

    var presenceData: presenceData = {
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
