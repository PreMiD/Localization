---
title: Untitled Page
description: A little helper for TypeScript
published: 是
date: 2020-01-19T23:42:36.260Z
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
    "module": "commonjs",
    "target": "es6",
    "removeComments": true
  },
  "exclude": ["node_modules"]
}
```

| Property            | 說明                                                                                              |
|:------------------- |:----------------------------------------------------------------------------------------------- |
| **compilerOptions** | Used for configuring the compiler, most of the properties are located here.                     |
| module              | You can read more about that [here](https://www.typescriptlang.org/docs/handbook/modules.html). |
| target              | Defines the JavaScript version you are compiling.                                               |
| removeComments      | Removing comments from compiled files.                                                          |
| **exclude**         | Here you can define the folders that you want to exclude from the future compilation.           |

## Presence Configuration

```javascript
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
}
```

| Property            | 說明                                                                                     |
|:------------------- |:-------------------------------------------------------------------------------------- |
| **extends**         | Used for extending the base `tsconfig` file for various tasks.                         |
| **compilerOptions** | See [**Root Configuration**](/dev/presence/tsconfig#root-configuration) for more info. |
| outDir              | Defines the output directory for compiled files.                                       |