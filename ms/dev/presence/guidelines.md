---
title: Garis Panduan Presence
description: Rules that all presence developers must follow to have their presence added.
published: true
date: 2021-02-23T01:08:58.632Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:45.733Z
---

<div align="center">
    <img src="https://github.com/PreMiD.png?size=2048" width="128px" style="max-width:100%;">
    <h3 style="font-size: 2rem; margin-bottom: 0">Garis Panduan Presence</h3>
    <h4 style="margin-top: 0">Revision 3</h4>
    <br />
</div>

# Garis Panduan

When publishing Presences to this GitHub, we require you to follow a set of guidelines. Bagi sesetengah orang, peraturan ketat ini nampak agak kejam. However, the implementation of these rulesets will keep us and the users from running into any issues.

# Penciptaan

Peraturan am pembangunan Presence adalah seperti berikut:

- Presence **mestilah** berkait dengan laman sesawang dipilih.
- Presence **tidak boleh** dibuat untuk laman sesawang haram. (sbg.cth., ubat penegas, pemasaran dadah, pornografi kanak-kanak, dsb.)
- Struktur fail mestilah bersih dan teratur, jangan sertakan fail yang tidak dinyatakan. (sbg. cth., folder vscode dan git, fail imej dan teks, dsb.)
- Anda perlu mempunyai struktur fail yang wajar, draf **tidak** dibenarkan.
- Presence untuk laman sesawang dengan (TLD `.onion`) atau laman sesawang dengan domain/hos percuma (sbg. cth., `.TK` [semua domain percuma Freenom], `.RF`, `GD`, dll) adalah **tidak** dibenarkan, pengecualian boleh dibuat sekiranya terdapat bukti bahawa mereka bayar untuk domain tersebut.
- Domain bagi Presence mestilah berusia sekurang-kurangnya 2 bulan.
- Presence yang mensasarkan halaman pelayar dalaman (seperti Kedai Web Chrome, `chrome://`, halaman `about:`, dll) **tidak** dibenarkan kerana mereka perlukan bendera uji kaji untuk dibolehkan di pihak pengguna dan mampu menyebabkan kerosakan pada pelayar mereka.
- Presence dengan sokongan hanya untuk subdomain tunggal **tidak** akan dibenarkan, kerana ia akan tampak rosak untuk halaman lain (seperti halaman utama), pengecualian boleh dibuat untuk halaman polisi dan perhubungan (kandungan yang tidak kerap digunakan) atau laman di mana kandungan lainnya tidak mempunyai kaitan. (sbg. cth., laman wikia)
- Presences for online radios are only allowed if the radio has at least 100 weekly listeners and 15 concurrent and must have some features than only showing album/song title etc.
- Presence kualiti rendah (atau yang mana dengan konteks kecil) adalah **tidak** dibenarkan (sbg. cth., hanya menunjukkan logo dan tulisan tetapi tidak mengubahnya lagi.)
- With the `buttons` release, we require some guidelines for them:
  - Redirects to main page are prohibited.
  - Promoting websites by them is prohibited.
  - They can't show addinational data when you can't show them in `state` or `details`.
- Including the `dist` folder, `presence.ts` file, `iframe.ts` file, and `metadata.json` file is mandatory so the result would be what is represented in the following schema:

```bash
presence
├── dist
│   └── metadata.json
├── presence.ts
└── tsconfig.json
```

atau jika anda menggunakan fail `iframe.ts`:

```bash
presence
├── dist
│   └── metadata.json
├── presence.ts
├── iframe.ts
└── tsconfig.json
```

## [**metadata.json**](/dev/presence/metadata)

> Untuk kemudahan para pembangun Presence kami, kami telah sediakan skema yang anda boleh gunakan untuk mengesahkan kewibawaan fail `metadata` anda. Ini kesemuanya pilihan dan tidak diperlukan ketika proses ulasan.

> Ianya amat digalakkan untuk anda kemaskan fail `metadata` dalam format yang ditunjukkan di bawah, dan anda mesti mempunyai nama perkhidmatan, keterangan, tag dan medan tetapan yang betul tatabahasanya. Apa-apa yang tidak dikemaskan mengikut spesifikasi **tidak** akan dibenarkan.

> Presence untuk laman sesawang yang mempunyai kandungan dewasa **mesti** mempunyai tag `nsfw`, dan logo/lakaran kecil berkaitan **tidak** boleh mengandungi kandungan sebegini.

Setiap Presence mempunyai fail pemerihal dipanggil `metadata.json`, metadata tersebut mempunyai piawaian ketat dan contoh fail ini boleh dilihat di bawah:

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

