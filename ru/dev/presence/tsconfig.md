---
title: Страница без названия
description: Маленький помощник для TypeScript
published: true
date: 2020-02-12T22:15:34.451Z
tags:
---

# Настройка TypeScript

## Введение

Когда вы скачали и распаковали рабочую область, вы увидите файл с названием `tsconfig. s` в папках root и присутствия, этот файл используется для настройки компилятора **TypeScript**. Он уже настроен для вас, поэтому не беспокойтесь об этом.

Мы просто хотим описать некоторые параметры, которые вы должны знать.

## Корневая конфигурация

В корневом файле вы увидите что-то подобное.

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

| Свойства                   | Описание                                                                                                                        |
|:-------------------------- |:------------------------------------------------------------------------------------------------------------------------------- |
| **compilerOptions**        | Используется для настройки компилятора, большинство свойств находятся здесь.                                                    |
| модуль                     | Подробнее об этом [читайте здесь](https://www.typescriptlang.org/docs/handbook/modules.html).                                   |
| target                     | Определяет компилируемую версию JavaScript.                                                                                     |
| удалить комментарии        | Удаление комментариев из собранных файлов.                                                                                      |
| noFallthroughCasesInSwitch | Report errors for fallthrough cases in switch statement.                                                                        |
| noUnusedLocals             | Report errors on unused locals.                                                                                                 |
| noUnusedParameters         | Report errors on unused parameters.                                                                                             |
| inlineSourceMap            | Adds sourcemapping                                                                                                              |
| typeRoots                  | You can read more about that [here](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#types-typeroots-and-types). |
| **exclude**                | Here you can define the folders that you want to exclude from the future compilation.                                           |

## Конфигурация присутствия

```javascript
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }

```

| Свойства            | Описание                                                                                                                 |
|:------------------- |:------------------------------------------------------------------------------------------------------------------------ |
| **расширяется**     | Используется для расширения базового файла `tsconfig` для различных задач.                                               |
| **compilerOptions** | Смотрите [**корневую конфигурацию**](/dev/presence/tsconfig#root-configuration) для получения дополнительной информации. |
| аутДир              | Определяет выходной каталог для скомпилированных файлов.                                                                 |
