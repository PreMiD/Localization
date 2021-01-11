---
title: Garis Panduan
description: Peraturan yang kesemua pembangun Presence perlu ikut untuk membolehkan Presence mereka ditambah.
published: true
date: 2020-12-29T02:18:29.846Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:45.733Z
---

# Garis Panduan

Ketika menerbitkan Presence ke [Github Repository kami](https://github.com/PreMiD/Presences), anda dikehendaki mengikuti beberapa peraturan yang ditetapkan. Bagi sesetengah orang, peraturan ketat ini nampak agak kejam. Namun, pelaksanaan set peraturan ini akan bantu kami dan pengguna kami untuk mengelakkan terjadinya isu.

# Penciptaan

Peraturan am pembangunan Presence adalah seperti berikut:

- Presence **mestilah** berkait dengan laman sesawang dipilih.
- Presence **tidak boleh** dibuat untuk laman sesawang haram. (cth. untuk., ubat penegas, pemasaran dadah, pornografi kanak-kanak, dsb.)
- Struktur fail mestilah bersih dan teratur, jangan sertakan fail yang tidak dinyatakan. (cth. untuk, folder vscode dan git, fail imej dan teks, dsb.)
- Anda perlu mempunyai struktur fail yang wajar, draf **tidak** dibenarkan.
- Presence untuk laman sesawang dengan (TLD `.onion`) atau laman sesawang dengan domain/hos percuma (sbg. cth., `.TK` [semua domain percuma Freenom], `.RF`, `GD`, dll) adalah **tidak** dibenarkan, pengecualian boleh dibuat sekiranya terdapat bukti bahawa mereka bayar untuk domain tersebut.
- Domain bagi Presence mestilah berusia sekurang-kurangnya 2 bulan.
- Presence yang mensasarkan halaman pelayar dalaman (seperti Chrome Web Store, `chrome://`, halaman `about:`, dll) **tidak** dibenarkan kerana mereka perlukan bendera uji kaji untuk dibolehkan di pihak pengguna dan mampu menyebabkan kerosakan pada pelayar mereka.
- Presence dengan sokongan hanya untuk subdomain tunggal **tidak** akan dibenarkan, kerana ia akan tampak rosak untuk halaman lain (seperti halaman utama), pengecualian boleh dibuat untuk halaman polisi dan perhubungan (kandungan yang tidak kerap digunakan) atau laman di mana kandungan lainnya tidak mempunyai kaitan. (cth. untuk, laman wikia)
- Presence untuk radio dalam talian hanya dibenarkan sekiranya radio tersebut mempunyai sekurang-kurangnya 100 pendengar mingguan dan 15 pendengar serempak.
- Presence kualiti rendah (atau yang mana dengan konteks kecil) adalah **tidak** dibenarkan (sbg. cth., hanya menunjukkan logo dan tulisan tetapi tidak mengubahnya lagi.)
- Penyertaan folder `dist`, fail `presence.ts`, fail `iframe.ts`, dan fail `metadata.json` adalah diwajibkan supaya hasilnya nanti serupa seperti apa yang diwakilkan dalam skema berikut:

```bash
presence
├── dist
│   ├── metadata.json
│   └── presence.js
├── presence.ts
└── tsconfig.json
```

atau jika anda menggunakan fail `iframe.ts`:

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

> Untuk kemudahan para pembangun Presence kami, kami telah sediakan skema yang anda boleh gunakan untuk mengesahkan kewibawaan fail `metadata` anda. Ini kesemuanya pilihan dan tidak diperlukan ketika proses ulasan. 
> 
> {.is-info}

> Ianya amat digalakkan untuk anda kemaskan fail `metadata` dalam format yang ditunjukkan di bawah, dan anda mesti mempunyai nama perkhidmatan, keterangan, tag dan medan tetapan yang betul tatabahasanya. Apa-apa yang tidak dikemaskan mengikut spesifikasi **tidak** akan dibenarkan. 
> 
> {.is-warning}

> Presence untuk laman sesawang yang mempunyai kandungan dewasa **mesti** mempunyai tag `nsfw`, dan logo/lakaran kecil berkaitan **tidak** boleh mengandungi kandungan sebegini. 
> 
> {.is-warning}

Setiap Presence mempunyai fail pemerihal dipanggil `metadata.json`, metadata tersebut mempunyai piawaian ketat dan contoh fail ini boleh dilihat di bawah:

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

> Sekiranya sesuatu medan disenaraikan sebagai pilihan dalam [pendokumenan](https://docs.premid.app/en/dev/presence/metadata) dan Presence anda menggunakan nilai lalai untuknya, jangan sertakannya dalam fail `metadata`. (sbg. cth., sebuah Presence tanpa sokongan iframe tidak perlukan medan `iframe`.) 
> 
> {.is-warning}

> Semua imej dalam fail `metadata` mestilah dihoskan di `i.imgur.com`. Penggunaan kandungan yang dihoskan di laman sesawang **tidak** dibenarkan kerana laluan dan fail boleh berubah tanpa jangkaan. 
> 
> {.is-warning}

Senarai medan dan peraturan berkaitan disenaraikan di bawah:

### **`$schema`**

- _Kekunci_ skema **mestilah** menyertakan tanda dolar di awal kekunci, ini akan memberi isyarat kepada penyunting teks bahawa anda ingin mengesahkan fail JSON anda terhadap sesuatu model. _Seperti yang dinyatakan sebelum ini, anda tidak perlu sertakan skema, tetapi jika anda sertakannya anda mesti mengambil kira perkara ini._

### **`author`**

- _Nilai_ ID **mestilah** menggunakan ID emping salji Discord anda. Anda boleh dapatkannya dengan membolehkan [mod pembangun](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-). _Tolong **jangan** kelirukan yang ini dengan ID aplikasi anda, yang hanya digunakan untuk Presence anda._

### **`contributors`**

- **Jangan** tambah diri sendiri sebagai penyumbang, dan jangan tambah orang lain sebagai penyumbang melainkan mereka telah membantu dalam ciptaan Presence.

### **`service`**

- Nama perkhidmatan **mestilah** sama dengan nama direktori Presence tersebut. Sebagai contoh, jika Presence berada di `/websites/Y/YouTube/`, maka nama perkhidmatannya mestilah `YouTube`.
- Anda **tidak boleh** gunakan URL sebagai nama perkhidmatan melainkan laman sesawang itu sendiri menggunakan URL sebagai nama rasminya. Jika nama tidak deskriptif dan boleh dianggap kabur, penggunaan URL sebagai nama **diperlukan**. (sbg. cth., `YouTube` dibenarkan kerana ianya nama rasmi dan deskriptif, manakala `youtube.com` tidak dibenarkan. `Top` pula bukan nama yang deskriptif, jadi penggunaan URL `top.gg` adalah **diperlukan**.)

### **`altnames`**

- **Hanya** gunakan ini dalam senario di mana laman sesawang menggunakan beberapa nama rasmi berlainan (spt. Pokémon and 포켓몬스터) atau untuk memudahkan pencarian Presence tanpa menggunakan aksara istimewa (spt. Pokémon dan Pokemon). Versi *kependekan* nama perkhidmatan diletakkan di bawah `tags`.

### **`description`**

- **Semua** Presence **mesti** mempunyai keterangan bahasa Inggeris tanpa mengira bahasa keutamaan laman sesawang.
- **Jangan** cuba untuk terjemah keterangan dengan sendiri melainkan anda tahu bahasa tersebut, penterjemah akan ubah `metadata.json` anda dan ubah keterangan jika diperlukan.

### **`url`**

- URL **mestilah** dalam bentuk rentetan sekiranya laman sesawang hanya gunakan satu domain. Jika laman sesawang menggunakan beberapa domain, letakkan nilai sebagai tatasusunan dan nyatakan setiap satunya.
- **Jangan** sertakan protokol di dalam URL (sbg. cth., `http` atau `https`), dan jangan sertakan parameter pertanyaan (sbg. cth., `www.google.com/search?gws_rd=ssl` yang mana sepatutnya ditulis sebagai `www.google.com`)

### **`version`**

- Sentiasa pastikan nombor versi mengikut [piawaian pemversian semantik](https://semver.org), yang diterjemah ke skema berikut: `<NEW-FEATURE>.<HUGE-BUGFIX>.<SMALL-BUGFIX-OR-METADATA-CHANGES>` (&lt;CIRI-BAHARU&gt;.&lt;PEMBAIKIAN-PEPIJAT-BESAR&gt;.&lt;PEMBAIKIAN-PEPIJAT-KECIL-ATAU-PERUBAHAN-METADATA&gt;). Pemversian lain seperti `1.0.0.1`, `1.0`, `1`, `1.0.0-BETA` atau mengubah `1.0.0` ke `2.0.0` untuk pembaikian pepijat/perubahan kecil **tidak** dibenarkan.
- Versi **mestilah** bermula dengan `1.0.0` melainkan diberitahu sebaliknya, versi lain **tidak** akan dibenarkan.

### **`logo`**

- Logo **mestilah** imej segi empat sama dengan nisbah bidang `1:1`.
- Imej **mestilah** mempunyai resolusi sekurang-kurangnya `512x512` piksel. Anda boleh membesarkan saiz imej menggunakan alatan seperti [waifu2x](http://waifu2x.udp.jp/).

### **`thumbnail`**

- Lakaran kecil **patut** menggunakan [kad promosi lebar](https://i.imgur.com/3QfIc5v.jpg) jika boleh atau [tangkapan layar](https://i.imgur.com/OAcBmwW.png) jika **tiada** kad tersebut.

### **`color`**

- Warna **mestilah** nilai perenambelasan di antara `#000000` dan `#FFFFFF`.
- Rentetan warna **mestilah** diawalkan dengan simbol tanda pagar.

### **`tags`**

- **Semua** Presence mesti mempunyai sekurang-kurangnya _sebuah_ tag.
- Tag **tidak** patut ada sebarang selang, tanda palang, tanda petik tunggal/ganda, aksara Unicode, dan mestilah berhuruf kecil.
- Tag **sepatutnya** menyertakan nama perkhidmatan alternatif untuk memudahkan carian (sbg. cth., jika Presence untuk Amazon menyertakan sokongan AWS, ia perlu ada tag seperti `amazon-web-services` dan `aws`)
- Anda **perlu** tambah tag `NSFW` sekiranya Presence tersebut adalah untuk laman sesawang dewasa (NSFW 18+).

### **`category`**

- Kategori **mestilah** di kalangan kategori yang disenaraikan dalam [pendokumenan](https://docs.premid.app/en/dev/presence/metadata#presence-categories).
- Presence mestilah menggunakan kategori yang serasi dengan kandungan laman sesawang. (sebagai cth., jangan gunakan `anime` apabila laman sesawang tiada kaitan dengan anime).

### **`regExp`** <br /> **`iFrameRegExp`**

- Ungkapan nalar **mestilah** sah. Sila uji ungkapan anda menggunakan alatan yang disenaraikan dalam [pendokumenan](https://docs.premid.app/en/dev/presence/metadata#testing).

### **`tetapan`**

- Jika anda membuat keputusan untuk membuat rentetan format (sebagai cth., `%song% by %artist%`), anda mesti mempunyai pemboleh ubah yang diapitkan dengan tanda peratus di awal dan akhir. Pemboleh ubah seperti `%var`, `var%`, atau `%%var%%` dan lain-lain yang serupa **tidak** dibenarkan untuk tujuan pemiawaian.
- Nama tetapan **tidak** patut berhuruf besar semata-mata. Sebagai contoh, nama seperti `SHOW BROWSING STATUS` itu **tidak** akan dibenarkan; tetapi, nama seperti `Show Browsing Status` atau `Show browsing status` dibenarkan.
- Adding custom strings to the [Localization Repository](https://github.com/PreMiD/Localization) to later be used within the `multiLanguage` setting is only allowed if the presence has already been released before and has aquired at least 1000 users.

## [**presence.ts**](https://docs.premid.app/en/dev/presence/class)

> Kod yang anda tulis **mesti** ditulis dengan _baik_ dan **mesti** boleh _dibaca_ dan kesemua rentetan mestilah betul tatabahasanya (kesalahan tatabahasa di laman sesawang boleh diabaikan). 
> 
> {.is-warning}

> Setiap Presence perlu ikut set peraturan lin yang ketat yang akan diperiksa semasa proses semakan. Beberapa pengesyoran boleh dilihat di bawah. - [TypeScript Plugin Recommendations for Strict Type Checking](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules) untuk pengesyoran pemalam TypeScript bagi pemeriksaan jenis ketat - [ESlint Recommendations](https://eslint.org/docs/rules) untuk pengesyoran ESlint 
> 
> {.is-info}

Ini senarai peraturan yang perlu diikut semasa menulis fail `presence.ts` anda:

- **Sentiasa** isytihar tika baharu kelas `Presence` sebelum isytihar pembolehubah lain untuk mengelakkan isu terpencil yang mampu berlaku; ini bukan keperluan mengikut reka cipta jadi ia mungkin dialihkan pada masa hadapan.
- **Jangan** guna fungsi sendiri apabila [varian natif telah wujud](https://docs.premid.app/dev/presence#files-explained); ini untuk memastikan pembaikian di peringkat sambungan akan turut dikenakan pada Presence anda. Anda bebas untuk gunakan apa sahaja yang diperlukan sekiranya anda tidak menjumpainya disenaraikan dalam dokumen.
- Anda **dilarang** mengekod Presence untuk sesuatu laman tanpa menambah sokongan bahasa utamanya (sbg. cth., Presence untuk YouTube dikodkan dengan sokongan untuk bahasa Portugis dan bahasa Jepun, tanpa bahasa Inggeris itu sendiri.)
- Medan `smallImageKey` dan `smallImageText` bertujuan untuk menyediakan konteks tambahan/sekunder (seperti `playing/paused` untuk laman video, `browsing` untuk laman biasa, dan kegunaan lain) bukan untuk mempromosikan profil Discord atau apa-apa yang tidak berkaitan dengan PreMiD.
- Anda **tidak** dibenarkan mencapai `localStorage`.
- Apabila mencapai kuki untuk data disimpan, sila imbuhkan kekunci dengan awalan `PMD_`.
- Anda hanya boleh lakukan permintaan HTTP/HTTPS ke `premid.app` atau API laman sesawang Presence. Jika anda menggunakan domain luaran, anda akan diminta menjelaskan kenapa ianya diperlukan.
- **Jangan** tetapkan medan dalam objek data Presence sebagai tak tertakrif setelah ianya diisytiharkan, sebaliknya gunakanlah kata kunci `delete`. (sebagai cth., gunakan `delete data.startTimestamp` dan bukannya `data.startTimestamp = undefined`)
- Anda **tidak** dibenarkan untuk menulis Presence yang mengubah kefungsian laman sesawang yang berkaitan. Ini termasuk penambahan, pemadaman, atau perubahan unsur DOM.

## [**tsconfig.json**](https://docs.premid.app/en/dev/presence/tsconfig)

> **Jangan** tulis fail `tsconfig.json` anda sendiri, gunakan apa yang telah disediakan dalam [pendokumenan](https://docs.premid.app/en/dev/presence/tsconfig). 
> 
> {.is-warning}

# Pengubahsuaian

> Anda **mesti** ubah versi dalam **metadata** kepada nilai lebih tinggi daripada versi sebelumnya apabila membuat perubahan kepada fail **presence.ts**, **iframe.ts** atau **metadata.json**. 
> 
> {.is-warning}

Dalam sesetengah keadaan, Presence mungkin berkelakuan luar jangkaan atau diubah secara kecil untuk meningkatkan kefungsian mereka. Ini senarai peraturan yang anda **mesti** ikuti ketika mengubahsuai Presence.

- Anda **tidak** dibenarkan untuk menulis semula sesebuah Presence atau mengubah penulisnya. Sekiranya penulis Presence telah diharamkan daripada pelayan rasmi atau masih belum membuat perubahan di dalam sebulan, anda boleh hubungi penyemak untuk tanya sama ada anda boleh menulis semula Presence tersebut.
- Jika anda mengubah suai sesebuah Presence dan mengubah sekurang-kurangnya **satu suku** daripada pangkalan kod Presence tersebut, anda dibenarkan menambah diri sendiri sebagai penyumbang. Hubungi penyemak untuk maklumat lanjut mengenai perkara ini.   - Jika anda mengubah suai sesebuah Presence dan mengubah sekurang-kurangnya **satu suku** daripada pangkalan kod Presence tersebut, anda dibenarkan menambah diri sendiri sebagai penyumbang. Hubungi pengulas untuk maklumat lanjut mengenai perkara ini.
-  Sesiapa pun boleh sediakan pembaikian segera untuk membaiki pepijat; namun begitu, **jangan** buat perubahan yang **tidak** diperlukan. Pengubahsuaian yang sah termasuk pembaikian umum (kod dan tipo), penambahan (keterangan dan tag), fail yang tercicir, dll. **Jangan** tukar imej jika ianya tidak ketinggalan zaman dan mengikut spesifikasi.

# Pengesahan

> **Semua** kod yang disumbangkan ke kedai akan dilesenkan di bawah `Mozilla Public License 2.0`. 
> 
> {.is-info}

> Jika anda perlu menghubungi seseorang, sila gunakan pelayan Discord rasmi kami. All reviewers will have the `Reviewer` role on their profile. 
> 
> {.is-info}

> Please keep in mind that the reviewers work voluntarily and manage other repositories in addition to this one, your pull request may not get reviewed until hours or even days after it has been created. 
> 
> {.is-warning}

> **Always** have an up-to-date fork before creating your pull request. This will help limit false positives from the checks. 
> 
> {.is-warning}

Proses paling penting dalam pembangunan Presence adalah untuk memasukkan Presence anda ke dalam kedai. Ini dilakukan dengan membuat [permintaan tarikan](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) di GitHub pada repositori `PreMiD/Presences`. Penyemak kami akan sahkan Presence anda mengikut piawaian dan akan memasukkannya ke dalam kedai.

<div>
  <h2 style="font-size: 2rem; margin-bottom: 0;">Penyemak Presence</h2>
  <a href="https://github.com/Bas950"><img src="https://github.com/Bas950.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/Timeraa"><img src="https://github.com/Timeraa.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/ririxichan"><img src="https://github.com/ririxichan.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <br />
</div>

## `Restrictions`

Kesalahan berulang seperti pelanggaran garis panduan, penspaman permintaan tarikan, ancaman, atau perlakuan tidak sesuai akan mengharamkan anda daripada mencipta Presence.

In this scenerio, the following changes will occur:

- Presence di bawah pengurusan anda akan dipindahkan ke bot PreMiD atau pengguna lain (ikut kepurusan penyemak). ID aplikasi untuk setiap Presence akan dicipta semula di bawah nama pemilik baharu.
- Kesemua isu dan permintaan tarikan anda (penciptaan Presence, penyumbangan Presence, dll) yang dicipta setelah pengharaman akan ditutup dengan segera.
- Semua tiket yang dicipta di bawah nama anda berkaitan pembangunan Presence akan dipadam.


## `Reviewing`

A few things you should know after opening a pull request:

- It takes 2 reviewers to merge a pull request.
- If a pull request is inactive for a period of 14 days, it will be promptly closed.
- All checks **must** be passed in order to merge.
- ⚠️ Anda **mesti** berikan tangkapan layar baharu, tidak tersunting (diambil oleh anda sendiri) yang menunjukkan perbandingan profil anda dan laman sesawang untuk membuktikan Presence anda berfungsi. _You are allowed to stitch screenshots together for viewing pleasure._ This applies for both creation and modification.
- ⚠️ Anda juga **perlu** sertakan tangkapan layar tetapan Presence di dalam sambungan sekiranya dibekalkan. An example can be seen [here](https://imgur.com/a/OD3sj5R).

## `Checks`

![Checks](https://i.imgur.com/BCDZQe9.png)

Ketika ini, sesebuah Presence melalui dua (2) peringkat semakan yang berlainan. Kesemua semakan ini membantu penyemak untuk menentukan sama ada Presence anda sesuai untuk dikerahkan.

- `Codacy` is a bot that checks for code quality. If you ever receive errors for new issues, you are **required** to fix them.
- `Schema Validation` will scan your `metadata.json` file for any errors (for e.g., missing fields, invalid value types, etc.). If you ever see any new issues, you are also **required** to fix those. Adding a schema field to your `metadata.json` file will allow your text editor (if supported) to show you these errors during development.

## `Peraturan Tambahan`

- **Sentiasa** pastikan anda mulakan Presence anda dalam folder yang sesuai, sekiranya namanya bermula dengan _sebarang_ huruf Rumi maka ia mestilah berada di bawah padanan abjadnya (sbg. cth., `D/dアニメストア` atau `G/Google`). Sebarang aksara Unicode/bukan-Rumi yang lain **mesti** berada di bawah folder `#` (sbg. cth., `#/巴哈姆特`) dan nombor berada di bawah folder `0-9` (sbg. cth., `0-9/4anime`).

Setelah mematuhi kesemua garis panduan dengan ulasan dan semakan yang wajar, Presence anda akan dicantumkan dengan kedai.

# Sumbangan

`Semakan 2` garis panduan ditulis dan disumbangkan oleh individu berikut:

<div>
<a href="https://github.com/Alanexei"><img src="https://github.com/Alanexei.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
</div>

`Revision 1` diselenggara oleh insan berikut:

<div>
<a href="https://github.com/Alanexei"><img src="https://github.com/Alanexei.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
<a href="https://github.com/Bas950"><img src="https://github.com/Bas950.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
<a href="https://github.com/doomlerd"><img src="https://github.com/doomlerd.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
</div>
