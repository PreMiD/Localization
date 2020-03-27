---
title: Risoluzione problemi
description: Tutto per risolvere il tuo problema
published: true
date: 2020-02-12T22:08:56.972Z
tags: 
---

> Assicurati di avere l'estensione **e** l'applicazione installata! 
> 
> {.is-warning}

### Ricarica la pagina
Puoi premere su <kbd>Strg+R</kbd>/<kbd>F5</kbd> (Windows) o <kbd>CMD+R</kbd> (MacOS) sulla tua tastiera invece di cercare il pulsante di aggiornamento.

### Riavvia il tuo browser
<kbd>Alt</kbd>+<kbd>F4</kbd> (Windows) o <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS) fa un buon lavoro. (È necessario riavviare il browser ovviamente.)

### Assicurati di aver attivato le attività di gioco di Discord nelle impostazioni
**Impostazioni utente** > **Attività di gioco** ![gameactivity_ed.png](/gameactivity_edited.png)

### Riavvia PreMiD (Applicazione)
![quit.png](/quit.png) È necessario riavviare PreMiD in seguito.

### Ricarica/riavvia Discord
Premi <kbd>Strg+R</kbd> (Windows) o <kbd>CMD+R</kbd> (MacOS) sulla tastiera o riavvia Discord manualmente.

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
Windows:    `C:\Users\USER\Program (x86)\`` ed elimina la cartella`PreMiD`.
MacOS:`~/users/USER/~Libreria/Supporto Applicazioni/`ed elimina la cartella`PreMiD``.

### Sulle distros basate su Ubuntu/Debian
Se hai scaricato Discord tramite Snapcraft, RPC non funzionerà. È necessario disinstallare la versione di Snapcraft eseguendo `sudo snap remove discord` su un terminale, scarica [versione Linux di Discord](https://discordapp.com/api/download?platform=linux) ([o Canario di Discord](https://discordapp.com/api/canary/download?platform=linux)), poi vai alla directory nella quale hai scaricato Discord (di solito `$HOME/Downloads`), poi installare il pacchetto usando `sudo dpkg -i discord-*. eb`.

### Non ha risolto il mio problema
Si prega di aprire un ticket in [#support](https://discord.gg/PreMiD).