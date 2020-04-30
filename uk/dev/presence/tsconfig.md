---
title: Без назви сторінки
description: Маленький помічник для TypeScript
published: true
date: 2020-02-12T22:15:34.451Z
tags:
---

# Налаштування TypeScript

## Вступ

Коли ви завантажили та розпаковували робочу область, ви побачите файл з назвою `tsconfig.js` в теках root і presence, цей файл використовується для налаштування компіляції **TypeScript**. Він вже настроєний для вас, тому не хвилюйтеся за це.

Ми просто хочемо описати деякі налаштування, які вам слід знати.

## Налаштування root доступу

У кореневому файлі конфігурації ви побачите щось на зразок цього.

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

| Властивість                | Опис                                                                                                                            |
|:-------------------------- |:------------------------------------------------------------------------------------------------------------------------------- |
| **compilerOptions**        | Використовується для налаштування компілятора, більшість властивостей розташовані тут.                                          |
| модуль                     | Детальніше про це ви можете прочитати [тут](https://www.typescriptlang.org/docs/handbook/modules.html).                         |
| ціль                       | Визначає версію JavaScript, яку ви збираєте.                                                                                    |
| removeComments             | Видалення коментарів зі скомпільованих файлів.                                                                                  |
| noFallthroughCasesInSwitch | Report errors for fallthrough cases in switch statement.                                                                        |
| noUnusedLocals             | Report errors on unused locals.                                                                                                 |
| noUnusedParameters         | Report errors on unused parameters.                                                                                             |
| inlineSourceMap            | Adds sourcemapping                                                                                                              |
| typeRoots                  | You can read more about that [here](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#types-typeroots-and-types). |
| **виключити**              | Тут ви можете визначити теки, які хочете виключити з майбутньої компіляції.                                                     |

## Конфігурація Presence

```javascript
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }

```

| Властивість         | Опис                                                                                                     |
|:------------------- |:-------------------------------------------------------------------------------------------------------- |
| **продовжується**   | Використовується для продовження базового `tsconfig` файлу для різних завдань.                           |
| **compilerOptions** | Дивіться [**налаштування кореня**](/dev/presence/tsconfig#root-configuration) для додаткової інформації. |
| outDir              | Визначає каталог виводу для скомпільованих файлів.                                                       |
