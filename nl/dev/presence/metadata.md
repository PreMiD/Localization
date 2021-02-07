---
title: Metadata.json
description: Bevat basisgegevens over de presence
published: true
date: 2021-02-07T17:12:06.799Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:52.965Z
---

# Metadata.json

Als u een presence in de winkel wilt publiceren en deze wilt laden via de extensie, dan moet u de `metadata.json` bestand in uw `dist` map aanmaken.

Een voorbeeld van dat bestand kan hieronder worden gevonden.

```typescript
{
  "author": {
    "name": "GEBRUIKER",
    "id": "ID"
  },
  "contributors": [{
    "name": "GEBRUIKER",
    "id": "ID"
  }],
  "service": "SERVICE",
  "altnames": ["SERVICE"],
  "description": {
    "en": "BESCHRIJVING"
  },
  "url": "URL",
  "regExp": "REGEXP",
  "iFrameRegExp": "REGEXP",
  "version": "VERSIE",
  "logo": "URL",
  "thumbnail": "URL",
  "color": "#45A8FC",
  "tags": ["TAG1", "TAG2"],
  "category": "CATEGORIE",
  "iframe": false,
  "settings": [
    {
      "id": "ID",
      "title": "TITEL",
      "icon": "FONTAWESOME ICOON",
      "value": true
    },
    {
      "id": "ID",
      "if": {
        "ID": true
      },
      "title": "TITEL",
      "icon": "FONTAWESOME ICOON",
      "value": "\"%song%\" by %artist%",
      "placeholder": "use %song% or %artist%"
    },
    {
      "id": "ID",
      "title": "TITEL",
      "icon": "FONTAWESOME ICOON",
      "value": 0,
      "values": ["1", "2", "etc."]
    }
  ]
}
```

## De metadata.json begrijpen

