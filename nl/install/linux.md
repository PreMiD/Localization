---
title: Linux
description: Aan de slag met de PreMiD installatie op Linux
published: true
date: 2020-11-10T18:06:56.520Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:14.124Z
---

De installatie van de applicatie is van groot belang, omdat de extensie op zichzelf niets kan doen.

> Aur-gebruikers die DoomLerds pakket gebruiken moeten veilig zijn zoals hij zegt. We raden echter niet aan dit te gebruiken, maar als je wilt kun je het wel gebruiken. Dank aan DoomLerd voor het verwerken van aur-repo. 
> 
> {.is-warning}

## Inhoudsopgave

- **[Over ons](#about)**
  - [Statistieken](#stats)
  - [Requirements](#requirements)
  - Voorbeelden (binnenkort)
  - Veelgestelde vragen (binnenkort)
  - Bouwen (binnenkort)
  - [Support](#support)
  - [Credits](#credits)
  - [Licentie](#license)
- **[Snapcraft](#snapcraft)** (TL;DR : _never_ ™️)
- **[Portable AppImage](#appimage)** (_AANBEVOLEN_)
  - [Installatie instructies](#appimageinstall)
  - [Aanvullende notities](#appimagenotes)
- [**Red Hat Enterprise Linux (RHEL)-gebaseerde distributies**](#packagecloud)
- [**Debian- en Ubuntu-gebaseerde distributies**](#packagecloud)
- [**Arch Linux gebaseerde distributies**](#arch)

<a name="about"></a>

## About

**PreMiD** is een eenvoudige configureerbare hulpprogramma dat de Discord's RP ( Rich Presence ) bibliotheek gebruikt, waarmee je kunt laten zien wat je doet op het web (en een paar programma's) in je Discord-profiel als **afspeelstatus**.

<a name="stats"></a>

### Stats

<table>
  <tr>
    <th>Deployment</th>
    <th>Totale downloads</th>
    <th>Laatste releases</th>
  </tr>
  <tr>
    <td><a href="https://github.com/PreMiD/Linux/actions"><img src="https://github.com/PreMiD/Linux/workflows/CI/badge.svg?branch=master&event=push" alt="CI"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases"><img src="https://img.shields.io/github/downloads/PreMiD/Linux/total.svg?maxAge=86400" alt="Alle releases"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases/latest"><img src="https://img.shields.io/github/v/release/PreMiD/Linux.svg?maxAge=86400" alt="Latest release"><br><img src="https://img.shields.io/github/downloads/PreMiD/Linux/latest/total.svg?maxAge=86400" alt="GitHub releases"></a></td>
  </tr>
</table>

<a name="requirements"></a>

### Requirements

Technisch gezien kan elke distributie die Discord's [officiële](https://discordapp.com/download) **app** (niet de web of de snap versie) ook PreMiD gebruiken;</br> Zoals u wellicht de afgelopen jaren hebt opgemerkt sommige Linux-distributies begonnen steun voor de 32-bit (ia32/i686/i386/x86) architecturen te laten vallen, en als gevolg daarvan deden wij dat ook. Je kunt de app echter zelf proberen te bouwen als je op een distributie van 32 bits zit.</br> Sinds we momenteel Electron gebruiken als motor (Discord doet dit ook!), gelden de vereisten ook voor deze app:

- Ubuntu ≥ 12.04
- Fedora ≥ 21
- Debian ≥ 8

Het is niet bekend of oudere versies van andere distributies het ondersteunen, dus houd je distributie op de hoogte en gebruik **LTS (Long-Term Support)** releases als je distributie ze aanbiedt, als ze stabieler zijn (vermijd alpha releases).

<a name="support"></a>

### Support

<div>
  <a target="_blank" href="https://discord.premid.app/" title="Word lid van onze Discord!">
    <img height="75px" draggable="false" src="https://discordapp.com/api/guilds/493130730549805057/widget.png?style=banner2" alt="Join our Discord!">
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

### License

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FPreMiD%2FLinux.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FPreMiD%2FLinux?ref=badge_large)

<img src="https://i.imgur.com/ACAxtmA.png" width="100" height="100" align="right"></img>
<a name="snapcraft"></a>

## Portable AppImage

Het AppImage pakket is aanbevolen als Discord voor je werkt maar andere PreMiD pakketten (.deb, .rpm, etc) niet.

<a name="appimageinstall"></a>

### Installation instructions

```bash
wget https://github.com/PreMiD/Linux/releases/latest/download/PreMiD-Portable.AppImage && chmod a+x PreMiD*.AppImage
```

```bash
# Gewoon dubbelklikken of uitvoeren
./PreMiD*.AppImage
```

<a name="appimagenotes"></a>

### Additional notes

Ofwel als u PreMiD wilt proberen of wilt u het niet installeren, dit is de beste, het is altijd up to date maar _START NIET AUTOMATISCH MET HET SYSTEEM!_</br>Als je het moe wordt om het elke keer te moeten openen, gebruik dan de andere pakketten (volgens jouw distributie).

<img src="https://raw.githubusercontent.com/PreMiD/Linux/master/.github/packagecloud.png" width="100" height="100" align="right"></img>
<a name="packagecloud"></a>

# PackageCloud

We hebben deb-/rpm-pakketten uitgebracht op onze packagecloud-repo. Neem een kijkje op https://packagecloud.io/PreMiD/Linux en download je deb-/rpm-pakket of gebruik een automatisch script.

Voor **Ubuntu/Debian**:

```bash
curl -s https://packagecloud.io/install/repositories/PreMiD/Linux/script.deb.sh | sudo bash
```

Voor **Fedora/CentOS/RedHat**:

```bash
curl -s https://packagecloud.io/install/repositories/PreMiD/Linux/script.rpm.sh | sudo bash
```

Als het commando niet werkt, download dan het **deb-/rpm-**bestand van onze packagecloud-repo of overschrijf instellingen.

<a name="arch"></a>
<img src="https://raw.githubusercontent.com/PreMiD/Linux/86ae2fbd49499785281f388a5305b06e0d3ecfea/.github/iusearchbtw.svg" width="100" height="100" align="right"></img>

## Arch Linux based distributions

Gebruikt [Arch User Repository](https://aur.archlinux.org/packages/premid);</br> Ondersteunde distributies zijn __, Manjaro, Anarchy, Artix, Arco, ArchLabs, Endeavour, Archman, BlackArch, Liri OS en [elke die installeren vanuit AUR](https://wiki.archlinux.org/index.php/Arch-based_distributions#Active) ondersteunt.

<a name="archinstall"></a>

### Installation instructions

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

### Additional notes

Als je distro pacman gebruikt, dan moet je eerst een van de helpers installeren. Als je er geen hebt, wordt Yay aangeraden. Voer uit:

```bash
git clone https://aur.archlinux.org/yay.git && cd yay && makepkg -si
```

```bash
yay -S premid
```

Andere AUR/Pacman helpers werken ook, hoewel ieders functionaliteit anders is waardoor je problemen kunt ondervinden tijdens het gebruik ervan.