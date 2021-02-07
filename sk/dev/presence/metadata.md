---
title: Metadata.json
description: Obsahuje základné údaje o Prítomnosti
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

## Porozumenie metadata.jsonu

Ten príklad vyzerá naozaj čudne, hm? Nerobte si starosti nie je to také ťažké pochopiť pre čo sú jednotlivé premenné.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Premenná</th>
      <th style="text-align:left">Popis</th>
      <th style="text-align:left">Typ</th>
      <th style="text-align:left">Nepovinné</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>autor</b></td>
      <td style="text-align:left">Should contain an Object with the <code>name</code> and <code>id</code> of the presence developer. <code>name</code> is your Discord username without the identifier(#0000). Užívateľské <code>id</code> možno skopírovať z Discordu povolením mód vývojára         a kliknutím pravým tlačítkom na váš profil.</td>
      <td style="text-align:left"><code>Objekt</code></td>
      <td style="text-align:left"><code>Nie</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>prispievatelia</b></td>
      <td style="text-align:left">Should contain an Object with the <code>name</code> and <code>id</code> of the contributor. <code>name</code> is your Discord username without the identifier(#0000). Užívateľské <code>id</code> možno skopírovať z Discordu povolením mód vývojára         a kliknutím pravým tlačítkom na váš profil.</td>
      <td style="text-align:left"><code>Poradie&lt;Objekt&gt;</code></td>
      <td style="text-align:left"><code>Áno</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>služba</b></td>
      <td style="text-align:left">Názov služby ktorú táto prítomnosť podporuje.</td>
      <td style="text-align:left"><code>Reťazec</code></td>
      <td style="text-align:left"><code>Nie</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>altnames</b></td>
      <td style="text-align:left">Be able to search the presence using an alternative name.<br>
      Meant to be used for presences that have different names in different languages (e.g. Pokémon and 포켓몬스터).<br>
      You can also use it for presences that have special characters so you don't have to type those (e.g. Pokémon and Pokemon).</td>
      <td style="text-align:left"><code>Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Áno</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>popis</b></td>
      <td style="text-align:left">Description of the service <b>NOT</b> the presence. Váš popis musí mať hodnoty párov kľúčov ktoré označujú jazyk, a popis v tom konkrétnom jazyku. Urobte popisy s jazykmi <i>ktoré poznáte</i>, naši prekladatelia ich zmenia vo vašich metadata súborov. View the category for presence languages for a list. </td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>Nie</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b></td>
      <td style="text-align:left">URL of the service.<br>
      <b>Example:</b><code>vk.com</code><br>
      <b>This url must match the url of the website as it will be used to detect wherever or not this is the website to inject the script to. This may only be used as an array when there are more than one urls.</b></td>
      <td style="text-align:left"><code>Reťazec, Poradie&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Nie</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b></td>
      <td style="text-align:left">Reťazec regulárneho výrazu používaný na zhodovanie adries url.</td>
      <td style="text-align:left"><code>Reťazec</code></td>
      <td style="text-align:left"><code>Áno</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>verzia</b></td>
      <td style="text-align:left">Verzia vašej prítomnosti.</td>
      <td style="text-align:left"><code>Reťazec</code></td>
      <td style="text-align:left"><code>Nie</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>logo</b></td>
      <td style="text-align:left">Odkaz na službu&apos; s logotypom.</td>
      <td style="text-align:left"><code>Reťazec</code></td>
      <td style="text-align:left"><code>Nie</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>náhľad</b></td>
      <td style="text-align:left">Odkaz na náhľad vašej prítomnosti.</td>
      <td style="text-align:left"><code>Reťazec</code></td>
      <td style="text-align:left"><code>Nie</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>farba</b></td>
      <td style="text-align:left"><code>#HEX</code> hodnota. Odporúčame vám používať primárnu farbu služby        ktorá vaša prítomnosť podporuje.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Nie</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>štítky</b></td>
      <td style="text-align:left">Pole so značkami, pomôže používateľom vyhľadávať vašu prítomnosť na webovej stránke.</td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Nie</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>kategória</b></td>
      <td style="text-align:left">Reťazec použitý na označenie kategórie do ktorej patrí.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Nie</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b></td>
      <td style="text-align:left">Určuje či je použitý <code>iFrames</code></td>
      <td style="text-align:left"><code>Boolean</code></td>
      <td style="text-align:left"><code>Áno</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b></td>
      <td style="text-align:left">Selektor regulárneho výrazu ktorý vyberá prvky iframe do ktorých sa má vložiť.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Áno</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>readLogs</b></td>
      <td style="text-align:left">Defines whether the extension should be reading logs.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Áno</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>settings</b></td>
      <td style="text-align:left">An array of settings the user can change</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>Áno</code></td>
    </tr>
  </tbody>
</table>

## Regulárny Výraz

Ak sa chcete naučiť regulárne výrazy, tu je niekoľko webových stránok.

#### Učenie

• [Quick Starter Video](https://youtu.be/sXQxhojSdZM) • [RegexOne](https://regexone.com/) • [Regular Expressions Info](https://www.regular-expressions.info/tutorial.html)

#### Testovanie

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

##### Cloning the project

1. Open a terminal and type `git clone https://github.com/PreMiD/Localization`.
2. Choose a folder of your choice.
3. Open it in your code editor.

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

### Metódy

Use the following methods to get settings info in your presence files:
#### `getSetting(String)`
Returns value of setting.
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

## Kategórie prítomností

Ak vytvárate prítomnosť, musíte uviesť kategóriu do ktorej táto prítomnosť patrí. Toto je zostavený zoznam kategórií ktoré môžete použiť.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Kategória</th>
      <th style="text-align:left">Názov</th>
      <th style="text-align:left">Popis</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>anime</b></td>
      <td style="text-align:left"><b>Anime</b></td>
      <td style="text-align:left">Čokoľvek sa týka anime, od forúmov až po platformy na streamovanie videa.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>games</b></td>
      <td style="text-align:left"><b>Hry</b></td>
      <td style="text-align:left">Akákoľvek webová stránka ktorá má obsah súvisiaci s hrami, ako napríklad <code>Kahoot</code> alebo <code>Skribbl.io</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>music</b></td>
      <td style="text-align:left"><b>Hudba</b></td>
      <td style="text-align:left">Toto sú webové stránky ktoré ponúkajú hudobný obsah, či už ide o streamovanie alebo sťahovanie.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>socials</b></td>
        <td style="text-align:left"><b>Sociálne siete</b></td>
      <td style="text-align:left">Webové stránky ktoré sa používajú na vytváranie a zdieľanie obsahu alebo na účasť na iných formách sociálnych sietí.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>videos</b></td>
        <td style="text-align:left"><b>Videá & Streamy</b></td>
      <td style="text-align:left">Webové stránky ktoré slúžia na poskytovanie videí a streamov.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>other</b></td>
      <td style="text-align:left"><b>Ostatné</b></td>
      <td style="text-align:left">Čokoľvek čo nespadá do špecifickej kategórie uvedenej vyššie.</td>
    </tr>
  </tbody>
</table>

