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

Ein Beispiel für diese Datei, kannst du unten finden.

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
      <td style="text-align:left">Sollte ein Objekt mit dem <code>name</code> und der <code>id</code> des Presence-Entwickler enthalten. Name ist Ihr Discord-Benutzername ohne den Bezeichner(#0000). Benutzer <code>id</code> kann aus Discord kopiert werden, indem der Entwicklermodus aktiviert und mit der rechten Maustaste auf Ihr Profil geklickt wird.</td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>Nein</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>mitwirkende</b></td>
      <td style="text-align:left">Sollte ein Objekt mit dem <code>name</code> und der <code>id</code> des Mitwirkenden enthalten. Name ist dein Discord Benutzername ohne Identifikator (#0000). User <code>id</code> kann kopiert werden, indem der Entwicklermodus aktiviert ist und einem Rechtsklick auf dein Profil.</td>
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
      <td style="text-align:left">Kann die Presence mit einem alternativen Namen suchen.<br>Gemacht für Presences, die verschiedene Namen in verschiedenen Sprachen haben (z.B.:  Pokémon and 포켓몬스터).<br>Sie können es auch für Presences verwenden, die spezielle Zeichen haben, sodass diese nicht eingegeben werden müssen (z.B.: Pokémon und Pokemon).</td>
      <td style="text-align:left"><code>Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Ja</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>beschreibung</b></td>
      <td style="text-align:left">Beschreibung des Dienstes <b>NICHT</b> der Presence. Ihre Beschreibung muss Schlüsselpaarwerte enthalten, die die Sprache und die Beschreibung in dieser bestimmten Sprache angeben. Machen Sie Beschreibungen mit den Sprachen <i>, die Sie kennen</i>, unsere Übersetzer nehmen Änderungen an Ihrer Metadatendatei vor. Siehe die Kategorie für Presence-Sprachen für eine Liste. </td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>Nein</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b></td>
      <td style="text-align:left">URL des Dienstes.<br>
<b>Beispiel:</b><code>vk.com</code><br>
<b>Diese URL muss der URL der Webseite gleichen, da sie genutzt wird um zu erkenne, ob es sich um die richtige Webseite handelt, in der das Script injiziert wird. Dies darf nur als Array benutzt werden, wenn es mehr als nur eine URL gibt.</b></td>
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

• [Schnellstarter Video](https://youtu.be/sXQxhojSdZM) • [RegexOne](https://regexone.com/) • [Reguläre-Ausdrücke Info](https://www.regular-expressions.info/tutorial.html)

#### Testen

• [Regexr](https://regexr.com/) • [Regex101](https://regex101.com/)

## Presence-Sprachen

PreMiD ist ein mehrsprachiger Service, was bedeutet, dass es eine Reihe von Sprachen gibt, welche die Nutzer über den ganzen Globus verbinden. Eine vollständige Liste von Sprachen können mithilfe dieses [API-Endpunkts](https://api.premid.app/v2/langFile/list) gefunden werden. Um Ihre Presence noch mehr anzupassen, können Sie Benutzern erlauben, ihre Presence-Sprache auszuwählen, siehe [`multiLanguage`](#multilanguage) für mehr.

## Presence-Einstellungen
Richte interaktive Einstellungen ein, sodass die Presence benutzerdefiniert eingestellt werden kann.
```typescript
"settings": [
  {
    "id": "ID",
    "multiLanguage": true //Siehe https://docs.premid.app/dev/presence/metadata#multilanguage
  },
  {
    "id": "ID",
    "title": "ANZEIGE TITEL",
    "icon": "FONTAWESOME FREE ICON", //Beispiel "fas fa-info"
    "value": true //Boolean Wert macht daraus eine "On/Off"-Schaltung, mit dem Wert als Standardwert
  },
  {
    "id": "ID",
    "if": {
      "ID": true //Wenn eine andere Einstellung diesem Wert entspricht (true/false/0/1/uvm.), dann zeigt dieser Button an
    },
    "title": "ANZEIGE TITEL",
    "icon": "FONTAWESOME FREE ICON",
    "value": "\"%song%\" by %artist%", //Das einsetzen eines String setzt die Einstellung auf 1, in der du eine benutzerdefinierten Eingabe verwenden kannst.
    "placeholder": "use %song% or %artist%" //Wenn die Eingabe leer ist, zeigt es ausgegraut an
  },
  {
    "id": "ID",
    "title": "ANZEIGE TITEL",
    "icon": "FONTAWESOME ICON",
    "value": 0, //Standardwert des Selectors
    "values": ["1", "2", "etc."] //Macht aus der Einstellung ein Selector, in der Sie aussuchen, welchen Wert sie wollen.
  }
]
```

### `multiLanguage`

#### Einführung

The `multiLanguage` setting is used to allow users to manually select the language they want to presence to be shown in. This requires you to use strings from our [API](https://api.premid.app/v2/langFile/presence/en), for information on how to add strings click [here](/dev/presence/metadata/adding-new-strings).

#### Einrichtung

The `multiLanguage` setting is a special case, it doesn't require a `title` nor `icon` nor `value` or `values` like other settings but it does require you some more things to setup!

The `multiLanguage` key can be set to the following:

`true`: use this if you are only going to use strings of the `general.json` file and the `<service>.json` file of the [Localization Repository](https://github.com/PreMiD/Localization/tree/master/src/Presence). `string`: name of the file excluding the extension (.json) inside the [Localization Repository](https://github.com/PreMiD/Localization/tree/master/src/Presence) (excluding the `general` file, since it's always loaded). Only common languages of both the `general` and inputted file will be listed. `Array<String>`: if you are using more than one file inside the [Localization Repository](https://github.com/PreMiD/Localization/tree/master/src/Presence) you can specify all the values in an array (excluding the `general` file, since it's always loaded). Nur gebräuchliche Sprachen aller Dateien werden aufgelistet.

#### Neue Stings hinzufügen

##### Klont das Projekt

1. Öffne ein Terminal und gib `git clone https://github.com/PreMiD/Localization` ein.
2. Wähle einen Ordner deiner Wahl.
3. Öffne es in deinem Code-Editor.

##### Erstellt die Datei

1. Gehe in den Ordner `src`.
2. Gehe in den `Presence` Ordner.
3. Erstelle eine Datei namens `<service>.json`. (Service ist der **Name** (keine URL) in Kleinbuchstaben des Dienstes, den Du unterstützen möchtest.)

##### Hinzufügen der Strings

Jeder `string` ist ein `Object`, bei dem der Name mit dem Namen des Dienstes beginnt und dann der stringName mit einem Punkt zwischen ihnen.

Der stringName ist ein 1-Wort-Identifikator der Nachricht.

Das `Object` hat 2 Eigenschaften; `message` und `description`. `message` ist der Text, der übersetzt werden muss. `description` ist die Beschreibung der Nachricht, die unseren Übersetzern hilft zu verstehen, was sie übersetzen.

**Hinweis:** Füge keine doppelten String hinzu. (Dies beinhaltet Zeichenketten aus der `general.json` Datei, aber nicht die anderen Dateien.)

Visualisierung der Datei:

```typescript
{
  "<service>.<stringName>": {
    "message": "Text, der übersetzt werden muss.",
    "description": "Erklärt die Nachricht darüber."
  },
  "<service>.<stringName>": {
    "message": "Text, der übersetzt werden muss.",
    "description": "Erklärt die Nachricht darüber."
  }
}
```

Nachdem deine Datei fertig ist, kannst du einen Pull Request in der [Lokalisierungs-Repository](https://github.com/PreMiD/Localization) erstellen, in der Beschreibung **musst** du einen Link zur Pull Request der zu aktualisierenden Presence aus der [Presence-Repository](https://github.com/PreMiD/Presences) beifügen, die die neuen Strings verwenden soll.

#### Standard-Tasten
Die Schlüssel, die Sie nicht setzten müssen, werden automatisch auf folgendes gesetzt: `title`: "Language" **Hinweis:** Dies wird in Ihre Standardsprache (Browsersprache) übersetzt. `icon`: "fas fa-language" ([Vorschau](https://fontawesome.com/icons/language)) `value`: **Setzt auf ihre Browsersprache, sofern verfügbar (100% übersetzt), ansonsten Englisch.** `values`: **Setzt die verfügbaren Sprachen (Sprachen, die 100% übersetzt sind).**

**Hinweis:** Diese sind in keiner Weise veränderbar.

### Methoden

Benutze die folgenden Methoden, um eine Einstellungen-Info in deinen Presence-Dateien zu bekommen.
#### `getSetting(String)`
Gibt den Wert der Einstellung zurück.
```typescript
const setting = await.presence.getSetting("pdexID"); // Ersetze pdexID mit der ID der Einstellung
console.log(setting); // Dies loggt den Wert der Einstellung
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
      <th style="text-align:left">Beschreibung</th>
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
      <td style="text-align:left"><b>Spiele</b></td>
      <td style="text-align:left">Jede Website mit spielbezogenen Inhalten, z. B. <code>Kahoot</code> oder <code>Skribbl.io</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>music</b></td>
      <td style="text-align:left"><b>Musik</b></td>
      <td style="text-align:left">Hierbei handelt es sich um Websites, die musikbezogene Inhalte anbieten, unabhängig davon, ob diese gestreamt oder heruntergeladen werden.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>socials</b></td>
        <td style="text-align:left"><b>Soziale Netzwerke</b></td>
      <td style="text-align:left">Websites, die zum Erstellen und Teilen von Inhalten oder zur Teilnahme an anderen Formen sozialer Netzwerke verwendet werden.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>videos</b></td>
        <td style="text-align:left"><b>Videos & Livestreams</b></td>
      <td style="text-align:left">Websites, die dem Zweck dienen, Videos und Streams bereitzustellen.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>other</b></td>
      <td style="text-align:left"><b>Sonstiges</b></td>
      <td style="text-align:left">Alles, was nicht unter eine der oben aufgeführten Kategorien fällt.</td>
    </tr>
  </tbody>
</table>

