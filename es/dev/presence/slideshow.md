---
title: Clase Slideshow
description:
published: true
date: 2020-12-25T00:47:38.111Z
tags:
editor: markdown
dateCreated: 2020-12-25T00:44:42.803Z
---

# Clase Slideshow

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

El tercer parámetro requiere un `Number` que es la cantidad de tiempo en milisegundos que mostrará esta diapositiva (mínimo: 5000).

### `getSlides()`

Devuelve todas las diapositivas guardadas en el `Slideshow` como un `Array` de [`SlideshowSlide`](#slideshowslide-class).

### `updateSlide(String, PresenceData, Number)`

Actualiza la diapositiva del `id` dado de acuerdo a los datos proporcionados.

El primer parámetro requiere un `String` que es el identificador único de la diapositiva que se desea actualizar.

El segundo parámetro requiere una interfaz [`PresenceData`](/dev/presence/class#presencedata-interface) para obtener toda la información que se desea mostrar en la diapositiva.

El tercer parámetro requiere un `Number` que es la cantidad de tiempo en milisegundos que se mostrará esta diapositiva (mínimo: 5000).

### `hasSlide(String)`

Devuelve un `Boolean` indicando si la diapositiva se ha añadido a la `Slideshow`.

### `deleteSlide(String)`

Elimina la diapositiva con el `id` dado del `Slideshow`.

El primer parámetro requiere un `String` que es el identificador único de la diapositiva que se desea eliminar.

### `deleteAllSlides()`

Elimina todas las diapositivas del `Slideshow`.

# Clase SlideshowSlide

## Introducción

Una `SlideshowSlide` es la representación interna de cada diapositiva `Slideshow`.

## Propiedades

### `id`

Devuelve un `String` del id de la diapositiva.

### `data`

Devuelve un objeto [`PresenceData`](/dev/presence/class#presencedata-interface) del `PresenceData` guardado en la diapositiva.

## Métodos

### `updateData(PresenceData)`

Establece los datos de las diapositivas según los datos proporcionados.

Debes proporcionar una interfaz `PresenceData` para obtener toda la información que deseas mostrar en el perfil.

### `updateInterval(Number)`

Establece el intervalo de la diapositiva de acuerdo a los datos proporcionados.

Debes proporcionar un `Number` que es la cantidad de tiempo en milisegundos que se mostrará esta diapositiva (mínimo: 5000).