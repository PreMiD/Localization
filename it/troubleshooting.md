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

Incluso in questa pagina:
1. [Risoluzione problemi generali](https://docs.premid.app/troubleshooting#general)
2. [Risoluzione problemi Linux](https://docs.premid.app/troubleshooting#linux)
3. [Risoluzione dei problemi MacOS](https://docs.premid.app/troubleshooting#macos)

<a name="general"></a>

# Risoluzione problemi generali
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

### Errore stato PreMiD su discord!
Non ti preoccupare. Premi il tasto <kbd>CTRL+R</kbd> (Windows) o <kbd>CMD+R</kbd> (MacOS) mentre sei concentrato sulla tua finestra di Discord per ricaricarla.

<a name="linux"></a>

# Risoluzione problemi Linux
### Distribuzioni basate su Ubuntu/Debian
Se hai scaricato Discord attraverso Snapcraft, RPC non funzionerà. Devi disinstallare la versione di Snapcraft eseguendo `sudo snap remove discord` su un terminale, scarica [Discord Linux build](https://discordapp.com/api/download?platform=linux) ([o Discord Canary](https://discordapp.com/api/canary/download?platform=linux)), poi navigando nella directory dove hai scaricato Discord (solitamente `$HOME/Downloads`), installa il pacchetto utilizzando `sudo dpkg -i discord-*.deb`. Se AppImage non funziona, dovresti considerare la possibilità di controllare gli altri nostri pacchetti da **[questo link](https://packagecloud.io/premid/linux)**.

### Distribuzioni basate su Arch Linux
Le distribuzioni basate su Arch Linux dovrebbero usare il pacchetto AUR (Arch User Repository) chiamato <code>premid</code> o <code>premid-git</code> (<em x-id="3">ATTENZIONE: Questo repository costruisce premid dal nostro codice sorgente.</em>). Se non si desidera installare un gestore AUR (yay etc., puoi controllare la nostra AppImage che è scaricabile dal nostro <strong x-id="1"><a href="https://github.com/premid/linux/releases">Linux repository</a></strong>.
<em x-id="3">Attenzione: il pacchetto nel repository <strong x-id="1">AUR</strong> non viene mantenuto da noi (come organizzazione PreMiD), ma da altre persone.</em>

### Collegamenti delle porte
Dovresti sapere che <strong x-id="1">PreMiD</strong> si lega alla porta <strong x-id="1">3020</strong>. Ciò è necessario per l'Estensione e la comunicazione dell'applicazione. Se <strong x-id="1">PreMiD</strong> ti mostra un errore su questa porta, dovresti controllare se qualcosa è legato alla porta 3020 eseguendo <code>sudo lsof -i:3020</code> o <code>sudo netstat -tnlp <unk> grep :3020</code> dal tuo terminale. Se qualche processo è associato ad esso, devi assicurarti di liberare la porta e provare ad eseguire <code>PreMiD</code> di nuovo.

### L'AppImage di PreMiD non si avvia al login
Come abbiamo dichiarato nel nostro **repository Linux**, AppImage non può essere lanciato all'accesso. Puoi aggiungerlo all'avvio automatico manualmente facendo questi passaggi:
1. Crea un file chiamato <strong x-id="1">rc.local</strong> nella directory <code>/etc</code>.
2. Apri questo file nel tuo editor preferito e incolla il codice dato cambiando alcune cose:
```bash
#!/bin/bash
# Richiesto per essere eseguito come /bin/bash (se si utilizza zsh ecc. puoi cambiarlo.)

# Esempio: /home/PreMiD/PreMiD*.AppImage
<directory to appimage>/PreMiD*.AppImage

exit 0
```
3. Salva il file e chmod come eseguibile `sudo chmod a+x /etc/rc.local`.
4. Riavviare il PC e PreMiD AppImage dovrebbe avviarsi all'accesso.

<a name="macos"></a>

# Risoluzione problemi Linux
### Errore nella creazione della cartella
<img src="https://i.imgur.com/td92lf6.png" width="300px" style="max-width:100%;" />

Se ottieni questo errore, significa che il tuo account non ha i permessi di amministratore e devi creare la cartella manualmente facendo questi passaggi:
1. Apri ricerca e apri la cartella **Applicazioni**.
2. Fare clic destro sullo spazio vuoto e fare clic su **Crea cartella**.
3. A questa cartella assegna il nome `PreMiD` (ricorda le lettere maiuscole).
4. Apri nuovamente l'installer.

# Questo non ha risolto il mio problema
Si prega di aprire un ticket in [#supporto](https://discord.premid.app/).