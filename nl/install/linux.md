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
    <td><a href="https://github.com/PreMiD/Linux/releases"><img src="https://img.shields.io/github/downloads/PreMiD/Linux/total.svg?maxAge=86400" alt="Alle releases"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases/latest"><img src="https://img.shields.io/github/v/release/PreMiD/Linux.svg?maxAge=86400" alt="Laatste releases"><br><img src="https://img.shields.io/github/downloads/PreMiD/Linux/latest/total.svg?maxAge=86400" alt="GitHub releases"></a></td>
  </tr>
</table>

<a name="requirements"></a>

### Vereisten

Technisch gezien kan elke distributie die Discord's [officiële](https://discordapp.com/download) **app** (niet de web of de snap versie) ook PreMiD gebruiken;</br> Zoals u wellicht de afgelopen jaren hebt opgemerkt sommige Linux-distributies begonnen steun voor de 32-bit (ia32/i686/i386/x86) architecturen te laten vallen, en als gevolg daarvan deden wij dat ook. Je kunt de app echter zelf proberen te bouwen als je op een distributie van 32 bits zit.</br> Sinds we momenteel Electron gebruiken als motor (Discord doet dit ook!), gelden de vereisten ook voor deze app:

- Ubuntu ≥ 12.04
- Fedora ≥ 21
- Debian ≥ 8

Het is niet bekend of oudere versies van andere distributies het ondersteunen, dus houd je distributie op de hoogte en gebruik **LTS (Long-Term Support)** releases als je distributie ze aanbiedt, als ze stabieler zijn (vermijd alpha releases).

<a name="support"></a>

### Support

<div>
  <a target="_blank" href="https://discord.gg/WvfVZ8T" title="Join onze Discord!">
    <img height="75px" draggable="false" src="https://discordapp.com/api/guilds/493130730549805057/widget.png?style=banner2" alt="Join onze Discord!">
  </a>
</div>

<a name="credits"></a>

### Credits

Met dank aan:

- @nattadasu, @Rubensei, @Cairo2k18, zany130, Immanuel D, Friskytrash, Alexandre (en een paar andere personen waarvan ik de namen ben vergeten) voor feedback over nightly releases.
- @apriluwu voor het onderhouden van de Gentoo builds
- @SlimShadyIAm en naka voor het onderhouden van de Arch User Repository pakketten
- De Electron community voor verschillende pakketten
- Iedereen die ooit op een of andere manier aan het project heeft bijgedragen.

<a name="license"></a>

### Licentie

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FPreMiD%2FLinux.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FPreMiD%2FLinux?ref=badge_large)

<img src="https://i.imgur.com/ACAxtmA.png" width="100" height="100" align="right"></img>
<a name="snapcraft"></a>

## Snapcraft

Waarschijnlijk nooit, omdat Snap's natuur verhindert dat PreMiD, Discord en de extensie goed kan bereiken</br> Het zou worden gewaardeerd als iemand het kon doen, maar alle ideeën en PRs zijn welkom.</br> P.S: klassieke opsluiting werkt ook niet, dus maak er geen bezwaar tegen.

<img src="https://i.imgur.com/qEZOOfU.png" width="100" height="100" align="right"></img>
<a name="appimage"></a>

## Portable AppImage

Het AppImage pakket is aanbevolen als Discord voor je werkt maar andere PreMiD pakketten (.deb, .rpm, etc) niet.

<a name="appimageinstall"></a>

### Installatie instructies

```bash
wget https://github.com/PreMiD/Linux/releases/latest/download/PreMiD-Portable.AppImage && chmod a+x PreMiD*.AppImage
```

```bash
# Gewoon dubbelklikken of uitvoeren
./PreMiD*.AppImage
```

<a name="appimagenotes"></a>

### Aanvullende notities

Ofwel als u PreMiD wilt proberen of wilt u het niet installeren, dit is de beste, het is altijd up to date maar _START NIET AUTOMATISCH MET HET SYSTEEM!_</br>Als je het moe wordt om het elke keer te moeten openen, gebruik dan de andere pakketten (volgens jouw distributie).

<a name="arch"></a>
<img src="https://i.imgur.com/NBevNlU.png" width="100" height="100" align="right"></img>

## Arch Linux gebaseerde distributies

Gebruikt [Arch User Repository](https://aur.archlinux.org/packages/premid);</br> Ondersteunde distributies zijn __, Manjaro, Anarchy, Artix, Arco, ArchLabs, Endeavour, Archman, BlackArch, Liri OS en [elke die installeren vanuit AUR](https://wiki.archlinux.org/index.php/Arch-based_distributions#Active) ondersteunt.

<a name="archinstall"></a>

### Installatie instructies

```bash
# Yay gebruiken (aanbevolen)
yay -S premid
```

```bash
# Met pakku
pakku -S premid
```

```bash
# Met trizen
trizen -S premid
```

```bash
# Met pacaur
pacaur -S premid
```

```bash
# ... je krijgt het punt
```

of handmatig vanuit de [Arch User Repository](https://aur.archlinux.org/packages/premid) als je weet wat je aan het doen bent.

<a name="archnotes"></a>

### Aanvullende notities

Als je distro pacman gebruikt, dan moet je eerst een van de helpers installeren. Als je er geen hebt, wordt Yay aangeraden, voer uit :

```bash
git clone https://aur.archlinux.org/yay.git && cd yay && makepkg -si
```

```bash
yay -S premid
```

Andere AUR/Pacman helpers werken ook, hoewel ieders functionaliteit anders is waardoor je problemen kunt ondervinden tijdens het gebruik ervan.

<img src="https://i.imgur.com/Kv1X2to.png" width="100" height="100" align="right"></img>
<a name="gentoo"></a>

## Gentoo Linux

Hetzelfde geldt voor de derivaten, zoals ColverOS, Clip-OS, Sabayon, Bicom Systems PBXware, [etc](https://wiki.gentoo.org/wiki/Distributions_based_on_Gentoo#Active_projects).

<a name="gentooinstall"></a>

### Installatie instructies

```bash
# Voeg de overlay toe met behulp van layman
layman -S && layman -a apriluwu
```

```bash
# Installeren via portage
emerge -av app-misc/premid
```

<a name="gentoonotes"></a>

### Aanvullende notities

Het getoonde installatiecommando gebruikt layman, het is in de officiële repositories via `app-portage/layman`.<br> Om updates te krijgen moet je af en toe de overlay synchroniseren, kun je dit doen met

```bash
layman -S
```