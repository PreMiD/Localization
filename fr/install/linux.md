---
title: Linux
description: Installation de l'application PreMiD sur Linux
published: true
date: 2020-11-10T18:06:56.520Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:14.124Z
---

L'installation de l'application est très importante car l'extension ne peut rien faire par elle-même.

> Les utilisateurs de L'AUR qui se servent du paquet de DoomLert devraient être en sécurité. Nous ne recommandons pas de l'utiliser, mais si vous le souhaitez, vous pouvez toujours l'utiliser. Merci à DoomLerd de toujours s'occuper du dépôt AUR. 
> 
> {.is-warning}

## Table des Matières

- **[À propos](#about)**
  - [Statistiques](#stats)
  - [Prérequis](#requirements)
  - Exemple (à venir)
  - FAQ (à venir)
  - Immeuble (bientôt)
  - [Support](#support)
  - [Crédits](#credits)
  - [Licence](#license)
- **[Snapcraft](#snapcraft)** (TL;DR : _jamais_ ™️)
- **[AppImage Portable](#appimage)** (_CONSEILLÉ_)
  - [Instructions d'installation](#appimageinstall)
  - [Notes complémentaires](#appimagenotes)
- [**Distributions basées sur Red Hat Enterprise Linux (RHEL)**](#packagecloud)
- [**Distributions basées sur Debian et Ubuntu**](#packagecloud)
- [**Distributions basées sur Arch Linux**](#arch)

<a name="about"></a>

## À propos

**PreMiD** est un utilitaire simple et configurable qui utilise la bibliothèque RP (Rich Presence) de Discord. Cela vous permet de montrer ce que vous faites sur le Web (et quelques programmes) dans votre profil Discord comme **status de jeu**.

<a name="stats"></a>

### Stats

<table>
  <tr>
    <th>Déploiement</th>
    <th>Téléchargements total</th>
    <th>Dernière version</th>
  </tr>
  <tr>
    <td><a href="https://github.com/PreMiD/Linux/actions"><img src="https://github.com/PreMiD/Linux/workflows/CI/badge.svg?branch=master&event=push" alt="CI"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases"><img src="https://img.shields.io/github/downloads/PreMiD/Linux/total.svg?maxAge=86400" alt="Toutes les versions"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases/latest"><img src="https://img.shields.io/github/v/release/PreMiD/Linux.svg?maxAge=86400" alt="Dernière version"><br><img src="https://img.shields.io/github/downloads/PreMiD/Linux/latest/total.svg?maxAge=86400" alt="Version GitHub"></a></td>
  </tr>
</table>

<a name="requirements"></a>

### Prérequis

Techniquement, chaque distribution qui peut exécuter **l'application** Discord [officiel](https://discordapp.com/download) (pas la version web ou la version snap ) peut également exécuter PreMiD;</br> Comme vous l'avez peut-être remarqué ces dernières années, certaines distributions Linux ont commencé à abandonner la prise en charge des architectures 32 bits (ia32 / i686 / i386 / x86), et en conséquence, nous l'avons fait également. Vous pouvez cependant essayer de compiler l'application vous-même si vous avez désespérément besoin de l'utiliser sur une distribution 32 bits.</br> Puisque nous utilisons actuellement Electron comme moteur (Discord le fait aussi !), il est nécéssaire que vous utilisiez une des versions suivantes :

- Ubuntu ≥ 12.04
- Fedora ≥ 21
- Debian ≥ 8

On ne sait pas si les anciennes versions d'autres distributions supporte l'application donc gardez votre distribution à jour et utilisez le**LTS (Long-Term Support)** si votre distribution le propose, ces versions sont plus stables (évitez les versions alpha).

<a name="support"></a>

### Support

<div>
  <a target="_blank" href="https://discord.premid.app/" title="Rejoignez notre Discord">
    <img height="75px" draggable="false" src="https://discordapp.com/api/guilds/493130730549805057/widget.png?style=banner2" alt="Rejoignez notre Discord!">
  </a>
</div>

<a name="credits"></a>

### Crédits

Merci à

- @nattadasu, @Rubensei, @Cairo2k18, zany130, Immanuel D, Friskytrash, Alexandre (et tout les autres contributeurs) pour nous faire part de leurs commentaires sur les version nightly.
- @apriluwu pour la maintenance des versions Gentoo
- @SlimShadyIAm et naka pour la maintenance des paquets de l'AUR
- La communauté Electron pour divers paquets
- Quiconque ayant contribué au projet de quelque façon que ce soit.

<a name="license"></a>

### Licence

[![Status FOSSA](https://app.fossa.io/api/projects/git%2Bgithub.com%2FPreMiD%2FLinux.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FPreMiD%2FLinux?ref=badge_large)

<img src="https://i.imgur.com/ACAxtmA.png" width="100" height="100" align="right"></img>
<a name="snapcraft"></a>

## Portable AppImage

Le paquet AppImage est recommandé si Discord fonctionne pour vous, mais pas d'autres paquets PreMiD (.deb, .rpm, etc).

<a name="appimageinstall"></a>

### Instructions d'installation

```bash
wget https://github.com/PreMiD/Linux/releases/latest/download/PreMiD-Portable.AppImage && chmod a+x PreMiD*.AppImage
```

```bash
# Double-cliquez dessus ou exécutez
./PreMiD*.AppImage
```

<a name="appimagenotes"></a>

### Notes additionnelles

Si vous voulez essayer PreMiD ou simplement ne voulez pas l'installer, c'est la meilleur méthode, c'est toujours à jour mais <br>_CELA NE DÉMARRE PAS AUTOMATIQUEMENT AVEC LE SYSTÈME!</br>. Si vous en avez assez d'avoir à l'ouvrir à chaque fois, utilisez les autres paquets (selon votre distribution).

<img src="https://raw.githubusercontent.com/PreMiD/Linux/master/.github/packagecloud.png" width="100" height="100" align="right"></img>
<a name="packagecloud"></a>

# PackageCloud

Nous avons publié des paquets deb/rpm sur notre dépôt packagecloud. Rendez-vous sur https://packagecloud.io/PreMiD/Linux et téléchargez votre paquet deb/rpm ou utilisez un script automatique.

Pour **Ubuntu/Debian**:

```bash
curl -s https://packagecloud.io/install/repositories/PreMiD/Linux/script.deb.sh | sudo bash
```

Pour **Fedora/CentOS/RedHat**:

```bash
curl -s https://packagecloud.io/install/repositories/PreMiD/Linux/script.rpm.sh | sudo bash
```

Si la commande ne fonctionne pas, téléchargez le fichier **deb/rpm** depuis notre dépôt packagecloud ou remplacez les paramètres.

<a name="arch"></a>
<img src="https://raw.githubusercontent.com/PreMiD/Linux/86ae2fbd49499785281f388a5305b06e0d3ecfea/.github/iusearchbtw.svg" width="100" height="100" align="right"></img>

## Distributions basées sur Arch Linux

Utilise les [Arch User Repository](https://aur.archlinux.org/packages/premid);</br> Les distributions supportées sont _elles-mêmes_, Manjaro, Anarchy, Artix, Arco, ArchLabs, Endeavour, Archman, BlackArch, Liri OS et [toute les distros qui prennent en charge l'installation à partir de l'AUR](https://wiki.archlinux.org/index.php/Arch-based_distributions#Active).

<a name="archinstall"></a>

### Instructions d'installation

```bash
# Avec yay (recommandé)
yay -S premid
```

```bash
# Avec pakku
pakku -S premid
```

```bash
# Avec trizen
trizen -S premid
```

```bash
# Avec pacaur
pacaur -S premid
```

```bash
# ... vous m'avez compris
```

ou manuellement à partir de l'[Arch User Repository](https://aur.archlinux.org/packages/premid) si vous savez ce que vous faites.

<a name="archnotes"></a>

### Notes additionnelles

Si votre distribution utilise pacman, alors vous devez d'abord installer l'un des assistants. Si vous n'en avez pas, Yay est recommandé, exécutez :

```bash
git clone https://aur.archlinux.org/yay.git && cd yay && makepkg -si
```

```bash
yay -S premid
```

Les autres assistants AUR/Pacman fonctionnent également, bien que les fonctionnalités de chacun soient différentes, vous n'êtes pas à l'abri de rencontrer des problèmes lorsque vous les utilisez.