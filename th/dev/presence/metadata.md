---
title: Metadata.json
description: ประกอบด้วยข้อมูลพื้นฐานเกี่ยวกับ Presence
published: true
date: 2020-04-22T18:33:51.076Z
tags:
---

# Metadata.json

If you want to publish a presence to the store and load it via the extension, you should create the `metadata.json` file in your `dist` folder.

ตัวอย่างของไฟล์สามารถดูได้ด้านล่างนี้

```javascript
{
  "author": {
    "name": "USER",
    "id": "ID"
  },
  "contributors": [{
    "name": "USER",
    "id": "ID"
  }],
  "service": "SERVICE",
  "description": {
    "en": "DESCRIPTION"
  },
  "url": "URL",
  "regExp": "REGEXP",
  "iFrameRegExp": "REGEXP",
  "version": "VERSION",
  "logo": "URL",
  "thumbnail": "URL",
  "color": "#45A8FC",
  "tags": ["CATEGORY", "TAG"],
  "category": "CATEGORY",
  "iframe": false,
  "settings": [
        { 
            "id": "ID",
            "title": "DISPLAY TITLE",
            "icon": "FONTAWESOME FREE ICON",
            "value": true
        },
        {
            "id": "ID",
            "if": {
                "ID": true
            },
            "title": "DISPLAY TITLE",
            "icon": "FONTAWESOME FREE ICON",
            "value": "\"%song\" by %artist",
            "placeholder": "use %song or %artist"
        },
        {
            "id": "ID",
            "title": "DISPLAY TITLE",
            "icon": "FONTAWESOME FREE ICON",
            "value": 0,
            "values": ["1", "2", "etc."]
        }
    ]
}
```

## ทำความเข้าใจกับ metadata.json

ตัวอย่างนั่นดูเหมือนว่ามันแปลกๆใช่ไหมล่ะ, เนอะ? ไม่ต้องกังวลนะ, มันไม่ได้ยากเกินกว่าที่จะเข้าใจว่าแต่ละตัวแปรมีไว้เพื่ออะไร.

