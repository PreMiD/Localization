---
title: Richtlinien
description: Regeln, die alle Entwickler beachten müssen, damit ihre Presences hinzugefügt werden.
published: true
date: 2020-09-13T14:45:50.079Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:45.733Z
---

# Richtlinien

Wenn du Presences auf diesem GitHub veröffentlichst, musst du eine Reihe von Richtlinien befolgen. Für manche mögen diese strengen Regeln hart erscheinen. Die Implementierung dieser Regeln verhindert jedoch, dass wir und die Nutzer auf Probleme stößen.

# Erstellung

Die allgemeinen Regeln der Presenceentwicklung lauten wie folgt:

- Presences **müssen** mit der von dir ausgewählten Website zusammenhängen.
- Presences ** dürfen nicht für illegale Webseiten** gemacht werden. (z. B. Stressfaktoren, Verkauf von Drogen, Kinderpornographie usw.)
- Die Dateistruktur muss sauber und verwaltet werden, beinhalten von Dateien, die nicht angegeben wurden ist untersagt. (z. B. vscode und git Ordner, Bild- und Textdateien, usw.)
- Du musst eine gute Dateistruktur aufweisen können, Entwürfe sind **nicht** erlaubt.
- Presences für Websites mit (`.onion` TLDs) oder Websites mit freien Domains/Hosts (für z.B. `.TK` [alle freien Freenom-Domains], `.RF`, `.GD`, usw.) sind **nicht erlaubt**, eine Ausnahme kann gemacht werden, wenn ein Nachweis vorgelegt wird, dass du für die Domain bezahlt hast.
- Presences interner Browserseiten (wie Chrome Web Store, `chrome://`, `über:` Seiten, usw.) sind **nicht erlaubt**, da ein experimentelles Flag am Ende des Benutzers aktiviert werden muss, welches möglicherweise Schaden an ihren Browsern anrichten könnte.
- Presences mit nur einer einzigen Subdomain sind **nicht zulässig,** da sie für andere Seiten (wie die Homepage) kaputt sein können. Ausnahmen können für die Richtlinien und Kontaktseiten (Inhalte, die nicht häufig verwendet werden) oder für Webseiten, bei denen die anderen Inhalte nicht miteinander in Beziehung stehen, gemacht werden. (für z.B. Wiki-Seiten)
- Presences mit niedriger Qualität (oder welche mit kleinem Kontext) sind **nicht** erlaubt (z.B. welche die nur ein Logo anzeigen, aber nie den Text ändern.)
- Enthalten des `dist`-Ordners, der `presence.ts`-Datei, der `iframe.ts`-Datei und `metadata.json`-Datei ist obligatorisch, daher wäre das Ergebnis das, was im folgenden Schema dargestellt wird:

```bash
presence
├── dist
│   ├── metadata.json
│   └── presence.js
├── presence.ts
└── tsconfig.json
```

oder wenn du eine `iframe.ts`-Datei verwenden:

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

> Zur Bequemlichkeit unserer Presence-Entwickler, haben wir ein Schema zur Überprüfung der Integrität Ihrer `Metadata`-Datei zur Verfügung gestellt. Dies ist völlig freiwillig und wird während des Überprüfungsverfahrens nicht benötigt. 
> 
> {.is-info}

> Es wird dringend empfohlen, deine `Metadata`-Datei im unten angezeigten Format zu organisieren, und du musst nach wie vor korrekte Dienstnamen, Beschreibungen, Tags und Einstellfelder haben. Alles, was nicht nach diesen Spezifikationen organisiert ist, wird **nicht** zugelassen. 
> 
> {.is-warning}

> Presences von Webseiten, die expliziten Inhalt haben, **müssen** das `nsfw`-Tag haben und das Logo/Thumbnail darf **nicht** diesen Inhalt enthalten. 
> 
> {.is-warning}

