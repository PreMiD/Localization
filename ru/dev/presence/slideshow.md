---
title: Класс слайд-шоу
description:
published: true
date: 2020-12-25T00:47:38.111Z
tags:
editor: markdown
dateCreated: 2020-12-25T00:44:42.803Z
---

# Класс слайд-шоу

## Введение

Класс `слайдшоу` используется для установки нескольких `PresenceData` и "slide" через их каждые x миллисекунд (минимум: 5000).

Смотрите метод [`createSlideshow`](/dev/presence/class#createslideshow) в классе [`Presence`](/dev/presence/class) о том, как создать `слайдшоу`.

## Свойства

### `currentSlide`

Возвращает объект [`PresenceData`](/dev/presence/class#presencedata-interface) из того, что сейчас показывают.

```typescript
const currentSlide = слайд-шоу.currentSlide
console.log(currentSlide.details) // Укажет консоль регистрацию деталей PresenceData
```

## Методы

### `addSlide(String, PresenceData, Number)`

Add a new slide to the `Slideshow` according to provided data.

First parameter requires a `String` that will be used as a unique identifier for the slide.

Second parameter requires a [`PresenceData` interface](/dev/presence/class#presencedata-interface) to get all information that you want to display in the slide.

Third parameter requires a `Number` which is the amount of time in milliseconds (minimum: 5000) that this slide will show.

### `getSlides()`

Returns all slides saved in the `Slideshow` as an `Array` of [`SlideshowSlide`](#slideshowslide-class).

### `updateSlide(String, PresenceData, Number)`

Updates the slide of the given `id` according to provided data.

First parameter requires a `String` that is the unique identifier of the slide you want to update.

Second parameter requires a [`PresenceData` interface](/dev/presence/class#presencedata-interface) to get all information that you want to display in the slide.

Third parameter requires a `Number` which is the amount of time in milliseconds (minimum: 5000) that this slide will show.

### `hasSlide(String)`

Returns a `Boolean` stating whether the slide is added to the `Slideshow`.

### `deleteSlide(String)`

Deletes the slide with the given `id` from the `Slideshow`.

First parameter requires a `String` that is the unique identifier of the slide you want to delete.

### `deleteAllSlides()`

Deletes all slides from the `Slideshow`.

# SlideshowSlide Class

## Введение

A `SlideshowSlide` is the internal representation of each slide in a `Slideshow`.

## Свойства

### `id`

Returns a `String` of the id of the slide.

### `data`

Returns a [`PresenceData`](/dev/presence/class#presencedata-interface) object of the `PresenceData` saved in the slide.

## Методы

### `updateData(PresenceData)`

Sets the slides data according to provided data.

You must provide a `PresenceData` interface to get all information that you ultimately want to display in your profile.

### `updateInterval(Number)`

Sets the interval of the slide according to provided data.

You must provide a `Number` which is the amount of time in milliseconds (minimum: 5000) that this slide will show.