> If a field is listed as optional on the [documentation](https://docs.premid.app/en/dev/presence/metadata) or there is a `*` next to the key, and your presence uses the default value for it, do not include it in the `metadata` file. (sbg. cth., sebuah Presence tanpa sokongan iframe tidak perlukan medan `iframe`.)

> Semua imej dalam fail `metadata` mestilah dihoskan di `i.imgur.com`. Penggunaan kandungan yang dihoskan di laman sesawang **tidak** dibenarkan kerana laluan dan fail boleh berubah tanpa jangkaan.

Senarai medan dan peraturan berkaitan disenaraikan di bawah:

### **`$schema`**

- _Kekunci_ skema ini **mestilah** menyertakan tanda dolar di awal kekunci, ini akan memberi isyarat kepada penyunting teks bahawa anda ingin mengesahkan fail JSON anda terhadap sesuatu model. _Seperti yang dinyatakan sebelum ini, anda tidak perlu sertakan skema, tetapi jika anda sertakannya anda mesti mengambil kira perkara ini._

### **`author`**

- _Nilai_ ID **mestilah** menggunakan ID emping salji Discord anda. Anda boleh dapatkannya dengan membolehkan [mod pembangun](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-). _Tolong **jangan** kelirukan yang ini dengan ID aplikasi anda, yang hanya digunakan untuk Presence anda._

### **`*contributors`**

- **Jangan** tambah diri sendiri sebagai penyumbang, dan jangan tambah orang lain sebagai penyumbang melainkan mereka telah membantu dalam ciptaan Presence.

### **`service`**

- Nama perkhidmatan **mestilah** sama dengan nama direktori Presence tersebut. Sebagai contoh, jika Presence berada di `/websites/Y/YouTube/`, maka nama perkhidmatannya mestilah `YouTube`.
- Anda **tidak boleh** gunakan URL sebagai nama perkhidmatan melainkan laman sesawang itu sendiri menggunakan URL sebagai nama rasminya. Jika nama tidak deskriptif dan boleh dianggap kabur, penggunaan URL sebagai nama **diperlukan**. (sbg. cth., `YouTube` dibenarkan kerana ianya nama rasmi dan deskriptif, manakala `youtube.com` tidak dibenarkan. `Top` pula bukan nama yang deskriptif, jadi penggunaan URL `top.gg` adalah **diperlukan**.)
- If service has some explicit branding rules of their name, you should follow them.

### **`*altnames`**

- **Only** use this in scenerios where a website goes under multiple official names (e.g. Pokémon and 포켓몬스터). _Shortened_ versions of service names go under `tags`.

### **`keterangan`**

- **Semua** Presence **mesti** mempunyai keterangan bahasa Inggeris tanpa mengira bahasa keutamaan laman sesawang.
- **Jangan** cuba untuk terjemah keterangan dengan sendiri melainkan anda tahu bahasa tersebut, penterjemah akan ubah `metadata.json` anda dan ubah keterangan jika diperlukan.

### **`url`**

- URL **mestilah** dalam bentuk rentetan sekiranya laman sesawang hanya gunakan satu domain. Jika laman sesawang menggunakan beberapa domain, letakkan nilai sebagai tatasusunan dan nyatakan setiap satunya.
- **Jangan** sertakan protokol di dalam URL (sbg. cth., `http` atau `https`), dan jangan sertakan parameter pertanyaan (sbg. cth., `www.google.com/search?gws_rd=ssl` yang mana sepatutnya ditulis sebagai `www.google.com`)

### **`versi`**

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

### **`tag`**

- **Semua** Presence mesti mempunyai sekurang-kurangnya _sebuah_ tag.
- Tag **tidak** patut ada sebarang selang, tanda palang, tanda petik tunggal/ganda, aksara Unicode, dan mestilah berhuruf kecil.
- Tag **sepatutnya** menyertakan nama perkhidmatan alternatif untuk memudahkan carian (sbg. cth., jika Presence untuk Amazon menyertakan sokongan AWS, ia perlu ada tag seperti `amazon-web-services` dan `aws`)
- Anda **perlu** tambah tag `NSFW` sekiranya Presence tersebut adalah untuk laman sesawang dewasa (NSFW 18+).

### **`kategori`**

- The category **must** be one of the following listed on the [documentation](/dev/presence/metadata#presence-categories).
- Presence mestilah menggunakan kategori yang serasi dengan kandungan laman sesawang. (sbg. cth., jangan gunakan `anime` apabila laman sesawang tiada kaitan dengan anime).

### **`*regExp`** <br /> **`*iFrameRegExp`**

- Ungkapan nalar **mestilah** sah. Please test your expressions with the tools listed on the [documentation](/dev/presence/metadata#testing).

### **`readLogs`**

- Must be `boolean` value (e.g. `true` or `false`).
- Enables logs for your presence.

### **`warning`**

- Enables warning icon for prompting user that this presence needs more steps than only adding presence.
- Example of presence using this metadata variable is `VLC`.

### **`tetapan`**

- If you decide to make a format string (for e.g., `%song% by %artist%`), you must have the variables surrounded by a percent sign on either side. Variables like `%var`, `var%`, or `%%var%%` and anything in between are **not** permitted for the sake of standardization.
- The name of settings must **not** be in all capital letters. For example, names such as `SHOW BROWSING STATUS` will **not** be permitted; however, names such as `Show Browsing Status` or `Show browsing status` are permitted.
- If you are using multiLanguage option you should know:
  - **Bolean** type value will only enable strings from [`general.json`](https://github.com/PreMiD/Localization/blob/master/src/Presence/general.json) from Localization repo or from presence file (e.g. when presence name is YouTube, extension will get strings from `youtube.json` too.)
  - **String** type value (e.g. `youtube.json`) will specify name of file that you want get strings from.
  - **Array<String>** type value (e.g. `["youtube.json", "vlive.json"]`) will specify name of files that you want get strings from.

## [**presence.ts**](/dev/presence/class)

> Kod yang anda tulis **mesti** ditulis dengan _baik_ dan **mesti** boleh _dibaca_ dan kesemua rentetan mestilah betul tatabahasanya (kesalahan tatabahasa di laman sesawang boleh diabaikan).

> Setiap Presence perlu ikut set peraturan lin yang ketat yang akan diperiksa semasa proses semakan. Beberapa pengesyoran boleh dilihat di bawah. [TypeScript Plugin Recommendations for Strict Type Checking](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules). [ESlint Recommendations](https://eslint.org/docs/rules). [Prettier](https://prettier.io/).

Ini senarai peraturan yang perlu diikuti semasa menulis fail `presence.ts` anda:

- **Always** declare a new instance of the `Presence` class before any other variable to avoid rare issues that may occur; this is not a requirement by design so it could be removed in the future.
- **Never** use custom functions when [native variants are available](https://docs.premid.app/dev/presence#files-explained); this makes sure fixes on the extension level also apply to your presences. You're free to use whatever you need if you do not find them listed in the docs.
- It is **forbidden** to code presences for a site without adding support to its primary language (for e.g., a YouTube presence coded with support only for Portueguese and Japanese, but not English itself.)
- The `smallImageKey` and `smallImageText` fields are intended to provide additional/secondary context (such as `playing/paused` for video sites, `browsing` for regular sites, and other cases) not to promote Discord profiles or anything unrelated to PreMiD.
- You are **not** allowed to access `localStorage`.
- When accessing cookies for stored data, please prefix the key with `PMD_`.
- You many only make HTTP/HTTPS requests to `premid.app` or the presence website API. If you are using external domains, you will be required to explain why it is necessary. Only allowed API to make request is [`Fetch API`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).
- Do **not** set fields in the presence data object to undefined after it has been declared, use the `delete` keyword instead. (for e.g., use `delete data.startTimestamp` instead of `data.startTimestamp = undefined`)
- You are **not** allowed to write presences that change the functionality of a given website. This includes the addition, deletion, or modification of DOM elements.

## [**tsconfig.json**](/dev/presence/tsconfig)

> Do **not** write your own `tsconfig.json` file, use what has been provided on [documentation](/dev/presence/tsconfig).

## Modification

> Anda **mesti** ubah versi dalam **metadata** kepada nilai lebih tinggi daripada versi sebelumnya apabila membuat perubahan kepada fail **presence.ts**, **iframe.ts** atau **metadata.json**.

Dalam sesetengah keadaan, Presence mungkin berkelakuan luar jangkaan atau diubah secara kecil untuk meningkatkan kefungsian mereka. Ini senarai peraturan yang anda **mesti** ikuti ketika mengubahsuai Presence.

- You are **not** allowed to rewrite a presence or change its author. If the presence author was banned from the official server or hasn't made the required changes within a month, you may contact a reviewer to see if you can to rewrite the presence.
- If you make modifications to a presence and change at least a **quarter** of the presence's codebase, you are allowed to add yourself as a contributor. Contact a reviewer for more information about this subject.
- Anyone may provide hotfixes to fix bugs; however, try **not** to make changes that are **not** required. Valid modifications include general fixes (code and typos), additions (descriptions and tags), missing files, etc. Do **not** change images if they are not outdated and are in specifications.

# Verification

> **Semua** kod yang disumbangkan ke kedai akan dilesenkan di bawah `Mozilla Public License 2.0`.

> Jika anda perlu menghubungi seseorang, sila gunakan pelayan Discord rasmi kami. Kesemua pengulas akan mempunyai peranan `Reviewer` di profil mereka.

> Sila ingat bahawa pengulas membuat kerja secara sukarela dan menguruskan repositori lain di samping yang ini, permintaan tarikan anda mungkin tidak diulas sehingga berlalunya beberapa jam atau hari setelah ianya dicipta.

> **Sentiasa** pastikan cabangan anda mutakhir sebelum mencipta permintaan tarikan anda. Ini akan bantu mengehadkan positif palsu daripada semakan.

Proses paling penting dalam pembangunan Presence adalah untuk memasukkan Presence anda ke dalam kedai. Ini dilakukan dengan membuat [permintaan tarikan](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) di GitHub pada repositori `PreMiD/Presences`. Pengulas kami akan sahkan Presence anda mengikut piawaian dan akan memasukkannya ke dalam kedai.

<div>
  <h2 style="font-size: 2rem; margin-bottom: 0;">Presence Reviewers</h2>
  <a href="https://github.com/Bas950"><img src="https://github.com/Bas950.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/Timeraa"><img src="https://github.com/Timeraa.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/ririxidev"><img src="https://github.com/ririxidev.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <br />
</div>

## `Restrictions`

Kesalahan berulang seperti pelanggaran garis panduan, penspaman permintaan tarikan, ancaman, atau perlakuan tidak sesuai akan mengharamkan anda daripada mencipta Presence.

Dalam senario ini, perubahan berikut akan berlaku:

- Presences under your management will be transferred to the PreMiD bot or another user (reviewer decision). The application id for each presence will be recreated under the new owner's name.
- All of your issues and pull requests (presence creation, presence contribution, etc) created following the ban will be prompty closed.
- Tickets created under your name regarding presence development will be deleted.

## `Reviewing`

Beberapa perkara anda patut tahu sebelum membuka permintaan tarikan:

- It takes 2 reviewers to merge a pull request.
- If a pull request is inactive for a period of 7 days, it will be promptly closed.
- All checks **must** be passed in order to merge.
- ⚠️ You **must** provide new, unaltered screenshots (taken by you) showing a side-by-side comparison of your profile and the website to prove that your presence works. _You are allowed to stitch screenshots together for viewing pleasure_ This applies for both creation and modification.
- ⚠️ You are also **required** to include screenshots of the presence settings in the extension if supplied. An example can be seen [here](https://imgur.com/a/OD3sj5R).

## `Semakan`

![Semakan](https://i.imgur.com/oqAakOc.png)

Currently, a presence goes through 3 separate stages of checks. Kesemua semakan ini membantu pengulas untuk menentukan sama ada Presence anda sesuai untuk dikerahkan.

- `Codacy` is a bot that checks for code quality. If you ever receive errors for new issues, you are **required** to fix them. (_WARNING: Codacy bot will be deprecated soon and you will need check errors only from DeepScan!_)
- `DeepScan` is a bot that checks for code quality. If you ever receive errors for new issues, you are **required** to fix them.
- `Schema Validation` will scan your `metadata.json` file for any errors (for e.g., missing fields, invalid value types, etc.). If you ever see any new issues, you are also **required** to fix those. Adding a schema field to your `metadata.json` file will allow your text editor (if supported) to show you these errors during development.

## `Additional Rules`

- **Always** make sure to start your presence in the most appropriate folder, if its name starts with _any_ Latin letter then it must be under its alphabetical match (for e.g., `D/dアニメストア` or `G/Google`). Any other Unicode/non-Latin characters **must** be under the `#` folder (for e.g., `#/巴哈姆特`) and numbers under the `0-9` folder (for e.g., `0-9/4anime`).

Setelah mematuhi kesemua garis panduan dengan ulasan dan semakan yang wajar, Presence anda akan dicantumkan dengan kedai.

# Suggestions
If you have some suggestions about our guidelines, you should contact us @ [PreMiD's discord server](https://discord.premid.app) and we will check them!

# Sumbangan

`Revision 3` of the guidelines was written and was contributed to by the following individuals:

<div>
<a href="https://github.com/ririxidev"><img src="https://github.com/ririxidev.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
</div>

`Revision 2` of the guidelines was written and was contributed to by the following individuals:

<div>
<a href="https://github.com/Alanexei"><img src="https://github.com/Alanexei.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
</div>

`Revision 1` was maintained by the following individuals:

<div>
<a href="https://github.com/Alanexei"><img src="https://github.com/Alanexei.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
<a href="https://github.com/Bas950"><img src="https://github.com/Bas950.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
<a href="https://github.com/doomlerd"><img src="https://github.com/doomlerd.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
</div>