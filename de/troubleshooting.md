---
title: Fehlerbehebung
description: Alles zur Lösung Ihres Problems
published: true
date: 2021-02-08T17:11:28.733Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:03:54.865Z
---

> Stelle sicher, dass du die Erweiterung **und** die Anwendung installiert hast! 
> 
> {.is-warning}

Included on this page:
1. [General troubleshooting](https://docs.premid.app/troubleshooting#general)
2. [Linux troubleshooting](https://docs.premid.app/troubleshooting#linux)
3. [MacOS troubleshooting](https://docs.premid.app/troubleshooting#macos)

<a name="general"></a>

# General troubleshooting
### Die Seite neu laden
Statt nach dem Aktualisieren-Knopf zu suchen, kannst du <kbd>STRG+R</kbd>/<kbd>F5</kbd>(für Windows) oder <kbd>CMD+R</kbd>(für MacOS) auf deiner Tastatur eingeben.

### Verwendest du die Discord App?
PreMiD funktioniert **nicht** mit der Browserversion von Discord, du musst dir die App [hier](https://discord.com/download) runterladen.

### Stelle sicher, dass du die Discord Spielaktivität in den Einstellungen aktiviert hast
**Benutzereinstellungen** > **Spielaktivität** ![gameactivity_edited.png](/gameactivity_edited.png)

### Stelle sicher, dass Discord NICHT als Administrator läuft
Sehr wichtig. Discord RPC wird nicht funktionieren, wenn du Discord als Administrator ausführst.

### Verwendest du eine Presence mit Einstellungen?
Viele Presences (inklusive `Twitch` und `SoundCloud`) sind von einem Erweiterungsproblem betroffen. Das Problem bewirkt, dass die Erweiterung die Standardwerte der Einstellungen nicht richtig erfasst.

Um das zu lösen, musst du nur die oberste Einstellung ändern: ![presencesettings.gif](/presencesettings.gif)

### Browserneustart
<kbd>Alt</kbd>+<kbd>F4</kbd> (Windows) oder <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS) leisten ebenfalls gute Arbeit. (Du musst deinen Browser natürlich erneut starten.)

### PreMiD (Anwendung) neustarten
![quit.png](/quit.png) Du musst PreMiD danach neu starten.

### Discord neu laden/neustarten
Drücke<kbd>STRG+R</kbd>(für Windows) oder <kbd>CMD+R</kbd>(für MacOS) auf deiner Tastatur oder starte dein Discord manuell neu.

### Überprüfe, ob Antivirus oder Firewall auf deinem Computer läuft
Manchmal blockieren Antivirenprogramme und Firewalls Anwendungen, die Server erstellen/hosten oder einfach nur eine Verbindung zum Internet herstellen. Wir verwenden einen lokalen Server, um Daten zwischen unserer App und der Erweiterung zu erhalten und weiterzugeben, Wenn du also die Funktion der App blockierst, Daten zu übergeben, wirst du wahrscheinlich nicht in der Lage sein, PreMiD zu verwenden.

### Deaktiviere deine Addons
Deaktiviere alle deine Addons und überprüfe, ob es funktioniert. Wenn ja, versuche Schritt für Schritt deine Addons zu reaktivieren und teilen uns mit, welches Addon PreMiD behindert hat.

### Computer neustarten
Wir hoffen, dass du weißt wie du deinen Computer neustartest.

### PreMiD neu installieren
Manchmal stimmt etwas nicht mit den Dateien... Anleitungen für die Installation findest du [hier](/install).

### Manuelles Löschen
Windows:   `C:\Users\USER\AppData\Roaming\``und lösche den Ordner`PreMiD`.
MacOS:`~/users/USER/~Library/Application Support/`und lösche den Ordner` PreMiD``.

### McAfee erkennt PreMiD als Virus (Windows)
Das ist ein falsch-positiver von McAfee und wir haben das Problem ihnen gemeldet, fürs Erste kannst du PreMiD vom Scan ausschliessen indem du folgende Schritte ausführst:

> Wenn du dich nicht wohl fühlst mit diesen Schritten, fühl dich frei ein Ticket im [#support](https://discord.premid.app/) zu erstellen und einer der Support-Agenten wird dir helfen können! 
> 
> {.is-warning}

1. Öffne die McAfee-Anwendung und klicke auf das Einstellungssymbol oben rechts. <img src="https://i.imgur.com/rPLZn6c.png" width="500px" style="max-width:100%;" />
2. Klicke auf "In Quarantäne gestellte Objekte" (Zweite von oben).
3. Erweitere es und klicke auf das `>` Symbol vor einem Element mit dem Namen "settings.dat".
4. Stelle sicher, dass der Pfad "AppData\Local\Temp\PreMiD" beinhaltet, wenn ja, dann wähle es aus und drücke auf "Wiederherstellen". <img src="https://i.imgur.com/9nvHmiI.png" width="500px" style="max-width:100%;" />
5. Nach der Wiederherstellung kannst du das Fenster "In Quarantäne gestellte Objekte" schliessen, dann drücke erneut auf das Einstellungssymbol oben rechts.
6. Klicke auf "Real-Time-Scan" (Dritte von oben).
7. Erweitere es und klicke auf "Datei hinzufügen".
8. Gib "%appdata%" in die Adressleiste vom Dateimanager ein und drücke auf Enter. <img src="https://i.imgur.com/2bchwLe.png" width="500px" style="max-width:100%;" />
9. Öffne den "PreMiD" Ordner und wähle die "PreMiD.exe" Datei aus und öffne sie. <img src="https://i.imgur.com/aHOyv3V.png" width="500px" style="max-width:100%;" />
10. McAfee sollte nun unsere Datei ignorieren, starte einfach unsere Anwendung und dann sollte es funktionieren.

### PreMiD status bugged on discord!
Don't worry. Just click **ctrl+r** keybind on your discord to restart it. After this it will not show!

<a name="linux"></a>

# Linux troubleshooting
### Ubuntu/Debian based distros
Wenn du Discord über Snapcraft heruntergeladen hast, wird Discords RPC nicht funktionieren. You have to uninstall the Snapcraft version by executing `sudo snap remove discord` on a terminal, download **[Discord's Linux build](https://discordapp.com/api/download?platform=linux)** (**[or Discord Canary](https://discordapp.com/api/canary/download?platform=linux)**), then navigating to the directory you downloaded Discord to (usually `$HOME/Downloads`), then installing the package using `sudo dpkg -i discord-*.deb`. If AppImage doesn't work, you should consider checking our other packages by **[this link](https://packagecloud.io/premid/linux)**.

### Arch Linux based distros
Arch Linux based distros should use AUR (Arch User Repository) package that is named `premid` or `premid-git` (*WARNING: This one builds premid from source*). If you don't want to install aur manager (yay etc.), you can check our AppImage that is downloadable from our **[Linux repository](https://github.com/premid/linux/releases)**. *Warning: **AUR** repo is not maintained by us, but by other people.*

### Port binding
You should know that **PreMiD** binds itself to port **3020** that is necessary for Extension and Application communication. If **PreMiD** shows you error about this port, you should check if something binds to port by writing to terminal `sudo lsof -i:3020` or `sudo netstat -tnlp | grep :3020`. If some application is binded to it you should kill it and try running `PreMiD` again.

### PreMiD's AppImage doesn't launch at login?!?!
As we stated in our **Linux repository**, AppImage can't be launched at login. You can add it to autostart manually. Instruction how to do this:
1. Make file named **rc.local** in `/etc` directory.
2. Open this file in your favourite editor and paste-change this:
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

If you get this error, it means that your account doesn't have Administrator permissions and you need to create folder manually. Instruction how to do it:
1. Open finder and open **Applications** folder.
2. Right-click on blank space and click **Create folder**.
3. Create folder named `PreMiD` (remember about upper-cased letters).
4. Open installer again.

# Das hat mein Problem nicht gelöst
Please open a ticket in [#support](https://discord.premid.app/).