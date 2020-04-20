---
title: Felsökning
description: Allt för att lösa ditt problem
published: true
date: 2020-04-20T11:16:55.141Z
tags:
---

> Se till att du har tillägget **och** programmet installerat! 
> 
> {.is-warning}

### Ladda om sidan
You can press <kbd>CTRL+R</kbd>/<kbd>F5</kbd> (Windows) or <kbd>CMD+R</kbd> (MacOS) on your keyboard too instead of searching for the refresh button.

### Starta om din webbläsare
<kbd>Alt</kbd>+<kbd>F4</kbd> (Windows) eller <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS) gör ett bra jobb också. (Du måste starta din webbläsare igen självklart.)

### Se till att du har aktiverat Discord-spelaktivitet i inställningarna
**Användarinställningar** > **Spelaktivitet** ![gameactivity_edited.png](/gameactivity_edited.png)

### Starta om PreMiD (program)
![quit.png](/quit.png) Du måste starta om PreMiD efteråt.

### Ladda om/starta om Discord
Press <kbd>CTRL+R</kbd> (Windows) or <kbd>CMD+R</kbd> (MacOS) on your keyboard or restart Discord manually.

### Var säker på att Discord inte körs som administratör
Verkligen viktigt. Discord RPC fungerar inte om du kör Discord som administratör.

### Kontrollera om du har antivirus eller brandvägg som körs på din dator
Ibland blockerar antivirusprogram och brandväggar program som skapar / hosting-servrar eller bara ansluter till internet. Vi använder en lokal server för att ta emot och överföra data mellan vår app och förlängning, så om du blockerar appens förmåga att skicka data kommer du förmodligen inte att kunna använda PreMiD.

### Inaktivera dina tillägg
Inaktivera alla dina tillägg och se om det fungerar. Om ja, försök att aktivera dina tillägg steg för steg och berätta för oss vilken addon bröt PreMiD.

### Startar om datorn
Jag hoppas att du vet hur man startar om en dator.

### Installera om PreMiD
Ibland är det något fel med filerna... Handledningar för installationen finns [här](/install).

### Manuell borttagning
Windows:    `C:\Users\USER\AppData\Roaming\`` and delete the folder`PreMiD`.
MacOS:`~/users/USER/~Library/Application Support/`och ta bort mappen`PreMiD``.

### På Ubuntu/Debianbaserade distros
Om du har hämtat Discord via Snapcraft fungerar inte RPC. Du måste avinstallera Snapcraft versionen genom att köra `sudo snap ta bort discord` på en terminal, Hämta [Discords Linux build](https://discordapp.com/api/download?platform=linux) ([eller Discord Canary](https://discordapp.com/api/canary/download?platform=linux)), navigerar sedan till katalogen du hämtade Discord till (vanligtvis `$HOME/Nedladdningar`), installera sedan paketet med `sudo dpkg -i discord-*. eb`.

### Det har inte löst mitt problem
Please open a ticket in [#support](https://discord.gg/WvfVZ8T).