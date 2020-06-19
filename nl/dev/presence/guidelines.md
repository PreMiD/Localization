---
title: Richtlijnen
description: Regels die alle presence-ontwikkelaars moeten volgen om hun presence te laten toevoegen.
published: true
date: 2020-06-11T18:43:52.440Z
tags:
editor: markdown
---

# Richtlijnen

Bij het publiceren van presences naar GitHub, vragen we je om een set richtlijnen te volgen. Voor sommigen lijken deze strenge regels misschien zwaar. De tenuitvoerlegging van deze regels zal er echter voor zorgen dat wij en onze gebruikers zich niet met problemen bezighouden.

# Aanmaak

De algemene regels voor de ontwikkeling van een presence zijn:

- Presences **moeten** gerelateerd zijn aan de website van de keuze.
- Presences **mogen niet** worden gemaakt voor illegale websites. (bijvoorbeeld, stressors, drugshandel, kinderpornografie, enz.)
- De bestandsstructuur moet "clean" en beheerd zijn, bevat geen bestanden die niet gespecificeerd zijn. (bijvoorbeeld vscode en git folders, afbeeldingen en tekstbestanden, etc.)
- Je moet een juiste bestandsstructuur hebben, concepten zijn **niet** toegestaan.
- Presences voor websites met (`.onion` TLD's) of websites met gratis domeinen/hosts (zoals `.TK` [alle gratis Freenom domeinen], `.RF`, `GD`, etc.) zijn **niet** toegestaan, uitzonderingen kunnen gemaakt worden als er bewijs is laten zien dat er betaald is voor een domein.
- Presences die gericht zijn op interne browser pagina's (zoals Chrome Web Store, `chrome://`, `about:` pagina's, etc.) zijn **niet** toegestaan, omdat zij een experimentele vlag ingeschakeld moeten hebben, en omdat het mogelijk schade kan toebrengen aan hun browsers.
- Presences met ondersteuning alleen voor een enkel doel zullen **niet** toegestaan worden, omdat ze mogelijk gebroken lijken voor andere pagina's (zoals de homepagina), uitzonderingen kunnen worden gemaakt voor beleid en contactpagina's (inhoud die niet vaak gebruikt wordt) of sites waar de andere inhoud niet gerelateerd is. (bijvoorbeeld wikia-pagina's)
- Lage kwaliteit presences (of degenen met weinig context) zijn **niet** toegestaan (bijvb: alleen een logo en tekst tonen maar het verandert later nooit meer.)
- Inclusief de `dist` map, `presence.ts` bestand, `iframe.ts` en `metadata.json` bestand is verplicht dus het resultaat zou zijn wat er in de volgende regeling wordt weergegeven:

```bash
presence
├── dist
│   ├── metadata.json
│   └── presence.js
├── presence.ts
└── tsconfig.json
```

of als je `iframe.ts` gebruikt:

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

> Voor het gemak van onze presence ontwikkelaars, hebben we een schema gegeven dat u kunt gebruiken om de integriteit van uw `metadata` bestand te valideren. Dit is geheel optioneel en niet nodig tijdens het review proces. 
> 
> {.is-info}

> Het wordt ten zeerste aanbevolen om uw `metadata` bestand in de onderstaande indeling te ordenen, en dat moet u hebben  grammaticaal correct, correcte servicenamen, beschrijvingen, tags en instellingsvelden. Alles wat niet aan de specificaties voldoet **zal niet** toegestaan zijn. 
> 
> {.is-warning}

> Presences van websites die expliciete inhoud hebben **moet** de `nsfw` tag hebben, en de logo/thumbnail mag **niet** deze inhoud bevatten. 
> 
> {.is-warning}

Elke presence heeft een beschrijvingsbestand genaamd `metadata.json`, de metadata heeft een strenge norm en een voorbeeld van dit bestand kan hieronder worden weergegeven:

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
    "en": "BESCHRIJVING"
  },
  "url": "URL",
  "version": "VERSIE",
  "logo": "URL",
  "thumbnail": "URL",
  "color": "#HEX000",
  "tags": ["TAG1", "TAG2"],
  "category": "CATEGORIE",
  "regExp": "REGEXP",
  "iFrameRegExp": "REGEXP",
  "iframe": false,
  "settings": [
    {
      "id": "ID",
      "title": "DISPLAY TITEL",
      "icon": "FONTAWESOME GRATIS ICOON",
      "value": true
    },
    {
      "id": "ID",
      "if": {
        "ID": true
      },
      "title": "DISPLAY TITEL",
      "icon": "FONTAWESOME GRATIS ICOON",
      "value": "\"%song%\" by %artist%",
      "placeholder": "use %song% or %artist%"
    },
    {
      "id": "ID",
      "title": "DISPLAY TITEL",
      "icon": "FONTAWESOME GRATIS ICOON",
      "value": 0,
      "values": ["1", "2", "etc."]
    }
  ]
}
```

> Als een veld als optioneel wordt vermeld in de [documentatie](https://docs.premid.app/en/dev/presence/metadata) en uw presence gebruikt de standaardwaarde ervoor, neem deze niet op in het ` metadata ` -bestand. (bijv. een presence zonder iframe ondersteuning heeft het veld `iframe` niet nodig.) 
> 
> {.is-warning}

> Alle afbeeldingen in het `metadata` bestand moeten gehost zijn op `imgur.com` of op een CDN dat u rechten geeft om **** afbeeldingsbestanden te wijzigen. Inhoud die wordt gehost op de website zelf is **niet** toegestaan, omdat ze de locaties uit het niets kunnen veranderen. 
> 
> {.is-warning}

Hieronder vindt u een lijst met velden en hun regels:

### **`$schema`**

- De schema _key_ **moet** een dollarteken aan het begin ervan bevatten, dit geeft aan dat je je JSON-bestand wilt valideren tegen een model. _Zoals eerder gezegd, hoeft u geen schema toe te voegen, maar als u het toevoegt, moet u dit in aanmerking nemen._

### **`author`**

- De ID _waarde_ **moet** uw Discord "snowflake" ID zijn. Je kunt het krijgen door de [ontwikkelaarsmodus](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-) in te schakelen. _Verwar dit **niet** met uw applicatie-ID, die alleen voor uw presence is._

### **`contributors`**

- Voeg **niet** jezelf toe als bijdrager, en voeg niet iemand anders toe als bijdrager, tenzij ze geholpen hebben met de presence.

### **`service`**

- De servicenaam **moet** de naam van de presence map zijn. Als de presence zich bijvoorbeeld bevindt op `/websites/Y/YouTube/`moet de servicenaam `YouTube` zijn.

### **`description`**

- **Alle** presences zijn **verplicht** om een Engelse beschrijving te hebben, ongeacht de taal van de website.
- Probeer **niet** de beschrijving zelf te vertalen, tenzij u die taal kent, onze vertalers zullen uw `metadata.json` aanpassen en vertalen de beschrijvingen indien nodig.

### **`url`**

- De url **moet** een string zijn als de website maar één domein gebruikt. Als de website meerdere domeinen gebruikt, maak dit dan een array en specificeer deze twee.
- Voeg **geen** protocollen toe aan de url (bijv `http` of `https`), en niet de queryparameters in de url (bijv `www.google.com/search?gws_rd=ssl` zou moeten zijn `www.google.com`)

### **`version`**

- Zorg er altijd voor dat het versienummer [semantische versienormen](https://semver.org) volgt, die naar het volgende schema vertaalt: `<NEW-FEATURE>.<HUGE-BUGFIX>.<SMALL-BUGFIX-OR-METADATA-CHANGES>`. Iets anders zoals `1.0.0.1`, `1.0`, `1`, `1.0. -BETA` of verander `1.0.0` naar `2.0.` op een bug fix/small change is **niet** toegestaan.
- De versie van uw metadata **moet** starten met `1.0.0` tenzij gespecificeerd, elke andere versie zal **niet** zijn toegestaan.

### **`logo`**

- Het logo **moet** vierkante afbeelding zijn met een `1:1` beeldverhouding.
- De afbeelding is **vereist** om een minimale resolutie van `512x512` pixels te hebben. You can upsize the imagine using a tool like [waifu2x](http://waifu2x.udp.jp/).

### **`thumbnail`**

- The thumbnail **should** preferably be a [wide promotional card](https://i.imgur.com/3QfIc5v.jpg) or a [screenshot](https://i.imgur.com/OAcBmwW.png) if the first is **not** available.

### **`color`**

- De kleur **moet** een hexadecimale waarde zijn tussen `#000000` en `#FFFFFF`.
- The color string **must** be prepended with a hash symbol.

