---
title: Linux
description: Prvi koraci s PreMiD instalacijom na Linux-u
published: true
date: 2020-04-27T12:52:46.261Z
tags:
---

> Uključivanje auto-launch-a na Linux-u se sad može i iz programa umjesto proširenja.{.is-warning}

Instalacija programa je jako važno jer proširenje ne može ništa učiniti samo.

## Tablica sadržaja

- **[About](#about)**
  - [Statistika](#stats)
  - [Requirements](#requirements)
  - Primjeri (uskoro)
  - FAQ-ovi (uskoro)
  - Building (uskoro)
  - [Podrška](#support)
  - [Credits](#credits)
  - [Licenca](#license)
- **[Snapcraft](#snapcraft)** (TL;DR :_nikad_™️)
- **[Prijenosni AppImage](#portable-appimage)** (_PREPORUČENO_)
  - [Upute za instalaciju](#installation-instructions)
  - [Dodatne napomene](#additional-notes)
- **Distribucije bazirane na Red Hat Enterprise Linux-u (RHEL) ** (uskoro, koristi [ovo](#portable-appimage) za sada)
- **Distribucije bazirane na Debian-u i Ubuntu-u** (uskoro, koristi [ovo](#portable-appimage) za sada)
- **[Distribucije bazirane na Arch Linux-u](#arch-linux-based-distributions)**
  - [Upute za instalaciju](#installation-instructions-1)
  - [Dodatne napomene](#additional-notes-1)
- **[Gentoo Linux](#gentoo-linux)**
  - [Upute za instalaciju](#installation-instructions-2)
  - [Dodatne napomene](#additional-notes-2)

<a name="about"></a>

## About

**PreMid** je jednostavan, podesiv program koji koristi Discord-ov RP (Rich Presence ) da pokaže što radiš na web-u ( i par programa ) na svom Discord profilu kao **playing status**.

<a name="stats"></a>

### Statistika

<table>
  <tr>
    <th>Razvoj</th>
    <th>Ukupno preuzimanja</th>
    <th>Najnovija verzija</th>
  </tr>
  <tr>
    <td><a href="https://github.com/PreMiD/Linux/actions"><img src="https://github.com/PreMiD/Linux/workflows/CI/badge.svg?branch=master&event=push" alt="CI"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases"><img src="https://img.shields.io/github/downloads/PreMiD/Linux/total.svg?maxAge=86400" alt="All releases"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases/latest"><img src="https://img.shields.io/github/v/release/PreMiD/Linux.svg?maxAge=86400" alt="Najnovija verzija"><br><img src="https://img.shields.io/github/downloads/PreMiD/Linux/latest/total.svg?maxAge=86400" alt="Github releases"></a></td>
  </tr>
</table>

<a name="requirements"></a>

### Requirements

Tehnički svaka distribucija može pokrenuti Discord-ov [službeni](https://discordapp.com/download)** program** (ne web ili snap verzija ) može pokrenuti i PreMiD;</br>Kao što ste možda primijetili posljednjih godinam, neke Linux distibucije su prestale s podrškom za 32-bitne (ia32/i686/i386/x86) arhitekture, i kao rezultat toga smo i mi. No, ako baš hoćeš, možeš pokušati build-ati program sam ako ga očajnički trebaš koristiti na 32-bit-noj distribuciji.</br> Pošto mi trenutačno koristimo Electron kao engine (Discord ga isto koristi.), njegovi zahtjevi isto vrijede i za ovu aplikaciju:

- Ubuntu ≥ 12.04
- Fedora ≥ 21
- Debian ≥ 8

Nije poznato podržavaju li ga starije verzije drugih distribucija, pa samo ažurirajte distribuciju i koristite ** LTS (Long-Term Support) ** verziju ako ih vaša distribucija nudi, jer su one više stabilne (izbjegavajte alfa verzije).

<a name="support"></a>

### Podrška

<div>
  <a target="_blank" href="https://discord.gg/WvfVZ8T" title="Join our Discord!">
    <img height="75px" draggable="false" src="https://discordapp.com/api/guilds/493130730549805057/widget.png?style=banner2" alt="Join our Discord!">
  </a>
</div>

<a name="credits"></a>

### Credits

Hvala:

- @nattadasu, @Rubensei, @Cairo2k18, zany130, Immanuel D, Friskytrash, Alexandre (i još par likova od kojih sam zaboravio imena) za pružanje povratnih informacija o nightly verzijama.
- @apriluwu za održavanje Gentoo build-ova
- @SlimShadyIAm i naka za prijašnje održavanje Arch User Repository paketa
- Elctron društvo za raznolike pakete
- Svi koji su ikada na bilo koji način pridonijeli projektu.

<a name="license"></a>

### Licenca

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FPreMiD%2FLinux.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FPreMiD%2FLinux?ref=badge_large)

<img src="https://i.imgur.com/ACAxtmA.png" width="100" height="100" align="right"></img>
<a name="snapcraft"></a>

## Snapcraft

Najvjerojatnije nikad, pošto Snap blokira PreMiD-a od pristupanja Discord-a i proširenja,</br>Bilo bi cijenjeno ako bi netko moga ipak učiniti, bilo koja ideje PR-ova su dobrodošle.</br>P.S.: klasični confinement isto ne radi, pa se nemojte mučiti da dajte prijedloge o tome.

<img src="https://i.imgur.com/qEZOOfU.png" width="100" height="100" align="right"></img>
<a name="appimage"></a>

## Prijenosni AppImage

AppImage paket je preporučen ako Discord radi za tebe, ali drugi PreMiD paketi (.deb, .rpm, itd) ne.

<a name="appimageinstall"></a>

### Upute za instalaciju

```bash
wget https://github.com/PreMiD/Linux/releases/latest/download/PreMiD-Portable.AppImage && chmod a+x PreMiD*.AppImage
```

```bash
# Samo dvaput klikni na to ili pokreni sa:
./PreMiD*.AppImage
```

<a name="appimagenotes"></a>

### Dodatne napomene

Ako samo želite pokušati PreMiD ili ga samo ne želiš instalirati, ovaj je najboljim uvijek je ažuriran ali _SE NE AUTO-START-A SA SISTEMOM! _</br>Ako se umoriš od potrebe da ga otvoriš svaki put, upotrijebite ostale pakete (prema tvojoj distribuciji).

<a name="arch"></a>
<img src="https://i.imgur.com/NBevNlU.png" width="100" height="100" align="right"></img>

## Distribucije bazirane na Arch Linux-u

Koristi [Arch User Repository](https://aur.archlinux.org/packages/premid);</br>Podržane distribuciju su Arch (naravno), Manjaro, Anarchy, Artix, Arco, ArchLabs, Endeavour, Archman, BlackArch, Liri OS i [ svaki drugi koji podržava instalaciju kroz AUR](https://wiki.archlinux.org/index.php/Arch-based_distributions#Active).

<a name="archinstall"></a>

### Upute za instalaciju

```bash
# Koristeći yay (premorućeno)
yay -S premid
```

```bash
# Koristeći pakku
pakku -S premid
```

```bash
# Koristeći trizen
trizen -S premid
```

```bash
# Koristeći pacaur
pacaur -S premid
```

```bash
# ... skužio si već
```

ili ručno iz [Arch User Repository-a](https://aur.archlinux.org/packages/premid) ako znaš šta radiš.

<a name="archnotes"></a>

### Dodatne napomene

Ako ti distro koristi Pacman, prvo moraš instalirati jedan od helpera. </br> Ako nemaš ni jedan, Yay je preporučen, pokreni :

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

### Upute za instalaciju

```bash
# Add the overlay using layman
layman -S && layman -a apriluwu
```

```bash
# Install via portage
emerge -av app-misc/premid
```

<a name="gentoonotes"></a>

### Dodatne napomene

The shown install command uses layman, it is in the official repositories through `app-portage/layman`.<br> To get updates you will have to sync the overlay from time to time, you can do this with

```bash
layman -S
```