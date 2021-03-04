---
title: Linux
description: Начнём установку PreMiD на Linux
published: true
date: 2020-11-10T18:06:56.520Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:14.124Z
---

Установка приложения очень важна, так как расширение не может делать ничего самостоятельно.

> По его словам, пользователи Aur, использующие пакет DoomLerd, должны быть в безопасности. Мы не рекомендуем его использовать, но при желании вы можете его использовать. Спасибо DoomLerd за обработку aur repo. 
> 
> {.is-warning}

## Содержание

- **[О программе](#about)**
  - [Статистики](#stats)
  - [Требования](#requirements)
  - Примеры (скоро)
  - Гайды (скоро)
  - Построение (скоро)
  - [Поддержка](#support)
  - [Команда](#credits)
  - [Лицензия](#license)
- **[Snapcraft](#snapcraft)** (TL;DR : _никогда_ ™️)
- **[Портативная AppImage](#appimage)** (_РЕКОМЕНДУЕТСЯ_)
  - [Инструкция по установке](#appimageinstall)
  - [Дополнительно](#appimagenotes)
- [**Дистрибутивы на базе Red Hat Enterprise Linux (RHEL)**](#packagecloud)
- [**Дистрибутивы на базе Debian и Ubuntu**](#packagecloud)
- [**Системные дистрибутивы на основе Linux**](#arch)

<a name="about"></a>

## О программе

**PreMiD** - простой, настраиваемая утилита, которая использует библиотеку Discord RP (Rich Presence), которая позволяет показать что вы делаете в Интернете (и несколько программ) в вашем профиле Discord как **играющий статус**.

<a name="stats"></a>

### Статистика

<table>
  <tr>
    <th>Развертывание</th>
    <th>Общее число загрузок</th>
    <th>Последние релизы</th>
  </tr>
  <tr>
    <td><a href="https://github.com/PreMiD/Linux/actions"><img src="https://github.com/PreMiD/Linux/workflows/CI/badge.svg?branch=master&event=push" alt="CI"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases"><img src="https://img.shields.io/github/downloads/PreMiD/Linux/total.svg?maxAge=86400" alt="All releases"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases/latest"><img src="https://img.shields.io/github/v/release/PreMiD/Linux.svg?maxAge=86400" alt="Последние релизы"><br><img src="https://img.shields.io/github/downloads/PreMiD/Linux/latest/total.svg?maxAge=86400" alt="Github releases"></a></td>
  </tr>
</table>

<a name="requirements"></a>

### Требования

Технически каждый дистрибутив, который может запускать [официальное](https://discordapp.com/download) **приложение** (не веб или привязка) может запускать PreMiD;</br> Как вы можете заметить в последние годы, некоторые дистрибутивы Linux начали отказываться от поддержки архитектур (ia32/i686/i386/x86) и, как следствие, мы также сделали это. Однако вы можете попробовать создать приложение самостоятельно, если вам отчаянно нужно использовать его на 32-битном распределении.</br> Поскольку мы в настоящее время используем Electron в качестве движка (Discord тоже!), его требования также применимы к этому приложению:

- Ubuntu ≥ 12.04
- Fedora ≥ 21
- Debian ≥ 8

Не известно, поддерживают ли старые версии других дистрибутивов, так что просто обновите ваш дистрибутив и используйте релизы **LTS (Long-Term Support)** если ваш дистрибутив предлагает его, , так как они более стабильны (избегайте альфа-релизов).

<a name="support"></a>

### Поддержка

<div>
  <a target="_blank" href="https://discord.premid.app/" title="Join our Discord!">
    <img height="75px" draggable="false" src="https://discordapp.com/api/guilds/493130730549805057/widget.png?style=banner2" alt="Join our Discord!">
  </a>
</div>

<a name="credits"></a>

### Команда

Thanks to :

- @nattadasu, @Rubensei, @Cairo2k18, zany130, Immanuel D, Friskytrash, Alexandre (and few other guys whom I forgot their names) for providing feedback on nightly releases.
- @apriluwu for maintaining the Gentoo builds
- @SlimShadyIAm and naka for formerly maintaining the Arch User Repository packages
- The Electron community for various packages
- Anyone else who has ever contributed to the project in any way.

<a name="license"></a>

### Лицензия

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FPreMiD%2FLinux.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FPreMiD%2FLinux?ref=badge_large)

<img src="https://i.imgur.com/ACAxtmA.png" width="100" height="100" align="right"></img>
<a name="snapcraft"></a>

## Портативная версия (Appimage)

Пакет AppImage рекомендуется, если Discord работает для вас, а другие пакеты PreMiD (.deb, .rpm и т. д.) не рекомендуются.

<a name="appimageinstall"></a>

### Инструкция по установке

```bash
wget https://github.com/PreMiD/Linux/releases/latest/download/PreMiD-Portable.AppImage && chmod a+x PreMiD*.AppImage
```

```bash
# Just double-click it or run
./PreMiD*.AppImage
```

<a name="appimagenotes"></a>

### Дополнительно

Либо если вы хотите попробовать PreMiD или просто не хотите его установить, это самый лучший, он всегда в курсе, но DOESN'T AUTO-START С СИСТЕМНЫМИ!</br>Если вы устали открывать его каждый раз, используйте другие пакеты (в зависимости от вашего дистрибутива).

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

## Системные дистрибутивы на основе Linux

Использует [Системный Репозиторий пользователя](https://aur.archlinux.org/packages/premid);</br> Поддерживаемые дистрибутивы: _себя,_, Manjaro, Anarchy, Artix, Arco, ArchLabs, Endeavour, Archman, BlackArch, Liri OS и [каждый из них, который поддерживает установку из AUR](https://wiki.archlinux.org/index.php/Arch-based_distributions#Active).

<a name="archinstall"></a>

### Инструкция по установке

```bash
# Использование yay (рекомендуется)
yay -S premid
```

```bash
# Использование pakku
pakku -S premid
```

```bash
# Используя trizen
trizen -S premid
```

```bash
# Использование pakku
pakku -S premid
```

```bash
# ... ну вы поняли.
```

или вручную из [Arch User Repository](https://aur.archlinux.org/packages/premid) , если вы знаете, что вы делаете.

<a name="archnotes"></a>

### Дополнительно

Если ваш дистрибутив использует pacman, то вы должны сначала установить одного из помощников. Если у вас нет такого, рекомендуется запустить Yay:

```bash
git clone https://aur.archlinux.org/yay.git && cd yay && makepkg -si
```

```bash
yay -S premid
```

Другие помощники AUR/Pacman тоже работают, хотя каждый из них отличается друг от друга, поэтому вы можете столкнуться с проблемами при их использовании.