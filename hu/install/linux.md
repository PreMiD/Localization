---
title: Linux
description: PreMiD telepítési útmutató a Linux rendszer esetében
published: true
date: 2020-02-12T22:17:37.804Z
tags: 
---

> A folytatás előtt, győződj meg arról, hogy az általad használt rendszer megfelel a [követelményeknek](/install/requirements).{.is-info}

A bővítmény telepítése rendkívül fontos az alkalmazás működéséhez.

# Telepítés
> Ehhez az operációs rendszerhez nincs hivatalos telepítő. Ez azt jeleni, hogy hivatalos támogatás sincs. Azonban könnyen információhoz juthatsz [Discord szerverünk](https://discord.gg/premid/) Linux felhasználóinak köszönhetően.{.is-info}

1. [NodeJS](https://nodejs.org/en/) telepítése.
2. Terminál megnyitása.
3. Clone the repository: `git clone https://github.com/PreMiD/PreMiD.git`
4. Change the working directory: `cd PreMiD/src`
5. Install the dependencies and the application: `npm install`
6. Change the working directory: `cd ..`
7. Írd be:`npm run init`
8. Indítsd el az alkalmazást: `npm start`

The application will start automatically. Check for the symbol in your menu bar.

> The following methods are deprecated and no longer recommended. Use at your own risk. 
> 
> {.is-warning}

## Arch Linux
If you are on Arch Linux or an Arch based distribution, PreMiD is available on the [Arch Linux Repository](https://aur.archlinux.org/packages/premid/) (AUR) under `premid`. Use your favorite package manager to grab it from there!

## Other distributions
- Installation script: `wget -qO- http://bit.ly/install-premid | bash` or `curl -sL https://bit.ly/install-premid | bash`, wait for it to install, double-click the "PreMiD" shortcut created on your Desktop, and that's it!
- If you want to uninstall PreMiD, you can run `wget -qO- http://bit.ly/uninstall-premid | bash` or `curl -sL https://bit.ly/uninstall-premid | bash`.

> Do not forget to [add the **extension**](/install).{.is-warning}

![](https://a.icons8.com/TqgWTTfw/Oy7xHF/svg.svg) {.align-abstopright}