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
Dažreiz pretvīrusu programmas un ugunsmūri bloķē lietotnes, kuras veido/mitina serverus vai vienkārši izveido savienojumu ar internetu. Mēs izmantojam lokālo serveri, lai saņemtu un pārsūtītu datus starp mūsu lietotni un paplašinājumu, tādēļ, ja jūs bloķēsiet lietotnes spēju pārsūtīt datus, visticamāk, nevarēsiet izmantot PreMiD.

### Atspējojiet savus paplašinājumus
Atspējojiet visus savus paplašinājumus un pārbaudiet, vai tas darbojas. Ja jā, mēģiniet soli pa solim iespējot savus paplašinājumus un pastāsties mums, kurš paplašinājums traucēja PreMiD.

### Restartējiet datoru
Es ceru, ka jūs zināt, kā restartēt datoru.

### Pārinstalējat PreMiD
Dažreiz failos ir kaut kas nepareizs... Uzstādīšanas pamācības var atrast [šeit](/install).

### Manuāla noņemšana
Windows:    `C:\Users\USER\AppData\Roaming\`` un izdzēšat mapi`PreMiD`.
MacOS:`~/users/USER/~Library/Application Support/`un izdzēšat mapi`PreMiD``.

### McAfee atklāja PreMiD kā vīrusu (Windows)
Šis ir nepatiess pozitīvs no Mcafee, un mēs esam viņiem ziņojuši par šo problēmu, pagaidām jūs varat izslēgt PreMiD no skenēšanas, viecot šādas darbības:

> Ja nejūtaties pārliecināts veicot šīs darbības, droši izveidojiet biļeti [#support](https://discord.premid.app/) un viens no mūsu Atbalsta Aģentiem varēs tev palīdzēt! 
> 
> {.is-warning}

1. Atveriet lietotni McAfee un augšējā labajā stūrī noklikšķiniet uz iestatījumu ikonas. <img src="https://i.imgur.com/rPLZn6c.png" width="500px" style="max-width:100%;" />
2. Spied uz "Karantīnā ievietotie vienumi" (Otrais no augšas).
3. Izvērsiet to un uzspiediet uz `>` ikonas pirms vienuma ar nosaukumu "settings.dat".
4. Pārliecinieties, vai ceļā ir iekļauts "AppData\Local\Temp\PreMiD", ja tā, atlasiet to un nospiediet atjaunot. <img src="https://i.imgur.com/9nvHmiI.png" width="500px" style="max-width:100%;" />
5. Pēc tā atjaunošanas varat aizvērt uznirstošo logu "Karantīna ievietotie vienumi", pēc tam augšējā labajā stūrī vēlreiz nospiediet iestatījumu ikonu.
6. Uzspiediet uz "Real-Time Scanning" (trešais no augšas).
7. Izvērsiet to un uzspiediet uz "Add file".
8. Failu pārvaldnieka URL joslā ierakstiet "%appdata%" un nospiediet Enter. <img src="https://i.imgur.com/2bchwLe.png" width="500px" style="max-width:100%;" />
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