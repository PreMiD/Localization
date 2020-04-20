---
title: Rozwiązywanie problemów
description: Wszystko do rozwiązania twojego problemu
published: tak
date: 2020-04-20T11:16:55.141Z
tags:
---

> Upewnij się, że masz zainstalowane rozszerzenie **i** aplikacji! 
> 
> {.is-warning}

### Odśwież stronę
You can press <kbd>CTRL+R</kbd>/<kbd>F5</kbd> (Windows) or <kbd>CMD+R</kbd> (MacOS) on your keyboard too instead of searching for the refresh button.

### Uruchom ponownie przeglądarkę
<kbd>Alt</kbd>+<kbd>F4</kbd> (Windows) lub <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS) również wykonuje dobrą pracę. (Musisz oczywiście ponownie uruchomić przeglądarkę.)

### Upewnij się, że w ustawieniach włączono Discord Game Activity
<strong x-id = "1">Ustawienia użytkownika</strong> > <strong x-id = "1">Aktywność w grze</strong> ![[PLACEHOLDER] gameactivity_edited.png](/gameactivity_edited.png)

### Uruchom ponownie PreMiD (aplikacja)
![quit.png](/quit.png) Następnie musisz ponownie uruchomić PreMiD.

### Odśwież/uruchom ponownie Discord
Press <kbd>CTRL+R</kbd> (Windows) or <kbd>CMD+R</kbd> (MacOS) on your keyboard or restart Discord manually.

### Upewnij się, że Discord działa NIE jako administrator
Naprawdę ważne. RPC Discorda nie zadziała, jeśli używasz Discorda jako administratora.

### Sprawdź, czy na komputerze działa antywirus lub zapora
Czasami programy antywirusowe i zapory blokują aplikacje, które tworzą lub hostują serwery lub po prostu łączą się z Internetem. Używamy serwera lokalnego do odbierania i przekazywania danych pomiędzy naszą aplikacją a rozszerzeniem, więc jeśli będziesz blokować możliwość przekazywania danych przez aplikację, prawdopodobnie nie będziesz w stanie korzystać z PreMiD.

### Wyłącz swoje dodatki
Wyłącz wszystkie swoje dodatki i sprawdź, czy działa. Jeśli tak, spróbuj włączyć swoje dodatki krok po kroku i powiedz nam, który dodatek złamał PreMiD.

### Restartowanie komputera
Mam nadzieję, że wiesz jak zrestartować komputer.

### Ponowna instalacja PreMiD
Czasami jest coś złego z plikami... Poradniki dotyczące instalacji można znaleźć [tutaj](/install).

### Ręczne usunięcie
Windows:    `C:\Users\USER\AppData\Roaming\`` and delete the folder`PreMiD`.
MacOS:`~/users/USER/~Library/Application Support/`i usuń folder`PreMiD``.

### Na distronie na bazie Ubuntu/Debian
Jeśli pobrałeś Discorda przez Snapcraft, RPC nie będzie działać. Musisz odinstalować wersję Snapcraft wykonując `sudo Snapp remove discord` na terminalu, pobierz [Discord's Linux build](https://discordapp.com/api/download?platform=linux) ([lub Discorda Canary](https://discordapp.com/api/canary/download?platform=linux)), następnie przejdź do katalogu, który pobrałeś Discorda (zwykle `$HOME/Downloads`), następnie zainstalowanie pakietu za pomocą `sudo dpkg -i discord-*. eb`.

### To nie rozwiązało mojego problemu
Please open a ticket in [#support](https://discord.gg/WvfVZ8T).