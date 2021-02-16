---
title: Linux
description: Å komme igang med PreMiD installasjonen på Firefox
published: sant
date: 2020-11-10T18:06:56.520Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:14.124Z
---

The installation of the application is very important as the extension can not do anything by itself.

> Aur users that use DoomLerd's package should be safe as he says. We are not recommending to use it, but if you want you can still use it. Thanks to DoomLerd for handling aur repo still. 
> 
> {.is-warning}

## Table of Contents

- **[About](#about)**
  - [Statistikker](#stats)
  - [Requirements](#requirements)
  - Examples (soon)
  - FAQs (soon)
  - Building (soon)
  - [Hjelp](#support)
  - [Credits](#credits)
  - [Lisens](#license)
- **[Snapcraft](#snapcraft)** (TL;DR : _never_ ™️)
- **[Portable AppImage](#appimage)** (_ANBEFALT_)
  - [Installasjons instruksjoner](#appimageinstall)
  - [Flere notater](#appimagenotes)
- [**Red Hat Enterprise Linux (RHEL) based distributions**](#packagecloud)
- [**Debian and Ubuntu based distributions**](#packagecloud)
- [**Arch Linux basert distribusjoner**](#arch)

<a name="about"></a>

## About

**PreMiD** is a simple, configurable utility that uses Discord's RP ( Rich Presence ) library which allows you to show what you're doing on the web ( and a few programs ) in your Discord profile as **playing status**.

<a name="stats"></a>

### Statistikker

<table>
  <tr>
    <th>Deployment</th>
    <th>Total downloads</th>
    <th>Latest release</th>
  </tr>
  <tr>
    <td><a href="https://github.com/PreMiD/Linux/actions"><img src="https://github.com/PreMiD/Linux/workflows/CI/badge.svg?branch=master&event=push" alt="CI"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases"><img src="https://img.shields.io/github/downloads/PreMiD/Linux/total.svg?maxAge=86400" alt="All releases"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases/latest"><img src="https://img.shields.io/github/v/release/PreMiD/Linux.svg?maxAge=86400" alt="Latest release"><br><img src="https://img.shields.io/github/downloads/PreMiD/Linux/latest/total.svg?maxAge=86400" alt="Github releases"></a></td>
  </tr>
</table>

<a name="requirements"></a>

### Requirements

Technically every distribution that can run Discord's [official](https://discordapp.com/download) **app** ( not the web or the snap version ) can run PreMiD too;</br> As you may have noticed in the recent years, some Linux distributions started dropping support for the 32-bit (ia32/i686/i386/x86) architectures, and as a result, we did too. You can, however, try to build the app yourself if you desperately need to use it on a 32-bit distribution.</br> Since we currently use Electron as an engine (Discord does too!), its requirements also apply to this app :

- Ubuntu ≥ 12.04
- Fedora ≥ 21
- Debian ≥ 8

It is unknown whether older versions of other distributions support it, so just keep your distribution updated and use **LTS (Long-Term Support)** releases if your distribution offers them, as they're more stable (avoid alpha releases).

<a name="support"></a>

### Hjelp

<div>
  <a target="_blank" href="https://discord.premid.app/" title="Join our Discord!">
    <img height="75px" draggable="false" src="https://discordapp.com/api/guilds/493130730549805057/widget.png?style=banner2" alt="Join our Discord!">
  </a>
</div>

<a name="credits"></a>

### Credits

Thanks to :

- @nattadasu, @Rubensei, @Cairo2k18, zany130, Immanuel D, Friskytrash, Alexandre (and few other guys whom I forgot their names) for providing feedback on nightly releases.
- @apriluwu for maintaining the Gentoo builds
- @SlimShadyIAm and naka for formerly maintaining the Arch User Repository packages
- The Electron community for various packages
- Anyone else who has ever contributed to the project in any way.

<a name="license"></a>

### Lisens

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FPreMiD%2FLinux.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FPreMiD%2FLinux?ref=badge_large)

<img src="https://i.imgur.com/ACAxtmA.png" width="100" height="100" align="right"></img>
<a name="snapcraft"></a>

## Portable AppImage

AppImage pakken er anbefalt om Discord fungerer for deg men ikke andre PreMiD pakker (.deb, .rpm, osv).

<a name="appimageinstall"></a>

### Installasjons instruksjoner

```bash
wget https://github.com/PreMiD/Linux/releases/latest/download/PreMiD-Portable.AppImage && chmod a+x PreMiD*.AppImage
```

```bash
# Just double-click it or run
./PreMiD*.AppImage
```

<a name="appimagenotes"></a>

### Flere notater

Enten du vil prøve PreMiD eller om du bare ikke vil installere det, så er dette den beste, den er alltid oppdatert men _DEN AUTO-STARTER IKKE MED SYSTEMET!</br> Om du blir lei av å måte åpne det hver gang, så bruk andre pakker (avhengig av din distribusjon.)

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

## Arch Linux basert distribusjoner

Uses [Arch User Repository](https://aur.archlinux.org/packages/premid);</br> Supported distributions are _itself_, Manjaro, Anarchy, Artix, Arco, ArchLabs, Endeavour, Archman, BlackArch, Liri OS and [every one that supports installing from AUR](https://wiki.archlinux.org/index.php/Arch-based_distributions#Active).

<a name="archinstall"></a>

### Installasjons instruksjoner

```bash
# Using yay (recommended)
yay -S premid
```

```bash
# Using pakku
pakku -S premid
```

```bash
# Using trizen
trizen -S premid
```

```bash
# Using pacaur
pacaur -S premid
```

```bash
# ... you get the point
```

or manually from the [Arch User Repository](https://aur.archlinux.org/packages/premid) if you know what you're doing.

<a name="archnotes"></a>

### Flere notater

If your distro uses pacman, then you have to install one of the helpers first. If you don't have any, Yay is recommended, run :

```bash
git clone https://aur.archlinux.org/yay.git && cd yay && makepkg -si
```

```bash
yay -S premid
```

Other AUR/Pacman helpers work as well, although each one's functionality is different so you may face issues while using them.