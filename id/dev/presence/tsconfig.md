---
title: TypeScript Configuration
description: Bantuan kecil untuk TypeScript
published: true
date: 2020-08-05T16:25:22.812Z
tags:
editor: markdown
---

# Konfigurasi TypeScript

## Perkenalan

Ketika anda telah mendownload dan mengunpack ruang kerja, anda akan melihat file bernama `tsconfig.js` pada root dan folder presence, file ini digunakan untuk mengatur compiler **TypeScript**. Itu sudah terkonfigurasi untuk anda, jadi tidak perlu khawatir.

Kami hanya ingin menjelaskan beberapa pengaturan yang harus anda ketahui.

## Konfigurasi Root

Pada file konfigurasi root anda akan melihat hal seperti ini.

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

| Property                   | Deskripsi                                                                                                                                                         |
|:-------------------------- |:----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **compilerOptions**        | Digunakan untuk mengatur compiler, sebagian besar dari property disimpan disini.                                                                                  |
| module                     | Anda dapat membacanya lebih lanjut tentang hal tersebut [disini](https://www.typescriptlang.org/docs/handbook/modules.html).                                      |
| target                     | Menentukan versi JavaScript yang sedang dicompile.                                                                                                                |
| removeComments             | Menghapus komentar dari file telah dicompile.                                                                                                                     |
| noEmitOnError              | Tidak memberikan output jika ada eror yang terlaporkan.                                                                                                           |
| noFallthroughCasesInSwitch | Melaporkan eror untuk fallthrough case di pernyataan peralihan.                                                                                                   |
| noUnusedLocals             | Melaporkan eror pada unused locals.                                                                                                                               |
| noUnusedParameters         | Melaporkan eror pada unused parameter.                                                                                                                            |
| inlineSourceMap            | Menambahkan sourcemapping                                                                                                                                         |
| typeRoots                  | Anda bisa membacanya lebih lanjut [disini](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#types-typeroots-and-types).                            |
| esModuleInterop            | Emit __importStar dan __importDefault helpers untuk kompatibilitas babel ecosystem dan enable --allowSyntheticDefaultImports untuk kompatibilitas typesystem. |

## Konfigurasi Presence

```javascript
{
  "extends": "../../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
}
```

| Property            | Deskripsi                                                                                        |
|:------------------- |:------------------------------------------------------------------------------------------------ |
| **extends**         | Digunakan untuk menambahkan base file `tsconfig` untuk berbagai macam tugas.                     |
| **compilerOptions** | Lihat [**Konfigurasi Root**](/dev/presence/tsconfig#root-configuration) untuk info lebih lanjut. |
| outDir              | Menentukan direktori output dari file terkompilasi.                                              |
