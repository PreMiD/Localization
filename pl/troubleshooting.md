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

Included on this page:
1. [General troubleshooting](https://docs.premid.app/troubleshooting#general)
2. [Linux troubleshooting](https://docs.premid.app/troubleshooting#linux)
3. [MacOS troubleshooting](https://docs.premid.app/troubleshooting#macos)

<a name="general"></a>

# General troubleshooting
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
Don't worry. Press the <kbd>CTRL+R</kbd> (Windows) or <kbd>CMD+R</kbd> (MacOS) keybind while focused on your discord window to reload it.

<a name="linux"></a>

# Linux troubleshooting
### Ubuntu/Debian based distros
Jeśli pobrałeś Discorda przez Snapcraft, RPC nie będzie działać. You have to uninstall the Snapcraft version by executing `sudo snap remove discord` on a terminal, download **[Discord's Linux build](https://discordapp.com/api/download?platform=linux)** (**[or Discord Canary](https://discordapp.com/api/canary/download?platform=linux)**), then navigating to the directory you downloaded Discord to (usually `$HOME/Downloads`), then installing the package using `sudo dpkg -i discord-*.deb`. If AppImage doesn't work, you should consider checking our other packages by **[this link](https://packagecloud.io/premid/linux)**.

### Arch Linux based distros
Arch Linux based distros should use AUR (Arch User Repository) package that is named <code>premid</code> or <code>premid-git</code> (<em x-id="3">WARNING: This repository builds premid from our source code.</em>). If you don't want to install an AUR manager (yay etc.), you can check out our AppImage that is downloadable from our <strong x-id="1"><a href="https://github.com/premid/linux/releases">Linux repository</a></strong>.
<em x-id="3">Warning: the package in the <strong x-id="1">AUR</strong> repository is not maintained by us (as PreMiD organization), but by other people.</em>

### Port binding
You should know that <strong x-id="1">PreMiD</strong> binds itself to the port <strong x-id="1">3020</strong>. This is necessary for the Extension and the Application communicate. If <strong x-id="1">PreMiD</strong> shows you an error about this port, you should check if something is binded to the 3020 port by running <code>sudo lsof -i:3020</code> or <code>sudo netstat -tnlp | grep :3020</code> in your terminal. If some process is binded to it you should make sure to free the port and try running <code>PreMiD</code> again.

### PreMiD's AppImage doesn't launch at login
As we stated in our **Linux repository**, AppImage can't be launched at login. You can add it to autostart manually by doing these steps:
1. Make a file named <strong x-id="1">rc.local</strong> in the <code>/etc</code> directory.
2. Open this file in your favourite editor and paste given code with changing some things:
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

# MacOS troubleshooting
### Error creating directory
<img src="https://i.imgur.com/td92lf6.png" width="300px" style="max-width:100%;" />

If you get this error, it means that your account doesn't have Administrator permissions and you need to create folder manually by doing these steps:
1. Open finder and open **Applications** folder.
2. Right-click on blank space and click **Create folder**.
3. To this folder assign `PreMiD` name (remember about upper-cased letters).
4. Open installer again.

# To nie rozwiązało mojego problemu
Please open a ticket in [#support](https://discord.premid.app/).