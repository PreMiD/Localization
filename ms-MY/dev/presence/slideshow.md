---
title: Kelas Slideshow
description:
published: true
date: 2020-12-25T00:47:38.111Z
tags:
editor: markdown
dateCreated: 2020-12-25T00:44:42.803Z
---

# Kelas Slideshow

## Pengenalan

Kelas `Slideshow` digunakan untuk menetapkan beberapa `PresenceData` dan "gelangsar" menerusinya setiap x milisaat (minimum: 5000).

Lihat kaedah [`createSlideshow`](/dev/presence/class#createslideshow) dalam kelas [`Presence`](/dev/presence/class) untuk cara mencipta `Slideshow`.

## Sifat-sifat

### `currentSlide`

Mengembalikan objek [`PresenceData`](/dev/presence/class#presencedata-interface) berkaitan apa yang Presence/slaid semasa paparkan.

```typescript
const currentSlide = slideshow.currentSlide
console.log(currentSlide.details) // Akan mengelog maklumat PresenceData
```

## Kaedah

### `addSlide(String, PresenceData, Number)`

Tambah slaid baharu ke `Slideshow` mengikut data yang diberi.

Parameter pertama memerlukan rentetan `String` yang akan digunakan sebagai pengenal pasti unik bagi slaid tersebut.

Parameter kedua memerlukan [antara muka `PresenceData`](/dev/presence/class#presencedata-interface) untuk mendapatkan segala maklumat yang ingin dipaparkan di slaid.

Parameter ketiga memerlukan nombor `Number` iaitu jumlah masa dalam unit milisaat (minimum: 5000) yang mana slaid ini akan dipaparkan.

### `getSlides()`

Mengembalikan kesemua slaid yang disimpan dalam `Slideshow` sebagai tatasusunan `Array` bernama [`SlideshowSlide`](#slideshowslide-class).

### `updateSlide(String, PresenceData, Number)`

Mengemas kini slaid bagi `id` yang diberi mengikut data yang disediakan.

Parameter pertama memerlukan rentetan `String` iaitu pengenal pasti unik bagi slaid yang anda ingin kemas kini.

Parameter kedua memerlukan [antara muka `PresenceData`](/dev/presence/class#presencedata-interface) untuk mendapatkan segala maklumat yang ingin dipaparkan di slaid.

Parameter ketiga memerlukan nombor `Number` iaitu jumlah masa dalam unit milisaat (minimum: 5000) yang mana slaid ini akan dipaparkan.

### `hasSlide(String)`

Mengembalikan nilai `Boolean` yang menyatakan sama ada sesuatu slaid telah ditambah ke `Slideshow`.

### `deleteSlide(String)`

Memadamkan slaid dengan `id` yang diberi dari himpunan `Slideshow`.

Parameter pertama memerlukan rentetan `String` iaitu pengenal pasti unik bagi slaid yang anda ingin padam.

### `deleteAllSlides()`

Padam kesemua slaid dari `Slideshow`.

# Kelas SlideshowSlide

## Pengenalan

`SlideshowSlide` ialah perwakilan dalaman bagi setiap slaid dalam `Slideshow`.

## Sifat-sifat

### `id`

Mengembalikan rentetan `String` berupa id bagi slaid.

### `data`

Mengembalikan objek [`PresenceData`](/dev/presence/class#presencedata-interface) berkaitan `PresenceData` yang disimpan dalam slaid.

## Kaedah

### `updateData(PresenceData)`

Menetapkan data slaid berdasarkan data yang diberi.

Anda mesti sediakan antara muka `PresenceData` untuk mendapatkan segala maklumat yang ingin dipaparkan di profil anda.

### `updateInterval(Number)`

Menetapkan selang masa slaid berdasarkan data yang diberi.

Anda mesti sediakan nombor `Number` iaitu jumlah masa dalam unit milisaat (minimum: 5000) yang mana slaid ini akan dipaparkan.