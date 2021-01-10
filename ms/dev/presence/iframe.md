---
title: Kelas iFrame
description:
published: true
date: 2020-05-03T20:17:51.982Z
tags:
---

# Kelas iFrame
> Sistem iFrame dengan PreMiD agak bermasalah dan boleh menyebabkan perlakuan tidak menentu, gunakan dengan berhati-hati. 
> 
> {.is-danger}

## Introduction

Dalam sesetengah senario, Presence anda mungkin perlu capai unsur di dalam `iframes`.

Kod yang anda tulis di dalam fail `iframe.ts` anda disuntik masuk ke setiap iFrame di halaman tersebut.

Seperti Presence, `iframes` mempunyai kelas mereka sendiri yang direka untuk mengemas kini data secara automatik.

```typescript
let iframe = new iFrame();

iframe.on("UpdateData", async () => {
    // Code goes here...
});
```

## Methods

### `send(Object)`
Hantar data ke Presence. Penggunaan kaedah ini akan buatkan Presence mengembalikan peristiwa `iFrameData`.

### `getUrl()`
Mengembalikan URL untuk `iFrame`.

## Peristiwa
Dalam `iFrame`, peristiwa dijalankan dengan cara yang serupa dengan cara peristiwa dijalankan dalam kelas `presence`.

```typescript
iframe.on("UpdateData", async () => {
    // Code goes here...
});
```

Ini senarai kesemua peristiwa:

#### `UpdateData`

Peristiwa ini dijalankan setiap kali iFrame dikemas kini.