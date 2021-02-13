---
title: Troubleshooting
description: Segalanya untuk menyelesaikan masalah anda
published: true
date: 2021-02-08T21:30:58.603Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:03:54.865Z
---

> Pastikan anda sudah menginstal ekstensi **dan** aplikasi! 
> 
> {.is-warning}

Halaman ini meliputi:
1. [Troubleshooting Umum](https://docs.premid.app/troubleshooting#general)
2. [Troubleshooting Linux](https://docs.premid.app/troubleshooting#linux)
3. [Troubleshooting MacOS](https://docs.premid.app/troubleshooting#macos)

<a name="general"></a>

# Troubleshooting Umum
### Muat ulang halaman
Anda bisa menekan <kbd>CTRL+R</kbd>/<kbd>F5</kbd> (Windows) atau <kbd>CMD+R</kbd> (MacOS) pada keyboard daripada mencari tombol refresh.

### Apakah kamu menggunakan aplikasi Discord?
PreMiD **tidak** bekerja pada discord versi browser, kamu harus mengunduh aplikasinya [disini](https://discord.com/download).

### Pastikan anda sudah mengaktifkan Discord Game Activity pada pengaturan
**User Settings** > **Game Activity** ![gameactivity_edited.png](/gameactivity_edited.png)

### Pastikan Discord TIDAK berjalan sebagai administrator
Sangat penting. Discor RPC tidak akan bekerja jika anda membuka Discrod sebagai administrator.

### Apakah kamu menggunakan Presence dengan pengaturan?
Banyak presence (termasuk `Twitch` dan `SoundCloud`) terpengaruh oleh masalah ekstensi. Masalah ini menyebabkan ekstensi tidak mendapat value default dari setting dengan benar.

Untuk memecahkan ini, kamu hanya butuh untuk menyalakan pilihan pengaturan paling atas: ![presencesettings.gif](/presencesettings.gif)

### Mulai ulang browser
<kbd>Alt</kbd>+<kbd>F4</kbd> (Windows) atau <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS) bekerja juga. (Sudah jelas anda harus membukanya lagi.)

### Memulai ulang PreMiD (Aplikasi)
![quit.png](/quit.png) Anda harus memulai ulang PreMiD setelah itu.

### Reload/mulai ulang Discord
Tekan <kbd>CTRL+R</kbd> (Windows) atau <kbd>CMD+R</kbd> (MacOS) pada keyboard atau mulai ulang secara manual.

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

### McAfee mendeteksi PreMiD sebagai virus (Windows)
Ini adalah false positive dari McAfee dan kami telah melaporkan masalah pada mereka, untuk saat ini kamu bisa mengecualikan PreMiD dari scan dengan melakukan langkah berikut:

> Jika kamu tidak ingin melakukan langkah berikut, silahkan membuat tiket pada [#support](https://discord.premid.app/) dan salah satu Agen Support akan membantumu! 
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

### PreMiD status bugged on discord!
Jangan khawatir. Tekan keybind <kbd>CTRL+R</kbd> (Windows) atau <kbd>CMD+R</kbd> (MacOS) selagi window discord terfokuskan untuk memuat ulang.

<a name="linux"></a>

# Troubleshooting Linux
### Distro berbasis Ubuntu/Debian
JIka anda mengunduh Discord melewati Snapcraft, RPC tidak bekerja. Kamu harus uninstall versi Snapcraft dengan menjalankan ` sudo snap remove discord` on a terminal, download **[Discord's Linux build](https://discordapp.com/api/download?platform=linux)** (**[atau Discord Canary](https://discordapp.com/api/canary/download?platform=linux)**), kemudian mengarah ke direktori dimana discord terunduh (biasanya `$HOME/Downloads`), kemudian menginstall paket menggunakan `sudo dpkg -i discord-*.deb`. Jika Appimage tidak bekerja, kamu dapat memeriksa paket lain kami pada**[link ini](https://packagecloud.io/premid/linux)**.

### Distro berbasis Arch Linux
Distro berbasis Arch Linux sebaiknya menggunakan paket AUR (Arch User Repository) yang bernama <code>premid</code> atau <code>premid-git</code> (<em x-id="3"> PERINGATAN: Repository ini membangun premid dari kode sumber kami.</em>). Jika kamu tidak ingin mengistall AUR manager (yay etc.), kamu dapat memeriksa Appimage kami yang dapat diunduh dari <strong x-id="1"><a href="https://github.com/premid/linux/releases">Linux repository</a></strong> kami.
<em x-id="3">Peringatan: paket pada repository <strong x-id="1">AUR</strong> tidak dikelola oleh kami (sebagai organisasi PreMiD), tapi oleh orang lain.</em>

### Port binding
Kamu harus tahu bahwa <strong x-id="1">PreMiD</strong> terikat pada port <strong x-id="1">3020</strong>. Ini dibutuhkan agar Ekstensi dan Aplikasi dapat berkomunikasi. Jika <strong x-id="1">PreMiD</strong> menampilkan error tentang port tersebut, kamu sebaiknya memeriksa jika ada sesuatu yang terikat pada port 3020 dengan menjalankan <code>sudo lsof -i:3020</code> atau <code>sudo netstat -tnlp | grep :3020</code> pada terminalmu. Jika suatu proses terikat pada port tersebut kamu harus memastikan port tersebut kosong dan coba menjalankan <code>PreMiD</code> lagi.

### AppImage PreMiD tidak berjalan saat login
Seperti yang telah kami tetapkan pada **Linux repository**, AppImage tidak bisa dijalankan saat login. Kamu dapat menambahkan autostart dengan melakukan langkah berikut:
1. Buatlah file bernama <strong x-id="1">rc.local</strong> pada direktori <code>/etc</code>.
2. Bukalah file tersebut menggunakan editor yang kamu sukai dan tempel kode yang telah diberikan dengan merubah beberapa hal:
```bash
#!/bin/bash
# Dibutuhkan untuk menjalankan /bin/bash (jika kamu menggunakan zsh etc. you can change it.)

# Example: /home/PreMiD/PreMiD*.AppImage
<directory to appimage>/PreMiD*.AppImage

exit 0
```
3. Save file and chmod it as executable `sudo chmod a+x /etc/rc.local`.
4. Restart your PC and PreMiD AppImage should launch at login.

<a name="macos"></a>

# MacOS troubleshooting
### Error creating directory
<img src="https://i.imgur.com/td92lf6.png" width="300px" style="max-width:100%;" />

If you get this error, it means that your account doesn't have Administrator permissions and you need to create folder manually by doing these steps:
1. Open finder and open **Applications** folder.
2. Right-click on blank space and click **Create folder**.
3. To this folder assign `PreMiD` name (remember about upper-cased letters).
4. Open installer again.

# Masalahku belum terselesaikan
Please open a ticket in [#support](https://discord.premid.app/).