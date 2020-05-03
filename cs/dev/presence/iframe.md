---
title: iFrame Třída
description:
published: true
date: 2020-05-03T20:17:51.982Z
tags:
---

# iFrame Třída
> Systém iframe s PreMiD je problematický a může mít neočekávané chování, používat s opatrností. 
> 
> {.is-danger}

## Úvod

V některých scénářích může být potřeba přistupovat k elementům uvnitř `iframů`.

Kód, který píšete uvnitř vašeho `iframe.ts` souboru se vloží do každého iframe na stránce.

Stejně jako přítomnost, `iframy` mají své vlastní třídy určené k automatické aktualizaci dat.

```typescript
let iframe = nový iFrame();

iframe.on("UpdateData", async () => {
    // Code zde ...
});
```

## Metody

### `send(objekt)`
Odešle data do přítomnosti. Pomocí této metody se díky přítomnosti hodí událost `iFrameData`.

### `getUrl()`
Vrátí URL adresu `iframe`.

## Události
V `iframech`události fungují podobně jako v `přítomnosti`.

```typescript
iframe.on("UpdateData", async () => {
    // Code goes sem...
});
```

Zde je seznam všech událostí:

#### `UpdateData`

Tato událost je vypálena pokaždé, když se aktualizuje iframe