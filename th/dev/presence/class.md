---
title: คลาส Presence
description: คลาสหลักสำหรับทุก PreMiD Presence
published: true
date: 08 ก.พ 2563 19:33 น.
tags:
---

# คลาส Presence

## บทนำ

คลาส `Presence` มีประโยชน์มากเพราะมีวิธีการพื้นฐานที่เราต้องการสำหรับการสร้าง presence

 เมื่อคุณสร้างหมวดหมู่คุณต้องระบุคุณสมบัติของ `clientId`

```typescript
let presence = new Presence({
    clientId: "514271496134389561" // ตัวอย่าง clientId
});
```

มีสองคุณสมบัติสำหรับหมวด `Presence`

#### `clientId`

ต้องมีการจัดเตรียมคุณสมบัติของ `clientId` เพื่อให้ presence ของคุณใช้งานได้เพราะมันใช้ Id แอปพลิเคชันของคุณเพื่อแสดงโลโก้และเนื้อหา

คุณสามารถเข้าไปดูได้ที่ [หน้าแอปพลิเคชัน](https://discordapp.com/developers/applications)

## วิธีการ

### `setActivity(presenceData, Boolean)`

ตั้งค่ากิจกรรมโปรไฟล์ของคุณตามข้อมูลที่ให้ไว้

ตัวแปรแรกต้องการอินเทอร์เฟซของ `presenceData` เพื่อที่จะรับข้อมูลทั้งหมดที่คุณต้องการแสดงในโปรไฟล์ของคุณ

ตัวแปรที่สองกำหนดให้เมื่อ presence กำลังเล่นอะไรอยู่หรือไม่ ใช้ `true` เสมอเมื่อคุณมีการประทับเวลาใน `presenceData`

### `clearActivity()`

ล้างกิจกรรมปัจจุบันของคุณ, ปุ่มลัด และ เทรย์ title

### `setTrayTitle(String)`

> วิธีนี้ใช้ได้เฉพาะบน Mac OS เท่านั้น 
> 
> {.is-warning}

ตั้งให้เทรย์ title อยู่บน แถบเมนู

### `getStrings(Object)`

อนุญาติให้คุณรับสตริงที่แปลจากส่วนขยาย คุณต้องระบุ `Object` ด้วยคีย์ที่เป็นกุญแจสำหรับสตริง `keyValue` คือค่าสตริง คุณสามารถค้นหา strings บางส่วนโดยใช้ลิ้งค์นี้: `https://api.premid.app/v2/langFIle/extension/en`

```typescript
// คืนค่า `Playing` and `Paused` strings
// จาก extension.
strings = await presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
});
```

### `getSetting(String)`
Returns value of setting.
```typescript
var setting = await presence.getSetting("pdexID"); //Replace pdexID with the id of the setting
console.log(setting); // This will log the value of the setting
```

### `hideSetting(String)`
Hides given setting.
```typescript
presence.hideSetting("pdexID"); //Replace pdexID with the id of the setting
```

### `showSetting(String)`
Shows given setting (Only works if the setting was already hidden).
```typescript
presence.showSetting("pdexID"); //Replace pdexID with the id of the setting
```

### `getExtensionVersion(Boolean)`
คืนค่าเวอร์ชันของส่วนขยายที่ผู้ใช้ใช้อยู่
```typescript
getExtensionVersion(onlyNumeric?: boolean): string | number;

var numeric = presence.getExtensionVersion();
console.log(numeric); // จะเป็น log 210
var version = presence.getExtensionVersion(false);
console.log(version); // จะเป็น log 2.1.0
```

### `getPageLetiable(String)`

คืนค่าตัวแปรจากเว็บไซต์ถ้ามันมีอยู่จริง

```typescript
var pageVar = getPageLetiable('.pageVar');
console.log(pageVar); // สิ่งนี้จะบันทึก "เนื้อหาของตัวแปร"
```

## `presenceData` อินเตอร์เฟซ

ขอแนะนำให้ใช้อินเตอร์เฟซ `presenceData` เมื่อคุณใช้วิธีการ `setActivity()`

อินเทอร์เฟซนี้มีตัวแปรดังต่อไปนี้ทั้งหมดเป็นตัวแปรที่สามารถเลือกได้

<table>
  <thead>
    <tr>
      <th style="text-align:left">ตัวแปร</th>
      <th style="text-align:left">คำอธิบาย</th>
      <th style="text-align:left">ชนิด</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">ราย​ละเอียด</td>
      <td style="text-align:left">บรรทัดแรกใน presence มักจะใช้เป็นส่วนหัว</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">state</td>
      <td style="text-align:left">บรรทัดที่สองใน presence ของคุณ</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">startTimestamp</td>
      <td style="text-align:left">กำหนดเวลาปัจจุบัน<br>
        ใช้เมื่อคุณต้องการแสดงว่าเหลือ <code>hours:minutes:seconds</code> เท่าไหร่
          <br>คุณต้องแปลงเวลาของคุณเป็น <code>timestamp</code> หรือไม่งั้นคุณจะได้รับ
          เวลานับถอยหลังที่เกิดข้อผิดพลาด
      </td>
      <td style="text-align:left"><code>Number</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">endTimestamp</td>
      <td style="text-align:left">กำหนดระยะเวลาที่ถึงจุดสิ้นสุด
        <br>ใช้เมื่อคุณต้องการแสดงว่าเหลือ <code>hours:minutes:seconds</code> เท่าไหร่
          <br>คุณต้องแปลงเวลาของคุณเป็น <code>timestamp</code> หรือไม่งั้นคุณจะได้รับ
          เวลานับถอยหลังที่เกิดข้อผิดพลาด
      </td>
      <td style="text-align:left"><code>Number</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">largeImageKey</td>
      <td style="text-align:left">กำหนด โลโก้ สำหรับ presence</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">smallImageKey</td>
      <td style="text-align:left">กำหนดไอคอนขนาดเล็กที่อยู่ถัดจากโลโก้ presence</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">smallImageText</td>
      <td style="text-align:left">กำหนดข้อความที่จะแสดงต่อผู้ใช้เมื่อเขาเอาเมาส์ไปชี้ที่ไอคอนขนาดเล็ก</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
  </tbody>
</table>

```typescript
var presenceData: presenceData = {
    details: "หัวข้อของฉัน",
    state: "คำอธิบายของฉัน",
    largeImageKey: "service_logo",
    smallImageKey: "small_service_icon",
    smallImageText: "คุณเอาเมาส์ชี้ที่ฉัน, แล้วไงต่อหล่ะ?",
    startTimestamp: 1564444631188,
    endTimestamp: 1564444634734
};
```

## เหตุการณ์

เหตุการณ์อนุญาตให้คุณตรวจจับและจัดการการเปลี่ยนแปลงหรือเรียกสิ่งที่เกิดขึ้น คุณสามารถติดตามเหตุการณ์โดยใช้วิธี `on`

```typescript
presence.on("UpdateData", async () => {
    // ทำอะไรบางอย่างเมื่อข้อมูลได้รับการเปลี่ยนแปลง
});
```

มีบางเหตุการณ์ที่ใช้ได้:

#### `UpdateData`

เหตุการณ์นี้จะเริ่มขึ้นทุกครั้งที่มีการอัปเดต

#### `iFrameData`

จะเริ่มขึ้นเมื่อได้รับข้อมูลจากสคริปต์ iFrame
