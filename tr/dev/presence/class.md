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

Kullanıcı dili değiştirdiğinde PresenceData verisini otomatik olarak güncelleyebilmesi için aşağıdaki kodu kullanmanızı öneririz;

```typescript
// Çevirilerde kullanabileceğiniz (kod kalitesi ve otomatik tamamlama için iyi olacak) bir arayüz.
interface LangStrings {
  play: string;
  pause: string;
}

async function getStrings(): Promise<LangStrings> {
  return presence.getStrings(
    {
      // İstediğiniz çevirilerin verisi, dönen verinin LangStrings arayüzünüze uygun olduğundan emin olun.
      play: "general.playing",
      pause: "general.paused"
    },
    // Buradaki ID, multiLanguage ayarındaki ID'dir.
    await presence.getSetting("ID")
  );
}

let strings: Promise<LangStrings> = getStrings(),
  // Buradaki ID, multiLanguage ayarındaki ID'dir.
  oldLang: string = await presence.getSetting("ID");

//! Aşağıdaki kod updateData olayının (event) içerisinde olmalıdır!
// Buradaki ID, multiLanguage ayarındaki ID'dir.
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

İnternet sitesinin konsol kayıtlarının çıktısını döndürür.

```typescript
const logs = await presence.getLogs();
console.log(logs); // Bu, son 100 kaydın (array içerisinde) çıktısını verir.
```

**Not:** Bu ayar, `metadata.json` dosyasında `readLogs` ayarının `true` olmasını gerektirir.

### `info(String)`

Girilen mesajı konsola `info` (bilgi) tarzında konsola yazdırır.

```typescript
presence.info("Test") // Belirtilen tarzda "Test" mesajını konsola yazdırır.
```

### `success(String)`

Girilen mesajı konsola `success` (başarılı) tarzında konsola yazdırır.

```typescript
presence.success("Test") // Belirtilen tarzda "Test" mesajını konsola yazdırır.
```

### `error(String)`

Girilen mesajı konsola `error` (hata) tarzında konsola yazdırır.

```typescript
presence.error("Test") // Belirtilen tarzda "Test" mesajını konsola yazdırır.
```

### `getTimestampsfromMedia(HTMLMediaElement)`

`startTimestamp` ve `endTimestamp` değerleri olarak kullanabileceğiniz bir `Array` formatında 2 adet `snowflake` zaman verisi döndürür.

```typescript
const timestamps = getTimestampsfromMedia(document.querySelector(".video"));
presenceData.startTimestamp = timestamps[0];
presenceData.endTimestamp = timestamps[1];
```

**Not:** querySelector da verilen `String` bir örnektir.

### `getTimestamps(Number, Number)`

`startTimestamp` ve `endTimestamp` değerleri olarak kullanabileceğiniz bir `Array` formatında 2 adet `snowflake` zaman verisi döndürür.

```typescript
const video = document.querySelector(".video"),
  timestamps = getTimestamps(video.currentTime, video.duration);
presenceData.startTimestamp = timestamps[0];
presenceData.endTimestamp = timestamps[1];
```

**Not:** querySelector da verilen `String` bir örnektir.

### `timestampFromFormat(String)`

Metin şeklindeki zaman verisini (`HH:MM:SS` VEYA `MM:SS` VEYA `SS`) sayı verisinde döndürür (snowflake zaman verisine değil).

```typescript
const currentTime = timestampFromFormat(document.querySelector(".video-now").textContent),
  duration = timestampFromFormat(document.querySelector(".video-end").textContent),
  timestamps = getTimestamps(currentTime, duration);
presenceData.startTimestamp = timestamps[0];
presenceData.endTimestamp = timestamps[1];
```

**Not:** querySelector da verilen `String` bir örnektir.

## `PresenceData` Arayüzü

`PresenceData` arayüzünün, `setActivity()` metodunu kullandığınız her zaman kullanılması önerilir.

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
  details: "Benim başlığım",
  state: "Benim açıklamam",
  largeImageKey: "servisin_simgesi",
  smallImageKey: "ufak_servis_simgesi",
  smallImageText: "Benim üzerime geldin, ne oldu şimdi?",
  startTimestamp: 1564444631188,
  endTimestamp: 1564444634734,
  buttons: [
    {
            label: "Test tuşu1",
            url: "https://premid.app/"
        },
        {
            label: "Test tuşu2",
            url: "https://premid.app/contributors"
        }
    ]
};
```

## Eventler/Eylemler

Eventler belirli zamanlarda bilgi gönderir ve birçok şeyi kontrol edebilmenizi sağlar. Bir event'i dinleyebilmek için `on` metodunu kullanabilirsiniz.

```typescript
presence.on("UpdateData", async () => {
  // Veri güncellenince bir şeyler yap.
});
```

Kullanabileceğiniz birkaç event vardır:

#### `UpdateData`

Bu event, kullanıcı servisin çalışacağı bir siteye girdikten sonra sürekli olarak kendini tekrar edecektir.

#### `iFrameData`

iFrame'den bilgi geldiğinde bu event bilgi iletecektir.
