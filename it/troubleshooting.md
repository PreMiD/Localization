---
title: Risoluzione problemi
description: Tutto per risolvere il tuo problema
published: true
date: 2021-02-08T21:30:58.603Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:03:54.865Z
---

> Assicurati di avere l'estensione **e** l'applicazione installata! 
> 
> {.is-warning}

Included on this page:
1. [General troubleshooting](https://docs.premid.app/troubleshooting#general)
2. [Linux troubleshooting](https://docs.premid.app/troubleshooting#linux)
3. [MacOS troubleshooting](https://docs.premid.app/troubleshooting#macos)

<a name="general"></a>

# General troubleshooting
### Ricarica la pagina
Puoi anche premere <kbd>CTRL+R</kbd>/<kbd>F5</kbd> (Windows) o <kbd>CMD+R</kbd> (MacOS) sulla tua tastiera invece di cercare il pulsante di aggiornamento.

### Stai usando l'app di Discord?
PreMiD **non** è disponibile sulla versione del browser di Discord, è necessario scaricare l'app [qui](https://discord.com/download).

### Assicurati di aver abilitato l'attività di gioco Discord nelle impostazioni
**Impostazioni utente** > **Attività di gioco** ![gameactivity_edited.png](/gameactivity_edited.png)

### Assicurati che Discord NON sia in esecuzione come amministratore
Davvero importante. Discord RPC non funzionerà se si esegue Discord come amministratore.

### Stai usando una presenza con le impostazioni?
Molte presenze (tra cui `Twitch` e `SoundCloud`) sono affette da un problema di estensione. Questo problema fa sì che l'estensione non controlli correttamente i valori predefiniti delle impostazioni.

Per risolvere questo problema, tutto quello che devi fare è attivare/disattivare l'impostazione in cima: ![presencesettings.gif](/presencesettings.gif)

### Riavvia il browser
<kbd>Alt</kbd>+<kbd>F4</kbd> (Windows) o <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS) fa anche un buon lavoro. (È necessario riavviare il browser di nuovo, ovviamente.,)

### Riavvia PreMiD (Applicazione)
![quit.png](/quit.png) È necessario riavviare PreMiD in seguito.

### Ricarica/riavvia Discord
Premi <kbd>CTRL+R</kbd> (Windows) o <kbd>CMD+R</kbd> (MacOS) sulla tua tastiera o riavvia Discord manualmente.

### Controlla se hai antivirus o firewall in esecuzione sul tuo computer
A volte programmi antivirus e firewall bloccano le applicazioni che stanno creando/hostando server o semplicemente che si connettono ad Internet. Usiamo un server locale per ricevere e passare i dati tra la nostra app e l'estensione, quindi se bloccassi l'abilità dell'app di passare i dati probabilmente non riusciresti ad usare PreMiD.

### Disabilita i tuoi addons
Disabilita tutti i tuoi addons e scopri se funziona. Se sì, prova ad abilitare i tuoi addons passo dopo passo e dirci quale addon ha corrotto PreMiD.

### Riavvio del computer
Spero che tu sappia riavviare un computer.

### Reinstallazione PreMiD
A volte c'è qualcosa di sbagliato con i file... I tutorial per l'installazione possono essere trovati [qui](/install).

### Rimozione manuale
Windows:    `C:\Users\USER\AppData\Roaming\`` ed elimina la cartella`PreMiD`.
MacOS:`~/users/USER/~Library/Application Support/`ed elimina la cartella`PreMiD``.

### McAfee ha rilevato PreMiD come virus (Windows)
Questo è un falso positivo da McAfee e abbiamo riferito loro il problema, per ora è possibile escludere PreMiD dalla scansione facendo i seguenti passaggi:

> Se non ti senti sicuro di eseguire questi passaggi, sentiti libero di creare un ticket in [#support](https://discord.premid.app/) e uno dei nostri agenti di supporto sarà in grado di aiutarti! 
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

### PreMiD status bugged on discord!
Don't worry. Press the <kbd>CTRL+R</kbd> (Windows) or <kbd>CMD+R</kbd> (MacOS) keybind while focused on your discord window to reload it.

<a name="linux"></a>

# Linux troubleshooting
### Ubuntu/Debian based distros
Se hai scaricato Discord attraverso Snapcraft, RPC non funzionerà. You have to uninstall the Snapcraft version by executing `sudo snap remove discord` on a terminal, download **[Discord's Linux build](https://discordapp.com/api/download?platform=linux)** (**[or Discord Canary](https://discordapp.com/api/canary/download?platform=linux)**), then navigating to the directory you downloaded Discord to (usually `$HOME/Downloads`), then installing the package using `sudo dpkg -i discord-*.deb`. If AppImage doesn't work, you should consider checking our other packages by **[this link](https://packagecloud.io/premid/linux)**.

### Arch Linux based distros
Las distribuciones basadas en Arch Linux deben usar el paquete AUR (Arch User Repository) que se llama <code mark = "crwd-mark"> premid </code> o <code mark = "crwd-mark"> premid-git </code> ( <em x-id = "3" mark = "crwd-mark"> ADVERTENCIA: Este repositorio crea premid a partir de nuestro código fuente. </em>). Si no desea instalar un administrador AUR (yay, etc.), puede consultar nuestra AppImage que se puede descargar desde nuestro <strong x-id = "1" mark = "crwd-mark"> <a href = " https://github.com/premid/linux/releases">Repositorio de Linux </a> </strong>.
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

# Questo non ha risolto il mio problema
Please open a ticket in [#support](https://discord.premid.app/).