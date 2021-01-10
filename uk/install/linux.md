---
title: Linux
description: Початок роботи із встановленням PreMiD на Linux
published: true
date: 2020-11-10T18:06:56.520Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:14.124Z
---

Встановлення програми дуже важливе, оскільки розширення не може робити нічого самостійно.

> Aur users that use DoomLerd's package should be safe as he says. We are not recommending to use it, but if you want you can still use it. Thanks to DoomLerd for handling aur repo still. 
> 
> {.is-warning}

## Зміст

- **[Про програму](#about)**
  - [Статистика](#stats)
  - [Requirements](#requirements)
  - Приклади (скоро)
  - Часті питання (скоро)
  - Будівництво (скоро)
  - [Підтримка](#support)
  - [Credits](#credits)
  - [Ліцензія](#license)
- **[Snapcraft](#snapcraft)** (БАГАлІтЕр : _ніколи_ TM️)
- **[Portable AppImage](#appimage)** (_Рекомендовано_)
  - [Інструкції зі встановлення](#appimageinstall)
  - [Додаткові примітки](#appimagenotes)
- [**Red Hat Enterprise Linux (RHEL) based distributions**](#packagecloud)
- [**Debian and Ubuntu based distributions**](#packagecloud)
- [**Дистрибутиви на базі Arch Linux**](#arch)

<a name="about"></a>

## About

**PreMiD** є простою утилітою, яку можна налаштувати, що використовує бібліотеку RP Discord (Rich Presence), яка дозволяє вам показати, що ви робите в Інтернеті (і кілька програм) у вашому профілі Discord **як статус**.

<a name="stats"></a>

### Stats

<table>
  <tr>
    <th>Розгортання</th>
    <th>Всього завантажень</th>
    <th>Останній випуск</th>
  </tr>
  <tr>
    <td><a href="https://github.com/PreMiD/Linux/actions"><img src="https://github.com/PreMiD/Linux/workflows/CI/badge.svg?branch=master&event=push" alt="CI"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases"><img src="https://img.shields.io/github/downloads/PreMiD/Linux/total.svg?maxAge=86400" alt="Усі випуски"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases/latest"><img src="https://img.shields.io/github/v/release/PreMiD/Linux.svg?maxAge=86400" alt="Latest release"><br><img src="https://img.shields.io/github/downloads/PreMiD/Linux/latest/total.svg?maxAge=86400" alt="GitHub випуски"></a></td>
  </tr>
</table>

<a name="requirements"></a>

### Requirements

Технічно кожен дистрибутив, що може запустити [офіційний](https://discordapp.com/download) **застосунок** Discord ( не веб- чи снапверсію) може запустити Premid теж;</br> Як ви могли помітити в останні декілька років, деякі дистрибутиви Linux почали припиняти підтримку 32-х бітної (ia32/i686/i386/x86) архетектури, і, як наслідок, ми теж. Однак ви можете спробувати створити додаток самостійно, якщо вам відчайдушно потрібно використати його на 32-розрядній ОС.</br> Оскільки ми зараз використовуємо Electron в якості двигуна (Discord теж робить!), його вимоги також застосовуються до цього застосунку:

- Ubuntu ≥ 12.04
- Fedora ≥ 21
- Debian ≥ 8

Невідомо, чи підтримують старіші версії інших дистрибутивів таким чином, просто підтримуючи оновлення вашого дистрибутива і використовуйте **LTS (з довгою підтримкою)** релізи, якщо ваш дистрибутив пропонує їм, оскільки вони більш стабільні (уникайте альфа-релізів).

<a name="support"></a>

### Support

<div>
  <a target="_blank" href="https://discord.premid.app/" title="Приєднуйтеся до нашого Discord!">
    <img height="75px" draggable="false" src="https://discordapp.com/api/guilds/493130730549805057/widget.png?style=banner2" alt="Join our Discord!">
  </a>
</div>

<a name="credits"></a>

### Credits

Висловлюю величезну подяку наступним людям:

- @nattadu, @Rubensei, @Cairo2k18, zany130, Immanuel D, Friskytrash, Alexandre (і чималій кількості інших людей, яких я забув їх) за те, що вони дають зворотний зв'язок, коли я випускаю нічні релізи
- @apriluwu за підтримку збірок Gentoo
- @SlimShadyIAm і naka за підтримки пакетів репозиторію Arch User
- Спільнота Electron за різні пакети
- Будь-кому іншому, хто будь-коли долучився до проекту.

<a name="license"></a>

### License

[![FOSSA статус](https://app.fossa.io/api/projects/git%2Bgithub.com%2FPreMiD%2FLinux.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FPreMiD%2FLinux?ref=badge_large)

<img src="https://i.imgur.com/ACAxtmA.png" width="100" height="100" align="right"></img>
<a name="snapcraft"></a>

## Portable AppImage

Пакет AppImage рекомендований якщо Discord працює для вас, але інші пакети PreMiD (.deb, .rpm тощо) не працюють.

<a name="appimageinstall"></a>

### Installation instructions

```bash
wget https://github.com/PreMiD/Linux/releases/latest/download/PreMiD-Portable.AppImage && chmod a+x PreMiD*.AppImage
```

```bash
# Просто натисніть це два рази або запустіть
./PreMiD*.AppImage
```

<a name="appimagenotes"></a>

### Additional notes

Якщо ви хочете спробувати PreMiD, або просто не хочете його встановити, це найкраще, завжди актуальне, але _НЕ ДОДАВАЙТЕ В АВТОЗАПУСК!_</br>Якщо вам набридло відкривати щоразу, використовуйте інші пакети (згідно з вашим дистрибутивом).

<img src="https://raw.githubusercontent.com/PreMiD/Linux/master/.github/packagecloud.png" width="100" height="100" align="right"></img>
<a name="packagecloud"></a>

# PackageCloud

We released deb/rpm packages at our packagecloud repo. Please visit it at https://packagecloud.io/PreMiD/Linux and download your deb/rpm package or use automatic script.

For **Ubuntu/Debian**:

```bash
curl -s https://packagecloud.io/install/repositories/PreMiD/Linux/script.deb.sh | sudo bash
```

For **Fedora/CentOS/RedHat**:

```bash
curl -s https://packagecloud.io/install/repositories/PreMiD/Linux/script.rpm.sh | sudo bash
```

If command doesn't work, download **deb/rpm** file from our packagecloud repo or override settings.

<a name="arch"></a>
<img src="https://raw.githubusercontent.com/PreMiD/Linux/86ae2fbd49499785281f388a5305b06e0d3ecfea/.github/iusearchbtw.svg" width="100" height="100" align="right"></img>

## Arch Linux based distributions

Використовуючи [Arch User Repository](https://aur.archlinux.org/packages/premid);</br> Підтримувані дистрибутиви: _Arch_, Manjaro, Anarchy, Artix, Arco, ArchLabs, Endeavour, Archman, BlackArch, Liri OS і [кожен інший, що підтримує встановлення з AUR](https://wiki.archlinux.org/index.php/Arch-based_distributions#Active).

<a name="archinstall"></a>

### Installation instructions

```bash
# Використовуючи yay (рекомендується)
yay -S premid
```

```bash
# Використовуючи pakku
pakku -S premid
```

```bash
# Використовуючи trizen
trizen -S premid
```

```bash
# Використовуючи pacaur
pacaur -S premid
```

```bash
# ... ви маєте рацію
```

або вручну з [Репозиторій користувача Arch](https://aur.archlinux.org/packages/premid), якщо ви знаєте, що ви робите.

<a name="archnotes"></a>

### Additional notes

Якщо ваш дистрибутив використовує pacman, тоді ви повинні встановити один з помічників в першу чергу. Якщо у вас немає будь-чого, рекомендується Yay, виконайте:

```bash
git clone https://aur.archlinux.org/yay.git && cd yay && makepkg -si
```

```bash
yay -S premid
```

Інші помічники AUR/Pacman також працюють також, хоча кожен функціональність відрізняється від того, що ви можете зіткнутися з проблемами при використанні цих функцій.