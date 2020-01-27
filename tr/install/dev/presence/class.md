---
title: Presence Sınıfı
description: Tüm PreMiD servisleri için geçerli ana sınıf
published: true
date: 2020-01-18T20:32:53.042Z
tags:
---

# Presence Sınıfı

## Giriş

The `Presence` class is very useful as it has basic methods that we need for creating a presence.

 When you create a class you must specify `clientId` property.

```typescript
let presence = new Presence({
    clientId: "514271496134389561" // Example clientId
});
```

There are two properties available for `Presence` class.

#### `clientId`

`clientId` property must be provided to make your presence work, because it uses your application id to display its logo and assets.

You can get it on your [applications page](https://discordapp.com/developers/applications).

#### `mediaKeys`

This property tells our app to register the keybindings for media keys and allows us to use `MediaKeys` event for the `Presence` class.

This property is not required, but if you want to enable media keys you should set it to `true`.

**All mediaKey events are temporarily disabled!**

```typescript
let presence = new Presence({
    clientId: "514271496134389561",
    mediaKeys: true // Allows users to use media keys
});
```

## Yöntemler

### `setActivity(presenceData, Boolean)`

Sets your profile activity according to provided data.

First parameter requires an `presenceData` interface to get all information that you want to display in your profile.

Second parameter defines when presence is playing something or not. Always use `true` if you provide timestamps in `presenceData`.

### `clearActivity()`

Clears your current activity, the keybinds and the tray title.

### `setTrayTitle(String)`

> Bu yöntem sadece MacOS üzerinde çalışmaktadır. 
> 
> {.is-warning}

Menüdeki durum yazısını ayarlar.

### `getStrings(Object)`

Çevirileri almanızı sağlar. You must provide `Object` with keys being the key for string, `keyValue` is the string value. You can find the some of the strings using this endpoint: `https://api.premid.app/v2/langFIle/extension/en`

```typescript
// Returns `Playing` and `Paused` strings
// from extension.
strings = await presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
});
```

### `getPageletiable(String)`

Returns a variable from the website if it exists.

```typescript
var pageVar = getPageLetiable('.pageVar');
console.log(pageVar); // This will log the "Variable content"
```

## `presenceData` Interface

The `presenceData` interface is recommended to use when you are using the `setActivity()` method.

This interface has following variables, all of them are optional.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Anahtar</th>
      <th style="text-align:left">Açıklama</th>
      <th style="text-align:left">Tür</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">details</td>
      <td style="text-align:left">Varlığınızdaki ilk satır, genellikle başlık olarak kullanılır.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">state</td>
      <td style="text-align:left">Varlığınızdaki ikinci satır.</td>
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
      <td style="text-align:left">Uzunluğu belirler.
        <br>Used if you want to display how much <code>hours:minutes:seconds</code> left.
          <br>You must convert your time to <code>timestamp</code> or you will get a wrong
          countdown.
      </td>
      <td style="text-align:left"><code>Number</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">largeImageKey</td>
      <td style="text-align:left">Durumun logosunu tanımlar.</td>
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
let presenceData: presenceData = {
    details: "Başlık",
    state: "Açıklama",
    largeImageKey: "buyuk_resim",
    smallImageKey: "kucuk_resim",
    smallImageText: "Küçük resimin üzerine neden tutuyorsun?",
    startTimestamp: 1564444631188,
    endTimestamp: 1564444634734
};
```

## Event'ler

Event'ler belirli zamanlarda bilgi gönderir ve birçok şeyi kontrol edebilmenizi sağlar. Bir event'i dinleyebilmek için `on` metodunu kullanabilirsiniz.

```typescript
presence.on("UpdateData", async () => {
    // Veri geldiğinde bir şeyler yap.
});
```

Kullanabileceğiniz birkaç event vardır:

#### `UpdateData`

Bu event, kullanıcı servisin çalışacağı bir siteye girdikten sonra sürekli olarak kendini tekrar edecektir.

#### `MediaKeys` (artık mevcut değil)

Kullanıcılar klavyelerindeki medya tuşlarına basınca devreye girecektir, daha fazla bilgi için [buraya](/dev/presence/class#mediakeys) tıklayabilirsiniz.

#### `iFrameData`

iFrame'den bilgi geldiğinde bu event bilgi iletecektir.