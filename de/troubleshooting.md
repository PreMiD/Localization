---
title: Fehlerbehebung
description: Alles zur Lösung Ihres Problems
published: true
date: 2021-02-08T18:44:27.435Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:03:54.865Z
---

> Stelle sicher, dass du die Erweiterung **und** die Anwendung installiert hast! 
> 
> {.is-warning}

Auf dieser Seite enthalten:
1. [Allgemeine Fehlerbehebung](https://docs.premid.app/troubleshooting#general)
2. [Fehlerbehebung für Linux](https://docs.premid.app/troubleshooting#linux)
3. [Fehlerbehebung für MacOS](https://docs.premid.app/troubleshooting#macos)

<a name="general"></a>

# Allgemeine Fehlerbehebung
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

### PreMiD Status auf Discord ist fehlerhaft!
Keine Sorge. Just press the <strong x-id="1">ctrl+r</strong> keybind while focused on your discord window to reload it.

<a name="linux"></a>

# Fehlerbehebung für Linux
### Ubuntu/Debian basierte Distributionen
Wenn du Discord über Snapcraft heruntergeladen hast, wird Discords RPC nicht funktionieren. Du musst die Snapcraft Version deinstallieren, indem du `sudo snap remove discord` im Terminal eingibst. Lade als nächstes **[Discords Linux Build](https://discordapp.com/api/download?platform=linux)** herunter (**[oder Discord Canary](https://discordapp.com/api/canary/download?platform=linux)**). Navigiere dann zu dem Verzeichnis, in welchem du Discord heruntergeladen hast (üblicherweise `$HOME/Downloads`) und installiere dann das Paket mit `sudo dpkg -i discord-*.deb`. Wenn AppImage nicht funktioniert, solltest du unsere anderen Pakete durch **[diesen Link](https://packagecloud.io/premid/linux)** überprüfen.

### Arch Linux basierte Distributionen
Arch Linux based distros should use AUR (Arch User Repository) package that is named <code>premid</code> or <code>premid-git</code> (<em x-id="3">WARNING: This repository builds premid from our source code.</em>). If you don't want to install an AUR manager (yay etc.), you can check out our AppImage that is downloadable from our <strong x-id="1"><a href="https://github.com/premid/linux/releases">Linux repository</a></strong>.
<em x-id="3">Warning: the package in the <strong x-id="1">AUR</strong> repository is not maintained by us (as PreMiD organization), but by other people.</em>

### Port-Bindung
Du solltest wissen, dass <strong x-id="1">PreMiD</strong> sich an den Port <strong x-id="1">3020</strong> bindet. This is necessary for the Extension and the Application communicate. If <strong x-id="1">PreMiD</strong> shows you an error about this port, you should check if something is binded to the 3020 port by running <code>sudo lsof -i:3020</code> or <code>sudo netstat -tnlp | grep :3020</code> in your terminal. If some process is binded to it you should make sure to free the port and try running <code>PreMiD</code> again.

### PreMiD's AppImage doesn't launch at login
Wie in unserem ** Linux-Repository ** angegeben, kann AppImage beim Anmelden nicht gestartet werden. You can add it to autostart manually by doing these steps:
1. Make a file named <strong x-id="1">rc.local</strong> in the <code>/etc</code> directory.
2. Open this file in your favourite editor and paste given code with changing some things:
```bash
#!/bin/bash
# Wird benötigt um unter /bin/bash zu laufen (wenn zsh verwendet wird du kannst es ändern.)

# Beispiel: /home/PreMiD/PreMiD*.AppImage
<directory to appimage>/PreMiD*.AppImage
```
3. Speichere die Datei und chmod es als ausführbare Datei: `sudo chmod a+x /etc/rc.local`.
4. Starte deinen PC neu und PreMiD AppImage sollte bei der Anmeldung gestartet werden.

<a name="macos"></a>

# Fehlerbehebung für MacOS
### Fehler beim Anlegen des Ordners
<img src="https://i.imgur.com/td92lf6.png" width="300px" style="max-width:100%;" />

If you get this error, it means that your account doesn't have Administrator permissions and you need to create folder manually by doing these steps:
1. Öffne und finde den **Anwendungen** Ordner.
2. Rechtsklicke auf freier Fläche und drücke **Erstelle Ordner**.
3. To this folder assign `PreMiD` name (remember about upper-cased letters).
4. Öffne den Installer erneut.

# Das hat mein Problem nicht gelöst
Bitte eröffne ein Ticket unter [#support](https://discord.premid.app/).