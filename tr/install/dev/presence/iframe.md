---
title: iFrame Sınıfı
description:
published: true
date: 2020-01-18T20:32:55.147Z
tags:
---

# iFrame Sınıfı
> iFrame sistemi PreMiD ile sorunludur ve beklenmedik hatalar ortaya çıkabilir, bu yüzden dikkatli kullanın. 
> 
> {.is-danger}

## Giriş

Bazı senaryolarda, servisinizin `iFrame'lerin` içindeki ögelere erişmesi gerekebilir.

` iframe.ts ` dosyanızın içine yazdığınız kod, sayfadaki her iFrame'e eklenir.

Servisler gibi ` iFrame'lerin ` verileri otomatik olarak güncellemek için tasarlanmış kendi sınıflandırma sistemine sahiptir.

```typescript
let iframe = new iFrame();

iframe.on("UpdateData", async () => {
    // Kod buraya geliyor...
});
```

## Methods

### `send(Object)`
Veriyi servise gönderir. Using this method will make the presence throw a `iFrameData` event.

### `getUrl(String)`
Returns the URL of the `iframe`.

## Event'ler
In `iframes`, events work similarly to the way they work in the `presence` class.

```typescript
iframe.on("UpdateData", async () => {
    // Kodunuzu bu alana yazabilirsiniz...
});
```

Here is a list of all of the events:

#### `UpdateData`

This event is fired every time the iframe is being updated.

#### `MediaKeys` (artık mevcut değil)

Kullanıcılar klavyelerindeki medya tuşlarına basınca devreye girecektir, daha fazla bilgi için [buraya](/dev/presence/class#mediakeys) tıklayabilirsiniz.