---
title: Rozwiązywanie problemów
description: Wszystko do rozwiązania twojego problemu
published: tak
date: 20.04.2020 11:16
tags:
---

> Upewnij się, że masz rozszerzenie **i** zainstalowaną aplikację! 
> 
> {.is-warning}

### Odśwież stronę
Możesz również nacisnąć <kbd>CTRL + R</kbd>/<kbd>F5</kbd> (Windows) lub <kbd>CMD + R</kbd> (MacOS) na klawiaturze zamiast szukać przycisku odświeżania.

### Uruchom ponownie przeglądarkę
<kbd>Alt</kbd>+<kbd>F4</kbd> (Windows) lub <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS) również wykonuje dobrą pracę. (Musisz oczywiście ponownie uruchomić przeglądarkę.)

### Upewnij się, że w ustawieniach włączono Discord Game Activity
<strong x-id = "1">Ustawienia użytkownika</strong> > <strong x-id = "1">Aktywność w grze</strong> ![[PLACEHOLDER] gameactivity_edited.png](/gameactivity_edited.png)

### Uruchom ponownie PreMiD (aplikacja)
![quit.png](/quit.png) Następnie musisz ponownie uruchomić PreMiD.

### Odśwież/uruchom ponownie Discorda
Naciśnij klawisze <kbd>CTRL + R</kbd> (Windows) lub <kbd>CMD + R</kbd> (MacOS) na klawiaturze albo ręcznie uruchom ponownie Discorda.

### Upewnij się, że Discord NIE działa jako administrator
Naprawdę ważne. RPC Discorda nie zadziała, jeśli używasz Discorda jako administratora.

### Sprawdź, czy na komputerze działa antywirus lub zapora
Czasami programy antywirusowe i zapory blokują aplikacje, które tworzą lub hostują serwery lub po prostu łączą się z Internetem. Używamy serwera lokalnego do odbierania i przekazywania danych pomiędzy naszą aplikacją a rozszerzeniem, więc jeśli będziesz blokować możliwość przekazywania danych przez aplikację, prawdopodobnie nie będziesz w stanie korzystać z PreMiD.

### Wyłącz swoje dodatki
Wyłącz wszystkie swoje dodatki i sprawdź, czy działa. Jeśli tak, spróbuj włączyć swoje dodatki krok po kroku i powiedz nam, który dodatek zepsuł PreMiD.

### Restartowanie komputera
Mam nadzieję, że wiesz jak zrestartować komputer.

### Ponowna instalacja PreMiD
Czasami jest coś złego z plikami... Poradniki dotyczące instalacji można znaleźć [tutaj](/install).

### Ręczne usuwanie
Windows:    `C:\Users\USER\AppData\Roaming\`` i usuń katalog `PreMiD`.
MacOS:`~/users/USER/~Library/Application Support/`i usuń katalog `PreMiD``.

### Na distronie na bazie Ubuntu/Debian
Jeśli pobrałeś Discorda przez Snapcraft, RPC nie będzie działać. Musisz odinstalować wersję Snapcraft wykonując `sudo Snapp remove discord` na terminalu, pobierz [Discord's Linux build](https://discordapp.com/api/download?platform=linux) ([lub Discorda Canary](https://discordapp.com/api/canary/download?platform=linux)), następnie przejdź do katalogu, w którym pobrałeś Discorda (zwykle `$HOME/Downloads`), następnie zainstaluj pakiet za pomocą `sudo dpkg -i discord-*. eb`.

### To nie rozwiązało mojego problemu
Otwórz zgłoszenie na kanale [#support](https://discord.gg/WvfVZ8T).