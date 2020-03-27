---
title: Класс присутствия
description: Основной класс для каждого присутствия PreMiD
published: true
date: 2020-02-12T22:15:28.557Z
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

#### `mediaKeys`

Это свойство говорит нашему приложению зарегистрировать сочетания клавиш для мультимедиа и позволяет нам использовать `MediaKeys` события для класса `Presence`.

Это свойство не обязательно, но если вы хотите включить медиа-ключи, вы должны установить его на `true`.

**Все события mediaKey временно отключены!**

```typescript
let presence = new Presence({
    clientId: "514271496134389561",
    mediaKeys: true // Позволяет пользователям использовать медиа-ключи
});
```

## Методы

### `setActivity(presenceData, Boolean)`

Устанавливает активность профиля в соответствии с предоставленными данными.

Первый параметр требует интерфейс `присутствия` для получения всей информации, которую вы хотите отобразить в вашем профиле.

Второй параметр определяет, когда присутствует что-то или нет. Всегда используйте `true` , если вы предоставляете временные метки в `наличииДанных`.

### `clearActivity()`

Очищает вашу текущую активность, сочетания клавиш и заголовок лота.

### `setTrayTitle(String)`

> Этот метод работает только на Mac OS. 
> 
> {.is-warning}

Устанавливает заголовок лотка в меню Menubar.

### `getStrings(Объект)`

Позволяет получать переведенные строки из расширения. Вы должны предоставить `Объект` ключами как ключ для строки, `keyValue` это строковое значение. Вы можете найти некоторые строки, используя эту конечную точку: `https://api.premid.app/v2/langFIle/extension/ru`

```typescript
// Возвращает `Playing` и `Paused` строки
// из расширения.
strings = await presence.getStrings({
    play: "presence.playback.playing",
    пауза: "presence.playback.paused"
});
```

### `getPageLetiable(String)`

Возвращает переменную с веб-сайта, если она существует.

```typescript
var pageVar = getPageLetiable('.pageVar');
console.log(pageVar); // Это зарегистрирует "Переменное содержание"
```

## `presenceData` Интерфейс

При использовании метода `setActivity()` рекомендуется использовать интерфейс `presenceData`.

Этот интерфейс имеет следующие переменные, все они необязательны.

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
    подробности: "Мой титул",
    состояние: "Мое описание",
    largeImageKey: "service_logo",
    smallImageKey: "small_service_icon",
    smallImageText: "Вы меня подогнали, и что сейчас? ,
    startTimestamp: 1564444631188,
    endTimestamp: 1564444634734
};
```

## События

События позволяют обнаруживать и обрабатывать некоторые изменения или вызовы. Вы можете подписаться на события, используя метод `на`.

```typescript
presence.on("UpdateData", async () => {
    // Выполняйте что-то при обновлении данных.
});
```

Доступно несколько событий:

#### `Обновить данные`

Это событие запускается каждый раз при обновлении присутствия.

#### `MediaKeys` (отключено)

Ужас, когда пользователь использует клавиши мультимедиа на своей клавиатуре, [нажмите здесь](/dev/presence/class#mediakeys) для получения дополнительной информации о медиа-клавишах.

#### `iFrameData`

Исправлена ошибка получения данных из скрипта iFrame.