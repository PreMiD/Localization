---
title: Nesklandumų sprendimas
description: Viskas kas padės jums sutaisyti jūsų problemą
published: true
date: 2021-02-08T18:44:27.435Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:03:54.865Z
---

> Įsitinkite jog esate įsidiegę papildinį **taipogi** ir aplikaciją! 
> 
> {.is-warning}

Included on this page:
1. [General troubleshooting](https://docs.premid.app/troubleshooting#general)
2. [Linux troubleshooting](https://docs.premid.app/troubleshooting#linux)
3. [MacOS troubleshooting](https://docs.premid.app/troubleshooting#macos)

<a name="general"></a>

# General troubleshooting
### Perkraukite tinklalapį
Jūs galite paspausti <kbd>CTRL+R</kbd>/<kbd>F5</kbd> (Windows) arba <kbd>CMD+R</kbd> (MacOS) naudojantis savo klaviatūra, vietoj to, jog ieškoti atnaujinimo mygtuko.

### Ar jūs naudojate Discord programėlę?
PreMiD **neveikia** naršyklinėje Discord versijoje, jūs turite atsisiųsti programėlę [čia](https://discord.com/download).

### Įsitikinkite jog turite įsijungę Discord žaidimų veiklumą savo nustatymuose
**Naudotojo Nustatymai** > **Žaidimo Veikla** ![gameactivity_edited.png](/gameactivity_edited.png)

### Įsitikinkite jog Discord nėra įjungtas naudojantis administratoriaus teisėmis
Įtin svarbu. Discord RPC neveiks jeigu jūs esate įsijungę Discord naudojantis administratoriaus teisėmis.

### Are you using a presence with settings?
Many presences (including `Twitch` and `SoundCloud`) are affected by an extension issue. Ši problema priverčia papildinius nepaimti originalių nustatymų pilnai.

Kad ištaisyti tai, viskas ką jūs turite padaryti tai, turite įjungti svarbiausią nustatymą: ![presencesettings.gif](/presencesettings.gif)

### Perkraukite naršyklę
<kbd>Alt</kbd>+<kbd>F4</kbd> (Windows) arba <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS) taipogi atlieką puikiai darbą. (Jūs, žinoma, turite perkrauti savo naršyklę)

### Perkrauti PreMiD (aplikaciją)
![quit.png](/quit.png) Jūs turite perkrauti PreMiD.

### Perkrauti Discord
Spauskite <kbd>CTRL+R</kbd> (Windows) arba <kbd>CMD+R</kbd> (MacOS) naudodamiesi savo klaviatūra arba perkraukite Discord savarankiškai.

### Patikrinkite ar turite aktyvią antivirusinę ar ugniasienę savo kompiuteryje
Kartais antivirusinės programos ir ugniasienės blokuoja aplikacijas kurios kuria/talpiną serverius ar tiesiog prisijungia prie interneto. Mes naudojame lokalų serverį jog gauti ir išsiųsti duomenis tarp mūsų programėlės ir naršyklės papildinio, tad jeigu jūs užblokuosite programėlės galimybę išsiųsti duomenis, jūs tikriausiai negalėsite naudotis PreMiD.

### Papildinių išjungimas
Deaktyvuokite visus savo papildinius ir patikrinkite jog veikia. Jeigu taip, pabandykite aktyvuoti savo papildinius pažingsniui ir praneškite kuris papildinys sugadino PreMiD.

### Kompiuterio perkrovimas
Tikiuosi žinote kaip perkrauti savo kompiuterį.

### Reinstaliacija PreMiD
Taipogi kartais įvyksta problemų su PreMiD failais... Įdiegimo pamokos gali būti randamos [čia](/install).

### Savarankiškas ištrynimas
Windows:    `C:\Users\Vartotojas\AppData\Roaming\`` ir ištrinkite aplankalą `PreMiD`.
MacOS:`~/users/Vartotojas/~Library/Application Support/`ir ištrinkite aplankalą `PreMiD``.

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
Don't worry. Just press the <strong x-id="1">ctrl+r</strong> keybind while focused on your discord window to reload it.

<a name="linux"></a>

# Linux troubleshooting
### Ubuntu/Debian based distros
Jeigu jūs atsisiuntėte Discord naudodamiesi Snapcraft, RPC (Rich-Presence) jums neveiks. You have to uninstall the Snapcraft version by executing `sudo snap remove discord` on a terminal, download **[Discord's Linux build](https://discordapp.com/api/download?platform=linux)** (**[or Discord Canary](https://discordapp.com/api/canary/download?platform=linux)**), then navigating to the directory you downloaded Discord to (usually `$HOME/Downloads`), then installing the package using `sudo dpkg -i discord-*.deb`. If AppImage doesn't work, you should consider checking our other packages by **[this link](https://packagecloud.io/premid/linux)**.

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

# Tai nesutaisė mano problemos
Please open a ticket in [#support](https://discord.premid.app/).