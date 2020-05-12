---
title: TypeScript
description: Маленький помощник для TypeScript
published: true
date: 9 мая 2020г 14:32:40
tags:
---

# Настройка TypeScript

## Введение

Когда вы скачали и распаковали рабочую область, вы увидите файл с названием `tsconfig.js` в папках root и присутствия, этот файл используется для настройки компилятора **TypeScript**. Он уже настроен для вас, поэтому не беспокойтесь об этом.

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
| module                     | Подробнее об этом [читайте здесь](https://www.typescriptlang.org/docs/handbook/modules.html).                                                                       |
| target                     | Определяет компилируемую версию JavaScript.                                                                                                                         |
| removeComments             | Удаление комментариев из собранных файлов.                                                                                                                          |
| noEmitOnError              | Не выдавать выходы, если сообщалось об ошибках.                                                                                                                     |
| noFallthroughCasesInSwitch | Сообщить об ошибках резервных случаях в операторе переключателя.                                                                                                    |
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
