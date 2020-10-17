---
title: Rozwój statusów
description:
published: tak
date: 2020-10-17T23:04:47.105Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:02.843Z
---

> Wszystkie aktywności Presence przechowywane są tutaj: https://github.com/PreMiD/Presences 
> 
> {.is-info}

Wersja `2.x` wprowadza [sklep z statusami](https://premid.app/store). Użytkownicy mają teraz możliwość ręcznego dodawania lub usuwania ich ulubionych statusów za pośrednictwem interfejsu użytkownika z [strony](https://premid.app/).

> Zanim zaczniesz, należy przyjrzeć się naszym wytycznym dotyczącym tworzenia Presence. 
> 
> {.is-warning}

- [Wytyczne](https://docs.premid.app/en/dev/presence/guidelines)
{.links-list}

# Struktura
Wszystkie statusy są kodowane w [TypeScript](https://www.typescriptlang.org/). [TypeScript](https://www.typescriptlang.org/) ma kilka dodatkowych definicji nad JavaScriptem, więc naprawianie i identyfikowanie błędów jest o wiele prostsze.

## Instalacja
1. Zainstaluj program [Git](https://git-scm.com/).
2. Zainstaluj program [Node.js](https://nodejs.org/en/) (instaluje się z [npm](https://www.npmjs.com/)).
3. Zainstaluj [TypeScript](https://www.typescriptlang.org/index.html#download-links) (otwórz konsole i wpisz `npm install -g typescript`).

## Klonowanie projektu
1. Otwórz terminal i wpisz `git clone https://github.com/PreMiD/Presences`.
2. Wybierz folder.
3. Otwórz go w twoim edytorze kodu.

## Tworzenie katalogów i plików

1. Utwórz folder o **nazwie** (nie URL) usługi, którą chcesz obsługiwać.
2. Stwórz wewnątrz plik `presence.ts` i `tsconfig.json`.
3. Utwórz wewnątrz katalog o nazwie `dist`.
4. Utwórz plik `metadata.json` wewnątrz folderu `dist`.

## Wypełnianie w pliku tsconfig.json
Umieść następujący kod w pliku `tsconfig.json`.
```javascript
{
  "extends": "../../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
}
```
Aby uzyskać więcej informacji na temat konfiguracji TypeScript, kliknij [tutaj](/dev/presence/tsconfig).

## Wypełnianie w pliku metadata.json
We've made a `metadata.json` file creator for the lazy peeps [here](https://eggsy.xyz/projects/premid/mdcreator). Nadal zaleca się przeczytanie tego, abyś wiedział, jak to działa.

```json
{
  "$schema": "https://schemas.premid.app/metadata/1.0",
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
  "version": "VERSION",
  "logo": "URL",
  "thumbnail": "URL",
  "color": "#HEX000",
  "tags": ["TAG1", "TAG2"],
  "category": "CATEGORY",
  "regExp": "REGEXP",
  "iFrameRegExp": "REGEXP",
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

Skopiuj powyższy kod i umieść go w pliku `metadata.json`. Teraz musisz edytować wartości właściwości. Pamiętaj, że następujące właściwości są opcjonalne w pliku `metadata.json`, jeśli nie planujesz ich używać, powinieneś je usunąć.
- `współtwórcy`
- `regExp`
- `iframe`
- `iFrameRegExp`
- `ustawienia`

**Wyjaśnienie niektórych ustawień wartości:**
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
      <td style="text-align:left">Powinno zawierać obiekt o nazwie <code></code> i <code>id</code> dewelopera obecności. Nazwa to nazwa użytkownika Discorda bez identyfikatora (#0000). Użytkownik <code>id</code> może zostać skopiowany z Discorda poprzez włączenie trybu programisty
        i kliknięcie prawym przyciskiem myszy na Twoim profilu.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>Tak</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>service</b>
      </td>
      <td style="text-align:left">Tytuł usługi wspieranej przez tę obecność. <br>(Musi mieć taką samą nazwę jak folder, w którym wszystko się znajduje)</td>
      <td style="text-align:left"><code>Ciąg znaków</code>
      </td>
      <td style="text-align:left"><code>Nie</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>alternatywne nazwy</b>
      </td>
      <td style="text-align:left">Bądź w stanie wyszukać obecność za pomocą innej nazwy. <br>Służą do wykorzystania w statusach, które mają inne nazwy w róźnych językach (np. Pokémon and 포켓몬스터).<br>Możesz też użyć tego do statusów, które mają specjalne litery więc nie musisz ich pisać (np. Pokémon i Pokemon).
      </td>
      <td style="text-align:left"><code>Array&lt;String&gt;</code>
      </td>
      <td style="text-align:left"><code>Tak</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>opis</b>
      </td>
      <td style="text-align:left">Mały opis obecności, możesz użyć opisu usługi
        jeśli nie masz pomysłów. Twój opis musi zawierać kluczowe wartości wskazujące język oraz opis w tym konkretnym języku. Twórz opisy z językami <i>, które znasz</i>, nasi tłumacze wprowadzą zmiany do pliku metadanych.</td>
      <td style="text-align:left"><code>Obiekt</code>
      </td>
      <td style="text-align:left"><code>Nie</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b>
      </td>
      <td style="text-align:left">Adres URL usługi. <br><b>Przykład:</b><code>vk.com</code><br>
        <b>Ten adres URL musi pasować do adresu URL witryny, ponieważ wykryje czy jest to strona do wprowadzenia skryptu.</b><br><b>NIE DODAWAJ</b> <code>https://</code> lub <code>http://</code> wewnątrz adresu URL ani ukośnika na końcu adresu:
<code>https://premid. pp/</code> -> <code>premid.app</code><br>
<b>Uwaga</b>: Niektóre adresy URL mogą mieć <code>www.</code> lub coś innego przed ich domeną. <b>NIE</b> zapomnij go dodać!<br>
Możesz dodać wiele adresów URL w ten sposób:<br>
<code>["URL1", "URL2", "ITD."]</code><br>
Możesz także użyć wyrażeń regularnych (Regex), wytłumaczonych niżej.
      </td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code>
      </td>
      <td style="text-align:left"><code>Nie</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b>
      </td>
      <td style="text-align:left">Ciąg wyrażenia regularnego używany do dopasowania adresów URL.<br>
      RegExp lub znany również jako Regex, może być użyty, jeśli strona ma wiele subdomen.<br>
Możesz użyć następującego regExp:<br>
<code>([a-z0-9]+)[.]domena[.]TLD"</code><br>
Nazwa TLD dla domeny najwyższego poziomu, na przykład: .com .net<br> 
<code>([a-z0-9]+)</code> oznacza cokolwiek od 0 do 9.<br>
        Możesz uzyskać szybki start, oglądając to <a href="https://youtu.be/sXQxhojSdZM">wideo</a><br>
        Możesz przetestować swój regExp na <a href="https://regex101.com/">Regex101</a>
      </td>
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
      <td style="text-align:left">Ciąg używany do reprezentowania kategorii, pod którą znajduje się obecność. Zobacz prawidłowe kategorie <a href="https://docs.premid.app/dev/presence/metadata#presence-categories">tutaj</a>.</td>
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
      <td style="text-align:left">Selektor wyrażenia regularnego, który wybiera iframes do wstrzyknięcia. Zobacz regExp po więcej informacji.</td>
      <td style="text-align:left"><code>Ciąg znaków</code>
      </td>
      <td style="text-align:left"><code>Tak</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>ustawienia</b>
      </td>
      <td style="text-align:left">Zestaw ustawień, które użytkownik może zmienić. <br>
      Przeczytaj więcej o ustawieniach Presence <a href="https://docs.premid.app/dev/presence/metadata#presence-settings">tutaj</a>.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>Tak</code>
      </td>
    </tr>
  </tbody>
</table>

We've made a `metadata.json` file creator for the lazy peeps [here](https://eggsy.xyz/projects/premid/mdcreator).

## Wprowadzenie

```javascript
var presence = new Presence({
    clientId: "000000000000000000" //The client ID of the Application created at https://discordapp.com/developers/applications
}),

strings = presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
    //You can use this to get translated strings
});

/*

function myOutsideHeavyLiftingFunction(){
    //Grab and process all your data here

    // element grabs //
    // api calls //
    // variable sets //
}

setInterval(myOutsideHeavyLiftingFunction, 10000); 
//Run the function separate from the UpdateData event every 10 seconds to get and set the variables which UpdateData picks up

*/


presence.on("UpdateData", async () => {
    /*UpdateData is always firing, and therefore should be used as your refresh cycle, or `tick`. Wywołuje się ona co parę sekund, gdzie to możliwe.

    It is recommended to set up another function outside of this event function which will change variable values and do the heavy lifting if you call data from an API.*/

    var presenceData: presenceData = {
        largeImageKey: "key", /*The key (file name) of the Large Image on the presence. These are uploaded and named in the Rich Presence section of your application, called Art Assets*/
        smallImageKey: "key", /*The key (file name) of the Large Image on the presence. These are uploaded and named in the Rich Presence section of your application, called Art Assets*/
        smallImageText: "Some hover text", //The text which is displayed when hovering over the small image
        details: "Browsing Page Name", //The upper section of the presence text
        state: "Reading section A", //The lower section of the presence text
        startTimestamp: 1577232000, //The unix epoch timestamp for when to start counting from
        endTimestamp: 1577151472000 //If you want to show Time Left instead of Elapsed, this is the unix epoch timestamp at which the timer ends
    }; /*Optionally you can set a largeImageKey here and change the rest as variable subproperties, for example presenceSata.type = "blahblah"; type examples: details, state, etc.*/

    if (presenceData.details == null) {
        //This will fire if you do not set presence details
        presence.setTrayTitle(); //Clears the tray title for mac users
        presence.setActivity(); /*Update the presence with no data, therefore clearing it and making the large image the Discord Application icon, and the text the Discord Application name*/
    } else {
        //This will fire if you set presence details
        presence.setActivity(presenceData); //Update the presence with all the values from the presenceData object
    }
});
```
Możesz skopiować to do pliku `presence.ts` i edytować wartości. Ustawienie wszystkich wartości jest wykonywane wewnątrz zdarzenia updataData.

Dla przykładów sugerujemy przyjrzeć się kodom Presence, takim jak: 1337x lub 9GAG.

Aby uzyskać więcej informacji o klasie Presence, kliknij [tutaj](/dev/presence/class).

## Nie można uzyskać określonych danych?!

Wiele stron używa [iframes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([Inlineframes](https://en.wikipedia.org/wiki/HTML_element#Frames)). Te tagi html mogą zawierać wiele źródeł, takich jak filmy. Ale nie są istotne za każdym razem. Niektóre z nich są ukryte albo po prostu nie są używane. Sprawdź, czy potrafisz wyodrębnić potrzebne informacje, zanim wykonasz niepotrzebną pracę.

1. Sprawdź je w konsoli przeglądarki (upewnij się, że jesteś na karcie **Elementy**).
2. Szukaj (<kbd>CTRL</kbd>+<kbd>F</kbd> (Windows) albo <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
3. Wykonaj `document.querySelectorAll("iframe")`.

Jeśli okaże się, że Twoje dane znajdują się w ramce iFrame, wykonaj następujące czynności:
1. Stwórz plik `iframe.ts`.
2. Ustaw iFrame na `true` w twoim pliku metadanych.
3. Wypełnianie w twoim pliku iFrame.
```javascript
var iframe = new iFrame();
iframe.on("UpdateData", async () => {
  /*
  Pobierz wszystkie potrzebne dane z iFrame, zapisz je w zmiennych, 
  a następnie wyślij za pomocą iframe.send
  */
  iframe.send({ //wysyłanie danych
    video: video,
    time: video.duration
  }); 
});
```
4. Zrobienie, by plik Statusu odbierał dane z pliku iFrame.
```javascript
presence.on("iFrameData", data => {
  iFrameVideo = data.video;
  currentTime = data.time;
});
```
**Uwaga:** Należy to umieścić poza zdarzeniem updateData.
## Kompilacja
Otwórz konsolę w swoim folderze i wpisz `tsc -w` aby skompilować `presence.ts` w folderze `/dist`.

# Ładowanie statusu
1. Otwórz okienko i przytrzymaj klawisz <kbd>Shift</kbd> na twojej klawiaturze.
2. **Load Presence** pojawi się w sekcji Presences.
3. Kliknij na to, kiedy nadal przytrzymujesz przycisk <kbd>Shift</kbd>.
4. Wybierz folder /dist twojego statusu.

# Kilka pomocnych rzeczy
## Przeładowanie
Witryna, którą rozwijasz, automatycznie ładuje się ponownie za każdym razem, gdy zapisujesz plik w folderze.

## Debugowanie
- Możesz umieścić `console.log („Test”);` między kodem i sprawdzić, czy konsola przeglądarki daje ci taki wynik. Jeśli tak, kontynuuj i spróbuj ponownie po następnej funkcji. Jeśli nie, oznacza to błąd powyżej.
- Jeśli to nie pomoże, poproś o pomoc programistę Presence na naszym [serwerze Discord](https://discord.premid.app/).

# Wyjaśnienie plików
- [Klasa Presence](/dev/presence/class)
- [Klasa iFrame](/dev/presence/iframe)
- [Plik Metadata](/dev/presence/metadata)
- [Konfiguracja TypeScript](/dev/presence/tsconfig)
{.links-list}
