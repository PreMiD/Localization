---
title: 存在类
description: 每个PreMiD存在的主类
published: true
date: 2020-01-19T23:42:31.382Z
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

#### `mediaKeys`

此属性告诉我们的应用注册媒体密钥绑定的密钥，并允许我们在 `Presence` 类中使用 `MediaKeys` 事件。

此属性不需要，但如果您想要启用媒体密钥，您应该将其设置为 `true`。

**所有媒体密钥事件已暂时禁用！**

```typescript
let presence = new Presence(Windows
    clientId: "514271496134389561",
    mediaKeys: true // 允许用户使用媒体密钥
});
```

## 方法

### `setActivity(presenceData, Boolean)`

根据提供的数据设置您的个人资料活动。

第一个参数需要 `存在数据` 接口来获取您想要在配置文件中显示的所有信息。

第二个参数定义了存在是否在播放某些内容的时间。 如果您在 `presenceData` 中提供时间戳，总是使用 `true`。

### `clearActivity()`

清除您当前的活动、键盘绑定和托盘标题。

### `setTrayTitle(String)`

> 此方法仅适用于Mac OS。 
> 
> {.is-warning}

设置菜单栏上的托盘标题。

### `getStrings(对象)`

允许您从扩展中获得翻译字符串。 您必须提供 `对象` 密钥是字符串的密钥。 `关键值` 是字符串值。 您可以使用此端点找到一些字符串： `https://api.premid.app/v2/langFIle/extension/en`

```typescript
// 返回 `Playing` 和 `Paused` 字符串
// 从扩展名。
strings = 等候presence.getStrings(
    播放: "presence.playback.playing",
    暂停: "presence.playback.paused"
});
```

### `getPageLetiable(String)`

如果站点存在则返回一个变量。

```typescript
var pageVar = getPageLetiable('.pageVar');
console.log(pageVar); // 这将记录"变量内容"
```

## `presenceData` 接口

当您正在使用 `setActivity()` 方法时，推荐使用 `expresenceData` 接口。

此接口有以下变量，所有变量都是可选的。

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
var presenceData: presceData = Power
    details: "我的标题",
    状态：“我的描述”，
    大型ImageKey：“service_logo”，
    smallImageKey: "small_service_icon",
    smallimageText: "你挂了我, 现在是什么? ,
    startTimestamp: 1564444631188,
    endTimestamp: 1564444634734
}；
```

## 事件

事件允许您侦测和处理所做的一些更改或呼叫。 您可以使用</code> 方法上的 `订阅事件。</p>

<pre><code class="typescript">presence.on("UpdateData", async () => ,
    // 当数据更新时做点什么。
});
`</pre>

可用的事件不多：

#### `更新数据`

每次更新时都会触发此事件。

#### `MediaKey` (禁用)

当用户使用他的键盘上的媒体键时， [点击这里](/dev/presence/class#mediakeys) 获取更多关于媒体键的信息。

#### `iFrameData`

从 iFrame 脚本收到数据时触发。