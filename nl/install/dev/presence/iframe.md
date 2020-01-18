---
title: iFrame Klasse
description:
published: true
date: 2019-10-06T22:40:09.426Z
tags:
---

# iFrame Klasse
> Het iframe-systeem met PreMiD is problematisch en kan onverwacht gedrag hebben, voorzichtig gebruiken. 
> 
> {.is-danger}

## Introductie

In sommige scenario's heeft jouw presence mogelijk toegang nodig tot elementen in `iframes`.

De code die je in je `iframe.ts` bestand schrijft, wordt in elk iframe op de pagina geïnjecteerd.

Zoals presences hebben `iframes` hun eigen klasse ontworpen om de gegevens automatisch bij te werken.

```typescript
let iframe = new iFrame();

iframe.on("UpdateData", async () => {
    // Code gaat hier...
});
```

## Methodes

### `send(Object)`
Verzendt gegevens naar de presence. Met behulp van deze methode gooit u een `iFrameData` event.

### `getUrl(String)`
Geeft als resultaat de URL van de `iframe`.

## Events
In `iframes`werkt events net zoals de manier waarop ze werken in de `presence` klas.

```typescript
iframe.on("UpdateData", async () => {
    // Code goes here...
});
```

Here is a list of all of the events:

#### `UpdateData`

This event is fired every time the iframe is being updated.

#### `MediaKeys` (uitgeschakeld)

Schiet af wanneer de gebruiker gebruik maakt van mediaknoppen op zijn toetsenbord, [klik hier](/dev/presence/class#mediakeys) voor meer informatie over mediaknoppen.