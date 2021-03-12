---
title: Presence Guidelines
description: Den regelen som alle som utvikler seg, må følge for å få nærvær til.
published: true
date: 2021-03-06T15:01:04.274Z
tags:
editor: markdown
dateCreated: 2021-02-26T21:54:41.573Z
---

<div align="center">
    <img src="https://github.com/PreMiD.png?size=2048" width="128px" style="max-width:100%;">
    <h3 style="font-size: 2rem; margin-bottom: 0">Presence Guidelines</h3>
    <h4 style="margin-top: 0">Revision 3</h4>
    <br />
</div>

# Retningslinjer

Når du publiserer Presences til [vårt GitHub Repository](https://github.com/PreMiD/Presences), krever vi at du følger et sett med retningslinjer. For noe kan det virke tøffe regler. Implementeringen av disse regelsettene vil imidlertid føre oss og våre brukere til problemer.

# Opprettelse

De allmenne reglene for stedsutvikling er som følger:

- Presansen **må** være relatert til nettstedet til valget.
- Presse **kan ikke** lages for ulovlige nettsteder. (for eksempel stress, markedsføring av legemidler, barnepornografi osv.)
- Filstrukturen må være ren og tilgjengelig. Legg ikke med filer som ikke er angitt. F.eks., vscode og git mapper, bilde og tekstfiler, osv.)
- Du må ha en riktig filstruktur, utkast er **ikke** tillatt.
- Foredrag for nettsteder med (`.onion` TLDer) eller nettsteder med gratis domener/verter (for e. `.TK` [all free Freenom domener], `. F`, `GD`, etc) er **ikke tillatt** det kan gjøres unntak ved dokumentasjon som viser at de har betalt for domenet.
- Domenet må være minst 2 måneder gammel.
- Presence som henvender seg til interne nettlesersider (som Chrome Web Store, `chrome://`, `om:` sider, etc) er **ikke** tillatt fordi de krever at et eksperimentelt flagg er aktivert på brukerens slutt og kan potensielt forårsake skade på nettleserne deres.
- Presse med støtte for bare ett enkelt underdomene vil **ikke** være tillatt, ettersom de kan virke knust for andre sider (som hjemmesiden), Det kan gjøres unntak for politikk- og kontaktsidene (innhold som ikke er brukt ofte) eller nettsteder der det andre innholdet ikke har sammenheng med. (for eksempel wikisider)
- Presse for online radioer er bare tillatt hvis radioen har minst 100 ukentlige lyttere og 15 samtidig.
- Lave kvalitetspresser (eller de som har liten kontekst) er **ikke** tillatt (for e. bare viser logo og tekst, men aldri endre den igjen.)
- With the `buttons` release, we require some guidelines for them:
  - Redirects to main page are prohibited.
  - Promoting websites by them is prohibited.
  - They can't show addinational data when you can't show them in `state` or `details`.
- Inkluderer `dist` mappen, `presence.ts` fil, `iframe. s` -fil, og `metadata.json` -filen er obligatorisk så resultatet ville være hva som er vist i følgende skjema:

```bash
presence
├── dist
│   └── metadata.json
├── presence.ts
└── tsconfig.json
```

eller hvis du bruker en `iframe.ts` fil:

```bash
presence
├── dist
│   └── metadata.json
├── presence.ts
├── iframe.ts
└── tsconfig.json
```

## [**metadata.json**](/dev/presence/metadata)

> Når det gjelder nærværsutviklere, vil dette skje i størst mulig grad vi har levert et skjema som du kan bruke til å validere integriteten til filen `metadata`. Dette er helt valgfritt og er ikke nødvendig under vurderingsprosessen.

> Det anbefales sterkt at du organiserer filen `metadata` i formatet vist nedenfor, og du må ha grammatimisk riktige tjenestenavn, beskrivelser, tagger og innstillingsfelt. Alt som ikke er organisert i spesifikasjoner vil ikke **** bli tillatt.

> Presences of websites that have explicit content **must** have the `nsfw` tag, og logoen/miniatyrbildet må **ikke** inneholde noe av dette innholdet.

Hver tilstedeværelse har en deskriptorfil kalt `metadata. son`, metadataen har en streng standard og et eksempel på denne filen kan vises nedenfor:

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

