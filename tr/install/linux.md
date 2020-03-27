---
title: Linux
description: Linux'ta PreMiD kurulumuna başlarken
published: true
date: 2020-02-12T22:24:41.238Z
tags: 
---

> İlerlemeden önce sisteminizin tüm [gereksinimleri](/install/requirements) karşıladığından emin olun.{.is-info}

Eklenti, uygulaması olmadan bir işe yaramayacağı için uygulamanın da de yüklü olması gerekmektedir.

# Yükleme
> Bu işletim sistemi için resmi bir yükleyici yoktur. Bu, resmi bir destek olmadığı anlamına gelir. Ancak [Discord sunucumuzdaki ](https://discord.gg/premid/) diğer Linux kullanıcılarıyla bilgi alışverişi yapabilirsiniz

1. [NodeJS](https://nodejs.org/en/)'yi kurun.
2. Bir terminal açın.
3. Depoyu klonlayın: `git clone https://github.com/PreMiD/PreMiD.git`
4. Klonlanan klasöre girin: `cd PreMiD/src`
5. Bağımlılıkları ve uygulamayı yükleyin: `npm install`
6. Bir üst klasöre dönün: `cd ..`
7. Şunu yazın: `npm run init`
8. Uygulamayı çalıştırın: `npm start`

Uygulama otomatik olarak başlayacaktır. Menü çubuğunuzdaki simgeyi kontrol edin.

> Aşağıdaki yöntemler kullanımdan kaldırılmıştır ve artık önerilmemektedir. Bunları kullanmak tamamen sizin kendi sorumluluğunuzdadır. 
> 
> {.is-warning}

## Arch Linux
Eğer Arch bazlı bir Linux dağıtımı kullanıyorsanız, PreMiD paketini Arch'ın kullanıcı deposu olan [AUR](https://aur.archlinux.org/packages/premid/)'dan `premid` ismiyle aratarak edinebilirsiniz. En sevdiğiniz paket yöneticinizi kullanarak dosyaları bu kaynaktan aldırın!

## Diğer dağıtımlar
- Yüklemek için şu kodu konsolunuza girin: `wget -qO- http://bit.ly/install-premid | bash` veya `curl -sL https://bit.ly/install-premid | bash`, kurulum için bekleyin ve uygulama çekmecenizden "PreMiD"i arayın, yükleme işlemi tamamlanmış demektir.
- Eğer PreMİD'i kaldırmak istersenin bunu çalıştırabilirsiniz `wget -qO- http://bit.ly/uninstall-premid | bash` veya `curl -sL https://bit.ly/uninstall-premid | bash`.

> Eklentiyi [eklemeyi ](/install) unutmayın.{.is-warning}

![](https://a.icons8.com/TqgWTTfw/Oy7xHF/svg.svg) {.align-abstopright}