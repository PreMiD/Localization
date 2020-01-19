---
title: iFrame Class
description:
published: vero
date: 2019-10-06T22:40:09.426Z
tags:
---

# iFrame Class
> Il sistema iframe con PreMiD è problematico e può avere un comportamento inaspettato, utilizzare con attenzione. 
> 
> {.is-danger}

## Introduzione

In alcuni scenari, la tua presence può avere bisogno di accedere ad elementi posizionati dentro `iframe`.

Il codice che scrivi dentro il tuo file `iframe.ts` verrà iniettato in ogni iframe della pagina.

Come le presence, gli `iframe` hanno le loro classi progettate per aggiornare i dati automaticamente.

```typescript
let iframe = new iFrame();

iframe.on("UpdateData", async () => {
    // Il codice va qui...
});
```

## Metodi

### `send(Object)`
Manda dati alla presence. Using this method will make the presence throw a `iFrameData` event.

### `getUrl(String)`
Returns the URL of the `iframe`.

## Eventi
In `iframes`, events work similarly to the way they work in the `presence` class.

```typescript
iframe.on("UpdateData", async () => {
    // Code goes here...
});
```

Here is a list of all of the events:

#### `UpdateData`

This event is fired every time the iframe is being updated.

#### `MediaKeys` (disabilitato)

Lanciato quando un utente utilizza i tasti media sulla sua tastiera, [clicca qua](/dev/presence/class#mediakeys) per ottenere più informazioni riguardo i tasti media.