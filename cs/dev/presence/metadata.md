---
title: Metadata.json
description: Obsahuje základní údaje o Presence
published: true
date: 2021-02-07T17:12:06.799Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:52.965Z
---

# Metadata.json

Pokud chcete publikovat presence do obchodu a načíst ji pomocí našeho rozšíření, měli byste vytvořit soubor `metadata.json` ve vaší `dist` složce.

An example of that file can be found below.

```typescript
{
  "author": {
    "name": "USER",
    "id": "ID"
  },
  "contributors": [{
    "name": "USER",
    "id": "ID"
  }],
  "service": "SERVICE",
  "altnames": ["SERVICE"],
  "description": {
    "en": "DESCRIPTION"
  },
  "url": "URL",
  "regExp": "REGEXP",
  "iFrameRegExp": "REGEXP",
  "version": "VERSION",
  "logo": "URL",
  "thumbnail": "URL",
  "color": "#45A8FC",
  "tags": ["TAG1", "TAG2"],
  "category": "CATEGORY",
  "iframe": false,
  "settings": [
    {
      "id": "ID",
      "title": "DISPLAY TITLE",
      "icon": "FONTAWESOME ICON",
      "value": true
    },
    {
      "id": "ID",
      "if": {
        "ID": true
      },
      "title": "DISPLAY TITLE",
      "icon": "FONTAWESOME ICON",
      "value": "\"%song%\" by %artist%",
      "placeholder": "use %song% or %artist%"
    },
    {
      "id": "ID",
      "title": "DISPLAY TITLE",
      "icon": "FONTAWESOME ICON",
      "value": 0,
      "values": ["1", "2", "etc."]
    }
  ]
}
```

## Pochopení metadata.json

