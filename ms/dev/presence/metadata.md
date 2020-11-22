---
title: Metadata.json
description: Mengandungi data asas mengenai Presence
published: true
date: 2020-05-21T16:01:05.836Z
tags:
---

# Metadata.json

Jika anda ingin menerbitkan Presence ke kedai dan muatkannya melalui sambungan, anda patut cipta fail `metadata.json` dalam folder `dist` anda.

Contoh fail tersebut boleh dijumpai di bawah.

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
      <td style="text-align:left"><b>author</b>
      </td>
      <td style="text-align:left">Harus mengandungi objek dengan nilai nama <code>name</code> dan id <code>id</code> milik pembangun Presence. Nama merujuk kepada nama Discord anda tanpa pengenal pasti (#0000). <code>Id</code> pengguna boleh disalin dari Discord dengan membolehkan
        mod pembangun dan mengklik-kanan profil anda.</td>
      <td style="text-align:left"><code>Object</code>
      </td>
      <td style="text-align:left"><code>Tidak</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>contributors</b>
      </td>
      <td style="text-align:left">Harus mengandungi objek dengan nilai nama <code>name</code> dan id <code>id</code> milik penyumbang. Nama merujuk kepada nama Discord anda tanpa pengenal pasti (#0000). <code>Id</code> pengguna boleh disalin dari Discord dengan membolehkan
        mod pembangun dan mengklik-kanan profil anda.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>Ya</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>service</b>
      </td>
      <td style="text-align:left">Tajuk perkhidmatan yang Presence ini sokong.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Tidak</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>altnames</b>
      </td>
      <td style="text-align:left">Untuk membolehkan pencarian Presence menggunakan nama alternatif. <br>Untuk digunakan dalam Presence yang mempunyai nama berlainan dalam bahasa yang berlainan (spt. Pokémon dan 포켓몬스터).<br>Anda juga boleh gunakannya untuk Presence yang mempunyai aksara istimewa supaya anda tidak perlu menaip aksara tersebut (spt. Pokémon dan Pokemon).
      </td>
      <td style="text-align:left"><code>Array&lt;String&gt;</code>
      </td>
      <td style="text-align:left"><code>Ya</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>description</b>
      </td>
      <td style="text-align:left">Keterangan kecil mengenai Presence, anda boleh gunakan keterangan
        perkhidmatan sekiranya anda tidak tahu apa untuk ditulis. Keterangan anda mesti mempunyai nilai pasangan kekunci yang menyatakan bahasa terlibat, beserta keterangan dalam bahasa tersebut. Cipta keterangan dengan bahasa <i>yang anda tahu</i>, penterjemah kami akan buat perubahan ke fail metadata anda. Lihat kategori untuk bahasa Presence untuk senarai. </td>
      <td style="text-align:left"><code>Object</code>
      </td>
      <td style="text-align:left"><code>Tidak</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b>
      </td>
      <td style="text-align:left">URL perkhidmatan.<br><b>Contoh:</b><code>vk.com</code><br>
        <b>URL ini mesti padan dengan URL laman sesawang kerana ia akan digunakan untuk mengesan sama ada ianya laman sesawang untuk suntikkan skrip atau bukan. Ini hanya boleh digunakan sebagai tatasusunan apabila terdapatnya lebih dari satu URL.</b>
      </td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code>
      </td>
      <td style="text-align:left"><code>Tidak</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b>
      </td>
      <td style="text-align:left">Rentetan ungkapan nalar digunakan untuk padankan URL.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Ya</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>version</b>
      </td>
      <td style="text-align:left">Versi Presence anda.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Tidak</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>logo</b>
      </td>
      <td style="text-align:left">Link to service&apos;s logotype.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Tidak</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b>
      </td>
      <td style="text-align:left">Pautan ke lakaran kecil Presence anda.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Tidak</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>color</b>
      </td>
      <td style="text-align:left"><code>#HEX</code> value. Kami menggalakkan anda menggunakan warna utama
        dari perkhidmatan yang Presence anda sokong.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Tidak</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>tags</b>
      </td>
      <td style="text-align:left">Tatasusunan dengan tag, ianya akan bantu pengguna mencari Presence anda di laman sesawang.</td>
      <td
      style="text-align:left"><code>String, Array&lt;String&gt;</code>
        </td>
      <td style="text-align:left"><code>Tidak</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>category</b>
      </td>
      <td style="text-align:left">Rentetan digunakan untuk mewakili kategori yang mana Presence berada.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Tidak</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b>
      </td>
      <td style="text-align:left">Defines whether <code>iFrames</code> are used</td>
      <td style="text-align:left"><code>Boolean</code>
      </td>
      <td style="text-align:left"><code>Ya</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b>
      </td>
      <td style="text-align:left">A regular expression selector that selects iframes to inject into.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Ya</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>settings</b>
      </td>
      <td style="text-align:left">Tatasusunan tetapan yang pengguna boleh ubah</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>Ya</code>
      </td>
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

PreMiD ialah perkhidmatan pelbagai bahasa, maksudnya terdapat banyak bahasa terlibat untuk berhubung dengan pengguna di seluruh dunia. Senarai penuh bahasa boleh dijumpai di [titik akhir API](https://api.premid.app/v2/langFile/list) ini.

## Tetapan Presence
Tetapkan tetapan saling tindak supaya pengguna boleh mengubah suai Presence tersebut!
```javascript
"settings": [
        { 
            "id": "ID",
            "title": "DISPLAY TITLE",
            "icon": "FONTAWESOME FREE ICON", //Example "fas fa-info"
            "value": true //Boolean value will make it an on/off switch with the value as the default value
        },
        {
            "id": "ID",
            "if": {
                "ID": true //If another setting equals this value (true/false/0/1/etc.) then show this button
            },
            "title": "DISPLAY TITLE",
            "icon": "FONTAWESOME FREE ICON",
            "value": "\"%song%\" by %artist%", //Putting in a string will make the setting an input one, where you can use a custom input.
            "placeholder": "use %song% or %artist%" //When input is empty it will show this grayed out
        },
        {
            "id": "ID",
            "title": "DISPLAY TITLE",
            "icon": "FONTAWESOME FREE ICON",
            "value": 0, //Default value of the selector
            "values": ["1", "2", "etc."] //Will make the setting a selector where you select which one you want
        }
    ]
```

Gunakan kaedah berikut untuk mendapatkan maklumat tetapan dalam fail Presence anda:
### `getSetting(String)`
Mengembalikan nilai tetapan.
```typescript
var setting = await presence.getSetting("pdexID"); //Gantikan pdexID dengan ID tetapan
console.log(setting); // Ini akan log nilai tetapan
```

### `hideSetting(String)`
Menyembunyikan tetapan yang diberikan.
```typescript
presence.hideSetting("pdexID"); //Gantikan pdexID dengan ID tetapan
```

### `showSetting(String)`
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
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>games</b></td>
    <td style="text-align:left"><b>Permainan</b></td>
      <td style="text-align:left">Sebarang laman web yang mempunyai kandungan berkaitan permainan, contohnya <code>Kahoot</code> atau <code>Skribbl.io</code></td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>music</b></td>
    <td style="text-align:left"><b>Muzik</b></td>
      <td style="text-align:left">Ini laman sesawang yang menawarkan kandungan berkaitan muzik, sama ada melalui penstriman atau muat turun.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>socials</b></td>
        <td style="text-align:left"><b>Sosial</b></td>
      <td style="text-align:left">Laman sesawang yang digunakan untuk tujuan penciptaan dan perkongsian kandungan atau untuk disertai dalam bentuk rangkaian sosial yang lain.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>videos</b></td>
        <td style="text-align:left"><b>Video & Strim</b></td>
      <td style="text-align:left">Laman web yang bertujuan untuk menyediakan video dan strim.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>other</b></td>
    <td style="text-align:left"><b>Lain-lain</b></td>
      <td style="text-align:left">Apa-apa yang tidak berada di bawah mana-mana kategori khusus di atas.</td>
      </td>
    </tr>
  </tbody>
</table>

