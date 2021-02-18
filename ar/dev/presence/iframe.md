---
title: فئة iFrame
description:
published: true
date: 2020-05-03T20:17:51.982Z
tags:
---

# فئة iFrame
> نظام iframe مع PreMiD |قد يتعرض لمشاكل ويمكن أن يكون له سلوك غير متوقع، استخدمه بحذر. 
> 
> {.is-danger}

## مقدمة

In some scenarios, your presence may need to access elements inside of `iframes`.

The code that you write inside of your `iframe.ts` file gets injected into every iframe on the page.

Like presences, `iframes` have their own classes designed to automatically update data.

```typescript
let iframe = new iFrame();

iframe.on("UpdateData", async () => {
    // Code goes here...
});
```

## الطرق

### `send(Object)`
Sends data to the presence. Using this method will make the presence throw a `iFrameData` event.

### `getUrl()`
Returns the URL of the `iframe`.

## المناسبات
In `iframes`, events work similarly to the way they work in the `presence` class.

```typescript
iframe.on("UpdateData", async () => {
    // Code goes here...
});
```

Here is a list of all of the events:

#### `UpdateData`

This event is fired every time the iframe is being updated.