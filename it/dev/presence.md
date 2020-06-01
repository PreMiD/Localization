---
title: Sviluppo Presence
description:
published: vero
date: 2020-05-29T21:55:04.008Z
tags:
---

> Tutte le presenze sono ora memorizzate qui: https://github.com/PreMiD/Presences 
> 
> {.is-info}

La versione `2.x` introduce il [negozio di presenze](https://premid.app/store). Gli utenti ora hanno la possibilità di aggiungere e rimuovere manualmente le loro presenze preferite tramite l'interfaccia utente del [sito web](https://premid.app/).

# Linee guida

Quando pubblichiamo Presenze su questo GitHub, ti richiediamo di seguire un insieme di linee guida. Per alcuni, queste regole severe possono sembrare dure. Tuttavia, l'attuazione di queste regole impedirà a noi e agli utenti di affrontare qualsiasi questione.

## Creazione

Le regole generali di sviluppo della presenza sono le seguenti:

- Le presenze **DEVONO** essere correlate al sito che hai scelto.
- Le presenze **non possono** essere fatte per siti web illegali. ( per esempio, stressanti, marketing della droga, pornografia infantile, ecc. )
- La struttura del file deve essere pulita e gestita, non includere i file che non sono specificati. ( per esempio, cartelle vscode e git, file di immagine e di testo, ecc. )
- Devi avere una corretta struttura dei file, le bozze non **sono** permesse.
- Presenze per siti con ( TLD `.onion` ) o siti con domini/host gratis (per esempio `.TK` [tutti i domini gratis Freenom], `.RF`, `.GD`, ecc. ) non **sono** permessi, eccezioni possono essere fatte se viene presentata prova che hanno pagato per il dominio.
- Le presenze mirate a pagine browser interne ( come Chrome Web Store, pagine come `chrome://`, `about:`, ecc ) **non** sono permesse dato che richiedono che una flag esperimentale sia abilitata dall'utente e che potrebbe potenzialmente danneggiare il loro browser.
- Presences with support for only a single will **not** be permitted, as they may seem broken for other pages ( like the homepage ), exceptions can be made for the policy and contact pages ( content that isn't used often ) or sites where the other content is unrelated. ( per esempio, pagine wikia )
- Low quality presences ( or ones with little context ) are **not** allowed ( for e.g., only showing a logo and text but never changing it again. )
- Including the `dist` folder, `presence.ts` file, `iframe.ts` file, and `metadata.json` file is mandatory so the result would be what is represented in the following schema:

```bash
presence
├── dist
│   ├── metadata.json
│   └── presence.js
├── presence.ts
└── tsconfig.json
```

o se stai usando un file `iframe.ts`:

```bash
presence
├── dist
│   ├── metadata.json
│   ├── presence.js
│   └── iframe.js
├── presence.ts
├── iframe.ts
└── tsconfig.json
```

## [**metadata.json**](https://docs.premid.app/en/dev/presence/metadata)

> For the convenience of our presence developers, we have provided a schema which you can use to validate the integrity of your `metadata` file. Questo è assolutamente facoltativo e non è richiesto durante il processo di revisione.

> It is highly recommended that you organize your `metadata` file in the format shown below, and you must have grammatically correct service names, descriptions, tags, and setting fields. Qualsiasi cosa non organizzata secondo le specifiche **non** sarà permessa. 
> 
> {.is-warning}

Each presence has a descriptor file called `metadata.json`, the metadata has a strict standard and an example of this file can be seem below:

```json
{
  "$schema": "https://schemas.premid.app/metadata/1.0",
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

> If a field is listed as optional on the [documentation](https://docs.premid.app/en/dev/presence/metadata) and your presence uses the default value for it, do not include it in the `metadata` file. ( for e.g., a presence without iframe support would not need the `iframe` field. ) 
> 
> {.is-warning}

> All images in the `metadata` file must be hosted on `i.imgur.com` or on a CDN that gives you permissions to **change** image files. Content hosted on the website itself is **not** permitted as they can change the locations unwillingly. 
> 
> {.is-warning}

Un elenco dei campi e delle loro regole sono elencati di seguito:

### **`$schema`**

- The schema _key_ **must** include a dollar sign at the beginning of it, this will signal your text editor that you want to validate your JSON file against a model. _As stated earlier, you do not need to include a schema, but if you include it you must take this into account._

### **`autore`**

- L'ID _valore_ **deve** essere il tuo Discord snowflake ID. You can get it by enabling [developer mode](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-). _Please do **not** confuse this with your application ID, which is only for your presence._

### **`collaboratori`**

- Do **not** add yourself as a contributor, and do not add someone else as a contributor unless they have helped with the presence.

### **`servizio`**

- Il nome del servizio **deve** essere il nome della directory della presence. For example, if the presence is located at `/websites/Y/YouTube/`, the service name must be `YouTube`.

### **`descrizione`**

- **All** presences are **required** to have an English description regardless of the website's prefered language.
- Do **not** try and translate the description yourself unless you know that language, translators will modify your `metadata.json` and change the descriptions if necessary.

### **`Url`**

- L'url **deve** essere una stringa se il sito web utilizza solo un dominio. Se il sito web utilizza un multiplo, rendilo un array e specifica ciascuno di essi.
- Do **not** include protocols in the url ( for e.g., `http` or `https` ), and do not include query parameters in the url ( for e.g., `www.google.com/search?gws_rd=ssl` which should be `www.google.com/`)

### **`versione`**

- Always make sure the version number follows [semantic versioning standards](https://semver.org), which translates to the following scheme: `<NEW-FEATURE>.<HUGE-BUGFIX>.<SMALL-BUGFIX-OR-METADATA-CHANGES>`. Anything else like `1.0.0.1`, `1.0`, `1`, `1.0.0-BETA` or changing `1.0.0` to `2.0.0` on a bug fix/small change is **not** permitted.
- The version **must** always start at `1.0.0` unless told otherwise, other versions will **not** be permitted.

### **`logo`**

- The logo **must** be a square image with a `1:1` aspect ratio.
- The image is **required** to have a minimum resolution of `512x512` pixels. Puoi ingrandire l'immagine usando uno strumento come [waifu2x](http://waifu2x.udp.jp/).

### **`thumbnail`**

- The thumbnail **should** preferably be a [wide promotional card](https://i.imgur.com/3QfIc5v.jpg) or a [screenshot](https://i.imgur.com/OAcBmwW.png) if the first is **not** available.

### **`colore`**

- The color **must** be a hexadecimal value between `#000000` and `#FFFFFF`.
- La stringa del colore **deve** essere preceduta da un simbolo hash.

### **`tag`**

- **All** presences are required to have at least _one_ tag.
- Tags must **not** include any spaces, slashes, single/double quotation marks, Unicode characters, and should always be lowercase.
- Tags **should** preferably include alternate service names to make searching easier ( for e.g., if an Amazon presence had included AWS support, it would have its tags like `amazon-web-services` and `aws` )
- You are **required** to add an `NSFW` tag if the presence is for an NSFW website.

### **`Categoria`**

- The category **must** be one of the following listed on the [documentation](https://docs.premid.app/en/dev/presence/metadata#presence-categories).

### **`regExp`** <br /> **`iFrameRegExp`**

- Le espressioni regolari **devono** essere valide. Please test your expressions with the tools listed on the [documentation](https://docs.premid.app/en/dev/presence/metadata#testing).

### **`impostazioni`**

- If you decide to make a format string ( for e.g., `%song% by %artist%` ), you must have the variables surrounded by a percent sign on either side. Variables like `%var`, `var%`, or `%%var%%` and anything in between are **not** permitted for the sake of standardization.

## [**presence.ts**](https://docs.premid.app/en/dev/presence/class)

> The code you write **must** be _well-written_ and **must** be _readable_ and all strings must be grammatically correct ( grammar errors on websites can be ignored ). 
> 
> {.is-warning}

Ecco un elenco di regole da seguire quando si scrive il file `presence.ts`:

- **Always** declare a new instance of the `Presence` class before any other variable to avoid rare issues that may occur; this is not a requirement by design so it could be removed in the future.
- **Never** use custom functions when [native variants are available](https://docs.premid.app/dev/presence#files-explained); this makes sure fixes on the extension level also apply to your presences. Sei libero di usare qualsiasi cosa ti serva se non li trovi elencati nei documenti.
- It is **forbidden** to code presences for a site without adding support to its primary language ( for e.g., a YouTube presence coded with support only for Portueguese and Japanese, but not English itself. )
- The `smallImageKey` and `smallImageText` fields are intended to provide additional/secondary context ( such as `playing/paused` for video sites, `browsing` for regular sites, and other cases ) not to promote Discord profiles or anything unrelated to PreMiD.
- **Non** sei autorizzato ad accedere a `localStorage`.
- Quando accedi ai cookie per i dati memorizzati, per favore prefissa la chiave con `PMD_`.
- Making requests to external domains is **not** allowed unless you can specify why you are needing to do so.

## [**tsconfig.json**](https://docs.premid.app/en/dev/presence/tsconfig)

> Do **not** write your own `tsconfig.json` file, use what has been provided on [documentation](https://docs.premid.app/en/dev/presence/tsconfig). 
> 
> {.is-warning}

## Modifica

> You **must** change the version in the **metadata** to be a higher value from the previous version when making changes to either the **presence.ts**, **iframe.ts** or **metadata.json**. 
> 
> {.is-warning}

In some situations, presences may behave unexpectedly or could use some minor changes to improve their functionality. Here is a list of rules that you **must** follow while modifiying presences.

- **Non** sei autorizzato a riscrivere una presence o a cambiare il suo autore. If the presence author was banned from the official server or hasn't made the required changes within a month, you may contact a verifier to see if you can to rewrite the presence.
- Anyone may provide hotfixes to fix bugs; however, try **not** to make changes to code that does **not** need to be fixed. Valid modifications are, but **not** limited to, _missing paths_, _typos_, _missing images_, etc.
- If you make modifications to a presence and change at least a **quarter** of the presence's codebase, you are allowed to add yourself as a contributor. Contatta un verificatore per maggiori informazioni su questo argomento.
- Assicurati che le modifiche siano utili. Questi possono includere correzioni ( codice e errori di battitura ), aggiunte ( descrizioni e tags ), ecc. Do **not** change images if they are not outdated and are in specifications.

# Verifica

> Se hai bisogno di contattare qualcuno, per favore utilizza il nostro server ufficiale Discord. Tutti i verificatori avranno il ruolo `Presence Verifier` sul loro profilo.

> **All** code contributed to the store will be licensed under the `Mozilla Public License 2.0`.

> Avere **sempre** un fork aggiornato prima di creare la tua pull request. Questo aiuterà a limitare i falsi positivi da `DeepScan`. 
> 
> {.is-warning}

Il processo più importante di sviluppo della presence è mostrare la tua presence nel negozio. This is done by making a [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) on GitHub on the `PreMiD/Presences` repository. Our verifiers will confirm that your presence is up to standards and it will be pushed onto the store.

<div>
  <h2 style="font-size: 2rem; margin-bottom: 0;">Verificatori</h2>
  <a href="https://github.com/Alanexei"><img src="https://github.com/Alanexei.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/Bas950"><img src="https://github.com/Bas950.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/doomlerd"><img src="https://github.com/doomlerd.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/frozaum"><img src="https://github.com/frozaum.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/TheDropX"><img src="https://github.com/TheDropX.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <br />
</div>

## `Revisione`

Alcune cose che dovresti sapere dopo aver aperto una pull request:

- Ci vogliono 2 revisionatori per unire una richiesta di pull.
- Se una pull request è inattiva per un periodo di 7 giorni, verrà immediatamente chiusa.
- Tutti i controlli **devono** essere passati per unirsi.
- ⚠️ You **must** provide new, unaltered screenshots ( taken by you ) showing a side-by-side comparison of your profile and the website to prove that your presence works. _You are allowed to stitch screenshots together for viewing pleasure_ This applies for both creation and modification.

## `Controlli`

![Controlli](https://i.imgur.com/bk0A1iY.png)

Attualmente, una presenza passa attraverso 2 stadi separati di controlli. All of these checks help the verifiers determine whether your presence is suitable for deployment.

- `DeepScan` è un bot che verifica la qualità del codice. If you ever receive errors for new issues, you are **required** to fix them.
- `Schema Validation` will scan your `metadata.json` file for any errors ( for e.g., missing fields, invalid value types, etc. ). If you ever see any new issues, you are also **required** to fix those. Adding a schema field to your `metadata.json` file will allow your text editor ( if supported ) to show you these errors during development.

## `Regole Aggiuntive`

- **Always** make sure to start your presence in the most appropriate folder, if its name starts with _any_ Latin letter then it must be under its alphabetical match ( for e.g., `D/dアニメストア` or `G/Google` ). Any other Unicode/non-Latin characters **must** be under the `#` folder ( for e.g., `#/巴哈姆特` ) and numbers under the `0-9` folder ( for e.g., `0-9/4anime` ).

After meeting all of the guidelines with the proper reviews and checks, your presence will be merged with the store.

# Contributi

`Revision 2` of the guidelines was written and was contributed to by the following individuals:

<div>
<a href="https://github.com/Alanexei"><img src="https://github.com/Alanexei.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
</div>

`Revisione 1` è stata mantenuta dai seguenti individui:

<div>
<a href="https://github.com/Alanexei"><img src="https://github.com/Alanexei.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
<a href="https://github.com/Bas950"><img src="https://github.com/Bas950.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
<a href="https://github.com/doomlerd"><img src="https://github.com/doomlerd.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
</div>

# Struttura
Tutte le presence sono scritte in [TypeScript](https://www.typescriptlang.org/). [TypeScript](https://www.typescriptlang.org/) has some extra spicy type definitions over JavaScript, so fixing and identifying bugs is way easier.

## Installazione
1. Installa [Git](https://git-scm.com/).
2. Installa [Nodo](https://nodejs.org/en/) (viene fornito con [npm](https://www.npmjs.com/)).
3. Install [TypeScript](https://www.typescriptlang.org/index.html#download-links) (open a terminal and `npm install -g typescript`).

## Clonando il progetto
1. Apri un terminale e digita `git clone https://github.com/PreMiD/Presences`.
2. Scegli una cartella a tua scelta.
3. Aprilo con l'editor di codice.

## Creazione cartelle e file

1. Create a folder with the **name** (not an URL) of the service you want to support.
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

Copia il codice qui sopra e inseriscilo nel file `metadata.json`. Adesso è necessario modificare i valori delle proprietà. Please note that the following properties are optional to have in your `metadata.json` file, if you do not plan on using them you need to remove them.
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
      <td style="text-align:left">Un selettore di espressione regolare che seleziona gli iframe da inserire. Vedi regExp per maggiori informazioni.</td>
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

setInterval(10000, myOutsideHeavyLiftingFunction); 
//Run the function seperate from the UpdateData event every 10 seconds to get and set the variables which UpdateData picks up

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
- Se questo ancora non ti aiuta, allora chiedi aiuto a uno sviluppatore di presenze sul nostro [server Discord](https://discord.gg/WvfVZ8T).

# File spiegati
- [Classe Presenza](/dev/presence/class)
- [Classe iFrame](/dev/presence/iframe)
- [File dei metadati](/dev/presence/metadata)
- [Configurazione TypeScript](/dev/presence/tsconfig)
{.links-list}
