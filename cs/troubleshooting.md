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

Included on this page:
1. [General troubleshooting](https://docs.premid.app/troubleshooting#general)
2. [Linux troubleshooting](https://docs.premid.app/troubleshooting#linux)
3. [MacOS troubleshooting](https://docs.premid.app/troubleshooting#macos)

<a name="general"></a>

# General troubleshooting
### Znovu načíst stránku
Můžete stisknout <kbd>CTRL+R</kbd>/<kbd>F5</kbd> (Windows) nebo <kbd>CMD+R</kbd> (MacOS) na vaší klávesnici místo hledání tlačítka obnovit.

### Are you using the Discord app?
PreMiD does **not** work on the browser version of Discord, you must download the app [here](https://discord.com/download).

### Ujistěte se, že jste povolili Discord herní aktivitu v nastavení
**Uživatelské nastavení** > **Herní aktivita** ![gameactivity_edited.png](/gameactivity_edited.png)

### Ujistěte se, že Discord neběží jako správce
Skutečně důležité. Discord RPC nebude fungovat, pokud spustíte Discord jako správce.

### Are you using a presence with settings?
Many presences (including `Twitch` and `SoundCloud`) are affected by an extension issue. This issue causes the extension to not grab the default values of settings properly.

To solve this, all you have to do is toggle the topmost setting: ![presencesettings.gif](/presencesettings.gif)

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

### PreMiD status bugged on discord!
Don't worry. Press the <kbd>CTRL+R</kbd> (Windows) or <kbd>CMD+R</kbd> (MacOS) keybind while focused on your discord window to reload it.

<a name="linux"></a>

# Linux troubleshooting
### Ubuntu/Debian based distros
Pokud jste si stáhli Discord přes Snapcraft, RPC nebude fungovat. You have to uninstall the Snapcraft version by executing `sudo snap remove discord` on a terminal, download **[Discord's Linux build](https://discordapp.com/api/download?platform=linux)** (**[or Discord Canary](https://discordapp.com/api/canary/download?platform=linux)**), then navigating to the directory you downloaded Discord to (usually `$HOME/Downloads`), then installing the package using `sudo dpkg -i discord-*.deb`. If AppImage doesn't work, you should consider checking our other packages by **[this link](https://packagecloud.io/premid/linux)**.

### Arch Linux based distros
Arch Linux based distros should use AUR (Arch User Repository) package that is named <code>premid</code> or <code>premid-git</code> (<em x-id="3">WARNING: This repository builds premid from our source code.</em>). If you don't want to install an AUR manager (yay etc.), you can check out our AppImage that is downloadable from our <strong x-id="1"><a href="https://github.com/premid/linux/releases">Linux repository</a></strong>.
<em x-id="3">Warning: the package in the <strong x-id="1">AUR</strong> repository is not maintained by us (as PreMiD organization), but by other people.</em>

### Port binding
You should know that <strong x-id="1">PreMiD</strong> binds itself to the port <strong x-id="1">3020</strong>. This is necessary for the Extension and the Application communicate. If <strong x-id="1">PreMiD</strong> shows you an error about this port, you should check if something is binded to the 3020 port by running <code>sudo lsof -i:3020</code> or <code>sudo netstat -tnlp | grep :3020</code> in your terminal. If some process is binded to it you should make sure to free the port and try running <code>PreMiD</code> again.

### PreMiD's AppImage doesn't launch at login
As we stated in our **Linux repository**, AppImage can't be launched at login. You can add it to autostart manually by doing these steps:
1. Make a file named <strong x-id="1">rc.local</strong> in the <code>/etc</code> directory.
2. Open this file in your favourite editor and paste given code with changing some things:
```bash
#!/bin/bash
# Required to run as /bin/bash (if you use zsh etc. you can change it.)

# Example: /home/PreMiD/PreMiD*.AppImage
<directory to appimage>/PreMiD*.AppImage

exit 0
```
3. Save file and chmod it as executable `sudo chmod a+x /etc/rc.local`.
4. Restart your PC and PreMiD AppImage should launch at login.

<a name="macos"></a>

# MacOS troubleshooting
### Error creating directory
<img src="https://i.imgur.com/td92lf6.png" width="300px" style="max-width:100%;" />

If you get this error, it means that your account doesn't have Administrator permissions and you need to create folder manually by doing these steps:
1. Open finder and open **Applications** folder.
2. Right-click on blank space and click **Create folder**.
3. To this folder assign `PreMiD` name (remember about upper-cased letters).
4. Open installer again.

# To můj problém nevyřešilo
Please open a ticket in [#support](https://discord.premid.app/).