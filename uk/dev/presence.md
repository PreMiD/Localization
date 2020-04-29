---
title: Розробка присутності
description:
published: true
date: 2020-04-29T13:00:50.370Z
tags:
---

> Усі присутності зберігаються тут: https://github.com/PreMiD/Presences 
> 
> {.is-info}

Версія `2.x` представляє [Крамницю присутностей](https://premid.app/store). Тепер користувачі можуть вручну додавати та видаляти улюблені присутності через користувацький інтерфейс [сайту](https://premid.app/).

# Керівні принципи
> If you do **NOT** follow the guidelines, a `Presence Verifier` will request the proper changes, or will have to close it under certain circumstances. 
> 
> {.is-warning}

> When you make pull requests about adding or modifying existing Presences, you **MUST** include a screenshot. However, modifications to a Presence's `metadata.json` or `tsconfig.json` files do **NOT** require a screenshot. _Your screenshot **MUST** be directly uploaded to GitHub with the pull request, do **NOT** use third-party image sharing sites._ 
> 
> {.is-warning}

When publishing Presences to this GitHub, we require you to follow a set of guidelines. To some, these strict rules may seem harsh. However, the implementation of these rulesets will keep us and the users from running into any issues.

## Створення
> The code you write MUST be *well-written* and MUST be *readable*. `DeepScan` on GitHub will report code quality issues to the `Presence Verification Team`. We recommend that your fork is up to date when you make pull requests, it will help limit false positives. 
> 
> {.is-warning}

- The pull request **MUST** be complete, you need to have a proper file structure, drafts are **NOT** allowed. Including the `presence.ts` file, `tsconfig.json` file ,`dist` folder, `presence.js` file, and `metadata.json` file, which is represented in the following example schema:
```bash
presence
├── dist
│   ├── metadata.json
│   └── presence.js
├── presence.ts
└── tsconfig.json
```
or if you're using `iframe`:
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
- The Presence **MUST** be related to the site you have chosen.
- The Presence **MUST NOT** be of any illegal sites. Це включають стресори, наркотики, дитяче порно тощо.
- The Presence metadata **MUST** have well-written content, including valid titles, and descriptions.
- The media you include (icon/thumbnail) **MUST** be related to the site and should be understandable in terms of size and quality.
- The file structure **MUST** be clean and managed, do **NOT** have random files that provide nothing to the Presence's function.
- The Presence **MUST NOT** have any malicious intentions. These include stealing/leaking private information, negatively affecting the behavior of the site, etc.
- If you design a Presence for a site that happens to change in the future and as a result, potentially breaking your Presence, you **ARE** responsible for updating it to work as expected. If you do **NOT** fix it within seven days, other Presence developers are allowed to **OVERWRITE** it to comply with the changes.
- The Presence **MUST** be tested before publishing to confirm that everything works as expected.
- Your Presence **MUST** have SFW images and descriptions regardless if it is NSFW or not. If your Presence is about an NSFW site, please add the `nsfw` tag to your metadata.
- Your Presence **CANNOT** manipulate local storage on the browser.
- Your Presence may use cookies to store data, you have to prefix all of them with `pmd_`.
- The name of your Presence **MUST** be the name of your Presence's directory name. For example, a Presence named `Google Docs` must have a directory of `/Google Docs/`. (you should include all spaces, periods, commas, and any other special characters)

## Модифікація
> You MUST change the version in the **metadata** to be a higher value from previous version when making changes to either the **presence.ts**/**presence.js** or **metadata.json**. 
> 
> {.is-warning}

In some situations, Presences may behave unexpectedly or could use some minor changes to improve their functionality. Here is a compiled list that you **MUST** follow to modify Presences.

- You are **NOT** allowed to rewrite a Presence or change its author. If the Presence author was banned from the official server or hasn't made the required changes in seven days, you may contact a `Presence Verifier` to see if you can to rewrite the Presence of your choice.
- Anyone may provide hotfixes to fix bugs; however, try **NOT** to make changes to code that does **NOT** need to be fixed. Valid modifications are, but **NOT** limited to, _missing paths_, _typos_, _missing images_, etc.
- If you make modifications to a Presence and change at least a **QUARTER** of the Presence's codebase, you are allowed to add yourself as a contributor. Contact a `Presence Verifier` for more information about this subject.
- Переконайтеся, що зміни корисні. These may include fixes (code and typos), additions (descriptions and tags), etc. Do **NOT** change images if they are not outdated and have a decent resolution.
- Підтвердьте ваші зміни перед публікацією. Do **NOT** create pull requests without knowing the outcome of your changes.
- Maintain the language the Presence author used when writing the Presence. For example, do **NOT** delete typescript files and use the javascript files instead.

# Верифікація

> If you need to contact someone, please use our official Discord server. All `Presence Verifiers` will have a unique role in their profile.

For your Presence to reach the stores, it **MUST** go through a process on GitHub to confirm that it works as expected. These are a few things to look out for when making your pull request.

1. It takes two verifiers to confirm that your Presence is up to standards. If you happen to get change requests, make the proper effort to fix it, or it will **NOT** be added.
2. If we request changes and your pull request exceeds **7 days of inactivity** without making the necessary ones, we'll be forced to close it.
3. You are allowed to take screenshots of changes made with the help of another user, and you are allowed to stitch screenshots for viewing pleasure. (e.g., its author in case you can't access it for any reason).
4. If it is an update or patch, the screenshot **MUST** show the new additions working, **NOT** any old features from previous pull requests.
5. The provided screenshots should be real, **NOT** edited.
6. Будь-який внесений код, що об'єднується з цим репозиторієм, буде ліцензований за **Mozilla Public License 2.0**.
7. Presences for free domains or hosts (e.g., .TK, [all free Freenom domains], .RF.GD, etc) are **NOT** allowed at all, exceptions can be made if a proof is presented showing that they paid for the domain.
8. The `smallImageKey` and `smallImageText` fields are intended to provide additional/secondary context (such as "playing"/"paused" for video sites, "browsing" for regular sites, and other cases) not to promote Discord profiles or anything unrelated to PreMiD.
9. The requirements for logos are 1:1 (Square) in 512px, thumbnails, however, should either be [wide promotional cards](https://i.imgur.com/3QfIc5v.jpg) or simply [screenshots](https://i.imgur.com/OAcBmwW.png) if the first is **NOT** available.
10. Presences should at least have one tag. Tags must **NOT** include any spaces, slashes, single/double quotation marks, Unicode characters, and should always be lowercase.
11. The `url` field **MUST NOT** include `http://` or `https://`, neither the parameters (e.g. a Presence for `https://www.google.com/search?gws_rd=ssl` will only have `www.google.com` in the `url` field).
12. Descriptions and tags should always be in an array, even when it's only one element. Однак поле `url` має бути лише рядком, якщо це один домен.
13. Tags should be used as alternate names whenever possible, and shortened versions must be included as well (e.g., if an Amazon Presence had included AWS support, it would have its tags like "amazon-web-services" and "aws").
14. Unstable sites that constantly change APIs/domains, randomize HTML elements, or just still being in heavy development are not allowed and will be removed from the store.
15. The logo and thumbnail on your Presence **MUST** either be `i.imgur.com`, from a CDN that **YOU** own, or from a CDN that gives you permission to **CHANGE** image files.
16. Verifiers will check if the Presence contains an `__awaiter` function at the beginning of the code (which comes from an earlier version of ECMAScript), whether it's in Typescript or Javascript, and in addition to that, make sure the `UpdateData` event used is similar to this:

```ts
presence.on("UpdateData", async () => {
  /*...*/
  // Always use await when using async in the event
  data.smallImageText = (await strings).playing;
  /*...*/
});
```

It should **NOT** be this:

```ts
presence.on("UpdateData", () => __awaiter(this, void 0, void 0, function* () {
  /*...*/
  // Never use yield
  data.smallImageText = (yield strings).playing;
  /*...*/
});
```

17. You **MUST** include all source files (such as `presence.ts` or `iframe.ts`), do **NOT** include a source mapping url if your Presence's language is Javascript.
18. When **Deepscan** throws a lot of errors (and it will), it is mostly an issue with your branch being outdated, always update your GitHub fork when making pull requests.
19. Always make sure the version number follows [semantic versioning standards](https://semver.org), which translates to the following scheme : `<NEW-FEATURE>.<HUGE-BUGFIX>.<SMALL-BUGFIX-OR-METADATA-CHANGES>`. anything else like `1.0.0.1`, `1.0`, `1`, `1.0.0-BETA` or changing `1.0.0` to `2.0.0` on a bug fix/small change is **NOT** permitted.
20. Low-quality Presences (or ones with one context) are **NOT** allowed (e.g., only showing the logo and some text but never changing again).
21. **NEVER** use custom functions when [native variants are available](https://docs.premid.app/dev/presence#files-explained); this makes sure fixes on the extension level also apply to your Presences, you're free to use whatever you need if you do not find them listed in the docs.
22. It is **NOT** recommended to use comments on Javascript Presences unless necessary (TypeScript ones or their compiled files are fine), as it reduces code readability and increases file sizes.
23. Declare the Presence const **BEFORE** everything to avoid such rare issues that may occur; this is not a requirement by design so it could be removed in the future.
24. Presences that target internal browser pages (like Chrome Web Store, `chrome://`, `about:` pages, etc) are **NOT** allowed as they require an _experimental flag_ to be enabled on the user's end and could potentially cause damage to their browsers.
25. It is **FORBIDDEN** to code Presences for a site without adding support to its main language (e.g., a YouTube Presence coded with support for Portuguese and Japanese, but not English itself).

After meeting all of the guidelines and having your Presence reviewed at least twice, your Presence will be merged with the store.

# Structure
All presence are coded in [TypeScript](https://www.typescriptlang.org/). [TypeScript](https://www.typescriptlang.org/) has some extra spicy type definitions over JavaScript, so fixing and identifying bugs is way easier.

## Установлення
1. Установіть[Git](https://git-scm.com/).
2. Установіть[Node](https://nodejs.org/en/) (приходить з [npm](https://www.npmjs.com/)).
3. Встановити [TypeScript](https://www.typescriptlang.org/index.html#download-links) (відкрити термінал і `npm встановити -g typescript`).

## Клонування проекту
1. Відкрийте термінал і введіть `git clone https://github.com/PreMiD/Presences`.
2. Виберіть теку вибору.
3. Відкрийте його у вашому редакторі коду.

## Створення папок і файлів

1. Створіть папку з **іменем** (не URL) сервісу, який потрібно підтримати.
2. Створіть `присутність,` і файл `tsconfig.json` всередині нього.
3. Створіть папку з ім'ям `dist` всередині.
4. Створіть файл `metadata.json` всередині теки `dist`.

## Заповнення в файлі tsconfig.json
Please put the following code inside of the `tsconfig.json` file.
```javascript
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist"
  }
}
```
Щоб дізнатися більше про конфігурацію TypeScript натисніть [тут](/dev/presence/tsconfig).

## Заповнення в файлі metadata.json
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
  "tags": ["TAG1", "TAG2"],
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
