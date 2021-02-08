---
title: Felsökning
description: Allt för att lösa ditt problem
published: true
date: 2021-02-08T18:44:27.435Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:03:54.865Z
---

> Se till att du har tillägget **och** programmet installerat! 
> 
> {.is-warning}

Included on this page:
1. [General troubleshooting](https://docs.premid.app/troubleshooting#general)
2. [Linux troubleshooting](https://docs.premid.app/troubleshooting#linux)
3. [MacOS troubleshooting](https://docs.premid.app/troubleshooting#macos)

<a name="general"></a>

# General troubleshooting
### Uppdatera sidan
Du kan trycka <kbd>CTRL+R</kbd>/<kbd>F5</kbd> (Windows) eller <kbd>CMD+R</kbd> (MacOS) på ditt tangentbord med istället för att leta efter uppdateringsknappen.

### Använder du Discord-appen?
PreMiD fungerar **inte** på webbläsarversionen av Discord, du måste ladda ned appen [här](https://discord.com/download).

### Se till att du har Discord-spelaktivitet aktiverat i inställningar
**Användarinställningar** > **Spelaktivitet** ![gameactivity_edited.png](/gameactivity_edited.png)

### Se till att Discord INTE körs som administrator
Väldigt viktigt. Discord RPC kommer inte att fungera om Discord körs som administratör.

### Använder du en presence med inställningar?
Många presences (inkluderar `Twitch` och `SoundCloud`) påverkas av tilläggsfel. Det här felet orsakar tillägget att inte ta standardvärdena från inställningarna ordentligt.

För att lösa det här, allt du behöver göra är att växla den översta inställningen: ![presencesettings.gif](/presencesettings.gif)

### Starta om din webbläsare
<kbd>Alt</kbd>+<kbd>F4</kbd> (Windows) eller <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS) gör ett bra jobb med. (Självklart måste du starta din webbläsare igen.)

### Starta om PreMiD (Applikationen)
![quit.png](/quit.png) Du måste starta om PreMiD efteråt.

### Ladda om/starta om Discord
Tryck <kbd>CTRL+R</kbd> (Windows) eller <kbd>CMD+R</kbd> (MacOS) på ditt tangentbord eller starta om Discord manuellt.

### Kontrollera om du har antivirus eller brandvägg som körs på din dator
Ibland så blockar antivirusprogram och brandväggar applikationer som skapar/hanterar servrar eller applikationer som bara ansluter till internet. Vi använder en lokal server för att ta emot och ge data mellan vår app och tillägg, så om du blockerar appens förmåga att ge data så kommer du troligen inte kunna använda PreMiD.

### Inaktivera dina tillägg
Inaktivera dina tillägg och se om det fungerar. Om det gör det, försök att aktivera dina tillägg steg för steg och berätta för oss vilket tillägg det var som orsakade PreMiD att inte fungera.

### Starta om datorn
Jag hoppas att du vet hur man startar om en dator.

### Installera om PreMiD
Ibland är det något fel med filerna... Handledningar för installationen finns [här](/install).

### Manuell borttagning
Windows:    `C:\Users\USER\AppData\Roaming\`` och ta bort mappen`PreMiD`.
MacOS:`~/users/USER/~Library/Application Support/`och ta bort mappen`PreMiD``.

### McAfee upptäckte PreMiD som virus (Windows)
Det här är ett falskt positivt resultat från McAfee och vi har rapporterat felet till de, just nu kan du exkludera PreMiD från skanningen genom att göra följande steg:

> Om du inte känner dig säker på att ta dessa steg, tveka inte att skapa ett ärende i [#support](https://discord.premid.app/) och en av våra supportombud kommer att kunna hjälpa dig! 
> 
> {.is-warning}

1. Öppna McAfee applikationen och klicka på inställnings-ikonen högst upp till höger. <img src="https://i.imgur.com/rPLZn6c.png" width="500px" style="max-width:100%;" />
2. Klicka på "Quarantined items" (Andra från toppen).
3. Expandera det, och klicka på `>` ikonen innan objektet med namnet "settings.dat".
4. Kontrollera att sökvägen "AppData\Local\Temp\PreMiD" finns och om så är fallet, välj den och tryck på återställ. <img src="https://i.imgur.com/9nvHmiI.png" width="500px" style="max-width:100%;" />
5. Efter att den har återställts kan du stänga popup-fönstret "Quarantined Items" och sedan trycka på ikonen inställningar igen uppe till höger.
6. Klicka på "Real-Time Scanning" (tredje från toppen).
7. Expandera den och klicka på "Lägg till fil".
8. Skriv "%appdata%" i URL-fältet i filhanteraren och tryck på Enter. <img src="https://i.imgur.com/2bchwLe.png" width="500px" style="max-width:100%;" />
9. Öppna mappen "PreMiD" och välj filen "PreMiD.exe" och klicka på öppna. <img src="https://i.imgur.com/aHOyv3V.png" width="500px" style="max-width:100%;" />
10. McAfee bör nu ignorera vår fil, nu är det bara att starta vårt programm och du bör vara klar!

### PreMiD status bugged on discord!
Don't worry. Just press the <strong x-id="1">ctrl+r</strong> keybind while focused on your discord window to reload it.

<a name="linux"></a>

# Linux troubleshooting
### Ubuntu/Debian based distros
Om du har laddat ned Discord genom Snapcraft så kommer RP inte fungera. You have to uninstall the Snapcraft version by executing `sudo snap remove discord` on a terminal, download **[Discord's Linux build](https://discordapp.com/api/download?platform=linux)** (**[or Discord Canary](https://discordapp.com/api/canary/download?platform=linux)**), then navigating to the directory you downloaded Discord to (usually `$HOME/Downloads`), then installing the package using `sudo dpkg -i discord-*.deb`. If AppImage doesn't work, you should consider checking our other packages by **[this link](https://packagecloud.io/premid/linux)**.

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

# Detta har inte löst mitt problem
Vänligen öppna ett ärende i [#support](https://discord.premid.app/).