---
title: Classe iFrame
description:
published: vrai
date: 2020-04-07T20:49:50.869Z
tags:
---

# Classe iFrame
> Le système iframe avec PreMiD est problématique et peut avoir un comportement inattendu, utiliser avec prudence. 
> 
> {.is-danger}

## Introduction

Dans certains scénarios, votre présence peut avoir besoin d'accéder à des éléments à l'intérieur des `iframes`.

Le code que tu écris dans ton fichier `iframe.ts` est injecté dans chaque iframe de la page.

Tout comme les présences, `iframes` ont leurs propres classes conçues pour mettre à jour automatiquement les données.

```typescript
let iframe = new iFrame();

iframe.on("UpdateData", async () => {
    // Le code va ici...
});
```

## Méthodes

### `send(Objet)`
Envoie des données à la présence. L'utilisation de cette méthode fera que la présence lancera un événement `iFrameData`.

### `getUrl(String)`
Retourne l'URL de l' `iframe`.

## Évènements
En `iframes`, les événements fonctionnent de la même façon que la classe `présence`.

```typescript
iframe.on("UpdateData", async () => {
    // Le code va ici...
});
```

Voici une liste de tous les événements :

#### `Mettre à jour les données`

Cet événement est déclenché chaque fois que l'iframe est mis à jour.