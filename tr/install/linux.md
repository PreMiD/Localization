---
title: Linux
description: Linux'ta PreMiD kurulumuna başlarken
published: true
date: 2020-11-10T18:06:56.520Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:14.124Z
---

Eklenti, uygulaması olmadan bir işe yaramayacağı için uygulamanın da de yüklü olması gerekmektedir.

> Aur kullanıcıları DoomLerd'in paketini kullanarak, söylediği gibi güvende kalabilirler. Kullanmanızı önermiyoruz fakat istiyorsanız yine de kullanabilirsiniz. DoomLerd'e depomuzu aur'a eklediği için teşekkürler. 
> 
> {.is-warning}

## İçindekiler

- **[Hakkında](#about)**
  - [İstatistikler](#stats)
  - [Requirements](#requirements)
  - Örnekler (yakında)
  - SSS (yakında)
  - Derleme (yakında)
  - [Destek](#support)
  - [Credits](#credits)
  - [Lisans](#license)
- **[Snapcraft](#snapcraft)** (kısacası: _asla_™️)
- **[Taşınabilir AppImage](#appimage)** (_ÖNERİLİR_)
  - [Kurulum Talimatları](#appimageinstall)
  - [Ek notlar](#appimagenotes)
- [**Red Hat Enterprise Linux (RHEL) tabanlı dağıtımlar**](#packagecloud)
- [**Debian ve Ubuntu tabanlı dağıtımlar**](#packagecloud)
- [**Arch Linux tabanlı dağıtımlar**](#arch)

<a name="about"></a>

## About

**PreMiD**, Discord'un RP kütüphaneleri kullanarak internette (ve birkaç uygulamada) yaptığınız işleri Discord profilinize **yansıtan** basit ve ayarlanabilir bir araçtır.

<a name="stats"></a>

### Stats

<table>
  <tr>
    <th>Dağıtım</th>
    <th>Toplam indirmeler</th>
    <th>En son sürüm</th>
  </tr>
  <tr>
    <td><a href="https://github.com/PreMiD/Linux/actions"><img src="https://github.com/PreMiD/Linux/workflows/CI/badge.svg?branch=master&event=push" alt="CI"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases"><img src="https://img.shields.io/github/downloads/PreMiD/Linux/total.svg?maxAge=86400" alt="Tüm Sürümler"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases/latest"><img src="https://img.shields.io/github/v/release/PreMiD/Linux.svg?maxAge=86400" alt="Latest release"><br><img src="https://img.shields.io/github/downloads/PreMiD/Linux/latest/total.svg?maxAge=86400" alt="GitHub sürümleri"></a></td>
  </tr>
</table>

<a name="requirements"></a>

### Requirements

Teknik olarak, Discord'un [resmi](https://discordapp.com/download) **uygulamasını** ( web veya snap sürümünü değil ) çalıştırabilen her dağıtım, PreMiD'i de çalıştırabilir.</br> Geçtiğimiz yıllarda fark etmiş olabileceğiniz üzere, bazı Linux dağıtımları 32-bit (ia32/i686/i386/x86) mimariler için desteğini sonlandırmaya başladı, ve bu yüzden, biz de öyle. Yine de, uygulamayı gerçekten 32-bit bir dağıtımda kullanmanız gerekiyorsa, kendiniz oluşturmayı deneyebilirsiniz.</br> Yazılım çatısı olarak Electron'u kullandığımız için (Discord da kullanıyor!), onun gereksinimleri bu uygulama için de geçerli :

- Ubuntu ≥ 12.04
- Fedora ≥ 21
- Debian ≥ 8

Diğer dağıtımların eski sürümlerinin destekleyip desteklemediği bilinmemektedir, o yüzden dağıtımınızı güncel tutun ve eğer dağıtımınız destek sağlıyorsa, daha stabil oldukları için **LTS (Long-Term Support)** sürümlerini kullanın (alpha sürümlerini tercih etmeyin).

<a name="support"></a>

### Support

<div>
  <a target="_blank" href="https://discord.premid.app/" title="Discord'umuza katıl!">
    <img height="75px" draggable="false" src="https://discordapp.com/api/guilds/493130730549805057/widget.png?style=banner2" alt="Join our Discord!">
  </a>
</div>

<a name="credits"></a>

### Credits

Teşekkürler:

- @nattadasu, @Rubensei, @Cairo2k18, zany130, Immanuel D, Friskytrash, Alexandre (ve adını unuttuğum diğer bir kaç kişi) gecelik güncellemerde geri bildirim yolladıkları için.
- Gentoo sürümlerini yönettiği için @apriluwu'ya
- Eskiden Arch User Repository paketlerini yönettikleri için @SlimShadyIAm ve naka'ya
- Çeşitli paketler için Electron topluluğuna
- Ve bu projeye herhangi bir yolla katkısı olan herkese.

<a name="license"></a>

### License

[![FOSSA Durumu](https://app.fossa.io/api/projects/git%2Bgithub.com%2FPreMiD%2FLinux.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FPreMiD%2FLinux?ref=badge_large)

<img src="https://i.imgur.com/ACAxtmA.png" width="100" height="100" align="right"></img>
<a name="snapcraft"></a>

## Taşınabilir Uygulama Görüntüsü

AppImage paketi eğer Discord uygulamanız çalışıyor, ama diğer PreMiD paketleri (.deb, .rpm, vb.) çalışmıyorsa önerilir.

<a name="appimageinstall"></a>

### Installation instructions

```bash
wget https://github.com/PreMiD/Linux/releases/latest/download/PreMiD-Portable.AppImage && chmod a+x PreMiD*.AppImage
```

```bash
# Çift tıklamanız veya şunu çalıştırmanız yeterli:
./PreMiD*.AppImage
```

<a name="appimagenotes"></a>

### Additional notes

Sadece PreMiD'i denemek istiyorsanız veya kurmak istemiyorsanız, bu seçenek en iyisi, ayrıca her zaman güncel ama _SİSTEM AÇILINCA OTOMATİK BAŞLAMIYOR!_</br>Eğer her başlangıçta çalıştırmaktan yorulduysanız, (dağıtımınıza göre) diğer paketleri kullanın.

<img src="https://raw.githubusercontent.com/PreMiD/Linux/master/.github/packagecloud.png" width="100" height="100" align="right"></img>
<a name="packagecloud"></a>

# PackageCloud

deb/rpm paketlerini, packagecloud depomuzda yayınlıyoruz. https://packagecloud.io/PreMiD/Linux adresini ziyaret ederek sana uygun olan deb/rpm paketini indirebilir veya otomatik bir kod kullanabilirsin.

**Ubuntu/Debian** için:

```bash
curl -s https://packagecloud.io/install/repositories/PreMiD/Linux/script.deb.sh | sudo bash
```

**Fedora/CentOS/RedHat** için:

```bash
curl -s https://packagecloud.io/install/repositories/PreMiD/Linux/script.rpm.sh | sudo bash
```

Eğer komut çalışmazsa **deb/rpm** paketini packagecloud depomuzdan indirebilirsin veya bazı ayarları geçersiz kılın.

<a name="arch"></a>
<img src="https://raw.githubusercontent.com/PreMiD/Linux/86ae2fbd49499785281f388a5305b06e0d3ecfea/.github/iusearchbtw.svg" width="100" height="100" align="right"></img>

## Arch Linux based distributions

[Arch User Repository](https://aur.archlinux.org/packages/premid) kullanır;</br> Desteklenen dağıtımlar: _dağıtımın kendisi_, Manjaro, Anarchy, Artix, Arco, ArchLabs, Endeavour, Archman, BlackArch, Liri OS ve [AUR üzerinden kuruluma destek veren her bir dağıtım](https://wiki.archlinux.org/index.php/Arch-based_distributions#Active).

<a name="archinstall"></a>

### Installation instructions

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
(...) olayı anladınız
```

veya ne yaptığınızı biliyorsanız, manuel olarak [Arch User Repository](https://aur.archlinux.org/packages/premid) üzerinden.

<a name="archnotes"></a>

### Additional notes

Dağıtımınız pacman kullanıyorsa, AUR depolarına ulaşmak için bir yardımcı kurmanız gereklidir. Eğer birine sahip değilseniz, Yay kullanmanız önerilir, şunu çalıştırın:

```bash
git clone https://aur.archlinux.org/yay.git && cd yay && makepkg -si
```

```bash
yay -S premid
```

Diğer AUR/Pacman yardımcıları da işinize yarayabilir ancak hepsinin farklı çalışma biçimi olduğundan dolayı sizin için hangisi çalışırsa onu kullanabilirsiniz.