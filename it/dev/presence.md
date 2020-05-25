---
title: Sviluppo Presence
description:
published: vero
date: 2020-05-21T15:59:59.864Z
tags:
---

> Tutte le presenze sono ora memorizzate qui: https://github.com/PreMiD/Presences 
> 
> {.is-info}

La versione `2.x` introduce il [negozio di presenze](https://premid.app/store). Gli utenti ora hanno la possibilità di aggiungere e rimuovere manualmente le loro presenze preferite tramite l'interfaccia utente del [sito web](https://premid.app/).

# Linee guida
> Se lo fai **NON** seguire le linee guida, un `Presence Verifier` richiederà le opportune modifiche, o dovrà chiuderlo in determinate circostanze. 
> 
> {.is-warning}

> Quando si fanno richieste di pull per l'aggiunta o la modifica di presenze esistenti, si **NECESSARIO** includere uno screenshot. Tuttavia, le modifiche di un Presence's `metadata.json` o `tsconfig.json` file fare **NON** richiedono uno screenshot. _Lo screenshot **DEVE** essere caricato direttamente su GitHub con la richiesta di pull, essegui <strong x-ir"1">NON</strong> utilizzare siti di condivisione di immagini di terze parti. _ 
> 
> {.is-warning}

Quando pubblichiamo Presenze su questo GitHub, ti richiediamo di seguire un insieme di linee guida. Per alcuni, queste regole severe possono sembrare dure. Tuttavia, l'attuazione di queste regole impedirà a noi e agli utenti di affrontare qualsiasi questione.

## Creazione
> Il codice scritto DEVE essere <em x-id"3">ben scritto</em> e DEVE essere <em x-id"3">leggibile</em>. `DeepScan` su GitHub segnalerà problemi di qualità al `Presence Verification Team`. Ti raccomandiamo di aggiorne il tuo fork quando fai richieste di pull, questo aiuterà a limitare i falsi positivi. 
> 
> {.is-warning}

- La pull request <strong x-id "1">DEVE</strong> é completa, é necessario avere una struttura di file appropriata, le bozze sono **NON** consentite. Compreso il file `presence.ts`, file `tsconfig.json` `dist` cartella, `presence.js` file, e `metada.json` file, che è rappresentato nello schema di esempio seguente:
```bash
siti web
├── {type}
    ├── presence
        ├── dist
        ├── metadata.json
        ├── presence.js
        ├── presence.ts
        ├── tsconfig.json
```
o se stai utilizzando `iframe`:
```bash
siti web
└── {type}
    └── presence
        ├── dist
        │   ├── metadata.json
        │   ├── presence.js
        │   └── iframe.js
        ├── presence.ts
        ├── iframe.ts
        └── tsconfig.json
```
- {type} sta per: Da A a Z, "#" per presenze di inizio non alfabetico e "0-9" per presenze che iniziano con i numeri.
<br>
Prima di iniziare a lavorare sulla tua presenza, tieni in mente il seguente elenco.
- La presenza **DEVONO** essere correlata al sito che hai scelto.
- La presenza **NON DEVE** essere di siti illegali. Tra questi, lo stressor, la droga, la pornografia infantile, eccetera.
- I metadati di Presence **DEVE** hanno contenuti ben scritti, inclusi titoli e descrizioni validi.
- I media che includi (icona/miniatura) **DEVONO** essere correlati al sito e dovrebbero essere comprensibili in termini di dimensioni e qualità.
- La struttura del file <strong x-id='"1">DEVONO</strong> essere pulita e gestita, <strong x-id="1">NON</strong> ha file casuali che non forniscono nulla alla funzione di Presence.</li>
<li>La presenza <strong x-id="1">NON DEVE</strong> essere di siti illegali. Queste includono informazioni private, impatto negativa sul comportamento del sito, ecc.</li>
<li>Se si progetta una Presence per un sito che cambia in futuro e di conseguenza potenzialmente rompendo la tua Presence, tu <strong x-id="1">SONO</strong> sei responsabile di aggiornarla per funzionare come previsto. Se non lo corregi <strong x-id="1">NON</strong> entro sette giorni, gli altri sviluppatori di. Presence sono autorizzati a <strong x-id="1">OVERWRITE</strong> per conformarsi alle modifiche.</li>
<li>La presenza <strong x-id="1">DEVONO</strong> essere testata prima di pubblicare per confermare che tutto funzioni come previsto.</li>
<li>La tua presenza <strong x-id="1">DEVE</strong> ha immagini e descrizioni SFW indipendentemente dal fatto che sia NSFW o no. Se la tua Presence riguarda un sito NSFW, aggiungi il tag <code>nsfw</code> ai tuoi metadati.</li>
<li>La tua presenza <strong x-id="1">NON</strong> manipolare lo spazio di archiviazione locale sul browser.</li>
<li>La tua Presence puo utilizzare i cookie per memorizzare i dati, devi anteporre tutti a <code>pmd_</code>.</li>
<li>Il nome di Presence <strong x-id"1">DEVE</strong> essere il nome della directory di Presence. Ad esempio, une Presence denominata <code>Google Docs</code> deve avere una directory di <code>/Google Docs/</code>. ( Dovresti includere tutti gli spazi, i periodi, le virgole e qualsiasi altro carattere speciale. )</li>
</ul>

<h2 spaces-before="0">Modifica</h2>

<blockquote spaces-before="0">
  <p spaces-before="0">DEVI modificare la versione nei metadi <strong x-id="1">metadata</strong> per essere un valore piu alto rispetto alla versione precedente quando effetui modifiche alla presenza <strong x-id'="1">presence.ts</strong>**presence.js</strong o **metadata.json**. </p>
{.is-warning}</blockquote>

In alcune situazioni, le Presence possono comportarsi in modo inaspettato o potrebbero utilizzare alcuni piccoli cambiamenti per miglioarne la funzionalità. Ecco un elenco compilato che **DEVI** seguire per modificare le Presenze.

- **NON** sei autorizzato a riscrivere una Presenza o a cambiare il suo autore. Se l'autore della Presenza è stato bannato dal server ufficiale o non ha apportato le modifiche richieste in sette giorni, puoi contattare un `Verificatore di Presenze` per vedere se è possibile riscrivere la Presenza di tua scelta.
- Chiunque può fornire hotfix per correggere i bug; Tuttavia, prova a **NON** apportare modifiche al codice che **NON** hanno bisogno di essere corrette. Le modifiche valide sono, ma **NON** limitate a, _percorsi mancanti_, _errori_, _immagini mancanti_, ecc.
- Se fai delle modifiche ad una Presenza e cambi almeno un **QUARTO** del codice base di riferimento della Presenza, ti è permesso aggiungere te stesso come collaboratore. Contatta un `Verificatore di Presenze` per ulteriori informazioni su questo argomento.
- Assicurati che le modifiche siano utili. Questi possono includere correzioni ( codice e errori di battitura ), aggiunte ( descrizioni e etichette ), ecc. **NON** cambiare le immagini se non sono obsolete e hanno una risoluzione decente.
- Conferma che le modifiche funzionano prima della pubblicazione. **NON** creare richieste di pull senza conoscere il risultato delle tue modifiche.
- Quando si apportano modifiche a una presenza, modificare il file `presence.ts` e compilalo, non apportare modifiche al file `presence.js` direttamente.

# Verifica

> ⚠ **Attenzione**: Gli sviluppatori di Presence sono ora tenuti ad utilizzare `TypeScript`, l'opzione per presenze in `JavaScript` è stata completamente rimossa. 
> 
> {.is-warning}

> **Conferma** che i [metadati](https://docs.premid.app/en/dev/presence/metadata) della tua presenza sono validi e hanno tutti i campi necessari prima di fare una richiesta di pull. Se i tuoi metadati contengono una variabile opzionale impostata al valore predefinito, rimuovili ( I Verificatori di Presenze ti richiederanno di rimuoverli ). 
> 
> {.is-warning}

> Se hai bisogno di contattare qualcuno, per favore utilizza il nostro server ufficiale Discord. Tutti i `Verificatori di Presenze` avranno un ruolo unico nel loro profilo.

Affinché la tua presenza raggiunga i negozi, **DEVE** passare attraverso un processo su GitHub per confermare che funziona come previsto. Queste sono alcune cose a cui fare attenzione quando si fa la vostra richiesta di pull.

1. Ci vogliono due verificatori per confermare che la vostra presenza è all'altezza degli standard. Se ti capita di ottenere richieste di modifica, fare lo sforzo corretto per risolverle, o **NON** sarà aggiunta.
2. Se richiediamo modifiche e la tua richiesta di pull supera **7 giorni di inattività** senza effettuarne quelle necessarie, saremo costretti a chiuderla.
3. Ti è permesso di fare screenshot di modifiche fatte con l'aiuto di un altro utente, e ti è permesso di mettere screenshot insieme per una visualizzazione piacevole. (es., il suo autore nel caso in cui non sia possibile accedervi per qualsiasi motivo).
4. Se si tratta di un aggiornamento o patch, lo screenshot **DEVE** mostrare le nuove aggiunte funzionanti, **NON** vecchie funzionalità dalle precedenti richieste di pull.
5. Gli screenshot forniti devono essere reali, **NON** modificati.
6. Qualsiasi codice contribuito che viene unito a questo repository sarà concesso in licenza sotto **Mozilla Public License 2.0**.
7. Presenze per domini o host gratuiti (es., .TK, [tutti i domini Freenom gratis], .RF.GD, etc ) **NON** sono consentiti affatto, possono essere fatte eccezioni se viene presentata una prova che dimostri di aver pagato per il dominio.
8. I campi `smallImageKey` e `smallImageText` sono intesi a fornire un contesto aggiuntivo/secondario (come "riproduzione"/"in pausa" per i siti video, "navigando" per siti regolari, e altri casi) non per promuovere profili Discord o qualsiasi cosa non correlata a PreMiD.
9. I requisiti per i loghi sono 1:1 (Quadrato) in 512px, le miniature, tuttavia, dovrebbero essere [carte promozionali](https://i.imgur.com/3QfIc5v.jpg) o semplicemente [screenshot](https://i.imgur.com/OAcBmwW.png) se la prima **NON** è disponibile.
10. Le presenze devono avere almeno un tag. I tag devono **NON** includere spazi, slash, virgolette singole/doppie, caratteri Unicode, e dovrebbero essere sempre minuscoli.
11. Il campo `url` **NON DEVE** includere `http://` o `https://`, né i parametri ( ad es. una Presenza per `https://www.google.com/search?gws_rd=ssl` avrà solo `www.google.com` nel campo `url`).
12. Descriptions and tags should always be in an array, even when it's only one element. The `url` field, however, should only be a string if it's one domain.
13. Tags should be used as alternate names whenever possible, and shortened versions must be included as well ( e.g., if an Amazon Presence had included AWS support, it would have its tags like "amazon-web-services" and "aws" ).
14. Unstable sites that constantly change APIs/domains, randomize HTML elements, or just still being in heavy development are not allowed and will be removed from the store.
15. The logo and thumbnail on your Presence **MUST** either be `i.imgur.com`, from a CDN that **YOU** own, or from a CDN that gives you permission to **CHANGE** image files.
16. Verifiers will check if the Presence contains an `__awaiter` function at the beginning of the code ( which comes from an earlier version of ECMAScript ), and in addition to that, make sure the `UpdateData` event used is similar to this:

```ts
presence.on("UpdateData", async () => {
  /*...*/
  // Always use await when using async in the event
  data.smallImageText = (await strings).playing;
  /*...*/
});
```

It should **NOT** be this:

```ts
presence.on("UpdateData", () => __awaiter(this, void 0, void 0, function* () {
  /*...*/
  // Never use yield
  data.smallImageText = (yield strings).playing;
  /*...*/
});
```

17.  When **Deepscan** throws a lot of errors ( and it will ), it is mostly an issue with your branch being outdated, always update your GitHub fork before making a Pull Request.
18. If your Presence is new, it **MUST** start with version `1.0.0`, any other version will **NOT** be permitted.
19. Low-quality Presences ( or ones with one context ) are **NOT** allowed ( e.g., only showing the logo and some text but never changing again ).
20. **NEVER** use custom functions when [native variants are available](https://docs.premid.app/dev/presence#files-explained); this makes sure fixes on the extension level also apply to your Presences, you're free to use whatever you need if you do not find them listed in the docs.
21. Declare the Presence const **BEFORE** everything to avoid such rare issues that may occur; this is not a requirement by design so it could be removed in the future.
22. Presences that target internal browser pages ( like Chrome Web Store, `chrome://`, `about:` pages, etc ) are **NOT** allowed as they require an _experimental flag_ to be enabled on the user's end and could potentially cause damage to their browsers.
23. It is **FORBIDDEN** to code Presences for a site without adding support to its main language (e.g., a YouTube Presence coded with support for Portuguese and Japanese, but not English itself).
24. Always make sure the version number follows [semantic versioning standards](https://semver.org), which translates to the following scheme : `<NEW-FEATURE>.<HUGE-BUGFIX>.<SMALL-BUGFIX-OR-METADATA-CHANGES>`. anything else like `1.0.0.1`, `1.0`, `1`, `1.0.0-BETA` or changing `1.0.0` to `2.0.0` on a bug fix/small change is **NOT** permitted.
25. Declare the presence variable before anything, ( can cause some users issues that can be prevented ).
26. Do **NOT** edit the `tsconfig.json` file, use exactly what is specified on the [documentation](https://docs.premid.app/en/dev/presence/tsconfig#presence-configuration).
27. Presences with support only for a single subdomain will **NOT** be permitted, as they may seem broken for other pages ( like the homepage ), exceptions can be made for policy and contact pages ( content that isn't used much ) or sites where the other content is unrelated ( e.g wikia pages ).
28. All presences **MUST**  include an English description, including websites that aren't natively English.
29. Presences for the Tor network's websites (.ONION TLDs) are **NOT** allowed at all.
30. Always make sure to start your Presence in the most appropriate folder, if its name starts with any Latin letter then it must be under its alphabetical match ( e.g. `D/dアニメストア` or `G/Google` ). Any other Unicode/non-Latin characters **MUST** be under the "#" folder ( e.g. `#/巴哈姆特` ) and numbers under the "0-9" folder ( e.g. `0-9/4anime` ).

After meeting all of the guidelines and having your Presence reviewed at least twice, your Presence will be merged with the store.

# Structure
All presence are coded in [TypeScript](https://www.typescriptlang.org/). [TypeScript](https://www.typescriptlang.org/) has some extra spicy type definitions over JavaScript, so fixing and identifying bugs is way easier.

## Installazione
1. Installa [Git](https://git-scm.com/).
2. Installa [Nodo](https://nodejs.org/en/) (viene fornito con [npm](https://www.npmjs.com/)).
3. Install [TypeScript](https://www.typescriptlang.org/index.html#download-links) (open a terminal and `npm install -g typescript`).

## Clonando il progetto
1. Open a terminal and type `git clone https://github.com/PreMiD/Presences`.
2. Scegli una cartella a tua scelta.
3. Aprilo con l'editor di codice.

## Creazione di cartelle e file

1. Create a folder with the **name** (not an URL) of the service you want to support.
2. Create a `presence.ts` and a `tsconfig.json` file inside.
3. Create a folder named `dist` inside.
4. Create a `metadata.json` file inside the `dist` folder.

## Riempimento nel file tsconfig.json
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

## Compilazione nel file metadata.json
Abbiamo creato un `metadata.json` creatore di file per i pigroni [qui](https://eggsy.codes/projects/premid/mdcreator). It's still suggested to read this through so you know how it works.

```javascript
{
  "author": {
    "name": "USER",
    "id": "ID"
  },
  "contributors": [{
    "name": "USER",
    "id": "ID"
  }],
  "service": "SERVICE",
  "description": {
    "en": "DESCRIPTION"
  },
  "url": "URL",
  "version": "VERSION",
  "logo": "URL",
  "thumbnail": "URL",
  "color": "#HEX000",
  "tags": ["TAG1", "TAG2"],
  "category": "CATEGORY",
  "regExp": "REGEXP",
  "iFrameRegExp": "REGEXP",
  "iframe": false,
  "settings": [
        { 
            "id": "ID",
            "title": "DISPLAY TITLE",
            "icon": "FONTAWESOME FREE ICON",
            "value": true
        },
        {
            "id": "ID",
            "if": {
                "ID": true
            },
            "title": "DISPLAY TITLE",
            "icon": "FONTAWESOME FREE ICON",
            "value": "\"%song%\" by %artist%",
            "placeholder": "use %song% or %artist%"
        },
        {
            "id": "ID",
            "title": "DISPLAY TITLE",
            "icon": "FONTAWESOME FREE ICON",
            "value": 0,
            "values": ["1", "2", "etc."]
        }
    ]
}
```

Copia il codice qui sopra e inseriscilo nel file `metadata.json`. You now need to edit values of the properties. Please note that the following properties are optional to have in your `metadata.json` file, if you do not plan on using them you need to remove them.
- `collaboratori`
- `regExp`
- `iframe`
- `iFrameRegExp`
- `impostazioni`

**Clarifying some value presets:**
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
      <td style="text-align:left">Il titolo del servizio che supporta questa presenza. <br>(Must be the same name as the folder where everything is in)</td>
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
      <td style="text-align:left">URL of the service.<br><b>Example:</b><code>vk.com</code><br>
        <b>This URL must match the URL of the website as it will detect whether or not this is the website to inject the script to.</b><br> Do <b>NOT</b> add <code>https://</code> or <code>http://</code> inside of the URL nor a slash at the end:
<code>https://premid.app/</code> -> <code>premid.app</code><br>
<b>Note</b>: Some URLs may have <code>www.</code> or something else in front of their domain. Do <b>NOT</b> forget to add it!<br>
You can add multiple URLs by doing the following:<br>
<code>["URL1", "URL2", "ETC."]</code><br>
You could also use regExp also known as Regex for this task, explaned further below.
      </td>
      <td style="text-align:left"><code>Stringa, Schieramento&lt;String&gt;</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b>
      </td>
      <td style="text-align:left">A regular expression string used to match urls.<br>
      regExp or also known as Regex, can be used if a website has multiple subdomains.<br>
You could use the following regExp for that:<br>
<code>([a-z0-9]+)[.]domain[.]TLD"</code><br>
TLD standing for Top Level Domain for axample: .com .net<br> 
<code>([a-z0-9]+)</code> means anything from a to z and from 0 to 9.<br>
        You can get a quick starter by watching this <a href="https://youtu.be/sXQxhojSdZM">video</a><br>
        You can test your regExp at <a href="https://regex101.com/">Regex101</a>
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
      <td style="text-align:left">Una stringa utilizzata per rappresentare la categoria sotto la quale la presenza cade See the valid catergories <a href="https://docs.premid.app/dev/presence/metadata#presence-categories">here</a>.</td>
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
      <td style="text-align:left">Un selettore di espressione regolare che seleziona gli iframe da inserire. See regExp for more info.</td>
      <td style="text-align:left"><code>Stringa</code>
      </td>
      <td style="text-align:left"><code>sì</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>impostazioni</b>
      </td>
      <td style="text-align:left">An array of settings the user can change.<br>
      Read more about presence settings <a href="https://docs.premid.app/dev/presence/metadata#presence-settings">here</a>.</td>
      <td style="text-align:left"><code>Schieramento&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>sì</code>
      </td>
    </tr>
  </tbody>
</table>

Abbiamo creato un `metadata.json` creatore di file per i pigroni [qui](https://eggsy.codes/projects/premid/mdcreator).

## Guida introduttiva

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

setInterval(10000, myOutsideHeavyLiftingFunction); 
//Run the function seperate from the UpdateData event every 10 seconds to get and set the variables which UpdateData picks up

*/


presence.on("UpdateData", async () => {
    /*UpdateData is always firing, and therefore should be used as your refresh cycle, or `tick`. This is called several times a second where possible.

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
## Compilazione
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
- Se questo ancora non ti aiuta, allora chiedi aiuto a uno sviluppatore di presenze sul nostro [server Discord](https://discord.gg/WvfVZ8T).

# File spiegati
- [Classe Presenza](/dev/presence/class)
- [Classe iFrame](/dev/presence/iframe)
- [File dei metadati](/dev/presence/metadata)
- [Configurazione TypeScript](/dev/presence/tsconfig)
{.links-list}
