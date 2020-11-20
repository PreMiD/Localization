---
title: iFrame Class
description:
published: true
date: 2020-05-03T20:17:51.982Z
tags:
---

# iFrame Class
> The iframe system with PreMiD is problematic and can have unexpected behavior, use with caution. 
> 
> {.is-danger}

## Pengenalan

Dalam sesetengah senario, Presence anda mungkin perlu capai unsur di dalam `iframes`.

The code that you write inside of your `iframe.ts` file gets injected into every iframe on the page.

Seperti Presence, `iframes` mempunyai kelas mereka sendiri yang direka untuk mengemas kini data secara automatik.

```typescript
let iframe = new iFrame();

iframe.on("UpdateData", async () => {
    // Code goes here...
});
```

## Kaedah

### `send(Object)`
Hantar data ke Presence. Penggunaan kaedah ini akan buatkan Presence mengembalikan peristiwa `iFrameData`.

### `getUrl()`
Returns the URL of the `iframe`.

## Events
Dalam `iframes`, peristiwa dijalankan dengan cara yang serupa dengan cara peristiwa dijalankan dalam kelas `presence`.

```typescript
iframe.on("UpdateData", async () => {
    // Code goes here...
});
```

Here is a list of all of the events:

#### `UpdateData`

This event is fired every time the iframe is being updated.