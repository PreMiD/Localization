---
title: Presence Class
description: 모든 PreMid Presence 클래스
published: true
date: 2020-07-29T15:12:55.925Z
tags:
editor: markdown
---

# Presence Class

## 소개

`Presence` class는 Presence 개발 과정에 필요한 기본적인 것들을 포함하고 있어 Presence 제작에 큰 힘이 됩니다.

 Presence를 만들 때, `clientId`가 명시되어야 합니다.

```typescript
let presence = new Presence({
    clientId: "514271496134389561" // Example clientId
});
```

`Presence` 클래스를 위한 두가지 속성이 있습니다.

#### `clientId`

`clientId` property must be provided to make your presence work, because it uses your application id to display its logo and assets.

[여기에서](https://discordapp.com/developers/applications) 얻을 수 있습니다.

## Methods

### `getActivity()`

존재 표시 내용의 presenceData 객체를 반환한다.

### `setActivity(presenceData, Boolean)`

제공된 데이터에 따라 프로필 활동을 설정하십시오.

첫 번째 매개 변수를 사용하려면 프로파일에 표시할 모든 정보를 가져오기 위해 presenceData 인터페이스가 필요합니다.

두 번째 매개변수는 존재감이 무언가를 재생하고 있는지 여부를 정의한다. presenceData에 타임스탬프를 제공하는 경우 항상 true를 사용하십시오.

### `clearActivity()`

현재 활동, 키 바인딩 및 트레이 제목 지우세요.

### `setTrayTitle(String)`

> 이 방법은 맥 OS에서만 동작합니다. 
> 
> {.is-warning}

메뉴 모음에서 트레이 제목을 설정하십시오.

### `getStrings(Object)`

확장자에서 변환된 문자열을 가져올 수 있는 비동기식 방법입니다. You must provide `Object` with keys being the key for string, `keyValue` is the string value. A compilation of translated strings can be found using this endpoint: `https://api.premid.app/v2/langFIle/extension/en`

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
설정 값을 반환합니다.
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
      <th style="text-align:left">변수</th>
      <th style="text-align:left">설명</th>
      <th style="text-align:left">유형</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">details</td>
      <td style="text-align:left">헤더로 주로 쓰이는 presence의 첫번째 줄입니다.</td>
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
