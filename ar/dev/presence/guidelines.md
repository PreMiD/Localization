---
title: الإرشادات
description: قواعد جميع مطوري الpresence يجب أن يتم اتباعها لإضافة الpresence الخاصة بهم.
published: صحيح
date: 2020-12-29T02:18:29.846Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:45.733Z
---

# الإرشادات

عند نشر Presences [مستودع GitHub](https://github.com/PreMiD/Presences)، نطلب منك اتباع مجموعة من المبادئ التوجيهية. للبعض. قد تبدو هذه قواعد صارمة. مع ذلك، فإن تنفيذ هذه القواعد سيمنعنا ويمنع المستخدمين من الوقوع في مشاكل.

# إنشاء

القواعد العامة لتطوير الpresence هي كما يلي:

- الPresences** عليها أن تكون ** مرتبطة بـ الموقع الإلكتروني المختار.
- الPresences **لا يمكنها أن** تكون لمواقع غير قانونية. (على سبيل المثال، الضغوطات، تسويق الأدوية، المواد الإباحية للأطفال، إلخ.)
- يجب أن يكون أساس الملف نظيف ومدار ، ولا تقم بتضمين الملفات التي لم يتم تحديدها. (على سبيل المثال، vscode ومجلدات git، وملفات الصور والنصوص الكتابية، إلخ.)
- تحتاج إلى بنية ملف صحيحة، المسودات **غير**مسموح بها.
- الPresences لمواقع ويب مع (`.onion` TLDs) أو المواقع مع مجانية الخوادم/المضيفين (مثلا، `.TK` [جميع نطاقات Freenom المجانية]، `. RF`، `GD`، إلخ) هي **غير مسموح بها،** ويمكن تقديم استثناءات إذا قدم دليل يثبت أنهم دفعوا ثمن هذا الخادم.
- الdomain للpresence يجب ان يكون في حدود الشهرين علي الاقل.
- الpresences التي تستهدف صفحات المتصفح الداخلية (مثل متجر ويب كروم، `كروم://`، `عن:` صفحات، وما إلى ذلك) هي **غير مسموحة** لأنها تتطلب أن يتم تمكين العلم التجريبي في نهاية المستخدم ويمكن أن تسبب ضرراً للمتصفحات الخاصة بهم.
- الpresences المدعومة لنطاق فرعي واحد فقط **لن** يسمح بها، حيث أنها قد تبدو مكسورة لصفحات أخرى (مثل الصفحة الرئيسية)، يمكن وضع استثناءات لصفحات السياسات وجهات الاتصال (المحتوى الذي لا يستخدم في كثير من الأحيان) أو المواقع التي لا يرتبط بها المحتوى الآخر. (على سبيل المثال، صفحات ويكا)
- Presences بالنسبة إلى أجهزة الراديو عبر الإنترنت ، لا يُسمح بها إلا إذا كان للراديو 100 مستمع أسبوعيًا على الأقل و 15 مستمعًا متفق عليه.
- الpresences رديئة الجودة (أو الpresences ذات السياق الصغير) **غير** مسموح بها (مثلا، التي تعرض الشعار والنص فقط ولكن دون تغييره مرة أخرى.)
- بما في ذلك مجلد `dist`, و ملفات `presence.ts`, `iframe.ts` و `metadata.json` الزاميين بحيث تكون الننتيجة ما يتم تمثيله في المخطط التالي:

```bash
presence
├── dist
│   ├── metadata.json
│   └── presence.js
├── presence.ts
└── tsconfig.json
```

أو إذا كنت تستخدم ملف `iframe.ts`:

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

> من أجل مصلحة مطوري presence الخاص بنا، لقد قدمنا مخططا يمكنك استخدامه للتحقق من سلامة ملف `البيانات الوصفية`. وهذا أمر اختياري تماما، ولا لزوم له أثناء عملية الاستعراض. 
> 
> {.is-info}

> من المستحسن بشدة أن تقوم بتنظيم ملف `بيانات التعريف` الخاص بك بالشكل الموضح أدناه، ويجب أن يكون لديك أسماء الخدمة والأوصاف والعلامات والحقول الصحيحة نحوياً. أي شيء غير منظم حسب المواصفات **لن** يسمح به. 
> 
> {.is-warning}

> الpresences لمواقع الويب التي تتملك محتوى جنسي **يجب** عليها أن تمتلك رمز `غ ر ل (غير لائق للعمل)"nfsw"`, و شعارها/صورتها المصغرة **لا** يجب عليها أن تحتوي على هذا المحتوى. 
> 
> {.is-warning}

كل presence لديه ملف وصفي يسمى `metadata.json`، البيانات الوصفية لها معيار صارم، ويمكن أن يظهر أدناه مثال لهذا الملف:

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

> إذا كان الحقل مدرجاً كخيار في [المستندات](https://docs.premid.app/en/dev/presence/metadata) ويستخدم الpresence القيمة الافتراضية له، لا تضمنها في ملف `البيانات الوصفية`. (على سبيل المثال، presence بدون دعم iframe لن يحتاج إلى الحقل `iframe`) 
> 
> {.is-warning}

> يجب استضافة جميع الصور في ملف `بيانات التعريف` في `i.imgur.com`. استخدام المحتوى المستضاف على الموقع هو **غير مسموح** لأنه يمكنه تغيير المسارات والملفات بشكل غير طوعي. 
> 
> {.is-warning}

وترد أدناه قائمة بالحقول وقواعدها:

### **`$schema`**

- مفتاح _المخطط_ **يجب** أن يتضمن إشارة الدولار في بدايته، هذا سيشير إلى محرر النص الخاص بك الذي تريد التحقق به من صحة ملف JSON الخاص بك في مقابل نموذج. _كما ذكر سابقا، أنت لست بحاجة إلى إدراج مخطط، ولكن إذا قمت بتضمينه، يجب أن تأخذ هذا في الاعتبار_

### **`author`**

- The ID _value_ **must** be your Discord snowflake ID. يمكنك الحصول عليها عن طريق تمكين وضع المطور [](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-). _الرجاء عمل**ليس**لتخلط بين هذا وبين معرف التطبيق الخاص بك ، وهو فقط لملفpresence._

### **`contributors`**

- **لا** تضيف نفسك كمساهم، ولا تضيف شخصاً آخر كمساهم إلا إذا كان قد ساعد في الpresence.

### **`service`**

- اسم الخدمة **يجب ان تكون** اسم دليل الـpresence. على سبيل المثال، إذا كان الـpresence واقع في `/websites/Y/YouTube/`، اسم الخدمة يجب ان تكون `YouTube`.
- لا يمكنك **** استخدام عنوان url كاسم الخدمة ما لم يستخدم الموقع عنوان url كاسمه الرسمي. إذا كان الاسم غير وصفي و يمكن اعتباره غامضاً، فإن استخدام عنوان url هو **مطلوب**. (على سبيل المثال، `YouTube` مسموح به لأن هذا هو الاسم الرسمي و هو وصفي ، بينما `youtube.com` ليس كذلك. `Top` اسم غير وصفي، لذلك استحدام الرابط `top.gg` يكون **مطلوب**.)

### **`altnames`**

- **** فقط استخدم هذا في سيناريوهات حيث يقع الموقع تحت أسماء رسمية متعددة (على سبيل المثال، Pokémon و 포켓몬스터) أو لجعل من الأسهل البحث عن presence دون استخدام أحرف خاصة (على سبيل المثال Pokémon و Pokemon). *الإصدارات المختصرة* من أسماء الخدمة تقل عن `علامات`.

### **`description`**

- **All** presences are **required** to have an English description regardless of the website's prefered language.
- Do **not** try and translate the description yourself unless you know that language, translators will modify your `metadata.json` and change the descriptions if necessary.

### **`url`**

- The url **must** be a string if the website only uses one domain. If the website uses multiple, make this an array and specify each one.
- Do **not** include protocols in the url (for e.g., `http` or `https`), and do not include query parameters in the url (for e.g., `www.google.com/search?gws_rd=ssl` which should be `www.google.com`)

### **`version`**

- Always make sure the version number follows [semantic versioning standards](https://semver.org), which translates to the following scheme: `<NEW-FEATURE>.<HUGE-BUGFIX>.<SMALL-BUGFIX-OR-METADATA-CHANGES>`. Anything else like `1.0.0.1`, `1.0`, `1`, `1.0.0-BETA` or changing `1.0.0` to `2.0.0` on a bug fix/small change is **not** permitted.
- The version **must** always start at `1.0.0` unless told otherwise, other versions will **not** be permitted.

### **`logo`**

- The logo **must** be a square image with a `1:1` aspect ratio.
- The image is **required** to have a minimum resolution of `512x512` pixels. You can upsize the imagine using a tool like [waifu2x](http://waifu2x.udp.jp/).

### **`thumbnail`**

- The thumbnail **should** preferably be a [wide promotional card](https://i.imgur.com/3QfIc5v.jpg) or a [screenshot](https://i.imgur.com/OAcBmwW.png) if the first is **not** available.

### **`color`**

- The color **must** be a hexadecimal value between `#000000` and `#FFFFFF`.
- The color string **must** be prepended with a hash symbol.

### **`tags`**

- **All** presences are required to have at least _one_ tag.
- Tags must **not** include any spaces, slashes, single/double quotation marks, Unicode characters, and should always be lowercase.
- Tags **should** preferably include alternate service names to make searching easier (for e.g., if an Amazon presence had included AWS support, it would have its tags like `amazon-web-services` and `aws`)
- You are **required** to add an `NSFW` tag if the presence is for an NSFW website.

### **`category`**

- The category **must** be one of the following listed on the [documentation](https://docs.premid.app/en/dev/presence/metadata#presence-categories).
- The presence must use a category that matches the content of the website. (for e.g., don't use `anime` when the website isn't related to anime).

### **`regExp`** <br /> **`iFrameRegExp`**

- Regular expressions **must** be valid. Please test your expressions with the tools listed on the [documentation](https://docs.premid.app/en/dev/presence/metadata#testing).

### **`الإعدادات`**

- If you decide to make a format string (for e.g., `%song% by %artist%`), you must have the variables surrounded by a percent sign on either side. Variables like `%var`, `var%`, or `%%var%%` and anything in between are **not** permitted for the sake of standardization.
- The name of settings must **not** be in all capital letters. For example, names such as `SHOW BROWSING STATUS` will **not** be permitted; however, names such as `Show Browsing Status` or `Show browsing status` are permitted.
- Adding custom strings to the [Localization Repository](https://github.com/PreMiD/Localization) to later be used within the `multiLanguage` setting is only allowed if the presence has already been released before and has aquired at least 1000 users.

## [**presence.ts**](https://docs.premid.app/en/dev/presence/class)

> The code you write **must** be _well-written_ and **must** be _readable_ and all strings must be grammatically correct (grammar errors on websites can be ignored). 
> 
> {.is-warning}

> Each presence follows a strict linting ruleset which will be checked during the review process. A couple of recommendations can be seen below. - [TypeScript Plugin Recommendations for Strict Type Checking](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules) - [ESlint Recommendations](https://eslint.org/docs/rules) 
> 
> {.is-info}

Here is a list of rules you must follow when writing your `presence.ts` file:

- **Always** declare a new instance of the `Presence` class before any other variable to avoid rare issues that may occur; this is not a requirement by design so it could be removed in the future.
- **Never** use custom functions when [native variants are available](https://docs.premid.app/dev/presence#files-explained); this makes sure fixes on the extension level also apply to your presences. You're free to use whatever you need if you do not find them listed in the docs.
- It is **forbidden** to code presences for a site without adding support to its primary language (for e.g., a YouTube presence coded with support only for Portueguese and Japanese, but not English itself.)
- The `smallImageKey` and `smallImageText` fields are intended to provide additional/secondary context (such as `playing/paused` for video sites, `browsing` for regular sites, and other cases) not to promote Discord profiles or anything unrelated to PreMiD.
- You are **not** allowed to access `localStorage`.
- When accessing cookies for stored data, please prefix the key with `PMD_`.
- You may only make HTTP/HTTPS requests to `premid.app` or the presence website API. If you are using external domains, you will be required to explain why it is necessary.
- Do **not** set fields in the presence data object to undefined after it has been declared, use the `delete` keyword instead. (for e.g., use `delete data.startTimestamp` instead of `data.startTimestamp = undefined`)
- You are **not** allowed to write presences that change the functionality of a given website. This includes the addition, deletion, or modification of DOM elements.

## [**tsconfig.json**](https://docs.premid.app/en/dev/presence/tsconfig)

> Do **not** write your own `tsconfig.json` file, use what has been provided on [documentation](https://docs.premid.app/en/dev/presence/tsconfig). 
> 
> {.is-warning}

# Modification

> You **must** change the version in the **metadata** to be a higher value from the previous version when making changes to either the **presence.ts**, **iframe.ts** or **metadata.json**. 
> 
> {.is-warning}

In some situations, presences may behave unexpectedly or could use some minor changes to improve their functionality. Here is a list of rules that you **must** follow while modifiying presences.

- You are **not** allowed to rewrite a presence or change its author. If the presence author was banned from the official server or hasn't made the required changes within a month, you may contact a reviewer to see if you can to rewrite the presence.
- If you make modifications to a presence and change at least a **quarter** of the presence's codebase, you are allowed to add yourself as a contributor. Contact a verifier for more information about this subject.   - If you make modifications to a presence and change at least a **quarter** of the presence's codebase, you are allowed to add yourself as a contributor. Contact a reviewer for more information about this subject.
-  Anyone may provide hotfixes to fix bugs; however, do **not** to make changes that are **not** required. Valid modifications include general fixes (code and typos), additions (descriptions and tags), missing files, etc. Do **not** change images if they are not outdated and are in specifications.

# التحقق

> **All** code contributed to the store will be licensed under the `Mozilla Public License 2.0`. 
> 
> {.is-info}

> إذا كنت بحاجة إلى الاتصال بشخص ما، يرجى استخدام خادم الديسكورد الرسمي. All reviewers will have the `Reviewer` role on their profile. 
> 
> {.is-info}

> Please keep in mind that the reviewers work voluntarily and manage other repositories in addition to this one, your pull request may not get reviewed until hours or even days after it has been created. 
> 
> {.is-warning}

> **Always** have an up-to-date fork before creating your pull request. This will help limit false positives from the checks. 
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


## `Reviewing`

A few things you should know after opening a pull request:

- It takes 2 reviewers to merge a pull request.
- If a pull request is inactive for a period of 14 days, it will be promptly closed.
- All checks **must** be passed in order to merge.
- ⚠️ You **must** provide new, unaltered screenshots (taken by you) showing a side-by-side comparison of your profile and the website to prove that your presence works. _You are allowed to stitch screenshots together for viewing pleasure._ This applies for both creation and modification.
- ⚠️ You are also **required** to include screenshots of the presence settings in the extension if supplied. An example can be seen [here](https://imgur.com/a/OD3sj5R).

## `التحققات`

![التحققات](https://i.imgur.com/BCDZQe9.png)

Currently, a presence goes through 2 separate stages of checks. All of these checks help the reviewers determine whether your presence is suitable for deployment.

- `Codacy` is a bot that checks for code quality. If you ever receive errors for new issues, you are **required** to fix them.
- `Schema Validation` will scan your `metadata.json` file for any errors (for e.g., missing fields, invalid value types, etc.). If you ever see any new issues, you are also **required** to fix those. Adding a schema field to your `metadata.json` file will allow your text editor (if supported) to show you these errors during development.

## `قواعد إضافية`

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