Dat voorbeeld lijkt erg vreemd, toch? Maak je geen zorgen, het is niet zo moeilijk om te begrijpen waar elke variabele voor staat.

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
      <td style="text-align:left"><b>author</b></td>
      <td style="text-align:left">Moet een object bevatten met de <code>naam</code> en <code>id</code> van de presence-ontwikkelaar. <code>naam</code> is je Discord gebruikersnaam zonder identificatie(#0000). Gebruiker <code>id</code> kan worden gekopieerd van Discord door de ontwikkelaar
        modus in te schakelen en de rechtermuisknop op je profiel te klikken.</td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>Nee</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>bijdragers</b></td>
      <td style="text-align:left">Moet een object bevatten met de <code>naam</code> en <code>id</code> van de bijdrager. <code>naam</code> is je Discord gebruikersnaam zonder identificatie(#0000). Gebruiker <code>id</code> kan worden gekopieerd van Discord door de ontwikkelaar
        modus in te schakelen en de rechtermuisknop op je profiel te klikken.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>Ja</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>service</b></td>
      <td style="text-align:left">De titel van de dienst die door deze presence wordt ondersteund.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Nee</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>altnames</b></td>
      <td style="text-align:left">Wees in staat om de presence te zoeken met een alternatieve naam.<br>
      Bedoelt om gebruikt te worden voor presences met verschillende namen in verschillende talen (bijv. Pokémon and 포켓몬스터).<br>
      Je kunt het ook gebruiken voor presences die speciale tekens hebben zodat je deze niet hoeft te typen (bijv. Pokémon and Pokemon).</td>
      <td style="text-align:left"><code>Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Ja</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>description</b></td>
      <td style="text-align:left">Beschrijving van de service <b>NIET</b> de presence. Je beschrijving moet key waarden bevatten die de taal en de beschrijving in die specifieke taal aangeven. Maak beschrijvingen met de talen <i>die u kent</i>, onze vertalers zullen wijzigingen aanbrengen in uw metadata bestand. Bekijk de categorie voor de presence talen voor een lijst. </td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>Nee</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b></td>
      <td style="text-align:left">URL van de service.<br>
      <b>Voorbeeld:</b><code>vk.com</code><br>
      <b>Deze URL moet overeenkomen met de URL van de website omdat deze wordt gebruikt om te detecteren of dit de juiste website is om het script in te injecteren. Dit mag alleen worden gebruikt als een array als er meerdere urls zijn.</b></td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Nee</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b></td>
      <td style="text-align:left">Een reguliere expressie string gebruiken om URL's te vergelijken.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Ja</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>versie</b></td>
      <td style="text-align:left">Je presence-versie.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Nee</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>logo</b></td>
      <td style="text-align:left">Link naar service&apos;s logo.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Nee</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b></td>
      <td style="text-align:left">Link naar de thumbnail van de presence.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Nee</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>color</b></td>
      <td style="text-align:left"><code>#HEX</code> waarde. We raden u aan een primaire kleur van de service
        te gebruiken die uw presence ondersteunt.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Nee</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>tags</b></td>
      <td style="text-align:left">Array met tags, ze helpen gebruikers uw presence op de website te vinden.</td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Nee</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>category</b></td>
      <td style="text-align:left">Een tekst die wordt gebruikt om de categorie aan te geven waar de presence onder valt.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Nee</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b></td>
      <td style="text-align:left">Definieert of <code>iFrames</code> worden gebruikt</td>
      <td style="text-align:left"><code>Boolean</code></td>
      <td style="text-align:left"><code>Ja</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b></td>
      <td style="text-align:left">Een reguliere expressie string gebruiken om iFrames te vergelijken.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Ja</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>readLogs</b></td>
      <td style="text-align:left">Definieert of de extensie logs moet lezen.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Ja</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>settings</b></td>
      <td style="text-align:left">Een reeks instellingen die de gebruiker kan wijzigen</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>Ja</code></td>
    </tr>
  </tbody>
</table>

## Reguliere Expressies

Als je reguliere expressies wilt leren, zijn hier enkele websites.

#### Leren

• [Handleiding Video](https://youtu.be/sXQxhojSdZM) • [RegexOne](https://regexone.com/) • [Reguliere Expressies Informatie](https://www.regular-expressions.info/tutorial.html)

#### Testen

• [Regexr](https://regexr.com/) • [Regex101](https://regex101.com/)

## Presence talen

PreMiD is een polygot service, wat betekent dat er een groot aantal talen bij betrokken zijn om gebruikers over de hele wereld te verbinden. Een volledige lijst met talen kan worden gevonden met dit [API endpoint](https://api.premid.app/v2/langFile/list). Om je presence aanpasbaar te maken voor je gebruikers dan kan je instellen dat ze hun taal veranderen die word weergegeven, zie [`multiLanguage`](#multilanguage) voor meer.

## Presence instellingen
Interactieve instellingen instellen zodat gebruikers de presence kunnen aanpassen!
```typescript
"settings": [
  {
    "id": "ID",
    "multiLanguage": true //Zie https://docs.premid.app/dev/presence/metadata#multilanguage
  },
  {
    "id": "ID",
    "title": "TITEL",
    "icon": "FONTAWESOME ICOON", //Voorbeeld "fas fa-info"
    "value": true //Een Boolean waarde zorgt ervoor dat dit een switch word.
  },
  {
    "id": "ID",
    "if": {
      "ID": true //Als de andere setting deze waarde heeft (true/false/0/1/etc.) dan wordt deze button getoond
    },
    "title": "TITEL",
    "icon": "FONTAWESOME ICOON",
    "value": "\"%song%\" by %artist%", //Met een string word het een input veld.
    "placeholder": "use %song% or %artist%" //Als de string leeg is word dit getoont als informatie.
        },
        {
            "id": "ID",
            "title": "TITEL",
            "icon": "FONTAWESOME ICOON",
            "value": 0, //De default waarde van de selector
            "values": ["1", "2", "etc."] //Zorgt er voor dat het een selector word met de waarden.
        }
]
```

### `multiLanguage`

#### Introductie

De `multiLanguage` instelling wordt gebruikt om gebruikers in staat te stellen handmatig de taal te selecteren waarin de presence word weergegeven. Hiervoor moet u strings van onze [API](https://api.premid.app/v2/langFile/presence/en) gebruiken, voor informatie over hoe je strings kunt toevoegen klik [hier](/dev/presence/metadata/adding-new-strings).

#### Set-up

De `multiLanguage` instelling is een speciaal geval, het heeft geen `title` en `icon` en `value` en `values` nodig zoals andere instellingen, maar er zijn nog wat andere dingen nodig om in te stellen!

De `multiLanguage` key kan als volgt worden ingesteld:

`true`: gebruik dit als je alleen strings van de `general.json` bestand en het `<service>.json` bestand gaat gebruiken van de [Localization Repository](https://github.com/PreMiD/Localization/tree/master/src/Presence). `string`: naam van het bestand exclusief de extensie (.json) in [Localization Repository](https://github.com/PreMiD/Localization/tree/master/src/Presence) (exclusief het `general` bestand, omdat het altijd geladen is). Alleen gemeenschappelijke talen van zowel het `general` en het ingevoerde bestand worden weergegeven. `Array<String>`: als u meer dan één bestand in de [Localization Repository](https://github.com/PreMiD/Localization/tree/master/src/Presence) gebruikt, kunt u alle waarden in een array opgeven (exclusief het `general` bestand, omdat het altijd geladen is). Alleen gemeenschappelijke talen van alle bestanden worden weergegeven.

#### Nieuwe tekenreeksen toevoegen

##### Het project klonen

1. Open een terminal en typ `git clone https://github.com/PreMiD/Localization`.
2. Kies een map van je keuze.
3. Open het in uw code editor.

##### Bestand aanmaken

1. Ga in de map `src`.
2. Ga in de map `Presence`.
3. Maak een bestand genaamd `<service>.json`. (Service is de **naam** (geen URL) in kleine letters van de service die u wilt ondersteunen.)

##### De tekenreeksen toevoegen

Elke `string` is een `object` waar van de naam begint met de servicenaam en de zogenaamde stringName met een punt ertussen.

De stringName is een 1 woord identifier van het bericht.

Het `object` heeft 2 eigenschappen: `message` en `description`. `message` is de tekst die vertaald moet worden. `description` is een beschrijving van het bericht om onze vertalers te helpen begrijpen wat ze vertalen.

**Opmerking:** Voeg geen dubbele strings toe. (Dit bevat strings van het `general.json` bestand, maar niet de andere bestanden.)

Visualisatie van het bestand:

```typescript
{
  "<service>.<stringName>": {
    "message": "Tekst die moet worden vertaald. ,
    "description": "Dit verklaart wat het bericht hierboven is."
  },
  "<service>.<stringName>": {
    "message": "Tekst die moet worden vertaald. ,
    "description": "Dit verklaart wat het bericht hierboven is."
  }
}
```

Nadat u het bestand met strings volledig hebt gemaakt, kunt u een pull-aanvraag maken op de [Localization Repository](https://github.com/PreMiD/Localization), in de beschrijving **moet** u een link naar uw pull-aanvraag van de bijgewerkte presence uit de [Presence Repository](https://github.com/PreMiD/Presences) toevoegen die met behulp van deze nieuwe strings is gemaakt.

#### Standaard keys
De keys die je niet hebt hoeven instellen zijn automatisch ingesteld op het volgende: `title`: "Language" **Opmerking:** Dit wordt vertaald naar hun standaard taal (browsertaal). `icon`: "fas fa-language" ([Voorbeeld](https://fontawesome.com/icons/language)) `value`: **Word ingesteld naar de taal van de browser in als deze beschikbaar is (100% vertaald), anders Engels.** `values`: **Word ingesteld op de beschikbare talen (talen die het 100% vertaald hebben).**

**Opmerking:** Deze zijn op geen enkele manier te wijzigen.

### Methodes

Gebruik de volgende methoden om informatie van je instellingen in je presence-bestanden te krijgen:
#### `getSetting(String)`
Retourneert de waarde van de instelling.
```typescript
const setting = await presence.getSetting("pdexID"); // Vervang pdexID met de id van de instelling
console.log(setting); // Dit zal de waarde van de instelling loggen
```

#### `hideSetting(String)`
Verbergt de gegeven instelling.
```typescript
presence.hideSetting("pdexID"); ///vervang pdexID met het id van de instelling
```

#### `showSetting(String)`
Toont gegeven instelling (werkt alleen als de instelling al verborgen was).
```typescript
presence.showSetting("pdexID"); ///vervang pdexID met het id van de instelling
```

## Presence categorieën

Bij het maken van je presence moet je een categorie opgeven waaronder de presence valt. Dit is een gecompileerde lijst van de categorieën die je kunt gebruiken.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Categorie</th>
      <th style="text-align:left">Naam</th>
      <th style="text-align:left">Beschrijving</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>anime</b></td>
      <td style="text-align:left"><b>Anime</b></td>
      <td style="text-align:left">Alles wat gerelateerd is aan anime, van forums tot video-streamingplatformen.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>games</b></td>
      <td style="text-align:left"><b>Spellen</b></td>
      <td style="text-align:left">Elke website met spelgerelateerde inhoud, zoals <code>Kahoot</code> of <code>Skribbl.io</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>music</b></td>
      <td style="text-align:left"><b>Muziek</b></td>
      <td style="text-align:left">Dit zijn websites die muziek gerelateerde content aanbieden, ongeacht of die streamen of downloaden.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>socials</b></td>
        <td style="text-align:left"><b>Socials</b></td>
      <td style="text-align:left">Websites die worden gebruikt voor het maken en delen van content of voor deelname aan andere vormen van sociaal netwerk.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>videos</b></td>
        <td style="text-align:left"><b>Video's & Streams</b></td>
      <td style="text-align:left">Websites die dienen voor het leveren van video's en streams.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>other</b></td>
      <td style="text-align:left"><b>Overige</b></td>
      <td style="text-align:left">Alles wat niet valt onder een specifieke categorie hierboven vermeld.</td>
    </tr>
  </tbody>
</table>

