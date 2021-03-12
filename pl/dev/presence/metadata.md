---
title: Metadata.json
description: Zawiera podstawowe dane o Presence
published: true
date: 2021-02-07T17:12:06.799Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:52.965Z
---

# Metadata.json

Jeśli chcesz opublikować swój status Presence w sklepie i załadować go przez rozszerzenie, powinieneś utworzyć plik `metadata.json` w folderze `dist`.

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

## Zrozumienie metadata.json

Ten przykład wygląda naprawdę dziwnie, prawda? Nie martw się, nie jest trudno zrozumieć, do czego służy każda zmienna.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Zmienna</th>
      <th style="text-align:left">Opis</th>
      <th style="text-align:left">Typ</th>
      <th style="text-align:left">Opcjonalny</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>autor</b></td>
      <td style="text-align:left">Powinien zawierać obiekt o <code>nazwie</code> i <code>id</code> współautora. <code>nazwa</code> to Twoja nazwa użytkownika Discord bez identyfikatora(#0000). Użytkownik <code>id</code> może zostać skopiowany z Discorda poprzez włączenie trybu programisty
        i kliknięcie prawym przyciskiem myszy w Twoim profilu.</td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>Nie</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>współtwórcy</b></td>
      <td style="text-align:left">Should contain an Object with the <code>name</code> and <code>id</code> of the contributor. <code>nazwa</code> to Twoja nazwa użytkownika Discord bez identyfikatora(#0000). <code>Id</code> użytkownika można skopiować z Discorda włączając tryb programisty i klikając prawym przyciskiem myszy na swój profil.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>Tak</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>service</b></td>
      <td style="text-align:left">Tytuł usługi wspieranej przez ten presence.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Nie</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>altnames</b></td>
      <td style="text-align:left">Służą do wyszukiwania presence używając alternatywnej nazwy.<br> 
      Ma być używany dla presence, które mają różne nazwy w różnych językach (np. Pokémon i 포켓몬스터).<br>
      Możesz tego użyć również dla presence posiadających znaki specjalne, więc nie musisz ich nawet wpisywać (np.: Pokémon i Pokemon).</td>
      <td style="text-align:left"><code>Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Tak</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>opis</b></td>
      <td style="text-align:left">Description of the service <b>NOT</b> the presence. Twój opis musi zawierać kluczowe wartości wskazujące język oraz opis w tym konkretnym języku. Twórz opisy z językami <i>, które znasz</i>, nasi tłumacze wprowadzą zmiany do Twojego pliku metadanych. Wyświetl kategorię języków Presence dla listy. </td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>Nie</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b></td>
      <td style="text-align:left">URL of the service.<br>
      <b>Example:</b><code>vk.com</code><br>
      <b>This url must match the url of the website as it will be used to detect wherever or not this is the website to inject the script to. Może to być użyte jako tablica tylko wtedy, gdy istnieje więcej niż jeden adres URL.</b></td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Nie</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b></td>
      <td style="text-align:left">Ciąg wyrażenia regularnego używany do dopasowywania adresów URL.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Tak</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>wersja</b></td>
      <td style="text-align:left">Wersja twojej obecności.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Nie</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>logo</b></td>
      <td style="text-align:left">Link do logo serwisu.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Nie</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b></td>
      <td style="text-align:left">Link do Twojej miniatury presence.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Nie</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>color</b></td>
      <td style="text-align:left">Wartość <code>#HEX</code>. Zalecamy użycie podstawowego koloru usługi
        , którą obsługuje Twoje presence.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Nie</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>tagi</b></td>
      <td style="text-align:left">Tablica z tagami, pomoże użytkownikom wyszukać Twoje presence na stronie.</td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Nie</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>category</b></td>
      <td style="text-align:left">Ciąg używany do reprezentowania kategorii, pod którą znajduje się presence.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Nie</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b></td>
      <td style="text-align:left">Określa, czy użyto <code>iFrames</code></td>
      <td style="text-align:left"><code>Boolean</code></td>
      <td style="text-align:left"><code>Tak</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b></td>
      <td style="text-align:left">Selektor wyrażenia regularnego, który wybiera iframes do wybrania.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Tak</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>readLogs</b></td>
      <td style="text-align:left">Określa, czy rozszerzenie powinno odczytywać logi.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Tak</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>ustawienia</b></td>
      <td style="text-align:left">Szereg ustawień, które użytkownik może zmienić</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>Tak</code></td>
    </tr>
  </tbody>
</table>

## Wyrażenia regularne

Jeśli chcesz nauczyć się regularnych wyrażeń, oto kilka stron internetowych.

#### Nauka

• [Quick Starter Video](https://youtu.be/sXQxhojSdZM) • [RegexOne](https://regexone.com/) • [Regular Expressions Info](https://www.regular-expressions.info/tutorial.html)

#### Testowanie

• [Regexr](https://regexr.com/) • [Regex101](https://regex101.com/)

## Języki - Presence

PreMiD to usługa wielojęzyczna, co oznacza, że istnieje wiele języków, które łączą użytkowników na całym świecie. Pełna lista języków znajduje się w tym [punkcie końcowym API](https://api.premid.app/v2/langFile/list). To customize your presence even more you can allow users to select their presence display language see [`multiLanguage`](#multilanguage) for more.

## Ustawienia - Presence
Skonfiguruj ustawienia interaktywne, aby użytkownicy mogli dostosować swój status Presence!
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

#### Wprowadzenie

The `multiLanguage` setting is used to allow users to manually select the language they want to presence to be shown in. This requires you to use strings from our [API](https://api.premid.app/v2/langFile/presence/en), for information on how to add strings click [here](/dev/presence/metadata/adding-new-strings).

#### Setup

The `multiLanguage` setting is a special case, it doesn't require a `title` nor `icon` nor `value` or `values` like other settings but it does require you some more things to setup!

The `multiLanguage` key can be set to the following:

`true`: use this if you are only going to use strings of the `general.json` file and the `<service>.json` file of the [Localization Repository](https://github.com/PreMiD/Localization/tree/master/src/Presence). `string`: name of the file excluding the extension (.json) inside the [Localization Repository](https://github.com/PreMiD/Localization/tree/master/src/Presence) (excluding the `general` file, since it's always loaded). Only common languages of both the `general` and inputted file will be listed. `Array<String>`: if you are using more than one file inside the [Localization Repository](https://github.com/PreMiD/Localization/tree/master/src/Presence) you can specify all the values in an array (excluding the `general` file, since it's always loaded). Only common languages of all the files will be listed.

#### Adding new strings

##### Klonowanie projektu

1. Otwórz terminal i wpisz `git clone https://github.com/PreMiD/Localization`.
2. Wybierz folder.
3. Otwórz go w swoim edytorze kodu.

##### Tworzenie pliku

1. Przejdź do folderu `src`.
2. Go into the `Presence` folder.
3. Utwórz plik o nazwie `<service>.json`. (Service is the **name** (not an URL) in lowercase of the service you want to support.)

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

Użyj następujących metod, aby uzyskać informacje o ustawieniach w swoich plikach Presence:
#### `getSetting(String)`
Zwraca wartość ustawienia.
```typescript
const setting = await presence.getSetting("pdexID"); //Replace pdexID with the id of the setting
console.log(setting); // This will log the value of the setting
```

#### `hideSetting(String)`
Ukrywa podane ustawienie.
```typescript
presence.hideSetting("pdexID"); //Zamień pdexID na id ustawienia
```

#### `showSetting(String)`
Pokazuje podane ustawienie (działa tylko, jeśli ustawienie było już ukryte).
```typescript
presence.showSetting("pdexID"); //Zamień pdexID na id ustawienia
```

## Kategorie - Presence

Tworząc swój Presence, musisz określić kategorię, do której należy. To jest skompilowana lista kategorii, których możesz użyć.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Kategoria</th>
      <th style="text-align:left">Nazwa</th>
      <th style="text-align:left">Opis</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>anime</b></td>
      <td style="text-align:left"><b>Anime</b></td>
      <td style="text-align:left">Wszystko związane z anime, od forów po platformy streamingu wideo.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>gry</b></td>
      <td style="text-align:left"><b>Gry</b></td>
      <td style="text-align:left">Każda strona internetowa, która ma treści związane z grami, takie jak <code>Kahoot</code> lub <code>Skribbl.io</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>muzyka</b></td>
      <td style="text-align:left"><b>Muzyka</b></td>
      <td style="text-align:left">Są to strony internetowe oferujące treści związane z muzyką, czy to strumieniowe, czy pobierane.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>media społecznościowe</b></td>
        <td style="text-align:left"><b>Media Społecznościowe</b></td>
      <td style="text-align:left">Strony internetowe wykorzystywane do tworzenia i udostępniania treści lub do udziału w innych formach sieci społecznościowych.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>videos</b></td>
        <td style="text-align:left"><b>Filmy i transmisje</b></td>
      <td style="text-align:left">Strony internetowe służące do dostarczania filmów i strumieni.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>inne</b></td>
      <td style="text-align:left"><b>Inne</b></td>
      <td style="text-align:left">Każda z tych kategorii, które nie wchodzą w zakres określonych wyżej kategorii.</td>
    </tr>
  </tbody>
</table>

