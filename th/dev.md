---
title: เริ่มต้น
description: คำแนะนำเล็ก ๆ น้อย ๆ สำหรับผู้ที่ได้รับโค้ดเมื่อเร็ว ๆ นี้
published: true
date: 2020-02-08T04:46:24.725Z
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
3. เปิดในโปรแกรมแก้ไขโค้ดของคุณ

# การติดตั้ง dependencies
> ตรวจสอบให้แน่ใจว่าคุณได้ติดตั้ง[npm](https://www.npmjs.com/) (Node Package Manager) มันจะติดตั้งเองโดยอัตโนมัติหากคุณมี [Node](https://nodejs.org/en/) ที่ติดตั้งแล้ว 
> 
> {.is-warning}

- เปิดเทอร์มินัลในที่เก็บของคุณแล้วพิมพ์ `npm i`.
- หากต้องการอัปเดตประเภท  dependencies ให้พิมพ์  `npm update`.

> โปรดทราบว่าการอัปเดต dependencies อาจทำให้ล่าช้าได้ 
> 
> {.is-danger}

# วิสัยทัศน์การเขียนโค้ด
กรุณารักษาโครงสร้าง เราไม่ต้องการจัดระเบียบไฟล์ในโปรเจ็คของเรา มันอาจจะทำให้วุ่นวาย

# ส่งความฝันของคุณ
Just open a Pull Request on one of our [GitHub repositories](https://github.com/PreMiD/) you want to contribute to. We will take care of your baby, don't worry. If this is your first time making a pull request, take a look at this [tutorial](https://help.github.com/en/articles/creating-a-pull-request).

# Getting approved
Our main goal is to work with users so try to be as much friendly, respectful and informative as possible. Just ping a Developer in our [Discord server](https://discord.gg/PreMiD) to get that review on GitHub, or not. Depends on the code quality, appearance of assets and regular functionality.