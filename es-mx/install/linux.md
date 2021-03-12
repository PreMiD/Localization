---
title: Linux
description: Comenzando con la instalación de PreMiD en Linux
published: true
date: 2020-11-10T18:06:56.520Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:14.124Z
---

La instalación de la aplicación es muy importante, ya que la extensión no puede hacer nada por sí misma.

> Los usuarios de Aur que usan el paquete de DoomLerd deberían estar seguros, como el lo dijo. No recomendamos que lo utilices, pero si lo deseas, puedes usarlo. Gracias a DoomLerd por seguir manejando el repositorio de Aur. 
> 
> {.is-warning}

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
- **[Snapcraft](#snapcraft)** (TL;DR : _nunca_ TM️)
- **[Portable AppImage](#appimage)** (_RECOMENDADA_)
  - [Instrucciones de instalación](#appimageinstall)
  - [Notas adicionales](#appimagenotes)
- [**Distribuciones basadas en Red Hat Enterprise Linux (RHEL)**](#packagecloud)
- [**Distribuciones basadas en Debian y Ubuntu**](#packagecloud)
- [**Distribuciones basadas en arquitectura Arch Linux**](#arch)

<a name="about"></a>

## Acerca de

**PreMiD** es una herramienta simple y configurable que usa la RP (Rich Presence) de la librería de Discord, la cual te permite mostrar qué estás haciendo en tu navegador (Y algunos programas) en el **estado** de tu perfil de Discord.

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

Tecnicamente, toda distribución que pueda correr la **aplicación** [oficial](https://discordapp.com/download) de Discord (No la web o la versión de la Snap Store) puede también correr PreMiD; si has notado que en los últimos años algunas distribuciones de Linux dejan de tener soporte para las arquitecturas de 32-bits (ia32/i686/i386/x86), probablemente lo haremos también. Sin embargo, puedes intentar compilar la aplicación tu mismo, si necesitas usarla en una distribución de 32-bits desesperadamente.</br> Puesto que actualmente utilizamos Electron como motor (¡Discord también lo hace!), sus requisitos también se aplican a esta aplicación:

- Ubuntu ≥ 12.04
- Fedora ≥ 21
- Debian ≥ 8

Se desconoce si las versiones antiguas de otras distribuciones lo soportan, así que simplemente mantén actualizada tu distribución y usa actualizaciones **LTS (Long-Term Support)** si tu distribución las ofrece, ya que son más estables (Evitan lanzamientos de versiones alpha).

<a name="support"></a>

### Soporte técnico

<div>
  <a target="_blank" href="https://discord.premid.app/" title="¡Únete a nuestro Discord!">
    <img height="75px" draggable="false" src="https://discordapp.com/api/guilds/493130730549805057/widget.png?style=banner2" alt="¡Únete a nuestro Discord!">
  </a>
</div>

<a name="credits"></a>

### Créditos

Gracias a:

- @nattadasu, @Rubensei, @Cairo2k18, zany130, Immanuel D, Friskytrash, Alexandre (Y algunos otros chicos los cuales olvidé sus nombres) por propocionar su feedback sobre lanzamientos alpha/beta.
- @apriluwu por mantener las versiones de Gentoo
- @SlimShadyIAm y naka por mantener previamente los Arch User Repository Packages
- La comunidad de Electron por varios paquetes
- Cualquier otra persona que haya contribuido al proyecto de alguna manera.

<a name="license"></a>

### Licencia

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FPreMiD%2FLinux.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FPreMiD%2FLinux?ref=badge_large)

<img src="https://i.imgur.com/ACAxtmA.png" width="100" height="100" align="right"></img>
<a name="snapcraft"></a>

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

<img src="https://raw.githubusercontent.com/PreMiD/Linux/master/.github/packagecloud.png" width="100" height="100" align="right"></img>
<a name="packagecloud"></a>

# PackageCloud

Hemos publicado paquetes deb/rpm en nuestro repositorio de paquetes. Por favor, visítalo en https://packagecloud.io/PreMiD/Linux y descargue su paquete deb/rpm o utilice el script automático.

Para **Ubuntu/Debian**:

```bash
curl -s https://packagecloud.io/install/repositories/PreMiD/Linux/script.deb.sh | sudo bash
```

Para **Fedora/CentOS/RedHat**:

```bash
curl -s https://packagecloud.io/install/repositories/PreMiD/Linux/script.rpm.sh | sudo bash
```

Si el comando no funciona, descargue el archivo **deb/rpm** desde nuestro repositorio packagecloud o sobrescriba la configuración.

<a name="arch"></a>
<img src="https://raw.githubusercontent.com/PreMiD/Linux/86ae2fbd49499785281f388a5305b06e0d3ecfea/.github/iusearchbtw.svg" width="100" height="100" align="right"></img>

## Distribuciones basadas en Arch Linux

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

Si tu distro usa pacman, entonces tienes que instalar primero uno de los helpers. Si no tienes ninguna, se recomienda Yay, lo ejecutas:

```bash
git clone https://aur.archlinux.org/yay.git && cd yay && makepkg -si
```

```bash
yay -S premid
```

Otros ayudantes de AUR/Pacman también funcionan, aunque la funcionalidad de cada uno es diferente para que puedes experimentar problemas mientras los usas.