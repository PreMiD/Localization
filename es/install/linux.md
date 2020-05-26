---
title: Linux
description: Comenzando con la instalación de PreMiD en Linux
published: true
date: 2020-04-27T12:52:46.261Z
tags:
---

> El inicio automático en Linux está ahora disponible desde la aplicación en lugar de la extensión.{.is-warning}

La instalación de la aplicación es muy importante, ya que la extensión no puede hacer nada por sí misma.

## Lista de contenidos

- **[Acerca de](#about)**
  - [Estadísticas](#stats)
  - [Requisitos](#requirements)
  - Ejemplos (Pronto)
  - FAQs (Pronto)
  - Construcción (Pronto)
  - [Soporte](#support)
  - [Créditos](#credits)
  - [Licencia](#license)
- **[Snapcraft](#snapcraft)** (TL;DR : _never_ TM️)
- **[Portable AppImage](#portable-appimage)** (_RECOMMENDED_)
  - [Instrucciones de instalación](#installation-instructions)
  - [Notas adicionales](#additional-notes)
- **Distribuciones basadas en Red Hat Enterprise Linux (RHEL)** (Pronto, usa [esto](#portable-appimage) por ahora)
- **Distribuciones basadas en Debian y Ubuntu** (Pronto, usa [esto](#portable-appimage) por ahora)
- **[Distribuciones basadas en arquitectura Linux](#arch-linux-based-distributions)**
  - [Instrucciones de instalación](#installation-instructions-1)
  - [Notas adicionales](#additional-notes-1)
- **[Gentoo Linux](#gentoo-linux)**
  - [Instrucciones de instalación](#installation-instructions-2)
  - [Notas adicionales](#additional-notes-2)

<a name="about"></a>

## Acerca de

**PreMiD** es una simple y configurable herramienta que usa la RP (RIch Presence) de la librería de Discord, la cual te permite mostrar que estás haciendo en tu navegador (Y algunos programas) en el **estado** de tu perfil de Discord.

<a name="stats"></a>

### Estadísticas

<table>
  <tr>
    <th>Deployment</th>
    <th>Descargas totales</th>
    <th>Versión más reciente</th>
  </tr>
  <tr>
    <td><a href="https://github.com/PreMiD/Linux/actions"><img src="https://github.com/PreMiD/Linux/workflows/CI/badge.svg?branch=master&event=push" alt="CI"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases"><img src="https://img.shields.io/github/downloads/PreMiD/Linux/total.svg?maxAge=86400" alt="All releases"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases/latest"><img src="https://img.shields.io/github/v/release/PreMiD/Linux.svg?maxAge=86400" alt="Versión más reciente"><br><img src="https://img.shields.io/github/downloads/PreMiD/Linux/latest/total.svg?maxAge=86400" alt="Github releases"></a></td>
  </tr>
</table>

<a name="requirements"></a>

### Requisitos

Tecnicamente, toda distribución que pueda correr la **aplicación** [oficial](https://discordapp.com/download) de Discord (No la web o la versión de la Snap Store) puede correr PreMiD también; si has notado que en los últimos años algunas distribuciones de Linux dejan de tener soporte para las arquitecturas de 32-bits (ia32/i686/i386/x86), probablemente lo haremos también. You can, however, try to build the app yourself if you desperately need to use it on a 32-bit distribution.</br> Since we currently use Electron as an engine (Discord does too!), its requirements also apply to this app :

- Ubuntu ≥ 12.04
- Fedora ≥ 21
- Debian ≥ 8

It is unknown whether older versions of other distributions support it, so just keep your distribution updated and use **LTS (Long-Term Support)** releases if your distribution offers them, as they're more stable (avoid alpha releases).

<a name="support"></a>

### Soporte

<div>
  <a target="_blank" href="https://discord.gg/WvfVZ8T" title="Join our Discord!">
    <img height="75px" draggable="false" src="https://discordapp.com/api/guilds/493130730549805057/widget.png?style=banner2" alt="Join our Discord!">
  </a>
</div>

<a name="credits"></a>

### Créditos

Thanks to :

- @nattadasu, @Rubensei, @Cairo2k18, zany130, Immanuel D, Friskytrash, Alexandre (and few other guys whom I forgot their names) for providing feedback on nightly releases.
- @apriluwu for maintaining the Gentoo builds
- @SlimShadyIAm and naka for formerly maintaining the Arch User Repository packages
- The Electron community for various packages
- Anyone else who has ever contributed to the project in any way.

<a name="license"></a>

### Licencia

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

### Instrucciones de instalación

```bash
wget https://github.com/PreMiD/Linux/releases/latest/download/PreMiD-Portable.AppImage && chmod a+x PreMiD*.AppImage
```

```bash
# Just double-click it or run
./PreMiD*.AppImage
```

<a name="appimagenotes"></a>

### Notas adicionales

Either if you want to try PreMiD or just don't want to install it, this one's the best, it's always up to date but _DOESN'T AUTO-START WITH THE SYSTEM!_</br>If you get tired of having to open it each time, use the other packages (according to your distribution).

<a name="arch"></a>
<img src="https://i.imgur.com/NBevNlU.png" width="100" height="100" align="right"></img>

## Distribuciones basadas en arquitectura Linux

Uses [Arch User Repository](https://aur.archlinux.org/packages/premid);</br> Supported distributions are _itself_, Manjaro, Anarchy, Artix, Arco, ArchLabs, Endeavour, Archman, BlackArch, Liri OS and [every one that supports installing from AUR](https://wiki.archlinux.org/index.php/Arch-based_distributions#Active).

<a name="archinstall"></a>

### Instrucciones de instalación

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

### Notas adicionales

If your distro uses pacman, then you have to install one of the helpers first. If you don't have any, Yay is recommended, run :

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

### Instrucciones de instalación

```bash
# Add the overlay using layman
layman -S && layman -a apriluwu
```

```bash
# Install via portage
emerge -av app-misc/premid
```

<a name="gentoonotes"></a>

### Notas adicionales

The shown install command uses layman, it is in the official repositories through `app-portage/layman`.<br> To get updates you will have to sync the overlay from time to time, you can do this with

```bash
layman -S
```