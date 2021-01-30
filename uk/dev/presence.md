---
title: Розробка присутності
description:
published: true
date: 2021-01-30T10:59:26.700Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:02.843Z
---

> Усі присутності зберігаються тут: https://github.com/PreMiD/Presences 
> 
> {.is-info}

Версія `2.x` представляє [Крамницю присутностей](https://premid.app/store). Тепер користувачі можуть вручну додавати та видаляти улюблені присутності через користувацький інтерфейс [сайту](https://premid.app/).

> Before getting started, it is highly recommended that you look at our presence guidelines. 
> 
> {.is-warning}

- [Керівні принципи](https://docs.premid.app/dev/presence/guidelines)
{.links-list}

# Структура

Всі presence є закодовані в [TypeScript](https://www.typescriptlang.org/). [TypeScript](https://www.typescriptlang.org/) has some extra spicy type definitions over JavaScript, so fixing and identifying bugs is way easier.

## Установлення

1. Установіть[Git](https://git-scm.com/).
2. Установіть[Node](https://nodejs.org/en/) (приходить з [npm](https://www.npmjs.com/)).
3. Встановити [TypeScript](https://www.typescriptlang.org/index.html#download-links) (відкрити термінал і `npm встановити -g typescript`).

## Клонування проекту

1. Відкрийте термінал і введіть `git clone https://github.com/PreMiD/Presences`.
2. Виберіть теку вибору.
3. Відкрийте його у вашому редакторі коду.

## Створення папок і файлів

1. Go in the `websites` folder and then go into the folder with the first letter of the **name** (not an URL) of the service you want to support.
2. Створіть папку з **іменем** (не URL) сервісу, який потрібно підтримати.
3. Створіть `присутність,` і файл `tsconfig.json` всередині нього.
4. Створіть папку з ім'ям `dist` всередині.
5. Створіть файл `metadata.json` всередині теки `dist`.

## Заповнення в файлі tsconfig.json

Будь ласка, розмістіть наступний код всередині файлу `tsconfig.json`.

```typescript
{
  "extends": "../../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
}
```

Щоб дізнатися більше про конфігурацію TypeScript натисніть [тут](/dev/presence/tsconfig).

## Заповнення в файлі metadata.json

Ми зробили `metadata.json` творець файлу для ледачих привілей [тут](https://eggsy.xyz/projects/premid/mdcreator). Прочитайте цю тему, щоб ви знали, як вона працює.

```json
{
  "$schema": "https://schemas.premid.app/metadata/1.3",
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
      "icon": "FONTAWESOME ICON",
      "value": true
    },
    {
      "id": "ID",
      "if": {
        "ID": true
      },
      "title": "DISPLAY TITLE",
      "icon": "FONTAWESOME ICON",
      "value": "\"%song%\" by %artist%",
      "placeholder": "use %song% or %artist%"
    },
    {
      "id": "ID",
      "title": "DISPLAY TITLE",
      "icon": "FONTAWESOME ICON",
      "value": 0,
      "values": ["1", "2", "etc."]
    }
  ]
}
```

Будь ласка, скопіюйте код вище і помістіть його у файл `metadata.json`. Вам потрібно відредагувати значення властивостей. Зверніть увагу, що наступні властивості не є обов'язковими для ваших `метаданих. son` файл, якщо ви не плануєте ними користуватися ним, то нічого не потрібно видаляти.

- `contributors`
- `altnames`
- `regExp`
- `iframe`
- `iFrameRegExp`
- `readLogs`
- `settings`

**Пояснення деяких пресетів значень:**

<table>
  <thead>
    <tr>
      <th style="text-align:left">Змінна</th>
      <th style="text-align:left">Опис</th>
      <th style="text-align:left">Тип</th>
      <th style="text-align:left">За бажанням</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>author</b></td>
      <td style="text-align:left">Should contain an Object with the <code>name</code> and <code>id</code> of the presence developer. Ім'я - це ваше ім'я користувача Discord без ідентифікатора(#0000). Користувач <code>id</code> може бути скопійований з Discord, увімкнувши режим розробника
        і правою кнопкою миші в вашому профілі.</td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>Ні</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>contributors</b></td>
      <td style="text-align:left">Should contain an Object with the <code>name</code> and <code>id</code> of the presence developer. Ім'я - це ваше ім'я користувача Discord без ідентифікатора(#0000). Користувач <code>id</code> може бути скопійований з Discord, увімкнувши режим розробника
        і правою кнопкою миші в вашому профілі.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>Так</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>service</b></td>
      <td style="text-align:left">The title of the service that this presence supports.<br>
      (Must be the same name as the folder where everything is in)</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Ні</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>altnames</b></td>
      <td style="text-align:left">Be able to search the presence using an alternative name.<br>
      Meant to be used for presences that have different names in different languages (e.g. Pokémon and 포켓몬스터).<br>
      You can also use it for presences that have special characters so you don't have to type those (e.g. Pokémon and Pokemon).</td>
      <td style="text-align:left"><code>Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Так</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>description</b></td>
      <td style="text-align:left">Small description of the presence, you can use description of the service if you are out of ideas. Ваш опис має бути з ключових значень, які вказують на мову, а також опис цієї конкретної мови. Створюйте описи мовами <i>, яких ви знаєте</i>, наші перекладачі будуть вносити зміни до вашого файлу метаданих.</td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>Ні</code></td>
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
      <td style="text-align:left"><code>Ні</code></td>
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
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Так</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>version</b></td>
      <td style="text-align:left">Версія вашої присутності.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Ні</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>logo</b></td>
      <td style="text-align:left">Посилання на сервіс&apos;logotype.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Ні</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b></td>
      <td style="text-align:left">Посилання на мініатюру присутності.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Ні</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>color</b></td>
      <td style="text-align:left"><code>#HEX</code> значення. Ми рекомендуємо використовувати основний колір служби
        , який ваша присутність.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Ні</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>tags</b></td>
      <td style="text-align:left">Масив із мітками, вони допоможуть користувачам шукати вашу присутність на сайті.</td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Ні</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>category</b></td>
      <td style="text-align:left">Рядок, який використовується для представлення категорії, на яку падає присутність. Перегляньте припустимі обстеження <a href="https://docs.premid.app/dev/presence/metadata#presence-categories">тут</a>.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Ні</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b></td>
      <td style="text-align:left">Визначає, чи використовуються <code>iFrames</code>.</td>
      <td style="text-align:left"><code>Boolean</code></td>
      <td style="text-align:left"><code>Так</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b></td>
      <td style="text-align:left">Селектор регулярних виразів, який вибирає iframes для впровадження параметрів. Перегляньте regExp для отримання додаткової інформації.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Так</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>readLogs</b></td>
      <td style="text-align:left">Defines whether the extension should be reading logs.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Так</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>settings</b></td>
      <td style="text-align:left">An array of settings the user can change.<br>
      Read more about presence settings <a href="https://docs.premid.app/dev/presence/metadata#presence-settings">here</a>.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>Так</code></td>
    </tr>
  </tbody>
</table>

Ми зробили `metadata.json` творець файлу для ледачих привілей [тут](https://eggsy.xyz/projects/premid/mdcreator).

## Початок роботи

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
  /*UpdateData is always firing, and therefore should be used as your refresh cycle, or `tick`. Це називається кілька разів вдруге, де це можливо.

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

Ви можете скопіювати це в `присутності.ts` файл і редагувати значення. Установлення всіх значень зроблено всередині події updataData.

Для прикладів ми пропонуємо переглянути код присутності на кшталт 1337x або 9GAG. For more information about the `Presence` class click [here](/dev/presence/class).

Since v2.2.0 there are now Slideshows, this allows you to show multiple `PresenceData` interfaces on an interval, for more information click about the `Slideshow` class [here](/dev/presence/slideshow).

## Не можу отримати певні дані?!

Використання багатьох веб-сайтів [iframes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([Inlineframes](https://en.wikipedia.org/wiki/HTML_element#Frames)). Ці HTML-теги можуть містити декілька джерел, таких як відео. Але вони не мають значення кожного разу. Деякі приховані або просто не використовуються. Перевірте, чи можете ви видобути необхідну інформацію, без них перед непотрібною роботою.

1. Check for them in your browsers console (be sure that you are on the **Elements** tab).
2. Пошук (<kbd>CTRL</kbd>+<kbd>F</kbd> (Windows) або <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
3. Виконати `document.querySelectorAll("iframe")`.

Якщо ви виявили, що ваші дані знаходяться в iFrame вам необхідно виконати такі дії:

1. Створіть `iframe.ts` файл.
2. Встановіть iFrame на `true` у файлі метаданих.
3. Заповнення в iFrame файлі.

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

4. Збереження доступності файлу отримання даних з файлу iFrame файлу.

```typescript
presence.on("iFrameData", (data) => {
  iFrameVideo = data.video;
  currentTime = data.time;
});
```

**Примітка:** Це потрібно розміщувати за межами події по оновленню.

## Компіляція

Відкрийте консоль у вашій папці і наберіть `tsc -w` , щоб скомпілювати `presence.` в папку `/dist`.

# Завантаження присутності

1. Open the extension popup in the browser and hold the <kbd>Shift</kbd> button on your keyboard.
2. **Завантажте присутність** буде відображена в розділі присутності.
3. Натисніть на нього, поки тримаєте кнопку <kbd>Shift</kbd>.
4. Виберіть папку /dist для вашої присутності.

# Деякі корисні речі

## Швидке перезавантаження

Веб-сайт, з яким ви розробляєте, автоматично завантажується кожного разу, коли ви збережете файл у папку.

## Відлагодження

- Ви можете помістити `console.log("Test");` між вашим кодом і подивитися, чи ваша консоль браузеру дасть вам цей результат. Якщо так, то продовжуйте і спробуйте знову після наступної функції. Якщо не тоді, то зверху є помилка.
- If that doesn't help you either then ask a presence developer on our [Discord server](https://discord.premid.app/) for help.

# Файли пояснюються

- [Клас присутності](/dev/presence/class)
- [Slideshow Class](/dev/presence/slideshow)
- [iFrame клас](/dev/presence/iframe)
- [Файл метаданих](/dev/presence/metadata)
- [Налаштування TypeScript](/dev/presence/tsconfig ""){.links-list}
