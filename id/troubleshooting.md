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

### Reload/restart Discord
Press <kbd>CTRL+R</kbd> (Windows) or <kbd>CMD+R</kbd> (MacOS) on your keyboard or restart Discord manually.

### Be sure Discord is running NOT as administrator
Really important. Discord RPC will not work if you run Discord as an administrator.

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

### That has not solved my problem
Please open a ticket in [#support](https://discord.gg/WvfVZ8T).