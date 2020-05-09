---
title: Страница без названия
description: Маленький помощник для TypeScript
published: true
date: 2020-05-09T14:32:40.832Z
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

| Свойства                   | Описание                                                                                                                                                            |
|:-------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **compilerOptions**        | Используется для настройки компилятора, большинство свойств находятся здесь.                                                                                        |
| модуль                     | Подробнее об этом [читайте здесь](https://www.typescriptlang.org/docs/handbook/modules.html).                                                                       |
| target                     | Определяет компилируемую версию JavaScript.                                                                                                                         |
| удалить комментарии        | Удаление комментариев из собранных файлов.                                                                                                                          |
| noEmitOnError              | Do not emit outputs if any errors were reported.                                                                                                                    |
| noFallthroughCasesInSwitch | Report errors for fallthrough cases in switch statement.                                                                                                            |
| noUnusedLocals             | Report errors on unused locals.                                                                                                                                     |
| noUnusedParameters         | Report errors on unused parameters.                                                                                                                                 |
| inlineSourceMap            | Adds sourcemapping                                                                                                                                                  |
| typeRoots                  | You can read more about that [here](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#types-typeroots-and-types).                                     |
| esModuleInterop            | Emit __importStar and __importDefault helpers for runtime babel ecosystem compatibility and enable --allowSyntheticDefaultImports for typesystem compatibility. |

## Конфигурация присутствия

```javascript
{
  "extends": "../../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
}
```

| Свойства            | Описание                                                                                                                 |
|:------------------- |:------------------------------------------------------------------------------------------------------------------------ |
| **расширяется**     | Используется для расширения базового файла `tsconfig` для различных задач.                                               |
| **compilerOptions** | Смотрите [**корневую конфигурацию**](/dev/presence/tsconfig#root-configuration) для получения дополнительной информации. |
| аутДир              | Определяет выходной каталог для скомпилированных файлов.                                                                 |
