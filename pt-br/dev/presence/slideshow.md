---
title: Classe Slideshow
description:
published: true
date: 2020-12-25T00:47:38.111Z
tags:
editor: markdown
dateCreated: 2020-12-25T00:44:42.803Z
---

# Classe Slideshow

## Introdução

A classe `Slideshow` é usada para definir vários `PresenceData` e "deslizar" por eles a cada x milissegundos (mínimo: 5000).

Veja o método [`createSlideshow`](/dev/presence/class#createslideshow) na classe [`Presence`](/dev/presence/class) sobre como criar um `Slideshow`.

## Propriedades

### `currentSlide`

Retorna um objeto [`PresenceData`](/dev/presence/class#presencedata-interface) do que a presence/atual slide está exibindo.

```typescript
const currentSlide = slideshow.currentSlide
console.log(currentSlide.details) // Irá registrar no console os detalhes do PresenceData
```

## Métodos

### `addSlide(String, PresenceData, Number)`

Adiciona um novo slide ao `Slideshow` de acordo com os dados fornecidos.

O primeiro parâmetro requer uma `String` que será usada como um identificador único para o slide.

O segundo parâmetro requer uma [interface `PresenceData`](/dev/presence/class#presencedata-interface) para obter todas as informações que você deseja exibir no slide.

O terceiro parâmetro requer um `Número` que é a quantidade de tempo em milissegundos (mínimo: 5000) que este slide irá mostrar.

### `getSlides()`

Retorna todos os slides salvos no `Slideshow` como um `Array` de [`SlideshowSlide`](#slideshowslide-class).

### `updateSlide(String, PresenceData, Number)`

Atualiza o slide do `id` determinado de acordo com os dados fornecidos.

O primeiro parâmetro requer uma `String` que é o identificador único do slide que você deseja atualizar.

O segundo parâmetro requer uma [interface `PresenceData`](/dev/presence/class#presencedata-interface) para obter todas as informações que você deseja exibir no slide.

O terceiro parâmetro requer um `Número` que é a quantidade de tempo em milissegundos (mínimo: 5000) que este slide irá mostrar.

### `hasSlide(String)`

Retorna um `Boolean` informando se o slide está adicionado ao `Slideshow`.

### `deleteSlide(String)`

Deleta um slide com um `id` determinado no `Slideshow`.

O primeiro parâmetro requer uma `String` que é o identificador único do slide que você deseja deletar.

### `deleteAllSlides()`

Deleta todos os slides do `Slideshow`.

# Classe Slideshow

## Introdução

A `SlideshowSlide` is the internal representation of each slide in a `Slideshow`.

## Properties

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