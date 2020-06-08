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
- **[Portable AppImage](#portable-appimage)** (_RECOMENDADA_)
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
    <th>Despliegue</th>
    <th>Descargas totales</th>
    <th>Versión más reciente</th>
  </tr>
  <tr>
    <td><a href="https://github.com/PreMiD/Linux/actions"><img src="https://github.com/PreMiD/Linux/workflows/CI/badge.svg?branch=master&event=push" alt="CI"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases"><img src="https://img.shields.io/github/downloads/PreMiD/Linux/total.svg?maxAge=86400" alt="Todas las versiones"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases/latest"><img src="https://img.shields.io/github/v/release/PreMiD/Linux.svg?maxAge=86400" alt="Versión más reciente"><br><img src="https://img.shields.io/github/downloads/PreMiD/Linux/latest/total.svg?maxAge=86400" alt="Versiones de Github"></a></td>
  </tr>
</table>

<a name="requirements"></a>

### Requisitos

Tecnicamente, toda distribución que pueda correr la **aplicación** [oficial](https://discordapp.com/download) de Discord (No la web o la versión de la Snap Store) puede correr PreMiD también; si has notado que en los últimos años algunas distribuciones de Linux dejan de tener soporte para las arquitecturas de 32-bits (ia32/i686/i386/x86), probablemente lo haremos también. Sin embargo, puedes intentar construir la aplicación tu mismo, si necesitas usarla en una distribución de 32-bits desesperadamente.</br> Puesto que actualmente utilizamos Electron como motor (¡Discord también lo hace!), sus requisitos también se aplican a esta aplicación:

- Ubuntu ≥ 12.04
- Fedora ≥ 21
- Debian ≥ 8

Se desconoce si las versiones antiguas de otras distribuciones lo soportan, así que simplemente mantén actualizada tu distribución y usa actualizaciones **LTS (Long-Term Support)** si tu distribución las ofrece, ya que son más estables (Evitan lanzamientos de versiones alpha).

<a name="support"></a>

### Soporte

<div>
  <a target="_blank" href="https://discord.gg/WvfVZ8T" title="¡Únete a nuestro Discord!">
    <img height="75px" draggable="false" src="https://discordapp.com/api/guilds/493130730549805057/widget.png?style=banner2" alt="¡Únete a nuestro Discord!">
  </a>
</div>

<a name="credits"></a>

### Créditos

Gracias a:

- @nattadasu, @Rubensei, @Cairo2k18, zany130, Immanuel D, Friskytrash, Alexandre (Y algunos otros chicos los cuales olvidé sus nombres) por propocionar su feedback sobre lanzamientos nocturnos.
- @apriluwu por mantener las Gentoo builds
- @SlimShadyIAm y naka por mantener previamente los Repository Packages de la arquitectura del usuario
- La comunidad de Electron por varios paquetes
- Cualquier otra persona que haya contribuido al proyecto de alguna manera.

<a name="license"></a>

### Licencia

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FPreMiD%2FLinux.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FPreMiD%2FLinux?ref=badge_large)

<img src="https://i.imgur.com/ACAxtmA.png" width="100" height="100" align="right"></img>
<a name="snapcraft"></a>

## Snapcraft

Probablemente nunca, ya que la naturaleza de Snap impide a PreMiD llegar a Discord y a la extensión correctamente,</br> agradecería que alguien lo hiciera, cualquier idea o PRs son bienvenidos.</br> PD: La classic confinement tampoco funciona, así que no te molestes en hacer una sugerencia al respecto.

<img src="https://i.imgur.com/qEZOOfU.png" width="100" height="100" align="right"></img>
<a name="appimage"></a>

## Portable AppImage

El paquete AppImage es el recomendado si Discord funciona para ti pero otros paquetes de PreMiD (.deb, .rpm, etc) no.

<a name="appimageinstall"></a>

### Instrucciones de instalación

```bash
wget https://github.com/PreMiD/Linux/releases/latest/download/PreMiD-Portable.AppImage && chmod a+x PreMiD*.AppImage
```

```bash
# Solo haz doble click en él o "Ejecutar"
./PreMiD*.AppImage
```

<a name="appimagenotes"></a>

### Notas adicionales

Si quieres probar PreMiD o simplemente no quieres instalarlo, este es el mejor, está siempre actualizado pero _¡NO SE INICIA AUTOMÁTICAMENTE CON EL SISTEMA!_</br> Si te cansas de tener que abrirlo cada vez, usa los otros paquetes (de acuerdo a tu distribución).

<a name="arch"></a>
<img src="https://i.imgur.com/NBevNlU.png" width="100" height="100" align="right"></img>

## Distribuciones basadas en arquitectura Linux

Usa la [Arch User Repository](https://aur.archlinux.org/packages/premid);</br> Las distribuciones soportadas son _las mismas_, Manjaro, Anarchy, Artix, Arco, ArchLabs, Endeavour, Archman, BlackArch, Liri OS y [cualquiera que soporte instalación desde AUR](https://wiki.archlinux.org/index.php/Arch-based_distributions#Active).

<a name="archinstall"></a>

### Instrucciones de instalación

```bash
# Usando yay (Recomendado)
yay -S premid
```

```bash
# Usando pakku
pakku -S premid
```

```bash
# Usando trizen
trizen -S premid
```

```bash
# Usando pacaur
pacaur -S premid
```

```bash
# ... Bueno, ¿Entendiste el punto, no?
```

O manualmente desde la [Arch User Repository](https://aur.archlinux.org/packages/premid) si tu sabes que estás haciendo.

<a name="archnotes"></a>

### Notas adicionales

Si tu distro usa pacman, entonces tienes que instalar uno de los ayudantes primero. Si tu no tienes ninguna, se recomienda Yay, lo ejecutas:

```bash
git clone https://aur.archlinux.org/yay.git && cd yay && makepkg -si
```

```bash
yay -S premid
```

Otros ayudantes de AUR/Pacman también funcionan, aunque la funcionalidad de cada uno es diferente para que puedes experimentar problemas mientras los usas.

<img src="https://i.imgur.com/Kv1X2to.png" width="100" height="100" align="right"></img>
<a name="gentoo"></a>

## Gentoo Linux

Lo mismo se aplica a sus derivados, como ColverOS, Clip-OS, Sabayon, Bicom Systems PBXware[etc](https://wiki.gentoo.org/wiki/Distributions_based_on_Gentoo#Active_projects).

<a name="gentooinstall"></a>

### Instrucciones de instalación

```bash
# Agrega el overlay usando Layman
layman -S && layman -a apriluw
```

```bash
# Instalar a través de portage
emerge -av app-misc/premid
```

<a name="gentoonotes"></a>

### Notas adicionales

El comando de instalación mostrado usa Layman, este está en los repositorios oficiales a través de `app-portage/layman`.<br> Para obtener actualizaciones tendrás que sincronizar el overlay de vez en cuando, esto se hace con

```bash
layman -S
```