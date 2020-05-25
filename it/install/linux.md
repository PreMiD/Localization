---
title: Linux
description: Per iniziare con un'installazione di PreMiD su Linux
published: vero
date: 2020-04-27T12:52:46.261Z
tags:
---

> Toggling auto-launch on Linux is now available from the app instead of the extension.{.is-warning}

L'installazione dell'applicazione è molto importante, poiché l'estensione non può fare nulla da sola.

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
- **[Portable AppImage](#portable-appimage)** (_RACCOMANDATO_)
  - [Istruzioni per Installare](#installation-instructions)
  - [Note aggiuntive](#additional-notes)
- **Distribuzioni basate su Red Hat Enterprise Linux (RHEL)** (presto, utilizza [questo](#portable-appimage) per ora)
- **Distribuzioni basate su Red Hat Enterprise Linux (Rhel)** (presto, utilizza [questo](#portable-appimage) per ora)
- **[Distribuzioni basate su Arch Linux](#arch-linux-based-distributions)**
  - [Istruzioni per Installare](#installation-instructions-1)
  - [Note aggiuntive](#additional-notes-1)
- **[Gentoo Linux](#gentoo-linux)**
  - [Istruzioni per Installare](#installation-instructions-2)
  - [Note aggiuntive](#additional-notes-2)

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
    <td><a href="https://github.com/PreMiD/Linux/releases"><img src="https://img.shields.io/github/downloads/PreMiD/Linux/total.svg?maxAge=86400" alt="All releases"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases/latest"><img src="https://img.shields.io/github/v/release/PreMiD/Linux.svg?maxAge=86400" alt="Ultima Release"><br><img src="https://img.shields.io/github/downloads/PreMiD/Linux/latest/total.svg?maxAge=86400" alt="Github releases"></a></td>
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
  <a target="_blank" href="https://discord.gg/WvfVZ8T" title="Join our Discord!">
    <img height="75px" draggable="false" src="https://discordapp.com/api/guilds/493130730549805057/widget.png?style=banner2" alt="Join our Discord!">
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

## Snapcraft

Probabilmente non lo vedremo mai visto che per come è fatto Snap, va a bloccare automaticamente ogni contatto che PreMiD cerca di fare con Discord e con l'estenzione.,</br> Se qualcuno sa come farlo funzionare o ha qualche idea geniale, è benvenuto!</br> P.S il confinimento classico non funziona.

<img src="https://i.imgur.com/qEZOOfU.png" width="100" height="100" align="right"></img>
<a name="appimage"></a>

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

<a name="arch"></a>
<img src="https://i.imgur.com/NBevNlU.png" width="100" height="100" align="right"></img>

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

<img src="https://i.imgur.com/Kv1X2to.png" width="100" height="100" align="right"></img>
<a name="gentoo"></a>

## Gentoo Linux

Lo stesso vale per le sue derivate, come ColverOS, Clip-OS, Sabayon, Bicom Systems PBXware, [ecc](https://wiki.gentoo.org/wiki/Distributions_based_on_Gentoo#Active_projects).

<a name="gentooinstall"></a>

### Istruzioni per Installare

```bash
# Aggiungi la sovrapposizione usando lo strato
layman -S && layman -a apriluwu
```

```bash
# Installa tramite portage
emerge -av app-misc/premid
```

<a name="gentoonotes"></a>

### Note aggiuntive

Il comando di installazione mostrato utilizza layman, si trova nei repository ufficiali attraverso `app-portage/layman`.<br> Per ottenere gli aggiornamenti dovrai sincronizzare di tanto in tanto la sovrapposizione con cui puoi farlo

```bash
layman -S
```