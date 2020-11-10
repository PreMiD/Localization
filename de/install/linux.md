---
title: Linux
description: Erste Schritte einer PreMiD-Installation unter Linux
published: true
date: 2020-11-10T18:06:56.520Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:14.124Z
---

Die Installation der Anwendung ist sehr wichtig, da die Erweiterung allein nicht funktionieren würde.

> Aur users that use DoomLerd's package should be safe as he says. We are not recommending to use it, but if you want you can still use it. Thanks to DoomLerd for handling aur repo still. 
> 
> {.is-warning}

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
- **[Portable AppImage](#appimage)**(_EMPFOHLEN_
  - [Installationsanleitung](#appimageinstall)
  - [Zusätzliche Bemerkungen](#appimagenotes)
- [**Red Hat Enterprise Linux (RHEL) based distributions**](#packagecloud)
- [**Debian and Ubuntu based distributions**](#packagecloud)
- [**Arch Linux basierte Distributionen**](#arch)

<a name="about"></a>

## Über

**PreMiD** ist ein einfaches, konfigurierbares Programm, das die RP-Bibliothek (Rich Presence) von Discord verwendet, mit der du in deinem Discord-Profil anzeigen kannst, was du im Web (und einigen Programmen) tust.

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
    <td><a href="https://github.com/PreMiD/Linux/releases"><img src="https://img.shields.io/github/downloads/PreMiD/Linux/total.svg?maxAge=86400" alt="Alle Veröffentlichungen"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases/latest"><img src="https://img.shields.io/github/v/release/PreMiD/Linux.svg?maxAge=86400" alt="Neueste Versionen"><br><img src="https://img.shields.io/github/downloads/PreMiD/Linux/latest/total.svg?maxAge=86400" alt="Github Veröffentlichungen"></a></td>
  </tr>
</table>

<a name="requirements"></a>

### Anforderungen

Technisch gesehen kann jede Distribution, die Discord's [offizielle](https://discordapp.com/download) **App** ausführen kann (nicht die Web- oder die Snap-Version), auch PreMiD ausführen;</br> Wie Sie vielleicht in den letzten Jahren bemerkt haben, haben einige Linux-Distributionen begonnen, die Unterstützung für die 32-Bit-Architekturen (ia32/i686/i386/x86) fallen zu lassen, und infolgedessen haben wir das auch getan. Sie können jedoch versuchen, die Anwendung selbst zu erstellen, wenn Sie sie unbedingt auf einer 32-Bit-Distribution verwenden müssen.</br> Da wir Electron derzeit als Engine verwenden (Discord tut das auch!), gelten seine Anforderungen auch für diese App:

- Ubuntu ≥ 12.04
- Fedora ≥ 21
- Debian ≥ 8

Es ist unbekannt, ob ältere Versionen anderer Distributionen es unterstützen, also halte einfach deine Distribution auf dem neuesten Stand und verwende **LTS (Long-Term Support)** Releases, wenn deine Distribution diese anbietet, da sie stabiler sind (vermeide Alpha-Releases).

<a name="support"></a>

### Support

<div>
  <a target="_blank" href="https://discord.premid.app/" title="Tritt unserem Discord Server bei!">
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

## Portable AppImage

Das Paket AppImage wird empfohlen, wenn Discord bei dir funktioniert, andere PreMiD-Pakete (.deb, .rpm usw.) jedoch nicht.

<a name="appimageinstall"></a>

### Installationsanleitung

```bash
wget https://github.com/PreMiD/Linux/releases/latest/download/PreMiD-Portable.AppImage && chmod a+x PreMiD*.AppImage
```

```bash
# Einfach doppelklicken oder ./PreMiD*.AppImage ausführen
```

<a name="appimagenotes"></a>

### Zusätzliche Bemerkungen

Wenn du PreMiD ausprobieren möchtest oder es nicht installieren möchtest, ist dieses das beste, es ist immer aktuell, aber _KANN NICHT MIT DEM SYSTEM AUTO-STARTEN!_</br>Wenn Sie keine Lust haben, es jedes Mal öffnen zu müssen, verwenden Sie die anderen Pakete (entsprechend Ihrer Distribution).

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

## Arch Linux basierte Distributionen

Verwendet [Arch User Repository](https://aur.archlinux.org/packages/premid);</br> Unterstützte Distributionen sind _selbst_, Manjaro, Anarchy, Artix, Arco, ArchLabs, Endeavour, Archman, BlackArch, Liri OS und [alle, die die Installation von AUR](https://wiki.archlinux.org/index.php/Arch-based_distributions#Active) unterstützen.

<a name="archinstall"></a>

### Installationsanleitung

```bash
# Verwendung von yay (empfohlen)
yay -S premid
```

```bash
# Verwendung von pakku
pakku -S premid
```

```bash
# Verwendung von Trizen
Trizen -S premid
```

```bash
# Verwendung von pacaur
pacaur -S premid
```

```bash
# ... du hast den Punkt erreicht
```

oder manuell aus dem [Arch User Repository](https://aur.archlinux.org/packages/premid) wenn du weißt, was du tust.

<a name="archnotes"></a>

### Zusätzliche Bemerkungen

Wenn deine Distribution Pacman verwendet, musst du zuerst einen der Helfer installieren. Wenn du keine hast, wird Yay empfohlen, führe aus:

```bash
git clone https://aur.archlinux.org/yay.git && cd yay && makepkg -si
```

```bash
yay -S premid
```

Andere AUR/Pacman-Helfer funktionieren ebenfalls, obwohl jeder von ihnen eine andere Funktionalität hat, sodass du bei ihrer Verwendung auf Probleme stoßen könntest.