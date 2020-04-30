---
title: Linux
description: Commencer avec une installation PreMiD sous Linux
published: vrai
date: 2020-04-27T12:52:46.261Z
tags:
---

> L'activation du lancement automatique sous Linux est maintenant disponible depuis l'application au lieu de l'extension.{.is-warning}

L'installation de l'application est très importante car l'extension ne peut rien faire par elle-même.

## Table des Matières

- **[À propos](#about)**
  - [Statistiques](#stats)
  - [Exigences](#requirements)
  - Exemple (bientôt)
  - FAQ (bientôt)
  - Immeuble (bientôt)
  - [Support](#support)
  - [Crédits](#credits)
  - [License](#license)
- **[Snapcraft](#snapcraft)** (TL;DR : _jamais_ ™️)
- **[Portable AppImage](#portable-appimage)** (_CONSEILLÉ_)
  - [Instructions d'Installation](#installation-instructions)
  - [Notes complémentaires](#additional-notes)
- **Red Hat Enterprise Linux (RHEL) basé distributions** (bientôt, utilisation [cette](#portable-appimage) pour l'instant)
- **Distributions basées sur Debian et Ubuntu** (bientôt, utilisation [cette](#portable-appimage) pour l'instant)
- **[Archiver les distributions basées sur Linux](#arch-linux-based-distributions)**
  - [Instructions d'Installation](#installation-instructions-1)
  - [Notes complémentaires](#additional-notes-1)
- **[Gentoo Linux](#gentoo-linux)**
  - [Instructions d'Installation](#installation-instructions-2)
  - [Notes complémentaires](#additional-notes-2)

<a name="about"></a>

## À propos

**PreMiD** est un utilitaire simple et configurable qui utilise la bibliothèque RP (Rich Presence) de Discord qui vous permet de montrer ce que vous faites sur le Web (et quelques programmes) dans votre profil Discord comme **status de lecture**. 

<a name="stats"></a>

### Statistiques

<table>
  <tr>
    <th>Déploiement
</th>
    <th>Téléchargements total</th>
    <th>Dernières version</th>
  </tr>
  <tr>
    <td><a href="https://github.com/PreMiD/Linux/actions"><img src="https://github.com/PreMiD/Linux/workflows/CI/badge.svg?branch=master&event=push" alt="CI"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases"><img src="https://img.shields.io/github/downloads/PreMiD/Linux/total.svg?maxAge=86400" alt="Toutes les versions"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases/latest"><img src="https://img.shields.io/github/v/release/PreMiD/Linux.svg?maxAge=86400" alt="Dernières version"><br><img src="https://img.shields.io/github/downloads/PreMiD/Linux/latest/total.svg?maxAge=86400" alt="Version GitHub"></a></td>
  </tr>
</table>

<a name="requirements"></a>

### Exigences

Techniquement, chaque distribution qui peut exécuter Discord [officiel](https://discordapp.com/download) **app** (pas le web ou la version snap ) peut également exécuter PreMiD;</br> Comme vous l'avez peut-être remarqué ces dernières années, certaines distributions Linux ont commencé à abandonner la prise en charge des architectures 32 bits (ia32 / i686 / i386 / x86), et en conséquence, nous l'avons fait également. Vous pouvez cependant essayer de construire l'application vous-même si vous avez désespérément besoin de l'utiliser sur une distribution 32 bits.</br> Puisque nous utilisons actuellement Electron comme moteur (Discord le fait aussi !), ses exigences s'appliquent également à cette application :

- Ubuntu ≥ 12.04
- Fedora ≥ 21
- Debian ≥ 8

On ne sait pas si les anciennes versions d'autres distributions le supportent, donc gardez votre distribution à jour et utilisez **LTS (Long-Term Support)** si votre distribution les offres, car ils sont plus stables (évitez les versions alpha).

<a name="support"></a>

### Support

<div>
  <a target="_blank" href="https://discord.gg/WvfVZ8T" title="Rejoignez notre Discord">
    <img height="75px" draggable="false" src="https://discordapp.com/api/guilds/493130730549805057/widget.png?style=banner2" alt="Rejoignez notre Discord">
  </a>
</div>

<a name="credits"></a>

### Crédits

Merci à

- @nattadasu, @Rubensei, @Cairo2k18, zany130, Immanuel D, Friskytrash, Alexandre (et quelques autres gars que j'ai oubliés de leur nom) pour nous faire part de leurs commentaires sur les sorties nocturnes.
- @apriluwu pour la maintenance des versions Gentoo
- @SlimShadyIAm et naka pour la maintenance des paquets de dépôt utilisateurs Arch
- La communauté Electron pour divers paquets
- Quiconque a déjà contribué au projet de quelque façon que ce soit.

<a name="license"></a>

### License

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FPreMiD%2FLinux.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FPreMiD%2FLinux?ref=badge_large)

<img src="https://i.imgur.com/ACAxtmA.png" width="100" height="100" align="right"></img>
<a name="snapcraft"></a>

## Snapcraft

Probablement jamais, puisque la nature de Snap empêche PreMiD d'atteindre Discord et l'extension correctement,</br> Il serait apprécié que quelqu'un puisse le faire cependant, toutes les idées ou les PRs sont les bienvenues.</br> P.S.: le confinement classique ne fonctionne pas non plus donc ne vous ennuyez pas de faire une suggestion à ce sujet.

<img src="https://i.imgur.com/qEZOOfU.png" width="100" height="100" align="right"></img>
<a name="appimage"></a>

## Portable AppImage

Le paquet AppImage est recommandé si Discord fonctionne pour vous, mais pas d'autres paquets PreMiD (.deb, .rpm, etc).

<a name="appimageinstall"></a>

### Instructions d'Installation

```bash
wget https://github.com/PreMiD/Linux/releases/latest/download/PreMiD-Portable.AppImage && chmod a+x PreMiD*.AppImage
```

```bash
# Double-cliquez dessus ou exécutez
./PreMiD*.AppImage
```

<a name="appimagenotes"></a>

### Notes complémentaires

Soit si vous voulez essayer PreMiD ou simplement ne voulez pas l'installer, C'est le meilleur, c'est toujours à jour mais _DOESN'T AUTO-START AVEC LE SYSTÈME!</br>Si vous en avez assez d'avoir à l'ouvrir à chaque fois, utilisez les autres paquets (selon votre distribution).

<a name="arch"></a>
<img src="https://i.imgur.com/NBevNlU.png" width="100" height="100" align="right"></img>

## Archiver les distributions basées sur Linux

Les usages [Arch User Repository](https://aur.archlinux.org/packages/premid);</br> Les distributions supportées sont _elles-mêmes_, Manjaro, Anarchie, Artix, Arco, ArchLabs, Endeavour, Archman, BlackArch, Liri OS et [tous ceux qui prennent en charge l'installation à partir de AUR](https://wiki.archlinux.org/index.php/Arch-based_distributions#Active).

<a name="archinstall"></a>

### Instructions d'Installation

```bash
# Utiliser yay (recommandé)
yay -S premid
```

```bash
# Utilisation de pakku
pakku -S premid
```

```bash
# En utilisant trizen :trizen -S premid
```

```bash
# En utilisant pacaur
pacaur -S premid
```

```bash
# ... vous obtenez le point
```

ou manuellement à partir du [Repository utilisateur Arch](https://aur.archlinux.org/packages/premid) si vous savez ce que vous faites.

<a name="archnotes"></a>

### Notes complémentaires

Si votre distribution utilise pacman, alors vous devez d'abord installer l'un des assistants. Si vous n'en avez pas, Yay est recommandé, exécutez :

```bash
git clone https://aur.archlinux.org/yay.git && cd yay && makepkg -si
```

```bash
yay -S premid
```

Les autres aides AUR/Pacman fonctionnent également, bien que les fonctionnalités de chacun soient différentes de sorte que vous pourriez rencontrer des problèmes lors de leur utilisation.

<img src="https://i.imgur.com/Kv1X2to.png" width="100" height="100" align="right"></img>
<a name="gentoo"></a>

## Gentoo Linux

Il en va de même pour ses dérivés, tels que ColverOS, Clip-OS, Sabayon, Bicom Systems PBXware, [etc](https://wiki.gentoo.org/wiki/Distributions_based_on_Gentoo#Active_projects).

<a name="gentooinstall"></a>

### Instructions d'Installation

```bash
# Ajouter l'overlay en utilisant layman
layman -S && layman -a apriluwu
```

```bash
# Installer via portage
emerge -av app-misc/premid
```

<a name="gentoonotes"></a>

### Notes complémentaires

La commande d'installation montre l'utilise de layman, elle est dans les dépôts officiels à travers `app-portage/layman`.<br> Pour recevoir des mises à jour, vous devrez synchroniser l'overlay de temps à autre, vous pouvez le faire avec

```bash
layman -S
```