---
title: Linux
description: Prvi koraci s PreMiD instalacijom na Linux-u
published: true
date: 2020-11-10T18:06:56.520Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:14.124Z
---

Instalacija programa je jako važno jer proširenje ne može ništa učiniti samo.

> Aur users that use DoomLerd's package should be safe as he says. We are not recommending to use it, but if you want you can still use it. Thanks to DoomLerd for handling aur repo still. 
> 
> {.is-warning}

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
- **[Prijenosni AppImage](#appimage)** (_PREPORUČENO_)
  - [Upute za instalaciju](#appimageinstall)
  - [Dodatne napomene](#appimagenotes)
- [**Red Hat Enterprise Linux (RHEL) based distributions**](#packagecloud)
- [**Debian and Ubuntu based distributions**](#packagecloud)
- [**Distribucije bazirane na Arch Linux-u**](#arch)

<a name="about"></a>

## About

**PreMid** je jednostavan, podesiv program koji koristi Discord-ov RP (Rich Presence ) da pokaže što radiš na web-u ( i par programa ) na svom Discord profilu kao **playing status**.

<a name="stats"></a>

### Stats

<table>
  <tr>
    <th>Razvoj</th>
    <th>Ukupno preuzimanja</th>
    <th>Najnovija verzija</th>
  </tr>
  <tr>
    <td><a href="https://github.com/PreMiD/Linux/actions"><img src="https://github.com/PreMiD/Linux/workflows/CI/badge.svg?branch=master&event=push" alt="CI"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases"><img src="https://img.shields.io/github/downloads/PreMiD/Linux/total.svg?maxAge=86400" alt="Sve verzije"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases/latest"><img src="https://img.shields.io/github/v/release/PreMiD/Linux.svg?maxAge=86400" alt="Latest release"><br><img src="https://img.shields.io/github/downloads/PreMiD/Linux/latest/total.svg?maxAge=86400" alt="Github verzije"></a></td>
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

### Support

<div>
  <a target="_blank" href="https://discord.premid.app/" title="Pridružite se našem Discord-u!">
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

### License

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FPreMiD%2FLinux.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FPreMiD%2FLinux?ref=badge_large)

<img src="https://i.imgur.com/ACAxtmA.png" width="100" height="100" align="right"></img>
<a name="snapcraft"></a>

## Prijenosni AppImage

AppImage paket je preporučen ako Discord radi za tebe, ali drugi PreMiD paketi (.deb, .rpm, itd) ne.

<a name="appimageinstall"></a>

### Installation instructions

```bash
wget https://github.com/PreMiD/Linux/releases/latest/download/PreMiD-Portable.AppImage && chmod a+x PreMiD*.AppImage
```

```bash
# Samo dvaput klikni na to ili pokreni sa:
./PreMiD*.AppImage
```

<a name="appimagenotes"></a>

### Additional notes

Ako samo želite pokušati PreMiD ili ga samo ne želiš instalirati, ovaj je najboljim uvijek je ažuriran ali _SE NE AUTO-START-A SA SISTEMOM! _</br>Ako se umoriš od potrebe da ga otvoriš svaki put, upotrijebite ostale pakete (prema tvojoj distribuciji).

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

## Arch Linux based distributions

Koristi [Arch User Repository](https://aur.archlinux.org/packages/premid);</br>Podržane distribuciju su Arch (naravno), Manjaro, Anarchy, Artix, Arco, ArchLabs, Endeavour, Archman, BlackArch, Liri OS i [ svaki drugi koji podržava instalaciju kroz AUR](https://wiki.archlinux.org/index.php/Arch-based_distributions#Active).

<a name="archinstall"></a>

### Installation instructions

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

### Additional notes

Ako ti distro koristi Pacman, prvo moraš instalirati jedan od helpera. </br> Ako nemaš ni jedan, Yay je preporučen, pokreni :

```bash
git clone https://aur.archlinux.org/yay.git && cd yay && makepkg -si
```

```bash
yay -S premid
```

Drugi AUR/Pacman helperi isto rade, ali svaki funkcionira malo drugačije pa možda <br> naiđeš na neki problem.