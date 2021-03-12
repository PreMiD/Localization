---
title: Řešení problémů
description: Vše k vyřešení vašeho problému
published: true
date: 2021-02-08T21:30:58.603Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:03:54.865Z
---

> Ujistěte se, že máte rozšíření **a** aplikaci nainstalovanou! 
> 
> {.is-warning}

Na této stránce naleznete:
1. [Obecné řešení problémů](https://docs.premid.app/troubleshooting#general)
2. [Řešení problémů na Linux](https://docs.premid.app/troubleshooting#linux)
3. [Řešení problémů na macOS](https://docs.premid.app/troubleshooting#macos)

<a name="general"></a>

# Obecné řešení problémů
### Znovu načíst stránku
Můžete stisknout <kbd>CTRL+R</kbd>/<kbd>F5</kbd> (Windows) nebo <kbd>CMD+R</kbd> (MacOS) na vaší klávesnici místo hledání tlačítka obnovit.

### Používáte aplikaci Discord v desktopové verzi?
PreMiD **nefunguje** při používání Discordu v prohlížení, musíte stáhnout desktopovou aplikace [zde](https://discord.com/download).

### Ujistěte se, že jste povolili Discord herní aktivitu v nastavení
**Uživatelské nastavení** > **Herní aktivita** ![gameactivity_edited.png](/gameactivity_edited.png)

### Ujistěte se, že Discord neběží jako správce
Skutečně důležité. Discord RPC nebude fungovat, pokud spustíte Discord jako správce.

### Používáte presence s nastavením?
Mnoho presencí (včetně `Twitch` a `SoundCloud`) je ovlivněno problémy s rozšířením. Tyto problémy způsobují, že rozšíření nezískává korektně výchozí nastavení.

K vyřešení tohoto problému stačí nastavit nejvyšší vlastnosti v nastavení presence. ![presencesettings.gif](/presencesettings.gif)

### Restartujte prohlížeč
<kbd>Alt</kbd>+<kbd>F4</kbd> (Windows) nebo <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS) dělá také dobrou práci. (Musíte samozřejmě spustit prohlížeč znovu.)

### Restartovat PreMiD aplikaci
![quit.png](/quit.png) Poté musíte restartovat PreMiD.

### Znovu načíst/restartovat Discord
Stiskněte <kbd>CTRL+R</kbd> (Windows) nebo <kbd>CMD+R</kbd> (MacOS) na vaší klávesnici nebo restartujte Discord ručně.

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

### McAfee detekoval PreMiD jako virus (na Windows)
Ze strany McAfee je to chybné vyhodnocení a my jsme je o tom informovali. Prozatím můžete vyloučit PreMiD ze skenování pomocí následujících kroků:

> Pokud si tímto nejste jisti, neváhejte a udělejte tiket v [#support](https://discord.premid.app/) a jeden z našich správců vám může pomoci! 
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

### PreMiD status se na Discordu zaseknul!
Žádný strach. Stiskněte <kbd>CTRL+R</kbd> (Windows) nebo <kbd>CMD+R</kbd> (MacOS) při otevřeném okně aplikace Discordu. Dojde k opětovnému načtení aplikace.

<a name="linux"></a>

# Řešení problémů na Linux
### Distribuce založené na Ubuntu/Debian
Pokud jste si stáhli Discord přes Snapcraft, RPC nebude fungovat. Musíte odinstalovat verzi ze Snapcraftu zadáním příkazu `sudo snap remove discord` do terminálu, stažením **[Discordu pro Linux](https://discordapp.com/api/download?platform=linux)** (**[nebo Discord Canary](https://discordapp.com/api/canary/download?platform=linux)**), dále zamiřte do složky, kde jste Discord stáhnuli (většinou `$HOME/Downloads`) a nainstalujte balíček pomocí `sudo dpkg -i discord-*.deb`. Pokud vám AppImage nefunguje, zvažte i naše ostatní balíčky na **[tomto odkazu](https://packagecloud.io/premid/linux)**.

### Distribuce založené na Arch Linux
Distribuce založené na Arch Linux by měly používat AUR (Arch User Repository) balíček nazvaný <code>premid</code> nebo <code>premid-git</code> (<em x-id="3">UPOZORNĚNÍ: Tento repozitář kompiluje premid z našeho zdrojového kódu.</em>). Jestliže nechcete instalovat AUR manažer (yay apod.), můžete využít náš AppImage, který lze stáhnout z našeho <strong x-id="1"><a href="https://github.com/premid/linux/releases">Linux repozitáře</a></strong>.
<em x-id="3">VAROVÁNÍ: balíček v <strong x-id="1">AUR</strong> repozitáři není spravován námi (tedy organizací PreMiD), ale ostatními uživateli.</em>

### Port binding
Měli byste vědět, že <strong x-id="1">PreMiD</strong> sobě přiřazuje port <strong x-id="1">3020</strong>. To je nezbytné pro komunikaci mezi rozšířením a aplikací. Jestliže vám <strong x-id="1">PreMiD</strong> zobrazuje chybu týkající se tohoto portu, je vhodné zkontrolovat, zda není něco jiného již přiřazeno k portu 3020 pomocí příkazu <code>sudo lsof -i:3020</code> nebo <code>sudo netstat -tnlp | grep :3020</code> ve vašem terminálu. Pokud ano, uvolněte tento port a zkuste spustit <code>PreMiD</code> znovu.

### AppImage PreMiDu se nespustí po přihlášení
Jak jsme prohlásili v našem **Linux repozitáři**, AppImage nelze spustit po přihlášení. Můžete si jej přidat do autostartu manuálně pomocí následujících kroků:
1. Vytvořte soubor s názvem <strong x-id="1">rc.local</strong> ve složce <code>/etc</code>.
2. Otevřete tento soubor ve svém oblíbeném editoru, vložte kód uvedený níže a upravte některé věci:
```bash
#!/bin/bash
# Musí se spustit jako /bin/bash (pokud používáte zsh atd. můžete jej změnit.)

# Příklad: /home/PreMiD/PreMiD*.AppImage
<složka, kde se nachází appimage>/PreMiD*.AppImage

exit 0
```
3. Uložte soubor a povolte jeho vykonávání zadáním příkazu `sudo chmod a+x /etc/rc.local`.
4. Restartujte PC a PreMiD AppImage by se měl spustit po přihlášení.

<a name="macos"></a>

# Řešení problémů na macOS
### Chyba "Error creating directory"
<img src="https://i.imgur.com/td92lf6.png" width="300px" style="max-width:100%;" />

Jestliže jste narazili na tuto chybu, znamená to, že váš účet nemá práva správce a musíte tedy vytvořit složku manuálně následujícími kroky:
1. Otevřete Finder a otevřete složku **Aplikace**.
2. Klikněte pravým tlačítkem do prázdného místa a zvolte možnost **Nová složka**.
3. Přiřaďte k této složce název `PreMiD` (nezapomeňte na velká písmena).
4. Spusťte instalátor znovu.

# To můj problém nevyřešilo
Prosím, otevřete si tiket v [#support](https://discord.premid.app/).