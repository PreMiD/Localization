---
title: Aturan
description: Peraturan yang harus ditaati oleh developer presence agar presencenya ditambahkan.
published: true
date: 2020-08-31T02:26:49.039Z
tags:
editor: markdown
---

# Aturan

Saat menerbitkan presence ke GitHub, kami mengharuskan anda mengikuti beberapa aturan. Bagi beberapa, peraturan ini mungkin agak kejam. Tapi, penerapan aturan ini bertujuan untuk menjaga kami dan pengguna dari masalah.

# Pembuatan

Peraturan umum pembuatan presence sebagai berikut:

- Presence **harus** berhubungan dengan website yang dipilih.
- Presence **harus tidak** dibuat untuk website ilegal. (misal stresor, narkoba, pornografi dibawah umur, dll)
- Struktur file harus bersih dan teratur, jangan memasukkan file yang tidak ditentukan. ( misal, vscode dan git folders, image and text files, dll.)
- Anda harus memilki struktur file yang baik, draft **tidak** diperbolehkan.
- Presence untuk website dengan (`.onion` TLD) atau website dengan domain/host gratis (misal, `.TK` [all free Freenomdomains], `.RF`, `GD`, dll.) **tidak** diizinkan, pengecualian dapat dibuat jika bukti pembayaran domain dapat ditunjukkan.
- Presence yang mengarah pada halaman internal browser (seperti Chrome Web Store `chrome://`, `about:` pages, etc) **tidak** diperbolehkan sebab membutuhkan flag experimental diaktifkan oleh pengguna dan bisa menyebabkan kerusakan pada browser.
- Presence dengan dukungan hanya satu halaman **tidak** diperbolehkan, sebab akan terlihat rusak bagi halaman lain ( seperti homepage) pengecualian dapat dibuat untuk halaman kebijakan dan kontak (konten yang jarang digunakan) atau website yang konten lainnya tidak berhubungan. (misal, halaman wikia)
- Presence kualitas rendah ( atau yang memilki sedikit konteks) **tidak** diperbolehkan (misal, hanya menampilkan logo dan teks tapi tidak pernah diganti)
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

> Untuk kemudahan para pengembang presence, kami telah menyediakan skema yang bisa digunakan untuk memeriksa keutuhan dari file `metadata`. Ini sepenuhnya opsional dan tidak wajib dalam proses review. 
> 
> {.is-info}

> Sangat dianjurkan untuk mengorganisir file `metadata` pada format dibawah ini, dan anda harus memiliki nama layanan yang benar secara tata bahasa, deskripsi, tag, dan bidang pengaturan. Apapun yang tidak terorganisir menurut spesifikasi **tidak** diperbolehkan. 
> 
> {.is-warning}

> Presence untuk website yang memiliki konten eksplisit **harus** memiliki tag `nsfw`, dan log/thumbnail harus **tidak** mengandung hal tersebut. 
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

