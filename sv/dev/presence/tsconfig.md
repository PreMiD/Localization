---
title: TypeScript Configuration
description: Lite hjälpare för TypeScript
published: true
date: 2020-08-05T16:25:22.812Z
tags:
editor: markdown
---

# Konfiguration av typskript

## Introduction

När du laddade ner och packade upp arbetsytan, kommer du att se en fil som heter `tsconfig. s` i rot- och närvaromappar, denna fil används för att konfigurera kompilatorn **TypeScript**. Det är redan konfigurerat för dig, så oroa dig inte för det.

Vi vill bara beskriva vissa inställningar som du bör veta.

## Root konfiguration

I rotkonfigurationsfilen ser du något liknande.

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

| Egenskap                   | Beskrivning                                                                                                                                                         |
|:-------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **compilerOptions**        | Används för att konfigurera kompilatorn, de flesta av fastigheterna finns här.                                                                                      |
| modul                      | Du kan läsa mer om det [här](https://www.typescriptlang.org/docs/handbook/modules.html).                                                                            |
| target                     | Definierar den JavaScript-version som du kompilerar.                                                                                                                |
| ta bortKommentarer         | Tar bort kommentarer från kompilerade filer.                                                                                                                        |
| noEmitOnError              | Do not emit outputs if any errors were reported.                                                                                                                    |
| noFallthroughCasesInSwitch | Report errors for fallthrough cases in switch statement.                                                                                                            |
| noUnusedLocals             | Report errors on unused locals.                                                                                                                                     |
| noUnusedParameters         | Report errors on unused parameters.                                                                                                                                 |
| inlineSourceMap            | Adds sourcemapping                                                                                                                                                  |
| typeRoots                  | You can read more about that [here](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#types-typeroots-and-types).                                     |
| esModuleInterop            | Emit __importStar and __importDefault helpers for runtime babel ecosystem compatibility and enable --allowSyntheticDefaultImports for typesystem compatibility. |

## Konfiguration av Presence

```javascript
{
  "extends": "../../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
}
```

| Property            | Beskrivning                                                                                   |
|:------------------- |:--------------------------------------------------------------------------------------------- |
| **utökningar**      | Används för att utöka databasen `tsconfig` -filen för olika uppgifter.                        |
| **compilerOptions** | Se [**Root-konfigurationen**](/dev/presence/tsconfig#root-configuration) för mer information. |
| outDir              | Definierar utdatakatalog för kompilerade filer.                                               |
