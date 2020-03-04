---
title: 无标题页面
description: TypeScript 的小助手
published: true
date: 2020-01-19T23:42:36.260Z
tags:
---

# TypeScript 配置

## 一. 导言

当你下载并解压工作区时，你将看到一个名为 `tsconfig的文件。 s` 在 root 和存在文件夹中，此文件用于配置 **TypeScript** 编译器。 它已经为您配置了，所以不要担心这个问题。

我们只想描述你应该知道的一些设置。

## Root配置

在 root 配置文件中，你会看到类似的东西。

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

| 财产                  | 描述                                                                             |
|:------------------- |:------------------------------------------------------------------------------ |
| **compilerOptions** | 用于配置编译器，大多数属性都位于这里。                                                            |
| 模块                  | 您可以在这里阅读更多关于 [的信息](https://www.typescriptlang.org/docs/handbook/modules.html)。 |
| target              | 定义您正在编译的 JavaScript 版本。                                                        |
| 删除评论                | 从编译文件中删除评论。                                                                    |
| **不包含**             | 您可以在此定义您想要从未来编译中排除的文件夹。                                                        |

## 存在配置

```javascript
主席:
  "extends": "../tsconfig.json",
  "compilerOptions":
    "outDir": "./dist/"
  }
}
```

| 财产                  | 描述                                                               |
|:------------------- |:---------------------------------------------------------------- |
| **扩展**              | 用于扩展基础 `tsconfig` 文件用于各种任务。                                      |
| **compilerOptions** | 更多信息请参阅 [**Root 配置**](/dev/presence/tsconfig#root-configuration) |
| outDir              | 定义编译文件的输出目录。                                                     |