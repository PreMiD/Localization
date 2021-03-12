---
title: iFrame klasė
description:
published: true
date: 2020-05-03T20:17:51.982Z
tags:
---

# iFrame klasė
> Iframe sistema su PreMiD yra problematiška ir gali sukelti netikėtų rezultatų, naudoti atsargiai. 
> 
> {.is-danger}

## Įvadas

Kai kuriuose scenarijuose, jūsų statusas gali reikalauti pasiekti elementus esančius `iframes` viduje.

Kodas kurį jūs rašote savo `iframe.ts` faile, būna įterptas į kiekvieną iframe svetainėje.

Kaip ir statusai, `iframes` turi savo klases skirtas automatiškai atnaujinti duomenis.

```typescript
let iframe = new iFrame();

iframe.on("UpdateData", async () => {
    // Code goes here...
});
```

## Metodika

### `send(Object)`
Išsiunčia duomenis statusui. Naudojantis šiuo metodu, privers statusą išmesti `iFrameData` įvykį.

### `getUrl()`
Grąžins žiniatinklio `iframe` adresą.

## Įvykiai
`iframes`, įvykiai veikia panašiu būdu kaip jie veikia ir `statusų` klasėje.

```typescript
iframe.on("UpdateData", async () => {
    // Code goes here...
});
```

Štai visų įvykių sąrašas:

#### `UpdateData`

Šis įvykis yra išaunamas kiekvieną kart kai iframe yra atnaujinamas.