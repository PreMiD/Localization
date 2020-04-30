---
title: เริ่มต้น
description: คำแนะนำเล็ก ๆ น้อย ๆ สำหรับผู้ที่ได้รับโค้ดเมื่อเร็ว ๆ นี้
published: true
date: 2020-04-09T14:21:58.246Z
tags:
---

> ต้องมีโปรแกรมแก้ไขซอร์สโค้ด เราแนะนำ Visual Studio Code 
> 
> {.is-info}

# สิ่งที่จำเป็นที่จะต้องติดตั้ง
1. ติดตั้ง [Git](https://git-scm.com/).
2. ติดตั้ง [Node](https://nodejs.org/en/) (พร้อมกับ [npm](https://www.npmjs.com/))
3. ติดตั้ง [TypeScript](https://www.typescriptlang.org/index.html#download-links) (เปิดเทอร์มินัลแล้วพิมพ์ `npm install -g typescript`)

# การโคลนโปรเจ็ค
1. เปิดเทอร์มินัลแล้วพิมพ์ `git clone URL`  **แทนที่ URL ด้วยลิงก์ที่คุณต้องการโคลน** ปล. `git clone https://github.com/PreMiD/PreMiD`
2. เลือกโฟลเดอร์ที่คุณต้องการ
3. Open it in your code editor.

# การติดตั้ง dependencies
> ตรวจสอบให้แน่ใจว่าคุณได้ติดตั้ง[npm](https://www.npmjs.com/) (Node Package Manager) มันจะติดตั้งเองโดยอัตโนมัติหากคุณมี [Node](https://nodejs.org/en/) ที่ติดตั้งแล้ว 
> 
> {.is-warning}

- เปิดเทอร์มินัลในที่เก็บของคุณแล้วพิมพ์ `npm i`.
- หากต้องการอัปเดตประเภท  dependencies ให้พิมพ์  `npm update`.

> Be aware that updating the dependencies could break a lot, or not - testing is required! 
> 
> {.is-danger}

# วิสัยทัศน์การเขียนโค้ด
กรุณารักษาโครงสร้าง เราไม่ต้องการจัดระเบียบไฟล์ในโปรเจ็คของเรา มันอาจจะทำให้วุ่นวาย

# ส่งความฝันของคุณ
เพียงเปิดขอ Pull Request มาให้เราที่
 คุณต้องการมีส่วนร่วม เราจะดูแลลูกน้อยของคุณไม่ต้องกังวลไป หากนี่เป็นครั้งแรกที่คุณทำแล้วจะขอ pull request ให้ดูที่นี่ [ตัวอย่าง](https://help.github.com/en/articles/creating-a-pull-request).</p> 



# ได้รับการอนุมัติ

เป้าหมายหลักของเราคือการทำงานกับผู้ใช้ดังนั้นพยายามเป็นมิตรเคารพและให้ข้อมูลมากที่สุด เพียงแค่ปิงไปหาผู้พัฒนาในของเราที่ [Discord server](https://discord.gg/WvfVZ8T) เพื่อรับการตรวจทานบน GitHub หรือไม่ก็ ขึ้นอยู่กับคุณภาพของโค้ดลักษณะของ assets และฟังก์ชันการทำงานปกติมั้ย