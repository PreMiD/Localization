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

> Die folgenden Methoden sind veraltet und werden nicht länger empfohlen. Die Nutzung erfolgt auf eigene Gefahr. 
> 
> {.is-warning}

## Arch Linux
Wenn Sie auf Arch Linux oder einer Arch basierten Distribution sind, ist PreMiD im [Arch Linux Repository](https://aur.archlinux.org/packages/premid-git/) (AUR) unter `Premid-git` verfügbar. Benutze deinen bevorzugten Paket-Manager, um es dir von dort herunterzuladen!

## Andere Distributionen
- Installationsskript: `wget -qO- http://bit.ly/install-premid | bash` oder `curl -sL https://bit. y/install-premid | bash`, warte, bis es installiert wurde, und mach einen doppelklick auf den "PreMiD" Shortcut auf deinem Desktop, und das war's!
- Wenn du PreMiD deinstallieren möchtest, kannst du `wget -qO- http://bit.ly/uninstall-premid | bash` oder `curl -sL https://bit.ly/uninstall-premid | bash` ausführen.

> Vergiss nicht, [die **Erweiterung**](/install)hinzuzufügen.{.is-warning}

![](https://a.icons8.com/TqgWTTfw/Oy7xHF/svg.svg) {.align-abstopright}