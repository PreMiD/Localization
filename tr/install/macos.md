---
title: macOS
description: MacOS'ta PreMiD kurulumuna başlarken
published: true
date: 2020-02-12T22:08:37.439Z
tags:
---

> İlerlemeden önce sisteminizin tüm gereksinimleri karşıladığından emin olun. 
> 
> {.is-info}

Eklenti, uygulaması olmadan bir işe yaramayacağı için uygulamanın da de yüklü olması gerekmektedir.

# Yükleme
1. [Buraya](https://premid.app/downloads) tıklayarak "İndir" sayfamıza gidin.
2. **OS X**'i seçin.
3. Gerekirse arşivi çıkartın.
4. Yükleyiciyi açın.
5. Eğer PreMiD'i ilk defa yüklüyorsanız karşınıza bir **güvenlik uyarısı** çıkacaktır. Bunu düzeltmek için **Ayarlar** > **Güvenlik** > **Genel** > **Yine de Çalıştır** adımlarını takip edebilirsiniz.
> Bunun nedeni Code Signing Certificate (CSC) sertfikamızın olmamasıdır. Bunu karşılayabilmemiz için [bize destek olun](https://www.patreon.com/Timeraa).{.is-info}
6. Sorulduğunda uygulamayı çalıştır seçeneğini seçin.
7. **Güvenlik Duvarı**ndan geçebilmesi ve **Sistem Olayları**nı kontrol edebilmesi için size sorulduğunda uygulamaya bu izinleri verin.

Uygulama otomatik olarak başlayacaktır. Menü çubuğunuzdaki simgeyi kontrol edin.

> **[Eklentiyi](/install)** de eklemeyi unutmayın. 
> 
> {.is-warning}

![](https://img.icons8.com/color/2x/mac-logo.png) {.align-abstopright}

## Tanımlanamayan geliştiricilerin uygulamalarına izin ver
Steps for macOS BigSur (11.0+):
1. Right click on our installer.
2. Click open in the dropdown menu.
3. Click open in popup.

Steps for older macOS versions:
1. Open System Preferences.
2. Go to the Security & Privacy tab.
3. Click on the lock and enter your password or scan your fingerprint so you can make changes.
4. Change the setting for 'Allow apps downloaded from' to 'App Store and identified developers' from just 'App Store'.