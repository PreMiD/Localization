---
title: Feilsøking
description: Alt for å løse ditt problem
published: true
date: 2021-02-08T21:30:58.603Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:03:54.865Z
---

> Vær sikker på at du har utvidelsen **og** applikasjonen installert! 
> 
> {.is-warning}

Inkludert på denne siden:
1. [Generelle feilsøking](https://docs.premid.app/troubleshooting#general)
2. [Linux feilsøking](https://docs.premid.app/troubleshooting#linux)
3. [MacOS feilsøking](https://docs.premid.app/troubleshooting#macos)

<a name="general"></a>

# Generelle feilsøking
### Last inn siden på nytt
Du kan trykke <kbd>CTRL+R</kbd>/<kbd>F5</kbd> (Windows) eller <kbd>CMD+R</kbd> (MacOS) på tastaturet ditt i stedet for å søke etter oppdateringsknappen.

### Bruker du Discord-appen?
PreMiD fungerer **ikke** på nettleserversjonen av Discord, du må laste ned [her](https://discord.com/download).

### Kontroller at du har aktivert Discord Game aktivitet i innstillinger
**Brukerinnstillinger** > **Spillaktivitet** ![gameactivity_edited.png](/gameactivity_edited.png)

### Pass på at Discord ikke kjører som administrator
Veldig viktig. Discord RPC vil ikke virke hvis du kjører Discord som administrator.

### Bruker du en tilstedeværelse med innstillinger?
Mange trykk (inkludert `Twitch` and `SoundCloud`) påvirkes av et problem med utvidelser. Dette problemet fører til at utvidelsen ikke setter inn standardverdiene for innstillingene korrekt.

For å løse dette, er alt du må gjøre å slå på det øverste innstillingene: ![presencesettings.gif](/presencesettings.gif)

### Restart nettleseren din
<kbd>Alt</kbd>+<kbd>F4</kbd> (Windows) eller <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS) gjør en god jobb også. (Du må starte nettleseren din igjen senere)

### Restart PreMiD (Applikasjonen)
![quit.png](/quit.png) Du må starte PreMiD på nytt.

### Omslad/start Discord på nytt
Trykk <kbd>CTRL+R</kbd> (Windows) eller <kbd>CMD+R</kbd> (MacOS) på tastaturet eller restart Discord manuelt.

### Sjekk om du har antivirus eller brannmur som kjører på din datamaskin
Noen ganger blokkerer antivirusprogrammer og brannmurer applikasjoner som er opprettende/verter servere eller bare kobler til Internett. Vi bruker en lokal server for å motta og passere data mellom vår app og utvidelse, så hvis du vil blokkere appens mulighet til å sende data du sannsynligvis ikke vil kunne bruke PreMiD.

### Disable your addons
Disable all your addons and see if it works. If yes, try to enable your addons step-by-step and tell us which addon broke PreMiD.

### Restart datamaskinen din
Jeg håper du vet hvordan man restarter en datamaskin.

### Reinstaller PreMiD
Noen ganger så er det noe galt med filene... Tutorials for the installation can be found [here](/install).

### Manuell fjerning
Windows:    `C:\Users\USER\AppData\Roaming\`` and delete the folder`PreMiD`.
MacOS:`~/users/USER/~Library/Application Support/`and delete the folder`PreMiD``.

### McAfee detected PreMiD as virus (Windows)
This is a false positive from McAfee and we have reported the issue to them, for now you can exclude PreMiD from the scan by doing the following steps:

> If you do not feel confident taking these steps, feel free to make a ticket in [#support](https://discord.premid.app/) and one of our Support Agents will be able to help you out! 
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

### PreMiD status bugged on discord!
Don't worry. Press the <kbd>CTRL+R</kbd> (Windows) or <kbd>CMD+R</kbd> (MacOS) keybind while focused on your discord window to reload it.

<a name="linux"></a>

# Linux troubleshooting
### Ubuntu/Debian based distros
If you have downloaded Discord through Snapcraft, RPC will not work. You have to uninstall the Snapcraft version by executing `sudo snap remove discord` on a terminal, download **[Discord's Linux build](https://discordapp.com/api/download?platform=linux)** (**[or Discord Canary](https://discordapp.com/api/canary/download?platform=linux)**), then navigating to the directory you downloaded Discord to (usually `$HOME/Downloads`), then installing the package using `sudo dpkg -i discord-*.deb`. If AppImage doesn't work, you should consider checking our other packages by **[this link](https://packagecloud.io/premid/linux)**.

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

# Det har ikke løst mitt problem
Please open a ticket in [#support](https://discord.premid.app/).