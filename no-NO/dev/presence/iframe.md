---
title: iFrame Class
description:
published: true
date: 2020-05-03T20:17:51.982Z
tags:
---

# iFrame Klasse
> Innrammesystemet med PreMiD er problematisk og kan gi uventet atferd, bruk med forsiktighet. 
> 
> {.is-danger}

## Introduction

I noen scenarier trenger din tilstedeværelse kanskje å få tilgang til elementer innenfor `iframes`.

The code that you write inside of your `iframe.ts` file gets injected into every iframe on the page.

Like presences, `iframes` have their own classes designed to automatically update data.

```typescript
let iframe = new iFrame();

iframe.on("UpdateData", async () => {
    // Code goes here...
});
```

## Metoder

### `send(Object)`
Sends data to the presence. Using this method will make the presence throw a `iFrameData` event.

### `getUrl()`
Returnerer URLen til `iframe`.

## Arrangementer
In `iframes`, events work similarly to the way they work in the `presence` class.

```typescript
iframe.on("UpdateData", async () => {
    // Code goes here...
});
```

Here is a list of all of the events:

#### `UpdateData`

This event is fired every time the iframe is being updated.