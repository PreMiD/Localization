---
title: Bilinmeyen Sayfa
description: TypeScript için ufak bir yardımcı
published: true
date: 2020-01-18T20:33:00.222Z
tags:
---

# TypeScript Konfigürasyonu

## Giriş

When you downloaded and unpacked the workspace, you will see a file called `tsconfig.js` in root and presence folders, this file is used for configuring the **TypeScript** compiler. Bu kısım sizin için zaten ayarlandığı için endişe etmenize gerek yok.

Bilmeniz gereken bazı ayarları açıklayacağız.

## Kök Yapılandırması

Kök yapılandırmasında böyle bir şeyle karşılaşacaksınız.

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

| Property            | Açıklama                                                                                                              |
|:------------------- |:--------------------------------------------------------------------------------------------------------------------- |
| **compilerOptions** | Used for configuring the compiler, most of the properties are located here.                                           |
| module              | [Buradan](https://www.typescriptlang.org/docs/handbook/modules.html) bunun hakkında daha fazla bilgi edinebilirsiniz. |
| target              | Derleyeceğiniz JavaScript sürümünü belirler.                                                                          |
| removeComments      | Derlenmiş dosyalardan yorumları kaldırır.                                                                             |
| **exclude**         | Buraya derlemede işlenmeyecek klasörleri yazarak sonraki işlemleriniz için bu klasörleri göz ardı ettirebilirsiniz.   |

## Servis Yapılandırması

```javascript
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
}
```

| Property            | Açıklama                                                                                                    |
|:------------------- |:----------------------------------------------------------------------------------------------------------- |
| **extends**         | Used for extending the base `tsconfig` file for various tasks.                                              |
| **compilerOptions** | Daha fazla bilgi için [**Kök Yapılandırması**](/dev/presence/tsconfig#root-configuration) kısmına göz atın. |
| outDir              | Derlenmiş dosyaların kopyalanacağı yeri belirler.                                                           |