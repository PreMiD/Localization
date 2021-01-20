---
title: Metadata.json
description: Mengandungi data asas mengenai Presence
published: true
date: 2020-12-26T15:03:41.542Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:52.965Z
---

# Metadata.json

Jika anda ingin menerbitkan Presence ke kedai dan muatkannya melalui sambungan, anda patut cipta fail `metadata.json` dalam folder `dist` anda.

Contoh fail tersebut boleh dilihat di bawah.

```typescript
{
  "author": {
    "name": "PENGGUNA",
    "id": "ID"
  },
  "contributors": [{
    "name": "PENGGUNA",
    "id": "ID"
  }],
  "service": "PERKHIDMATAN",
  "altnames": ["PERKHIDMATAN"],
  "description": {
    "en": "KETERANGAN"
  },
  "url": "URL",
  "regExp": "UNGKAPAN NALAR",
  "iFrameRegExp": "UNGKAPAN NALAR",
  "version": "VERSI",
  "logo": "URL",
  "thumbnail": "URL",
  "color": "#45A8FC",
  "tags": ["TAG1", "TAG2"],
  "category": "KATEGORI",
  "iframe": false,
  "settings": [
    {
      "id": "ID",
      "title": "TAJUK PAPARAN",
      "icon": "IKON FONTAWESOME",
      "value": true
    },
    {
      "id": "ID",
      "if": {
        "ID": true
      },
      "title": "TAJUK PAPARAN",
      "icon": "IKON FONTAWESOME",
      "value": "\"%song%\" by %artist%",
      "placeholder": "use %song% or %artist%"
    },
    {
      "id": "ID",
      "title": "TAJUK PAPARAN",
      "icon": "IKON FONTAWESOME",
      "value": 0,
      "values": ["1", "2", "dll."]
    }
  ]
}
```

## Fahamkan fail metadata.json

