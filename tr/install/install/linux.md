---
title: Linux
description: Linux'ta PreMiD kurulumuna başlarken
published: true
date: 2020-01-18T20:32:37.753Z
tags:
---

> İlerlemeden önce sisteminizin tüm [gereksinimleri](/install/requirements) karşıladığından emin olun.{.is-info}

The installation of the application is very important as the extension can not do anything by itself.

# Yükle
> Bu işletim sistemi için resmi bir yükleyici yoktur. Bu, resmi bir destek olmadığı anlamına gelir. Ancak [Discord sunucumuzdaki ](https://discord.gg/premid/) diğer Linux kullanıcılarıyla bilgi alışverişi yapabilirsiniz

1. </a>NodeJS'yi</0> kurun.
2. Bir terminal açın.
3. Depoyu klonlayın: `git clone https://github.com/Timeraa/PreMiD.git`
4. Çalışma dizinini değiştirin: `cd PreMiD/src`
5. Bağımlılıkları ve uygulamayı yükleyin`npm install`
6. Çalışma dizinini değiştirin:`cd..`
7. Yazın: `npm run init`
8. Uygulamayı çalıştırın: `npm start`

Uygulama otomatik olarak başlayacaktır. Menü çubuğunuzdaki sembolü kontrol edin.

> Aşağıdaki yöntemler kullanımdan kaldırılmıştır ve artık önerilmemektedir. Kendi sorumluluğunuzdadır. 
> 
> {.is-warning}

## Arch Linux
Eğer Arch Linux veya Arch tabanlı bir Linux dağıtımı kullanıyorsanız [AUR](https://aur.archlinux.org/packages/premid/) depolarından `premid` paketini bulabilir ve indirebilirsiniz. En sevdiğiniz paket yöneticinizi kullanarak dosyaları bu kaynaktan aldırın!

## Diğer dağıtımlar
- Kurulum betiği: `wget -qO- http://bit.ly/install-premid | bash` veya `curl -sL https://bit.ly/install-premid | bash`, kurulum için bekleyin,Masaüstünüzde oluşturulan "PreMiD" kısayolunu çift tıklayın, hepsi bu kadar!
- Eğer PreMİD'i kaldırmak istersenin bunu çalıştırabilirsiniz `wget -qO- http://bit.ly/uninstall-premid | bash` veya `curl -sL https://bit.ly/uninstall-premid | bash`.

> Eklentiyi [eklemeyi ](/install) unutmayın.{.is-warning}

![](https://a.icons8.com/TqgWTTfw/Oy7xHF/svg.svg) {.align-abstopright}