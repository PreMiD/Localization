---
title: Rozwój statusów
description:
published: tak
date: 2020-04-30T17:41:23.702Z
tags:
---

> Wszystkie statusy są trzymane tutaj: https://github.com/PreMiD/Presences 
> 
> {.is-info}

Wersja `2.x` wprowadza [sklep z statusami](https://premid.app/store). Użytkownicy mają teraz możliwość ręcznego dodawania lub usuwania ich ulubionych statusów za pośrednictwem interfejsu użytkownika z [strony](https://premid.app/).

# Wytyczne
> If you do **NOT** follow the guidelines, a `Presence Verifier` will request the proper changes, or will have to close it under certain circumstances. 
> 
> {.is-warning}

> When you make pull requests about adding or modifying existing Presences, you **MUST** include a screenshot. However, modifications to a Presence's `metadata.json` or `tsconfig.json` files do **NOT** require a screenshot. _Your screenshot **MUST** be directly uploaded to GitHub with the pull request, do **NOT** use third-party image sharing sites._ 
> 
> {.is-warning}

When publishing Presences to this GitHub, we require you to follow a set of guidelines. Dla niektórych te surowe zasady mogą wydawać się surowe. However, the implementation of these rulesets will keep us and the users from running into any issues.

## Tworzenie
> Kod, który zapisałeś MUSI być *dobrze napisany* i *czytelny*. `DeepScan` na GitHub zgłosi problemy z jakością kodu do `Zespołu Weryfikacji Prezentacji`. Zalecamy, aby Twój fork był aktualny podczas pobierania żądań, pomoże to ograniczyć fałszywe dodatnie. 
> 
> {.is-warning}

- Pull request **MUSI** być kompletny, musisz mieć prawidłową strukturę plików, szkice **NIE** dozwolone. Including the `presence.ts` file, `tsconfig.json` file ,`dist` folder, `presence.js` file, and `metadata.json` file, which is represented in the following example schema:
```bash
presence
├── dist
│   ├── metadata.json
│   └── presence.js
├── presence.ts
└── tsconfig.json
```
or if you're using `iframe`:
```bash
presence
├── dist
│   ├── metadata.json
│   ├── presence.js
│   └── iframe.js
├── presence.ts
├── iframe.ts
└── tsconfig.json
```

Zanim zaczniesz tworzyć swoj status, pamietaj o następującej liście.
- The Presence **MUST** be related to the site you have chosen.
- The Presence **MUST NOT** be of any illegal sites. Wliczając czynniki stresujące, narkotyki, dziecięcej pornografi, itp.
- The Presence metadata **MUST** have well-written content, including valid titles, and descriptions.
- The media you include (icon/thumbnail) **MUST** be related to the site and should be understandable in terms of size and quality.
- The file structure **MUST** be clean and managed, do **NOT** have random files that provide nothing to the Presence's function.
- The Presence **MUST NOT** have any malicious intentions. These include stealing/leaking private information, negatively affecting the behavior of the site, etc.
- If you design a Presence for a site that happens to change in the future and as a result, potentially breaking your Presence, you **ARE** responsible for updating it to work as expected. If you do **NOT** fix it within seven days, other Presence developers are allowed to **OVERWRITE** it to comply with the changes.
- The Presence **MUST** be tested before publishing to confirm that everything works as expected.
- Your Presence **MUST** have SFW images and descriptions regardless if it is NSFW or not. If your Presence is about an NSFW site, please add the `nsfw` tag to your metadata.
- Your Presence **CANNOT** manipulate local storage on the browser.
- Your Presence may use cookies to store data, you have to prefix all of them with `pmd_`.
- The name of your Presence **MUST** be the name of your Presence's directory name. For example, a Presence named `Google Docs` must have a directory of `/Google Docs/`. (you should include all spaces, periods, commas, and any other special characters)

## Modyfikacja
> You MUST change the version in the **metadata** to be a higher value from previous version when making changes to either the **presence.ts**/**presence.js** or **metadata.json**. 
> 
> {.is-warning}

In some situations, Presences may behave unexpectedly or could use some minor changes to improve their functionality. Here is a compiled list that you **MUST** follow to modify Presences.

- You are **NOT** allowed to rewrite a Presence or change its author. If the Presence author was banned from the official server or hasn't made the required changes in seven days, you may contact a `Presence Verifier` to see if you can to rewrite the Presence of your choice.
- Anyone may provide hotfixes to fix bugs; however, try **NOT** to make changes to code that does **NOT** need to be fixed. Valid modifications are, but **NOT** limited to, _missing paths_, _typos_, _missing images_, etc.
- If you make modifications to a Presence and change at least a **QUARTER** of the Presence's codebase, you are allowed to add yourself as a contributor. Skontaktuj się z `Weryfikatorem Presence`, aby uzyskać więcej informacji na ten temat.
- Upewnij się, że zmiany są przydatne. These may include fixes (code and typos), additions (descriptions and tags), etc. Do **NOT** change images if they are not outdated and have a decent resolution.
- Potwierdź, że zmiany działają przed publikacją. Do **NOT** create pull requests without knowing the outcome of your changes.

# Weryfikacja

> Jeśli chcesz się z kimś skontaktować, użyj naszego oficjalnego serwera Discord. All `Presence Verifiers` will have a unique role in their profile.

For your Presence to reach the stores, it **MUST** go through a process on GitHub to confirm that it works as expected. Oto kilka rzeczy, na które należy zwrócić uwagę przy składaniu żądania "pull request".

1. It takes two verifiers to confirm that your Presence is up to standards. If you happen to get change requests, make the proper effort to fix it, or it will **NOT** be added.
2. Jeśli poprosimy o zmiany, a Twoje żądanie "pull request" przekroczy ** 7 dni nieaktywności ** bez wprowadzenia niezbędnych zmian, będziemy zmuszeni je zamknąć.
3. You are allowed to take screenshots of changes made with the help of another user, and you are allowed to stitch screenshots for viewing pleasure. (e.g., its author in case you can't access it for any reason).
4. If it is an update or patch, the screenshot **MUST** show the new additions working, **NOT** any old features from previous pull requests.
5. The provided screenshots should be real, **NOT** edited.
6. Każdy wprowadzony kod, który zostanie połączony z tym repozytorium będzie licencjonowany na licencji **Mozilla Public License 2.0**.
7. Presences for free domains or hosts (e.g., .TK, [all free Freenom domains], .RF.GD, etc) are **NOT** allowed at all, exceptions can be made if a proof is presented showing that they paid for the domain.
8. The `smallImageKey` and `smallImageText` fields are intended to provide additional/secondary context (such as "playing"/"paused" for video sites, "browsing" for regular sites, and other cases) not to promote Discord profiles or anything unrelated to PreMiD.
9. The requirements for logos are 1:1 (Square) in 512px, thumbnails, however, should either be [wide promotional cards](https://i.imgur.com/3QfIc5v.jpg) or simply [screenshots](https://i.imgur.com/OAcBmwW.png) if the first is **NOT** available.
10. Presences should at least have one tag. Tags must **NOT** include any spaces, slashes, single/double quotation marks, Unicode characters, and should always be lowercase.
11. The `url` field **MUST NOT** include `http://` or `https://`, neither the parameters (e.g. a Presence for `https://www.google.com/search?gws_rd=ssl` will only have `www.google.com` in the `url` field).
12. Descriptions and tags should always be in an array, even when it's only one element. The `url` field, however, should only be a string if it's one domain.
13. Tags should be used as alternate names whenever possible, and shortened versions must be included as well (e.g., if an Amazon Presence had included AWS support, it would have its tags like "amazon-web-services" and "aws").
14. Unstable sites that constantly change APIs/domains, randomize HTML elements, or just still being in heavy development are not allowed and will be removed from the store.
15. The logo and thumbnail on your Presence **MUST** either be `i.imgur.com`, from a CDN that **YOU** own, or from a CDN that gives you permission to **CHANGE** image files.
16. Verifiers will check if the Presence contains an `__awaiter` function at the beginning of the code (which comes from an earlier version of ECMAScript), whether it's in Typescript or Javascript, and in addition to that, make sure the `UpdateData` event used is similar to this:

```ts
presence.on("UpdateData", async () => {
  /*...*/
  // Always use await when using async in the event
  data.smallImageText = (await strings).playing;
  /*...*/
});
```

It should **NOT** be this:

```ts
presence.on("UpdateData", () => __awaiter(this, void 0, void 0, function* () {
  /*...*/
  // Never use yield
  data.smallImageText = (yield strings).playing;
  /*...*/
});
```

17. When **Deepscan** throws a lot of errors (and it will), it is mostly an issue with your branch being outdated, always update your GitHub fork when making pull requests.
18. Always make sure the version number follows [semantic versioning standards](https://semver.org), which translates to the following scheme : `<NEW-FEATURE>.<HUGE-BUGFIX>.<SMALL-BUGFIX-OR-METADATA-CHANGES>`. anything else like `1.0.0.1`, `1.0`, `1`, `1.0.0-BETA` or changing `1.0.0` to `2.0.0` on a bug fix/small change is **NOT** permitted.
19. Low-quality Presences (or ones with one context) are **NOT** allowed (e.g., only showing the logo and some text but never changing again).
20. **NEVER** use custom functions when [native variants are available](https://docs.premid.app/dev/presence#files-explained); this makes sure fixes on the extension level also apply to your Presences, you're free to use whatever you need if you do not find them listed in the docs.
21. It is **NOT** recommended to use comments on Javascript Presences unless necessary (TypeScript ones or their compiled files are fine), as it reduces code readability and increases file sizes.
22. Declare the Presence const **BEFORE** everything to avoid such rare issues that may occur; this is not a requirement by design so it could be removed in the future.
23. Presences that target internal browser pages (like Chrome Web Store, `chrome://`, `about:` pages, etc) are **NOT** allowed as they require an _experimental flag_ to be enabled on the user's end and could potentially cause damage to their browsers.
24. It is **FORBIDDEN** to code Presences for a site without adding support to its main language (e.g., a YouTube Presence coded with support for Portuguese and Japanese, but not English itself).

After meeting all of the guidelines and having your Presence reviewed at least twice, your Presence will be merged with the store.

# Structure
All presence are coded in [TypeScript](https://www.typescriptlang.org/). [TypeScript](https://www.typescriptlang.org/) has some extra spicy type definitions over JavaScript, so fixing and identifying bugs is way easier.

## Instalacja
1. Zainstaluj program [Git](https://git-scm.com/).
2. Zainstaluj program [Node.js](https://nodejs.org/en/) (instaluje się z [npm](https://www.npmjs.com/)).
3. Zainstaluj [TypeScript](https://www.typescriptlang.org/index.html#download-links) (otwórz konsole i wpisz `npm install -g typescript`).

## Klonowanie projektu
1. Open a terminal and type `git clone https://github.com/PreMiD/Presences`.
2. Wybierz folder.
3. Otwórz go w twoim edytorze kodu.

## Tworzenie folderów i plików

1. Utwórz folder o **nazwie** (nie URL) usługi, którą chcesz obsługiwać.
2. Stwórz wewnątrz plik `presence.ts` i `tsconfig.json`.
3. Utwórz wewnątrz katalog o nazwie `dist`.
4. Utwórz plik `metadata.json` wewnątrz folderu `dist`.

## Wypełnianie w pliku tsconfig.json
Umieść następujący kod w pliku `tsconfig.json`.
```javascript
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist"
  }
}
```
Aby uzyskać więcej informacji na temat konfiguracji TypeScript, kliknij [tutaj](/dev/presence/tsconfig).

## Wypełnianie pliku metadana.json
Stworzyliśmy kreator plików `metadata.json` dla leniwych użytkowników [tutaj](https://eggsy.codes/projects/premid/mdcreator). Nadal zaleca się przeczytanie tego, abyś wiedział, jak to działa.

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
      <td style="text-align:left">URL of the service.<br><b>Example:</b><code>vk.com</code><br>
        <b>This URL must match the URL of the website as it will detect whether or not this is the website to inject the script to.</b><br> Do <b>NOT</b> add <code>https://</code> or <code>http://</code> inside of the URL nor a slash at the end:
<code>https://premid.app/</code> -> <code>premid.app</code><br>
<b>Note</b>: Some URLs may have <code>www.</code> or something else in front of their domain. Do <b>NOT</b> forget to add it!<br>
You can add multiple URLs by doing the following:<br>
<code>["URL1", "URL2", "ETC."]</code><br>
You could also use regExp also known as Regex for this task, explaned further below.
      </td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code>
      </td>
      <td style="text-align:left"><code>Nie</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b>
      </td>
      <td style="text-align:left">A regular expression string used to match urls.<br>
      regExp or also known as Regex, can be used if a website has multiple subdomains.<br>
You could use the following regExp for that:<br>
<code>([a-z0-9]+)[.]domain[.]TLD"</code><br>
TLD standing for Top Level Domain for axample: .com .net<br> 
<code>([a-z0-9]+)</code> means anything from a to z and from 0 to 9.<br>
        You can test your regExp at <a href="https://regex101.com/">Regex101</a></td>
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

Stworzyliśmy kreator plików `metadata.json` dla leniwych użytkowników [tutaj](https://eggsy.codes/projects/premid/mdcreator).

## Pierwsze kroki

```javascript
var presence = new Presence({
    clientId: "000000000000000000" //ID klienta aplikacji utworzonej na https://discordapp.com/developers/applications
}),

strings = presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
    //Możesz użyć tego, aby uzyskać przetłumaczone ciągi
});

/*

function myOutsideHeavyLiftingFunction(){
    //Tutaj możesz pobrać i przetworzyć wszystkie swoje dane

    // zbieranie danych z stron //
    // funkcje api //
    // zmienne //
}

setInterval(10000, myOutsideHeavyLiftingFunction); 
//Uruchom funkcję oddzielną od zdarzenia UpdateData co 10 sekund, aby uzyskać i ustawić zmienne, które pobiera UpdateData

*/


presence.on("UpdateData", async () => {
    /*funkcja UpdateData zawsze działa i powinna być używana jako refresh funkcji. Wywołuje się ona co parę sekund, gdzie to możliwe.

    It is recommended to set up another function outside of this event function which will change variable values and do the heavy lifting if you call data from an API.*/

    var presenceData = {
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
Możesz skopiować to do pliku `presence.ts` i edytować wartości. Setting all the values is done inside of the updataData event.

Dla przykładów sugerujemy przyjrzeć się kodom Presence, takim jak: 1337x lub 9GAG.

Aby uzyskać więcej informacji o klasie Presence, kliknij [tutaj](/dev/presence/class).

## Nie można uzyskać pewnych danych?!

A lot of websites are using [iframes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([Inlineframes](https://en.wikipedia.org/wiki/HTML_element#Frames)). These html tags can contain multiple sources such as videos. But they're not relevant every time. Some are hidden or just not actively used. Check if you can extract, the information you need, without them before you do unnecessary work.

1. Sprawdź je w konsoli przeglądarki (upewnij się, że jesteś na karcie **Elementy**).
2. Search (<kbd>CTRL</kbd>+<kbd>F</kbd> (Windows) or <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
3. Execute `document.querySelectorAll("iframe")`.

Jeśli okaże się, że Twoje dane znajdują się w ramce iFrame, wykonaj następujące czynności:
1. Create a `iframe.ts` file.
2. Set iFrame to `true` in your metadata file.
3. Filling in your iFrame file.
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
4. Making your presence file receive data from the iFrame file.
```javascript
presence.on("iFrameData", data => {
  iFrameVideo = data.video;
  currentTime = data.time;
});
```
**Uwaga:** Należy to umieścić poza zdarzeniem updateData.
## Kompilacja
Otwórz konsolę w swoim folderze i wpisz `tsc -w` aby skompilować `presence.ts` w folderze `/dist`.

# Loading the presence
1. Open the popup and hold the <kbd>Shift</kbd> button on your keyboard.
2. **Load Presence** will appear in the Presences section.
3. Click on it while you are still holding the <kbd>Shift</kbd> button.
4. Select the /dist folder of your presence.

# Some helpful things
## Hot-reloading
Witryna, którą rozwijasz, automatycznie ładuje się ponownie za każdym razem, gdy zapisujesz plik w folderze.

## Debugging
- Możesz umieścić `console.log („Test”);` między kodem i sprawdzić, czy konsola przeglądarki daje ci taki wynik. Jeśli tak, kontynuuj i spróbuj ponownie po następnej funkcji. Jeśli nie, oznacza to błąd powyżej.
- Jeśli to nie pomoże, poproś o pomoc programistę Presence na naszym [serwerze Discord](https://discord.gg/WvfVZ8T).

# Files explained
- [Klasa Presence](/dev/presence/class)
- [Klasa iFrame](/dev/presence/iframe)
- [Plik Metadata](/dev/presence/metadata)
- [Konfiguracja TypeScript](/dev/presence/tsconfig)
{.links-list}
