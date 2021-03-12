---
title: Linee guida per la presenza
description: Regole che tutti gli sviluppatori di presenze devono seguire per aggiungere la loro presenza.
published: true
date: 2021-03-06T15:01:04.274Z
tags:
editor: markdown
dateCreated: 2021-02-26T21:54:41.573Z
---

<div align="center">
    <img src="https://github.com/PreMiD.png?size=2048" width="128px" style="max-width:100%;">
    <h3 style="font-size: 2rem; margin-bottom: 0">Linee guida per la presenza</h3>
    <h4 style="margin-top: 0">Revision 3</h4>
    <br />
</div>

# Linee guida

When publishing Presences to the [Presences repository](https://github.com/PreMiD/Presences/), we require you to follow a set of guidelines. Per alcuni, queste regole severe possono sembrare dure. Tuttavia, l'attuazione di queste regole impedirà a noi e agli utenti di affrontare qualsiasi questione.

# Creazione

Le regole generali di sviluppo della presenza sono le seguenti:

- Le presenze **DEVONO** essere correlate al sito che hai scelto.
- Le presenze **non possono** essere fatte per siti web illegali. (per esempio, stressanti, marketing della droga, pornografia infantile, ecc.)
- La struttura del file deve essere pulita e gestita, non includere i file che non sono specificati. (ad esempio, cartelle vscode e git, immagini e file di testo, ecc.)
- Devi avere una corretta struttura dei file, le bozze non **sono** permesse.
- Presenze per siti con ( TLD `.onion`) o siti con domini/host gratis (per esempio `.TK` [tutti i domini gratis Freenom], `.RF`, `.GD`, ecc.) non **sono** permessi, eccezioni possono essere fatte se viene presentata prova che hanno pagato per il dominio.
- The domain of the presence must be at least 2 months old.
- Le presenze mirate a pagine browser interne ( come Chrome Web Store, pagine come `chrome://`, `about:`, ecc.) **non** sono permesse dato che richiedono che una flag sperimentale sia abilitata dall'utente e che potrebbe potenzialmente danneggiare il loro browser.
- Le presenze con supporto solo per un singolo sottodominio **non ** saranno permesse, che possono sembrare danneggiate per altre pagine (come la homepage), possono essere fatte eccezioni per i criteri e le pagine di contatto (contenuti che non sono utilizzati spesso) o siti in cui l'altro contenuto non è correlato. (per esempio, pagine wikia)
- Presences for online radios are only allowed if the radio has at least 100 weekly listeners and 15 concurrent and must have some features other than just showing album/song title, etc.
- Le presenze di bassa qualità (o quelle con poco contesto) **non** sono consentite (per es., mostrando solo un logo e un testo, ma mai più cambiarlo.)
- With the `buttons` release, we require some guidelines for them:
  - Redirects to main page are prohibited.
  - Promoting websites by them is prohibited.
  - They can't show addinational data when you can't show them in `state` or `details`.
- Compresa la cartella `dist`, file `presence.ts`, file `iframe.ts`, e file `metadata.json` è obbligatorio, quindi il risultato sarebbe quello che è rappresentato nel seguente schema:

```bash
presence
├── dist
│   └── metadata.json
├── presence.ts
└── tsconfig.json
```

o se stai usando un file `iframe.ts`:

```bash
presence
├── dist
│   └── metadata.json
├── presence.ts
├── iframe.ts
└── tsconfig.json
```

## [**metadata.json**](/dev/presence/metadata)

> Per la comodità dei nostri sviluppatori di presenza, abbiamo fornito uno schema che puoi usare per convalidare l'integrità del tuo file `metadati`. Questo è assolutamente facoltativo e non è richiesto durante il processo di revisione.

> Si raccomanda vivamente di organizzare il file `metadati` nel formato mostrato di seguito, e di inserire nomi di servizio, descrizioni, tag e campi di impostazione grammaticalmente corretti. Qualsiasi cosa non organizzata in base alle specifiche **non** sarà permessa.

> Le presenze di siti web che hanno contenuto esplicito **devono** avere il tag `nsfw`, e il logo/thumbnail deve **non** contenere nessuno di questi contenuti.

Ogni presenza ha un file descrittore chiamato `metadata. son`, i metadati hanno uno standard rigoroso e un esempio di questo file può sembrare di seguito:

```json
{
  "$schema": "https://schemas.premid.app/metadata/1.3",
  "author": {
    "name": "USER",
    "id": "ID"
  },
  "contributors": [
    {
      "name": "USER",
      "id": "ID"
    }
  ],
  "service": "SERVICE",
  "altnames": ["SERVICE"],
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
  "readLogs": false,
  "settings": [
    {
      "id": "multiLanguage",
      "multiLanguage": true
    }
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

> Se un campo è elencato come opzionale nella [documentazione](https://docs.premid.app/en/dev/presence/metadata) e la tua presenza utilizza il valore predefinito per esso, non includerlo nel file `metadati`. (per esempio, una presence senza supporto iframe non avrebbe bisogno del campo `iframe`.)

> Tutte le immagini nel file `metadata` devono essere hostate su `i.imgur.com`. L'uso di contenuti hostati sul sito web **non è** consentito in quanto possono cambiare i percorsi e i file non volentieri.

Un elenco dei campi e delle loro regole sono elencati di seguito:

### **`$schema`**

- Lo schema _key_ **deve** includere un segno di dollaro all'inizio di esso, questo segnalerà al tuo editor di testo che vuoi convalidare il tuo file JSON contro un modello. _Come detto in precedenza, non è necessario includere uno schema, ma se lo si include è necessario tenerne conto._

### **`author`**

- L'ID _value_ **deve** essere il tuo Discord snowflake ID. Puoi ottenerlo abilitando [la modalità sviluppatore](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-). _Per favore **non** confondere questo con l'ID dell'applicazione, che è solo per la tua presenza._

### **`*contributors`**

- **Non** aggiungerti come contributore, e non aggiungere qualcun altro come contributore a meno che non abbiano aiutato con la presenza.

### **`service`**

- Il nome del servizio **deve** essere il nome della directory della presence. Per esempio, se la presence si trova in `/websites/Y/YouTube/`, il nome del servizio deve essere `YouTube`.
- **Non puoi** utilizzare l'url come nome del servizio a meno che il sito non utilizzi l'url come nome ufficiale. Se il nome non è descrittivo e può essere considerato vago, utilizzare l'url è **richiesto**. (per esempio, `YouTube` è permesso perché questo è il nome ufficiale ed è descrittivo, mentre `youtube.com` non lo è. `Top` è un nome non descrittivo, quindi utilizzare l'url `top.gg` è **richiesto**.)
- If service has some explicit branding rules of their name, you should follow them.

### **`*altnames`**

- Da utilizzare **solo** nel caso il sito è sottoposto a nomi ufficiali multipli (es. Pokémon e 포켓몬스터) o per rendere più facile la ricerca della presenza senza usare caratteri speciali (es. Pokémon e Pokemon). Le versioni *abbreviate* dei nomi dei servizi vanno sotto `tags`.

### **`description`**

- **Tutte** le presenze sono **richieste** per avere una descrizione inglese indipendentemente dalla lingua preferita del sito.
- **Non** provare a tradurre tu stesso la descrizione a meno che tu non sappia la lingua, i traduttori modificheranno il tuo `metadata.json` e modificheranno le descrizioni se necessario.

### **`url`**

- L'url **deve** essere una stringa se il sito web utilizza solo un dominio. Se il sito web ne utilizza multipli, fanne un vettore e specifica ciascuno di essi.
- **Non** includere protocolli nell'url (per es., `http` o `https`), e non includere i parametri di query nell'url (per es., `www.google.com/search?gws_rd=ssl` che dovrebbe essere `www.google.com`)

### **`version`**

- Assicurati sempre che il numero di versione segua [standard di versionamento semantico](https://semver.org), che si traduce nel seguente schema: `<NEW-FEATURE>.<HUGE-BUGFIX>.<SMALL-BUGFIX-OR-METADATA-CHANGES>`. Qualsiasi altra cosa come `1.0.0.1`, `1.0`, `1`, `1.0. -BETA` o modifica `1.0.0` a `2.0.` su una correzione di bug/piccolo cambiamento che **non** è permessa.
- La versione **deve** iniziare sempre da `1.0.0` a meno che non sia stato detto diversamente, alle altre versioni **non** è permesso.

### **`logo`**

- Il logo **deve** essere un'immagine quadrata con aspect ratio `1:1`.
- L'immagine **deve** avere una risoluzione minima di `512x512` pixel. Puoi aumentarne la risoluzione usando uno strumento come [waifu2x](http://waifu2x.udp.jp/).

### **`thumbnail`**

- La miniatura **deve** preferibilmente essere una [carta promozionale](https://i.imgur.com/3QfIc5v.jpg) o una [schermata](https://i.imgur.com/OAcBmwW.png) se la prima è **non** disponibile.

### **`color`**

- Il colore **deve** essere un valore esadecimale compreso tra `#000000` e `#FFFFFF`.
- La stringa del colore **deve** essere preceduta da un simbolo hash.

### **`tags`**

- **Tutte** le presenze devono avere almeno _un_ tag.
- I tag **non** devono includere spazi, slash, virgolette singole/doppie, caratteri Unicode, e dovrebbero essere sempre minuscoli.
- I tag **devono** preferibilmente includere nomi di servizi alternativi per facilitare la ricerca (ad es. se una presenza di Amazon ha incluso il supporto AWS, avrebbe i suoi tag come `amazon-web-services` e `aws`)
- **Devi** aggiungere un tag `NSFW` se la presenza è per un sito web NSFW.

### **`category`**

- La categoria **deve** essere una delle seguenti elencate nella [documentazione](https://docs.premid.app/en/dev/presence/metadata#presence-categories).
- La presenza deve utilizzare una categoria che corrisponda al contenuto del sito. (per es., non utilizzare `anime` quando il sito web non è correlato ad anime).

### **`*regExp`** <br /> **`*iFrameRegExp`**

- Le espressioni regolari **devono** essere valide. Prova le tue espressioni con gli strumenti elencati nella [documentazione](https://docs.premid.app/en/dev/presence/metadata#testing).

### **`readLogs`**

- Must be `boolean` value (e.g. `true` or `false`).
- Enables logs for your presence.

### **`avvertenza`**

- Dichiarare **sempre** una nuova istanza della classe `Presenza` prima di qualsiasi altra variabile per evitare problemi rari che possono verificarsi; questo non è un requisito per la progettazione in modo che possa essere rimosso in futuro.
- Example of presence using this metadata variable is `VLC`.

### **`settings`**

- **Non** sei autorizzato a riscrivere una presence o a cambiare il suo autore. Se l'autore della presence è stato bandito dal server ufficiale o non ha apportato le modifiche richieste entro un mese, puoi contattare un revisore per vedere se puoi riscrivere la presence.
- Se fai delle modifiche ad una presenza e cambi almeno un **quarto** del codice base di riferimento della presenza, ti è permesso aggiungere te stesso come collaboratore. Contatta un verificatore per maggiori informazioni su questo argomento.
- If you are using the `multiLanguage` option it can have the following types:
  - **Boolean** type which will only enable strings from [`general.json`](https://github.com/PreMiD/Localization/blob/master/src/Presence/general.json) from the Localization repo or from the presence file (e.g. when the name of the presence is YouTube, the extension will get strings from `youtube.json` too.)
  - **String** type (e.g. `youtube`) which will specify the name of the files that you want to get strings from.
  - **Array<String>** type (e.g. `["youtube", "discord"]`) which will specify the name of the files that you want to get strings from.

## [**presence.ts**](/dev/presence/class)

> Il codice che scrivi **deve** essere _ben scritto_ e **deve** essere _leggibile_ e tutte le stringhe devono essere grammaticalmente corrette (gli errori grammaticali sui siti web possono essere ignorati).

> Ogni presenza segue un rigore di regole che saranno controllate durante il processo di revisione. Un paio di raccomandazioni possono essere viste di seguito. - [Raccomandazioni sui plug-in TypeScript per un controllo sulla tipizzazione forte](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules) - [Raccomandazioni ESlint](https://eslint.org/docs/rules) [ESlint Recommendations](https://eslint.org/docs/rules). [Prettier](https://prettier.io/).

Ecco un elenco di regole da seguire quando si scrive il file `presence.ts`:

- Dichiarare **sempre** una nuova istanza della classe `Presenza` prima di qualsiasi altra variabile per evitare problemi rari che possono verificarsi; questo non è un requisito per la progettazione in modo che possa essere rimosso in futuro.
- **Mai** utilizzare funzioni personalizzate quando [varianti native sono disponibili](https://docs.premid.app/dev/presence#files-explained); questo fa in modo che le correzioni sul livello di estensione si applicano anche alle vostre presenze. Sei libero di usare qualsiasi cosa ti serva se non li trovi elencati nei documenti.
- I tickets con il tuo nome per quanto riguarda lo sviluppo di una presence verranno eliminati.
- I campi `smallImageKey` e `smallImageText` sono intesi a fornire un contesto aggiuntivo/secondario (come `riproduzione/in pausa` per i siti video, `navigando` per siti regolari, e altri casi) non per promuovere profili Discord o qualsiasi cosa non correlata a PreMiD.
- **Non** sei autorizzato ad accedere a `localStorage`.
- Quando accedi ai cookie per i dati memorizzati, per favore prefissa la chiave con `PMD_`.
- Molti fanno solo richieste HTTP/HTTPS a `premid.app` o all'API del sito web delle presence. Se stai usando domini esterni, ti verrà richiesto di spiegare perché è necessario. Only allowed API to make request is [`Fetch API`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).
- Do **not** set fields in the presenceData object to undefined after it has been declared, use the `delete` keyword instead. (per es., usa `delete data.startTimestamp` invece di `data.startTimestamp = undefined`)
- **Non sei** autorizzato a scrivere presences che cambiano le funzionalità di un dato sito web. Ciò include l'aggiunta, la cancellazione o la modifica degli elementi DOM.

## [**tsconfig.json**](/dev/presence/tsconfig)

> **Non ** scrivere il tuo file `tsconfig.json`, usa quello che è stato fornito su [documentazione](https://docs.premid.app/en/dev/presence/tsconfig).

## Modifica

> È **necessario** modificare la versione nei **metadati** ad un valore superiore rispetto alla versione precedente quando si apportano modifiche a **presence.ts**, **iframe.ts** o **metadata.json**.

In alcune situazioni, le presence possono comportarsi in modo inaspettato o potrebbero usare alcune modifiche minori per migliorare la loro funzionalità. Ecco un elenco di regole che **devi** seguire durante la modifica delle presence.

- **Non** sei autorizzato a riscrivere una presence o a cambiare il suo autore. Se l'autore della presence è stato bandito dal server ufficiale o non ha apportato le modifiche richieste entro un mese, puoi contattare un revisore per vedere se puoi riscrivere la presence.
- Se fai delle modifiche ad una presenza e cambi almeno un **quarto** del codice base di riferimento della presenza, ti è permesso aggiungere te stesso come collaboratore. Contatta un revisore per maggiori informazioni su questo argomento.
- Anyone may provide hotfixes to fix bugs; however, try **not** to make changes that are **not** required. Le modifiche valide comprendono correzioni generali (codici e refusi), aggiunte (descrizioni e tag), file mancanti, ecc. **Non** cambiare le immagini se non sono obsolete e sono nelle specifiche.

# Modifiche

> **Tutto** il codice che ha contribuito al negozio sarà autorizzato sotto la `Licenza Pubblica Mozilla 2.0`.

> Se hai bisogno di contattare qualcuno, per favore utilizza il nostro server ufficiale Discord. Tutti i revisori avranno il ruolo `Revisore` sul loro profilo.

> Tieni presente che i revisori lavorano volontariamente e gestiscono altre repository oltre a questa, la tua richiesta di pull potrebbe non essere revisionata fino a ore o anche giorni successivi alla sua creazione.

> Avere **sempre** un fork aggiornato prima di creare la tua pull request. Ciò contribuirà a limitare i falsi positivi dai controlli.

Il processo più importante di sviluppo della presence è mostrare la tua presence nel negozio. Questo viene fatto facendo una [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) su GitHub sul repository `PreMiD/Presences`. I nostri revisori confermeranno che la tua presenza rispetti gli standard e la inseriranno nel negozio.

<div>
  <h2 style="font-size: 2rem; margin-bottom: 0;">Recensori Presence</h2>
  
  <a href="https://github.com/Bas950"><img src="https://github.com/Bas950.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>  <a href="https://github.com/Timeraa"><img src="https://github.com/Timeraa.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>  <a href="https://github.com/StrikerFRFX"><img src="https://github.com/StrikerFRFX.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <br />
</div>

## `Revisione`

Violazioni ripetitive come infrangere le linee guida, spam di richieste di pull, minacce, o comportamenti innapropriati ti vieteranno di creare presences.

In questo scenario, si verificheranno le seguenti modifiche:

- `Codacy` è un bot che controlla la qualità del codice. Se hai mai ricevuto errori per nuovi problemi, **devi** risolverli.
- Tutti i tuoi problemi e richieste di pull (creazione di una presence, contributo ad una presence, ecc) create dopo il ban saranno prontamente chiuse.
- I tickets con il tuo nome per quanto riguarda lo sviluppo di una presence verranno eliminati.

## `Controlli`

Alcune cose che dovresti sapere dopo aver aperto una pull request:

- Ci vogliono 2 revisionatori per unire una richiesta di pull.
- Se una pull request è inattiva per un periodo di 7 giorni, verrà immediatamente chiusa.
- Tutti i controlli **devono** essere passati per unirsi.
- ⚠️ È **necessario** fornire nuovi screenshot inalterati (forniti da te) che mostrano un confronto fianco a fianco del tuo profilo e del sito, per dimostrare che la presence funziona. _You are allowed to stitch screenshots together for viewing pleasure_ This applies for both creation and modification.
- ⚠️ È anche **richiesto** includere screenshot delle impostazioni di presenza nell'estensione, se fornito. Un esempio può essere visto [qui](https://imgur.com/a/OD3sj5R).

## `Regole Aggiuntive`

![Controlli](https://i.imgur.com/oqAakOc.png)

Attualmente, una presenza passa attraverso 2 stadi separati di controlli. Tutti questi controlli aiutano i revisori a determinare se la tua presence è adatta alla distribuzione.

- `Codacy` è un bot che controlla la qualità del codice. Se hai mai ricevuto errori per nuovi problemi, **devi** risolverli. (_WARNING: Codacy bot will be deprecated soon and you will need check errors only from DeepScan!_)
- `DeepScan` è un bot che verifica la qualità del codice. Se hai mai ricevuto errori per nuovi problemi, **devi** risolverli.
- `Validazione Schema` esegue la scansione del file `metadata.json` per rilevare eventuali errori (per es., campi mancanti, tipi di valori non validi, ecc.). Se mai vedessi nuovi problemi, è **necessario** anche risolverli. L'aggiunta di un campo schema al tuo file `metadata.json` permetterà al tuo editor di testo (se supportato) di mostrarti questi errori durante lo sviluppo.

## `Regole Aggiuntive`

- Assicurati **sempre** di iniziare la tua presenza nella cartella più appropriata, se il suo nome inizia con _qualsiasi_ lettera latina allora deve essere sotto la sua corrispondenza alfabetica (per es., `D/dアニメストア` o `G/Google`). Qualsiasi altro carattere Unicode/non-Latino **deve essere** sotto la cartella `#` (per es. `#/巴哈姆特`) e numeri sotto la cartella `0-9` (ad esempio, `0-9/4anime`).

Dopo aver seguito tutte le linee guida con le opportune revisioni e controlli, la presence sarà inserita nel negozio.

# Verifica
`Revisione 2` delle linee guida è stata scritta ed hanno contribuito i seguenti individui:

# Contributi

`Revisione 1` è stata mantenuta dai seguenti individui:

<div>
<a href="https://github.com/ririxidev"><img src="https://github.com/ririxidev.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
</div>

`Revisione 2` delle linee guida è stata scritta ed hanno contribuito i seguenti individui:

<div>
<a href="https://github.com/Alanexei"><img src="https://github.com/Alanexei.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
</div>

`Revisione 1` è stata mantenuta dai seguenti individui:

<div>
<a href="https://github.com/Alanexei"><img src="https://github.com/Alanexei.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
<a href="https://github.com/Bas950"><img src="https://github.com/Bas950.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
<a href="https://github.com/doomlerd"><img src="https://github.com/doomlerd.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
</div>