---
title: Metadata.json
description: Berisi data dasar tentang presence
published: true
date: 2020-05-21T16:01:05.836Z
tags:
---

# Metadata.json

Jika anda ingin menerbitkan presence ke toko dan memuatnya lewat ektensi, anda harus membuat file `metadata.json` pada folder `dist` anda.

Contoh dari file tersebut dapat dilihat dibawah.

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
      <td style="text-align:left"><b>author</b>
      </td>
      <td style="text-align:left">Harus berisi object dengan <code>nama</code> dan <code>id</code> dari pengembang presence. Nama adalah username Discord anda tanpa identifier(#0000). <code>id</code> pengguna dapat disalin dari Discord dengan mengaktifkan developer
        mode dan klik kanan pada profil anda.</td>
      <td style="text-align:left"><code>Object</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>contributors</b>
      </td>
      <td style="text-align:left">Harus berisi object dengan <code>nama</code> dan <code>id</code> dari kontributor. Nama adalah username Discord anda tanpa identifier(#0000). <code>id</code> pengguna dapat disalin dari Discord dengan mengaktifkan developer
        mode dan klik kanan pada profil anda.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>Yes</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>service</b>
      </td>
      <td style="text-align:left">Judul dari layanan yang didukung oleh presence tersebut.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>altnames</b>
      </td>
      <td style="text-align:left">Dapat mencari presence menggunakan nama alternatif. <br>Dimaksudkan untuk presence yang memiliki nama berbeda pada bahasa berbeda (misal Pokémon and 포켓몬스터). <br> Anda dapat juga menggunakannya untuk presence yang memilki karakter spesial agar anda tidak harus mengetiknya (misal Pokémon and Pokemon).
      </td>
      <td style="text-align:left"><code>Array&lt;String&gt;</code>
      </td>
      <td style="text-align:left"><code>Yes</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>description</b>
      </td>
      <td style="text-align:left">Sedikit deskripsi tentang presence, anda dapat menggunakan deskripsi dari layanan tersebut        jika anda kehabisan ide. Deskripsi harus memiliki value yang berpasangan yang menandakan bahasa, dan deskripsi dengan bahasa tertentu. Buat deskripsi dengan bahasa yang <i>anda mengerti</i>, translator kami yang akan merubah file metadata anda. Lihat kategori untuk bahasa presence untuk daftarnya. </td>
      <td style="text-align:left"><code>Object</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b>
      </td>
      <td style="text-align:left">URL layanan. <br><b>Misal:</b><code>vk.com</code><br>
        <b>Url ini harus sama dengan url dari website karena akan digunakan untuk mendeteksi apakah ini adalah website yang benar untuk inject script. Ini bisa digunakan sebagai kesatuan ketika ada lebih dari satu url.</b>
      </td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b>
      </td>
      <td style="text-align:left">Regular expression string yang digunakan untuk mencocokkan url.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Yes</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>version</b>
      </td>
      <td style="text-align:left">Versi dari presence anda.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>logo</b>
      </td>
      <td style="text-align:left">Link ke logotype dari layanan.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b>
      </td>
      <td style="text-align:left">Link ke thumbnail presence.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>color</b>
      </td>
      <td style="text-align:left"><code>#HEX</code> value. Kami menganjurkan untuk menggunakan warna utama layanan         yang didukung oleh presence anda.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>tag</b>
      </td>
      <td style="text-align:left">Himpunan dengan tag, ini akan membantu pengguna untuk mencari presence anda pada website.</td>
      <td
      style="text-align:left"><code>String, Array&lt;String&gt;</code>
        </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>category</b>
      </td>
      <td style="text-align:left">String yang digunakan untuk mewakili kategori yang dimilki presence.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b>
      </td>
      <td style="text-align:left">Menentukan apakah <code>iFrames</code> digunakan</td>
      <td style="text-align:left"><code>Boolean</code>
      </td>
      <td style="text-align:left"><code>Yes</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b>
      </td>
      <td style="text-align:left">Penentu regular expression yang memilih iframe yang di inject.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Yes</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>settings</b>
      </td>
      <td style="text-align:left">Kumpulan pengaturan yang bisa dirubah pengguna</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>Yes</code>
      </td>
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

PreMiD merupakan layanan polygot, artinya terdapat banyak bahasa yang terlibat untuk menghubungkan pengguna diseluruh dunia. Daftar penuh bahasa dapat dilihat dengan [API endpoint](https://api.premid.app/v2/langFile/list).

## Pengaturan presence
Buat pengaturan interaktif agar pengguna dapat mengatur presencenya!
```javascript
"settings": [
        { 
            "id": "ID",
            "title": "DISPLAY TITLE",
            "icon": "FONTAWESOME FREE ICON", //Example "fas fa-info"
            "value": true //value Boolean akan membuatnya sebagai switch on/off dengan value sebagai default value
        },
        {
            "id": "ID",
            "if": {
                "ID": true //Jika ada aturan yang setara dengan value ini (true/false/0/1/etc.) maka tampilkan tombol ini
            },
            "title": "DISPLAY TITLE",
            "icon": "FONTAWESOME FREE ICON",
            "value": "\"%song%\" by %artist%", //Menempatkan pada string akan membuat aturan menjadi satu, dimana anda dapat menggunakan input custom.
            "placeholder": "use %song% or %artist%" //Ketika input kosong ini akan tampil berwarna abu-abu
        },
        {
            "id": "ID",
            "title": "DISPLAY TITLE",
            "icon": "FONTAWESOME FREE ICON",
            "value": 0, //Default value of the selector
            "values": ["1", "2", "etc."] //Akan membuat pengaturan sebagai pemilih dimana anda memilih mana yang anda inginkan
        }
    ]
```

Gunakan metode berikut untuk mendapat info pengaturan pada file presence:
### `getSetting(String)`
Mengembalikan value dari pengaturan.
```typescript
var setting = await presence.getSetting("pdexID"); //Mengganti pdexID dengan id dari pengaturan
console.log(setting); // Ini akan mencatat value dari pengaturan
```

### `hideSetting(String)`
Sembunyikan pengaturan yang diberikan.
```typescript
presence.hideSetting("pdexID"); //Mengganti pdexID dengan id dari pengaturan
```

### `showSetting(String)`
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
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>permainan</b></td>
    <td style="text-align:left"><b>Permainan</b></td>
      <td style="text-align:left">Website apapun yang memiliki konten tentang game, seperti <code>Kahoot</code> atau <code>Skribbl.io</code></td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>musik</b></td>
    <td style="text-align:left"><b>Musik</b></td>
      <td style="text-align:left">Website ini menawarkan konten yang berhubungan dengan musik, streaming atau download.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>sosial</b></td>
        <td style="text-align:left"><b>Sosial</b></td>
      <td style="text-align:left">Website yang dibuat untuk membuat dan membagikan konten atau berpartisipasi dalam social network dalam bentuk apapun.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>video</b></td>
        <td style="text-align:left"><b>Video dan Stream</b></td>
      <td style="text-align:left">Website yang berguna untuk menyediakan video dan stream.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>lain-lain</b></td>
    <td style="text-align:left"><b>Lainnya</b></td>
      <td style="text-align:left">Apapun yang tidak termasuk kategori diatas.</td>
      </td>
    </tr>
  </tbody>
</table>

