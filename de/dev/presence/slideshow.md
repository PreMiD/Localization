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

## Einführung

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

Der dritte Parameter erfordert eine `Nummer`, die die Zeitspanne in Millisekunden (minimum: 5000) beinhaltet, die diese Folie anzeigt.

### `getSlides()`

Gibt alle in der `Slideshow` gespeicherten Folien als `Array` von [`SlideshowSlide`](#slideshowslide-class) zurück.

### `updateSlide(String, PresenceData, Number)`

Aktualisiert die Folie mit der angegebenen `id` entsprechend der angegebenen Daten.

Der erste Parameter erfordert einen `String`, der die eindeutige Kennung der zu aktualisierenden Folie ist.

Der zweite Parameter erfordert eine [`PresenceData`-Schnittstelle](/dev/presence/class#presencedata-interface) um alle Informationen abzurufen, die Sie in Ihrer Folie anzeigen möchten.

Der dritte Parameter erfordert eine `Nummer`, die die Zeitspanne in Millisekunden (minimum: 5000) beinhaltet, die diese Folie anzeigt.

### `hasSlide(String)`

Wirft einen `Boolean` zurück, der angibt, ob die Folie zur `Slideshow` hinzugefügt wurde oder nicht.

### `deleteSlide(String)`

Löscht die Folie mit der gegebenen `id` von der `Slideshow`.

Der erste Parameter erfordert einen `String`, der die eindeutige Kennung der zu löschenden Folie ist.

### `deleteAllSlides()`

Löscht alle Folien von der `Slideshow`.

# SlideShowSlide-Klasse

## Einführung

Ein `SlideshowSlide` ist die interne Darstellung von jeder Folie in einer `Slideshow`.

## Eigenschaften

### `id`

Wirft ein `String` mit der ID der Folie zurück.

### `data`

Wirft ein [`PresenceData`](/dev/presence/class#presencedata-interface) Objekt von der in der Folie gespeicherten `PresenceData` zurück.

## Methoden

### `updateData(PresenceData)`

Legt die Folien nach den angegebenen Daten fest.

Der erste Parameter erfordert eine `PresenceData`-Schnittstelle, um alle Informationen abzurufen, die du in deinem Profil anzeigen möchtst.

### `updateInterval(Number)`

Legt das Intervall der Folie nach den angegebenen Daten fest.

Sie müssen eine `Nummer` angeben, die die Zeitspanne in Millisekunden (Minimum: 5000) ist, die diese Folie anzeigt.