---
title: Guidelines
description: Rules all presence developers must follow to have their presence added.
published: true
date: 2020-12-29T02:18:29.846Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:45.733Z
---

# Guidelines

When publishing Presences to [our GitHub Repository](https://github.com/PreMiD/Presences), we require you to follow a set of guidelines. Для некоторых эти строгие правила могут показаться тяжелыми. However, the implementation of these rule sets will keep us and our users from running into issues.

# Creation

The general rules of presence development are as follows:

- Presences **must** be related to the website of choice.
- Presences **cannot** be made for illegal websites. (for e.g., stressors, drug marketing, child pornography, etc.)
- The file structure must be clean and managed, do not include files which are not specified. (for e.g., vscode and git folders, image and text files, etc.)
- You need to have a proper file structure, drafts are **not** allowed.
- Presences for websites with (`.onion` TLDs) or websites with free domains/hosts (for e.g., `.TK` [all free Freenom domains], `.RF`, `GD`, etc) are **not** permitted, exceptions can be made if a proof is presented showing that they paid for the domain.
- The domain of the presence must be at least 2 months old.
- Presences которые нацелены на внутренние страницы браузера (например, веб-магазин Chrome, ` chrome: // `, ` about: ` и т. д.) ** не разрешены **, поскольку они требуют, чтобы экспериментальный флаг был включен на стороне пользователя и потенциально мог повредить их браузеры.
- Presences с поддержкой только одного субдомена ** не будет ** разрешено, так как они могут показаться неработающими для других страниц (например, домашняя страница), исключения могут быть сделаны для политики и контактных страниц (контент, который используется не часто) или сайтов, где другой контент не связан. (например, страницы википедии)
- Presences для онлайн-радио разрешено только в том случае, если у радио есть не менее 100 еженедельных слушателей и 15 одновременно.
- Presences низкого качества (или с небольшим контекстом) ** не **разрешено (например, только показывая логотип и текст, но никогда не меняя его)
- Включая папку `dist`, `presence.ts` файл, `iframe.ts` файл, и `metadata.json` файл является обязательным, поэтому результатом будет то, что представлено в следующей схеме:

```bash
presence
├── dist
│   ├── metadata.json
│   └── presence.js
├── presence.ts
└── tsconfig.json
```

or if you're using a `iframe.ts` file:

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

## [**metadata.json**](https://docs.premid.app/en/dev/presence/metadata)

> For the convenience of our presence developers, we have provided a schema which you can use to validate the integrity of your `metadata` file. This is entirely optional and is not required during the review process. 
> 
> {.is-info}

> It is highly recommended that you organize your `metadata` file in the format shown below, and you must have grammatically correct service names, descriptions, tags, and setting fields. Anything not organized to specifications will **not** be permitted. 
> 
> {.is-warning}

> Presences of websites that have explicit content **must** have the `nsfw` tag, and the logo/thumbnail must **not** contain any of this content. 
> 
> {.is-warning}

Each presence has a descriptor file called `metadata.json`, the metadata has a strict standard and an example of this file can be seem below:

```json
{
  "$schema": "https://schemas.premid.app/metadata/1.0",
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

> Если поле указано как дополнительное для [ документации](https://docs.premid.app/en/dev/presence/metadata) и ваше presence использует для него значение по умолчанию, не включайте его в файл `metadata`. (например, presence без поддержки iframe не потребует поле `iframe`.) 
> 
> {.is-warning}

> All images in the `metadata` file must be hosted on `i.imgur.com`. Using content hosted on the website is **not** permitted as they can change the paths and files unwillingly. 
> 
> {.is-warning}

A list of fields and their rules are listed below:

### **`$schema`**

- The schema _key_ **must** include a dollar sign at the beginning of it, this will signal your text editor that you want to validate your JSON file against a model. _As stated earlier, you do not need to include a schema, but if you include it you must take this into account._

### **`author`**

- The ID _value_ **must** be your Discord snowflake ID. You can get it by enabling [developer mode](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-). _Please do **not** confuse this with your application ID, which is only for your presence._

### **`contributors`**

- Do **not** add yourself as a contributor, and do not add someone else as a contributor unless they have helped with the presence.

### **`service`**

- The service name **must** be the name of the presence directory. For example, if the presence is located at `/websites/Y/YouTube/`, the service name must be `YouTube`.
- You **cannot** use the url as the service name unless the website uses the url as its official name. If the name is not descriptive and can be considered vague, using the url is **required**. (for e.g., `YouTube` is permitted because that is the official name and is descriptive, while `youtube.com` is not. `Top` is a non-descriptive name, so using the url `top.gg` is **required**.)

### **`altnames`**

- **Only** use this in scenerios where a website goes under multiple official names (e.g. Pokémon and 포켓몬스터) or to make it easier to search the presence without using special characters (e.g. Pokémon and Pokemon). *Shortened* versions of service names go under `tags`.

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

- Категория ** должна ** быть одной из следующих, перечисленных в [ документации ](https://docs.premid.app/en/dev/presence/metadata#presence- категории).
- The presence must use a category that matches the content of the website. (for e.g., don't use `anime` when the website isn't related to anime).

### **`regExp`** <br /> **`iFrameRegExp`**

- Регулярные выражения **должны** быть действительными. Пожалуйста, протестируйте свои выражения с инструментами, перечисленными в [документации](https://docs.premid.app/en/dev/presence/metadata#testing).

### **`settings`**

- Если вы решите сделать строку формата (например: `%song% от %artist%`), вы должны иметь переменные окружённый знаком процента с любой стороны. Переменные, такие как `% var `, ` var% ` или ` %%var%% ` и всё что между ними, являются ** не ** допускаемым в целях стандартизации.
- The name of settings must **not** be in all capital letters. For example, names such as `SHOW BROWSING STATUS` will **not** be permitted; however, names such as `Show Browsing Status` or `Show browsing status` are permitted.
- Adding custom strings to the [Localization Repository](https://github.com/PreMiD/Localization) to later be used within the `multiLanguage` setting is only allowed if the presence has already been released before and has aquired at least 1000 users.

## [**presence.ts**](https://docs.premid.app/en/dev/presence/class)

> Код, который вы пишете **, должен ** быть _хорошо написанным_ и ** должен ** быть _ читабельным_, и все строки должны быть грамматически правильными (грамматические ошибки на сайтах можно игнорировать). 
> 
> {.is-warning}

> Each presence follows a strict linting ruleset which will be checked during the review process. A couple of recommendations can be seen below. - [TypeScript Plugin Recommendations for Strict Type Checking](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules) - [ESlint Recommendations](https://eslint.org/docs/rules) 
> 
> {.is-info}

Here is a list of rules you must follow when writing your `presence.ts` file:

- ** Всегда ** объявляйте новый экземпляр класса ` Presence ` перед любой другой переменной, чтобы избежать редких проблем, которые могут возникнуть; это не является обязательным требованием по дизайну, поэтому оно может быть удалено в будущем.
- ** Никогда ** не используйте пользовательские функции, когда [ доступны собственные варианты ](https://docs.premid.app/dev/presence#files-explained); это гарантирует, что исправления на уровне расширения также применимы к вашим presences. Вы можете использовать всё, что вам нужно, если вы не найдете их в документации.
- ** Запрещается** кодировать presence для сайта без добавления поддержки его основного языка (например, presence на YouTube закодировано с поддержкой только для Португальского и Японского, но не самого Английского языка.)
- Поле `smallImageKey` и `smallImageText` предназначено для придания/вторичного контекста (например, `playing/paused` для видео-сайтов, `browsing` для обычных сайтов и других случаев) не рекламировать профили Discord или что-либо, не связанное с PreMiD.
- Вам ** не разрешено ** получить доступ к ` localStorage `.
- При доступе к файлам cookie для сохраненных данных, пожалуйста, префишите ключ с помощью `PMD_`.
- You may only make HTTP/HTTPS requests to `premid.app` or the presence website API. Если вы используете внешние домены, вам нужно будет объяснить, почему это необходимо.
- Do **not** set fields in the presence data object to undefined after it has been declared, use the `delete` keyword instead. (for e.g., use `delete data.startTimestamp` instead of `data.startTimestamp = undefined`)
- You are **not** allowed to write presences that change the functionality of a given website. This includes the addition, deletion, or modification of DOM elements.

## [**tsconfig.json**](https://docs.premid.app/en/dev/presence/tsconfig)

> ** Не ** пишите свой собственный файл ` tsconfig.json `, используйте то, что было предоставлено в [документации](https://docs.premid.app/en/dev/presence/tsconfig). 
> 
> {.is-warning}

# Модификация

> Вы ** должны ** изменить версию в ** metadata ** на более высокое значение по сравнению с предыдущей версией при внесении изменений либо в **sence.ts **, ** iframe.ts ** или ** metadata.json**. 
> 
> {.is-warning}

In some situations, presences may behave unexpectedly or could use some minor changes to improve their functionality. Here is a list of rules that you **must** follow while modifiying presences.

- Вы ** не** можете переписать свой presence или сменить его автора. If the presence author was banned from the official server or hasn't made the required changes within a month, you may contact a reviewer to see if you can to rewrite the presence.
- Если вы вносите изменения в presence и изменяете не менее ** четверти ** кодовой базы presence's, вы можете добавить себя в качестве участника. Свяжитесь с верификатором для получения дополнительной информации по этому вопросу.   - Если вы вносите изменения в presence и изменяете не менее ** четверти ** кодовой базы presence's, вы можете добавить себя в качестве участника. Contact a reviewer for more information about this subject.
-  Anyone may provide hotfixes to fix bugs; however, do **not** to make changes that are **not** required. Valid modifications include general fixes (code and typos), additions (descriptions and tags), missing files, etc. ** Не ** меняйте изображения, если они не устарели и находятся в спецификациях.

# Verification

> ** Весь ** код, добавленный в магазин, будет лицензирован в соответствии с `Mozilla Public License 2.0`. 
> 
> {.is-info}

> Если вам нужно связаться с кем-либо, пожалуйста, используйте наш официальный сервер Discord. All reviewers will have the `Reviewer` role on their profile. 
> 
> {.is-info}

> Please keep in mind that the reviewers work voluntarily and manage other repositories in addition to this one, your pull request may not get reviewed until hours or even days after it has been created. 
> 
> {.is-warning}

> ** Всегда ** имейте актуальную ветвь перед созданием запроса. This will help limit false positives from the checks. 
> 
> {.is-warning}

The most important process of presence development is getting your presence on the store. This is done by making a [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) on GitHub on the `PreMiD/Presences` repository. Our reviewers will confirm that your presence is up to standards and will push it onto the store.

<div>
  <h2 style="font-size: 2rem; margin-bottom: 0;">Presence Reviewers</h2>
  <a href="https://github.com/Bas950"><img src="https://github.com/Bas950.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/Timeraa"><img src="https://github.com/Timeraa.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/ririxichan"><img src="https://github.com/ririxichan.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <br />
</div>

## `Restrictions`

Repetitive offenses such as breaking guidelines, spamming pull requests, threats, or innapropriate behavior will get you banned from creating presences.

In this scenerio, the following changes will occur:

- Presences under your management will be transferred to the PreMiD bot or another user (reviewer decision). The application id for each presence will be recreated under the new owner's name.
- All of your issues and pull requests (presence creation, presence contribution, etc) created following the ban will be prompty closed.
- Tickets created under your name regarding presence development will be deleted.


## `Проверяется`

Несколько вещей, которые вы должны знать после открытия запроса:

- Требуется 2 рецензента, чтобы объединить запрос.
- Если запрос неактивен в течение 14 дней, он будет незамедлительно закрыт.
- Все проверки ** должны** быть пройдены для объединения.
- ⚠️ Вы ** должны ** предоставить новые, без изменений скриншоты (сделанные вами), показывающие параллельное сравнение вашего профиля и веб-сайта, чтобы доказать, что ваше presence работает. Вам разрешено смешивать скриншоты вместе для просмотра удовольствия.</em> Это относится и к созданию, и модификации.
- ⚠️ You are also **required** to include screenshots of the presence settings in the extension if supplied. An example can be seen [here](https://imgur.com/a/OD3sj5R).

## `Проверки`

![Проверки](https://i.imgur.com/BCDZQe9.png)

В настоящее время presence проходит 2 отдельных этапа проверки. All of these checks help the reviewers determine whether your presence is suitable for deployment.

- `Codacy` is a bot that checks for code quality. Если вы когда-либо получаете ошибки по новым проблемам, Вым ** необходимо ** их исправить.
- `Проверка схемы` просканирует файл `metadata.json` для любых ошибок (например, отсутствующие поля, недопустимые типы значений и т.д.). Если вы когда-нибудь увидите какие-либо новые проблемы, Вам также ** необходимо ** исправить их. Добавление поля схемы в файл `metadata.json` позволит вашему текстовому редактору (если поддерживается) показать вам эти ошибки во время разработки.

## `Дополнительные правила`

- **Всегда** убеждайтесь, что вы запускаете ваше presence в наиболее подходящей папке, если его имя начинается с _любой_ Латинской буквы, то он должен находиться в его алфавитном матче (например, `D/dアニメストア` or `G/Google`). Любые другие Unicode / нелатинские символы ** должны ** находиться в папке ` # ` (например, `#/ 巴哈姆特 `) и номера в папке ` 0-9 ` (например, ` 0-9/4anime `).

После того, как вы соблюдаете все руководящие принципы с соответствующими проверками, ваше presence будет объединено с магазином.

# Вклад

`Пересмотр 2` руководящих принципов был написан и был представлен следующими лицами:

<div>
<a href="https://github.com/Alanexei"><img src="https://github.com/Alanexei.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
</div>

` Пересмотр 1 ` обслуживали следующие лица:

<div>
<a href="https://github.com/Alanexei"><img src="https://github.com/Alanexei.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
<a href="https://github.com/Bas950"><img src="https://github.com/Bas950.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
<a href="https://github.com/doomlerd"><img src="https://github.com/doomlerd.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
</div>
