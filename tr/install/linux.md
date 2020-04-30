---
title: Linux
description: Linux'ta PreMiD kurulumuna başlarken
published: true
date: 2020-04-27T12:52:46.261Z
tags:
---

> Linux'ta otomatik başlatma seçeneği artık eklenti yerine uygulama üzerindedir.{.is-warning}

Eklenti, uygulaması olmadan bir işe yaramayacağı için uygulamanın da de yüklü olması gerekmektedir.

## İçindekiler

- **[Hakkında](#about)**
  - [İstatistikler](#stats)
  - [Gereksinimler](#requirements)
  - Örnekler (yakında)
  - SSS (yakında)
  - Oluşturma (yakında)
  - [Destek](#support)
  - [Katkıda Bulunanlar](#credits)
  - [Lisans](#license)
- **[Snapcraft](#snapcraft)** (kısacası: _asla_™️)
- **[Taşınabilir AppImage](#portable-appimage)** (_ÖNERİLİR_)
  - [Kurulum Talimatları](#installation-instructions)
  - [Ek notlar](#additional-notes)
- **Red Hat Enterprise Linux (RHEL) tabanlı dağıtımlar** (yakında, şimdilik [bunu](#portable-appimage) kullanın)
- **Debian and Ubuntu tabanlı dağıtımlar** (yakında, şimdilik [bunu](#portable-appimage) kullanın)
- **[Arch Linux tabanlı dağıtımlar](#arch-linux-based-distributions)**
  - [Kurulum Talimatları](#installation-instructions-1)
  - [Ek notlar](#additional-notes-1)
- **[Gentoo Linux](#gentoo-linux)**
  - [Kurulum Talimatları](#installation-instructions-2)
  - [Ek notlar](#additional-notes-2)

<a name="about"></a>

## Hakkında

**PreMiD** is a simple, configurable utility that uses Discord's RP ( Rich Presence ) library which allows you to show what you're doing on the web ( and a few programs ) in your Discord profile as **playing status**.

<a name="stats"></a>

### İstatistikler

<table>
  <tr>
    <th>Dağıtım</th>
    <th>Toplam indirmeler</th>
    <th>En son sürüm</th>
  </tr>
  <tr>
    <td><a href="https://github.com/PreMiD/Linux/actions"><img src="https://github.com/PreMiD/Linux/workflows/CI/badge.svg?branch=master&event=push" alt="CI"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases"><img src="https://img.shields.io/github/downloads/PreMiD/Linux/total.svg?maxAge=86400" alt="Tüm Sürümler"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases/latest"><img src="https://img.shields.io/github/v/release/PreMiD/Linux.svg?maxAge=86400" alt="En son sürüm"><br><img src="https://img.shields.io/github/downloads/PreMiD/Linux/latest/total.svg?maxAge=86400" alt="Github sürümleri"></a></td>
  </tr>
</table>

<a name="requirements"></a>

### Gereksinimler

Teknik olarak, Discord'un [resmi](https://discordapp.com/download) **uygulamasını** ( web veya snap sürümünü değil ) çalıştırabilen her dağıtım, PreMiD'i de çalıştırabilir.</br> Geçtiğimiz yıllarda fark etmiş olabileceğiniz üzere, bazı Linux dağıtımları 32-bit (ia32/i686/i386/x86) mimariler için desteğini sonlandırmaya başladı, ve bu yüzden, biz de öyle. Yine de, uygulamayı gerçekten 32-bit bir dağıtımda kullanmanız gerekiyorsa, kendiniz oluşturmayı deneyebilirsiniz.</br> Yazılım çatısı olarak Electron'u kullandığımız için (Discord da kullanıyor!), onun gereksinimleri bu uygulama için de geçerli :

- Ubuntu ≥ 12.04
- Fedora ≥ 21
- Debian ≥ 8

Diğer dağıtımların eski sürümlerinin destekleyip desteklemediği bilinmemektedir, o yüzden dağıtımınızı güncel tutun ve eğer dağıtımınız destek sağlıyorsa, daha stabil oldukları için **LTS (Long-Term Support)** sürümlerini kullanın (alpha sürümlerini tercih etmeyin).

<a name="support"></a>

### Destek

<div>
  <a target="_blank" href="https://discord.gg/WvfVZ8T" title="Discord'umuza katıl!">
    <img height="75px" draggable="false" src="https://discordapp.com/api/guilds/493130730549805057/widget.png?style=banner2" alt="Discord'umuza katıl!">
  </a>
</div>

<a name="credits"></a>

### Katkıda Bulunanlar

Teşekkürler:

- @nattadasu, @Rubensei, @Cairo2k18, zany130, Immanuel D, Friskytrash, Alexandre (ve adını unuttuğum diğer bir kaç kişi) gecelik güncellemerde geri bildirim yolladıkları için.
- Gentoo sürümlerini yönettiği için @apriluwu'ya
- Eskiden Arch User Repository paketlerini yönettikleri için @SlimShadyIAm ve naka'ya
- Çeşitli paketler için Electron topluluğuna
- Ve bu projeye herhangi bir yolla katkısı olan herkese.

<a name="license"></a>

### Lisans

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FPreMiD%2FLinux.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FPreMiD%2FLinux?ref=badge_large)

<img src="https://i.imgur.com/ACAxtmA.png" width="100" height="100" align="right"></img>
<a name="snapcraft"></a>

## Snapcraft

Snap'in yapısı PreMiD'e ve eklentiye düzgün bir şekilde erişimini engellediği için, muhtemelen asla,</br> Yine de, biri yapabilirse minnettar oluruz. Herhangi bir fikir veya pull request'e açığız.</br> Not: Ayrıca "classic confinement" işe yaramıyor, o yüzden bu konuda bir öneri yazmak için uğraşmayın.

<img src="https://i.imgur.com/qEZOOfU.png" width="100" height="100" align="right"></img>
<a name="appimage"></a>

## Taşınabilir AppImage

AppImage paketi eğer Discord uygulamanız çalışıyor, ama diğer PreMiD paketleri (.deb, .rpm, vb.) çalışmıyorsa önerilir.

<a name="appimageinstall"></a>

### Kurulum Talimatları

```bash
wget https://github.com/PreMiD/Linux/releases/latest/download/PreMiD-Portable.AppImage && chmod a+x PreMiD*.AppImage
```

```bash
# Çift tıklamanız veya şunu çalıştırmanız yeterli:
./PreMiD*.AppImage
```

<a name="appimagenotes"></a>

### Ek notlar

Sadece PreMiD'i denemek istiyorsanız veya kurmak istemiyorsanız, bu seçenek en iyisi, ayrıca her zaman güncel ama _SİSTEM AÇILINCA OTOMATİK BAŞLAMIYOR!_</br>Eğer her başlangıçta çalıştırmaktan yorulduysanız, (dağıtımınıza göre) diğer paketleri kullanın.

<a name="arch"></a>
<img src="https://i.imgur.com/NBevNlU.png" width="100" height="100" align="right"></img>

## Arch Linux tabanlı dağıtımlar

[Arch User Repository](https://aur.archlinux.org/packages/premid) kullanır;</br> Desteklenen dağıtımlar: _dağıtımın kendisi_, Manjaro, Anarchy, Artix, Arco, ArchLabs, Endeavour, Archman, BlackArch, Liri OS ve [AUR üzerinden kuruluma destek veren her bir dağıtım](https://wiki.archlinux.org/index.php/Arch-based_distributions#Active).

<a name="archinstall"></a>

### Kurulum Talimatları

```bash
# yay kullanarak (önerilen)
yay - S premid
```

```bash
# pakku kullanarak
pakku -S premid
```

```bash
# trizen kullanarak
trizen -S premid
```

```bash
# pacaur kullanarak
pacaur -S premid
```

```bash
# ... olayı anladınız
```

veya ne yaptığınızı biliyorsanız, manuel olarak [Arch User Repository](https://aur.archlinux.org/packages/premid) üzerinden.

<a name="archnotes"></a>

### Ek notlar

Dağıtımınız pacman kullanıyorsa, AUR depolarına ulaşmak için bir yardımcı kurmanız gereklidir. Eğer birine sahip değilseniz, Yay kullanmanız önerilir, şunu çalıştırın :

```bash
git clone https://aur.archlinux.org/yay.git && cd yay && makepkg -si
```

```bash
yay -S premid
```

Other AUR/Pacman helpers work as well, although each one's functionality is different so you may face issues while using them.

<img src="https://i.imgur.com/Kv1X2to.png" width="100" height="100" align="right"></img>
<a name="gentoo"></a>

## Gentoo Linux

Same applies to its derivatives, such as ColverOS, Clip-OS, Sabayon, Bicom Systems PBXware, [etc](https://wiki.gentoo.org/wiki/Distributions_based_on_Gentoo#Active_projects).

<a name="gentooinstall"></a>

### Kurulum Talimatları

```bash
# Add the overlay using layman
layman -S && layman -a apriluwu
```

```bash
# Install via portage
emerge -av app-misc/premid
```

<a name="gentoonotes"></a>

### Ek notlar

The shown install command uses layman, it is in the official repositories through `app-portage/layman`.<br> To get updates you will have to sync the overlay from time to time, you can do this with

```bash
layman -S
```