---
title: Presence Sınıfı
description: Tüm PreMiD servisleri için geçerli ana sınıf
published: true
date: 2021-02-21T18:28:45.568Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:42.004Z
---

# Presence Sınıfı

## Tanıtım

`Presence` sınıfı, servisimizi oluştururken bize gerekli bir çok metod ve yöntem ile yardımcı olacaktır.

Bir sınıf oluştururken `clientId` alanını mutlaka belirtmelisiniz.

```typescript
const presence = new Presence({
  clientId: "514271496134389561" // Example clientId
});
```

### Properties

There are three properties available for `Presence` class.

#### `clientId`

This property is required to make your presence work, because it uses your application id to display its logo and assets. Bunlardan bir tane alabilmek için [uygulamalar sayfası](https://discordapp.com/developers/applications)ndan servisiniz için bir uygulama oluşturmalısınız.

#### `injectOnComplete`

When setting `injectOnComplete` to `true` the first `UpdateData` event for both the `presence.ts` and `iframe.ts` files will only be fired when the page has fully loaded.

#### `appMode`

When setting `appMode` to `true` and the presence were to send an empty `PresenceData`, the app will show the application (image and name) on the user's profile instead of nothing.

## Metodlar

### `getActivity()`

Geçerli durumun bilgisini içeren `PresenceData` verisi döner.

### `setActivity(PresenceData | Slideshow, Boolean)`

Verilen verilerle profilinizi ayarlar.

First parameter requires a [`PresenceData`](#presencedata-interface) interface or a [`Slideshow`](/dev/presence/slideshow) class to get all information that you want to display in your profile.

İkinci parametre ise bir şeyin oynatılıp oynatılmadığını belirtir. Always use `true` if you provide timestamps in `PresenceData`.

### `clearActivity()`

Gözüken verileri ve menü çubuğu yazısını temizler.

### `setTrayTitle(String)`

> Bu yöntem sadece MacOS üzerinde çalışmaktadır. 
> 
> {.is-warning}

Menüdeki durum yazısını ayarlar.

### `createSlideshow()`

Creates a new `Slideshow` class.

```typescript
const slideshow = presence.createSlideshow();
```

It is suggested to do this right after creating the `Presence` class:

```typescript
const presence = new Presence({
    clientId: "514271496134389561" // Example clientId
  }),
  slideshow = presence.createSlideshow();
```

You can find the documentation for the `Slideshow` class [here](/dev/presence/slideshow).

### `getStrings(Object)`

Eklentiden belli çevirilere ulaşabileceğiniz asenkron yöntem.

Çeviriyi saklamak istediğiniz anahtarı ve çevirinin bulunduğu objedeki anahtar kodunu da yanına yazmalısınız. A list of translated strings can be found at this endpoint: `https://api.premid.app/v2/langFile/presence/en/`

```typescript
// `Oynatılıyor` ve `Durduruldu` çevirilerini
// gösterir.
const strings = await presence.getStrings({
  play: "general.playing",
  pause: "general.paused"
});

const playString = strings.play; // result: Playing
const pauseString = strings.pause; // result: Paused
```

Since v2.2.0 of the extension you can now get the strings of a certain language. This works well with the also newly added `multiLanguage` setting option.

We suggest you use the following code so it automatically updates the PresenceData if the user changes the selected language;

```typescript
// An interface of the strings you are getting (good for code quality and autocomplete).
interface LangStrings {
  play: string;
  pause: string;
}

async function getStrings(): Promise<LangStrings> {
  return presence.getStrings(
    {
      // The strings you are getting, make sure this fits with your LangStrings interface.
      play: "general.playing",
      pause: "general.paused"
    },
    // The ID is the ID of the multiLanguage setting.
    await presence.getSetting("ID")
  );
}

let strings: Promise<LangStrings> = getStrings(),
  // The ID is the ID of the multiLanguage setting.
  oldLang: string = await presence.getSetting("ID");

//! The following code must be inside the updateData event!
// The ID is the ID of the multiLanguage setting.
const newLang = await presence.getSetting("ID");
if (oldLang !== newLang) {
  oldLang = newLang;
  strings = getStrings();
}

const playString = strings.play; // result: Playing
const pauseString = strings.pause; // result: Paused
```

### `getPageletiable(String)`

Eğer varsa sayfadaki bir değişkenin içeriğini gösterir.

```typescript
const pageVar = getPageletiable(".pageVar");
console.log(pageVar); // This will log the "Variable content"
```

### `getExtensionVersion(Boolean)`

Kullanıcının kullandığı eklentinin sürümünü verir.

```typescript
getExtensionVersion(onlyNumeric?: boolean): string | number;

const numeric = presence.getExtensionVersion();
console.log(numeric); // Will log 210
const version = presence.getExtensionVersion(false);
console.log(version); // Will log 2.1.0
```

### `getSetting(String)`

Bir ayarın değerini döner.

```typescript
const setting = await presence.getSetting("pdexID"); //Replace pdexID with the id of the setting
console.log(setting); // This will log the value of the setting
```

### `hideSetting(String)`

Belirtilen ayarı gizler.

```typescript
presence.hideSetting("pdexID"); // Replace pdexID with the id of the setting
```

### `showSetting(String)`

Belirtilen ayarı gösterir (sadece önceden gizlenmişse çalışacaktır).

```typescript
presence.showSetting("pdexID"); // PdexID'yi ayarın id'si ile değiştirin
```

### `getLogs()`

Returns the logs of the websites console.

```typescript
const logs = await presence.getLogs();
console.log(logs); // This will log the latest 100 logs (in an array).
```

**Note:** Requires `readLogs` to be `true` in the `metadata.json` file.

### `info(String)`

Prints the given message in the console in a format based of the presence in the `info` style.

```typescript
presence.info("Test") // This will log "test" in the correct styling.
```

### `success(String)`

Prints the given message in the console in a format based of the presence in the `success` style.

```typescript
presence.success("Test") // This will log "test" in the correct styling.
```

### `error(String)`

Prints the given message in the console in a format based of the presence in the `error` style.

```typescript
presence.error("Test") // This will log "test" in the correct styling.
```

### `getTimestampsfromMedia(HTMLMediaElement)`

Returns 2 `snowflake` timestamps in an `Array` that can be used for `startTimestamp` and `endTimestamp`.

```typescript
const timestamps = getTimestampsfromMedia(document.querySelector(".video"));
presenceData.startTimestamp = timestamps[0];
presenceData.endTimestamp = timestamps[1];
```

**Note:** The given `String` in querySelector is an example.

### `getTimestamps(Number, Number)`

Returns 2 `snowflake` timestamps in an `Array` that can be used for `startTimestamp` and `endTimestamp`.

```typescript
const video = document.querySelector(".video"),
  timestamps = getTimestamps(video.currentTime, video.duration);
presenceData.startTimestamp = timestamps[0];
presenceData.endTimestamp = timestamps[1];
```

**Note:** The given `String` in querySelector is an example.

### `timestampFromFormat(String)`

Converts a string with format `HH:MM:SS` or `MM:SS` or `SS` into an integer (Does not return snowflake timestamp).

```typescript
const currentTime = timestampFromFormat(document.querySelector(".video-now").textContent),
  duration = timestampFromFormat(document.querySelector(".video-end").textContent),
  timestamps = getTimestamps(currentTime, duration);
presenceData.startTimestamp = timestamps[0];
presenceData.endTimestamp = timestamps[1];
```

**Note:** The given `String` in querySelector is an example.

## `PresenceData` Arayüzü

The `PresenceData` interface is recommended to use when you are using the `setActivity()` method.

Bu arayüz, aşağıdaki alanları kullanabilir, bunların hepsi opsiyonel yani zorunlu değildir.

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
      <td style="text-align:left">Profilinizde gözüken kısımda üst tarafta bulunan yazı.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">state</td>
      <td style="text-align:left">Profilinizde gözüken kısımda alt tarafta bulunan yazı.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">startTimestamp</td>
      <td style="text-align:left">Geçerli zamanı belirtir.<br>
        Başlangıç zamanını belirterek ondan sonra ne kadar zaman geçtiğini gösterebilirsiniz.
          <br>Zamanınızı <code>timestamp</code> formatına çevirmelisiniz, diğer türlü hesaplamalar yanlış sonuç verecektir.
      </td>
      <td style="text-align:left"><code>Number</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">endTimestamp</td>
      <td style="text-align:left">Uzunluğu belirler.
        <br>Bitiş zamanını belirlerseniz kaç <code>saat:dakika:saniye</code> kaldığını profilde gösterebilirsiniz.
          <br>Zamanınızı <code>timestamp</code> formatına çevirmelisiniz, diğer türlü hesaplamalar yanlış sonuç verecektir.
      </td>
      <td style="text-align:left"><code>Number</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">largeImageKey</td>
      <td style="text-align:left">Servisin büyük resmini belirler.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">smallImageKey</td>
      <td style="text-align:left">Büyük resmin yanında bulunacak küçük simgenin ismini belirler.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">smallImageText</td>
      <td style="text-align:left">İmleci küçük resmin üzerine tuttuğunuzda gösterilecek yazıyı belirler.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
        <tr>
      <td style="text-align:left">buttons</td>
      <td style="text-align:left">Array of buttons, max 2, label is the button text, and url is the link.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code>
      </td>
    </tr>
  </tbody>
</table>

```typescript
const presenceData: PresenceData = {
  details: "My title",
  state: "My description",
  largeImageKey: "service_logo",
  smallImageKey: "small_service_icon",
  smallImageText: "You hovered me, and what now?",
  startTimestamp: 1564444631188,
  endTimestamp: 1564444634734,
  buttons: [
    {
            label: "Test button1",
            url: "https://premid.app/"
        },
        {
            label: "Test button2",
            url: "https://premid.app/contributors"
        }
    ]
};
```

## Eventler/Eylemler

Eventler belirli zamanlarda bilgi gönderir ve birçok şeyi kontrol edebilmenizi sağlar. Bir event'i dinleyebilmek için `on` metodunu kullanabilirsiniz.

```typescript
presence.on("UpdateData", async () => {
  // Do something when data gets updated.
});
```

Kullanabileceğiniz birkaç event vardır:

#### `UpdateData`

Bu event, kullanıcı servisin çalışacağı bir siteye girdikten sonra sürekli olarak kendini tekrar edecektir.

#### `iFrameData`

iFrame'den bilgi geldiğinde bu event bilgi iletecektir.
