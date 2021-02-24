---
title: Presence-richtlijnen
description: Regels die alle presence-ontwikkelaars moeten volgen om hun presence te laten toevoegen.
published: true
date: 2021-02-24T22:23:11.142Z
tags:
editor: markdown
dateCreated: 2021-02-23T07:57:42.414Z
---

<div align="center">
    <img src="https://github.com/PreMiD.png?size=2048" width="128px" style="max-width:100%;">
    <h3 style="font-size: 2rem; margin-bottom: 0">Presence-richtlijnen</h3>
    <h4 style="margin-top: 0">Revision 3</h4>
    <br />
</div>

# Richtlijnen

Bij het publiceren van presences op [onze GitHub-repository](https://github.com/PreMiD/Presences/), vereisen we dat je een aantal richtlijnen volgt. Voor sommigen lijken deze strenge regels misschien zwaar. However, the implementation of these rulesets will keep us and the users from running into any issues.

# Aanmaak

De algemene regels voor de ontwikkeling van een presence zijn:

- Presences **moeten** gerelateerd zijn aan de website van de keuze.
- Presences **mogen niet** worden gemaakt voor illegale websites. (bijvoorbeeld, stressors, drugshandel, kinderpornografie, enz.)
- De bestandsstructuur moet "clean" en beheerd zijn, bevat geen bestanden die niet gespecificeerd zijn. (bijvoorbeeld vscode en git folders, afbeeldingen en tekstbestanden, etc.)
- Je moet een juiste bestandsstructuur hebben, concepten zijn **niet** toegestaan.
- Presences voor websites met (`.onion` TLD's) of websites met gratis domeinen/hosts (zoals `.TK` [alle gratis Freenom domeinen], `.RF`, `GD`, etc.) zijn **niet** toegestaan, uitzonderingen kunnen gemaakt worden als er bewijs is laten zien dat er betaald is voor een domein.
- Het domein van de presence moet minimaal 2 maanden oud zijn.
- Presences die gericht zijn op interne browser pagina's (zoals Chrome Web Store, `chrome://`, `about:` pagina's, etc.) zijn **niet** toegestaan, omdat zij een experimentele vlag ingeschakeld moeten hebben, en omdat het mogelijk schade kan toebrengen aan hun browsers.
- Presences met ondersteuning alleen voor een enkel doel zullen **niet** toegestaan worden, omdat ze mogelijk gebroken lijken voor andere pagina's (zoals de homepagina), uitzonderingen kunnen worden gemaakt voor beleid en contactpagina's (inhoud die niet vaak gebruikt wordt) of sites waar de andere inhoud niet gerelateerd is. (bijvoorbeeld wikia-pagina's)
- Presences voor online radio's zijn alleen toegestaan als de radio ten minste 100 wekelijkse luisteraars en 15 gelijktijdige luisteraars heeft. Ook moet het enkele functies hebben en niet alleen album en titel.
- Lage kwaliteit presences (of degenen met weinig context) zijn **niet** toegestaan (bijvb: alleen een logo en tekst tonen maar het verandert later nooit meer.)
- With the `buttons` release, we require some guidelines for them:
  - Redirects to main page are prohibited.
  - Promoting websites by them is prohibited.
  - They can't show addinational data when you can't show them in `state` or `details`.
- Including the `dist` folder, `presence.ts` file, `iframe.ts` file, and `metadata.json` file is mandatory so the result would be what is represented in the following schema:

```bash
presence
├── dist
│   └── metadata.json
├── presence.ts
└── tsconfig.json
```

of als je `iframe.ts` gebruikt:

```bash
presence
├── dist
│   └── metadata.json
├── presence.ts
├── iframe.ts
└── tsconfig.json
```

## [**metadata.json**](/dev/presence/metadata)

> Voor het gemak van onze presence ontwikkelaars, hebben we een schema gegeven dat je kunt gebruiken om de integriteit van je `metadata` bestand te valideren. Dit is geheel optioneel en niet nodig tijdens het review proces.

> Het wordt ten zeerste aanbevolen om je `metadata` bestand in de onderstaande indeling te ordenen, en dat moet je hebben  grammaticaal correct, correcte servicenamen, beschrijvingen, tags en instellingsvelden. Alles wat niet aan de specificaties voldoet **zal niet** toegestaan zijn.

> Presences van websites die expliciete inhoud hebben **moet** de `nsfw` tag hebben, en de logo/thumbnail mag **niet** deze inhoud bevatten.

Elke presence heeft een beschrijvingsbestand genaamd `metadata.json`, de metadata heeft een strenge norm en een voorbeeld van dit bestand kan hieronder worden weergegeven:

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

> If a field is listed as optional on the [documentation](https://docs.premid.app/en/dev/presence/metadata) or there is a `*` next to the key, and your presence uses the default value for it, do not include it in the `metadata` file. (bijv. een presence zonder iframe ondersteuning heeft het veld `iframe` niet nodig.)

> Alle afbeeldingen in het `metadata` bestand moeten worden gehost op `i.imgur.com`. Het gebruik van inhoud op de website zelf is **niet** toegestaan, omdat het ongewillig de paden en bestanden kan wijzigen.

Hieronder vindt u een lijst met velden en hun regels:

### **`$schema`**

- De schema _key_ **moet** een dollarteken aan het begin ervan bevatten, dit geeft aan dat je je JSON-bestand wilt valideren tegen een model. _Zoals eerder gezegd, hoeft u geen schema toe te voegen, maar als u het toevoegt, moet je dit in aanmerking nemen._

### **`author`**

- De ID _waarde_ **moet** je Discord "snowflake" ID zijn. Je kunt het krijgen door de [ontwikkelaarsmodus](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-) in te schakelen. _Verwar dit **niet** met je applicatie-ID, die alleen voor je presence is._

### **`*contributors`**

- Voeg **niet** jezelf toe als bijdrager, en voeg niet iemand anders toe als bijdrager, tenzij ze geholpen hebben met de presence.

### **`service`**

- De servicenaam **moet** de naam van de presence map zijn. Als de presence zich bijvoorbeeld bevindt op `/websites/Y/YouTube/`moet de servicenaam `YouTube` zijn.
- Je kunt **niet** de URL gebruiken als de servicenaam, tenzij de website de URL als officiële naam gebruikt. Als de naam niet beschrijvend is en als vaag kan worden beschouwd, is het gebruik van de URL **verplicht**. (Bijv.: `YouTube` is toegestaan omdat dat de officiële naam is en beschrijvend is, terwijl `youtube.com` niet is toegestaan. `Top` is een niet-beschrijvende naam, dus het gebruik van de url `top.gg` is **vereist**.)
- If service has some explicit branding rules of their name, you should follow them.

### **`*altnames`**

- **Only** use this in scenerios where a website goes under multiple official names (e.g. Pokémon and 포켓몬스터). _Shortened_ versions of service names go under `tags`.

### **`description`**

- **Alle** presences zijn **verplicht** om een Engelse beschrijving te hebben, ongeacht de taal van de website.
- Probeer **niet** de beschrijving zelf te vertalen, tenzij u die taal kent, onze vertalers zullen je `metadata.json` aanpassen en vertalen de beschrijvingen indien nodig.

### **`url`**

- De url **moet** een string zijn als de website maar één domein gebruikt. Als de website meerdere domeinen gebruikt, maak dit dan een array en specificeer deze twee.
- Voeg **geen** protocollen toe aan de url (bijv `http` of `https`), en niet de queryparameters in de url (bijv `www.google.com/search?gws_rd=ssl` zou moeten zijn `www.google.com`)

### **`versie`**

- Zorg er altijd voor dat het versienummer [semantische versienormen](https://semver.org) volgt, die naar het volgende schema vertaalt: `<NEW-FEATURE>.<HUGE-BUGFIX>.<SMALL-BUGFIX-OR-METADATA-CHANGES>`. Iets anders zoals `1.0.0.1`, `1.0`, `1`, `1.0. -BETA` of verander `1.0.0` naar `2.0.` op een bug fix/small change is **niet** toegestaan.
- De versie van je metadata **moet** starten met `1.0.0` tenzij gespecificeerd, elke andere versie zal **niet** zijn toegestaan.

### **`logo`**

- Het logo **moet** vierkante afbeelding zijn met een `1:1` beeldverhouding.
- De afbeelding is **vereist** om een minimale resolutie van `512x512` pixels te hebben. Je kunt je afbeelding vergroten met behulp van een tool als [waifu2x](http://waifu2x.udp.jp/).

### **`thumbnail`**

- De thumbnail **moet** bij voorkeur een [brede promotiekaart zijn](https://i.imgur.com/3QfIc5v.jpg) of een [screenshot](https://i.imgur.com/OAcBmwW.png) als de eerste **niet** beschikbaar is.

### **`color`**

- De kleur **moet** een hexadecimale waarde zijn tussen `#000000` en `#FFFFFF`.
- De kleuren string **moet** worden voorzien van een hash-symbool.

### **`tags`**

- **Alle** presences zijn verplicht om ten minste _één_ tag te hebben.
- Tags mogen **geen** spaties bevatten, slashes, enkel- of dubbele aanhalingstekens, Unicode-tekens en moeten altijd kleine letters zijn.
- Tags **moeten** bij voorkeur alternatieve servicenamen bevatten om het zoeken te vergemakkelijken (als bijvoorbeeld een presence van Amazon AWS-ondersteuning heeft, zou het tags zoals `amazon-web-services` en `aws` hebben)
- Je bent **verplicht** om een `NSFW` tag toe te voegen als de presence voor een NSFW website is.

### **`category`**

- The category **must** be one of the following listed on the [documentation](/dev/presence/metadata#presence-categories).
- De presence moet een categorie gebruiken die overeenkomt met de inhoud van de website. (bijvoorbeeld, gebruik niet `anime` wanneer de website niet gerelateerd is aan anime).

### **`*regExp`** <br /> **`*iFrameRegExp`**

- Regelmatige expressies **moeten** geldig zijn. Please test your expressions with the tools listed on the [documentation](/dev/presence/metadata#testing).

### **`readLogs`**

- Must be `boolean` value (e.g. `true` or `false`).
- Enables logs for your presence.

### **`warning`**

- Enables warning icon for prompting user that this presence needs more steps than only adding presence.
- Example of presence using this metadata variable is `VLC`.

### **`settings`**

- If you decide to make a format string (for e.g., `%song% by %artist%`), you must have the variables surrounded by a percent sign on either side. Variables like `%var`, `var%`, or `%%var%%` and anything in between are **not** permitted for the sake of standardization.
- The name of settings must **not** be in all capital letters. For example, names such as `SHOW BROWSING STATUS` will **not** be permitted; however, names such as `Show Browsing Status` or `Show browsing status` are permitted.
- If you are using multiLanguage option you should know:
  - **Bolean** type value will only enable strings from [`general.json`](https://github.com/PreMiD/Localization/blob/master/src/Presence/general.json) from Localization repo or from presence file (e.g. when presence name is YouTube, extension will get strings from `youtube.json` too.)
  - **String** type value (e.g. `youtube.json`) will specify name of file that you want get strings from.
  - **Array<String>** type value (e.g. `["youtube.json", "vlive.json"]`) will specify name of files that you want get strings from.

## [**presence.ts**](/dev/presence/class)

> De code die u schrijft **moet** _goed geschreven_ en **moet** leesbaar zijn __ en alle strings moeten grammatisch correct zijn (fouten van grammatica op websites kunnen worden genegeerd).

> Elke presence volgt een strikte linting regel-set, die tijdens het beoordelingsproces zal worden gecontroleerd. Er zijn hier enkele aanbevelingen te zien. [TypeScript Plugin Recommendations for Strict Type Checking](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules). [ESlint Recommendations](https://eslint.org/docs/rules). [Prettier](https://prettier.io/).

Hier is een lijst met regels die je moet volgen bij het schrijven van je `presence.ts` bestand:

- **Always** declare a new instance of the `Presence` class before any other variable to avoid rare issues that may occur; this is not a requirement by design so it could be removed in the future.
- **Never** use custom functions when [native variants are available](https://docs.premid.app/dev/presence#files-explained); this makes sure fixes on the extension level also apply to your presences. You're free to use whatever you need if you do not find them listed in the docs.
- It is **forbidden** to code presences for a site without adding support to its primary language (for e.g., a YouTube presence coded with support only for Portueguese and Japanese, but not English itself.)
- The `smallImageKey` and `smallImageText` fields are intended to provide additional/secondary context (such as `playing/paused` for video sites, `browsing` for regular sites, and other cases) not to promote Discord profiles or anything unrelated to PreMiD.
- You are **not** allowed to access `localStorage`.
- When accessing cookies for stored data, please prefix the key with `PMD_`.
- You many only make HTTP/HTTPS requests to `premid.app` or the presence website API. If you are using external domains, you will be required to explain why it is necessary. Only allowed API to make request is [`Fetch API`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).
- Do **not** set fields in the presence data object to undefined after it has been declared, use the `delete` keyword instead. (for e.g., use `delete data.startTimestamp` instead of `data.startTimestamp = undefined`)
- You are **not** allowed to write presences that change the functionality of a given website. This includes the addition, deletion, or modification of DOM elements.

## [**tsconfig.json**](/dev/presence/tsconfig)

> Do **not** write your own `tsconfig.json` file, use what has been provided on [documentation](/dev/presence/tsconfig).

## Modification

> Je **moet** de versie in de **metadata** wijzigen om een hogere waarde te hebben van de vorige versie bij wijzigingen in de **presence.ts**, **iframe.ts** of **metadata.json**.

In sommige situaties kunnen presences onverwacht gedrag vertonen of enkele kleine veranderingen gebruiken om de functionaliteit te verbeteren. Hier is een lijst met regels die je **moet** volgen tijdens het wijzigen van presences.

- You are **not** allowed to rewrite a presence or change its author. If the presence author was banned from the official server or hasn't made the required changes within a month, you may contact a reviewer to see if you can to rewrite the presence.
- If you make modifications to a presence and change at least a **quarter** of the presence's codebase, you are allowed to add yourself as a contributor. Contact a reviewer for more information about this subject.
- Anyone may provide hotfixes to fix bugs; however, try **not** to make changes that are **not** required. Valid modifications include general fixes (code and typos), additions (descriptions and tags), missing files, etc. Do **not** change images if they are not outdated and are in specifications.

# Verification

> **Alle** code die aan de winkel is bijgedragen zal een licentie krijgen onder de `Mozilla Public License 2.0`.

> Als je contact wilt opnemen met iemand, gebruik dan onze officiële Discord server. Alle verificateurs hebben de rol `Reviewer` op hun profiel.

> Houd er rekening mee dat de beoordelaars vrijwillig werken en andere repositories beheren naast deze, je pull-aanvraag wordt mogelijk niet gereviewd tot uren of zelfs dagen nadat deze is aangemaakt.

> Heb **altijd** een up-to-date fork voordat je een pull-aanvraag aanmaakt. Dit zal valse positieven van checks te beperken.

Het belangrijkste proces van de ontwikkeling van je presence, is je presence in de store krijgen. Dit wordt gedaan door een [pull-aanvraag](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) op GitHub te maken in de `PreMiD/Presences` repository. Onze verificateurs zullen bevestigen dat jouw presence voldoet aan de normen en zal deze aan de winkel toevoegen.

<div>
  <h2 style="font-size: 2rem; margin-bottom: 0;">Presence Reviewers</h2>
  <a href="https://github.com/Bas950"><img src="https://github.com/Bas950.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/Timeraa"><img src="https://github.com/Timeraa.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/Alanexei"><img src="https://github.com/ririxidev.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <br />
</div>

## `Restrictions`

Herhalende overtredingen zoals het breken van richtlijnen, het spammen van pull requests, dreigementen of ongepast gedrag kan leiden tot verbanning van het maken van presences.

In dit scenario zullen de volgende wijzigingen plaatsvinden:

- Presences under your management will be transferred to the PreMiD bot or another user (reviewer decision). The application id for each presence will be recreated under the new owner's name.
- All of your issues and pull requests (presence creation, presence contribution, etc) created following the ban will be prompty closed.
- Tickets created under your name regarding presence development will be deleted.

## `Reviewing`

Enkele dingen die je moet weten voordat je een pull request opent:

- It takes 2 reviewers to merge a pull request.
- If a pull request is inactive for a period of 7 days, it will be promptly closed.
- All checks **must** be passed in order to merge.
- ⚠️ You **must** provide new, unaltered screenshots (taken by you) showing a side-by-side comparison of your profile and the website to prove that your presence works. _You are allowed to stitch screenshots together for viewing pleasure_ This applies for both creation and modification.
- ⚠️ You are also **required** to include screenshots of the presence settings in the extension if supplied. An example can be seen [here](https://imgur.com/a/OD3sj5R).

## `Controles`

![Controles](https://i.imgur.com/oqAakOc.png)

Currently, a presence goes through 3 separate stages of checks. Al deze controles helpen de verificateurs te bepalen of je presence geschikt is voor implementatie.

- `Codacy` is a bot that checks for code quality. If you ever receive errors for new issues, you are **required** to fix them. (_WARNING: Codacy bot will be deprecated soon and you will need check errors only from DeepScan!_)
- `DeepScan` is a bot that checks for code quality. If you ever receive errors for new issues, you are **required** to fix them.
- `Schema Validation` will scan your `metadata.json` file for any errors (for e.g., missing fields, invalid value types, etc.). If you ever see any new issues, you are also **required** to fix those. Adding a schema field to your `metadata.json` file will allow your text editor (if supported) to show you these errors during development.

## `Additional Rules`

- **Always** make sure to start your presence in the most appropriate folder, if its name starts with _any_ Latin letter then it must be under its alphabetical match (for e.g., `D/dアニメストア` or `G/Google`). Any other Unicode/non-Latin characters **must** be under the `#` folder (for e.g., `#/巴哈姆特`) and numbers under the `0-9` folder (for e.g., `0-9/4anime`).

Nadat je aan alle richtlijnen voldoet en je presence ten minste twee keer is geëvalueerd, wordt je presence toegevoegd aan de winkel.

# Suggestions
If you have some suggestions about our guidelines, you should contact us @ [PreMiD's discord server](https://discord.premid.app) and we will check them!

# Bijdrages

`Revision 3` of the guidelines was written and was contributed to by the following individuals:

<div>
<a href="https://github.com/Alanexei"><img src="https://github.com/ririxidev.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
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