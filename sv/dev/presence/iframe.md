---
title: iFrame klass
description:
published: true
date: 2020-05-03T20:17:51.982Z
tags:
---

# iFrame klass
> Iframe systemet med PreMiD är problematiskt och kan ha oväntat beteende, användning med försiktighet. 
> 
> {.is-danger}

## Introduktion

I vissa scenarier kan din närvaro behöva komma åt element inuti `iframes`.

Koden som du skriver i din `iframe.ts` fil injiceras i varje iframe på sidan.

Liksom närvaro, `iframes` har sina egna klasser utformade för att automatiskt uppdatera data.

```typescript
låt iframe = new iFrame();

iframe.on("UpdateData", async () => {
    // Koden går här...
});
```

## Metoder

### `Skicka(Objekt)`
Skickar data till närvaron. Genom att använda denna metod kommer närvaron att kasta en `iFrameData` -händelse.

### `getUrl()`
Returnerar URL:en till `iframe`.

## Händelser
I `iframes`, händelser fungerar på samma sätt som de arbetar i `närvaro` klassen.

```typescript
iframe.on("UpdateData", async () => {
    // Koden går här...
});
```

Här är en lista över alla händelser:

#### `Uppdateringsdata`

Denna händelse avfyras varje gång iframe uppdateras.