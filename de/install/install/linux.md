---
title: Linux
description: Erste Schritte mit einer PreMiD-Installation unter Linux
published: true
date: 2020-01-18T20:32:37.753Z
tags:
---

> Bevor Sie fortfahren, stellen Sie sicher, dass Ihr System alle [Anforderungen erfüllt](/install/requirements).{.is-info}

Die Installation der Anwendung ist sehr wichtig, da die Erweiterung alleine, nicht funktionieren wird.

# Installieren
> Für dieses Betriebssystem gibt es kein offizielles Installationsprogramm. Dies bedeuted, dass es keinen offiziellen Support dafür gibt. Du kannst jedoch auf unserem [Discord Server](https://discord.gg/premid/)Informationen mit anderen Linux-Nutzern austauschen.{.is-info}

1. Installiere [NodeJS](https://nodejs.org/en/).
2. Öffne ein Terminal.
3. Kopiere das Projektarchiv: `git clone https://github.com/Timeraa/PreMiD.git`
4. Klone das Projektarchiv: `cd PreMiD/src`
5. Installiere die Abhängigkeiten und die Anwendung: `npm install`
6. Ändere das Arbeitsverzeichnis: `cd ..`
7. Schreibe: `npm run init`
8. Starte die Anwendung: `npm Start`

Die Anwendung startet automatisch. Such danach nach dem Symbol in deiner Menüleiste.

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