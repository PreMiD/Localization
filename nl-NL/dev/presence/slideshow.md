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
console.log(currentSlide.details) // Zal de details van de presenceData loggen
```

## Methodes

### `addSlide(String, PresenceData, Number)`

Voeg een nieuwe slide toe aan de `Slideshow` volgens de verstrekte gegevens.

De eerste parameter vereist een `String` die zal worden gebruikt als unieke id voor de slide.

De tweede parameter vereist een [`PresenceData` interface](/dev/presence/class#presencedata-interface) om alle informatie te krijgen die je wilt weergeven in de slide.

De derde parameter vereist een `Number` die de tijd in milliseconden is (minimaal 5000) voor hoe lang de slide te zien zal zijn.

### `getSlides()`

Retourneert alle slides die zijn opgeslagen in de `Slideshow` als `Array` van [`SlideshowSlide`](#slideshowslide-class).

### `updateSlide(String, PresenceData, Number)`

Werkt de slide met de gegeven `id` bij volgens de verstrekte gegevens.

De eerste parameter vereist een `String` die de unieke identifier is van de slide die u wilt bijwerken.

De tweede parameter vereist een [`PresenceData` interface](/dev/presence/class#presencedata-interface) om alle informatie te krijgen die je wilt weergeven in de slide.

De derde parameter vereist een `Number` die de tijd in milliseconden is (minimaal 5000) voor hoe lang de slide te zien zal zijn.

### `hasSlide(String)`

Retourneert een `Boolean` die aangeeft of de slide toegevoegd is aan de `Slideshow`.

### `deleteSlide(String)`

Verwijdert de slide met de gegeven `id` van de `Slideshow`.

De eerste parameter vereist een `String` die de unieke identifier is van de slide die u wilt verwijderen.

### `deleteAllSlides()`

Verwijdert alle slide's van de `Slideshow`.

# SlideshowSlide Klasse

## Introductie

Een `SlideshowSlide` is de interne weergave van elke slide in een `Slideshow`.

## Eigenschappen

### `id`

Retourneert een `String` van het id van de slide.

### `data`

Retourneert een [`PresenceData`](/dev/presence/class#presencedata-interface) object van de `PresenceData` die is opgeslagen in de slide.

## Methodes

### `updateData(PresenceData)`

Stelt de slides data in volgens de verstrekte gegevens.

Het is vereist om een `presenceData` interface te geven om alle informatie te krijgen die je wilt weergeven in je profiel.

### `updateInterval(Number)`

Stelt het interval van de slide in volgens de verstrekte gegevens.

Je moet een `Number` opgeven, wat de hoeveelheid tijd is in milliseconden (minimaal 5000) dat deze slide wordt weergegeven.