---
title: การแก้ปัญหา
description: ทุกอย่างเพื่อใช้แก้ปัญหาของคุณ
published: true
date: 2020-09-01T18:31:28.780Z
tags:
editor: markdown
---

> ตรวจสอบให้แน่ใจว่าคุณได้ติดตั้งส่วนขยาย ** และ ** แอปพลิเคชั่นแล้ว! 
> 
> {.is-warning}

### คุณได้ใช้ Discord รึเปล่า?
PreMiD จะ**ไม่**ทํางานสําหรับ Brower Discord คุณต้องโหลดเเอพ Discord ตรงนี้[](https://discord.com/download)

### คุณได้ใช้การตั้งค่าของ Presence?
Presence หลายอย่าง (พวก `Twitch` เเละ `SoundClond`) มีปัญหาต่อส่วนขยาย ปัญหาพวกนี้มาจากส่วนขยายไม่รับค่าดั้งเดิมในการตั้งค่า

วิธีเเก้นั้นคือ เปิดการใช้งานอันบนสุดของ Setting![presencesettings.gif](/presencesettings.gif)

### โหลดหน้านี้ใหม่
คุณสามารถกด <kbd>CTRL+R</kbd>/<kbd>F5</kbd> (Windows) หรือ <kbd>CMD+R</kbd> (MacOS) บนแป้นพิมพ์ของคุณเพื่อรีโหลดหน้าเว็บ

### รีสตาร์ทบราวเซอร์ของคุณ
<kbd>Alt</kbd>+<kbd>F4</kbd> (วินโดวส์) หรือ <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS) ได้ผลเยี่ยมมากเหมือนกัน (คุณตัองเริ่มบราวเซอร์ใหม่อีกครั้งเพื่อความชัดเจน)

### ตรวจสอบให้แน่ใจว่าคุณได้เปิดกิจกรรมการเล่นเกมในการตั้งค่า Discord หรือเปล่า
**ตั้งค่าบัญชีผู้ใช้** > **กิจกรรมการเล่นเกม** ![gameactivity_edited.png](/gameactivity_edited.png)

### รีสตาร์ท PreMiD (แอพพลิเคชั่น)
![quit.png](/quit.png) คุณต้องรีสตาร์ท PreMiD หลังจากนั้น

### รีโหลด/รีสตาร์ท ดิสคอร์ด
กด <kbd>CTRL+R</kbd> (Windows) หรือ <kbd>CMD+R</kbd> (MacOS) บนแป้นพิมพ์ของคุณ หรือ รีสตาร์ท Discord ด้วยตัวเองก็ได้

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
สำหรับระบบปฎิบัติการ Windows: ไปที่    ` C:\Users\USER\AppData\Roaming\`` ` และลบโฟลเดอร์ `PreMiD` ออกไป <br>ระบบปฎิบัติการ MacOS: ไปที่ `~/users/USER/~Library/Application Support/<code> และลบโฟลเดอร์ `PreMiD ออกไป

### ใน Ubuntu/Debain อิงตาม distros
ถ้าคุณดาวน์โหลด Discord ผ่านทาง Snapcraft, RPC จะไม่ทำงาน คุณจะต้องถอนการติดตั้ง Discord เวอร์ชัน Snapcraft โดยการใช้คำสั่ง `sudo snap remove discord` บน Terminal แล้วดาวน์โหลด [Discord สำหรับ Linux](https://discordapp.com/api/download?platform=linux) ([หรือ Discord Canary](https://discordapp.comapi/canary/download?platform=linux)) หลังจากนั้น ไปยังตำแหน่งที่คุณดาวน์โหลด Discord ไว้ (ส่วนมากจะเป็น `$HOME/Downloads`) แล้วติดตั้งโดยใช้คำสั่ง `sudo dpkg -i discord-*.deb`

### McAfee ตรวจจับ PreMiD เป็นไวรัส (Windows)
นี้คือข้อมูลที่ผิดของ McAfee ทางเราได้เเจ้งปัญหานี้ไปเเล้ว สําหรับตอนนี้คุณสามารถรัน PreMiD จากการสเเกนโดยการทําขั้นตอนต่อไปนี้

> ถ้าคุณไม่มั่นใจในการทําขั้นตอนต่อไปนี้ คุณสามารถส่งข้อความมาให้เราได้ใน [#support](https://discord.gg/WvfVZ8T)เเละทีมงานของเราจะช่วยคุณ! 
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

### นั่นไม่ได้แก้ปัญหาของฉัน
กรุณาเปิดตั๋วใน [#support](https://discord.premid.app/).