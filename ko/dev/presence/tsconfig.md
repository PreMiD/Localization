---
title: TypeScript 구성
description: TypeScript에 대한 작은 도우미
published: true
date: 2020-08-05T16:25:22.812Z
tags:
editor: markdown
---

# TypeScript 구성

## 소개

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

| Property                   | 설명                                                                                                                       |
|:-------------------------- |:------------------------------------------------------------------------------------------------------------------------ |
| **compilerOptions**        | 컴파일러 구성에 사용되는 대부분의 속성은 여기에 있습니다.                                                                                         |
| module                     | [여기](https://www.typescriptlang.org/docs/handbook/modules.html)에서 더 자세히 볼 수 있습니다.                                        |
| target                     | 컴파일하는 JavaScript 버전을 정의합니다.                                                                                              |
| removeComments             | 컴파일 된 파일에서 주석 제거.                                                                                                        |
| noEmitOnError              | 오류가보고 된 경우 출력을 내 보내지 마십시오.                                                                                               |
| noFallthroughCasesInSwitch | switch 문에서 폴 스루 사례에 대한 오류를보고합니다.                                                                                         |
| noUnusedLocals             | 사용하지 않는 지역의 오류를보고합니다.                                                                                                    |
| noUnusedParameters         | 사용하지 않는 매개 변수에 대한 오류를보고합니다.                                                                                              |
| inlineSourceMap            | 소스 매핑 추가                                                                                                                 |
| typeRoots                  | [여기](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#types-typeroots-and-types)에서 더 자세히 볼 수 있습니다.        |
| esModuleInterop            | 런타임 바벨 에코 시스템 호환성을 위해 __importStar 및 __importDefault 도우미를 내보내고 유형 시스템 호환성을 위해 --allowSyntheticDefaultImports를 활성화합니다 |

## Presence 구성

```javascript
{
  "extends": "../../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
}
```

| 속성                  | 설명                                                                                     |
|:------------------- |:-------------------------------------------------------------------------------------- |
| **extends**         | Used for extending the base `tsconfig` file for various tasks.                         |
| **compilerOptions** | See [**Root Configuration**](/dev/presence/tsconfig#root-configuration) for more info. |
| outDir              | Defines the output directory for compiled files.                                       |
