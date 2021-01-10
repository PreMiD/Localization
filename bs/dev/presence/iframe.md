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

## Introduction

U nekim će slučajevima možda biti potrebno da pristupite elementima unutar `iframes`.

Kod koji upišete unutar datoteke `iframe.ts` ubacuje se u svaki iframe na stranici.

Kao i prisutnosti, `iframes` imaju vlastite časove osmišljene za automatsko ažuriranje podataka.

```typescript
let iframe = new iFrame();

iframe.on("UpdateData", async () => {
    // Code goes here...
});
```

## Methods

### `send(Object)`
Šalje podatke prisutnosti. Korištenjem ove metode natjerat će se na prisustvo `iFrameData`.

### `getUrl()`
Returns the URL of the `iframe`.

## Events
In `iframes`, events work similarly to the way they work in the `presence` class.

```typescript
iframe.on("UpdateData", async () => {
    // Code goes here...
});
```

Here is a list of all of the events:

#### `UpdateData`

This event is fired every time the iframe is being updated.