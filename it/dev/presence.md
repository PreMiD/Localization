---
title: Sviluppo Presence
description:
published: true
date: 2021-02-07T17:11:34.449Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:02.843Z
---

> Tutte le presenze sono ora memorizzate qui: https://github.com/PreMiD/Presences 
> 
> {.is-info}

La versione `2.x` introduce il [negozio di presenze](https://premid.app/store). Gli utenti ora hanno la possibilità di aggiungere e rimuovere manualmente le loro presenze preferite tramite l'interfaccia utente del [sito web](https://premid.app/).

> Prima di iniziare, è vivamente consigliato guardare le nostre linee guida per le presence. 
> 
> {.is-warning}

- [Linee guida](https://docs.premid.app/dev/presence/guidelines)
{.links-list}

# Struttura

Tutte le presence sono scritte in [TypeScript](https://www.typescriptlang.org/). [TypeScript](https://www.typescriptlang.org/) ha alcune definizioni extra interessanti rispetto a JavaScript, quindi correggere e identificare i bug è molto più facile.

## Installazione

1. Installa [Git](https://git-scm.com/).
2. Installa [Node](https://nodejs.org/en/) (viene fornito con [npm](https://www.npmjs.com/)).
3. Installa [TypeScript](https://www.typescriptlang.org/index.html#download-links) (apri un terminale e `npm install -g typescript`).

## Clonando il progetto

1. Apri un terminale e digita `git clone https://github.com/PreMiD/Presences`.
2. Scegli una cartella a tua scelta.
3. Aprilo nel tuo editor di codice.

## Creazione cartelle e file

1. Vai nella cartella `siti web` e poi vai nella cartella con la prima lettera del ** nome** (non un URL) del servizio che vuoi supportare.
2. Crea una cartella con il **nome** (non un URL) del servizio che vuoi supportare.
3. Crea un file `presence.ts` e `tsconfig.json` all'interno.
4. Crea una cartella chiamata `dist` all'interno.
5. Crea un file `metadata.json` all'interno della cartella `dist`.

## Riempimento del file tsconfig.json

Per favore, inserisci il seguente codice all'interno del file `tsconfig.json`.

```typescript
{
  "extends": "../../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
}
```

Per ulteriori informazioni sulla configurazione di TypeScript, clicca [qui](/dev/presence/tsconfig).

## Riempimento del file metadata.json

Abbiamo creato un `metadata.json` creatore di file per i pigroni [qui](https://eggsy.xyz/projects/premid/mdcreator). Si consiglia comunque di leggere questo in modo da sapere come funziona.

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

- `contributors`
- `altnames`
- `regExp`
- `iframe`
- `iFrameRegExp`
- `readLogs`
- `settings`

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
      <td style="text-align:left"><b>author</b></td>
      <td style="text-align:left">Dovrebbe contenere un Oggetto con il <code>nome</code> e l'<code>id</code> del contributore. <code>name</code> is your Discord username without the identifier(#0000). L'Id <code>dell'utente</code> può essere copiato da Discord abilitando la modalità
        dello sviluppatore e facendo clic destro sul tuo profilo.</td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>contributors</b></td>
      <td style="text-align:left">Dovrebbe contenere un Oggetto con il <code>nome</code> e l'<code>id</code> del contributore. <code>name</code> is your Discord username without the identifier(#0000). L'Id <code>dell'utente</code> può essere copiato da Discord abilitando la modalità
        dello sviluppatore e facendo clic destro sul tuo profilo.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>Si</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>service</b></td>
      <td style="text-align:left">Il titolo del servizio supportato da questa presenza.<br>
      (Deve essere lo stesso nome della cartella dove tutto si trova)</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>altnames</b></td>
      <td style="text-align:left"><br>Destinato ad essere utilizzato per presences che hanno nomi diversi in lingue diverse (ad esempio Pokémon and 포켓몬스터).<br>Puoi anche usarlo per presences che hanno caratteri speciali in modo da non doverli digitare (ad esempio Pokémon e Pokemon).</td>
      <td style="text-align:left"><code>Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Si</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>description</b></td>
      <td style="text-align:left">Piccola descrizione della presence, è possibile utilizzare la descrizione del servizio se siete fuori idee. Your description must have key pair values which indicate the language, and the description in that specific language. Make descriptions with the languages <i>that you know</i>, our translators will make changes to your metadata file.</td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b></td>
      <td style="text-align:left">URL of the service.<br><b>Example:</b><code>vk.com</code><br>
      <b>This URL must match the URL of the website as it will detect whether or not this is the website to inject the script to.</b><br> Do <b>NOT</b> add <code>https://</code> or <code>http://</code> inside of the URL nor a slash at the end:
      <code>https://premid.app/</code> -> <code>premid.app</code><br>
      <b>Note</b>: Some URLs may have <code>www.</code> or something else in front of their domain. Do <b>NOT</b> forget to add it!<br>
      You can add multiple URLs by doing the following:<br>
      <code>["URL1", "URL2", "ETC."]</code><br>
      You could also use regExp also known as Regex for this task, explained further below.</td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b></td>
      <td style="text-align:left">A regular expression string used to match urls.<br>
      regExp or also known as Regex, can be used if a website has multiple subdomains.<br>
      You could use the following regExp for that:<br>
      <code>([a-z0-9]+)[.]domain[.]TLD"</code><br>
      TLD standing for Top Level Domain for axample: .com .net (but do not enter the dot).<br>
      <code>([a-z0-9]+)</code> means anything from a to z and from 0 to 9.<br>
      You can get a quick starter by watching this <a href="https://youtu.be/sXQxhojSdZM">video</a>.<br>
      You can test your regExp at <a href="https://regex101.com/">Regex101</a>.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Si</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>version</b></td>
      <td style="text-align:left">Versione della tua presence.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>logo</b></td>
      <td style="text-align:left">Link al servizio&apos;s logotype.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b></td>
      <td style="text-align:left">Link alla miniatura della tua presence.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>color</b></td>
      <td style="text-align:left"><code>#HEX</code> valore. Si consiglia di utilizzare un colore primario del servizio
        che la tua presence supporta.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>tags</b></td>
      <td style="text-align:left">Array with tags, they will help users to search your presence on the website.</td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>category</b></td>
      <td style="text-align:left">Una stringa usata per rappresentare la categoria sotto la quale cade la presence. Vedi le categorie valide <a href="https://docs.premid.app/dev/presence/metadata#presence-categories">qui</a>.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b></td>
      <td style="text-align:left">Definisce se <code>iframes</code> sono utilizzati.</td>
      <td style="text-align:left"><code>Boolean</code></td>
      <td style="text-align:left"><code>Si</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b></td>
      <td style="text-align:left">Un selettore di espressione regolare che seleziona gli iFrames in cui iniettare. Vedi regExp per maggiori informazioni.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Si</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>readLogs</b></td>
      <td style="text-align:left">Definisce se l'estensione debba leggere il registro.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Si</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>settings</b></td>
      <td style="text-align:left">Un vettore di impostazioni che l'utente può modificare.<br>
      Leggi di più sulle impostazioni delle presence <a href="https://docs.premid.app/dev/presence/metadata#presence-settings">qui</a>.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>Si</code></td>
    </tr>
  </tbody>
</table>

Abbiamo creato un `metadata.json` creatore di file per i pigroni [qui](https://eggsy.xyz/projects/premid/mdcreator).

## Primi passi

```typescript
const presence = new Presence({
    clientId: "000000000000000000" //The client ID of the Application created at https://discordapp.com/developers/applications
  }),
  strings = presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
    //You can use this to get translated strings in their browser language
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

    Si consiglia di impostare un'altra funzione al di fuori di questa funzione evento che cambierà i valori variabili e farà il sollevamento pesante se si chiamano i dati da un' API.*/

    var presenceData: PresenceData = {
        largeImageKey: "key", /*La chiave (nome del file) dell'immagine grande sulla presenza. Questi sono caricati e denominati nella sezione Rich Presence della tua applicazione, chiamati Art Asset*/
        smallImageKey:
"key", /*La chiave (file name) dell'immagine grande sulla presenza. Questi sono caricati e nominati nella sezione Presenza Ricca della tua applicazione, chiamato Art Assets*/,
    smallImageText: "Qualche testo di hover", //Il testo che viene visualizzato quando si passa sopra la piccola immagine
    dettagli: "Browsing Page Name", //La sezione superiore del testo di presenza
    stato: "Sezione di lettura A", //La sezione inferiore del testo della presenza
    startTimestamp: 1577232000, //The unix epoch timestamp for when to start count from
    endTimestamp: 1577151472000 //If you want to show Time left instead of Elapsed, questo è il timestamp unix epoca in cui il timer termina
  }; /*Opzionalmente è possibile impostare una chiave largeImagequi e cambiare il resto come sotto-proprietà variabili, ad esempio presenceSata. ype = "blahblah"; esempi di tipo: dettagli, stato, ecc.*/

  se (presenceData. etails == null) {
    //Questo sparerà se non si impostano i dettagli della presenza
    presenza. etTrayTitle(); //Clears the vassoio title for mac users
    presence. etActivity(); /*Aggiorna la presenza senza dati, quindi cancellandola e rendendo l'immagine di grandi dimensioni l'icona dell'applicazione Discord, e il testo di Discord Application name*/
  } else {
    //Questo sparerà se si imposta i dettagli della presenza
    presenza. etActivity(presenceData); //Aggiorna la presenza con tutti i valori dell'oggetto presenceData
  }
});
```

Puoi copiare questo nel tuo file `presence.ts` e modificare i valori. L'impostazione di tutti i valori viene eseguita all'interno dell'evento updataData.

Per esempi suggeriamo di esaminare il codice di presenze come: 1337x o 9GAG. Per maggiori informazioni sulla classe delle `presence` clicca [qui](/dev/presence/class).

Dalla v2.2. ora ci sono le Slideshows, questo ti permette di mostrare più interfacce `PresenceData` ad un intervallo, per maggiori informazioni clicca sulla `classe` Slideshow [qui](/dev/presence/slideshow).

## Impossibile ottenere alcuni dati?!

Molti siti web usano [iframes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([Inlineframes](https://en.wikipedia.org/wiki/HTML_element#Frames)). Questi tag html possono contenere sorgenti multiple come video. Ma non sono pertinenti ogni volta. Alcune sono nascoste o semplicemente non utilizzate attivamente. Verifica se è possibile estrarre le informazioni di cui hai bisogno senza di loro, prima di fare lavoro inutile.

1. Controllali nella tua browser console (assicurati di essere nella scheda **Elementi**).
2. Cerca (<kbd>CTRL</kbd>+<kbd>F</kbd> (Windows) o <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
3. Esegui `document.querySelectorAll("iframe")`.

Se riscontri che i tuoi dati sono in un iFrame devi fare quanto segue:

1. Crea un file `iframe.ts`.
2. Imposta iFrame a `true` nel tuo file di metadati.
3. Riempimento del file iFrame.

```typescript
const iframe = new iFrame();
iframe.on("UpdateData", async () => {
  /*
  Get all the data you need out of the iFrame save them in variables
  and then sent them using iframe.send
  */
  iframe.send({
    //sending data
    video: video,
    time: video.duration
  });
});
```

4. Fare in modo che il file della presenza riceva dati dal file iFrame.

```typescript
presence.on("iFrameData", (data) => {
  iFrameVideo = data.video;
  currentTime = data.time;
});
```

**Nota:** Questo deve essere posizionato al di fuori dell'evento updateData.

## Compilando

Apri una console nella tua cartella e digita `tsc -w` per compilare il `presence.ts` nella cartella `/dist`.

# Caricamento della presenza

1. Open the extension popup in the browser and hold the <kbd>Shift</kbd> button on your keyboard.
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

- [Classe presence](/dev/presence/class)
- [Classe Slideshow](/dev/presence/slideshow)
- [classe iFrame](/dev/presence/iframe)
- [File dei metadati](/dev/presence/metadata)
- [Configurazione TypeScript](/dev/presence/tsconfig ""){.links-list}
