---
title: Fehlerbehebung
description: Alles, um dein Problem zu lösen
published: true
date: 2020-08-29T21:41:02.545Z
tags:
editor: markdown
---

> Stelle sicher, dass du die Erweiterung **und** die Anwendung installiert hast! 
> 
> {.is-warning}

### Are you using a presence with settings?
Many presences (including `Twitch` and `SoundCloud`) are affected by an extension issue. This issue causes the extension to not grab the default values of settings properly.

To solve this, all you have to do is toggle the topmost setting: ![presencesettings.gif](/presencesettings.gif)

### Die Seite neu laden
Statt nach dem Aktualisieren-Knopf zu suchen, kannst du <kbd>STRG+R</kbd>/<kbd>F5</kbd>(für Windows) oder <kbd>CMD+R</kbd>(für MacOS) auf deiner Tastatur eingeben.

### Browserneustart
<kbd>Alt</kbd>+<kbd>F4</kbd> (Windows) oder <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS) leisten ebenfalls gute Arbeit. (Du musst deinen Browser natürlich erneut starten.)

### Stelle sicher, dass du die Discord Spielaktivität in den Einstellungen aktiviert hast
**Benutzereinstellungen** > **Spielaktivität** ![gameactivity_edited.png](/gameactivity_edited.png)

### PreMiD (Anwendung) neustarten
![quit.png](/quit.png) Du musst PreMiD danach neu starten.

### Discord neu laden/neustarten
Drücke<kbd>STRG+R</kbd>(für Windows) oder <kbd>CMD+R</kbd>(für MacOS) auf deiner Tastatur oder starte dein Discord manuell neu.

### Stelle sicher, dass Discord NICHT als Administrator läuft
Sehr wichtig. Discord RPC wird nicht funktionieren, wenn du Discord als Administrator ausführst.

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

### Auf Ubuntu/Debian basierten Distributionen
Wenn du Discord über Snapcraft heruntergeladen hast, wird Discords RPC nicht funktionieren. Du musst die Snapcraft Version deinstallieren, indem du `sudo snap remove discord` auf einem Terminal eingibst, lade als nächstes [Discords Linux Build](https://discordapp.com/api/download?platform=linux) herunter ([oder Discord Canary](https://discordapp.com/api/canary/download?platform=linux)), navigiere dann zu dem Verzeichnis, in welchem du Discord heruntergeladen hast (üblicherweise `$HOME/Downloads`), installiere dann das Paket mit `sudo dpkg -i discord-*.deb`.

### McAfee detected PreMiD as virus (Windows)
This is a false positive from McAfee and we have reported the issue to them, for now you can exclude PreMiD from the scan by doing the following steps:

> If you do not feel confident taking these steps, feel free to make a ticket in [#support](https://discord.gg/WvfVZ8T) and one of our Support Agents will be able to help you out! 
> 
> {.is-warning}

1. Open the McAfee application and click the settings icon in the top right. <img src="https://i.imgur.com/rPLZn6c.png" width="500px" style="max-width:100%;" />
2. Click "Quarantined Items" (Second from the top).
3. Expand it, and click the `>` icon before an item with the name "settings.dat".
4. Make sure the path includes "AppData\Local\Temp\PreMiD", if so select it and press restore. <img src="https://i.imgur.com/9nvHmiI.png" width="500px" style="max-width:100%;" />
5. After it is restored you can close the "Quarantined Items" popup, then press the settings icon again in the top right.
6. Click "Real-Time Scanning" (Third from the top).
7. Expand it and click "Add file".
8. Type "%appdata%" in the URL bar of the file manager and press Enter. <img src="https://i.imgur.com/2bchwLe.png" width="500px" style="max-width:100%;" />
9. Open the "PreMiD" folder and select the "PreMiD.exe" file and click open. <img src="https://i.imgur.com/aHOyv3V.png" width="500px" style="max-width:100%;" />
10. McAfee should now ignore our file, just launch our application and you should be good to go.

### Das hat mein Problem nicht gelöst
Bitte öffne ein Ticket unter [#support](https://discord.premid.app/).