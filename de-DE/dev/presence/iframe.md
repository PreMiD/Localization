---
title: iFrame-Klasse
description:
published: true
date: 2020-05-03T20:17:51.982Z
tags:
---

# iFrame Class
> Das iframe-System mit PreMiD ist problematisch und kann unerwartetes Verhalten aufweisen. Sei vorsichtig. 
> 
> {.is-danger}

## Einleitung

In einigen Szenarien muss deine Presence möglicherweise auf Elemente innerhalb von `iframes` zugreifen.

Der Code, den du in deine Datei `iframe.ts` schreibst, wird in jeden iframe auf der Seite eingefügt.

Wie bei Presences haben `iframes` ihre eigenen Klassen, um Daten automatisch zu aktualisieren.

```typescript
let iframe = new iFrame();

iframe.on("UpdateData", async () => {
    // Code goes here...
});
```

## Methoden

### `send(Object)`
Sendet Daten an die Presence. Bei Verwendung dieser Methode löst die Presence ein `iFrameData`-Event aus.

### `getUrl()`
Gibt die URL des `iframe` aus.

## Events
In `iframes` funktionieren Events ähnlich wie in der Klasse `Presence`.

```typescript
iframe.on("UpdateData", async () => {
    // Code goes here...
});
```

Hier ist eine Liste aller Events:

#### `UpdateData`

Dieses Event wird jedes Mal ausgelöst, wenn der iframe aktualisiert wird.