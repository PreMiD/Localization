---
title: فئة الpresence
description: الصف الرئيسي لكل presnece PreMiD
published: صحيح
date: 2021-01-04T18:22:24.312Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:42.004Z
---

# فئة الpresence

## مقدمة

فئة `الpresence` مفيدة جدا لأن لديها الأساليب الأساسية التي نحتاج إليها لإنشاء presnce.

عند إنشاء صف، يجب تحديد ملكية `معرف العميل`.

```typescript
const presence = new Presence({
  clientId: "514271496134389561" // Example clientId
});
```

### الخصائص

هناك ثلاث خصائص متاحة لفئة `Presence`.

#### `clientId`

هذه الخاصية مطلوبة لجعل presence يعمل ، لأنه يستخدم معرف التطبيق الخاص بك لعرض شعاره. يمكنك الحصول عليه من [ صفحة التطبيقات ](https://discordapp.com/developers/applications).

#### `injectOnComplete`

When setting `injectOnComplete` to `true` the first `UpdateData` event for both the `presence.ts` and `iframe.ts` files will only be fired when the page has fully loaded.

#### `appMode`

When setting `appMode` to `true` and the presence were to send an empty `PresenceData`, the app will show the application (image and name) on the user's profile instead of nothing.

## الطرق

### `getActivity()`

Returns a `PresenceData` object of what the presence is displaying.

### `setActivity(PresenceData | Slideshow, Boolean)`

يعين نشاط ملفك الشخصي وفقا للبيانات المقدمة.

First parameter requires a [`PresenceData`](#presencedata-interface) interface or a [`Slideshow`](/dev/presence/slideshow) class to get all information that you want to display in your profile.

العامل المتغير الثاني يحدد متي يكون الpresence يلعب شيئاً أو لا. Always use `true` if you provide timestamps in `PresenceData`.

### `clearActivity()`

Clears your current activity and the tray title.

### `setTrayTitle(String)`

> تعمل هذه الطريقة فقط على نظام تشغيل Mac OS. 
> 
> {.is-warning}

يعين عنوان العلامة على المينوبار.

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

### `getStrings(كائن)`

طريقة غير غريبة تسمح لك بالحصول على المقاطع المترجمة من الإضافة.

يجب عليك توفير `Object` مع المفاتيح التي تكون مفتاح السلسلة،عندما `keyValue` هي قيمة السلسلة. A list of translated strings can be found at this endpoint: `https://api.premid.app/v2/langFile/presence/en/`

```typescript
// Returns `Playing` and `Paused` strings
// from extension.
const strings = await presence.getStrings({
  play: "general.playing",
  pause: "general.paused"
});

const playString = strings.play; // result: Playing
const pauseString = strings.pause; // result: Paused
```

Since v2.2.0 of the extension you can now get the strings of a certain language. This works well with the also newly added `multiLanguage` setting option.

We suggest you use the following code so it automatically updates the PresenceData if the user changes the selected language;

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

const playString = strings.play; // result: Playing
const pauseString = strings.pause; // result: Paused
```

### `getPageletiable(String)`

يرجع متغير من الموقع إذا كان موجود.

```typescript
const pageVar = getPageletiable(".pageVar");
console.log(pageVar); // This will log the "Variable content"
```

### `getExtensionVersion(Boolean)`

إرجاع إصدار الملحق الذي يستخدمه المستخدم.

```typescript
getExtensionVersion(onlyNumeric?: boolean): string | number;

const numeric = presence.getExtensionVersion();
console.log(numeric); // Will log 210
const version = presence.getExtensionVersion(false);
console.log(version); // Will log 2.1.0
```

### `getSetting(String)`

Returns value of setting.

```typescript
const setting = await presence.getSetting("pdexID"); //Replace pdexID with the id of the setting
console.log(setting); // This will log the value of the setting
```

### `hideSetting(String)`

Hides given setting.

```typescript
presence.hideSetting("pdexID"); // Replace pdexID with the id of the setting
```

### `showSetting(String)`

Shows given setting (Only works if the setting was already hidden).

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

**Note:** The given `String` in querySelector is an example.

### `getTimestamps(Number, Number)`

Returns 2 `snowflake` timestamps in an `Array` that can be used for `startTimestamp` and `endTimestamp`.

```typescript
const video = document.querySelector(".video"),
  timestamps = getTimestamps(video.currentTime, video.duration);
presenceData.startTimestamp = timestamps[0];
presenceData.endTimestamp = timestamps[1];
```

**Note:** The given `String` in querySelector is an example.

### `timestampFromFormat(String)`

Converts a string with format `HH:MM:SS` or `MM:SS` or `SS` into an integer (Does not return snowflake timestamp).

```typescript
const currentTime = timestampFromFormat(document.querySelector(".video-now").textContent),
  duration = timestampFromFormat(document.querySelector(".video-end").textContent),
  timestamps = getTimestamps(currentTime, duration);
presenceData.startTimestamp = timestamps[0];
presenceData.endTimestamp = timestamps[1];
```

**Note:** The given `String` in querySelector is an example.

## واجهة `presenceData`

The `PresenceData` interface is recommended to use when you are using the `setActivity()` method.

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
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">startTimestamp</td>
      <td style="text-align:left">يحدد الوقت الحالي.<br>
        يستخدم إذا كنت ترغب في عرض مقدار <code>ساعات:دقائق:ثوان</code> بقيت.
          <br>يجب عليك تحويل وقتك إلى <code>timestamp</code> أو ستحصل على
          عد تنازلي خاطئ.
      </td>
      <td style="text-align:left"><code>عدد</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">endTimestamp</td>
      <td style="text-align:left">يحدد المدة الكاملة.
        <br>يستخدم إذا كنت ترغب في عرض كم <code>ساعات:دقائق:ثوان</code> متبقية.
          <br>You must convert your time to <code>timestamp</code> or you will get a wrong
          countdown.
      </td>
      <td style="text-align:left"><code>Number</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">largeImageKey</td>
      <td style="text-align:left">يحدد الشعار الخاص بالpresence.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">smallImageKey</td>
      <td style="text-align:left">يحدد الرمز الصغير بجوار شعارال presence&apos;s.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">smallImageText</td>
      <td style="text-align:left">يحدد النص الذي سيتم عرضه للمستخدم عندما يكون على الرمز
        الصغير.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
  </tbody>
</table>

```typescript
const presenceData: PresenceData = {
  details: "My title",
  state: "My description",
  largeImageKey: "service_logo",
  smallImageKey: "small_service_icon",
  smallImageText: "You hovered me, and what now?",
  startTimestamp: 1564444631188,
  endTimestamp: 1564444634734
};
```

## أحداث

تتيح لك الأحداث الكشف عن بعض التغييرات أو المكالمات التي أجريت والتعامل معها. يمكنك الاشتراك في الأحداث باستخدام طريقة `on`.

```typescript
presence.on("UpdateData", async () => {
  // Do something when data gets updated.
});
```

هناك أحداث قليلة متاحة:

#### `UpdateData`

ويبدأ هذا الحدث في كل مرة يجري فيها تحديث الpresence.

#### `iFrameData`

تشتغل عند تلقي البيانات من النص البرمجي الى iFrame.
