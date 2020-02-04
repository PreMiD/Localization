---
title: Riešenie problémov
description: Všetko čo vyrieši váš problém
published: true
date: 2020-01-18T20:32:24.820Z
tags:
---

> Uistite sa či máte rozšírenie **a** aplikáciu nainštalovanú! 
> 
> {.is-warning}

### Obnovte stránku
Viete stlačiť <kbd>Strg+R</kbd>/<kbd>F5</kbd> (Windows) alebo <kbd>CMD+R</kbd> (MacOS) na vašej klávesnici tiež miesto hľadania pre obnovenie tlačítko.

### Reštartujte váš prehliadač
<kbd>Alt</kbd>+<kbd>F4</kbd> (Windows) alebo <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS) urobí dobrú prácu tiež. (Samozrejme že musíte si spustiť váš prehliadač znova)

### Uistite sa či máte povolený Discord Hernú Aktivitu v nastaveniach
**Užívateľské Nastavenia** > **Herná Aktivita** ![gameactivity_edited.png](/gameactivity_edited.png)

### Reštartujte si PreMiD (Aplikáciu)
![quit.png](/quit.png) Musíte si reštartovať PreMiD.

### Obnovte/reštartujte Discord
Stlačte <kbd>Strg+R</kbd> (Windows) alebo <kbd>CMD+R</kbd> (MacOS) na vašej klávesnici alebo reštartujte Discord manuálne.

### Uistite sa či Discord NEBEŽÍ ako administrátor
Veľmi dôležité. Discord RPC nebude fungovať ak bude Discord bežať ako administrátor.

### Skontrolujte či beží vám antivirus alebo firewall na vašom počítači
Niekedy antivírusové programy a firewalls blokujú aplikácie ktoré vytvárajú/hostinské servery alebo sú pripojené na internet. We are using a local server to receive and pass data between our app and extension, so if you will block app's ability to pass data you probably will not be able to use PreMiD.

### Deaktivujte si vaše rozšírenia
Vypnite si všetky vaše rozšírenia a pozrite sa či to funguje. Ak áno, skúste aktivovať vaše rozšírenia krok-za-krokom a oznámte nám ktorý z rozšírení pokazil PreMiD.

### Reštartujte si počítač
Dúfam že viete ako reštartovať počítač.

### Pre-inštalácia PreMiDu
Niekedy nie je niečo v poriadku so súbormi... Návody pre inštaláciu nájdete [tu](/install).

### Manuálne odstránenie
Windows:    `C:\Users\USER\Program Files (x86)\`` a vymažte priečinok `PreMiD`.
MacOS:`~/users/USER/~Library/Application Support/` a vymažte priečinok `PreMiD``.

### On Ubuntu/Debian based distros
Ak ste si stiahli Discord cez Snapcraft, RPC vám nebude fungovať. You have to uninstall the Snapcraft version by executing `sudo snap remove discord` on a terminal, download [Discord's Linux build](https://discordapp.com/api/download?platform=linux) ([or Discord Canary](https://discordapp.com/api/canary/download?platform=linux)), then navigating to the directory you downloaded Discord to (usually `$HOME/Downloads`), then installing the package using `sudo dpkg -i discord-*.deb`.

### Nič mi nepomohlo
Please open a ticket in [#support](https://discord.gg/PreMiD).