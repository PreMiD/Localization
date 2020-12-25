---
title: Slideshow Class
description:
published: true
date: 2020-12-25T00:47:38.111Z
tags:
editor: markdown
dateCreated: 2020-12-25T00:44:42.803Z
---

# Slideshow Class

## Введение

The `Slideshow` class is used to set multiple `PresenceData` and "slide" through them every x milliseconds (minimum: 5000).

See the [`createSlideshow`](/dev/presence/class#createslideshow) method in the [`Presence`](/dev/presence/class) class on how to create a `Slideshow`.

## Свойства

### `currentSlide`

Returns a [`PresenceData`](/dev/presence/class#presencedata-interface) object of what the presence/current slide is displaying.

```typescript
const currentSlide = slideshow.currentSlide
console.log(currentSlide.details) // Will console log the details of the PresenceData
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

Устанавливает данные слайдов в соответствии с предоставленными данными.

Вы должны предоставить `PresenceData` интерфейс, чтобы получить всю информацию, которую вы хотите отображать в своем профиле.

### `updateInterval(Number)`

Устанавливает интервал слайда в соответствии с предоставленными данными.

Вы должны предоставить `Number` это количество времени в миллисекундах (минимум: 5000), которое будет показывать этот слайд.