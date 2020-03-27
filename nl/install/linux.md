---
title: Linux
description: Aan de slag met de PreMiD installatie op Linux
published: true
date: 2020-02-16T14:21:26.679Z
tags: 
---

> Voordat je verder gaat, zorg ervoor dat je systeem voldoet aan alle [vereisten](/install/requirements).{.is-info}

De installatie van de applicatie is van groot belang, omdat de extensie op zichzelf niets kan doen.

# Installeer
> Er is geen officiële installatieprogramma voor dit besturingssysteem. Dat betekent dat er geen officiële ondersteuning voor is. Je kunt echter informatie uitwisselen met andere Linux gebruikers op onze [Discord server](https://discord.gg/premid/).{.is-info}

1. Installeer [NodeJS](https://nodejs.org/en/).
2. Open een terminal.
3. Kloon de repository: `git clone https://github.com/PreMiD/PreMiD.git`
4. De werkmap wijzigen: `cd PreMiD/src`
5. Installeer de dependencies en de applicatie: `npm install`
6. De werkmap wijzigen: `cd ..`
7. Typ: `npm run init`
8. Start de applicatie: `npm start`

De applicatie start automatisch. Controleer op het symbool in uw menubalk.

> De volgende methoden worden verouderd en niet langer aanbevolen. Gebruik op eigen risico. 
> 
> {.is-warning}

## Arch Linux
Als je op Arch Linux of een Arch gebaseerde distributie bent, PreMiD is beschikbaar op de [Arch Linux Repository](https://aur.archlinux.org/packages/premid/) (AUR) onder `premid`. Gebruik uw favoriete pakketmanager om hem daar te pakken!

## Andere distributies
- Installatie script: `wget -qO- http://bit.ly/install-premid` of `curl -sL https://bit.ly/install-premid | bash`, wacht tot het installeert, dubbelklik op de "PreMiD" snelkoppeling gemaakt op uw bureaublad, en dat is het!
- Als u PreMiD wilt deïnstalleren, kunt u `wget -qO- http://bit.ly/uninstall-premid | bash` of `curl -sL https://bit.ly/uninstall-premid | bash`.

> Vergeet niet [de **extensie**](/install)toe te voegen.{.is-warning}

![](https://a.icons8.com/TqgWTTfw/Oy7xHF/svg.svg) {.align-abstopright}