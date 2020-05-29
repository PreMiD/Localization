---
title: Rozwój statusów
description:
published: tak
date: 2020-05-29T21:55:04.008Z
tags:
---

> Wszystkie aktywności Presence przechowywane są tutaj: https://github.com/PreMiD/Presences 
> 
> {.is-info}

Wersja `2.x` wprowadza [sklep z statusami](https://premid.app/store). Użytkownicy mają teraz możliwość ręcznego dodawania lub usuwania ich ulubionych statusów za pośrednictwem interfejsu użytkownika z [strony](https://premid.app/).

# Wytyczne

Podczas publikowania Presence w serwisie GitHub wymagamy przestrzegania zbioru wytycznych. To some, these strict rules may seem harsh. Jednak wdrożenie tych zestawów reguł powstrzyma nas i użytkowników od problemów.

## Tworzenie

The general rules of presence development are as follows:

- Presences **must** be related to the website of choice.
- Presences **cannot** be made for illegal websites. ( for e.g., stressors, drug marketing, child pornography, etc. )
- The file structure must be clean and managed, do not include files which are not specified. ( for e.g., vscode and git folders, image and text files, etc. )
- You need to have a proper file structure, drafts are **not** allowed.
- Presences for websites with ( `.onion` TLDs ) or websites with free domains/hosts ( for e.g., `.TK` [all free Freenom domains], `.RF`, `GD`, etc ) are **not** permitted, exceptions can be made if a proof is presented showing that they paid for the domain.
- Presence that target internal browser pages ( like Chrome Web Store, `chrome://`, `about:` pages, etc ) are **not** allowed as they require an experimental flag to be enabled on the user's end and could potentially cause damage to their browsers.
- Presences with support for only a single will **not** be permitted, as they may seem broken for other pages ( like the homepage ), exceptions can be made for the policy and contact pages ( content that isn't used often ) or sites where the other content is unrelated. ( for e.g., wikia pages )
- Low quality presences ( or ones with little context ) are **not** allowed ( for e.g., only showing a logo and text but never changing it again. )
- Including the `dist` folder, `presence.ts` file, `iframe.ts` file, and `metadata.json` file is mandatory so the result would be what is represented in the following schema:

```bash
presence
├── dist
│   ├── metadata.json
│   └── presence.js
├── presence.ts
└── tsconfig.json
```

or if you're using a `iframe.ts` file:

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

## [**metadata.json**](https://docs.premid.app/en/dev/presence/metadata)

> For the convenience of our presence developers, we have provided a schema which you can use to validate the integrity of your `metadata` file. This is entirely optional and is not required during the review process.

> It is highly recommended that you organize your `metadata` file in the format shown below, and you must have grammatically correct service names, descriptions, tags, and setting fields. Anything not organized to specifications will **not** be permitted. 
> 
> {.is-warning}

Each presence has a descriptor file called `metadata.json`, the metadata has a strict standard and an example of this file can be seem below:

```json
{
  "$schema": "https://schemas.premid.app/metadata/1.0",
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

> If a field is listed as optional on the [documentation](https://docs.premid.app/en/dev/presence/metadata) and your presence uses the default value for it, do not include it in the `metadata` file. ( for e.g., a presence without iframe support would not need the `iframe` field. ) 
> 
> {.is-warning}

> All images in the `metadata` file must be hosted on `i.imgur.com` or on a CDN that gives you permissions to **change** image files. Content hosted on the website itself is **not** permitted as they can change the locations unwillingly. 
> 
> {.is-warning}

A list of fields and their rules are listed below:

### **`$schema`**

- The schema _key_ **must** include a dollar sign at the beginning of it, this will signal your text editor that you want to validate your JSON file against a model. _As stated earlier, you do not need to include a schema, but if you include it you must take this into account._

### **`autor`**

- The ID _value_ **must** be your Discord snowflake ID. You can get it by enabling [developer mode](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-). _Please do **not** confuse this with your application ID, which is only for your presence._

### **`współtwórcy`**

- Do **not** add yourself as a contributor, and do not add someone else as a contributor unless they have helped with the presence.

### **`service`**

- The service name **must** be the name of the presence directory. For example, if the presence is located at `/websites/Y/YouTube/`, the service name must be `YouTube`.

### **`opis`**

- **All** presences are **required** to have an English description regardless of the website's prefered language.
- Do **not** try and translate the description yourself unless you know that language, translators will modify your `metadata.json` and change the descriptions if necessary.

### **`url`**

- The url **must** be a string if the website only uses one domain. If the website uses multiple, make this an array and specify each one.
- Do **not** include protocols in the url ( for e.g., `http` or `https` ), and do not include query parameters in the url ( for e.g., `www.google.com/search?gws_rd=ssl` which should be `www.google.com/`)

### **`wersja`**

- Always make sure the version number follows [semantic versioning standards](https://semver.org), which translates to the following scheme: `<NEW-FEATURE>.<HUGE-BUGFIX>.<SMALL-BUGFIX-OR-METADATA-CHANGES>`. Anything else like `1.0.0.1`, `1.0`, `1`, `1.0.0-BETA` or changing `1.0.0` to `2.0.0` on a bug fix/small change is **not** permitted.
- The version **must** always start at `1.0.0` unless told otherwise, other versions will **not** be permitted.

### **`logo`**

- The logo **must** be a square image with a `1:1` aspect ratio.
- The image is **required** to have a minimum resolution of `512x512` pixels. You can upsize the imagine using a tool like [waifu2x](http://waifu2x.udp.jp/).

### **`thumbnail`**

- The thumbnail **should** preferably be a [wide promotional card](https://i.imgur.com/3QfIc5v.jpg) or a [screenshot](https://i.imgur.com/OAcBmwW.png) if the first is **not** available.

### **`color`**

- The color **must** be a hexadecimal value between `#000000` and `#FFFFFF`.
- The color string **must** be prepended with a hash symbol.

### **`tagi`**

- **All** presences are required to have at least _one_ tag.
- Tags must **not** include any spaces, slashes, single/double quotation marks, Unicode characters, and should always be lowercase.
- Tags **should** preferably include alternate service names to make searching easier ( for e.g., if an Amazon presence had included AWS support, it would have its tags like `amazon-web-services` and `aws` )
- You are **required** to add an `NSFW` tag if the presence is for an NSFW website.

### **`category`**

- The category **must** be one of the following listed on the [documentation](https://docs.premid.app/en/dev/presence/metadata#presence-categories).

### **`regExp`** <br /> **`iFrameRegExp`**

- Regular expressions **must** be valid. Please test your expressions with the tools listed on the [documentation](https://docs.premid.app/en/dev/presence/metadata#testing).

### **`ustawienia`**

- If you decide to make a format string ( for e.g., `%song% by %artist%` ), you must have the variables surrounded by a percent sign on either side. Variables like `%var`, `var%`, or `%%var%%` and anything in between are **not** permitted for the sake of standardization.

## [**presence.ts**](https://docs.premid.app/en/dev/presence/class)

> The code you write **must** be _well-written_ and **must** be _readable_ and all strings must be grammatically correct ( grammar errors on websites can be ignored ). 
> 
> {.is-warning}

Here is a list of rules you must follow when writing your `presence.ts` file:

- **Always** declare a new instance of the `Presence` class before any other variable to avoid rare issues that may occur; this is not a requirement by design so it could be removed in the future.
- **Never** use custom functions when [native variants are available](https://docs.premid.app/dev/presence#files-explained); this makes sure fixes on the extension level also apply to your presences. You're free to use whatever you need if you do not find them listed in the docs.
- It is **forbidden** to code presences for a site without adding support to its primary language ( for e.g., a YouTube presence coded with support only for Portueguese and Japanese, but not English itself. )
- The `smallImageKey` and `smallImageText` fields are intended to provide additional/secondary context ( such as `playing/paused` for video sites, `browsing` for regular sites, and other cases ) not to promote Discord profiles or anything unrelated to PreMiD.
- You are **not** allowed to access `localStorage`.
- When accessing cookies for stored data, please prefix the key with `PMD_`.
- Making requests to external domains is **not** allowed unless you can specify why you are needing to do so.

## [**tsconfig.json**](https://docs.premid.app/en/dev/presence/tsconfig)

> Do **not** write your own `tsconfig.json` file, use what has been provided on [documentation](https://docs.premid.app/en/dev/presence/tsconfig). 
> 
> {.is-warning}

## Modification

> You **must** change the version in the **metadata** to be a higher value from the previous version when making changes to either the **presence.ts**, **iframe.ts** or **metadata.json**. 
> 
> {.is-warning}

In some situations, presences may behave unexpectedly or could use some minor changes to improve their functionality. Here is a list of rules that you **must** follow while modifiying presences.

- You are **not** allowed to rewrite a presence or change its author. If the presence author was banned from the official server or hasn't made the required changes within a month, you may contact a verifier to see if you can to rewrite the presence.
- Anyone may provide hotfixes to fix bugs; however, try **not** to make changes to code that does **not** need to be fixed. Valid modifications are, but **not** limited to, _missing paths_, _typos_, _missing images_, etc.
- If you make modifications to a presence and change at least a **quarter** of the presence's codebase, you are allowed to add yourself as a contributor. Contact a verifier for more information about this subject.
- Upewnij się, że zmiany są przydatne. These may include fixes ( code and typos ), additions ( descriptions and tags ), etc. Do **not** change images if they are not outdated and are in specifications.

# Weryfikacja

> Jeśli chcesz się z kimś skontaktować, użyj naszego oficjalnego serwera Discord. All verifiers will have the `Presence Verifier` role on their profile.

> **All** code contributed to the store will be licensed under the `Mozilla Public License 2.0`.

> **Always** have an up-to-date fork before creating your pull request. This will help limit false positives from `DeepScan`. 
> 
> {.is-warning}

The most important process of presence development is getting your presence on the store. This is done by making a [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) on GitHub on the `PreMiD/Presences` repository. Our verifiers will confirm that your presence is up to standards and it will be pushed onto the store.

<div>
  <h2 style="font-size: 2rem; margin-bottom: 0;">Verifiers</h2>
  <a href="https://github.com/Alanexei"><img src="https://github.com/Alanexei.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/Bas950"><img src="https://github.com/Bas950.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/doomlerd"><img src="https://github.com/doomlerd.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/frozaum"><img src="https://github.com/frozaum.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/TheDropX"><img src="https://github.com/TheDropX.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <br />
</div>

## `Reviewing`

A few things you should know after opening a pull request:

- It takes 2 reviewers to merge a pull request.
- If a pull request is inactive for a period of 7 days, it will be promptly closed.
- All checks **must** be passed in order to merge.
- ⚠️ You **must** provide new, unaltered screenshots ( taken by you ) showing a side-by-side comparison of your profile and the website to prove that your presence works. _You are allowed to stitch screenshots together for viewing pleasure_ This applies for both creation and modification.

## `Checks`

![Checks](https://i.imgur.com/bk0A1iY.png)

Currently, a presence goes through 2 separate stages of checks. All of these checks help the verifiers determine whether your presence is suitable for deployment.

- `DeepScan` is a bot that checks for code quality. If you ever receive errors for new issues, you are **required** to fix them.
- `Schema Validation` will scan your `metadata.json` file for any errors ( for e.g., missing fields, invalid value types, etc. ). If you ever see any new issues, you are also **required** to fix those. Adding a schema field to your `metadata.json` file will allow your text editor ( if supported ) to show you these errors during development.

## `Additional Rules`

- **Always** make sure to start your presence in the most appropriate folder, if its name starts with _any_ Latin letter then it must be under its alphabetical match ( for e.g., `D/dアニメストア` or `G/Google` ). Any other Unicode/non-Latin characters **must** be under the `#` folder ( for e.g., `#/巴哈姆特` ) and numbers under the `0-9` folder ( for e.g., `0-9/4anime` ).

After meeting all of the guidelines with the proper reviews and checks, your presence will be merged with the store.

# Contributions

`Revision 2` of the guidelines was written and was contributed to by the following individuals:

<div>
<a href="https://github.com/Alanexei"><img src="https://github.com/Alanexei.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
</div>

`Revision 1` was maintained by the following individuals:

<div>
<a href="https://github.com/Alanexei"><img src="https://github.com/Alanexei.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
<a href="https://github.com/Bas950"><img src="https://github.com/Bas950.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
<a href="https://github.com/doomlerd"><img src="https://github.com/doomlerd.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
</div>

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

## Creating folders and files

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
Stworzyliśmy kreator plików `metadata.json` dla leniwych użytkowników [tutaj](https://eggsy.codes/projects/premid/mdcreator). Nadal zaleca się przeczytanie tego, abyś wiedział, jak to działa.

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
        You can get a quick starter by watching this <a href="https://youtu.be/sXQxhojSdZM">video</a><br>
        You can test your regExp at <a href="https://regex101.com/">Regex101</a>
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

Stworzyliśmy kreator plików `metadata.json` dla leniwych użytkowników [tutaj](https://eggsy.codes/projects/premid/mdcreator).

## Getting started

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
You can copy this into your `presence.ts` file and edit the values. Setting all the values is done inside of the updataData event.

Dla przykładów sugerujemy przyjrzeć się kodom Presence, takim jak: 1337x lub 9GAG.

Aby uzyskać więcej informacji o klasie Presence, kliknij [tutaj](/dev/presence/class).

## Can't get certain data?!

Wiele stron używa [iframes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([Inlineframes](https://en.wikipedia.org/wiki/HTML_element#Frames)). Te tagi html mogą zawierać wiele źródeł, takich jak filmy. Ale nie są istotne za każdym razem. Niektóre z nich są ukryte albo po prostu nie są używane. Check if you can extract, the information you need, without them before you do unnecessary work.

1. Sprawdź je w konsoli przeglądarki (upewnij się, że jesteś na karcie **Elementy**).
2. Szukaj (<kbd>CTRL</kbd>+<kbd>F</kbd> (Windows) albo <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
3. Execute `document.querySelectorAll("iframe")`.

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
## Compiling
Otwórz konsolę w swoim folderze i wpisz `tsc -w` aby skompilować `presence.ts` w folderze `/dist`.

# Ładowanie statusu
1. Otwórz okienko i przytrzymaj klawisz <kbd>Shift</kbd> na twojej klawiaturze.
2. **Load Presence** pojawi się w sekcji Presences.
3. Kliknij na to, kiedy nadal przytrzymujesz przycisk <kbd>Shift</kbd>.
4. Wybierz folder /dist twojego statusu.

# Kilka pomocnych rzeczy
## Hot-reloading
Witryna, którą rozwijasz, automatycznie ładuje się ponownie za każdym razem, gdy zapisujesz plik w folderze.

## Debugowanie
- Możesz umieścić `console.log („Test”);` między kodem i sprawdzić, czy konsola przeglądarki daje ci taki wynik. Jeśli tak, kontynuuj i spróbuj ponownie po następnej funkcji. Jeśli nie, oznacza to błąd powyżej.
- Jeśli to nie pomoże, poproś o pomoc programistę Presence na naszym [serwerze Discord](https://discord.gg/WvfVZ8T).

# Wyjaśnienie plików
- [Klasa Presence](/dev/presence/class)
- [Klasa iFrame](/dev/presence/iframe)
- [Plik Metadata](/dev/presence/metadata)
- [Konfiguracja TypeScript](/dev/presence/tsconfig)
{.links-list}
