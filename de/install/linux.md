---
title: Linux
description: Erste Schritte einer PreMiD-Installation unter Linux
published: true
date: 2020-04-27T12:52:46.261Z
tags:
---

> Toggling auto-launch on Linux is now available from the app instead of the extension.{.is-warning}

Die Installation der Anwendung ist sehr wichtig, da die Erweiterung allein nicht funktionieren würde.

## Inhaltsverzeichnis

- **[Über](#about)**
  - [Statistik](#stats)
  - [Anforderungen](#requirements)
  - Beispiele (bald verfügbar)
  - FAQs (bald verfügbar)
  - Building (bald verfügbar)
  - [Support](#support)
  - [Mitwirkende](#credits)
  - [Lizenz](#license)
- [Snapcraft](#snapcraft)</strong> (TL;DR : _never_™️)
- **[Portable AppImage](#portable-appimage)**(_EMPFOHLEN_
  - [Installationsanleitung:](#installation-instructions)
  - [Zusätzliche Bemerkungen](#additional-notes)
- **ed Hat Enterprise Linux (RHEL) based distributions**(bald verfügbar, benutze [this](#portable-appimage)für jetzt)
- **Debian und Ubuntu basierte Distributionen**(bald verfügbar, benutze [this](#portable-appimage)für jetzt)
- **[Arch Linux basierte Distributionen](#arch-linux-based-distributions)**
  - [Installationsanleitung:](#installation-instructions-1)
  - [Zusätzliche Bemerkungen](#additional-notes-1)
- **[Gentoo Linux](#gentoo-linux)**
  - [Installationsanleitung:](#installation-instructions-2)
  - [Zusätzliche Bemerkungen](#additional-notes-2)

<a name="about"></a>

## Über

**PreMiD** ist ein einfaches, konfigurierbares Programm, das die RP-Bibliothek (Rich Presence) von Discord verwendet, mit der du in deinem Discord-Profil anzeigen kannst, was du im Web (und einigen Programmen) tust**Spielstatus**

<a name="stats"></a>

### Statistik

<table>
  <tr>
    <th>Veröffentlichung</th>
    <th>Insgesamte Downloads</th>
    <th>Neueste Versionen</th>
  </tr>
  <tr>
    <td><a href="https://github.com/PreMiD/Linux/actions"><img src="https://github.com/PreMiD/Linux/workflows/CI/badge.svg?branch=master&event=push" alt="CI"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases"><img src="https://img.shields.io/github/downloads/PreMiD/Linux/total.svg?maxAge=86400" alt="All releases"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases/latest"><img src="https://img.shields.io/github/v/release/PreMiD/Linux.svg?maxAge=86400" alt="Neueste Versionen"><br><img src="https://img.shields.io/github/downloads/PreMiD/Linux/latest/total.svg?maxAge=86400" alt="Github releases"></a></td>
  </tr>
</table>

<a name="requirements"></a>

### Anforderungen

Technisch gesehen kann jede Distribution, die Discord's [offizielle](https://discordapp.com/download) **App** ausführen kann (nicht die Web- oder die Snap-Version), auch PreMiD ausführen;</br> Wie Sie vielleicht in den letzten Jahren bemerkt haben, haben einige Linux-Distributionen begonnen, die Unterstützung für die 32-Bit-Architekturen (ia32/i686/i386/x86) fallen zu lassen, und infolgedessen haben wir das auch getan. Sie können jedoch versuchen, die Anwendung selbst zu erstellen, wenn Sie sie unbedingt auf einer 32-Bit-Distribution verwenden müssen.</br> Da wir Electron derzeit als Engine verwenden (Discord tut auch!), gelten seine Anforderungen auch für diese App:

- Ubuntu ≥ 12.04
- Fedora ≥ 21
- Debian ≥ 8

Es ist unbekannt, ob ältere Versionen anderer Distributionen es unterstützen, also halten Sie einfach Ihre Distribution auf dem neuesten Stand und verwenden Sie **LTS (Long-Term Support)** Releases, wenn Ihre Distribution diese anbietet, da sie stabiler sind (vermeiden Sie Alpha-Releases).

<a name="support"></a>

### Support

<div>
  <a target="_blank" href="https://discord.gg/WvfVZ8T" title="Tritt unserem Discord Server bei!">
    <img height="75px" draggable="false" src="https://discordapp.com/api/guilds/493130730549805057/widget.png?style=banner2" alt="Tritt unserem Discord Server bei!">
  </a>
</div>

<a name="credits"></a>

### Mitwirkende

Danke an:

- @nattadasu, @Rubensei, @Cairo2k18, zany130, Immanuel D, Friskytrash, Alexandre (und ein paar andere von dem ich den Namen vergessen habe) die Feedback zu den neuesten Versionen geben.
- @apriluwu zur Wartung der Gentoo-Builds
- @SlimShadyIAm und naka für die vorherige Wartung der Arch-Benutzer-Repository-Pakete
- Die Electron-Community für verschiedene Pakete
- Alle anderen, die jemals in irgendeiner Weise zu dem Projekt beigetragen haben.

<a name="license"></a>

### Lizenz

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FPreMiD%2FLinux.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FPreMiD%2FLinux?ref=badge_large)

<img src="https://i.imgur.com/ACAxtmA.png" width="100" height="100" align="right"></img>
<a name="snapcraft"></a>

## Snapcraft

Wahrscheinlich nie, da die Natur der Snap PreMiD davon abhält, Discord und die Erweiterung richtig zu erreichen,</br> Es wäre schön, wenn es jemand tun könnte, aber alle Ideen oder PRs sind willkommen.</br> P.S.: Die klassische Gefangenschaft funktioniert auch nicht, also machen Sie sich nicht die Mühe, einen Vorschlag dazu zu machen.

<img src="https://i.imgur.com/qEZOOfU.png" width="100" height="100" align="right"></img>
<a name="appimage"></a>

## Portable AppImage

Das Paket AppImage wird empfohlen, wenn Discord bei Ihnen funktioniert, andere PreMiD-Pakete (.deb, .rpm usw.) jedoch nicht.

<a name="appimageinstall"></a>

### Installationsanleitung:

```bash
wget https://github.com/PreMiD/Linux/releases/latest/download/PreMiD-Portable.AppImage && chmod a+x PreMiD*.AppImage
```

```bash
# Einfach doppelklicken oder ./PreMiD*.AppImage ausführen
```

<a name="appimagenotes"></a>

### Zusätzliche Bemerkungen

Either if you want to try PreMiD or just don't want to install it, this one's the best, it's always up to date but _DOESN'T AUTO-START WITH THE SYSTEM!_</br>If you get tired of having to open it each time, use the other packages (according to your distribution).

<a name="arch"></a>
<img src="https://i.imgur.com/NBevNlU.png" width="100" height="100" align="right"></img>

## Arch Linux basierte Distributionen

Uses [Arch User Repository](https://aur.archlinux.org/packages/premid);</br> Supported distributions are _itself_, Manjaro, Anarchy, Artix, Arco, ArchLabs, Endeavour, Archman, BlackArch, Liri OS and [every one that supports installing from AUR](https://wiki.archlinux.org/index.php/Arch-based_distributions#Active).

<a name="archinstall"></a>

### Installationsanleitung:

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

### Zusätzliche Bemerkungen

Wenn deine Distribution Pacman verwendet, musst du zuerst einen der Helfer installieren. If you don't have any, Yay is recommended, run :

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

### Installationsanleitung:

```bash
# Add the overlay using layman
layman -S && layman -a apriluwu
```

```bash
# Install via portage
emerge -av app-misc/premid
```

<a name="gentoonotes"></a>

### Zusätzliche Bemerkungen

The shown install command uses layman, it is in the official repositories through `app-portage/layman`.<br> To get updates you will have to sync the overlay from time to time, you can do this with

```bash
layman -S
```