---
title: Selesaikan masalah
description: Segalanya untuk menyelesaikan masalah anda
published: true
date: 2021-01-03T14:12:34.320Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:03:54.865Z
---

> Sila pastikan anda telah pasangkan kedua-dua sambungan **dan** aplikasi! 
> 
> {.is-warning}

### Muat semula halaman
Anda boleh tekan <kbd>CTRL+R</kbd>/<kbd>F5</kbd> (Windows) atau <kbd>CMD+R</kbd> (MacOS) di papan kekunci anda juga di samping mencari butang muat semula.

### Adakah anda menggunakan aplikasi Discord?
PreMiD **tidak** berfungsi di Discord versi pelayar, anda mesti muat turun aplikasi [di sini](https://discord.com/download).

### Sila pastikan anda membolehkan Discord Game Activity / Aktiviti Permainan Discord dalam tetapan
**User Settings / Tetapan Pengguna** > **Game Activity / Aktiviti Permainan** ![gameactivity_edited.png](/gameactivity_edited.png)

### Pastikan Discord dijalankan BUKAN sebagai pentadbir
Sangat penting. Discord RPC tidak akan berfungsi jika anda jalankan Discord sebagai pentadbir.

### Adakah anda menggunakan Presence dengan tetapan?
Banyak Presence (termasuk `Twitch` dan `SoundCloud`) terkesan dengan masalah sambungan. Isu ini menyebabkan sambungan tidak mampu memperoleh nilai lalai tetapan dengan betul.

Untuk menyelesaikannya, anda hanya perlu menogol tetapan teratas: ![presencesettings.gif](/presencesettings.gif)

### Mula semula pelayar anda
<kbd>Alt</kbd>+<kbd>F4</kbd> (Windows) atau <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS) juga boleh lakukannya. (Anda perlu mulakan semula pelayar anda.)

### Mulakan semula PreMiD (Aplikasi)
![quit.png](/quit.png) Anda perlu mulakan semula PreMiD selepas ini.

### Muat semula/mula semula Discord
Tekan <kbd>CTRL+R</kbd> (Windows) atau <kbd>CMD+R</kbd> (MacOS) pada papan kekunci anda atau mulakan semula Discord secara manual.

### Periksa jika anda mempunyai antivirus atau tembok api berjalan di komputer anda
Kadang kala atur cara antivirus dan tembok api menyekat aplikasi yang mencipta/menghos pelayan atau apa sahaja yang menyambung ke internet. Kami menggunakan pelayan tempatan untuk menerima dan menghantar data di antara aplikasi kami dan sambungan pelayar, jadi jika anda sekat kebolehan aplikasi untuk menghantar data maka anda mungkin tidak mampu menggunakan PreMiD.

### Lumpuhkan sambungan anda
Lumpuhkan kesemua sambungan anda yang lain dan tengok jika PreMiD berfungsi. Jika ya, cuba bolehkan semula sambungan anda satu demi satu dan beritahu kami sambungan mana yang rosakkan PreMiD.

### Memulakan semula komputer anda
Kami harap anda tahu cara untuk memulakan semula komputer.

### Memasang semula PreMiD
Kadang kala ada sesuatu yang tidak kena dengan failnya... Tutorial pemasangan boleh dijumpai [di sini](/install).

### Pembuangan manual
Windows:    `C:\Users\NAMA-PENGGUNA\AppData\Roaming\`` dan padamkan folder`PreMiD`.
MacOS:`~/users/NAMA-PENGGUNA/~Library/Application Support/`dan padamkan folder`PreMiD``.

### Di edaran berasaskan Ubuntu/Debian
Jika anda memuat turun Discord melalui Snapcraft, RPC tidak akan berfungsi. Anda perlu nyahpasang versi Snapcraft dengan menjalankan `sudo snap remove discord` dekat terminal, muat turun [binaan Discord untuk Linux](https://discordapp.com/api/download?platform=linux) ([atau binaan Discord Canary](https://discordapp.com/api/canary/download?platform=linux)), kemudian pergi ke direktori di mana anda muat turun Discord tadi (selalunya `$HOME/Downloads`), kemudian pasangkan pakej menggunakan `sudo dpkg -i discord-*.deb`.

### McAfee mengesan PreMiD sebagai virus (Windows)
Ini positif palsu daripada McAfee dan kami telah melaporkan isu ini kepada mereka, buat masa ini anda boleh kecualikan PreMiD daripada imbasan dengan langkah berikut:

> Jika anda rasa tidak yakin untuk melakukan langkah ini, silakan buat tiket dalam bahasa Inggeris di saluran [#support](https://discord.premid.app/) dan salah seorang Ejen Sokongan kami akan membantu anda! 
> 
> {.is-warning}

1. Buka aplikasi McAfee dan klik ikon tetapan di sebelah kanan atas. <img src="https://i.imgur.com/rPLZn6c.png" width="500px" style="max-width:100%;" />
2. Klik "Quarantined Items" / Item Dikuarantin (Kedua dari atas).
3. Kembangkannya, dan klik pada ikon `>` sebelum item dengan nama "settings.dat".
4. Pastikan laluan mengandungi "AppData\Local\Temp\PreMiD", jika ya pilih ia dan tekan Restore / Pulihkan. <img src="https://i.imgur.com/9nvHmiI.png" width="500px" style="max-width:100%;" />
5. Setelah ia dipulihkan anda boleh tutup tetingkap timbul "Quarantined Items" / Item Dikuarantin, kemudian tekan ikon tetapan lagi sekali di sebelah kanan atas.
6. Klik "Real-Time Scanning" / Imbasan Masa Nyata (Ketiga dari atas).
7. Kembangkannya dan pilih "Add file" / Tambah fail.
8. Taipkan "%appdata%" dalam bar URL pengurus fail dan tekan Enter. <img src="https://i.imgur.com/2bchwLe.png" width="500px" style="max-width:100%;" />
9. Buka folder "PreMiD" dan pilih fail "PreMiD.exe" dan klik Open / Buka. <img src="https://i.imgur.com/aHOyv3V.png" width="500px" style="max-width:100%;" />
10. Sekarang McAfee patut abaikan fail kami, jadi lancarkan aplikasi kami dan anda boleh teruskan dari situ.

### Semua itu tidak selesaikan masalah saya
Sila buka tiket dalam bahasa Inggeris di saluran [#support](https://discord.premid.app/) dalam Discord kami.