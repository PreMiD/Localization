---
title: iFrame-Klasse
description: 
published: true
date: 2020-02-12T22:27:12.025Z
tags: 
---

# iFrame-Klasse
> Das iframe-System mit PreMiD ist problematisch und kann unerwartetes Verhalten aufweisen. Seien Sie vorsichtig. 
> 
> {.is-danger}

## Einführung

In einigen Szenarien muss Ihre Anwesenheit möglicherweise auf Elemente innerhalb von `iframes`zugreifen.

Der Code, den Sie in Ihre Datei `iframe.ts` schreiben, wird in jeden iframe auf der Seite eingefügt.

Wie bei Präsenzen haben `iframes` ihre eigenen Klassen, um Daten automatisch zu aktualisieren.

```typescript
let iframe = new iFrame ();

iframe.on ("UpdateData", async () => {
    // Code geht hierher ...
});
```

## Methoden

### `senden (Objekt)`
Sendet Daten an die Anwesenheit. Bei Verwendung dieser Methode löst die Anwesenheit ein iFrameData</code> Ereignis mit `aus.</p>

<h3 spaces-before="0"><code>getUrl (String)`</h3>
Gibt die URL des `iframe`.

## Veranstaltungen
In `iframes`funktionieren Ereignisse ähnlich wie in der Klasse `Presence`.

```typescript
iframe.on ("UpdateData", async () => {
    // Code geht hier ...
});
```

Hier ist eine Liste aller Veranstaltungen:

#### `Daten aktualisieren`

Dieses Ereignis wird jedes Mal ausgelöst, wenn der Iframe aktualisiert wird.

#### `MediaKeys` (deaktiviert)

Wird ausgelöst, wenn der Benutzer Medientasten auf seiner Tastatur verwendet. [Klicken Sie hier](/dev/presence/class#mediakeys) , um weitere Informationen zu Medientasten zu erhalten.