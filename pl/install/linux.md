---
title: Linux
description: Instalacja PreMiD w systemie Linux
published: tak
date: 2020-11-10T18:06:56.520Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:14.124Z
---

Instalacja aplikacji jest bardzo ważna, ponieważ rozszerzenie nie może zrobić niczego samodzielnie.

> Aur users that use DoomLerd's package should be safe as he says. Nie zalecamy tego, ale nadal możesz jej używać. Thanks to DoomLerd for handling aur repo still. 
> 
> {.is-warning}

## Spis treści

- **[O programie](#about)**
  - [Statystyki](#stats)
  - [Wymagania](#requirements)
  - Przykłady (wkrótce)
  - FAQ (wkrótce)
  - Budowa (wkrótce)
  - [Wsparcie / pomoc](#support)
  - [Podziękowania](#credits)
  - [Licencja](#license)
- **[Snapcraft](#snapcraft)** (TL;DR : _nigdy_ ™️)
- **[Portable AppImage](#appimage)** (_ZALECANE_)
  - [Instrukcje Instalacji](#appimageinstall)
  - [Dodatkowe uwagi](#appimagenotes)
- [**Dystrybucje oparte na Red Hat Enterprise Linux (RHEL)**](#packagecloud)
- [**Dystrybucje oparte na Debain i Ubuntu**](#packagecloud)
- [**Dystrybucje oparte na Arch Linuksie**](#arch)

<a name="about"></a>

## O nas

**PreMiD** to proste, konfigurowalne narzędzie, które wykorzystuje bibliotekę Discord RP (Rich Presence), która pozwala pokazać, co robisz w sieci (i w innych programach) na swoim profilu Discord jako **status użytkownika**.

<a name="stats"></a>

### Statystyki

<table>
  <tr>
    <th>Rozlokowanie</th>
    <th>Łączna liczba pobrań</th>
    <th>Najnowsze wydanie</th>
  </tr>
  <tr>
    <td><a href="https://github.com/PreMiD/Linux/actions"><img src="https://github.com/PreMiD/Linux/workflows/CI/badge.svg?branch=master&event=push" alt="CI"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases"><img src="https://img.shields.io/github/downloads/PreMiD/Linux/total.svg?maxAge=86400" alt="Wszystkie wydania"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases/latest"><img src="https://img.shields.io/github/v/release/PreMiD/Linux.svg?maxAge=86400" alt="Najnowsze wydanie"><br><img src="https://img.shields.io/github/downloads/PreMiD/Linux/latest/total.svg?maxAge=86400" alt="Wydania Github"></a></td>
  </tr>
</table>

<a name="requirements"></a>

### Wymagania

Technicznie każda dystrybucja, która może uruchamiać [oficjalną](https://discordapp.com/download) **aplikację Discorda** ( nie wersja internetowa )  może również uruchamiać PreMiD;</br> Jak zapewne zauważyliście w ostatnich latach, niektóre dystrybucje Linuksa zaczęły rezygnować z obsługi architektur 32-bitowych (ia32/i686/i386/x86) w wyniku czego my również. Możesz jednak spróbować samodzielnie zbudować aplikację, jeśli bardzo jej potrzebujesz w wersji  32-bitowej. </br> Ponieważ obecnie używamy Electron jako silnika (Discord też!), jego wymagania dotyczą również tej aplikacji:

- Ubuntu ≥ 12.04
- Fedora ≥ 21
- Debian ≥ 8

Nie wiadomo, czy starsze wersje innych dystrybucji go obsługują, więc po prostu aktualizuj swoją dystrybucję i używaj wersji **LTS (Long-Term Support)** jeśli twoja dystrybucja je oferuje, ponieważ są bardziej stabilne (unikaj wersji alfa).

<a name="support"></a>

### Wsparcie / pomoc

<div>
  <a target="_blank" href="https://discord.premid.app/" title="Dołącz do naszego Discorda!">
    <img height="75px" draggable="false" src="https://discordapp.com/api/guilds/493130730549805057/widget.png?style=banner2" alt="Dołącz do naszego Discorda!">
  </a>
</div>

<a name="credits"></a>

### Twórcy

Podziękowania dla:

- @nattadasu, @Rubensei, @Cairo2k18, zany130, Immanuel D, Friskytrash, Alexandre (i kilku innych, których imion zapomniałem) za przekazywanie opinii na temat wydań "nightly".
- @apriluwu za obsługę kompilacji Gentoo
- @SlimShadyIAm and naka za wcześniejsze utrzymanie pakietów Arch User Repository
- The Electron community za różne pakiety
- Każdemu, kto kiedykolwiek w jakikolwiek sposób przyczynił się do projektu.

<a name="license"></a>

### Licencja

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FPreMiD%2FLinux.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FPreMiD%2FLinux?ref=badge_large)

<img src="https://i.imgur.com/ACAxtmA.png" width="100" height="100" align="right"></img>
<a name="snapcraft"></a>

## Portable AppImage

Pakiet AppImage jest zalecany, jeśli Discord działa, ale inne pakiety PreMiD (.deb, .rpm, itp.) nie.

<a name="appimageinstall"></a>

### Instrukcja instalacji

```bash
wget https://github.com/PreMiD/Linux/releases/latest/download/PreMiD-Portable.AppImage && chmod a+x PreMiD*.AppImage
```

```bash
# Po prostu kliknij dwukrotnie lub uruchom
./PreMiD*.AppImage
```

<a name="appimagenotes"></a>

### Dodatkowe uwagi

Jeśli chcesz wypróbować PreMiD, albo po prostu nie chcesz go instalować, ten jest najlepszy, jest zawsze aktualny, ale _NIE URUCHAMIA SIĘ AUTOMATYCZNIE Z SYSTEMEM!_</br>Jeśli męczy Cię konieczność otwierania go za każdym razem, użyj innych pakietów (zgodnie z dystrybucją).

<img src="https://raw.githubusercontent.com/PreMiD/Linux/master/.github/packagecloud.png" width="100" height="100" align="right"></img>
<a name="packagecloud"></a>

# PackageCloud

Wydaliśmy paczki deb/rpm na naszym repozytorium paczek. Please visit it at https://packagecloud.io/PreMiD/Linux and download your deb/rpm package or use automatic script.

Dla **Ubuntu/Debian**:

```bash
curl -s https://packagecloud.io/install/repositories/PreMiD/Linux/script.deb.sh | sudo bash
```

Dla **Fedora/CentOS/RedHat**:

```bash
curl -s https://packagecloud.io/install/repositories/PreMiD/Linux/script.rpm.sh | sudo bash
```

Jeśli komenda nie działa, pobierz plik **deb/rpm** z naszego repozytorium pakietu lub nadpisz ustawienia.

<a name="arch"></a>
<img src="https://raw.githubusercontent.com/PreMiD/Linux/86ae2fbd49499785281f388a5305b06e0d3ecfea/.github/iusearchbtw.svg" width="100" height="100" align="right"></img>

## Arch Linux based distributions

Użycie [Arch User Repository](https://aur.archlinux.org/packages/premid);</br> Obsługiwane dystrybucje to _itself_, Manjaro, Anarchy, Artix, Arco, ArchLabs, Endeavour, Archman, BlackArch, Liri OS i [każda, która obsługuje instalację z AUR ](https://wiki.archlinux.org/index.php/Arch-based_distributions#Active).

<a name="archinstall"></a>

### Instrukcje instalacji

```bash
# Użycie yay (zalecane)
yay -S premid
```

```bash
# Użycie pakku
pakku -S premid
```

```bash
# Użycie trizen
trizen -S premid
```

```bash
# Użycie pacaur
pacaur -S premid
```

```bash
# ... łapiesz o co chodzi
```

lub ręcznie z [Arch User Repository](https://aur.archlinux.org/packages/premid) jeśli wiesz, co robisz.

<a name="archnotes"></a>

### Dodatkowe uwagi

Jeśli twoja dystrybucja używa Pacmana, musisz najpierw zainstalować jednego z pomocników. Jeśli nie masz, Yay jest zalecane, uruchom:

```bash
git clone https://aur.archlinux.org/yay.git && cd yay && makepkg -si
```

```bash
yay -S premid
```

AUR/Pacman również działają, chociaż ich funkcjonalność jest inna, więc możesz napotkać problemy podczas ich używania.