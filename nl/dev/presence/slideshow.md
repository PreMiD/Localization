---
title: Slideshow Klasse
description:
published: true
date: 2020-12-25T00:47:38.111Z
tags:
editor: markdown
dateCreated: 2020-12-25T00:44:42.803Z
---

# Slideshow Klasse

## Introductie

De `Slideshow` klasse wordt gebruikt om meerdere `PresenceData` te gebruiken en "slide" door hen heen elke x milliseconden (minimum: 5000).

Zie de [`createSlideshow`](/dev/presence/class#createslideshow) methode in de [`Presence`](/dev/presence/class) klasse om te zien hoe je een `Slideshow` maakt.

## Eigenschappen

### `currentSlide`

Geeft als resultaat een [`PresenceData`](/dev/presence/class#presencedata-interface) object van wat de presence/huidige slide weergeeft.

```typescript
const currentSlide = slideshow.currentSlide
console.log(currentSlide.details) // Will console log the details of the PresenceData
```

## Methodes

### `addSlide(String, PresenceData, Number)`

Add a new slide to the `Slideshow` according to provided data.

First parameter requires a `String` that will be used as a unique identifier for the slide.

Second parameter requires a [`PresenceData` interface](/dev/presence/class#presencedata-interface) to get all information that you want to display in the slide.

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

## Introductie

A `SlideshowSlide` is the internal representation of each slide in a `Slideshow`.

## Eigenschappen

### `id`

Returns a `String` of the id of the slide.

### `data`

Returns a [`PresenceData`](/dev/presence/class#presencedata-interface) object of the `PresenceData` saved in the slide.

## Methodes

### `updateData(PresenceData)`

Sets the slides data according to provided data.

You must provide a `PresenceData` interface to get all information that you ultimately want to display in your profile.

### `updateInterval(Number)`

Sets the interval of the slide according to provided data.

You must provide a `Number` which is the amount of time in milliseconds (minimum: 5000) that this slide will show.