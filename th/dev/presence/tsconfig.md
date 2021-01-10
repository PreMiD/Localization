---
title: TypeScript Configuration
description: ตัวช่วยเล็กๆ สำหรับ Typescript
published: true
date: 2020-08-05T16:25:22.812Z
tags:
editor: markdown
---

# การกำหนดค่าไฟล์ Typescript

## บทนำ

เมื่อคุณดาวน์โหลดและแตกไฟล์ออกมาแล้ว คุณจะพบกับไฟล์ชื่อ  `tsconfig.js` ในโฟลเดอร์ดั้งเดิมและโฟลเดอร์ Presence ไฟล์นี้จะใช้ในการตั้งค่า Complier ของ **TypeScript** จริงๆ แล้วมันได้ถูกตั้งค่าไว้แล้ว ดังนั้น คุณไม่จำเป็นที่ต้องกังวลกับมัน

เราแค่ต้องการอธิบายการตั้งค่าบางอย่างที่คุณจำเป็นต้องรู้

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

| คุณสมบัติ                  | คำอธิบาย                                                                                                                                                            |
|:-------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **compilerOptions**        | Used for configuring the compiler, most of the properties are located here.                                                                                         |
| module                     | คุณสามารถอ่านข้อมูลเพิ่มเติมได้ [ที่นี่](https://www.typescriptlang.org/docs/handbook/modules.html).                                                                |
| target                     | Defines the JavaScript version you are compiling.                                                                                                                   |
| removeComments             | Removing comments from compiled files.                                                                                                                              |
| noEmitOnError              | Do not emit outputs if any errors were reported.                                                                                                                    |
| noFallthroughCasesInSwitch | Report errors for fallthrough cases in switch statement.                                                                                                            |
| noUnusedLocals             | Report errors on unused locals.                                                                                                                                     |
| noUnusedParameters         | Report errors on unused parameters.                                                                                                                                 |
| inlineSourceMap            | Adds sourcemapping                                                                                                                                                  |
| typeRoots                  | คุณสามารถอ่านข้อมูลเพิ่มเติมได้ [ที่นี่](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#types-typeroots-and-types).                                |
| esModuleInterop            | Emit __importStar and __importDefault helpers for runtime babel ecosystem compatibility and enable --allowSyntheticDefaultImports for typesystem compatibility. |

## การตั้งค่า Presence

```javascript
{
  "extends": "../../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
}
```

| Property            | คำอธิบาย                                                                                     |
|:------------------- |:-------------------------------------------------------------------------------------------- |
| **extends**         | Used for extending the base `tsconfig` file for various tasks.                               |
| **compilerOptions** | ดู [**Root Configuration**](/dev/presence/tsconfig#root-configuration) สำหรับข้อมูลเพิ่มเติม |
| outDir              | กำหนด Output สำหรับไฟล์ Compile แล้ว                                                         |
