---
title: Класс присутствия
description: Основной класс для каждого присутствия PreMiD
published: true
date: 8 апреля 2020г. 19:33:34
tags:
---

# Класс присутствия

## Введение

Класс `Presence` очень полезен, так как он содержит базовые методы, необходимые для создания присутствия.

 При создании класса необходимо указать свойство `clientId`.

```typescript
let presence = new Presence({
    clientId: "514271496134389561" // Пример clientId
});
```

Доступны два свойства для класса `Presence`.

#### `clientId`

`clientId` должно быть предоставлено, чтобы ваше присутствие работало, так как оно использует ваш идентификатор приложения для отображения логотипа и активов.

Вы можете получить это на [странице приложений](https://discordapp.com/developers/applications).

## Методы

### `setActivity(presenceData, Boolean)`

Устанавливает активностью профиля с соответствии с предоставленными данными.

Первый параметр потребуется интерфейс `presenceData` для отрображения в вашем профиле.

Второй параметр определяет, что-нибудь presence играет или нет. В данном случае, если вы поставите временные метки в метода `presenceData` - всегда используйте `true`.

### `clearActivity()`

Очищает вашу текущую активность, привязку клавиш и заголовок.

### `setTrayTitle(String)`

> Этот метод работает только на Mac OS. 
> 
> {.is-warning}

Устанавливает заголовок в идентификатор.

### `getStrings(Object)`

Позволяет вам получить переведенные строки из расширения. You must provide `Object` with keys being the key for string, `keyValue` is the string value. Вы можете найти некоторые строки, используя эту конечную точку: `https://api.premid.app/v2/langFIle/extension/ru`

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

## `presenceData` Интерфейс

The `presenceData` interface is recommended to use when you are using the `setActivity()` method.

This interface has following variables, all of them are optional.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Переменная</th>
      <th style="text-align:left">Описание</th>
      <th style="text-align:left">Тип</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">подробнее</td>
      <td style="text-align:left">Первая строка в вашем присутствии, обычно используется в качестве заголовка.</td>
      <td style="text-align:left"><code>Строка</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">штат</td>
      <td style="text-align:left">Вторая линия вашего присутствия.</td>
      <td style="text-align:left"><code>Строка</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">startTimestamp</td>
      <td style="text-align:left">Определяет текущее время.<br>
        Используется если вы хотите отображать сколько <code>часов:минут:секунд</code> осталось.
          <br>Вы должны преобразовать ваше время в <code>временную метку</code> или вы получите неправильный обратный отсчет
.
      </td>
      <td style="text-align:left"><code>Номер</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">endTimestamp</td>
      <td style="text-align:left">Определяет полную продолжительность.
        <br>Используется если вы хотите отображать сколько <code>часов:минут:секунды</code> слева.
          <br>Вы должны преобразовать ваше время в <code>временную метку</code> или вы получите неправильный обратный отсчет
.
      </td>
      <td style="text-align:left"><code>Номер</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">largeImageKey</td>
      <td style="text-align:left">Определяет логотип для присутствия.</td>
      <td style="text-align:left"><code>Строка</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">маленький ключ изображения</td>
      <td style="text-align:left">Определяет маленький значок рядом с наличием&apos;с логотипа.</td>
      <td style="text-align:left"><code>Строка</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">маленькое изображениеТекст</td>
      <td style="text-align:left">Определяет текст, который будет показан пользователю, когда он наведет маленький значок
.</td>
      <td style="text-align:left"><code>Строка</code>
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

## События

Events allow you to detect and handle some changes or calls that were made. You can subscribe to events using the `on` method.

```typescript
presence.on("UpdateData", async () => {
    // Do something when data gets updated.
});
```

There are few events available:

#### `Обновить данные`

This event is fired every time the presence is being updated.

#### `iFrameData`

Fired when data is received from iFrame script.
