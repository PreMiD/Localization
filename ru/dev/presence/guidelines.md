---
title: Руководство
description: Правила, которым должны следовать все разработчики presence, чтобы добавить свое presence.
published: true
date: 4 июня 2020г. 18:35:21
tags:
---

# Руководство

При публикации Presence на GitHub, мы требуем, чтобы вы следовали правил. Для некоторых эти строгие правила могут показаться тяжелыми. Тем не менее, осуществление этих правил не позволит нам и пользователям столкнуться с какими-либо проблемами.

# Создание

Основные правила развития presence заключаются в следующем:

- Presences **должны** быть связанным с выбранным веб-сайтом.
- Presences **не могут** быть сделаны для незаконных веб-сайтов. (например, стрессоры, маркетинг наркотиков, детская порнография и т.д.)
- Структура файла должна быть чистой и управляемой, не включать файлы, которые не указаны. (например, папки vscode и git, файлы изображений и текста и т. д.)
- Вы должны иметь правильную структуру файла, черновики **не** разрешены.
- Presences для веб-сайтов (`.onion` TLD) или веб-сайтов с бесплатными доменами/хостами (для e.., `.TK` [все бесплатные домены Freenom], `.RF`, `GD`, и т. д.) **не разрешены**, исключения могут быть сделаны, если представлено доказательство того, что они заплатили за домен.
- Presences которые нацелены на внутренние страницы браузера (например, веб-магазин Chrome, ` chrome: // `, ` about: ` и т. д.) ** не разрешены **, поскольку они требуют, чтобы экспериментальный флаг был включен на стороне пользователя и потенциально мог повредить их браузеры.
- Presences с поддержкой только одного субдомена ** не будет ** разрешено, так как они могут показаться неработающими для других страниц (например, домашняя страница), исключения могут быть сделаны для политики и контактных страниц (контент, который используется не часто) или сайтов, где другой контент не связан. (например, страницы википедии)
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

или если вы используете `iframe.ts` файл:

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

> Для удобства наших разработчиков presence, мы предоставили схему, которую вы можете использовать для проверки целостности вашего `metadata` файла. Это совершенно необязательно и не требуется в процессе проверки. 
> 
> {.is-info}

> Настоятельно рекомендуется организовать ваш `metadata` файл в формате, показанном ниже, и вы должны иметь грамматически правильные названия служб, описания, теги и поля настроек. Все, что не соответствует спецификациям, ** не будет ** разрешено. 
> 
> {.is-warning}

Каждое presence имеет файл дескриптора с именем ` metadata.json`, метаданные имеют строгий стандарт, и пример этого файла может быть представлен ниже:

```json
{
  "$schema": "https://schemas.premid.app/metadata/1.0",
  "author": {
    "name": "ПОЛЬЗОВАТЕЛЬ",
    "id": "ID"
  },
  "contributors": [
    {
      "name": "ПОЛЬЗОВАТЕЛЬ",
      "id": "ID"
    }
  ],
  "service": "СЕРВИС",
  "description": {
    "en": "ОПИСАНИЕ"
  },
  "url": "ССЫЛКА",
  "version": "ВЕРСИЯ",
  "logo": "ССЫЛКА",
  "thumbnail": "ССЫЛКА",
  "color": "#HEX000",
  "tags": ["TAG1", "TAG2"],
  "category": "КАТЕГОРИЯ",
  "regExp": "REGEXP",
  "iFrameRegExp": "REGEXP",
  "iframe": false,
  "settings": [
    {
      "id": "ID",
      "title": "ОТОБРАЗИТЬ НАЗВАНИЕ",
      "icon": "БЕСПЛАТНЫЕ ИКОНКИ FONTAWESOME",
      "value": true
    },
    {
      "id": "ID",
      "if": {
        "ID": true
      },
      "title": "ОТОБРАЗИТЬ НАЗВАНИЕ",
      "icon": "БЕСПЛАТНЫЕ ИКОНКИ FONTAWESOME",
      "value": "\"%song%\" by %artist%",
      "placeholder": "use %song% or %artist%"
    },
    {
      "id": "ID",
      "title": "ОТОБРАЗИТЬ НАЗВАНИЕ",
      "icon": "БЕСПЛАТНЫЕ ИКОНКИ FONTAWESOME",
      "value": 0,
      "values": ["1", "2", "etc."]
    }
  ]
}
```

