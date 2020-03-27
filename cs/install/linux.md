---
title: Linux
description: Začněte s instalací PreMiD na Linuxu
published: true
date: 2020-02-12T22:14:23.591Z
tags: 
---

> Než budete pokračovat, ujistěte se, že váš systém splňuje všechny [požadavky](/install/requirements).{.is-info}

Instalace aplikace je velmi důležitá, protože rozšíření nemůže samo o sobě nic dělat.

# Instalovat
> Pro tento operační systém neexistuje žádný oficiální instalační systém. To znamená, že pro ni neexistuje žádná oficiální podpora. Můžete si však vyměňovat informace s ostatními uživateli Linuxu na našem [Discord serveru](https://discord.gg/premid/).{.is-info}

1. Install [NodeJS](https://nodejs.org/en/).
2. Otevřete terminál.
3. Klonovat repositář: `git klonovat https://github.com/PreMiD/PreMiD.git`
4. Změnit pracovní adresář: `cd PreMiD/src`
5. Nainstalujte závislosti a aplikaci: `npm install`
6. Změnit pracovní adresář: `cd ..`
7. Typ: `npm běží init`
8. Spusťte aplikaci: `npm start`

Aplikace se spustí automaticky. Zkontrolujte symbol ve Vašem panelu nabídek.

> Následující metody jsou zastaralé a již se nedoporučují. Použít na vlastní riziko. 
> 
> {.is-warning}

## Arch Linux
Pokud jste na Arch Linuxu nebo Arch založeném na distribuci, PreMiD je k dispozici v [Arch Linux Repository](https://aur.archlinux.org/packages/premid/) (AUR) pod `premid`. Použij svůj oblíbený správce balíčků, abys ho tam získal!

## Ostatní distribuce
- Instalační skript: `wget -qO- http://bit.ly/install-premid | bash` nebo `curl -sL https://bit. y/install-premid | bash`, počkejte na instalaci, dvakrát klikněte na "PreMiD" zástupce vytvořený na vašem počítači a to je ono!
- Pokud chcete PreMiD odinstalovat, můžete spustit `wget -qO- http://bit.ly/uninstall-premid | bash` nebo `curl -sL https://bit.ly/uninstall-premid | bash`.

> Nezapomeňte [přidat **rozšíření**](/install).{.is-warning}

![](https://a.icons8.com/TqgWTTfw/Oy7xHF/svg.svg) {.align-abstopright}