Tento příklad se zdá opravdu zvláštní, že? Nebojte se, není tak těžké pochopit, k čemu je každá proměnná.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Proměnná</th>
      <th style="text-align:left">Popis</th>
      <th style="text-align:left">Typ</th>
      <th style="text-align:left">Nepovinné</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>autor</b></td>
      <td style="text-align:left">Should contain an Object with the <code>name</code> and <code>id</code> of the presence developer. <code>name</code> is your Discord username without the identifier(#0000). Uživatelské <code>id</code> lze zkopírovat z Discordu povolením módu vývojáře
        a kliknutím pravým tlačítkem myši na tvůj profil.</td>
      <td style="text-align:left"><code>Objekt</code></td>
      <td style="text-align:left"><code>Ne</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>přispěvatelé</b></td>
      <td style="text-align:left">Should contain an Object with the <code>name</code> and <code>id</code> of the contributor. <code>name</code> is your Discord username without the identifier(#0000). Uživatelské <code>id</code> lze zkopírovat z Discordu povolením módu vývojáře
        a kliknutím pravým tlačítkem myši na tvůj profil.</td>
      <td style="text-align:left"><code>Pole&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>Ano</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>služba</b></td>
      <td style="text-align:left">Název služby, kterou tato presence podporuje.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Ne</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>altnames</b></td>
      <td style="text-align:left">Be able to search the presence using an alternative name.<br>
      Meant to be used for presences that have different names in different languages (e.g. Pokémon and 포켓몬스터).<br>
      You can also use it for presences that have special characters so you don't have to type those (e.g. Pokémon and Pokemon).</td>
      <td style="text-align:left"><code>Pole&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Ano</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>popis</b></td>
      <td style="text-align:left">Description of the service <b>NOT</b> the presence. Tvůj popis musí obsahovat hodnoty klíčů označující jazyk a popis v tomto konkrétním jazyce. Vytvářejte popisy s jazyky <i>, které znáte</i>, naši překladatelé budou provádět změny ve vašem souboru metadat. View the category for presence languages for a list. </td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>Ne</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>URL</b></td>
      <td style="text-align:left">URL of the service.<br>
      <b>Example:</b><code>vk.com</code><br>
      <b>This url must match the url of the website as it will be used to detect wherever or not this is the website to inject the script to. This may only be used as an array when there are more than one urls.</b></td>
      <td style="text-align:left"><code>Řetězec, pole&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Ne</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b></td>
      <td style="text-align:left">A regular expression string used to match urls.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Ano</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>verze</b></td>
      <td style="text-align:left">Verze vaší přítomnosti.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Ne</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>logo</b></td>
      <td style="text-align:left">Odkaz na službu&apos; s logotypem.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Ne</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>náhled</b></td>
      <td style="text-align:left">Odkaz na náhled vašeho stavu.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Ne</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>barva</b></td>
      <td style="text-align:left"><code>#HEX</code> hodnota. Doporučujeme použít primární barvu služby
        , kterou vaše přítomnost podporuje.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Ne</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>štítky</b></td>
      <td style="text-align:left">Pole se značkami, které pomohou uživatelům vyhledat vaši přítomnost na webu.</td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Ne</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Kategorie</b></td>
      <td style="text-align:left">Řetězec používaný k reprezentaci kategorie, pod kterou přítomnost spadá.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Ne</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b></td>
      <td style="text-align:left">Určuje, zda jsou použity <code>iFrames</code></td>
      <td style="text-align:left"><code>Boolean</code></td>
      <td style="text-align:left"><code>Ano</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b></td>
      <td style="text-align:left">Regulární selektor, který vybere iframy, do kterých se má vložit.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Ano</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>readLogs</b></td>
      <td style="text-align:left">Defines whether the extension should be reading logs.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Ano</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>settings</b></td>
      <td style="text-align:left">An array of settings the user can change</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>Ano</code></td>
    </tr>
  </tbody>
</table>

## Řádné výrazy

Pokud se chcete naučit regulární výrazy, zde je několik webových stránek.

#### Učení

• [Quick Starter Video](https://youtu.be/sXQxhojSdZM) • [RegexOne](https://regexone.com/) • [Regular Expressions Info](https://www.regular-expressions.info/tutorial.html)

#### Testing

• [Regexr](https://regexr.com/) • [Regex101](https://regex101.com/)

## Presence languages

PreMiD is a polygot service, meaning there are a multitude of languages involved to connect users around the globe. A full list of languages can be found with this [API endpoint](https://api.premid.app/v2/langFile/list). To customize your presence even more you can allow users to select their presence display language see [`multiLanguage`](#multilanguage) for more.

## Presence settings
Setup interactive settings so users can customize the presence!
```typescript
"settings": [
  {
    "id": "ID",
    "multiLanguage": true //See https://docs.premid.app/dev/presence/metadata#multilanguage
  },
  {
    "id": "ID",
    "title": "DISPLAY TITLE",
    "icon": "FONTAWESOME ICON", //Example "fas fa-info"
    "value": true //Boolean value will make it an on/off switch with the value as the default value
  },
  {
    "id": "ID",
    "if": {
      "ID": true //If another setting equals this value (true/false/0/1/etc.) then show this button
    },
    "title": "DISPLAY TITLE",
    "icon": "FONTAWESOME ICON",
    "value": "\"%song%\" by %artist%", //Putting in a string will make the setting an input one, where you can use a custom input.
    "placeholder": "use %song% or %artist%" //When input is empty it will show this grayed out
  },
  {
    "id": "ID",
    "title": "DISPLAY TITLE",
    "icon": "FONTAWESOME ICON",
    "value": 0, //Default value of the selector
    "values": ["1", "2", "etc."] //Will make the setting a selector where you select which one you want
  }
]
```

### `multiLanguage`

#### Úvod

The `multiLanguage` setting is used to allow users to manually select the language they want to presence to be shown in. This requires you to use strings from our [API](https://api.premid.app/v2/langFile/presence/en), for information on how to add strings click [here](/dev/presence/metadata/adding-new-strings).

#### Setup

The `multiLanguage` setting is a special case, it doesn't require a `title` nor `icon` nor `value` or `values` like other settings but it does require you some more things to setup!

The `multiLanguage` key can be set to the following:

`true`: use this if you are only going to use strings of the `general.json` file and the `<service>.json` file of the [Localization Repository](https://github.com/PreMiD/Localization/tree/master/src/Presence). `string`: name of the file excluding the extension (.json) inside the [Localization Repository](https://github.com/PreMiD/Localization/tree/master/src/Presence) (excluding the `general` file, since it's always loaded). Only common languages of both the `general` and inputted file will be listed. `Array<String>`: if you are using more than one file inside the [Localization Repository](https://github.com/PreMiD/Localization/tree/master/src/Presence) you can specify all the values in an array (excluding the `general` file, since it's always loaded). Only common languages of all the files will be listed.

#### Adding new strings

##### Klonování projektu

1. Otevřete terminál a napište `git clone https://github.com/PreMiD/Localization`.
2. Vyberte složku dle vašeho výběru.
3. Otevřete ji ve svém editoru kódu.

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

### Metody

Use the following methods to get settings info in your presence files:
#### `getSetting(String)`
Vrátí hodnotu nastavení.
```typescript
const setting = await presence.getSetting("pdexID"); //Replace pdexID with the id of the setting
console.log(setting); // This will log the value of the setting
```

#### `hideSetting(String)`
Hides given setting.
```typescript
presence.hideSetting("pdexID"); //Replace pdexID with the id of the setting
```

#### `showSetting(String)`
Shows given setting (Only works if the setting was already hidden).
```typescript
presence.showSetting("pdexID"); //Replace pdexID with the id of the setting
```

## Presence categories

When making your presence, you must specify a category which the presence falls under. This is a compiled list of the categories that you can use.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Kategorie</th>
      <th style="text-align:left">Jméno</th>
      <th style="text-align:left">Popis</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>anime</b></td>
      <td style="text-align:left"><b>Anime</b></td>
      <td style="text-align:left">Cokoli se týká anime, od fór až po platformy pro video streamování.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>hry</b></td>
      <td style="text-align:left"><b>Hry</b></td>
      <td style="text-align:left">Jakékoli webové stránky, které mají obsah související s hrou, jako je <code>Kahoot</code> nebo <code>Skribbl.io</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>hudba</b></td>
      <td style="text-align:left"><b>Hudba</b></td>
      <td style="text-align:left">Toto jsou webové stránky, které nabízejí hudební obsah, ať už se jedná o streamování nebo stahování.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>sociální sítě</b></td>
        <td style="text-align:left"><b>Sociální sítě</b></td>
      <td style="text-align:left">Internetové stránky, které se používají pro vytváření a sdílení obsahu nebo pro účast v jiných formách sociálních sítí.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>videa</b></td>
        <td style="text-align:left"><b>Videa & Streamy</b></td>
      <td style="text-align:left">Internetové stránky, které slouží k poskytování videí a streamů.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>ostatní</b></td>
      <td style="text-align:left"><b>Ostatní</b></td>
      <td style="text-align:left">Cokoliv, co nespadá do konkrétní kategorie uvedené výše.</td>
    </tr>
  </tbody>
</table>

