---
title: Metadata.json
description: ประกอบด้วยข้อมูลพื้นฐานเกี่ยวกับ Presence
published: true
date: 2021-02-07T17:12:06.799Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:52.965Z
---

# Metadata.json

ถ้าคุณต้องการที่จะเผยแพร่ Presence ไปยังร้านค้าและดาวน์โหลดมันผ่านส่วนขยาย, คุณควรที่จะสร้างไฟล์ `metadata.json` ในโฟลเดอร์ `dist` ของคุณ

An example of that file can be found below.

```typescript
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
      "icon": "FONTAWESOME ICON",
      "value": true
    },
    {
      "id": "ID",
      "if": {
        "ID": true
      },
      "title": "DISPLAY TITLE",
      "icon": "FONTAWESOME ICON",
      "value": "\"%song%\" by %artist%",
      "placeholder": "use %song% or %artist%"
    },
    {
      "id": "ID",
      "title": "DISPLAY TITLE",
      "icon": "FONTAWESOME ICON",
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
      <th style="text-align:left">ไม่บังคับ</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>author</b></td>
      <td style="text-align:left">Should contain an Object with the <code>name</code> and <code>id</code> of the presence developer. <code>name</code> is your Discord username without the identifier(#0000). Id <code>ผู้ใช้</code> สามารถคัดลอกได้จากดิสคอร์ดโดยการเปิด
        โหมดผู้พัฒนาและคลิกขวาบนโปรไฟล์ของคุณ</td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>ไม่</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>contributors</b></td>
      <td style="text-align:left">Should contain an Object with the <code>name</code> and <code>id</code> of the contributor. <code>name</code> is your Discord username without the identifier(#0000). Id <code>ผู้ใช้</code> สามารถคัดลอกได้จากดิสคอร์ดโดยการเปิด
        โหมดผู้พัฒนาและคลิกขวาบนโปรไฟล์ของคุณ</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>ใช่</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>service</b></td>
      <td style="text-align:left">ชื่อของบริการที่ presence นี้รองรับ</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>ไม่</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>altnames</b></td>
      <td style="text-align:left">Be able to search the presence using an alternative name.<br>
      Meant to be used for presences that have different names in different languages (e.g. Pokémon and 포켓몬스터).<br>
      You can also use it for presences that have special characters so you don't have to type those (e.g. Pokémon and Pokemon).</td>
      <td style="text-align:left"><code>Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>ใช่</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>คำอธิบาย</b></td>
      <td style="text-align:left">Description of the service <b>NOT</b> the presence. คำอธิบายของคุณต้องมีค่าคีย์ที่ระบุภาษาและคำอธิบายในภาษานั้น ๆ สร้างคำอธิบายด้วยภาษา <i>ที่คุณเข้าใจ </i>, ผู้แปลภาษาของเราจะทำการแปลไฟล์ metadata ของคุณ ดูหมวดหมู่ของภาษา presence ในรายการ. </td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>ไม่</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b></td>
      <td style="text-align:left">URL of the service.<br>
      <b>Example:</b><code>vk.com</code><br>
      <b>This url must match the url of the website as it will be used to detect wherever or not this is the website to inject the script to. สิ่งนี้อาจใช้เป็น Array เมื่อมี url มากกว่าหนึ่งรายการเท่านั้น</b></td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>ไม่</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b></td>
      <td style="text-align:left">นิพจน์ทั่วไปที่ใช้ตรวจหา url</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>ใช่</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>เวอร์ชัน</b></td>
      <td style="text-align:left">เวอร์ชั่น presence ของคุณ</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>ไม่</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>logo</b></td>
      <td style="text-align:left">เชื่อมโยงไปยังโลโก้ของบริการ</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>ไม่</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b></td>
      <td style="text-align:left">เชื่อมโยงไปยังภาพขนาดย่อของ presence ของคุณ</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>ไม่</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>color</b></td>
      <td style="text-align:left">ค่า <code>#HEX</code> เราแนะนำให้ใช้สีหลักของบริการ
        ที่ presence ของคุณรองรับ</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>ไม่</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>แท็ก</b></td>
      <td style="text-align:left">Array ที่มีแท็ก, จะช่วยให้ผู้ใช้ค้นหา presence ของคุณบนเว็บไซต์</td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>ไม่</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>category</b></td>
      <td style="text-align:left">String ที่ใช้แสดงหมวดหมู่ที่ได้รับอิทธิพลจาก presence</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>ไม่</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b></td>
      <td style="text-align:left">กำหนดว่าจะใช้ <code>iFrames</code></td>
      <td style="text-align:left"><code>Boolean</code></td>
      <td style="text-align:left"><code>ใช่</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b></td>
      <td style="text-align:left">นิพจน์ทั่วไปที่ใช้ตรวจหา iframe ที่จะแทรก</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>ใช่</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>readLogs</b></td>
      <td style="text-align:left">Defines whether the extension should be reading logs.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>ใช่</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>settings</b></td>
      <td style="text-align:left">Array ของการตั้งค่าที่ผู้ใช้สามารถเปลี่ยนได้</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>ใช่</code></td>
    </tr>
  </tbody>
</table>

## นิพจน์ทั่วไป

ถ้าคุณต้องการเรียนรู้นิพจน์ทั่วไป, มาดูเว็บไซต์นี้สิ!

#### การเรียนรู้

• [Quick Starter Video](https://youtu.be/sXQxhojSdZM) • [RegexOne](https://regexone.com/) • [Regular Expressions Info](https://www.regular-expressions.info/tutorial.html)

#### การทดสอบ

• [Regexr](https://regexr.com/) • [Regex101](https://regex101.com/)

## ภาษาของ Presence

PreMiD เป็นบริการ polygot ซึ่งหมายความว่ามีภาษามากมายที่เกี่ยวข้องในการเชื่อมต่อของผู้ใช้ทั่วโลก รายการภาษาทั้งหมดสามารถดูได้ที่ [ปลายทาง API](https://api.premid.app/v2/langFile/list) To customize your presence even more you can allow users to select their presence display language see [`multiLanguage`](#multilanguage) for more.

## การตั้งค่า Presence
สร้างการตั้งค่าแบบโต้ตอบเพื่อให้ผู้ใช้สามารถปรับแต่ง Presence ได้!
```typescript
"settings": [
  {
    "id": "ID",
    "multiLanguage": true //See https://docs.premid.app/dev/presence/metadata#multilanguage
  },
  {
    "id": "ID",
    "title": "DISPLAY TITLE",
    "icon": "FONTAWESOME ICON", //Example "fas fa-info"
    "value": true //Boolean value will make it an on/off switch with the value as the default value
  },
  {
    "id": "ID",
    "if": {
      "ID": true //If another setting equals this value (true/false/0/1/etc.) then show this button
    },
    "title": "DISPLAY TITLE",
    "icon": "FONTAWESOME ICON",
    "value": "\"%song%\" by %artist%", //Putting in a string will make the setting an input one, where you can use a custom input.
    "placeholder": "use %song% or %artist%" //When input is empty it will show this grayed out
  },
  {
    "id": "ID",
    "title": "DISPLAY TITLE",
    "icon": "FONTAWESOME ICON",
    "value": 0, //Default value of the selector
    "values": ["1", "2", "etc."] //Will make the setting a selector where you select which one you want
  }
]
```

### `multiLanguage`

#### แนะนำ

The `multiLanguage` setting is used to allow users to manually select the language they want to presence to be shown in. This requires you to use strings from our [API](https://api.premid.app/v2/langFile/presence/en), for information on how to add strings click [here](/dev/presence/metadata/adding-new-strings).

#### Setup

The `multiLanguage` setting is a special case, it doesn't require a `title` nor `icon` nor `value` or `values` like other settings but it does require you some more things to setup!

The `multiLanguage` key can be set to the following:

`true`: use this if you are only going to use strings of the `general.json` file and the `<service>.json` file of the [Localization Repository](https://github.com/PreMiD/Localization/tree/master/src/Presence). `string`: name of the file excluding the extension (.json) inside the [Localization Repository](https://github.com/PreMiD/Localization/tree/master/src/Presence) (excluding the `general` file, since it's always loaded). Only common languages of both the `general` and inputted file will be listed. `Array<String>`: if you are using more than one file inside the [Localization Repository](https://github.com/PreMiD/Localization/tree/master/src/Presence) you can specify all the values in an array (excluding the `general` file, since it's always loaded). Only common languages of all the files will be listed.

#### Adding new strings

##### การโคลนโปรเจ็ค

1. เปิดโปรแกรม Terminal และพิมพ์ `git clone https://github.com/PreMiD/Localization`.
2. เลือกโฟลเดอร์ที่คุณต้องการ
3. เปิดในโปรแกรมแก้ไขโค้ด

