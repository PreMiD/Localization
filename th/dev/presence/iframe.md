---
title: คลาส iFrame
description:
published: true
date: 12 ก.พ 2563 22:15 น.
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
    // เอา Code ลงตรงนี้
});
```

## วิธีการ

### `send(Object)`
ส่งข้อมูลไปยัง presence. Using this method will make the presence throw a `iFrameData` event.

### `getUrl(String)`
Returns the URL of the `iframe`.

## เหตุการณ์
In `iframes`, events work similarly to the way they work in the `presence` class.

```typescript
iframe.on("UpdateData", async () => {
    // Code goes here...
});
```

Here is a list of all of the events:

#### `อัพเดทข้อมูล`

This event is fired every time the iframe is being updated.

#### `MediaKeys` (disabled)

Fired when user uses media keys on his keyboard, [click here](/dev/presence/class#mediakeys) to get more information about media keys.