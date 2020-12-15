---
title: Felsökning
description: Allt för att lösa ditt problem
published: true
date: 2020-12-15T20:00:08.631Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:03:54.865Z
---

> Se till att du har tillägget **och** programmet installerat! 
> 
> {.is-warning}

### Använder du Discord-appen?
PreMiD fungerar **inte** på webbläsarversionen av Discord, du måste ladda ned appen [här](https://discord.com/download).

### Använder du en presence med inställningar?
Många presences (inkluderar `Twitch` och `SoundCloud`) påverkas av tilläggsfel. Det här felet orsakar tillägget att inte ta standardvärdena från inställningarna ordentligt.

För att lösa det här, allt du behöver göra är att växla den översta inställningen: ![presencesettings.gif](/presencesettings.gif)

### Uppdatera sidan
Du kan trycka <kbd>CTRL+R</kbd>/<kbd>F5</kbd> (Windows) eller <kbd>CMD+R</kbd> (MacOS) på ditt tangentbord med istället för att leta efter uppdateringsknappen.

### Starta om din webbläsare
<kbd>Alt</kbd>+<kbd>F4</kbd> (Windows) eller <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS) gör ett bra jobb med. (Självklart måste du starta din webbläsare igen.)

### Se till att du har Discord-spelaktivitet aktiverat i inställningar
**Användarinställningar** > **Spelaktivitet** ![gameactivity_edited.png](/gameactivity_edited.png)

### Starta om PreMiD (Applikationen)
![quit.png](/quit.png) Du måste starta om PreMiD efteråt.

### Ladda om/starta om Discord
Tryck <kbd>CTRL+R</kbd> (Windows) eller <kbd>CMD+R</kbd> (MacOS) på ditt tangentbord eller starta om Discord manuellt.

### Se till att Discord INTE körs som administrator
Väldigt viktigt. Discord RPC kommer inte att fungera om Discord körs som administratör.

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

### På Ubuntu/Debian baserade distributioner
Om du har laddat ned Discord genom Snapcraft så kommer RP inte fungera. Du måste avinstallera Snapcraft versionen genom att köra `sudo snap remove discord` i en terminal, ladda ned [Discord's Linux build](https://discordapp.com/api/download?platform=linux) ([eller Discord Canary](https://discordapp.com/api/canary/download?platform=linux)), navigera sedan till mappen du laddade ned Discord till (ofta `$HOME/Nedladdningar`), installera sedan paketet med `sudo dpkg -i discord-*.deb`.

### McAfee upptäckte PreMiD som virus (Windows)
Det här är ett falskt positivt resultat från McAfee och vi har rapporterat felet till de, just nu kan du exkludera PreMiD från skanningen genom att göra följande steg:

> Om du inte känner dig säker på att ta dessa steg, tveka inte att skapa ett ärende i [#support](https://discord.premid.app/) och en av våra supportombud kommer att kunna hjälpa dig! 
> 
> {.is-warning}

1. Öppna McAfee applikationen och klicka på inställnings-ikonen högst upp till höger. <img src="https://i.imgur.com/rPLZn6c.png" width="500px" style="max-width:100%;" />
2. Klicka på "Quarantined items" (Andra från toppen).
3. Expand it, and click the `>` icon before an item with the name "settings.dat".
4. Make sure the path includes "AppData\Local\Temp\PreMiD", if so select it and press restore. <img src="https://i.imgur.com/9nvHmiI.png" width="500px" style="max-width:100%;" />
5. After it is restored you can close the "Quarantined Items" popup, then press the settings icon again in the top right.
6. Click "Real-Time Scanning" (Third from the top).
7. Expand it and click "Add file".
8. Type "%appdata%" in the URL bar of the file manager and press Enter. <img src="https://i.imgur.com/2bchwLe.png" width="500px" style="max-width:100%;" />
9. Open the "PreMiD" folder and select the "PreMiD.exe" file and click open. <img src="https://i.imgur.com/aHOyv3V.png" width="500px" style="max-width:100%;" />
10. McAfee should now ignore our file, just launch our application and you should be good to go.

### That has not solved my problem
Please open a ticket in [#support](https://discord.premid.app/).