##### Creating the file

1. Go into the `src` folder.
2. Go into the `Presence` folder.
3. Make a file named `<service>.json`. (Service is the **name** (not an URL) in lowercase of the service you want to support.)

##### Adding the strings

Each `string` is an `Object` where from the name starts with the service name and then the so called stringName with a dot in between them.

The stringName is a 1 word identifier of the message.

The `Object` has 2 properties; `message` and `description`. `message` is the text that needs to be translated. `description` is a description of the message to help our translators understand what they are translating.

**Note:** Do not add any duplicate strings. (This includes strings out of the `general.json` file but not the other files.)

Visualization of the the file:

```typescript
{
  "<service>.<stringName>": {
    "message": "Text that needs to be translated.",
    "description": "This explains what the message above is."
  },
  "<service>.<stringName>": {
    "message": "Text that needs to be translated.",
    "description": "This explains what the message above is."
  }
}
```

After you have fully made the file with strings you can create a Pull Request on the [Localization Repository](https://github.com/PreMiD/Localization), in the description you **must** include a link to your Pull Request of the presence updated using these new strings from the [Presence Repository](https://github.com/PreMiD/Presences).

#### Default keys
The keys you didn't have to set are automatically set to the following: `title`: "Language" **Note:** This is translated into their default language (browser language). `icon`: "fas fa-language" ([Preview](https://fontawesome.com/icons/language)) `value`: **Set to their browser language if it is available (100% translated), otherwise English.** `values`: **Set to the available languages (languages that have it 100% translated).**

**Note:** These are in no way changeable.

### วิธีการ

ใช้วิธีการเหล่านี้เพื่อเข้าถึงข้อมูลการตั้งค่าในไฟล์ Presence ของคุณ
#### `getSetting(String)`
คืนค่าจํานวนของการตั่งค่า
```typescript
const setting = await presence.getSetting("pdexID"); //Replace pdexID with the id of the setting
console.log(setting); // This will log the value of the setting
```

#### `hideSetting(String)`
ซ่อนการตั้งค่าที่กำหนด
```typescript
presence.hideSetting("pdexID"); //แทนที่ pdexID ด้วย id ของการตั้งค่า
```

#### `showSetting(String)`
แสดงการตั้งค่า (จะทำงานก็ต่อเมื่อการตั้งค่าถูกซ่อนไว้อยู่)
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
      <td style="text-align:left">ทุกอย่างที่เกี่ยวข้องกับอนิเมะ ตั้งแต่ Forum ไปจนถึงแพลตฟอร์มสตรีมมิ่งวิดีโอ</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>เกม</b></td>
      <td style="text-align:left"><b>เกม</b></td>
      <td style="text-align:left">ทุกเว็บไซต์ที่มีข้อมูลเกี่ยวกับเกม เช่น <code>Kahoot</code> หรือ <code>Skribbl.io</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>เพลง</b></td>
      <td style="text-align:left"><b>เพลง</b></td>
      <td style="text-align:left">พวกนี้เป็นเว็บไซต์ที่เกี่ยวข้องกับเพลง ไม่ว่าจะเป็นการฟังเพลงหรือดาวน์โหลดเพลง</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>โซเชียล</b></td>
        <td style="text-align:left"><b>โซเชียล</b></td>
      <td style="text-align:left">เว็บไซต์ที่มีจุดประสงค์ในการสร้างและเผยแพร่เนื้อหาต่างๆ หรือเกี่ยวข้องกับ Social Network</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>วิดีโอ</b></td>
        <td style="text-align:left"><b>วีดีโอและสตรีมมิ่ง</b></td>
      <td style="text-align:left">เว็บไซต์ที่ให้บริการวิดีโอและสตรีมสด</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>อื่นๆ</b></td>
      <td style="text-align:left"><b>อื่นๆ</b></td>
      <td style="text-align:left">สิ่งใดก็ตามที่ไม่อยู่ในหมวดหมู่เฉพาะที่ระบุไว้ข้างต้น</td>
    </tr>
  </tbody>
</table>

