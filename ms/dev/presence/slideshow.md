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

First parameter requires a `String` that is the unique identifier of the slide you want to delete.

### `deleteAllSlides()`

Deletes all slides from the `Slideshow`.

# SlideshowSlide Class

## Introduction

A `SlideshowSlide` is the internal representation of each slide in a `Slideshow`.

## Sifat-sifat

### `id`

Returns a `String` of the id of the slide.

### `data`

Returns a [`PresenceData`](/dev/presence/class#presencedata-interface) object of the `PresenceData` saved in the slide.

## Methods

### `updateData(PresenceData)`

Sets the slides data according to provided data.

You must provide a `PresenceData` interface to get all information that you ultimately want to display in your profile.

### `updateInterval(Number)`

Sets the interval of the slide according to provided data.

You must provide a `Number` which is the amount of time in milliseconds (minimum: 5000) that this slide will show.