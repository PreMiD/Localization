---
title: Presence-richtlijnen
description: Regels die alle presence-ontwikkelaars moeten volgen om hun presence te laten toevoegen.
published: true
date: 2021-03-06T15:01:04.274Z
tags:
editor: markdown
dateCreated: 2021-02-26T21:54:41.573Z
---

<div align="center">
    <img src="https://github.com/PreMiD.png?size=2048" width="128px" style="max-width:100%;">
    <h3 style="font-size: 2rem; margin-bottom: 0">Presence-richtlijnen</h3>
    <h4 style="margin-top: 0">Revisie 3</h4>
    <br />
</div>

# Richtlijnen

Bij het publiceren van presences op [onze GitHub-repository](https://github.com/PreMiD/Presences/), vereisen we dat je een aantal richtlijnen volgt. Voor sommigen lijken deze strenge regels misschien zwaar. Deze regels zullen er echter voor zorgen dat wij en onze gebruikers geen onnodige problemen tegenkomen.

# Aanmaak

De algemene regels voor de ontwikkeling van een presence zijn:

- Presences **moeten** gerelateerd zijn aan de website van de keuze.
- Presences **mogen niet** worden gemaakt voor illegale websites. (bijvoorbeeld, stressors, drugshandel, kinderpornografie, enz.)
- De bestandsstructuur moet "clean" en beheerd zijn, bevat geen bestanden die niet gespecificeerd zijn. (bijvoorbeeld vscode en git folders, afbeeldingen en tekstbestanden, etc.)
- Je moet een juiste bestandsstructuur hebben, concepten zijn **niet** toegestaan.
- Presences voor websites met (`.onion` TLD's) of websites met gratis domeinen/hosts (zoals `.TK` [alle gratis Freenom domeinen], `.RF`, `GD`, etc.) zijn **niet** toegestaan, uitzonderingen kunnen gemaakt worden als er bewijs is laten zien dat er betaald is voor een domein.
- Het domein van de presence moet minimaal 2 maanden oud zijn.
- Presences die gericht zijn op interne browserpagina's (zoals de Chrome Web Store, `chrome://`- en `about:`-pagina's, etc.) zijn **niet** toegestaan, omdat zij een experimentele flag ingeschakeld moeten hebben, en omdat het mogelijk schade kan toebrengen aan browsers.
- Presences met ondersteuning alleen voor een enkel doel zullen **niet** toegestaan worden, omdat ze mogelijk gebroken lijken voor andere pagina's (zoals de homepagina), uitzonderingen kunnen worden gemaakt voor beleid en contactpagina's (inhoud die niet vaak gebruikt wordt) of sites waar de andere inhoud niet gerelateerd is. (bijvoorbeeld wikia-pagina's)
- Presences voor online radio's zijn alleen toegestaan als de radio ten minste 100 wekelijkse luisteraars en 15 gelijktijdige luisteraars heeft. Ook moet het enkele functies hebben en niet alleen album en titel.
- Lage kwaliteit presences (of degenen met weinig context) zijn **niet** toegestaan (bijvb: alleen een logo en tekst tonen maar het verandert later nooit meer.)
- Met de opkomst van `knoppen` hebben we wat richtlijnen toegevoegd:
  - Omleidingen naar de hoofdpagina zijn verboden.
  - Websites promoten via knoppen is verboden.
  - Ze kunnen geen aanvullende info die niet meer past in `state` of `details` weergeven.
- De map `dist` en de bestanden `presence.ts`, `iframe.ts` en `metadata.json` moeten worden meegeleverd, dus het resultaat zou als volgt moeten zijn:

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

> Als een veld als optioneel wordt vermeld in de [documentatie](https://docs.premid.app/en/dev/presence/metadata) of er staat `*` er naast en je presence gebruikt de standaardwaarde ervoor, typ deze dan niet in het `metadata`-bestand. (bijv. een presence zonder iframe ondersteuning heeft het veld `iframe` niet nodig.)

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
- Als de dienst expliciete regels voor hun merknaam heeft, moeten deze worden opgevolgd.

### **`*altnames`**

- Gebruik dit **alleen** wanneer je gekozen website meerdere officiële namen heeft (bijv. Pokémon en 포켓몬스터). _Verkorte_ versies van servicenamen gaan onder `tags`.

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
- De afbeelding is **vereist** om een minimale resolutie van `512x512` pixels te hebben. Je kunt je afbeelding vergroten met behulp van een tool zoals [waifu2x](http://waifu2x.udp.jp/).

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

- De categorie **moet** vermeld staan in de [documentatie](/dev/presence/metadata#presence-categories).
- De presence moet een categorie gebruiken die overeenkomt met de inhoud van de website. (bijvoorbeeld, gebruik niet `anime` wanneer de website niet gerelateerd is aan anime).

### **`*regExp`** <br /> **`*iFrameRegExp`**

- Regelmatige expressies **moeten** geldig zijn. Test je expressions met de tools in de [documentatie](/dev/presence/metadata#testing).

### **`readLogs`**

- Moet `boolean` waarde zijn (bijvoorbeeld `true` or `false`).
- Schakelt logs in voor je presence.

### **`waarschuwing`**

- Zet het waarschuwingspictogram aan om de gebruiker aan te geven dat deze presence meerdere stappen vereist dan alleen de presence toe te voegen.
- Een voorbeeld van een presence met deze metadatavariabele is `VLC`.

### **`settings`**

- Als je besluit om een indelingsstring te maken (bijvoorbeeld `%song% by %artist%`), moet je de variabelen omgeven door een procentteken aan beide zijden. Variabelen zoals `%var`, `var%`, of `%%var%%` en alles ertussenin, zijn **niet** toegestaan omwille van normalisatie.
- De namen van de instellingen mogen **niet** in alle hoofdletters staan. Namen zoals `LAAT BROWSING STATUS ZIEN` zullen **niet** toegestaan zijn; Namen zoals `Laat Browsing Status Zien` of `Laat browsing status zien` zijn echter toegestaan.
- If you are using `multiLanguage` option you should know:
  - Waarde met het type **Boolean** zal alleen tekenreeksen van [`general.json`](https://github.com/PreMiD/Localization/blob/master/src/Presence/general.json) van de lokalisatierepo of het presence-bestand (bijv. als de presence-naam YouTube is, zal de extensie ook tekenreeksen ophalen uit `youtube.json`) ophalen.
  - Waarde met het type **String** (bijv. `youtube`) geeft de bestandsnaam voor het ophalen van tekenreeksen op.
  - Waarde met het type **Array<String>** (bijv. `["youtube", "vlive"]`) geeft de bestandsnamen voor het ophalen van tekenreeksen op.

## [**presence.ts**](/dev/presence/class)

> De code die u schrijft **moet** _goed geschreven_ en **moet** leesbaar zijn __ en alle strings moeten grammatisch correct zijn (fouten van grammatica op websites kunnen worden genegeerd).

> Elke presence volgt een strikte linting regel-set, die tijdens het beoordelingsproces zal worden gecontroleerd. Er zijn hier enkele aanbevelingen te zien. [TypeScript Plugin Aanbevelingen voor Strict Type Checking](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules). [ESlint-aanbevelingen](https://eslint.org/docs/rules). [Prettier](https://prettier.io/).

Hier is een lijst met regels die je moet volgen bij het schrijven van je `presence.ts` bestand:

- Verklaar **altijd** een nieuw instance van de `Presence` klasse voor een andere variabele om zeldzame problemen te voorkomen; Dit is geen vereiste volgens het ontwerp, zodat het in de toekomst kan worden geschrapt.
- Gebruik **nooit** aangepaste functies wanneer [native varianten beschikbaar zijn](https://docs.premid.app/dev/presence#files-explained); dit zorgt ervoor dat fixes op extensie-niveau ook van toepassing zijn op je presences. Je kunt gebruik maken van alles wat je nodig hebt als je het niet in de documenten kunt vinden.
- Het is **verboden** om presences voor een website te coderen zonder ondersteuning toe te voegen aan de hoofdtaal (bijvoorbeeld, een YouTube presence gecodeerd met steun voor Portugees en Japans, maar niet voor Engels zelf.)
- De velden `smallImageKey` en `smallImageText` zijn bedoeld om extra/secundaire context te bieden (zoals `afspelen/gepauzeerd` voor videosites, `bladeren` voor reguliere sites) en niet voor het adverteren van je Discord-profiel of iets wat niet gerelateerd is aan PreMiD.
- Je hebt **geen** toegang tot `localStorage`.
- Bij het gebruiken van cookies voor opgeslagen gegevens, gebruik dan de prefix `PMD_` voor de key.
- Je mag alleen HTTP-/HTTPS-verzoeken naar `premid.app` of de website-API van de presence maken. Als je externe domeinen gebruikt, moet je uitleggen waarom dat nodig is. De enige toegestane API om een request te maken is de [`Fetch API`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).
- Stel velden in het presenceData object **niet** in op undefined nadat ze verklaard zijn, maar gebruik in plaats daarvan `delete`. (bijv. gebruik `delete data.startTimestamp` in plaats van `data.startTimestamp = undefined`)
- Je bent **niet** toegestaan om presences te schrijven die de functionaliteiten van een bepaalde website wijzigen. Dit omvat het toevoegen, verwijderen en wijzigen van DOM-elementen.

## [**tsconfig.json**](/dev/presence/tsconfig)

> Schrijf **niet** je eigen `tsconfig.json` bestand, gebruik wat geleverd is in deze [documentatie](/dev/presence/tsconfig).

## Aanpassingen

> Je **moet** de versie in de **metadata** wijzigen om een hogere waarde te hebben van de vorige versie bij wijzigingen in de **presence.ts**, **iframe.ts** of **metadata.json**.

In sommige situaties kunnen presences onverwacht gedrag vertonen of enkele kleine veranderingen gebruiken om de functionaliteit te verbeteren. Hier is een lijst met regels die je **moet** volgen tijdens het wijzigen van presences.

- Je bent **niet** toegestaan om een presence te herschrijven of de auteur aan te passen. Als de presence-auteur van de officiële server verbannen is of binnen een maand nog niet de vereiste wijzigingen aangebracht heeft, kun je contact opnemen met een controleur om te kijken of je de presence kunt herschrijven.
- Als je wijzigingen aanbrengt in de presence en ten minste een **kwart** van de presence-code wijzigt mag je jezelf toevoegen als bijdrager. Neem contact op met een controleur voor meer informatie hierover.
- Iedereen kan hotfixes aanbieden om bugs op te lossen, maar breng **geen** wijzigingen aan als die **niet** nodig zijn. Geldige wijzigingen omvatten algemene fixes (code en typfouten), toevoegingen (beschrijvingen en tags), ontbrekende bestanden, etc. Verander **geen** afbeeldingen als ze niet verouderd zijn en voldoen aan vereisten.

# Verificatie

> **Alle** bijgedragen code in de bibliotheek wordt gelicenseerd onder de `Mozilla Public License 2.0`.

> Als je contact wilt opnemen met iemand, gebruik dan onze officiële Discord server. Alle verificateurs hebben de rol `Controleur` op hun profiel.

> Houd er rekening mee dat controleurs vrijwillig werken en naast deze mogelijk andere repository's beheren. Het kan dus langer dan een paar uur of zelfs een paar dagen duren voordat je pull-aanvraag wordt gecontroleerd nadat je hem aanmaakt.

> Heb **altijd** een up-to-date fork voordat je een pull-aanvraag aanmaakt. Dit zal valse positieven van checks te beperken.

Het belangrijkste proces van de ontwikkeling van je presence is de publicatie naar de bibliotheek. Dit wordt gedaan door een [pull-aanvraag](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) op GitHub te maken in de `PreMiD/Presences` repository. Onze controleurs zullen bevestigen dat je presence voldoet aan onze normen. Daarna kan deze worden toegevoegd aan de bibliotheek.

<div>
  <h2 style="font-size: 2rem; margin-bottom: 0;">Presencecontroleurs</h2>
  <a href="https://github.com/Bas950"><img src="https://github.com/Bas950.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/Timeraa"><img src="https://github.com/Timeraa.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/Alanexei"><img src="https://github.com/ririxidev.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <br />
</div>

## `Beperkingen`

Herhalende overtredingen zoals het breken van richtlijnen, het spammen van pull requests, dreigementen of ongepast gedrag kan leiden tot verbanning van het maken van presences.

In dit scenario zullen de volgende wijzigingen plaatsvinden:

- Presences onder je beheer zullen worden overgedragen naar de PreMiD-bot of een andere gebruiker (besluit van controleur). De applicatie-id voor elke presence wordt opnieuw gemaakt onder de naam van de nieuwe eigenaar.
- Al je issues en pull-aanvragen (presence-toevoegingen en -wijzigingen, enz.) die zijn gecreëerd na het verbod zullen worden gesloten.
- Tickets die onder je naam zijn gemaakt met betrekking tot presence-ontwikkeling worden verwijderd.

## `Controle`

Enkele dingen die je moet weten voordat je een pull request opent:

- Er zijn 2 controleurs nodig om een pull-aanvraag samen te voegen.
- Als een pull-aanvraag 7 dagen lang inactief is, zal deze worden gesloten.
- Alle controles **moeten** voldaan zijn voordat er samengevoegd kan worden.
- ⚠️ Je **moet** nieuwe, onaangepaste schermafbeeldingen (gemaakt door jou) meesturen die je profiel en de website naast elkaar tonen om te bewijzen dat je presence werkt. _Je mag schermafbeeldingen samennemen voor verhoogd kijkgemak_ Dit geldt zowel voor het aanmaken van je presence als voor latere aanpassingen.
- ⚠️ Je bent ook **verplicht** om schermafbeeldingen te maken van eventuele presence-instellingen. Een voorbeeld kan je [hier](https://imgur.com/a/OD3sj5R) bekijken.

## `Checks`

![Controles](https://i.imgur.com/oqAakOc.png)

Op dit moment wordt de presence in drie afzonderlijke fasen gecontroleerd. Al deze controles helpen de verificateurs te bepalen of je presence geschikt is voor implementatie.

- `Codacy` is een bot die controleert op de kwaliteit van code. Als je ooit fouten ontvangt voor nieuwe problemen, **moet** je ze oplossen. (_WAARSCHUWING: de Codacy-bot wordt binnenkort niet meer ondersteund en je hebt alleen controlefouten van DeepScan!_)
- `DeepScan` is een bot die controleert op de kwaliteit van code. Als je ooit fouten ontvangt voor nieuwe problemen, **moet** je ze oplossen.
- `Schema Validation` zal je `metadata.json` bestand scannen op fouten (bijvoorbeeld ontbrekende velden, ongeldige waarde types, etc.). Als je ooit nieuwe problemen ziet, ben je ook **verplicht** om die op te lossen. Het toevoegen van een schemaveld aan je `metadata.json` bestand zal je tekstverwerker (indien ondersteund) toestaan om deze fouten te tonen tijdens de ontwikkeling van je presence.

## `Aanvullende regels`

- Zorg er **altijd** voor dat je presence in de meest geschikte map begint, als de naam begint met een Latijnse letter dan moet het onder de alfabetische overeenkomst vallen (bijv. `D/dアニメストア` of `G/Google`). Alle andere Unicode/niet-Latijnse tekens **moeten** onder de map `#` staan (bijvoorbeeld `#/巴哈姆特`) en nummers onder de `0-9` map (bijvoorbeeld `0-9/4anime`).

Nadat je aan alle richtlijnen hebt voldaan en je presence tenminste twee keer is gecontroleerd, wordt je presence toegevoegd aan de bibliotheek.

# Suggesties
Als u enkele suggesties hebt over onze richtlijnen, kun je contact met ons opnemen @ [PreMiD discord server](https://discord.premid.app) en wij zullen deze bekijken!

# Bijdrages

`Revisie 3` van de richtlijnen is geschreven en is bijgedragen door de volgende personen:

<div>
<a href="https://github.com/Alanexei"><img src="https://github.com/ririxidev.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
</div>

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