---
title: Rozwiązywanie problemów
description: Wszystko do rozwiązania twojego problemu
published: true
date: 2021-01-03T14:12:34.320Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:03:54.865Z
---

> Upewnij się, że masz rozszerzenie **i** zainstalowaną aplikację! 
> 
> {.is-warning}

### Odśwież stronę
Możesz również nacisnąć <kbd>CTRL + R</kbd>/<kbd>F5</kbd> (Windows) lub <kbd>CMD + R</kbd> (MacOS) na klawiaturze zamiast szukać przycisku odświeżania.

### Czy używasz aplikacji Discord?
PreMiD **nie** działa w wersji przeglądarkowej Discorda, musisz pobrać aplikację [tutaj](https://discord.com/download).

### Upewnij się, że w ustawieniach włączono Discord Game Activity
**Ustawienia użytkownika** > **Aktywność w grze** ![gameactivity_edited.png](/gameactivity_edited.png)

### Upewnij się, że Discord NIE działa jako administrator
Naprawdę ważne. RPC Discorda nie zadziała, jeśli uruchomisz Discorda jako administrator.

### Czy używasz aktywności z ustawieniami?
Wiele aktywności (w tym `Twitch` i `SoundCloud`) jest dotkniętych przez problem rozszerzenia. Powoduje on, że rozszerzenie nie przechwytuje domyślnych wartości ustawień.

Aby rozwiązać ten problem, wystarczy przełączyć najwyższe ustawienie: ![presencesettings.gif](/presencesettings.gif)

### Uruchom ponownie przeglądarkę
<kbd>Alt</kbd>+<kbd>F4</kbd> (Windows) lub <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS) również dobrze się spisuje. (Oczywiście musisz ponownie uruchomić przeglądarkę.)

### Uruchom ponownie PreMiD (aplikacja)
![quit.png](/quit.png) Następnie uruchom ponownie PreMiD.

### Odśwież/uruchom ponownie Discorda
Naciśnij klawisze <kbd>CTRL + R</kbd> (Windows) lub <kbd>CMD + R</kbd> (MacOS) na klawiaturze albo ręcznie uruchom ponownie Discorda.

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

### Na dystrybucjach Ubuntu/Debian
Jeśli pobrałeś Discorda przez Snapcraft, RPC nie będzie działać. Musisz odinstalować wersję Snapcraft wykonując `sudo Snapp remove discord` w terminalu, pobierz [Discord's Linux build](https://discordapp.com/api/download?platform=linux) ([lub Discorda Canary](https://discordapp.com/api/canary/download?platform=linux)), następnie przejdź do katalogu, do którego pobrałeś Discorda (zwykle `$HOME/Downloads`), a następnie zainstaluj pakiet za pomocą `sudo dpkg -i discord-*. eb`.

### McAfee wykrył PreMiD jako wirus (Windows)
Jest to fałszywy alarm ze strony McAfee i zgłosiliśmy im ten problem, na razie możesz wykluczyć PreMiD ze skanowania, wykonując następujące kroki:

> Jeśli czujesz się niepewnie, podejmując te kroki, możesz utworzyć ticket na [#support](https://discord.premid.app/) a jeden z naszych agentów będzie mógł Ci pomóc! 
> 
> {.is-warning}

1. Otwórz aplikację McAfee i kliknij ikonę ustawień w prawym górnym rogu. <img src="https://i.imgur.com/rPLZn6c.png" width="500px" style="max-width:100%;" />
2. Kliknij "Elementy w kwarantannie" (drugi od góry).
3. Rozwiń i kliknij ikonę `>` przed elementem o nazwie "settings.dat".
4. Upewnij się, że ścieżka zawiera "AppData\Local\Temp\PreMiD", jeśli tak, wybierz ją i naciśnij "Przywróć". <img src="https://i.imgur.com/9nvHmiI.png" width="500px" style="max-width:100%;" />
5. Po przywróceniu możesz zamknąć wyskakujące okno "Elementy w kwarantannie", a następnie ponownie naciśnij ikonę ustawień w prawym górnym rogu.
6. Kliknij "Skanowanie w czasie rzeczywistym" (Trzecie od góry).
7. Rozwiń i kliknij "Dodaj plik".
8. Wpisz "%appdata%" w pasku adresu URL menedżera plików i naciśnij Enter. <img src="https://i.imgur.com/2bchwLe.png" width="500px" style="max-width:100%;" />
9. Otwórz folder "PreMiD", wybierz plik "PreMiD.exe" i kliknij przycisk Otwórz. <img src="https://i.imgur.com/aHOyv3V.png" width="500px" style="max-width:100%;" />
10. McAfee powinno teraz ignorować nasz plik. Po prostu uruchom aplikację i wszystko powinno być gotowe.

### To nie rozwiązało mojego problemu
Otwórz zgłoszenie na kanale [#support](https://discord.premid.app/).