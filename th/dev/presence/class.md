---
title: หมวด Presence
description: หมวดหลักสำหรับทุก PreMiD Presence
published: true
date: 08 ก.พ 2563 19:33 น.
tags:
---

# หมวด Presence

## บทนำ

หมวด `Presence` มีประโยชน์มากเพราะมีวิธีการพื้นฐานที่เราต้องการสำหรับการสร้าง presence

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

ล้างกิจกรรมปัจจุบันของคุณ, the keybinds and the tray title.

### `setTrayTitle(String)`

> วิธีนี้ใช้ได้เฉพาะบน Mac OS เท่านั้น 
> 
> {.is-warning}

Sets the tray title on the Menubar.

### `getStrings(Object)`

Allows you to get translated strings from extension. You must provide `Object` with keys being the key for string, `keyValue` is the string value. You can find the some of the strings using this endpoint: `https://api.premid.app/v2/langFIle/extension/en`

```typescript
// Returns `Playing` and `Paused` strings
// from extension.
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
Returns version of the extension the user is using.
```typescript
getExtensionVersion(onlyNumeric?: boolean): string | number;

var numeric = presence.getExtensionVersion();
console.log(numeric); // Will log 210
var version = presence.getExtensionVersion(false);
console.log(version); // Will log 2.1.0
```

### `getPageLetiable(String)`

Returns a variable from the website if it exists.

```typescript
var pageVar = getPageLetiable('.pageVar');
console.log(pageVar); // This will log the "Variable content"
```

## `presenceData` Interface

The `presenceData` interface is recommended to use when you are using the `setActivity()` method.

This interface has following variables, all of them are optional.

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
ตัวอย่างเช่น :
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

#### `อัพเดทข้อมูล`

เหตุการณ์นี้จะเริ่มขึ้นทุกครั้งที่มีการอัปเดต

#### `iFrameData`

จะเริ่มขึ้นเมื่อได้รับข้อมูลจากสคริปต์ iFrame
