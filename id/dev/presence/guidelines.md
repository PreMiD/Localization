---
title: Panduan Presence
description: Peraturan yang harus ditaati oleh developer presence agar presencenya ditambahkan.
published: true
date: 2021-03-06T15:01:04.274Z
tags:
editor: markdown
dateCreated: 2021-02-26T21:54:41.573Z
---

<div align="center">
    <img src="https://github.com/PreMiD.png?size=2048" width="128px" style="max-width:100%;">
    <h3 style="font-size: 2rem; margin-bottom: 0">Panduan Presence</h3>
    <h4 style="margin-top: 0">Revisi ke-3</h4>
    <br />
</div>

# Panduan

Ketika mempublikasikan Presence ke [GitHub Repository Kami](https://github.com/PreMiD/Presences) kami membutuhkan kamu untuk mengikuti panduan. Bagi beberapa, peraturan ini mungkin agak kejam. Bagaimanapun, penerapan aturan ini bertujuan untuk menjaga kami dan user dari masalah.

# Pembuatan

Peraturan umum pembuatan presence sebagai berikut:

- Presence **harus** berhubungan dengan website yang dipilih.
- Presence **harus tidak** dibuat untuk website ilegal. (misal stresor, narkoba, pornografi dibawah umur, dll)
- Struktur file harus bersih dan teratur, jangan memasukkan file yang tidak ditentukan. ( misal, vscode dan git folders, image and text files, dll.)
- Anda harus memilki struktur file yang baik, draft **tidak** diperbolehkan.
- Presence untuk website dengan (`.onion` TLD) atau website dengan domain/host gratis (misal, `.TK` [all free Freenomdomains], `.RF`, `GD`, dll.) **tidak** diizinkan, pengecualian dapat dibuat jika bukti pembayaran domain dapat ditunjukkan.
- Domain dari presence harus berumur minimal 2 bulan.
- Presence yang mengarah pada halaman internal browser (seperti Chrome Web Store `chrome://`, `about:` pages, etc) **tidak** diperbolehkan sebab membutuhkan flag experimental diaktifkan oleh pengguna dan bisa menyebabkan kerusakan pada browser.
- Presence dengan dukungan hanya satu halaman **tidak** diperbolehkan, sebab akan terlihat rusak bagi halaman lain ( seperti homepage) pengecualian dapat dibuat untuk halaman kebijakan dan kontak (konten yang jarang digunakan) atau website yang konten lainnya tidak berhubungan. (misal, halaman wikia)
- Presence radio online hanya diperbolehkan jika radio memiliki setidaknya 100 pendengar dan 15 secara bersamaan.
- Presence kualitas rendah ( atau yang memilki sedikit konteks) **tidak** diperbolehkan (misal, hanya menampilkan logo dan teks tapi tidak pernah diganti)
- Dengan rilisnya `tombol`, ada beberapa hal yang harus dipedomani:
  - Dilarang melakukan pengalihan ke halaman utama.
  - Dilarang mempromosikan halaman web.
  - Tombol tidak dapat memperlihatkan data tambahan saat Anda tidak menunjukkannya di `state` atau `details`.
- Wajib mencantumkan folder `dist`, file `presence.ts`, file `iframe.ts`, dan file `metadata.json` agar hasil sesuai dengan skema berikut:

```bash
presence
├── dist
│   └── metadata.json
├── presence.ts
└── tsconfig.json
```

atau jika anda menggunakan file `iframe.ts`:

```bash
presence
├── dist
│   └── metadata.json
├── presence.ts
├── iframe.ts
└── tsconfig.json
```

## [**metadata.json**](/dev/presence/metadata)

> Untuk kemudahan para pengembang presence, kami telah menyediakan skema yang bisa digunakan untuk memeriksa keutuhan dari file `metadata`. Ini sepenuhnya opsional dan tidak wajib dalam proses review.

> Sangat dianjurkan untuk mengorganisir file `metadata` pada format dibawah ini, dan anda harus memiliki nama layanan yang benar secara tata bahasa, deskripsi, tag, dan bidang pengaturan. Apapun yang tidak terorganisir menurut spesifikasi **tidak** diperbolehkan.

> Presence untuk website yang memiliki konten eksplisit **harus** memiliki tag `nsfw`, dan log/thumbnail harus **tidak** mengandung hal tersebut.

Setiap presence memiliki file descriptor bernama `metadata.json`, metadata memilki standar yang ketat contoh file bisa dilihat sebagai berikut:

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
      "id": "multiLanguage",
      "multiLanguage": true
    }
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

