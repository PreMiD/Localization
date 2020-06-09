---
title: Linux
description: Pradžia su PreMiD diegimu Linux operacinėje sistemoje
published: true
date: 2020-04-27T12:52:46.261Z
tags:
---

> Įjungiamas automatiškas paleidimas Linux operacinėje sistemoje yra nuo šiol galimas paspaudus ant programėles vietoj naršyklės plėtinio{.is-warning}

Aplikacijos įdiegimas yra labai svarbus, nes papildinys pats nieko negali padaryti.

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
- **[Portable AppImage](#portable-appimage)** (_SIŪLOMA_)
  - [Diegimo instrukcija](#installation-instructions)
  - [Papildomos pastabos](#additional-notes)
- **Red Hat Enterprise Linux (RHEL) based distributions** (jau greitai, naudokite [šitai](#portable-appimage) kolkas)
- **Debian and Ubuntu based distributions** (jau greitai, naudokite [šitai](#portable-appimage) pakolkas)
- **[Arch Linux distribucijos](#arch-linux-based-distributions)**
  - [Diegimo instrukcija](#installation-instructions-1)
  - [Papildomos pastabos](#additional-notes-1)
- **[Gentoo Linux](#gentoo-linux)**
  - [Diegimo instrukcija](#installation-instructions-2)
  - [Papildomos pastabos](#additional-notes-2)

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
  <a target="_blank" href="https://discord.gg/WvfVZ8T" title="Prisidėkite prie mūsų Discord!">
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

## Snapcraft

Tikriausiai niekada, kadangi Snap iš prigimties blokuoja PreMiD nuo to, jo pasiektų Discord ir jos papildinius tinkamai,</br> Būtų malonu jeigu kas nors galėtų tai atlikti, visos įdėjos ar PR (pull request) yra laukiami.</br> P.S.: klasikiniai apribojimai neveikia taipogi, tad nesivarginkite rašydami pasiūlymą apie tai.

<img src="https://i.imgur.com/qEZOOfU.png" width="100" height="100" align="right"></img>
<a name="appimage"></a>

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

<a name="arch"></a>
<img src="https://i.imgur.com/NBevNlU.png" width="100" height="100" align="right"></img>

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

<img src="https://i.imgur.com/Kv1X2to.png" width="100" height="100" align="right"></img>
<a name="gentoo"></a>

## Gentoo Linux

Tai pat taikoma ir jos pakaitiniams, tokiems kaip: ColverOS, Clip-OS, Sabayon, Bicom Systems, PBXware, [t.t.](https://wiki.gentoo.org/wiki/Distributions_based_on_Gentoo#Active_projects).

<a name="gentooinstall"></a>

### Diegimo instrukcija

```bash
# Pridėti apdangą naudojant layman
layman -S && layman -a apriluwu
```

```bash
# Įdiegti naudojant portage
emerge -av app-misc/premid
```

<a name="gentoonotes"></a>

### Papildomos pastabos

Rodoma įdiegimo komandą naudoja layman, ji yra oficialioje bibliotekoje per `app-portage/layman`.<br> Jog gauti atnaujinimus jūs turite susinchronizuoti apdangą kartas nuo karto, jūs tai galite padaryti su

```bash
layman -S
```