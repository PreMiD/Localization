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
Si prega di aprire un ticket in [#supporto](https://discord.gg/WvfVZ8T).