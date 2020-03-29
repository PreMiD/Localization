---
title: TypeScript configuratie
description: Een kleine helper voor TypeScript
published: true
date: 2020-02-12T22:15:34.451Z
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
        "noFallthroughCasesInSwitch": true,
        "noUnusedLocals": true,
        "noUnusedParameters": true,
        "inlineSourceMap": true,
        "typeRoots": ["@types"]
    },
    "exclude": ["node_modules"]
}
```

| Property                   | Beschrijving                                                                                                                  |
|:-------------------------- |:----------------------------------------------------------------------------------------------------------------------------- |
| **compilerOptions**        | Gebruikt voor het configureren van de compiler, de meeste eigenschappen bevinden zich hier.                                   |
| module                     | Je kunt er meer over lezen [hier](https://www.typescriptlang.org/docs/handbook/modules.html).                                 |
| target                     | Definieert de JavaScript-versie die u aan het compileren bent.                                                                |
| removeComments             | Verwijder reacties uit gecompileerde bestanden.                                                                               |
| noFallthroughCasesInSwitch | Rapporteer fouten voor fallthrough gevallen in switch statements.                                                             |
| noUnusedLocals             | Rapporteer fouten bij ongebruikte localen.                                                                                    |
| noUnusedParameters         | Rapporteer fouten bij ongebruikte parameters.                                                                                 |
| inlineSourceMap            | Voegt sourcemapping toe                                                                                                       |
| typeRoots                  | Je kunt er meer over lezen [hier](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#types-typeroots-and-types). |
| **exclude**                | Hier kunt u de mappen definiëren die u wilt uitsluiten van de toekomstige compilatie.                                         |

## Presence Configuratie

```javascript
{
  "extends": "../tsconfig.json",
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
