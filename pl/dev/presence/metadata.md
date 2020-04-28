---
title: Metadata.json
description: Zawiera podstawowe dane o Prezentacji
published: tak
date: 24.04.2020 12:45
tags:
---

# Metadata.json

Jeśli chcesz opublikować swój status Presence w sklepie i załadować ją przez rozszerzenie, powinieneś utworzyć plik `metadata.json` w folderze `dist`.

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

Ten przykład wygląda naprawdę dziwnie, co? Nie martw się, nie jest trudno zrozumieć, do czego służy każda zmienna.

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
      <td style="text-align:left">Powinien zawierać obiekt o <code>nazwie</code> i <code>id</code> współautora. Nazwa to nazwa użytkownika Discorda bez identyfikatora (#0000). Użytkownik <code>id</code> może zostać skopiowany z Discorda poprzez włączenie trybu programisty
        i kliknięcie prawym przyciskiem myszy na Twoim profilu.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>Tak</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>service</b>
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
        jeśli nie masz pomysłów. Twój opis musi zawierać kluczowe wartości wskazujące język oraz opis w tym konkretnym języku. Twórz opisy z językami <i>, które znasz</i>, nasi tłumacze wprowadzą zmiany do pliku metadanych. Wyświetl kategorię języków Presence dla listy. </td>
      <td style="text-align:left"><code>Obiekt</code>
      </td>
      <td style="text-align:left"><code>Nie</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b>
      </td>
      <td style="text-align:left">URL usługi.<br><b>Przykład: </b><code>vk.com</code><br>
        <b>Ten adres URL musi być zgodny z adresem URL witryny, ponieważ będzie on używany do wykrywania strony internetowej, do której należy zainicjować skrypt. Może to być użyte jako tablica tylko wtedy, gdy istnieje więcej niż jeden adres URL.</b>
      </td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code>
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
      <td style="text-align:left"><b>color</b>
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
      style="text-align:left"><code>String, Array&lt;String&gt;</code>
        </td>
      <td style="text-align:left"><code>Nie</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>category</b>
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
      <td style="text-align:left"><code>Array&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>Tak</code>
      </td>
    </tr>
  </tbody>
</table>

## Wyrażenia regularne

Jeśli chcesz nauczyć się regularnych wyrażeń, oto kilka stron internetowych.

#### Nauka

• [RegexOne](https://regexone.com/) • [Regular Expressions Info](https://www.regular-expressions.info/tutorial.html)

#### Testowanie

• [Regexr](https://regexr.com/) • [Regex101](https://regex101.com/)

## Języki - Presence

PreMiD to usługa poligraficzna, co oznacza, że istnieje wiele języków, które łączą użytkowników na całym świecie. Pełna lista języków znajduje się w tym [punkcie końcowym API](https://api.premid.app/v2/langFile/list).

## Ustawienia - Presence
Skonfiguruj ustawienia interaktywne, aby użytkownicy mogli dostosować swój status Presence!
```javascript
"settings": [
        { 
            "id": "ID",
            "title": "DISPLAY TITLE",
            "icon": "FONTAWESOME FREE ICON", //Przykładowo "fas fa-info"
            "value": true //Boolean sprawi, że będzie to przełącznik włącz/wyłącz z wartością jako wartością domyślną
        },
        {
            "id": "ID",
            "if": {
                "ID": true //Jeśli inne ustawienie jest równe tej wartości (prawda/fałsz/0/1/itd.), pokaż ten przycisk
            },
            "title": "DISPLAY TITLE",
            "icon": "FONTAWESOME FREE ICON",
            "value": "\"%song%\" by %artist%", //Wprowadzenie łańcucha "string" spowoduje, że ustawienie będzie wejściowe, w którym można użyć niestandardowego wejścia.
            "placeholder": "use %song% or %artist%" //Gdy dane wejściowe są puste, będzie zaznaczone na szaro
        },
        {
            "id": "ID",
            "title": "DISPLAY TITLE",
            "icon": "FONTAWESOME FREE ICON",
            "value": 0, //Wartość domyślna selektora
            "values": ["1", "2", "etc."] //Sprawi, że ustawienie będzie selektorem, w którym wybierzesz ten, który chcesz
        }
    ]
```

Użyj następujących metod, aby uzyskać informacje o ustawieniach w swoich plikach Presence:
### `getSetting(String)`
Zwraca wartość ustawienia.
```typescript
var setting = await presence.getSetting("pdexID"); // Zamień pdexID na id ustawienia
console.log(setting); // Spowoduje to zapisanie wartości ustawienia
```

### `hideSetting(String)`
Ukrywa podane ustawienie.
```typescript
presence.hideSetting("pdexID"); //Zamień pdexID na id ustawienia
```

### `showSetting(String)`
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