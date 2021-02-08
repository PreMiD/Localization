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

Deze pagina omvat o.a.:
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
Geen zorgen. Gebruik simpelweg de sneltoets **ctrl+r** in discord om te herstarten. Hierna wordt hij nog steeds niet weergegeven!

<a name="linux"></a>

# Linux-probleemoplossing
### Op Ubuntu/Debian gebaseerde distro's
Als je Discord hebt gedownload via Snapcraft, zal RPC niet werken. Je moet de Snapcraft versie verwijderen door `sudo snap remove discord` uit te voeren op een terminal, download **[Discord's Linux-build](https://discordapp.com/api/download?platform=linux)** (**[of Discord Canary](https://discordapp.com/api/canary/download?platform=linux)**), navigeer vervolgens naar de map die je Discord gedownload hebt naar (meestal `$HOME/Downloads`), daarna het installeren van het pakket met behulp van `sudo dpkg -i discord-*. eb`. Als AppImage niet werkt, overweeg dan om onze andere pakketten te gebruiken via **[deze link](https://packagecloud.io/premid/linux)**.

### Op Arch Linux gebaseerde distro's
Op Arch Linux gebaseerde distro's moeten AUR (Arch User Repository) pakket gebruiken dat `premid` of `premid-git` heet (*WAARSCHUWING: Deze buildt premid vanuit bron*). Als je geen aur manager wilt installeren (yay etc.), kun je onze AppImage bekijken die kan worden gedownload op onze **[Linux-repository](https://github.com/premid/linux/releases)**. *Let op: **AUR**-repo wordt niet onderhouden door ons, maar door anderen.*

### Poort-binding
Je moet weten dat **PreMiD** zichzelf bindt aan poort **3020**, wat nodig is voor communicatie tussen extensie en applicatie. Als **PreMiD** je een fout over deze poort laat zien, controleer dan of iets verbonden is met poort door `sudo lsof -i:3020` of `sudo netstat -tnlp ūgrep :3020` in te typen in de terminal. Als er een toepassing aan gekoppeld is, moet je deze beëindigen en `PreMiD` opnieuw proberen te starten.

### PreMiDs AppImage start niet bij het inloggen?!?!
Zoals we hebben aangegeven in onze **Linux-repository**, kan AppImage niet gestart worden tijdens het inloggen. Je kunt het zelf toevoegen aan autostart. Instructies om dit te behalen:
1. Maak bestand genaamd **rc.local** in `/etc` map.
2. Open dit bestand in je favoriete editor en plak/wijzig dit:
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

Als je deze fout krijgt, betekent dit dat je account geen beheerdersrechten heeft en dat je handmatig een map moet aanmaken. Instructies om dit te behalen:
1. Open de finder en open de map **Applicaties**.
2. Rechtsklik op lege ruimte en klik op **Maak map**.
3. Maak map met de naam `PreMiD` (let op de hoofdletters).
4. Open installatieprogramma opnieuw.

# Dat heeft mijn probleem niet opgelost
Open een ticket in [#support](https://discord.premid.app/).