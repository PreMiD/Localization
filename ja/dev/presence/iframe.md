---
title: iFrameクラス
description:
published: true
date: 2020-02-12T22:15:30.646Z
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

### `getUrl(String)`
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

#### `MediaKeys` (使用不可)

ユーザーがキーボードでメディアキーを押したときに呼び出されます。 [ここ](/dev/presence/class#mediakeys)でメディアキーについての情報を調べられます。