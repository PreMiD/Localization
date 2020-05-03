---
title: Klasa iFrame
description:
published: tak
date: 2020-05-03T20:17:51.982Z
tags:
---

# Klasa iFrame
> System iframe z PreMiD jest problematyczny i może powodować nieoczekiwane zdarzenia, używaj go ostrożnie. 
> 
> {.is-danger}

## Wprowadzenie

W niektórych scenariuszach Twoja obecność może wymagać dostępu do elementów wewnątrz `iframes`.

Kod, który zapisujesz wewnątrz pliku `iframe.ts` jest wstrzykiwany do każdego iframe na stronie.

Podobnie jak obecności, `iframes` mają własne klasy zaprojektowane do automatycznej aktualizacji danych.

```typescript
let iframe = new iFrame();

iframe.on("UpdateData", async () => {
    // Tutaj wprowadź kod...
});
```

## Metody

### `send(Object)`
Wysyła dane do obecności. Użycie tej metody sprawi, że obecność będzie wydarzeniem `iFrameData`.

### `getUrl()`
Zwraca adres URL `iframe`.

## Wydarzenia
W `iframe` zdarzenia działają podobnie jak w klasie `presence`.

```typescript
iframe.on("UpdateData", async () => {
    // Tutaj wprowadzamy kod...
});
```

Oto lista wszystkich wydarzeń:

#### `UpdateData`

To zdarzenie jest uruchamiane za każdym razem, gdy element iframe jest aktualizowany.