---
title: Linux
description: Začněte s instalací PreMiD na Linuxu
published: true
date: 2020-11-10T18:06:56.520Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:14.124Z
---

Instalace aplikace je velmi důležitá, protože rozšíření nemůže samo o sobě nic dělat.

> Uživatelé AUR, kteří používají balíček od DoomLerd, by měli být v bezpečí, jak sám říká. Nedoporučujeme používání tohoto balíčku, ale pokud chcete, můžete jej stále využívat. Děkujeme DoomLerd-ovi za stálé udržování AUR repozitáře. 
> 
> {.is-warning}

## Obsah

- **[Podrobnosti](#about)**
  - [Statistiky](#stats)
  - [Požadavky](#requirements)
  - Příklady (brzy)
  - Časté dotazy (brzy)
  - Sestavování (brzy)
  - [Podpora](#support)
  - [Poděkování](#credits)
  - [Licence](#license)
- **[Snapcraft](#snapcraft)** (TL;DR : _nikdy_ ™️)
- **[Přenosný AppImage ](#appimage)** (_DOPORUŘENO_)
  - [Návod k instalaci](#appimageinstall)
  - [Dodatečné poznámky](#appimagenotes)
- [**Distribuce založené na Red Hat Enterprise Linux (RHEL)**](#packagecloud)
- [**Distribuce založené na Debian a Ubuntu**](#packagecloud)
- [**Distribuce založené ne Arch Linuxu**](#arch)

<a name="about"></a>

## Podrobnosti

**PreMiD** je jednoduchý, konfigurovatelný nástroj, který používá Discord RP (Rich Presence) knihovnu, což vám umožňuje zobrazit co děláte na webu (a v pár programech) na svém Discord profilu jako **"Právě hraje" status**.

<a name="stats"></a>

### Statistiky

<table>
  <tr>
    <th>Deployment</th>
    <th>Celkový počet stažení</th>
    <th>Poslední verze</th>
  </tr>
  <tr>
    <td><a href="https://github.com/PreMiD/Linux/actions"><img src="https://github.com/PreMiD/Linux/workflows/CI/badge.svg?branch=master&event=push" alt="CI"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases"><img src="https://img.shields.io/github/downloads/PreMiD/Linux/total.svg?maxAge=86400" alt="Všechny vydání"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases/latest"><img src="https://img.shields.io/github/v/release/PreMiD/Linux.svg?maxAge=86400" alt="Poslední verze"><br><img src="https://img.shields.io/github/downloads/PreMiD/Linux/latest/total.svg?maxAge=86400" alt="GitHub vydání"></a></td>
  </tr>
</table>

<a name="requirements"></a>

### Požadavky

Technicky každá distribuce, na které lze spustit [oficiální](https://discordapp.com/download) Discord **aplikace** (ne webová nebo snap verze), může spustit i PreMiD;</br> Jak jste si možná mohli všimnou v posledních letech, některé Linuxové distribuce začaly rušit podporu 32-bitových (ia32/i686/i386/x86) architektur, a proto jsme se rozhodli tak také učinit. Můžete se však pokusit sestavit aplikaci sami, pokud ji zoufale potřebujete používat na 32-bitové distribuci.</br>Jelikož používáme Electron jako engine (Discord taky!), jeho požadavky se také vztahují na tuto aplikaci :

- Ubuntu ≥ 12.04
- Fedora ≥ 21
- Debian ≥ 8

Není známo, jestli jsou podporovány starší verze ostatních distribucí, proto udržujte vámi používanou distribuci aktualizovanou a používejte vydání **LTS (Long-Term Support)**, pokud je vaše distribuce nabízí - jsou stabilnější (vyhýbejte se alpha vydáním).

<a name="support"></a>

### Podpora

<div>
  <a target="_blank" href="https://discord.premid.app/" title="Připojte se k našemu Discordu!">
    <img height="75px" draggable="false" src="https://discordapp.com/api/guilds/493130730549805057/widget.png?style=banner2" alt="Připojte se k našemu Discordu!">
  </a>
</div>

<a name="credits"></a>

### Poděkování

Poděkování:

- @nattadasu, @Rubensei, @Cairo2k18, zany130, Immanuel D, Friskytrash, Alexandre (a pár dalších lidí, kterých jsem zapomněl jméno) za poskyování zpětné vazby u nightly verzí.
- @apriluwu za udržování verze pro Gentoo
- @SlimShadyIAm a naka za dřívejší údržbu balíčků Uživatelského Repozitáře Arch
- Komunitu Electronu za různé balíčky
- Komukoliv jinému kdo jakýmkoliv způsobem přispěl projektu.

<a name="license"></a>

### Licence

[![Stav FOSSA](https://app.fossa.io/api/projects/git%2Bgithub.com%2FPreMiD%2FLinux.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FPreMiD%2FLinux?ref=badge_large)

<img src="https://i.imgur.com/ACAxtmA.png" width="100" height="100" align="right"></img>
<a name="snapcraft"></a>

## Přenosný AppImage

Balíček AppImage je doporučený, pokud pro vás Discord funguje, ale ostatní PreMiD balíčky (.deb, .rpm, atd.) ne.

<a name="appimageinstall"></a>

### Návod k instalaci

```bash
wget https://github.com/PreMiD/Linux/releases/latest/download/PreMiD-Portable.AppImage && chmod a+x PreMiD*.AppImage
```

```bash
# Otevřete dvojklikem nebo spusťte
./PreMiD*.AppImage
```

<a name="appimagenotes"></a>

### Dodatečné poznámky

Ať už chcete PreMiD jen vyzkoušet nebo jej prostě nechcete instalovat, toto je nejlepší volba, je vždy aktuální, ale _NESPOUŠTÍ SE AUTOMATICKY PO PŘIHLÁŠENÍ!_</br>Pokud vás začne unavovat neustálé otevírání přenosné verze, použijte jiné balíčky (podle vaší distribuce).

<img src="https://raw.githubusercontent.com/PreMiD/Linux/master/.github/packagecloud.png" width="100" height="100" align="right"></img>
<a name="packagecloud"></a>

# PackageCloud

Vydali jsme deb/rpm balíčky v našem packagecloud repozitáři. Prosím, navštivte https://packagecloud.io/PreMiD/Linux a stáhněte váš deb/rpm balíček nebo použijte automatizovaný skript.

Pro **Ubuntu/Debian**:

```bash
curl -s https://packagecloud.io/install/repositories/PreMiD/Linux/script.deb.sh | sudo bash
```

Pro **Fedora/CentOS/RedHat**:

```bash
curl -s https://packagecloud.io/install/repositories/PreMiD/Linux/script.rpm.sh | sudo bash
```

Pokud příkaz nefunguje, stáhněte **deb/rpm** soubor z našeho packagecloud repozitáře nebo přepište nastavení.

<a name="arch"></a>
<img src="https://raw.githubusercontent.com/PreMiD/Linux/86ae2fbd49499785281f388a5305b06e0d3ecfea/.github/iusearchbtw.svg" width="100" height="100" align="right"></img>

## Distribuce založené ne Arch Linuxu

Využívá [Arch User Repository](https://aur.archlinux.org/packages/premid);</br>Podporované distribuce jsou _Arch Linux sám_, Manjaro, Anarchy, Artix, Arco, ArchLabs, Endeavour, Archman, BlackArch, Liri OS a [každá další, která podporuje instalaci z AUR](https://wiki.archlinux.org/index.php/Arch-based_distributions#Active).

<a name="archinstall"></a>

### Návod k instalaci

```bash
# Pomocí yay (doporučeno)
yay -S premid
```

```bash
# Pomocí pakku
pakku -S premid
```

```bash
# Pomocí trizen
trizen -S premid
```

```bash
# Pomocí pacaur
pacaur -S premid
```

```bash
# ... you get the point
```

nebo manuálně z [Arch User Repository](https://aur.archlinux.org/packages/premid), pokud víte, co děláte.

<a name="archnotes"></a>

### Dodatečné poznámky

Pokud vaše distribuce používá pacman, musíte nejprve nainstalovat jeden z pomocných balíčků. Pokud žádný nemáte, doporučujeme Yay, spusťte:

```bash
git clone https://aur.archlinux.org/yay.git && cd yay && makepkg -si
```

```bash
yay -S premid
```

Ostatní pomocné balíčky pro AUR/Pacman rovněž fungují, ale funkcionality každého z nich se liší, proto s nimi můžete mít problémy při používání.