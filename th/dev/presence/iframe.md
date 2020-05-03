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

ในบางสถานการณ์ presence ของคุณอาจจำเป็นต้องเข้าถึงองค์ประกอบภายใน `iframes`

Code ที่คุณเขียนไว้ใน `iframe.ts` ไฟล์ของคุณนั้นจะถูกใส่เข้าไปในทุก iframe บนหน้าเพจ

เช่นเดียวกับ presences `iframes` มีคลาสของตัวเองที่ออกแบบมาเพื่ออัปเดตข้อมูลโดยอัตโนมัติ

```typescript
let iframe = new iFrame();

iframe.on("UpdateData", async () => {
    // เอา Code ลงตรงนี้...
});
```

## วิธีการ

### `send(Object)`
ส่งข้อมูลไปยัง presence. การใช้วิธีนี้จะทำให้ presence ปัจจุบันปรากฏในเหตุการณ์ `iFrameData`

### `getUrl()`
คืนค่า URL ของ `iframe`

## เหตุการณ์
ใน `iframes` เหตุการณ์จะทำงานคล้ายกับวิธีที่พวกเขาทำงานในคลาส `presence`

```typescript
iframe.on("UpdateData", async () => {
    // เอา Code ลงตรงนี้...
});
```

นี่คือรายการของเหตุการณ์ทั้งหมด:

#### `UpdateData`

เหตุการณ์นี้จะเริ่มทำงานทุกครั้งที่มีการอัปเดต iframe