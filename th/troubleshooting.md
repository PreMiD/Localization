---
title: การแก้ปัญหา
description: ทุกอย่างเพื่อใช้แก้ปัญหาของคุณ
published: true
date: 2021-02-08T21:30:58.603Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:03:54.865Z
---

> ตรวจสอบให้แน่ใจว่าคุณได้ติดตั้งส่วนขยาย ** และ ** แอปพลิเคชั่นแล้ว! 
> 
> {.is-warning}

รวมอยู่ในหน้านี้:
1. [การแก้ปัญหาทั่วไป](https://docs.premid.app/troubleshooting#general)
2. [การแก้ปัญหาบน Linux](https://docs.premid.app/troubleshooting#linux)
3. [การแก้ปัญหาบน MacOS](https://docs.premid.app/troubleshooting#macos)

<a name="general"></a>

# การแก้ปัญหาทั่วไป
### โหลดหน้านี้ใหม่
คุณสามารถกด <kbd>CTRL+R</kbd>/<kbd>F5</kbd> (Windows) หรือ <kbd>CMD+R</kbd> (MacOS) บนแป้นพิมพ์ของคุณเพื่อรีโหลดหน้าเว็บ

### คุณได้ใช้ Discord รึเปล่า?
PreMiD จะ**ไม่**ทํางานสําหรับ Brower Discord คุณต้องโหลดเเอพ Discord ตรงนี้[](https://discord.com/download)

### ตรวจสอบให้แน่ใจว่าคุณได้เปิดกิจกรรมการเล่นเกมในการตั้งค่า Discord หรือเปล่า
**ตั้งค่าบัญชีผู้ใช้** > **กิจกรรมการเล่นเกม** ![gameactivity_edited.png](/gameactivity_edited.png)

### ต้องแน่ใจว่า Discord ไม่ได้เปิดแบบ Administrator
สำคัญมากๆ Discord RPC จะไม่ทำงานถ้าคุณเปิด Discord แบบ Administrator

### คุณได้ใช้การตั้งค่าของ Presence?
Presence หลายอย่าง (พวก `Twitch` เเละ `SoundClond`) มีปัญหาต่อส่วนขยาย ปัญหาพวกนี้มาจากส่วนขยายไม่รับค่าดั้งเดิมในการตั้งค่า

วิธีเเก้นั้นคือ เปิดการใช้งานอันบนสุดของ Setting![presencesettings.gif](/presencesettings.gif)

### รีสตาร์ทบราวเซอร์ของคุณ
<kbd>Alt</kbd>+<kbd>F4</kbd> (วินโดวส์) หรือ <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS) ได้ผลเยี่ยมมากเหมือนกัน (คุณตัองเริ่มบราวเซอร์ใหม่อีกครั้งเพื่อความชัดเจน)

### รีสตาร์ท PreMiD (แอพพลิเคชั่น)
![quit.png](/quit.png) คุณต้องรีสตาร์ท PreMiD หลังจากนั้น

### รีโหลด/รีสตาร์ท ดิสคอร์ด
กด <kbd>CTRL+R</kbd> (Windows) หรือ <kbd>CMD+R</kbd> (MacOS) บนแป้นพิมพ์ของคุณ หรือ รีสตาร์ท Discord ด้วยตัวเองก็ได้

### ตรวจสอบว่าคุณมีโปรแกรมป้องกันไวรัสหรือไฟร์วอลล์ทำงานบนคอมพิวเตอร์ของคุณหรือไม่ ?
บางครั้งโปรแกรมป้องกันไวรัสและไฟร์วอลล์ปิดกั้นแอปพลิเคชันซึ่งกำลังสร้างโฮสต์เซิร์ฟเวอร์หรือแค่เชื่อมต่ออินเทอร์เน็ต เราใช้เซิร์ฟเวอร์ Local เพื่อรับและส่งผ่านข้อมูลระหว่างแอปและส่วนขยายของเราดังนั้นหากคุณปิดกั้นความสามารถของแอปในการส่ง ผ่านข้อมูล คุณอาจไม่สามารถใช้ PreMiD ได้

### ปิดการใช้งาน addons
ปิดการใช้งาน addons ทั้งหมดของคุณและดูว่าใช้งานได้หรือไม่ ถ้าได้ลองเปิดใช้งาน addons ของคุณทีละตัวและแจ้งให้เราทราบว่า addons ตัวไหนหยุด PreMiD

### รีสตาร์ทคอมพิวเตอร์ของคุณ
เราหวังว่าคุณจะรู้วิธีการรีสตาร์ทคอมพิวเตอร์นะ

### ติดตั้ง PreMiD อีกครั้ง
บางครั้งมีบางอย่างผิดปกติกับไฟล์ ตัวอย่างสำหรับการติดตั้งดูได้[ที่นี่](/install)

### ลบข้อมูลด้วยตัวเอง
Windows: เขียน `%appdata%` ลงในแถบที่อยู่ของ File Explorer จากนั้นลบโฟลเดอร์ `PreMiD` ออกไป MacOS: ไปที่ `~/users/USER/~Library/Application Support/` จากนั้นลบโฟลเดอร์ `PreMiD` ออกไป

### McAfee ตรวจจับ PreMiD เป็นไวรัส (Windows)
นี้คือข้อมูลที่ผิดของ McAfee ทางเราได้เเจ้งปัญหานี้ไปเเล้ว สําหรับตอนนี้คุณสามารถรัน PreMiD จากการสเเกนโดยการทําขั้นตอนต่อไปนี้

> ถ้าคุณไม่มั่นใจในการทําขั้นตอนต่อไปนี้ คุณสามารถส่งข้อความมาให้เราได้ใน [#support](https://discord.premid.app/)เเละทีมงานของเราจะช่วยคุณ! 
> 
> {.is-warning}

1. เปิดเเอพ McAfee เเละกดที่ไอคอนการตั้งค่าตรงขวาบน<img src="https://i.imgur.com/rPLZn6c.png" width="500px" style="max-width:100%;" />
2. คลิ๊ก Quarantined Items (อันที่ 2 นับจากบนสุด)
3. ขยายมัน, เเละกดไอคอน `>` ก่อนไฟล์ที่ชื่อว่า "settings.bat"
4. เเน่ใจว่าที่อยู่ของ PreMiD อยู่ที่  "AppData\Local\Temp\PreMiD", ถ้าใช้กดเลือกมันเเละกู้คืนกลับมา<img src="https://i.imgur.com/9nvHmiI.png" width="500px" style="max-width:100%;" />
5. หลังจากนั้นคุณสามารถปิด  "Quarantined Items" เเละกดไอคอนการตั้งค่าอีกครั้งตรงขวาบน
6. กด "Real-Time Scanning" (อันที่ 3 นับจากบนสุด)
7. กดขยายมันเเล้วเลือก "เพิ่มไฟล์"
8. พิม "%appdata%" ตรงช่องค้นหา (URL Bar) เเละกด Enter<img src="https://i.imgur.com/2bchwLe.png" width="500px" style="max-width:100%;" />
9. เปิด PreMiD โฟลเดอร์ เเละเลือกไฟล์ PreMiD.exe  เเละรันมัน<img src="https://i.imgur.com/aHOyv3V.png" width="500px" style="max-width:100%;" />
10. McAfee ควรละเว้นไฟล์ของเรา, รัน PreMiD เเละน่าจะปกติเเล้ว!

### PreMiD status bugged on discord!
Don't worry. Press the <kbd>CTRL+R</kbd> (Windows) or <kbd>CMD+R</kbd> (MacOS) keybind while focused on your discord window to reload it.

<a name="linux"></a>

# การแก้ปัญหาบน Linux
### Ubuntu/Debian based distros
ถ้าคุณดาวน์โหลด Discord ผ่านทาง Snapcraft, RPC จะไม่ทำงาน You have to uninstall the Snapcraft version by executing `sudo snap remove discord` on a terminal, download **[Discord's Linux build](https://discordapp.com/api/download?platform=linux)** (**[or Discord Canary](https://discordapp.com/api/canary/download?platform=linux)**), then navigating to the directory you downloaded Discord to (usually `$HOME/Downloads`), then installing the package using `sudo dpkg -i discord-*.deb`. If AppImage doesn't work, you should consider checking our other packages by **[this link](https://packagecloud.io/premid/linux)**.

### Arch Linux based distros
Arch Linux based distros should use AUR (Arch User Repository) package that is named <code>premid</code> or <code>premid-git</code> (<em x-id="3">WARNING: This repository builds premid from our source code.</em>). If you don't want to install an AUR manager (yay etc.), you can check out our AppImage that is downloadable from our <strong x-id="1"><a href="https://github.com/premid/linux/releases">Linux repository</a></strong>.
<em x-id="3">Warning: the package in the <strong x-id="1">AUR</strong> repository is not maintained by us (as PreMiD organization), but by other people.</em>

### Port binding
You should know that <strong x-id="1">PreMiD</strong> binds itself to the port <strong x-id="1">3020</strong>. This is necessary for the Extension and the Application communicate. If <strong x-id="1">PreMiD</strong> shows you an error about this port, you should check if something is binded to the 3020 port by running <code>sudo lsof -i:3020</code> or <code>sudo netstat -tnlp | grep :3020</code> in your terminal. If some process is binded to it you should make sure to free the port and try running <code>PreMiD</code> again.

### PreMiD's AppImage doesn't launch at login
As we stated in our **Linux repository**, AppImage can't be launched at login. You can add it to autostart manually by doing these steps:
1. Make a file named <strong x-id="1">rc.local</strong> in the <code>/etc</code> directory.
2. Open this file in your favourite editor and paste given code with changing some things:
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

# การแก้ปัญหาบน MacOS
### Error creating directory
<img src="https://i.imgur.com/td92lf6.png" width="300px" style="max-width:100%;" />

ถ้าคุณพบเจอข้อผิดพลาดนี้นั้นหมายความว่าบัญชีผู้ใช้ของคุณไม่มีสิทธิผู้ดูแลและคุณต้องสร้างโฟลเดอร์ด้วยตนเองโดยการทำตามขั้นตอนดังนี้:
1. เปิด Finder จากนั้นเปิดโฟลเดอร์ **Applications**
2. คลิกขวาบนพื้นที่ว่างจากนั้นคลิก **สร้างโฟลเดอร์**
3. To this folder assign `PreMiD` name (remember about upper-cased letters).
4. เปิดตัวติดตั้งอีกครั้ง

# นั่นไม่ได้แก้ปัญหาของฉัน
กรุณาเปิด ticket ใน [#support](https://discord.premid.app/).