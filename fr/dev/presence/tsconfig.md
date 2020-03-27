---
title: Page sans titre
description: Un peu d'aide pour TypeScript
published: true
date: 2020-02-12T22:28:34.706Z
tags: 
---

# Configuration TypeScript

## Introduction

Lorsque vous avez téléchargé et décompressé l'espace de travail, vous verrez un fichier appelé `tsconfig. s` dans les dossiers de racine et de présence, ce fichier est utilisé pour configurer le compilateur **TypeScript**. Il est déjà configuré pour vous, donc ne vous inquiétez pas.

Nous voulons juste décrire certains paramètres que vous devriez savoir.

## Configuration de la racine

Dans le fichier de configuration racine, vous verrez quelque chose comme ça.

```javascript
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es6",
    "removeComments": true
  },
  "exclude": ["node_modules"]
}
```

| Propriété                  | Description                                                                                              |
|:-------------------------- |:-------------------------------------------------------------------------------------------------------- |
| **compilerOptions**        | Utilisé pour configurer le compilateur, la plupart des propriétés se trouvent ici.                       |
| module                     | Vous pouvez en savoir plus à propos de [ici](https://www.typescriptlang.org/docs/handbook/modules.html). |
| target                     | Définit la version JavaScript que vous compilez.                                                         |
| Supprimer les commentaires | Suppression des commentaires des fichiers compilés.                                                      |
| **exclure**                | Vous pouvez définir ici les dossiers que vous voulez exclure de la future compilation.                   |

## Configuration de Présence

```javascript
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
}
```

| Propriété           | Description                                                                                                |
|:------------------- |:---------------------------------------------------------------------------------------------------------- |
| **Étendre**         | Utilisé pour étendre le fichier de base `tsconfig` pour diverses tâches.                                   |
| **compilerOptions** | Voir [**Configuration de la racine**](/dev/presence/tsconfig#root-configuration) pour plus d'informations. |
| outDir              | Définit le répertoire de sortie des fichiers compilés.                                                     |