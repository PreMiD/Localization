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

Memperbarui slide yang memiliki `id` sesuai data yang diberikan.

Parameter pertama membutuhkan `String` yaitu sebagai identifier unik dari slide yang ingin anda perbarui.

Parameter kedua memerlukan [interface `PresenceData`](/dev/presence/class#presencedata-interface) untuk mendapatkan semua informasi yang ingin anda tampilkan di slide.

Third parameter requires a `Number` which is the amount of time in milliseconds (minimum: 5000) that this slide will show.

### `hasSlide(String)`

Returns a `Boolean` stating whether the slide is added to the `Slideshow`.

### `deleteSlide(String)`

Deletes the slide with the given `id` from the `Slideshow`.

First parameter requires a `String` that is the unique identifier of the slide you want to delete.

### `deleteAllSlides()`

Deletes all slides from the `Slideshow`.

# SlideshowSlide Class

## Perkenalan

A `SlideshowSlide` is the internal representation of each slide in a `Slideshow`.

## Properti

### `id`

Returns a `String` of the id of the slide.

### `data`

Returns a [`PresenceData`](/dev/presence/class#presencedata-interface) object of the `PresenceData` saved in the slide.

## Metode

### `updateData(PresenceData)`

Menetapkan slide data berdasarkan data yang tersedia.

You must provide a `PresenceData` interface to get all information that you ultimately want to display in your profile.

### `updateInterval(Number)`

Sets the interval of the slide according to provided data.

You must provide a `Number` which is the amount of time in milliseconds (minimum: 5000) that this slide will show.