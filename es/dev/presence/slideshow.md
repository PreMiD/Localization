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

## Introducción

La clase `Slideshow` se utiliza para establecer múltiples `PresenceData` y "deslizar" a través de cada uno dad x milisegundos (mínimo: 5000).

Consulta el método [`crearSlideshow`](/dev/presence/class#createslideshow) en la clase [`Presence`](/dev/presence/class) sobre cómo crear una `Slideshow`.

## Propiedades

### `currentSlide`

Devuelve un objeto [`PresenceData`](/dev/presence/class#presencedata-interface) de lo que se está mostrando actualmente.

```typescript
const currentSlide = slideshow.currentSlide
console.log(currentSlide.details) // Mostrará los detallas de PresenceData
```

## Métodos

### `addSlide(String, PresenceData, Number)`

Añade una nueva diapositiva a la `Slideshow` de acuerdo a los datos proporcionados.

El primer parámetro requiere un `String` que se utilizará como un identificador único para la diapositiva.

El segundo parámetro requiere una interfaz [`PresenceData`](/dev/presence/class#presencedata-interface) para obtener toda la información que se desea mostrar en la diapositiva.

Third parameter requires a `Number` which is the amount of time in milliseconds (minimum: 5000) that this slide will show.

### `getSlides()`

Returns all slides saved in the `Slideshow` as an `Array` of [`SlideshowSlide`](#slideshowslide-class).

### `updateSlide(String, PresenceData, Number)`

Updates the slide of the given `id` according to provided data.

First parameter requires a `String` that is the unique identifier of the slide you want to update.

El segundo parámetro requiere una interfaz [`PresenceData`](/dev/presence/class#presencedata-interface) para obtener toda la información que se desea mostrar en la diapositiva.

Third parameter requires a `Number` which is the amount of time in milliseconds (minimum: 5000) that this slide will show.

### `hasSlide(String)`

Returns a `Boolean` stating whether the slide is added to the `Slideshow`.

### `deleteSlide(String)`

Deletes the slide with the given `id` from the `Slideshow`.

First parameter requires a `String` that is the unique identifier of the slide you want to delete.

### `deleteAllSlides()`

Deletes all slides from the `Slideshow`.

# SlideshowSlide Class

## Introducción

A `SlideshowSlide` is the internal representation of each slide in a `Slideshow`.

## Propiedades

### `id`

Returns a `String` of the id of the slide.

### `data`

Returns a [`PresenceData`](/dev/presence/class#presencedata-interface) object of the `PresenceData` saved in the slide.

## Métodos

### `updateData(PresenceData)`

Sets the slides data according to provided data.

You must provide a `PresenceData` interface to get all information that you ultimately want to display in your profile.

### `updateInterval(Number)`

Sets the interval of the slide according to provided data.

You must provide a `Number` which is the amount of time in milliseconds (minimum: 5000) that this slide will show.