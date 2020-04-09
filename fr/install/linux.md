---
title: Linux
description: Commencer avec une installation PreMiD sous Linux
published: vrai
date: 2020-03-15T17:29:16.527Z
tags:
---

> Avant d'aller plus loin, assurez-vous que votre système répond à toutes les [exigences](/install/requirements).{.is-info}

L'installation de l'application est très importante car l'extension ne peut rien faire par elle-même.

# Installer

<table>
  <tr>
    <th>Distribution Linux prise en charge</th>
    <th>Méthode</th>
    <th>Installation</th>
    <th>Notes Supplémentaires</th>
  </tr>
  <tr>
    <td>Tout</td>
    <td>Portable <a href="https://github.com/PreMiD/Linux/releases/latest">AppImage</a></td>
    <td>
        <code>wget https://github.com/PreMiD/Linux/releases/latest/download/PreMiD-Portable.AppImage && chmod +x PreMiD*.AppImage</code><br>exécutez <code>./PreMiD*.AppImage</code> après ou double-cliquez dessus
    </td>
    <td><b>Ceci est le paquet recommandé</b> à utiliser, soit si vous voulez essayer PreMiD soit simplement ne pas vouloir l'installer ( ou peut-être le mettre dans une clé USB), il est toujours à jour mais <i>ne se lance pas automatiquement au démarrage du système</i>, donc si vous en avez assez d'avoir à l'ouvrir à chaque fois, utilisez les autres méthodes ci-dessous ( selon votre distribution Linux )</td>
  </tr>
  <tr>
    <td rowspan="5">Arch Linux</td>
    <td rowspan="5"><a href="https://aur.archlinux.org/packages/premid">Dépôt utilisateur Arch</a></td>
    <td>En utilisant yay :<br><code>yay -S premid</code><br></td>
    <td rowspan="4">Si votre distribution utilise pacman, alors vous devez d'abord installer l'un des assistants. Si vous n'en avez pas, Yay est recommandé, exécutez :<br><code>git clone https://aur.archlinux.org/yay. it && cd yay && makepkg -si</code><br>puis <code>yay -S premid</code>, comme indiqué dans la colonne précédente.<br><br>D'autres assistants AUR/Pacman fonctionnent également, bien que les fonctionnalités de chacun soient différentes afin que vous puissiez rencontrer des problèmes lors de leur utilisation.</td>
  </tr>
  <tr>
    <td>Utilisation de pakku :<br><code>pakku -S premid</code></td>
  </tr>
  <tr>
    <td>Utilisation de pacaur :<br><code>pacaur -S premid</code></td>
  </tr>
  <tr>
    <td>Utilisation du trizen :<br><code>trizen -S premid</code></td>
  </tr>
  <tr>
    <td><a href="https://wiki.archlinux.org/index.php/Arch_User_Repository#Installing_packages">Manuellement</a></td>
    <td>Non recommandé, pas facile pour les débutants et ne se met pas à jour automatiquement.</td>
  </tr>
  <tr>
    <td>Autres</td>
    <td>-</td>
    <td>-</td>
    <td>Bientôt (TM), utilisez l'AppImage pour l'instant</td>
  </tr>
</table>

> N'oubliez pas d'ajouter [l'extension ****](/install).{.is-warning}

# Plus d'information
https://github.com/PreMiD/Linux

![](https://a.icons8.com/TqgWTTfw/Oy7xHF/svg.svg) {.align-abstopright}