---
title: Linux
description: Darba uzsākšana ar PreMiD Linux instalāciju
published: true
date: 2020-11-10T18:06:56.520Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:14.124Z
---

Lietotnes uzstādīšana ir ļoti svarīga, jo paplašinājums pats par sevi neko nevar izdarīt.

> Aur lietotāji, kuri izmanto DoomLerd paketi, jābūt drošiem, kā viņš saka. Mēs neiesakām to izmantot, bet, ja vēlaties, jūs to joprojām to varat izmantot. Paldies DoomLerd par to, ka viņš joprojām uztur aur repozitoriju. 
> 
> {.is-warning}

## Satura rādītājs

- **[Par](#about)**
  - [Statistika](#stats)
  - [Prasības](#requirements)
  - Piemēri (drīzumā)
  - BUJ (drīzumā)
  - Būvēšana (drīzumā)
  - [Atbalsts](#support)
  - [Beigu titri](#credits)
  - [Licence](#license)
- **[Snapcraft](#snapcraft)** (TL;DR : _nekad_ ™️)
- **[ Pārnēsājamais AppImage](#appimage)** (_IETEICAMS_)
  - [Instalēšanas instrukcija](#appimageinstall)
  - [Papildu piezīmes](#appimagenotes)
- [**Red hat Enterprise Linux (RHEL) balstītas distribūcijas**](#packagecloud)
- [**Debian un Ubuntu balstītas distribūcijas**](#packagecloud)
- [**Arch Linux balstītas distribūcijas**](#arch)

<a name="about"></a>

## Par

**PreMiD** ir vienkārša, konfigurējama programma, kas izmanto Discord RP ( RIch Presence) bibliotēku, kas ļauj jums redzēt, ko jūs darāt internetā ( un dažās lietotnēs ) jūsus Discord profilā, kā **spēlē statusu**.

<a name="stats"></a>

### Statistika

<table>
  <tr>
    <th>Izvietošana</th>
    <th>Kopējais lejupielāžu skaits</th>
    <th>Jaunākais izlaidums</th>
  </tr>
  <tr>
    <td><a href="https://github.com/PreMiD/Linux/actions"><img src="https://github.com/PreMiD/Linux/workflows/CI/badge.svg?branch=master&event=push" alt="CI"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases"><img src="https://img.shields.io/github/downloads/PreMiD/Linux/total.svg?maxAge=86400" alt="All releases"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases/latest"><img src="https://img.shields.io/github/v/release/PreMiD/Linux.svg?maxAge=86400" alt="Jaunākais izlaidums"><br><img src="https://img.shields.io/github/downloads/PreMiD/Linux/latest/total.svg?maxAge=86400" alt="Github releases"></a></td>
  </tr>
</table>

<a name="requirements"></a>

### Prasības

Tehniski, katra distribūcija, kas var palaist Discord [oficiālo](https://discordapp.com/download) **lietotni** (nevis interneta vai snap versiju) var palaist arī PreMiD;</br> Kā jūs, iespējams, pamanījāt pēdējos gados, dažas Linux disitribūcijas sāka beigt atbalstīt 32-bit (ia32/i686/i386/x86) arhitektūras, kā rezultātā mēs arī to izdarījām. Jūs varat mēģināt pats izveidot lietotni, ja jums to ļoti vajag izmantot to uz 32-bit distribūcijas.</br> Tā kā šobrīd izmantojam Electron kā motoru (arī Discord to izmanto!), tā prasības attiecas arī uz šo lietotni:

- Ubuntu ≥ 12.04
- Fedora ≥ 21
- Debian ≥ 8

It is unknown whether older versions of other distributions support it, so just keep your distribution updated and use **LTS (Long-Term Support)** releases if your distribution offers them, as they're more stable (avoid alpha releases).

<a name="support"></a>

### Atbalsts

<div>
  <a target="_blank" href="https://discord.premid.app/" title="Pievienojies mūsu Discord serverim!">
    <img height="75px" draggable="false" src="https://discordapp.com/api/guilds/493130730549805057/widget.png?style=banner2" alt="Pievienojies mūsu Discord serverim!">
  </a>
</div>

<a name="credits"></a>

### Beigu titri

Thanks to :

- @nattadasu, @Rubensei, @Cairo2k18, zany130, Immanuel D, Friskytrash, Alexandre (and few other guys whom I forgot their names) for providing feedback on nightly releases.
- @apriluwu for maintaining the Gentoo builds
- @SlimShadyIAm and naka for formerly maintaining the Arch User Repository packages
- The Electron community for various packages
- Anyone else who has ever contributed to the project in any way.

<a name="license"></a>

### Licence

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FPreMiD%2FLinux.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FPreMiD%2FLinux?ref=badge_large)

<img src="https://i.imgur.com/ACAxtmA.png" width="100" height="100" align="right"></img>
<a name="snapcraft"></a>

## Portable AppImage

The AppImage package is the recommended one if Discord works for you but other PreMiD packages (.deb, .rpm, etc) don't.

<a name="appimageinstall"></a>

### Instalēšanas instrukcija

```bash
wget https://github.com/PreMiD/Linux/releases/latest/download/PreMiD-Portable.AppImage && chmod a+x PreMiD*.AppImage
```

```bash
# Just double-click it or run
./PreMiD*.AppImage
```

<a name="appimagenotes"></a>

### Papildu piezīmes

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

## Arch Linux balstītas distribūcijas

Uses [Arch User Repository](https://aur.archlinux.org/packages/premid);</br> Supported distributions are _itself_, Manjaro, Anarchy, Artix, Arco, ArchLabs, Endeavour, Archman, BlackArch, Liri OS and [every one that supports installing from AUR](https://wiki.archlinux.org/index.php/Arch-based_distributions#Active).

<a name="archinstall"></a>

### Instalēšanas instrukcija

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

### Papildu piezīmes

If your distro uses pacman, then you have to install one of the helpers first. If you don't have any, Yay is recommended, run :

```bash
git clone https://aur.archlinux.org/yay.git && cd yay && makepkg -si
```

```bash
yay -S premid
```

Other AUR/Pacman helpers work as well, although each one's functionality is different so you may face issues while using them.