---
title: Klasse for lysbildefremvisning
description:
published: true
date: 2020-12-25T00:47:38.111Z
tags:
editor: markdown
dateCreated: 2020-12-25T00:44:42.803Z
---

# Klasse for lysbildefremvisning

## Introduksjon

`Slideshow` klassen brukes for å angi flere `PresenceData` og "slide" gjennom dem hver x millisekunder (minimum: 5000).

Se [`createSlideshow`](/dev/presence/class#createslideshow) metoden i [`Presence`](/dev/presence/class) klassen hvordan du oppretter en `lysbildefremvisning`.

## Egenskaper

### `currentSlide`

Returnerer et [`PresenceData`](/dev/presence/class#presencedata-interface) objekt for hva perspektivet / gjeldende lysbilde viser.

```typescript
samme valutafondet = slideshow.currentSlide
console.log(currentSlide.details) // Vil konsoll logge detaljene for PresenceData
```

## Metoder

### `addSlide(String, PresenceData, Number)`

Legg til en ny lysbilde til `lysbildefremvisning` i henhold til oppgitte data.

Første parameter krever en `streng` som vil bli brukt som en unik identifikator for lysbildet.

Andre parameter krever en [`PresenceData` grensesnitt](/dev/presence/class#presencedata-interface) for å få all informasjon du vil vise i lysbildet.

Tredje parameter krever et `Nummer` som er tid i millisekunder (minimum: 5000) som dette lysbildet vil vise.

### `getSlides()`

Returnerer alle lysbilder lagret i `lysbildefremvisning` som en `liste` med [`SlideshowSlide`](#slideshowslide-class).

### `updateSlide(String, PresenceData, Number)`

Oppdaterer sliden til den oppgitte `id-en` basert på oppgitte data.

Første parameter krever en `streng` som er den unike identifikatoren til lysbildet du vil oppdatere.

Andre parameter krever en [`PresenceData` grensesnitt](/dev/presence/class#presencedata-interface) for å få all informasjon du vil vise i lysbildet.

Tredje parameter krever et `Nummer` som er tid i millisekunder (minimum: 5000) som dette lysbildet vil vise.

### `hasSlide(String)`

Returnerer en `Bolsk` som sier om lysbildet blir lagt til `lysbildefremvisning`.

### `deleteSlide(String)`

Sletter lysbildet med den angitte `id-` fra `lysbildefremvisningen`.

Første parameter krever en `streng` som er den unike identifikatoren til lysbildet du ønsker å slette.

### `deleteAllSlides()`

Sletter alle lysbilder fra `Slideshow`.

# SlideshowSlide klasse

## Introduksjon

En `SlideshowSlide` er den interne representasjonen av hvert lysbilde på en `Slideshow`.

## Egenskaper

### `id`

Returnerer en `streng` av Iden til lysbildet.

### `data`

Returnerer et [`PresenceData`](/dev/presence/class#presencedata-interface) objekt for `PresenceData` lagret i lysbildet.

## Metoder

### `updateData(PresenceData)`

Angir lysbildefremvisning i henhold til oppgitte data.

Du må oppgi et `PresenceData` grensesnitt for å få all informasjon du til slutt vil vise i din profil.

### `updateInterval(Number)`

Angir intervall for lysbildet i henhold til oppgitte data.

Du må angi et `tall` som er tiden i millisekunder (minimum: 5000) som dette lysbildet vil vise.