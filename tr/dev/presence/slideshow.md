---
title: Slideshow Sınıfı
description:
published: true
date: 2020-12-25T00:47:38.111Z
tags:
editor: markdown
dateCreated: 2020-12-25T00:44:42.803Z
---

# Slideshow Sınıfı

## Tanıtım

`Slideshow` sınıfı, her x milisaniyede bir (minimum: 5000) birden çok `PresenceData` ve "kaydırmak" için kullanılır.

Bir `Slideshow` nasıl oluşturulacağını öğrenmek için [`Presence`](/dev/presence/class) sınıfındaki [`createSlideshow`](/dev/presence/class#createslideshow) yöntemine bakın.

## Özellikler

### `currentSlide`

Geçerli slide'ın sahip olduğu [`PresenceData`](/dev/presence/class#presencedata-interface) object'ini döner.

```typescript
const currentSlide = slideshow.currentSlide
console.log(currentSlide.details) // PresenceData verisinin çıktısını verecektir
```

## Metodlar

### `addSlide(String, PresenceData, Number)`

Girilen veriye bağlı olarak yeni bir `Slideshow` ekler.

İlk parametre, slide'ı belirtecek benzersiz bir `String` olmalıdır.

İkinci parametre, slide'da göstermek istediğiniz [`PresenceData` arayüzü](/dev/presence/class#presencedata-interface) bilgisini içermelidir.

Üçüncü parametre, slide'ın görüntüleneceği süreyi milisaniye (en az 5000) şeklindeki bir `Number`'dır.

### `getSlides()`

Bir `Array` formatında [`SlideshowSlide`](#slideshowslide-class) sınıfına sahip `Slideshow` olarak kaydedilen verileri döner.

### `updateSlide(String, PresenceData, Number)`

Verilen `id`'ye sahip slide'ı günceller.

İlk parametre, güncellemek istediğiniz slide'ı belirtecek benzersiz bir `String` olmalıdır.

İkinci parametre, slide'da göstermek istediğiniz [`PresenceData` arayüzü](/dev/presence/class#presencedata-interface) bilgisini içermelidir.

Üçüncü parametre, slide'ın görüntüleneceği süreyi milisaniye (en az 5000) şeklindeki bir `Number`'dır.

### `hasSlide(String)`

Slide'ın `Slideshow` olarak eklenip eklenilmediği bilgisini `Boolean` türünde döner.

### `deleteSlide(String)`

`Slideshow` olarak belirtilen `id`'ye sahip slide'ı siler.

İlk parametre, silmek istediğiniz slide'ı belirtecek benzersiz bir `String` olmalıdır.

### `deleteAllSlides()`

`Slideshow`'dan tüm slide'ları siler.

# SlideshowSlide Sınıfı

## Tanıtım

`SlideshowSlide`, `Slideshow` sınıfında bulunan tüm slide'lardır.

## Özellikler

### `id`

Slide'ın ID'sini barındıran bir `String`'dir.

### `data`

Slide'a kaydedilmiş `PresenceData` verisine sahip [`PresenceData`](/dev/presence/class#presencedata-interface) objesidir.

## Metodlar

### `updateData(PresenceData)`

Slide'ı belirtilen veri ile ayarlar.

Profilinizde göstermek istediğiniz veriyi barındıran bir `PresenceData` arayüzü sağlamalısınız.

### `updateInterval(Number)`

Belirtilen slide'ın süresini ayarlar.

Slide'ın görüntüleneceği milisaniye cinsindeki süreyi (en az 5000) `Number` olarak belirtmelisiniz.