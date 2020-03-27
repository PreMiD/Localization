---
title: Linux
description: Rozpoczęcie instalacji PreMiD w systemie Linux
published: true
date: 2020-02-12T22:20:51.181Z
tags: 
---

> Zanim przejdziesz dalej, upewnij się, że Twój system spełnia wszystkie [wymagania](/install/requirements).{.is-info}

Instalacja aplikacji jest bardzo ważna, ponieważ rozszerzenie nie może zrobić niczego samodzielnie.

# Zainstaluj
> Dla tego systemu operacyjnego nie ma oficjalnego instalatora. Oznacza to, że nie ma dla niego oficjalnego wsparcia. Możesz jednak wymieniać informacje z innymi użytkownikami Linux na naszym [serwerze Discord](https://discord.gg/premid/).{.is-info}

1. Zainstaluj [NodeJS](https://nodejs.org/en/).
2. Otwórz Terminal.
3. Sklonuj repozytorium: `git clone https://github.com/PreMiD/PreMiD.git`
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
Jeśli jesteś na Arch Linux lub na bazie łuku, PreMiD jest dostępny w [repozytorium Arch Linux](https://aur.archlinux.org/packages/premid/) (AUR) poniżej `premii`. Użyj swojego ulubionego menadżera pakietów, aby go tam złapać!

## Pozostałe dystrybucje
- Skrypt instalacyjny: `wget -qO- http://bit.ly/install-premid | bash` lub `curl -sL https://bit. y/install-premid | bash`, poczekaj na zainstalowanie, kliknij dwukrotnie skrót "PreMiD" utworzony na twoim pulpicie, i to wszystko!
- Jeśli chcesz odinstalować PreMiD, możesz uruchomić `wget -qO- http://bit.ly/uninstall-premid | bash` lub `curl -sL https://bit.ly/uninstall-premid | bash`.

> Nie zapomnij [dodać **rozszerzenia**](/install).{.is-warning}

![](https://a.icons8.com/TqgWTTfw/Oy7xHF/svg.svg) {.align-abstopright}