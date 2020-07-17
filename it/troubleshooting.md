---
title: Risoluzione problemi
description: Tutto per risolvere il tuo problema
published: vero
date: 2020-07-17T19:53:39.991Z
tags:
editor: markdown
---

> Assicurati di avere l'estensione **e** l'applicazione installata! 
> 
> {.is-warning}

### Ricarica la pagina
Puoi anche premere <kbd>CTRL+R</kbd>/<kbd>F5</kbd> (Windows) o <kbd>CMD+R</kbd> (MacOS) sulla tua tastiera invece di cercare il pulsante di aggiornamento.

### Riavvia il tuo browser
<kbd>Alt</kbd>+<kbd>F4</kbd> (Windows) o <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS) fa un buon lavoro. (È necessario riavviare il browser ovviamente.)

### Assicurati di aver attivato le attività di gioco di Discord nelle impostazioni
**Impostazioni utente** > **Attività di gioco** ![gameactivity_ed.png](/gameactivity_edited.png)

### Riavvia PreMiD (Applicazione)
![quit.png](/quit.png) È necessario riavviare PreMiD in seguito.

### Ricarica/riavvia Discord
Premi <kbd>CTRL+R</kbd> (Windows) o <kbd>CMD+R</kbd> (MacOS) sulla tua tastiera o riavvia Discord manualmente.

### Assicurati che Discord non stia funzionando come amministratore
Davvero importante. Discord RPC non funzionerà se esegui Discord come amministratore.

### Controlla se sul tuo computer sono attivi antivirus o firewall
A volte i programmi antivirus e i firewall bloccano applicazioni che stanno creando/ospitando server o semplicemente collegandosi a Internet. Usiamo un server locale per ricevere e trasmettere dati tra la nostra app ed estensione, Quindi se bloccherai la possibilità dell'app di passare dati probabilmente non sarai in grado di utilizzare PreMiD.

### Disabilita i tuoi addon
Disabilita tutti i tuoi addons e vedi se funziona. Se sì, prova a abilitare i tuoi addons passo dopo passo e dirci quale addon ha rotto PreMiD.

### Riavvio del computer
Spero che tu sappia come riavviare un computer.

### Reinstallazione PreMiD
A volte c'è qualcosa che non va con i file... I tutorial per l'installazione possono essere trovati [qui](/install).

### Rimozione manuale
Windows:    `C:\Users\USER\AppData\Roaming\`` ed elimina la cartella`PreMiD`.
MacOS:`~/users/USER/~Libreria/Supporto Applicazioni/`ed elimina la cartella`PreMiD``.

### Sulle distros basate su Ubuntu/Debian
Se hai scaricato Discord tramite Snapcraft, RPC non funzionerà. È necessario disinstallare la versione di Snapcraft eseguendo `sudo snap remove discord` su un terminale, scarica [versione Linux di Discord](https://discordapp.com/api/download?platform=linux) ([o Canario di Discord](https://discordapp.com/api/canary/download?platform=linux)), poi vai alla directory nella quale hai scaricato Discord (di solito `$HOME/Downloads`), poi installare il pacchetto usando `sudo dpkg -i discord-*. eb`.

### McAfee detected PreMiD as virus (Windows)
This is a false positive from McAfee and we have reported the issue to them, for now you can exclude PreMiD from the scan by doing the following steps:

> If you do not feel confident taking these steps, feel free to make a ticket in [#support](https://discord.gg/WvfVZ8T) and one of our Support Agents will be able to help you out! 
> 
> {.is-warning}

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
Si prega di aprire un ticket in [#supporto](https://discord.gg/WvfVZ8T).