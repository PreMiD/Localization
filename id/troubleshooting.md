---
title: Troubleshooting
description: Segalanya untuk menyelesaikan masalah anda
published: true
date: 2020-04-20T11:16:55.141Z
tags:
---

> Pastikan anda sudah menginstal ekstensi **dan** aplikasi! 
> 
> {.is-warning}

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
JIka anda mengunduh Discord melewati Snapcraft, RPC tidak bekerja. You have to uninstall the Snapcraft version by executing `sudo snap remove discord` on a terminal, download [Discord's Linux build](https://discordapp.com/api/download?platform=linux) ([or Discord Canary](https://discordapp.com/api/canary/download?platform=linux)), then navigating to the directory you downloaded Discord to (usually `$HOME/Downloads`), then installing the package using `sudo dpkg -i discord-*.deb`.

### That has not solved my problem
Please open a ticket in [#support](https://discord.gg/WvfVZ8T).