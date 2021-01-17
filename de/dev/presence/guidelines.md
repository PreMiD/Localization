---
title: Richtlinien
description: Regeln, die alle Entwickler beachten müssen, damit ihre Presences hinzugefügt werden.
published: true
date: 2020-12-29T02:18:29.846Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:45.733Z
---

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

> Alle Bilder in der `metadata` Datei müssen auf `i.imgur.com` hochgeladen werden. Die Verwendung von auf der Website gehosteten Inhalten ist **nicht** gestattet, da diese die Pfade und Dateien sich unfreiwillig ändern können. 
> 
> {.is-warning}

Eine Liste von Feldern und deren Regeln sind unten aufgelistet:

### **`$schema`**

- Der Schema _Key_ **muss** am Anfang ein Dollarzeichen enthalten. Dieses signalisiert deinem Texteditor, dass du deine JSON-Datei gegen ein Modell validieren möchtest. _Wie bereits erwähnt, muss kein Schema angegeben werden, aber wenn du es angibst, muss dieses berücksichtigt werden._

### **`author`**

- Der ID _Wert_ **muss** deiner Discord snowflake ID entsprechen. Du kannst es durch das Aktivieren des [Entwicklermodus](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-) erhalten. _Verwechsle diese bitte **nicht** mit deiner Anwendungs-ID, welche nur für deine Presence gilt._

### **`contributors`**

- Füge dich selbst und andere **nicht** als Mitwirkende hinzu, es sei denn sie haben dir bei deiner Presence geholfen.

### **`service`**

