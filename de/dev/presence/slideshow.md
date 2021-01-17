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

## Anweisung

Die `Slideshow` Klasse wird verwendet, um mehrere `PresenceData` zu setzen, die jede x Millisekunden (minimum: 5000) durchwechseln.

Um eine `Slideshow` zu erstellen, schau dir die [`createSlideshow`](/dev/presence/class#createslideshow) Methode in der [`Presence`](/dev/presence/class) Klasse an.

## Eigenschaften

### `currentSlide`

Gibt ein [`PresenceData`](/dev/presence/class#presencedata-interface) Objekt zurück, mit der aktuell angezeigten Presence der Slideshow.

```typescript
const currentSlide = slideshow.currentSlide
console.log(currentSlide.details) // Protokolliert die Details der PresenceData in der Konsole
```

## Methoden

### `addSlide(String, PresenceData, Number)`

Fügen Sie eine neue Folie auf der `Slideshow` entsprechend den angegebenen Daten hinzu.

Der erste Parameter erfordert einen `String` der als eindeutiger Bezeichner für die Folie verwendet wird.

Der erste Parameter erfordert eine [`Präsenzdaten` Schnittstelle](/dev/presence/class#presencedata-interface), um alle Informationen abzurufen, die Sie in Ihrem Profil anzeigen möchten.

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

## Eigenschaften

### `id`

Returns a `String` of the id of the slide.

### `data`

Returns a [`PresenceData`](/dev/presence/class#presencedata-interface) object of the `PresenceData` saved in the slide.

## Methoden

### `updateData(PresenceData)`

Legt die Folien nach den angegebenen Daten fest.

Der erste Parameter erfordert eine `PresenceData`-Schnittstelle, um alle Informationen abzurufen, die du in deinem Profil anzeigen möchtst.

### `updateInterval(Number)`

Legt das Intervall der Folie nach den angegebenen Daten fest.

Sie müssen eine `Nummer` angeben, die die Zeitspanne in Millisekunden (Minimum: 5000) ist, die diese Folie anzeigt.