---
title: Linux
description: Getting started with a PreMiD installation on Linux
published: true
date: 2020-01-18T20:32:37.753Z
tags:
---

> A folytatás előtt, győződj meg arról, hogy az általad használt rendszer megfelel a [követelményeknek](/install/requirements).{.is-info}

A bővítmény telepítése rendkívül fontos az alkalmazás működéséhez.

# Telepítés
> Ehhez az operációs rendszerhez nincs hivatalos telepítő. Ez azt jeleni, hogy hivatalos támogatás sincs. Azonban könnyen információhoz juthatsz [Discord szerverünk](https://discord.gg/premid/) Linux felhasználóinak köszönhetően.{.is-info}

1. [NodeJS](https://nodejs.org/en/) telepítése.
2. Terminál megnyitása.
3. Clone the repository: `git clone https://github.com/Timeraa/PreMiD.git`
4. Change the working directory: `cd PreMiD/src`
5. Install the dependencies and the application: `npm install`
6. Change the working directory: `cd ..`
7. Type: `npm run init`
8. Start the application: `npm start`

The application will start automatically. Check for the symbol in your menu bar.

> The following methods are deprecated and no longer recommended. Use at your own risk. 
> 
> {.is-warning}

## Arch Linux
If you are on Arch Linux or an Arch based distribution, PreMiD is available on the [Arch Linux Repository](https://aur.archlinux.org/packages/premid-git/) (AUR) under `premid-git`. Use your favorite package manager to grab it from there!

## Other distributions
- Installation script: `wget -qO- http://bit.ly/install-premid | bash` or `curl -sL https://bit.ly/install-premid | bash`, wait for it to install, double-click the "PreMiD" shortcut created on your Desktop, and that's it!
- If you want to uninstall PreMiD, you can run `wget -qO- http://bit.ly/uninstall-premid | bash` or `curl -sL https://bit.ly/uninstall-premid | bash`.

> Do not forget to [add the **extension**](/install).{.is-warning}

![](https://a.icons8.com/TqgWTTfw/Oy7xHF/svg.svg) {.align-abstopright}