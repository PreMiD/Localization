---
title: فئة الpresence
description: الصف الرئيسي لكل presnece PreMiD
published: صحيح
date: 2020-07-29T15:12:55.925Z
tags:
editor: markdown
---

# فئة الpresence

## مقدمة

فئة `الpresence` مفيدة جدا لأن لديها الأساليب الأساسية التي نحتاج إليها لإنشاء presnce.

 عند إنشاء صف، يجب تحديد ملكية `معرف العميل`.

```typescript
السماح بالpresence = presence جديد ({
    العميل معرف: "514271496134389561" // مثال العميل
})؛;
```

هناك خاصيتان متاحتان لفئة ` الpresence `.

#### `clientId`

يجب توفير خاصية `clientId` لجعل حضورك يعمل ، لأنه يستخدم معرف التطبيق الخاص بك لعرض شعاره وأصوله.

يمكنك الحصول عليه من [ صفحة التطبيقات ](https://discordapp.com/developers/applications).

## الطرق

### `getActivity()`

يرجع `presenceData` لما يعرضه الpresence.

### `setActivity(presenceData, Boolean)`

يعين نشاط ملفك الشخصي وفقا للبيانات المقدمة.

يتطلب العامل المتغير الأول واجهة `presenceData` للحصول على جميع المعلومات التي تريد عرضها في ملفك الشخصي.

العامل المتغير الثاني يحدد متي يكون الpresence يلعب شيئاً أو لا. استخدم دائماً `true` إذا كنت تقدم علامات زمنية في `presenceData`.

### `clearActivity()`

يقوم بمسح النشاط الحالي الخاص بك، وربط المفاتيح وعنوان العلامة.

### `setTrayTitle(String)`

> تعمل هذه الطريقة فقط على نظام تشغيل Mac OS. 
> 
> {.is-warning}

يعين عنوان العلامة على المينوبار.

### `getStrings(كائن)`

طريقة غير غريبة تسمح لك بالحصول على المقاطع المترجمة من الإضافة. يجب عليك توفير `Object` مع المفاتيح التي تكون مفتاح السلسلة،عندما `keyValue` هي قيمة السلسلة. يمكن العثور على مجموعة من المقاطع المترجمة باستخدام هذه النقطة النهائية: `https://api.premid.app/v2/langFIle/extension/en`

```typescript
// Returns `Playing` and `Paused` strings
// from extension.
strings = await presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
});

const playString = strings.play // result: Playing back
const pauseString = strings.pause // result: Playback paused
```

### `getPageletiable(String)`

يرجع متغير من الموقع إذا كان موجود.

```typescript
var pageVar = getPageletiable('.pageVar')؛
console.log(pageVar)؛ // سيؤدي هذا إلى تسجيل "Variable conten"
```

### `getExtensionVersion(Boolean)`
إرجاع إصدار الملحق الذي يستخدمه المستخدم.
```typescript
getExtensionVersion(onlyNumeric?: boolean): string | number;

var numeric = presence.getExtensionVersion();
console.log(numeric); // Will log 210
var version = presence.getExtensionVersion(false);
console.log(version); // Will log 2.1.0
```

### `getSetting(String)`
إرجاع قيمة الإعدادات.
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

## واجهة `presenceData`

ينصح باستخدام واجهة `presenceData` عندما تستخدم طريقة `setActivity()`.

هذه الواجهة تحتوي على المتغيرات التالية، جميعها اختيارية.

<table>
  <thead>
    <tr>
      <th style="text-align:left">متغير</th>
      <th style="text-align:left">الوصف</th>
      <th style="text-align:left">اكتب</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">التفاصيل</td>
      <td style="text-align:left">السطر الأول في الpresence الخاص بك، وعادة ما يستخدم كعنوان.</td>
      <td style="text-align:left"><code>نص</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">الحالة</td>
      <td style="text-align:left">السطر الثاني في الpresence الخاص بك.</td>
      <td style="text-align:left"><code>نص</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">startTimestamp</td>
      <td style="text-align:left">يحدد الوقت الحالي.<br>
        يستخدم إذا كنت ترغب في عرض مقدار <code>ساعات:minutes:seconds</code> بقيت.
          <br>يجب عليك تحويل وقتك إلى <code>timestamp</code> أو ستحصل على
          عد تنازلي خاطئ.
      </td>
      <td style="text-align:left"><code>عدد</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">endTimestamp</td>
      <td style="text-align:left">يحدد المدة الكاملة.
        <br>يستخدم إذا كنت ترغب في عرض كم<code>hours:minutes:seconds</code> متبقية.
          <br>يجب عليك تحويل وقتك إلى <code>timestamp</code> أو ستحصل على
          عد تنازلي خاطئ.
      </td>
      <td style="text-align:left"><code>عدد</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">largeImageKey</td>
      <td style="text-align:left">يحدد الشعار الخاص بالبرزنس.</td>
      <td style="text-align:left"><code>نص</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">smallImageKey</td>
      <td style="text-align:left">يحدد الرمز الصغير بجوار شعارال presence&apos;s.</td>
      <td style="text-align:left"><code>نص</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">smallImageText</td>
      <td style="text-align:left">Defines the text that will be shown to user when he will hover the small
        icon.</td>
      <td style="text-align:left"><code>نص</code>
      </td>
    </tr>
  </tbody>
</table>

```typescript
var presenceData: presenceData = {
    details: "My title",
    state: "My description",
    largeImageKey: "service_logo",
    smallImageKey: "small_service_icon",
    smallImageText: "You hovered me, and what now?",
    startTimestamp: 1564444631188,
    endTimestamp: 1564444634734
};
```

## Events

تتيح لك الأحداث الكشف عن بعض التغييرات أو المكالمات التي أجريت والتعامل معها. You can subscribe to events using the `on` method.

```typescript
presence.on("UpdateData", async () => {
    // Do something when data gets updated.
});
```

There are few events available:

#### `UpdateData`

This event is fired every time the presence is being updated.

#### `iFrameData`

Fired when data is received from iFrame script.