- Der Service-Name **muss** mit dem Namen des Präsenzverzeichnisses übereinstimmen. Wenn sich zum Beispiel die Presence in `/websites/Y/YouTube/` befindet, muss der Servicename `YouTube` sein.
- Du **kannst** die URL **nicht** als Servicename verwenden, es sei denn die Webseite benutzt diese als offiziellen Namen. Wenn der Name nicht beschreibend ist und als vage betrachtet werden kann, ist die Nutzung der URL **erforderlich**. (zum Beispiel ist `YouTube` erlaubt, da das beschreibend und der offizielle Name ist, während es `youtube.com` nicht ist. `Top` ist ein nicht-beschreibender Name, wodurch das Nutzen der URL `top.gg` **erforderlich** ist.

### **`altnames`**

- Benutze dies **ausschließlich** in Szenarien, in denen eine Website mehrere offizielle Namen hat (beispielsweise Pokémon und 포켓몬스터) oder vereinfache die Suche der Presence durch Weglassen von Sonderzeichen (zum Beispiel Pokémon und Pokemon). *Verkürzte* Versionen von Services gehen unter `Tags`.

### **`description`**

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

### **`regExp`** <br /> **`iFrameRegExp`**

- Reguläre Expressions **müssen** gültig sein. Bitte teste deine Expressions mit den Hilfsmitteln, die in der [Dokumentation](https://docs.premid.app/en/dev/presence/metadata#testing) gelistet sind.

### **`einstellungen`**

- Wenn du dich dafür entscheidest, ein String-Format (zum Beispiel `%song%` von `%artist%`), müssen die Variablen von einem Prozentzeichen auf beiden Seiten umgeben sein. Variablen wie `%var`,`var%` oder `%%var%%` und alles dazwischen sind **nicht** erlaubt wegen der Standardisierung.
- Der Name der Einstellungen muss **nicht** ausschließlich in Großbuchstaben sein. Zum Beispiel Namen wie `SHOW BROWSING STATUS` sind **nicht** erlaubt; jedenfalls sind Namen wie `Show Browsing Status` oder `Show browing status` erlaubt.
- Das Hinzufügen von benutzerdefinierten Strings zum [Localization Repository](https://github.com/PreMiD/Localization), um später innerhalb der `multiLanguage`-Einstellung verwendet zu werden, ist nur erlaubt, wenn die Presence bereits zuvor freigegeben wurde und mindestens 1000 Benutzer erreicht hat.

## [**presence.ts**](https://docs.premid.app/en/dev/presence/class)

> Der Code, den du schreibst **muss** _gut geschrieben_ und _lesbar_ sein und alle Strings müssen grammatikalisch korrekt sein (Grammatikfehler auf der Website können ignoriert werden). 
> 
> {.is-warning}

> Jede Presence folgt einem strengen Linting-Regelsatz, der während des Überprüfungsprozesses überprüft wird. Nachfolgend findest du eine Reihe von Empfehlungen. - [TypeScript Plugin Empfehlungen für strenge Prüfung](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules) - [ESlint Empfehlungen](https://eslint.org/docs/rules) 
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
- Setze **keine** Felder in dem presence data object auf undefined, nachdem es deklariert wurde. Nutz stattdessen das `delete` Schlüsselwort. (nutze z.B `delete data.startTimestamp` anstelle von `data.startTimestamp = undefined`)
- Es ist dir **nicht**t erlaubt Presences zu schreiben, die das Funktionalität einer bestimmten Webseite ändern. Dies schließt die Ergänzung, Löschung oder Modifizierung von DOM-Elementen ein.

## [**tsconfig.json**](https://docs.premid.app/en/dev/presence/tsconfig)

> Schreibe **nicht** deine eigene `tsconfig.json` Datei, sondern verwende das, was in der [Dokumentation](https://docs.premid.app/en/dev/presence/tsconfig) zur Verfügung gestellt wurde. 
> 
> {.is-warning}

# Modifikation

> Nach Änderungen an **presence.ts**, **iframe.ts** oder **metadata.json**, **muss** die Version in den **Metadaten** einen höheren Wert als in der vorherigen Version haben. 
> 
> {.is-warning}

In einigen Situationen können sich Presences möglicherweise unerwartet verhalten oder geringfügige Änderungen vornehmen, um ihre Funktionalität zu verbessern. Hier ist eine Liste mit Regeln, die du beim Modifizieren von Presences befolgen **musst**.

- Es ist dir **nicht** erlaubt eine Presence zu überarbeiten or dessen Autor zu verändern. Wenn der Presence-Autor von dem offiziellen Server gesperrt wurde oder die erforderlichen Änderungen innerhalb eines Monats nicht vorgenommen hat, kannst du dich an einen Prüfer wenden, um zu sehen, ob du die Presence neu schreiben darfst.
- Wenn du Änderungen an einer Presence vornimmst und mindestens ein ** Viertel** der Codebasis der Presence änderst, darfst du dich sich selbst als Mitwirkender hinzufügen. Kontaktiere für mehr Informationen einen Prüfer.   Wenn du Änderungen an einer Presence vornimmst und mindestens ein ** Viertel** der Codebasis der Presence änderst, darfst du dich sich selbst als Mitwirkender hinzufügen. Wende dich für mehr Informationen an einen Presence-Reviewer.
-  Jeder darf Hotfixes zur Behebung von Bugs bereitstellen; Führe jedoch **keine** Änderungen aus, die **nicht** erforderlich sind. Gültige Änderungen beinhalten allgemeine Korrekturen (Code und Tippfehler), Ergänzungen (Beschreibungen und Tags), fehlende Dateien usw. Ändere **keine** Bilder solange sie nicht veraltet und in den Spezifikationen sind.

# Prüfung

> **Der gesamte** Code, der dem Store beigetragen wird, wird unter der `Mozilla Public License 2.0` lizenziert. 
> 
> {.is-info}

> Falls du dich mit jemandem kontaktieren musst, tritt unserem offiziellen Discord Server bei. Alle Prüfer haben die Rolle `Reviewer` in ihrem Profil. 
> 
> {.is-info}

> Bitte beachte, dass die Prüfer freiwillig arbeiten und zudem auch andere Repositories verwalten. Ihre Pull-Anfrage wird möglicherweise erst Stunden oder sogar Tage nach der Erstellung überprüft. 
> 
> {.is-warning}

> Habe **immer** eine Fork auf dem neuesten Stand, bevor du eine Pull Request erstellst. Dies wird dabei helfen, Falschmeldungen von den Kontrollen auszuschließen. 
> 
> {.is-warning}

Der wichtigste Prozess der Presence-Entwicklung ist Ihre Presence in den Shop zu bekommen. Dies geschieht durch das Erstellen einer [Pull-Request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) auf GitHub in dem `PreMiD/Presences` Projektarchiv. Unsere Prüfer werden bestätigen, dass deine Presence den Standards entspricht und sie im Shop veröffentlichen.

<div>
  <h2 style="font-size: 2rem; margin-bottom: 0;">Presence-Prüfer</h2>
  <a href="https://github.com/Bas950"><img src="https://github.com/Bas950.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/Timeraa"><img src="https://github.com/Timeraa.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/ririxichan"><img src="https://github.com/ririxichan.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <br />
</div>

## `Beschränkungen`

Wiederholte Verstöße wie das Brechen von Richtlinien, das Versenden von Spam-Pull-Requests, Bedrohungen oder unangemessenes Verhalten führen dazu, dass du keine Presences mehr erstellen kannst.

In diesem Fall werden folgende Änderungen vorgenommen:

- Presences unter deinem Management werden an den PreMiD Bot oder an einen anderen Benutzer übergeben (Überprüfungsentscheidung). Die Anwendungs-ID jeder Presence wird unter dem Namen des neuen Eigentümers neu erstellt.
- Alle deine nach dem Bann erstellten Issues und Pull-Requests (Presence-Erstellungen, Presence-Beiträge, etc.) werden umgehend geschlossen.
- Tickets, die unter deinem Namen in Bezug auf Presence-Entwicklung erstellt wurden, werden gelöscht.


## `Überprüfen`

Ein paar Dinge, die du nach dem Öffnen einer Pull-Request wissen solltest:

- Es benötigt 2 Prüfer, um eine Pull-Request zusammenzuführen.
- Wenn ein Pull-Request für einen Zeitraum von 14 Tagen inaktiv ist, wird diese umgehend geschlossen.
- Alle Prüfungen **müssen** bestanden werden um zusammengeführt zu werden.
- ⚠️ Du **musst** neue, unveränderte Screenshots (aufgenommen von dir) angeben, die in einen nebenseitigen Vergleich deines Profils mit der Website zeigen, dass deine Presence funktioniert. _Sie dürfen Screenshots zusammenfügen, um das Sehvergnügen zu verbessern._ Dies gilt sowohl für die Erstellung als auch für die Änderung.
- ⚠️ Es ist außerdem **erforderlich** einen Screenshot der Presence-Einstellungen aufzunehmen, sofern diese bereitgestellt werden. Ein Beispiel kannst du dir [hier](https://imgur.com/a/OD3sj5R) ansehen.

## `Kontrollen`

![Kontrollen](https://i.imgur.com/BCDZQe9.png)

Derzeit durchläuft eine Presence zwei separate Phasen der Kontrolle. Alle diese Checks helfen den Prüfern zu ermitteln, ob deine Presence für den Einsatz geeignet ist.

- `Codacy` ist ein Bot, der die Qualität des Codes überprüft. Falls du jemals Fehlermeldungen für neue Issues bekommen solltest, bist du **aufgefordert ** diese zu beheben.
- `Die Schema-Validierung` scannt deine `metadata.json` Datei auf Fehler (z. B. fehlende Felder, ungültige Werttypen, etc.). Falls du jemals Fehlermeldungen für neue Issues bekommen solltest, bist du **aufgefordert ** diese zu beheben. Wenn du ein Schema Feld zu deiner `metadata.json` Datei hinzufügst, wird dein Texteditor (falls unterstützt) dir diese Fehler während der Entwicklung anzeigen können.

## `Zusätzliche Anmerkungen`

- Stelle **immer** sicher deine Presence in dem am besten geeigneten Ordner zu beginnen. Wenn dessen Name mit _irgendeinem_ lateinischen Buchstaben beginnt, muss diese unter seiner alphabetischen Übereinstimmung stehen (z.B. für `D/dアニメストア` oder `G/Google`). Alle anderen Unicode/nicht-lateinischen Zeichen **müssen** in dem `#`-Ordner (z.B. `#/巴哈姆特`) and Zahlen in dem `0-9`-Ordner (z.B. `0-9/4anime`) eingeordnet werden.

Nach der Erfüllung aller Richtlinien mit den richtigen Prüfungen und Checks, wird deine Presence in den Store aufgenommen.

# Mitwirkungen

`Revision 2` der Richtlinien wurde geschrieben und von den folgenden Personen beigetragen:

<div>
<a href="https://github.com/Alanexei"><img src="https://github.com/Alanexei.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
</div>

`Revision 1` wurde von folgenden Personen gepflegt:

<div>
<a href="https://github.com/Alanexei"><img src="https://github.com/Alanexei.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
<a href="https://github.com/Bas950"><img src="https://github.com/Bas950.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
<a href="https://github.com/doomlerd"><img src="https://github.com/doomlerd.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
</div>
