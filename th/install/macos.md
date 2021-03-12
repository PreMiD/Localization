---
title: macOS
description: Getting started with a PreMiD installation on macOS
published: true
date: 2020-02-12T22:08:37.439Z
tags:
---

> ก่อนดำเนินการใด ๆ เพิ่มเติมตรวจสอบให้แน่ใจว่าระบบของคุณตรงตาม [requirements](/install/requirements) ไหม 
> 
> {.is-info}

การติดตั้งแอพพลิเคชั่นนั้นสำคัญมากเพราะส่วนขยายไม่สามารถทำอะไรได้เอง

# ติดตั้ง
1. ไปที่หน้าดาวน์โหลดของเรา [คลิกที่นี่](https://premid.app/downloads).
2. Choose **OS X**.
3. Extract the archive if necessary.
4. เปิดไฟล์ติดตั้งที่ดาวน์โหลดแล้ว
5. A **security alert** may appear if you're installing PreMiD for the first time. If it does, follow the steps under [Allow apps from unidentified developers](https://docs.premid.app/install/macos#allow-apps-from-unidentified-developers)
> This is because we do not have a Code Signing Certificate (CSC). [สนับสนุนพวกเรา](https://www.patreon.com/Timeraa){.is-info}
6. Choose open when prompted.
7. Grant access to connections through **Firewall** and control **System Events** when prompted.

แอปพลิเคชันจะเริ่มต้นโดยอัตโนมัติ Check for the symbol in your menu bar.

> อย่าลืม [เพิ่ม**ส่วนขยาย**](/install) 
> 
> {.is-warning}

![](https://img.icons8.com/color/2x/mac-logo.png) {.align-abstopright}

## Allow apps from unidentified developers
Steps for macOS Big Sur (11.0+):
1. Right click on our installer.
2. Click open in the dropdown menu.
3. Click open in popup.

Steps for older macOS versions:
1. Open System Preferences.
2. Go to the Security & Privacy tab.
3. Click on the lock and enter your password or scan your fingerprint so you can make changes.
4. Change the setting for 'Allow apps downloaded from' to 'App Store and identified developers' from just 'App Store'.