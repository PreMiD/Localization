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

## Introduction

La classe `Slideshow` est utilisée pour définir plusieurs `PresenceData` et "glisser" à travers eux toutes les x millisecondes (minimum : 5000).

Voir la méthode [`createSlideshow`](/dev/presence/class#createslideshow) dans la classe [`Presence`](/dev/presence/class) sur la façon de créer un `Slideshow`.

## Properties

### `currentSlide`

Renvoie un objet [`PresenceData`](/dev/presence/class#presencedata-interface) de ce que la diapositive presence/courante affiche.

```typescript
const currentSlide = slideshow.currentSlide
console.log(currentSlide.details) // La console enregistrera les détails du PresenceData
```

## Methods

### `addSlide(String, PresenceData, Number)`

Ajoute une nouvelle diapositive au `Slideshow` en fonction des données fournies.

Le premier paramètre nécessite une `String` qui sera utilisée comme identifiant unique pour la diapositive.

Le deuxième paramètre nécessite une [interface `PresenceData`](/dev/presence/class#presencedata-interface) pour obtenir toutes les informations que vous souhaitez afficher dans la diapositive.

Le troisième paramètre nécessite un `Number` qui est le temps en millisecondes (minimum : 5000) que cette diapositive se montrera.

### `getSlides()`

Retourne toutes les diapositives enregistrées dans le `Slideshow` en tant que `tableau` de [`SlideshowSlide`](#slideshowslide-class).

### `updateSlide(String, PresenceData, Number)`

Met à jour la diapositive de `l'id` donné en fonction des données fournies.

Le premier paramètre nécessite une `String` qui est l'identifiant unique de la diapositive que vous voulez mettre à jour.

Second parameter requires a [`PresenceData` interface](/dev/presence/class#presencedata-interface) to get all information that you want to display in the slide.

Third parameter requires a `Number` which is the amount of time in milliseconds (minimum: 5000) that this slide will show.

### `hasSlide(String)`

Renvoie un `Boolean` indiquant si la diapositive est ajoutée au `Slideshow`.

### `deleteSlide(String)`

Supprime la diapositive avec `l'id` donné du `Slideshow`.

Le premier paramètre nécessite une `String` qui est l'identifiant unique de la diapositive que vous voulez supprimer.

### `deleteAllSlides()`

Supprime toutes les diapositives du `Slideshow`.

# Classe du Slideshow

## Introduction

Un `SlideshowSlide` est la représentation interne de chaque diapositive dans un `Slideshow`.

## Properties

### `id`

Retourne une `String` de l'id de la diapositive.

### `data`

Retourne un objet [`PresenceData`](/dev/presence/class#presencedata-interface) de la `PresenceData` enregistrée dans la diapositive.

## Methods

### `updateData(PresenceData)`

Définit les données des diapositives en fonction des données fournies.

Vous devez fournir une interface `PresenceData` pour obtenir toutes les informations que vous souhaitez finalement afficher dans votre profil.

### `updateInterval(Number)`

Définit l'intervalle de la diapositive selon les données fournies.

Vous devez fournir un `Number` qui est le temps en millisecondes (minimum : 5000) que cette diapositive se montrera.