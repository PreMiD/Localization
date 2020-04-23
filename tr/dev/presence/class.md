---
title: 存在类
description: 每个PreMiD存在的主类
published: true
date: 2020-04-08T19:33:34.075Z
tags:
---

# 存在类

## 一. 导言

`Presence` 类非常有用，因为它具有我们创建一个存在所需要的基本方法。

 当你创建一个类时，你必须指定 `clientId` 属性。

```typescript
let presence = new Presence(Windows
    clientId: "514271496134389561" // 示例客户ID
});
```

有两个属性可用于 `Presence` 类。

#### `clientId`

`clientId` 属性必须提供才能使您的存在发挥作用，因为它使用您的应用程序id来显示它的标志和资产。

您可以在您的 [应用页面](https://discordapp.com/developers/applications) 获取。

## 方法

### `setActivity(presenceData, Boolean)`

Sets your profile activity according to provided data.

First parameter requires an `presenceData` interface to get all information that you want to display in your profile.

Second parameter defines when presence is playing something or not. Always use `true` if you provide timestamps in `presenceData`.

### `clearActivity()`

Clears your current activity, the keybinds and the tray title.

### `setTrayTitle(String)`

> 此方法仅适用于Mac OS。 
> 
> {.is-warning}

Sets the tray title on the Menubar.

### `getStrings(对象)`

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

## `presenceData` 接口

The `presenceData` interface is recommended to use when you are using the `setActivity()` method.

This interface has following variables, all of them are optional.

<table>
  <thead>
    <tr>
      <th style="text-align:left">变量</th>
      <th style="text-align:left">描述</th>
      <th style="text-align:left">类型</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">详细信息</td>
      <td style="text-align:left">您在场的第一条线通常用作头部。</td>
      <td style="text-align:left"><code>字符串</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">状态</td>
      <td style="text-align:left">你们在场的第二线。</td>
      <td style="text-align:left"><code>字符串</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">startTimestamp</td>
      <td style="text-align:left">定义当前时间。<br>
        如果您想要显示剩余多少 <code>小时:分钟:秒</code> 则使用。
          <br>您必须将时间转换为 <code>时间戳</code> 否则您将会遇到错误
          倒计时。
      </td>
      <td style="text-align:left"><code>号码</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">endTimestamp</td>
      <td style="text-align:left">定义整个持续时间。
        <br>如果您想要显示剩余多少 <code>小时:分钟:秒</code> 则使用。
          <br>您必须将时间转换为 <code>时间戳</code> 否则您将会遇到错误
          倒计时。
      </td>
      <td style="text-align:left"><code>号码</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">大尺寸的图像密钥</td>
      <td style="text-align:left">定义与会标识。</td>
      <td style="text-align:left"><code>字符串</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">小图像密钥</td>
      <td style="text-align:left">定义存在&apos;s 标志旁边的小图标。</td>
      <td style="text-align:left"><code>字符串</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">小图像文本</td>
      <td style="text-align:left">定义当用户悬停小的
        图标时将显示的文本。</td>
      <td style="text-align:left"><code>字符串</code>
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

## 事件

Events allow you to detect and handle some changes or calls that were made. You can subscribe to events using the `on` method.

```typescript
presence.on("UpdateData", async () => {
    // Do something when data gets updated.
});
```

There are few events available:

#### `更新数据`

This event is fired every time the presence is being updated.

#### `iFrameData`

Fired when data is received from iFrame script.
