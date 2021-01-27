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
const currentSlide = slideshow.currentSlide
console.log(currentSlide.details) // Will console log the details of the PresenceData
```

## Методы

### `addSlide(String, PresenceData, Number)`

Добавить новый слайд в `Slideshow` согласно предоставленным данным.

Первый параметр требует `String` которая будет использоваться в качестве уникального идентификатора для слайда.

Второй параметр требует интерфейса [`PresenceData`](/dev/presence/class#presencedata-interface) чтобы получить всю информацию, которую вы хотите показать на слайде.

Вы должны предоставить `Number` это количество времени в миллисекундах (минимум: 5000), которое будет показывать этот слайд.

### `getSlides()`

Возвращает все слайды, сохраненные в `Slideshow` as an `Array` of [`SlideshowSlide`](#slideshowslide-class).

### `updateSlide(String, PresenceData, Number)
`

Обновляет слайд данного `id` в соответствии с предоставленными данными.

Первый параметр требует `String` которая является уникальным идентификатором слайда, который вы хотите обновить.

Второй параметр требует интерфейса [`PresenceData`](/dev/presence/class#presencedata-interface) чтобы получить всю информацию, которую вы хотите показать на слайде.

Вы должны предоставить `Number` это количество времени в миллисекундах (минимум: 5000), которое будет показывать этот слайд.

### `hasSlide(String)`

Возвращает `Boolean` о добавлении слайда в `Slideshow`.

### `deleteSlide(String)`

Удаляет слайд с заданным `id` из `Slideshow`.

Первый параметр требует `String` которая является уникальным идентификатором слайда, который вы хотите обновить.

### `deleteAllSlides()`

Удаляет все слайды из `Slideshow`.

# SlideshowSlide Класс

## Введение

`SlideshowSlide` — это внутреннее представление каждого слайда в `Slideshow`.

## Свойства

### `id`

Возвращает `String` для идентификатора слайда.

### `data`

Возвращает объект [`PresenceData`](/dev/presence/class#presencedata-interface) `PresenceData`, сохраненный в слайде.

## Методы

### `updateData(PresenceData)`

Устанавливает данные слайдов в соответствии с предоставленными данными.

Вы должны предоставить `PresenceData` интерфейс, чтобы получить всю информацию, которую вы хотите отображать в своем профиле.

### `updateInterval(Number)`

Устанавливает интервал слайда в соответствии с предоставленными данными.

Вы должны предоставить `Number` это количество времени в миллисекундах (минимум: 5000), которое будет показывать этот слайд.