---
title: Linux
description: Začněte s instalací PreMiD na Linuxu
published: true
date: 2020-11-10T18:06:56.520Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:14.124Z
---

Instalace aplikace je velmi důležitá, protože rozšíření nemůže samo o sobě nic dělat.

> Aur users that use DoomLerd's package should be safe as he says. We are not recommending to use it, but if you want you can still use it. Thanks to DoomLerd for handling aur repo still. 
> 
> {.is-warning}

## Obsah

- **[Podrobnosti](#about)**
  - [Statistiky](#stats)
  - [Requirements](#requirements)
  - Příklady (brzy)
  - Časté dotazy (brzy)
  - Sestavování (brzy)
  - [Podpora](#support)
  - [Credits](#credits)
  - [Licence](#license)
- **[Snapcraft](#snapcraft)** (TL;DR : _nikdy_ ™️)
- **[Přenosný AppImage ](#appimage)** (_DOPORUŘENO_)
  - [Návod k instalaci](#appimageinstall)
  - [Dodatečné poznámky](#appimagenotes)
- [**Red Hat Enterprise Linux (RHEL) based distributions**](#packagecloud)
- [**Debian and Ubuntu based distributions**](#packagecloud)
- [**Distribuce založené ne Arch Linuxu**](#arch)

<a name="about"></a>

## About

**PreMiD** je jednoduchý, konfigurovatelný nástroj, který používá Discord RP (Rich Presence) knihovnu, což vám umožňuje zobrazit co děláte na webu (a v pár programech) na svém Discord profilu jako **"Právě hraje" status**.

<a name="stats"></a>

### Stats

<table>
  <tr>
    <th>Deployment</th>
    <th>Celkový počet stažení</th>
    <th>Poslední verze</th>
  </tr>
  <tr>
    <td><a href="https://github.com/PreMiD/Linux/actions"><img src="https://github.com/PreMiD/Linux/workflows/CI/badge.svg?branch=master&event=push" alt="CI"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases"><img src="https://img.shields.io/github/downloads/PreMiD/Linux/total.svg?maxAge=86400" alt="Všechny vydání"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases/latest"><img src="https://img.shields.io/github/v/release/PreMiD/Linux.svg?maxAge=86400" alt="Latest release"><br><img src="https://img.shields.io/github/downloads/PreMiD/Linux/latest/total.svg?maxAge=86400" alt="GitHub vydání"></a></td>
  </tr>
</table>

<a name="requirements"></a>

### Requirements

Technicky každá distribuce, na které lze spustit [oficiální](https://discordapp.com/download) Discord **aplikace** (ne webová nebo snap verze), může spustit i PreMiD;</br> Jak jste si možná mohli všimnou v posledních letech, některé Linuxové distribuce začaly rušit podporu 32-bitových (ia32/i686/i386/x86) architektur, a proto jsme se rozhodli tak také učinit. Můžete se však pokusit sestavit aplikaci sami, pokud ji zoufale potřebujete používat na 32-bitové distribuci.</br>Jelikož používáme Electron jako engine (Discord taky!), jeho požadavky se také vztahují na tuto aplikaci :

- Ubuntu ≥ 12.04
- Fedora ≥ 21
- Debian ≥ 8

It is unknown whether older versions of other distributions support it, so just keep your distribution updated and use **LTS (Long-Term Support)** releases if your distribution offers them, as they're more stable (avoid alpha releases).

<a name="support"></a>

### Support

<div>
  <a target="_blank" href="https://discord.premid.app/" title="Připojte se k našemu Discordu!">
    <img height="75px" draggable="false" src="https://discordapp.com/api/guilds/493130730549805057/widget.png?style=banner2" alt="Join our Discord!">
  </a>
</div>

<a name="credits"></a>

### Credits

Poděkování:

- @nattadasu, @Rubensei, @Cairo2k18, zany130, Immanuel D, Friskytrash, Alexandre (a pár dalších lidí, kterých jsem zapomněl jméno) za poskyování zpětné vazby u nightly verzí.
- @apriluwu za udržování verze pro Gentoo
- @SlimShadyIAm a naka za dřívejší údržbu balíčků Uživatelského Repozitáře Arch
- Komunitu Electronu za různé balíčky
- Komukoliv jinému kdo jakýmkoliv způsobem přispěl projektu.

<a name="license"></a>

### License

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FPreMiD%2FLinux.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FPreMiD%2FLinux?ref=badge_large)

<img src="https://i.imgur.com/ACAxtmA.png" width="100" height="100" align="right"></img>
<a name="snapcraft"></a>

## Portable AppImage

The AppImage package is the recommended one if Discord works for you but other PreMiD packages (.deb, .rpm, etc) don't.

<a name="appimageinstall"></a>

### Installation instructions

```bash
wget https://github.com/PreMiD/Linux/releases/latest/download/PreMiD-Portable.AppImage && chmod a+x PreMiD*.AppImage
```

```bash
# Just double-click it or run
./PreMiD*.AppImage
```

<a name="appimagenotes"></a>

### Additional notes

Either if you want to try PreMiD or just don't want to install it, this one's the best, it's always up to date but _DOESN'T AUTO-START WITH THE SYSTEM!_</br>If you get tired of having to open it each time, use the other packages (according to your distribution).

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

Uses [Arch User Repository](https://aur.archlinux.org/packages/premid);</br> Supported distributions are _itself_, Manjaro, Anarchy, Artix, Arco, ArchLabs, Endeavour, Archman, BlackArch, Liri OS and [every one that supports installing from AUR](https://wiki.archlinux.org/index.php/Arch-based_distributions#Active).

<a name="archinstall"></a>

### Installation instructions

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

### Additional notes

If your distro uses pacman, then you have to install one of the helpers first. If you don't have any, Yay is recommended, run :

```bash
git clone https://aur.archlinux.org/yay.git && cd yay && makepkg -si
```

```bash
yay -S premid
```

Other AUR/Pacman helpers work as well, although each one's functionality is different so you may face issues while using them.