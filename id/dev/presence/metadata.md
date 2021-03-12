---
title: Metadata.json
description: Berisi data dasar tentang presence
published: true
date: 2021-02-07T17:12:06.799Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:52.965Z
---

# Metadata.json

Jika anda ingin menerbitkan presence ke toko dan memuatnya lewat ektensi, anda harus membuat file `metadata.json` pada folder `dist` anda.

Contoh file tersebut dapat ditemukan di bawah.

```typescript
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
  "altnames": ["SERVICE"],
  "description": {
    "en": "DESCRIPTION"
  },
  "url": "URL",
  "regExp": "REGEXP",
  "iFrameRegExp": "REGEXP",
  "version": "VERSION",
  "logo": "URL",
  "thumbnail": "URL",
  "color": "#45A8FC",
  "tags": ["TAG1", "TAG2"],
  "category": "CATEGORY",
  "iframe": false,
  "settings": [
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

## Memahami metadata.json

Contohnya aneh bukan? Jangan khawatir, memahami fungsi setiap variable itu tidak terlalu sulit.

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
      <td style="text-align:left">Harus berisi sebuah Object dengan <code>name</code> dan <code>id</code> dari pengembang presence. <code>name</code> adalah username Discordmu tanpa identifier(#0000). <code>id</code> pengguna dapat disalin dari Discord dengan mengaktifkan developer
        mode dan klik kanan pada profil anda.</td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>contributors</b></td>
      <td style="text-align:left">Harus berisi object dengan <code>nama</code> dan <code>id</code> dari kontributor. <code>name</code> adalah username Discordmu tanpa identifier(#0000). <code>id</code> pengguna dapat disalin dari Discord dengan mengaktifkan developer
        mode dan klik kanan pada profil anda.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>Yes</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>service</b></td>
      <td style="text-align:left">Judul dari layanan yang didukung oleh presence tersebut.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>altnames</b></td>
      <td style="text-align:left">Dapat mencari presence menggunakan nama lain.<br>
      Dimaksudkan untuk presence yang memiliki nama yang berbeda di bahasa yang berbeda (e.g. Pokémon and 포켓몬스터).<br>
      Kamu juga dapat menggunakan ini untuk presence yang memiliki karakter spesial yang kamu tidak bisa ketik (e.g. Pokémon and Pokemon).</td>
      <td style="text-align:left"><code>Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Yes</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>deskripsi</b></td>
      <td style="text-align:left">Deskripsi dari layanan tersebut <b>BUKAN</b> presencenya. Deskripsi harus memiliki value yang berpasangan yang menandakan bahasa, dan deskripsi dengan bahasa tertentu. Buat deskripsi dengan bahasa yang <i>anda mengerti</i>, translator kami yang akan mengubah file metadata anda. Lihat kategori untuk bahasa presence untuk daftarnya. </td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b></td>
      <td style="text-align:left">URL layanan.<br>
      <b>Contoh:</b><code>vk.com.com</code><br>
      <b>URL ini harus sama dengan URL dari website karena akan digunakan untuk mendeteksi apakah ini website yang benar untuk inject script. Ini bisa digunakan sebagai kesatuan ketika ada lebih dari satu url.</b></td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b></td>
      <td style="text-align:left">Regular expression string yang digunakan untuk mencocokkan url.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Yes</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>versi</b></td>
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
      <td style="text-align:left"><b>tags</b></td>
      <td style="text-align:left">Himpunan dengan tag, ini akan membantu pengguna untuk mencari presence anda pada website.</td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>category</b></td>
      <td style="text-align:left">String yang digunakan untuk mewakili kategori yang dimilki presence.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b></td>
      <td style="text-align:left">Menentukan apakah <code>iFrames</code> digunakan</td>
      <td style="text-align:left"><code>Boolean</code></td>
      <td style="text-align:left"><code>Yes</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b></td>
      <td style="text-align:left">Penentu regular expression yang memilih iframe yang di inject.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Yes</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>readLogs</b></td>
      <td style="text-align:left">Menentukan apakah ekstensi harus membaca catatan.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Yes</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>settings</b></td>
      <td style="text-align:left">Kumpulan pengaturan yang bisa dirubah pengguna</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>Yes</code></td>
    </tr>
  </tbody>
</table>

## Regular Expressions

Jika anda ingin mempelajari regular expression, berikut beberapa website.

#### Mempelajari

• [Quick Starter Video](https://youtu.be/sXQxhojSdZM) • [RegexOne](https://regexone.com/) • [Regular Expressions Info](https://www.regular-expressions.info/tutorial.html)

#### Testing

• [Regexr](https://regexr.com/) • [Regex101](https://regex101.com/)

## Bahasa Presence

PreMiD merupakan layanan polygot, artinya terdapat banyak bahasa yang terlibat untuk menghubungkan pengguna diseluruh dunia. Daftar penuh bahasa dapat dilihat dengan [API endpoint](https://api.premid.app/v2/langFile/list). Untuk lebih meng-customize presence anda, anda dapat mengizinkan user untuk memilih tampilan bahasa presence mereka, lihat [`multiLanguage`](#multilanguage) untuk selengkapnya.

## Pengaturan presence
Buat pengaturan interaktif agar pengguna dapat mengatur presencenya!
```typescript
"settings": [
  {
    "id": "ID",
    "multiLanguage": true //See https://docs.premid.app/dev/presence/metadata#multilanguage
  },
  {
    "id": "ID",
    "title": "DISPLAY TITLE",
    "icon": "FONTAWESOME ICON", //Example "fas fa-info"
    "value": true //Boolean value will make it an on/off switch with the value as the default value
  },
  {
    "id": "ID",
    "if": {
      "ID": true //If another setting equals this value (true/false/0/1/etc.) then show this button
    },
    "title": "DISPLAY TITLE",
    "icon": "FONTAWESOME ICON",
    "value": "\"%song%\" by %artist%", //Putting in a string will make the setting an input one, where you can use a custom input.
    "placeholder": "use %song% or %artist%" //When input is empty it will show this grayed out
  },
  {
    "id": "ID",
    "title": "DISPLAY TITLE",
    "icon": "FONTAWESOME ICON",
    "value": 0, //Default value of the selector
    "values": ["1", "2", "etc."] //Will make the setting a selector where you select which one you want
  }
]
```

### `multiLanguage`

#### Pendahuluan

Pengaturan `multiLanguage` dapat digunakan untuk mengizinkan user memilih bahasa yang mereka mau di presence untuk ditampilkan. Ini mengharuskan anda untuk menggunakan string dari [API](https://api.premid.app/v2/langFile/presence/en) kami, untuk informasi bagaimana cara menambahkan string klik [disini](/dev/presence/metadata/adding-new-strings).

#### Konfigurasi

Pengaturan `multiLanguage` adalah kasus yang spesial, tidak dibutuhkan `title` atau `icon` atau `value` ataupun `values` seperti pengaturan lainnya tapi membutuhkan beberapa konfigurasi!

Key `multiLanguage` bisa di ubah menjadi:

`true`: gunakan ini jika anda hanya ingin menggunakan string dari file `general.json` dan file `<service>.json` dari [Localization Repository](https://github.com/PreMiD/Localization/tree/master/src/Presence). `string`: nama dari file kecuali ekstensi (.json) di dalam [Localization Repository](https://github.com/PreMiD/Localization/tree/master/src/Presence) (kecuali file `general`, karena selalu dimuat). Hanya bahasa umum dari file `general` dan yang dimasukkan akan dicantumkan. `Array<String>`: jika anda menggunakan lebih dari satu file di dalam [Localization Repository](https://github.com/PreMiD/Localization/tree/master/src/Presence) anda bisa menentukan semua value dalam sebuah array (kecuali file `general`, karena selalu dimuat). Hanya bahasa umum dari semua file yang akan dicantumkan.

#### Menambahkan string baru

##### Mengkloning project

1. Buka terminal dan ketik `git clone https://github.com/PreMiD/Localization`.
2. Pilih folder pilihanmu.
3. Buka di editor kodemu.

