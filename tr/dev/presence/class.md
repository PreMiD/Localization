---
title: Presence Sınıfı
description: Tüm PreMiD servisleri için geçerli ana sınıf
published: true
date: 2020-04-08T19:33:34.075Z
tags:
---

# Presence Sınıfı

## Tanıtım

`Presence` sınıfı, servisimizi oluştururken bize gerekli bir çok metod ve yöntem ile yardımcı olacaktır.

 Bir sınıf oluştururken `clientId` alanını mutlaka belirtmelisiniz.

```typescript
let presence = new Presence({
    clientId: "514271496134389561" // Örnek bir clientId alanı
});
```

`Presence` sınıfı için şimdilik geçerli iki adet alan vardır.

#### `clientId`

`clientId` alanı, servis kodunun çalışabilmesi için gereklidir çünkü bu sayede uygulamanıza eklediğiniz resimleri ve diğer bilgileri çekiyoruz.

Bunlardan bir tane alabilmek için [uygulamalar sayfası](https://discordapp.com/developers/applications)ndan servisiniz için bir uygulama oluşturmalısınız.

## Metodlar

### `setActivity(presenceData, Boolean)`

Verilen verilerle profilinizi ayarlar.

Bu metodun ilk parametresi profilde göstermek istediğiniz `presenceData` verisini içeren bir obje olmalıdır.

İkinci parametre ise bir şeyin oynatılıp oynatılmadığını belirtir. Eğer `presenceData` içerisinde zaman verisi belirttiyseniz, her zaman `true` değerini kullanın.

### `clearActivity()`

Gözüken verileri temizler, tuşları yakalamayı bırakır ve menü çubuğu yazısını temizler.

### `setTrayTitle(String)`

> Bu yöntem sadece MacOS üzerinde çalışmaktadır. 
> 
> {.is-warning}

Menüdeki durum yazısını ayarlar.

### `getStrings(Object)`

Çevirileri almanızı sağlar. Çeviriyi saklamak istediğiniz anahtarı ve çevirinin bulunduğu objedeki anahtar kodunu da yanına yazmalısınız. Aşağıdaki bağlantıdan eklentiden alabileceğiniz çevirileri bulabilirsiniz: `https://api.premid.app/v2/langFIle/extension/en`</code>

```typescript
// `Oynatılıyor` ve `Durduruldu` çevirilerini
// gösterir.
strings = await presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
});
```

### `getSetting(String)`
Bir ayarın versini döner.
```typescript
var setting = await presence.getSetting("pdexID"); // pdexID'yi verisini almak istediğiniz ayar ile değiştirin
console.log(setting); // Konsola o ayarın verisinin çıktısını verecektir
```

### `hideSetting(String)`
Belirtilen ayarı gizler.
```typescript
presence.hideSetting("pdexID"); // pdexID'yi verisini almak istediğiniz ayar ile değiştirin
```

### `showSetting(String)`
Belirtilen ayarı gösterir (sadece önceden gizlenmişse çalışacaktır).
```typescript
presence.showSetting("pdexID"); // pdexID'yi verisini almak istediğiniz ayar ile değiştirin
```

### `getExtensionVersion(Boolean)`
Kullanıcının kullandığı eklentinin sürümünü verir.
```typescript
getExtensionVersion(sadeceNumerik?: boolean): string | number;

var numeric = presence.getExtensionVersion();
console.log(numeric); // konsola 210 çıktısı verecektir
var version = presence.getExtensionVersion(false);
console.log(version); // konsola 2.1.0 çıktısı verecektir
```

### `getPageletiable(String)`

Eğer varsa sayfadaki bir değişkenin içeriğini gösterir.

```typescript
let pageVar = getPageLetiable('degisken');
console.log(pageVar); // Bu 'degisken' değişkeninin içeriğini konsola yazdırır.
```

## `presenceData` Arayüzü

`presenceData` arayüzü, `setActivity()` metodunu kullandığınızda tavsiye edilmektedir.

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

## Eventler/Eylemler

Eventler belirli zamanlarda bilgi gönderir ve birçok şeyi kontrol edebilmenizi sağlar. Bir event'i dinleyebilmek için `on` metodunu kullanabilirsiniz.

```typescript
presence.on("UpdateData", async () => {
    // Veri geldiğinde bir şeyler yap.
});
```

Kullanabileceğiniz birkaç event vardır:

#### `UpdateData`

Bu event, kullanıcı servisin çalışacağı bir siteye girdikten sonra sürekli olarak kendini tekrar edecektir.

#### `iFrameData`

iFrame'den bilgi geldiğinde bu event bilgi iletecektir.
