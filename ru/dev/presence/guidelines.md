---
title: Руководство по присутствию
description: Правила, которым должны следовать все разработчики presence, чтобы добавить свое presence.
published: true
date: 2021-02-26T21:45:36.174Z
tags:
editor: markdown
dateCreated: 2021-02-24T22:30:46.792Z
---

<div align="center">
    <img src="https://github.com/PreMiD.png?size=2048" width="128px" style="max-width:100%;">
    <h3 style="font-size: 2rem; margin-bottom: 0">Руководство по присутствию</h3>
    <h4 style="margin-top: 0">Пересмотр 3</h4>
    <br />
</div>

# Рекомендации

При публикации презентаций в [наш репозиторий GitHub](https://github.com/PreMiD/Presences), мы требуем, чтобы вы следовали набору правил. Для некоторых эти строгие правила могут показаться суровыми. Однако реализация этих наборов правил убережет нас и наших пользователей от проблем.

# Создание

Основные правила развития presence заключаются в следующем:

- Presences **должны** быть связанным с выбранным веб-сайтом.
- Presences **не могут** быть сделаны для незаконных веб-сайтов. (например, стрессоры, маркетинг наркотиков, детская порнография и т.д.)
- Структура файла должна быть чистой и управляемой, не включать файлы, которые не указаны. (например, папки vscode и git, файлы изображений и текста и т. д.)
- Вы должны иметь правильную структуру файла, черновики **не** разрешены.
- Presences для веб-сайтов (`.onion` TLD) или веб-сайтов с бесплатными доменами/хостами (для e.., `.TK` [все бесплатные домены Freenom], `.RF`, `GD`, и т. д.) **не разрешены**, исключения могут быть сделаны, если представлено доказательство того, что они заплатили за домен.
- Возраст домена присутствия должен быть не менее 2 месяцев.
- Presences которые нацелены на внутренние страницы браузера (например, веб-магазин Chrome, ` chrome: // `, ` about: ` и т. д.) ** не разрешены **, поскольку они требуют, чтобы экспериментальный флаг был включен на стороне пользователя и потенциально мог повредить их браузеры.
- Presences с поддержкой только одного субдомена ** не будет ** разрешено, так как они могут показаться неработающими для других страниц (например, домашняя страница), исключения могут быть сделаны для политики и контактных страниц (контент, который используется не часто) или сайтов, где другой контент не связан. (например, страницы википедии)
- Presences для онлайн-радио разрешено только в том случае, если у радио есть не менее 100 еженедельных слушателей и 15 одновременно.
- Presences низкого качества (или с небольшим контекстом) ** не **разрешено (например, только показывая логотип и текст, но никогда не меняя его)
- Релиз `с кнопками`, нам необходимы некоторые рекомендации для них:
  - Перенаправление на главную страницу запрещено.
  - Рекламные сайты запрещены законом.
  - Они не могут показывать дополнительные данные, когда вы не можете показать их в `состоянии` или `подробности`.
- Включая папку `dist`, `presence.ts` файл, `iframe.ts` файл, и `metadata.json` файл является обязательным, поэтому результатом будет то, что представлено в следующей схеме:

```bash
presence
├── dist
│   └── metadata.json
├── presence.ts
└── tsconfig.json
```

или если вы используете `iframe.ts` файл:

```bash
presence
├── dist
│   └── metadata.json
├── presence.ts
├── iframe.ts
└── tsconfig.json
```

## [**metadata.json**](/dev/presence/metadata)

> Для удобства наших разработчиков presence, мы предоставили схему, которую вы можете использовать для проверки целостности вашего `metadata` файла. Это совершенно необязательно и не требуется в процессе проверки.

> Настоятельно рекомендуется организовать ваш `metadata` файл в формате, показанном ниже, и вы должны иметь грамматически правильные названия служб, описания, теги и поля настроек. Anything not organized to specifications will **not** be permitted.

> Presences of websites that have explicit content **must** have the `nsfw` tag, and the logo/thumbnail must **not** contain any of this content.

Each presence has a descriptor file called `metadata.json`, the metadata has a strict standard and an example of this file can be seem below:

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
      "id": "multiLanguage",
      "multiLanguage": true
    }
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

