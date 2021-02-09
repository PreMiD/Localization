---
title: Probleemoplossing
description: Alles om je probleem op te lossen
published: true
date: 2021-02-08T21:30:58.603Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:03:54.865Z
---

> Zorg ervoor dat de extensie **en** de applicatie geïnstalleerd zijn! 
> 
> {.is-warning}

Deze pagina bevat:
1. [Algemene probleemoplossing](https://docs.premid.app/troubleshooting#general)
2. [Linux-probleemoplossing](https://docs.premid.app/troubleshooting#linux)
3. [MacOS-probleemoplossing](https://docs.premid.app/troubleshooting#macos)

<a name="general"></a>

# Algemene probleemoplossing
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

### PreMiD-status gebugd op discord!
Geen zorgen. Press the <kbd>CTRL+R</kbd> (Windows) or <kbd>CMD+R</kbd> (MacOS) keybind while focused on your discord window to reload it.

<a name="linux"></a>

# Linux-probleemoplossing
### Op Ubuntu/Debian gebaseerde distro's
Als je Discord hebt gedownload via Snapcraft, zal RPC niet werken. Je moet de Snapcraft versie verwijderen door `sudo snap remove discord` uit te voeren op een terminal, download **[Discord's Linux-build](https://discordapp.com/api/download?platform=linux)** (**[of Discord Canary](https://discordapp.com/api/canary/download?platform=linux)**), navigeer vervolgens naar de map die je Discord gedownload hebt naar (meestal `$HOME/Downloads`), daarna het installeren van het pakket met behulp van `sudo dpkg -i discord-*. eb`. Als AppImage niet werkt, overweeg dan om onze andere pakketten te gebruiken via **[deze link](https://packagecloud.io/premid/linux)**.

### Op Arch Linux gebaseerde distro's
Arch Linux based distros should use AUR (Arch User Repository) package that is named <code>premid</code> or <code>premid-git</code> (<em x-id="3">WARNING: This repository builds premid from our source code.</em>). If you don't want to install an AUR manager (yay etc.), you can check out our AppImage that is downloadable from our <strong x-id="1"><a href="https://github.com/premid/linux/releases">Linux repository</a></strong>.
<em x-id="3">Warning: the package in the <strong x-id="1">AUR</strong> repository is not maintained by us (as PreMiD organization), but by other people.</em>

### Poort-binding
You should know that <strong x-id="1">PreMiD</strong> binds itself to the port <strong x-id="1">3020</strong>. This is necessary for the Extension and the Application communicate. If <strong x-id="1">PreMiD</strong> shows you an error about this port, you should check if something is binded to the 3020 port by running <code>sudo lsof -i:3020</code> or <code>sudo netstat -tnlp | grep :3020</code> in your terminal. If some process is binded to it you should make sure to free the port and try running <code>PreMiD</code> again.

### PreMiD's AppImage doesn't launch at login
Zoals we hebben aangegeven in onze **Linux-repository**, kan AppImage niet gestart worden tijdens het inloggen. You can add it to autostart manually by doing these steps:
1. Make a file named <strong x-id="1">rc.local</strong> in the <code>/etc</code> directory.
2. Open this file in your favourite editor and paste given code with changing some things:
```bash
#!/bin/bash
# Vereist om uit te voeren als /bin/bash (als je zsh o.i.d. gebruikt kun je dit wijzigen.)

# Voorbeeld: /home/PreMiD/PreMiD*.AppImage
<directory to appimage>/PreMiD*.AppImage

exit 0
```
3. Sla bestand op en chmod het als executable `sudo chmod a+x /etc/rc.local`.
4. Herstart je PC en PreMiDs AppImage start bij het inloggen.

<a name="macos"></a>

# MacOS-probleemoplossing
### Fout bij aanmaken van map
<img src="https://i.imgur.com/td92lf6.png" width="300px" style="max-width:100%;" />

If you get this error, it means that your account doesn't have Administrator permissions and you need to create folder manually by doing these steps:
1. Open de finder en open de map **Applicaties**.
2. Rechtsklik op lege ruimte en klik op **Maak map**.
3. To this folder assign `PreMiD` name (remember about upper-cased letters).
4. Open installatieprogramma opnieuw.

# Dat heeft mijn probleem niet opgelost
Open een ticket in [#support](https://discord.premid.app/).