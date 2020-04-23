---
title: Розробка присутності
description:
published: true
date: 2020-04-23T23:25:59.632Z
tags:
---

> Усі присутності зберігаються тут: https://github.com/PreMiD/Presences 
> 
> {.is-info}

Версія `2.x` представляє [Крамницю присутностей](https://premid.app/store). Тепер користувачі можуть вручну додавати та видаляти улюблені присутності через користувацький інтерфейс [сайту](https://premid.app/).

# Керівні принципи
> If you do not follow all of the guidelines, a `Presence Verifier` will request the proper changes or your pull request may even be closed under certain circumstances. 
> 
> {.is-warning}

> When you make pull requests about adding or modifying existing presences, you **MUST** include a screenshot. However, modifications to a presence's `metadata.json` or `tsconfig.json` files do not require a screenshot. *Your screenshot MUST be uploaded directly to GitHub with the pull request, do not use third-party image sharing websites.* 
> 
> {.is-warning}

When publishing presences to this GitHub, we require you to follow a set of guidelines. To some, these strict rules may seem harsh. However, the implementation of these rulesets will keep our servers from running into any issues.

## Створення
> The code you write MUST be *well-written* and MUST be *readable*. `DeepScan` on GitHub will report code quality issues to the `Presence Verification Team`. We recommend that your fork is up to date when you make pull requests, it will help limit false positives. 
> 
> {.is-warning}

- The pull request **MUST** be complete, you need to have a proper file structure, drafts are **NOT** allowed. Including the `dist` folder, `presence.js` file, and `metadata.json` file, which is represented in the following example schema:
```bash
presence
└── dist
    ├── metadata.json
    └── presence.js
```
or if you're using TypeScript and `iframe` (the max you could reach) :
```bash
presence
├── dist
│   ├── metadata.json
│   ├── presence.js
│   └── iframe.js
├── presence.ts
├── iframe.ts
└── tsconfig.json
```

Перш ніж почати працювати над присутністю, майте на увазі такий список.
- The presence **MUST** be related to the website you have chosen.
- The presence **MUST NOT** be of any illegal websites. Це включають стресори, наркотики, дитяче порно тощо...
- The presence metadata **MUST** have well-written content, including valid titles, and descriptions.
- The media you include (icon/thumbnail) **MUST** be related to the website and should be understandable in terms of size and quality.
- The file structure **MUST** be clean and managed, do not have random files that provide nothing to the presence's function.
- The presence **MUST NOT** have any malicious intentions. До них відносяться особисті дані, що негативно впливають на поведінку вебсайту тощо...
- Якщо ви проектуєте присутність веб-сайту і сайт зміниться в майбутньому, то ви **ARE** відповідає за оновлення присутності знову. If you do not fix it within 7 days, other presence developers are allowed to **OVERWRITE** your presence to comply with the changes.
- The presence **MUST** be tested before publishing to confirm that everything works as expected.
- Your presence **MUST** have SFW images and descriptions regardless if it is NSFW or not. If your presence is about an NSFW website, please add the `nsfw` tag to your metadata.
- Your presence **CANNOT** manipulate local storage on the browser.
- Your presence may use cookies to store data. All data stored by the presence should be prefixed with `pmd_`.
- Tags should be used as alternate names whenever possible, shortened versions must be included as well (e.g. if an Amazon presence had included AWS support it would have its tags like : "amazon-web-services" and "aws"). This is not required if it's not possible, but will make it easier for users when searching.
- Tags must not include any spaces, slashes, single/double quotation marks, unicode characters and should always be lowercase.

## Модифікація
> You MUST change the version in the **metadata** to be a higher value from previous version when making changes to either the **presence.js** or **metadata.json**. 
> 
> {.is-warning}

У деяких ситуаціях присутність може поводитися несподівано або може використати деякі незначні зміни для покращення свого функціоналу. Here is a compiled list that you **MUST** follow to modify presences.
- You are not allowed rewrite a presence or change it's author. If the presence author was banned from the official server or hasn't made required changes in a 7 day period, you may contact a PreMiD `Presence Verifier` to see if you are applicable to rewrite the presence of choice.
- If you make modifications to a presence and change at least a **QUARTER** of the presence's codebase, you are allowed to add yourself as a contributor. Contact a `Presence Verifier` for more information about this subject.
- Переконайтеся, що зміни корисні. Це може включати виправлення помилок (код та tyпо), доповнень (описи і теги), і т.д... Do not change images if they are not outdated and have a decent resolution.
- Підтвердьте ваші зміни перед публікацією. Не створюйте запити на злиття, не знаючи результатів ваших змін.

# Верифікація

> If you need to contact someone, please use our official Discord server. All `Presence Verifiers` will have a unique role on their profile.

For your presence to reach the stores, it MUST go through a process on GitHub to confirm that it works as expected. These are a few things to look out for when making your pull request.

1. Потрібні дві перевірки, щоб переконатися, що ваша присутність відповідає стандартам. Якщо трапиться зміна ваших клієнтів, докладіть правильних зусиль для того, щоб виправити це, або ж додавання не буде.
2. If we request changes and your pull request exceeds **7 days of inactivity** without making the necessary ones, we'll be forced to close it.
3. You are allowed to take screenshots of changes made with the help of another user, and you are allowed to stitch screenshots for viewing pleasure. (напр. її автор якщо ви не зможете отримати до нього доступ з будь-якої причини).
4. If it is an update or patch, the screenshot **MUST** show the new additions working, not any old features from previous pull requests.
5. Надані знімки мають бути справжні, а не відредаговані.
6. Будь-який внесений код, що об'єднується з цим репозиторієм, буде ліцензований за **Mozilla Public License 2.0**.
7. Presences for free domains or hosts (e.g. .TK, [all free Freenom domains], .RF.GD, etc...) are **NOT** allowed at all, exceptions can be made if a proof is presented showing that they paid for the domain.
8. The `smallImageKey` and `smallImageText` fields are intended to provide additional/secondary context (such as "playing"/"paused" for video sites, "browsing" for regular sites and other cases) not to promote Discord profiles or anything unrelated to PreMiD.
9. Вимоги для логотипів - 1:1 (Квадрат) в 512px, однак ескізи, однак, має бути [широкі рекламні картки](https://i.imgur.com/3QfIc5v.jpg) або просто [знятки екрану](https://i.imgur.com/OAcBmwW.png), якщо перше недоступне.
10. Presences should at least have 1 tag, this is a requirement by design and may be optional in the future.
11. The `url` field **MUST NOT** include `http://` or `https://`, neither the parameters (e.g. a presence for `https://www.google.com/search?gws_rd=ssl` will only have `www.google.com` in the `url` field).
12. Описи і теги повинні завжди бути в масивах, навіть якщо це тільки один елемент. Однак поле `url` має бути лише рядком, якщо це один домен.
13. Нестабільні сайти, що постійно змінюють APIs/домени, випадкові HTML-елементи або просто присутні у великому розробці не допустимі і будуть видалені з магазину.

Після того, як усі правильні відгуки були досягнуті, ваш запит на злиття буде злитий з магазином.

# Структура (TypeScript)
Ви можете вибрати, якщо хочете запрограмувати свій присутність з [JavaScript](https://www.javascript.com/) або  [TypeScript](https://www.typescriptlang.org/). [TypeScript](https://www.typescriptlang.org/) має додаткові визначення розумного типу, тому виправляти і виявляти помилки значно простіше. Якщо ви просто хочете використовувати [JavaScript](https://www.javascript.com/) , то можете пропустити на [Структуру (JavaScript)](/dev/presence#structure-javascript).

## Установлення
1. Установіть [Git](https://git-scm.com/).
2. Установіть [Node](https://nodejs.org/en/) (його можна виявити за допомогою з [npm](https://www.npmjs.com/)).
3. Встановити [TypeScript](https://www.typescriptlang.org/index.html#download-links) (відкрити термінал і `npm встановити -g typescript`).

## Клонування проекту
1. Відкрийте термінал і введіть `git clone https://github.com/PreMiD/Presences`.
2. Виберіть бажану теку.
3. Відкрийте його у вашому редакторі коду.

## Створення папок і файлів

1. Створіть папку з **іменем** (не URL) сервісу, який потрібно підтримати.
2. Створіть `присутність,` і файл `tsconfig.json` всередині нього.
3. Створіть папку з ім'ям `dist` всередині.
4. Створіть файл `metadata.json` всередині теки `dist`.

## Заповнення в файлі tsconfig.json
Будь ласка, розмістіть наступний код всередині файлу `tsconfig.json`.
```javascript
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }

```
Щоб дізнатися більше про конфігурацію TypeScript натисніть [тут](/dev/presence/tsconfig).

## Заповнення в файлі metadata.json

Натисніть [тут](/dev/presence#filling-in-the-metadatajson-file-2) , щоб побачити як його заповнити. Ви зможете легко клікнути в нижній частині пояснення.

Ми зробили `metadata.json` творець файлу для ледачих привілей [тут](https://eggsy.codes/projects/premid/mdcreator).

## Початок роботи

```javascript
var presence = new Presence({
    clientId: "000000000000000000" //The client ID of the Application created at https://discordapp.com/developers/applications
}),

strings = presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
    //You can use this to get translated strings
});

/*

function myOutsideHeavyLiftingFunction(){
    //Grab and process all your data here

    // element grabs //
    // api calls //
    // variable sets //
}

setInterval(10000, myOutsideHeavyLiftingFunction); 
//Run the function seperate from the UpdateData event every 10 seconds to get and set the variables which UpdateData picks up

*/


presence.on("UpdateData", async () => {
    /*UpdateData is always firing, and therefore should be used as your refresh cycle, or `tick`. Це називається кілька разів вдруге, де це можливо.

    Рекомендується встановити іншу функцію за межами цієї функції події, яка змінить значення змінної і зробить важкий підйом, якщо ви викликаєте дані з API. /

    var presenceData = {
        largeImageKey: "key", /*Ключ (назва файлу) великого зображення присутності. Вони завантажені та названі у розділі Rich Presence у вашому додатку, під назвою Art Assets*/
        smallImageKey: "key", /*Ключ (ім'я файла) великого зображення на присутності. Вони завантажені та названі у розділі Rich Presence у вашому додатку, називається Art Assets*/
        smallImageText: "Деякий текст наведення", ///Текст, який відображається при наведенні над маленьким зображенням
        , детально: "Назва сторінки перегляду", ///The верхня частина тексту
        стану: "Розділ читання А", ///Нижня частина початкового періоду присутності
        startTimestamp: 1577232000, ///unix епічна позначка часу, коли почати раховувати від
        endTimestamp: 1577151472000 ///Якщо Ви хочете показати час зліва замість Минулого, це епічна мітка часу unix у якій таймер закінчується
    }; /*При бажанні ви можете встановити largeImageKey тут і змінити решту, як змінні підпараметри, наприклад, presenceSata. ype = "blahblah"; навести тип: деталі, стан і т.д.*/

    якщо (присутні дані). etails == null) {
        ///Це буде активувати, якщо ви не вказуєте тут інформацію про присутність
        . etTrayTitle(); //Clears заголовок лотка для присутності mac користувачів
        . etActivity(); /*Оновити присутність без даних, тому очистіть її і зробіть велике зображення застосунку Discord, і текст, який буде збережено в додатку Discord*/
    } other {
        //Це запуститься, якщо ви встановите деталі про присутність
        . etActivity(presenceData); //Оновіть присутність з усіма значеннями від об'єкта даних
    }
});
```
Ви можете скопіювати це в `присутності.ts` файл і редагувати значення. Установлення всіх значень зроблено всередині події updataData.

Для прикладів ми пропонуємо переглянути код присутності на кшталт 1337x або 9GAG.

Для отримання додаткової інформації про клас присутності натисніть [тут](/dev/presence/class).

## Не можу отримати певні дані?!

Використання багатьох веб-сайтів [iframes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([Inlineframes](https://en.wikipedia.org/wiki/HTML_element#Frames)). Ці HTML-теги можуть містити декілька джерел, таких як відео. Але вони не мають значення кожного разу. Деякі приховані або просто не використовуються. Перевірте, чи можете ви видобути необхідну інформацію, без них перед непотрібною роботою.

1. Check for them in your browsers console (be sure that you are on the **Elements** tab).
2. Пошук (<kbd>CTRL</kbd>+<kbd>F</kbd> (Windows) або <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
3. Виконати `document.querySelectorAll("iframe")`.

Якщо ви виявили, що ваші дані знаходяться в iFrame вам необхідно виконати такі дії:
1. Створіть `iframe.ts` файл.
2. Встановіть iFrame на `true` у файлі метаданих.
3. Заповнення в iFrame файлі.
```javascript
var iframe = new iFrame();
iframe. n("UpdateData", async () => {
  /*
  Отримати всі необхідні дані з iFrame save them у змінних
  а потім відправив їх з iframe. кінець
  */
  iframe.send({ //send data
    video: відео:
    час: відео. Тривалість
  }); 
});
```
4. Збереження доступності файлу отримання даних з файлу iFrame файлу.
```javascript
presence.on("iFrameData", data => {
  iFrameVideo = data.video;
  currentTime = data.time;
});
```
**Примітка:** Це потрібно розміщувати за межами події по оновленню.
## Компіляція
Відкрийте консоль у вашій папці і наберіть `tsc -w` , щоб скомпілювати `presence.` в папку `/dist`.

# Структура (JavaScript)
## Клонування проекту
1. Установіть[Git](https://git-scm.com/).
2. Відкрийте термінал і введіть `git clone https://github.com/PreMiD/Presences`.
3. Виберіть теку вибору.
4. Відкрийте його у вашому редакторі коду.

## Створення папок і файлів

1. Створіть папку з **іменем** (не URL) сервісу, який потрібно підтримати.
3. Створіть папку з ім'ям `dist` всередині.
4. Створіть файл `metadata.json` та `presence.js` файл у теці `дист`.

## Заповнення в файлі metadata.json

Натисніть [тут](/dev/presence#filling-in-the-metadatajson-file-2) , щоб побачити як його заповнити. Ви зможете легко клікнути в нижній частині пояснення.

Ми зробили `metadata.json` творець файлу для ледачих привілей [тут](https://eggsy.codes/projects/premid/mdcreator).

## Початок роботи

```javascript
var presence = new Presence({
    clientId: "000000000000000000" //The client ID of the Application created at https://discordapp.com/developers/applications
}),

strings = presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
    //You can use this to get translated strings
});

/*

function myOutsideHeavyLiftingFunction(){
    //Grab and process all your data here

    // element grabs //
    // api calls //
    // variable sets //
}

setInterval(10000, myOutsideHeavyLiftingFunction); 
//Run the function seperate from the UpdateData event every 10 seconds to get and set the variables which UpdateData picks up

*/


presence.on("UpdateData", () => {
    //UpdateData is always firing, and therefore should be used as your refresh cycle, or `tick`. Це називається кілька разів вдруге, де це можливо.

    ///Рекомендується налаштувати іншу функцію за межами цієї функції події, яка змінить значення змінної і зробить важкий підйом, якщо ви викликаєте дані з API.

    var presenceData = {
        largeImageKey: "key", /*Ключ (назва файла) великого зображення на присутності. Вони завантажені та названі у розділі Rich Presence у вашому додатку, під назвою Art Assets*/
        smallImageKey: "key", /*Ключ (ім'я файла) великого зображення на присутності. Вони завантажені та названі у розділі Rich Presence у вашому додатку, називається Art Assets*/
        smallImageText: "Деякий текст наведення", ///Текст, який відображається при наведенні над маленьким зображенням
        , детально: "Назва сторінки перегляду", ///The верхня частина тексту
        стану: "Розділ читання А", ///Нижня частина початкового періоду присутності
        startTimestamp: 1577232000, ///unix епічна позначка часу, коли почати раховувати від
        endTimestamp: 1577151472000 ///Якщо Ви хочете показати час зліва замість Минулого, це епічна мітка часу unix у якій таймер закінчується
    }; /*При бажанні ви можете встановити largeImageKey тут і змінити решту, як змінні підпараметри, наприклад, presenceSata. ype = "blahblah"; навести тип: деталі, стан і т.д.*/

    якщо (присутні дані). etails == null) {
        ///Це буде активувати, якщо ви не вказуєте тут інформацію про присутність
        . etTrayTitle(); //Clears заголовок лотка для присутності mac користувачів
        . etActivity(); /*Оновити присутність без даних, тому очистіть її і зробіть велике зображення застосунку Discord, і текст, який буде збережено в додатку Discord*/
    } other {
        //Це запуститься, якщо ви встановите деталі про присутність
        . etActivity(presenceData); //Оновіть присутність з усіма значеннями від об'єкта даних
    }
});
```
Ви можете скопіювати це в `presence.js` файл і редагувати значення. Установлення всіх значень зроблено всередині події updataData.

Для прикладів ми пропонуємо переглянути код присутності на кшталт 1337x або 9GAG.

Для отримання додаткової інформації про клас присутності натисніть [тут](/dev/presence/class).

## Не можу отримати певні дані?!

Використання багатьох веб-сайтів [iframes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([Inlineframes](https://en.wikipedia.org/wiki/HTML_element#Frames)). Ці HTML-теги можуть містити декілька джерел, таких як відео. Але вони не мають значення кожного разу. Деякі приховані або просто не використовуються. Перевірте, чи можете ви видобути необхідну інформацію, без них перед непотрібною роботою.

1. Check for them in your browsers console (be sure that you are on the **Elements** tab).
2. Пошук (<kbd>CTRL</kbd>+<kbd>F</kbd> (Windows) або <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
3. Виконати `document.querySelectorAll("iframe")`.

Якщо ви виявили, що ваші дані знаходяться в iFrame вам необхідно виконати такі дії:
1. Створіть `iframe.js` файл.
2. Встановіть iFrame на `true` у файлі метаданих.
3. Заповнення в iFrame файлі.
```javascript
var iframe = new iFrame();
iframe. n("UpdateData", () => {
    /*
    Отримайте всі дані, які вам потрібні з iFrame зберегти їх змінними
    , а потім відправили їх за допомогою iframe. кінець
    */
    iframe. кінець({ //send data
        відео: відео:
        час: відео. Тривалість  
    });
});
```
4. Збереження доступності файлу отримання даних з файлу iFrame файлу.
```javascript
presence.on("iFrameData", data => {
  iFrameVideo = data.video;
  currentTime = data.time;
});
```
**Примітка:** Це потрібно розміщувати за межами події по оновленню.
# Заповнення в файлі metadata.json
Ми зробили `metadata.json` творець файлу для ледачих привілей [тут](https://eggsy.codes/projects/premid/mdcreator). Прочитайте цю тему, щоб ви знали, як вона працює.

```javascript
{
  "author": {
    "name": "USER",
    "id": "ID"
  },
  "contributors": [{
    "name": "USER",
    "id": "ID"
  }],
  "service": "SERVICE",
  "description": {
    "en": "DESCRIPTION"
  },
  "url": "URL",
  "version": "VERSION",
  "logo": "URL",
  "thumbnail": "URL",
  "color": "#HEX000",
  "tags": ["CATEGORY", "TAG"],
  "category": "CATEGORY",
  "regExp": "REGEXP",
  "iFrameRegExp": "REGEXP",
  "iframe": false,
  "settings": [
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
            "value": "\"%song\" by %artist",
            "placeholder": "use %song or %artist"
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

Будь ласка, скопіюйте код вище і помістіть його у файл `metadata.json`. Вам потрібно відредагувати значення властивостей. Зверніть увагу, що наступні властивості не є обов'язковими для ваших `метаданих. son` файл, якщо ви не плануєте ними користуватися ним, то нічого не потрібно видаляти.
- `учасники проєкту`
- `regExp`
- `iframe`
- `iFrameRegExp`
- `налаштування`

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
      <td style="text-align:left"><b>автор</b>
      </td>
      <td style="text-align:left">Має містити об'єкт з <code>назвою</code> і <code>id</code> розробника присутності. Ім'я - це ваше ім'я користувача Discord без ідентифікатора(#0000). Користувач <code>id</code> може бути скопійований з Discord, увімкнувши режим розробника
        і правою кнопкою миші в вашому профілі.</td>
      <td style="text-align:left"><code>Об'єкт</code>
      </td>
      <td style="text-align:left"><code>Ні</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>учасники проєкту</b>
      </td>
      <td style="text-align:left">Має містити об'єкт з <code>назвою</code> і <code>id</code> розробника присутності. Ім'я - це ваше ім'я користувача Discord без ідентифікатора(#0000). Користувач <code>id</code> може бути скопійований з Discord, увімкнувши режим розробника
        і правою кнопкою миші в вашому профілі.</td>
      <td style="text-align:left"><code>Масив&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>Так</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>сервіс</b>
      </td>
      <td style="text-align:left">Назва служби, яку підтримує ця присутність. <br>(Повинне бути тим же ім'ям, що і тека, в якій все всередині)</td>
      <td style="text-align:left"><code>Рядок</code>
      </td>
      <td style="text-align:left"><code>Ні</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>опис</b>
      </td>
      <td style="text-align:left">Маленький опис присутності, ви можете використовувати опис сервісу
        , якщо ви не вийшли з ідей. Ваш опис має бути з ключових значень, які вказують на мову, а також опис цієї конкретної мови. Створюйте описи мовами <i>, яких ви знаєте</i>, наші перекладачі будуть вносити зміни до вашого файлу метаданих.</td>
      <td style="text-align:left"><code>Об'єкт</code>
      </td>
      <td style="text-align:left"><code>Ні</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>URL-адреса</b>
      </td>
      <td style="text-align:left">URL-адреса послуги. <br> <b>Приклад:</b><code>vk.com</code><br>
         <b>Ця URL-адреса повинна відповідати URL-адресі веб-сайту, оскільки вона виявить, чи це веб-сайт, яким слід вводити сценарій.</b><br><b>НЕ</b>додавайте<code>https://</code>або<code> http://</code> всередину URL-адреси, і не косою рисою в кінці:
<code https://premid.app/</code> -> <code>premid.app</code><br>
<b>Примітка</b>: Деякі URL-адреси можуть мати <code>www.</code> або щось інше перед своїм доменом. Зробіть <b>НЕ</b> забудьте додати його!<br>
Ви можете додати декілька адрес, виконавши наступне:<br>
<code>["URL1", "URL2", "ETC. ]</code><br><br>.
, Ви можете також використовувати regExp також відоме як Regex для цього завдання, пояснюючи нижче.
      </td>
      <td style="text-align:left"><code>Стрічка, масив&lt;String&gt;</code>
      </td>
      <td style="text-align:left"><code>Ні</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b>
      </td>
      <td style="text-align:left">Стрічка регулярного виразу, яка використовується для пошуку адрес.<br>
      regExp або також відомий як Regex, можна використовувати, якщо веб-сайт має декілька піддоменів.<br>
Ви можете використовувати наступний regExp для цього:<br>
<code>([a-z0-9]+)[.]домен[.]TLD"</code><br>
TLD стояння для домену Top рівень: . om .net<br> 
<code>([a-z0-9]+)</code> означає щось від до z та від 0 до 9.<br>
        Ви можете перевірити свій регулярний вираз <a href="https://regex101.com/">Regex101</a></td>
      <td style="text-align:left"><code>Рядок</code>
      </td>
      <td style="text-align:left"><code>Так</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>версія</b>
      </td>
      <td style="text-align:left">Версія вашої присутності.</td>
      <td style="text-align:left"><code>Рядок</code>
      </td>
      <td style="text-align:left"><code>Ні</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>логотип</b>
      </td>
      <td style="text-align:left">Посилання на сервіс&apos;logotype.</td>
      <td style="text-align:left"><code>Рядок</code>
      </td>
      <td style="text-align:left"><code>Ні</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b>
      </td>
      <td style="text-align:left">Посилання на мініатюру присутності.</td>
      <td style="text-align:left"><code>Рядок</code>
      </td>
      <td style="text-align:left"><code>Ні</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>колір</b>
      </td>
      <td style="text-align:left"><code>#HEX</code> значення. Ми рекомендуємо використовувати основний колір служби
        , який ваша присутність.</td>
      <td style="text-align:left"><code>Рядок</code>
      </td>
      <td style="text-align:left"><code>Ні</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>теги</b>
      </td>
      <td style="text-align:left">Масив із мітками, вони допоможуть користувачам шукати вашу присутність на сайті.</td>
      <td
      style="text-align:left"><code>Стрічка, масив&lt;String&gt;</code>
        </td>
      <td style="text-align:left"><code>Ні</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>категорія</b>
      </td>
      <td style="text-align:left">Рядок, який використовується для представлення категорії, на яку падає присутність. Перегляньте припустимі обстеження <a href="https://docs.premid.app/dev/presence/metadata#presence-categories">тут</a>.</td>
      <td style="text-align:left"><code>Рядок</code>
      </td>
      <td style="text-align:left"><code>Ні</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b>
      </td>
      <td style="text-align:left">Визначає, чи використовуються <code>iFrames</code></td>
      <td style="text-align:left"><code>Boolean</code>
      </td>
      <td style="text-align:left"><code>Так</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b>
      </td>
      <td style="text-align:left">Селектор регулярних виразів, який вибирає iframes для впровадження параметрів. Перегляньте regExp для отримання додаткової інформації.</td>
      <td style="text-align:left"><code>Рядок</code>
      </td>
      <td style="text-align:left"><code>Так</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>налаштування</b>
      </td>
      <td style="text-align:left">An array of settings the user can change.<br>
      Read more about presence settings <a href="https://docs.premid.app/dev/presence/metadata#presence-settings">here</a>.</td>
      <td style="text-align:left"><code>Масив&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>Так</code>
      </td>
    </tr>
  </tbody>
</table>

Натисніть [тут](/dev/presence#filling-in-the-metadatajson-file) , щоб повернутися до пояснення TypeScript. Натисніть [тут](/dev/presence#filling-in-the-metadatajson-file-1) , щоб повернутися до пояснення JavaScript.

# Завантаження присутності
1. Відкрийте спливаюче вікно і утримуйте кнопку <kbd>Shift</kbd> на клавіатурі.
2. **Завантажте присутність** буде відображена в розділі присутності.
3. Натисніть на нього, поки тримаєте кнопку <kbd>Shift</kbd>.
4. Виберіть папку /dist для вашої присутності.

# Деякі корисні речі
## Швидке перезавантаження
Веб-сайт, з яким ви розробляєте, автоматично завантажується кожного разу, коли ви збережете файл у папку.

## Відлагодження
- Ви можете помістити `console.log("Test");` між вашим кодом і подивитися, чи ваша консоль браузеру дасть вам цей результат. Якщо так, то продовжуйте і спробуйте знову після наступної функції. Якщо не тоді, то зверху є помилка.
- Якщо це не допоможе Вам, то попросіть розробника на нашому [сервері Discord](https://discord.gg/WvfVZ8T) допомогти.

# Файли пояснюються
- [Клас присутності](/dev/presence/class)
- [iFrame клас](/dev/presence/iframe)
- [Файл метаданих](/dev/presence/metadata)
- [Налаштування TypeScript](/dev/presence/tsconfig)
{.links-list}
