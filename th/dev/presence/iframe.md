---
title: คลาส iFrame
description:
published: true
date: 2020-05-03T20:17:51.982Z
tags:
---

# คลาส iFrame
> ระบบ iframe กับ PreMiD ยังไม่เสถียรและอาจมีการแสดงอาการที่ไม่คาดคิด โปรดใช้ด้วยความระมัดระวัง 
> 
> {.is-danger}

## บทนำ

ในบางสถานการณ์ presence ของคุณอาจจำเป็นต้องเข้าถึงองค์ประกอบภายใน/Element `iframes`

Code ที่คุณเขียนไว้ในไฟล์ `iframe.ts` ของคุณนั้นจะถูกใส่เข้าไปในทุก iframe บนหน้าเพจ

เช่นเดียวกับ presences `iframes` มีคลาสของตัวเองที่ออกแบบมาเพื่ออัปเดตข้อมูลโดยอัตโนมัติ

```typescript
let iframe = new iFrame();

iframe.on("UpdateData", async () => {
    // Code goes here...
});
```

## วิธีการ

### `send(Object)`
ส่งข้อมูลไปยัง presence. การใช้วิธีนี้จะทำให้ presence ปัจจุบันปรากฏในเหตุการณ์ของ `iFrameData`

### `getUrl()`
คืนค่า URL ของ `iframe`

## เหตุการณ์
ใน `iframes` เหตุการณ์จะทำงานคล้ายกับวิธีที่พวกเขาทำงานในคลาส `presence`

```typescript
iframe.on("UpdateData", async () => {
    // Code goes here...
});
```

นี่คือรายการของเหตุการณ์ทั้งหมด:

#### `UpdateData`

เหตุการณ์นี้จะเริ่มทำงานทุกครั้งที่มีการอัปเดต iframe