> Если поле указано как дополнительное для [ документации](https://docs.premid.app/en/dev/presence/metadata) и ваше presence использует для него значение по умолчанию, не включайте его в файл `metadata`. (например, presence без поддержки iframe не потребует поле `iframe`.) 
> 
> {.is-warning}

> Все изображения в `metadata` файл должен быть размещен на `i.imgur.com` или на CDN, который даёт вам право для **изменить** файлы изображений. Контент, размещенный на самом веб-сайте, **не** разрешается, так как оно может менять место неохотно. 
> 
> {.is-warning}

Список полей и их правил перечислены ниже:

### **`$schema`**

- Ключ _схемы_ **должен** содержать знак доллара в начале его действия, это предупредит ваш текстовый редактор, что вы хотите проверить ваш JSON-файл на модель. _Как уже говорилось ранее, вам не нужно включать схему, но если вы включите её, то вы должны принять это во внимание_

### **`author`**

- ID _значение_ **должно** быть вашим Discord snowflake ID. Вы можете получить это включив [режим разработчика](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-). _ Пожалуйста ** не** путайте это с ID приложения, который предназначен только для вашего presence._

### **`contributors`**

- **не** добавляйте себя в качестве автора и не добавляйте кого-нибудь в качестве автора, если только они не помогли с presence.

### **`service`**

- Имя службы ** должно ** быть именем каталога presence. Например, если presence находится на `/websites/Y/YouTube/`, название сервиса должно быть `YouTube`.

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
- You are **required** to add an `NSFW` tag if the presence is for an NSFW website.

### **`category`**

- The category **must** be one of the following listed on the [documentation](https://docs.premid.app/en/dev/presence/metadata#presence-categories).

### **`regExp`** <br /> **`iFrameRegExp`**

- Regular expressions **must** be valid. Please test your expressions with the tools listed on the [documentation](https://docs.premid.app/en/dev/presence/metadata#testing).

### **`settings`**

- If you decide to make a format string (for e.g., `%song% by %artist%`), you must have the variables surrounded by a percent sign on either side. Variables like `%var`, `var%`, or `%%var%%` and anything in between are **not** permitted for the sake of standardization.

## [**presence.ts**](https://docs.premid.app/en/dev/presence/class)

> The code you write **must** be _well-written_ and **must** be _readable_ and all strings must be grammatically correct (grammar errors on websites can be ignored). 
> 
> {.is-warning}

Here is a list of rules you must follow when writing your `presence.ts` file:

- **Always** declare a new instance of the `Presence` class before any other variable to avoid rare issues that may occur; this is not a requirement by design so it could be removed in the future.
- **Never** use custom functions when [native variants are available](https://docs.premid.app/dev/presence#files-explained); this makes sure fixes on the extension level also apply to your presences. You're free to use whatever you need if you do not find them listed in the docs.
- It is **forbidden** to code presences for a site without adding support to its primary language (for e.g., a YouTube presence coded with support only for Portueguese and Japanese, but not English itself.)
- The `smallImageKey` and `smallImageText` fields are intended to provide additional/secondary context (such as `playing/paused` for video sites, `browsing` for regular sites, and other cases) not to promote Discord profiles or anything unrelated to PreMiD.
- You are **not** allowed to access `localStorage`.
- When accessing cookies for stored data, please prefix the key with `PMD_`.
- You many only make HTTP/HTTPS requests to `premid.app` or the presence website API. If you are using external domains, you will be required to explain why it is necessary.

## [**tsconfig.json**](https://docs.premid.app/en/dev/presence/tsconfig)

> Do **not** write your own `tsconfig.json` file, use what has been provided on [documentation](https://docs.premid.app/en/dev/presence/tsconfig). 
> 
> {.is-warning}

## Modification

> You **must** change the version in the **metadata** to be a higher value from the previous version when making changes to either the **presence.ts**, **iframe.ts** or **metadata.json**. 
> 
> {.is-warning}

In some situations, presences may behave unexpectedly or could use some minor changes to improve their functionality. Here is a list of rules that you **must** follow while modifiying presences.

- You are **not** allowed to rewrite a presence or change its author. If the presence author was banned from the official server or hasn't made the required changes within a month, you may contact a verifier to see if you can to rewrite the presence.
- Anyone may provide hotfixes to fix bugs; however, try **not** to make changes to code that does **not** need to be fixed. Valid modifications are, but **not** limited to, _missing paths_, _typos_, _missing images_, etc.
- If you make modifications to a presence and change at least a **quarter** of the presence's codebase, you are allowed to add yourself as a contributor. Contact a verifier for more information about this subject.
- Make sure the modifications are useful. These may include fixes (code and typos), additions (descriptions and tags), etc. Do **not** change images if they are not outdated and are in specifications.

# Проверка

> If you need to contact someone, please use our official Discord server. All verifiers will have the `Presence Verifier` role on their profile. 
> 
> {.is-info}

> **All** code contributed to the store will be licensed under the `Mozilla Public License 2.0`. 
> 
> {.is-info}

> **Always** have an up-to-date fork before creating your pull request. This will help limit false positives from `DeepScan`. 
> 
> {.is-warning}

The most important process of presence development is getting your presence on the store. This is done by making a [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) on GitHub on the `PreMiD/Presences` repository. Our verifiers will confirm that your presence is up to standards and it will be pushed onto the store.

<div>
  <h2 style="font-size: 2rem; margin-bottom: 0;">Verifiers</h2>
  <a href="https://github.com/Alanexei"><img src="https://github.com/Alanexei.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/Bas950"><img src="https://github.com/Bas950.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/doomlerd"><img src="https://github.com/doomlerd.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/frozaum"><img src="https://github.com/frozaum.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/TheDropX"><img src="https://github.com/TheDropX.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <br />
</div>

## `Reviewing`

A few things you should know after opening a pull request:

- It takes 2 reviewers to merge a pull request.
- If a pull request is inactive for a period of 7 days, it will be promptly closed.
- All checks **must** be passed in order to merge.
- ⚠️ You **must** provide new, unaltered screenshots (taken by you) showing a side-by-side comparison of your profile and the website to prove that your presence works. _You are allowed to stitch screenshots together for viewing pleasure_ This applies for both creation and modification.

## `Checks`

![Checks](https://i.imgur.com/bk0A1iY.png)

Currently, a presence goes through 2 separate stages of checks. All of these checks help the verifiers determine whether your presence is suitable for deployment.

- `DeepScan` is a bot that checks for code quality. If you ever receive errors for new issues, you are **required** to fix them.
- `Schema Validation` will scan your `metadata.json` file for any errors (for e.g., missing fields, invalid value types, etc.). If you ever see any new issues, you are also **required** to fix those. Adding a schema field to your `metadata.json` file will allow your text editor (if supported) to show you these errors during development.

## `Additional Rules`

- **Always** make sure to start your presence in the most appropriate folder, if its name starts with _any_ Latin letter then it must be under its alphabetical match (for e.g., `D/dアニメストア` or `G/Google`). Any other Unicode/non-Latin characters **must** be under the `#` folder (for e.g., `#/巴哈姆特`) and numbers under the `0-9` folder (for e.g., `0-9/4anime`).

After meeting all of the guidelines with the proper reviews and checks, your presence will be merged with the store.

# Contributions

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
