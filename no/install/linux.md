---
title: Linux
description: Å komme igang med PreMiD installasjonen på Firefox
published: sant
date: 2020-11-10T18:06:56.520Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:14.124Z
---

Installasjonen av denne extensionen er veldig viktig grunnet applikasjonen ikke kan gjøre noe selv uten det.

> Aur users that use DoomLerd's package should be safe as he says. We are not recommending to use it, but if you want you can still use it. Thanks to DoomLerd for handling aur repo still. 
> 
> {.is-warning}

## Innholdsfortegnelse

- **[Om](#about)**
  - [Statistikker](#stats)
  - [Krav](#requirements)
  - Eksempler (snart)
  - FAQs (snart)
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

**PreMiD** er en enkel, konfigurerbar tilgjengelig verktøy som bruker Discord's RP (Rich Presence) library som gir deg muligheten til å vise hva du gjør, speller eller kanskje hører på (og andre ting) på Discord profilen din som **playing status**

<a name="stats"></a>

### Statistikker

<table>
  <tr>
    <th>Distribusjon</th>
    <th>Total Nedlastinger</th>
    <th>Nyeste Versjon</th>
  </tr>
  <tr>
    <td><a href="https://github.com/PreMiD/Linux/actions"><img src="https://github.com/PreMiD/Linux/workflows/CI/badge.svg?branch=master&event=push" alt="CI"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases"><img src="https://img.shields.io/github/downloads/PreMiD/Linux/total.svg?maxAge=86400" alt="All releases"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases/latest"><img src="https://img.shields.io/github/v/release/PreMiD/Linux.svg?maxAge=86400" alt="Latest release"><br><img src="https://img.shields.io/github/downloads/PreMiD/Linux/latest/total.svg?maxAge=86400" alt="Github releases"></a></td>
  </tr>
</table>

<a name="requirements"></a>

### System krav

Teknisk sett så kan alle distribusjoner som kan kjøre Discord's [ offisiele](https://discordapp.com/download)**app** (ikke web eller snap versjonen) kan også kjøre PreMiD;</br> Som du kanskje har lagt merke til i de siste årene så har noen Linux distribusjoner sluttet med å utvikle support for 32-bit architectures, og som et result så har vi også. Du kan da, uansett prøve å lage en app for deg selv, selv hvis du virkelig trenger å bruke det på en 32-bit distribusjon</br> Siden vi bruker Electron som en engine (Discord gjør også det!), så er det et krav også på denne appen.

- Ubuntu ≥ 12.04
- Fedora ≥ 21
- Debian ≥ 8

Der er ikke kjent om eldre versjoner av andre distribusjoner har støtte for det, så bare ha distribusjonene dine oppdatert og bruk **LTS (Long Term Support**releases hvis din distribusjon støtter det, grunnet at det er mer stabilt (unngå alpha releases).

<a name="support"></a>

### Hjelp

<div>
  <a target="_blank" href="https://discord.premid.app/" title="Join our Discord!">
    <img height="75px" draggable="false" src="https://discordapp.com/api/guilds/493130730549805057/widget.png?style=banner2" alt="Join our Discord!">
  </a>
</div>

<a name="credits"></a>

### Credits

Takk til:

- @nattadasu, @Rubensei, @Cairo2k18, zany130, Immanuel D, Friskytrash, Alexandre (og noen andre folk som jeg glemte navnet til) for å tilby feedback på utgivelser.
- @apriluwu for å vedlikeholde Genoo bygger
- @SlimShadyIAm og naka for tidligere å vedlikeholde Arch User Respository pakkene.
- Electron community'et for diverse pakker.
- Alle andre som har bidratt til prosjektet på noe måte.

<a name="license"></a>

### License

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
# Bare dobbeltklikk den eller kjør
./PreMiD*.AppImage
```

<a name="appimagenotes"></a>

### Andre notater

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