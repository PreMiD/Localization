---
title: Metadata.json
description: Enthält grundlegende Daten zur Presence
published: true
date: 2021-02-07T17:12:06.799Z
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
      <td style="text-align:left"><b>author</b></td>
      <td style="text-align:left">Sollte ein Objekt mit dem <code>name</code> und der <code>id</code> des Presence-Entwickler enthalten. <code>name</code> ist dein Discord-Benutzername ohne den Identifikator (#0000). Benutzer <code>id</code> kann aus Discord kopiert werden, indem der Entwicklermodus aktiviert und mit der rechten Maustaste auf Ihr Profil geklickt wird.</td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>Nein</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>contributors</b></td>
      <td style="text-align:left">Sollte ein Objekt mit dem <code>name</code> und der <code>id</code> des Mitwirkenden enthalten. <code>name</code> ist dein Discord-Benutzername ohne den Identifikator (#0000). Benutzer <code>id</code> kann aus Discord kopiert werden, indem der Entwicklermodus aktiviert und mit der rechten Maustaste auf Ihr Profil geklickt wird.</td>
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
      <td style="text-align:left"><b>description</b></td>
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
      <td style="text-align:left"><b>category</b></td>
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

#### Einführung

Die `multiLanguage` Einstellung erlaubt es Benutzern die manuelle Auswahl der Sprache, die in der Presence angezeigt werden soll. Dies erfordert, dass Sie die Strings von unserer [API](https://api.premid.app/v2/langFile/presence/en) verwenden. Für Informationen zum hinzufügen von Strings, drücke [hier](/dev/presence/metadata/adding-new-strings).

#### Einrichtung

Die `multiLanguage` Einstellung ist ein Sonderfall, es benötigt weder einen `title` noch `icon`, `value` oder `values`, wie die anderen Einstellungen, aber es benötigt mehr Dinge zum einrichten!

Die `multiLanguage` Einstellung kann in die folgenden Werte gesetzt werden:

`true`: Nutze diesen Wert, wenn du nur Strings aus der `general.json` Datei und der `<service>.json` Datei verwendest aus der [Lokalisierungs-Repository](https://github.com/PreMiD/Localization/tree/master/src/Presence). `string`: Name der Datei ohne Dateiendung (.json) in der [Lokalisierungs-Repository](https://github.com/PreMiD/Localization/tree/master/src/Presence) (ausgenommen der `general` Datei, da diese immer geladen wird). Es werden nur gebräuchliche Sprachen sowohl der `general` als auch der eingegebenen Datei angezeigt. `Array<String>`: Wenn du mehr als eine Datei innerhalb der [Lokalisierung-Repository](https://github.com/PreMid/Localization/tree/master/src/Presence) verwendest, kannst du alle Werte in einem Array angeben (ausgenommen der `general` Datei, da diese immer geladen wird). Nur gebräuchliche Sprachen aller Dateien werden aufgelistet.

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

