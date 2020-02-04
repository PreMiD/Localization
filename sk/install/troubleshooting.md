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

### Make sure that you have enabled Discord Game Activity in settings
**Užívateľské Nastavenia** > **Herná Aktivita** ![gameactivity_edited.png](/gameactivity_edited.png)

### Reštartujte si PreMiD (Aplikáciu)
![quit.png](/quit.png) You have to restart PreMiD afterwards.

### Reload/restart Discord
Press <kbd>Strg+R</kbd> (Windows) or <kbd>CMD+R</kbd> (MacOS) on your keyboard or restart Discord manually.

### Be sure Discord is running NOT as administrator
Really important. Discord RPC will not work if you run Discord as an administrator.

### Check if you have antivirus or firewall running on your computer
Sometimes antivirus programs and firewalls are blocking applications which are creating/hosting servers or just connecting to the internet. We are using a local server to receive and pass data between our app and extension, so if you will block app's ability to pass data you probably will not be able to use PreMiD.

### Disable your addons
Disable all your addons and see if it works. If yes, try to enable your addons step-by-step and tell us which addon broke PreMiD.

### Restarting your computer
I hope you know how to restart a computer.

### Reinstalling PreMiD
Sometimes there is something wrong with the files... Tutorials for the installation can be found [here](/install).

### Manual removal
Windows:    `C:\Users\USER\Program Files (x86)\`` and delete the folder`PreMiD`.
MacOS:`~/users/USER/~Library/Application Support/`and delete the folder`PreMiD``.

### On Ubuntu/Debian based distros
If you have downloaded Discord through Snapcraft, RPC will not work. You have to uninstall the Snapcraft version by executing `sudo snap remove discord` on a terminal, download [Discord's Linux build](https://discordapp.com/api/download?platform=linux) ([or Discord Canary](https://discordapp.com/api/canary/download?platform=linux)), then navigating to the directory you downloaded Discord to (usually `$HOME/Downloads`), then installing the package using `sudo dpkg -i discord-*.deb`.

### That has not solved my problem
Please open a ticket in [#support](https://discord.gg/PreMiD).