---
title: Presence Class
description: The main class for every PreMiD presence
published: true
date: 2020-07-29T15:12:55.925Z
tags:
editor: markdown
---

# Presence Class

## Introduction

The `Presence` class is very useful as it has basic methods that we need for creating a presence.

 When you create a class you must specify `clientId` property.

```typescript
let presence = new Presence({
    clientId: "514271496134389561" // Example clientId
});
```

There are two properties available for `Presence` class.

#### `clientId`

`clientId` property must be provided to make your presence work, because it uses your application id to display its logo and assets.

תוכל לקבל אותו בדף היישומים שלך

.</p> 



## שיטות



### `getActivity()`

מחזיר אובייקט ` presenceData ` של מה שהתוסף מציג.



### `setActivity(presenceData, Boolean)`

מגדיר את פעילות הפרופיל שלך על פי הנתונים שסופקו.

הפרמטר הראשון דורש ממשק `presenceData` כדי לקבל את כל המידע שאתה רוצה להציג בפרופיל שלך.

פרמטר שני מגדיר מתי התוסף משחק משהו או לא. השתמש תמיד ב- ` true ` אם אתה מספק חותמות זמן ב- `presenceData`.



### `clearActivity()`

מנקה את הפעילות הנוכחית שלך, את מקשי המקשים ואת כותרת המגש.



### `setTrayTitle(String)`



> שיטה זו פועלת רק ב- Mac OS. 
> 
> {.is-warning}

מגדיר את כותרת המגש בסרגל התפריטים.



### `getStrings(Object)`

שיטה אסינכרונית המאפשרת לך להשיג מחרוזות מתורגמות מהסיומת. עליך לספק `Object` כאשר המפתחות הם המפתח למחרוזת, ` keyValue ` הוא ערך המחרוזת. A compilation of translated strings can be found using this endpoint: `https://api.premid.app/v2/langFIle/extension/en`



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

Returns a variable from the website if it exists.



```typescript
var pageVar = getPageletiable('.pageVar');
console.log(pageVar); // This will log the "Variable content"
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




## `presenceData` Interface

The `presenceData` interface is recommended to use when you are using the `setActivity()` method.

This interface has following variables, all of them are optional.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Variable</th>
      <th style="text-align:left">תיאור</th>
      <th style="text-align:left">סוג</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">details</td>
      <td style="text-align:left">The first line in your presence, usually used as header.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">state</td>
      <td style="text-align:left">Second line in your presence.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">startTimestamp</td>
      <td style="text-align:left">Defines the current time.<br>
        Used if you want to display how much <code>hours:minutes:seconds</code> left.
          <br>You must convert your time to <code>timestamp</code> or you will get a wrong
          countdown.
      </td>
      <td style="text-align:left"><code>Number</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">endTimestamp</td>
      <td style="text-align:left">Defines the full duration.
        <br>Used if you want to display how much <code>hours:minutes:seconds</code> left.
          <br>You must convert your time to <code>timestamp</code> or you will get a wrong
          countdown.
      </td>
      <td style="text-align:left"><code>Number</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">largeImageKey</td>
      <td style="text-align:left">Defines the logo for the presence.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">smallImageKey</td>
      <td style="text-align:left">Defines the small icon next to presence&apos;s logo.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">smallImageText</td>
      <td style="text-align:left">Defines the text that will be shown to user when he will hover the small
        icon.</td>
      <td style="text-align:left"><code>String</code>
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

Events allow you to detect and handle some changes or calls that were made. You can subscribe to events using the `on` method.



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
