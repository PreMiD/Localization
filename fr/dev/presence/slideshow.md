---
title: Slideshow Class
description:
published: oui
date: 2020-12-25T00:47:38.111Z
tags:
editor: markdown
dateCreated: 2020-12-25T00:44:42.803Z
---

# Slideshow Class

## Introduction

La classe `Slideshow` est utilisée pour définir plusieurs `PresenceData` et "glisser" à travers eux toutes les x millisecondes (minimum : 5000).

Voir la méthode [`createSlideshow`](/dev/presence/class#createslideshow) dans la classe [`Presence`](/dev/presence/class) sur la façon de créer un `Slideshow`.

## Propriétés

### `currentSlide`

Renvoie un objet [`PresenceData`](/dev/presence/class#presencedata-interface) de ce que la diapositive presence/courante affiche.

```typescript
const currentSlide = slideshow.currentSlide
console.log(currentSlide.details) // La console enregistrera les détails du PresenceData
```

## Méthodes

### `addSlide(String, PresenceData, Number)`

Ajoute une nouvelle diapositive au `Slideshow` en fonction des données fournies.

Le premier paramètre nécessite une `chaîne de caractères` qui sera utilisée comme identifiant unique pour la diapositive.

Le deuxième paramètre nécessite une [interface `PresenceData`](/dev/presence/class#presencedata-interface) pour obtenir toutes les informations que vous souhaitez afficher dans la diapositive.

Le troisième paramètre nécessite un `nombre` qui est le temps en millisecondes (minimum : 5000) que cette diapositive se montrera.

### `getSlides()`

Returns all slides saved in the `Slideshow` as an `Array` of [`SlideshowSlide`](#slideshowslide-class).

### `updateSlide(String, PresenceData, Number)`

Updates the slide of the given `id` according to provided data.

First parameter requires a `String` that is the unique identifier of the slide you want to update.

Le deuxième paramètre nécessite une [interface `PresenceData`](/dev/presence/class#presencedata-interface) pour obtenir toutes les informations que vous souhaitez afficher dans la diapositive.

Le troisième paramètre nécessite un `nombre` qui est le temps en millisecondes (minimum : 5000) que cette diapositive se montrera.

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

## Propriétés

### `id`

Returns a `String` of the id of the slide.

### `data`

Returns a [`PresenceData`](/dev/presence/class#presencedata-interface) object of the `PresenceData` saved in the slide.

## Méthodes

### `updateData(PresenceData)`

Sets the slides data according to provided data.

You must provide a `PresenceData` interface to get all information that you ultimately want to display in your profile.

### `updateInterval(Number)`

Sets the interval of the slide according to provided data.

You must provide a `Number` which is the amount of time in milliseconds (minimum: 5000) that this slide will show.