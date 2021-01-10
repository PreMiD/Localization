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

An example of that file can be found below.

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

## Fahamkan fail metadata.json

Contoh tersebut nampak agak pelik, kan? Jangan risau, ia tidaklah susah untuk faham apa tujuan setiap pemboleh ubah.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Variable</th>
      <th style="text-align:left">Description</th>
      <th style="text-align:left">Type</th>
      <th style="text-align:left">Pilihan</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>author</b></td>
      <td style="text-align:left">Should contain an Object with the <code>name</code> and <code>id</code> of the presence developer. Nama merujuk kepada nama Discord anda tanpa pengenal pasti (#0000). <code>Id</code> pengguna boleh disalin dari Discord dengan membolehkan
        mod pembangun dan mengklik-kanan profil anda.</td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>Tidak</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>contributors</b></td>
      <td style="text-align:left">Should contain an Object with the <code>name</code> and <code>id</code> of the contributor. Nama merujuk kepada nama Discord anda tanpa pengenal pasti (#0000). <code>Id</code> pengguna boleh disalin dari Discord dengan membolehkan
        mod pembangun dan mengklik-kanan profil anda.</td>
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
      <td style="text-align:left">Be able to search the presence using an alternative name.<br>
      Meant to be used for presences that have different names in different languages (e.g. Pokémon and 포켓몬스터).<br>
      You can also use it for presences that have special characters so you don't have to type those (e.g. Pokémon and Pokemon).</td>
      <td style="text-align:left"><code>Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Yes</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>keterangan</b></td>
      <td style="text-align:left">Description of the service <b>NOT</b> the presence. Keterangan anda mesti mempunyai nilai pasangan kekunci yang menyatakan bahasa terlibat, beserta keterangan dalam bahasa tersebut. Cipta keterangan dengan bahasa <i>yang anda tahu</i>, penterjemah kami akan buat perubahan ke fail metadata anda. Lihat kategori untuk bahasa Presence untuk senarai. </td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>Tidak</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b></td>
      <td style="text-align:left">URL of the service.<br>
      <b>Example:</b><code>vk.com</code><br>
      <b>This url must match the url of the website as it will be used to detect wherever or not this is the website to inject the script to. Ini hanya boleh digunakan sebagai tatasusunan apabila terdapatnya lebih dari satu URL.</b></td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b></td>
      <td style="text-align:left">Rentetan ungkapan nalar digunakan untuk padankan URL.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Yes</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>versi</b></td>
      <td style="text-align:left">Versi Presence anda.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>logo</b></td>
      <td style="text-align:left">Link to service&apos;s logotype.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b></td>
      <td style="text-align:left">Pautan ke lakaran kecil Presence anda.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>color</b></td>
      <td style="text-align:left"><code>#HEX</code> value. Kami menggalakkan anda menggunakan warna utama
        dari perkhidmatan yang Presence anda sokong.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>tag</b></td>
      <td style="text-align:left">Tatasusunan dengan tag, ianya akan bantu pengguna mencari Presence anda di laman sesawang.</td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>kategori</b></td>
      <td style="text-align:left">Rentetan digunakan untuk mewakili kategori yang mana Presence berada.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b></td>
      <td style="text-align:left">Defines whether <code>iFrames</code> are used</td>
      <td style="text-align:left"><code>Boolean</code></td>
      <td style="text-align:left"><code>Yes</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b></td>
      <td style="text-align:left">A regular expression selector that selects iframes to inject into.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Yes</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>readLogs</b></td>
      <td style="text-align:left">Defines whether the extension should be reading logs.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Yes</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>settings</b></td>
      <td style="text-align:left">Tatasusunan tetapan yang pengguna boleh ubah</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>Yes</code></td>
    </tr>
  </tbody>
</table>

## Ungkapan Nalar

Jika anda ingin belajar ungkapan nalar, di sini ada beberapa laman sesawang.

#### Belajar

• [Quick Starter Video](https://youtu.be/sXQxhojSdZM) • [RegexOne](https://regexone.com/) • [Regular Expressions Info](https://www.regular-expressions.info/tutorial.html)

#### Menguji

• [Regexr](https://regexr.com/) • [Regex101](https://regex101.com/)

## Bahasa Presence

PreMiD ialah perkhidmatan pelbagai bahasa, maksudnya terdapat banyak bahasa terlibat untuk berhubung dengan pengguna di seluruh dunia. Senarai penuh bahasa boleh dijumpai di [titik akhir API](https://api.premid.app/v2/langFile/list) ini. To customize your presence even more you can allow users to select their presence display language see [`multiLanguage`](#multilanguage) for more.

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

#### Introduction

The `multiLanguage` setting is used to allow users to manually select the language they want to presence to be shown in. This requires you to use strings from our [API](https://api.premid.app/v2/langFile/presence/en), for information on how to add strings click [here](/dev/presence/metadata/adding-new-strings).

#### Setup

The `multiLanguage` setting is a special case, it doesn't require a `title` nor `icon` nor `value` or `values` like other settings but it does require you some more things to setup!

The `multiLanguage` key can be set to the following:

`true`: use this if you are only going to use strings of the `general.json` file and the `<service>.json` file of the [Localization Repository](https://github.com/PreMiD/Localization/tree/master/src/Presence). `string`: name of the file excluding the extension (.json) inside the [Localization Repository](https://github.com/PreMiD/Localization/tree/master/src/Presence) (excluding the `general` file, since it's always loaded). Only common languages of both the `general` and inputted file will be listed. `Array<String>`: if you are using more than one file inside the [Localization Repository](https://github.com/PreMiD/Localization/tree/master/src/Presence) you can specify all the values in an array (excluding the `general` file, since it's always loaded). Only common languages of all the files will be listed.

#### Adding new strings

##### Cloning the project

1. Buka terminal dan taip `git clone https://github.com/PreMiD/Localization`.
2. Choose a folder of your choice.
3. Open it in your code editor.

##### Creating the file

1. Go into the `src` folder.
2. Go into the `Presence` folder.
3. Make a file named `<service>.json`. (Service is the **name** (not an URL) in lowercase of the service you want to support.)

##### Adding the strings

Each `string` is an `Object` where from the name starts with the service name and then the so called stringName with a dot in between them.

The stringName is a 1 word identifier of the message.

The `Object` has 2 properties; `message` and `description`. `message` is the text that needs to be translated. `description` is a description of the message to help our translators understand what they are translating.

**Note:** Do not add any duplicate strings. (This includes strings out of the `general.json` file but not the other files.)

Visualization of the the file:

```typescript
{
  "<service>.<stringName>": {
    "message": "Text that needs to be translated.",
    "description": "This explains what the message above is."
  },
  "<service>.<stringName>": {
    "message": "Text that needs to be translated.",
    "description": "This explains what the message above is."
  }
}
```

After you have fully made the file with strings you can create a Pull Request on the [Localization Repository](https://github.com/PreMiD/Localization), in the description you **must** include a link to your Pull Request of the presence updated using these new strings from the [Presence Repository](https://github.com/PreMiD/Presences).

#### Default keys
The keys you didn't have to set are automatically set to the following: `title`: "Language" **Note:** This is translated into their default language (browser language). `icon`: "fas fa-language" ([Preview](https://fontawesome.com/icons/language)) `value`: **Set to their browser language if it is available (100% translated), otherwise English.** `values`: **Set to the available languages (languages that have it 100% translated).**

**Note:** These are in no way changeable.

### Methods

Gunakan kaedah berikut untuk mendapatkan maklumat tetapan dalam fail Presence anda:
#### `getSetting(String)`
Mengembalikan nilai tetapan.
```typescript
const setting = await presence.getSetting("pdexID"); //Replace pdexID with the id of the setting
console.log(setting); // This will log the value of the setting
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
      <th style="text-align:left">Description</th>
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
      <td style="text-align:left"><b>Games</b></td>
      <td style="text-align:left">Sebarang laman web yang mempunyai kandungan berkaitan permainan, contohnya <code>Kahoot</code> atau <code>Skribbl.io</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>music</b></td>
      <td style="text-align:left"><b>Music</b></td>
      <td style="text-align:left">Ini laman sesawang yang menawarkan kandungan berkaitan muzik, sama ada melalui penstriman atau muat turun.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>socials</b></td>
        <td style="text-align:left"><b>Socials</b></td>
      <td style="text-align:left">Laman sesawang yang digunakan untuk tujuan penciptaan dan perkongsian kandungan atau untuk disertai dalam bentuk rangkaian sosial yang lain.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>videos</b></td>
        <td style="text-align:left"><b>Videos & Streams</b></td>
      <td style="text-align:left">Laman web yang bertujuan untuk menyediakan video dan strim.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>other</b></td>
      <td style="text-align:left"><b>Other</b></td>
      <td style="text-align:left">Apa-apa yang tidak berada di bawah mana-mana kategori khusus di atas.</td>
    </tr>
  </tbody>
</table>

