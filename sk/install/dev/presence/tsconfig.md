---
title: Untitled Page
description: A little helper for TypeScript
published: true
date: 2020-01-18T20:33:00.222Z
tags:
---

# Konfigurácia TypeScriptu

## Úvod

Keď ste si stiahli a rozbalili pracovnú plochu, uvidíte súbor nazývaný sa `tsconfig.js` v koreni a v zložkách prítomnosti, tento súbor je určený na konfigurovanie **TypeScript** spracovávateľa. Je už dopredu nakonfigurovaný pre vás, takže nemusíte sa obávať.

Chceme vám len popísať niektoré nastavenia ktoré by ste mali vedieť.

## Konfigurácia Koreňa

V koreni konfiguračného súboru uvidíte niečo takéto podobné.

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

| Vlastnosť           | Popis                                                                                            |
|:------------------- |:------------------------------------------------------------------------------------------------ |
| **compilerOptions** | Používaný na konfiguráciu spracovávateľa, väčšina vlastností sa nachádza tu.                     |
| module              | Môžete si prečítať viacej o tom [tu](https://www.typescriptlang.org/docs/handbook/modules.html). |
| target              | Defines the JavaScript version you are compiling.                                                |
| removeComments      | Odstránenie komentárov zo spracovaných súborov.                                                  |
| **exclude**         | Here you can define the folders that you want to exclude from the future compilation.            |

## Konfigurácia Prítomnosti

```javascript
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
```

| Vlastnosť           | Popis                                                                                  |
|:------------------- |:-------------------------------------------------------------------------------------- |
| **extends**         | Used for extending the base `tsconfig` file for various tasks.                         |
| **compilerOptions** | See [**Root Configuration**](/dev/presence/tsconfig#root-configuration) for more info. |
| outDir              | Defines the output directory for compiled files.                                       |