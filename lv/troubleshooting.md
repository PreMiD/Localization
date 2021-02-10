---
title: Problēmu novēršana
description: Viss, lai atrisinātu jūsu problēmu
published: true
date: 2021-02-08T21:30:58.603Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:03:54.865Z
---

> Pārliecinaties, vai esat uzstādījis paplašinājumu **un** aplikāciju! 
> 
> {.is-warning}

Iekļauts šajā lapā:
1. [Vispārīgu problēmu novēršana](https://docs.premid.app/troubleshooting#general)
2. [Linux problēmu novēršana](https://docs.premid.app/troubleshooting#linux)
3. [MacOS problēmu novēršana](https://docs.premid.app/troubleshooting#macos)

<a name="general"></a>

# Vispārīgu problēmu novēršana
### Pārlādējiet lapu
Jūs varat nospiest <kbd>CTRL+R</kbd>/<kbd>F5</kbd> (Windows) vai <kbd>CMD+R</kbd> (MacOS) uz tastatūras, nevis meklēt atsvaidzināšanas pogu.

### Vai jūs izmantojat lietotni Discord?
PreMiD **nedarbojas** uz Discord pārlūkprogrammas versijas, jums ir jālejupielāde lietotne [šeit](https://discord.com/download).

### Pārliecinaties, vai iestatījumos esat iespējojis Discord Spēļu Aktivitāti
**Lietotaja Iestatījumi** > **Spēļu Aktivitāte** ![gameactivity_edited.png](/gameactivity_edited.png)

### Pārliecinaties, ka Discord NEIET, kā administrators
Ļoti svarīgi. Discord RPC nedarbosies, ja Discord palaidīsiet, kā administratoru.

### Vai izmantojat presence ar iestatījumiem?
Daudzas presences (tostarp `Twitch` un `SoundCloud` tiek ietekmēti dēļ paplašinājuma kļūdas. Šīs kļūdas dēļ paplašinājums pareizi neuztver iestatījumu noklusējuma vērtības.

Lai to atrisinātu, viss, kas jums ir jāizdara, ir jāpārslēdz visaugstāko iestatījumu: ![presencesettings.gif](/presencesettings.gif)

### Restartējiet savu pārlūkprogrammu
<kbd>Alt</kbd>+<kbd>F4</kbd> (Windows) vai <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS) dara arī labu darbu. (Jums, protams, arī jāpalaiž pārlūkprogrammu pa jaunu.)

### Restartējiet PreMiD (Lietotni)
![quit.png](/quit.png) Pēc tam jums ir jārestartē PreMiD.

### Pārlādējiet/restartējiet Discord
Nospiediet <kbd>CTRL+R</kbd> (Windows) vai <kbd>CMD+R</kbd> (MacOS) uz tastatūras vai restartējiet Discord manuāli.

### Pārbaudiet, vai datorā darbojas antivīruss vai ugunsmūris
Sometimes antivirus programs and firewalls are blocking applications which are creating/hosting servers or just connecting to the internet. We are using a local server to receive and pass data between our app and extension, so if you will block app's ability to pass data you probably will not be able to use PreMiD.

### Disable your addons
Disable all your addons and see if it works. If yes, try to enable your addons step-by-step and tell us which addon broke PreMiD.

### Restarting your computer
I hope you know how to restart a computer.

### Reinstalling PreMiD
Sometimes there is something wrong with the files... Tutorials for the installation can be found [here](/install).

### Manual removal
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

# That has not solved my problem
Please open a ticket in [#support](https://discord.premid.app/).