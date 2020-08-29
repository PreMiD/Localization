---
title: Risoluzione problemi
description: Tutto per risolvere il tuo problema
published: vero
date: 2020-08-29T21:41:02.545Z
tags:
editor: markdown
---

> Assicurati di avere l'estensione **e** l'applicazione installata! 
> 
> {.is-warning}

### Are you using a presence with settings?
Many presences (including `Twitch` and `SoundCloud`) are affected by an extension issue. This issue causes the extension to not grab the default values of settings properly.

To solve this, all you have to do is toggle the topmost setting: ![presencesettings.gif](/presencesettings.gif)

### Reload the page
Puoi anche premere <kbd>CTRL+R</kbd>/<kbd>F5</kbd> (Windows) o <kbd>CMD+R</kbd> (MacOS) sulla tua tastiera invece di cercare il pulsante di aggiornamento.

### Restart your browser
<kbd>Alt</kbd>+<kbd>F4</kbd> (Windows) or <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS) does a good job too. (You have to start your browser again obviously.)

### Make sure that you have enabled Discord Game Activity in settings
**User Settings** > **Game Activity** ![gameactivity_edited.png](/gameactivity_edited.png)

### Restart PreMiD (Application)
![quit.png](/quit.png) You have to restart PreMiD afterwards.

### Reload/restart Discord
Premi <kbd>CTRL+R</kbd> (Windows) o <kbd>CMD+R</kbd> (MacOS) sulla tua tastiera o riavvia Discord manualmente.

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
Windows:    `C:\Users\USER\AppData\Roaming\`` ed elimina la cartella`PreMiD`.
MacOS:`~/users/USER/~Library/Application Support/`and delete the folder`PreMiD``.

### On Ubuntu/Debian based distros
If you have downloaded Discord through Snapcraft, RPC will not work. You have to uninstall the Snapcraft version by executing `sudo snap remove discord` on a terminal, download [Discord's Linux build](https://discordapp.com/api/download?platform=linux) ([or Discord Canary](https://discordapp.com/api/canary/download?platform=linux)), then navigating to the directory you downloaded Discord to (usually `$HOME/Downloads`), then installing the package using `sudo dpkg -i discord-*.deb`.

### McAfee ha rilevato PreMiD come virus (Windows)
Questo è un falso positivo da McAfee e abbiamo riferito loro il problema, per ora è possibile escludere PreMiD dalla scansione facendo i seguenti passaggi:

> Se non ti senti sicuro di eseguire questi passaggi, sentiti libero di creare un ticket in [#support](https://discord.gg/WvfVZ8T) e uno dei nostri agenti di supporto sarà in grado di aiutarti! 
> 
> {.is-warning}

1. Apri l'applicazione McAfee e clicca sull'icona delle impostazioni in alto a destra. <img src="https://i.imgur.com/rPLZn6c.png" width="500px" style="max-width:100%;" />
2. Fare clic su "Elementi in quarantena" (Secondo dall'alto).
3. Espandilo, e clicca sull'icona `>` prima di un elemento con il nome "settings.dat".
4. Assicurati che il percorso includa "AppData\Local\Temp\PreMiD", se così selezionalo e premi su ripristino. <img src="https://i.imgur.com/9nvHmiI.png" width="500px" style="max-width:100%;" />
5. Dopo che è stato ripristinato è possibile chiudere il popup "Elementi in quarantena", quindi premere nuovamente l'icona delle impostazioni in alto a destra.
6. Fare clic su "Scansione in tempo reale" (Terzo dall'alto).
7. Espandilo e clicca su "Aggiungi file".
8. Digita "%appdata%" nella barra degli URL del file manager e premi Invio. <img src="https://i.imgur.com/2bchwLe.png" width="500px" style="max-width:100%;" />
9. Apri la cartella "PreMiD" e seleziona il file "PreMiD.exe" e clicca su apri. <img src="https://i.imgur.com/aHOyv3V.png" width="500px" style="max-width:100%;" />
10. McAfee ora dovrebbe ignorare il nostro file, basta avviare la nostra applicazione e dovrebbe andare tutto bene.

### Questo non ha risolto il mio problema
Si prega di aprire un ticket in [#supporto](https://discord.premid.app/).