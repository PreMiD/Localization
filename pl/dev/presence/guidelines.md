---
title: Wytyczne dotyczące presence
description: Reguły, których muszą przestrzegać wszyscy twórcy Presence, aby ich Presence zostały zaakceptowane.
published: true
date: 2021-03-06T15:01:04.274Z
tags:
editor: markdown
dateCreated: 2021-02-26T21:54:41.573Z
---

<div align="center">
    <img src="https://github.com/PreMiD.png?size=2048" width="128px" style="max-width:100%;">
    <h3 style="font-size: 2rem; margin-bottom: 0">Wytyczne dotyczące presence</h3>
    <h4 style="margin-top: 0">Revision 3</h4>
    <br />
</div>

# Wytyczne

Podczas publikowania Presences do [naszego repozytorium GitHub](https://github.com/PreMiD/Presences)wymagamy od Ciebie przestrzegania zbioru wytycznych. Dla niektórych te ścisłe zasady mogą wydawać się surowe. Jednak wdrożenie tych zestawów reguł powstrzyma nas i użytkowników od problemów.

# Tworzenie

Ogólne zasady rozwijania statusów są następujące:

- Statusy **muszą** być powiązane z wybraną witryną.
- Statusy **nie mogą** być tworzone dla nielegalnych stron internetowych. (np. stresory, handel narkotykami, dziecięca pornografia, itp.)
- Struktura plików musi być czysta i uporządkowana, nie powinna zawierać plików, które nie są wymagane. (np. foldery vscode i git, pliki graficzne i tekstowe itp.)
- Musisz mieć odpowiednią strukturę plików, wersje robocze **są niedozwolone**.
- Statusy dla stron z ((`.onion` TLD)) lub stron z darmowymi domenami/hostami (np. `.TK` [wszystkie bezpłatne domeny Freenom], `.RF`, `.GD`, itp.) są **niedozwolone**, można zrobić wyjątek, jeśli zostanie przedstawiony dowód, że zapłacono za domenę.
- The domain of the presence must be at least 2 months old.
- Status kierowane na wewnętrzne strony przeglądarki (takie jak Chrome Web Store, `chrome://`, strony `about:`, itp.) **są niedozwolone**, ponieważ wymagają włączenia eksperymentalnej flagi po stronie użytkowników i mogą potencjalnie spowodować uszkodzenie ich przeglądarki.
- Statusy wspierające tylko jedną sub-domenę **są niedozwolone** ponieważ mogą nie działać na innych stronach (takich jak strona główna), wyjątek mogą stanowić strony kontaktowe lub z polityką prywatności (czyli takie które nie są często używae) lub strony gdzie inna zawartość jest niezwiązana z sub-domeną. (np. strony wiki)
- Statusy dla stacji radiowych są dozwolone tylko w przadku kiedy stacja ma conajmniej 100 słuchaczy tygodniowo i conajmije 15 słuchaczy na raz.
- Statusy o niskiej jakości (lub z małą ilością danych) **są niedozwolone** (np. pokazywanie logo i tekstu i nie zmienianie go już więcej)
- With the `buttons` release, we require some guidelines for them:
  - Redirects to main page are prohibited.
  - Promoting websites by them is prohibited.
  - They can't show addinational data when you can't show them in `state` or `details`.
- Załączenie folderu `dist`, pliku, `presence.ts`, pliku `iframe.ts` i pliku `metadata.json` jest obowiązkowe w taki sposób aby struktura plików naśladowała poniższy schemat:

```bash
presence
├── dist
│   └── metadata.json
├── presence.ts
└── tsconfig.json
```

lub jeżeli używasz pliku `iframe.ts`:

```bash
presence
├── dist
│   └── metadata.json
├── presence.ts
├── iframe.ts
└── tsconfig.json
```

## [**metadata.json**](/dev/presence/metadata)

> Dla wygody naszych twórców presence dostarczyliśmy schemat, którego możesz użyć do weryfikacji integralności pliku `metadata`. Jest to całkowicie opcjonalne i nie jest wymagane w procesie weryfikacji.

> Zalecane jest zorganizowanie pliku `metadata` w formacie przedstawionym poniżej, musi on także zawierać gramatycnie poprawne nazwy serwisów, opisy, tagi i pola ustawień. Wszystkie pliki które nie śledzą schematu **nie** są dozwolone.

> Presences stron internetowych z treściami nieodpowiednimi dla dzieci **muszą** mieć tag `nsfw`, a logo/miniaturka **nie** może zawierać żadnej z tych treści.

Każdy presence posiada plik metadanych nazwany `metadata.json`, ten plik ma ścisły schemat. Jego przykład można znaleźć poniżej:

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
      "id": "multiLanguage",
      "multiLanguage": true
    }
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