Jede Presence hat eine Deskriptor-Datei namens `metadata.json`, die Metadaten haben einen strikten Standard, und ein Beispiel für diese Datei finden sie unten:

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

> Falls ein Feld als Optional in der [Dokumentation](https://docs.premid.app/en/dev/presence/metadata) markiert ist und ihre Presence den Standardwert für dieses Feld verwendet, sollten sie es nicht in der `metadata`-Datei enhalten. (z.B. eine Presence ohne iframe-Unterstützung braucht das `Iframe-Feld` nicht.) 
> 
> {.is-warning}

> Alle Bilder in der `metadata` Datei müssen auf `i.imgur.com` hochgeladen werden. Using content hosted on the website is **not** permitted as they can change the paths and files unwillingly. 
> 
> {.is-warning}

Eine Liste von Feldern und deren Regeln sind unten aufgelistet:

### **`$schema`**

- The schema _key_ **must** include a dollar sign at the beginning of it, this will signal your text editor that you want to validate your JSON file against a model. _As stated earlier, you do not need to include a schema, but if you include it you must take this into account._

### **`autor`**

- The ID _value_ **must** be your Discord snowflake ID. You can get it by enabling [developer mode](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-). _Please do **not** confuse this with your application ID, which is only for your presence._

### **`mitwirkende`**

- Do **not** add yourself as a contributor, and do not add someone else as a contributor unless they have helped with the presence.

### **`service`**

- The service name **must** be the name of the presence directory. For example, if the presence is located at `/websites/Y/YouTube/`, the service name must be `YouTube`.
- You **cannot** use the url as the service name unless the website uses the url as its official name. If the name is not descriptive and can be considered vague, using the url is **required**. (for e.g., `YouTube` is permitted because that is the official name and is descriptive, while `youtube.com` is not. `Top` is a non-descriptive name, so using the url `top.gg` is **required**.)

### **`altnames`**

- **Only** use this in scenerios where a website goes under multiple official names (e.g. Pokémon and 포켓몬스터) or to make it easier to search the presence without using special characters (e.g. Pokémon and Pokemon). *Shortened* versions of service names go under `tags`.

### **`beschreibung`**

- **All** presences are **required** to have an English description regardless of the website's prefered language.
- Do **not** try and translate the description yourself unless you know that language, translators will modify your `metadata.json` and change the descriptions if necessary.

### **`url`**

- The url **must** be a string if the website only uses one domain. If the website uses multiple, make this an array and specify each one.
- Do **not** include protocols in the url (for e.g., `http` or `https`), and do not include query parameters in the url (for e.g., `www.google.com/search?gws_rd=ssl` which should be `www.google.com`)

### **`version`**

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

### **`tags`**

- **All** presences are required to have at least _one_ tag.
- Tags must **not** include any spaces, slashes, single/double quotation marks, Unicode characters, and should always be lowercase.
- Tags **should** preferably include alternate service names to make searching easier (for e.g., if an Amazon presence had included AWS support, it would have its tags like `amazon-web-services` and `aws`)
- You are **required** to add an `NSFW` tag if the presence is for an NSFW website.

### **`kategorie`**

- Die Kategorie **muss** eine der folgenden Aufgelisteten aus der [Dokumentation](https://docs.premid.app/en/dev/presence/metadata#presence-categories) sein.
- Die Presence muss eine Kategorie nutzen, die zum Inhalt auf der Website passt. (Benutze zum Beispiel nicht `Anime`, wenn die Website keinen Bezug zu Anime hat).

### **`regExp`** <br /> **`iFrameRegExp`**

- Reguläre Expressions **müssen** gültig sein. Bitte teste deine Expressions mit den Hilfsmitteln, die in der [Dokumentation](https://docs.premid.app/en/dev/presence/metadata#testing) gelistet sind.

### **`settings`**

- Wenn du dich dafür entscheidest, ein String-Format (zum Beispiel `%song%` von `%artist%`), müssen die Variablen von einem Prozentzeichen auf beiden Seiten umgeben sein. Variablen wie `%var`,`var%` oder `%%var%%` und alles dazwischen sind **nicht** erlaubt wegen der Standardisierung.
- Der Name der Einstellungen muss **nicht** ausschließlich in Großbuchstaben sein. Zum Beispiel Namen wie `SHOW BROWSING STATUS` sind **nicht** erlaubt; jedenfalls sind Namen wie `Show Browsing Status` oder `Show browing status` erlaubt.

## [**presence.ts**](https://docs.premid.app/en/dev/presence/class)

> Der Code, den du schreibst **muss** _gut geschrieben_ und _lesbar_ sein und alle Strings müssen grammatikalisch korrekt sein (Grammatikfehler auf der Website können ignoriert werden). 
> 
> {.is-warning}

> Each presence follows a strict linting ruleset which will be checked during the review process. A couple of recommendations can be seen below. - [TypeScript Plugin Recommendations for Strict Type Checking](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules) - [ESlint Recommendations](https://eslint.org/docs/rules) 
> 
> {.is-info}

Hier ist eine Liste an Regeln, denen du folgen musst, wenn du deine `presence.ts`-Datei schreibst:

- **Immer** eine neue Instanz der `Presence`-Klasse vor allen anderen Variablen deklarieren, um seltene Fehler zu vermeiden, die eventuell auftreten; dies ist kein vorgesehenes Kriterium, weshalb es in der Zukunft entfernt werden könnte.
- Benutze **niemals** individuelle Funktionen, wenn [systemeigene Varianten verfügbar sind](https://docs.premid.app/dev/presence#files-explained); das versichert, dass Korrekturen der Erweiterung auch bei deinen Presences vorhanden sind. Du kannst frei benutzen, was du brauchst, wenn du nichts in der Dokumentation findest.
- Es ist **verboten**, Presences für eine Seite zu programmieren, ohne eine Übersetzung für die Hauptsprache hinzuzufügen (zum Beispiel eine YouTube-Presence für Portugiesisch und Japanisch, aber nicht für Englisch)
- Die Felder `smallImageKey` und `smallImageText` sollen einen zusätzlichen/zweiten Nutzen bringen (wie `playing/paused` für Video-Seiten, `browsing` für reguläre Seiten, und weitere Fälle) und nicht um Discord-Profile oder irgendwas zu bewerben, das nicht im Zusammenhang mit PreMiD steht.
- Es ist dir **nicht** erlaubt, auf `localStorage` zuzugreifen.
- Wenn du Cookies für gespeicherte Daten benutzt, beginne den Schlüssel mit `PMD_`
- Du kannst nur HTTP/HTTPS-Anfragen zu `premid.app` oder die Presence Website API machen. Wenn du externe Domains verwendest, musst du erklären, warum das notwendig ist.
- Do **not** set fields in the presence data object to undefined after it has been declared, use the `delete` keyword instead. (for e.g., use `delete data.startTimestamp` instead of `data.startTimestamp = undefined`)
- You are **not** allowed to write presences that change the functionality of a given website. This includes the addition, deletion, or modification of DOM elements.

## [**tsconfig.json**](https://docs.premid.app/en/dev/presence/tsconfig)

> Do **not** write your own `tsconfig.json` file, use what has been provided on [documentation](https://docs.premid.app/en/dev/presence/tsconfig). 
> 
> {.is-warning}

# Modifikation

> You **must** change the version in the **metadata** to be a higher value from the previous version when making changes to either the **presence.ts**, **iframe.ts** or **metadata.json**. 
> 
> {.is-warning}

In some situations, presences may behave unexpectedly or could use some minor changes to improve their functionality. Here is a list of rules that you **must** follow while modifiying presences.

- You are **not** allowed to rewrite a presence or change its author. If the presence author was banned from the official server or hasn't made the required changes within a month, you may contact a reviewer to see if you can to rewrite the presence.
- If you make modifications to a presence and change at least a **quarter** of the presence's codebase, you are allowed to add yourself as a contributor. Contact a verifier for more information about this subject.   - If you make modifications to a presence and change at least a **quarter** of the presence's codebase, you are allowed to add yourself as a contributor. Contact a reviewer for more information about this subject.
-  Anyone may provide hotfixes to fix bugs; however, do **not** to make changes that are **not** required. Valid modifications include general fixes (code and typos), additions (descriptions and tags), missing files, etc. Do **not** change images if they are not outdated and are in specifications.

# Prüfung

> **All** code contributed to the store will be licensed under the `Mozilla Public License 2.0`. 
> 
> {.is-info}

> Falls du dich mit jemandem kontaktieren musst, tritt unserem offiziellen Discord Server bei. All reviewers will have the `Reviewer` role on their profile. 
> 
> {.is-info}

> Please keep in mind that the reviewers work voluntarily and manage other repositories in addition to this one, your pull request may not get reviewed until hours or even days after it has been created. 
> 
> {.is-warning}

> **Always** have an up-to-date fork before creating your pull request. This will help limit false positives from the checks. 
> 
> {.is-warning}

The most important process of presence development is getting your presence on the store. This is done by making a [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) on GitHub on the `PreMiD/Presences` repository. Our reviewers will confirm that your presence is up to standards and will push it onto the store.

<div>
  <h2 style="font-size: 2rem; margin-bottom: 0;">Presence Reviewers</h2>
  <a href="https://github.com/Alanexei"><img src="https://github.com/Alanexei.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/Bas950"><img src="https://github.com/Bas950.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/doomlerd"><img src="https://github.com/doomlerd.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/frozaum"><img src="https://github.com/frozaum.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <br />
</div>

## `Restrictions`

Repetitive offenses such as breaking guidelines, spamming pull requests, threats, or innapropriate behavior will get you banned from creating presences.

In this scenerio, the following changes will occur:

- Presences under your management will be transferred to the PreMiD bot or another user (reviewer decision). The application id for each presence will be recreated under the new owner's name.
- All of your issues and pull requests (presence creation, presence contribution, etc) created following the ban will be prompty closed.
- Tickets created under your name regarding presence development will be deleted.


## `Reviewing`

A few things you should know after opening a pull request:

- It takes 2 reviewers to merge a pull request.
- If a pull request is inactive for a period of 14 days, it will be promptly closed.
- All checks **must** be passed in order to merge.
- ⚠️ You **must** provide new, unaltered screenshots (taken by you) showing a side-by-side comparison of your profile and the website to prove that your presence works. _You are allowed to stitch screenshots together for viewing pleasure._ This applies for both creation and modification.
- ⚠️ You are also **required** to include screenshots of the presence settings in the extension if supplied. An example can be seen [here](https://imgur.com/a/OD3sj5R).

## `Checks`

![Checks](https://i.imgur.com/BCDZQe9.png)

Currently, a presence goes through 2 separate stages of checks. All of these checks help the reviewers determine whether your presence is suitable for deployment.

- `Codacy` is a bot that checks for code quality. If you ever receive errors for new issues, you are **required** to fix them.
- `Schema Validation` will scan your `metadata.json` file for any errors (for e.g., missing fields, invalid value types, etc.). If you ever see any new issues, you are also **required** to fix those. Adding a schema field to your `metadata.json` file will allow your text editor (if supported) to show you these errors during development.

## `Additional Rules`

- **Always** make sure to start your presence in the most appropriate folder, if its name starts with _any_ Latin letter then it must be under its alphabetical match (for e.g., `D/dアニメストア` or `G/Google`). Any other Unicode/non-Latin characters **must** be under the `#` folder (for e.g., `#/巴哈姆特`) and numbers under the `0-9` folder (for e.g., `0-9/4anime`).

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
