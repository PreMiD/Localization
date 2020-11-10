---
title: Linux
description: Pradžia su PreMiD diegimu Linux operacinėje sistemoje
published: true
date: 2020-11-10T18:06:56.520Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:14.124Z
---

Aplikacijos įdiegimas yra labai svarbus, nes papildinys pats nieko negali padaryti.

> Aur users that use DoomLerd's package should be safe as he says. We are not recommending to use it, but if you want you can still use it. Thanks to DoomLerd for handling aur repo still. 
> 
> {.is-warning}

## Turinys

- **[Apie](#about)**
  - [Statistika](#stats)
  - [Reikalavimai](#requirements)
  - Pavyzdžiai (jau greitai)
  - Dažniausiai užduodami klausimai (jau greitai)
  - Statymas (jau greitai)
  - [Pagalba](#support)
  - [Padėkos](#credits)
  - [Licencija](#license)
- **[Snapcraft](#snapcraft)** (TL;DR : _niekada_ ™️)
- **[Portable AppImage](#appimage)** (_SIŪLOMA_)
  - [Diegimo instrukcija](#appimageinstall)
  - [Papildomos pastabos](#appimagenotes)
- [**Red Hat Enterprise Linux (RHEL) based distributions**](#packagecloud)
- [**Debian and Ubuntu based distributions**](#packagecloud)
- [**Arch Linux distribucijos**](#arch)

<a name="about"></a>

## Apie

**PreMiD** yra paprasta, konfiguruojama programa kuri naudoja Discord RP ( Rich Presence ) biblioteką, kuri leidžia jums rodyti ką jūs atliekate internete ( ir kai kuriuose programuose ) jūsų Discord profilyje kaip **žaidimo statusą**.

<a name="stats"></a>

### Statistika

<table>
  <tr>
    <th>Išleidimas</th>
    <th>Viso parsisiuntimų</th>
    <th>Naujausias leidinys</th>
  </tr>
  <tr>
    <td><a href="https://github.com/PreMiD/Linux/actions"><img src="https://github.com/PreMiD/Linux/workflows/CI/badge.svg?branch=master&event=push" alt="CI"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases"><img src="https://img.shields.io/github/downloads/PreMiD/Linux/total.svg?maxAge=86400" alt="Visi leidiniai"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases/latest"><img src="https://img.shields.io/github/v/release/PreMiD/Linux.svg?maxAge=86400" alt="Naujausias leidinys"><br><img src="https://img.shields.io/github/downloads/PreMiD/Linux/latest/total.svg?maxAge=86400" alt="Github leidiniai"></a></td>
  </tr>
</table>

<a name="requirements"></a>

### Reikalavimai

Techniškai kiekviena distribucija kuri gali paleisti Discord [oficialią](https://discordapp.com/download) **programėlę** ( ne web ar snap versiją ) gali paleisti ir PreMiD taip pat;</br>Kaip jūs pastebėjote per pastaruosius metus, kai kurios Linux distribucijos pradėjo atmesti palaikymą 32-bit (ia32/i686/i386/x86) architektūroms, ir to rezultate, mes taip pat. Jūs galite, vis dėlto, bandyti paleisti programą patiems jeigu jums beviltiškai reikia naudoti ją ant 32-bit distribucijos.</br> Kadangi mes naudojame Electron kaip variklį (Discord taip pat jį naudoja!), jo reikalavimai taip pat pritaikomi ir šiai programėlei :

- Ubuntu ≥ 12.04
- Fedora ≥ 21
- Debian ≥ 8

Yra nežinoma ar senesnė versija kitų distribucijų palaiko tai, tai tiesiog palikite savo distribuciją atnaujinamą ir naudokite **LTS (Long-Term Support)** leidinius jeigu jūsų distribucija siūlo juos, kadangi jie yra daug stabilesni (vengkite alpha leidinių).

<a name="support"></a>

### Pagalba

<div>
  <a target="_blank" href="https://discord.premid.app/" title="Prisidėkite prie mūsų Discord!">
    <img height="75px" draggable="false" src="https://discordapp.com/api/guilds/493130730549805057/widget.png?style=banner2" alt="Prisidėkite prie mūsų Discord!">
  </a>
</div>

<a name="credits"></a>

### Padėkos

Ačiū šiems asmenims :

- @nattadasu, @Rubensei, @Cairo2k18, zany130, Immanuel D, Friskytrash, Alexandre (ir kai kuriems kitiems asmenims kurių vardus aš užmiršau) už atsakus į naktinius leidinius.
- @apriluwu už palaikymą Gentoo leidiniams
- @SlimShadyIAm ir naka už ankščiau palaikant Arch User Repository packages
- Electron bendruomenę už įvairius komplektus (packages)
- Ir visus kitus kurie kaip nors prisidėjo prie projekto.

<a name="license"></a>

### Licencija

[![FOSSA Statusas](https://app.fossa.io/api/projects/git%2Bgithub.com%2FPreMiD%2FLinux.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FPreMiD%2FLinux?ref=badge_large)

<img src="https://i.imgur.com/ACAxtmA.png" width="100" height="100" align="right"></img>
<a name="snapcraft"></a>

## Portatyvus Applmage

Applmage komplektas (package) yra rekomenduojamas jeigu Discord veikia jums, bet kiti PreMiD komplektai (.deb, .rpm, etc) neveikia.

<a name="appimageinstall"></a>

### Diegimo instrukcija

```bash
wget https://github.com/PreMiD/Linux/releases/latest/download/PreMiD-Portable.AppImage && chmod a+x PreMiD*.AppImage
```

```bash
# Tiesiog du kartus nuspauskite ant jo arba paleiskite
./PreMiD*.AppImage
```

<a name="appimagenotes"></a>

### Papildomos pastabos

Jeigu jūs norite išbandyti PreMiD ar jūs nenorite jos instaliuoti, ši yra geriausia, ji visada yra atnaujinama, bet _AUTOMATIŠKAI NĖRA PALEIDŽIAMA SU OPERACINE SISTEMA!_</br>Jeigu jums nusibodo kiekvieną kartą ją įjunginėti, naudokite kitą komplektą (package) (atitinkantį jūsų distribuciją).

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

## Arch Linux distribucijos

Naudoja[Arch User Repository](https://aur.archlinux.org/packages/premid);</br> Palaikomos distribucijos yra _ji pati_, Manjaro, Anarchy, Artix, Arco, ArchLabs, Endeavour, Archman, BlackArch, Liri OS ir [kiekviena kita kuri palaiko įdiegimą iš AUR](https://wiki.archlinux.org/index.php/Arch-based_distributions#Active).

<a name="archinstall"></a>

### Diegimo instrukcija

```bash
# Naudoti yay (rekomenduojama)
yay -S premid
```

```bash
# Naudoti pakku
pakku -S premid
```

```bash
# Naudoti trizen
trizen -S premid
```

```bash
# Naudoti pacaur
pacaur -S premid
```

```bash
# ... jūs suprantate mintį
```

arba savarankiškai iš [Arch User Repository](https://aur.archlinux.org/packages/premid) jeigu jūs žinote ką darote.

<a name="archnotes"></a>

### Papildomos pastabos

Jeigu jūsų distribucija naudoja pacman, tada jūs turite įsidiegti vieną iš pagalbininkų pirma. Jeigu jūs jų neturite, Yay yra rekomenduojama, paleiskite :

```bash
git clone https://aur.archlinux.org/yay.git && cd yay && makepkg -si
```

```bash
yay -S premid
```

Kiti AUR/Pacman pagalbininkai veikia taipogi, bet kiekvienos funkcionalumas yra skirtingas, tad jūs galite susidurti su sunkumais juos naudojant.