---
title: Probleemoplossing
description: Alles om je probleem op te lossen
published: true
date: 2021-02-08T17:11:28.733Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:03:54.865Z
---

> Zorg ervoor dat de extensie **en** de applicatie geïnstalleerd zijn! 
> 
> {.is-warning}

Included on this page:
1. [General troubleshooting](https://docs.premid.app/troubleshooting#general)
2. [Linux troubleshooting](https://docs.premid.app/troubleshooting#linux)
3. [MacOS troubleshooting](https://docs.premid.app/troubleshooting#macos)

<a name="general"></a>

# General troubleshooting
### Pagina herladen
U kunt ook op <kbd>CTRL+R</kbd>/<kbd>F5</kbd> (Windows) of <kbd>CMD+R</kbd> (MacOS) op het toetsenbord drukken in plaats van te zoeken naar de refresh knop.

### Gebruik je de Discord-app?
PreMiD werkt **niet** met de browserversie van Discord, je moet de app [hier](https://discord.com/download) downloaden.

### Zorg ervoor dat Discord spel activiteit is ingeschakeld in de instellingen
**Gebruikersinstellingen** > **Spelactiviteit** ![gameactivity_edited.png](/gameactivity_edited.png)

### Zorg ervoor dat Discord NIET als administrator wordt uitgevoerd
Echt belangrijk! Discord RPC zal niet werken als je Discord als administrator gebruikt.

### Gebruikt u een presence met instellingen?
Veel presences (inclusief `Twitch` en `SoundCloud`) worden beïnvloed door een extensie probleem. Dit probleem zorgt ervoor dat de extensie de standaardwaarden van instellingen niet goed grijpt.

Om dit op te lossen hoef je alleen maar de bovenste instelling om te schakelen: ![presencesettings.gif](/presencesettings.gif)

### Herstart uw browser
<kbd>ALT</kbd>+<kbd>F4</kbd> (Windows) of <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS) doet ook goed werk. (Je moet je browser weer opstarten.)

### PreMiD herstarten (Applicatie)
![quit.png](/quit.png) U moet PreMiD daarna opnieuw starten.

### Discord herladen/herstarten
Druk op <kbd>CTRL+R</kbd> (Windows) of <kbd>CMD+R</kbd> (MacOS) op je toetsenbord of start Discord handmatig opnieuw op.

### Controleer of u antivirus of firewall draait op uw computer
Soms blokkeren antivirusprogramma's en firewalls toepassingen die maken/hosting servers maken of alleen verbinding maken met het internet. We gebruiken een lokale server voor het ontvangen en doorgeven van gegevens tussen onze app en extensie, dus als u de mogelijkheid van een app blokkeert om gegevens door te geven zal u waarschijnlijk PreMiD niet kunnen gebruiken.

### Uw addons uitschakelen
Schakel al uw addons uit en kijk of het werkt. Zo ja, probeer uw addons stap voor stap in te schakelen en vertel ons welke addon PreMiD defect maakt.

### Uw computer wordt opnieuw opstarten
Ik hoop dat u weet hoe u een computer opnieuw moet starten.

### PreMiD opnieuw installeren
Soms is er iets mis met de bestanden... Handleidingen voor de installatie kunnen [hier](/install) gevonden worden.

### Handmatige verwijdering
Windows:    `C:\Users\USER\AppData\Roaming\`` en verwijder de map `PreMiD`.
MacOS:`~/users/USER/~Library/Application Support/`en verwijder de map`PreMiD``.

### McAfee heeft PreMiD gedetecteerd als virus (Windows)
Dit is een valse positief van McAfee en we hebben hun hiervan op de hoogte gesteld. Voor nu kunt u PreMiD van de scan uitsluiten door de volgende stappen te doen:

> Als u niet zelfverzekerd bent om deze stappen uit te voeren, voel je vrij om een ticket te maken in [#support](https://discord.premid.app/) en een van onze Support Agents zal er zijn om je te helpen! 
> 
> {.is-warning}

1. Open de McAfee-applicatie en klik op het instellingen-icoon in de rechterbovenhoek. <img src="https://i.imgur.com/rPLZn6c.png" width="500px" style="max-width:100%;" />
2. Klik op "Quarantined Items" (Tweede van boven).
3. Breid het uit en klik op het `>` pictogram voor een item met de naam "settings.dat".
4. Zorg ervoor dat het pad "AppData\Local\Temp\PreMiD" bevat, als dit zo is, selecteer hem en druk op Herstellen. <img src="https://i.imgur.com/9nvHmiI.png" width="500px" style="max-width:100%;" />
5. Nadat het is hersteld, kunt u de "Quarantined Items" pop-up sluiten, en vervolgens opnieuw op het instellingen icoon in de rechterbovenhoek drukken.
6. Klik op "Real-Time scanning" (Derde van bovenaan).
7. Breid het uit en klik op "Bestand toevoegen".
8. Typ "%appdata%" in de URL-balk van het bestandsbeheer en druk op Enter. <img src="https://i.imgur.com/2bchwLe.png" width="500px" style="max-width:100%;" />
9. Open de "PreMiD" map en selecteer het "PreMiD.exe" bestand en klik op openen. <img src="https://i.imgur.com/aHOyv3V.png" width="500px" style="max-width:100%;" />
10. McAfee zou nu ons bestand moeten negeren, lanceer gewoon onze applicatie en het zou nu gewoon moeten werken.

### PreMiD status bugged on discord!
Don't worry. Just click **ctrl+r** keybind on your discord to restart it. After this it will not show!

<a name="linux"></a>

# Linux troubleshooting
### Ubuntu/Debian based distros
Als je Discord hebt gedownload via Snapcraft, zal RPC niet werken. You have to uninstall the Snapcraft version by executing `sudo snap remove discord` on a terminal, download **[Discord's Linux build](https://discordapp.com/api/download?platform=linux)** (**[or Discord Canary](https://discordapp.com/api/canary/download?platform=linux)**), then navigating to the directory you downloaded Discord to (usually `$HOME/Downloads`), then installing the package using `sudo dpkg -i discord-*.deb`. If AppImage doesn't work, you should consider checking our other packages by **[this link](https://packagecloud.io/premid/linux)**.

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

# Dat heeft mijn probleem niet opgelost
Please open a ticket in [#support](https://discord.premid.app/).