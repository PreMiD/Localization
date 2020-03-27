---
title: Linux
description: Komma igång med en PreMiD-installation på Linux
published: true
date: 2020-02-12T22:23:43.472Z
tags: 
---

> Innan du går vidare, se till att ditt system uppfyller alla [krav](/install/requirements).{.is-info}

Installationen av programmet är mycket viktigt eftersom förlängningen inte kan göra något av sig själv.

# Installera
> Det finns inget officiellt installationsprogram för detta operativsystem. Det betyder att det inte finns något officiellt stöd för det. Du kan dock utbyta information med andra Linux-användare på vår [Discord-server](https://discord.gg/premid/).{.is-info}

1. Install [NodeJS](https://nodejs.org/en/).
2. Öppna en terminal.
3. Klona utvecklingskatalogen: `git clone https://github.com/PreMiD/PreMiD.git`
4. Ändra arbetskatalogen: `cd PreMiD/src`
5. Installera beroenden och programmet: `npm install`
6. Ändra arbetskatalogen: `cd ..`
7. Typ: `npm kör init`
8. Starta programmet: `npm start`

Programmet startar automatiskt. Sök efter symbolen i menyraden.

> Följande metoder är föråldrade och rekommenderas inte längre. Använd på egen risk. 
> 
> {.is-warning}

## Arch Linux
Om du är på Arch Linux eller en Arch baserad distribution, PreMiD finns tillgängligt på [Arch Linux Repository](https://aur.archlinux.org/packages/premid/) (AUR) under `premid`. Använd din favorit pakethanterare för att ta tag i den därifrån!

## Andra distributioner
- Installationsskript: `wget -qO- http://bit.ly/install-premid <unk> bash` eller `curl -sL https://bit. y/install-premid <unk> bash`, vänta på att den ska installeras, dubbelklicka på genvägen "PreMiD" skapad på skrivbordet, och det är det!
- Om du vill avinstallera PreMiD, kan du köra `wget -qO- http://bit.ly/uninstall-premid <unk> bash` eller `curl -sL https://bit.ly/uninstall-premid <unk> bash`.

> Glöm inte att [lägga till tillägget ****](/install).{.is-warning}

![](https://a.icons8.com/TqgWTTfw/Oy7xHF/svg.svg) {.align-abstopright}