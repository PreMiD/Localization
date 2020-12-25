---
title: Разработчик присутствия
description:
published: true
date: 2020-12-25T00:40:46.262Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:02.843Z
---

> Все присутствия теперь хранятся здесь: https://github.com/PreMiD/Presences 
> 
> {.is-info}

Версия `2.x` представляет [магазин присутствия](https://premid.app/store). Пользователи теперь имеют возможность вручную добавлять и удалять свои любимые присутствия через пользовательский интерфейс [сайта](https://premid.app/).

> Перед началом работы настоятельно рекомендуется ознакомиться с нашими правилами. 
> 
> {.is-warning}

- [Руководство](https://docs.premid.app/dev/presence/guidelines)
{.links-list}

# Структура

Все присутствие кодируется в [TypeScript](https://www.typescriptlang.org/). [TypeScript](https://www.typescriptlang.org/) имеет некоторые острые определения типов на JavaScript, так что исправление и идентификация ошибок проще.

## Установка

1. Установить [Иди](https://git-scm.com/).
2. Установить [узел](https://nodejs.org/en/) (поставляется с [npm](https://www.npmjs.com/)).
3. Установка [TypeScript](https://www.typescriptlang.org/index.html#download-links) (откройте терминал и введите `npm install -g typescript`).

## Клонирование проекта

1. Откройте терминал и введите `git clone https://github.com/PreMiD/Presences`.
2. Выберите папку по вашему выбору.
3. Откройте это в вашем редакторе кода.

## Создание папок и файлов

1. Go in the `websites` folder and then go into the folder with the first letter of the **name** (not an URL) of the service you want to support.
2. Создайте папку с **именем** (не URL) сервиса, который вы хотите поддерживать.
3. Создайте `presence.ts` и файл `tsconfig.json` внутри.
4. Создайте папку с именем `dist` внутри.
5. Создайте файл `metadata.json` внутри папки `dist`.

## Заполнение файла tsconfig.json

Пожалуйста, поместите следующий код в файл `tsconfig.json`.

```typescript
{
  "extends": "../../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
}
```

Чтобы узнать больше о настройке TypeScript, нажмите [здесь](/dev/presence/tsconfig).

## Заполнение файла metadata.json

Мы сделали `metadata.json` создатель файлов для ленивых [Вот](https://eggsy.xyz/projects/premid/mdcreator). Все еще предлагается прочитать это, чтобы вы знали, как это работает.

```json
{
  "$schema": "https://schemas.premid.app/metadata/1.2",
  "author": {
    "name": "USER",
    "id": "ID"
  },
  "contributors": [
    {
      "name": "USER",
      "id": "ID"
    }
  ],
  "service": "SERVICE",
  "altnames": ["SERVICE"],
  "description": {
    "en": "DESCRIPTION"
  },
  "url": "URL",
  "version": "VERSION",
  "logo": "URL",
  "thumbnail": "URL",
  "color": "#HEX000",
  "tags": ["TAG1", "TAG2"],
  "category": "CATEGORY",
  "regExp": "REGEXP",
  "iFrameRegExp": "REGEXP",
  "iframe": false,
  "readLogs": false,
  "settings": [
    {
      "id": "ID",
      "multiLanguage": true
    },
    {
      "id": "ID",
      "title": "DISPLAY TITLE",
      "icon": "FONTAWESOME FREE ICON",
      "value": true
    },
    {
      "id": "ID",
      "if": {
        "ID": true
      },
      "title": "DISPLAY TITLE",
      "icon": "FONTAWESOME FREE ICON",
      "value": "\"%song%\" by %artist%",
      "placeholder": "use %song% or %artist%"
    },
    {
      "id": "ID",
      "title": "DISPLAY TITLE",
      "icon": "FONTAWESOME FREE ICON",
      "value": 0,
      "values": ["1", "2", "etc."]
    }
  ]
}
```

Пожалуйста, скопируйте код выше и поместите его в файл `metadata.json`. Теперь нужно изменить значения свойств. Пожалуйста, обратите внимание, что следующие свойства необязательны для использования в метаданных `. son` файл, если вы не планируете его использовать.

- `contributors`
- `altnames`
- `regExp`
- `iframe`
- `iFrameRegExp`
- `readLogs`
- `settings`

**Уточнение некоторых конфигураций значений:**

<table>
  <thead>
    <tr>
      <th style="text-align:left">Переменная</th>
      <th style="text-align:left">Описание</th>
      <th style="text-align:left">Тип</th>
      <th style="text-align:left">Необязательно</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>author</b></td>
      <td style="text-align:left">Should contain an Object with the <code>name</code> and <code>id</code> of the presence developer. Имя пользователя Discord без идентификатора (#0000). Пользователь <code>id</code> может быть скопирован из Discord, включив разработчик
        режим и правый клик на вашем профиле.</td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>Нет</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>contributors</b></td>
      <td style="text-align:left">Should contain an Object with the <code>name</code> and <code>id</code> of the presence developer. Имя пользователя Discord без идентификатора (#0000). Пользователь <code>id</code> может быть скопирован из Discord, включив разработчик
        режим и правый клик на вашем профиле.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>Да</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>service</b></td>
      <td style="text-align:left">The title of the service that this presence supports.<br>
      (Must be the same name as the folder where everything is in)</td>
      <td style="text-align:left"><code>Строка</code></td>
      <td style="text-align:left"><code>Нет</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>altnames</b></td>
      <td style="text-align:left">Be able to search the presence using an alternative name.<br>
      Meant to be used for presences that have different names in different languages (e.g. Pokémon and 포켓몬스터).<br>
      You can also use it for presences that have special characters so you don't have to type those (e.g. Pokémon and Pokemon).</td>
      <td style="text-align:left"><code>Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Да</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>description</b></td>
      <td style="text-align:left">Small description of the presence, you can use description of the service if you are out of ideas. Ваше описание должно иметь значения пары ключей, которые указывают на язык, и описание на этом языке. Сделайте описания языков <i>, которые вы знаете</i>, наши переводчики внесут изменения в ваш файл метаданных.</td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>Нет</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b></td>
      <td style="text-align:left">URL of the service.<br><b>Example:</b><code>vk.com</code><br>
      <b>This URL must match the URL of the website as it will detect whether or not this is the website to inject the script to.</b><br> Do <b>NOT</b> add <code>https://</code> or <code>http://</code> inside of the URL nor a slash at the end:
      <code>https://premid.app/</code> -> <code>premid.app</code><br>
      <b>Note</b>: Some URLs may have <code>www.</code> or something else in front of their domain. Do <b>NOT</b> forget to add it!<br>
      You can add multiple URLs by doing the following:<br>
      <code>["URL1", "URL2", "ETC."]</code><br>
      You could also use regExp also known as Regex for this task, explained further below.</td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Нет</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b></td>
      <td style="text-align:left">A regular expression string used to match urls.<br>
      regExp or also known as Regex, can be used if a website has multiple subdomains.<br>
      You could use the following regExp for that:<br>
      <code>([a-z0-9]+)[.]domain[.]TLD"</code><br>
      TLD standing for Top Level Domain for axample: .com .net (but do not enter the dot).<br>
      <code>([a-z0-9]+)</code> means anything from a to z and from 0 to 9.<br>
      You can get a quick starter by watching this <a href="https://youtu.be/sXQxhojSdZM">video</a>.<br>
      You can test your regExp at <a href="https://regex101.com/">Regex101</a>.</td>
      <td style="text-align:left"><code>Строка</code></td>
      <td style="text-align:left"><code>Да</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>version</b></td>
      <td style="text-align:left">Версия вашего присутствия.</td>
      <td style="text-align:left"><code>Строка</code></td>
      <td style="text-align:left"><code>Нет</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>logo</b></td>
      <td style="text-align:left">Ссылка на сервис&apos;с логотипом</td>
      <td style="text-align:left"><code>Строка</code></td>
      <td style="text-align:left"><code>Нет</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b></td>
      <td style="text-align:left">Ссылка на миниатюру вашего присутствия.</td>
      <td style="text-align:left"><code>Строка</code></td>
      <td style="text-align:left"><code>Нет</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>color</b></td>
      <td style="text-align:left"><code>#HEX</code> значение. Мы рекомендуем использовать основной цвет сервиса
        , который поддерживает ваше присутствие.</td>
      <td style="text-align:left"><code>Строка</code></td>
      <td style="text-align:left"><code>Нет</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>tags</b></td>
      <td style="text-align:left">Массив меток, они помогут пользователям найти ваше присутствие на сайте.</td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Нет</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>category</b></td>
      <td style="text-align:left">Строка, используемая для представления категории присутствия. Смотрите действительные катергории <a href="https://docs. premid. app/dev/presence/metadata#presence-categories">здесь</a>.</td>
      <td style="text-align:left"><code>Строка</code></td>
      <td style="text-align:left"><code>Нет</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b></td>
      <td style="text-align:left">Defines whether <code>iFrames</code> are used.</td>
      <td style="text-align:left"><code>Boolean</code></td>
      <td style="text-align:left"><code>Да</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b></td>
      <td style="text-align:left">Регулярный селектор выражений, который выбирает iframes для inject into. Подробнее см. в regExp.</td>
      <td style="text-align:left"><code>Строка</code></td>
      <td style="text-align:left"><code>Да</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>readLogs</b></td>
      <td style="text-align:left">Defines whether the extension should be reading logs.</td>
      <td style="text-align:left"><code>Строка</code></td>
      <td style="text-align:left"><code>Да</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>settings</b></td>
      <td style="text-align:left">Массив настроек, которые пользователь может изменить.<br>
      Подробнее о настройках присутствия <a href="https://docs.premid.app/dev/presence/metadata#presence-settings">здесь</a>.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>Да</code></td>
    </tr>
  </tbody>
</table>

Мы сделали `metadata.json` создатель файлов для ленивых [Вот](https://eggsy.xyz/projects/premid/mdcreator).

## Начало работы

```typescript
const presence = new Presence({
    clientId: "000000000000000000" //The client ID of the Application created at https://discordapp.com/developers/applications
  }),
  strings = presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
    //You can use this to get translated strings in their browser language
  });

/*

function myOutsideHeavyLiftingFunction(){
    //Grab and process all your data here

    // element grabs //
    // api calls //
    // variable sets //
}

setInterval(myOutsideHeavyLiftingFunction, 10000);
//Run the function separate from the UpdateData event every 10 seconds to get and set the variables which UpdateData picks up

*/

presence.on("UpdateData", async () => {
  /*UpdateData is always firing, and therefore should be used as your refresh cycle, or `tick`. Это вызывается несколько раз в секунду, когда это возможно.

    It is recommended to set up another function outside of this event function which will change variable values and do the heavy lifting if you call data from an API.*/

  const presenceData: PresenceData = {
    largeImageKey:
      "key" /*The key (file name) of the Large Image on the presence. These are uploaded and named in the Rich Presence section of your application, called Art Assets*/,
    smallImageKey:
      "key" /*The key (file name) of the Large Image on the presence. These are uploaded and named in the Rich Presence section of your application, called Art Assets*/,
    smallImageText: "Some hover text", //The text which is displayed when hovering over the small image
    details: "Browsing Page Name", //The upper section of the presence text
    state: "Reading section A", //The lower section of the presence text
    startTimestamp: 1577232000, //The unix epoch timestamp for when to start counting from
    endTimestamp: 1577151472000 //If you want to show Time Left instead of Elapsed, this is the unix epoch timestamp at which the timer ends
  }; /*Optionally you can set a largeImageKey here and change the rest as variable subproperties, for example presenceSata.type = "blahblah"; type examples: details, state, etc.*/

  if (presenceData.details == null) {
    //This will fire if you do not set presence details
    presence.setTrayTitle(); //Clears the tray title for mac users
    presence.setActivity(); /*Update the presence with no data, therefore clearing it and making the large image the Discord Application icon, and the text the Discord Application name*/
  } else {
    //This will fire if you set presence details
    presence.setActivity(presenceData); //Update the presence with all the values from the presenceData object
  }
});
```

Вы можете скопировать это в `присутствие.` файл и изменить значения. Установка всех значений производится внутри события updataData.

Для примеров, мы предлагаем ознакомиться с кодом присутствия: 1337x или 9GAG. For more information about the `Presence` class click [here](/dev/presence/class).

Since v2.2.0 there are now Slideshows, this allows you to show multiple `PresenceData` interfaces on an interval, for more information click about the `Slideshow` class [here](/dev/presence/slideshow).

## Не удается получить определенные данные?!

Многие веб-сайты используют [iframes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([Inlineframes](https://en.wikipedia.org/wiki/HTML_element#Frames)). Эти html-теги могут содержать несколько источников, таких как видео. Но они не актуальны каждый раз. Некоторые скрыты или просто неактивно используемые. Проверьте, можно ли извлечь нужную информацию без необходимости выполнения ненужной работы.

1. Проверить их в консоли браузера (убедитесь, что вы находитесь на вкладке **Элементы**).
2. Поиск (<kbd>CTRL</kbd>+<kbd>F</kbd> (Windows) или <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
3. Выполнить `document.querySelectorAll("iframe")`.

Если вы обнаружили, что ваши данные находятся в iFrame вам необходимо сделать следующее:

1. Создайте файл `iframe.ts`.
2. Установите iFrame в `true` в вашем файле метаданных.
3. Заполнение файла iFrame.

```typescript
const iframe = new iFrame();
iframe.on("UpdateData", async () => {
  /*
  Get all the data you need out of the iFrame save them in variables
  and then sent them using iframe.send
  */
  iframe.send({
    //sending data
    video: video,
    time: video.duration
  });
});
```

4. Создание файла присутствия позволяет получать данные из файла iFrame .

```typescript
presence.on("iFrameData", (data) => {
  iFrameVideo = data.video;
  currentTime = data.time;
});
```

**Примечание:** Это должно быть расположено вне события updateData.

## Компиляция

Откройте консоль в вашей папке и введите `tsc -w` для компиляции `присутствия.ts` в папку `/dist`.

# Загрузка присутствия

1. Откройте всплывающее окно и удерживайте кнопку <kbd>Shift</kbd> на клавиатуре.
2. **Load Presence** появится в секции Prestions.
3. Нажмите на неё, пока вы все еще держите кнопку <kbd>Shift</kbd>.
4. Выберите папку /dist вашего присутствия.

# Полезные советы

## Горячая загрузка

Веб-сайт, на котором вы находитесь, автоматически перезагружается каждый раз, когда вы сохраняете файл в вашей папке.

## Отладка

- Вы можете поместить `console.log("Тест");` между вашим кодом и посмотреть, выводит ли консоль вашего браузера. Если да, то войдите и повторите попытку после следующей функции. Если нет, то произошла ошибка выше.
- If that doesn't help you either then ask a presence developer on our [Discord server](https://discord.premid.app/) for help.

# Больше информации

- [Класс присутствия](/dev/presence/class)
- [Slideshow Class](/dev/presence/slideshow)
- [Класс iFrame](/dev/presence/iframe)
- [Файл Метаданных](/dev/presence/metadata)
- [Настройка TypeScript](/dev/presence/tsconfig ""){.links-list}
