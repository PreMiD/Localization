---
title: Linux
description: Erste Schritte einer PreMiD-Installation unter Linux
published: true
date: 2020-04-27T12:52:46.261Z
tags:
---

> Das Umschalten der Autostartfunktion unter Linux ist jetzt über die App statt über die Erweiterung verfügbar.{.is-warning}

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
  - [Installationsanleitung](#installation-instructions)
  - [Zusätzliche Bemerkungen](#additional-notes)
- **Red Hat Enterprise Linux (RHEL) based distributions**(bald verfügbar, benutze [dies](#portable-appimage)für jetzt)
- **Debian und Ubuntu basierte Distributionen**(bald verfügbar, benutze [dies](#portable-appimage)für jetzt)
- **[Arch Linux basierte Distributionen](#arch-linux-based-distributions)**
  - [Installationsanleitung](#installation-instructions-1)
  - [Zusätzliche Bemerkungen](#additional-notes-1)
- **[Gentoo Linux](#gentoo-linux)**
  - [Installationsanleitung](#installation-instructions-2)
  - [Zusätzliche Bemerkungen](#additional-notes-2)

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

### Installationsanleitung

```bash
wget https://github.com/PreMiD/Linux/releases/latest/download/PreMiD-Portable.AppImage && chmod a+x PreMiD*.AppImage
```

```bash
# Einfach doppelklicken oder ./PreMiD*.AppImage ausführen
```

<a name="appimagenotes"></a>

### Zusätzliche Bemerkungen

Wenn du PreMiD ausprobieren möchtest oder es nicht installieren möchtest, dieses ist das beste, es ist immer aktuell, aber _KANN NICHT MIT DEM SYSTEM AUTO-STARTEN!_</br>Wenn Sie keine Lust haben, es jedes Mal öffnen zu müssen, verwenden Sie die anderen Pakete (entsprechend Ihrer Distribution).

<a name="arch"></a>
<img src="https://i.imgur.com/NBevNlU.png" width="100" height="100" align="right"></img>

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

oder manuell aus dem [Arch User Repository](https://aur.archlinux.org/packages/premid) wenn Sie wissen, was Sie tun.

<a name="archnotes"></a>

### Zusätzliche Bemerkungen

Wenn deine Distribution Pacman verwendet, musst du zuerst einen der Helfer installieren. Wenn Sie keine haben, wird Yay empfohlen, führe aus:

```bash
git clone https://aur.archlinux.org/yay.git && cd yay && makepkg -si
```

```bash
yay -S premid
```

Andere AUR/Pacman-Helfer funktionieren ebenfalls, obwohl jeder von ihnen eine andere Funktionalität hat, so dass Sie bei ihrer Verwendung auf Probleme stoßen können.

<img src="https://i.imgur.com/Kv1X2to.png" width="100" height="100" align="right"></img>
<a name="gentoo"></a>

## Gentoo Linux

Dasselbe gilt für seine Derivate, wie z.B. ColverOS, Clip-OS, Sabayon, Bicom Systems PBXware, [etc](https://wiki.gentoo.org/wiki/Distributions_based_on_Gentoo#Active_projects).

<a name="gentooinstall"></a>

### Installationsanleitung

```bash
# Füge das Overlay mit layman
layman -S && layman -a apriluwu hinzu
```

```bash
# Mit Portage installieren
emerge -av app-misc/premid
```

<a name="gentoonotes"></a>

### Zusätzliche Bemerkungen

Der gezeigte Installationsbefehl verwendet layman, er befindet sich in den offiziellen Repositories durch `app-portage/layman`.<br> Um Updates zu erhalten, müssen Sie das Overlay von Zeit zu Zeit synchronisieren, dies können Sie mit

```bash
layman -S
```