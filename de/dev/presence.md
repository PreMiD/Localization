---
title: Präsenzentwicklung
description:
published: true
date: 2020-04-24T12:47:02.402Z
tags:
---

> Alle Präsenzen werden jetzt hier gespeichert: https://github.com/PreMiD/Presences 
> 
> {.is-info}

Version `2.x` führt den [Presence Store](https://premid.app/store) ein. Benutzer haben jetzt die Möglichkeit, ihre Lieblingspräsenzen manuell über die Benutzeroberfläche der [Website](https://premid.app/) hinzuzufügen und zu entfernen.

# Richtlinien
> Wenn Sie nicht alle Richtlinien befolgen, fordert ein ` Präsenzprüfer </ code> die richtigen Änderungen an, oder Ihre Pull-Anforderung wird unter bestimmten Umständen sogar geschlossen.
  </p>
  
  <p spaces-before="0">{.is-warning}</p>
</blockquote>

<blockquote spaces-before="0">
  <p spaces-before="0">Wenn Sie Pull-Anfragen zum Hinzufügen oder Ändern vorhandener Präsenzen stellen, MÜSSEN Sie <strong x-id = "1"> einen Screenshot einfügen. Für Änderungen an den Dateien <code> metadata.json </ code> oder <code> tsconfig.json </ code> einer Präsenz ist jedoch kein Screenshot erforderlich. <em x-id="3">Ihr Screenshot MUSS mit der Pull-Anfrage direkt auf GitHub hochgeladen werden. Verwenden Sie keine Websites für die gemeinsame Nutzung von Bildern von Drittanbietern.</em>
  </p>
  
  <p spaces-before="0">{.is-warning}</p>
</blockquote>

<p spaces-before="0">Wenn Sie Präsenzen auf diesem GitHub veröffentlichen, müssen Sie eine Reihe von Richtlinien befolgen.
Für manche mögen diese strengen Regeln hart erscheinen. Die Implementierung dieser Regelsätze verhindert jedoch, dass auf unseren Servern Probleme auftreten.</p>

<h2 spaces-before="0">Erstellung</h2>

<blockquote spaces-before="0">
  <p spaces-before="0">Der Code, den du schreibst, MUSS <em x-id="3">ordentlich geschrieben</em> und MUSS <em x-id="3">lesbar sein</em>. <code>DeepScan` auf GitHub meldet Qualitätsprobleme an das `Presence Verification Team`. Wir empfehlen, dass Ihre Gabel auf dem neuesten Stand ist, wenn Sie Pull-Anfragen stellen. Dies hilft, Fehlalarme zu begrenzen. 
> 
> {.is-warning}

- Die Pull-Anfrage**MUSS**um vollständig zu sein, müssen Sie eine ordnungsgemäße Dateistruktur haben, Entwürfe sind**nicht**erlaubt. Einschließlich der`dist`Ordner,`presence.js`Datei, und`metadata.json`Datei, dies wird im folgenden Beispielschema dargestellt:
```bash
Präzens
└── dist
    ├── metadata.json
    └── presence.js
```
or if you're using TypeScript and `iframe` (the max you could reach) :
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

Beachte die folgende Liste, bevor Du an Deiner Präsenz arbeitest.
- Die Präsenz **MUSS** mit der von Ihnen ausgewählten Website zusammenhängen.
- Die Präsenz **DARF NICHT** von illegalen Websites stammen. Dazu gehören Stressfaktoren, Drogen, Kinderpornografie usw...
- Die Präsenzmetadaten **MÜSSEN** ordentlich geschriebene Inhalte enthalten, einschließlich gültiger Titel und Beschreibungen.
- Die von Ihnen enthaltenen Medien (Symbole/Thumbnails) **MÜSSEN** mit der Website zusammenhängen und sollten hinsichtlich Größe und Qualität verständlich sein.
- Die Dateistruktur **MUSS** ordentlich und strukturiert sein. Es dürfen keine zufälligen Dateien vorhanden sein, die mit der Funktion der Präsenz nichts zu tun haben.
- Die Präsenz **DARF KEINE** böswilligen Absichten haben. Dazu gehört das Stehlen/Veröffentlichen von privaten Informationen, das negative Beeinträchtigen des Verhaltens der Website usw...
- Wenn Du eine Präsenz für eine Website erstellst und sich die Website in der Zukunft ändern sollte, so bist **DU** verantwortlich, die Präsenz zu aktualisieren, dass sie wie erwartet, funktioniert. Wenn Sie Fehler nicht innerhalb von 7 Tagen beheben, können andere Entwickler Ihre Präsenz **ÜBERSCHREIBEN**, um die Probleme zu beheben.
- Die Präsenz **MUSS** vor der Veröffentlichung auf Fehler getesten werden.
- Ihre Präsenz **MUSS** SFW-Bilder und -Beschreibungen enthalten, unabhängig davon, ob es sich um NSFW handelt oder nicht. Wenn es sich bei Ihrer Präsenz um eine NSFW-Website handelt, fügen Sie Ihren Metadaten das Tag `nsfw` hinzu.
- Ihre Präsenz **KANN** den lokalen Speicher im Browser **NICHT** manipulieren.
- Ihre Präsenz verwendet möglicherweise Cookies, um Daten zu speichern. Allen von der Präsenz gespeicherten Daten sollte das Präfix `pmd_` vorangestellt werden.
- Tags should be used as alternate names whenever possible, shortened versions must be included as well (e.g. if an Amazon presence had included AWS support it would have its tags like : "amazon-web-services" and "aws"). This is not required if it's not possible, but will make it easier for users when searching.
- Tags must not include any spaces, slashes, single/double quotation marks, unicode characters and should always be lowercase.

## Modifikation
> Sie MÜSSEN die Version in den ** Metadaten ** so ändern, dass sie einen höheren Wert als in der vorherigen Version aufweist, wenn Sie Änderungen an den Metadaten ** Präsenz.js ** oder ** Metadaten.json ** vornehmen . 
> 
> {.is-warning}

In einigen Situationen verhalten sich Präsenzen möglicherweise unerwartet oder verwenden einige geringfügige Änderungen, um die Funktionalität zu verbessern. Hier ist eine kompilierte Liste, die Sie ** ** befolgen MÜSSEN, um die Präsenz zu ändern.
- Sie dürfen eine Präsenz nicht umschreiben oder den Autor ändern. Wenn der Anwesenheitsautor innerhalb von 7 Tagen vom offiziellen Server gesperrt wurde oder keine erforderlichen Änderungen vorgenommen hat, können Sie sich an einen PreMiD ` Anwesenheitsprüfer ` wenden, um zu erfahren, ob Sie das Vorhandensein Ihrer Wahl neu schreiben können.
- enn Sie Änderungen an einer Präsenz vornehmen und mindestens ein ** QUARTER ** der Codebasis der Präsenz ändern, können Sie sich selbst als Mitwirkender hinzufügen. Wenden Sie sich an einen ` Presence Verifier `, um weitere Informationen zu diesem Thema zu erhalten.
- Stelle sicher, dass die Änderungen nützlich sind. Dies können Korrekturen (Code- und Tippfehler), Ergänzungen (Beschreibungen und Tags) usw... sein. Do not change images if they are not outdated and have a decent resolution.
- Bestätige, dass Deine Änderungen wirksam sind, bevor Du sie veröffentlichst. Erstelle keine Pull-Requests, ohne das Ergebnis Deiner Änderungen zu kennen.

# Prüfung

> If you need to contact someone, please use our official Discord server. All `Presence Verifiers` will have a unique role on their profile.

For your presence to reach the stores, it MUST go through a process on GitHub to confirm that it works as expected. These are a few things to look out for when making your pull request.

1. Es sind zwei Überprüfer erforderlich, um zu bestätigen, dass Deine Präsenz den Standards entspricht. Wenn Du Änderungsanforderungen erhälst, bemühe dich, diese zu beheben, da sie sonst nicht hinzugefügt werden.
2. If we request changes and your pull request exceeds **7 days of inactivity** without making the necessary ones, we'll be forced to close it.
3. You are allowed to take screenshots of changes made with the help of another user, and you are allowed to stitch screenshots for viewing pleasure. (z.B. der Autor, falls Du aus irgendeinem Grund nicht darauf zugreifen kannst).
4. If it is an update or patch, the screenshot **MUST** show the new additions working, not any old features from previous pull requests.
5. Die bereitgestellten Screenshots sollten echt und nicht bearbeitet worden sein.
6. Jeder zur Verfügung gestellte Code, der in diesem Repository zusammengeführt wird, wird unter der **Mozilla Public License 2.0** lizenziert.
7. Presences for free domains or hosts (e.g. .TK, [all free Freenom domains], .RF.GD, etc...) are **NOT** allowed at all, exceptions can be made if a proof is presented showing that they paid for the domain.
8. The `smallImageKey` and `smallImageText` fields are intended to provide additional/secondary context (such as "playing"/"paused" for video sites, "browsing" for regular sites and other cases) not to promote Discord profiles or anything unrelated to PreMiD.
9. Die Anforderungen für Logos sind allerdings 1:1 (Quadratisch) in 512px, Thumbnails, aber sollten entweder [weite Werbekarten](https://i.imgur.com/3QfIc5v.jpg) oder einfach [Screenshots](https://i.imgur.com/OAcBmwW.png) sein, falls die ersten nicht verfügbar sind.
10. Presences should at least have 1 tag, this is a requirement by design and may be optional in the future.
11. The `url` field **MUST NOT** include `http://` or `https://`, neither the parameters (e.g. a presence for `https://www.google.com/search?gws_rd=ssl` will only have `www.google.com` in the `url` field).
12. Descriptions and tags should always be in arrays, even when it's only one element. The `url` field, however, should only be a string if it's one domain.
13. Instabile Seiten, die ständig APIs/Domains ändern, zufällig HTML-Elemente generieren oder einfach nur in einer schweren Entwicklung sind nicht erlaubt und werden aus dem Store entfernt.

Nachdem alle ordnungsgemäßen Rezensionen erfüllt wurden, wird Dein Pull-Request mit dem Shop zusammengeführt.

# Struktur (TypeScript)
Du kannst wählen, ob Du Deine Präsenz mit [JavaScript](https://www.javascript.com/) oder  [TypeScript](https://www.typescriptlang.org/) programmieren möchtest. [TypeScript](https://www.typescriptlang.org/) enthält einige besonders scharfe Typdefinitionen, sodass das Beheben und Erkennen von Fehlern viel einfacher ist. Wenn Du nur [JavaScript](https://www.javascript.com/) möchtest, kannst Du zu [Structure (JavaScript)](/dev/presence#structure-javascript) springen.

## Installation
1. Installiere [Git](https://git-scm.com/).
2. Installiere [Node](https://nodejs.org/en/) (kommt mit [npm](https://www.npmjs.com/)).
3. Installiere [TypeScript](https://www.typescriptlang.org/index.html#download-links) (öffne ein Terminal und `npm install -g typescript`).

## Projekt klonen
1. Öffne ein Terminal und gib `git clone https://github.com/PreMiD/Presences` ein.
2. Wähle einen Ordner Deiner Wahl.
3. Öffne es in Deinem Quellcode-Editor.

## Ordner und Dateien erstellen

1. Erstelle einen Ordner mit dem **Namen** (keine URL) des Dienstes, den Du unterstützen möchtest.
2. Erstelle eine `presence.ts` und eine `tsconfig.json` Datei im Inneren.
3. Erstelle einen Ordner mit dem Namen `dist`.
4. Erstelle eine `metadata.json` im Ordner `dist`.

## Ausfüllen der tsconfig.json
Bitte gib den folgenden Code in die Datei `tsconfig.json` ein.
```javascript
{
  "extended": "../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
}
```
Um mehr über die TypeScript-Konfiguration zu erfahren, klicke [hier](/dev/presence/tsconfig).

## Ausfüllen der metadata.json

Klicke [hier](/dev/presence#filling-in-the-metadatajson-file-2), um zu sehen, wie sie ausgefüllt wird. Du kannst ganz einfach am unteren Rand der Erklärung zurückklicken.

Wir haben eine `metadata.json`-Datei für die Lazy Peeps [hier](https://eggsy.codes/projects/premid/mdcreator).

## Erste Schritte

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

setInterval(10000, myOutsideHeavyLiftingFunction); 
//Run the function seperate from the UpdateData event every 10 seconds to get and set the variables which UpdateData picks up

*/


presence.on("UpdateData", async () => {
    /*UpdateData is always firing, and therefore should be used as your refresh cycle, or `tick`. This is called several times a second where possible.

    Es wird empfohlen, eine andere Funktion außerhalb dieser Ereignisfunktion einzurichten, die variable Werte ändert und das schwere Heben ausführt, wenn Sie Daten von einer API aufrufen. /

    var presenceData = {
        largeImageKey: "key", /*Die Taste (Dateiname) des Großen Bildes auf der Anwesenheit. These are uploaded and named in the Rich Presence section of your application, called Art Assets*/
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
Du kannst dies in Deine `presence.ts` kopieren und die Werte bearbeiten. Setting all the values is done inside of the updataData event.

Als Beispiele schlagen wir vor, den Präsenz-Code wie 1337x oder 9GAG zu betrachten.

Klicke [hier](/dev/presence/class) für weitere Informationen über die Präsenz-Klasse.

## Du kannst bestimmte Daten nicht abrufen?!

Viele Websites verwenden [iframes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([Inlineframes](https://en.wikipedia.org/wiki/HTML_element#Frames)). Diese HTML-Tags können mehrere Quellen enthalten, z.B. Videos. But they're not relevant every time. Some are hidden or just not actively used. Prüfe, ob Du die benötigten Informationen extrahieren kannst, bevor Du Dir unnötige Arbeiten machst.

1. Check for them in your browsers console (be sure that you are on the **Elements** tab).
2. Suche (<kbd>STRG</kbd>+<kbd>F</kbd> (Windows) oder <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
3. Führe `document.querySelectorAll("iframe")` aus.

Wenn feststellst, dass sich Deine Daten in einem iFrame befinden, musst Du folgende Schritte ausführen:
1. Erstelle eine `iframe.ts`-Datei.
2. Setze iFrame in Ihrer Metadatendatei auf `true`.
3. Fülle Deine iFrame-Datei aus.
```javascript
var iframe = new iFrame();
iframe. n("UpdateData", () => {
    /*
    Holen Sie sich alle Daten, die Sie aus dem iFrame benötigen, in Variablen
    und senden Sie sie dann mit iframe ab. Ende
    */
    iframe. end({ //Daten senden
        Video: Video,
        Mal: Video. uration  
    });
});
```
4. Ermögliche Deiner Präsenz-Datei, Daten aus der iFrame-Datei zu empfangen.
```javascript
presence.on("iFrameData", data => {
  iFrameVideo = data.video;
  currentTime = data.time;
});
```
**Hinweis:** Das muss außerhalb des updateData-Ereignisses platziert werden.
## Kompilieren
Öffne eine Konsole in Deinem Ordner und gib `tsc -w` ein, um die `presence.ts` in den Ordner `/dist` zu kompilieren.

# Struktur (JavaScript)
## Projekt klonen
1. Installiere [Git](https://git-scm.com/).
2. Öffne ein Terminal und gib `git clone https://github.com/PreMiD/Presences` ein.
3. Wähle einen Ordner Deiner Wahl.
4. Öffne es in Deinem Quellcode-Editor.

## Ordner und Dateien erstellen

1. Erstelle einen Ordner mit dem **Namen** (keine URL) des Dienstes, den Du unterstützen möchtest.
3. Erstelle einen Ordner mit dem Namen `dist`.
4. Erstelle eine `metadata.json` und eine `presence.js` im Ordner `dist`.

## Ausfüllen der metadata.json

Klicke [hier](/dev/presence#filling-in-the-metadatajson-file-2), um zu sehen, wie sie ausgefüllt wird. Du kannst ganz einfach am unteren Rand der Erklärung zurückklicken.

Wir haben eine `metadata.json`-Datei für die Lazy Peeps [hier](https://eggsy.codes/projects/premid/mdcreator).

## Erste Schritte

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

setInterval(10000, myOutsideHeavyLiftingFunction); 
//Run the function seperate from the UpdateData event every 10 seconds to get and set the variables which UpdateData picks up

*/


presence.on("UpdateData", () => {
    //UpdateData is always firing, and therefore should be used as your refresh cycle, or `tick`. This is called several times a second where possible.

    //It is recommended to set up another function outside of this event function which will change variable values and do the heavy lifting if you call data from an API.

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
Du kannst dies in Deine `presence.js` kopieren und die Werte bearbeiten. Setting all the values is done inside of the updataData event.

Als Beispiele schlagen wir vor, den Präsenz-Code wie 1337x oder 9GAG zu betrachten.

Klicke [hier](/dev/presence/class) für weitere Informationen über die Präsenz-Klasse.

## Du kannst bestimmte Daten nicht abrufen?!

Viele Websites verwenden [iframes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([Inlineframes](https://en.wikipedia.org/wiki/HTML_element#Frames)). Diese HTML-Tags können mehrere Quellen enthalten, z.B. Videos. But they're not relevant every time. Some are hidden or just not actively used. Prüfe, ob Du die benötigten Informationen extrahieren kannst, bevor Du Dir unnötige Arbeiten machst.

1. Check for them in your browsers console (be sure that you are on the **Elements** tab).
2. Suche (<kbd>STRG</kbd>+<kbd>F</kbd> (Windows) oder <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
3. Führe `document.querySelectorAll("iframe")` aus.

Wenn feststellst, dass sich Deine Daten in einem iFrame befinden, musst Du folgende Schritte ausführen:
1. Erstelle eine `iframe.js`-Datei.
2. Setze iFrame in Ihrer Metadatendatei auf `true`.
3. Fülle Deine iFrame-Datei aus.
```javascript
var iframe = new iFrame();
iframe. n("UpdateData", () => {
    /*
    Holen Sie sich alle Daten, die Sie aus dem iFrame benötigen, in Variablen
    und senden Sie sie dann mit iframe ab. Ende
    */
    iframe. end({ //Daten senden
        Video: Video,
        Mal: Video. uration  
    });
});
```
4. Ermögliche Deiner Präsenz-Datei, Daten aus der iFrame-Datei zu empfangen.
```javascript
presence.on("iFrameData", data => {
  iFrameVideo = data.video;
  currentTime = data.time;
});
```
**Hinweis:** Das muss außerhalb des updateData-Ereignisses platziert werden.
# Ausfüllen der metadata.json
Wir haben eine `metadata.json`-Datei für die Lazy Peeps [hier](https://eggsy.codes/projects/premid/mdcreator). Es wird immer noch empfohlen, dies durchzulesen, damit Du weißt, wie es funktioniert.

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

Bitte kopiere den obigen Code und füge ihn in Deine `metadata.json` ein. Du musst jetzt die Werte der Eigenschaften bearbeiten. Beachte, dass die folgenden Eigenschaften in Deiner `metadata.json` optional sind. Wenn Du sie nicht verwenden möchten, musst Du sie entfernen.
- `Mitwirkende`
- `regExp`
- `iframe`
- `iFrameRegExp`
- `einstellungen`

**Klarstellung einiger Wertvoreinstellungen:**
<table>
  <thead>
    <tr>
      <th style="text-align:left">Variable</th>
      <th style="text-align:left">Beschreibung</th>
      <th style="text-align:left">Art</th>
      <th style="text-align:left">Optional</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>Autor</b>
      </td>
      <td style="text-align:left">Sollte Objekt mit <code>Name</code> und <code>ID</code> des Präsenzentwicklers enthalten. Name ist Ihr Discord-Benutzername ohne den Bezeichner (# 0000). Benutzer <code>ID</code> kann aus Discord kopiert werden, indem der Entwickler
        Modus aktiviert und mit der rechten Maustaste auf Ihr Profil geklickt wird.</td>
      <td style="text-align:left"><code>Objekt</code>
      </td>
      <td style="text-align:left"><code>Nein</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Mitwirkende</b>
      </td>
      <td style="text-align:left">Sollte Objekt mit <code>Name</code> und <code>ID</code> des Präsenzentwicklers enthalten. Name ist Ihr Discord-Benutzername ohne den Bezeichner (# 0000). Benutzer <code>ID</code> kann aus Discord kopiert werden, indem der Entwickler
        Modus aktiviert und mit der rechten Maustaste auf Ihr Profil geklickt wird.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>Ja</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Bedienung</b>
      </td>
      <td style="text-align:left">Der Titel des Dienstes, den diese Präsenz unterstützt. <br>(Muss den gleichen Namen haben wie der Ordner, in dem sich alles befindet)</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Nein</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Beschreibung</b>
      </td>
      <td style="text-align:left">Kleine Beschreibung der Anwesenheit, können Sie Beschreibung des Dienstes
        wenn Sie keine Ideen haben. Ihre Beschreibung muss Schlüsselpaarwerte enthalten, die die Sprache und die Beschreibung in dieser bestimmten Sprache angeben. Machen Sie Beschreibungen mit den Sprachen <i>, die Sie kennen</i>, unsere Übersetzer nehmen Änderungen an Ihrer Metadatendatei vor.</td>
      <td style="text-align:left"><code>Objekt</code>
      </td>
      <td style="text-align:left"><code>Nein</code>
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
      <td style="text-align:left"><code>Nein</code>
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
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Ja</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Ausführung</b>
      </td>
      <td style="text-align:left">Version Ihrer Anwesenheit.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Nein</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Logo</b>
      </td>
      <td style="text-align:left">Link zum Logo von Dienst&apos;.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Nein</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Miniaturansicht</b>
      </td>
      <td style="text-align:left">Link zum Miniaturbild Ihrer Anwesenheit.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Nein</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Farbe</b>
      </td>
      <td style="text-align:left"><code># HEX</code> Wert. Wir empfehlen, eine Primärfarbe des Dienstes
        , die Ihre Anwesenheit unterstützt.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Nein</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Stichworte</b>
      </td>
      <td style="text-align:left">Array mit Tags, sie helfen Benutzern, Ihre Präsenz auf der Website zu suchen.</td>
      <td
      style="text-align:left"><code>String, Array&lt;String&gt;</code>
        </td>
      <td style="text-align:left"><code>Nein</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Kategorie</b>
      </td>
      <td style="text-align:left">Eine Zeichenfolge, die die Kategorie darstellt, unter die die Anwesenheit fällt. Sehen Sie <a href="https://docs.premid.app/dev/presence/metadata#presence-categories">hier</a> die gültigen Kategorien.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Nein</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b>
      </td>
      <td style="text-align:left">Legt fest, ob <code>iFrames</code> verwendet werden</td>
      <td style="text-align:left"><code>Boolean</code>
      </td>
      <td style="text-align:left"><code>Ja</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b>
      </td>
      <td style="text-align:left">Ein Selektor für reguläre Ausdrücke, der iframes auswählt, in die injiziert werden soll. See regExp for more info.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Ja</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>einstellungen</b>
      </td>
      <td style="text-align:left">An array of settings the user can change.<br>
      Read more about presence settings <a href="https://docs.premid.app/dev/presence/metadata#presence-settings">here</a>.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>Ja</code>
      </td>
    </tr>
  </tbody>
</table>

Klicke [hier](/dev/presence#filling-in-the-metadatajson-file), um zur TypeScript-Erklärung zurückzukehren. Klicken [hier](/dev/presence#filling-in-the-metadatajson-file-1), um zur JavaScript-Erklärung zurückzukehren.

# Präsenz laden
1. Öffne das Popup und halte die Taste <kbd>Shift</kbd> auf Deiner Tastatur gedrückt.
2. **Präsenz laden** wird im Bereich Präsenz angezeigt.
3. Klicke darauf, während Du die Taste <kbd>Shift</kbd> weiterhin gedrückt hälst.
4. Wähle den Ordner /dist Deiner Präsenz.

# Einige hilfreiche Dinge
## Hot-Reload
Die Website, auf der Du Dich befindest, wird jedes Mal automatisch neu geladen, wenn Du eine Datei in Deinem Ordner speicherst.

## Debuggen
- Du kannst `console.log("Test");` zwischen Deinen Code setzten und prüfen, ob Deine Browserkonsole diese Ausgabe liefert. Wenn ja, fahre fort und versuchen es nach der nächsten Funktion erneut. Falls nicht, liegt oben ein Fehler vor.
- Wenn Dir das auch nicht hilft, frage einen Präsenzentwickler auf unserem [Discord-Server](https://discord.gg/WvfVZ8T) um Hilfe.

# Dateien erklärt
- [Präsenzenklasse](/dev/presence/class)
- [iFrame-Klasse](/dev/presence/iframe)
- [Metadatendatei](/dev/presence/metadata)
- [TypeScript-Konfiguration](/dev/presence/tsconfig)
{.links-list}
