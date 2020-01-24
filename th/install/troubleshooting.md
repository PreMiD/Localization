---
title: การแก้ปัญหา
description: Everything to solve your problem
published: true
date: 2020-01-18T20:32:24.820Z
tags:
---

> Make sure you have the extension **and** the application installed! 
> 
> {.is-warning}

### โหลดหน้านี้ใหม่
คุณสามารถกด <kbd>Strg+R</kbd>/<kbd>F5</kbd> (วินโดวส์) หรือ <kbd>CMD+R</kbd> (MacOS) บนแป้นพิมพ์ของคุณเพื่อแทนที่การค้นหา สำหรับการโหลดหน้าเว็บ

### รีสตาร์ทบราวเซอร์ของคุณ
<kbd>Alt</kbd>+<kbd>F4</kbd> (วินโดวส์) หรือ <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS) ได้ผลเยี่ยมมากเหมือนกัน (คุณตัองเริ่มบราวเซอร์ใหม่อีกครั้งเพื่อความชัดเจน)

### ตรวจสอบให้แน่ใจว่าคุณได้เปิดกิจกรรมการเล่นเกมในการตั้งค่า Discord หรือเปล่า
**ตั้งค่าบัญชีผู้ใช้** > **กิจกรรมการเล่นเกม** ![gameactivity_edited.png](/gameactivity_edited.png)

### รีสตาร์ท PreMiD (แอพพลิเคชั่น)
![quit.png](/quit.png) คุณต้องรีสตาร์ท PreMiD หลังจากนั้น

### รีโหลด/รีสตาร์ท ดิสคอร์ด
กด <kbd>Strg+R</kbd> (Windows) หรือ <kbd>CMD+R</kbd> (MacOS) บนแป้นพิมพ์ของคุณ หรือ รีสตาร์ท Discord แบบปกติก็ได้

### ต้องแน่ใจว่า Discord ไม่ได้เปิดแบบ Administrator
สำคัญมากๆ Discord RPC จะไม่ทำงานถ้าคุณเปิด Discord แบบ Administrator

### Check if you have antivirus or firewall running on your computer
Sometimes antivirus programs and firewalls are blocking applications which are creating/hosting servers or just connecting to the internet. We are using a local server to receive and pass data between our app and extension, so if you will block app's ability to pass data you probably will not be able to use PreMiD.

### Disable your addons
Disable all your addons and see if it works. If yes, try to enable your addons step-by-step and tell us which addon broke PreMiD.

### Restarting your computer
I hope you know how to restart a computer.

### ติดตั้ง PreMiD อีกครั้ง
Sometimes there is something wrong with the files... Tutorials for the installation can be found [here](/install).

### Manual removal
Windows:    `C:\Users\USER\Program Files (x86)\`` and delete the folder`PreMiD`.
MacOS:`~/users/USER/~Library/Application Support/`and delete the folder`PreMiD``.

### On Ubuntu/Debian based distros
If you have downloaded Discord through Snapcraft, RPC will not work. You have to uninstall the Snapcraft version by executing `sudo snap remove discord` on a terminal, download [Discord's Linux build](https://discordapp.com/api/download?platform=linux) ([or Discord Canary](https://discordapp.com/api/canary/download?platform=linux)), then navigating to the directory you downloaded Discord to (usually `$HOME/Downloads`), then installing the package using `sudo dpkg -i discord-*.deb`.

### That has not solved my problem
Please open a ticket in [#support](https://discord.gg/PreMiD).