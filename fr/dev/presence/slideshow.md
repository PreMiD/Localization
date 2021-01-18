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

## Introduction

La classe `Slideshow` est utilisée pour définir plusieurs `PresenceData` et passer de l'un au suivant toutes les x millisecondes (minimum : 5000).

Voir la méthode [`createSlideshow`](/dev/presence/class#createslideshow) dans la classe [`Presence`](/dev/presence/class) sur la façon de créer un `Slideshow`.

## Propriétés

### `currentSlide`

Renvoie un objet [`PresenceData`](/dev/presence/class#presencedata-interface) de ce que la diapositive presence/courante affiche.

```typescript
const currentSlide = slideshow.currentSlide
console.log(currentSlide.details) // La console affichera les détails du PresenceData
```

## Méthodes

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

Le deuxième paramètre nécessite une [interface `PresenceData`](/dev/presence/class#presencedata-interface) pour obtenir toutes les informations que vous souhaitez afficher dans la diapositive.

Le troisième paramètre nécessite un `Number` qui est le temps en millisecondes (minimum : 5000) que cette diapositive se montrera.

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

## Propriétés

### `id`

Retourne une `String` de l'id de la diapositive.

### `data`

Retourne un objet [`PresenceData`](/dev/presence/class#presencedata-interface) de la `PresenceData` enregistrée dans la diapositive.

## Méthodes

### `updateData(PresenceData)`

Définit les données des diapositives en fonction des données fournies.

Vous devez fournir une interface `PresenceData` pour obtenir toutes les informations que vous souhaitez finalement afficher dans votre profil.

### `updateInterval(Number)`

Définit l'intervalle de la diapositive selon les données fournies.

Vous devez fournir un `Number` qui est le temps en millisecondes (minimum : 5000) que cette diapositive se montrera.