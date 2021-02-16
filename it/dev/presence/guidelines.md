---
title: Guidelines
description: Rules all presence developers must follow to have their presence added.
published: vero
date: 2020-12-29T02:18:29.846Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:45.733Z
---

# Guidelines

When publishing Presences to [our GitHub Repository](https://github.com/PreMiD/Presences), we require you to follow a set of guidelines. Per alcuni, queste regole severe possono sembrare dure. However, the implementation of these rule sets will keep us and our users from running into issues.

# Creation

The general rules of presence development are as follows:

- Presences **must** be related to the website of choice.
- Presences **cannot** be made for illegal websites. (per esempio, stressanti, marketing della droga, pornografia infantile, ecc.)
- The file structure must be clean and managed, do not include files which are not specified. (for e.g., vscode and git folders, image and text files, etc.)
- You need to have a proper file structure, drafts are **not** allowed.
- Presences for websites with (`.onion` TLDs) or websites with free domains/hosts (for e.g., `.TK` [all free Freenom domains], `.RF`, `GD`, etc) are **not** permitted, exceptions can be made if a proof is presented showing that they paid for the domain.
- The domain of the presence must be at least 2 months old.
- Le presenze mirate a pagine browser interne ( come Chrome Web Store, pagine come `chrome://`, `about:`, ecc.) **non** sono permesse dato che richiedono che una flag sperimentale sia abilitata dall'utente e che potrebbe potenzialmente danneggiare il loro browser.
- Le presenze con supporto solo per un singolo sottodominio **non ** saranno permesse, che possono sembrare danneggiate per altre pagine (come la homepage), possono essere fatte eccezioni per i criteri e le pagine di contatto (contenuti che non sono utilizzati spesso) o siti in cui l'altro contenuto non è correlato. (per esempio, pagine wikia)
- Presences for online radios are only allowed if the radio has at least 100 weekly listeners and 15 concurrent.
- Le presenze di bassa qualità (o quelle con poco contesto) **non** sono consentite (per es., mostrando solo un logo e un testo, ma mai più cambiarlo.)
- Compresa la cartella `dist`, file `presence.ts`, file `iframe.ts`, e file `metadata.json` è obbligatorio, quindi il risultato sarebbe quello che è rappresentato nel seguente schema:

```bash
presence
├── dist
│   ├── metadata.json
│   └── presence.js
├── presence.ts
└── tsconfig.json
```

or if you're using a `iframe.ts` file:

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

> For the convenience of our presence developers, we have provided a schema which you can use to validate the integrity of your `metadata` file. This is entirely optional and is not required during the review process. 
> 
> {.is-info}

> It is highly recommended that you organize your `metadata` file in the format shown below, and you must have grammatically correct service names, descriptions, tags, and setting fields. Anything not organized to specifications will **not** be permitted. 
> 
> {.is-warning}

> Presences of websites that have explicit content **must** have the `nsfw` tag, and the logo/thumbnail must **not** contain any of this content. 
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

> If a field is listed as optional on the [documentation](https://docs.premid.app/en/dev/presence/metadata) and your presence uses the default value for it, do not include it in the `metadata` file. (for e.g., a presence without iframe support would not need the `iframe` field.) 
> 
> {.is-warning}

> All images in the `metadata` file must be hosted on `i.imgur.com`. Using content hosted on the website is **not** permitted as they can change the paths and files unwillingly. 
> 
> {.is-warning}

A list of fields and their rules are listed below:

### **`$schema`**

- The schema _key_ **must** include a dollar sign at the beginning of it, this will signal your text editor that you want to validate your JSON file against a model. _As stated earlier, you do not need to include a schema, but if you include it you must take this into account._

### **`autore`**

- The ID _value_ **must** be your Discord snowflake ID. You can get it by enabling [developer mode](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-). _Please do **not** confuse this with your application ID, which is only for your presence._

### **`collaboratori`**

- Do **not** add yourself as a contributor, and do not add someone else as a contributor unless they have helped with the presence.

### **`service`**

- The service name **must** be the name of the presence directory. For example, if the presence is located at `/websites/Y/YouTube/`, the service name must be `YouTube`.
- You **cannot** use the url as the service name unless the website uses the url as its official name. If the name is not descriptive and can be considered vague, using the url is **required**. (for e.g., `YouTube` is permitted because that is the official name and is descriptive, while `youtube.com` is not. `Top` is a non-descriptive name, so using the url `top.gg` is **required**.)

### **`altnames`**

- **Only** use this in scenerios where a website goes under multiple official names (e.g. Pokémon and 포켓몬스터) or to make it easier to search the presence without using special characters (e.g. Pokémon and Pokemon). *Shortened* versions of service names go under `tags`.

### **`descrizione`**

- **All** presences are **required** to have an English description regardless of the website's prefered language.
- Do **not** try and translate the description yourself unless you know that language, translators will modify your `metadata.json` and change the descriptions if necessary.

### **`url`**

- L'url **deve** essere una stringa se il sito web utilizza solo un dominio. Se il sito web ne utilizza multipli, fanne un vettore e specifica ciascuno di essi.
- Do **not** include protocols in the url (for e.g., `http` or `https`), and do not include query parameters in the url (for e.g., `www.google.com/search?gws_rd=ssl` which should be `www.google.com`)

### **`versione`**

- Always make sure the version number follows [semantic versioning standards](https://semver.org), which translates to the following scheme: `<NEW-FEATURE>.<HUGE-BUGFIX>.<SMALL-BUGFIX-OR-METADATA-CHANGES>`. Anything else like `1.0.0.1`, `1.0`, `1`, `1.0.0-BETA` or changing `1.0.0` to `2.0.0` on a bug fix/small change is **not** permitted.
- The version **must** always start at `1.0.0` unless told otherwise, other versions will **not** be permitted.

### **`logo`**

- The logo **must** be a square image with a `1:1` aspect ratio.
- The image is **required** to have a minimum resolution of `512x512` pixels. You can upsize the imagine using a tool like [waifu2x](http://waifu2x.udp.jp/).

### **`thumbnail`**

- The thumbnail **should** preferably be a [wide promotional card](https://i.imgur.com/3QfIc5v.jpg) or a [screenshot](https://i.imgur.com/OAcBmwW.png) if the first is **not** available.

### **`color`**

- The color **must** be a hexadecimal value between `#000000` and `#FFFFFF`.
- La stringa del colore **deve** essere preceduta da un simbolo hash.

### **`tag`**

- **All** presences are required to have at least _one_ tag.
- Tags must **not** include any spaces, slashes, single/double quotation marks, Unicode characters, and should always be lowercase.
- Tags **should** preferably include alternate service names to make searching easier (for e.g., if an Amazon presence had included AWS support, it would have its tags like `amazon-web-services` and `aws`)
- You are **required** to add an `NSFW` tag if the presence is for an NSFW website.

### **`category`**

- The category **must** be one of the following listed on the [documentation](https://docs.premid.app/en/dev/presence/metadata#presence-categories).
- The presence must use a category that matches the content of the website. (for e.g., don't use `anime` when the website isn't related to anime).

### **`regExp`** <br /> **`iFrameRegExp`**

- Le espressioni regolari **devono** essere valide. Please test your expressions with the tools listed on the [documentation](https://docs.premid.app/en/dev/presence/metadata#testing).

### **`impostazioni`**

- If you decide to make a format string (for e.g., `%song% by %artist%`), you must have the variables surrounded by a percent sign on either side. Variables like `%var`, `var%`, or `%%var%%` and anything in between are **not** permitted for the sake of standardization.
- The name of settings must **not** be in all capital letters. For example, names such as `SHOW BROWSING STATUS` will **not** be permitted; however, names such as `Show Browsing Status` or `Show browsing status` are permitted.
- Adding custom strings to the [Localization Repository](https://github.com/PreMiD/Localization) to later be used within the `multiLanguage` setting is only allowed if the presence has already been released before and has aquired at least 1000 users.

## [**presence.ts**](https://docs.premid.app/en/dev/presence/class)

> The code you write **must** be _well-written_ and **must** be _readable_ and all strings must be grammatically correct (grammar errors on websites can be ignored). 
> 
> {.is-warning}

> Each presence follows a strict linting ruleset which will be checked during the review process. A couple of recommendations can be seen below. - [TypeScript Plugin Recommendations for Strict Type Checking](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules) - [ESlint Recommendations](https://eslint.org/docs/rules) 
> 
> {.is-info}

Here is a list of rules you must follow when writing your `presence.ts` file:

- **Always** declare a new instance of the `Presence` class before any other variable to avoid rare issues that may occur; this is not a requirement by design so it could be removed in the future.
- **Never** use custom functions when [native variants are available](https://docs.premid.app/dev/presence#files-explained); this makes sure fixes on the extension level also apply to your presences. Sei libero di usare qualsiasi cosa ti serva se non li trovi elencati nei documenti.
- It is **forbidden** to code presences for a site without adding support to its primary language (for e.g., a YouTube presence coded with support only for Portueguese and Japanese, but not English itself.)
- The `smallImageKey` and `smallImageText` fields are intended to provide additional/secondary context (such as `playing/paused` for video sites, `browsing` for regular sites, and other cases) not to promote Discord profiles or anything unrelated to PreMiD.
- **Non** sei autorizzato ad accedere a `localStorage`.
- Quando accedi ai cookie per i dati memorizzati, per favore prefissa la chiave con `PMD_`.
- You may only make HTTP/HTTPS requests to `premid.app` or the presence website API. If you are using external domains, you will be required to explain why it is necessary.
- Do **not** set fields in the presence data object to undefined after it has been declared, use the `delete` keyword instead. (for e.g., use `delete data.startTimestamp` instead of `data.startTimestamp = undefined`)
- You are **not** allowed to write presences that change the functionality of a given website. This includes the addition, deletion, or modification of DOM elements.

## [**tsconfig.json**](https://docs.premid.app/en/dev/presence/tsconfig)

> **Non ** scrivere il tuo file `tsconfig.json`, usa quello che è stato fornito su [documentazione](https://docs.premid.app/en/dev/presence/tsconfig). 
> 
> {.is-warning}

# Modifica

> È **necessario** modificare la versione nei **metadati** ad un valore superiore rispetto alla versione precedente quando si apportano modifiche a **presence.ts**, **iframe.ts** o **metadata.json**. 
> 
> {.is-warning}

In some situations, presences may behave unexpectedly or could use some minor changes to improve their functionality. Here is a list of rules that you **must** follow while modifiying presences.

- **Non** sei autorizzato a riscrivere una presence o a cambiare il suo autore. If the presence author was banned from the official server or hasn't made the required changes within a month, you may contact a reviewer to see if you can to rewrite the presence.
- Se fai delle modifiche ad una presenza e cambi almeno un **quarto** del codice base di riferimento della presenza, ti è permesso aggiungere te stesso come collaboratore. Contatta un verificatore per maggiori informazioni su questo argomento.   - Se fai delle modifiche ad una presenza e cambi almeno un **quarto** del codice base di riferimento della presenza, ti è permesso aggiungere te stesso come collaboratore. Contatta un revisore per maggiori informazioni su questo argomento.
-  Anyone may provide hotfixes to fix bugs; however, do **not** to make changes that are **not** required. Valid modifications include general fixes (code and typos), additions (descriptions and tags), missing files, etc. **Non** cambiare le immagini se non sono obsolete e sono nelle specifiche.

# Verification

> **Tutto** il codice che ha contribuito al negozio sarà autorizzato sotto la `Licenza Pubblica Mozilla 2.0`. 
> 
> {.is-info}

> Se hai bisogno di contattare qualcuno, per favore utilizza il nostro server ufficiale Discord. Tutti i revisori avranno il ruolo `Revisore` sul loro profilo. 
> 
> {.is-info}

> Tieni presente che i revisori lavorano volontariamente e gestiscono altre repository oltre a questa, la tua richiesta di pull potrebbe non essere revisionata fino a ore o anche giorni successivi alla sua creazione. 
> 
> {.is-warning}

> Avere **sempre** un fork aggiornato prima di creare la tua pull request. This will help limit false positives from the checks. 
> 
> {.is-warning}

The most important process of presence development is getting your presence on the store. This is done by making a [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) on GitHub on the `PreMiD/Presences` repository. Our reviewers will confirm that your presence is up to standards and will push it onto the store.

<div>
  <h2 style="font-size: 2rem; margin-bottom: 0;">Presence Reviewers</h2>
  <a href="https://github.com/Bas950"><img src="https://github.com/Bas950.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/Timeraa"><img src="https://github.com/Timeraa.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/ririxichan"><img src="https://github.com/ririxichan.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <br />
</div>

## `Restrictions`

Repetitive offenses such as breaking guidelines, spamming pull requests, threats, or innapropriate behavior will get you banned from creating presences.

In this scenerio, the following changes will occur:

- Presences under your management will be transferred to the PreMiD bot or another user (reviewer decision). The application id for each presence will be recreated under the new owner's name.
- All of your issues and pull requests (presence creation, presence contribution, etc) created following the ban will be prompty closed.
- Tickets created under your name regarding presence development will be deleted.


## `Revisione`

Alcune cose che dovresti sapere dopo aver aperto una pull request:

- Ci vogliono 2 revisionatori per unire una richiesta di pull.
- Se una pull request è inattiva per un periodo di 14 giorni, verrà immediatamente chiusa.
- Tutti i controlli **devono** essere passati per unirsi.
- ⚠️ È **necessario** fornire nuovi screenshot inalterati (forniti da te) che mostrano un confronto fianco a fianco del tuo profilo e del sito, per dimostrare che la presence funziona. _Sei autorizzato a unire gli screenshot insieme per una visualizzazione migliore._ Questo vale sia per la creazione che per la modifica.
- ⚠️ È anche **richiesto** includere screenshot delle impostazioni di presenza nell'estensione, se fornito. Un esempio può essere visto [qui](https://imgur.com/a/OD3sj5R).

## `Controlli`

![Controlli](https://i.imgur.com/BCDZQe9.png)

Attualmente, una presenza passa attraverso 2 stadi separati di controlli. All of these checks help the reviewers determine whether your presence is suitable for deployment.

- `Codacy` is a bot that checks for code quality. Se hai mai ricevuto errori per nuovi problemi, **devi** risolverli.
- `Validazione Schema` esegue la scansione del file `metadata.json` per rilevare eventuali errori (per es., campi mancanti, tipi di valori non validi, ecc.). Se mai vedessi nuovi problemi, è **necessario** anche risolverli. L'aggiunta di un campo schema al tuo file `metadata.json` permetterà al tuo editor di testo (se supportato) di mostrarti questi errori durante lo sviluppo.

## `Regole Aggiuntive`

- Assicurati **sempre** di iniziare la tua presenza nella cartella più appropriata, se il suo nome inizia con _qualsiasi_ lettera latina allora deve essere sotto la sua corrispondenza alfabetica (per es., `D/dアニメストア` o `G/Google`). Qualsiasi altro carattere Unicode/non-Latino **deve essere** sotto la cartella `#` (per es. `#/巴哈姆特`) e numeri sotto la cartella `0-9` (ad esempio, `0-9/4anime`).

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
