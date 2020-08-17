---
title: Troubleshooting
description: Segalanya untuk menyelesaikan masalah anda
published: true
date: 2020-08-10T20:42:48.586Z
tags:
editor: markdown
---

> Pastikan anda sudah menginstal ekstensi **dan** aplikasi! 
> 
> {.is-warning}

### Apakah kamu menggunakan Presence dengan pengaturan?
Banyak presence (termasuk `Twitch` dan `SoundCloud`) terpengaruh oleh masalah ekstensi. This issue causes the extension to not grab the default values of settings properly.

To solve this, all you have to do is toggle the topmost setting: ![presencesettings.gif](/presencesettings.gif)

### Muat ulang halaman
Anda bisa menekan <kbd>CTRL+R</kbd>/<kbd>F5</kbd> (Windows) atau <kbd>CMD+R</kbd> (MacOS) pada keyboard daripada mencari tombol refresh.

### Mulai ulang browser
<kbd>Alt</kbd>+<kbd>F4</kbd> (Windows) atau <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS) bekerja juga. (Sudah jelas anda harus membukanya lagi.)

### Pastikan anda sudah mengaktifkan Discord Game Activity pada pengaturan
**User Settings** > **Game Activity** ![gameactivity_edited.png](/gameactivity_edited.png)

### Memulai ulang PreMiD (Aplikasi)
![quit.png](/quit.png) Anda harus memulai ulang PreMiD setelah itu.

### Reload/mulai ulang Discord
Tekan <kbd>CTRL+R</kbd> (Windows) atau <kbd>CMD+R</kbd> (MacOS) pada keyboard atau mulai ulang secara manual.

### Pastikan Discord TIDAK berjalan sebagai administrator
Sangat penting. Discor RPC tidak akan bekerja jika anda membuka Discrod sebagai administrator.

### Periksa jika antivirus atau firewall berjalan di komputer anda
Kadang program antivirus dan firewall menghalangi program yang sedang membuat/hosting server atau menghubungkan ke internet. Kami menggunakan server lokal untuk menerima dan meneruskan data antara aplikasi dan ekstensi kami, jadi jika anda memblokir aplikasi untuk meneruskan data kemungkinan anda tidak bisa menggunakan PreMiD.

### Nonaktifkan addon
Matikan semua addon dan periksa jika bekerja. Jika iya, coba nyalakan addon anda satu per satu dan beritahu kami addon apa yang mengganggu PreMiD.

### Mulai ulang komputer anda
Kami harap anda tahu caranya.

### Instal ulang PreMiD
Terkadang ada sesuatu yang salah dengan filenya... Tutorial untuk instalasi bisa dilihat [disini](/install).

### Penghapusan manual
Windows:    `C:\Users\USER\AppData\Roaming\`` dan hapus folder `PreMiD`.
MacOS:`~/users/USER/~Library/Application Support/`dan hapus folder`PreMiD``.

### Pada distro berbasis Ubuntu/Debian
JIka anda mengunduh Discord melewati Snapcraft, RPC tidak bekerja. Anda harus menghapus versi Snapcraft dengan menjalankan `sudo snap remove discord` pada terminal, unduh [Discord's Linux build](https://discordapp.com/api/download?platform=linux) ([atau Discord Canary](https://discordapp.com/api/canary/download?platform=linux)) kemudian mengarah ke direktori unduhan Discord (biasanya `$HOME/Downloads`), kemudian instal paket menggunakan `sudo dpkg -i discord-*.deb`.

### McAfee mendeteksi PreMiD sebagai virus (Windows)
Ini adalah false positive dari McAfee dan kami telah melaporkan masalah pada mereka, untuk saat ini kamu bisa mengecualikan PreMiD dari scan dengan melakukan langkah berikut:

> Jika kamu tidak ingin melakukan langkah berikut, silahkan membuat tiket pada [#support](https://discord.gg/WvfVZ8T) dan salah satu Agen Support akan membantumu! 
> 
> {.is-warning}

1. Buka aplikasi McAfee dan klik pada ikon pengaturan pada kanan atas. <img src="https://i.imgur.com/rPLZn6c.png" width="500px" style="max-width:100%;" />
2. Klik "Item Karantina" (Kedua dari atas).
3. Perluas, dan klik ikon `>` sebelum item bernama "settings.dat".
4. Pastikan direktorinya ""AppData\Local\Temp\PreMiD", jika benar pilih dan tekan pemulihan. <img src="https://i.imgur.com/9nvHmiI.png" width="500px" style="max-width:100%;" />
5. Setelah pemulihan kamu bisa menutup "Item Karantina", lalu tekan ikon pengaturan lagi di atas kanan.
6. Tekan "Pemindaian" (Ketiga dari atas).
7. Perluas dan klik "Tambahkan file".
8. Ketik "%appdata%" di bilah URL pengelola file dan tekan Enter. <img src="https://i.imgur.com/2bchwLe.png" width="500px" style="max-width:100%;" />
9. Buka folder "PreMiD" dan pilih file "PreMiD.exe" lalu klik buka. <img src="https://i.imgur.com/aHOyv3V.png" width="500px" style="max-width:100%;" />
10. McAfee sekarang seharusnya sudah mengabaikan file kita, luncurkan saja aplikasi kita dan seharusnya baik-baik saja.

### Masalahku belum terselesaikan
Harap mengirim tiket ke [#support](https://discord.gg/WvfVZ8T).