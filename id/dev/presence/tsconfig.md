---
title: Untitled Page
description: Bantuan kecil untuk TypeScript
published: true
date: 2020-05-09T14:32:40.832Z
tags:
---

# Konfigurasi TypeScript

## Perkenalan

Ketika anda telah mendownload dan mengunpack ruang kerja, anda akan melihat file bernama `tsconfig.js` pada root dan folder presence, file ini digunakan untuk mengatur compiler **TypeScript**. Itu sudah terkonfigurasi untuk anda, jadi tidak perlu khawatir.

Kami hanya ingin menjelaskan beberapa pengaturan yang harus anda ketahui.

## Konfigurasi Root

Pada file konfigurasi root anda akan melihat hal seperti ini.

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

| Property                   | Deskripsi                                                                                                                                                           |
|:-------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **compilerOptions**        | Used for configuring the compiler, most of the properties are located here.                                                                                         |
| module                     | You can read more about that [here](https://www.typescriptlang.org/docs/handbook/modules.html).                                                                     |
| target                     | Defines the JavaScript version you are compiling.                                                                                                                   |
| removeComments             | Removing comments from compiled files.                                                                                                                              |
| noEmitOnError              | Do not emit outputs if any errors were reported.                                                                                                                    |
| noFallthroughCasesInSwitch | Report errors for fallthrough cases in switch statement.                                                                                                            |
| noUnusedLocals             | Report errors on unused locals.                                                                                                                                     |
| noUnusedParameters         | Report errors on unused parameters.                                                                                                                                 |
| inlineSourceMap            | Adds sourcemapping                                                                                                                                                  |
| typeRoots                  | You can read more about that [here](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#types-typeroots-and-types).                                     |
| esModuleInterop            | Emit __importStar and __importDefault helpers for runtime babel ecosystem compatibility and enable --allowSyntheticDefaultImports for typesystem compatibility. |

## Presence Configuration

```javascript
{
  "extends": "../../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
}
```

| Property            | Deskripsi                                                                              |
|:------------------- |:-------------------------------------------------------------------------------------- |
| **extends**         | Used for extending the base `tsconfig` file for various tasks.                         |
| **compilerOptions** | See [**Root Configuration**](/dev/presence/tsconfig#root-configuration) for more info. |
| outDir              | Defines the output directory for compiled files.                                       |
