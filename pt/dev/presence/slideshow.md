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

## Introdução

A classe ` Slideshow ` é usada para definir vários ` PresenceData ` e "deslizar" por eles a cada x milissegundos (mínimo: 5000).

Veja o método [`createSlideshow`](/dev/presence/class#createslideshow) na classe [`Presença`](/dev/presence/class) sobre como criar um `Slideshow`.

## Propriedades

### `currentSlide`

Retorna um objeto [ ` PresenceData ` ](/dev/presence/class#presencedata-interface) do que a presença/slide atual está exibindo.

```typescript
const currentSlide = slideshow.currentSlide
console.log(currentSlide.details) // O console registrará os detalhes dos dados de presença
```

## Métodos

### `addSlide(String, PresenceData, Number)`

Adicione um novo slide ao ` Slideshow ` de acordo com os dados fornecidos.

O primeiro parâmetro requer uma ` String ` que será usada como um identificador exclusivo para o slide.

O segundo parâmetro requer uma [ interface ` PresenceData ` ](/dev/presence/class#presencedata-interface) para obter todas as informações que você deseja exibir no slide.

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

## Introduction

A `SlideshowSlide` is the internal representation of each slide in a `Slideshow`.

## Properties

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