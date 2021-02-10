---
title: Slideshow Class
description:
published: true
date: 2020-12-25T00:47:38.111Z
tags:
editor: markdown
dateCreated: 2020-12-25T00:44:42.803Z
---

# Classe Slideshow

## Introdução

A classe ` Slideshow ` é usada para definir vários ` PresenceData ` e "deslizar" por eles a cada x milissegundos (mínimo: 5000).

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

Um `SlideshowSlide` é a representação interna de cada slide em um `Slideshow`.

## Propriedades

### `id`

Retorna uma `String` do id do slide.

### `data`

Retorna um objeto [`PresenceData`](/dev/presence/class#presencedata-interface) do `PresenceData` salvo no slide.

## Métodos

### `updateData(PresenceData)`

Define os dados dos slides de acordo com os dados fornecidos.

Você deve fornecer uma interface `PresenceData` para obter todas as informações que por fim você deseja exibir em seu perfil.

### `updateInterval(Number)`

Define o intervalo do slide de acordo com os dados fornecidos.

Você deve fornecer um `Número` que é a quantidade de tempo em milissegundos (mínimo: 5000) que este slide irá mostrar.