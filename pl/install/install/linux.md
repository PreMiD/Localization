---
title: Linux
description: Rozpoczęcie instalacji PreMiD w systemie Linux
published: tak
date: 2019-10-03T15:55:36.490Z
tags:
---

> Zanim przejdziesz dalej, upewnij się, że Twój system spełnia wszystkie [wymagania](/install/requirements).{.is-info}

Instalacja aplikacji jest bardzo ważna, ponieważ rozszerzenie nie może zrobić niczego samodzielnie.

# Zainstaluj
> Dla tego systemu operacyjnego nie ma oficjalnego instalatora. Oznacza to, że nie ma dla niego oficjalnego wsparcia. Możesz jednak wymieniać informacje z innymi użytkownikami Linux na naszym [serwerze Discord](https://discord.gg/premid/).{.is-info}

1. Zainstaluj [NodeJS](https://nodejs.org/en/).
2. Otwórz Terminal.
3. Sklonuj repozytorium: `git clone https://github.com/Timeraa/PreMiD.git`
4. Zmień katalog roboczy: `cd PreMiD/src`
5. Zainstaluj zależności i aplikację: `npm install`
6. Zmień katalog roboczy: `cd PreMiD/src`
7. Wpisz: `npm run init`
8. Uruchom aplikację: `npm start`

Aplikacja uruchomi się automatycznie. Sprawdź ikonę na pasku menu.

> Następujące metody są przestarzałe i nie są już zalecane. Robisz to na własne ryzyko. 
> 
> {.is-warning}

## Arch Linux
If you are on Arch Linux or an Arch based distribution, PreMiD is available on the [Arch Linux Repository](https://aur.archlinux.org/packages/premid-git/) (AUR) under `premid-git`. Use your favorite package manager to grab it from there!

## Other distributions
- Installation script: `wget -qO- http://bit.ly/install-premid | bash` or `curl -sL https://bit.ly/install-premid | bash`, wait for it to install, double-click the "PreMiD" shortcut created on your Desktop, and that's it!
- If you want to uninstall PreMiD, you can run `wget -qO- http://bit.ly/uninstall-premid | bash` or `curl -sL https://bit.ly/uninstall-premid | bash`.

> Do not forget to [add the **extension**](/install).{.is-warning}

![](https://a.icons8.com/TqgWTTfw/Oy7xHF/svg.svg) {.align-abstopright}