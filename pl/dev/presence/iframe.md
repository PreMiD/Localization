---
title: Klasa iFrame
description:
published: tak
date: 2020-02-12T22:15:30.646Z
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

### `getUrl(String)`
Zwraca adres URL `iframe`.

## Wydarzenia
In `iframes`, events work similarly to the way they work in the `presence` class.

```typescript
iframe.on("UpdateData", async () => {
    // Code idzie tutaj...
});
```

Oto lista wszystkich wydarzeń:

#### `UpdateData`

To zdarzenie jest uruchamiane za każdym razem, gdy element iframe jest aktualizowany.

#### `MediaKeys` (wyłączony)

Wywoływany, gdy użytkownik korzysta z klawiszy multimedialnych na swojej klawiaturze, [ kliknij tutaj ](/dev/presence/class#mediakeys), aby uzyskać więcej informacji na temat klawiszy multimedialnych.