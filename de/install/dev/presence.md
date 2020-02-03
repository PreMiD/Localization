---
title: Präsenzentwicklung
description:
published: true
date: 2020-02-03T13:55:37.732Z
tags:
---

> Alle Präsenzen werden jetzt hier gespeichert: https://github.com/PreMiD/Presences 
> 
> {.is-info}

Version `2.x` führt den [Presence Store](https://premid.app/store). Benutzer haben jetzt die Möglichkeit, ihre Lieblingspräsenzen manuell über die Benutzeroberfläche der [Website](https://premid.app/)hinzuzufügen und zu entfernen.

# Richtlinien
> Wenn Sie nicht alle Richtlinien befolgen, wird Ihre Anwesenheit oder Abrufanforderung vom Github gelöscht. 
> 
> {.is-danger}

## Schaffung

Beachten Sie die folgende Liste, bevor Sie an Ihrer Anwesenheit arbeiten.
- Die Pull-Anforderung muss vollständig sein. Sie müssen über eine ordnungsgemäße Dateistruktur verfügen. Einschließlich des Ordners `dist` , der Datei `presence.js` Datei `metadata.json`.
- Die Präsenz **muss** mit der von Ihnen ausgewählten Website zusammenhängen.
- Es dürfen keine illegalen Websites vorhanden sein. Dazu gehören Stressfaktoren, Drogen, Kinderpornografie usw.
- Die Anwesenheitsmetadaten müssen gut geschriebenen Inhalt enthalten, einschließlich gültiger Titel und Beschreibungen.
- Die Medien, die Sie hinzufügen (Symbol / Miniaturbild), müssen mit der Website in Zusammenhang stehen und in Bezug auf Größe und Qualität verständlich sein.
- Die Dateistruktur muss sauber und verwaltet sein und darf keine zufälligen Dateien enthalten, die nichts für die Funktion der Präsenz bedeuten.
- Die Anwesenheit **darf nicht** haben keine bösen Absichten. Dazu gehören das Stehlen / Weitergeben von privaten Informationen, die Beeinträchtigung des Verhaltens der Website usw.
- Wenn Sie eine Präsenz für eine Website - Design und die Website geschieht in der Zukunft ändern, Sie **ARE** verantwortlich für die Anwesenheit wieder an die Arbeit zu aktualisieren , wie erwartet. Wenn Sie es nicht innerhalb eines akzeptablen Zeitrahmens beheben, sind andere Präsenz Entwickler erlaubt **überschreiben** Ihre Anwesenheit mit den Änderungen zu erfüllen.
- Das Vorhandensein muss vor der Veröffentlichung getestet werden, um sicherzustellen, dass alles wie erwartet funktioniert.
- Ihre Anwesenheit muss SFW-Bilder und -Beschreibungen haben, unabhängig davon, ob es NSFW ist oder nicht. Wenn es sich bei Ihrer Anwesenheit um eine `nsfw-` Website handelt, fügen Sie den `nsfw-` Tag zu Ihren Metadaten hinzu.
- Ihre Präsenz muss **NICHT** für kostenlose Domains oder Hosts sein (z.B. .TK, [alle freien Freenom-Domains], . F.GD, etc...), Ausnahmen können gemacht werden, wenn ein Nachweis vorgelegt wird, dass es sich um eine bezahlte Domain handelt.
- Die `small ImageKey` und `smallImageText` Felder sollen zusätzlich/sekundären Kontext (wie "playing"/"paused" für Video-Sites bereitstellen "Browsing" für normale Websites und andere Fälle). Du bist nicht berechtigt Discord Profile zu fördern oder nichts mit PreMiD zu tun.
- Die Anforderungen für Logos sind allerdings 1:1 (Quare) in 512px, Thumbnails, aber sollten entweder [weite Werbekarten](https://i.imgur.com/3QfIc5v.jpg) oder einfach [Screenshots](https://i.imgur.com/OAcBmwW.png) sein, falls die ersten nicht verfügbar sind.
- Die Präsenzen sollten mindestens 1 Tag haben, dies ist eine Anforderung nach Design und kann in der Zukunft optional sein.
- Das Feld `url` darf nicht `http://` oder `https://`enthalten, auch nicht die Parameter (z. eine Präsenz für `https://www.google.com/search?gws_rd=ssl` hat nur `www.google.com` im `url` Feld.
- Beschreibungen und Tags sollten immer in Arrays sein, auch wenn es nur ein Element ist. Das Feld `url` sollte jedoch nur ein String sein, wenn es sich um eine Domain handelt.
- Instabile Seiten, die ständig APIs/Domains ändern Zufallsgenerierung von HTML-Elementen oder einfach nur in einer schweren Entwicklung sind nicht erlaubt und werden aus dem Store entfernt.

## Änderung

In einigen Situationen verhalten sich Anwesenheiten möglicherweise unerwartet oder verwenden einige geringfügige Änderungen, um die Funktionalität zu verbessern. Hier ist eine kompilierte Liste, die Sie befolgen müssen, um Präsenzen zu ändern.
- Sie dürfen den Ersteller der Präsenz nicht ändern. Dies gilt nur, wenn Sie es erneut schreiben dürfen. Sie können sich selbst als [Mitwirkende hinzufügen](/dev/presence/metadata).
- Stellen Sie sicher, dass die Änderungen nützlich sind. Dies können Korrekturen (Code und Tippfehler), Ergänzungen (Beschreibungen und Tags) usw. sein.
- Bestätigen Sie, dass Ihre Änderungen wirksam sind, bevor Sie sie veröffentlichen. Erstellen Sie keine Pull-Anforderungen, ohne das Ergebnis Ihrer Änderungen zu kennen.
- Branding / Überschreiben Sie eine Präsenz nur dann vollständig, wenn dies von einem `Presence Verifier` oder einem Mitarbeiter genehmigt wurde.

# Nachprüfung
> Wenn Sie Pull-Anforderungen zum Hinzufügen oder Ändern vorhandener Anwesenheiten stellen, müssen Sie einen Screenshot hinzufügen. Für Änderungen an den Metadaten / tsconfig einer Präsenz ist jedoch kein Screenshot erforderlich. *Ihr Screenshot muss mit der Pull-Anforderung direkt auf github hochgeladen werden. Verwenden Sie keine Websites für die gemeinsame Nutzung von Bildern von Drittanbietern.* 
> 
> {.is-danger}

Damit Ihre Präsenz die Geschäfte erreicht, muss sie einen Prozess auf github durchlaufen, um zu bestätigen, dass sie wie erwartet funktioniert. Hier sind ein paar Dinge, auf die Sie achten sollten, wenn Sie Ihre Pull-Anfrage stellen.

Unser Presence Verification-Team hat eine eigene Rolle. Achten Sie auf `Presence Verifier` auf dem Discord-Server, um zu erfahren, wer daran beteiligt ist.

1. Es sind zwei Überprüfer erforderlich, um zu bestätigen, dass Ihre Anwesenheit den Standards entspricht. Wenn Sie Änderungsanforderungen erhalten, bemühen Sie sich, diese zu beheben, da sie sonst nicht hinzugefügt werden.
2. Wenn wir Änderungen anfordern und Ihre Pull-Anforderung **7 Tage Inaktivität** überschreitet, ohne die erforderlichen Änderungen vorzunehmen, müssen wir sie schließen.
3. Sie dürfen Screenshots von Änderungen machen, die mit Hilfe eines anderen Benutzers vorgenommen wurden. (zB der Autor, falls Sie aus irgendeinem Grund nicht darauf zugreifen können).
4. Wenn es sich um ein Update oder einen Patch handelt, muss der Screenshot zeigen, dass die neuen Ergänzungen funktionieren, und keine alten Funktionen aus früheren Pull-Anforderungen.
5. Die bereitgestellten Screenshots sollten echt sein und nicht bearbeitet werden.
6. Jeder zur Verfügung gestellte Code, der in diesem Repository zusammengeführt wird, wird unter der **Mozilla Public License 2.0**lizenziert.


Nachdem alle ordnungsgemäßen Bewertungen erfüllt wurden, wird Ihre Pull-Anfrage mit dem Shop zusammengeführt.

# Struktur (TypeScript)
Sie können wählen, ob Sie Ihre Präsenz mit [JavaScript](https://www.javascript.com/) oder  [TypeScript](https://www.typescriptlang.org/)codieren möchten. [TypeScript](https://www.typescriptlang.org/) enthält einige besonders scharfe Typdefinitionen, so dass das Beheben und Erkennen von Fehlern viel einfacher ist. Wenn Sie nur [JavaScript](https://www.javascript.com/) möchten, können Sie zu [Structure (JavaScript)](/dev/presence#structure-javascript)springen.

## Installation
1. Installiere [Git](https://git-scm.com/).
2. Installiere [Node](https://nodejs.org/en/) (kommt mit [npm](https://www.npmjs.com/)).
3. Installiere [TypeScript](https://www.typescriptlang.org/index.html#download-links) (öffne ein Terminal und `npm install -g typescript`).

## Projekt klonen
1. Öffnen Sie ein Terminal und geben Sie `git clone https://github.com/PreMiD/Presences`.
2. Wählen Sie einen Ordner Ihrer Wahl.
3. Öffnen Sie es in Ihrem Code-Editor.

## Ordner und Dateien erstellen

1. Erstellen Sie einen Ordner mit dem Namen **** (keine URL) des Dienstes, den Sie unterstützen möchten.
2. Erstellen Sie eine `presence.ts` und eine `tsconfg.json` Datei im Inneren.
3. Erstellen Sie einen Ordner mit dem Namen `dist` inside.
4. Erstellen Sie eine Datei `metadata.json` im Ordner `dist`.

## Füllen Sie die Datei tsconfig.json aus

Bitte geben Sie den folgenden Code in die Datei `tsconfg.json`.
```javascript
{
  "extended": "../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
}
```
Um mehr zu erfahren über Typoskript Konfiguration klicken [hier](/dev/presence/tsconfig).

## Füllen Sie die Datei metadata.json aus

Klicken Sie auf [hier](/dev/presence#filling-in-the-metadatajson-file-2) zu sehen, wie es ausgefüllt wird. Sie können ganz einfach am unteren Rand der Erklärung zurückklicken.

Wir haben eine `metadata.json` Datei für die Lazy Peeps [hier](https://eggsy.codes/projects/premid/mdcreator).

## Fertig machen

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
Sie können dies in Ihre Datei `presence.ts` kopieren und die Werte bearbeiten. Das Festlegen aller Werte erfolgt innerhalb des updataData-Ereignisses.

Als Beispiele schlagen wir vor, den Anwesenheitscode wie 1337x oder 9GAG zu betrachten.

Weitere Informationen über die Präsenz Klasse klicken [hier](/dev/presence/class).

## Sie können bestimmte Daten nicht abrufen ?!

Viele Websites verwenden [iframes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([Inlineframes](https://en.wikipedia.org/wiki/HTML_element#Frames)). Diese HTML-Tags können mehrere Quellen enthalten, z. B. Videos. Aber sie sind nicht jedes Mal relevant. Einige sind versteckt oder werden einfach nicht aktiv genutzt. Prüfen Sie, ob Sie die benötigten Informationen extrahieren können, bevor Sie unnötige Arbeiten ausführen.

1. Überprüfen Sie sie über die Browserkonsole (stellen Sie sicher, dass Sie sich auf der Registerkarte **Elements**).
2. Suchen (<kbd>Strg</kbd>+<kbd>F</kbd> (Windows) oder <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
3. Führen Sie `document.querySelectorAll ("iframe")`.

Wenn Sie feststellen, dass sich Ihre Daten in einem iFrame befinden, müssen Sie folgende Schritte ausführen:
1. Erstellen Sie eine `iframe.ts` Datei.
2. Setzen Sie iFrame in Ihrer Metadatendatei auf `true`.
3. Füllen Sie Ihre iFrame-Datei aus.
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
4. Ermöglichen, dass Ihre Anwesenheitsdatei Daten aus der iFrame-Datei empfängt.
```javascript
presence.on ("iFrameData", data => {
  iFrameVideo = data.video;
  currentTime = data.time;
});
```
**Hinweis:** Muss außerhalb des updateData-Ereignisses platziert werden.
## Kompilieren
Öffnen Sie eine Konsole in Ihrem Ordner und geben Sie `tsc -w` , um die `presence.ts` in den Ordner `/ dist` zu kompilieren.

# Struktur (JavaScript)
## Projekt klonen
1. Installiere [Git](https://git-scm.com/).
2. Öffnen Sie ein Terminal und geben Sie `git clone https://github.com/PreMiD/Presences`.
3. Wählen Sie einen Ordner Ihrer Wahl.
4. Öffnen Sie es in Ihrem Code-Editor.

## Ordner und Dateien erstellen

1. Erstellen Sie einen Ordner mit dem Namen **** (keine URL) des Dienstes, den Sie unterstützen möchten.
3. Erstellen Sie einen Ordner mit dem Namen `dist` inside.
4. Erstellen Sie eine `metadata.json` Datei und eine `presence.js` Datei im Ordner `dist`.

## Füllen Sie die Datei metadata.json aus

Klicken Sie auf [hier](/dev/presence#filling-in-the-metadatajson-file-2) zu sehen, wie es ausgefüllt wird. Sie können ganz einfach am unteren Rand der Erklärung zurückklicken.

Wir haben eine `metadata.json` Datei für die Lazy Peeps [hier](https://eggsy.codes/projects/premid/mdcreator).

## Fertig machen

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
Sie können dies in Ihre Datei `presence.js` kopieren und die Werte bearbeiten. Das Festlegen aller Werte erfolgt innerhalb des updataData-Ereignisses.

Als Beispiele schlagen wir vor, den Anwesenheitscode wie 1337x oder 9GAG zu betrachten.

Weitere Informationen über die Präsenz Klasse klicken [hier](/dev/presence/class).

## Sie können bestimmte Daten nicht abrufen ?!

Viele Websites verwenden [iframes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([Inlineframes](https://en.wikipedia.org/wiki/HTML_element#Frames)). Diese HTML-Tags können mehrere Quellen enthalten, z. B. Videos. Aber sie sind nicht jedes Mal relevant. Einige sind versteckt oder werden einfach nicht aktiv genutzt. Prüfen Sie, ob Sie die benötigten Informationen extrahieren können, bevor Sie unnötige Arbeiten ausführen.

1. Überprüfen Sie sie über die Browserkonsole (stellen Sie sicher, dass Sie sich auf der Registerkarte **Elements**).
2. Suchen (<kbd>Strg</kbd>+<kbd>F</kbd> (Windows) oder <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
3. Führen Sie `document.querySelectorAll ("iframe")`.

Wenn Sie feststellen, dass sich Ihre Daten in einem iFrame befinden, müssen Sie folgende Schritte ausführen:
1. Erstellen Sie eine `iframe.js` Datei.
2. Setzen Sie iFrame in Ihrer Metadatendatei auf `true`.
3. Füllen Sie Ihre iFrame-Datei aus.
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
4. Ermöglichen, dass Ihre Anwesenheitsdatei Daten aus der iFrame-Datei empfängt.
```javascript
presence.on ("iFrameData", data => {
  iFrameVideo = data.video;
  currentTime = data.time;
});
```
**Hinweis:** Muss außerhalb des updateData-Ereignisses platziert werden.
# Füllen Sie die Datei metadata.json aus
Wir haben eine `metadata.json` Datei für die Lazy Peeps [hier](https://eggsy.codes/projects/premid/mdcreator). Es wird immer noch empfohlen, dies durchzulesen, damit Sie wissen, wie es funktioniert.

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

Bitte kopieren Sie den obigen Code und fügen Sie ihn in Ihre Datei `metadata.json`. Sie müssen jetzt die Werte der Eigenschaften bearbeiten. Beachten Sie, dass die folgenden Eigenschaften in Ihrer Datei `metadata.json` optional sind. Wenn Sie sie nicht verwenden möchten, müssen Sie sie entfernen.
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

Klicken Sie auf [hier](/dev/presence#filling-in-the-metadatajson-file) , um zur TypeScript-Erklärung zurückzukehren. Klicken Sie auf [hier](/dev/presence#filling-in-the-metadatajson-file-1) , um zur JavaScript-Erklärung zurückzukehren.

# Präsenz laden
1. Öffnen Sie das Popup und halten Sie die Taste <kbd>Shift</kbd> auf Ihrer Tastatur gedrückt.
2. **Präsenz laden** wird im Bereich Präsenz angezeigt.
3. Klicken Sie darauf, während Sie die Taste <kbd>Shift</kbd> gedrückt halten.
4. Wählen Sie den Ordner / dist Ihrer Anwesenheit.

# Einige hilfreiche Dinge
## Hot-Reload
Die Website, auf der Sie sich befinden, wird jedes Mal automatisch neu geladen, wenn Sie eine Datei in Ihrem Ordner speichern.

## Debuggen
- Sie können `console.log ("Test") setzen;` zwischen Ihrem Code und prüfen Sie, ob Ihre Browserkonsole diese Ausgabe liefert. Wenn ja, fahren Sie fort und versuchen Sie es nach der nächsten Funktion erneut. Wenn nicht, liegt ein Fehler vor.
- Wenn Ihnen das auch nicht hilft, fragen Sie einen Präsenzentwickler auf unserem [Discord-Server](https://discord.gg/PreMiD) um Hilfe.

# Dateien erklärt
- [Präsenzklasse](/dev/presence/class)
- [iFrame-Klasse](/dev/presence/iframe)
- [Metadatendatei](/dev/presence/metadata)
- [TypeScript-Konfiguration](/dev/presence/tsconfig)
{.links-list}