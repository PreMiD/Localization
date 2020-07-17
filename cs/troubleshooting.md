---
title: Řešení problémů
description: Vše k vyřešení vašeho problému
published: true
date: 2020-07-17T19:49:29.170Z
tags:
editor: markdown
---

> Ujistěte se, že máte rozšíření **a** aplikaci nainstalovanou! 
> 
> {.is-warning}

### Znovu načíst stránku
Můžete stisknout <kbd>CTRL+R</kbd>/<kbd>F5</kbd> (Windows) nebo <kbd>CMD+R</kbd> (MacOS) na vaší klávesnici místo hledání tlačítka obnovit.

### Restartujte prohlížeč
<kbd>Alt</kbd>+<kbd>F4</kbd> (Windows) nebo <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS) dělá také dobrou práci. (Musíte samozřejmě spustit prohlížeč znovu.)

### Ujistěte se, že jste povolili Discord herní aktivitu v nastavení
**Uživatelské nastavení** > **Herní aktivita** ![gameactivity_edited.png](/gameactivity_edited.png)

### Restartovat PreMiD (Aplikace)
![quit.png](/quit.png) Poté musíte restartovat PreMiD.

### Znovu načíst/restartovat Discord
Stiskněte <kbd>CTRL+R</kbd> (Windows) nebo <kbd>CMD+R</kbd> (MacOS) na vaší klávesnici nebo restartujte Discord ručně.

### Ujistěte se, že Discord neběží jako správce
Skutečně důležité. Discord RPC nebude fungovat, pokud spustíte Discord jako správce.

### Zkontrolujte, zda máte spuštěný antivirus nebo firewall
Antivirové programy a firewally někdy blokují aplikace, které vytvářejí nebo hostují servery nebo se jen připojují k internetu. K příjmu a přenosu dat mezi naší aplikací a rozšířením používáme místní server, takže pokud budete blokovat schopnost aplikace předávat data, pravděpodobně nebudete moci používat PreMiD.

### Zakázat doplňky
Zakažte všechny doplňky a zjistěte jestli to funguje. Pokud ano, zkuste povolit vaše doplňky krok za krokem a sdělte nám, který doplněk poškodil PreMiD.

### Restartování počítače
Doufám, že víte, jak restartovat počítač.

### Přeinstalování PreMiD
Někdy je něco se soubory špatně... Návody pro instalaci naleznete [zde](/install).

### Ruční odstranění
Windows:    `C:\Users\UZIVATEL\AppData\Roaming\`` a smažte složku`PreMiD`.
MacOS:`~/users/USER/~Library/Application Support/`a smažte složku`PreMiD``.

### Na distros Ubuntu/Debianu
Pokud jste si stáhli Discord přes Snapcraft, RPC nebude fungovat. Musíte odinstalovat verzi ze Snapcraft spuštěním `sudo snap remove discord` v terminálu, stáhnout [Discord Linux build](https://discordapp.com/api/download?platform=linux) ([nebo Discord Canary](https://discordapp.com/api/canary/download?platform=linux)), poté přejít do složky, do kterého jste si stáhli Discord (obvykle `$HOME/Downloads`), a nainstalujete ho pomocí `sudo dpkg -i discord-*.deb`.

### McAfee detected PreMiD as virus (Windows)
This is a false positive from McAfee and we have reported the issue to them, for now you can exclude PreMiD from the scan by doing the following steps:

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

### That has not solved my problem
Prosím otevřte si tiket v [#support](https://discord.gg/WvfVZ8T).