### **`tags`**

- **All** presences are required to have at least _one_ tag.
- Tags must **not** include any spaces, slashes, single/double quotation marks, Unicode characters, and should always be lowercase.
- Tags **should** preferably include alternate service names to make searching easier (for e.g., if an Amazon presence had included AWS support, it would have its tags like `amazon-web-services` and `aws`)
- You are **required** to add an `NSFW` tag if the presence is for an NSFW website.

### **`category`**

- The category **must** be one of the following listed on the [documentation](https://docs.premid.app/en/dev/presence/metadata#presence-categories).

### **`regExp`** <br /> **`iFrameRegExp`**

- Regelmatige expressies **moeten** geldig zijn. Please test your expressions with the tools listed on the [documentation](https://docs.premid.app/en/dev/presence/metadata#testing).

### **`settings`**

- If you decide to make a format string (for e.g., `%song% by %artist%`), you must have the variables surrounded by a percent sign on either side. Variables like `%var`, `var%`, or `%%var%%` and anything in between are **not** permitted for the sake of standardization.

## [**presence.ts**](https://docs.premid.app/en/dev/presence/class)

> The code you write **must** be _well-written_ and **must** be _readable_ and all strings must be grammatically correct (grammar errors on websites can be ignored). 
> 
> {.is-warning}

Here is a list of rules you must follow when writing your `presence.ts` file:

- **Always** declare a new instance of the `Presence` class before any other variable to avoid rare issues that may occur; this is not a requirement by design so it could be removed in the future.
- **Never** use custom functions when [native variants are available](https://docs.premid.app/dev/presence#files-explained); this makes sure fixes on the extension level also apply to your presences. You're free to use whatever you need if you do not find them listed in the docs.
- It is **forbidden** to code presences for a site without adding support to its primary language (for e.g., a YouTube presence coded with support only for Portueguese and Japanese, but not English itself.)
- The `smallImageKey` and `smallImageText` fields are intended to provide additional/secondary context (such as `playing/paused` for video sites, `browsing` for regular sites, and other cases) not to promote Discord profiles or anything unrelated to PreMiD.
- You are **not** allowed to access `localStorage`.
- When accessing cookies for stored data, please prefix the key with `PMD_`.
- You many only make HTTP/HTTPS requests to `premid.app` or the presence website API. If you are using external domains, you will be required to explain why it is necessary.

## [**tsconfig.json**](https://docs.premid.app/en/dev/presence/tsconfig)

> Do **not** write your own `tsconfig.json` file, use what has been provided on [documentation](https://docs.premid.app/en/dev/presence/tsconfig). 
> 
> {.is-warning}

# Wijzigen

> You **must** change the version in the **metadata** to be a higher value from the previous version when making changes to either the **presence.ts**, **iframe.ts** or **metadata.json**. 
> 
> {.is-warning}

In some situations, presences may behave unexpectedly or could use some minor changes to improve their functionality. Here is a list of rules that you **must** follow while modifiying presences.

- You are **not** allowed to rewrite a presence or change its author. If the presence author was banned from the official server or hasn't made the required changes within a month, you may contact a verifier to see if you can to rewrite the presence.
- Anyone may provide hotfixes to fix bugs; however, try **not** to make changes to code that does **not** need to be fixed. Valid modifications are, but **not** limited to, _missing paths_, _typos_, _missing images_, etc.
- If you make modifications to a presence and change at least a **quarter** of the presence's codebase, you are allowed to add yourself as a contributor. Contact a verifier for more information about this subject.
- Zorg dat de wijzigingen nuttig zijn. Dit kunnen fixes (code en typos) zijn, toevoegingen (beschrijvingen en tags) zijn, etc. Do **not** change images if they are not outdated and are in specifications.

# Verificatie

> Als je contact wilt opnemen met iemand, gebruik dan onze officiële Discord server. All verifiers will have the `Presence Verifier` role on their profile. 
> 
> {.is-info}

> **All** code contributed to the store will be licensed under the `Mozilla Public License 2.0`. 
> 
> {.is-info}

> **Always** have an up-to-date fork before creating your pull request. This will help limit false positives from `DeepScan`. 
> 
> {.is-warning}

The most important process of presence development is getting your presence on the store. This is done by making a [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) on GitHub on the `PreMiD/Presences` repository. Our verifiers will confirm that your presence is up to standards and it will be pushed onto the store.

<div>
  <h2 style="font-size: 2rem; margin-bottom: 0;">Verificateurs</h2>
  <a href="https://github.com/Alanexei"><img src="https://github.com/Alanexei.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/Bas950"><img src="https://github.com/Bas950.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/doomlerd"><img src="https://github.com/doomlerd.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/frozaum"><img src="https://github.com/frozaum.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/TheDropX"><img src="https://github.com/TheDropX.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <br />
</div>

## `Beoordelen`

Enkele dingen die je moet weten voordat je een pull request opent:

- Er zijn 2 reviewers nodig om een pull-aanvraag samen te voegen.
- If a pull request is inactive for a period of 7 days, it will be promptly closed.
- All checks **must** be passed in order to merge.
- ⚠️ You **must** provide new, unaltered screenshots (taken by you) showing a side-by-side comparison of your profile and the website to prove that your presence works. _You are allowed to stitch screenshots together for viewing pleasure._ This applies for both creation and modification.

## `Controles`

![Controles](https://i.imgur.com/bk0A1iY.png)

Currently, a presence goes through 2 separate stages of checks. All of these checks help the verifiers determine whether your presence is suitable for deployment.

- `DeepScan` is a bot that checks for code quality. If you ever receive errors for new issues, you are **required** to fix them.
- `Schema Validation` will scan your `metadata.json` file for any errors (for e.g., missing fields, invalid value types, etc.). If you ever see any new issues, you are also **required** to fix those. Adding a schema field to your `metadata.json` file will allow your text editor (if supported) to show you these errors during development.

## `Aanvullende Regels`

- Zorg er **altijd** voor dat je Presence in de meest geschikte map begint, als de naam begint met een Latijnse letter dan moet het onder de alfabetische overeenkomst vallen (bijv. `D/dアニメストア` of `G/Google`). Alle andere Unicode/niet-Latijnse tekens **moeten** onder de map `#` staan (bijvoorbeeld `#/巴哈姆特`) en nummers onder de `0-9` map (bijvoorbeeld `0-9/4anime`).

Nadat u aan alle richtlijnen voldoet en uw presence ten minste twee keer is geëvalueerd, wordt uw presence toegevoegd aan de winkel.

# Bijdrages

`Revisie 2` van de richtlijnen is geschreven en is bijgedragen door de volgende personen:

<div>
<a href="https://github.com/Alanexei"><img src="https://github.com/Alanexei.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
</div>

`Revisie 1` werd onderhouden door de volgende personen:

<div>
<a href="https://github.com/Alanexei"><img src="https://github.com/Alanexei.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
<a href="https://github.com/Bas950"><img src="https://github.com/Bas950.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
<a href="https://github.com/doomlerd"><img src="https://github.com/doomlerd.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
</div>
