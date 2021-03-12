---
title: Rozwój statusów
description:
published: true
date: 2021-02-07T17:11:34.449Z
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

- [Wytyczne](https://docs.premid.app/dev/presence/guidelines)
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
3. Otwórz go w swoim edytorze kodu.

## Tworzenie katalogów i plików

1. Przejdź do folderu `stron internetowych` , a następnie przejdź do folderu z pierwszą literą **nazwy** (nie URL) usługi, którą chcesz obsługiwać.
2. Utwórz folder o **nazwie** (nie URL) usługi, którą chcesz obsługiwać.
3. Stwórz wewnątrz plik `presence.ts` i `tsconfig.json`.
4. Utwórz wewnątrz katalog o nazwie `dist`.
5. Utwórz plik `metadata.json` wewnątrz folderu `dist`.

## Wypełnianie w pliku tsconfig.json

Umieść następujący kod w pliku `tsconfig.json`.

```typescript
{
  "extends": "../../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
}
```

Aby uzyskać więcej informacji na temat konfiguracji TypeScript, kliknij [tutaj](/dev/presence/tsconfig).

## Wypełnianie w pliku metadata.json

Stworzyliśmy dla leniwych kreator plików `metadata.json` [tutaj](https://eggsy.xyz/projects/premid/mdcreator). Nadal zaleca się przeczytanie tego, abyś wiedział, jak to działa.

```json
{
  "$schema": "https://schemas.premid.app/metadata/1.3",
  "author": {
    "name": "USER",
    "id": "ID"
  },
  "contributors": [
    {
      "name": "USER",
      "id": "ID"
    }
  ],
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
  "readLogs": false,
  "settings": [
    {
      "id": "ID",
      "multiLanguage": true
    },
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

Skopiuj powyższy kod i umieść go w pliku `metadata.json`. Teraz musisz edytować wartości właściwości. Pamiętaj, że następujące właściwości są opcjonalne w pliku `metadata.json`, jeśli nie planujesz ich używać, powinieneś je usunąć.

- `contributors`
- `altnames`
- `regExp`
- `iframe`
- `iFrameRegExp`
- `readLogs`
- `settings`

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
      <td style="text-align:left"><b>author</b></td>
      <td style="text-align:left">Powinien zawierać obiekt o <code>nazwie</code> i <code>id</code> współautora. <code>nazwa</code> to Twoja nazwa użytkownika Discord bez identyfikatora(#0000). <code>Id</code> użytkownika można skopiować z Discorda włączając tryb programisty i klikając prawym przyciskiem myszy na swój profil.</td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>Nie</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>contributors</b></td>
      <td style="text-align:left">Powinien zawierać obiekt o <code>nazwie</code> i <code>id</code> współautora. <code>nazwa</code> to Twoja nazwa użytkownika Discord bez identyfikatora(#0000). <code>Id</code> użytkownika można skopiować z Discorda włączając tryb programisty i klikając prawym przyciskiem myszy na swój profil.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>Tak</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>service</b></td>
      <td style="text-align:left">Tytuł serwisu, który obsługuje ten presence.<br>
      (Musi być taki sam, jak folder, w którym się znajduje)</td>
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
      <td style="text-align:left"><b>description</b></td>
      <td style="text-align:left">Mały opis obecności, możesz użyć opisu usługi, jeśli nie masz pomysłów. Twój opis musi zawierać kluczowe wartości wskazujące język oraz opis w tym konkretnym języku. Twórz opisy z językami <i>, które znasz</i>, nasi tłumacze wprowadzą zmiany do twojego pliku metadanych.</td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>Nie</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b></td>
      <td style="text-align:left">Adres URL serwisu.<br><b>Przykład:</b><code>vk.com</code><br>
      <b>Ten adres URL musi pasować do adresu URL witryny, aby wykryć czy jest to strona do wprowadzenia skryptu.</b><br> <b>Nie</b> dodawaj <code>https://</code> lub <code>http://</code> wewnątrz adresu URL, ani ukośnika na końcu:
      <code>https://premid.app/</code> -> <code>premid.app</code><br>
      <b>Uwaga</b>: Niektóre adresy URL mogą mieć  <code>www.</code> lub coś innego przed swoją domeną. <b>NIE</b> zapomnij tego dodać!<br>
      Możesz dodać wiele adresów URL w ten sposób:<br>
      <code>["URL1", "URL2", "ITD."]</code><br>
      Możesz również użyć wyrażeń regularnych znanych, jako Regex dla tego zadania, objaśnionego poniżej.</td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Nie</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b></td>
      <td style="text-align:left">Ciąg wyrażenia regularnego używany do dopasowania adresów URL.<br>
      RegExp znany również, jako Regex, może być użyty, jeśli strona ma wiele subdomen.<br>
      Możesz użyć następującego regExp:<br>
      <code>([a-z0-9]+)[.]domena[.]TLD"</code><br>
      Nazwa TLD dla domeny najwyższego poziomu, na przykład: .com .net (ale bez wprowadzania kropek)<br> 
      <code>([a-z0-9]+)</code> oznacza cokolwiek od a do z, od 0 do 9.<br>
      Możesz uzyskać szybki start, oglądając to <a href="https://youtu.be/sXQxhojSdZM">wideo</a><br>
      Możesz przetestować swój regExp na <a href="https://regex101.com/">Regex101</a>.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Tak</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>version</b></td>
      <td style="text-align:left">Wersja twojego presence.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Nie</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>logo</b></td>
      <td style="text-align:left">Link do loga serwisu.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Nie</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b></td>
      <td style="text-align:left">Link do miniaturki presence.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Nie</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>color</b></td>
      <td style="text-align:left">Wartość <code>#HEX</code>. Zalecamy użycie podstawowego koloru usługi,
         którą obsługuje Twój presence.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Nie</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>tags</b></td>
      <td style="text-align:left">Tablica z tagami, pomoże użytkownikom wyszukać Twoje presence na stronie.</td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Nie</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>category</b></td>
      <td style="text-align:left">Ciąg używany do reprezentowania kategorii, pod którą znajduje się presence. Zobacz prawidłowe kategorie <a href="https://docs.premid.app/dev/presence/metadata#presence-categories">tutaj</a>.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Nie</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b></td>
      <td style="text-align:left">Określa, czy <code>iFrames</code> są używane.</td>
      <td style="text-align:left"><code>Boolean</code></td>
      <td style="text-align:left"><code>Tak</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b></td>
      <td style="text-align:left">Selektor wyrażenia regularnego, który wybiera iframes do wybrania. Zobacz regExp po więcej informacji.</td>
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
      <td style="text-align:left"><b>settings</b></td>
      <td style="text-align:left">Zestaw ustawień, które użytkownik może zmienić. <br>
      Przeczytaj więcej o ustawieniach Presence <a href="https://docs.premid.app/dev/presence/metadata#presence-settings">tutaj</a>.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>Tak</code></td>
    </tr>
  </tbody>
</table>

Stworzyliśmy dla leniwych kreator plików `metadata.json` [tutaj](https://eggsy.xyz/projects/premid/mdcreator).

## Wprowadzenie

```typescript
const presence = new Presence({
    clientId: "000000000000000000" //The client ID of the Application created at https://discordapp.com/developers/applications
  }),
  strings = presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
    //You can use this to get translated strings in their browser language
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

  const presenceData: PresenceData = {
    largeImageKey:
      "key" /*The key (file name) of the Large Image on the presence. These are uploaded and named in the Rich Presence section of your application, called Art Assets*/,
    smallImageKey:
      "key" /*The key (file name) of the Large Image on the presence. These are uploaded and named in the Rich Presence section of your application, called Art Assets*/,
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

Dla przykładów sugerujemy przyjrzeć się kodom Presence, takim jak: 1337x lub 9GAG. Aby uzyskać więcej informacji o klasie `Presence`, kliknij [tutaj](/dev/presence/class).

Since v2.2.0 there are now Slideshows, this allows you to show multiple `PresenceData` interfaces on an interval, for more information click about the `Slideshow` class [here](/dev/presence/slideshow).

## Nie można uzyskać określonych danych?!

Wiele stron używa [iframes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([Inlineframes](https://en.wikipedia.org/wiki/HTML_element#Frames)). Te tagi html mogą zawierać wiele źródeł, takich jak filmy. Ale nie są istotne za każdym razem. Niektóre z nich są ukryte albo po prostu nie są używane. Sprawdź, czy potrafisz wyodrębnić potrzebne informacje, zanim wykonasz niepotrzebną pracę.

1. Sprawdź je w konsoli przeglądarki (upewnij się, że jesteś na karcie **Elementy**).
2. Szukaj (<kbd>CTRL</kbd>+<kbd>F</kbd> (Windows) albo <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
3. Wykonaj `document.querySelectorAll("iframe")`.

Jeśli okaże się, że Twoje dane znajdują się w ramce iFrame, wykonaj następujące czynności:

1. Stwórz plik `iframe.ts`.
2. Ustaw iFrame na `true` w twoim pliku metadanych.
3. Wypełnianie w twoim pliku iFrame.

```typescript
const iframe = new iFrame();
iframe.on("UpdateData", async () => {
  /*
  Get all the data you need out of the iFrame save them in variables
  and then sent them using iframe.send
  */
  iframe.send({
    //sending data
    video: video,
    time: video.duration
  });
});
```

4. Zrobienie, by plik Statusu odbierał dane z pliku iFrame.

```typescript
presence.on("iFrameData", (data) => {
  iFrameVideo = data.video;
  currentTime = data.time;
});
```

**Uwaga:** Należy to umieścić poza zdarzeniem updateData.

## Kompilacja

Otwórz konsolę w swoim folderze i wpisz `tsc -w` aby skompilować `presence.ts` w folderze `/dist`.

# Ładowanie statusu

1. Open the extension popup in the browser and hold the <kbd>Shift</kbd> button on your keyboard.
2. **Load Presence** pojawi się w sekcji Presences.
3. Kliknij na to, kiedy nadal przytrzymujesz przycisk <kbd>Shift</kbd>.
4. Wybierz folder /dist twojego statusu.

# Kilka pomocnych rzeczy

## Przeładowanie

Witryna, którą rozwijasz, automatycznie ładuje się ponownie za każdym razem, gdy zapisujesz plik w folderze.

## Debugowanie

- Możesz umieścić `console.log („Test”);` między kodem i sprawdzić, czy konsola przeglądarki daje ci taki wynik. Jeśli tak, kontynuuj i spróbuj ponownie po następnej funkcji. Jeśli nie, oznacza to błąd powyżej.
- If that doesn't help you either then ask a presence developer on our [Discord server](https://discord.premid.app/) for help.

# Wyjaśnienie plików

- [Klasa Presence](/dev/presence/class)
- [Klasa pokazu slajdów](/dev/presence/slideshow)
- [Klasa iFrame](/dev/presence/iframe)
- [Plik Metadata](/dev/presence/metadata)
- [Konfiguracja TypeScript](/dev/presence/tsconfig ""){.links-list}