<table>
  <thead>
    <tr>
      <th style="text-align:left">ตัวแปร</th>
      <th style="text-align:left">คำอธิบาย</th>
      <th style="text-align:left">ชนิด</th>
      <th style="text-align:left">ค่าตัวเลือก</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>ผู้เขียน</b>
      </td>
      <td style="text-align:left">ควรมี Object ที่มี <code>name</code> และ <code>id</code> ของผู้พัฒนา presence <code>name</code> คือชื่อผู้ใช้ดิสคอร์ดของคุณโดยไม่มีตัวระบุตัวตน(#0000). Id <code>ผู้ใช้</code> สามารถคัดลอกได้จากดิสคอร์ดโดยการเปิด
        โหมดผู้พัฒนาและคลิกขวาบนโปรไฟล์ของคุณ</td>
      <td style="text-align:left"><code>Object</code>
      </td>
      <td style="text-align:left"><code>ไม่</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>ผู้พัฒนา</b>
      </td>
      <td style="text-align:left">ควรมี Object ที่มี <code>name</code> และ <code>id</code> ของผู้ช่วยพัฒนา presence <code>name</code> คือชื่อผู้ใช้ดิสคอร์ดของคุณโดยไม่มีตัวระบุตัวตน(#0000). Id <code>ผู้ใช้</code> สามารถคัดลอกได้จากดิสคอร์ดโดยการเปิด
        โหมดผู้พัฒนาและคลิกขวาบนโปรไฟล์ของคุณ</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>ใช่</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>service</b>
      </td>
      <td style="text-align:left">ชื่อของบริการที่ presence นี้รองรับ</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>ไม่</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>คำอธิบาย</b>
      </td>
      <td style="text-align:left">คำอธิบายเล็กๆน้อยๆแก่ presence, ตัวคุณสามารถใช้คำอธิบายของบริการได้
        ถ้าคุณยังไม่มีความคิดดีๆ คำอธิบายของคุณต้องมีค่าคีย์ที่ระบุภาษาและคำอธิบายในภาษานั้น ๆ สร้างคำอธิบายด้วยภาษา <i>ที่คุณเข้าใจ </i>, ผู้แปลภาษาของเราจะทำการแปลไฟล์ metadata ของคุณ ดูหมวดหมู่ของภาษา presence ในรายการ. </td>
      <td style="text-align:left"><code>Object</code>
      </td>
      <td style="text-align:left"><code>ไม่</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b>
      </td>
      <td style="text-align:left">URL ของบริการ<br><b>ตัวอย่าง:</b><code>vk.com</code><br>
        <b>URL นี้จะต้องตรงกับ URL ของเว็บไซต์เนื่องจากมันจะถูกใช้เพื่อตรวจสอบทุกที่หรือไม่นี่คือเว็บไซต์ที่จะสคริปต์ สิ่งนี้อาจใช้เป็น Array เมื่อมี url มากกว่าหนึ่งรายการเท่านั้น</b>
      </td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code>
      </td>
      <td style="text-align:left"><code>ไม่</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b>
      </td>
      <td style="text-align:left">นิพจน์ทั่วไปที่ใช้ตรวจหา url</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>ใช่</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>เวอร์ชัน</b>
      </td>
      <td style="text-align:left">เวอร์ชั่น presence ของคุณ</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>ไม่</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>logo</b>
      </td>
      <td style="text-align:left">เชื่อมโยงไปยังโลโก้ของบริการ</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>ไม่</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b>
      </td>
      <td style="text-align:left">เชื่อมโยงไปยังภาพขนาดย่อของ presence ของคุณ</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>ไม่</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>color</b>
      </td>
      <td style="text-align:left">ค่า <code>#HEX</code> เราแนะนำให้ใช้สีหลักของบริการ
        ที่ presence ของคุณรองรับ</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>ไม่</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>แท็ก</b>
      </td>
      <td style="text-align:left">Array ที่มีแท็ก, จะช่วยให้ผู้ใช้ค้นหา presence ของคุณบนเว็บไซต์</td>
      <td
      style="text-align:left"><code>String, Array&lt;String&gt;</code>
        </td>
      <td style="text-align:left"><code>ไม่</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>category</b>
      </td>
      <td style="text-align:left">String ที่ใช้แสดงหมวดหมู่ที่ได้รับอิทธิพลจาก presence</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>ไม่</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b>
      </td>
      <td style="text-align:left">กำหนดว่าจะใช้ <code>iFrames</code></td>
      <td style="text-align:left"><code>Boolean</code>
      </td>
      <td style="text-align:left"><code>ใช่</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b>
      </td>
      <td style="text-align:left">นิพจน์ทั่วไปที่ใช้ตรวจหา iframe ที่จะแทรก</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>ใช่</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>settings</b>
      </td>
      <td style="text-align:left">Array ของการตั้งค่าที่ผู้ใช้สามารถเปลี่ยนได้</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>ใช่</code>
      </td>
    </tr>
  </tbody>
</table>

## นิพจน์ทั่วไป

ถ้าคุณต้องการเรียนรู้นิพจน์ทั่วไป, มาดูเว็บไซต์นี้สิ!

#### การเรียนรู้

• [RegexOne](https://regexone.com/) • [ข้อมูลเกี่ยวกับนิพจน์ทั่วไป](https://www.regular-expressions.info/tutorial.html)

#### การทดสอบ

• [Regexr](https://regexr.com/) • [Regex101](https://regex101.com/)

## ภาษาของ Presence

PreMiD เป็นบริการ polygot ซึ่งหมายความว่ามีภาษามากมายที่เกี่ยวข้องในการเชื่อมต่อของผู้ใช้ทั่วโลก รายการภาษาทั้งหมดสามารถดูได้ที่ [ปลายทาง API](https://api.premid.app/v2/langFile/list)

## การตั้งค่า Presence
สร้างการตั้งค่าแบบโต้ตอบเพื่อให้ผู้ใช้สามารถปรับแต่ง Presence ได้!
```javascript
"settings": [
        { 
            "id": "ID",
            "title": "DISPLAY TITLE",
            "icon": "FONTAWESOME FREE ICON", //Example "fas fa-info"
            "value": true //ค่า Boolean จะทำเป็นสวิตช์เปิด/ปิดพร้อมกับค่าที่เป็นค่าเริ่มต้น
        },
        {
            "id": "ID",
            "if": {
                "ID": true //หากอีกการตั้งค่าเท่ากับค่าเหล่านี้ (true/false/0/1/และอื่นๆ ) จากนั้นให้แสดงปุ่มนี้
            },
            "title": "DISPLAY TITLE",
            "icon": "FONTAWESOME FREE ICON",
            "value": "\"%song\" by %artist", //การใส่ String จะทำให้การตั้งค่าเป็นหนึ่ง Input, ซึ่งคุณสามารถใช้ Input ที่กำหนดเองได้
            "placeholder": "use %song or %artist" //When input is empty it will show this grayed out
        },
        {
            "id": "ID",
            "title": "DISPLAY TITLE",
            "icon": "FONTAWESOME FREE ICON",
            "value": 0, //Default value of the selector
            "values": ["1", "2", "etc."] //Will make the setting a selector where you select which one you want
        }
    ]
```

Use the following methods to get settings info in your presence files:
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

## Presence categories

When making your presence, you must specify a category which the presence falls under. This is a compiled list of the categories that you can use.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Category</th>
      <th style="text-align:left">Name</th>
      <th style="text-align:left">คำอธิบาย</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>อนิเมะ</b></td>
      <td style="text-align:left"><b>อนิเมะ</b></td>
      <td style="text-align:left">Anything related to anime, from forums to video streaming platforms.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>เกม</b></td>
    <td style="text-align:left"><b>เกม</b></td>
      <td style="text-align:left">Any website that has game related content, such as <code>Kahoot</code> or <code>Skribbl.io</code></td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>เพลง</b></td>
    <td style="text-align:left"><b>เพลง</b></td>
      <td style="text-align:left">These are websites that offer music related content, whether that be streaming or downloading.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>โซเชียล</b></td>
        <td style="text-align:left"><b>โซเชียล</b></td>
      <td style="text-align:left">Websites that are used for the purpose of creating and sharing content or  for participating in other forms of social networking.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>วิดีโอ</b></td>
        <td style="text-align:left"><b>วีดีโอและสตรีมมิ่ง</b></td>
      <td style="text-align:left">Websites that serve the purpose of providing videos and streams.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>อื่นๆ</b></td>
    <td style="text-align:left"><b>อื่นๆ</b></td>
      <td style="text-align:left">Anything that does not fall under a specific category listed above.</td>
      </td>
    </tr>
  </tbody>
</table>