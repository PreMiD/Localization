---
title: Sviluppo Presence
description: 
published: true
date: 2020-02-16T14:20:44.656Z
tags: 
---

> Tutte le presenze sono ora memorizzate qui: https://github.com/PreMiD/Presences 
> 
> {.is-info}

La versione `2.x` introduce il [negozio di presenze](https://premid.app/store). Gli utenti ora hanno la possibilità di aggiungere e rimuovere manualmente le loro presenze preferite tramite l'interfaccia utente del [sito web](https://premid.app/).

# Linee guida
> Se non segui tutte le linee guida, la tua presenza o richiesta pull verrà eliminata da github. 
> 
> {.is-danger}

## Creazione

Prima di iniziare a lavorare sulla tua presenza, tieni in mente il seguente elenco.
- La pull request deve essere completa, è necessario avere una struttura del file corretta. Compresa la cartella `dist` e i file `presence.js` e `metadata.json`.
- La presenza **deve** essere correlata al sito web che hai scelto.
- La presenza non deve essere di siti web illegali. Tra questi, lo stressor, la droga, la pornografia infantile, ecc...
- I metadati di presenza devono avere contenuti ben scritti, inclusi titoli e descrizioni validi.
- Il media che includi (icona/miniatura) deve essere correlato al sito web e deve essere comprensibile in termini di dimensioni e qualità.
- La struttura del file deve essere pulita e gestita, non avere file casuali che non forniscono nulla alla funzione della presenza.
- La presenza **non deve** avere alcuna intenzione dannosa. Queste includono informazioni private rubate/disperse, influenzando negativamente il comportamento del sito web, ecc...
- Se si progetta una presenza per un sito web e il sito web cambia in futuro, sei **AR** responsabile di aggiornare di nuovo la presenza per funzionare come previsto. Se non lo risolvete entro un lasso di tempo accettabile, gli altri sviluppatori di presenza sono autorizzati a **sovrascrivere** la tua presenza per conformarsi alle modifiche.
- La presenza deve essere testata prima della pubblicazione per confermare che tutto funzioni come previsto.
- La tua presenza deve avere immagini e descrizioni SFW senza considerare se sono NSFW o no. Se la tua presenza riguarda un sito web `nsfw` , aggiungi il tag `nsfw` ai tuoi metadati.
- La tua presenza deve **NON** essere per domini gratuiti o host (ad es. .TK, [tutti i domini Freenom liberi], F.GD, ecc...), possono essere fatte eccezioni se viene presentata una prova che mostra che è un dominio a pagamento.
- I campi `smallImageKey` e `smallImageText` hanno lo scopo di fornire un contesto aggiuntivo / secondario (come "playing"/"paused" per siti di video, "navigando" per siti regolari e altri casi). Non sei autorizzato a promuovere profili di Discord o tutto ciò che non è correlato a PreMiD.
- I requisiti per i loghi sono 1:1 (Quadrato) in 512px, miniature, tuttavia, le schede promozionali dovrebbero essere [ampie](https://i.imgur.com/3QfIc5v.jpg) o semplicemente [screenshots](https://i.imgur.com/OAcBmwW.png) se il primo non è disponibile.
- Le presenze dovrebbero avere almeno 1 tag, questo è un requisito di progettazione e potrebbe essere facoltativo in futuro.
- Il campo `url` non deve includere `http://` o `https://`, nessuno dei parametri (ad es. una presenza per `https://www.google.com/search?gws_rd=ssl` avrà solo `www.google.com` nel `url` campo).
- Descrizioni ed tag dovrebbero sempre essere in array, anche quando è un solo elemento. Il campo `url` , tuttavia, dovrebbe essere una stringa solo se è un dominio.
- Siti instabili che cambiano costantemente le API/domini, Elementi HTML casuali o ancora in fase di sviluppo pesante non sono permessi e verranno rimossi dal negozio.

## Modifica

In alcune situazioni, le presenze possono comportarsi in modo inaspettato o potrebbero utilizzare alcuni piccoli cambiamenti per migliorarne la funzionalità. Ecco una lista compilata che devi seguire per modificare le presenze.
- Non ti è consentito cambiare il creatore della presenza. Questo è applicabile solo se sei autorizzato a riscriverlo. Puoi aggiungerti come collaboratore [](/dev/presence/metadata).
- Assicurati che le modifiche siano utili. Queste possono includere correzioni (codice e typos), aggiunte (descrizioni e tag), ecc...
- Conferma che le tue modifiche funzionano prima di pubblicare. Non creare richieste pull senza conoscere l'esito delle tue modifiche.
- Non ri-etichettare/sovrascrivere completamente una presenza a meno che non sia consentita da un `Verifier di Presence` o un membro dello staff.

# Verifica
> Quando effettui richieste pull per aggiungere o modificare presenze esistenti, devi includere uno screenshot. Tuttavia, le modifiche ai metadati di una presenza/tsconfig non richiedono uno screenshot. *Lo screenshot deve essere caricato direttamente su github con la richiesta di pull, non utilizzare siti di condivisione di immagini di terze parti.* 
> 
> {.is-danger}

Affinché la tua presenza raggiunga i negozi, deve passare attraverso un processo su github per confermare che funziona come previsto. Ecco un paio di cose da controllare quando fai la tua richiesta di pull.

Il nostro team di verifica della presenza ha il proprio ruolo, fai attenzione a `Presence Verifier` sul server discord per sapere chi è coinvolto.

1. Ci vogliono due verificatori per confermare che la tua presenza sia conforme agli standard. Se per caso ricevi richieste di modifica, fai uno sforzo adeguato per risolverlo o non verrà aggiunto.
2. Se richiediamo modifiche e la tua Pull Request supera **7 giorni di inattività** senza effettuare i necessari cambiamenti. Noi saremo costretti a chiuderla.
3. Ti è consentito fare screenshot delle modifiche apportate con l'aiuto di un altro utente. ( es. l'autore nel caso in cui tu non possa accedervi per qualsiasi motivo).
4. Se è un aggiornamento o una patch, lo screenshot deve mostrare le nuove aggiunte che funzionano, non le vecchie funzionalità delle precedenti pull requests.
5. Gli screenshot forniti dovrebbero essere reali, non modificati.
6. Qualsiasi codice contribuito che viene unito a questo repository sarà concesso in licenza sotto **Mozilla Public License 2.0**.


Dopo che tutte le recensioni corrette saranno state soddisfatte, la richiesta pull verrà unita al negozio.

# Struttura (TypeScript)
Puoi scegliere se programmare il tuo Presence con [JavaScript](https://www.javascript.com/) o  [TypeScript](https://www.typescriptlang.org/). [TypeScript](https://www.typescriptlang.org/) ha alcune definizioni dei tipi più piccanti, quindi correggere e identificare i bug è molto più facile. Se vuoi usare solo [JavaScript](https://www.javascript.com/) puoi saltare alla [Struttura (JavaScript)](/dev/presence#structure-javascript).

## Installazione
1. Install [Git](https://git-scm.com/).
2. Installa [Nodo](https://nodejs.org/en/) (viene fornito con [npm](https://www.npmjs.com/)).
3. Installa [TypeScript](https://www.typescriptlang.org/index.html#download-links) (apri un terminale e `npm install -g typescript`).

## Clonando il progetto
1. Apri un terminale e digita `git clone https://github.com/PreMiD/Presences`.
2. Scegli una cartella di tua scelta.
3. Aprilo con l'editor di codice.

## Creazione di cartelle e file

1. Crea una cartella con il nome **** (non un URL) del servizio che vuoi supportare.
2. Crea un `presence.ts` e un file `tsconfg.json` all'interno.
3. Crea una cartella chiamata `dist` all'interno.
4. Crea un file `metadata.json` all'interno della cartella `dist`.

## Riempimento nel file tsconfig.json

Inserisci il seguente codice nel file `tsconfg.json`.
```javascript
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
}
```
Per saperne di più sulla configurazione di TypeScript, clicca [qui](/dev/presence/tsconfig).

## Compilazione nel file metadata.json

Clicca [qui](/dev/presence#filling-in-the-metadatajson-file-2) per vedere come compilarlo. Sarai in grado di cliccare di nuovo facilmente in fondo alla spiegazione.

Abbiamo creato un `metadata.json` creatore di file per le pepe pigre [qui](https://eggsy.codes/projects/premid/mdcreator).

## Guida introduttiva

```javascript
var presence = new Presence({
    clientId: "000000000000000000", //The client ID of the application created at https://discordapp. om/sviluppatori/applicazioni
    mediaKeys: false //Abilita l'uso e il rilevamento dei tasti multimediali preme
}),

stringhe = presenza. etStrings({
    play: "presence.playback.playing",
    pausa: "presence.playback. rosso"
    ///Puoi usare questo per ottenere stringhe tradotte
});

/*

function myOutsideHeavyLiftingFunction(){
    //Grab ed elaborare tutti i tuoi dati qui

    // element grabs //
    // chiamate api //
    // set di variabile //
}

setInterval(10000, myOutsideHeavyLiftingFunction); 
//Esegui la funzione separata dall'evento UpdateData ogni 10 secondi per ottenere e impostare le variabili che UpdateData raccoglie

*/


presenze. n("UpdateData", async () => {
    /*UpdateData spara sempre, e quindi dovrebbe essere utilizzato come ciclo di aggiornamento, o `tick`. Questo si chiama più volte un secondo laddove possibile.

    Si consiglia di impostare un'altra funzione al di fuori di questa funzione evento che cambierà i valori delle variabili e farà il sollevamento pesante se si chiamano i dati da un'API. /

    var presenceData = {
        largeImageKey: "key", /*La chiave (nome file) dell'immagine grande sulla presenza. Questi sono caricati e nominati nella sezione Rich Presence della tua applicazione, chiamato Art Assets*/
        Piccola ImageKey: "key", /*La chiave (nome file) dell'immagine grande sulla presenza. Questi sono caricati e nominati nella sezione Rich Presence della tua applicazione, chiamato Art Assets*/
        smallImageText: "Some hover text", //Il testo visualizzato quando si passa il mouse sopra la piccola immagine
        dettagli: "Nome pagina di navigazione", //La sezione superiore del testo presenza
        stato: "Sezione lettura A", //La sezione inferiore del testo presenza
        startTimestamp: 1577232000, //The unix epoch timestamp for when to start count from
        endTimestamp: 1577151472000 //If you want to show Time left instead of Elapsed, questo è il timestamp dell'epoca unix al quale termina il timer
    }; /*Facoltativamente, puoi impostare una largeImageKey qui e cambiare il resto come sotto-proprietà variabili, ad esempio presenceSata. ype = "blahblah"; esempi di tipo: dettagli, stato, ecc.*/

    se (presenzaData. etails == null) {
        //Questo si accenderà se non si impostano i dettagli della presenza
        . etTrayTitle(); /Cancella il titolo del vassoio per la presenza degli utenti mac
        . etAttività(); /*Aggiorna la presenza senza dati, quindi cancellala e rendi l'immagine grande come icona dell'applicazione di Discord, e il testo del nome dell'applicazione di Discord*/
    } else {
        //Questo si attiverà se imposti i dettagli della presenza
        presenze. etActivity(presenceData); /Aggiorna la presenza con tutti i valori dall'oggetto presenceData
    }
});
```
Puoi copiare questo nel tuo file `presence.ts` e modificare i valori. Impostando tutti i valori si eseguono all'interno dell'evento updataData.

Per esempio, suggeriamo di esaminare il codice di presenze come: 1337x o 9GAG.

Per ulteriori informazioni sulla classe Presence clicca [qui](/dev/presence/class).

## Impossibile ottenere alcuni dati?!

Molti siti web usano [iframe](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([inline](https://en.wikipedia.org/wiki/HTML_element#Frames)). Questi tag html possono contenere fonti multiple come i video. Ma non sono rilevanti ogni volta. Alcuni vengono nascosti o non vengono utilizzati attivamente. Spunta la casella se puoi estrarre le informazioni di cui hai bisogno, senza di esse prima di fare lavoro inutile.

1. Controllali tramite console del browser (assicurati di essere nella scheda **Elementi**).
2. Ricerca (<kbd>CTRL</kbd>+<kbd>F</kbd> (Windows) o <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
3. Esegui `document.querySelectorAll("iframe")`.

Se trovi che i tuoi dati sono in un iFrame devi eseguire le seguenti operazioni:
1. Crea un file `iframe.ts`.
2. Imposta iFrame su `true` nel tuo file di metadati.
3. Compilazione nel tuo file iFrame.
```javascript
var iframe = new iFrame();
iframe. n("AggiornaData", async () => {
  /*
  Ottieni tutti i dati necessari dall'iFrame salvandoli in variabili
  e poi inviati utilizzando iframe. fine
  */
  iframe.send({ /invio dati
    video: video,
    tempo: video. urazione
  }); 
});
```
4. Fare in modo che il tuo file di presenza riceva dati dal file iFrame.
```javascript
presence.on("iFrameData", data => {
  iFrameVideo = data.video;
  currentTime = data.time;
});
```
**Nota:** Questo deve essere inserito al di fuori dell'evento updateDato.
## Compilazione
Apri una console nella cartella e digita `tsc -w` per compilare la `presence.ts` nella cartella `/dist`.

# Struttura (JavaScript)
## Clonando il progetto
1. Install [Git](https://git-scm.com/).
2. Apri un terminale e digita `git clone https://github.com/PreMiD/Presences`.
3. Scegli una cartella di tua scelta.
4. Aprilo con l'editor di codice.

## Creazione di cartelle e file

1. Crea una cartella con il nome **** (non un URL) del servizio che vuoi supportare.
3. Crea una cartella chiamata `dist` all'interno.
4. Crea un file `metadata.json` e un file `presence.js` all'interno della cartella `dist`.

## Compilazione nel file metadata.json

Clicca [qui](/dev/presence#filling-in-the-metadatajson-file-2) per vedere come compilarlo. Sarai in grado di cliccare di nuovo facilmente in fondo alla spiegazione.

Abbiamo creato un `metadata.json` creatore di file per le pepe pigre [qui](https://eggsy.codes/projects/premid/mdcreator).

## Guida introduttiva

```javascript
var presence = new Presence({
    clientId: "000000000000000000", //The client ID of the application created at https://discordapp. om/sviluppatori/applicazioni
    mediaKeys: false //Abilita l'uso e il rilevamento dei tasti multimediali preme
}),

stringhe = presenza. etStrings({
    play: "presence.playback.playing",
    pausa: "presence.playback. rosso"
    ///Puoi usare questo per ottenere stringhe tradotte
});

/*

function myOutsideHeavyLiftingFunction(){
    //Grab ed elaborare tutti i tuoi dati qui

    // element grabs //
    // chiamate api //
    // set di variabile //
}

setInterval(10000, myOutsideHeavyLiftingFunction); 
//Esegui la funzione separata dall'evento UpdateData ogni 10 secondi per ottenere e impostare le variabili che UpdateData raccoglie

*/


presenze. n("UpdateData", () => {
    //UpdateData spara sempre, e quindi dovrebbe essere utilizzato come ciclo di aggiornamento, o `tick`. Questo si chiama più volte un secondo laddove possibile.

    //Si consiglia di impostare un'altra funzione al di fuori di questa funzione evento che cambierà i valori delle variabili e farà del sollevamento pesante se si chiamano i dati da un'API.

    var presenceData = {
        largeImageKey: "key", /*La chiave (nome file) dell'immagine grande sulla presenza. Questi sono caricati e nominati nella sezione Rich Presence della tua applicazione, chiamato Art Assets*/
        Piccola ImageKey: "key", /*La chiave (nome file) dell'immagine grande sulla presenza. Questi sono caricati e nominati nella sezione Rich Presence della tua applicazione, chiamato Art Assets*/
        smallImageText: "Some hover text", //Il testo visualizzato quando si passa il mouse sopra la piccola immagine
        dettagli: "Nome pagina di navigazione", //La sezione superiore del testo presenza
        stato: "Sezione lettura A", //La sezione inferiore del testo presenza
        startTimestamp: 1577232000, //The unix epoch timestamp for when to start count from
        endTimestamp: 1577151472000 //If you want to show Time left instead of Elapsed, questo è il timestamp dell'epoca unix al quale termina il timer
    }; /*Facoltativamente, puoi impostare una largeImageKey qui e cambiare il resto come sotto-proprietà variabili, ad esempio presenceSata. ype = "blahblah"; esempi di tipo: dettagli, stato, ecc.*/

    se (presenzaData. etails == null) {
        //Questo si accenderà se non si impostano i dettagli della presenza
        . etTrayTitle(); /Cancella il titolo del vassoio per la presenza degli utenti mac
        . etAttività(); /*Aggiorna la presenza senza dati, quindi cancellala e rendi l'immagine grande come icona dell'applicazione di Discord, e il testo del nome dell'applicazione di Discord*/
    } else {
        //Questo si attiverà se imposti i dettagli della presenza
        presenze. etActivity(presenceData); /Aggiorna la presenza con tutti i valori dall'oggetto presenceData
    }
});
```
Puoi copiare questo nel tuo file `presence.js` e modificare i valori. Impostando tutti i valori si eseguono all'interno dell'evento updataData.

Per esempio, suggeriamo di esaminare il codice di presenze come: 1337x o 9GAG.

Per ulteriori informazioni sulla classe Presence clicca [qui](/dev/presence/class).

## Impossibile ottenere alcuni dati?!

Molti siti web usano [iframe](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([inline](https://en.wikipedia.org/wiki/HTML_element#Frames)). Questi tag html possono contenere fonti multiple come i video. Ma non sono rilevanti ogni volta. Alcuni vengono nascosti o non vengono utilizzati attivamente. Spunta la casella se puoi estrarre le informazioni di cui hai bisogno, senza di esse prima di fare lavoro inutile.

1. Controllali tramite console del browser (assicurati di essere nella scheda **Elementi**).
2. Ricerca (<kbd>CTRL</kbd>+<kbd>F</kbd> (Windows) o <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
3. Esegui `document.querySelectorAll("iframe")`.

Se trovi che i tuoi dati sono in un iFrame devi eseguire le seguenti operazioni:
1. Crea un file `iframe.js`.
2. Imposta iFrame su `true` nel tuo file di metadati.
3. Compilazione nel tuo file iFrame.
```javascript
var iframe = new iFrame();
iframe. n("AggiornaData", () => {
    /*
    Recupera tutti i dati necessari dall'iFrame salvandoli nelle variabili
    e poi inviali usando iframe. fine
    */
    iframe. end({ /invio dati
        video: video,
        tempo: video. urazione  
    });
});
```
4. Fare in modo che il tuo file di presenza riceva dati dal file iFrame.
```javascript
presence.on("iFrameData", data => {
  iFrameVideo = data.video;
  currentTime = data.time;
});
```
**Nota:** Questo deve essere inserito al di fuori dell'evento updateDato.
# Compilazione nel file metadata.json
Abbiamo creato un `metadata.json` creatore di file per le pepe pigre [qui](https://eggsy.codes/projects/premid/mdcreator). Si suggerisce ancora di leggerlo per farti sapere come funziona.

```javascript
{
  "author": {
    "name": "USER",
    "id": "ID"
  },
  "contributori": [{
    "nome": "UTENTE",
    "id": "ID"
  }],
  "servizio": "SERVIZI",
  "description": {
    "en": "DESCRIPTION"
  },
  "url": "URL",
  "version": "VERSION",
  "logo": "URL",
  "thumbnail": "URL",
  "color": "#HEX000",
  "tags": ["CATEGORY", "TAG"],
  "categoria": "CATEGORY",
  "regExp": "REGEXP",
  "iFrameRegExp": "REGEXP",
  "iframe": false
}
```

Copia il codice qui sopra e inseriscilo nel file `metadata.json`. Ora è necessario modificare i valori delle proprietà. Si prega di notare che le seguenti proprietà sono facoltative per avere nei tuoi metadati `. file` , se non hai intenzione di usarli è necessario rimuoverli.
- `collaboratori`
- `regExp`
- `iframe`
- `iFrameRegExp`

**Chiarimento di alcuni preset di valore:**
<table>
  <thead>
    <tr>
      <th style="text-align:left">Variabile</th>
      <th style="text-align:left">Descrizione</th>
      <th style="text-align:left">Tipo</th>
      <th style="text-align:left">Opzionale</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>autore</b>
      </td>
      <td style="text-align:left">Dovrebbe contenere un oggetto con <code>nome</code> e <code>id</code> dello sviluppatore presenza. Il nome utente di Discord è senza identificatore(#0000). L'id utente <code></code> può essere copiato da Discord abilitando la modalità
        dello sviluppatore e facendo click destro sul tuo profilo.</td>
      <td style="text-align:left"><code>Oggetto</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>collaboratori</b>
      </td>
      <td style="text-align:left">Dovrebbe contenere un oggetto con <code>nome</code> e <code>id</code> dello sviluppatore presenza. Il nome utente di Discord è senza identificatore(#0000). L'id utente <code></code> può essere copiato da Discord abilitando la modalità
        dello sviluppatore e facendo click destro sul tuo profilo.</td>
      <td style="text-align:left"><code>Schieramento&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>sì</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>servizio</b>
      </td>
      <td style="text-align:left">Il titolo del servizio che supporta questa presenza. <br>(Deve essere lo stesso nome della cartella in cui si trova tutto)</td>
      <td style="text-align:left"><code>Stringa</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>descrizione</b>
      </td>
      <td style="text-align:left">Breve descrizione della presenza, puoi usare la descrizione del servizio
        se non hai idee. La tua descrizione deve avere valori di coppia chiave che indicano la lingua, e la descrizione in quella specifica lingua. Crea descrizioni con le lingue <i>che conosci</i>, i nostri traduttori modificheranno il file di metadati.</td>
      <td style="text-align:left"><code>Oggetto</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Url</b>
      </td>
      <td style="text-align:left">URL del servizio.<br><b>Esempio:</b><code>vk. om</code><br>
        <b>Questo URL deve corrispondere all'URL del sito web in quanto esso rileva se questo è o meno il sito web a cui inserire lo script.</b><br> Fai <b>NON</b> aggiungere <code>https://</code> o <code>http://</code> all'interno dell'URL o uno slash alla fine:
<code>https://premid. pp/</code> -> <code>premid.app</code><br>
<b>Nota</b>: Alcune URL potrebbero avere <code>www.</code> o altro di fronte al loro dominio. NON <b></b> dimenticare di aggiungerlo!<br>
È possibile aggiungere più URL facendo quanto segue:<br>
<code>["URL1", "URL2", "ETC. ]</code><br>
Puoi anche usare regExp conosciuto come Regex per questo compito, spiegato più avanti.
      </td>
      <td style="text-align:left"><code>Stringa, Schieramento&lt;String&gt;</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b>
      </td>
      <td style="text-align:left">Una stringa di espressione regolare utilizzata per abbinare gli url.<br>
      regExp o anche conosciuto come Regex, può essere utilizzato se un sito web ha più sottodomini.<br>
A tal fine è possibile utilizzare la seguente Esperienza:<br>
<code>([a-z0-9]+)[.]dominio[.]TLD"</code><br>
TLD in piedi per il dominio di primo livello per l'assaggio: . om .net<br> 
<code>([a-z0-9]+)</code> significa qualsiasi cosa da uno a z e da 0 a 9.<br>
        Puoi testare la tua Esperienza regolare a <a href="https://regex101.com/">Regex101</a></td>
      <td style="text-align:left"><code>Stringa</code>
      </td>
      <td style="text-align:left"><code>sì</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>versione</b>
      </td>
      <td style="text-align:left">Versione della sua presenza.</td>
      <td style="text-align:left"><code>Stringa</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>logo</b>
      </td>
      <td style="text-align:left">Link al servizio&apos;s logotype.</td>
      <td style="text-align:left"><code>Stringa</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b>
      </td>
      <td style="text-align:left">Link alla tua miniatura di presenza.</td>
      <td style="text-align:left"><code>Stringa</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>colore</b>
      </td>
      <td style="text-align:left">Valore <code>#HEX</code>. Consigliamo di utilizzare un colore primario del servizio
        che la vostra presenza supporta.</td>
      <td style="text-align:left"><code>Stringa</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>tag</b>
      </td>
      <td style="text-align:left">Array con i tag, aiuteranno gli utenti a cercare la tua presenza sul sito.</td>
      <td
      style="text-align:left"><code>Stringa, Schieramento&lt;String&gt;</code>
        </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Categoria</b>
      </td>
      <td style="text-align:left">Una stringa utilizzata per rappresentare la categoria sotto la quale la presenza cade Vedi le catergorie valide <a href="https://docs.premid.app/dev/presence/metadata#presence-categories">qui</a>.</td>
      <td style="text-align:left"><code>Stringa</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b>
      </td>
      <td style="text-align:left">Definisce se <code>iFrame</code> sono usati</td>
      <td style="text-align:left"><code>Boolean</code>
      </td>
      <td style="text-align:left"><code>sì</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b>
      </td>
      <td style="text-align:left">Un selettore di espressione regolare che seleziona gli iframe da inserire. Vedi regExp per maggiori informazioni.</td>
      <td style="text-align:left"><code>Stringa</code>
      </td>
      <td style="text-align:left"><code>sì</code>
      </td>
    </tr>
  </tbody>
</table>

Clicca [qui](/dev/presence#filling-in-the-metadatajson-file) per tornare alla spiegazione del TypeScript. Clicca [qui](/dev/presence#filling-in-the-metadatajson-file-1) per tornare alla spiegazione di JavaScript.

# Caricamento della presenza
1. Apri il popup e tieni premuto il pulsante <kbd>Shift</kbd> sulla tastiera.
2. **Carica Presenza** apparirà nella sezione Presenze.
3. Clicca su di esso mentre tieni premuto il pulsante <kbd>Maiusc</kbd>.
4. Seleziona la cartella /dist della tua presenza.

# Alcune cose utili
## Hot-ricarica
Il sito web su cui stai sviluppando viene ricaricato automaticamente ogni volta che salvi un file nella tua cartella.

## Debug
- Puoi inserire `console.log("Test");` tra il tuo codice e vedere se la tua console del browser ti dà quell'output. Se sì, prova di nuovo dopo la prossima funzione. Se non è così, c'è un errore qui sopra.
- Se anche tu non ti aiuterà, chiedi aiuto allo sviluppatore di una presenza sul nostro [server Discord](https://discord.gg/PreMiD).

# File spiegati
- [Classe Presenza](/dev/presence/class)
- [Classe iFrame](/dev/presence/iframe)
- [File di metadati](/dev/presence/metadata)
- [Configurazione TypeScript](/dev/presence/tsconfig)
{.links-list}