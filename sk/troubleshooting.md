---
title: Riešenie problémov
description: Všetko čo vyrieši váš problém
published: true
date: 2020-09-01T18:31:28.780Z
tags:
editor: markdown
---

> Uistite sa či máte rozšírenie **a** aplikáciu nainštalovanú! 
> 
> {.is-warning}

### Are you using the Discord app?
PreMiD does **not** work on the browser version of Discord, you must download the app [here](https://discord.com/download).

### Are you using a presence with settings?
Many presences (including `Twitch` and `SoundCloud`) are affected by an extension issue. This issue causes the extension to not grab the default values of settings properly.

To solve this, all you have to do is toggle the topmost setting: ![presencesettings.gif](/presencesettings.gif)

### Obnovte stránku
You can press <kbd>CTRL+R</kbd>/<kbd>F5</kbd> (Windows) or <kbd>CMD+R</kbd> (MacOS) on your keyboard too instead of searching for the refresh button.

### Reštartujte váš prehliadač
<kbd>Alt</kbd>+<kbd>F4</kbd> (Windows) alebo <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS) urobí dobrú prácu tiež. (Samozrejme že musíte si spustiť váš prehliadač znova)

### Uistite sa či máte povolený Discord Hernú Aktivitu v nastaveniach
**Užívateľské Nastavenia** > **Herná Aktivita** ![gameactivity_edited.png](/gameactivity_edited.png)

### Reštartujte si PreMiD (Aplikáciu)
![quit.png](/quit.png) Musíte si reštartovať PreMiD.

### Obnovte/reštartujte Discord
Press <kbd>CTRL+R</kbd> (Windows) or <kbd>CMD+R</kbd> (MacOS) on your keyboard or restart Discord manually.

### Uistite sa či Discord NEBEŽÍ ako administrátor
Veľmi dôležité. Discord RPC nebude fungovať ak bude Discord bežať ako administrátor.

### Skontrolujte či beží vám antivirus alebo firewall na vašom počítači
Niekedy antivírusové programy a firewalls blokujú aplikácie ktoré vytvárajú/hostinské servery alebo sú pripojené na internet. Na prijímanie a odovzdávanie údajov medzi našou aplikáciou a rozšírením používame lokálny server, takže ak zablokujete schopnosť prenášanie údajov aplikácie pravdepodobne nebudete môcť používať PreMiD.

### Deaktivujte si vaše rozšírenia
Vypnite si všetky vaše rozšírenia a pozrite sa či to funguje. Ak áno, skúste aktivovať vaše rozšírenia krok-za-krokom a oznámte nám ktorý z rozšírení pokazil PreMiD.

### Reštartujte si počítač
Dúfam že viete ako reštartovať počítač.

### Pre-inštalácia PreMiDu
Niekedy nie je niečo v poriadku so súbormi... Návody pre inštaláciu nájdete [tu](/install).

### Manuálne odstránenie
Windows:    `C:\Users\USER\AppData\Roaming\`` and delete the folder`PreMiD`.
MacOS:`~/users/USER/~Library/Application Support/` a vymažte priečinok `PreMiD``.

### Na Ubuntu/Debian zameraných distribúciách
Ak ste si stiahli Discord cez Snapcraft, RPC vám nebude fungovať. Verziu Snapcraft musíte odinštalovať spustením `sudo snap remove discord` v termináli, stiahnite si[ Discord pre Linux](https://discordapp.com/api/download?platform=linux) ([ alebo Discord Canary](https://discordapp.com/api/canary/download?platform=linux)) potom prejdite do adresára v ktorom ste stiahni Discord (väčšinou `$HOME/Downloads`), potom si nainštalujte balík pomocou `sudo dpkg -i discord-*.deb`.

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

### Nič mi nepomohlo
Prosím otvorte ticket v [#support](https://discord.premid.app/).