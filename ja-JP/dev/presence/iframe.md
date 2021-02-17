---
title: iFrameクラス
description:
published: true
date: 2020-05-03T20:17:51.982Z
tags:
---

# iFrameクラス
> PreMiDのiFrameシステムは正常に動作しなかったり、予期しない動作をする可能性があります。注意して使用してください。 
> 
> {.is-danger}

## 説明

場合によっては、 `iframe` の内部の要素にアクセスする必要があるかもしれません。

`iframe.ts`ファイルの中に書かれたコードは、ページのすべての iFrame に挿入されます。

プレゼンスと同様に、 `iframe` はデータを自動的に更新するように設計された独自のクラスを持っています。

```typescript
let iframe = new iFrame();

iframe.on("UpdateData", async () => {
    // Code goes here...
});
```

## メソッド

### `send(Object)`
プレゼンスにデータを送ります。 この方法を使用すると、プレゼンスが`iFrameData`のeventを投下します。

### `getUrl()`
`iframe` のURLを返します。

## イベント
`iframe`のイベントは`presence`クラスでの動作と同様に動作します。

```typescript
iframe.on("UpdateData", async () => {
    // Code goes here...
});
```

イベントの一覧:

#### `UpdateData`

このイベントはiFrameが更新されるたびに呼び出されます。