Contoh tersebut nampak agak pelik, kan? Jangan risau, ia tidaklah susah untuk faham apa tujuan setiap pemboleh ubah.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Pemboleh ubah</th>
      <th style="text-align:left">Keterangan</th>
      <th style="text-align:left">Jenis</th>
      <th style="text-align:left">Pilihan</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>author</b></td>
      <td style="text-align:left">Harus mengandungi objek Object dengan nilai nama <code>name</code> dan ID <code>id</code> milik pembangun Presence. Nama merujuk kepada nama Discord anda tanpa pengenal pasti (#0000). Nombor <code>id</code> pengguna boleh disalin dari Discord dengan
        membolehkan mod pembangun dan mengklik-kanan profil anda.</td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>Tidak</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>contributors</b></td>
      <td style="text-align:left">Harus mengandungi objek Object dengan nilai nama <code>name</code> dan ID <code>id</code> milik penyumbang. Nama merujuk kepada nama Discord anda tanpa pengenal pasti (#0000). Nombor <code>id</code> pengguna boleh disalin dari Discord dengan
        membolehkan mod pembangun dan mengklik-kanan profil anda.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>Ya</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>service</b></td>
      <td style="text-align:left">Tajuk perkhidmatan yang Presence ini sokong.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Tidak</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>altnames</b></td>
      <td style="text-align:left">Membolehkan carian Presence menggunakan nama alternatif.<br>
      Untuk digunakan dalam Presence yang mempunyai nama berlainan dalam bahasa yang berlainan (spt. Pokémon dan 포켓몬스터).<br>
      Anda juga boleh gunakannya untuk Presence yang mempunyai aksara istimewa supaya anda tidak perlu menaip aksara tersebut (spt. Pokémon dan Pokemon).</td>
      <td style="text-align:left"><code>Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Ya</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>keterangan</b></td>
      <td style="text-align:left">Keterangan untuk perkhidmatan <b>BUKAN</b> untuk Presence. Keterangan anda mesti mempunyai nilai pasangan kekunci yang menyatakan bahasa terlibat, berserta keterangan dalam bahasa tersebut. Cipta keterangan dengan bahasa <i>yang anda tahu</i>, penterjemah kami akan buat perubahan ke fail metadata anda. Lihat kategori bagi bahasa Presence untuk senarai. </td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>Tidak</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b></td>
      <td style="text-align:left">URL perkhidmatan.<br>
        <b>Contoh:</b><code>vk.com</code><br>
        <b>URL ini mesti padan dengan URL laman sesawang kerana ia akan digunakan untuk mengesan sama ada ianya laman sesawang untuk suntikkan skrip atau bukan. Ini hanya boleh digunakan sebagai tatasusunan apabila terdapatnya lebih dari satu URL.</b></td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Tidak</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b></td>
      <td style="text-align:left">Rentetan ungkapan nalar digunakan untuk padankan URL.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Ya</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>versi</b></td>
      <td style="text-align:left">Versi Presence anda.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Tidak</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>logo</b></td>
      <td style="text-align:left">Pautan ke jenis logo perkhidmatan.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Tidak</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b></td>
      <td style="text-align:left">Pautan ke lakaran kecil Presence anda.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Tidak</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>color</b></td>
      <td style="text-align:left">Nilai perenambelasan <code>#HEX</code>. Kami menggalakkan anda menggunakan warna utama
        dari perkhidmatan yang Presence anda sokong.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Tidak</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>tag</b></td>
      <td style="text-align:left">Tatasusunan dengan tag, ianya akan bantu pengguna mencari Presence anda di laman sesawang.</td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Tidak</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>kategori</b></td>
      <td style="text-align:left">Rentetan digunakan untuk mewakili kategori yang mana Presence berada.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Tidak</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b></td>
      <td style="text-align:left">Menentukan sama ada <code>iFrames</code> akan digunakan</td>
      <td style="text-align:left"><code>Boolean</code></td>
      <td style="text-align:left"><code>Ya</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b></td>
      <td style="text-align:left">Pemilih berungkapan nalar yang memilih iFrame untuk disuntikkan.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Ya</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>readLogs</b></td>
      <td style="text-align:left">Menentukan sama ada sambungan patut baca log.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Ya</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>settings</b></td>
      <td style="text-align:left">Tatasusunan tetapan yang pengguna boleh ubah</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>Ya</code></td>
    </tr>
  </tbody>
</table>

## Ungkapan Nalar

Jika anda ingin belajar ungkapan nalar, di sini ada beberapa laman sesawang.

#### Belajar

• [Video Permulaan Pantas (Bahasa Inggeris)](https://youtu.be/sXQxhojSdZM) • [RegexOne (Bahasa Inggeris)](https://regexone.com/) • [Maklumat Ungkapan Nalar (Bahasa Inggeris)](https://www.regular-expressions.info/tutorial.html)

#### Menguji

• [Regexr](https://regexr.com/) • [Regex101](https://regex101.com/)

## Bahasa Presence

PreMiD ialah perkhidmatan pelbagai bahasa, maksudnya terdapat banyak bahasa terlibat untuk berhubung dengan pengguna di seluruh dunia. Senarai penuh bahasa boleh dijumpai di [titik akhir API](https://api.premid.app/v2/langFile/list) ini. Untuk menyesuaikan Presence anda dengan lebih lanjut, anda boleh benarkan pengguna untuk memilih bahasa paparan Presence mereka, lihat [`multiLanguage`](#multilanguage) untuk maklumat lanjut.

## Tetapan Presence
Tetapkan tetapan saling tindak supaya pengguna boleh mengubah suai Presence tersebut!
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

#### Pengenalan

Tetapan `multiLanguage` digunakan untuk membolehkan pengguna memilih bahasa yang mereka ingin gunakan bagi Presence tersebut secara manual. Ini memerlukan anda menggunakan rentetan dari [API](https://api.premid.app/v2/langFile/presence/en) kami, untuk maklumat mengenai cara menambah rentetan sila klik [sini](/dev/presence/metadata/adding-new-strings).

#### Persediaan

Tetapan `multiLanguage` ini sedikit istimewa, ia tidak memerlukan nilai-nilai `title` atau `icon` atau `value` atau `values` seperti tetapan lain tetapi ia perlukan anda membuat lebih banyak tetapan lain!

Kekunci `multiLanguage` boleh ditetapkan seperti berikut:

`true`: guna ini jika anda hanya akan gunakan rentetan dari fail `general.json` dan fail `<service>.json` dalam [Repositori Penyetempatan](https://github.com/PreMiD/Localization/tree/master/src/Presence). `string`: nama fail tidak termasuk sambungan (.json) di dalam [Repositori Penyetempatan](https://github.com/PreMiD/Localization/tree/master/src/Presence) (mengecualikan fail `general`, kerana ia akan sentiasa dimuatkan). Hanya bahasa umum bagi kedua-dua fail `general` dan fail yang dinyatakan akan disenaraikan. `Array<String>`: jika anda gunakan lebih dari satu fail dalam [Repositori Penyetempatan](https://github.com/PreMiD/Localization/tree/master/src/Presence) anda boleh nyatakan kesemua nilai dalam sebuah tatasusunan (mengecualikan fail `general`, kerana ia akan sentiasa dimuatkan). Hanya bahasa umum bagi kesemua fail akan disenaraikan.

#### Menambah rentetan baharu

##### Klon projek

1. Buka terminal dan taip `git clone https://github.com/PreMiD/Localization`.
2. Pilih folder yang anda suka.
3. Buka folder tersebut dalam penyunting kod anda.

##### Cipta fail

1. Pergi ke folder `src`.
2. Pergi ke folder `Presence`.
3. Cipta fail bernama `<service>.json`. (Service di sini merujuk kepada **nama** (bukan URL) bagi perkhidmatan yang anda ingin sokong, ditulis dalam huruf kecil.)

##### Menambah rentetan

Setiap rentetan `string` ialah sebuah objek `Object` di mana namanya dimulakan dengan nama perkhidmatan dan kemudiannya stringName dengan titik di antara mereka.

Nilai stringName ialah 1 perkataan pengenal pasti bagi sesuatu mesej.

Objek `Object` mempunyai 2 sifat; mesej `message` dan keterangan `description`. `message` ialah tulisan yang perlu diterjemahkan. `description` ialah keterangan mesej untuk membantu penterjemah kami fahamkan apa yang mereka sedang terjemahkan.

**Nota:** Jangan tambah rentetan terduplikasi. (Ini termasuk rentetan yang ada dalam fail `general.json` tetapi tidak di fail lain.)

Penggambaran fail:

```typescript
{
  "<service>.<stringName>": {
    "message": "Tulisan yang perlu diterjemahkan.",
    "description": "Ini menjelaskan apa latar bagi mesej di atas."
  },
  "<service>.<stringName>": {
    "message": "Tulisan yang perlu diterjemahkan.",
    "description": "Ini menjelaskan apa latar bagi mesej di atas."
  }
}
```

Setelah anda mencipta sepenuhnya fail dengan rentetan tersebut, anda boleh cipta Permintaan Tarikan di [Repositori Penyetempatan](https://github.com/PreMiD/Localization), dalam keterangan tersebut anda **mesti** sertakan pautan ke Permintaan Tarikan bagi Presence yang dikemaskini menggunakan rentetan-rentetan baharu ini dari [Repositori Presence](https://github.com/PreMiD/Presences).

#### Kekunci lalai
Kekunci yang anda tidak perlu tetapkan akan ditetapkan secara automatik menjadi: `title`: "Language" **Nota:** Ini diterjemah ke bahasa lalai pengguna (bahasa yang ditetapkan di pelayar). `icon`: "fas fa-language" ([Pralihat](https://fontawesome.com/icons/language)) `value`: **Tetapkan ke bahasa pelayar pengguna jika ianya tersedia (100% diterjemah), jika tidak ianya ditetapkan ke bahasa Inggeris.** `values`: **Tetapkan ke bahasa-bahasa yang tersedia (bahasa-bahasa yang telah pun 100% diterjemah).**

**Nota:** Ini semua tidak akan dapat diubah dalam apa jua cara.

### Kaedah

Gunakan kaedah berikut untuk mendapatkan maklumat tetapan dalam fail Presence anda:
#### `getSetting(String)`
Mengembalikan nilai tetapan.
```typescript
const setting = await presence.getSetting("pdexID"); //Gantikan pdexID dengan ID tetapan
console.log(setting); // Ini akan log nilai tetapan
```

#### `hideSetting(String)`
Menyembunyikan tetapan yang diberikan.
```typescript
presence.hideSetting("pdexID"); //Gantikan pdexID dengan ID tetapan
```

#### `showSetting(String)`
Tunjukkan tetapan yang diberi (Hanya berfungsi jika tetapan disembunyikan).
```typescript
presence.showSetting("pdexID"); //Gantikan pdexID dengan ID tetapan
```

## Kategori Presence

Apabila mencipta Presence anda, anda mesti tetapkan kategori yang mana Presence tersebut berada. Ini senarai semua kategori yang anda boleh guna.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Kategori</th>
      <th style="text-align:left">Nama</th>
      <th style="text-align:left">Keterangan</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>anime</b></td>
      <td style="text-align:left"><b>Anime</b></td>
      <td style="text-align:left">Apa-apa yang berkaitan dengan anime, dari forum ke platform penstriman video.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>games</b></td>
      <td style="text-align:left"><b>Permainan</b></td>
      <td style="text-align:left">Sebarang laman sesawang yang mempunyai kandungan berkaitan permainan, contohnya <code>Kahoot</code> atau <code>Skribbl.io</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>music</b></td>
      <td style="text-align:left"><b>Muzik</b></td>
      <td style="text-align:left">Ini laman sesawang yang menawarkan kandungan berkaitan muzik, sama ada melalui penstriman atau muat turun.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>socials</b></td>
        <td style="text-align:left"><b>Sosial</b></td>
      <td style="text-align:left">Laman sesawang yang digunakan untuk tujuan penciptaan dan perkongsian kandungan atau untuk disertai dalam bentuk rangkaian sosial yang lain.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>videos</b></td>
        <td style="text-align:left"><b>Video & Strim</b></td>
      <td style="text-align:left">Laman sesawang yang bertujuan untuk menyediakan video dan strim.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>other</b></td>
      <td style="text-align:left"><b>Lain-lain</b></td>
      <td style="text-align:left">Apa-apa yang tidak berada di bawah mana-mana kategori khusus di atas.</td>
    </tr>
  </tbody>
</table>

