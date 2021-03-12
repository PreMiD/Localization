---
title: iFrame-luokka
description:
published: true
date: 2020-05-03T20:17:51.982Z
tags:
---

# iFrame-luokka
> The iframe system with PreMiD is problematic and can have unexpected behavior, use with caution. 
> 
> {.is-danger}

## Johdanto

In some scenarios, your presence may need to access elements inside of `iframes`.

The code that you write inside of your `iframe.ts` file gets injected into every iframe on the page.

Like presences, `iframes` have their own classes designed to automatically update data.

```typescript
let iframe = new iFrame();

iframe.on("UpdateData", async () => {
    // Code goes here...
});
```

## Menetelmät

### `send(Object)`
Sends data to the presence. Using this method will make the presence throw a `iFrameData` event.

### `getUrl()`
Palauttaa `iframe`:n URL-osoitteen.

## Tapahtumat
In `iframes`, events work similarly to the way they work in the `presence` class.

```typescript
iframe.on("UpdateData", async () => {
    // Code goes here...
});
```

Tässä on luettelo kaikista tapahtumista:

#### `UpdateData`

This event is fired every time the iframe is being updated.