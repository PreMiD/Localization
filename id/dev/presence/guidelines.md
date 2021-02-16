---
title: Guidelines
description: Rules all presence developers must follow to have their presence added.
published: true
date: 2020-12-29T02:18:29.846Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:45.733Z
---

# Guidelines

When publishing Presences to [our GitHub Repository](https://github.com/PreMiD/Presences), we require you to follow a set of guidelines. Bagi beberapa, peraturan ini mungkin agak kejam. However, the implementation of these rule sets will keep us and our users from running into issues.

# Creation

The general rules of presence development are as follows:

- Presences **must** be related to the website of choice.
- Presences **cannot** be made for illegal websites. (for e.g., stressors, drug marketing, child pornography, etc.)
- The file structure must be clean and managed, do not include files which are not specified. (for e.g., vscode and git folders, image and text files, etc.)
- You need to have a proper file structure, drafts are **not** allowed.
- Presences for websites with (`.onion` TLDs) or websites with free domains/hosts (for e.g., `.TK` [all free Freenom domains], `.RF`, `GD`, etc) are **not** permitted, exceptions can be made if a proof is presented showing that they paid for the domain.
- The domain of the presence must be at least 2 months old.
- Presence yang mengarah pada halaman internal browser (seperti Chrome Web Store `chrome://`, `about:` pages, etc) **tidak** diperbolehkan sebab membutuhkan flag experimental diaktifkan oleh pengguna dan bisa menyebabkan kerusakan pada browser.
- Presence dengan dukungan hanya satu halaman **tidak** diperbolehkan, sebab akan terlihat rusak bagi halaman lain ( seperti homepage) pengecualian dapat dibuat untuk halaman kebijakan dan kontak (konten yang jarang digunakan) atau website yang konten lainnya tidak berhubungan. (misal, halaman wikia)
- Presence radio online hanya diperbolehkan jika radio memiliki setidaknya 100 pendengar dan 15 secara bersamaan.
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

or if you're using a `iframe.ts` file:

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

> For the convenience of our presence developers, we have provided a schema which you can use to validate the integrity of your `metadata` file. This is entirely optional and is not required during the review process. 
> 
> {.is-info}

> It is highly recommended that you organize your `metadata` file in the format shown below, and you must have grammatically correct service names, descriptions, tags, and setting fields. Anything not organized to specifications will **not** be permitted. 
> 
> {.is-warning}

> Presences of websites that have explicit content **must** have the `nsfw` tag, and the logo/thumbnail must **not** contain any of this content. 
> 
> {.is-warning}

Each presence has a descriptor file called `metadata.json`, the metadata has a strict standard and an example of this file can be seem below:

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

> If a field is listed as optional on the [documentation](https://docs.premid.app/en/dev/presence/metadata) and your presence uses the default value for it, do not include it in the `metadata` file. (for e.g., a presence without iframe support would not need the `iframe` field.) 
> 
> {.is-warning}

> All images in the `metadata` file must be hosted on `i.imgur.com`. Using content hosted on the website is **not** permitted as they can change the paths and files unwillingly. 
> 
> {.is-warning}

A list of fields and their rules are listed below:

### **`$schema`**

- The schema _key_ **must** include a dollar sign at the beginning of it, this will signal your text editor that you want to validate your JSON file against a model. _As stated earlier, you do not need to include a schema, but if you include it you must take this into account._

### **`author`**

- The ID _value_ **must** be your Discord snowflake ID. You can get it by enabling [developer mode](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-). _Please do **not** confuse this with your application ID, which is only for your presence._

### **`contributors`**

- Do **not** add yourself as a contributor, and do not add someone else as a contributor unless they have helped with the presence.

### **`service`**

- The service name **must** be the name of the presence directory. For example, if the presence is located at `/websites/Y/YouTube/`, the service name must be `YouTube`.
- You **cannot** use the url as the service name unless the website uses the url as its official name. If the name is not descriptive and can be considered vague, using the url is **required**. (for e.g., `YouTube` is permitted because that is the official name and is descriptive, while `youtube.com` is not. `Top` is a non-descriptive name, so using the url `top.gg` is **required**.)

### **`altnames`**

- **Only** use this in scenerios where a website goes under multiple official names (e.g. Pokémon and 포켓몬스터) or to make it easier to search the presence without using special characters (e.g. Pokémon and Pokemon). *Shortened* versions of service names go under `tags`.

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
- The presence must use a category that matches the content of the website. (for e.g., don't use `anime` when the website isn't related to anime).

### **`regExp`** <br /> **`iFrameRegExp`**

- Regular expressions**harus** valid. Periksa expression menggunakan alat yang dicantumkan pada [dokumentasi](https://docs.premid.app/en/dev/presence/metadata#testing).

### **`settings`**

- Jika anda memutuskan untuk membuat string format ( misal, `%song% by %artist%`), anda harus membuat variabel dengan tanda persen diawal dan diakhir. Variabel seperti `%var`, `var%`, atau `%%var%%` dan apapun diantaranya **tidak** diperbolehkan demi standardisasi.
- The name of settings must **not** be in all capital letters. For example, names such as `SHOW BROWSING STATUS` will **not** be permitted; however, names such as `Show Browsing Status` or `Show browsing status` are permitted.
- Adding custom strings to the [Localization Repository](https://github.com/PreMiD/Localization) to later be used within the `multiLanguage` setting is only allowed if the presence has already been released before and has aquired at least 1000 users.

## [**presence.ts**](https://docs.premid.app/en/dev/presence/class)

> The code you write **must** be _well-written_ and **must** be _readable_ and all strings must be grammatically correct (grammar errors on websites can be ignored). 
> 
> {.is-warning}

> Each presence follows a strict linting ruleset which will be checked during the review process. A couple of recommendations can be seen below. - [TypeScript Plugin Recommendations for Strict Type Checking](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules) - [ESlint Recommendations](https://eslint.org/docs/rules) 
> 
> {.is-info}

Here is a list of rules you must follow when writing your `presence.ts` file:

- **Selalu** menyatakan instance baru dari class `Presence` sebelum variabel lainnya untuk menghindari masalah yang mungkin terjadi; hal ini tidak diharuskan pada desain jadi bisa dihapus kedepannya.
- **Jangan pernah** menggunakan custom function jika [ tersedia native variant](https://docs.premid.app/dev/presence#files-explained); hal ini memastikan perbaikan pada tingkat ekstensi dapat berpengaruh pada presence anda juga. Anda bebas menggunakan apapun yang dibutuhkan jika tidak menemukannya tercantum di dokumen.
- **Dilarang** menulis kode presence untuk website tanpa menambahkan dukungan bahasa utama ( misal, YouTube presence dibuat dengan dukungan khusus untuk bahasa portugis dan bahasa jepang, tidak bahasa inggris.)
- Bidang `smallImageKey` dan `smallImageText` dimaksudkan untuk memberi konteks tambahan/konteks kedua ( seperti `putar/jeda` untuk website video, `browsing` untuk website biasa, dan hal lain) bukan untuk mempromosikan profil Discord atau apapun yang tidak berhubungan PreMiD.
- Anda **tidak** diperbolehkan mengakses `localStorage`.
- Saat mengakses cookie untuk data tersimpan, harap memberi prefix pada key dengan `PMD_`.
- You may only make HTTP/HTTPS requests to `premid.app` or the presence website API. Jika anda menggunakan domain eksternal, anda diharuskan untuk menjelaskan sebab kenapa hal itu dibutuhkan.
- Do **not** set fields in the presence data object to undefined after it has been declared, use the `delete` keyword instead. (for e.g., use `delete data.startTimestamp` instead of `data.startTimestamp = undefined`)
- You are **not** allowed to write presences that change the functionality of a given website. This includes the addition, deletion, or modification of DOM elements.

## [**tsconfig.json**](https://docs.premid.app/en/dev/presence/tsconfig)

> **Jangan** menulis file `tsconfig.json` sendiri, gunakan yang telah disediakan [dokumentasi](https://docs.premid.app/en/dev/presence/tsconfig). 
> 
> {.is-warning}

# Perubahan

> Anda **harus** merubah versi di **metadata** menjadi lebih tinggi dari versi sebelumnya ketika membuat perubahan pada **presence.ts**,**iframe** atau **metadata**. 
> 
> {.is-warning}

In some situations, presences may behave unexpectedly or could use some minor changes to improve their functionality. Here is a list of rules that you **must** follow while modifiying presences.

- Anda **tidak** diperbolehkan untuk menulis ulang sebuah presence atau merubah penciptanya. If the presence author was banned from the official server or hasn't made the required changes within a month, you may contact a reviewer to see if you can to rewrite the presence.
- Jika anda membuat perubahan pada presence dan merubahnya setidaknya **seperempat** dari codebase presence, anda diperbolehkan untuk menambahkan diri sebgai kontributor. Hubungi verifier untuk informasi lebih lanjut tentang hal ini.   - Jika anda membuat perubahan pada presence dan merubahnya setidaknya **seperempat** dari codebase presence, anda diperbolehkan untuk menambahkan diri sebgai kontributor. Hubungi reviewer untuk informasi lebih lanjut tentang hal ini.
-  Anyone may provide hotfixes to fix bugs; however, do **not** to make changes that are **not** required. Valid modifications include general fixes (code and typos), additions (descriptions and tags), missing files, etc. **Jangan** menganti gambar jika tidak outdated dan masih dalam spesifikasi.

# Verifikasi

> **Semua** kode yang dikontribusi ke toko akan terlisensi dengan `Mozilla Public License 2.0`. 
> 
> {.is-info}

> Jika anda ingin menghubungi seseorang, gunakan server Discord official kami. Semua reviewer akan memilki role `Reviewer` di profilnya. 
> 
> {.is-info}

> Harap diingat bahwa reviewer bekerja secara sukarela dan mengurus repository lainnya selain ini, pull request anda mungkin tidak ditinjau hingga berjam-jam atau bahkan berhari-hari setelah dibuat. 
> 
> {.is-warning}

> **Selalu** miliki fork yang up-to-date sebelum membuat pull request. This will help limit false positives from the checks. 
> 
> {.is-warning}

The most important process of presence development is getting your presence on the store. This is done by making a [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) on GitHub on the `PreMiD/Presences` repository. Our reviewers will confirm that your presence is up to standards and will push it onto the store.

<div>
  <h2 style="font-size: 2rem; margin-bottom: 0;">Presence Reviewers</h2>
  <a href="https://github.com/Bas950"><img src="https://github.com/Bas950.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/Timeraa"><img src="https://github.com/Timeraa.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/ririxichan"><img src="https://github.com/ririxichan.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
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

![Pemeriksaan](https://i.imgur.com/BCDZQe9.png)

Saat ini, sebuah presence melewati 2 tahapan pemeriksaan. All of these checks help the reviewers determine whether your presence is suitable for deployment.

- `Codacy` is a bot that checks for code quality. Jika anda menemui eror pada issue baru, anda **diharuskan** untuk memperbaikinya.
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
