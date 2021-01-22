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

## Perkenalan

Kelas `Slideshow` digunakan untuk mengatur beberapa `PresenceData` dan "slide" melewatinya setiap x milidetik (minimum: 5000).

Lihat metode [`createSlideshow`](/dev/presence/class#createslideshow) di kelas [`Presence`](/dev/presence/class) di bagian bagaimana cara membuat `Slideshow`.

## Properti

### `currentSlide`

Mengembalikan objek [`PresenceData`](/dev/presence/class#presencedata-interface) dari apa yang ditampilkan presence/slide saat ini.

```typescript
const currentSlide = slideshow.currentSlide
console.log(currentSlide.details) // Akan mencatat rincian dari PresenceData
```

## Metode

### `addSlide(String, PresenceData, Number)`

Menambahkan slide baru ke `Slideshow` sesuai data yang diberikan.

Parameter pertama membutuhkan `String` yang akan digunakan sebagai identifier unik untuk slide.

Parameter kedua memerlukan [interface `PresenceData`](/dev/presence/class#presencedata-interface) untuk mendapatkan semua yang ingin anda tampilkan di slide.

Parameter ketiga membutuhkan `Number` yang merupakan jumlah waktu dalam milidetik (minimum: 5000) yang akan ditampilakn oleh slide tersebut.

### `getSlides()`

Mengembalikan semua slide yang disimpan di `Slideshow` sebagai `Array` dari[`SlideshowSlide`](#slideshowslide-class).

### `updateSlide(String, PresenceData, Number)`

Memperbarui slide dari `id` yang diberikan sesuai dengan data yang diberikan.

Parameter pertama membutuhkan `String` yaitu sebagai identifier unik dari slide yang ingin anda perbarui.

Parameter kedua memerlukan [interface `PresenceData`](/dev/presence/class#presencedata-interface) untuk mendapatkan semua informasi yang ingin anda tampilkan di slide.

Parameter ketiga membutuhkan `Number` yang merupakan jumlah waktu dalam milidetik (minimum: 5000) yang akan ditampilakn oleh slide tersebut.

### `hasSlide(String)`

Mengembalikan `Boolean` yang manyatakan apakah slide ditambahkan ke `Slideshow`.

### `deleteSlide(String)`

Menghapus slide dengan `id` yang diberikan, dari `Slideshow`.

Parameter pertama membutuhkan `String` yaitu sebagai identifier unik dari slide yang ingin anda hapus.

### `deleteAllSlides()`

Menghapus semua slide dari `Slideshow`.

# Kelas SlideshowSlide

## Perkenalan

`SlideshowSlide` adalah representasi internal dari setiap slide di `Slideshow`.

## Properti

### `id`

Mengembalikan `String` dari id slide.

### `data`

Mengembalikan objek [`PresenceData`](/dev/presence/class#presencedata-interface) dari `PresenceData` yang disimpan di slide.

## Metode

### `updateData(PresenceData)`

Menetapkan slide data berdasarkan data yang tersedia.

You must provide a `PresenceData` interface to get all information that you ultimately want to display in your profile.

### `updateInterval(Number)`

Sets the interval of the slide according to provided data.

You must provide a `Number` which is the amount of time in milliseconds (minimum: 5000) that this slide will show.