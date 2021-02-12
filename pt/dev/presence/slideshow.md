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

Veja o método [`createSlideshow`](/dev/presence/class#createslideshow) na classe [`Presence`](/dev/presence/class) sobre como criar um `Slideshow`.

## Propriedades

### `currentSlide`

Devolve um [`PresenceData`](/dev/presence/class#presencedata-interface) objeto do que a presence/diapositivo de corrente está a exibir.

```typescript
const currentSlide = slideshow.currentSlide
console.log(currentSlide.details) // O console registrará os detalhes dos dados de presence
```

## Métodos

### `addSlide(String, PresenceData, Number)`

Adicione um novo slide ao ` Slideshow ` de acordo com os dados fornecidos.

O primeiro parâmetro requer uma ` String ` que será usada como um identificador exclusivo para o slide.

O segundo parâmetro requer uma [ interface ` PresenceData ` ](/dev/presence/class#presencedata-interface) para obter todas as informações que você deseja exibir no slide.

O terceiro parâmetro requer um `Number` que é o tempo em milissegundos (mínimo: 5000) que este slide irá mostrar.

### `getSlides()`

Devolve todos os slides guardados na Apresentação de Diapositivos como Uma Matriz de SlideshowSlide.

### `updateSlide(String, PresenceData, Number)`

Atualiza o slide do id dado de acordo com os dados fornecidos.

O primeiro parâmetro requer um `String` que é o identificador único do slide que pretende atualizar.

O segundo parâmetro requer um [`PresenceData` interface](/dev/presence/class#presencedata-interface) para obter toda a informação que pretende exibir no diapositivo.

O terceiro parâmetro requer um `Number` que é o tempo em milissegundos (mínimo: 5000) que este slide irá mostrar.

### `hasSlide(String)`

Devolve um `Boolean` indicando se o slide é adicionado ao `Slideshow`.

### `deleteSlide(String)`

Elimina o slide com o dado `id` do `Slideshow`.

O primeiro parâmetro requer um `String` que é o identificador único do slide que pretende eliminar.

### `deleteAllSlides()`

Exclui todos os slides do `Slideshow`.

# Classe Slideshow

## Introdução

Um `SlideshowSlide` é a representação interna de cada slide em um `Slideshow`.

## Propriedades

### `id`

Retorna uma `String` do id do slide.

### `data`

Retorna um [`PresenceData`](/dev/presence/class#presencedata-interface) objeto do `PresenceData` salvo no slide.

## Métodos

### `updateData(PresenceData)`

Define os dados de slides de acordo com os dados fornecidos.

Primeiro parámetro requer `presenceData` interface para conseguir toda a informação para ver o que vai apresentar no seu perfil.

### `updateInterval(Number)`

Define o intervalo do slide de acordo com dados fornecidos.

Você deve fornecer um `Number` que é o tempo em milissegundos (mínimo: 5000) que este slide irá mostrar.