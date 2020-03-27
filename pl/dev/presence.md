---
title: Rozwój statusów
description: 
published: true
date: 2020-02-16T14:21:31.975Z
tags: 
---

> Wszystkie statusy są trzymane tutaj: https://github.com/PreMiD/Presences 
> 
> {.is-info}

Wersja `2.x` wprowadza [sklep z statusami](https://premid.app/store). Użytkownicy mają teraz możliwość ręcznego dodawania lub usuwania ich ulubionych statusów za pośrednictwem interfejsu użytkownika z [strony](https://premid.app/).

# Wytyczne
> Jeżeli nie będziesz trzymać się wszystkich wytycznych, twój status lub pull request zostanie usunięty z githuba. 
> 
> {.is-danger}

## Tworzenie

Zanim zaczniesz tworzyć swoj status, pamietaj o następującej liście.
- Pull Request musi być kompletny, musisz mieć prawidłową strukturę plików. Zawierający folder `dist`, plik `presence.js`, oraz plik `metadata.json`.
- Status **musi** być związany z stroną którą wybrałeś.
- Status nie może być z nielegalnej strony. Wliczając czynniki stresujące, narkotyki, dziecięcej pornografi, itp...
- Metadata statusu musi zawierać dobrze napisaną treść, w tym tytuły i opisy.
- Zdjęcia które dodajesz (ikona/miniatura) musi być związana z stroną i musi być zrozumiana w stylu jak i jakości.
- Struktura plików musi być czysta i zarządzana, nie posiadać losowych plików, które nie dostarczają nic do funkcji obecności.
- Obecność **nie może** mieć żadnych złośliwych intencji. Obejmują one kradzież/wyciek prywatnych informacji, negatywny wpływ na zachowanie strony internetowej, itd...
- Jeśli zaprojektujesz obecność na stronie internetowej i strona internetowa zmieni się w przyszłości, **ARE** odpowiedzialny za ponowną aktualizację obecności, aby działać zgodnie z oczekiwaniami. Jeśli nie naprawisz tego w akceptowalnym przedziale czasowym, inni deweloperzy obecni mogą **nadpisać** swoją obecność w celu dostosowania się do zmian.
- Przed publikacją należy sprawdzić obecność w celu potwierdzenia, że wszystko działa zgodnie z oczekiwaniami.
- Twoja obecność musi mieć obrazy i opisy SFW niezależnie od tego, czy jest NSFW czy nie. Jeśli Twoja obecność dotyczy strony internetowej `nsfw` , dodaj tag `nsfw` do swoich metadanych.
- Twoja obecność musi **NIE** być dostępna dla darmowych domen lub hostów (np. .TK, [wszystkie darmowe domeny Freenom], . F.GD, itp...), wyjątki mogą zostać wprowadzone, jeśli przedstawiony zostanie dowód na to, że jest to domena płatna.
- Pola `smallImageKey` i `smallImageText` mają na celu zapewnienie dodatkowego/wtórnego kontekstu (np. "odtwarzanie"/"wstrzymane" dla witryn wideo, „przeglądanie” w przypadku zwykłych stron internetowych i innych przypadków). Nie możesz promować profili Discorda lub czegokolwiek niezwiązanego z PreMiD.
- Wymagania dotyczące logo to 1:1 (Square) w 512 pikseli, jednak miniatury powinien być [karty promocyjne](https://i.imgur.com/3QfIc5v.jpg) lub po prostu [zrzuty ekranu](https://i.imgur.com/OAcBmwW.png) jeśli pierwszy nie jest dostępny.
- Obecności powinny mieć co najmniej jeden identyfikator, jest to wymóg konstrukcyjny i w przyszłości może być fakultatywny.
- Pole `url` nie może zawierać `http://` ani `https://`, ani parametrów (np. obecność dla `https://www.google.com/search?gws_rd=ssl` będzie miała tylko `www.google.com` w polu `URL`).
- Opisy i tagi powinny zawsze znajdować się w tablicach, nawet jeśli jest tylko jednym elementem. Pole `url` powinno być jednak tylko ciągiem znaków jeśli jest jedną domeną.
- Niestabilne strony, które stale zmieniają API/domeny, losowe elementy HTML lub po prostu znajdujące się w dużym rozwoju nie są dozwolone i zostaną usunięte ze sklepu.

## Modyfikacja

W niektórych sytuacjach obecność może zachowywać się niespodziewanie lub może posłużyć się niewielkimi zmianami w celu poprawy jej funkcjonowania. Oto skompilowana lista, którą musisz obserwować, aby modyfikować obecności.
- Nie masz uprawnień, aby zmienić twórcę obecności. Ma to zastosowanie tylko wtedy, gdy możesz je przepisać. Możesz dodać siebie jako [współtwórcę](/dev/presence/metadata).
- Upewnij się, że zmiany są przydatne. Mogą one obejmować poprawki (kod i typo), dodatki (opisy i znaczniki) itp...
- Potwierdź, że zmiany działają przed publikacją. Nie twórz pull requestów bez znajomości wyniku zmian.
- Nie powtarzaj lub nadpisywać obecności w całości, chyba że zezwoli na to `Weryfikator Presence` lub członek personelu.

# Weryfikacja
> Podczas wysyłania pull requestów o dodawanie lub modyfikowanie istniejących obecności, musisz dołączyć zrzut ekranu. Jednakże modyfikacje metadanych/tsconfig obecności nie wymagają zrzutu ekranu. *Twój zrzut ekranu musi być przesłany bezpośrednio na github z prośbą o ściągnięcie, nie używaj stron internetowych udostępniających obrazy.* 
> 
> {.is-danger}

Aby Twoja obecność dotarła do sklepów, musi przejść proces na githubie, aby potwierdzić, że działa zgodnie z oczekiwaniami. Oto kilka rzeczy, na które należy zwrócić uwagę, kiedy wyślesz Pull Request.

Nasz zespół weryfikacji obecności ma swoją własną rolę, poszukaj `Weryfikatora Presence` na serwerze Discord, aby wiedzieć, kto jest zaangażowany.

1. Potwierdzenie, że Twoja obecność jest zgodna ze standardami, wymaga dwóch weryfikatorów. Jeśli dojdzie do żądania zmian, wykonaj odpowiednie starania, aby go naprawić lub nie zostanie dodany.
2. Jeśli żądamy zmian i Twoje Pull Request przekracza **7 dni bezczynności** bez konieczności dokonywania niezbędnych zmian, będziemy zmuszeni to zamknąć.
3. Możesz robić zrzuty ekranu zmian dokonanych z pomocą innego użytkownika. (np. jego autor w przypadku, gdy nie masz dostępu do niego z żadnego powodu).
4. Jeśli jest to aktualizacja lub poprawka, zrzut ekranu musi pokazywać nowe dodatki działające, a nie stare funkcje z poprzednich pull requestów.
5. Dostarczone zrzuty ekranu powinny być prawdziwe, a nie edytowane.
6. Każdy wprowadzony kod, który zostanie połączony z tym repozytorium będzie licencjonowany na licencji **Mozilla Public License 2.0**.


Po spełnieniu wszystkich właściwych recenzji Twoje Pull Request zostanie scalony ze sklepem.

# Struktura (TypeScript)
Możesz wybrać czy chcesz zakodować swoją Prezentację za pomocą [JavaScript](https://www.javascript.com/) lub  [TypeScript](https://www.typescriptlang.org/). [TypeScript](https://www.typescriptlang.org/) ma pewne dodatkowe pikantne definicje, więc naprawianie i identyfikacja błędów jest łatwiejsze. Jeśli chcesz użyć [JavaScript](https://www.javascript.com/) możesz pominąć [Strukturę (JavaScript)](/dev/presence#structure-javascript).

## Instalacja
1. Zainstaluj program [Git](https://git-scm.com/).
2. Zainstaluj program [Node.js](https://nodejs.org/en/) (instaluje się z [npm](https://www.npmjs.com/)).
3. Zainstaluj [TypeScript](https://www.typescriptlang.org/index.html#download-links) (otwórz konsole i wpisz `npm install -g typescript`).

## Klonowanie projektu
1. Otwórz terminal i wpisz `git clone https://github.com/PreMiD/Presences`.
2. Wybierz folder.
3. Otwórz go w twoim edytorze kodu.

## Tworzenie folderów i plików

1. Utwórz folder o **nazwie** (nie URL) usługi, którą chcesz obsługiwać.
2. Utwórz `obecności.ts` i `tsconfg.json` w środku.
3. Utwórz folder o nazwie `dist` wewnątrz
4. Utwórz plik `metadata.json` wewnątrz folderu `dist`.

## Wypełnianie w pliku tsconfig.json

Proszę umieścić następujący kod wewnątrz pliku `tsconfg.json`.
```javascript
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
}
```
Aby dowiedzieć się więcej o konfiguracji TypeScript kliknij [tutaj](/dev/presence/tsconfig).

## Wypełnianie pliku metadana.json

Kliknij [tutaj](/dev/presence#filling-in-the-metadatajson-file-2) , aby zobaczyć jak go wypełnić. Będziesz mógł łatwo kliknąć wstecz na dole wyjaśnienia.

Stworzyliśmy `metadata.json` twórcę pliku dla leniwego peeps [tutaj](https://eggsy.codes/projects/premid/mdcreator).

## Pierwsze kroki

```javascript
var presence = new Presence({
    clientId: "000000000000000000", //The client ID of the application created at https://discordapp. om/developers/applications
    Media Keys: false //Enable use and detection of media key presses
}),

strings = obecność. etStrings({
    play: "presence.playback.playing",
    pauza: "presence.playback. automatycznie"
    //Możesz użyć tego aby uzyskać przetłumaczone ciągi
});

/*

funkcja myOutsideHeavyLiftingFunction(){
    //Grab i przetwarzaj tutaj wszystkie dane

    // grabs elementów //
    // api call //
    // zmienne zestawy //
}

setInterval(10000, myOutsideHeavyLiftingFunction); 
//Uruchom funkcję oddziela się od zdarzenia UpdateData co 10 sekund, aby uzyskać i ustawić zmienne które pobierają aktualizację

*/


obecności. n("UpdateData", async () => {
    /*UpdateData jest zawsze strzelana, i dlatego powinien być używany jako cykl odświeżania lub `tick`. W miarę możliwości nazywa się to kilkakrotnie sekundą.

    Zaleca się ustawienie innej funkcji poza tą funkcją zdarzenia, która zmieni wartości zmiennych i wykona intensywne podnoszenie w przypadku wywołania danych z API. /

    var presenceData = {
        largeImageKey: "key", /*Klucz (nazwa pliku) dużego obrazu w obecności. Są one wgrywane i nazywane w sekcji Rich Presence Twojej aplikacji. nazywane Art Assets*/
        smallImageKey: "key", /*The key (file name) of the Large Image on the obecność. Są one wgrywane i nazywane w sekcji Rich Presence Twojej aplikacji. nazwane Assets*/
        smallImageText: "Some hover text", //Tekst wyświetlany przy najechaniu na mały obrazek
        : "Przeglądanie nazwy strony", //Górna część tekstu obecności
        stanowi: "Czytanie sekcja A", //Dolna część tekstu obecności
        zaczynami: 1577232000, //Unikalny znacznik czasu epoki dla kiedy zacząć liczyć się z
        endTimestamp: 1577151472000 //Jeśli chcesz pokazać pozostały czas zamiast Upłynęć, jest to niepowtarzalny znacznik czasu epoki, w którym kończy się czas
    }; /*Opcjonalnie możesz ustawić largeImageKey tutaj i zmienić resztę jako zmienne podwłaściwości, na przykład obecnośćSata. ype = "blahblah"; wpisz przykłady: szczegóły, stan itp.*/

    jeśli (obecnośćData. etails == null) {
        //To wystrzeli, jeśli nie ustawisz szczegółów obecności
        . etTrayTitle(); //Czyści tytuł zasobnika dla użytkowników
        obecności. etActivity(); /*Zaktualizuj obecność bez danych, tym samym wyczyść ją i zrób duży obraz ikoną aplikacji Discord, i tekst nazwy aplikacji Discorda*/
    } else {
        //Spowoduje to pożar jeśli ustawisz szczegóły obecności
        obecności. etActivity(obecnośćData); //Uaktualnij obecność o wszystkie wartości obiektu PresenceData
    }
});
```
Możesz skopiować to do pliku `obecności.ts` i edytować wartości. Ustawienie wszystkich wartości jest wykonywane wewnątrz zdarzenia updataData

Dla przykładów sugerujemy, aby przyjrzeć się kodom obecności, takim jak 1337x lub 9GAG.

Aby uzyskać więcej informacji o klasie Presence kliknij [tutaj](/dev/presence/class).

## Nie można uzyskać pewnych danych?!

Wiele stron internetowych używa [iframes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([Inlineframes](https://en.wikipedia.org/wiki/HTML_element#Frames)). Te tagi html mogą zawierać wiele źródeł, takich jak filmy. Ale za każdym razem nie są one istotne. Niektóre są ukryte lub po prostu nie są aktywnie używane. Sprawdź, czy potrafisz wyodrębnić, potrzebne informacje bez nich zanim wykonasz niepotrzebne prace.

1. Zaznacz je przez konsolę przeglądarki (upewnij się, że jesteś na karcie **Elements**).
2. Szukaj (<kbd>CTRL</kbd>+<kbd>F</kbd> (Windows) lub <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
3. Wykonaj `document.querySelectorAll("iframe")`.

Jeśli okaże się, że Twoje dane znajdują się w iFrame, musisz wykonać następujące czynności:
1. Utwórz plik `iframe.ts`.
2. Ustaw iFrame na `true` w pliku metadanych.
3. Wypełnianie pliku iFrame.
```javascript
var iframe = new iFrame();
iframe. n("Aktualizuj dane", async () => {
  /*
  Uzyskaj wszystkie potrzebne dane z iFrame zapisz je w zmiennych
  i przesłaj je za pomocą iframe. koniec
  */
  iframe.send({ //sending data
    video: video,
    time: video. oddawanie moczu
  }); 
});
```
4. Udostępnianie pliku obecności z pliku iFrame.
```javascript
obecność.on("iFrameData", dane => {
  iFrameVideo = data.video;
  currentTime = data.time;
});
```
**Uwaga:** To musi być umieszczone poza zdarzeniem updateData
## Kompilacja
Otwórz konsolę w folderze i wpisz `tsc -w` , aby skompilować `obecność.ts` w folderze `/dist`.

# Struktura (JavaScript)
## Klonowanie projektu
1. Zainstaluj program [Git](https://git-scm.com/).
2. Otwórz terminal i wpisz `git clone https://github.com/PreMiD/Presences`.
3. Wybierz folder.
4. Otwórz go w twoim edytorze kodu.

## Tworzenie folderów i plików

1. Utwórz folder o **nazwie** (nie URL) usługi, którą chcesz obsługiwać.
3. Utwórz folder o nazwie `dist` wewnątrz
4. Utwórz plik `metadata.json` i `obecność.js` w folderze `dist`.

## Wypełnianie pliku metadana.json

Kliknij [tutaj](/dev/presence#filling-in-the-metadatajson-file-2) , aby zobaczyć jak go wypełnić. Będziesz mógł łatwo kliknąć wstecz na dole wyjaśnienia.

Stworzyliśmy `metadata.json` twórcę pliku dla leniwego peeps [tutaj](https://eggsy.codes/projects/premid/mdcreator).

## Pierwsze kroki

```javascript
var presence = new Presence({
    clientId: "000000000000000000", //The client ID of the application created at https://discordapp. om/developers/applications
    Media Keys: false //Enable use and detection of media key presses
}),

strings = obecność. etStrings({
    play: "presence.playback.playing",
    pauza: "presence.playback. automatycznie"
    //Możesz użyć tego aby uzyskać przetłumaczone ciągi
});

/*

funkcja myOutsideHeavyLiftingFunction(){
    //Grab i przetwarzaj tutaj wszystkie dane

    // grabs elementów //
    // api call //
    // zmienne zestawy //
}

setInterval(10000, myOutsideHeavyLiftingFunction); 
//Uruchom funkcję oddziela się od zdarzenia UpdateData co 10 sekund, aby uzyskać i ustawić zmienne które pobierają aktualizację

*/


obecności. n("UpdateData", () => {
    //UpdateData jest zawsze strzelana, i dlatego powinien być używany jako cykl odświeżania lub `tick`. W miarę możliwości nazywa się to kilkakrotnie sekundą.

    //Zaleca się skonfigurowanie innej funkcji poza tą funkcją zdarzenia, która zmieni wartości zmiennych i wykona intensywne podnoszenie jeśli dzwonisz dane z API.

    var PresenceData = {
        largeImageKey: "key", /*The key (file name) of the Large Image in the obecność. Są one wgrywane i nazywane w sekcji Rich Presence Twojej aplikacji. nazywane Art Assets*/
        smallImageKey: "key", /*The key (file name) of the Large Image on the obecność. Są one wgrywane i nazywane w sekcji Rich Presence Twojej aplikacji. nazwane Assets*/
        smallImageText: "Some hover text", //Tekst wyświetlany przy najechaniu na mały obrazek
        : "Przeglądanie nazwy strony", //Górna część tekstu obecności
        stanowi: "Czytanie sekcja A", //Dolna część tekstu obecności
        zaczynami: 1577232000, //Unikalny znacznik czasu epoki dla kiedy zacząć liczyć się z
        endTimestamp: 1577151472000 //Jeśli chcesz pokazać pozostały czas zamiast Upłynęć, jest to niepowtarzalny znacznik czasu epoki, w którym kończy się czas
    }; /*Opcjonalnie możesz ustawić largeImageKey tutaj i zmienić resztę jako zmienne podwłaściwości, na przykład obecnośćSata. ype = "blahblah"; wpisz przykłady: szczegóły, stan itp.*/

    jeśli (obecnośćData. etails == null) {
        //To wystrzeli, jeśli nie ustawisz szczegółów obecności
        . etTrayTitle(); //Czyści tytuł zasobnika dla użytkowników
        obecności. etActivity(); /*Zaktualizuj obecność bez danych, tym samym wyczyść ją i zrób duży obraz ikoną aplikacji Discord, i tekst nazwy aplikacji Discorda*/
    } else {
        //Spowoduje to pożar jeśli ustawisz szczegóły obecności
        obecności. etActivity(obecnośćData); //Uaktualnij obecność o wszystkie wartości obiektu PresenceData
    }
});
```
Możesz skopiować to do pliku `presence.js` i edytować wartości. Ustawienie wszystkich wartości jest wykonywane wewnątrz zdarzenia updataData

Dla przykładów sugerujemy, aby przyjrzeć się kodom obecności, takim jak 1337x lub 9GAG.

Aby uzyskać więcej informacji o klasie Presence kliknij [tutaj](/dev/presence/class).

## Nie można uzyskać pewnych danych?!

Wiele stron internetowych używa [iframes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([Inlineframes](https://en.wikipedia.org/wiki/HTML_element#Frames)). Te tagi html mogą zawierać wiele źródeł, takich jak filmy. Ale za każdym razem nie są one istotne. Niektóre są ukryte lub po prostu nie są aktywnie używane. Sprawdź, czy potrafisz wyodrębnić, potrzebne informacje bez nich zanim wykonasz niepotrzebne prace.

1. Zaznacz je przez konsolę przeglądarki (upewnij się, że jesteś na karcie **Elements**).
2. Szukaj (<kbd>CTRL</kbd>+<kbd>F</kbd> (Windows) lub <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
3. Wykonaj `document.querySelectorAll("iframe")`.

Jeśli okaże się, że Twoje dane znajdują się w iFrame, musisz wykonać następujące czynności:
1. Utwórz plik `iframe.js`.
2. Ustaw iFrame na `true` w pliku metadanych.
3. Wypełnianie pliku iFrame.
```javascript
var iframe = new iFrame();
iframe. n("Aktualizuj dane", () => {
    /*
    Uzyskaj wszystkie dane, których potrzebujesz z iFrame zapisz je w zmiennych
    i następnie przesłaj je za pomocą iframe. koniec
    */
    iframe. end({ //wysyła dane
        wideo: wideo,
        czas: wideo. oddawanie moczu  
    });
});
```
4. Udostępnianie pliku obecności z pliku iFrame.
```javascript
obecność.on("iFrameData", dane => {
  iFrameVideo = data.video;
  currentTime = data.time;
});
```
**Uwaga:** To musi być umieszczone poza zdarzeniem updateData
# Wypełnianie pliku metadana.json
Stworzyliśmy `metadata.json` twórcę pliku dla leniwego peeps [tutaj](https://eggsy.codes/projects/premid/mdcreator). Nadal sugeruje się przeczytanie tego, abyś wiedział, jak to działa.

```javascript
{
  "author": {
    "name": "USER",
    "id": "ID"
  },
  "współtwórcy": [{
    "name": "USER",
    "id": "ID"
  }],
  "service": "SERVICE",
  "description": {
    "en": "DESCRIPTION"
  },
  "url": "URL",
  "version": "VERSION",
  "logo": "URL",
  "thumbnail": "URL",
  "color": "#HEX000",
  "tags": ["KATEGORY", "TAG"],
  "kategoria": "KATEGORY",
  "regExp": "REGEXP",
  "iFrameRegExp": "REGEXP",
  "iframe": false
}
```

Skopiuj powyższy kod i umieść go w pliku `metadata.json`. Musisz teraz edytować wartości właściwości. Pamiętaj, że następujące właściwości są opcjonalne, aby mieć w twoich `metadanych. syn` , jeśli nie planujesz ich użycia, musisz je usunąć.
- `współtwórcy`
- `regExp`
- `iframe`
- `iFrameRegExp`

**Wyjaśnienie niektórych ustawień wartości:**
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
      <td style="text-align:left">Powinno zawierać obiekt o nazwie <code></code> i <code>id</code> dewelopera obecności. Nazwa to nazwa użytkownika Discorda bez identyfikatora (#0000). Użytkownik <code>id</code> może zostać skopiowany z Discorda poprzez włączenie trybu programisty
        i kliknięcie prawym przyciskiem myszy na Twoim profilu.</td>
      <td style="text-align:left"><code>Tablica&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>Tak</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>serwis</b>
      </td>
      <td style="text-align:left">Tytuł usługi wspieranej przez tę obecność. <br>(Musi być taka sama nazwa jak folder, w którym wszystko jest w)</td>
      <td style="text-align:left"><code>Ciąg znaków</code>
      </td>
      <td style="text-align:left"><code>Nie</code>
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
      <td style="text-align:left">Adres URL usługi.<br><b>Przykład:</b><code>vk. om</code><br>
        <b>Ten adres URL musi pasować do adresu URL witryny, ponieważ wykryje czy jest to strona do wstrzyknięcia skryptu.</b><br> Nie dodaj <b></b> <code>https://</code> lub <code>http://</code> wewnątrz adresu URL ani ukośnik na końcu:
<code>https://premid. pp/</code> -> <code>premid.app</code><br>
<b>Uwaga</b>: Niektóre adresy URL mogą mieć <code>www.</code> lub coś innego przed ich domeną. <b>NIE</b> zapomnij go dodać!<br>
Możesz dodać wiele adresów URL wykonując następujące czynności:<br>
<code>["URL1", "URL2", "ETC. ]</code><br>
Możesz również użyć regExp znanego również jako Regex dla tego zadania, objaśnionego poniżej.
      </td>
      <td style="text-align:left"><code>Ciąg, Tablica&lt;String&gt;</code>
      </td>
      <td style="text-align:left"><code>Nie</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b>
      </td>
      <td style="text-align:left">Ciąg wyrażenia regularnego używany do dopasowania adresów URL.<br>
      RegExp lub znany również jako Regex, może być użyty, jeśli strona ma wiele subdomen.<br>
Możesz użyć następującego regExp za to:<br>
<code>([a-z0-9]+)[.]domena[.]TLD"</code><br>
TLD stojąca dla domeny najwyższego poziomu dla osi: . om .net<br> 
<code>([a-z0-9]+)</code> oznacza cokolwiek od 0 do 9.<br>
        Możesz przetestować swój regExp na <a href="https://regex101.com/">Regex101</a></td>
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
      <td style="text-align:left">Ciąg używany do reprezentowania kategorii, pod którą znajduje się obecność. Zobacz poprawne katergorie <a href="https://docs.premid.app/dev/presence/metadata#presence-categories">tutaj</a>.</td>
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
      <td style="text-align:left">Selektor wyrażenia regularnego, który wybiera iframes do wstrzyknięcia. Zobacz regExp aby uzyskać więcej informacji.</td>
      <td style="text-align:left"><code>Ciąg znaków</code>
      </td>
      <td style="text-align:left"><code>Tak</code>
      </td>
    </tr>
  </tbody>
</table>

Kliknij [tutaj](/dev/presence#filling-in-the-metadatajson-file) , aby wrócić do wyjaśnienia TypeScript. Kliknij [tutaj](/dev/presence#filling-in-the-metadatajson-file-1) , aby wrócić do wyjaśnienia JavaScript.

# Ładowanie obecności
1. Otwórz wyskakujące okno i przytrzymaj przycisk <kbd>Shift</kbd> na klawiaturze.
2. **Presence** pojawi się w sekcji Presences.
3. Kliknij na to, gdy nadal trzymasz przycisk <kbd>Shift</kbd>.
4. Wybierz folder /dist swojej obecności.

# Kilka pomocnych rzeczy
## Szybkie przeładowanie
Witryna, którą tworzysz, jest automatycznie odświeżana za każdym razem, gdy zapiszesz plik w folderze.

## Debugowanie
- Możesz umieścić `konsoli.log("Test");` między kodem i sprawdzić, czy twoja konsola przeglądarki daje Ci to wynik. W przypadku odpowiedzi twierdzącej kontynuuj i spróbuj ponownie po następnej funkcji. Jeśli nie wystąpi powyższy błąd.
- Jeśli to nie pomoże Tobie poproś programistę obecności na naszym [serwerze Discorda](https://discord.gg/PreMiD) o pomoc.

# Pliki objaśnione
- [Klasa Presence](/dev/presence/class)
- [Klasa iFrame](/dev/presence/iframe)
- [Plik metadanych](/dev/presence/metadata)
- [Konfiguracja TypeScript](/dev/presence/tsconfig)
{.links-list}