---
title: iFrame类
description:
published: true
date: 2020-01-19T23:42:33.008Z
tags:
---

# iFrame类
> 带有PreMiD的 iframe 系统有问题，可能有意料之外的行为，请谨慎使用。 
> 
> {.is-danger}

## 一. 导言

在某些场景中，您的存在可能需要访问 `iframe` 内的元素。

您在 `iframe 中写入的代码。` 文件被注入到页面上的每个iframe 中。

就像存在一样， `iframe` 有自己的类来自动更新数据。

```typescript
let iframe = new iFrame();

iframe.on("UpdateData", async () => {
    // Code goes here...
});
```

## 方法

### `发送(对象)`
向存在发送数据。 使用这个方法将会抛出一个 `iFrameworkData` 事件。

### `getUrl(String)`
返回 `iframe` 的 URL。

## 事件
在 `iframe`, 事件的工作方式类似于他们在 `的存在` 类中的工作方式。

```typescript
iframe.on("UpdateData", async () => {
    // Code goes here...
});
```

以下是所有事件的列表：

#### `更新数据`

每次更新 iframe 时都会触发此事件。

#### `MediaKey` (禁用)

当用户使用他的键盘上的媒体键时， [点击这里](/dev/presence/class#mediakeys) 获取更多关于媒体键的信息。