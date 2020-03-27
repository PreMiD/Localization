---
title: iFrame Trieda
description:
published: true
date: 2020-02-12T22:15:30.646Z
tags:
---

# iFrame Trieda
> iFrame systém s PreMiDom je problematický a môže mať neočakávane správanie, používajte opatrne. 
> 
> {.is-danger}

## Úvod

V niektorých prípadoch, vaša prítomnosť možno bude potrebovať prístup k prvkom vo vnútri `iframu`.

Kód ktorý vpíšete do vnútra vášho `iframe.ts` súboru sa vloží do každého iframe na stránke.

Ako prítomnosti, `iframes` má svoju triedu určenú na automatickú aktualizáciu údajov.

```typescript
let iframe = new iFrame();

iframe.on("UpdateData", async () => {
    // Kód ide sem...
});
```

## Metódy

### `send(Object)`
Odošle údaje do prítomnosti. Použitím tejto metódy, prítomnosť udeje `iFrameData`.

### `getUrl(String)`
Vráti URL `iframu`.

## Udalosti
Vo `iframe`, udalostiach pracujú podobným spôsobom ako pracujú v triede `prítomností`.

```typescript
iframe.on("UpdateData", async () => {
    // Kód ide sem...
});
```

Tu je zoznam všetkých udalostí:

#### `UpdateData`

Táto udalosť sa spustí pri každej aktualizácii prvku iframe.

#### `MediaKeys` (disabled)

Spúšťa sa, keď používateľ na klávesnici používa mediálne klávesy, [kliknite sem](/dev/presence/class#mediakeys) na získanie viac informácií o mediálnych klávesách.