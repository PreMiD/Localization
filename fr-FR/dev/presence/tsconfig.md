---
title: Configuration TypeScript
description: Un peu d'aide pour TypeScript
published: oui
date: 2020-08-05T16:25:22.812Z
tags:
editor: markdown
---

# Configuration TypeScript

## Introduction

Lorsque vous avez téléchargé et décompressé l'espace de travail, vous verrez un fichier appelé `tsconfig.js` dans les dossiers de racine et de présence, ce fichier est utilisé pour configurer le compilateur **TypeScript**. Il est déjà configuré pour vous, donc ne vous inquiétez pas.

Nous voulons juste décrire certains paramètres que vous devriez savoir.

## Configuration de la racine

Dans le fichier de configuration racine, vous verrez quelque chose comme ça.

```javascript
{
  "compilerOptions": {
    "module": "CommonJS",
    "target": "ES2020",
    "removeComments": true,
    "noEmitOnError": true,
    "noFallthroughCasesInSwitch": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "inlineSourceMap": true,
    "typeRoots": ["@types"],
    "esModuleInterop": true
  }
}
```

| Property                        | Description                                                                                                                                                                                          |
|:------------------------------- |:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **compilerOptions**             | Utilisé pour configurer le compilateur, la plupart des propriétés se trouvent ici.                                                                                                                   |
| module                          | Vous pouvez en savoir plus à propos de [ici](https://www.typescriptlang.org/docs/handbook/modules.html).                                                                                             |
| target                          | Définit la version JavaScript que vous compilez.                                                                                                                                                     |
| removeComments                  | Suppression des commentaires des fichiers compilés.                                                                                                                                                  |
| noEmitOnError                   | Ne pas émettre de sorties si des erreurs ont été signalées.                                                                                                                                          |
| pas de casse dans les cassettes | Signaler les erreurs pour les cas de repli dans l'instruction switch.                                                                                                                                |
| noUnusedLocals                  | Signaler des erreurs sur les locales inutilisées.                                                                                                                                                    |
| noUnusedParameters              | Signaler les erreurs sur les paramètres inutilisés.                                                                                                                                                  |
| inlineSourceMap                 | Ajoute le mappage de source                                                                                                                                                                          |
| typeRoots                       | Vous pouvez en savoir plus à propos de [ici](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#types-typeroots-and-types).                                                             |
| esModuleInterop                 | Émet les aides __importStar et __importDefault pour la durée d'exécution de la compatibilité avec l'écosystème babel, et active --allowSyntheticDefaultImports la compatibilité du système type. |

## Configuration de Présence

```javascript
{
  "extends": "../../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
}
```

| Propriétés          | Description                                                                                                |
|:------------------- |:---------------------------------------------------------------------------------------------------------- |
| **extends**         | Utilisé pour étendre le fichier de base `tsconfig` pour diverses tâches.                                   |
| **compilerOptions** | Voir [**Configuration de la racine**](/dev/presence/tsconfig#root-configuration) pour plus d'informations. |
| outDir              | Définit le répertoire de sortie des fichiers compilés.                                                     |
