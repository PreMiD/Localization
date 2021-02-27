---
title: Presence-Richtlinien
description: Rules that all presence developers must follow to have their presence added.
published: true
date: 2021-02-26T21:45:36.174Z
tags:
editor: markdown
dateCreated: 2021-02-24T22:30:46.792Z
---

<div align="center">
    <img src="https://github.com/PreMiD.png?size=2048" width="128px" style="max-width:100%;">
    <h3 style="font-size: 2rem; margin-bottom: 0">Presence-Richtlinien</h3>
    <h4 style="margin-top: 0">Revision 3</h4>
    <br />
</div>

# Richtlinien

Wenn du Presences in unserer [GitHub Repository](https://github.com/PreMiD/Presences) veröffentlichst, musst du eine Reihe von Richtlinien befolgen. Für manche mögen diese strengen Regeln hart erscheinen. Die Implementierung dieser Regeln verhindert jedoch, dass wir und die Nutzer auf Probleme stößen.

# Erstellung

Die allgemeinen Regeln der Presenceentwicklung lauten wie folgt:

- Presences **müssen** mit der von dir ausgewählten Website zusammenhängen.
- Presences ** dürfen nicht für illegale Webseiten** gemacht werden. (z. B. Stressfaktoren, Verkauf von Drogen, Kinderpornographie usw.)
- Die Dateistruktur muss sauber und verwaltet werden, beinhalten von Dateien, die nicht angegeben wurden ist untersagt. (z. B. vscode und git Ordner, Bild- und Textdateien, usw.)
- Du musst eine gute Dateistruktur aufweisen können, Entwürfe sind **nicht** erlaubt.
- Presences für Websites mit (`.onion` TLDs) oder Websites mit freien Domains/Hosts (für z.B. `.TK` [alle freien Freenom-Domains], `.RF`, `.GD`, usw.) sind **nicht erlaubt**, eine Ausnahme kann gemacht werden, wenn ein Nachweis vorgelegt wird, dass du für die Domain bezahlt hast.
- Die Domain von der Presence muss mindestens 2 Monate alt sein.
- Presences interner Browserseiten (wie Chrome Web Store, `chrome://`, `über:` Seiten, usw.) sind **nicht erlaubt**, da ein experimentelles Flag am Ende des Benutzers aktiviert werden muss, welches möglicherweise Schaden an ihren Browsern anrichten könnte.
- Presences mit nur einer einzigen Subdomain sind **nicht zulässig,** da sie für andere Seiten (wie die Homepage) kaputt sein können. Ausnahmen können für die Richtlinien und Kontaktseiten (Inhalte, die nicht häufig verwendet werden) oder für Webseiten, bei denen die anderen Inhalte nicht miteinander in Beziehung stehen, gemacht werden. (für z.B. Wiki-Seiten)
- Presences für Online-Radios sind nur erlaubt, wenn das Radio mindestens 100 wöchentliche Hörer und 15 gleichzeitige Hörer hat.
- Presences mit niedriger Qualität (oder welche mit kleinem Kontext) sind **nicht** erlaubt (z.B. welche die nur ein Logo anzeigen, aber nie den Text ändern.)
- Durch den Release der `Buttons`, kommen auch Richtlinien für diese:
  - Weiterleitungen zur Hauptseite sind verboten.
  - Werben von Webseiten durch diese ist verboten.
  - They can't show addinational data when you can't show them in `state` or `details`.
- Including the `dist` folder, `presence.ts` file, `iframe.ts` file, and `metadata.json` file is mandatory so the result would be what is represented in the following schema:

```bash
presence
├── dist
│   └── metadata.json
├── presence.ts
└── tsconfig.json
```

oder wenn du eine `iframe.ts`-Datei verwenden:

```bash
presence
├── dist
│   └── metadata.json
├── presence.ts
├── iframe.ts
└── tsconfig.json
```

## [**metadata.json**](/dev/presence/metadata)

> Zur Bequemlichkeit unserer Presence-Entwickler, haben wir ein Schema zur Überprüfung der Integrität Ihrer `Metadata`-Datei zur Verfügung gestellt. Dies ist völlig freiwillig und wird während des Überprüfungsverfahrens nicht benötigt.

> Es wird dringend empfohlen, deine `Metadata`-Datei im unten angezeigten Format zu organisieren, und du musst nach wie vor korrekte Dienstnamen, Beschreibungen, Tags und Einstellfelder haben. Alles, was nicht nach diesen Spezifikationen organisiert ist, wird **nicht** zugelassen.

> Presences von Webseiten, die expliziten Inhalt haben, **müssen** das `nsfw`-Tag haben und das Logo/Thumbnail darf **nicht** diesen Inhalt enthalten.

Jede Presence hat eine Deskriptor-Datei namens `metadata.json`, die Metadaten haben einen strikten Standard, und ein Beispiel für diese Datei finden sie unten:

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

> Falls ein Feld als Optional in der [Dokumentation](https://docs.premid.app/en/dev/presence/metadata) markiert ist und ihre Presence den Standardwert für dieses Feld verwendet, sollten sie es nicht in der `metadata`-Datei enhalten. (z.B. eine Presence ohne iframe-Unterstützung braucht das `Iframe-Feld` nicht.)

> Alle Bilder in der `metadata` Datei müssen auf `i.imgur.com` hochgeladen werden. Die Verwendung von auf der Website gehosteten Inhalten ist **nicht** gestattet, da diese die Pfade und Dateien sich unfreiwillig ändern können.

Eine Liste von Feldern und deren Regeln sind unten aufgelistet:

### **`$schema`**

- Der Schema _Key_ **muss** am Anfang ein Dollarzeichen enthalten. Dieses signalisiert deinem Texteditor, dass du deine JSON-Datei gegen ein Modell validieren möchtest. _Wie bereits erwähnt, muss kein Schema angegeben werden, aber wenn du es angibst, muss dieses berücksichtigt werden._

### **`author`**

- Der ID _Wert_ **muss** deiner Discord snowflake ID entsprechen. Du kannst es durch das Aktivieren des [Entwicklermodus](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-) erhalten. _Verwechsle diese bitte **nicht** mit deiner Anwendungs-ID, welche nur für deine Presence gilt._

### **`*contributors`**

- Füge dich selbst und andere **nicht** als Mitwirkende hinzu, es sei denn sie haben dir bei deiner Presence geholfen.

### **`service`**

- Der Service-Name **muss** mit dem Namen des Präsenzverzeichnisses übereinstimmen. Wenn sich zum Beispiel die Presence in `/websites/Y/YouTube/` befindet, muss der Servicename `YouTube` sein.
- Du **kannst** die URL **nicht** als Servicename verwenden, es sei denn die Webseite benutzt diese als offiziellen Namen. Wenn der Name nicht beschreibend ist und als vage betrachtet werden kann, ist die Nutzung der URL **erforderlich**. (zum Beispiel ist `YouTube` erlaubt, da das beschreibend und der offizielle Name ist, während es `youtube.com` nicht ist. `Top` ist ein nicht-beschreibender Name, wodurch das Nutzen der URL `top.gg` **erforderlich** ist.
- Wenn der Service einige explizite Branding-Regeln mit ihrem Namen hat, solltest du sie befolgen.

### **`*altnames`**

- Benutze dies **ausschließlich** in Szenarien, in denen eine Website mehrere offizielle Namen hat (beispielsweise Pokémon und 포켓몬스터) oder vereinfache die Suche der Presence durch Weglassen von Sonderzeichen (zum Beispiel Pokémon und Pokemon). *Verkürzte* Versionen von Services gehen unter `Tags`.

### **`beschreibung`**

- **Alle** Präsenzen müssen, **ohne Rücksicht** auf die bevorzugt Sprache der Webseite, eine englische Beschreibung haben^.
- Versuche **nicht** die Seite selbst zu übersetzen, es sei denn du kennst diese Sprache. Übersetzer werden deine `metadata.json` modifizieren und falls nötig Änderungen an der Beschreibungen vornehmen.

### **`url`**

- Die URL **muss** ein String sein wenn die Website nur eine Domain verwendet. Wenn die Webseite mehrere benutzt, gib diese in einem Array an.
- Füge **keine** Protokolle in die URL hinzu (wie z.B. `http` oder `https`) und füge keine Query Parameter in die URL ein (z.B. `www.google.com/search?gws_rd=ssl`, welches eigentlich `www.google.com` sein sollte).

### **`version`**

- Stell immer sicher, dass die Versionsnummer den [semantischen Versionsstandards](https://semver.org) folgt, was auf das folgende Schema hinausläuft: `<NEW-FEATURE>.<HUGE-BUGFIX>.<SMALL-BUGFIX-OR-METADATA-CHANGES>`. Alles andere wie `1.0.0.1`, `1.0`, `1`, `1.0.0-BETA` oder das Ändern von `1.0.0` auf `2.0.0` bei einer Fehlerbehebung/kleinen Änderung ist **nicht** erlaubt.
- Die Version **muss** immer bei `1.0.0` anfangen, sofern nicht anders angegeben. Andere Versionen werden **nicht** erlaubt.

### **`logo`**

- Das Logo **muss** ein quadratisches Bild mit einem `1:1` Seitenverhältnis sein.
- Das Bild **erfordert** eine Mindestauflösung von `512x512` Pixeln haben. Du kannst Bilder mit Tools wie zum Beispiel [waifu2x](http://waifu2x.udp.jp/) vergrößern.

### **`thumbnail`**

- Das Vorschaubild **sollte** vorzugsweise eine [breite Werbekarte](https://i.imgur.com/3QfIc5v.jpg) sein, oder ein [Screenshot](https://i.imgur.com/OAcBmwW.png) wenn ersteres **nicht** verfügbar ist.

### **`color`**

- Die Farbe **muss** einen Hexadezimalwert von `#000000` und `#FFFFFF` haben.
- Die Farbe **muss** mit einem Hashsymbol vorangestellt sein.

### **`tags`**

- Bei **allen** Presences ist mindestens _ein_ Tag erforderlich.
- Tags dürfen **keine** Leerzeichen, Schrägstriche, einfache/doppelte Anführungszeichen und Unicode-Zeichen enthalten und sollten immer in Kleinbuchstaben geschrieben werden.
- Tags **sollten** vorzugsweise abwechslungsreiche Servicenamen enthalten um die Suche zu vereinfachen (sollte die Amazon-Präsenz beispielsweise AWS-Unterstützung haben, hätte es Tags wie `amazon-web-services` und `aws`).
- Es ist **erforderlich** einen `NSFW` Tag hinzuzufügen, wenn die Präsenz für eine NSFW Webseite ist.

### **`category`**

- Die Kategorie **muss** eine der folgenden Aufgelisteten aus der [Dokumentation](https://docs.premid.app/en/dev/presence/metadata#presence-categories) sein.
- Die Presence muss eine Kategorie nutzen, die zum Inhalt auf der Website passt. (Benutze zum Beispiel nicht `Anime`, wenn die Website keinen Bezug zu Anime hat).

### **`*regExp`** <br /> **`*iFrameRegExp`**

- Reguläre Expressions **müssen** gültig sein. Bitte teste deine Expressions mit den Hilfsmitteln, die in der [Dokumentation](https://docs.premid.app/en/dev/presence/metadata#testing) gelistet sind.

### **`readLogs`**

- Must be `boolean` value (e.g. `true` or `false`).
- Aktiviert Logs für deine Presence.

### **`Warnung`**

- **Immer** eine neue Instanz der `Presence`-Klasse vor allen anderen Variablen deklarieren, um seltene Fehler zu vermeiden, die eventuell auftreten; dies ist kein vorgesehenes Kriterium, weshalb es in der Zukunft entfernt werden könnte.
- Beispiel für eine solche Presence, die diese Metadaten-Variable benutzt, ist `VLC`.

### **`einstellungen`**

- Es ist dir **nicht** erlaubt eine Presence zu überarbeiten or dessen Autor zu verändern. Wenn der Presence-Autor von dem offiziellen Server gesperrt wurde oder die erforderlichen Änderungen innerhalb eines Monats nicht vorgenommen hat, kannst du dich an einen Prüfer wenden, um zu sehen, ob du die Presence neu schreiben darfst.
- Wenn du Änderungen an einer Presence vornimmst und mindestens ein ** Viertel** der Codebasis der Presence änderst, darfst du dich sich selbst als Mitwirkender hinzufügen. For example, names such as `SHOW BROWSING STATUS` will **not** be permitted; however, names such as `Show Browsing Status` or `Show browsing status` are permitted.
- Wenn du die Mehrsprachen-Option verwendest, solltest du wissen:
  - **Boolean** type value will only enable strings from [`general.json`](https://github.com/PreMiD/Localization/blob/master/src/Presence/general.json) from Localization repo or from presence file (e.g. when presence name is YouTube, extension will get strings from `youtube.json` too.)
  - **String** type value (e.g. `youtube.json`) will specify name of file that you want get strings from.
  - **Array<String>** type value (e.g. `["youtube.json", "vlive.json"]`) will specify name of files that you want get strings from.

## [**presence.ts**](/dev/presence/class)

> Der Code, den du schreibst **muss** _gut geschrieben_ und _lesbar_ sein und alle Strings müssen grammatikalisch korrekt sein (Grammatikfehler auf der Website können ignoriert werden).

> Jede Presence folgt einem strengen Linting-Regelsatz, der während des Überprüfungsprozesses überprüft wird. Nachfolgend findest du eine Reihe von Empfehlungen. [TypeScript Plugin Recommendations for Strict Type Checking](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules). [ESlint Recommendations](https://eslint.org/docs/rules). [Prettier](https://prettier.io/).

Hier ist eine Liste an Regeln, denen du folgen musst, wenn du deine `presence.ts`-Datei schreibst:

- **Always** declare a new instance of the `Presence` class before any other variable to avoid rare issues that may occur; this is not a requirement by design so it could be removed in the future.
- **Never** use custom functions when [native variants are available](https://docs.premid.app/dev/presence#files-explained); this makes sure fixes on the extension level also apply to your presences. You're free to use whatever you need if you do not find them listed in the docs.
- It is **forbidden** to code presences for a site without adding support to its primary language (for e.g., a YouTube presence coded with support only for Portueguese and Japanese, but not English itself.)
- The `smallImageKey` and `smallImageText` fields are intended to provide additional/secondary context (such as `playing/paused` for video sites, `browsing` for regular sites, and other cases) not to promote Discord profiles or anything unrelated to PreMiD.
- You are **not** allowed to access `localStorage`.
- When accessing cookies for stored data, please prefix the key with `PMD_`.
- You many only make HTTP/HTTPS requests to `premid.app` or the presence website API. If you are using external domains, you will be required to explain why it is necessary. Only allowed API to make request is [`Fetch API`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).
- Do **not** set fields in the presenceData object to undefined after it has been declared, use the `delete` keyword instead. (for e.g., use `delete data.startTimestamp` instead of `data.startTimestamp = undefined`)
- You are **not** allowed to write presences that change the functionality of a given website. This includes the addition, deletion, or modification of DOM elements.

## [**tsconfig.json**](/dev/presence/tsconfig)

> Schreibe **nicht** deine eigene `tsconfig.json` Datei, sondern verwende das, was in der [Dokumentation](https://docs.premid.app/en/dev/presence/tsconfig) zur Verfügung gestellt wurde.

## Änderungen

> Nach Änderungen an **presence.ts**, **iframe.ts** oder **metadata.json**, **muss** die Version in den **Metadaten** einen höheren Wert als in der vorherigen Version haben.

In einigen Situationen können sich Presences möglicherweise unerwartet verhalten oder geringfügige Änderungen vornehmen, um ihre Funktionalität zu verbessern. Hier ist eine Liste mit Regeln, die du beim Modifizieren von Presences befolgen **musst**.

- You are **not** allowed to rewrite a presence or change its author. If the presence author was banned from the official server or hasn't made the required changes within a month, you may contact a reviewer to see if you can to rewrite the presence.
- If you make modifications to a presence and change at least a **quarter** of the presence's codebase, you are allowed to add yourself as a contributor. Contact a reviewer for more information about this subject.
- Anyone may provide hotfixes to fix bugs; however, try **not** to make changes that are **not** required. Valid modifications include general fixes (code and typos), additions (descriptions and tags), missing files, etc. Do **not** change images if they are not outdated and are in specifications.

# Verification

> **Der gesamte** Code, der dem Store beigetragen wird, wird unter der `Mozilla Public License 2.0` lizenziert.

> Falls du dich mit jemandem kontaktieren musst, tritt unserem offiziellen Discord Server bei. Alle Prüfer haben die Rolle `Reviewer` in ihrem Profil.

> Bitte beachte, dass die Prüfer freiwillig arbeiten und zudem auch andere Repositories verwalten. Ihre Pull-Anfrage wird möglicherweise erst Stunden oder sogar Tage nach der Erstellung überprüft.

> Habe **immer** eine Fork auf dem neuesten Stand, bevor du eine Pull Request erstellst. Dies wird dabei helfen, Falschmeldungen von den Kontrollen auszuschließen.

Der wichtigste Prozess der Presence-Entwicklung ist Ihre Presence in den Shop zu bekommen. Dies geschieht durch das Erstellen einer [Pull-Request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) auf GitHub in dem `PreMiD/Presences` Projektarchiv. Unsere Prüfer werden bestätigen, dass deine Presence den Standards entspricht und sie im Shop veröffentlichen.

<div>
  <h2 style="font-size: 2rem; margin-bottom: 0;">Presence Reviewers</h2>
  <a href="https://github.com/Bas950"><img src="https://github.com/Bas950.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/Timeraa"><img src="https://github.com/Timeraa.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/ririxidev"><img src="https://github.com/ririxidev.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <br />
</div>

## `Restrictions`

Wiederholte Verstöße wie das Brechen von Richtlinien, das Versenden von Spam-Pull-Requests, Bedrohungen oder unangemessenes Verhalten führen dazu, dass du keine Presences mehr erstellen kannst.

In diesem Fall werden folgende Änderungen vorgenommen:

- Presences under your management will be transferred to the PreMiD bot or another user (reviewer decision). The application id for each presence will be recreated under the new owner's name.
- All of your issues and pull requests (presence creation, presence contribution, etc) created following the ban will be prompty closed.
- Tickets created under your name regarding presence development will be deleted.

## `Reviewing`

Ein paar Dinge, die du nach dem Öffnen einer Pull-Request wissen solltest:

- It takes 2 reviewers to merge a pull request.
- If a pull request is inactive for a period of 7 days, it will be promptly closed.
- All checks **must** be passed in order to merge.
- ⚠️ You **must** provide new, unaltered screenshots (taken by you) showing a side-by-side comparison of your profile and the website to prove that your presence works. _You are allowed to stitch screenshots together for viewing pleasure_ This applies for both creation and modification.
- ⚠️ You are also **required** to include screenshots of the presence settings in the extension if supplied. An example can be seen [here](https://imgur.com/a/OD3sj5R).

## `Überprüfen`

![Überprüfen](https://i.imgur.com/oqAakOc.png)

Currently, a presence goes through 3 separate stages of checks. Alle diese Checks helfen den Prüfern zu ermitteln, ob deine Presence für den Einsatz geeignet ist.

- `Codacy` is a bot that checks for code quality. If you ever receive errors for new issues, you are **required** to fix them. (_WARNING: Codacy bot will be deprecated soon and you will need check errors only from DeepScan!_)
- `DeepScan` is a bot that checks for code quality. If you ever receive errors for new issues, you are **required** to fix them.
- `Schema Validation` will scan your `metadata.json` file for any errors (for e.g., missing fields, invalid value types, etc.). If you ever see any new issues, you are also **required** to fix those. Adding a schema field to your `metadata.json` file will allow your text editor (if supported) to show you these errors during development.

## `Additional Rules`

- **Always** make sure to start your presence in the most appropriate folder, if its name starts with _any_ Latin letter then it must be under its alphabetical match (for e.g., `D/dアニメストア` or `G/Google`). Any other Unicode/non-Latin characters **must** be under the `#` folder (for e.g., `#/巴哈姆特`) and numbers under the `0-9` folder (for e.g., `0-9/4anime`).

Nach der Erfüllung aller Richtlinien mit den richtigen Prüfungen und Checks, wird deine Presence in den Store aufgenommen.

# Suggestions
If you have some suggestions about our guidelines, you should contact us @ [PreMiD's discord server](https://discord.premid.app) and we will check them!

# Mitwirkende

`Revision 3` of the guidelines was written and was contributed to by the following individuals:

<div>
<a href="https://github.com/ririxidev"><img src="https://github.com/ririxidev.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
</div>

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