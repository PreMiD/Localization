---
title: Metadata.json
description: Enthält grundlegende Daten zur Presence
published: true
date: 2020-12-26T15:03:41.542Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:52.965Z
---

# Metadata.json

Wenn du eine Presence im Shop veröffentlichen und über die Erweiterung laden möchten, solltest du die `metadata.json`-Datei in deinem `dist` Ordner erstellen.

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

## Grundlegendes zur metadata.json

Das Beispiel sieht wirklich seltsam aus, oder? Keine Sorge, es ist nicht so schwer zu verstehen, wofür jede Variable gedacht ist.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Variable</th>
      <th style="text-align:left">Beschreibung</th>
      <th style="text-align:left">Type</th>
      <th style="text-align:left">Optional</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>autor</b></td>
      <td style="text-align:left">Should contain an Object with the <code>name</code> and <code>id</code> of the presence developer. Name ist Ihr Discord-Benutzername ohne den Bezeichner(#0000). Benutzer <code>id</code> kann aus Discord kopiert werden, indem der Entwicklermodus aktiviert und mit der rechten Maustaste auf Ihr Profil geklickt wird.</td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>Nein</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>mitwirkende</b></td>
      <td style="text-align:left">Should contain an Object with the <code>name</code> and <code>id</code> of the contributor. Name is your Discord username without the identifier(#0000). User <code>id</code> can be copied from Discord by enabling developer
        mode and right-clicking on your profile.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>Ja</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>service</b></td>
      <td style="text-align:left">Der Titel des Dienstes, den diese Präsenz unterstützt.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Nein</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>altnames</b></td>
      <td style="text-align:left">Be able to search the presence using an alternative name.<br>
      Meant to be used for presences that have different names in different languages (e.g. Pokémon and 포켓몬스터).<br>
      You can also use it for presences that have special characters so you don't have to type those (e.g. Pokémon and Pokemon).</td>
      <td style="text-align:left"><code>Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Ja</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>beschreibung</b></td>
      <td style="text-align:left">Description of the service <b>NOT</b> the presence. Ihre Beschreibung muss Schlüsselpaarwerte enthalten, die die Sprache und die Beschreibung in dieser bestimmten Sprache angeben. Machen Sie Beschreibungen mit den Sprachen <i>, die Sie kennen</i>, unsere Übersetzer nehmen Änderungen an Ihrer Metadatendatei vor. Siehe die Kategorie für Presence-Sprachen für eine Liste. </td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>Nein</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b></td>
      <td style="text-align:left">URL of the service.<br>
      <b>Example:</b><code>vk.com</code><br>
      <b>This url must match the url of the website as it will be used to detect wherever or not this is the website to inject the script to. Dies darf nur als Array benutzt werden, wenn es mehr als nur eine URL gibt.</b></td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Nein</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b></td>
      <td style="text-align:left">Ein Regex-String, welcher benutzt wird, um URLs zu vergleichen.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Ja</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>version</b></td>
      <td style="text-align:left">Version deiner Presence.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Nein</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>logo</b></td>
      <td style="text-align:left">Link zum Logo von Dienst&apos;.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Nein</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b></td>
      <td style="text-align:left">Link zum Miniaturbild Ihrer Anwesenheit.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Nein</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>color</b></td>
      <td style="text-align:left"><code># HEX</code> Wert. Wir empfehlen, eine Primärfarbe des Dienstes
        , die Ihre Anwesenheit unterstützt.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Nein</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>tags</b></td>
      <td style="text-align:left">Array mit Tags, sie helfen Benutzern, Ihre Präsenz auf der Website zu suchen.</td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Nein</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>kategorie</b></td>
      <td style="text-align:left">Eine Zeichenfolge, die die Kategorie darstellt, unter die die Anwesenheit fällt.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Nein</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b></td>
      <td style="text-align:left">Legt fest, ob <code>iFrames</code> verwendet werden</td>
      <td style="text-align:left"><code>Boolean</code></td>
      <td style="text-align:left"><code>Ja</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b></td>
      <td style="text-align:left">Ein Selektor für reguläre Ausdrücke, der iframes auswählt, in die injiziert werden soll.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Ja</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>readLogs</b></td>
      <td style="text-align:left">Legt fest, ob die Erweiterung die Logs lesen soll.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Ja</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>settings</b></td>
      <td style="text-align:left">Eine Reihe von Einstellungen, die der Nutzer ändern kann.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>Ja</code></td>
    </tr>
  </tbody>
</table>

## Reguläre Ausdrücke

Wenn Sie reguläre Ausdrücke lernen möchten, finden Sie hier einige Websites.

#### Lernen

• [Quick Starter Video](https://youtu.be/sXQxhojSdZM) • [RegexOne](https://regexone.com/) • [Regular Expressions Info](https://www.regular-expressions.info/tutorial.html)

#### Testen

• [Regexr](https://regexr.com/) • [Regex101](https://regex101.com/)

## Presence-Sprachen

PreMiD ist ein mehrsprachiger Service, was bedeutet, dass es eine Reihe von Sprachen gibt, welche die Nutzer über den ganzen Globus verbinden. Eine vollständige Liste von Sprachen können mithilfe dieses [API-Endpunkts](https://api.premid.app/v2/langFile/list) gefunden werden. To customize your presence even more you can allow users to select their presence display language see [`multiLanguage`](#multilanguage) for more.

## Presence-Einstellungen
Richte interaktive Einstellungen ein, sodass die Presence benutzerdefiniert eingestellt werden kann.
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

#### Introduction

The `multiLanguage` setting is used to allow users to manually select the language they want to presence to be shown in. This requires you to use strings from our [API](https://api.premid.app/v2/langFile/presence/en), for information on how to add strings click [here](/dev/presence/metadata/adding-new-strings).

#### Einrichtung

The `multiLanguage` setting is a special case, it doesn't require a `title` nor `icon` nor `value` or `values` like other settings but it does require you some more things to setup!

The `multiLanguage` key can be set to the following:

`true`: use this if you are only going to use strings of the `general.json` file and the `<service>.json` file of the [Localization Repository](https://github.com/PreMiD/Localization/tree/master/src/Presence). `string`: name of the file excluding the extension (.json) inside the [Localization Repository](https://github.com/PreMiD/Localization/tree/master/src/Presence) (excluding the `general` file, since it's always loaded). Only common languages of both the `general` and inputted file will be listed. `Array<String>`: if you are using more than one file inside the [Localization Repository](https://github.com/PreMiD/Localization/tree/master/src/Presence) you can specify all the values in an array (excluding the `general` file, since it's always loaded). Only common languages of all the files will be listed.

#### Neue Stings hinzufügen

##### Cloning the project

1. Öffne ein Terminal und gib `git clone https://github.com/PreMiD/Localization` ein.
2. Wähle einen Ordner deiner Wahl.
3. Open it in your code editor.

##### Erstellt die Datei

1. Gehe in den Ordner `src`.
2. Go into the `Presence` folder.
3. Make a file named `<service>.json`. (Service ist der **Name** (keine URL) in Kleinbuchstaben des Dienstes, den Du unterstützen möchtest.)

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

#### Standard-Tasten
The keys you didn't have to set are automatically set to the following: `title`: "Language" **Note:** This is translated into their default language (browser language). `icon`: "fas fa-language" ([Preview](https://fontawesome.com/icons/language)) `value`: **Set to their browser language if it is available (100% translated), otherwise English.** `values`: **Set to the available languages (languages that have it 100% translated).**

**Note:** These are in no way changeable.

### Methods

Benutze die folgenden Methoden, um eine Einstellungen-Info in deinen Presence-Dateien zu bekommen.
#### `getSetting(String)`
Gibt den Wert der Einstellung zurück.
```typescript
const setting = await presence.getSetting("pdexID"); //Replace pdexID with the id of the setting
console.log(setting); // This will log the value of the setting
```

#### `hideSetting(String)`
Versteckt die definierte Einstellung.
```typescript
presence.hideSetting("pdexID"); // pdexID mit der ID von der Einstellung ersetzen
```

#### `showSetting(String)`
Zeigt definierte Einstellung (Funktioniert nur, wenn die Einstellung bereits versteckt war).
```typescript
presence.showSetting("pdexID"); // pdexID mit der ID von der Einstellung ersetzen
```

## Presence-Kategorien

Wenn du deine Presence erstellst, musst du eine Kategorie definieren, welche der Presence entspricht. Dies ist eine zusammengestellte Liste der Kategorien, welche du benutzen kannst.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Kategorie</th>
      <th style="text-align:left">Name</th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>anime</b></td>
      <td style="text-align:left"><b>Anime</b></td>
      <td style="text-align:left">Alles, was mit Anime zu tun hat, von Foren bis zu Video-Streaming-Plattformen.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>games</b></td>
      <td style="text-align:left"><b>Games</b></td>
      <td style="text-align:left">Jede Website mit spielbezogenen Inhalten, z. B. <code>Kahoot</code> oder <code>Skribbl.io</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>music</b></td>
      <td style="text-align:left"><b>Music</b></td>
      <td style="text-align:left">Hierbei handelt es sich um Websites, die musikbezogene Inhalte anbieten, unabhängig davon, ob diese gestreamt oder heruntergeladen werden.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>socials</b></td>
        <td style="text-align:left"><b>Socials</b></td>
      <td style="text-align:left">Websites, die zum Erstellen und Teilen von Inhalten oder zur Teilnahme an anderen Formen sozialer Netzwerke verwendet werden.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>videos</b></td>
        <td style="text-align:left"><b>Videos & Streams</b></td>
      <td style="text-align:left">Websites, die dem Zweck dienen, Videos und Streams bereitzustellen.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>other</b></td>
      <td style="text-align:left"><b>Other</b></td>
      <td style="text-align:left">Alles, was nicht unter eine der oben aufgeführten Kategorien fällt.</td>
    </tr>
  </tbody>
</table>

