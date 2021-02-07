---
title: Metadata.json
description: Innehåller grundläggande data om Presence
published: true
date: 2021-02-07T17:12:06.799Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:52.965Z
---

# Metadata.json

If you want to publish a presence to the store and load it via the extension, you should create the `metadata.json` file in your `dist` folder.

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

## Förstå metadata.json

Det exemplet ser verkligen konstigt ut, va? Oroa er inte, det är inte så svårt att förstå vad varje variabel är för.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Variabel</th>
      <th style="text-align:left">Beskrivning</th>
      <th style="text-align:left">Typ</th>
      <th style="text-align:left">Valfri</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>skapare</b></td>
      <td style="text-align:left">Bör innehålla ett Objekt med <code>-namnet</code> och <code>id</code> för presence-utvecklaren. <code>name</code> is your Discord username without the identifier(#0000). User <code>id</code> kan kopieras från Discord genom att aktivera utvecklarläget
        och högerklicka på din profil.</td>
      <td style="text-align:left"><code>Objekt</code></td>
      <td style="text-align:left"><code>Nej</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>medverkande</b></td>
      <td style="text-align:left">Should contain an Object with the <code>name</code> and <code>id</code> of the contributor. <code>name</code> is your Discord username without the identifier(#0000). <code>Användar-id</code> kan kopieras från Discord genom att aktivera utvecklarläget
        och högerklicka på din profil.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>Ja</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>tjänst</b></td>
      <td style="text-align:left">Titeln på tjänsten som denna närvaro stödjer.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Nej</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>altnames</b></td>
      <td style="text-align:left">Möjligheten att söka för presencet med hjälp av ett annat namn.<br>
      Tänkt att användas för presences som har olika namn på olika språk (t.ex. Poke<unk> mon och <unk> <unk> <unk> <unk> <unk> <unk> <unk> <unk> <unk> <unk> <unk> <unk> <unk> <unk> <unk> ).<br>
      Du kan också använda den för presences som har specialtecken så att du inte behöver skriva in dessa (t.ex. Poke<unk> mon och Pokemon).</td>
      <td style="text-align:left"><code>Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Ja</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>beskrivning</b></td>
      <td style="text-align:left">Description of the service <b>NOT</b> the presence. Din beskrivning måste innehålla nyckelparvärden som anger språket, och beskrivningen i det specifika språket. Gör beskrivningar med språken <i>som du känner</i>, våra översättare kommer att göra ändringar i din metadatafil. View the category for presence languages for a list. </td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>Nej</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>URL</b></td>
      <td style="text-align:left">URL of the service.<br>
      <b>Example:</b><code>vk.com</code><br>
      <b>This url must match the url of the website as it will be used to detect wherever or not this is the website to inject the script to. This may only be used as an array when there are more than one urls.</b></td>
      <td style="text-align:left"><code>Sträng, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Nej</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b></td>
      <td style="text-align:left">A regular expression string used to match urls.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Ja</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>version</b></td>
      <td style="text-align:left">Version av din närvaro.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Nej</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>logotyp</b></td>
      <td style="text-align:left">Länk till service&apos;s logotyp.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Nej</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b></td>
      <td style="text-align:left">Länka till din närvaro miniatyr.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Nej</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>färg</b></td>
      <td style="text-align:left"><code>#HEX</code> värde. Vi rekommenderar att använda en primär färg på tjänsten
        som din närvaro stöder.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Nej</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>taggar</b></td>
      <td style="text-align:left">Array med taggar, kommer de att hjälpa användare att söka din närvaro på webbplatsen.</td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Nej</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Kategori</b></td>
      <td style="text-align:left">En sträng som används för att representera kategorin närvaron faller under.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Nej</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b></td>
      <td style="text-align:left">Anger om <code>iFrames</code> används</td>
      <td style="text-align:left"><code>Boolean</code></td>
      <td style="text-align:left"><code>Ja</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b></td>
      <td style="text-align:left">En reguljära uttrycksväljare som väljer iframes att injicera i.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Ja</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>readLogs</b></td>
      <td style="text-align:left">Bestämmer om tillägget ska läsa loggar.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Ja</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>settings</b></td>
      <td style="text-align:left">An array of settings the user can change</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>Ja</code></td>
    </tr>
  </tbody>
</table>

## Reguljära uttryck

Om du vill lära dig reguljära uttryck, här är några webbplatser.

#### Learning

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

#### Introduktion

The `multiLanguage` setting is used to allow users to manually select the language they want to presence to be shown in. This requires you to use strings from our [API](https://api.premid.app/v2/langFile/presence/en), for information on how to add strings click [here](/dev/presence/metadata/adding-new-strings).

#### Setup

The `multiLanguage` setting is a special case, it doesn't require a `title` nor `icon` nor `value` or `values` like other settings but it does require you some more things to setup!

The `multiLanguage` key can be set to the following:

`true`: use this if you are only going to use strings of the `general.json` file and the `<service>.json` file of the [Localization Repository](https://github.com/PreMiD/Localization/tree/master/src/Presence). `string`: name of the file excluding the extension (.json) inside the [Localization Repository](https://github.com/PreMiD/Localization/tree/master/src/Presence) (excluding the `general` file, since it's always loaded). Only common languages of both the `general` and inputted file will be listed. `Array<String>`: if you are using more than one file inside the [Localization Repository](https://github.com/PreMiD/Localization/tree/master/src/Presence) you can specify all the values in an array (excluding the `general` file, since it's always loaded). Only common languages of all the files will be listed.

#### Adding new strings

##### Kloning av projektet

1. Öppna en terminal och skriv `git clone https://github.com/PreMiD/Localization`.
2. Välj en valfri mapp.
3. Öppna den i din kodredigerare.

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

### Methods

Use the following methods to get settings info in your presence files:
#### `getSetting(String)`
Returnerar värdet av inställningen.
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
      <th style="text-align:left">Kategori</th>
      <th style="text-align:left">Namn</th>
      <th style="text-align:left">Beskrivning</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>anime</b></td>
      <td style="text-align:left"><b>Anime</b></td>
      <td style="text-align:left">Allt relaterat till anime, från forum till videoströmmande plattformar.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>spel</b></td>
      <td style="text-align:left"><b>Spel</b></td>
      <td style="text-align:left">Alla webbplatser som har spelrelaterat innehåll, som <code>Kahoot</code> eller <code>Skribbl.io</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>musik</b></td>
      <td style="text-align:left"><b>Musik</b></td>
      <td style="text-align:left">Detta är webbplatser som erbjuder musikrelaterat innehåll, oavsett om det är streaming eller nedladdning.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>socialt</b></td>
        <td style="text-align:left"><b>Socialt</b></td>
      <td style="text-align:left">Webbplatser som används för att skapa och dela innehåll eller för att delta i andra former av socialt nätverk.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>videor</b></td>
        <td style="text-align:left"><b>Videor & Streams</b></td>
      <td style="text-align:left">Webbplatser som tjänar syftet att tillhandahålla videor och strömmar.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>annat</b></td>
      <td style="text-align:left"><b>Annat</b></td>
      <td style="text-align:left">Allt som inte faller under en specifik kategori som anges ovan.</td>
    </tr>
  </tbody>
</table>

