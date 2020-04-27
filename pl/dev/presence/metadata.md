---
title: Metadata.json
description: Zawiera podstawowe dane o Prezentacji
published: tak
date: 2020-04-24T12:45:27.030Z
tags:
---

# Metadata.json

If you want to publish a presence to the store and load it via the extension, you should create the `metadata.json` file in your `dist` folder.

Przykład tego pliku można znaleźć poniżej.

```javascript
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

## Zrozumienie metadana.json

Ten przykład wygląda naprawdę dziwnie, co? Nie martw się, nie jest to trudne do zrozumienia dla każdej zmiennej.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Zmienna</th>
      <th style="text-align:left">Opis</th>
      <th style="text-align:left">Typ</th>
      <th style="text-align:left">Opcjonalnie</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>autor</b>
      </td>
      <td style="text-align:left">Powinno zawierać obiekt o nazwie <code></code> i <code>id</code> dewelopera obecności. Nazwa to nazwa użytkownika Discorda bez identyfikatora (#0000). Użytkownik <code>id</code> może zostać skopiowany z Discorda poprzez włączenie trybu programisty
        i kliknięcie prawym przyciskiem myszy na Twoim profilu.</td>
      <td style="text-align:left"><code>Obiekt</code>
      </td>
      <td style="text-align:left"><code>Nie</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>współtwórcy</b>
      </td>
      <td style="text-align:left">Should contain Object with <code>name</code> and <code>id</code> of the contributor. Nazwa to nazwa użytkownika Discorda bez identyfikatora (#0000). Użytkownik <code>id</code> może zostać skopiowany z Discorda poprzez włączenie trybu programisty
        i kliknięcie prawym przyciskiem myszy na Twoim profilu.</td>
      <td style="text-align:left"><code>Tablica&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>Tak</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>serwis</b>
      </td>
      <td style="text-align:left">Tytuł usługi wspieranej przez tę obecność.</td>
      <td style="text-align:left"><code>Ciąg znaków</code>
      </td>
      <td style="text-align:left"><code>Nie</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>opis</b>
      </td>
      <td style="text-align:left">Mały opis obecności, możesz użyć opisu usługi
        jeśli nie masz pomysłów. Twój opis musi zawierać kluczowe wartości wskazujące język oraz opis w tym konkretnym języku. Twórz opisy z językami <i>, które znasz</i>, nasi tłumacze wprowadzą zmiany do pliku metadanych. View the category for presence languages for a list. </td>
      <td style="text-align:left"><code>Obiekt</code>
      </td>
      <td style="text-align:left"><code>Nie</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b>
      </td>
      <td style="text-align:left">URL of the service.<br><b>Example:</b><code>vk.com</code><br>
        <b>This url must match the url of the website as it will be used to detect wherever or not this is the website to inject the script to. Może to być użyte jako tablica tylko wtedy, gdy istnieje więcej niż jeden adres URL.</b>
      </td>
      <td style="text-align:left"><code>Ciąg, Tablica&lt;String&gt;</code>
      </td>
      <td style="text-align:left"><code>Nie</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b>
      </td>
      <td style="text-align:left">Ciąg wyrażenia regularnego używany do dopasowania adresów URL.</td>
      <td style="text-align:left"><code>Ciąg znaków</code>
      </td>
      <td style="text-align:left"><code>Tak</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>wersja</b>
      </td>
      <td style="text-align:left">Wersja twojej obecności.</td>
      <td style="text-align:left"><code>Ciąg znaków</code>
      </td>
      <td style="text-align:left"><code>Nie</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>logo</b>
      </td>
      <td style="text-align:left">Link do serwisu&apos;s logotype.</td>
      <td style="text-align:left"><code>Ciąg znaków</code>
      </td>
      <td style="text-align:left"><code>Nie</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b>
      </td>
      <td style="text-align:left">Link do Twojej miniatury obecności.</td>
      <td style="text-align:left"><code>Ciąg znaków</code>
      </td>
      <td style="text-align:left"><code>Nie</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>kolor</b>
      </td>
      <td style="text-align:left"><code>#HEX</code>. Zalecamy użycie podstawowego koloru usługi
        , którą obsługuje Twoja obecność.</td>
      <td style="text-align:left"><code>Ciąg znaków</code>
      </td>
      <td style="text-align:left"><code>Nie</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>tagi</b>
      </td>
      <td style="text-align:left">Tablica z tagami, pomoże użytkownikom wyszukać Twoją obecność na stronie.</td>
      <td
      style="text-align:left"><code>Ciąg, Tablica&lt;String&gt;</code>
        </td>
      <td style="text-align:left"><code>Nie</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>kategoria</b>
      </td>
      <td style="text-align:left">Ciąg używany do reprezentowania kategorii, pod którą znajduje się obecność.</td>
      <td style="text-align:left"><code>Ciąg znaków</code>
      </td>
      <td style="text-align:left"><code>Nie</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b>
      </td>
      <td style="text-align:left">Określa, czy użyto <code>iFrames</code></td>
      <td style="text-align:left"><code>Boolean</code>
      </td>
      <td style="text-align:left"><code>Tak</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b>
      </td>
      <td style="text-align:left">Selektor wyrażenia regularnego, który wybiera iframes do wstrzyknięcia.</td>
      <td style="text-align:left"><code>Ciąg znaków</code>
      </td>
      <td style="text-align:left"><code>Tak</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>ustawienia</b>
      </td>
      <td style="text-align:left">Szereg ustawień, które użytkownik może zmienić</td>
      <td style="text-align:left"><code>Tablica&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>Tak</code>
      </td>
    </tr>
  </tbody>
</table>

## Wyrażenia regularne

Jeśli chcesz nauczyć się regularnych wyrażeń, oto kilka stron internetowych.

#### Learning

• [RegexOne](https://regexone.com/) • [Regular Expressions Info](https://www.regular-expressions.info/tutorial.html)

#### Testowanie

• [Regexr](https://regexr.com/) • [Regex101](https://regex101.com/)

## Presence languages

PreMiD to usługa poligraficzna, co oznacza, że istnieje wiele języków, które łączą użytkowników na całym świecie. A full list of languages can be found with this [API endpoint](https://api.premid.app/v2/langFile/list).

## Presence settings
Setup interactive settings so users can customize the presence!
```javascript
"settings": [
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

Use the following methods to get settings info in your presence files:
### `getSetting(String)`
Returns value of setting.
```typescript
var setting = await presence.getSetting("pdexID"); //Replace pdexID with the id of the setting
console.log(setting); // This will log the value of the setting
```

### `hideSetting(String)`
Hides given setting.
```typescript
presence.hideSetting("pdexID"); //Replace pdexID with the id of the setting
```

### `showSetting(String)`
Shows given setting (Only works if the setting was already hidden).
```typescript
presence.showSetting("pdexID"); //Replace pdexID with the id of the setting
```

## Presence categories

When making your presence, you must specify a category which the presence falls under. This is a compiled list of the categories that you can use.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Kategoria</th>
      <th style="text-align:left">Nazwisko</th>
      <th style="text-align:left">Opis</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>anime</b></td>
      <td style="text-align:left"><b>Anime</b></td>
      <td style="text-align:left">Wszystko związane z animem, od forów po platformy streamingu wideo.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>gry</b></td>
    <td style="text-align:left"><b>Gry</b></td>
      <td style="text-align:left">Każda strona internetowa, która ma treści związane z grą, takie jak <code>Kahoot</code> lub <code>Skribbl.io</code></td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>muzyka</b></td>
    <td style="text-align:left"><b>Muzyka</b></td>
      <td style="text-align:left">Są to strony internetowe oferujące treści związane z muzyką, czy to strumieniowe, czy pobierane.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>media społecznościowe</b></td>
        <td style="text-align:left"><b>Media Społecznościowe</b></td>
      <td style="text-align:left">Strony internetowe wykorzystywane do tworzenia i udostępniania treści lub do udziału w innych formach sieci społecznościowych.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>filmy</b></td>
        <td style="text-align:left"><b>Filmy i transmisje</b></td>
      <td style="text-align:left">Strony internetowe służące do dostarczania filmów i strumieni.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>inne</b></td>
    <td style="text-align:left"><b>Inne</b></td>
      <td style="text-align:left">Każda z tych kategorii, które nie wchodzą w zakres określonej wyżej kategorii.</td>
      </td>
    </tr>
  </tbody>
</table>