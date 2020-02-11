---
title: Presenceクラス
description: すべてのPreMIDのプレゼンスのメインクラス
published: true
date: 2020-01-19T23:42:31.382Z
tags:
---

# Presenceクラス

## 説明

`Presence`クラスにはプレゼンスを作成するのに必要なメソッドがあるので、とても便利です。

 クラスを作成する時は、`clientId`プロパティを指定してください。

```typescript
let presence = new Presence({
    clientId: "514271496134389561" // clientIdの例
});
```

`Presence`クラスには、2つの利用可能なプロパティがあります。

#### `clientId`

`clientId`プロパティは、IDを使用してアセットやロゴを表示するので、プレゼンスを動作させるのに必要です。

あなたのプレゼンスのID等はDiscordの[アプリケーションページ](https://discordapp.com/developers/applications)から取得できます。

#### `mediaKeys`

このプロパティはアプリケーションにメディアキーのキー割り当てを登録するように指示し、`Presence`クラスで`MediaKeys`イベントを使用可能にします。

このプロパティは必須ではありませんが、メディアキーを有効にしたい場合、`true`に設定するとよいでしょう。

**全てのmediaKeyイベントは一時的に無効化されています！**

```typescript
let presence = new Presence({
    clientId: "514271496134389561",
    mediaKeys: true // ユーザーがメディアキーを利用できるようにする
});
```

## メソッド

### `setActivity(presenceData, Boolean)`

提供されたデータに基づいて、プロフィールのアクティビティをセットします。

1つ目のパラメーターには、プロフィールに表示させたい情報を取得するために `presenceData` インターフェースが必須です。

2つ目のパラメーターではプレゼンスが何かをプレイ中かどうかを定義します。 `presenceData` に時刻を提供する場合は、常に `true` を使用してください。

### `clearActivity()`

現在のアクティビティ、キー割り当てとトレーのタイトルを削除します。

### `setTrayTitle(String)`

> このメソッドはmacOSのみで動作します。 
> 
> {.is-warning}

メニューバー上のトレーのタイトルを設定します。

### `getStrings(Object)`

拡張機能から、翻訳された文字列を取得できます。 文字列のキー(`keyValue`が文字列の値)を含んだ`Object`を提供する必要があります。 このエンドポイントを使用していくつかの文字列を見つけることができます: `https://api.premid.app/v2/langFIle/extension/en`

```typescript
// '再生中' と '一時停止中' の文字列を
// 拡張機能から取得する
strings = await presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
});
```

### `getPageLetiable(String)`

ウェブサイトから変数を取得する(存在する場合)

```typescript
var pageVar = getPageLetiable('.pageVar');
console.log(pageVar); // "変数の中身" をログに出力する
```

## `presenceData` インターフェース

`presenceData`インターフェースは`setActivity()`メソッドを使用する際に使用することをおすすめします。

このインターフェースには以下の変数があり、これらすべては指定しなくても構いません。

<table>
  <thead>
    <tr>
      <th style="text-align:left">変数</th>
      <th style="text-align:left">概要</th>
      <th style="text-align:left">タイプ</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">details</td>
      <td style="text-align:left">プレゼンス内の最初の行, 一般にヘッダーとして使用されています</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">state</td>
      <td style="text-align:left">プレゼンス内の2行目の文字列</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">startTimestamp</td>
      <td style="text-align:left">Defines the current time.<br>
        Used if you want to display how much <code>hours:minutes:seconds</code> left.
          <br>You must convert your time to <code>timestamp</code> or you will get a wrong
          countdown.
      </td>
      <td style="text-align:left"><code>Number</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">endTimestamp</td>
      <td style="text-align:left">Defines the full duration.
        <br>Used if you want to display how much <code>hours:minutes:seconds</code> left.
          <br>You must convert your time to <code>timestamp</code> or you will get a wrong
          countdown.
      </td>
      <td style="text-align:left"><code>Number</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">largeImageKey</td>
      <td style="text-align:left">Defines the logo for the presence.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">smallImageKey</td>
      <td style="text-align:left">Defines the small icon next to presence&apos;s logo.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">smallImageText</td>
      <td style="text-align:left">Defines the text that will be shown to user when he will hover the small
        icon.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
  </tbody>
</table>

```typescript
var presenceData: presenceData = {
    details: "My title",
    state: "My description",
    largeImageKey: "service_logo",
    smallImageKey: "small_service_icon",
    smallImageText: "You hovered me, and what now?",
    startTimestamp: 1564444631188,
    endTimestamp: 1564444634734
};
```

## イベント

Events allow you to detect and handle some changes or calls that were made. You can subscribe to events using the `on` method.

```typescript
presence.on("UpdateData", async () => {
    // Do something when data gets updated.
});
```

There are few events available:

#### `UpdateData`

This event is fired every time the presence is being updated.

#### `MediaKeys` (disabled)

Fired when user uses media keys on his keyboard, [click here](/dev/presence/class#mediakeys) to get more information about media keys.

#### `iFrameData`

Fired when data is received from iFrame script.