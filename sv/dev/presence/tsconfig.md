---
title: Namnlös sida
description: Lite hjälpare för TypeScript
published: true
date: 2020-02-12T22:15:34.451Z
tags:
---

# Konfiguration av typskript

## Introduktion

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
        "noFallthroughCasesInSwitch": true,
        "noUnusedLocals": true,
        "noUnusedParameters": true,
        "inlineSourceMap": true,
        "typeRoots": ["@types"]
    },
    "exclude": ["node_modules"]
}
```

| Egenskap                   | Beskrivning                                                                                                                     |
|:-------------------------- |:------------------------------------------------------------------------------------------------------------------------------- |
| **compilerOptions**        | Används för att konfigurera kompilatorn, de flesta av fastigheterna finns här.                                                  |
| modul                      | Du kan läsa mer om det [här](https://www.typescriptlang.org/docs/handbook/modules.html).                                        |
| target                     | Definierar den JavaScript-version som du kompilerar.                                                                            |
| ta bortKommentarer         | Tar bort kommentarer från kompilerade filer.                                                                                    |
| noFallthroughCasesInSwitch | Report errors for fallthrough cases in switch statement.                                                                        |
| noUnusedLocals             | Report errors on unused locals.                                                                                                 |
| noUnusedParameters         | Report errors on unused parameters.                                                                                             |
| inlineSourceMap            | Adds sourcemapping                                                                                                              |
| typeRoots                  | You can read more about that [here](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#types-typeroots-and-types). |
| **exclude**                | Here you can define the folders that you want to exclude from the future compilation.                                           |

## Konfiguration av Presence

```javascript
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
}
```

| Egenskap            | Beskrivning                                                                                   |
|:------------------- |:--------------------------------------------------------------------------------------------- |
| **utökningar**      | Används för att utöka databasen `tsconfig` -filen för olika uppgifter.                        |
| **compilerOptions** | Se [**Root-konfigurationen**](/dev/presence/tsconfig#root-configuration) för mer information. |
| outDir              | Definierar utdatakatalog för kompilerade filer.                                               |
