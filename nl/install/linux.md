---
title: Linux
description: Aan de slag met de PreMiD installatie op Linux
published: true
date: 2020-04-27T12:52:46.261Z
tags:
---

> Automatisch opstarten is nu beschikbaar in de app in plaats van de extensie.{.is-warning}

De installatie van de applicatie is van groot belang, omdat de extensie op zichzelf niets kan doen.

## Inhoudsopgave

- **[Over ons](#about)**
  - [Statistieken](#stats)
  - [Vereisten](#requirements)
  - Voorbeelden (binnenkort)
  - Veelgestelde vragen (binnenkort)
  - Bouwen (binnenkort)
  - [Support](#support)
  - [Credits](#credits)
  - [Licentie](#license)
- **[Snapcraft](#snapcraft)** (TL;DR : _never_ ™️)
- **[Portable AppImage](#portable-appimage)** (_AANBEVOLEN_)
  - [Installatie instructies](#installation-instructions)
  - [Aanvullende notities](#additional-notes)
- **Red Hat Enterprise Linux (RHEL) gebaseerde distributies** (binnenkort, gebruik [deze](#portable-appimage) voor nu)
- **Debian en Ubuntu gebaseerde distributies** (binnenkort, gebruik [deze](#portable-appimage) voor nu)
- **[Arch Linux gebaseerde distributies](#arch-linux-based-distributions)**
  - [Installatie instructies](#installation-instructions-1)
  - [Aanvullende notities](#additional-notes-1)
- **[Gentoo Linux](#gentoo-linux)**
  - [Installatie instructies](#installation-instructions-2)
  - [Aanvullende notities](#additional-notes-2)

<a name="about"></a>

## Over ons

**PreMiD** is een eenvoudige configureerbare hulpprogramma dat de Discord's RP ( Rich Presence ) bibliotheek gebruikt, waarmee je kunt laten zien wat je doet op het web (en een paar programma's) in je Discord-profiel als **afspeelstatus**.

<a name="stats"></a>

### Statistieken

<table>
  <tr>
    <th>Deployment</th>
    <th>Totale downloads</th>
    <th>Laatste releases</th>
  </tr>
  <tr>
    <td><a href="https://github.com/PreMiD/Linux/actions"><img src="https://github.com/PreMiD/Linux/workflows/CI/badge.svg?branch=master&event=push" alt="CI"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases"><img src="https://img.shields.io/github/downloads/PreMiD/Linux/total.svg?maxAge=86400" alt="All releases"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases/latest"><img src="https://img.shields.io/github/v/release/PreMiD/Linux.svg?maxAge=86400" alt="Laatste releases"><br><img src="https://img.shields.io/github/downloads/PreMiD/Linux/latest/total.svg?maxAge=86400" alt="Github releases"></a></td>
  </tr>
</table>

<a name="requirements"></a>

### Vereisten

Technisch gezien kan elke distributie die Discord's [officiële](https://discordapp.com/download) **app** (niet de web of de snap versie) ook PreMiD gebruiken;</br> Zoals u wellicht de afgelopen jaren hebt opgemerkt sommige Linux-distributies begonnen steun voor de 32-bit (ia32/i686/i386/x86) architecturen te laten vallen, en als gevolg daarvan deden wij dat ook. Je kunt de app echter zelf proberen te bouwen als je op een distributie van 32 bits zit.</br> Sinds we momenteel Electron gebruiken als motor (Discord doet dit ook!), gelden de vereisten ook voor deze app:

- Ubuntu ≥ 12.04
- Fedora ≥ 21
- Debian ≥ 8

It is unknown whether older versions of other distributions support it, so just keep your distribution updated and use **LTS (Long-Term Support)** releases if your distribution offers them, as they're more stable (avoid alpha releases).

<a name="support"></a>

### Support

<div>
  <a target="_blank" href="https://discord.gg/WvfVZ8T" title="Join onze Discord!">
    <img height="75px" draggable="false" src="https://discordapp.com/api/guilds/493130730549805057/widget.png?style=banner2" alt="Join onze Discord!">
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

### Licentie

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FPreMiD%2FLinux.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FPreMiD%2FLinux?ref=badge_large)

<img src="https://i.imgur.com/ACAxtmA.png" width="100" height="100" align="right"></img>
<a name="snapcraft"></a>

## Snapcraft

Probably never, since Snap's nature blocks PreMiD from reaching Discord and the extension properly,</br> It would be appreciated if someone could do it though, any ideas or PRs are welcome.</br> P.S.: classic confinement doesn't work either so don't bother making a suggestion about it.

<img src="https://i.imgur.com/qEZOOfU.png" width="100" height="100" align="right"></img>
<a name="appimage"></a>

## Portable AppImage

The AppImage package is the recommended one if Discord works for you but other PreMiD packages (.deb, .rpm, etc) don't.

<a name="appimageinstall"></a>

### Installatie instructies

```bash
wget https://github.com/PreMiD/Linux/releases/latest/download/PreMiD-Portable.AppImage && chmod a+x PreMiD*.AppImage
```

```bash
# Just double-click it or run
./PreMiD*.AppImage
```

<a name="appimagenotes"></a>

### Aanvullende notities

Either if you want to try PreMiD or just don't want to install it, this one's the best, it's always up to date but _DOESN'T AUTO-START WITH THE SYSTEM!_</br>If you get tired of having to open it each time, use the other packages (according to your distribution).

<a name="arch"></a>
<img src="https://i.imgur.com/NBevNlU.png" width="100" height="100" align="right"></img>

## Arch Linux gebaseerde distributies

Uses [Arch User Repository](https://aur.archlinux.org/packages/premid);</br> Supported distributions are _itself_, Manjaro, Anarchy, Artix, Arco, ArchLabs, Endeavour, Archman, BlackArch, Liri OS and [every one that supports installing from AUR](https://wiki.archlinux.org/index.php/Arch-based_distributions#Active).

<a name="archinstall"></a>

### Installatie instructies

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

### Aanvullende notities

Als je distro pacman gebruikt, dan moet je eerst een van de helpers installeren. If you don't have any, Yay is recommended, run :

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

### Installatie instructies

```bash
# Add the overlay using layman
layman -S && layman -a apriluwu
```

```bash
# Install via portage
emerge -av app-misc/premid
```

<a name="gentoonotes"></a>

### Aanvullende notities

The shown install command uses layman, it is in the official repositories through `app-portage/layman`.<br> To get updates you will have to sync the overlay from time to time, you can do this with

```bash
layman -S
```