> Jika bidang terdaftar sebagai opsional pada [dokumentasi](https://docs.premid.app/en/dev/presence/metadata) dan presence anda menggunakan value default, jangan mencantumkannya pada file `metadata`. (misal, presence tanpa iframe support tidak memerlukan bidang `iframe`.)

> Semua gambar pada file `metadata` harus dihosting di `i.imgur.com`. Menggunakan konten yang dihost pada website **tidak** diperbolehkan sebab mereka dapat mengubah lokasi dan file tanpa peringatan.

Daftar bidang dan peraturannya tertulis dibawah:

### **`$schema`**

- Skema _key_ **harus** memuat tanda dollar pada awalan, hal ini menandakan editor teksmu untuk memeriksa file JSON pada suatu model. _ seperti yang telah disebutkan sebelumnya, anda tidak perlu mencantumkan skema, tapi jika anda mencantumkannya anda harus memperhitungkan itu _

### **`author`**

- ID _value_ **harus** ID snowflake Discordmu. Bisa didapatkan dengan mengaktifkan [developer mode](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-). _harap **tidak** disamakan dengan ID aplikasimu, yang hanya digunakan untuk Presence._

### **`*contributors`**

- **Jangan** menambahkan diri anda sebagai kontributor dan jangan menambahkan orang lain sebagai kontributor kecuali mereka membantu dengan pembuatan presence.

### **`service`**

- Nama layanan **harus** sesuai dengan nama dari direktori presence. Contohnya, jika presence terletak di `/websites/Y/YouTube/`, nama layanan harus `YouTube`.
- Kamu **tidak bisa** menggunakan url sebagai nama layanan kecuali situs web memakai url sebagai nama resminya. Jika nama tidak deskriptif dan dianggap tidak jelas, **harus** menggunakan url. (untuk contoh, `YouTube` tidak diperbolehkan karena itu nama resmi dan deskriptif, sementara `youtube.com` tidak. `Top` adalah nama non-deskriptif, jadi menggunakan url `top.gg` sangat **dibutuhkan**.)
- Jika sebuah layanan memiliki branding yang eksplisit terhadap nama mereka, Anda harus mengikutinya.

### **`*altnames`**

- **Hanya** gunakan ini jika website menggunakan beberapa nama resmi (misal Pokémon dan 포켓몬스터) atau untuk memudahkan mencari presence tanpa menggunakan karakter spesial (misal Pokémon dan Pokemon). *Singkatan* dari nama layanan berada pada `tags`.

### **`deskripsi`**

- **Semua** presence **diharuskan** memilki deskripsi berbahasa inggris terlepas dari bahasa dari website.
- **Jangan** mencoba menerjemahkan deskripsi sendiri kecuali anda mengerti bahasa tersebut, penerjemah akan mengubah `metadata.json` dan mengubah deskripsi jika diperlukan.

### **`url`**

- Url **harus** berupa string jika website hanya menggunakan satu domain. Jika website menggunakan lebih dari satu, jadikan array dan tentukan masing-masing.
- **Jangan** mencantumkan protokol pada url (misal, `http` atau `https`), dan jangan memasukkan query parameter pada url (contoh, `www.google.com/search?gws_rd=ssl` yang seharusnya `www.google.com/`)

### **`versi`**

- Selalu pastikan versi mengikuti [semantic versioning standards](https://semver.org), yang diterjemahkan ke skema berikut: `<NEW-FEATURE>.<HUGE-BUGFIX>.<SMALL-BUGFIX-OR-METADATA-CHANGES>`. Hal lain seperti `1.0.0.1`, `1.0`, `1`, `1.0.0-BETA` atau mengubah `1.0.0` to `2.0.0` pada perbaikan bug/perubahan kecil **tidak** diperbolehkan.
- Versi **harus** dimulai dengan `1.0.0` kecuali diberitahu lainnya, versi lain **tidak** diperbolehkan.

### **`logo`**

- Logo **harus** berupa persegi dengan aspect ratio `1:1`.
- Gambar **diharuskan** memiliki resolusi minimal `512x512` pixel. Gambar dapat di upscale menggunakan alat seperti [waifu2x](http://waifu2x.udp.jp/).

### **`thumbnail`**

- Thumbnail **sebaiknya** sebuah [ wide promotional card](https://i.imgur.com/3QfIc5v.jpg) atau sebuah [ screenshot](https://i.imgur.com/OAcBmwW.png) jika opsi pertama **tidak ** tersedia.

### **`color`**

- Warna **harus** menggunakan hexadecimal value antara `#000000` dan `#FFFFFF`.
- String warna **harus** didahulukan dengan hash symbol.

### **`tags`**

- **Semua** presence diharuskan memiliki setidaknya _satu_ tag.
- Tag harus **tidak** memiliki spasi, garis miring, tanda kutip tunggal/ganda, karakter Unicode, dan harus selalu huruf kecil.
- Tag **sebaiknya** mencantumkan nama alternatif untuk memudahkan pencarian ( misal, jika presence Amazon memiliki AWS support, maka akan memiliki tag seperti `amazon-web-services` dan `aws`)
- Anda **diharuskan** menambahkan tag `NSFW` jika presence untuk website NSFW.

### **`category`**

- Kategori **diharuskan** salah satu dari yang tercantum pada [dokumentasi](https://docs.premid.app/en/dev/presence/metadata#presence-categories).
- Presence harus menggunakan kategori yang menyerupai konten situs web. (untuk contoh, jangan gunakan `anime` ketika situs web tidak terkait dengan anime).

### **`*regExp`** <br /> **`*iFrameRegExp`**

- Regular expressions**harus** valid. Periksa expression menggunakan alat yang dicantumkan pada [dokumentasi](https://docs.premid.app/en/dev/presence/metadata#testing).

### **`readLogs`**

- Harus berupa `boolean` value (e.g. `true` or `false`).
- Mengaktifkan log untuk presence Anda.

### **`peringatan`**

- **Selalu** menyatakan instance baru dari class `Presence` sebelum variabel lainnya untuk menghindari masalah yang mungkin terjadi; hal ini tidak diharuskan pada desain jadi bisa dihapus kedepannya.
- Contoh dari presence yang menggunakan variabel metadata ini adalah `VLC`.

### **`pengaturan`**

- Jika kamu berniat untuk membuat suatu string format (contoh, `%song% by %artist%`), kamu harus menaruh variabelnya diantara sebuah tanda persen di kedua sisi. Jika pencipta presence terkena ban dari server resmi atau belum membuat perubahan yang dibutuhkan dalam waktu satu bulan, anda dapat menghubungi reviewer untuk meminta menulis ulang presence tersebut.
- Nama dari setting harus **tidak** berhuruf kapital semua. Hubungi verifier untuk informasi lebih lanjut tentang hal ini.
- Jika Anda menggunakan opsi multiLanguage, ada beberapa hal yang perlu Anda ketahui:
  - Value tipe **Boolean** hanya akan mengaktifkan string [`general.json`](https://github.com/PreMiD/Localization/blob/master/src/Presence/general.json) dari repositori Localization atau dari file Presence (contoh, saat nama presence adalah YouTube, maka ekstensi akan mendapatkan string dari `youtube.json` juga.)
  - Value tipe **String** (contoh, `youtube.json`) akan menentukan nama dari file yang Anda ingin dapatkan string-nya.
  - Value tipe **Array<String>** (contoh, `["youtube", "discord"]`) akan menentukan nama dari file yang Anda ingin dapatkan string-nya.

## [**presence.ts**](/dev/presence/class)

> Kode yang anda tulis **harus**_ ditulis dengan baik_ dan **harus** _dapat dibaca_ dan semua string harus benar secara tata bahasa ( kesalahan penulisan pada website dapat diabaikan).

> Setiap presence mengikuti aturan ketat yang akan diperiksa saat proses review. Beberapa rekomendasi bisa dilihat dibawah. - [Rekomendasi Plugin TypeScript untuk Strict Type Checking](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules) - [ESlint Recommendations](https://eslint.org/docs/rules) [Rekomendasi ESlint](https://eslint.org/docs/rules). [Prettier](https://prettier.io/).

Berikut daftar aturan yang harus diikuti saat menulis sebuah file `presence.ts`:

- **Selalu** menyatakan instance baru dari class `Presence` sebelum variabel lainnya untuk menghindari masalah yang mungkin terjadi; hal ini tidak diharuskan pada desain jadi bisa dihapus kedepannya.
- **Jangan pernah** menggunakan custom function jika [ tersedia native variant](https://docs.premid.app/dev/presence#files-explained); hal ini memastikan perbaikan pada tingkat ekstensi dapat berpengaruh pada presence anda juga. Anda bebas menggunakan apapun yang dibutuhkan jika tidak menemukannya tercantum di dokumen.
- Tiket yang dibuat dibawah nama anda mengenai pengembangan presence akan dihapus.
- Bidang `smallImageKey` dan `smallImageText` dimaksudkan untuk memberi konteks tambahan/konteks kedua ( seperti `putar/jeda` untuk website video, `browsing` untuk website biasa, dan hal lain) bukan untuk mempromosikan profil Discord atau apapun yang tidak berhubungan PreMiD.
- Anda **tidak** diperbolehkan mengakses `localStorage`.
- Saat mengakses cookie untuk data tersimpan, harap memberi prefix pada key dengan `PMD_`.
- Anda hanya boleh membuat permintaan HTTP/HTTPS ke `premid.app` atau API dari website presence. Jika anda menggunakan domain eksternal, anda diharuskan untuk menjelaskan sebab kenapa hal itu dibutuhkan. API yang diizinkan untuk membuat reques adalah [`Fetch API`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).
- **Jangan** atur bidang dalam objek presenceData menjadi undefined setelah dideklarasikan, melainkan gunakan kata kunci `delete`. (untuk contoh, gunakan `delete data.startTimestamp` dari pada `data.startTimestamp = undefined`)
- Kamu **tidak** diperbolehkan untuk menulis presence yang mengubah fungsi dari website yang dituju. Ini mencakup menambah, menghapus, atau mengubah DOM elements.

## [**tsconfig.json**](/dev/presence/tsconfig)

> **Jangan** menulis file `tsconfig.json` sendiri, gunakan yang telah disediakan [dokumentasi](https://docs.premid.app/en/dev/presence/tsconfig).

## Perubahan

> Anda **harus** mengubah versi di **metadata** menjadi lebih tinggi dari versi sebelumnya ketika membuat perubahan pada **presence.ts**,**iframe** atau **metadata**.

Pada situasi tertentu, presence mungkin berperilaku aneh atau mungkin membutuhkan sedikit perubahan untuk meningkatkan kegunaannya. Berikut daftar aturan yang **harus** diikuti ketika mengubah presence.

- Anda **tidak** diperbolehkan untuk menulis ulang sebuah presence atau mengubah penciptanya. Jika pencipta presence terkena ban dari server resmi atau belum membuat perubahan yang dibutuhkan dalam waktu satu bulan, anda dapat menghubungi reviewer untuk meminta menulis ulang presence tersebut.
- Jika anda membuat perubahan pada presence dan mengubah setidaknya **seperempat** dari codebase presence, anda diperbolehkan untuk menambahkan diri sebgai kontributor. Hubungi reviewer untuk informasi lebih lanjut tentang hal ini.
- Semua orang bisa membantu menyediakan bantuan untuk memperbaiki bug; bagaimanapun, cobalah untuk **tidak** membuat perubahan yang **tidak dibutuhkan**. Perubahan yang diperbolehkan termasuk perbaikan umum (kode dan typo), penambahan (deskripsi dan tag), file hilang, dll. **Jangan** mengganti gambar jika tidak outdated dan masih dalam spesifikasi.

# Perubahan

> **Semua** kode yang dikontribusi ke toko akan terlisensi dengan `Mozilla Public License 2.0`.

> Jika anda ingin menghubungi seseorang, gunakan server Discord official kami. Semua reviewer akan memilki role `Reviewer` di profilnya.

> Harap diingat bahwa reviewer bekerja secara sukarela dan mengurus repository lainnya selain ini, pull request anda mungkin tidak ditinjau hingga berjam-jam atau bahkan berhari-hari setelah dibuat.

> **Selalu** miliki fork yang up-to-date sebelum membuat pull request. Hal ini dapat membatasi false positive.

Proses yang penting dalam pengembangan presence adalah memasang presencemu di toko. Itu dapat dilakukan dengan membuat[pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) di github pada repository `PreMiD/Presences`. Reviewer kami akan mengkonfirmasi jika presencemu sesuai standar dan akan segera di pasang di toko.

<div>
  <h2 style="font-size: 2rem; margin-bottom: 0;">Reviewer Presence</h2>
  
  <a href="https://github.com/Bas950"><img src="https://github.com/Bas950.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>  <a href="https://github.com/Timeraa"><img src="https://github.com/Timeraa.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>  <a href="https://github.com/StrikerFRFX"><img src="https://github.com/StrikerFRFX.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <br />
</div>

## `Memeriksa`

Pelanggaran berulang seperti melanggar aturan, spam pull request, pengancaman, atau perilaku tidak pantas akan membuat anda dilarang membuat presence.

Pada kejadian seperti ini, perubahan berikut akan terjadi:

- `Codacy` adalah bot yang memeriksa kualitas kode. Jika anda menemui eror pada issue baru, anda **diharuskan** untuk memperbaikinya.
- Semua issue dan pull request (pembuatan presence, kontribusi presence, dll) yang dibuat setelah pelanggaran akan segera ditutup.
- Tiket yang dibuat dibawah nama anda mengenai pengembangan presence akan dihapus.

## `Pemeriksaan`

Beberapa hal yang harus anda ketahui setelah membuka pull request:

- Dibutuhkan 2 reviewer untuk merge sebuah pull request.
- Jika pull request tidak aktif selama 7 hari, pull request tersebut akan segera ditutup.
- Semua pemeriksaan **harus** berhasil untuk merge.
- ⚠️ Anda **harus** memberi screenshot baru, tidak dimodifikasi diambil ( diambil oleh anda) menunjukkan perbandingan side-by-side dari profilmu dan websitenya untuk membuktikan presencemu bekerja. _Anda diperbolehkan memberikan screenshot untuk kemudahan melihat_ Ini berlaku baik dalam pembuatan dan perubahan.
- ⚠️ Kamu juga **harus** memasukkan tangkapan layar pengaturan presence di dalam extension jika disediakan. Contoh bisa dilihat [disini](https://imgur.com/a/OD3sj5R).

## `Peraturan tambahan`

![Pemeriksaan](https://i.imgur.com/oqAakOc.png)

Saat ini, sebuah presence melewati 2 tahapan pemeriksaan. Pemeriksaan ini membantu reviewer untuk menentukan apakah presencemu cocok untuk perilisan.

- `Codacy` adalah bot yang memeriksa kualitas kode. Jika anda menemui eror pada issue baru, anda **diharuskan** untuk memperbaikinya. (_PERINGATAN: bot Codacy dapat rusak dan Anda hanya bisa mengecek error hanya melalui DeepScan!_)
- `DeepScan` adalah bot yang memeriksa kualitas kode. Jika anda menemui eror pada issue baru, anda **diharuskan** untuk memperbaikinya.
- `Schema Validation` akan mengscan file `metadata.json` mencari eror ( misal, missing fields, invalid value types, dll.). Jika anda menemukan isu baru anda juga **diharuskan** memperbaikinya. Menambahkan bidang schema ke file `metadata.json` akan memungkinkan editor teks anda ( jika didukung) untuk menunjukkan eror pada pengembangan.

## `Peraturan tambahan`

- **Selalu** pastikan untuk memulai presence dengan folder yang sesuai, jika namanya dimulai dengan huruf latin _apapun_ maka harus harus sesuai urutan abjad ( misal, `D/dアニメストア` atau `G/Google`). Karakter unicode/non-latin **harus** dalam folder `#` folder ( misal, `#/巴哈姆特`) dan nomer dalam folder `0-9` folder ( for e.g., `0-9/4anime`).

Setelah memenuhi semua peraturan dengan review dan pemeriksaan yang sesuai, presence anda akan di merge dengan toko.

# Verifikasi
`Revisi 2` dari peraturan tertulis dan dikontribusikan oleh individu berikut:

# Kontribusi

`Revisi 1` diurus oleh individu berikut:

<div>
<a href="https://github.com/ririxidev"><img src="https://github.com/ririxidev.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
</div>

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