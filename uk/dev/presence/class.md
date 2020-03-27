---
title: Клас присутності
description: Основний клас для кожної присутності PreMiD
published: true
date: 2020-02-12T22:33:53.735Z
tags: 
---

# Клас присутності

## Вступ

Клас `присутність` є дуже корисним, оскільки в ньому є основні методи, які нам потрібні для створення виразу.

 Якщо ви створите предмет, вам необхідно вказати `clientId` властивість.

```typescript
let presence = new Presence({
    clientId: "514271496134389561" // Приклад clientId
});
```

There are two properties available for `Presence` class.

#### `clientId`

`параметр clientId` повинен бути показаний, щоб ваша присутність працювала, оскільки він використовує ідентифікатор вашого застосунку, щоб відобразити його логотип та активи.

Ви можете отримати це на сторінці [програм](https://discordapp.com/developers/applications).

#### `mediaKeys`

Ця властивість повідомляє нашій програмі зареєструвати прив'язки клавіш для мультимедійних клавіш і дозволяє нам використовувати `MediaKeys` подію для класу `Presence`.

Ця властивість не є необхідною, але якщо ви хочете увімкнути медіа ключі, вам слід встановити її на `true`.

**Всі події префіксу тимчасово відключені!**

```typescript
let presence = new Presence({
    clientId: "514271496134389561",
    mediaKeys: true // Дозволяє користувачам використовувати медіа ключі
});
```

## Методи

### `setActivity(presenceData, Boolean)`

Встановлює активність вашого профілю відповідно до наданих даних.

Перший параметр вимагає інтерфейсу `presenceData` , щоб отримати всю інформацію, яку ви хочете відобразити у вашому профілі.

Другий параметр визначає, коли присутність щось грає. Завжди використовуйте `true` , якщо ви надаєте часові мітки в `presenceData`.

### `clearActivity()`

Очищує вашу поточну діяльність, клавіатурні клавіші та заголовок трею.

### `setTrayTitle(String)`

> Цей метод працює тільки на Mac OS. 
> 
> {.is-warning}

Встановлює заголовок лотка для меню.

### `getStrings(Об'єкт)`

Дозволяє отримати перекладені рядки з розширення. Для рядка вам потрібно вказати `Object` за допомогою клавіш для рядка, `keyValue` - значення рядка. Ви можете знайти деякі з рядків, використовуючи цю кінцеву точку: `https://api.premid.app/v2/langFIle/extension/en`

```typescript
// Повертає `Playing` і `Paused` рядків
// з розширення.
strings = await presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
});
```

### `getPageLetiable(рядок)`

Повертає змінну з веб-сайту, якщо вона існує.

```typescript
var pageVar = getPageLetiable('.pageVar');
console.log(page); // Це закриє "Змінний вміст"
```

## `презентація даних` Інтерфейс

Інтерфейс `presenceData` рекомендується використовувати під час використання методу `setActivity()`.

Цей інтерфейс має наступні змінні, усі вони є необов'язковими.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Змінна</th>
      <th style="text-align:left">Опис</th>
      <th style="text-align:left">Тип</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">подробиці</td>
      <td style="text-align:left">Перший рядок присутності, зазвичай використовується як заголовок.</td>
      <td style="text-align:left"><code>Рядок</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">держава</td>
      <td style="text-align:left">Другий рядок у вашій присутності.</td>
      <td style="text-align:left"><code>Рядок</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">startTimestamp</td>
      <td style="text-align:left">Визначає поточний час.<br>
        Використовувати, якщо потрібно вивести на екран скільки <code>годин:секунд:секунд</code>.
          <br>Ви повинні конвертувати час на <code>позначку</code> або ви отримаєте неправильний відлік
.
      </td>
      <td style="text-align:left"><code>Номер</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">endTimestamp</td>
      <td style="text-align:left">Визначає всю тривалість.
        <br>Використовується для відображення скільки <code>годин:хвилин:секунд</code>.
          <br>Ви повинні конвертувати час на <code>позначку</code> або ви отримаєте неправильний відлік
.
      </td>
      <td style="text-align:left"><code>Номер</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">largeImageKey</td>
      <td style="text-align:left">Визначає логотип для присутності.</td>
      <td style="text-align:left"><code>Рядок</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">маленький ключ зображення</td>
      <td style="text-align:left">Визначає маленьку іконку поруч з присутністю&apos;s логотип.</td>
      <td style="text-align:left"><code>Рядок</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">smallImageText</td>
      <td style="text-align:left">Визначає текст, який буде відображатися користувачеві, коли він буде наводитись до малої піктограми
.</td>
      <td style="text-align:left"><code>Рядок</code>
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

## Події

Події дозволяють виявити і обробляти деякі зміни, або виклики, які були зроблені. Ви можете підписатись на події, використовуючи `на` метод.

```typescript
presence.on("UpdateData", async () => {
    // Зробіть щось, коли дані оновлюються.
});
```

Є мало доступних подій:

#### `Оновлення даних`

Ця подія вистрілюється щоразу, коли присутність оновлюється.

#### `MediaKeys` (вимкнено)

Застосовується, коли користувач використовує медіа ключі на своїй клавіатурі, [натисніть тут](/dev/presence/class#mediakeys) , щоб отримати більше інформації про медіа ключі.

#### `iFrameData`

Вимикається при отриманні даних з iFrame script.