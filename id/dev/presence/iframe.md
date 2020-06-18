---
title: Kelas iFrame
description:
published: true
date: 2020-05-03T20:17:51.982Z
tags:
---

# Kelas iFrame
> Sistem iframe pada PreMiD kadang bermasalah dan dapat berperilaku tidak terduga, gunakan dengan hati-hati. 
> 
> {.is-danger}

## Perkenalan

Dalam beberapa skenario, presence Anda mungkin perlu mengakses elemen di dalam `iframes`.

Kode yang Anda tulis di dalam file `iframe.ts` Anda akan disuntikkan ke setiap iframe pada halaman.

Seperti presence, `iframes` memiliki kelasnya tersendiri yang dirancang untuk memperbarui data secara otomatis.

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

Event ini akan diluncurkan setiap kali iframe diperbarui.