##### Membuat file

1. Pergi ke folder `src`.
2. Pergi ke folder `Presence`.
3. Buat file bernama `<service>.json`. (Service adalah **nama** (bukan URL) dalam huruf kecil dari service yang ingin anda dukung.)

##### Menambahkan string

Setiap `string` adalah `Object` dimana dari namanya dimulai dengan nama service kemudian yang disebut stringName dengan titik diantaranya.

stringName adalah identifier 1 kata dari pesan.

`Object` memiliki 2 properti; `message` dan `description`. `message` adalah teks yang perlu diterjemahkan. `description` adalah deskripsi dari `message` untuk membantu penerjemah kami memahami apa yang mereka terjemahkan.

**Catatan:** Jangan menambahkan string ganda. (Ini mencakupi string diluar file `general.json` tapi tidak file lainnya.)

Visualisasi dari file:

```typescript
{
  "<service>.<stringName>": {
    "message": "Teks yang perlu diterjebahkan.",
    "description": "Ini menjelaskan apa message diatas itu."
  },
  "<service>.<stringName>": {
    "message": "Teks yang perlu diterjebahkan.",
    "description": "Ini menjelaskan apa message diatas itu."
  }
}
```

Setelah anda berhasil membuat file dengan string anda bisa membuat Pull Request ke [Localization Repository](https://github.com/PreMiD/Localization), di deskripsi anda **harus** mencantumkan tautan (link) ke Pull Request dari presence yang diperbarui menggunakan string baru dari [Presence Repository](https://github.com/PreMiD/Presences).

#### Key default
Key yang tidak perlu kamu atur karena sudah otomatis adalah: `title`: "Language" **Catatan:** Ini diterjemahkan ke bahasa default mereka (bahasa dari browser). `icon`: ""fas fa-language" ([Pratinjau](https://fontawesome.com/icons/language)) `value`: **Mengatur ke bahasa dari browser mereka jika tersedia (100% translated), atau bahasa Inggris.** `values`: **Mengatur ke bahasa yang tersedia (bahasa yang sudah 100% diterjemahkan).**

**Catatan:** Ini sama sekali tidak bisa diubah.

### Metode

Gunakan metode berikut untuk mendapat info pengaturan pada file presence:
#### `getSetting(String)`
Mengembalikan value dari pengaturan.
```typescript
const setting = await presence.getSetting("pdexID"); //Ubah pdexID dengan id dari setting
console.log(setting); // Ini akan mencatat isi dari setting
```

#### `hideSetting(String)`
Sembunyikan pengaturan yang diberikan.
```typescript
presence.hideSetting("pdexID"); //Mengganti pdexID dengan id dari pengaturan
```

#### `showSetting(String)`
Menampilkan setting yang diberikan (Hanya bekerja jika pengaturan telah disembunyikan).
```typescript
presence.showSetting("pdexID"); //Mengganti pdexID dengan id dari pengaturan
```

## Kategori presence

Saat membuat presence, anda harus menentukan kategori dimana presence berada. Berikut adalah daftar dari kategori yang bisa digunakan.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Kategori</th>
      <th style="text-align:left">Nama</th>
      <th style="text-align:left">Deskripsi</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>anime</b></td>
      <td style="text-align:left"><b>Anime</b></td>
      <td style="text-align:left">Apapun yang berhubungan dengan anime, dari forum hingga platform streaming video.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>games</b></td>
      <td style="text-align:left"><b>Permainan</b></td>
      <td style="text-align:left">Website apapun yang memiliki konten tentang game, seperti <code>Kahoot</code> atau <code>Skribbl.io</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>music</b></td>
      <td style="text-align:left"><b>Musik</b></td>
      <td style="text-align:left">Website ini menawarkan konten yang berhubungan dengan musik, streaming atau download.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>socials</b></td>
        <td style="text-align:left"><b>Sosial</b></td>
      <td style="text-align:left">Website yang dibuat untuk membuat dan membagikan konten atau berpartisipasi dalam social network dalam bentuk apapun.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>videos</b></td>
        <td style="text-align:left"><b>Video dan Stream</b></td>
      <td style="text-align:left">Website yang berguna untuk menyediakan video dan stream.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>other</b></td>
      <td style="text-align:left"><b>Lainnya</b></td>
      <td style="text-align:left">Apapun yang tidak termasuk kategori diatas.</td>
    </tr>
  </tbody>
</table>

