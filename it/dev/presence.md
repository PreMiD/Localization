---
title: Sviluppo Presence
description:
published: vero
date: 2020-08-29T21:39:03.946Z
tags:
editor: markdown
---

> Tutte le presenze sono ora memorizzate qui: https://github.com/PreMiD/Presences 
> 
> {.is-info}

La versione `2.x` introduce il [negozio di presenze](https://premid.app/store). Gli utenti ora hanno la possibilità di aggiungere e rimuovere manualmente le loro presenze preferite tramite l'interfaccia utente del [sito web](https://premid.app/).

> Prima di iniziare, è vivamente consigliato guardare le nostre linee guida per le presence. 
> 
> {.is-warning}

- [Linee guida](https://docs.premid.app/en/dev/presence/guidelines)
{.links-list}

# Struttura
Tutte le presence sono scritte in [TypeScript](https://www.typescriptlang.org/). [TypeScript](https://www.typescriptlang.org/) ha alcune definizioni extra interessanti rispetto a JavaScript, quindi correggere e identificare i bug è molto più facile.

## Installazione
1. Installa [Git](https://git-scm.com/).
2. Installa [Nodo](https://nodejs.org/en/) (viene fornito con [npm](https://www.npmjs.com/)).
3. Installa [TypeScript](https://www.typescriptlang.org/index.html#download-links) (apri un terminale e `npm install -g typescript`).

## Clonando il progetto
1. Apri un terminale e digita `git clone https://github.com/PreMiD/Presences`.
2. Scegli una cartella a tua scelta.
3. Aprilo con l'editor di codice.

## Creazione cartelle e file

1. Crea una cartella con il **nome** (non un URL) del servizio che vuoi supportare.
2. Crea un file `presence.ts` e `tsconfig.json` all'interno.
3. Crea una cartella chiamata `dist` all'interno.
4. Crea un file `metadata.json` all'interno della cartella `dist`.

## Riempimento del file tsconfig.json
Per favore, inserisci il seguente codice all'interno del file `tsconfig.json`.
```javascript
{
  "extends": "../../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
}
```
Per ulteriori informazioni sulla configurazione di TypeScript, clicca [qui](/dev/presence/tsconfig).

## Riempimento del file metadata.json
Abbiamo creato un `metadata.json` creatore di file per i pigroni [qui](https://eggsy.codes/projects/premid/mdcreator). Si consiglia comunque di leggere questo in modo da sapere come funziona.

```json
{
  "$schema": "https://schemas.premid.app/metadata/1.0",
  "author": {
    "name": "UTENTE",
    "id": "ID"
  },
  "contributors": [{
    "name": "UTENTE",
    "id": "ID"
  }],
  "service": "SERVIZIO",
  "altnames": ["SERVIZIO"],
  "description": {
    "en": "DESCRIZIONE"
  },
  "url": "URL",
  "version": "VERSIONE",
  "logo": "URL",
  "thumbnail": "URL",
  "color": "#HEX000",
  "tags": ["TAG1", "TAG2"],
  "category": "CATEGORIA",
  "regExp": "REGEXP",
  "iFrameRegExp": "REGEXP",
  "iframe": false,
  "settings": [
        { 
            "id": "ID",
            "title": "TITOLO VISUALIZZATO",
            "icon": "ICONA GRATUITA FONTAWESOME",
            "value": true
        },
        {
            "id": "ID",
            "if": {
                "ID": true
            },
            "title": "TITOLO VISUALIZZATO",
            "icon": "ICONA GRATUITA FONTAWESOME",
            "value": "\"%song%\" di %artist%",
            "placeholder": "usa %song% o %artist%"
        },
        {
            "id": "ID",
            "title": "TITOLO VISUALIZZATO",
            "icon": "ICONA GRATUITA FONTAWESOME",
            "value": 0,
            "values": ["1", "2", "ecc."]
        }
    ]
}
```

Copia il codice qui sopra e inseriscilo nel file `metadata.json`. Adesso è necessario modificare i valori delle proprietà. Si prega di notare che le seguenti proprietà sono facoltative da avere nel tuo file `metadata.json`, se non prevedi di utilizzarli è necessario rimuoverli.
- `collaboratori`
- `regExp`
- `iframe`
- `iFrameRegExp`
- `impostazioni`

**Chiarimento di alcuni valori preimpostati:**
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
      <td style="text-align:left">Il titolo del servizio che supporta questa presenza. <br>(Deve essere lo stesso nome della cartella dove si trova tutto)</td>
      <td style="text-align:left"><code>Stringa</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>altnames</b>
      </td>
      <td style="text-align:left">Essere in grado di cercare la presence usando un nome alternativo. <br>Destinato ad essere utilizzato per presences che hanno nomi diversi in lingue diverse (ad esempio Pokémon and 포켓몬스터).<br>Puoi anche usarlo per presences che hanno caratteri speciali in modo da non doverli digitare (ad esempio Pokémon e Pokemon).
      </td>
      <td style="text-align:left"><code>Array&lt;String&gt;</code>
      </td>
      <td style="text-align:left"><code>sì</code>
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
      <td style="text-align:left">URL del servizio.<br><b>Esempio:</b><code>vk.com</code><br>
        <b>Questo URL deve corrispondere all'URL del sito web in quanto rileverà se questo è o meno il sito web in cui inserire lo script.</b><br><b>NON</b> aggiungere <code>https://</code> o <code>http://</code> all'interno dell'URL né una barra alla fine:
<code>https://premid.app/</code> -> <code>premid.app</code><br>
<b>Nota</b>: Alcuni URL possono avere <code>www.</code> o qualcos'altro davanti al loro dominio. <b>Non</b> dimenticare di aggiungerlo!<br>
È possibile aggiungere più URL facendo quanto segue:<br>
<code>["URL1", "URL2", "ECC."]</code><br>
È anche possibile utilizzare regExp conosciuto anche come Regex per questo compito, spiegato più avanti.
      </td>
      <td style="text-align:left"><code>Stringa, Schieramento&lt;String&gt;</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b>
      </td>
      <td style="text-align:left">Una stringa di espressione regolare usata per abbinare gli url.<br>
      regExp o conosciuto anche come Regex, può essere utilizzato se un sito web ha più sottodomini.<br>
È possibile utilizzare il seguente regExp per questo:<br>
<code>([a-z0-9]+)[.]dominio[.]TLD"</code><br>
TLD sta per dominio di primo livello, per esempio: .com .net<br> 
<code>([a-z0-9]+)</code> significa qualsiasi cosa dalla a alla z e da 0 a 9.<br>
        È possibile ottenere un rapido avvio guardando questo <a href="https://youtu.be/sXQxhojSdZM">video</a><br>
        È possibile testare il tuo regExp su <a href="https://regex101.com/">Regex101</a>
      </td>
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
      <td style="text-align:left">Una stringa utilizzata per rappresentare la categoria sotto la quale la presenza cade Vedi le categorie valide <a href="https://docs.premid.app/dev/presence/metadata#presence-categories">qui</a>.</td>
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
    <tr>
      <td style="text-align:left"><b>impostazioni</b>
      </td>
      <td style="text-align:left">Un vettore di impostazioni che l'utente può modificare.<br>
      Leggi di più sulle impostazioni delle presence <a href="https://docs.premid.app/dev/presence/metadata#presence-settings">qui</a>.</td>
      <td style="text-align:left"><code>Schieramento&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>sì</code>
      </td>
    </tr>
  </tbody>
</table>

Abbiamo creato un `metadata.json` creatore di file per i pigroni [qui](https://eggsy.codes/projects/premid/mdcreator).

## Primi passi

```javascript
var presence = new Presence({
    clientId: "000000000000000000" //The client ID of the Application created at https://discordapp.com/developers/applications
}),

strings = presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
    //You can use this to get translated strings
});

/*

function myOutsideHeavyLiftingFunction(){
    //Grab and process all your data here

    // element grabs //
    // api calls //
    // variable sets //
}

setInterval(myOutsideHeavyLiftingFunction, 10000); 
//Run the function separate from the UpdateData event every 10 seconds to get and set the variables which UpdateData picks up

*/


presence.on("UpdateData", async () => {
    /*UpdateData is always firing, and therefore should be used as your refresh cycle, or `tick`. Questo è chiamato più volte al secondo dove possibile.

    Si consiglia di impostare un'altra funzione al di fuori di questa funzione evento che cambierà i valori variabili e farà il sollevamento pesante se si chiamano i dati da un'API.*/

    var presenceData: presenceData = {
        largeImageKey: "key", /*La chiave (nome del file) dell'immagine grande sulla presenza. Questi sono caricati e denominati nella sezione Rich Presence della tua applicazione, chiamati Art Asset*/
        smallImageKey: "key", /*La chiave (file name) dell'imagine grande sulla presenza. Questi sono caricati e denominati nella sezione Rich Presence della tua applicazione, chiamati Art Asset*/
        smallImageText: "Qualche hover text", //Il testo che viene visualizzato quando si passa sopra l'immagine piccola
        dettagli: "Nome Pagina in Navigazione", // La sezione superiore del testo della presenza
        stato: "Leggendo sezione A", // La sezione inferiore del testo della presenza
        startTimestamp: 1577232000, // Il timestamp unix epoch dal quale incominciare a contare
        endTimestamp: 1577151472000 //Se vuoi mostrare Tempo Rimasto invece che Passato, questo è il timestamp unix epoch in cui il timer termina
    }; /*Opzionalmente è possibile impostare una largeImageKey qui e cambiare il resto come sotto-proprietà variabili, ad esempio presenceSata.type = "blahblah"; esempi di tipo: dettagli, stato, ecc.*/

    if (presenceData. etails == null) {
        //Questo si attiverà se non si impostano i dettagli della presenza
        presence.setTrayTitle(); //Cancella il tray title per gli utenti Mac
        presence.setActivity(); /*Aggiorna la presenza senza dati, quindi cancellandola e rendendo l'immagine di grandi dimensioni l'icona dell'Applicazione Discord, e il testo il nome dell'Applicazione Discord*/
    } else {
        //Questo si attiverà se si imposta i dettagli della presenza
        presenza.setActivity(presenceData); //Aggiorna la presenza con tutti i valori dell'oggetto presenceData
    }
});
```
Puoi copiare questo nel tuo file `presence.ts` e modificare i valori. L'impostazione di tutti i valori viene eseguita all'interno dell'evento updataData.

Per esempi suggeriamo di esaminare il codice di presenze come: 1337x o 9GAG.

Per maggiori informazioni sulla classe della presenza clicca [qui](/dev/presence/class).

## Impossibile ottenere alcuni dati?!

Molti siti web usano [iframes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([Inlineframes](https://en.wikipedia.org/wiki/HTML_element#Frames)). Questi tag html possono contenere sorgenti multiple come video. Ma non sono pertinenti ogni volta. Alcune sono nascoste o semplicemente non utilizzate attivamente. Verifica se è possibile estrarre le informazioni di cui hai bisogno senza di loro, prima di fare lavoro inutile.

1. Controllali nella tua browser console (assicurati di essere nella scheda **Elementi**).
2. Cerca (<kbd>CTRL</kbd>+<kbd>F</kbd> (Windows) o <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
3. Esegui `document.querySelectorAll("iframe")`.

Se riscontri che i tuoi dati sono in un iFrame devi fare quanto segue:
1. Crea un file `iframe.ts`.
2. Imposta iFrame a `true` nel tuo file di metadati.
3. Riempimento del file iFrame.
```javascript
var iframe = new iFrame();
iframe. n("UpdateData", async () => {
  /*
  Ottiene tutti i dati di cui hai bisogno dall'iFrame salvandoli nelle variabili
  e poi li invia usando iframe.end
  */
  iframe.send({ //invio di dati
    video: video,
    time: video.duration
  }); 
});
```
4. Fare in modo che il file della presenza riceva dati dal file iFrame.
```javascript
presence.on("iFrameData", data => {
  iFrameVideo = data.video;
  currentTime = data.time;
});
```
**Nota:** Questo deve essere posizionato al di fuori dell'evento updateData.
## Compilando
Apri una console nella tua cartella e digita `tsc -w` per compilare il `presence.ts` nella cartella `/dist`.

# Caricamento della presenza
1. Apri il popup e tieni premuto il pulsante <kbd>Maiusc</kbd> sulla tastiera.
2. **Carica presenza** apparirà nella sezione Presenze.
3. Fai clic su di esso mentre tieni ancora premuto il pulsante <kbd>Maiusc</kbd>.
4. Seleziona la cartella /dist della tua presenza.

# Alcune cose utili
## Hot-reloading
Il sito Web su cui si sta sviluppando si ricarica automaticamente ogni volta che si salva un file nella cartella.

## Debugging
- Puoi mettere `console.log("Test");` tra il tuo codice e vedere se la console del browser ti dà quell'output. Se sì poi andare avanti e riprovare dopo la funzione successiva. Se no allora c'è un errore sopra.
- Se questo ancora non ti aiuta, allora chiedi aiuto a uno sviluppatore di presence sul nostro [server Discord](https://discord.premid.app/).

# File spiegati
- [Classe Presenza](/dev/presence/class)
- [Classe iFrame](/dev/presence/iframe)
- [File dei metadati](/dev/presence/metadata)
- [Configurazione TypeScript](/dev/presence/tsconfig)
{.links-list}
