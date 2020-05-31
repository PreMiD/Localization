---
title: Presence Ontwikkeling
description:
published: true
date: 2020-05-29T21:55:04.008Z
tags:
---

> Alle presences worden hier bewaard: https://github.com/PreMiD/Presences 
> 
> {.is-info}

Versie `2.x` introduceert de [presence winkel](https://premid.app/store). Gebruikers kunnen nu handmatig hun favoriete presences toevoegen en verwijderen via de gebruikersinterface op de [website](https://premid.app/).

# Richtlijnen

Bij het publiceren van presences naar GitHub, vragen we je om een set richtlijnen te volgen. Voor sommigen lijken deze strenge regels misschien zwaar. De tenuitvoerlegging van deze regels zal er echter voor zorgen dat wij en onze gebruikers zich niet met problemen bezighouden.

## Aanmaak

De algemene regels voor de ontwikkeling van een presence zijn:

- Presences **moeten** gerelateerd zijn aan de website van de keuze.
- Presences **mogen niet** worden gemaakt voor illegale websites. ( bijvoorbeeld, stressors, drugshandel, kinderpornografie, enz. )
- De bestandsstructuur moet "clean" en beheerd zijn, bevat geen bestanden die niet gespecificeerd zijn. (bijvoorbeeld, vscode en git mappen, afbeeldingen en tekstbestanden, etc. )
- Je moet een juiste bestandsstructuur hebben, concepten zijn **niet** toegestaan.
- Presences voor websites met ( `.onion` TLD's) of websites met gratis domeinen / hosts ( voor eb. ., `.TK` [alle gratis Freenom domeinen], `.RF`, `GD`, etc ) zijn **niet** toegestaan uitzonderingen kunnen worden gemaakt als een bewijs wordt gepresenteerd waaruit blijkt dat ze betaald hebben voor het domein.
- Presences die gericht zijn op interne browser pagina's (zoals Chrome Web Store, `chrome://`, `about:` pagina's, enz) zijn ** niet** toegestaan omdat ze een experimentele vlag nodig hebben, die door de gebruiker moet worden ingeschakeld en mogelijk schade kunnen toebrengen aan hun browsers.
- Presences met ondersteuning alleen voor een enkel doel zullen **NIET** toegestaan zijn, omdat ze mogelijk gebroken lijken voor andere pagina's (zoals de homepagina), uitzonderingen kunnen worden gemaakt voor beleid en contactpagina's (inhoud die niet vaak gebruikt) of sites waar de andere inhoud niet gerelateerd is ( bv. wikia pagina's). ( bijvoorbeeld wikia-pagina's)
- Lage kwaliteit presences (of degenen met weinig context ) zijn **niet** toegestaan ( bijvb: alleen een logo en tekst tonen maar het verandert later nooit meer. )
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

> For the convenience of our presence developers, we have provided a schema which you can use to validate the integrity of your `metadata` file. This is entirely optional and is not required during the review process.

> It is highly recommended that you organize your `metadata` file in the format shown below, and you must have grammatically correct service names, descriptions, tags, and setting fields. Alles wat niet aan de specificaties voldoet **zal niet** toegestaan zijn. 
> 
> {.is-warning}

Elke presentie heeft een beschrijvingsbestand genaamd `metadata.json`, de metadata heeft een strenge norm en een voorbeeld van dit bestand kan hieronder worden weergegeven:

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

A list of fields and their rules are listed below:

### **`$schema`**

- The schema _key_ **must** include a dollar sign at the beginning of it, this will signal your text editor that you want to validate your JSON file against a model. _As stated earlier, you do not need to include a schema, but if you include it you must take this into account._

### **`author`**

- The ID _value_ **must** be your Discord snowflake ID. You can get it by enabling [developer mode](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-). _Please do **not** confuse this with your application ID, which is only for your presence._

### **`contributors`**

- Do **not** add yourself as a contributor, and do not add someone else as a contributor unless they have helped with the presence.

### **`service`**

- The service name **must** be the name of the presence directory. For example, if the presence is located at `/websites/Y/YouTube/`, the service name must be `YouTube`.

### **`description`**

- **All** presences are **required** to have an English description regardless of the website's prefered language.
- Do **not** try and translate the description yourself unless you know that language, translators will modify your `metadata.json` and change the descriptions if necessary.

### **`url`**

- The url **must** be a string if the website only uses one domain. If the website uses multiple, make this an array and specify each one.
- Do **not** include protocols in the url ( for e.g., `http` or `https` ), and do not include query parameters in the url ( for e.g., `www.google.com/search?gws_rd=ssl` which should be `www.google.com/`)

### **`version`**

- Always make sure the version number follows [semantic versioning standards](https://semver.org), which translates to the following scheme: `<NEW-FEATURE>.<HUGE-BUGFIX>.<SMALL-BUGFIX-OR-METADATA-CHANGES>`. Anything else like `1.0.0.1`, `1.0`, `1`, `1.0.0-BETA` or changing `1.0.0` to `2.0.0` on a bug fix/small change is **not** permitted.
- The version **must** always start at `1.0.0` unless told otherwise, other versions will **not** be permitted.

### **`logo`**

- The logo **must** be a square image with a `1:1` aspect ratio.
- The image is **required** to have a minimum resolution of `512x512` pixels. You can upsize the imagine using a tool like [waifu2x](http://waifu2x.udp.jp/).

### **`thumbnail`**

- The thumbnail **should** preferably be a [wide promotional card](https://i.imgur.com/3QfIc5v.jpg) or a [screenshot](https://i.imgur.com/OAcBmwW.png) if the first is **not** available.

### **`color`**

- The color **must** be a hexadecimal value between `#000000` and `#FFFFFF`.
- The color string **must** be prepended with a hash symbol.

### **`tags`**

- **All** presences are required to have at least _one_ tag.
- Tags must **not** include any spaces, slashes, single/double quotation marks, Unicode characters, and should always be lowercase.
- Tags **should** preferably include alternate service names to make searching easier ( for e.g., if an Amazon presence had included AWS support, it would have its tags like `amazon-web-services` and `aws` )
- You are **required** to add an `NSFW` tag if the presence is for an NSFW website.

### **`category`**

- The category **must** be one of the following listed on the [documentation](https://docs.premid.app/en/dev/presence/metadata#presence-categories).

### **`regExp`** <br /> **`iFrameRegExp`**

- Regular expressions **must** be valid. Please test your expressions with the tools listed on the [documentation](https://docs.premid.app/en/dev/presence/metadata#testing).

### **`settings`**

- If you decide to make a format string ( for e.g., `%song% by %artist%` ), you must have the variables surrounded by a percent sign on either side. Variables like `%var`, `var%`, or `%%var%%` and anything in between are **not** permitted for the sake of standardization.

## [**presence.ts**](https://docs.premid.app/en/dev/presence/class)

> The code you write **must** be _well-written_ and **must** be _readable_ and all strings must be grammatically correct ( grammar errors on websites can be ignored ). 
> 
> {.is-warning}

Here is a list of rules you must follow when writing your `presence.ts` file:

- **Always** declare a new instance of the `Presence` class before any other variable to avoid rare issues that may occur; this is not a requirement by design so it could be removed in the future.
- **Never** use custom functions when [native variants are available](https://docs.premid.app/dev/presence#files-explained); this makes sure fixes on the extension level also apply to your presences. You're free to use whatever you need if you do not find them listed in the docs.
- It is **forbidden** to code presences for a site without adding support to its primary language ( for e.g., a YouTube presence coded with support only for Portueguese and Japanese, but not English itself. )
- The `smallImageKey` and `smallImageText` fields are intended to provide additional/secondary context ( such as `playing/paused` for video sites, `browsing` for regular sites, and other cases ) not to promote Discord profiles or anything unrelated to PreMiD.
- You are **not** allowed to access `localStorage`.
- When accessing cookies for stored data, please prefix the key with `PMD_`.
- Making requests to external domains is **not** allowed unless you can specify why you are needing to do so.

## [**tsconfig.json**](https://docs.premid.app/en/dev/presence/tsconfig)

> Do **not** write your own `tsconfig.json` file, use what has been provided on [documentation](https://docs.premid.app/en/dev/presence/tsconfig). 
> 
> {.is-warning}

## Wijzigen

> You **must** change the version in the **metadata** to be a higher value from the previous version when making changes to either the **presence.ts**, **iframe.ts** or **metadata.json**. 
> 
> {.is-warning}

In some situations, presences may behave unexpectedly or could use some minor changes to improve their functionality. Here is a list of rules that you **must** follow while modifiying presences.

- You are **not** allowed to rewrite a presence or change its author. If the presence author was banned from the official server or hasn't made the required changes within a month, you may contact a verifier to see if you can to rewrite the presence.
- Anyone may provide hotfixes to fix bugs; however, try **not** to make changes to code that does **not** need to be fixed. Valid modifications are, but **not** limited to, _missing paths_, _typos_, _missing images_, etc.
- If you make modifications to a presence and change at least a **quarter** of the presence's codebase, you are allowed to add yourself as a contributor. Contact a verifier for more information about this subject.
- Zorg dat de wijzigingen nuttig zijn. These may include fixes ( code and typos ), additions ( descriptions and tags ), etc. Do **not** change images if they are not outdated and are in specifications.

# Verificatie

> Als je contact wilt opnemen met iemand, gebruik dan onze officiële Discord server. All verifiers will have the `Presence Verifier` role on their profile.

> **All** code contributed to the store will be licensed under the `Mozilla Public License 2.0`.

> **Always** have an up-to-date fork before creating your pull request. This will help limit false positives from `DeepScan`. 
> 
> {.is-warning}

The most important process of presence development is getting your presence on the store. This is done by making a [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) on GitHub on the `PreMiD/Presences` repository. Our verifiers will confirm that your presence is up to standards and it will be pushed onto the store.

<div>
  <h2 style="font-size: 2rem; margin-bottom: 0;">Verifiers</h2>
  <a href="https://github.com/Alanexei"><img src="https://github.com/Alanexei.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/Bas950"><img src="https://github.com/Bas950.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/doomlerd"><img src="https://github.com/doomlerd.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/frozaum"><img src="https://github.com/frozaum.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/TheDropX"><img src="https://github.com/TheDropX.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <br />
</div>

## `Reviewing`

A few things you should know after opening a pull request:

- It takes 2 reviewers to merge a pull request.
- If a pull request is inactive for a period of 7 days, it will be promptly closed.
- All checks **must** be passed in order to merge.
- ⚠️ You **must** provide new, unaltered screenshots ( taken by you ) showing a side-by-side comparison of your profile and the website to prove that your presence works. _You are allowed to stitch screenshots together for viewing pleasure_ This applies for both creation and modification.

## `Checks`

![Controles](https://i.imgur.com/bk0A1iY.png)

Currently, a presence goes through 2 separate stages of checks. All of these checks help the verifiers determine whether your presence is suitable for deployment.

- `DeepScan` is a bot that checks for code quality. If you ever receive errors for new issues, you are **required** to fix them.
- `Schema Validation` will scan your `metadata.json` file for any errors ( for e.g., missing fields, invalid value types, etc. ). If you ever see any new issues, you are also **required** to fix those. Adding a schema field to your `metadata.json` file will allow your text editor ( if supported ) to show you these errors during development.

## `Aanvullende Regels`

- Zorg er **altijd** voor dat je Presence in de meest geschikte map begint, als de naam begint met een Latijnse letter dan moet het onder de alfabetische overeenkomst vallen ( bijv. `D/dアニメストア` of `G/Google` ). Any other Unicode/non-Latin characters **must** be under the `#` folder ( for e.g., `#/巴哈姆特` ) and numbers under the `0-9` folder ( for e.g., `0-9/4anime` ).

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

# Structuur
Alle presences zijn gecodeerd in [TypeScript](https://www.typescriptlang.org/). [TypeScript](https://www.typescriptlang.org/) heeft een paar extra type definities, dus het oplossen en vinden van bugs is veel eenvoudiger.

## Installatie
1. Installeer [Git](https://git-scm.com/).
2. Installeer [Node](https://nodejs.org/en/) (komt met [npm](https://www.npmjs.com/)).
3. Installeer [TypeScript](https://www.typescriptlang.org/index.html#download-links) (open een terminal en `npm install -g typescript`).

## Het project klonen
1. Open een terminal en typ `git clone https://github.com/PreMiD/Presences`.
2. Kies een map van je keuze.
3. Open het in de code editor.

## Mappen en bestanden maken

1. Maak een map met de **naam** (niet een URL) van de service die je wilt ondersteunen.
2. Maak een `presence.ts` en een `tsconfig.json` bestand in de map.
3. Maak een map met de naam `dist` in de map.
4. Maak een `metadata.json` bestand in de `dist` map.

## Het tsconfig.json bestand invullen
Plaats de volgende code in het `tsconfig.json` bestand.
```javascript
{
  "extends": "../../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
}
```
Om meer te leren over TypeScript configuratie, klik [hier](/dev/presence/tsconfig).

## Het metadata.json bestand invullen
We hebben een `metadata.json` bestandsmaker gemaakt voor de luie mensen [hier](https://eggsy.codes/projects/premid/mdcreator). Het wordt nog steeds aangeraden dit door te lezen, zodat u weet hoe het werkt.

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

Kopieer de bovenstaande code en plaats deze in het `metadata.json` bestand. U moet nu de waarden van de eigenschappen bewerken. Houd er rekening mee dat de volgende eigenschappen optioneel in uw `metadata.json` bestand staan, als u niet van plan bent om ze te gebruiken, dan moet u ze verwijderen.
- `contributors`
- `regExp`
- `iframe`
- `iFrameRegExp`
- `settings`

**Bepaalde voorinstellingen van waarden verduidelijken:**
<table>
  <thead>
    <tr>
      <th style="text-align:left">Variabele</th>
      <th style="text-align:left">Beschrijving</th>
      <th style="text-align:left">Type</th>
      <th style="text-align:left">Optioneel</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>author</b>
      </td>
      <td style="text-align:left">Moet een object bevatten met <code>naam</code> en <code>id</code> van de presence-ontwikkelaar. Naam is je Discord gebruikersnaam zonder identificatie(#0000). Gebruiker <code>id</code> kan worden gekopieerd van Discord door de ontwikkelaar
        modus in te schakelen en de rechtermuisknop op je profiel te klikken.</td>
      <td style="text-align:left"><code>Object</code>
      </td>
      <td style="text-align:left"><code>Nee</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>contributors</b>
      </td>
      <td style="text-align:left">Moet een object bevatten met <code>naam</code> en <code>id</code> van de presence-ontwikkelaar. Naam is je Discord gebruikersnaam zonder identificatie(#0000). Gebruiker <code>id</code> kan worden gekopieerd van Discord door de ontwikkelaar
        modus in te schakelen en de rechtermuisknop op je profiel te klikken.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>Ja</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>service</b>
      </td>
      <td style="text-align:left">De titel van de dienst die door deze presence wordt ondersteund. <br>(Naam is dezelfde als de map waar alles in zit)</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Nee</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>description</b>
      </td>
      <td style="text-align:left">Kleine beschrijving van de presence, je kunt de beschrijving van de dienst
        gebruiken als je geen ideeën hebt. Je beschrijving moet key waarden bevatten die de taal en de beschrijving in die specifieke taal aangeven. Maak beschrijvingen met de talen <i>die u kent</i>, onze vertalers zullen wijzigingen aanbrengen in uw metadata bestand.</td>
      <td style="text-align:left"><code>Object</code>
      </td>
      <td style="text-align:left"><code>Nee</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b>
      </td>
      <td style="text-align:left">URL van de service.<br><b>Bijvoorbeeld:</b><code>vk.com</code><br>
        <b>Deze URL moet de URL van de website zijn, aangezien dit er voor zorgt of de script word ingeladen of niet.</b><br> Voeg <b>NIET</b> <code>https://</code> of <code>http://</code> toe in de URL, ook niet een slash aan het einde:
<code>https://premid.app/</code> -> <code>premid.app</code><br>
<b>Opmerking</b>: Sommige URLs hebben <code>www.</code> of iets anders voor hun domain naam. Vergeet <b>NIET</b> toe te voegen!<br>
U kunt meerdere URL's toevoegen door het volgende te doen:<br>
<code>["URL1", "URL2", "ETC.]</code><br>
U kunt regExp ook bekend als Regex gebruiken voor deze taak, word hier onder verder uitgelegd.
      </td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code>
      </td>
      <td style="text-align:left"><code>Nee</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b>
      </td>
      <td style="text-align:left">Een reguliere expressie die word gebruikt om URLs te vergelijken.<br>
      regExp ook bekend als Regex, kan worden gebruikt als een website meerdere subdomeinen heeft.<br>
U kunt de volgende regExp daarvoor gebruiken:<br>
<code>([a-z0-9]+)[.]domain[.]TLD"</code><br>
TLD staat voor Top Level Domain bijvoorbeeld: .com .net<br> 
<code>([a-z0-9]+)</code> betekent alles van a tot z en van 0 tot 9.<br>
        Je kunt een handleiding video kijken <a href="https://youtu.be/sXQxhojSdZM">hier</a><br>
        Je kunt uw regExp testen bij <a href="https://regex101.com/">Regex101</a>
      </td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Ja</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>version</b>
      </td>
      <td style="text-align:left">Versie van uw presence.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Nee</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>logo</b>
      </td>
      <td style="text-align:left">Link naar service&apos;s logo.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Nee</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b>
      </td>
      <td style="text-align:left">Link naar de thumbnail van de presence.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Nee</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>color</b>
      </td>
      <td style="text-align:left"><code>#HEX</code> waarde. We raden u aan een primaire kleur van de service
        te gebruiken die uw presence ondersteunt.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Nee</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>tags</b>
      </td>
      <td style="text-align:left">Array met tags, ze helpen gebruikers uw presence op de website te vinden.</td>
      <td
      style="text-align:left"><code>String, Array&lt;String&gt;</code>
        </td>
      <td style="text-align:left"><code>Nee</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>category</b>
      </td>
      <td style="text-align:left">Een tekst die wordt gebruikt om de categorie aan te geven waar de presence onder valt. Zie de geldige categories <a href="https://docs.premid.app/dev/presence/metadata#presence-categories">hier</a>.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Nee</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b>
      </td>
      <td style="text-align:left">Definieert of <code>iFrames</code> worden gebruikt</td>
      <td style="text-align:left"><code>Boolean</code>
      </td>
      <td style="text-align:left"><code>Ja</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b>
      </td>
      <td style="text-align:left">Een reguliere expressie string gebruiken om iFrames te vergelijken. Zie regExp voor meer informatie.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Ja</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>settings</b>
      </td>
      <td style="text-align:left">Een reeks instellingen die de gebruiker kan wijzigen.<br>
      Lees meer over de presence instellingen <a href="https://docs.premid.app/dev/presence/metadata#presence-settings">hier</a>.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>Ja</code>
      </td>
    </tr>
  </tbody>
</table>

We hebben een `metadata.json` bestandsmaker gemaakt voor de luie mensen [hier](https://eggsy.codes/projects/premid/mdcreator).

## Aan de slag

```javascript
var presence = new Presence({
    clientId: "000000000000000000" //De client ID van de Applicatie gemaakt op https://discordapp.com/developers/applications
}),

strings = presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
    //Je kan dit gebruiken om vertaalde teksten te krijgen
});

/*

function myOutsideHeavyLiftingFunction(){
    //Pak en verwerk alle informatie hier

    // element grabs //
    // api calls //
    // variable sets //
}

setInterval(10000, myOutsideHeavyLiftingFunction); 
//Laat de functie elke 10 seconden apart lopen van de UpdateData-event om de variabelen te krijgen en te zetten die UpdateData verkrijgt.

*/


presence.on("UpdateData", async () => {
    /*UpdateData is altijd aan het lopen, en moet daarom jouw refresh-cyclus zijn, of `tick`. Dit wordt waar mogelijk meerdere keren per seconden opgeroepen.

    Het is aanbevolen om een andere functie buiten deze event-functie te maken die de variabelen zult veranderen en al het zware werk zal doen als je informatie roept vanuit een API*/

    var presenceData: presenceData = {
        largeImageKey: "key", /*De sleutel (bestandsnaam) van de Grote Afbeelding op de presence. Deze worden geüpload en genoemd in de Rich Presence sectie van jouw applicatie, genaamd Art Assets*/
        smallImageKey: "key", /*De sleutel (bestandsnaam) van de Kleine Afbeelding op de presence. Deze worden geüpload en genoemd in de Rich Presence sectie van jouw applicatie, genaamd Art Assets*/
        smallImageText: "Some hover text", //De tekst die wordt weergeven wanneer je eroverheen wijst
        details: "Browsing Page Name", //Het bovenste gedeelte van je presence
        state: "Reading section A", //Het onderste gedeelte van je presence
        startTimestamp: 1577232000, //De unix epoch-tijdstempel vanaf wanneer geteld moet worden
        endTimestamp: 1577151472000 //Als je Tijd Over wilt laten zien in plaats van Voorbij, dit is de unix epoch-tijdstempel wanneer de timer stopt
    }; /*Optioneel, je kan hier ook een largeImageKey zetten en de rest als variabele sub-eigenschappen veranderen, bijvoorbeeld presenceData.type = "blahblah"; type voorbeelden: details, state, etc.*/

    if (presenceData.details == null) {
        //Dit wordt gestart als je geen presence-details instelt.
        presence.setTrayTitle(); // Wist de tray-titel voor mac-gebruikers.
        presence.setActivity(); /*Werk de presence bij zonder data, het wordt dus gewist en de grote afbeelding wordt de Discord Applicatie icoon, en de tekst wordt de Discord Applicatie naam*/
    } else {
        //Dit wordt gestart als je wel presence-details hebt ingesteld.
        presence.setActivity(presenceData); //Werk de presence bij met alle waardes van het presenceData-object.
    }
});
```
Je kan dit kopiëren naar je `presence.ts` bestand en de waardes bewerken. Het instellen van alle waardes wordt gedaan binnen het updateData-event.

Voor voorbeelden raden we aan om naar de code van de presences van bijvoorbeeld 1337x of 9GAG te kijken.

Voor meer informatie over de Presence-klas klik [hier](/dev/presence/class).

## Kan bepaalde data niet krijgen?!

Veel websites gebruiken [iframes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([Inlineframes](https://en.wikipedia.org/wiki/HTML_element#Frames)). Deze html-tags kunnen meerdere bronnen bevatten, zoals video's. Maar ze zijn niet altijd relevant. Sommige zijn verborgen of worden niet vaak gebruikt. Controleer of je de informatie die je nodig hebt, kan verkrijgen zonder dat je onnodig werk doet.

1. Controleer ze met de console van je browser (zorg dat je op de **Elements**-tab zit).
2. Zoeken (<kbd>CTRL</kbd>+<kbd>F</kbd> (Windows) of <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
3. Voer `document.querySelectorAll("iframe")` uit.

Als je vindt dat je gegevens zich in iFrame bevinden, moet je het volgende doen:
1. Maak een `iframe.ts` bestand aan.
2. Stel iFrame in op `true` in uw metadata bestand.
3. Vul je iFrame bestand in.
```javascript
var iframe = new iFrame();
iframe.on("UpdateData", async () => {
  /*
  Haal alle gegevens op die je nodig hebt uit het iFrame om ze op te slaan in variabelen
  en verzend ze vervolgens via iframe.send
  */
  iframe.send({ //verstuur data
    video: video,
    tijd: video.duration
  }); 
});
```
4. Zorgen dat je presence-bestand data ontvangt vanuit het iFrame bestand.
```javascript
presence.on("iFrameData", data => {
  iFrameVideo = data.video;
  currentTime = data.time;
});
```
**Opmerking:** Dit moet buiten de updateData event worden geplaatst.
## Compileren
Open een console in je map en typ `tsc -w` om de `presence.ts` te compileren in de `/dist` map.

# Laden van de presence
1. Open de pop-up en houd de <kbd>Shift</kbd> knop op je toetsenbord in.
2. **Laad Presence** verschijnt in de Presences sectie.
3. Klik erop terwijl je nog steeds de <kbd>Shift</kbd> knop ingedrukt houdt.
4. Selecteer de map /dist van uw presence.

# Enkele nuttige dingen
## Hot-herladen
De website waar je mee bezig bent wordt automatisch herladen wanneer je een bestand in je map opslaat.

## Foutopsporing
- Je kunt `console.log("Test");` tussen je code zetten en kijken of je browserconsole je die uitvoer geeft. Zo ja, ga dan verder en probeer het opnieuw na de volgende functie. Zo niet, dan is er een fout hierboven.
- Als dat je ook niet helpt, vraag dan een presence-ontwikkelaar in onze [Discord-server](https://discord.gg/WvfVZ8T) voor hulp.

# Uitleg van bestanden
- [Presence Klasse](/dev/presence/class)
- [iFrame Klasse](/dev/presence/iframe)
- [Metadata bestand](/dev/presence/metadata)
- [TypeScript configuratie](/dev/presence/tsconfig)
{.links-list}