> If a field is listed as optional on the [documentation](https://docs.premid.app/en/dev/presence/metadata) or there is a `*` next to the key, and your presence uses the default value for it, do not include it in the `metadata` file. (np. statusy bez wsparcia dla iframe nie potrzebują pola `iframe`)

> Wszystkie obrazy w pliku `metadata`, muszą być hostowane na `i.imgur.com`. Using content hosted on the website is **not** permitted as they can change the paths and files unwillingly.

Lista pól i ich zasad znajduje się poniżej:

### **`$schema`**

- The schema _key_ **must** include a dollar sign at the beginning of it, this will signal your text editor that you want to validate your JSON file against a model. _As stated earlier, you do not need to include a schema, but if you include it you must take this into account._

### **`author`**

- The ID _value_ **must** be your Discord snowflake ID. You can get it by enabling [developer mode](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-). _Please do **not** confuse this with your application ID, which is only for your presence._

### **`*contributors`**

- **Nie** dodawaj siebie jako współtwórcy, ani nie dodawaj kogoś innego, dopóki nie pomógł w presence.

### **`service`**

- The service name **must** be the name of the presence directory. For example, if the presence is located at `/websites/Y/YouTube/`, the service name must be `YouTube`.
- You **cannot** use the url as the service name unless the website uses the url as its official name. Jeżeli nazwa nie jest opisowa i nie może być uznana za jasną, **należy** użyć adresu URL. (np. `YouTube` jest dozwolony, ponieważ jest to oficjalna nazwa i opis, a `youtube.com` już nie jest. `Top` is a non-descriptive name, so using the url `top.gg` is **required**.)
- If service has some explicit branding rules of their name, you should follow them.

### **`*altnames`**

- **Only** use this in scenarios where a website goes under multiple official names (e.g. Pokémon and 포켓몬스터). *Skrócono* wersje nazw naszych usług pod `tagami`.

### **`description`**

- **Wszystkie** presence **muszą** mieć angielski opis bez względu na preferowany język na stronie.
- Do **not** try and translate the description yourself unless you know that language, translators will modify your `metadata.json` and change the descriptions if necessary.

### **`url`**

- The url **must** be a string if the website only uses one domain. If the website uses multiple, make this an array and specify each one.
- Do **not** include protocols in the url (for e.g., `http` or `https`), and do not include query parameters in the url (for e.g., `www.google.com/search?gws_rd=ssl` which should be `www.google.com`)

### **`version`**

- Zawsze upewnij się, że numer wersji spełnia [semantyczne standardy wersjonowania](https://semver.org), co przekłada się na następujący schemat: `<NEW-FEATURE>.<HUGE-BUGFIX>.<SMALL-BUGFIX-OR-METADATA-CHANGES>`. Wszystko inne niż `1.0.0.1`, `1.0`, `1`, `1.0.0-BETA` lub zmiana z `1.0.0` na `2.0.0` przy naprawie błędów/małej zmianie **nie** jest dozwolone.
- Wersja **musi** zawsze zaczynać się od `1.0.0`, inne wersje **nie** będą dozwolone.

### **`logo`**

- Logo **musi** być kwadratowym obrazem o proporcjach `1: 1`.
- Obraz **musi** mieć minimalną rozdzielczość `512x512` pikseli. Możesz zmienić rozmiar obrazu za pomocą narzędzia takiego jak [waifu2x](http://waifu2x.udp.jp/).

### **`thumbnail`**

- The thumbnail **should** preferably be a [wide promotional card](https://i.imgur.com/3QfIc5v.jpg) or a [screenshot](https://i.imgur.com/OAcBmwW.png) if the first is **not** available.

### **`color`**

- The color **must** be a hexadecimal value between `#000000` and `#FFFFFF`.
- The color string **must** be prepended with a hash symbol.

### **`tags`**

- **Wszystkie** statusy muszą mieć przynajmniej _jeden_ tag.
- Tags must **not** include any spaces, slashes, single/double quotation marks, Unicode characters, and should always be lowercase.
- Tags **should** preferably include alternate service names to make searching easier (for e.g., if an Amazon presence had included AWS support, it would have its tags like `amazon-web-services` and `aws`)
- Jesteś **zobowiązany** do dodania tagu `NSFW`, jeżeli presence jest dla strony NSFW</strong>.

### **`category`**

- The category **must** be one of the following listed on the [documentation](/dev/presence/metadata#presence-categories).
- The presence must use a category that matches the content of the website. (np. nie używaj `anime`, gdy strona nie jest powiązana z anime).

### **`*regExp`** <br /> **`*iFrameRegExp`**

- Wyrażenia regularne **muszą** być prawidłowe. Proszę przetestować swoje wyrażenia za pomocą narzędzi wymienionych w [dokumentacji](https://docs.premid.app/en/dev/presence/metadata#testing).

### **`readLogs`**

- Must be `boolean` value (e.g. `true` or `false`).
- Enables logs for your presence.

### **`ostrzeżenie`**

- **Zawsze** deklaruj nową instancję klasy `Presence` przed jakąkolwiek inną zmienną, aby uniknąć problemów, które mogą wystąpić; nie jest to wymóg konstrukcyjny, więc w przyszłości można go usunąć.
- Example of presence using this metadata variable is `VLC`.

### **`settings`**

- Jeśli zdecydujesz się utworzyć ciąg formatu (np. `%song% by %artist%`), musisz mieć zmienne otoczone znakiem procentowym po obu stronach. Takie zmienne, jak `%var`, `var%`, lub `%%var%%` i wszystko pomiędzy **nie** są dozwolone ze względu na standaryzację.
- The name of the settings must **not** be in all capital letters. For example, names such as `SHOW BROWSING STATUS` will **not** be permitted; however, names such as `Show Browsing Status` or `Show browsing status` are permitted.
- If you are using the `multiLanguage` option it can have the following types:
  - **Boolean** type which will only enable strings from [`general.json`](https://github.com/PreMiD/Localization/blob/master/src/Presence/general.json) from the Localization repo or from the presence file (e.g. when the name of the presence is YouTube, the extension will get strings from `youtube.json` too.)
  - **String** type (e.g. `youtube`) which will specify the name of the files that you want to get strings from.
  - **Array<String>** type (e.g. `["youtube", "discord"]`) which will specify the name of the files that you want to get strings from.

## [**presence.ts**](/dev/presence/class)

> The code you write **must** be _well-written_ and **must** be _readable_ and all strings must be grammatically correct (grammar errors on websites can be ignored).

> Each presence follows a strict linting ruleset which will be checked during the review process. A couple of recommendations can be seen below. [TypeScript Plugin Recommendations for Strict Type Checking](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules). [ESlint Recommendations](https://eslint.org/docs/rules). [Prettier](https://prettier.io/).

Oto lista zasad, których musisz przestrzegać podczas pisania pliku `presence.ts`:

- **Zawsze** deklaruj nową instancję klasy `Presence` przed jakąkolwiek inną zmienną, aby uniknąć problemów, które mogą wystąpić; nie jest to wymóg konstrukcyjny, więc w przyszłości można go usunąć.
- **Never** use custom functions when [native variants are available](https://docs.premid.app/dev/presence#files-explained); this makes sure fixes on the extension level also apply to your presences. You're free to use whatever you need if you do not find them listed in the docs.
- It is **forbidden** to code presences for a site without adding support to its primary language (for e.g., a YouTube presence coded with support only for Portueguese and Japanese, but not English itself.)
- The `smallImageKey` and `smallImageText` fields are intended to provide additional/secondary context (such as `playing/paused` for video sites, `browsing` for regular sites, and other cases) not to promote Discord profiles or anything unrelated to PreMiD.
- You are **not** allowed to access `localStorage`.
- When accessing cookies for stored data, please prefix the key with `PMD_`.
- You many only make HTTP/HTTPS requests to `premid.app` or the presence website API. If you are using external domains, you will be required to explain why it is necessary. Only allowed API to make request is [`Fetch API`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).
- Do **not** set fields in the presenceData object to undefined after it has been declared, use the `delete` keyword instead. (for e.g., use `delete data.startTimestamp` instead of `data.startTimestamp = undefined`)
- You are **not** allowed to write presences that change the functionality of a given website. This includes the addition, deletion, or modification of DOM elements.

## [**tsconfig.json**](/dev/presence/tsconfig)

> Nie **zapisuj** swojego własnego pliku `tsconfig.json`, użyj tego który został podany w [dokumentacji](https://docs.premid.app/en/dev/presence/tsconfig).

## Zmiany

> You **must** change the version in the **metadata** to be a higher value from the previous version when making changes to either the **presence.ts**, **iframe.ts** or **metadata.json**.

In some situations, presences may behave unexpectedly or could use some minor changes to improve their functionality. Here is a list of rules that you **must** follow while modifiying presences.

- You are **not** allowed to rewrite a presence or change its author. If the presence author was banned from the official server or hasn't made the required changes within a month, you may contact a reviewer to see if you can to rewrite the presence.
- If you make modifications to a presence and change at least a **quarter** of the presence's codebase, you are allowed to add yourself as a contributor. Skontaktuj się z recenzentem, aby uzyskać więcej informacji na ten temat.
- Anyone may provide hotfixes to fix bugs; however, try **not** to make changes that are **not** required. Valid modifications include general fixes (code and typos), additions (descriptions and tags), missing files, etc. Do **not** change images if they are not outdated and are in specifications.

# Zmiany

> **Wszystkie** kody dodane do sklepu będą licencjonowane jako `Mozilla Public License 2.0`.

> Jeśli chcesz się z kimś skontaktować, użyj naszego oficjalnego serwera Discord. All reviewers will have the `Reviewer` role on their profile.

> Please keep in mind that the reviewers work voluntarily and manage other repositories in addition to this one, your pull request may not get reviewed until hours or even days after it has been created.

> **Zawsze** miej aktualny "fork" przed utworzeniem "Pull Request". This will help limit false positives from the checks.

Najważniejszym procesem rozwoju presence jest zamieszczenie Twojej presence w sklepie. This is done by making a [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) on GitHub on the `PreMiD/Presences` repository. Our reviewers will confirm that your presence is up to standards and will push it onto the store.

<div>
  <h2 style="font-size: 2rem; margin-bottom: 0;">Presence Reviewers</h2>
  
  <a href="https://github.com/Bas950"><img src="https://github.com/Bas950.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>  <a href="https://github.com/Timeraa"><img src="https://github.com/Timeraa.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>  <a href="https://github.com/StrikerFRFX"><img src="https://github.com/StrikerFRFX.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <br />
</div>

## `Przegląd i recenzja`

Repetitive offenses such as breaking guidelines, spamming pull requests, threats, or innapropriate behavior will get you banned from creating presences.

W takim przypadku wystąpią następujące zmiany:

- Presences under your management will be transferred to the PreMiD bot or another user (reviewer decision). The application id for each presence will be recreated under the new owner's name.
- All of your issues and pull requests (presence creation, presence contribution, etc) created following the ban will be prompty closed.
- Tickets created under your name regarding presence development will be deleted.

## `Testy`

Kilka rzeczy, które powinieneś wiedzieć po otwarciu pull request:

- Wymaga to 2 recenzentów, aby połączyć pull request.
- Jeśli w pull request nie ma aktywności przez 7 dni to zostanie on zamknięty.
- Wszystkie testy **muszą** przejść, aby pull request został zmergowany.
- ⚠️ **musisz** podać nowe, niezmodyfikowane zrzuty ekranu (zrobione przez ciebie) pokazujące porównanie twojego profilu i strony internetowej, aby udowodnić, że twój status działa. _You are allowed to stitch screenshots together for viewing pleasure_ This applies for both creation and modification.
- ⚠️ Jesteś również **zobligowany**, aby dołączyć zrzuty ekranu ustawień statusu w rozszerzeniu, jeśli zostały dostarczone. Przykład można zobaczyć [tutaj](https://imgur.com/a/OD3sj5R).

## `Reguły dodatkowe`

![Testy](https://i.imgur.com/oqAakOc.png)

Currently, a presence goes through 3 separate stages of checks. All of these checks help the reviewers determine whether your presence is suitable for deployment.

- `Codacy` is a bot that checks for code quality. If you ever receive errors for new issues, you are **required** to fix them. (_WARNING: Codacy bot will be deprecated soon and you will need check errors only from DeepScan!_)
- `DeepScan` is a bot that checks for code quality. If you ever receive errors for new issues, you are **required** to fix them.
- `Schema Validation` will scan your `metadata.json` file for any errors (for e.g., missing fields, invalid value types, etc.). Jeśli zobaczysz nowe problemy, **musisz** je także naprawić. Adding a schema field to your `metadata.json` file will allow your text editor (if supported) to show you these errors during development.

## `Reguły dodatkowe`

- **Always** make sure to start your presence in the most appropriate folder, if its name starts with _any_ Latin letter then it must be under its alphabetical match (for e.g., `D/dアニメストア` or `G/Google`). Any other Unicode/non-Latin characters **must** be under the `#` folder (for e.g., `#/巴哈姆特`) and numbers under the `0-9` folder (for e.g., `0-9/4anime`).

After meeting all of the guidelines with the proper reviews and checks, your presence will be merged with the store.

# Weryfikacja
`2 Rewizja` wytycznych została stworzona przez następujące osoby:

# Wkład

`1 Rewizja` była stworzona przez następujące osoby:

<div>
<a href="https://github.com/ririxidev"><img src="https://github.com/ririxidev.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
</div>

`2 Rewizja` wytycznych została stworzona przez następujące osoby:

<div>
<a href="https://github.com/Alanexei"><img src="https://github.com/Alanexei.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
</div>

`1 Rewizja` była stworzona przez następujące osoby:

<div>
<a href="https://github.com/Alanexei"><img src="https://github.com/Alanexei.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
<a href="https://github.com/Bas950"><img src="https://github.com/Bas950.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
<a href="https://github.com/doomlerd"><img src="https://github.com/doomlerd.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
</div>