> If a field is listed as optional on the [documentation](https://docs.premid.app/en/dev/presence/metadata) or there is a `*` next to the key, and your presence uses the default value for it, do not include it in the `metadata` file. (например, presence без поддержки iframe не потребует поле `iframe`.)

> All images in the `metadata` file must be hosted on `i.imgur.com`. Using content hosted on the website is **not** permitted as they can change the paths and files unwillingly.

A list of fields and their rules are listed below:

### **`$schema`**

- The schema _key_ **must** include a dollar sign at the beginning of it, this will signal your text editor that you want to validate your JSON file against a model. _As stated earlier, you do not need to include a schema, but if you include it you must take this into account._

### **`author`**

- The ID _value_ **must** be your Discord snowflake ID. You can get it by enabling [developer mode](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-). _Please do **not** confuse this with your application ID, which is only for your presence._

### **`*contributors`**

- Do **not** add yourself as a contributor, and do not add someone else as a contributor unless they have helped with the presence.

### **`service`**

- The service name **must** be the name of the presence directory. For example, if the presence is located at `/websites/Y/YouTube/`, the service name must be `YouTube`.
- You **cannot** use the url as the service name unless the website uses the url as its official name. If the name is not descriptive and can be considered vague, using the url is **required**. (for e.g., `YouTube` is permitted because that is the official name and is descriptive, while `youtube.com` is not. `Top` is a non-descriptive name, so using the url `top.gg` is **required**.)
- If service has some explicit branding rules of their name, you should follow them.

### **`*altnames`**

- **Only** use this in scenarios where a website goes under multiple official names (e.g. Pokémon and 포켓몬스터). _Shortened_ versions of service names go under `tags`.

### **`description`**

- ** Для всех ** presences ** необходимо ** иметь описание на английском языке независимо от предпочитаемого языка сайта.
- **не** пробуйте перевести описание самостоятельно, если вы не знаете этого языка, переводчики изменят ваши `metadata.json` и изменят описания при необходимости.

### **`url`**

- Ссылка ** должна ** быть строкой, если веб-сайт использует только один домен. Если веб-сайт использует множество, сделайте это массивом и укажите каждый из них.
- Не включайте в ссылку **не** протоколы (например `http` или `https`), и не включать параметры запроса в ссылку (например,`www.google.com/search?gws_rd=ssl` который должен быть `www.google.com`)

### **`version`**

- Всегда проверяйте, что номер версии соответствует [семантическим стандартам версий](https://semver.org), который транслируется в следующую схему: `<NEW-FEATURE>.<HUGE-BUGFIX>.<SMALL-BUGFIX-OR-METADATA-CHANGES>`. Что-нибудь ещё, например `1.0.0.1`, `1.0`, `1`, `1.0.0-BETA` или изменение `1.0.0` to `2.0.0` при исправление ошибки / небольшое изменение ** не ** разрешено.
- Версия ** должна ** всегда начинаться с ` 1.0.0 `, если не указано иное, другие версии ** не ** будут разрешены.

### **`logo`**

- Логотип ** должен ** быть квадратным изображением с соотношением сторон ` 1:1`.
- Для изображения ** требуется ** минимальное разрешение ` 512x512 ` пикселей. Вы можете увеличить изображение, используя такой инструмент, как [ waifu2x ](http://waifu2x.udp.jp/).

### **`thumbnail`**

- Эскиз **должен** предпочтительно быть [широкой рекламной картой](https://i.imgur.com/3QfIc5v.jpg) или [скриншотом](https://i.imgur.com/OAcBmwW.png), если первая **недоступна**.

### **`color`**

- Цвет **должен** быть шестнадцатеричным значением между `#000000` и `#FFFFFF`.
- Цветная строка ** должна ** начинаться с символа #.

### **`tags`**

- **Все** presences должны иметь по крайней мере _один_ тег.
- Теги должны **не** включать пробелы, косые, одинарные/двойные кавычки, символы Unicode, и всегда должны быть строчными буквами.
- Теги **должны** предпочтительно включать альтернативные имена сервисов, чтобы облегчить поиск (например если presence Amazon включало поддержку AWS, у него были бы такие теги, как `amazon-web-services` и `aws`)
- Вы ** обязаны ** добавить тег ` NSFW `, если он предназначен для веб-сайта NSFW.

### **`category`**

- The category **must** be one of the following listed on the [documentation](/dev/presence/metadata#presence-categories).
- The presence must use a category that matches the content of the website. (for e.g., don't use `anime` when the website isn't related to anime).

### **`*regExp`** <br /> **`*iFrameRegExp`**

- Регулярные выражения **должны** быть действительными. Please test your expressions with the tools listed on the [documentation](/dev/presence/metadata#testing).

### **`readLogs`**

- Must be `boolean` value (e.g. `true` or `false`).
- Enables logs for your presence.

### **`warning`**

- Enables warning icon for prompting user that this presence needs more steps than only adding presence.
- Example of presence using this metadata variable is `VLC`.

### **`settings`**

- If you decide to make a format string (for e.g., `%song% by %artist%`), you must have the variables surrounded by a percent sign on either side. Variables like `%var`, `var%`, or `%%var%%` and anything in between are **not** permitted for the sake of standardization.
- The name of settings must **not** be in all capital letters. For example, names such as `SHOW BROWSING STATUS` will **not** be permitted; however, names such as `Show Browsing Status` or `Show browsing status` are permitted.
- If you are using multiLanguage option you should know:
  - **Boolean** type value will only enable strings from [`general.json`](https://github.com/PreMiD/Localization/blob/master/src/Presence/general.json) from Localization repo or from presence file (e.g. when presence name is YouTube, extension will get strings from `youtube.json` too.)
  - **String** type value (e.g. `youtube.json`) will specify name of file that you want get strings from.
  - **Array<String>** type value (e.g. `["youtube.json", "vlive.json"]`) will specify name of files that you want get strings from.

## [**presence.ts**](/dev/presence/class)

> Код, который вы пишете **, должен ** быть _хорошо написанным_ и ** должен ** быть _ читабельным_, и все строки должны быть грамматически правильными (грамматические ошибки на сайтах можно игнорировать).

> Each presence follows a strict linting ruleset which will be checked during the review process. A couple of recommendations can be seen below. [TypeScript Plugin Recommendations for Strict Type Checking](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules). [ESlint Recommendations](https://eslint.org/docs/rules). [Prettier](https://prettier.io/).

Here is a list of rules you must follow when writing your `presence.ts` file:

- **Always** declare a new instance of the `Presence` class before any other variable to avoid rare issues that may occur; this is not a requirement by design so it could be removed in the future.
- **Never** use custom functions when [native variants are available](https://docs.premid.app/dev/presence#files-explained); this makes sure fixes on the extension level also apply to your presences. You're free to use whatever you need if you do not find them listed in the docs.
- It is **forbidden** to code presences for a site without adding support to its primary language (for e.g., a YouTube presence coded with support only for Portueguese and Japanese, but not English itself.)
- The `smallImageKey` and `smallImageText` fields are intended to provide additional/secondary context (such as `playing/paused` for video sites, `browsing` for regular sites, and other cases) not to promote Discord profiles or anything unrelated to PreMiD.
- You are **not** allowed to access `localStorage`.
- When accessing cookies for stored data, please prefix the key with `PMD_`.
- You many only make HTTP/HTTPS requests to `premid.app` or the presence website API. If you are using external domains, you will be required to explain why it is necessary. Only allowed API to make request is [`Fetch API`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).
- Do **not** set fields in the presenceData object to undefined after it has been declared, use the `delete` keyword instead. (for e.g., use `delete data.startTimestamp` instead of `data.startTimestamp = undefined`)
- You are **not** allowed to write presences that change the functionality of a given website. This includes the addition, deletion, or modification of DOM elements.

## [**tsconfig.json**](/dev/presence/tsconfig)

> Do **not** write your own `tsconfig.json` file, use what has been provided on [documentation](/dev/presence/tsconfig).

## Modification

> Вы ** должны ** изменить версию в ** metadata ** на более высокое значение по сравнению с предыдущей версией при внесении изменений либо в **sence.ts **, ** iframe.ts ** или ** metadata.json**.

In some situations, presences may behave unexpectedly or could use some minor changes to improve their functionality. Here is a list of rules that you **must** follow while modifiying presences.

- You are **not** allowed to rewrite a presence or change its author. If the presence author was banned from the official server or hasn't made the required changes within a month, you may contact a reviewer to see if you can to rewrite the presence.
- If you make modifications to a presence and change at least a **quarter** of the presence's codebase, you are allowed to add yourself as a contributor. Contact a reviewer for more information about this subject.
- Anyone may provide hotfixes to fix bugs; however, try **not** to make changes that are **not** required. Valid modifications include general fixes (code and typos), additions (descriptions and tags), missing files, etc. Do **not** change images if they are not outdated and are in specifications.

# Verification

> ** Весь ** код, добавленный в магазин, будет лицензирован в соответствии с `Mozilla Public License 2.0`.

> Если вам нужно связаться с кем-либо, пожалуйста, используйте наш официальный сервер Discord. All reviewers will have the `Reviewer` role on their profile.

> Please keep in mind that the reviewers work voluntarily and manage other repositories in addition to this one, your pull request may not get reviewed until hours or even days after it has been created.

> ** Всегда ** имейте актуальную ветвь перед созданием запроса. This will help limit false positives from the checks.

The most important process of presence development is getting your presence on the store. This is done by making a [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) on GitHub on the `PreMiD/Presences` repository. Our reviewers will confirm that your presence is up to standards and will push it onto the store.

<div>
  <h2 style="font-size: 2rem; margin-bottom: 0;">Presence Reviewers</h2>
  <a href="https://github.com/Bas950"><img src="https://github.com/Bas950.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/Timeraa"><img src="https://github.com/Timeraa.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/ririxidev"><img src="https://github.com/ririxidev.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <br />
</div>

## `Restrictions`

Repetitive offenses such as breaking guidelines, spamming pull requests, threats, or innapropriate behavior will get you banned from creating presences.

In this scenerio, the following changes will occur:

- Presences under your management will be transferred to the PreMiD bot or another user (reviewer decision). The application id for each presence will be recreated under the new owner's name.
- All of your issues and pull requests (presence creation, presence contribution, etc) created following the ban will be prompty closed.
- Tickets created under your name regarding presence development will be deleted.

## `Reviewing`

Несколько вещей, которые вы должны знать после открытия запроса:

- It takes 2 reviewers to merge a pull request.
- If a pull request is inactive for a period of 7 days, it will be promptly closed.
- All checks **must** be passed in order to merge.
- ⚠️ You **must** provide new, unaltered screenshots (taken by you) showing a side-by-side comparison of your profile and the website to prove that your presence works. _You are allowed to stitch screenshots together for viewing pleasure_ This applies for both creation and modification.
- ⚠️ You are also **required** to include screenshots of the presence settings in the extension if supplied. An example can be seen [here](https://imgur.com/a/OD3sj5R).

## `Checks`

![Checks](https://i.imgur.com/oqAakOc.png)

Currently, a presence goes through 3 separate stages of checks. All of these checks help the reviewers determine whether your presence is suitable for deployment.

- `Codacy` is a bot that checks for code quality. If you ever receive errors for new issues, you are **required** to fix them. (_WARNING: Codacy bot will be deprecated soon and you will need check errors only from DeepScan!_)
- `DeepScan` is a bot that checks for code quality. If you ever receive errors for new issues, you are **required** to fix them.
- `Schema Validation` will scan your `metadata.json` file for any errors (for e.g., missing fields, invalid value types, etc.). If you ever see any new issues, you are also **required** to fix those. Adding a schema field to your `metadata.json` file will allow your text editor (if supported) to show you these errors during development.

## `Additional Rules`

- **Always** make sure to start your presence in the most appropriate folder, if its name starts with _any_ Latin letter then it must be under its alphabetical match (for e.g., `D/dアニメストア` or `G/Google`). Any other Unicode/non-Latin characters **must** be under the `#` folder (for e.g., `#/巴哈姆特`) and numbers under the `0-9` folder (for e.g., `0-9/4anime`).

После того, как вы соблюдаете все руководящие принципы с соответствующими проверками, ваше presence будет объединено с магазином.

# Suggestions
If you have some suggestions about our guidelines, you should contact us @ [PreMiD's discord server](https://discord.premid.app) and we will check them!

# Вклад

`Revision 3` of the guidelines was written and was contributed to by the following individuals:

<div>
<a href="https://github.com/ririxidev"><img src="https://github.com/ririxidev.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
</div>

`Revision 2` of the guidelines was written and was contributed to by the following individuals:

<div>
<a href="https://github.com/Alanexei"><img src="https://github.com/Alanexei.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
</div>

`Revision 1` was maintained by the following individuals:

<div>
<a href="https://github.com/Alanexei"><img src="https://github.com/Alanexei.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
<a href="https://github.com/Bas950"><img src="https://github.com/Bas950.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
<a href="https://github.com/doomlerd"><img src="https://github.com/doomlerd.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
</div>