> Jika bidang terdaftar sebagai opsional pada [dokumentasi](https://docs.premid.app/en/dev/presence/metadata) dan presence anda menggunakan value default, jangan mencantumkannya pada file `metadata`. (misal, presence tanpa iframe support tidak memerlukan bidang `iframe`.) 
> 
> {.is-warning}

> Semua gambar pada file `metadata` harus dihosting di `i.imgur.com`. Menggunakan konten yang dihost pada website **tidak** diperbolehkan sebab mereka dapat merubah lokasi dan file tanpa peringatan. 
> 
> {.is-warning}

Daftar bidang dan peraturannya tertulis dibawah:

### **`$schema`**

- Skema _key_ **harus** memuat tanda dollar pada awalan, hal ini menandakan editor teksmu untuk memeriksa file JSON pada suatu model. _ seperti yang telah disebutkan sebelumnya, anda tidak perlu mencantumkan skema, tapi jika anda mencantumkannya anda harus memperhitungkan itu _

### **`author`**

- ID _value_ **harus** ID snowflake Discordmu. Bisa didapatkan dengan mengaktifkan [developer mode](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-). _harap **tidak** disamakan dengan ID aplikasimu, yang hanya digunakan untuk Presence._

### **`contributors`**

- **Jangan** menambahkan diri anda sebagai kontributor dan jangan menambahkan orang lain sebagai kontributor kecuali mereka membantu dengan pembuatan presence.

### **`service`**

- Nama layanan **harus** sesuai dengan nama dari direktori presence. Contohnya, jika presence terletak di `/websites/Y/YouTube/`, nama layanan harus `YouTube`.
- Kamu **tidak bisa** menggunakan url sebagai nama layanan kecuali situs web memakai url sebagai nama resminya. Jika nama tidak deskriptif dan dianggap tidak jelas, **harus** menggunakan url. (untuk contoh, `YouTube` tidak diperbolehkan karena itu nama resmi dan deskriptif, sementara `youtube.com` tidak. `Top` adalah nama non-deskriptif, jadi menggunakan url `top.gg` sangat **dibutuhkan**.)

### **`altnames`**

- **Hanya** gunakan ini jika website menggunakan beberapa nama resmi (misal Pokémon dan 포켓몬스터) atau untuk memudahkan mencari presence tanpa menggunakan karakter spesial (misal Pokémon dan Pokemon). *Singkatan* dari nama layanan berada pada `tags`.

### **`description`**

- **Semua** presence **diharuskan** memilki deskripsi berbahasa inggris terlepas dari bahasa dari website.
- **Jangan** mencoba menerjemahkan deskripsi sendiri kecuali anda mengerti bahasa tersebut, penerjemah akan merubah `metadata.json` dan merubah deskripsi jika diperlukan.

### **`url`**

- Url **harus** berupa string jika website hanya menggunakan satu domain. Jika website menggunakan lebih dari satu, jadikan array dan tentukan masing-masing.
- **Jangan** mencantumkan protokol pada url (misal, `http` atau `https`), dan jangan memasukkan query parameter pada url (contoh, `www.google.com/search?gws_rd=ssl` yang seharusnya `www.google.com/`)

### **`version`**

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
- Tag **sebaiknya** mencantumkan nama alternatif untuk memudahkan pencarian ( misal, jika presence Amazon memiliki AWS support, maka akan memiliki tag seperti `amazon-web-services` dan `aws`)
- Anda **diharuskan** menambahkan tag `NSFW` jika presence untuk website NSFW.

### **`category`**

- Kategori **diharuskan** salah satu dari yang tercantum pada [dokumentasi](https://docs.premid.app/en/dev/presence/metadata#presence-categories).
- Presence harus menggunakan kategori yang menyerupai konten situs web. (untuk contoh, jangan gunakan `anime` ketika situs web tidak terkait dengan anime).

### **`regExp`** <br /> **`iFrameRegExp`**

- Regular expressions**harus** valid. Periksa expression menggunakan alat yang dicantumkan pada [dokumentasi](https://docs.premid.app/en/dev/presence/metadata#testing).

### **`settings`**

- Jika anda memutuskan untuk membuat string format ( misal, `%song% by %artist%`), anda harus membuat variabel dengan tanda persen diawal dan diakhir. Variabel seperti `%var`, `var%`, atau `%%var%%` dan apapun diantaranya **tidak** diperbolehkan demi standardisasi.
- Nama pengaturan harus **tidak** menggunakan huruf kapital semuanya. Untuk contoh, nama seperti `PERLIHATKAN STATUS BROWSING` **tidak** diperbolehkan; namun, nama seperti `Perlihatkan Status Browsing` atau `Perlihatkan status browsing` diperbolehkan.

## [**presence.ts**](https://docs.premid.app/en/dev/presence/class)

> Kode yang anda tulis **harus**_ ditulis dengan baik_ dan **harus** _dapat dibaca_ dan semua string harus benar secara tata bahasa ( kesalahan penulisan pada website dapat diabaikan). 
> 
> {.is-warning}

Berikut daftar aturan yang harus diikuti saat menulis sebuah file `presence.ts`:

- **Selalu** menyatakan instance baru dari class `Presence` sebelum variabel lainnya untuk menghindari masalah yang mungkin terjadi; hal ini tidak diharuskan pada desain jadi bisa dihapus kedepannya.
- **Jangan pernah** menggunakan custom function jika [ tersedia native variant](https://docs.premid.app/dev/presence#files-explained); hal ini memastikan perbaikan pada tingkat ekstensi dapat berpengaruh pada presence anda juga. Anda bebas menggunakan apapun yang dibutuhkan jika tidak menemukannya tercantum di dokumen.
- **Dilarang** menulis kode presence untuk website tanpa menambahkan dukungan bahasa utama ( misal, YouTube presence dibuat dengan dukungan khusus untuk bahasa portugis dan bahasa jepang, tidak bahasa inggris.)
- Bidang `smallImageKey` dan `smallImageText` dimaksudkan untuk memberi konteks tambahan/konteks kedua ( seperti `putar/jeda` untuk website video, `browsing` untuk website biasa, dan hal lain) bukan untuk mempromosikan profil Discord atau apapun yang tidak berhubungan PreMiD.
- Anda **tidak** diperbolehkan mengakses `localStorage`.
- Saat mengakses cookie untuk data tersimpan, harap memberi prefix pada key dengan `PMD_`.
- Kamu hanya membuat permintaan HTTP/HTTPS ke `premid.app` atau presence situs web API. Jika anda menggunakan domain eksternal, anda diharuskan untuk menjelaskan sebab kenapa hal itu dibutuhkan.
- **Jangan** atur bidang di dalam data obyek presence ke undefined setelah dideklarasikan, gunakan kata kunci `delete` saja. (untuk contoh, gunakan `delete data.startTimestamp` dari pada `data.startTimestamp = undefined`)
- Kamu **tidak** diperbolehkan untuk menulis presence yang merubah fungsi dari website yang dituju. Ini mencakup menambah, menghapus, atau merubah DOM elements.

## [**tsconfig.json**](https://docs.premid.app/en/dev/presence/tsconfig)

> **Jangan** menulis file `tsconfig.json` sendiri, gunakan yang telah disediakan [dokumentasi](https://docs.premid.app/en/dev/presence/tsconfig). 
> 
> {.is-warning}

# Perubahan

> Anda **harus** merubah versi di **metadata** menjadi lebih tinggi dari versi sebelumnya ketika membuat perubahan pada **presence.ts**,**iframe** atau **metadata**. 
> 
> {.is-warning}

Pada situasi tertentu, presence mungkin berperilaku aneh atau mungkin membutuhkan sedikit perubahan untuk meningkatkan kegunaannya. Berikut daftar aturan yang **harus** diikuti ketika merubah presence.

- Anda **tidak** diperbolehkan untuk menulis ulang sebuah presence atau merubah penciptanya. Jika pencipta presence terkena ban dari server resmi atau belum membuat perubahan yang dibutuhkan dalam waktu satu bulan, anda dapat menghubungi reviewer untuk meminta menulis ulang presence tersebut.
- Siapapun diperbolehkan untuk memberi hotfix untuk memperbaiki bug; tetapi, usahakan **tidak** merubah kode yang **tidak** memerlukan perbaikan. Valid modifications are, but **not** limited to, _missing paths_, _typos_, _missing images_, etc.   - Anyone may provide hotfixes to fix bugs; however, try **not** to make changes to code that does **not** need to be fixed. Modifikasi valid adalah, dan **tidak** terbatas pada _missing paths_, _typo_, _missing images_, dll.
- Jika anda membuat perubahan pada presence dan merubahnya setidaknya **seperempat** dari codebase presence, anda diperbolehkan untuk menambahkan diri sebgai kontributor. Hubungi verifier untuk informasi lebih lanjut tentang hal ini.   - Jika anda membuat perubahan pada presence dan merubahnya setidaknya **seperempat** dari codebase presence, anda diperbolehkan untuk menambahkan diri sebgai kontributor. Contact a reviewer for more information about this subject.
- Pastikan perubahan memiliki fungsi. Ini meliputi perbaikan (kode dan typo), penambahan (deskripsi dan tag), dll. **Jangan** menganti gambar jika tidak outdated dan masih dalam spesifikasi.    - Pastikan perubahan memiliki fungsi. Ini meliputi perbaikan (kode dan typo), penambahan (deskripsi dan tag), dll. **Jangan** menganti gambar jika tidak outdated dan masih dalam spesifikasi.

# Verifikasi

> Jika anda ingin menghubungi seseorang, gunakan server Discord official kami. All reviewers will have the `Reviewer` role on their profile. 
> 
> {.is-info}

> Please keep in mind that the reviewers work voluntarily and manage other repositories in addition to this one, your pull request may not get reviewed until hours or even days after it has been created. 
> 
> {.is-warning}

> **Semua** kode yang dikontribusi ke toko akan terlisensi dengan `Mozilla Public License 2.0`. 
> 
> {.is-info}

> **Selalu** miliki fork yang up-to-date sebelum membuat pull request. Hal ini akan membantu mambatasi false positive dari `DeepScan`. 
> 
> {.is-warning}

Proses yang penting dalam pengembangan presence adalah memasang presencemu di toko. Itu dapat dilakukan dengan membuat[pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) di github pada repository `PreMiD/Presences`. Our reviewers will confirm that your presence is up to standards and it will be pushed onto the store.

<div>
  <h2 style="font-size: 2rem; margin-bottom: 0;">Reviewers</h2>
  <a href="https://github.com/Alanexei"><img src="https://github.com/Alanexei.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/Bas950"><img src="https://github.com/Bas950.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/doomlerd"><img src="https://github.com/doomlerd.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/frozaum"><img src="https://github.com/frozaum.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/TheDropX"><img src="https://github.com/TheDropX.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <br />
</div>

## `Restrictions`

Repetitive offenses such as breaking guidelines, spamming pull requests, threats, or innapropriate behavior will get you banned from creating presences.

In this scenerio, the following changes will occur:

- Presences under your management will be transferred to the PreMiD bot or another user (reviewer decision). The application id for each presence will be recreated under the new owner's name.
- All of your issues and pull requests (presence creation, presence contribution, etc) created following the ban will be prompty closed.
- Tickets created under your name regarding presence development will be deleted.


## `Memeriksa`

Beberapa hal yang harus anda ketahui setelah membuka pull request:

- Dibutuhkan 2 reviewer untuk merge sebuah pull request.
- Jika pull request tidak aktif selama 14 hari, pull request tersebut akan segera ditutup.
- Semua pemeriksaan **harus** berhasil untuk merge.
- ⚠️ Anda **harus** memberi screenshot baru, tidak dimodifikasi diambil ( diambil oleh anda) menunjukkan perbandingan side-by-side dari profilmu dan websitenya untuk membuktikan presencemu bekerja. _Anda diperbolehkan menggabungkan screenshot untuk kemudahan melihat_ Ini berlaku baik dalam pembuatan dan perubahan.
- ⚠️ Kamu juga **harus** memasukkan tangkapan layar pengaturan presence di dalam extension jika disediakan. Contoh bisa dilihat [disini](https://imgur.com/a/OD3sj5R).

## `Pemeriksaan`

![Pemeriksaan](https://i.imgur.com/bk0A1iY.png)

Saat ini, sebuah presence melewati 2 tahapan pemeriksaan. All of these checks help the reviewers determine whether your presence is suitable for deployment.

- `DeepScan` adalah bot yang memeriksa kualitas kode. Jika anda menemui eror pada issue baru, anda **diharuskan** untuk memperbaikinya.
- `Schema Validation` akan mengscan file `metadata.json` mencari eror ( misal, missing fields, invalid value types, dll.). Jika anda menemukan isu baru anda juga **diharuskan** memperbaikinya. Menambahkan bidang schema ke file `metadata.json` akan memungkinkan editor teks anda ( jika didukung) untuk menunjukkan eror pada pengembangan.

## `Peraturan tambahan`

- **Selalu** pastikan untuk memulai presence dengan folder yang sesuai, jika namanya dimulai dengan huruf latin _apapun_ maka harus harus sesuai urutan abjad ( misal, `D/dアニメストア` atau `G/Google`). Karakter unicode/non-latin **harus** dalam folder `#` folder ( misal, `#/巴哈姆特`) dan nomer dalam folder `0-9` folder ( for e.g., `0-9/4anime`).

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
