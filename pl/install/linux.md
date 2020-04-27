---
title: Linux
description: Rozpoczęcie instalacji PreMiD w systemie Linux
published: tak
date: 2020-04-27T12:52:46.261Z
tags:
---

> Włączanie automatycznego uruchamiania w systemie Linux jest teraz dostępne w aplikacji zamiast rozszerzenia.{.is-warning}

Instalacja aplikacji jest bardzo ważna, ponieważ rozszerzenie nie może zrobić niczego samodzielnie.

## Spis treści

- **[O programie](#about)**
  - [Statystyki](#stats)
  - [Wymaganie](#requirements)
  - Przykłady (wkrótce)
  - FAQ (wkrótce)
  - Budowa (wkrótce)
  - [Wsparcie / pomoc](#support)
  - [Twórcy](#credits)
  - [Licencja](#license)
- **[Snapcraft](#snapcraft)** (TL;DR : _never_ ™️)
- **[Portable AppImage](#portable-appimage)** (_RECOMMENDED_)
  - [Instrukcje Instalacji](#installation-instructions)
  - [Dodatkowe uwagi](#additional-notes)
- **Red Hat Enterprise Linux (RHEL) based distributions** (soon, use [this](#portable-appimage) for now)
- **Debian and Ubuntu based distributions** (soon, use [this](#portable-appimage) for now)
- **[Arch Linux based distributions](#arch-linux-based-distributions)**
  - [Instrukcje Instalacji](#installation-instructions-1)
  - [Dodatkowe uwagi](#additional-notes-1)
- **[Gentoo Linux](#gentoo-linux)**
  - [Instrukcje Instalacji](#installation-instructions-2)
  - [Dodatkowe uwagi](#additional-notes-2)

<a name="about"></a>

## O programie

**PreMiD** to proste, konfigurowalne narzędzie, które wykorzystuje bibliotekę Discord RP (Rich Presence), która pozwala pokazać, co robisz w sieci (i kilka programów) w swoim profilu Discord jako **status użytkownika**.

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

### Wymaganie

Technicznie każda dystrybucja, która może uruchamiać [oficjalną](https://discordapp.com/download) **aplikację Discorda** ( nie wersja internetowa )  może również uruchamiać PreMiD;</br> Jak zapewne zauważyliście w ostatnich latach, niektóre dystrybucje Linuksa zaczęły rezygnować z obsługi architektur 32-bitowych (ia32/i686/i386/x86) w wyniku czego my również. Możesz jednak spróbować samodzielnie zbudować aplikację, jeśli bardzo jej potrzebujesz w wersji  32-bitowej. </br> Ponieważ obecnie używamy Electron jako silnika (Discord też!), jego wymagania dotyczą również tej aplikacji:

- Ubuntu ≥ 12.04
- Fedora ≥ 21
- Debian ≥ 8

Nie wiadomo, czy starsze wersje innych dystrybucji go obsługują, więc po prostu aktualizuj swoją dystrybucję i używaj wersji **LTS (Long-Term Support)** jeśli twoja dystrybucja je oferuje, ponieważ są bardziej stabilne (unikaj wersji alfa).

<a name="support"></a>

### Wsparcie / pomoc

<div>
  <a target="_blank" href="https://discord.gg/WvfVZ8T" title="Dołącz do naszego Discorda!">
    <img height="75px" draggable="false" src="https://discordapp.com/api/guilds/493130730549805057/widget.png?style=banner2" alt="Dołącz do naszego Discorda!">
  </a>
</div>

<a name="credits"></a>

### Twórcy

Podziękowania dla:

- @nattadasu, @Rubensei, @Cairo2k18, zany130, Immanuel D, Friskytrash, Alexandre (i kilku innych, których imion zapomniałem) za przekazywanie opinii na temat wydań "nightly".
- @apriluwu for maintaining the Gentoo builds
- @SlimShadyIAm and naka za wcześniejsze utrzymanie pakietów Arch User Repository
- The Electron community za różne pakiety
- Każdemu, kto kiedykolwiek w jakikolwiek sposób przyczynił się do projektu.

<a name="license"></a>

### Licencja

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FPreMiD%2FLinux.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FPreMiD%2FLinux?ref=badge_large)

<img src="https://i.imgur.com/ACAxtmA.png" width="100" height="100" align="right"></img>
<a name="snapcraft"></a>

## Snapcraft

Prawdopodobnie nigdy, ponieważ natura Snapa blokuje PreMiD prawidłowe dotarcie do Discorda i rozszerzeń.</br> Byłobym wdzięczny, gdyby ktoś mógł to zrobić, wszelkie pomysły lub PR są mile widziane.</br> PS.: Klasyczne zamknięcie też nie działa, więc nie zawracaj sobie głowy sugerowaniem tego.

<img src="https://i.imgur.com/qEZOOfU.png" width="100" height="100" align="right"></img>
<a name="appimage"></a>

## Portable AppImage

The AppImage package is the recommended one if Discord works for you but other PreMiD packages (.deb, .rpm, etc) don't.

<a name="appimageinstall"></a>

### Instrukcje Instalacji

```bash
wget https://github.com/PreMiD/Linux/releases/latest/download/PreMiD-Portable.AppImage && chmod a+x PreMiD*.AppImage
```

```bash
# Just double-click it or run
./PreMiD*.AppImage
```

<a name="appimagenotes"></a>

### Dodatkowe uwagi

Either if you want to try PreMiD or just don't want to install it, this one's the best, it's always up to date but _DOESN'T AUTO-START WITH THE SYSTEM!_</br>If you get tired of having to open it each time, use the other packages (according to your distribution).

<a name="arch"></a>
<img src="https://i.imgur.com/NBevNlU.png" width="100" height="100" align="right"></img>

## Arch Linux based distributions

Uses [Arch User Repository](https://aur.archlinux.org/packages/premid);</br> Supported distributions are _itself_, Manjaro, Anarchy, Artix, Arco, ArchLabs, Endeavour, Archman, BlackArch, Liri OS and [every one that supports installing from AUR](https://wiki.archlinux.org/index.php/Arch-based_distributions#Active).

<a name="archinstall"></a>

### Instrukcje Instalacji

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

### Dodatkowe uwagi

If your distro uses pacman, then you have to install one of the helpers first. If you don't have any, Yay is recommended, run :

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

### Instrukcje Instalacji

```bash
# Add the overlay using layman
layman -S && layman -a apriluwu
```

```bash
# Install via portage
emerge -av app-misc/premid
```

<a name="gentoonotes"></a>

### Dodatkowe uwagi

The shown install command uses layman, it is in the official repositories through `app-portage/layman`.<br> To get updates you will have to sync the overlay from time to time, you can do this with

```bash
layman -S
```