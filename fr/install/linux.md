---
title: Linux
description: Commencer avec une installation PreMiD sous Linux
published: true
date: 2020-02-12T22:16:41.114Z
tags: 
---

> Avant d'aller plus loin, assurez-vous que votre système répond à toutes les [exigences](/install/requirements).{.is-info}

L'installation de l'application est très importante car l'extension ne peut rien faire par elle-même.

# Installer
> Il n'y a pas d'installateur officiel pour ce système d'exploitation. Cela signifie qu'il n'y a pas de soutien officiel pour cela. Cependant, vous pouvez échanger des informations avec d'autres utilisateurs Linux sur notre [serveur Discord](https://discord.gg/premid/).{.is-info}

1. Install [NodeJS](https://nodejs.org/en/).
2. Ouvrir un terminal.
3. Cloner le dépôt : `git clone https://github.com/PreMiD/PreMiD.git`
4. Changer le répertoire de travail : `cd PreMiD/src`
5. Installez les dépendances et l'application : `npm install`
6. Changer le répertoire de travail : `cd ..`
7. Type : `npm run init`
8. Démarrer l'application : `npm start`

L'application démarre automatiquement. Vérifiez le symbole dans votre barre de menus.

> Les méthodes suivantes sont obsolètes et ne sont plus recommandées. Utilisez à vos propres risques. 
> 
> {.is-warning}

## Arch Linux
Si vous êtes sur Arch Linux ou une distribution basée sur Arch, PreMiD est disponible sur le [Référentiel Arch Linux](https://aur.archlinux.org/packages/premid/) (AUR) sous `premid`. Utilisez votre gestionnaire de paquets préféré pour le récupérer à partir de là !

## Autres distributions
- Script d'installation : `wget -qO- http://bit.ly/install-premid | bash` ou `curl -sL https://bit. y/install-premid | bash`, attendez qu'il s'installe, double-cliquez sur le raccourci "PreMiD" créé sur votre bureau, et c'est tout !
- Si vous voulez désinstaller PreMiD, vous pouvez exécuter `wget -qO- http://bit.ly/uninstall-premid | bash` ou `curl -sL https://bit.ly/uninstall-premid | bash`.

> N'oubliez pas d'ajouter [l'extension ****](/install).{.is-warning}

![](https://a.icons8.com/TqgWTTfw/Oy7xHF/svg.svg) {.align-abstopright}