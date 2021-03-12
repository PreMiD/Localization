---
title: Rozwiązywanie problemów
description: Wszystko do rozwiązania twojego problemu
published: true
date: 2021-02-08T21:30:58.603Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:03:54.865Z
---

> Upewnij się, że masz rozszerzenie **i** zainstalowaną aplikację! 
> 
> {.is-warning}

Zawarte na tej stronie:
1. [Ogólne rozwiązywanie problemów](https://docs.premid.app/troubleshooting#general)
2. [Rozwiązywanie problemów na Linux](https://docs.premid.app/troubleshooting#linux)
3. [Rozwiązywanie problemów na MacOS](https://docs.premid.app/troubleshooting#macos)

<a name="general"></a>

# Ogólne rozwiązywanie problemów
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

### PreMiD status bugged on discord!
Nie martw się. Naciśnij skrót klawiszowy <kbd>CTRL+R</kbd> (Windows) lub <kbd>CMD+R</kbd> (MacOS) skupiając się na oknie discord by go odświeżyć.

<a name="linux"></a>

# Rozwiązywanie problemów na Linux
### Dystrybucje oparte na Ubuntu/Debian
Jeśli pobrałeś Discorda przez Snapcraft, RPC nie będzie działać. Musisz odinstalować wersję Snapcraft wykonując polecenie `sudo snap remove discord` w terminalu, pobierz **[Discord w wersji na Linux](https://discordapp.com/api/download?platform=linux)** (**[lub Discord Canary](https://discordapp.com/api/canary/download?platform=linux)**), następnie przejdź do katalogu do którego pobrałeś Discord (często `$HOME/Pobrane`), następnie zainstaluj pakiet używając `sudo dpkg -i discord*.deb`. Jeżeli AppImage nie działa, należy rozważyć sprawdzenie naszych innych pakietów przez **[ten link](https://packagecloud.io/premid/linux)**.

### Dystrybucje bazujące na Arch Linux
Dystrybucje oparte na Arch Linux powinny używać pakietu AUR (Arch User Repository) o nazwie <code>premid</code> lub <code>premid-git</code> (<em x-id="3">OSTRZEŻENIE: To repozytorium buduje PreMiDa z kodu źródłowego</em>). Jeśli nie chcesz instalować menadżera AUR (yay itd.), możesz sprawdzić AppImage który pobierany jest z naszego <strong x-id="1"><a href="https://github.com/premid/linux/releases">Repozytorium Linux</a></strong>.
<em x-id="3">Ostrzeżenie: pakiet w repozytorium <strong x-id="1">AUR</strong> nie jest utrzymywany przez nas (jako organizację PreMiD), ale przez innych ludzi.</em>

### Przydzielanie portów
Powinieneś wiedzieć, że <strong x-id="1">PreMiD</strong> łączy się z portem <strong x-id="1">3020</strong>. Jest to konieczne do komunikacji między Rozszerzeniem a Aplikacją. Jeżeli <strong x-id="1">PreMiD</strong> wyświetla błąd na temat tego portu, powinieneś sprawdzić czy coś innego nie jest powiązane z portem 3020 uruchamiając <code>sudo lsof -i:3020</code> lub <code>sudo netstat -tnlp | grep :3020</code> w terminalu. Jeśli jakiż proces jest do niego powiązang, powinieneś upewnić się by zwolnić ten port i spróbować uruchomić ponownie <code>PreMiD</code>.

### AppImage PreMida nie uruchamia się przy logowaniu
Jak stwierdziliśmy w naszym **repozytorium Linux**, AppImage nie może być uruchamiane przy logowaniu. Możesz dodać go ręcznie do autostartu wykonując te kroki:
1. Utwórz plik o nazwie <strong x-id="1">rc.local</strong> w katalogu <code>/etc</code>.
2. Otwórz plik w twoim ulubionym edytorze i wklej podany kod zmieniając kilka rzeczy:
```bash
#!/bin/bash
# Required to run as /bin/bash (if you use zsh etc. you can change it.)

# Example: /home/PreMiD/PreMiD*.AppImage
<directory to appimage>/PreMiD*.AppImage

exit 0
```
3. Save file and chmod it as executable `sudo chmod a+x /etc/rc.local`.
4. Restart your PC and PreMiD AppImage should launch at login.

<a name="macos"></a>

# Rozwiązywanie problemów z MacOS
### Błąd podczas tworzenia katalogu
<img src="https://i.imgur.com/td92lf6.png" width="300px" style="max-width:100%;" />

If you get this error, it means that your account doesn't have Administrator permissions and you need to create folder manually by doing these steps:
1. Open finder and open **Applications** folder.
2. Right-click on blank space and click **Create folder**.
3. To this folder assign `PreMiD` name (remember about upper-cased letters).
4. Uruchom instalator ponownie.

# To nie rozwiązało mojego problemu
Proszę otworzyć etykietę wsparcia na[#wsparcie](https://discord.premid.app/).