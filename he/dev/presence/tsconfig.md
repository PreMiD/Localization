---
title: Untitled Page
description: A little helper for TypeScript
published: true
date: 2020-02-12T22:15:34.451Z
tags:
---

# TypeScript Configuration

## Introduction

When you downloaded and unpacked the workspace, you will see a file called `tsconfig.js` in root and presence folders, this file is used for configuring the **TypeScript** compiler. It is already configured for you, so don't worry about that.

We just want to describe some settings that you should know.

## Root Configuration

In the root configuration file you will see something like this.

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

| Property                   | תיאור                                                                                                                           |
|:-------------------------- |:------------------------------------------------------------------------------------------------------------------------------- |
| **compilerOptions**        | Used for configuring the compiler, most of the properties are located here.                                                     |
| module                     | You can read more about that [here](https://www.typescriptlang.org/docs/handbook/modules.html).                                 |
| target                     | Defines the JavaScript version you are compiling.                                                                               |
| removeComments             | Removing comments from compiled files.                                                                                          |
| noFallthroughCasesInSwitch | Report errors for fallthrough cases in switch statement.                                                                        |
| noUnusedLocals             | Report errors on unused locals.                                                                                                 |
| noUnusedParameters         | Report errors on unused parameters.                                                                                             |
| inlineSourceMap            | Adds sourcemapping                                                                                                              |
| typeRoots                  | You can read more about that [here](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#types-typeroots-and-types). |
| **exclude**                | Here you can define the folders that you want to exclude from the future compilation.                                           |

## Presence Configuration

```javascript
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
}
```

| Property            | תיאור                                                                                  |
|:------------------- |:-------------------------------------------------------------------------------------- |
| **extends**         | Used for extending the base `tsconfig` file for various tasks.                         |
| **compilerOptions** | See [**Root Configuration**](/dev/presence/tsconfig#root-configuration) for more info. |
| outDir              | Defines the output directory for compiled files.                                       |
