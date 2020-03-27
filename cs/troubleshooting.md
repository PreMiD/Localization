---
title: Řešit Problémy
description: Vše k vyřešení vašeho problému
published: true
date: 2020-02-12T22:05:49.674Z
tags: 
---

> Ujistěte se, že máte rozšíření **a** nainstalovanou aplikaci! 
> 
> {.is-warning}

### Znovu načíst stránku
Můžete také stisknout <kbd>Strg+R</kbd>/<kbd>F5</kbd> (Windows) nebo <kbd>CMD+R</kbd> (MacOS) na klávesnici místo hledání tlačítka obnovit.

### Restartujte prohlížeč
<kbd>Alt</kbd>+<kbd>F4</kbd> (Windows) nebo <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS) dělá dobrou práci také. (Musíte spustit prohlížeč znovu samozřejmě.)

### Ujistěte se, že jste povolili Discord herní aktivitu v nastavení
**Uživatelské nastavení** > **Herní aktivita** ![herní aktivita_upraveno.png](/gameactivity_edited.png)

### Restartovat PreMiD (Aplikace)
![quit.png](/quit.png) Poté musíte restartovat PreMiD.

### Znovu načíst/restartovat Discord
Stiskněte <kbd>Strg+R</kbd> (Windows) nebo <kbd>CMD+R</kbd> (MacOS) na klávesnici nebo restartujte Discord ručně.

### Ujistěte se, že Discord neběží jako správce
Skutečně důležité. Discord RPC nebude fungovat, pokud spustíte Discord jako správce.

### Zkontrolujte, zda máte spuštěný antivirus nebo firewall
Antivirové programy a firewally někdy blokují aplikace, které vytvářejí nebo hostují servery nebo se jen připojují k internetu. K příjmu a přenosu dat mezi naší aplikací a rozšířením používáme místní server, takže pokud budete blokovat schopnost aplikace předávat data, pravděpodobně nebudete moci používat PreMiD.

### Zakázat doplňky
Zakažte všechny doplňky a uvidíte, zda to funguje. Pokud ano, zkuste povolit vaše doplňky krok za krokem a sdělte nám, který doplněk poškodil PreMiD.

### Restartování počítače
Doufám, že víte, jak restartovat počítač.

### Přeinstalování PreMiD
Někdy je na souborech něco špatně... Návody pro instalaci naleznete [zde](/install).

### Ruční odstranění
Windows:    `C:\Users\USER\Program soubory (x86)\`` a odstraňte složku`PreMiD`.
MacOS:`~/users/USER/~Knihovna/Podpora aplikací/`a smažte složku`PreMiD``.

### Na distros Ubuntu/Debianu
Pokud jsi stáhl Discord přes Snapcraft, RPC nebude fungovat. Musíš odinstalovat verzi Snapcraft spuštěním `sudo snap snap remove discord` na terminálu, stáhnout [Discord Linux build](https://discordapp.com/api/download?platform=linux) ([nebo Discord Canary](https://discordapp.com/api/canary/download?platform=linux)), poté přejděte do adresáře, do kterého jste si stáhli Discord (obvykle `$HOME/Downloads`), pak nainstalujete pomocí `sudo dpkg -i discord-*. únor`.

### To můj problém nevyřešilo
Otevřete prosím tiket v [#support](https://discord.gg/PreMiD).