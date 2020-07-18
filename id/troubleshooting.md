---
title: Troubleshooting
description: Segalanya untuk menyelesaikan masalah anda
published: true
date: 2020-07-17T19:53:39.991Z
tags:
editor: markdown
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
JIka anda mengunduh Discord melewati Snapcraft, RPC tidak bekerja. Anda harus menghapus versi Snapcraft dengan menjalankan `sudo snap remove discord` pada terminal, unduh [Discord's Linux build](https://discordapp.com/api/download?platform=linux) ([atau Discord Canary](https://discordapp.com/api/canary/download?platform=linux)) kemudian mengarah ke direktori unduhan Discord (biasanya `$HOME/Downloads`), kemudian instal paket menggunakan `sudo dpkg -i discord-*.deb`.

### McAfee mendeteksi PreMiD sebagai virus (Windows)
Ini adalah false positive dari McAfee dan kami telah melaporkan masalah pada mereka, untuk saat ini kamu bisa mengecualikan PreMiD dari scan dengan melakukan langkah berikut:

> If you do not feel confident taking these steps, feel free to make a ticket in [#support](https://discord.gg/WvfVZ8T) and one of our Support Agents will be able to help you out! 
> 
> {.is-warning}

1. Open the McAfee application and click the settings icon in the top right. <img src="https://i.imgur.com/rPLZn6c.png" width="500px" style="max-width:100%;" />
2. Click "Quarantined Items" (Second from the top).
3. Expand it, and click the `>` icon before an item with the name "settings.dat".
4. Make sure the path includes "AppData\Local\Temp\PreMiD", if so select it and press restore. <img src="https://i.imgur.com/9nvHmiI.png" width="500px" style="max-width:100%;" />
5. After it is restored you can close the "Quarantined Items" popup, then press the settings icon again in the top right.
6. Click "Real-Time Scanning" (Third from the top).
7. Expand it and click "Add file".
8. Type "%appdata%" in the URL bar of the file manager and press Enter. <img src="https://i.imgur.com/2bchwLe.png" width="500px" style="max-width:100%;" />
9. Open the "PreMiD" folder and select the "PreMiD.exe" file and click open. <img src="https://i.imgur.com/aHOyv3V.png" width="500px" style="max-width:100%;" />
10. McAfee should now ignore our file, just launch our application and you should be good to go.

### Masalahku belum terselesaikan
Harap mengirim tiket ke [#support](https://discord.gg/WvfVZ8T).