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

## Introduzione

La classe `Slideshow` viene utilizzata per impostare più `PresenceData` e "slide" attraverso di loro ogni x millisecondi (minimo: 5000).

Vedi il metodo [`createSlideshow`](/dev/presence/class#createslideshow) nella classe [`Presence`](/dev/presence/class) su come creare una presentazione ``.

## Proprietà

### `currentSlide`

Restituisce un oggetto [`PresenceData`](/dev/presence/class#presencedata-interface) di ciò che la presenza/diapositiva corrente sta visualizzando.

```typescript
const currentSlide = slideshow.currentSlide
console.log(currentSlide.details) // Console registrerà i dettagli del PresenceData
```

## Metodi

### `addSlide(String, PresenceData, Number)`

Aggiungi una nuova diapositiva alla `Slideshow` in base ai dati forniti.

Il primo parametro richiede una `Stringa` che verrà utilizzata come identificatore univoco per la diapositiva.

Secondo parametro richiede un'interfaccia [`PresenceData`](/dev/presence/class#presencedata-interface) per ottenere tutte le informazioni che si desidera visualizzare nella diapositiva.

Il terzo parametro richiede un `Numero` che è la quantità di tempo in millisecondi (minimo: 5000) che questa diapositiva mostrerà.

### `getSlides()`

Restituisce tutte le diapositive salvate nella `Slideshow` come `Array` di [`SlideshowSlide`](#slideshowslide-class).

### `updateSlide(String, PresenceData, Number)`

Aggiorna la diapositiva dell'id `` in base ai dati forniti.

Il primo parametro richiede una `Stringa` che è l'identificatore univoco della diapositiva che si desidera aggiornare.

Secondo parametro richiede un'interfaccia [`PresenceData`](/dev/presence/class#presencedata-interface) per ottenere tutte le informazioni che si desidera visualizzare nella diapositiva.

Il terzo parametro richiede un `Numero` che è la quantità di tempo in millisecondi (minimo: 5000) che questa diapositiva mostrerà.

### `hasSlide(String)`

Restituisce un `Booleano` che indica se la diapositiva è aggiunta alla `diapositive`.

### `deleteSlide(String)`

Elimina la diapositiva con l'Id `` dato dalla diapositiva ``.

Il primo parametro richiede una `Stringa` che è l'identificatore univoco della diapositiva che si desidera aggiornare.

### `deleteAllSlides()`

Elimina tutte le diapositive dalla `Presentazione`.

# Classe Slideshow

## Introduzione

Una `SlideshowSlide` è la rappresentazione interna di ogni diapositiva in una `Slideshow`.

## Proprietà

### `id`

Restituisce una `Stringa` dell'id della diapositiva.

### `data`

Restituisce un oggetto [`PresenceData`](/dev/presence/class#presencedata-interface) del `PresenceData` salvato nella diapositiva.

## Metodi

### `updateData(PresenceData)`

Imposta i dati delle diapositive in base ai dati forniti.

Devi fornire un'interfaccia `PresenceData` per ottenere tutte le informazioni che in ultima analisi vuoi visualizzare nel tuo profilo.

### `updateInterval(Number)`

Imposta l'intervallo della diapositiva secondo i dati forniti.

Devi fornire un `Numero` che è la quantità di tempo in millisecondi (minimo: 5000) che questa diapositiva mostrerà.