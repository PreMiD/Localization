---
title: Linux
description: Початок роботи із встановленням PreMiD на Linux
published: true
date: 2020-04-27T12:52:46.261Z
tags:
---

> Змінення автозапуску для Linux у застосунку замість розширення.{.is-warning}

Встановлення програми дуже важливе, оскільки розширення не може робити нічого самостійно.

## Зміст

- **[Про програму](#about)**
  - [Статистика](#stats)
  - [Вимоги](#requirements)
  - Приклади (скоро)
  - Часті питання (скоро)
  - Будівництво (скоро)
  - [Підтримка](#support)
  - [Творці](#credits)
  - [Ліцензія](#license)
- **[Snapcraft](#snapcraft)** (БАГАлІтЕр : _ніколи_ TM️)
- **[Portable AppImage](#portable-appimage)** (_Рекомендовано_)
  - [Інструкції зі встановлення](#installation-instructions)
  - [Додаткові примітки](#additional-notes)
- **Репозиторій засновані на дистрибутиві Red Hat Enterprise Linux (RHEL) ** (незабаром використовуйте [, а поки що це ](#portable-appimage)).
- **Debian and Ubuntu засновані на дистрибутиві Red Hat Enterprise Linux (RHEL) ** (незабаром використовуйте [, а поки що це ](#portable-appimage)).
- **[Дистрибутиви на базі Arch Linux](#arch-linux-based-distributions)**
  - [Інструкції зі встановлення](#installation-instructions-1)
  - [Додаткові примітки](#additional-notes-1)
- **[Gentoo Linux](#gentoo-linux)**
  - [Інструкції зі встановлення](#installation-instructions-2)
  - [Додаткові примітки](#additional-notes-2)

<a name="about"></a>

## Про програму

**PreMiD** є простою утилітою, яку можна налаштувати, що використовує бібліотеку RP Discord (Rich Presence), яка дозволяє вам показати, що ви робите в Інтернеті (і кілька програм) у вашому профілі Discord **як статус**.

<a name="stats"></a>

### Статистика

<table>
  <tr>
    <th>Розгортання</th>
    <th>Всього завантажень</th>
    <th>Останній випуск</th>
  </tr>
  <tr>
    <td><a href="https://github.com/PreMiD/Linux/actions"><img src="https://github.com/PreMiD/Linux/workflows/CI/badge.svg?branch=master&event=push" alt="CI"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases"><img src="https://img.shields.io/github/downloads/PreMiD/Linux/total.svg?maxAge=86400" alt="Усі випуски"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases/latest"><img src="https://img.shields.io/github/v/release/PreMiD/Linux.svg?maxAge=86400" alt="Останній випуск"><br><img src="https://img.shields.io/github/downloads/PreMiD/Linux/latest/total.svg?maxAge=86400" alt="GitHub випуски"></a></td>
  </tr>
</table>

<a name="requirements"></a>

### Вимоги

Technically every distribution that can run Discord's [official](https://discordapp.com/download) **app** ( not the web or the snap version ) can run PreMiD too;</br> As you may have noticed in the recent years, some Linux distributions started dropping support for the 32-bit (ia32/i686/i386/x86) architectures, and as a result, we did too. Однак ви можете спробувати створити додаток самостійно, якщо вам відчайдушно потрібно використати його на 32-розрядній ОС.</br> Оскільки ми зараз використовуємо Electron в якості двигуна (Discord теж робить!), його вимоги також застосовуються до цього застосунку:

- Ubuntu ≥ 12.04
- Fedora ≥ 21
- Debian ≥ 8

It is unknown whether older versions of other distributions support it, so just keep your distribution updated and use **LTS (Long-Term Support)** releases if your distribution offers them, as they're more stable (avoid alpha releases).

<a name="support"></a>

### Підтримка

<div>
  <a target="_blank" href="https://discord.gg/WvfVZ8T" title="Приєднуйтеся до нашого Discord!">
    <img height="75px" draggable="false" src="https://discordapp.com/api/guilds/493130730549805057/widget.png?style=banner2" alt="Приєднуйтеся до нашого Discord!">
  </a>
</div>

<a name="credits"></a>

### Творці

Висловлюю величезну подяку наступним людям:

- @nattadu, @Rubensei, @Cairo2k18, zany130, Immanuel D, Friskytrash, Alexandre (і чималій кількості інших людей, яких я забув їх) за те, що вони дають зворотний зв'язок, коли я випускаю нічні релізи
- @apriluwu for maintaining the Gentoo builds
- @SlimShadyIAm and naka for formerly maintaining the Arch User Repository packages
- The Electron community for various packages
- Anyone else who has ever contributed to the project in any way.

<a name="license"></a>

### Ліцензія

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FPreMiD%2FLinux.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FPreMiD%2FLinux?ref=badge_large)

<img src="https://i.imgur.com/ACAxtmA.png" width="100" height="100" align="right"></img>
<a name="snapcraft"></a>

## Snapcraft

Probably never, since Snap's nature blocks PreMiD from reaching Discord and the extension properly,</br> It would be appreciated if someone could do it though, any ideas or PRs are welcome.</br> P.S.: classic confinement doesn't work either so don't bother making a suggestion about it.

<img src="https://i.imgur.com/qEZOOfU.png" width="100" height="100" align="right"></img>
<a name="appimage"></a>

## Портативний AppImage

The AppImage package is the recommended one if Discord works for you but other PreMiD packages (.deb, .rpm, etc) don't.

<a name="appimageinstall"></a>

### Інструкції зі встановлення

```bash
wget https://github.com/PreMiD/Linux/releases/latest/download/PreMiD-Portable.AppImage && chmod a+x PreMiD*.AppImage
```

```bash
# Just double-click it or run
./PreMiD*.AppImage
```

<a name="appimagenotes"></a>

### Додаткові примітки

Either if you want to try PreMiD or just don't want to install it, this one's the best, it's always up to date but _DOESN'T AUTO-START WITH THE SYSTEM!_</br>If you get tired of having to open it each time, use the other packages (according to your distribution).

<a name="arch"></a>
<img src="https://i.imgur.com/NBevNlU.png" width="100" height="100" align="right"></img>

## Дистрибутиви на базі Arch Linux

Uses [Arch User Repository](https://aur.archlinux.org/packages/premid);</br> Supported distributions are _itself_, Manjaro, Anarchy, Artix, Arco, ArchLabs, Endeavour, Archman, BlackArch, Liri OS and [every one that supports installing from AUR](https://wiki.archlinux.org/index.php/Arch-based_distributions#Active).

<a name="archinstall"></a>

### Інструкції зі встановлення

```bash
# Using yay (recommended)
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

### Додаткові примітки

Якщо ваш дистрибутив використовує pacman, тоді ви повинні встановити один з помічників в першу чергу. Якщо у вас немає будь-чого, рекомендується Yay, виконайте:

```bash
git clone https://aur.archlinux.org/yay.git && cd yay && makepkg -si
```

```bash
yay -S premid
```

Інші помічники AUR/Pacman також працюють також, хоча кожен функціональність відрізняється від того, що ви можете зіткнутися з проблемами при використанні цих функцій.

<img src="https://i.imgur.com/Kv1X2to.png" width="100" height="100" align="right"></img>
<a name="gentoo"></a>

## Gentoo Linux

Same applies to its derivatives, such as ColverOS, Clip-OS, Sabayon, Bicom Systems PBXware, [etc](https://wiki.gentoo.org/wiki/Distributions_based_on_Gentoo#Active_projects).

<a name="gentooinstall"></a>

### Інструкції зі встановлення

```bash
# Add the overlay using layman
layman -S && layman -a apriluwu
```

```bash
# Install via portage
emerge -av app-misc/premid
```

<a name="gentoonotes"></a>

### Додаткові примітки

Указана команда встановлення використовує layman, вона знаходиться в офіційних репозиторіях через `app-portage/layman`.<br> Для отримання оновлень потрібно буде синхронізувати оверлей час від часу, ви можете зробити це з

```bash
layman -S
```