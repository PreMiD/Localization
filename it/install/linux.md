---
title: Linux
description: Per iniziare con un'installazione di PreMiD su Linux
published: vero
date: 2020-11-10T18:06:56.520Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:14.124Z
---

L'installazione dell'applicazione è molto importante, poiché l'estensione non può fare nulla da sola.

> Aur users that use DoomLerd's package should be safe as he says. We are not recommending to use it, but if you want you can still use it. Thanks to DoomLerd for handling aur repo still. 
> 
> {.is-warning}

## Pagina dei Contenuti

- **[Info su](#about)**
  - [Statistiche](#stats)
  - [Requisiti](#requirements)
  - Esempi (Soon™)
  - FAQ (soon™)
  - Build (soon™)
  - [Supporto](#support)
  - [Crediti](#credits)
  - [Licenze](#license)
- **[Snapcraft](#snapcraft)** (TL;DR : _M A I_ ™️)
- **[Portable AppImage](#appimage)** (_RACCOMANDATO_)
  - [Istruzioni per Installare](#appimageinstall)
  - [Note aggiuntive](#appimagenotes)
- [**Red Hat Enterprise Linux (RHEL) based distributions**](#packagecloud)
- [**Distribuzioni basate su Debian e Ubuntu**](#packagecloud)
- [**Distribuzioni basate su Arch Linux**](#arch)

<a name="about"></a>

## Info su

**PreMiD** è semplice, utilità configurabile che utilizza la libreria RP di Discord ( Rich Presence ) che ti permette di mostrare ciò che stai facendo sul web ( e alcuni programmi ) nel tuo profilo di Discord come **stato di gioco**.

<a name="stats"></a>

### Statistiche

<table>
  <tr>
    <th>Deployment</th>
    <th>Numero di Download</th>
    <th>Ultima Release</th>
  </tr>
  <tr>
    <td><a href="https://github.com/PreMiD/Linux/actions"><img src="https://github.com/PreMiD/Linux/workflows/CI/badge.svg?branch=master&event=push" alt="CI"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases"><img src="https://img.shields.io/github/downloads/PreMiD/Linux/total.svg?maxAge=86400" alt="Tutte le release"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases/latest"><img src="https://img.shields.io/github/v/release/PreMiD/Linux.svg?maxAge=86400" alt="Ultima Release"><br><img src="https://img.shields.io/github/downloads/PreMiD/Linux/latest/total.svg?maxAge=86400" alt="Versioni di Github"></a></td>
  </tr>
</table>

<a name="requirements"></a>

### Requisiti

Tecnicamente ogni distribuzione in grado di eseguire l'app [ufficiale](https://discordapp.com/download) **di Discord** (non il web o la versione istantanea) può funzionare anche PreMiD;</br> Come potresti aver notato negli ultimi anni, alcune distribuzioni Linux hanno iniziato a eliminare il supporto per le architetture a 32 bit (ia32/i686/i386/x86) e di conseguenza, anche noi. Comunque, Puoi provare a crearti l'app da solo se hai tanto di una distribuzione a 32-bit. </br> Visto che usiamo Elector come engine (Anche Discord lo usa!), questi sono i requisiti minimi:

- Ubuntu ≥ 12.04
- Fedora ≥ 21
- Debian ≥ 8

Non è noto se le vecchie versioni di altre distribuzioni lo supportano, quindi mantieni la tua distribuzione aggiornata e utilizza **LTS (Supporto a Lungo Termine)** release se la tua distribuzione li offre, visto che sono più stabili (evita versioni alfa).

<a name="support"></a>

### Supporto

<div>
  <a target="_blank" href="https://discord.premid.app/" title="Unisciti al nostro Discord!">
    <img height="75px" draggable="false" src="https://discordapp.com/api/guilds/493130730549805057/widget.png?style=banner2" alt="Unisciti al nostro Discord!">
  </a>
</div>

<a name="credits"></a>

### Crediti

Grazie mille a:

- @nattadasu, @Rubensei, @Cairo2k18, zany130, Immanuel D, Friskytrash, Alexandre (and few other guys whom I forgot their names) per i feedback sulle versioni beta.
- @apriluwu per la manuntenzione del Gentoo Builds
- @SlimShadyIAm and naka per aver mantenuto i pachetti Arch User Repository
- La community di Electron per i vari pacchetti
- E tutti coloro che hanno contribuito al progetto in qualsiasi modo.

<a name="license"></a>

### Licenze

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FPreMiD%2FLinux.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FPreMiD%2FLinux?ref=badge_large)

<img src="https://i.imgur.com/ACAxtmA.png" width="100" height="100" align="right"></img>
<a name="snapcraft"></a>

## Portable AppImage

AppImage package è raccomandato se Discord funziona MA pacchetti di PreMiD (.deb, .rpm etc...) non vanno.

<a name="appimageinstall"></a>

### Istruzioni per Installare

```bash
wget https://github.com/PreMiD/Linux/releases/latest/download/PreMiD-Portable.AppImage && chmod a+x PreMiD*.AppImage
```

```bash
# Basta fare doppio clic su di esso o eseguire
./PreMiD*.AppImage
```

<a name="appimagenotes"></a>

### Note aggiuntive

Se vuoi provare PreMiD o semplicemente non vuoi installarlo, questo è il meglio, è sempre aggiornato ma _NON FARLO PARTIRE CON IL SISTEMA!</br>Se sei stanco di doverlo aprire ogni volta, usa gli altri pacchetti (secondo la tua distribuzione).

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

## Distribuzioni basate su Arch Linux

Usa [Arch User Repository](https://aur.archlinux.org/packages/premid);</br> Le distribuzioni supportate sono _stesse_, Manjaro, Anarchy, Artix, Arco, ArchLabs, Endeavour, Archman, BlackArch, Liri OS e [ciascuno che supporta l'installazione da AUR](https://wiki.archlinux.org/index.php/Arch-based_distributions#Active).

<a name="archinstall"></a>

### Istruzioni per Installare

```bash
# Utilizzando yay (consigliato)
yay -S premid
```

```bash
# Utilizzando pakku
pakku -S premid
```

```bash
# Utilizzando il trizen
trizen -S premid
```

```bash
# Utilizzando pakku
pakku -S premid
```

```bash
# ... ci siamo capiti, spero.
```

o manualmente dal [Arch User Repository](https://aur.archlinux.org/packages/premid) se sai cosa stai facendo.

<a name="archnotes"></a>

### Note aggiuntive

Se la tua distro utilizza pacman, devi prima installare uno degli helper. Se non ce l'hai, Yay è raccomandato, esegui:

```bash
git clone https://aur.archlinux.org/yay.git && cd yay && makepkg -si
```

```bash
yay -S premid
```

Anche altri helper AUR/Pacman funzionano, anche se ogni funzionalità è diversa, quindi potresti  riscontrare dei problemi durante l'utilizzo.