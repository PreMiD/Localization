---
title: การแก้ปัญหา
description: ทุกอย่างเพื่อแก้ปัญหาของคุณ
published: true
date: 2020-04-20T11:16:55.141Z
tags:
---

> ตรวจสอบให้แน่ใจว่าคุณได้ติดตั้งส่วนขยาย <strong x-id = "1"> และ </strong> แอปพลิเคชั่นแล้ว! 
> 
> {.is-warning}

### โหลดหน้านี้ใหม่
You can press <kbd>CTRL+R</kbd>/<kbd>F5</kbd> (Windows) or <kbd>CMD+R</kbd> (MacOS) on your keyboard too instead of searching for the refresh button.

### รีสตาร์ทบราวเซอร์ของคุณ
<kbd>Alt</kbd>+<kbd>F4</kbd> (วินโดวส์) หรือ <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS) ได้ผลเยี่ยมมากเหมือนกัน (คุณตัองเริ่มบราวเซอร์ใหม่อีกครั้งเพื่อความชัดเจน)

### ตรวจสอบให้แน่ใจว่าคุณได้เปิดกิจกรรมการเล่นเกมในการตั้งค่า Discord หรือเปล่า
**ตั้งค่าบัญชีผู้ใช้** > **กิจกรรมการเล่นเกม** ![gameactivity_edited.png](/gameactivity_edited.png)

### รีสตาร์ท PreMiD (แอพพลิเคชั่น)
![quit.png](/quit.png) คุณต้องรีสตาร์ท PreMiD หลังจากนั้น

### รีโหลด/รีสตาร์ท ดิสคอร์ด
Press <kbd>CTRL+R</kbd> (Windows) or <kbd>CMD+R</kbd> (MacOS) on your keyboard or restart Discord manually.

### ต้องแน่ใจว่า Discord ไม่ได้เปิดแบบ Administrator
สำคัญมากๆ Discord RPC จะไม่ทำงานถ้าคุณเปิด Discord แบบ Administrator

### ตรวจสอบว่าคุณมีโปรแกรมป้องกันไวรัสหรือไฟร์วอลล์ทำงานบนคอมพิวเตอร์ของคุณหรือไม่ ?
บางครั้งโปรแกรมป้องกันไวรัสและไฟร์วอลล์ปิดกั้นแอปพลิเคชันซึ่งกำลังสร้างโฮสต์เซิร์ฟเวอร์หรือแค่เชื่อมต่ออินเทอร์เน็ต เราใช้เซิร์ฟเวอร์ Local เพื่อรับและส่งผ่านข้อมูลระหว่างแอปและส่วนขยายของเราดังนั้นหากคุณปิดกั้นความสามารถของแอปในการส่ง ผ่านข้อมูล คุณอาจไม่สามารถใช้ PreMiD ได้

### ปิดการใช้งาน addons
ปิดการใช้งาน addons ทั้งหมดของคุณและดูว่าใช้งานได้หรือไม่ ถ้าได้ลองเปิดใช้งาน addons ของคุณทีละตัวและแจ้งให้เราทราบว่า addons ตัวไหนหยุด PreMiD

### รีสตาร์ทคอมพิวเตอร์ของคุณ
เราหวังว่าคุณจะรู้วิธีการรีสตาร์ทคอมพิวเตอร์นะ

### ติดตั้ง PreMiD อีกครั้ง
บางครั้งมีบางอย่างผิดปกติกับไฟล์ ตัวอย่างสำหรับการติดตั้งดูได้[ที่นี่](/install)

### ลบข้อมูลด้วยตัวเอง
Windows:    `C:\Users\USER\AppData\Roaming\`` and delete the folder`PreMiD`.
<br>ระบบปฎิบัติการ MacOS: ไปที่ <code>~/users/USER/~Library/Application Support/<code> และลบโฟลเดอร์ `PreMiD ออกไป

### On Ubuntu/Debian based distros
If you have downloaded Discord through Snapcraft, RPC will not work. You have to uninstall the Snapcraft version by executing `sudo snap remove discord` on a terminal, download [Discord's Linux build](https://discordapp.com/api/download?platform=linux) ([or Discord Canary](https://discordapp.com/api/canary/download?platform=linux)), then navigating to the directory you downloaded Discord to (usually `$HOME/Downloads`), then installing the package using `sudo dpkg -i discord-*.deb`.

### นั่นไม่ได้แก้ปัญหาของฉัน
กรุณาเปิดตั๋วใน [#support](https://discord.gg/WvfVZ8T).