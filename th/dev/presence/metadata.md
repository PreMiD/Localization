---
title: Metadata.json
description: ประกอบด้วยข้อมูลพื้นฐานเกี่ยวกับ Presence
published: true
date: 07 ก.พ 2563 20:39 น.
tags:
---

# Metadata.json

ถ้าคุณต้องการที่จะเผยแพร่ presence ไปยังร้านค้าและดาวน์โหลดมันผ่านส่วนขยาย, คุณควรที่จะสร้างไฟล์ `metadata.json` ในโฟลเดอร์ `presence.js` ของคุณ

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
        ถ้าคุณยังไม่มีความคิดดีๆ คำอธิบายของคุณต้องมีค่าคีย์ที่ระบุภาษาและคำอธิบายในภาษานั้น ๆ สร้างคำอธิบายด้วยภาษา <i>ที่คุณเข้าใจ </i>, ผู้แปลภาษาของเราจะทำการแปลไฟล์ metadata ของคุณ View the category for presence languages for a list. </td>
      <td style="text-align:left"><code>Object</code>
      </td>
      <td style="text-align:left"><code>ไม่</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b>
      </td>
      <td style="text-align:left">URL of the service.<br><b>Example:</b><code>vk.com</code><br>
        <b>This url must match the url of the website as it will be used to detect wherever or not this is the website to inject the script to. This may only be used as an array when there are more than one urls.</b>
      </td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code>
      </td>
      <td style="text-align:left"><code>ไม่</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b>
      </td>
      <td style="text-align:left">A regular expression string used to match urls.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>ใช่</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>เวอร์ชัน</b>
      </td>
      <td style="text-align:left">Version of your presence.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>ไม่</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>logo</b>
      </td>
      <td style="text-align:left">Link to service&apos;s logotype.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>ไม่</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b>
      </td>
      <td style="text-align:left">Link to your presence thumbnail.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>ไม่</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>color</b>
      </td>
      <td style="text-align:left"><code>#HEX</code> value. We recommend to use a primary color of the service
        that your presence supports.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>ไม่</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>แท็ก</b>
      </td>
      <td style="text-align:left">Array with tags, they will help users to search your presence on the website.</td>
      <td
      style="text-align:left"><code>String, Array&lt;String&gt;</code>
        </td>
      <td style="text-align:left"><code>ไม่</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>category</b>
      </td>
      <td style="text-align:left">A string used to represent the category the presence falls under.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>ไม่</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b>
      </td>
      <td style="text-align:left">Defines whether <code>iFrames</code> are used</td>
      <td style="text-align:left"><code>Boolean</code>
      </td>
      <td style="text-align:left"><code>ใช่</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b>
      </td>
      <td style="text-align:left">A regular expression selector that selects iframes to inject into.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>ใช่</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>settings</b>
      </td>
      <td style="text-align:left">An array of settings the user can change</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>ใช่</code>
      </td>
    </tr>
  </tbody>
</table>

## Regular Expressions

If you want to learn regular expressions, here are a few websites.

#### Learning

• [RegexOne](https://regexone.com/) • [Regular Expressions Info](https://www.regular-expressions.info/tutorial.html)

#### Testing

• [Regexr](https://regexr.com/) • [Regex101](https://regex101.com/)

## Presence languages

PreMiD is a polygot service, meaning there are a multitude of languages involved to connect users around the globe. A full list of languages can be found with this [API endpoint](https://api.premid.app/v2/langFile/list).

## Presence settings
Setup interactive settings so users can customize the presence!
```javascript
"settings": [
        { 
            "id": "ID",
            "title": "DISPLAY TITLE",
            "icon": "FONTAWESOME FREE ICON", //Example "fas fa-info"
            "value": true //Boolean value will make it an on/off switch with the value as the default value
        },
        {
            "id": "ID",
            "if": {
                "ID": true //If another setting equals this value (true/false/0/1/etc.) then show this button
            },
            "title": "DISPLAY TITLE",
            "icon": "FONTAWESOME FREE ICON",
            "value": "\"%song\" by %artist", //Putting in a string will make the setting an input one, where you can use a custom input.
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