---
title: Selesaikan masalah
description: Everything to solve your problem
published: true
date: 2021-01-03T14:12:34.320Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:03:54.865Z
---

> Make sure you have the extension **and** the application installed! 
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

### Check if you have antivirus or firewall running on your computer
Sometimes antivirus programs and firewalls are blocking applications which are creating/hosting servers or just connecting to the internet. We are using a local server to receive and pass data between our app and extension, so if you will block app's ability to pass data you probably will not be able to use PreMiD.

### Disable your addons
Disable all your addons and see if it works. If yes, try to enable your addons step-by-step and tell us which addon broke PreMiD.

### Restarting your computer
I hope you know how to restart a computer.

### Reinstalling PreMiD
Sometimes there is something wrong with the files... Tutorials for the installation can be found [here](/install).

### Manual removal
Windows:    `C:\Users\USER\AppData\Roaming\`` and delete the folder`PreMiD`.
MacOS:`~/users/USER/~Library/Application Support/`and delete the folder`PreMiD``.

### On Ubuntu/Debian based distros
If you have downloaded Discord through Snapcraft, RPC will not work. You have to uninstall the Snapcraft version by executing `sudo snap remove discord` on a terminal, download [Discord's Linux build](https://discordapp.com/api/download?platform=linux) ([or Discord Canary](https://discordapp.com/api/canary/download?platform=linux)), then navigating to the directory you downloaded Discord to (usually `$HOME/Downloads`), then installing the package using `sudo dpkg -i discord-*.deb`.

### McAfee detected PreMiD as virus (Windows)
This is a false positive from McAfee and we have reported the issue to them, for now you can exclude PreMiD from the scan by doing the following steps:

> Jika anda rasa tidak yakin untuk melakukan langkah ini, silakan buat tiket dalam bahasa Inggeris di saluran [#support](https://discord.premid.app/) dan salah seorang Ejen Sokongan kami akan membantu anda! 
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

### That has not solved my problem
Please open a ticket in [#support](https://discord.premid.app/).