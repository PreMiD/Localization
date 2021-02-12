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
Geen zorgen. Druk op de <kbd>CTRL+R</kbd> (Windows) of <kbd>CMD+R</kbd> (MacOS) toetsen terwijl de gefocust bent op je discord venster om het te herladen.

<a name="linux"></a>

# Linux-probleemoplossing
### Op Ubuntu/Debian gebaseerde distro's
Als je Discord hebt gedownload via Snapcraft, zal RPC niet werken. Je moet de Snapcraft versie verwijderen door `sudo snap remove discord` uit te voeren op een terminal, download **[Discord's Linux-build](https://discordapp.com/api/download?platform=linux)** (**[of Discord Canary](https://discordapp.com/api/canary/download?platform=linux)**), navigeer vervolgens naar de map waarin je Discord in geïnstalleerd is (meestal `$HOME/Downloads`), instaleer daarna het pakket met behulp van `sudo dpkg -i discord-*. eb`. Als AppImage niet werkt, overweeg dan om onze andere pakketten te gebruiken via **[deze link](https://packagecloud.io/premid/linux)**.

### Op Arch Linux gebaseerde distro's
Op Arch Linux gebaseerde distro's moeten AUR (Arch User Repository) pakket gebruiken dat <code>premid</code> of <code>premid-git</code> heet (<em x-id="3">WAARSCHUWING: Deze buildt premid vanuit broncode</em>). Als je geen AUR manager wilt installeren (yay etc.), kun je onze AppImage bekijken die kan worden gedownload op onze <strong x-id="1"><a href="https://github.com/premid/linux/releases">Linux-repository</a></strong>.
<em x-id="3">Waarschuwing: het pakket in de <strong x-id="1">AUR</strong> repository wordt niet onderhouden door ons (PreMiD organisatie), maar door andere mensen.</em>

### Poort-binding
U moet weten dat <strong x-id="1">PreMiD</strong> zichzelf bindt aan de poort <strong x-id="1">3020</strong>. Dit is nodig voor de communicatie tussen de extensie en de applicatie. Als <strong x-id="1">PreMiD</strong> een fout laat zien over deze port, moet u controleren of iets aan de 3020 poort is gebonden door <code>sudo lsof -i:3020</code> of <code>sudo netstat -tnlp, grep :3020</code> uit te voeren in uw terminal. Als er een proces aan verbonden is, zorg er dan voor dat u de poort vrijmaakt en probeer daarna opnieuw <code>PreMiD</code> te starten.

### PreMiD's AppImage start niet bij het inloggen
Zoals we hebben aangegeven in onze **Linux-repository**, kan AppImage niet gestart worden tijdens het inloggen. U kunt het handmatig toevoegen aan de automatische start door deze stappen te doen:
1. Maak een bestand genaamd <strong x-id="1">rc.local</strong> in de <code>/etc</code> map.
2. Open dit bestand in je favoriete editor en plak de gegeven code en verander enkele dingen:
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

Als je deze fout krijgt, betekent dit dat je account geen beheerdersrechten heeft en dat je handmatig de map moet aanmaken:
1. Open de finder en open de map **Applicaties**.
2. Rechtsklik op lege ruimte en klik op **Maak map**.
3. Geef de map de naam `PreMiD` (let op de hoofdletters).
4. Open het installatieprogramma opnieuw.

# Dat heeft mijn probleem niet opgelost
Open een ticket in [#support](https://discord.premid.app/).