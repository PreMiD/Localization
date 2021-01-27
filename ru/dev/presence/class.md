---
title: Класс присутствия
description: Основной класс для каждого присутствия PreMiD
published: true
date: 2021-01-04T18:22:24.312Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:42.004Z
---

# Класс Состояния

## Введение

Класс `Presence` очень полезен, так как он содержит базовые методы, необходимые для создания присутствия.

Когда Вы создаёте класс, Вам необходимо указать свойство `clientId`.

```typescript
const presence = new Presence({
  clientId: "514271496134389561" // Пример clientId
});
```

### Свойства

Доступны три свойства для класса `Presence`.

#### `clientId`

Это свойство необходимо для того, чтобы ваше присутствие работало, поскольку оно использует идентификатор вашего приложения для отображения своего логотипа и ресурсов. Вы можете получить это на свой [страница приложений](https://discordapp.com/developers/applications).

#### `injectOnComplete`

При установке на `injectOnComplete` в `true` первое событие `UpdateData` для обоих `присутствия. ,` и `iframe.ts` файлы будут запущены только при полной загрузке страницы.

#### `appMode`

При установке `appMode` на `true` и наличии для отправки пустой `PresenceData`, приложение будет показывать приложение (изображение и имя) в профиле пользователя, а не ничего.

## Методы

### `getActivity()`

Возвращает объект `PresenceData` о том, что отображает присутствие.

### `setActivity(PresenceData | Slideshow, Boolean)`

Устанавливает активностью профиля с соответствии с предоставленными данными.

Первый параметр требует интерфейс [`PresenceData`](#presencedata-interface) или класс [`Slideshow`](/dev/presence/slideshow) , чтобы получить всю информацию, которую вы хотите отобразить в вашем профиле.

Второй параметр определяет, что-нибудь presence играет или нет. Всегда используйте `true` , если вы предоставляете временные метки в `PresenceData`.

### `clearActivity()`

Очищает вашу текущую активность и заголовок в трее.

### `setTrayTitle(String)`

> Этот метод работает только на Mac OS. 
> 
> {.is-warning}

Устанавливает заголовок в идентификатор.

### `createSlideshow()`

Создает новый класс `слайд-шоу`.

```typescript
const slideshow = presence.createSlideshow();
```

Предлагается сделать это при создании экземпляра класса `Presence`:

```typescript
const presence = new Presence({
    clientId: "514271496134389561" // Пример clientId
  }),
  слайдшоу = presence.createSlideshow();
```

Вы можете найти документацию по `Slideshow` class [here](/dev/presence/slideshow).

### `getStrings(Object)`

Асинхронный метод, который позволяет извлекать переведенные строки из расширения.

Вы должны указывать ключами `Object` как ключ для строки, `keyValue` - строковое значение. С помощью этой конечной точки можно найти сборку переведенных строк: `https://api.premid.app/v2/langFile/presence/en`

```typescript
// Возвращает `Playing` и `Paused` строки
// из расширения.
const strings = await presence.getStrings({
  play: "general.playing",
  pause: "general.paused"
});

const playString = strings.play; // result: Играет
const pauseString = strings.pause; // result: Остановлен
```

Начиная с версии 2.2.0 расширения вы можете получить строки для определенного языка. Это хорошо работает с недавно добавленными `multiLanguage` вариант настройки.

Мы предлагаем вам использовать следующий код, чтобы он автоматически обновлял PresenceData, если пользователь меняет выбранный язык;

```typescript
// Интерфейс получаемых строк (хорош для качества кода и автозавершения).
interface LangStrings {
  play: string;
  pause: string;
}

async function getStrings(): Promise<LangStrings> {
  return presence.getStrings(
    {
      // Убедитесь, что строки, которые вы получаете, соответствуют вашему интерфейсу LangStrings.
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

//! Следующий код должен быть внутри события updateData!
// ID — это идентификатор многоязычных параметров.
const newLang = await presence.getSetting("ID");
if (oldLang !== newLang) {
  oldLang = newLang;
  strings = getStrings();
}

const playString = strings.play; // result: Играет
const pauseString = strings.pause; // result: Остановлен
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

### `getLogs()`

Возвращает журналы консоли веб-сайтов.

```typescript
const logs = await presence.getLogs();
console.log(logs); // Журнал последних 100 логов (в массиве).
```

**Note:** Requires `readLogs` to be `true` in the `metadata.json` file.

### `info(String)`

Выводит данное сообщение в консоли в формате, основанном на присутствии в стиле `info`.

```typescript
presence.info("Test") // Это протоколирует "test" в правильном стиле.
```

### `success(String)`

Выводит данное сообщение в консоли в формате, основанном на присутствии в стиле `info`.

```typescript
presence.success("Test") // Это протоколирует "test" в правильном стиле.
```

### `error(String)`

Выводит данное сообщение в консоли в формате, основанном на присутствии в стиле `info`.

```typescript
presence.error("Test") // Это протоколирует "test" в правильном стиле.
```

### `getTimestampsfromMedia(HTMLMediaElement)`

Возвращает 2 `снежинку` метки времени в массиве `` , которые могут быть использованы для `startTimestamp` и `endTimamp`.

```typescript
const timestamps = getTimestampsfromMedia(document.querySelector(".video"));
presenceData.startTimestamp = timestamps[0];
presenceData.endTimestamp = timestamps[1];
```

**Заметка:** Данный `String` в querySelector является примером.

### `getTimestamps(Number, Number)`

Возвращает 2 `снежинку` метки времени в массиве ``, которые могут быть использованы для `startTimestamp` и `endTimamp`.

```typescript
const video = document.querySelector(".video"),
  timestamps = getTimestamps(video.currentTime, video.duration);
presenceData.startTimestamp = timestamps[0];
presenceData.endTimestamp = timestamps[1];
```

**Заметка:** Данный `String` в querySelector является примером.

### `timestampFromFormat(String)`

Преобразует строку в формат `HH:MM:SS` или `MM:SS` или `SS` в целое (не возвращает snowflake timestamp).

```typescript
const currentTime = timestampFromFormat(document.querySelector(".video-now").textContent),
  duration = timestampFromFormat(document.querySelector(".video-end").textContent),
  timestamps = getTimestamps(currentTime, duration);
presenceData.startTimestamp = timestamps[0];
presenceData.endTimestamp = timestamps[1];
```

**Заметка:** Данный `String` в querySelector является примером.

## `PresenceData` Интерфейс

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
      <td style="text-align:left"><code>String</code>
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
      <td style="text-align:left"><code>Number</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">largeImageKey</td>
      <td style="text-align:left">Определяет логотип для присутствия.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">маленький ключ изображения</td>
      <td style="text-align:left">Определяет маленький значок рядом с наличием&apos;с логотипа.</td>
      <td style="text-align:left"><code>String</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">маленькое изображениеТекст</td>
      <td style="text-align:left">Определяет текст, который будет показан пользователю, когда он наведет маленький значок
.</td>
      <td style="text-align:left"><code>String</code>
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
presence.on("Данные обновить", асинхронный () => {
    // Выполняйте что-то, когда данные обновляются.
});
```

Доступно несколько событие:

#### `UpdateData`

Это событие запускается каждый раз, когда присутствие обновляется.

#### `iFrameData`

Исправлена ошибка получения данных из скрипта iFrame.
