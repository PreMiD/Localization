---
title: Troubleshooting
description: Segalanya untuk menyelesaikan masalah anda
published: true
date: 2021-02-08T17:11:28.733Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:03:54.865Z
---

> Pastikan anda sudah menginstal ekstensi **dan** aplikasi! 
> 
> {.is-warning}

Included on this page:
1. [General troubleshooting](https://docs.premid.app/troubleshooting#general)
2. [Linux troubleshooting](https://docs.premid.app/troubleshooting#linux)
3. [MacOS troubleshooting](https://docs.premid.app/troubleshooting#macos)

<a name="general"></a>

# General troubleshooting
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
Don't worry. Just click **ctrl+r** keybind on your discord to restart it. After this it will not show!

<a name="linux"></a>

# Linux troubleshooting
### Ubuntu/Debian based distros
JIka anda mengunduh Discord melewati Snapcraft, RPC tidak bekerja. You have to uninstall the Snapcraft version by executing `sudo snap remove discord` on a terminal, download **[Discord's Linux build](https://discordapp.com/api/download?platform=linux)** (**[or Discord Canary](https://discordapp.com/api/canary/download?platform=linux)**), then navigating to the directory you downloaded Discord to (usually `$HOME/Downloads`), then installing the package using `sudo dpkg -i discord-*.deb`. If AppImage doesn't work, you should consider checking our other packages by **[this link](https://packagecloud.io/premid/linux)**.

### Arch Linux based distros
Arch Linux based distros should use AUR (Arch User Repository) package that is named `premid` or `premid-git` (*WARNING: This one builds premid from source*). If you don't want to install aur manager (yay etc.), you can check our AppImage that is downloadable from our **[Linux repository](https://github.com/premid/linux/releases)**. *Warning: **AUR** repo is not maintained by us, but by other people.*

### Port binding
You should know that **PreMiD** binds itself to port **3020** that is necessary for Extension and Application communication. If **PreMiD** shows you error about this port, you should check if something binds to port by writing to terminal `sudo lsof -i:3020` or `sudo netstat -tnlp | grep :3020`. If some application is binded to it you should kill it and try running `PreMiD` again.

### PreMiD's AppImage doesn't launch at login?!?!
As we stated in our **Linux repository**, AppImage can't be launched at login. You can add it to autostart manually. Instruction how to do this:
1. Make file named **rc.local** in `/etc` directory.
2. Open this file in your favourite editor and paste-change this:
```bash
#!/bin/bash
# Required to run as /bin/bash (if you use zsh etc. you can change it.)

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

If you get this error, it means that your account doesn't have Administrator permissions and you need to create folder manually. Instruction how to do it:
1. Open finder and open **Applications** folder.
2. Right-click on blank space and click **Create folder**.
3. Create folder named `PreMiD` (remember about upper-cased letters).
4. Open installer again.

# Masalahku belum terselesaikan
Please open a ticket in [#support](https://discord.premid.app/).