---
title: Präsenzentwicklung
description: 
published: true
date: 2020-02-16T14:19:59.468Z
tags: 
---

> Alle Präsenzen werden jetzt hier gespeichert: https://github.com/PreMiD/Presences 
> 
> {.is-info}

Version `2.x` führt den [Presence Store](https://premid.app/store) ein. Benutzer haben jetzt die Möglichkeit, ihre Lieblingspräsenzen manuell über die Benutzeroberfläche der [Website](https://premid.app/) hinzuzufügen und zu entfernen.

# Richtlinien
> Wenn Du nicht alle Richtlinien befolgst, wird Deine Präsenz oder Pull-Request von Github gelöscht. 
> 
> {.is-danger}

## Erstellung

Beachte die folgende Liste, bevor Du an Deiner Präsenz arbeitest.
- Die Pull-Request muss vollständig sein. Du musst über eine ordnungsgemäße Dateistruktur verfügen. Einschließlich des Ordners `dist`, der Datei `presence.js` und `metadata.json`.
- Die Präsenz **muss** mit der von Dir ausgewählten Website zusammenhängen.
- Es dürfen keine illegalen Websites vorhanden sein. Dazu gehören Stressfaktoren, Drogen, Kinderpornografie usw...
- Die Präsenz-Metadaten müssen gut geschriebenen Inhalt enthalten, einschließlich gültiger Titel und Beschreibungen.
- Die Medien, die Du hinzufügst (Symbol/Thumbnail), müssen mit der Website in Zusammenhang stehen und in Bezug auf Größe und Qualität verständlich sein.
- Die Dateistruktur muss sauber und verwaltet sein und darf keine zufälligen Dateien enthalten, die nichts für die Funktion der Präsenz bedeuten.
- Die Präsenz **darf keine** bösen Absichten haben. Dazu gehört Stehlen/Weitergeben von privaten Informationen, Beeinträchtigen des Verhaltens der Website usw...
- Wenn Du eine Präsenz für eine Website erstellst und sich die Website in der Zukunft ändern sollte, so bist **DU** verantwortlich, die Präsenz zu aktualisieren, dass sie wie erwartet, funktioniert. Wenn Du es nicht innerhalb eines akzeptablen Zeitrahmens behebst, sind andere Präsenz-Entwickler berechtigt Deine Präsenz zu **überschreiben**, um den Änderungen entgegenzuwirken.
- Die Präsenz muss vor der Veröffentlichung getestet werden, um sicherzustellen, dass alles wie erwartet funktioniert.
- Deine Präsenz muss SFW-Bilder und -Beschreibungen haben, unabhängig davon, ob es NSFW ist oder nicht. Wenn es sich bei Deiner Präsenz um eine `nsfw`-Website handelt, dann füge den `nsfw`-Tag zu Deinen Metadaten hinzu.
- Deine Präsenz muss **NICHT** für kostenlose Domains oder Hosts sein (z.B. TK, [alle freien Freenom-Domains], .RF.GD, etc...), Ausnahmen können gemacht werden, wenn ein Nachweis vorgelegt wird, dass es sich um eine bezahlte Domain handelt.
- Die `smallImageKey` und `smallImageText` Felder sollen zusätzlich/sekundären Kontext (wie "playing"/"paused" für Video-Seiten bereitstellen "browsing" für normale Webseiten und andere Fälle). Du bist nicht berechtigt Discord-Profile anzuwerben oder anderwärtige, was nichts mit PreMiD zu tun hat.
- Die Anforderungen für Logos sind allerdings 1:1 (Quadratisch) in 512px, Thumbnails, aber sollten entweder [weite Werbekarten](https://i.imgur.com/3QfIc5v.jpg) oder einfach [Screenshots](https://i.imgur.com/OAcBmwW.png) sein, falls die ersten nicht verfügbar sind.
- Die Präsenzen sollten mindestens 1 Tag haben, dies ist eine Anforderung nach Design und kann in der Zukunft optional sein.
- Das Feld `url` darf weder `http://`, noch `https://` enthalten, noch die Parameter (z.B. eine Präsenz für `https://www.google.com/search?gws_rd=ssl` hat nur `www.google.com` im `url` Feld).
- Beschreibungen und Tags sollten immer in Arrays sein, auch wenn es nur ein Element ist. Das Feld `url` sollte jedoch nur ein String sein, wenn es sich um eine Domain handelt.
- Instabile Seiten, die ständig APIs/Domains ändern, zufällig HTML-Elemente generieren oder einfach nur in einer schweren Entwicklung sind nicht erlaubt und werden aus dem Store entfernt.

## Modifikation

In einigen Situationen verhalten sich Präsenzen möglicherweise unerwartet oder verwenden einige geringfügige Änderungen, um die Funktionalität zu verbessern. Hier ist eine kompilierte Liste, die Du befolgen musst, um Präsenzen zu ändern.
- Du darfst den Ersteller der Präsenz nicht ändern. Dies gilt nur, wenn Du sie erneut schreiben darfst. Du kannst Dich selbst als [Mitwirkende](/dev/presence/metadata) hinzufügen.
- Stelle sicher, dass die Änderungen nützlich sind. Dies können Korrekturen (Code- und Tippfehler), Ergänzungen (Beschreibungen und Tags) usw... sein.
- Bestätige, dass Deine Änderungen wirksam sind, bevor Du sie veröffentlichst. Erstelle keine Pull-Requests, ohne das Ergebnis Deiner Änderungen zu kennen.
- Verändere/Überschreibe eine Präsenz nur dann vollständig, wenn dies von einem `Presence Verifier` oder einem Mitarbeiter genehmigt wurde.

# Prüfung
> Wenn Du Pull-Requests zum Hinzufügen oder Ändern vorhandener Präsenzen erstellst, musst Du einen Screenshot hinzufügen. Für Änderungen an den Metadaten/tsconfig einer Präsenz ist jedoch kein Screenshot erforderlich. *Dein Screenshot muss mit dem Pull-Requests direkt auf Github hochgeladen werden. Verwende keine Webseiten für die gemeinsame Nutzung von Bildern von Drittanbietern.* 
> 
> {.is-danger}

Damit Deine Präsenz den Store erreicht, muss sie einen Prozess auf Github durchlaufen, um zu bestätigen, dass sie wie erwartet funktioniert. Hier sind ein paar Dinge, auf die Du achten solltest, wenn Du Deinen Pull-Request erstellst.

Unser Presence Verification-Team hat eine eigene Rolle. Achte auf `Presence Verifier` auf dem Discord-Server, um zu erfahren, wer daran beteiligt ist.

1. Es sind zwei Überprüfer erforderlich, um zu bestätigen, dass Deine Präsenz den Standards entspricht. Wenn Du Änderungsanforderungen erhälst, bemühe dich, diese zu beheben, da sie sonst nicht hinzugefügt werden.
2. Wenn wir Änderungen anfordern und Deine Pull-Request **7 Tage Inaktivität** überschreitet, ohne die erforderlichen Änderungen vorzunehmen, müssen wir ihn schließen.
3. Du darfst Screenshots von Änderungen machen, die mit Hilfe eines anderen Benutzers vorgenommen wurden (z.B. der Autor, falls Du aus irgendeinem Grund nicht darauf zugreifen kannst).
4. Wenn es sich um ein Update oder einen Patch handelt, muss der Screenshot zeigen, dass die neuen Ergänzungen funktionieren, und keine alten Funktionen aus früheren Pull-Requests.
5. Die bereitgestellten Screenshots sollten echt und nicht bearbeitet worden sein.
6. Jeder zur Verfügung gestellte Code, der in diesem Repository zusammengeführt wird, wird unter der **Mozilla Public License 2.0** lizenziert.


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
2. Erstelle eine `presence.ts` und eine `tsconfg.json` Datei im Inneren.
3. Erstelle einen Ordner mit dem Namen `dist`.
4. Erstelle eine `metadata.json` im Ordner `dist`.

## Ausfüllen der tsconfig.json

Bitte gib den folgenden Code in die Datei `tsconfg.json` ein.
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
var presence = new Presence ({
    clientId: "000000000000000000", // Die Client-ID der Anwendung, die unter https://discordapp.com/developers/applications erstellt wurde.
    mediaKeys: false // Verwendung und Erkennung von Medien-Tastendrücken aktivieren.
}),

Strings = Presence.getStrings ({
    Play: "Presence.playback.playing",
    Pause: "Presence.playback.paused"
    // Damit können Sie übersetzte Strings erhalten
});

/ *

function myOutsideHeavyLiftingFunction () {
    // Erfasse und verarbeite alle deine Daten hier

    // Elementgreifer //
    // API-Aufrufe //
    // Variablensätze //
}

setInterval (10000, myOutsideHeavyLiftingFunction); 
// Führen Sie die vom UpdateData-Ereignis getrennte Funktion alle 10 Sekunden aus, um die Variablen abzurufen und festzulegen, die UpdateData abruft.

* /


Presence.on ("UpdateData", async () => {
    / * UpdateData wird immer ausgelöst. und sollte daher als Ihr Auffrischungszyklus oder "Häkchen" verwendet werden. Dies wird nach Möglichkeit mehrmals pro Sekunde aufgerufen.

    Es wird empfohlen, eine andere Funktion außerhalb dieser Ereignisfunktion einzurichten, die die Variablenwerte ändert und das Heavy Lifting ausführt, wenn Sie Daten von einer API aufrufen. * /

    var presenceData = {
        largeImageKey: "key", / * The key ( Dateiname) des Großbildes bei Vorhandensein. Diese werden hochgeladen und im Bereich Rich Presence Ihrer Anwendung mit dem Namen Art Assets * /
        smallImageKey benannt: "key", / * Der Schlüssel (Dateiname) des Large Image auf der Präsenz. Diese werden hochgeladen und im Bereich "Rich Presence" Ihrer Anwendung mit dem Namen "Art Assets * /
        smallImageText" benannt: "Some hover text", // Der Text, der angezeigt wird, wenn Sie den Mauszeiger über das kleine Bild bewegen.
        Details: "Browsing Page Name", // Der obere Abschnitt des Anwesenheitstextes
        lautet: "Leseabschnitt A", // Der untere Abschnitt des Anwesenheitstextes
        startTimestamp: 1577232000, // Der Zeitstempel der Unix-Epoche für den Beginn der Zählung ab
        endTimestamp: 1577151472000 // Wenn Sie Time Left anstelle von Elapsed anzeigen möchten, ist dies der Zeitstempel der Unix-Epoche, bei dem der Timer endet.
    }; / * Optional können Sie hier einen largeImageKey setzen und den Rest als variable Untereigenschaften ändern, zum Beispiel presenceSata.type = "blahblah"; Typbeispiele: details, state, etc. * /

    if (presenceData.details == null) {
        // Dies wird ausgelöst, wenn Sie keine Anwesenheitsdetails festlegen.
        presence.setTrayTitle (); // Löscht den Titel der Taskleiste für Mac-Benutzer
        presence.setActivity (); / * Update der Gegenwart ohne Daten, daher ist es und machen das große Bild des Discord Anwendungssymbol und der Text der Discord Anwendungsname Löschen * /
    else} {
        // Diese wird ausgelöst , wenn Sie Satz Präsenz Details
        presence.setActivity (PresenceData); // Aktualisiere die Präsenz mit allen Werten aus dem PresenceData-Objekt
    }
});
```
Du kannst dies in Deine `presence.ts` kopieren und die Werte bearbeiten. Das Festlegen aller Werte erfolgt innerhalb des updataData-Ereignisses.

Als Beispiele schlagen wir vor, den Präsenz-Code wie 1337x oder 9GAG zu betrachten.

Klicke [hier](/dev/presence/class) für weitere Informationen über die Präsenz-Klasse.

## Du kannst bestimmte Daten nicht abrufen?!

Viele Websites verwenden [iframes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([Inlineframes](https://en.wikipedia.org/wiki/HTML_element#Frames)). Diese HTML-Tags können mehrere Quellen enthalten, z.B. Videos. Aber sie sind nicht jedes Mal relevant. Einige sind versteckt oder werden einfach nicht aktiv genutzt. Prüfe, ob Du die benötigten Informationen extrahieren kannst, bevor Du Dir unnötige Arbeiten machst.

1. Überprüfe sie über die Browserkonsole (stelle sicher, dass Du Dich auf der Kategorie **Elements**) befindest.
2. Suche (<kbd>STRG</kbd>+<kbd>F</kbd> (Windows) oder <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
3. Führe `document.querySelectorAll("iframe")` aus.

Wenn feststellst, dass sich Deine Daten in einem iFrame befinden, musst Du folgende Schritte ausführen:
1. Erstelle eine `iframe.ts`-Datei.
2. Setze iFrame in Ihrer Metadatendatei auf `true`.
3. Fülle Deine iFrame-Datei aus.
```javascript
var iframe = new iFrame ();
iframe.on ("UpdateData", async () => {
  / *
  Hole alle benötigten Daten aus dem iFrame, speichere sie in Variablen
  und sende sie dann mit iframe.send
  * /
  iframe.send ( {// Daten senden
    video: video,
    time: video.duration
  }); 
});
```
4. Ermögliche Deiner Präsenz-Datei, Daten aus der iFrame-Datei zu empfangen.
```javascript
presence.on ("iFrameData", data => {
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
var presence = new Presence ({
    clientId: "000000000000000000", // Die Client-ID der Anwendung, die unter https://discordapp.com/developers/applications erstellt wurde.
    mediaKeys: false // Verwendung und Erkennung von Medien-Tastendrücken aktivieren.
}),

Strings = Presence.getStrings ({
    Play: "Presence.playback.playing",
    Pause: "Presence.playback.paused"
    // Damit können Sie übersetzte Strings erhalten
});

/ *

function myOutsideHeavyLiftingFunction () {
    // Erfasse und verarbeite alle deine Daten hier

    // Elementgreifer //
    // API-Aufrufe //
    // Variablensätze //
}

setInterval (10000, myOutsideHeavyLiftingFunction); 
// Führen Sie die Funktion getrennt von dem Ereignis Update alle 10 Sekunden zu erhalten und die Variablen gesetzt , die Update aufgreift

* /


presence.on ( „Update“, () => {
    // Update immer feuert, und sollte daher als Ihr Auffrischungszyklus oder "Häkchen" verwendet werden. Dies wird nach Möglichkeit mehrmals pro Sekunde aufgerufen.

    // Es wird empfohlen, eine andere Funktion außerhalb dieser Ereignisfunktion einzurichten, die die Variablenwerte ändert und das Heavy Lifting durchführt, wenn Sie Daten von einer API aufrufen.

    var presenceData = {
        largeImageKey: "key", / * Der Schlüssel (Dateiname) des großen Bilds in der Anwesenheit. Diese werden hochgeladen und im Bereich Rich Presence Ihrer Anwendung mit dem Namen Art Assets * /
        smallImageKey benannt: "key", / * Der Schlüssel (Dateiname) des Large Image auf der Präsenz. Diese werden hochgeladen und im Bereich "Rich Presence" Ihrer Anwendung mit dem Namen "Art Assets * /
        smallImageText" benannt: "Some hover text", // Der Text, der angezeigt wird, wenn Sie den Mauszeiger über das kleine Bild bewegen.
        Details: "Browsing Page Name", // Der obere Abschnitt des Anwesenheitstextes
        lautet: "Leseabschnitt A", // Der untere Abschnitt des Anwesenheitstextes
        startTimestamp: 1577232000, // Der Zeitstempel der Unix-Epoche für den Beginn der Zählung ab
        endTimestamp: 1577151472000 // Wenn Sie Time Left anstelle von Elapsed anzeigen möchten, ist dies der Zeitstempel der Unix-Epoche, bei dem der Timer endet.
    }; / * Optional können Sie hier einen largeImageKey setzen und den Rest als variable Untereigenschaften ändern, zum Beispiel presenceSata.type = "blahblah"; Typbeispiele: details, state, etc. * /

    if (presenceData.details == null) {
        // Dies wird ausgelöst, wenn Sie keine Anwesenheitsdetails festlegen.
        presence.setTrayTitle (); // Löscht den Titel der Taskleiste für Mac-Benutzer
        presence.setActivity (); / * Update der Gegenwart ohne Daten, daher ist es und machen das große Bild des Discord Anwendungssymbol und der Text der Discord Anwendungsname Löschen * /
    else} {
        // Diese wird ausgelöst , wenn Sie Satz Präsenz Details
        presence.setActivity (PresenceData); // Aktualisiere die Präsenz mit allen Werten aus dem PresenceData-Objekt
    }
});
```
Du kannst dies in Deine `presence.js` kopieren und die Werte bearbeiten. Das Festlegen aller Werte erfolgt innerhalb des updataData-Ereignisses.

Als Beispiele schlagen wir vor, den Präsenz-Code wie 1337x oder 9GAG zu betrachten.

Klicke [hier](/dev/presence/class) für weitere Informationen über die Präsenz-Klasse.

## Du kannst bestimmte Daten nicht abrufen?!

Viele Websites verwenden [iframes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([Inlineframes](https://en.wikipedia.org/wiki/HTML_element#Frames)). Diese HTML-Tags können mehrere Quellen enthalten, z.B. Videos. Aber sie sind nicht jedes Mal relevant. Einige sind versteckt oder werden einfach nicht aktiv genutzt. Prüfe, ob Du die benötigten Informationen extrahieren kannst, bevor Du Dir unnötige Arbeiten machst.

1. Überprüfe sie über die Browserkonsole (stelle sicher, dass Du Dich auf der Kategorie **Elements**) befindest.
2. Suche (<kbd>STRG</kbd>+<kbd>F</kbd> (Windows) oder <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
3. Führe `document.querySelectorAll("iframe")` aus.

Wenn feststellst, dass sich Deine Daten in einem iFrame befinden, musst Du folgende Schritte ausführen:
1. Erstelle eine `iframe.js`-Datei.
2. Setze iFrame in Ihrer Metadatendatei auf `true`.
3. Fülle Deine iFrame-Datei aus.
```javascript
var iframe = new iFrame ();
iframe.on ("UpdateData", () => {
    / *
    Alle benötigten Daten aus dem iFrame abrufen, in Variablen
    speichern und dann mit iframe.send
    * /
    senden iframe.send ({ // Daten senden
        video: video,
        time: video.duration  
    });
});
```
4. Ermögliche Deiner Präsenz-Datei, Daten aus der iFrame-Datei zu empfangen.
```javascript
presence.on ("iFrameData", data => {
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
    "id": "ID "
  }],
  " service ":" SERVICE ",
  " description ": {
    " de ":" DESCRIPTION "
  },
  " url ":" URL ",
  " version ":" VERSION ",
  "logo": "URL",
  "thumbnail": "URL",
  "color": "# HEX000",
  "tags": ["CATEGORY", "TAG"],
  "category": "CATEGORY" ,
  "regExp": "REGEXP",
  "iFrameRegExp": "REGEXP",
  "iframe": false
}
```

Bitte kopiere den obigen Code und füge ihn in Deine `metadata.json` ein. Du musst jetzt die Werte der Eigenschaften bearbeiten. Beachte, dass die folgenden Eigenschaften in Deiner `metadata.json` optional sind. Wenn Du sie nicht verwenden möchten, musst Du sie entfernen.
- `Mitwirkende`
- `regExp`
- `iframe`
- `iFrameRegExp`

**Erläuterung einiger Wertevoreinstellungen:**
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
      <td style="text-align:left">Der Titel des Dienstes, den diese Präsenz unterstützt. <br>(Muss derselbe Name sein wie der Ordner, in dem sich alles befindet)</td>
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
      <td style="text-align:left">URL des Dienstes.<br><b>Beispiel:</b><code>vk.com</code><br>
        <b>Diese URL muss mit der URL der Website übereinstimmen, da sie erkennt, ob es sich um die Website handelt, auf die das Skript angewendet werden soll.</b><br> Tun Sie <b>NICHT</b> fügen Sie <code>https: //</code> oder <code>http: //</code> innerhalb der URL noch einen Schrägstrich am Ende hinzu:
<code>https://premid.app/</code> -> <code>premid.app</code><br>
<b>Hinweis</b>: Einige URLs haben möglicherweise <code>www.</code> oder etwas anderes vor ihrer Domain. <b>NICHT</b> vergessen, es hinzuzufügen!<br>
Sie können mehrere URLs hinzufügen, indem Sie wie folgt vorgehen:<br>
<code>["URL1", "URL2", "ETC"]</code><br>
Sie können für diese Aufgabe auch regExp verwenden, das auch als Regex bezeichnet wird. Weitere Informationen hierzu finden Sie weiter unten.
      </td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code>
      </td>
      <td style="text-align:left"><code>Nein</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b>
      </td>
      <td style="text-align:left">Eine Zeichenfolge mit regulären Ausdrücken, die zum Abgleichen von URLs verwendet wird.<br>
      regExp oder auch Regex genannt, kann verwendet werden, wenn eine Website mehrere Unterdomänen hat.<br>
Sie können dazu den folgenden Befehl regExp verwenden:<br>
<code>([a-z0-9]+)[.]Domain[.]TLD "</code><br>
TLD steht beispielsweise für Top Level Domain: .com .net<br> 
<code>([a-z0-9]+)</code> bedeutet alles von a bis z und von 0 bis 9.<br>
        Sie können Ihren regExp bei <a href="https://regex101.com/">Regex101</a>testen</td>
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
      <td style="text-align:left">Eine Zeichenfolge, die die Kategorie darstellt, unter die die Anwesenheit fällt. Sehen Sie die gültigen Kategorien <a href="https://docs.premid.app/dev/presence/metadata#presence-categories">hier</a>.</td>
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
      <td style="text-align:left">Ein Selektor für reguläre Ausdrücke, der iframes auswählt, in die injiziert werden soll. Weitere Informationen finden Sie unter regExp.</td>
      <td style="text-align:left"><code>String</code>
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
- Du kannst `console.log("Test");` zwischen Deinen Code setzten und prüfen, ob Deine Browserkonsole diese Ausgabe liefert. Wenn ja, fahre fort und versuchen es nach der nächsten Funktion erneut. Wenn nicht, liegt ein Fehler vor.
- Wenn Dir das auch nicht hilft, frage einen Präsenzentwickler auf unserem [Discord-Server](https://discord.gg/PreMiD) um Hilfe.

# Dateien erklärt
- [Präsenzklasse](/dev/presence/class)
- [iFrame-Klasse](/dev/presence/iframe)
- [Metadatendatei](/dev/presence/metadata)
- [TypeScript-Konfiguration](/dev/presence/tsconfig)
{.links-list}