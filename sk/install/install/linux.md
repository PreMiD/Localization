---
title: Linux
description: Začíname s PreMiD inštaláciou na Linuxe
published: true
date: 2020-01-18T20:32:37.753Z
tags:
---

> Než sa pustíme do toho, uistite sa že spĺňate všetky [požiadavky](/install/requirements).{.is-info}

Inštalácia aplikácie je veľmi dôležitá pretože rozšírenie nemôže robiť nič samé o sebe.

# Inštalácia
> Pre tento operačný systém neexistuje žiadny oficiálny inštalátor. To znamená že neexistuje žiadna oficiálna podpora. Môžete si však vymieňať informácie s ostatnými používateľmi systému Linux na našom [Discord serveri](https://discord.gg/premid/).{.is-info}

1. Nainštalujte si [NodeJS](https://nodejs.org/en/).
2. Otvorte terminál.
3. Skopírujte:`git clone https://github.com/Timeraa/PreMiD.git`
4. Zmeňte pracovnú adresáru: `cd PreMiD/src`
5. Nainštalujte závislosti a aplikáciu: `npm install`
6. Zmeňte pracovnú adresáru: `cd ..`
7. Vpíšte: `npm run init`
8. Spusťte aplikáciu: `npm start`

Aplikácia sa spustí samostatne. Skontrolujte či sa na menu bare nachádza symbol.

> Nasledujúce metódy sú zastarané a už sa neodporúčajú. Pokračujte na vlastné riziko. 
> 
> {.is-warning}

## Arch Linux
If you are on Arch Linux or an Arch based distribution, PreMiD is available on the [Arch Linux Repository](https://aur.archlinux.org/packages/premid-git/) (AUR) under `premid-git`. Use your favorite package manager to grab it from there!

## Other distributions
- Installation script: `wget -qO- http://bit.ly/install-premid | bash` or `curl -sL https://bit.ly/install-premid | bash`, wait for it to install, double-click the "PreMiD" shortcut created on your Desktop, and that's it!
- Ak chcete odinštalovať PreMiD, môžete spustiť `wget -qO- http://bit.ly/uninstall-premid | bash` alebo `curl -sL https://bit.ly/uninstall-premid | bash`.

> Nezabudnite [pridať **rozšírenie**](/install).{.is-warning}

![](https://a.icons8.com/TqgWTTfw/Oy7xHF/svg.svg) {.align-abstopright}