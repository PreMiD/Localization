---
title: iFrameクラス
description:
published: true
date: 2020-05-03T20:17:51.982Z
tags:
---

# iFrameクラス
> The iframe system with PreMiD is problematic and can have unexpected behavior, use with caution. 
> 
> {.is-danger}

## 説明

In some scenarios, your presence may need to access elements inside of `iframes`.

The code that you write inside of your `iframe.ts` file gets injected into every iframe on the page.

Like presences, `iframes` have their own classes designed to automatically update data.

```typescript
let iframe = new iFrame();

iframe.on("UpdateData", async () => {
    // Code goes here...
});
```

## メソッド

### `send(Object)`
プレゼンスにデータを送ります。 この方法を使用すると、プレゼンスが`iFrameData`のeventを投げます。

### `getUrl()`
`iframe` のURLを返します。

## イベント
In `iframes`, events work similarly to the way they work in the `presence` class.

```typescript
iframe.on("UpdateData", async () => {
    // Code goes here...
});
```

すべてのイベントのリスト:

#### `UpdateData`

このイベントはiframeが更新されるたびに呼び出されます。