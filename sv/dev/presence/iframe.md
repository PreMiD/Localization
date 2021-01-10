---
title: iFrame klass
description:
published: true
date: 2020-05-03T20:17:51.982Z
tags:
---

# iFrame Class
> Iframe systemet med PreMiD är problematiskt och kan ha oväntat beteende, användning med försiktighet. 
> 
> {.is-danger}

## Introduction

I vissa scenarier kan din presence behöva komma åt element inuti `iframes`.

Koden som du skriver i din `iframe.ts` fil laddas i varje iframe på sidan.

Som presences, `iframes` har sina egna klasser tillvärkade för att automatiskt uppdatera data.

```typescript
låt iframe = new iFrame();

iframe.on("UpdateData", async () => {
    // Koden går här...
});
```

## Methods

### `Skicka(Objekt)`
Skickar data till presencen. Genom att använda denna metod kommer presencen att kasta ett `iFrameData` event.

### `getUrl()`
Returnerar URLen till `iframe`.

## Events
I `iframes`, händelser fungerar på samma sätt som de arbetar i `närvaro` klassen.

```typescript
iframe.on("UpdateData", async () => {
    // Koden går här...
});
```

Här är en lista över alla händelser:

#### `Uppdateringsdata`

Denna händelse avfyras varje gång iframe uppdateras.