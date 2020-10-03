---
title: Класс присутствия
description: Основной класс для каждого присутствия PreMiD
published: true
date: 2020-07-29T15:12:55.925Z
tags:
editor: markdown
---

# Класс Состояния

## Введение

Класс `Presence` очень полезен, так как он содержит базовые методы, необходимые для создания присутствия.

 Когда Вы создаёте класс, Вам необходимо указать свойство `clientId`.

```typescript
let presence = new Presence({
    clientId: "514271496134389561" // Пример clientId
});
```

Есть два свойства, доступных для класса `Presence`.

#### `clientId`

`clientId` должно быть предоставлено, чтобы ваше presence работало, так как оно использует ваш идентификатор приложения для отображения логотипа и активов.

Вы можете получить это на [странице приложений](https://discordapp.com/developers/applications).

## Методы

### `getActivity()`

Возвращает объект `presenceData` о том, что отображается в presence.

### `setActivity(presenceData, Boolean)`

Устанавливает активностью профиля с соответствии с предоставленными данными.

Первый параметр требует интерфейс `presenceData` для получения всей информации, которую вы хотите отобразить в вашем профиле.

Второй параметр определяет, когда presence играет что-то или нет. В данном случае, если вы поставите временные метки в метода `presenceData` - всегда используйте `true`.

### `clearActivity()`

Очищает вашу текущую активность, привязку клавиш и заголовок.

### `setTrayTitle(String)`

> Этот метод работает только на Mac OS. 
> 
> {.is-warning}

Устанавливает заголовок в идентификатор.

### `getStrings(Object)`

An asyncronous method that allows you to get translated strings from extension. Вы должны указывать ключами `Object` как ключ для строки, `keyValue` - строковое значение. A compilation of translated strings can be found using this endpoint: `https://api.premid.app/v2/langFIle/extension/en`

```typescript
// Возвращает `Playing` и `Paused` строки
// из расширения.
strings = await presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
});

const playString = strings.play // result: Playing back
const pauseString = strings.pause // result: Playback paused
```

### `getPageletiable(Строка)`

Возвращает переменную с сайта, если она существует.

```typescript
var pageVar = getPageletiable('.pageVar');
console.log(pageVar); // Это войдёт в "Переменный контент"
```

### `getExtensionVersion(Boolean)`
Возвращает версию расширения, которое использует пользователь.
```typescript
getExtensionVersion(onlyNumeric?: boolean): string | number;

var numeric = presence.getExtensionVersion();
console.log(numeric); // Сообщается номера "210" в логи
var version = presence.getExtensionVersion(false);
console.log(version); // Сообщается версии "2.1.0" в логи
```

### `getSetting(String)`
Возвращает значение настройки.
```typescript
var setting = await presence.getSetting("pdexID"); // Заменить pdexID идентификатором параметра
console.log(setting); // Сообщается установка в логи
```

### `hideSetting(String)`
Скрывает указанные настройки.
```typescript
presence.hideSetting("pdexID"); // Заменить pdexID идентификатором настройки
```

### `showSetting(String)`
Показывают данные настройки (работает только если настройка была скрыта).
```typescript
presence.showSetting("pdexID"); // Заменить pdexID идентификатором настройки
```

## `presenceData` Интерфейс

При использовании метода `setActivity()` рекомендуется использовать интерфейса `presenceData`.

Этот интерфейс содержит переменные, все они необязательными.

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
      <td style="text-align:left">подробности</td>
      <td style="text-align:left">Первая строка в вашем presence, обычно используется в качестве заголовка.</td>
      <td style="text-align:left"><code>Строка</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">статус</td>
      <td style="text-align:left">Вторая линия вашего presence.</td>
      <td style="text-align:left"><code>Строка</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">startTimestamp</td>
      <td style="text-align:left">Определяет текущее время.<br>
        Используется, если вы хотите отобразить, сколько <code>часов:минут:секунд</code> осталось.
          <br>Вы должны преобразовать ваше время в <code>временную метку</code> или вы получите неправильный обратный отсчёт.
      </td>
      <td style="text-align:left"><code>Номер</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">endTimestamp</td>
      <td style="text-align:left">Определяет полную продолжительность.
        <br>Используется если вы хотите отображать сколько <code>часов:минут:секунды</code> слева.
          <br>Вы должны преобразовать ваше время в <code>временную метку</code> или вы получите неправильный обратный отсчёт.
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
    details: "Мой заголовок",
    state: "Мои описание",
    largeImageKey: "service_logo",
    smallImageKey: "small_service_icon",
    smallImageText: "Вы меня подошли, а сейчас?",
    startTimestamp: 1564444631188,
    endTimestamp: 1564444634734
};
```

## Событие

События позволяют вам обнаруживать и обрабатывать некоторые изменения или вызовы. Вы можете подписаться на события с помощью метода `on`.

```typescript
presence.on("UpdateData", async () => {
    // Выполняйте что-то, когда данные обновляются.
});
```

Доступно несколько событие:

#### `Обновить данные`

Это событие запускается каждый раз, когда присутствие обновляется.

#### `iFrameData`

Исправлена ошибка получения данных из скрипта iFrame.
