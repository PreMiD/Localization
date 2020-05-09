---
title: TypeScript configuratie
description: Een kleine helper voor TypeScript
published: true
date: 2020-05-09T14:32:40.832Z
tags:
---

# TypeScript configuratie

## Introductie

Wanneer je de workspace hebt gedownload en uitgepakt, zie je een bestand met de naam `tsconfig.ts` in root- en presencemappen, dit bestand wordt gebruikt voor het configureren van de **TypeScript** compiler. Het is al geconfigureerd voor jou, dus maak je geen zorgen daarover.

We willen alleen enkele instellingen beschrijven die je zou moeten kennen.

## Root Configuratie

In het root configuratiebestand ziet u zoiets als deze.

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

| Property                   | Beschrijving                                                                                                                                                        |
|:-------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **compilerOptions**        | Gebruikt voor het configureren van de compiler, de meeste eigenschappen bevinden zich hier.                                                                         |
| module                     | Je kunt er meer over lezen [hier](https://www.typescriptlang.org/docs/handbook/modules.html).                                                                       |
| target                     | Definieert de JavaScript-versie die u aan het compileren bent.                                                                                                      |
| removeComments             | Verwijder reacties uit gecompileerde bestanden.                                                                                                                     |
| noEmitOnError              | Do not emit outputs if any errors were reported.                                                                                                                    |
| noFallthroughCasesInSwitch | Report errors for fallthrough cases in switch statement.                                                                                                            |
| noUnusedLocals             | Report errors on unused locals.                                                                                                                                     |
| noUnusedParameters         | Report errors on unused parameters.                                                                                                                                 |
| inlineSourceMap            | Adds sourcemapping                                                                                                                                                  |
| typeRoots                  | You can read more about that [here](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#types-typeroots-and-types).                                     |
| esModuleInterop            | Emit __importStar and __importDefault helpers for runtime babel ecosystem compatibility and enable --allowSyntheticDefaultImports for typesystem compatibility. |

## Presence Configuratie

```javascript
{
  "extends": "../../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
}
```

| Property            | Beschrijving                                                                           |
|:------------------- |:-------------------------------------------------------------------------------------- |
| **extends**         | Gebruikt voor het uitbreiden van het bestand `tsconfig` voor verschillende taken.      |
| **compilerOptions** | Zie [**Root Configuratie**](/dev/presence/tsconfig#root-configuration) voor meer info. |
| outDir              | Definieert de uitvoermap voor gecompileerde bestanden.                                 |
