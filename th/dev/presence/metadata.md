---
title: Metadata.json
description: ประกอบด้วยข้อมูลพื้นฐานเกี่ยวกับ Presence
published: true
date: 2020-05-21T16:01:05.836Z
tags:
---

# Metadata.json

ถ้าคุณต้องการที่จะเผยแพร่ Presence ไปยังร้านค้าและดาวน์โหลดมันผ่านส่วนขยาย, คุณควรที่จะสร้างไฟล์ `metadata.json` ในโฟลเดอร์ `dist` ของคุณ

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
  "altnames": ["SERVICE"],
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
  "tags": ["TAG1", "TAG2"],
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
            "value": "\"%song%\" by %artist%",
            "placeholder": "use %song% or %artist%"
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
      <td style="text-align:left"><b>author</b>
      </td>
      <td style="text-align:left">ควรมี Object ที่มี <code>name</code> และ <code>id</code> ของผู้พัฒนา presence <code>name</code> คือชื่อผู้ใช้ดิสคอร์ดของคุณโดยไม่มีตัวระบุตัวตน(#0000). Id <code>ผู้ใช้</code> สามารถคัดลอกได้จากดิสคอร์ดโดยการเปิด
        โหมดผู้พัฒนาและคลิกขวาบนโปรไฟล์ของคุณ</td>
      <td style="text-align:left"><code>Object</code>
      </td>
      <td style="text-align:left"><code>ไม่</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>contributors</b>
      </td>
      <td style="text-align:left">ควรประกอบไปด้วย Object ที่มี <code>name</code> และ <code>id</code> ของผู้พัฒนา <code>name</code> คือชื่อผู้ใช้ดิสคอร์ดของคุณโดยไม่มีตัวระบุตัวตน(#0000). Id <code>ผู้ใช้</code> สามารถคัดลอกได้จากดิสคอร์ดโดยการเปิด
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
      <td style="text-align:left"><b>altnames</b>
      </td>
      <td style="text-align:left">สามารถค้นหา Presence ด้วยชื่อรอง (ชื่อที่สอง) <br>Meant to be used for presences that have different names in different languages (e.g. Pokémon and 포켓몬스터).<br>You can also use it for presences that have special characters so you don't have to type those (e.g. Pokémon and Pokemon).
      </td>
      <td style="text-align:left"><code>Array&lt;String&gt;</code>
      </td>
      <td style="text-align:left"><code>ใช่</code>
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

## Regular Expressions

ถ้าคุณต้องการเรียนรู้นิพจน์ทั่วไป, มาดูเว็บไซต์นี้สิ!

#### การเรียนรู้

• [Quick Starter Video](https://youtu.be/sXQxhojSdZM) • [RegexOne](https://regexone.com/) • [Regular Expressions Info](https://www.regular-expressions.info/tutorial.html)

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
            "icon": "FONTAWESOME FREE ICON", //ตัวอย่างเช่น "fas fa-info"
            "value": true //ค่า Boolean จะทำหน้าที่เป็นสวิตช์เปิด/ปิดพร้อมกับค่าที่เป็นค่าเริ่มต้น
        },
        {
            "id": "ID",
            "if": {
                "ID": true //หากอีกการตั้งค่าหนึ่ง มีค่าเท่ากับค่านี้ (true/false/0/1/และอื่นๆ ) จากนั้นให้แสดงปุ่มนี้
            },
            "title": "DISPLAY TITLE",
            "icon": "FONTAWESOME FREE ICON",
            "value": "\"%song%\" by %artist%", //การใส่ String จะทำให้การตั้งค่าเป็นอีกหนึ่ง Input, ซึ่งคุณสามารถใช้ Input ที่กำหนดเองได้
            "placeholder": "ใช้ %song% หรือ %artist%" //เมื่อไม่มีข้อมูล Input ข้อความนี้จะเป็นสีเทา
        },
        {
            "id": "ID",
            "title": "DISPLAY TITLE",
            "icon": "FONTAWESOME FREE ICON",
            "value": 0, //ค่าพื้นฐานของ Selector
            "values": ["1", "2", "etc."] // จะทำให้สามารถตั้งค่า Selector เป็นตัวที่คุณต้องการได้
        }
    ]
```

ใช้วิธีการเหล่านี้เพื่อเข้าถึงข้อมูลการตั้งค่าในไฟล์ Presence ของคุณ
### `getSetting(String)`
ส่งกลับค่าต่างๆ ของการตั้งค่า
```typescript
var setting = await presence.getSetting("pdexID"); //แทนที่ pdexID ด้วย id ของการตั้งค่า
console.log(setting); // คำสั่งนี้จะบันทึก "ค่าของการตั้งค่า"
```

### `hideSetting(String)`
ซ่อนการตั้งค่าที่กำหนด
```typescript
presence.hideSetting("pdexID"); //แทนที่ pdexID ด้วย id ของการตั้งค่า
```

### `showSetting(String)`
แสดงผลการตั้งค่าที่กำหนด (จะทำงานก็ต่อเมื่อการตั้งค่าถูกซ่อนไว้อยู่)
```typescript
presence.showSetting("pdexID"); //แทนที่ pdexID ด้วย id ของการตั้งค่า
```

## หมวดหมู่ของ Presence

เมื่อคุณสร้าง Presence ขึ้น คุณจะต้องระบุหมวดหมู่ที่ Presence จะไปอยู่ นี่คือรายการหมวดหมู่ที่คุณสามารถใช้ได้ทั้งหมด

<table>
  <thead>
    <tr>
      <th style="text-align:left">หมวดหมู่</th>
      <th style="text-align:left">ชื่อ</th>
      <th style="text-align:left">คำอธิบาย</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>อนิเมะ</b></td>
      <td style="text-align:left"><b>อนิเมะ</b></td>
      <td style="text-align:left">ทุกอย่างที่เกี่ยวข้องกับอนิเมะ ตั้งแต่การะดานสนทนาไปจนถึงแพลตฟอร์มสตรีมมิ่งวิดีโอ</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>เกม</b></td>
    <td style="text-align:left"><b>เกม</b></td>
      <td style="text-align:left">ทุกเว็บไซต์ที่มีข้อมูลเกี่ยวกับเกม เช่น <code>Kahoot</code> หรือ <code>Skribbl.io</code></td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>เพลง</b></td>
    <td style="text-align:left"><b>เพลง</b></td>
      <td style="text-align:left">พวกนี้เป็นเว็บไซต์ที่เกี่ยวข้องกับเพลง ไม่ว่าจะเป็นการฟังเพลงหรือดาวน์โหลดเพลง</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>โซเชียล</b></td>
        <td style="text-align:left"><b>โซเชียล</b></td>
      <td style="text-align:left">เว็บไซต์ที่มีจุดประสงค์ในการสร้างและเผยแพร่เนื้อหาต่างๆ หรือเกี่ยวข้องกับ Social Network</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>วิดีโอ</b></td>
        <td style="text-align:left"><b>วีดีโอและสตรีมมิ่ง</b></td>
      <td style="text-align:left">เว็บไซต์ที่ให้บริการวิดีโอและสตรีมสด</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>อื่นๆ</b></td>
    <td style="text-align:left"><b>อื่นๆ</b></td>
      <td style="text-align:left">สิ่งใดก็ตามที่ไม่อยู่ในหมวดหมู่เฉพาะที่ระบุไว้ข้างต้น</td>
      </td>
    </tr>
  </tbody>
</table>

