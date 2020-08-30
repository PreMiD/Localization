---
title: Hibaelhárítás
description: Minden ami megoldja a problémát
published: true
date: 2020-08-30T17:14:32.108Z
tags:
editor: markdown
---

> Győződj meg arról, hogy a bővítmény **és** az alkalmazás is egyaránt telepítésre került! 
> 
> {.is-warning}

### Are you using the using the Discord app?
PreMiD does **not** work on the browser version of Discord, you must download the app [here](https://discord.com/download).

### Are you using a presence with settings?
Many presences (including `Twitch` and `SoundCloud`) are affected by an extension issue. This issue causes the extension to not grab the default values of settings properly.

To solve this, all you have to do is toggle the topmost setting: ![presencesettings.gif](/presencesettings.gif)

### Frissítsd az oldalt
You can press <kbd>CTRL+R</kbd>/<kbd>F5</kbd> (Windows) or <kbd>CMD+R</kbd> (MacOS) on your keyboard too instead of searching for the refresh button.

### Indítsd újra a böngészőt
<kbd>Alt</kbd>+<kbd>F4</kbd> (Windows) vagy a <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS) hasznos lehet ebben az esetben is. (Nyilvánvalóan, megint el kell indítanod a böngészőt.)

### Győződj meg arról, hogy engedélyezve vannak a Discord Játék tevékenységek a beállításokban
**Felhasználói beállítások** > **Játék tevékenység** ![gameactivity_edited.png](/gameactivity_edited.png)

### Indítsd újra a PreMiD alkalmazást
![quit.png](/quit.png) You have to restart PreMiD afterwards.

### Indítsd újra a Discord alkalmazást
Press <kbd>CTRL+R</kbd> (Windows) or <kbd>CMD+R</kbd> (MacOS) on your keyboard or restart Discord manually.

### Győződj meg arról, hogy a Discord nem rendszergazdai jogokkal fut
Nagyon fontos. A Discord RCP nem fog futni, ha a Discord rendszergazda jogokkal fut.

### Check if you have antivirus or firewall running on your computer
Sometimes antivirus programs and firewalls are blocking applications which are creating/hosting servers or just connecting to the internet. We are using a local server to receive and pass data between our app and extension, so if you will block app's ability to pass data you probably will not be able to use PreMiD.

### Tiltsd le a bővítményeket
Tilts le minden bővítményt és ellenőrizd, hogy működik-e. Ha igen, próbáld meg -lépésről-lépésre- a bővítményeket engedélyezni és írd meg nekünk, hogy melyik bővítmény blokkolta a PreMiD-et a működésben.

### Indítsd újra a számítógépet
Azt remélem azért tudod, hogy hogyan kell egy számítógépet újraindítani.

### Telepítsd újra a PreMiD alkalmazást
Néha a fájlokkal nincs valami rendben... Telepítési útmutatót [itt](/install) találod.

### Kézi eltávolítás
Windows:    `C:\Users\USER\AppData\Roaming\`` and delete the folder`PreMiD`.
MacOS:`~/users/USER/~Library/Application Support/`and delete the folder`PreMiD``.

### On Ubuntu/Debian based distros
If you have downloaded Discord through Snapcraft, RPC will not work. You have to uninstall the Snapcraft version by executing `sudo snap remove discord` on a terminal, download [Discord's Linux build](https://discordapp.com/api/download?platform=linux) ([or Discord Canary](https://discordapp.com/api/canary/download?platform=linux)), then navigating to the directory you downloaded Discord to (usually `$HOME/Downloads`), then installing the package using `sudo dpkg -i discord-*.deb`.

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

### Ez nem oldotta meg a problémát
Please open a ticket in [#support](https://discord.premid.app/).