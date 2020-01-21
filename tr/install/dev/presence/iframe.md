---
title: iFrame Sınıfı
description:
published: true
date: 2020-01-18T20:32:55.147Z
tags:
---

# iFrame Sınıfı
> Iframe sistemi PreMiD ile sorunludur ve beklenmedik hatalar ortaya çıkabilir, bu yüzden dikkatli kullanın. 
> 
> {.is-danger}

## Giriş

Bazı senaryolarda, servisinizin `iframe'lerin` içindeki ögelere erişmesi gerekebilir.

` iframe.ts ` dosyanızın içine yazdığınız kod, sayfadaki her iframe'e eklenir.

Like presences, `iframes` have their own classes designed to automatically update data.

```typescript
let iframe = new iFrame();

iframe.on("UpdateData", async () => {
    // Code goes here...
});
```

## Methods

### `send(Object)`
Sends data to the presence. Using this method will make the presence throw a `iFrameData` event.

### `getUrl(String)`
Returns the URL of the `iframe`.

## Event'ler
In `iframes`, events work similarly to the way they work in the `presence` class.

```typescript
iframe.on("UpdateData", async () => {
    // Code goes here...
});
```

Here is a list of all of the events:

#### `UpdateData`

This event is fired every time the iframe is being updated.

#### `MediaKeys` (artık mevcut değil)

Kullanıcılar klavyelerindeki medya tuşlarına basınca devreye girecektir, daha fazla bilgi için [buraya](/dev/presence/class#mediakeys) tıklayabilirsiniz.