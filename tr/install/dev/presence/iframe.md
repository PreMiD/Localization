---
title: iFrame Sınıfı
description:
published: true
date: 2020-01-18T20:32:55.147Z
tags:
---

# iFrame Sınıfı
> PreMiD'in iframe sistemi problem yaratabilir veya beklenmedik bir şekilde çalışabilir, bu riski göze alarak kullanın. 
> 
> {.is-danger}

## Tanıtım

Bazı durumlarda, servisiniz `iframelerin` içerisindeki bilgilere erişme ihtiyacında bulunabilir.

`iframe.ts` dosyasına yazdığınız kod, sayfada bulunan tüm iframe elementlerinin içine yazılır ve işlemeye başlar.

Servisler gibi, `iframe`'lerin de kendilerine ait bir sınıfı vardır ve verileri otomatik olarak güncellenir.

```typescript
let iframe = new iFrame();

iframe.on("UpdateData", async () => {
    // Kod buraya geliyor...
});
```

## Metodlar

### `send(Object)`
Veriyi servis koduna gönderir. Using this method will make the presence throw a `iFrameData` event.

### `getUrl(String)`
Returns the URL of the `iframe`.

## Eventler/Eylemler
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