> Hvis et felt er oppført som valgfritt i [dokumentasjonen](https://docs.premid.app/en/dev/presence/metadata) og din tilstedeværelse bruker standardverdien for det, ikke inkluder det i `metadata` -filen. For eksempel vil en tilstedeværelse uten integrert ramme ikke trenge `iframe` felt.)

> Alle bilder i `metadata` -filen må være hostet på `i.imgur.com`. Ved å bruke innholdet som vert på nettsiden er **** tillatt fordi de kan endre stiene og filene som ikke er frivillige.

En liste over felt og deres regler står oppført nedenfor:

### **`$schema`**

- Skjemaet _nøkkel_ **må** inneholde et dollar tegn ved begynnelsen av det Dette vil signalisere redigeringsprogrammet ditt som du ønsker å validere JSON-filen din mot en modell. _Som tidligere oppgitt trenger du ikke å ta med en ordning, men hvis du inkluderer den må du ta hensyn til._

### **`author`**

- IDen _verdi_ **må** være Discord snowflake ID. Du kan få det ved å aktivere [utviklermodus](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-). _Vær snill å **ikke** forveksle dette med din program-ID, som bare er for ditt nærvær._

### **`*contributors`**

- Ikke **** legge til deg selv som bidragsyter, og ikke legg til noen andre som bidragsyter med mindre de har hjulpet til med tilstedeværelsen.

### **`service`**

- Tjenestenavnet **må** være navnet på tilstedeværelse katalogen. For eksempel hvis det finnes tilstedeværelse på `/websites/Y/YouTube/`, må tjenestenavnet være `YouTube`.
- Du **kan** bruke nettadressen som tjenestenavn med mindre nettstedet bruker url'en som sitt navn. Hvis navnet ikke er beskrivende og kan betraktes som en vage, ved hjelp av Url-en er **nødvendig**. (for eksempel `YouTube` er tillatt fordi det er offisiell navn og er beskrivende, mens `youtube.com` ikke er det. `Topp` er et ikke-beskrivende navn, så ved hjelp av url `topp.gg` er **nødvendig**.)
- If service has some explicit branding rules of their name, you should follow them.

### **`*altnames`**

- **Bare** bruk denne i scenerios hvor en nettside går under flere offisielle navn (f.eks Poke″mon og ε″″″″″″″″″εε″)-eller for å gjøre det enklere å søke i nærvær uten å bruke spesialtegn (f.eks. Pokeephalmon og Pokemon). *Forkortet* versjoner av tjenestenavn går under `tags`.

### **`description`**

- **All** presences are **required** to have an English description regardless of the website's prefered language.
- Do **not** try and translate the description yourself unless you know that language, translators will modify your `metadata.json` and change the descriptions if necessary.

### **`url`**

- The url **must** be a string if the website only uses one domain. If the website uses multiple, make this an array and specify each one.
- Do **not** include protocols in the url (for e.g., `http` or `https`), and do not include query parameters in the url (for e.g., `www.google.com/search?gws_rd=ssl` which should be `www.google.com`)

### **`version`**

- Always make sure the version number follows [semantic versioning standards](https://semver.org), which translates to the following scheme: `<NEW-FEATURE>.<HUGE-BUGFIX>.<SMALL-BUGFIX-OR-METADATA-CHANGES>`. Anything else like `1.0.0.1`, `1.0`, `1`, `1.0.0-BETA` or changing `1.0.0` to `2.0.0` on a bug fix/small change is **not** permitted.
- The version **must** always start at `1.0.0` unless told otherwise, other versions will **not** be permitted.

### **`logo`**

- The logo **must** be a square image with a `1:1` aspect ratio.
- The image is **required** to have a minimum resolution of `512x512` pixels. You can upsize it using a tool like [waifu2x](http://waifu2x.udp.jp/).

### **`thumbnail`**

- The thumbnail **should** preferably be a [wide promotional card](https://i.imgur.com/3QfIc5v.jpg) or a [screenshot](https://i.imgur.com/OAcBmwW.png) if the first is **not** available.

### **`color`**

- The color **must** be a hexadecimal value between `#000000` and `#FFFFFF`.
- The color string **must** be prepended with a hash symbol.

### **`tags`**

- **All** presences are required to have at least _one_ tag.
- Tags must **not** include any spaces, slashes, single/double quotation marks, Unicode characters, and should always be lowercase.
- Tags **should** preferably include alternate service names to make searching easier (for e.g., if an Amazon presence had included AWS support, it would have its tags like `amazon-web-services` and `aws`)
- You are **required** to add an `NSFW` tag if the presence is for an NSFW website.

### **`category`**

- The category **must** be one of the following listed on the [documentation](/dev/presence/metadata#presence-categories).
- The presence must use a category that matches the content of the website. (for e.g., don't use `anime` when the website isn't related to anime).

### **`*regExp`** <br /> **`*iFrameRegExp`**

- Regular expressions **must** be valid. Please test your expressions with the tools listed on the [documentation](/dev/presence/metadata#testing).

### **`readLogs`**

- Must be `boolean` value (e.g. `true` or `false`).
- Enables logs for your presence.

### **`advarsel`**

- Enables warning icon for prompting user that this presence needs more steps than only adding presence.
- Example of presence using this metadata variable is `VLC`.

### **`settings`**

- If you decide to make a format string (for e.g., `%song% by %artist%`), you must have the variables surrounded by a percent sign on either side. Variables like `%var`, `var%`, or `%%var%%` and anything in between are **not** permitted for the sake of standardization.
- The name of the settings must **not** be in all capital letters. For example, names such as `SHOW BROWSING STATUS` will **not** be permitted; however, names such as `Show Browsing Status` or `Show browsing status` are permitted.
- If you are using the `multiLanguage` option it can have the following types:
  - **Boolean** type which will only enable strings from [`general.json`](https://github.com/PreMiD/Localization/blob/master/src/Presence/general.json) from the Localization repo or from the presence file (e.g. when the name of the presence is YouTube, the extension will get strings from `youtube.json` too.)
  - **String** type (e.g. `youtube`) which will specify the name of the files that you want to get strings from.
  - **Array<String>** type (e.g. `["youtube", "discord"]`) which will specify the name of the files that you want to get strings from.

## [**presence.ts**](/dev/presence/class)

> The code you write **must** be _well-written_ and **must** be _readable_ and all strings must be grammatically correct (grammar errors on websites can be ignored).

> Each presence follows a strict linting ruleset which will be checked during the review process. A couple of recommendations can be seen below. [TypeScript Plugin Recommendations for Strict Type Checking](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules). [ESlint Recommendations](https://eslint.org/docs/rules). [Prettier](https://prettier.io/).

Here is a list of rules you must follow when writing your `presence.ts` file:

- **Always** declare a new instance of the `Presence` class before any other variable to avoid rare issues that may occur; this is not a requirement by design so it could be removed in the future.
- **Never** use custom functions when [native variants are available](https://docs.premid.app/dev/presence#files-explained); this makes sure fixes on the extension level also apply to your presences. You're free to use whatever you need if you do not find them listed in the docs.
- It is **forbidden** to code presences for a site without adding support to its primary language (for e.g., a YouTube presence coded with support only for Portueguese and Japanese, but not English itself.)
- The `smallImageKey` and `smallImageText` fields are intended to provide additional/secondary context (such as `playing/paused` for video sites, `browsing` for regular sites, and other cases) not to promote Discord profiles or anything unrelated to PreMiD.
- You are **not** allowed to access `localStorage`.
- When accessing cookies for stored data, please prefix the key with `PMD_`.
- You many only make HTTP/HTTPS requests to `premid.app` or the presence website API. If you are using external domains, you will be required to explain why it is necessary. Only allowed API to make request is [`Fetch API`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).
- Do **not** set fields in the presenceData object to undefined after it has been declared, use the `delete` keyword instead. (for e.g., use `delete data.startTimestamp` instead of `data.startTimestamp = undefined`)
- You are **not** allowed to write presences that change the functionality of a given website. This includes the addition, deletion, or modification of DOM elements.

## [**tsconfig.json**](/dev/presence/tsconfig)

> Do **not** write your own `tsconfig.json` file, use what has been provided on [documentation](/dev/presence/tsconfig).

## Modifikasjon

> You **must** change the version in the **metadata** to be a higher value from the previous version when making changes to either the **presence.ts**, **iframe.ts** or **metadata.json**.

In some situations, presences may behave unexpectedly or could use some minor changes to improve their functionality. Here is a list of rules that you **must** follow while modifiying presences.

- You are **not** allowed to rewrite a presence or change its author. If the presence author was banned from the official server or hasn't made the required changes within a month, you may contact a reviewer to see if you can to rewrite the presence.
- If you make modifications to a presence and change at least a **quarter** of the presence's codebase, you are allowed to add yourself as a contributor. Contact a reviewer for more information about this subject.
- Anyone may provide hotfixes to fix bugs; however, try **not** to make changes that are **not** required. Valid modifications include general fixes (code and typos), additions (descriptions and tags), missing files, etc. Do **not** change images if they are not outdated and are in specifications.

# Modifikasjon

> **All** code contributed to the store will be licensed under the `Mozilla Public License 2.0`.

> If you need to contact someone, please use our official Discord server. All reviewers will have the `Reviewer` role on their profile.

> Please keep in mind that the reviewers work voluntarily and manage other repositories in addition to this one, your pull request may not get reviewed until hours or even days after it has been created.

> **Always** have an up-to-date fork before creating your pull request. This will help limit false positives from the checks.

The most important process of presence development is getting your presence on the store. This is done by making a [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) on GitHub on the `PreMiD/Presences` repository. Our reviewers will confirm that your presence is up to standards and will push it onto the store.

<div>
  <h2 style="font-size: 2rem; margin-bottom: 0;">Presence Reviewers</h2>
  
  <a href="https://github.com/Bas950"><img src="https://github.com/Bas950.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>  <a href="https://github.com/Timeraa"><img src="https://github.com/Timeraa.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>  <a href="https://github.com/StrikerFRFX"><img src="https://github.com/StrikerFRFX.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <br />
</div>

## `Restrictions`

Repetitive offenses such as breaking guidelines, spamming pull requests, threats, or innapropriate behavior will get you banned from creating presences.

In this scenerio, the following changes will occur:

- Presences under your management will be transferred to the PreMiD bot or another user (reviewer decision). The application id for each presence will be recreated under the new owner's name.
- All of your issues and pull requests (presence creation, presence contribution, etc) created following the ban will be prompty closed.
- Tickets created under your name regarding presence development will be deleted.

## `Reviewing`

A few things you should know after opening a pull request:

- It takes 2 reviewers to merge a pull request.
- If a pull request is inactive for a period of 7 days, it will be promptly closed.
- All checks **must** be passed in order to merge.
- ⚠️ You **must** provide new, unaltered screenshots (taken by you) showing a side-by-side comparison of your profile and the website to prove that your presence works. _You are allowed to stitch screenshots together for viewing pleasure_ This applies for both creation and modification.
- ⚠️ You are also **required** to include screenshots of the presence settings in the extension if supplied. An example can be seen [here](https://imgur.com/a/OD3sj5R).

## `Checks`

![Checks](https://i.imgur.com/oqAakOc.png)

Currently, a presence goes through 3 separate stages of checks. All of these checks help the reviewers determine whether your presence is suitable for deployment.

- `Codacy` is a bot that checks for code quality. If you ever receive errors for new issues, you are **required** to fix them. (_WARNING: Codacy bot will be deprecated soon and you will need check errors only from DeepScan!_)
- `DeepScan` is a bot that checks for code quality. If you ever receive errors for new issues, you are **required** to fix them.
- `Schema Validation` will scan your `metadata.json` file for any errors (for e.g., missing fields, invalid value types, etc.). If you ever see any new issues, you are also **required** to fix those. Adding a schema field to your `metadata.json` file will allow your text editor (if supported) to show you these errors during development.

## `Additional Rules`

- **Always** make sure to start your presence in the most appropriate folder, if its name starts with _any_ Latin letter then it must be under its alphabetical match (for e.g., `D/dアニメストア` or `G/Google`). Any other Unicode/non-Latin characters **must** be under the `#` folder (for e.g., `#/巴哈姆特`) and numbers under the `0-9` folder (for e.g., `0-9/4anime`).

After meeting all of the guidelines with the proper reviews and checks, your presence will be merged with the store.

# Verifikasjon
If you have some suggestions about our guidelines, you should contact us @ [PreMiD's discord server](https://discord.premid.app) and we will check them!

# Contributions

`Revision 3` of the guidelines was written and was contributed to by the following individuals:

<div>
<a href="https://github.com/ririxidev"><img src="https://github.com/ririxidev.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
</div>

`Revision 2` of the guidelines was written and was contributed to by the following individuals:

<div>
<a href="https://github.com/Alanexei"><img src="https://github.com/Alanexei.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
</div>

`Revision 1` was maintained by the following individuals:

<div>
<a href="https://github.com/Alanexei"><img src="https://github.com/Alanexei.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
<a href="https://github.com/Bas950"><img src="https://github.com/Bas950.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
<a href="https://github.com/doomlerd"><img src="https://github.com/doomlerd.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
</div>