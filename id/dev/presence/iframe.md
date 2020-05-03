---
title: Kelas iFrame
description:
published: true
date: 2020-05-03T20:17:51.982Z
tags:
---

# Kelas iFrame
> The iframe system with PreMiD is problematic and can have unexpected behavior, use with caution. 
> 
> {.is-danger}

## Perkenalan

Dalam beberapa skenario, presence Anda mungkin perlu mengakses elemen di dalam `iframes`.

Kode yang Anda tulis di dalam file `iframe.ts` Anda akan disuntikkan ke setiap iframe pada halaman.

Like presences, `iframes` have their own classes designed to automatically update data.

```typescript
let iframe = new iFrame();

iframe.on("UpdateData", async () => {
    // Kode disini...
});
```

## Metode

### `send(Object)`
Mengirim data ke presence. Menggunakan metode ini akan membuat presence melemparkan acara `iFrameData`.

### `getUrl()`
Mengembalikan URL `iframe`.

## Acara
Di `iframes`, acara bekerja sama dengan cara kerjanya di kelas `presence`.

```typescript
iframe.on("UpdateData", async () => {
    // Kode disini...
});
```

Berikut adalah daftar semua acara:

#### `UpdateData`

This event is fired every time the iframe is being updated.