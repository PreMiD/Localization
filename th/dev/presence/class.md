---
title: คลาส Presence
description: คลาสหลักสำหรับทุก PreMiD Presence
published: true
date: 2021-02-26T20:42:26.910Z
tags:
editor: markdown
dateCreated: 2021-02-21T21:13:14.449Z
---

# คลาส Presence

## บทนำ

คลาส `Presence` มีประโยชน์มากเพราะมีวิธีการพื้นฐานที่เราต้องการสำหรับการสร้าง presence

เมื่อคุณสร้าง Class คุณต้องระบุคุณสมบัติของ `clientId`

```typescript
const presence = new Presence({
  clientId: "514271496134389561" // ตัวอย่าง clientId
});
```

### Properties

There are three properties available for `Presence` class.

#### `clientId`

This property is required to make your presence work, because it uses your application id to display its logo and assets. คุณสามารถเข้าไปดูได้ที่ [หน้าแอปพลิเคชัน](https://discordapp.com/developers/applications)

#### `injectOnComplete`

When setting `injectOnComplete` to `true` the first `UpdateData` event for both the `presence.ts` and `iframe.ts` files will only be fired when the page has fully loaded.

#### `appMode`

When setting `appMode` to `true` and the presence were to send an empty `PresenceData`, the app will show the application (image and name) on the user's profile instead of nothing.

## ฟังก์ชัน

### `getActivity()`

คืนค่า object `PresenceData` ของ presence ที่กำลังแสดงอยู่.

### `setActivity(PresenceData | Slideshow, Boolean)`

ตั้งค่ากิจกรรมโปรไฟล์ของคุณตามข้อมูลที่ให้ไว้

First parameter requires a [`PresenceData`](#presencedata-interface) interface or a [`Slideshow`](/dev/presence/slideshow) class to get all information that you want to display in your profile.

ตัวแปรที่สองกำหนดให้เมื่อ presence กำลังเล่นอะไรอยู่หรือไม่ Always use `true` if you provide timestamps in `PresenceData`.

### `clearActivity()`

Clears your current activity and the tray title.

### `setTrayTitle(String)`

> วิธีนี้ใช้ได้เฉพาะบน Mac OS เท่านั้น 
> 
> {.is-warning}

ตั้งให้เทรย์ title อยู่บน แถบเมนู

### `createSlideshow()`

Creates a new `Slideshow` class.

```typescript
const slideshow = presence.createSlideshow();
```

It is suggested to do this right after creating the `Presence` class:

```typescript
const presence = new Presence({
    clientId: "514271496134389561" // Example clientId
  }),
  slideshow = presence.createSlideshow();
```

You can find the documentation for the `Slideshow` class [here](/dev/presence/slideshow).

### `getStrings(Object)`

วิธีการ asyncronous จะสามารถให้คุณได้ string จากส่วนขยายได้

คุณต้องระบุ `Object` ด้วยคีย์ที่เป็นกุญแจสำหรับสตริง `keyValue` คือค่าสตริง A list of translated strings can be found at this endpoint: `https://api.premid.app/v2/langFile/presence/en/`

```typescript
// คืนค่า `Playing` and `Paused` strings
// จาก ส่วนขยาย.
const strings = await presence.getStrings({
  play: "general.playing",
  pause: "general.paused"
});

const playString = strings.play; // result: Playing
const pauseString = strings.pause; // result: Paused
```

Since v2.2.0 of the extension you can now get the strings of a certain language. This works well with the also newly added `multiLanguage` setting option.

เราขอแนะนำให้คุณใช้โค้คต่อไปนี้, เพื่อที่จะทำให้ PresenceData อัปเดดโดดอัตโนมัติเมื่อผู้ใช้เปลี่ยนภาษา;

```typescript
// An interface of the strings you are getting (good for code quality and autocomplete).
interface LangStrings {
  play: string;
  pause: string;
}

async function getStrings(): Promise<LangStrings> {
  return presence.getStrings(
    {
      // The strings you are getting, make sure this fits with your LangStrings interface.
      play: "general.playing",
      pause: "general.paused"
    },
    // The ID is the ID of the multiLanguage setting.
    await presence.getSetting("ID")
  );
}

let strings: Promise<LangStrings> = getStrings(),
  // The ID is the ID of the multiLanguage setting.
  oldLang: string = await presence.getSetting("ID");

//! The following code must be inside the updateData event!
// The ID is the ID of the multiLanguage setting.
const newLang = await presence.getSetting("ID");
if (oldLang !== newLang) {
  oldLang = newLang;
  strings = getStrings();
}

const playString = (await strings).play, // result: Playing
  pauseString = (await strings).pause; // result: Paused
```

### `getPageLetiable(String)`

คืนค่าตัวแปรจากเว็บไซต์ถ้ามันมีอยู่จริง

```typescript
const pageVar = getPageletiable(".pageVar");
console.log(pageVar); // This will log the "Variable content"
```

### `getExtensionVersion(Boolean)`

คืนค่าเวอร์ชันของส่วนขยายที่ผู้ใช้ใช้อยู่

```typescript
getExtensionVersion(onlyNumeric?: boolean): string | number;

const numeric = presence.getExtensionVersion();
console.log(numeric); // คำสั่งนี้จะปริ้น 210
const version = presence.getExtensionVersion(false);
console.log(version); // คำสั่งนี้จะปริ้น 2.1.0
```

### `getSetting(String)`

คืนค่าจํานวนของการตั่งค่า

```typescript
const setting = await presence.getSetting("pdexID"); //Replace pdexID with the id of the setting
console.log(setting); // This will log the value of the setting
```

### `hideSetting(String)`

ซ่อนการตั้งค่าที่กำหนด

```typescript
presence.hideSetting("pdexID"); // Replace pdexID with the id of the setting
```

### `showSetting(String)`

แสดงการตั้งค่า (จะทำงานก็ต่อเมื่อการตั้งค่าถูกซ่อนไว้อยู่)

```typescript
presence.showSetting("pdexID"); // Replace pdexID with the id of the setting
```

### `getLogs()`

Returns the logs of the websites console.

```typescript
const logs = await presence.getLogs();
console.log(logs); // This will log the latest 100 logs (in an array).
```

**Note:** Requires `readLogs` to be `true` in the `metadata.json` file.

### `info(String)`

Prints the given message in the console in a format based of the presence in the `info` style.

```typescript
presence.info("Test") // This will log "test" in the correct styling.
```

### `success(String)`

Prints the given message in the console in a format based of the presence in the `success` style.

```typescript
presence.success("Test") // This will log "test" in the correct styling.
```

### `error(String)`

Prints the given message in the console in a format based of the presence in the `error` style.

```typescript
presence.error("Test") // This will log "test" in the correct styling.
```

### `getTimestampsfromMedia(HTMLMediaElement)`

Returns 2 `snowflake` timestamps in an `Array` that can be used for `startTimestamp` and `endTimestamp`.

```typescript
const timestamps = getTimestampsfromMedia(document.querySelector(".video"));
presenceData.startTimestamp = timestamps[0];
presenceData.endTimestamp = timestamps[1];
```

**หมายเหตุ:** `String` ที่ให้ไปใน querySelector เป็นแค่คัวอย่างเท่านั้น.

### `getTimestamps(Number, Number)`

Returns 2 `snowflake` timestamps in an `Array` that can be used for `startTimestamp` and `endTimestamp`.

```typescript
const video = document.querySelector(".video"),
  timestamps = getTimestamps(video.currentTime, video.duration);
presenceData.startTimestamp = timestamps[0];
presenceData.endTimestamp = timestamps[1];
```

**หมายเหตุ:** `String` ที่ให้ไปใน querySelector เป็นแค่คัวอย่างเท่านั้น.

### `timestampFromFormat(String)`

Converts a string with format `HH:MM:SS` or `MM:SS` or `SS` into an integer (Does not return snowflake timestamp).

```typescript
const currentTime = timestampFromFormat(document.querySelector(".video-now").textContent),
  duration = timestampFromFormat(document.querySelector(".video-end").textContent),
  timestamps = getTimestamps(currentTime, duration);
presenceData.startTimestamp = timestamps[0];
presenceData.endTimestamp = timestamps[1];
```

**หมายเหตุ:** `String` ที่ให้ไปใน querySelector เป็นแค่คัวอย่างเท่านั้น.

## อินเตอร์เฟซ `PresenceData`

ขอแนะนำให้ใช้อินเตอร์เฟซ `PresenceData` เมื่อคุณกำลังใช้ ฟังก์ชั่น `setActivity()`

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
      <td style="text-align:left">บรรทัดแรกใน presence มักจะใช้เป็น Header</td>
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
        จะใช้เมื่อคุณต้องการแสดงว่าเหลือ <code>ชั่วโมง:นาที:วินาที</code> เท่าไหร่
          <br>คุณต้องแปลงเวลาของคุณเป็น <code>timestamp</code> หรือไม่งั้นคุณจะได้รับ
          เวลานับถอยหลังที่เกิดข้อผิดพลาด
      </td>
      <td style="text-align:left"><code>Number</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">endTimestamp</td>
      <td style="text-align:left">กำหนดระยะเวลาทั้งหมด
        <br>ใช้เมื่อคุณต้องการแสดงว่าเหลือ <code>ชั่วโมง:นาที:วินาที</code> เท่าไหร่
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
        <tr>
      <td style="text-align:left">buttons</td>
      <td style="text-align:left">Array ของปุ่ม, ใส่ได้มากที่สุด 2 ปุ่ม label คือ ข้อความของปุ่ม และ url คือ ลิ้ง</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code>
      </td>
    </tr>
  </tbody>
</table>

```typescript
const presenceData: PresenceData = {
  details: "ชื่อของเรา",
  state: "คำอธิบายของเรา",
  largeImageKey: "service_logo",
  smallImageKey: "small_service_icon",
  smallImageText: "ลากเม้ามาที่เราหรอ, อะไรต่อล่ะทีนี้?",
  startTimestamp: 1564444631188,
  endTimestamp: 1564444634734,
  buttons: [
    {
            label: "ทดสอบ 1",
            url: "https://premid.app/"
        },
        {
            label: "ทดสอบ 2",
            url: "https://premid.app/contributors"
        }
    ]
};
```

## เหตุการณ์

เหตุการณ์อนุญาตให้คุณตรวจจับและจัดการการเปลี่ยนแปลงหรือเรียกสิ่งที่เกิดขึ้น คุณสามารถติดตามเหตุการณ์โดยใช้วิธี `on`

```typescript
presence.on("UpdateData", async () => {
  // ทำอะไรยังอย่างเมื่อข้อมูลมีการอัปเดต
});
```

มีบางเหตุการณ์ที่ใช้ได้:

#### `UpdateData`

เหตุการณ์นี้จะเริ่มขึ้นทุกครั้งที่มีการอัปเดต

#### `iFrameData`

จะเริ่มขึ้นเมื่อได้รับข้อมูลจากสคริปต์ iFrame
