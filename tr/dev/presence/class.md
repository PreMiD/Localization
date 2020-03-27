---
title: Presence Sınıfı
description: Tüm PreMiD servisleri için geçerli ana sınıf
published: true
date: 2020-02-12T22:33:34.715Z
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

#### `mediaKeys`

Bu alan, servisinizin klavyedeki multimedya tuşlarına basılmasını yakalamak isteyenler için ayarlanmalıdır, ayarlandığı taktirde kodunuzda `MediaKeys` eventini kullanabileceksiniz.

Bu alan gerekli değildir ve **tarayıcılar bu desteği zaten eklediği için artık kullanılmamaktadır**, ancak bir sebepten dolayı bunlara ihtiyaç duyuyorsanız bu ayarı `true` olarak ayarlamalısınız.

**Yukarıda bahsedildiği gibi bu event geçici veya kalıcı olarak devre dışıdır!**

```typescript
let presence = new Presence({
    clientId: "514271496134389561",
    mediaKeys: true // Medya tuşlarını yakalamayı sağlar
});
```

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

#### `MediaKeys` (artık mevcut değil)

Kullanıcılar klavyelerindeki medya tuşlarına basınca devreye girecektir, daha fazla bilgi için [buraya](/dev/presence/class#mediakeys) tıklayabilirsiniz.

#### `iFrameData`

iFrame'den bilgi geldiğinde bu event bilgi iletecektir.