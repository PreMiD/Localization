---
title: Rozwiązywanie problemów
description: Wszystko do rozwiązania twojego problemu
published: tak
date: 2020-09-01T18:31:28.780Z
tags:
editor: markdown
---

> Upewnij się, że masz rozszerzenie **i** zainstalowaną aplikację! 
> 
> {.is-warning}

### Are you using the Discord app?
PreMiD **nie** działa w przeglądarce Discord, musisz pobrać aplikację [tutaj](https://discord.com/download).

### Are you using a presence with settings?
Many presences (including `Twitch` and `SoundCloud`) are affected by an extension issue. This issue causes the extension to not grab the default values of settings properly.

Aby rozwiązać ten problem, wystarczy przełączyć najwyższe ustawienie: ![presencesettings.gif](/presencesettings.gif)

### Odśwież stronę
Możesz również nacisnąć <kbd>CTRL + R</kbd>/<kbd>F5</kbd> (Windows) lub <kbd>CMD + R</kbd> (MacOS) na klawiaturze zamiast szukać przycisku odświeżania.

### Uruchom ponownie przeglądarkę
<kbd>Alt</kbd>+<kbd>F4</kbd> (Windows) lub <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS) również dobrze się spisuje. (Oczywiście musisz ponownie uruchomić przeglądarkę.)

### Upewnij się, że w ustawieniach włączono Discord Game Activity
**Ustawienia użytkownika** > **Aktywność w grze** ![gameactivity_edited.png](/gameactivity_edited.png)

### Uruchom ponownie PreMiD (aplikacja)
![quit.png](/quit.png) Następnie uruchom ponownie PreMiD.

### Odśwież/uruchom ponownie Discorda
Naciśnij klawisze <kbd>CTRL + R</kbd> (Windows) lub <kbd>CMD + R</kbd> (MacOS) na klawiaturze albo ręcznie uruchom ponownie Discorda.

### Upewnij się, że Discord NIE działa jako administrator
Naprawdę ważne. RPC Discorda nie zadziała, jeśli uruchomisz Discorda jako administrator.

### Sprawdź, czy na komputerze działa antywirus lub zapora
Czasami programy antywirusowe i zapory blokują aplikacje, które tworzą lub hostują serwery lub po prostu łączą się z Internetem. Używamy serwera lokalnego do odbierania i przekazywania danych pomiędzy naszą aplikacją a rozszerzeniem, więc jeśli będziesz blokować możliwość przekazywania danych przez aplikację, prawdopodobnie nie będziesz w stanie korzystać z PreMiD.

### Wyłącz dodatki
Wyłącz wszystkie dodatki i sprawdź, czy działa. Jeśli tak, spróbuj włączyć swoje dodatki krok po kroku i powiedz nam, który dodatek zepsuł PreMiD.

### Uruchom ponownie komputer
Mam nadzieję, że wiesz jak uruchomić ponownie komputer.

### Ponowna instalacja PreMiD
Czasami jest coś nie tak z plikami... Poradniki dotyczące instalacji można znaleźć [tutaj](/install).

### Ręczne usuwanie
Windows:    `C:\Users\USER\AppData\Roaming\`` i usuń katalog `PreMiD`.
MacOS:`~/users/USER/~Library/Application Support/`i usuń katalog `PreMiD``.

### On Ubuntu/Debian based distros
Jeśli pobrałeś Discorda przez Snapcraft, RPC nie będzie działać. Musisz odinstalować wersję Snapcraft wykonując `sudo Snapp remove discord` na terminalu, pobierz [Discord's Linux build](https://discordapp.com/api/download?platform=linux) ([lub Discorda Canary](https://discordapp.com/api/canary/download?platform=linux)), następnie przejdź do katalogu, w którym pobrałeś Discorda (zwykle `$HOME/Downloads`), następnie zainstaluj pakiet za pomocą `sudo dpkg -i discord-*. eb`.

### McAfee wykrył PreMiD jako wirus (Windows)
Jest to fałszywy alarm ze strony McAfee i zgłosiliśmy im ten problem, na razie możesz wykluczyć PreMiD ze skanowania, wykonując następujące kroki:

> Jeśli nie czujesz się pewnie, że podejmując te kroki, możesz utworzyć bilet w [#support](https://discord.gg/WvfVZ8T) a jeden z naszych przedstawicieli pomocy technicznej będzie mógł Ci pomóc! 
> 
> {.is-warning}

1. Otwórz aplikację McAfee i kliknij ikonę ustawień w prawym górnym rogu. <img src="https://i.imgur.com/rPLZn6c.png" width="500px" style="max-width:100%;" />
2. Kliknij "Elementy kwarantannowe" (drugi od góry).
3. Rozwiń i kliknij ikonę `>` przed elementem o nazwie "settings.dat".
4. Upewnij się, że ścieżka zawiera "AppData\Local\Temp\PreMiD", jeśli tak, wybierz ją i naciśnij przywracanie. <img src="https://i.imgur.com/9nvHmiI.png" width="500px" style="max-width:100%;" />
5. Po przywróceniu możesz zamknąć wyskakujące okienko "Elementy kwarantannowe", a następnie ponownie naciśnij ikonę ustawień w prawym górnym rogu.
6. Kliknij "Skanowanie w czasie rzeczywistym" (Trzecie od góry).
7. Rozwiń i kliknij "Dodaj plik".
8. Wpisz "%appdata%" w pasku adresu URL menedżera plików i naciśnij Enter. <img src="https://i.imgur.com/2bchwLe.png" width="500px" style="max-width:100%;" />
9. Otwórz folder "PreMiD" i wybierz plik "PreMiD.exe" i kliknij przycisk Otwórz. <img src="https://i.imgur.com/aHOyv3V.png" width="500px" style="max-width:100%;" />
10. McAfee powinno teraz ignorować nasz plik. Po prostu włącz naszą aplikację i wszystko powinno być gotowe.

### To nie rozwiązało mojego problemu
Otwórz zgłoszenie na kanale [#support](https://discord.premid.app/).