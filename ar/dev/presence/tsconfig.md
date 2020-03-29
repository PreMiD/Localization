---
title: صفحة بلا عنوان
description: مساعد صغير في TypeScript
published: true
date: 2020-02-12T22:15:34.451Z
tags:
---

# إعدادات TypeScript

## مقدمة

عندما تقوم بتنزيل و تفك الضغط على مساحة العمل ، سترى ملف يسمى `tsconfig. s` في الروت ومجلدات presence، يستخدم هذا الملف لإعداد **محول برمجيTypeScript**. لقد تم تكوينه من أجلك، لذا لا تقلق حيال ذلك.

نحن نريد فقط وصف بعض الإعدادات التي يجب أن تعرفها.

## اعدادات الروت

في ملف إعدادات الروت سترى شيئا كهذا.

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

| Property                   | الوصف                                                                                                                           |
|:-------------------------- |:------------------------------------------------------------------------------------------------------------------------------- |
| **compilerOptions**        | تستخدم لإعداد المحول برمجي، معظم الخصائص موجودة هنا.                                                                            |
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

| Property            | الوصف                                                                                  |
|:------------------- |:-------------------------------------------------------------------------------------- |
| **extends**         | Used for extending the base `tsconfig` file for various tasks.                         |
| **compilerOptions** | See [**Root Configuration**](/dev/presence/tsconfig#root-configuration) for more info. |
| outDir              | Defines the output directory for compiled files.                                       |
