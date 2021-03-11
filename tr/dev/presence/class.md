---
title: Presence Sınıfı
description: Tüm PreMiD servisleri için geçerli ana sınıf
published: true
date: 2021-02-26T20:42:26.910Z
tags:
editor: markdown
dateCreated: 2021-02-21T21:13:14.449Z
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

Bu özellik, oynuyor etkinliğinizin çalışmasını sağlamak için gereklidir, çünkü logosunu ve ID'nizi görüntülemek için uygulama kimliğinizi kullanır. Bunlardan bir tane alabilmek için [uygulamalar sayfası](https://discordapp.com/developers/applications)ndan servisiniz için bir uygulama oluşturmalısınız.

#### `injectOnComplete`

`injectOnComplete` ayarını `true` olarak ayarlarken, `presence.ts` ve `iframe.ts` için ilk `UpdateData` olayı, sadece sayfa tamamen yüklendiğinde çalıştırılacaktır.

#### `appMode`

`appMode` ayarını `true` olarak ayarladıktan sonra, boş bir `PresenceData` verisi gönderildiğinde, uygulama hiçbir şey yerine uygulamanızın ismini ve resmini gösterecektir.

## Metodlar

### `getActivity()`

Geçerli durumun bilgisini içeren `PresenceData` verisi döner.

### `setActivity(PresenceData | Slideshow, Boolean)`

Verilen verilerle profilinizi ayarlar.

İlk parametre, servisin profilde gözükmesi için, bir [`PresenceData`](#presencedata-interface) verisi veya bir [`Slideshow`](/dev/presence/slideshow) verisi gerektirir.

İkinci parametre ise bir şeyin oynatılıp oynatılmadığını belirtir. Eğer `PresenceData` içerisinde zaman belirttiyseniz, her zaman `true` kullanın.

### `clearActivity()`

Gözüken verileri ve menü çubuğu yazısını temizler.

### `setTrayTitle(String)`

> Bu yöntem sadece MacOS üzerinde çalışmaktadır. 
> 
> {.is-warning}

Menüdeki durum yazısını ayarlar.

### `createSlideshow()`

Yeni bir `Slideshow` sınıfı oluşturur.

```typescript
const slideshow = presence.createSlideshow();
```

Bunu `Presence` sınıfını oluşturduktan hemen sonra yapmanız önerilir:

```typescript
const presence = new Presence({
    clientId: "514271496134389561" // Örnek bir clientId
  }),
  slideshow = presence.createSlideshow();
```

`Slideshow` sınıfı için dokümanlara [buradan](/dev/presence/slideshow) ulaşabilirsiniz.

### `getStrings(Object)`

Eklentiden belli çevirilere ulaşabileceğiniz asenkron yöntem.

Çeviriyi saklamak istediğiniz anahtarı ve çevirinin bulunduğu objedeki anahtar kodunu da yanına yazmalısınız. Çevrilmiş yazıların listesine bu endpoint üzerinden erişebilirsiniz: `https://api.premid.app/v2/langFile/presence/en/`

```typescript
// `Oynatılıyor` ve `Durduruldu` çevirilerini
// gösterir.
const strings = await presence.getStrings({
  play: "general.playing",
  pause: "general.paused"
});

const playString = strings.play; // sonuç: Oynuyor
const pauseString = strings.pause; // sonuç: Duraklatıldı
```

Eklentinin v2.2.0 sürümünden bu yana, artık belirli bir dilin çevirilerini alabilirsiniz. Bu, yeni eklenmiş `multiLanguage` ayar seçeneği ile de düzgün çalışıyor.

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

const playString = strings.play; // sonuç: Oynuyor
const pauseString = strings.pause; // sonuç: Duraklatıldı
```

### `getPageletiable(String)`

Eğer varsa sayfadaki bir değişkenin içeriğini gösterir.

```typescript
const pageVar = getPageletiable(".pageVar");
console.log(pageVar); // Değişkenin içeriğini gösterecektir
```

### `getExtensionVersion(Boolean)`

Kullanıcının kullandığı eklentinin sürümünü verir.

```typescript
getExtensionVersion(onlyNumeric?: boolean): string | number;

const numeric = presence.getExtensionVersion();
console.log(numeric); // 210 çıktısı verir
const version = presence.getExtensionVersion(false);
console.log(version); // 2.1.0 çıktısı verir
```

### `getSetting(String)`

Bir ayarın değerini döner.

```typescript
const setting = await presence.getSetting("pdexID"); // pdexID'yi ayarın ID'si ile değiştirin
console.log(setting); // Seçeneğin değerinin çıktısını verecektir
```

### `hideSetting(String)`

Belirtilen ayarı gizler.

```typescript
presence.hideSetting("pdexID"); // pdexID'yi ayarın ID'si ile değiştirin
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
