---
title: Linee guida
description: Regole che tutti gli sviluppatori di presenze devono seguire per aggiungere la loro presenza.
published: vero
date: 2020-07-21T22:22:06.316Z
tags:
editor: markdown
---

# Linee guida

Quando pubblichiamo Presenze su questo GitHub, ti richiediamo di seguire un insieme di linee guida. Per alcuni, queste regole severe possono sembrare dure. Tuttavia, l'attuazione di queste regole impedirà a noi e agli utenti di affrontare qualsiasi questione.

# Creazione

Le regole generali di sviluppo della presenza sono le seguenti:

- Le presenze **DEVONO** essere correlate al sito che hai scelto.
- Le presenze **non possono** essere fatte per siti web illegali. (per esempio, stressanti, marketing della droga, pornografia infantile, ecc.)
- La struttura del file deve essere pulita e gestita, non includere i file che non sono specificati. (ad esempio, cartelle vscode e git, immagini e file di testo, ecc.)
- Devi avere una corretta struttura dei file, le bozze non **sono** permesse.
- Presences for websites with (`.onion` TLDs) or websites with free domains/hosts (for e.g., `.TK` [all free Freenom domains], `.RF`, `GD`, etc) are **not** permitted, exceptions can be made if a proof is presented showing that they paid for the domain.
- Presence that target internal browser pages (like Chrome Web Store, `chrome://`, `about:` pages, etc) are **not** allowed as they require an experimental flag to be enabled on the user's end and could potentially cause damage to their browsers.
- Presences with support for only a single subdomain will **not** be permitted, as they may seem broken for other pages (like the homepage), exceptions can be made for the policy and contact pages (content that isn't used often) or sites where the other content is unrelated. (per esempio, pagine wikia)
- Low quality presences (or ones with little context) are **not** allowed (for e.g., only showing a logo and text but never changing it again.)
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

> Per la comodità dei nostri sviluppatori di presenza, abbiamo fornito uno schema che puoi usare per convalidare l'integrità del tuo file `metadati`. Questo è assolutamente facoltativo e non è richiesto durante il processo di revisione. 
> 
> {.is-info}

> Si raccomanda vivamente di organizzare il file `metadati` nel formato mostrato di seguito, e di inserire nomi di servizio, descrizioni, tag e campi di impostazione grammaticalmente corretti. Qualsiasi cosa non organizzata in base alle specifiche non **** sarà permessa. 
> 
> {.is-warning}

> Le presenze di siti web che hanno contenuto esplicito **devono** avere il tag `nsfw`, e il logo/thumbnail deve **non** contenere nessuno di questi contenuti. 
> 
> {.is-warning}

Ogni presenza ha un file descrittore chiamato `metadata. son`, i metadati hanno uno standard rigoroso e un esempio di questo file può sembrare di seguito:

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

> Se un campo è elencato come opzionale nella [documentazione](https://docs.premid.app/en/dev/presence/metadata) e la tua presenza utilizza il valore predefinito per esso, non includerlo nel file `metadati`. (per esempio, una presence senza supporto iframe non avrebbe bisogno del campo `iframe`.) 
> 
> {.is-warning}

> All images in the `metadata` file must be hosted on `i.imgur.com` or on a CDN that gives you permissions to **change** image files. Il contenuto ospitato sul sito web stesso **non** è consentito in quanto può cambiare le posizioni malvolentieri. 
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

- Il nome del servizio **deve** essere il nome della directory della presence. Per esempio, se la presence si trova in `/websites/Y/YouTube/`, il nome del servizio deve essere `YouTube`.
- You **cannot** use the url as the service name unless the website uses the url as its official name. If the name is not descriptive and can be considered vague, using the url is **required**. (for e.g., `YouTube` is permitted because that is the official name and is descriptive, while `youtube.com` is not. `Top` is a non-descriptive name, so using the url `top.gg` is **required**.)

### **`altnames`**

- **Only** use this in scenerios where a website goes under multiple official names (e.g. Pokémon and 포켓몬스터) or to make it easier to search the presence without using special characters (e.g. Pokémon and Pokemon). Le versioni *abbreviate* dei nomi dei servizi vanno sotto `tags`.

### **`descrizione`**

- **All** presences are **required** to have an English description regardless of the website's prefered language.
- Do **not** try and translate the description yourself unless you know that language, translators will modify your `metadata.json` and change the descriptions if necessary.

### **`Url`**

- L'url **deve** essere una stringa se il sito web utilizza solo un dominio. Se il sito web ne utilizza multipli, fanne un vettore e specifica ciascuno di essi.
- Do **not** include protocols in the url (for e.g., `http` or `https`), and do not include query parameters in the url (for e.g., `www.google.com/search?gws_rd=ssl` which should be `www.google.com`)

### **`versione`**

- Always make sure the version number follows [semantic versioning standards](https://semver.org), which translates to the following scheme: `<NEW-FEATURE>.<HUGE-BUGFIX>.<SMALL-BUGFIX-OR-METADATA-CHANGES>`. Anything else like `1.0.0.1`, `1.0`, `1`, `1.0.0-BETA` or changing `1.0.0` to `2.0.0` on a bug fix/small change is **not** permitted.
- The version **must** always start at `1.0.0` unless told otherwise, other versions will **not** be permitted.

### **`logo`**

- Il logo **deve** essere un'immagine quadrata con rapporto `1:1`.
- L'immagine **deve** avere una risoluzione minima di `512x512` pixel. Puoi modificare l'immagine usando uno strumento come [waifu2x](http://waifu2x.udp.jp/).

### **`thumbnail`**

- The thumbnail **should** preferably be a [wide promotional card](https://i.imgur.com/3QfIc5v.jpg) or a [screenshot](https://i.imgur.com/OAcBmwW.png) if the first is **not** available.

### **`colore`**

- Il colore **deve** essere un valore esadecimale compreso tra `#000000` e `#FFFFFF`.
- La stringa del colore **deve** essere preceduta da un simbolo hash.

### **`tag`**

- **Tutte** le presence devono avere almeno _un_ tag.
- Tags must **not** include any spaces, slashes, single/double quotation marks, Unicode characters, and should always be lowercase.
- Tags **should** preferably include alternate service names to make searching easier (for e.g., if an Amazon presence had included AWS support, it would have its tags like `amazon-web-services` and `aws`)
- **Devi** aggiungere un tag `NSFW` se la presence è per un sito web NSFW.

### **`Categoria`**

- The category **must** be one of the following listed on the [documentation](https://docs.premid.app/en/dev/presence/metadata#presence-categories).
- The presence must use a category that matches the content of the website. (for e.g., don't use `anime` when the website isn't related to anime).

### **`regExp`** <br /> **`iFrameRegExp`**

- Le espressioni regolari **devono** essere valide. Please test your expressions with the tools listed on the [documentation](https://docs.premid.app/en/dev/presence/metadata#testing).

### **`impostazioni`**

- If you decide to make a format string (for e.g., `%song% by %artist%`), you must have the variables surrounded by a percent sign on either side. Variables like `%var`, `var%`, or `%%var%%` and anything in between are **not** permitted for the sake of standardization.
- The name of settings must **not** be in all capital letters. For example, names such as `SHOW BROWSING STATUS` will **not** be permitted; however, names such as `Show Browsing Status` or `Show browsing status` are permitted.

## [**presence.ts**](https://docs.premid.app/en/dev/presence/class)

> The code you write **must** be _well-written_ and **must** be _readable_ and all strings must be grammatically correct (grammar errors on websites can be ignored). 
> 
> {.is-warning}

Ecco un elenco di regole da seguire quando si scrive il file `presence.ts`:

- **Always** declare a new instance of the `Presence` class before any other variable to avoid rare issues that may occur; this is not a requirement by design so it could be removed in the future.
- **Never** use custom functions when [native variants are available](https://docs.premid.app/dev/presence#files-explained); this makes sure fixes on the extension level also apply to your presences. Sei libero di usare qualsiasi cosa ti serva se non li trovi elencati nei documenti.
- It is **forbidden** to code presences for a site without adding support to its primary language (for e.g., a YouTube presence coded with support only for Portueguese and Japanese, but not English itself.)
- The `smallImageKey` and `smallImageText` fields are intended to provide additional/secondary context (such as `playing/paused` for video sites, `browsing` for regular sites, and other cases) not to promote Discord profiles or anything unrelated to PreMiD.
- **Non** sei autorizzato ad accedere a `localStorage`.
- Quando accedi ai cookie per i dati memorizzati, per favore prefissa la chiave con `PMD_`.
- You may only make HTTP/HTTPS requests to `premid.app` or the presence website API. Se stai usando domini esterni, ti verrà richiesto di spiegare perché è necessario.
- Do **not** set fields in the presence data object to undefined after it has been declared, use the `delete` keyword instead. (for e.g., use `delete data.startTimestamp` instead of `data.startTimestamp = undefined`)

## [**tsconfig.json**](https://docs.premid.app/en/dev/presence/tsconfig)

> Do **not** write your own `tsconfig.json` file, use what has been provided on [documentation](https://docs.premid.app/en/dev/presence/tsconfig). 
> 
> {.is-warning}

# Modifica

> You **must** change the version in the **metadata** to be a higher value from the previous version when making changes to either the **presence.ts**, **iframe.ts** or **metadata.json**. 
> 
> {.is-warning}

In alcune situazioni, le presence possono comportarsi in modo inaspettato o potrebbero usare alcune modifiche minori per migliorare la loro funzionalità. Ecco un elenco di regole che **devi** seguire durante la modifica delle presence.

- **Non** sei autorizzato a riscrivere una presence o a cambiare il suo autore. If the presence author was banned from the official server or hasn't made the required changes within a month, you may contact a verifier to see if you can to rewrite the presence.
- Anyone may provide hotfixes to fix bugs; however, try **not** to make changes to code that does **not** need to be fixed. Valid modifications are, but **not** limited to, _missing paths_, _typos_, _missing images_, etc.
- If you make modifications to a presence and change at least a **quarter** of the presence's codebase, you are allowed to add yourself as a contributor. Contatta un verificatore per maggiori informazioni su questo argomento.
- Assicurati che le modifiche siano utili. Questi possono includere correzioni (codice e errori di battitura), aggiunte (descrizioni e tags), ecc. **Non** cambiare le immagini se non sono obsolete e sono nelle specifiche.

# Verifica

> Se hai bisogno di contattare qualcuno, per favore utilizza il nostro server ufficiale Discord. Tutti i verificatori avranno il ruolo `Presence Verifier` sul loro profilo. 
> 
> {.is-info}

> **Tutto** il codice che ha contribuito al negozio sarà autorizzato sotto la `Licenza Pubblica Mozilla 2.0`. 
> 
> {.is-info}

> Avere **sempre** un fork aggiornato prima di creare la tua pull request. Questo aiuterà a limitare i falsi positivi di `DeepScan`. 
> 
> {.is-warning}

Il processo più importante di sviluppo della presence è mostrare la tua presence nel negozio. This is done by making a [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) on GitHub on the `PreMiD/Presences` repository. I nostri verificatori confermeranno che la tua presence sia all'altezza degli standard e sarà inserita nel negozio.

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
- ⚠️ You **must** provide new, unaltered screenshots (taken by you) showing a side-by-side comparison of your profile and the website to prove that your presence works. _You are allowed to stitch screenshots together for viewing pleasure._ This applies for both creation and modification.
- ⚠️ You are also **required** to include screenshots of the presence settings in the extension if supplied. An example can be seen [here](https://imgur.com/a/OD3sj5R).

## `Controlli`

![Controlli](https://i.imgur.com/bk0A1iY.png)

Attualmente, una presenza passa attraverso 2 stadi separati di controlli. Tutti questi controlli aiutano i verificatori a determinare se la tua presence è adatta alla distribuzione.

- `DeepScan` è un bot che verifica la qualità del codice. Se hai mai ricevuto errori per nuovi problemi, **devi** risolverli.
- `Schema Validation` will scan your `metadata.json` file for any errors (for e.g., missing fields, invalid value types, etc.). Se mai vedessi nuovi problemi, **devi** anche risolverli. Adding a schema field to your `metadata.json` file will allow your text editor (if supported) to show you these errors during development.

## `Regole Aggiuntive`

- **Always** make sure to start your presence in the most appropriate folder, if its name starts with _any_ Latin letter then it must be under its alphabetical match (for e.g., `D/dアニメストア` or `G/Google`). Any other Unicode/non-Latin characters **must** be under the `#` folder (for e.g., `#/巴哈姆特`) and numbers under the `0-9` folder (for e.g., `0-9/4anime`).

Dopo aver seguito tutte le linee guida con le opportune revisioni e controlli, la presence sarà inserita nel negozio.

# Contributi

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
