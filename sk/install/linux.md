---
title: Linux
description: Začíname s PreMiD inštaláciou na Linuxe
published: true
date: 2020-02-12T22:22:45.923Z
tags: 
---

> Než sa pustíme do toho, uistite sa že spĺňate všetky [požiadavky](/install/requirements).{.is-info}

Inštalácia aplikácie je veľmi dôležitá pretože rozšírenie nemôže robiť nič samé o sebe.

# Inštalácia
> Pre tento operačný systém neexistuje žiadny oficiálny inštalátor. To znamená že neexistuje žiadna oficiálna podpora. Môžete si však vymieňať informácie s ostatnými používateľmi systému Linux na našom [Discord serveri](https://discord.gg/premid/).{.is-info}

1. Nainštalujte si [NodeJS](https://nodejs.org/en/).
2. Otvorte terminál.
3. Skopírujte:`git clone https://github.com/PreMiD/PreMiD.git`
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
If you are on Arch Linux or an Arch based distribution, PreMiD is available on the [Arch Linux Repository](https://aur.archlinux.org/packages/premid/) (AUR) under `premid`. Použite svojho obľúbeného správcu balíkov a získajte ho odtiaľto!

## Iné distribúcie
- Inštalačný skript: `wget -qO- http://bit.ly/install-premid | bash` alebo `curl -sL https://bit.ly/install-premid | bash`, počkajte pokým sa to nenainštaluje, dvakrát kliknite na "PreMiD" odkaz vytvorený na pracovnej ploche, a to je všetko!
- Ak chcete odinštalovať PreMiD, môžete spustiť `wget -qO- http://bit.ly/uninstall-premid | bash` alebo `curl -sL https://bit.ly/uninstall-premid | bash`.

> Nezabudnite [pridať **rozšírenie**](/install).{.is-warning}

![](https://a.icons8.com/TqgWTTfw/Oy7xHF/svg.svg) {.align-abstopright}