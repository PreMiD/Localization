---
title: Selesaikan masalah
description: Segalanya untuk menyelesaikan masalah anda
published: true
date: 2021-02-08T17:11:28.733Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:03:54.865Z
---

> Sila pastikan anda telah pasangkan kedua-dua sambungan **dan** aplikasi! 
> 
> {.is-warning}

Included on this page:
1. [General troubleshooting](https://docs.premid.app/troubleshooting#general)
2. [Linux troubleshooting](https://docs.premid.app/troubleshooting#linux)
3. [MacOS troubleshooting](https://docs.premid.app/troubleshooting#macos)

<a name="general"></a>

# General troubleshooting
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

### PreMiD status bugged on discord!
Don't worry. Just click **ctrl+r** keybind on your discord to restart it. After this it will not show!

<a name="linux"></a>

# Linux troubleshooting
### Ubuntu/Debian based distros
Jika anda memuat turun Discord melalui Snapcraft, RPC tidak akan berfungsi. You have to uninstall the Snapcraft version by executing `sudo snap remove discord` on a terminal, download **[Discord's Linux build](https://discordapp.com/api/download?platform=linux)** (**[or Discord Canary](https://discordapp.com/api/canary/download?platform=linux)**), then navigating to the directory you downloaded Discord to (usually `$HOME/Downloads`), then installing the package using `sudo dpkg -i discord-*.deb`. If AppImage doesn't work, you should consider checking our other packages by **[this link](https://packagecloud.io/premid/linux)**.

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

# Semua itu tidak selesaikan masalah saya
Sila buka tiket dalam bahasa Inggeris di saluran [#support](https://discord.premid.app/) dalam Discord kami.