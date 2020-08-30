---
title: Řešení problémů
description: Vše k vyřešení vašeho problému
published: true
date: 2020-08-30T17:14:32.108Z
tags:
editor: markdown
---

> Ujistěte se, že máte rozšíření **a** aplikaci nainstalovanou! 
> 
> {.is-warning}

### Are you using the using the Discord app?
PreMiD does **not** work on the browser version of Discord, you must download the app [here](https://discord.com/download).

### Are you using a presence with settings?
Many presences (including `Twitch` and `SoundCloud`) are affected by an extension issue. This issue causes the extension to not grab the default values of settings properly.

To solve this, all you have to do is toggle the topmost setting: ![presencesettings.gif](/presencesettings.gif)

### Znovu načíst stránku
Můžete stisknout <kbd>CTRL+R</kbd>/<kbd>F5</kbd> (Windows) nebo <kbd>CMD+R</kbd> (MacOS) na vaší klávesnici místo hledání tlačítka obnovit.

### Restartujte prohlížeč
<kbd>Alt</kbd>+<kbd>F4</kbd> (Windows) nebo <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS) dělá také dobrou práci. (Musíte samozřejmě spustit prohlížeč znovu.)

### Ujistěte se, že jste povolili Discord herní aktivitu v nastavení
**Uživatelské nastavení** > **Herní aktivita** ![gameactivity_edited.png](/gameactivity_edited.png)

### Restartovat PreMiD aplikaci
![quit.png](/quit.png) Poté musíte restartovat PreMiD.

### Znovu načíst/restartovat Discord
Stiskněte <kbd>CTRL+R</kbd> (Windows) nebo <kbd>CMD+R</kbd> (MacOS) na vaší klávesnici nebo restartujte Discord ručně.

### Ujistěte se, že Discord neběží jako správce
Skutečně důležité. Discord RPC nebude fungovat, pokud spustíte Discord jako správce.

### Zkontrolujte, zda máte spuštěný antivirus nebo firewall
Antivirové programy a firewally někdy blokují aplikace, které vytvářejí nebo hostují servery nebo se jen připojují k internetu. K příjmu a přenosu dat mezi naší aplikací a rozšířením používáme místní server, takže pokud budete blokovat schopnost aplikace předávat data, pravděpodobně nebudete moci používat PreMiD.

### Zakázat doplňky
Zakažte všechny doplňky a zjistěte, jestli to funguje. Pokud ano, zkuste povolit vaše doplňky krok za krokem a sdělte nám, který doplněk poškodil PreMiD.

### Restartování počítače
Doufám, že víte, jak restartovat počítač.

### Přeinstalování PreMiD
Někdy je něco se soubory špatně... Návody pro instalaci naleznete [zde](/install).

### Ruční odstranění
Windows:    `C:\Users\UZIVATEL\AppData\Roaming\`` a smažte složku`PreMiD`.
MacOS:`~/users/USER/~Library/Application Support/`a smažte složku`PreMiD``.

### Na distros Ubuntu/Debianu
Pokud jste si stáhli Discord přes Snapcraft, RPC nebude fungovat. Musíte odinstalovat verzi ze Snapcraft spuštěním `sudo snap remove discord` v terminálu, stáhnout [Discord Linux build](https://discordapp.com/api/download?platform=linux) ([nebo Discord Canary](https://discordapp.com/api/canary/download?platform=linux)), poté přejít do složky, do kterého jste si stáhli Discord (obvykle `$HOME/Downloads`), a nainstalujete ho pomocí `sudo dpkg -i discord-*.deb`.

### McAfee detekoval PreMiD jako virus (na Windows)
Ze strany McAfee je to chybné vyhodnocení a my jsme je o tom informovali. Prozatím můžete vyloučit PreMiD ze skenování pomocí následujících kroků:

> Pokud si tímto nejste jisti, neváhejte a udělejte tiket v [#support](https://discord.gg/WvfVZ8T) a jeden z našich správců vám může pomoci! 
> 
> {.is-warning}

1. Otevřete aplikaci McAfee a klikněte na ikonu nastavení vpravo nahoře. <img src="https://i.imgur.com/rPLZn6c.png" width="500px" style="max-width:100%;" />
2. Klikněte na "Karantované položky" (druhé od shora).
3. Rozbalte a klikněte na `>` před položkou s názvem "settings.dat".
4. Ujistěte se, že cesta obsahuje "AppData\Local\Temp\PreMiD". Pokud je to tak, vyberete ji a stiskněte tlačítko Obnovit. <img src="https://i.imgur.com/9nvHmiI.png" width="500px" style="max-width:100%;" />
5. Po obnovení můžete zavřít vyskakovací okno "Karantované položky" a poté znovu stisknout ikonu nastavení v pravém horním rohu.
6. Klikněte na "Skenování v reálném čase" (třetí od shora).
7. Rozbalte a klepněte na tlačítko "Přidat soubor".
8. Napište "%appdata% do adresního řádku správce souborů a stiskněte Enter. <img src="https://i.imgur.com/2bchwLe.png" width="500px" style="max-width:100%;" />
9. Otevřete složku "PreMiD", vyberte soubor "PreMiD.exe" a klikněte na tlačítko Otevřít. <img src="https://i.imgur.com/aHOyv3V.png" width="500px" style="max-width:100%;" />
10. McAfee by nyní měl ignorovat náš soubor, stačí spustit naši aplikaci a měli byste být v pořádku.

### To můj problém nevyřešilo
Prosím otevřte si tiket v [#support](https://discord.premid.app/).