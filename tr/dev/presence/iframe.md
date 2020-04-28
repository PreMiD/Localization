---
title: iFrame Sınıfı
description:
published: true
date: 2020-04-28T20:49:50.437Z
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
Veriyi servis koduna gönderir. Bu metodu kullanmak servis kodunda bir `iFrameData` eventi çalıştıracaktır.

### `getUrl(String)`
`iframe`'in bağlantısını gösterir.

## Eventler/Eylemler
`iframe` elementlerinde, eventler aynı `presence` sınıfında olduğu gibi çalışır.

```typescript
iframe.on("UpdateData", async () => {
    // Kodunuzu bu alana yazabilirsiniz...
});
```

Kullanabileceğiniz eventlerin listesi:

#### `UpdateData`

Bu event, iframeden her bilgi geldiğinde çalışacaktır.