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

> Настоятельно рекомендуется организовать ваш `metadata` файл в формате, показанном ниже, и вы должны иметь грамматически правильные названия служб, описания, теги и поля настроек. Все, что не соответствует спецификациям, ** не будет ** разрешено.

> Присутствие веб - сайтов с явным содержанием **принудительный** имеют `nsfw` Тег и логотип / миниатюра должны быть **нет** содержать любой из этих материалов.

Каждое presence имеет файл дескриптора с именем ` metadata.json`, метаданные имеют строгий стандарт, и пример этого файла может быть представлен ниже:

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

> Если поле указано как дополнительное для [ документации](https://docs.premid.app/en/dev/presence/metadata) и ваше presence использует для него значение по умолчанию, не включайте его в файл `metadata`. (например, presence без поддержки iframe не потребует поле `iframe`.)

> Все картинки в `metadata`файл должен находиться по адресу `i.imgur.com`. Использование контента, размещенного на сайте **не** им разрешено, поскольку они могут неохотно изменять пути и файлы.

Список полей и их правил перечислены ниже:

### **`$schema`**

- Ключ _схемы_ **должен** содержать знак доллара в начале его действия, это предупредит ваш текстовый редактор, что вы хотите проверить ваш JSON-файл на модель. _Как уже говорилось ранее, вам не нужно включать схему, но если вы включите её, то вы должны принять это во внимание_

### **`author`**

- ID _значение_ **должно** быть вашим Discord snowflake ID. Вы можете получить это включив [режим разработчика](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-). _ Пожалуйста ** не** путайте это с ID приложения, который предназначен только для вашего presence._

### **`*contributors`**

- **не** добавляйте себя в качестве автора и не добавляйте кого-нибудь в качестве автора, если только они не помогли с presence.

### **`service`**

- Имя службы **должно** быть именем каталога presence. Например, если presence находится на `/websites/Y/YouTube/`, название сервиса должно быть `YouTube`.
- **не может** использовать url в качестве имени сервиса, если сайт не использует его в качестве официального имени. Если имя не описано и может считаться расплывчатым, то использование url **обязательно**. (например, `YouTube` разрешен, потому что это официальное имя и описание, в то время как `youtube.com` нет. `Топ` это неописательное имя, поэтому с помощью url `top.gg` требуется ****.)
- Если у службы есть некоторые прямые правила брендинга их имени, вы должны следовать им.

### **`*altnames`**

- Используйте это **только** тогда, когда веб-сайт имеет несколько официальных называний (например, Pokémon и 포켓몬스터) или упростить поиск presence без использования специальных символов (например, Pokémon и Pokemon). _Сокращенные_ версии названий сервисов идут под `tags`.

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
- Вы **обязаны ** добавить тег ` NSFW `, если он предназначен для веб-сайта NSFW.

### **`category`**

- Категория **должна** быть одной из следующих, перечисленных в [документации](/dev/presence/metadata#presence-categories).
- Наличие должно использовать категорию, которая соответствует содержанию веб-сайта. (например, не используйте `аниме` не имеет отношения к сайту аниме).

### **`*regExp`** <br /> **`*iFrameRegExp`**

- Регулярные выражения **должны** быть действительными. Пожалуйста, протестируйте свои выражения с инструментами, перечисленными в [документации](/dev/presence/metadata#testing).

### **`readLogs`**

- Должно быть `логическое значение` (например, `true` или `false`).
- Включает журналы для вашего присутствия.

### **`внимание`**

- Включает предупреждающий значок для запроса пользователю, что этому присутствию требуется больше шагов, чем только добавление присутствия.
- Пример присутствия, используя эту переменную метаданных, - `VLC`.

### **`settings`**

- Если вы решите сделать строку формата (например: `%song% от %artist%`), вы должны иметь переменные окружённый знаком процента с любой стороны. Переменные, такие как `%var`, `var%`, или `%%var%%` и всё что между ними, являются **не** допускаемым в целях стандартизации.
- Название настроек **не** будьте со всеми заглавными буквами. Например, такие имена как `ПОКАЗАТЬ СТАТУС ПРОСМОТРА` будем **не** быть разрешенным; однако такие имена, как `Показать статус просмотра` или `Показать статус просмотра` разрешены.
- Если вы используете многоязычную опцию, вы должны знать:
  - **Bolean** значение типа будет включать только строки из [`общих. son`](https://github.com/PreMiD/Localization/blob/master/src/Presence/general.json) из репозитория локализации или из файла присутствия (e.. когда имя присутствия является YouTube, расширение будет получать строки из `youtube.json` тоже.)
  - **Строка** значения типа (например, `youtube.json`) укажет имя файла, из которого вы хотите получить строки.
  - **Массив<String>** значение типа (например, `["youtube.json", "vlive.json"]`) укажет имя файлов, из которых вы хотите получить строки.

## [**presence.ts**](/dev/presence/class)

> Код, который вы пишете **, должен ** быть _хорошо написанным_ и ** должен ** быть _ читабельным_, и все строки должны быть грамматически правильными (грамматические ошибки на сайтах можно игнорировать).

> Каждое присутствие следует строгой линейке правил, которые будут проверяться в ходе процесса проверки. Несколько предложений можно найти ниже. [Рекомендации плагина TypeScript для проверки строгих типов](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules). [ESlint Рекомендации](https://eslint.org/docs/rules). [Prettier](https://prettier.io/).

Вот список правил, которые вы должны соблюдать при написании файла `presence.ts`:

- **Всегда** объявляйте новый экземпляр класса `Presence` перед любой другой переменной, чтобы избежать редких проблем, которые могут возникнуть; это не является обязательным требованием по дизайну, поэтому оно может быть удалено в будущем.
- **Никогда** не используйте пользовательские функции, когда [доступны собственные варианты](https://docs.premid.app/dev/presence#files-explained) это гарантирует, что исправления на уровне расширения также применимы к вашим presences. Вы можете использовать всё, что вам нужно, если вы не найдете их в документации.
- **Запрещается** кодировать presence для сайта без добавления поддержки его основного языка (например, presence на YouTube закодировано с поддержкой только для Португальского и Японского, но не самого Английского языка.)
- Поле `smallImageKey` и `smallImageText` предназначено для придания/вторичного контекста (например, `playing/paused` для видео-сайтов, `browsing` для обычных сайтов и других случаев) не рекламировать профили Discord или что-либо, не связанное с PreMiD.
- Вам **не разрешено** получить доступ к `localStorage`.
- При доступе к файлам cookie для сохраненных данных, пожалуйста, префишите ключ с помощью `PMD_`.
- Многие из вас делают HTTP/HTTPS запросы только к `premid.app` или API веб-сайта presence. Если вы используете внешние домены, вам нужно будет объяснить, почему это необходимо. Только API для запроса [`Fetch API`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).
- Делать **не** установите для полей в объекте данных присутствия значение undefined после его объявления, используйте `delete` ключевое слово вместо этого. (например, используйте `delete data.startTimestamp` вместо `data.startTimestamp = undefined`)
- Ты **не** разрешено писать присутствия, которые изменяют функциональность данного сайта. Это включает добавление, удаление или модификацию элементов DOM.

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