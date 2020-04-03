---
title: Başlıksız Sayfa
description: TypeScript için ufak bir yardımcı
published: true
date: 2020-02-12T22:15:34.451Z
tags:
---

# TypeScript Konfigürasyonu

## Tanıtım

Dosyaları indirip açtığınızda, klasörün içinde bir `tsconfig.js` dosyasıyla karşılacaksınız. Bu dosya, **TypeScript** derleyicisi için gerekli ayarları içeren dosyadır. Bu ayarlar daha önceden sizin için ayarlandığı için sizin herhangi bir şey hakkında endişelenmenize gerek yok.

Yine de, emin olmak için burada belirtilen anahtarları ve özellikleri açıklayacağız.

## Kök Yapılandırması

Kök yapılandırma (`tsconfig.js`) dosyasında böyle bir şeyle karşılaşacaksınız.

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

| Özellik                    | Açıklama                                                                                                                                                |
|:-------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **compilerOptions**        | Derleyiciyi ayarlamak için kullanılan anahtar, çoğu ayar bunun altında belirlenir.                                                                      |
| module                     | [Buradan](https://www.typescriptlang.org/docs/handbook/modules.html) bunun hakkında daha fazla bilgi edinebilirsiniz.                                   |
| target                     | Derleyeceğiniz JavaScript sürümünü belirler.                                                                                                            |
| removeComments             | Derlenmiş dosyalardan yorumları kaldırır.                                                                                                               |
| noFallthroughCasesInSwitch | Switch durumlarındaki hataları bildirir.                                                                                                                |
| noUnusedLocals             | Kullanılmayan verileri bildirir.                                                                                                                        |
| noUnusedParameters         | Kullanılmayan parametre verilerini bildirir.                                                                                                            |
| inlineSourceMap            | Sourcemap desteği ekler.                                                                                                                                |
| typeRoots                  | Bunun hakkında daha fazla bilgiyi [buradan](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#types-typeroots-and-types) okuyabilirsiniz. |
| **exclude**                | Buraya derlemede işlenmeyecek klasörleri yazarak sonraki işlemleriniz için bu klasörleri göz ardı ettirebilirsiniz.                                     |

## Servis Yapılandırması

```javascript
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
}
```

| Özellik             | Açıklama                                                                                                    |
|:------------------- |:----------------------------------------------------------------------------------------------------------- |
| **extends**         | `tsconfig` temelini "genişletmek" için kullanılır.                                                          |
| **compilerOptions** | Daha fazla bilgi için [**Kök Yapılandırması**](/dev/presence/tsconfig#root-configuration) kısmına göz atın. |
| outDir              | Derlenmiş dosyaların kopyalanacağı yeri belirler.                                                           |
