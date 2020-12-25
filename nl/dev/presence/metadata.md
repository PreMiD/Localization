---
title: Metadata.json
description: Bevat basisgegevens over de Presence
published: true
date: 2020-12-25T00:41:36.917Z
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
      "title": "DISPLAY TITLE",
      "icon": "FONTAWESOME ICOON",
      "value": "\"%song%\" by %artist%",
      "placeholder": "use %song% or %artist%"
    },
    {
      "id": "ID",
      "title": "TITEL",
      "icon": "FONTAWESOME FREE ICON",
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
      <td style="text-align:left">Moet een object bevatten met de <code>naam</code> en <code>id</code> van de presence-ontwikkelaar. Naam is je Discord gebruikersnaam zonder identificatie(#0000). Gebruiker <code>id</code> kan worden gekopieerd van Discord door de ontwikkelaar
        modus in te schakelen en de rechtermuisknop op je profiel te klikken.</td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>Nee</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>bijdragers</b></td>
      <td style="text-align:left">Moet een object bevatten met de <code>naam</code> en <code>id</code> van de bijdrager. Naam is je Discord gebruikersnaam zonder identificatie(#0000). Gebruiker <code>id</code> kan worden gekopieerd van Discord door de ontwikkelaar
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

PreMiD is een polygot service, wat betekent dat er een groot aantal talen bij betrokken zijn om gebruikers over de hele wereld te verbinden. Een volledige lijst met talen kan worden gevonden met dit [API endpoint](https://api.premid.app/v2/langFile/list). To customize your presence even more you can allow users to select their presence display language see [`multiLanguage`](#multilanguage) for more.

## Presence instellingen
Interactieve instellingen instellen zodat gebruikers de presence kunnen aanpassen!
```typescript
"settings": [
  {
    "id": "ID",
    "multiLanguage": true //See https://docs.premid.app/dev/presence/metadata#multilanguage
  },
  {
    "id": "ID",
    "title": "DISPLAY TITLE",
    "icon": "FONTAWESOME FREE ICON", //Example "fas fa-info"
    "value": true //Boolean value will make it an on/off switch with the value as the default value
  },
  {
    "id": "ID",
    "if": {
      "ID": true //If another setting equals this value (true/false/0/1/etc.) then show this button
    },
    "title": "DISPLAY TITLE",
    "icon": "FONTAWESOME FREE ICON",
    "value": "\"%song%\" by %artist%", //Putting in a string will make the setting an input one, where you can use a custom input.
    "placeholder": "use %song% or %artist%" //When input is empty it will show this grayed out
  },
  {
    "id": "ID",
    "title": "DISPLAY TITLE",
    "icon": "FONTAWESOME FREE ICON",
    "value": 0, //Default value of the selector
    "values": ["1", "2", "etc."] //Will make the setting a selector where you select which one you want
  }
]
```

### `multiLanguage`

#### Introductie

The `multiLanguage` setting is used to allow users to manually select the language they want to presence to be shown in. This requires you to use strings from our [API](https://api.premid.app/v2/langFile/presence/en), for information on how to add strings click [here](/dev/presence/metadata/adding-new-strings).

#### Setup

The `multiLanguage` setting is a special case, it doesn't require a `title` nor `icon` nor `value` or `values` like other settings but it does require you some more things to setup!

The `multiLanguage` key can be set to the following:

`true`: use this if you are only going to use strings of the `general.json` file and the `<service>.json` file of the [Localization Repository](https://github.com/PreMiD/Localization/tree/master/src/Presence). `string`: name of the file excluding the extension (.json) inside the [Localization Repository](https://github.com/PreMiD/Localization/tree/master/src/Presence) (excluding the `general` file, since it's always loaded). Only common languages of both the `general` and inputted file will be listed. `Array<String>`: if you are using more than one file inside the [Localization Repository](https://github.com/PreMiD/Localization/tree/master/src/Presence) you can specify all the values in an array (excluding the `general` file, since it's always loaded). Only common languages of all the files will be listed.

#### Adding new strings

##### Het project klonen

1. Open a terminal and type `git clone https://github.com/PreMiD/Localization`.
2. Kies een map van je keuze.
3. Open het in uw code editor.

##### Creating the file

1. Go into the `src` folder.
2. Go into the `Presence` folder.
3. Make a file named `<service>.json`. (Service is the **name** (not an URL) in lowercase of the service you want to support.)

##### Adding the strings

Each `string` is an `Object` where from the name starts with the service name and then the so called stringName with a dot in between them.

The stringName is a 1 word identifier of the message.

The `Object` has 2 properties; `message` and `description`. `message` is the text that needs to be translated. `description` is a description of the message to help our translators understand what they are translating.

**Note:** Do not add any duplicate strings. (This includes strings out of the `general.json` file but not the other files.)

Visualization of the the file:

```typescript
{
  "<service>.<stringName>": {
    "message": "Text that needs to be translated.",
    "description": "This explains what the message above is."
  },
  "<service>.<stringName>": {
    "message": "Text that needs to be translated.",
    "description": "This explains what the message above is."
  }
}
```

After you have fully made the file with strings you can create a Pull Request on the [Localization Repository](https://github.com/PreMiD/Localization), in the description you **must** include a link to your Pull Request of the presence updated using these new strings from the [Presence Repository](https://github.com/PreMiD/Presences).

#### Default keys
The keys you didn't have to set are automatically set to the following: `title`: "Language" **Note:** This is translated into their default language (browser language). `icon`: "fas fa-language" ([Preview](https://fontawesome.com/icons/language)) `value`: **Set to their browser language if it is available (100% translated), otherwise English.** `values`: **Set to the available languages (languages that have it 100% translated).**

**Note:** These are in no way changeable.

### Methodes

Gebruik de volgende methoden om informatie van je instellingen in je presence-bestanden te krijgen:
#### `getSetting(String)`
Retourneert de waarde van de instelling.
```typescript
const setting = await presence.getSetting("pdexID"); //Replace pdexID with the id of the setting
console.log(setting); // This will log the value of the setting
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
        <td style="text-align:left"><b>Sociaal</b></td>
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

