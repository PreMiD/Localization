---
title: Probleemoplossen
description: Alles om je probleem op te lossen
published: true
date: 2020-08-30T17:14:32.108Z
tags:
editor: markdown
---

> Zorg ervoor dat de extensie **en** de applicatie geïnstalleerd is! 
> 
> {.is-warning}

### Gebruik je de Discord-app?
PreMiD werkt **niet** met de browserversie van Discord, je moet de app [hier](https://discord.com/download) downloaden.

### Gebruikt u een presence met instellingen?
Veel presences (inclusief `Twitch` en `SoundCloud`) worden beïnvloed door een extensie probleem. Dit probleem zorgt ervoor dat de extensie de standaardwaarden van instellingen niet goed grijpt.

Om dit op te lossen hoef je alleen maar de bovenste instelling om te schakelen: ![presencesettings.gif](/presencesettings.gif)

### Pagina herladen
U kunt ook op <kbd>CTRL+R</kbd>/<kbd>F5</kbd> (Windows) of <kbd>CMD+R</kbd> (MacOS) op het toetsenbord drukken in plaats van te zoeken naar de refresh knop.

### Herstart uw browser
<kbd>ALT</kbd>+<kbd>F4</kbd> (Windows) of <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS) doet ook goed werk. (Je moet je browser weer opstarten.)

### Zorg ervoor dat Discord spel activiteit is ingeschakeld in de instellingen
**Gebruikersinstellingen** > **Spelactiviteit** ![gameactivity_edited.png](/gameactivity_edited.png)

### PreMiD herstarten (Applicatie)
![quit.png](/quit.png) U moet PreMiD daarna opnieuw starten.

### Discord herladen/herstarten
Druk op <kbd>CTRL+R</kbd> (Windows) of <kbd>CMD+R</kbd> (MacOS) op je toetsenbord of start Discord handmatig opnieuw op.

### Zorg ervoor dat Discord NIET als administrator wordt uitgevoerd
Echt belangrijk! Discord RPC zal niet werken als je Discord als administrator gebruikt.

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
MacOS:`~/users/USER/~Library/Application Support/` en verwijder de map `PreMiD``.

### Op Ubuntu/Debian gebaseerde distro's
Als je Discord hebt gedownload via Snapcraft, zal RPC niet werken. Je moet de Snapcraft versie verwijderen door `sudo snap remove discord` uit te voeren op een terminal, download [Discord's Linux build](https://discordapp.com/api/download?platform=linux) ([of Discord Canary](https://discordapp.com/api/canary/download?platform=linux)), navigeer vervolgens naar de map die je Discord gedownload hebt naar (meestal `$HOME/Downloads`), daarna het installeren van het pakket met behulp van `sudo dpkg -i discord-*. eb`.

### McAfee heeft PreMiD gedetecteerd als virus (Windows)
Dit is een valse positief van McAfee en we hebben hun hiervan op de hoogte gesteld. Voor nu kunt u PreMiD van de scan uitsluiten door de volgende stappen te doen:

> Als u niet zelfverzekerd bent om deze stappen uit te voeren, voel je vrij om een ticket te maken in [#support](https://discord.gg/WvfVZ8T) en een van onze Support Agents zal er zijn om je te helpen! 
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

### Dat heeft mijn probleem niet opgelost
Open een ticket in [#support](https://discord.premid.app/).