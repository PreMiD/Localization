---
title: Metadata.json
description: Містить основні дані про присутність
published: true
date: 2021-02-07T17:12:06.799Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:52.965Z
---

# Metadata.json

If you want to publish a presence to the store and load it via the extension, you should create the `metadata.json` file in your `dist` folder.

An example of that file can be found below.

```typescript
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
  "altnames": ["SERVICE"],
  "description": {
    "en": "DESCRIPTION"
  },
  "url": "URL",
  "regExp": "REGEXP",
  "iFrameRegExp": "REGEXP",
  "version": "VERSION",
  "logo": "URL",
  "thumbnail": "URL",
  "color": "#45A8FC",
  "tags": ["TAG1", "TAG2"],
  "category": "CATEGORY",
  "iframe": false,
  "settings": [
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

## Розуміння metadata.json

Цей приклад виглядає дуже дивним, так? Не хвилюйтеся, для чого не так складно зрозуміти, для чого потрібна кожна змінна.

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
      <td style="text-align:left"><b>автор</b></td>
      <td style="text-align:left">Should contain an Object with the <code>name</code> and <code>id</code> of the presence developer. <code>name</code> is your Discord username without the identifier(#0000). Користувач <code>id</code> може бути скопійований з Discord, увімкнувши режим розробника
        і правою кнопкою миші в вашому профілі.</td>
      <td style="text-align:left"><code>Об'єкт</code></td>
      <td style="text-align:left"><code>Ні</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>учасники проєкту</b></td>
      <td style="text-align:left">Should contain an Object with the <code>name</code> and <code>id</code> of the contributor. <code>name</code> is your Discord username without the identifier(#0000). Користувач <code>id</code> може бути скопійований з Discord, увімкнувши режим розробника
        і правою кнопкою миші в вашому профілі.</td>
      <td style="text-align:left"><code>Масив&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>Так</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>сервіс</b></td>
      <td style="text-align:left">Назва служби, яку підтримує ця присутність.</td>
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
      <td style="text-align:left"><b>опис</b></td>
      <td style="text-align:left">Description of the service <b>NOT</b> the presence. Ваш опис має бути з ключових значень, які вказують на мову, а також опис цієї конкретної мови. Створюйте описи мовами <i>, яких ви знаєте</i>, наші перекладачі будуть вносити зміни до вашого файлу метаданих. View the category for presence languages for a list. </td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>Ні</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>URL-адреса</b></td>
      <td style="text-align:left">URL of the service.<br>
      <b>Example:</b><code>vk.com</code><br>
      <b>This url must match the url of the website as it will be used to detect wherever or not this is the website to inject the script to. This may only be used as an array when there are more than one urls.</b></td>
      <td style="text-align:left"><code>Стрічка, масив&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Ні</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b></td>
      <td style="text-align:left">Стрічка регулярного виразу, яка використовується для пошуку адрес.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Так</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>версія</b></td>
      <td style="text-align:left">Версія вашої присутності.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Ні</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>логотип</b></td>
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
      <td style="text-align:left"><b>колір</b></td>
      <td style="text-align:left"><code>#HEX</code> значення. Ми рекомендуємо використовувати основний колір служби
        , який ваша присутність.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Ні</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>теги</b></td>
      <td style="text-align:left">Масив із мітками, вони допоможуть користувачам шукати вашу присутність на сайті.</td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Ні</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>категорія</b></td>
      <td style="text-align:left">Рядок, який використовується для представлення категорії, на яку падає присутність.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Ні</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b></td>
      <td style="text-align:left">Визначає, чи використовуються <code>iFrames</code></td>
      <td style="text-align:left"><code>Boolean</code></td>
      <td style="text-align:left"><code>Так</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b></td>
      <td style="text-align:left">Селектор регулярних виразів, який вибирає iframes для впровадження параметрів.</td>
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
      <td style="text-align:left">An array of settings the user can change</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>Так</code></td>
    </tr>
  </tbody>
</table>

## Регулярні вирази

Якщо ви хочете вивчити регулярні вирази, ось декілька веб-сайтів.

#### Навчання

• [Quick Starter Video](https://youtu.be/sXQxhojSdZM) • [RegexOne](https://regexone.com/) • [Regular Expressions Info](https://www.regular-expressions.info/tutorial.html)

#### Тестування

• [Regexr](https://regexr.com/) • [Regex101](https://regex101.com/)

## Presence languages

PreMiD is a polygot service, meaning there are a multitude of languages involved to connect users around the globe. A full list of languages can be found with this [API endpoint](https://api.premid.app/v2/langFile/list). To customize your presence even more you can allow users to select their presence display language see [`multiLanguage`](#multilanguage) for more.

## Presence settings
Setup interactive settings so users can customize the presence!
```typescript
"settings": [
  {
    "id": "ID",
    "multiLanguage": true //See https://docs.premid.app/dev/presence/metadata#multilanguage
  },
  {
    "id": "ID",
    "title": "DISPLAY TITLE",
    "icon": "FONTAWESOME ICON", //Example "fas fa-info"
    "value": true //Boolean value will make it an on/off switch with the value as the default value
  },
  {
    "id": "ID",
    "if": {
      "ID": true //If another setting equals this value (true/false/0/1/etc.) then show this button
    },
    "title": "DISPLAY TITLE",
    "icon": "FONTAWESOME ICON",
    "value": "\"%song%\" by %artist%", //Putting in a string will make the setting an input one, where you can use a custom input.
    "placeholder": "use %song% or %artist%" //When input is empty it will show this grayed out
  },
  {
    "id": "ID",
    "title": "DISPLAY TITLE",
    "icon": "FONTAWESOME ICON",
    "value": 0, //Default value of the selector
    "values": ["1", "2", "etc."] //Will make the setting a selector where you select which one you want
  }
]
```

### `multiLanguage`

#### Вступ

The `multiLanguage` setting is used to allow users to manually select the language they want to presence to be shown in. This requires you to use strings from our [API](https://api.premid.app/v2/langFile/presence/en), for information on how to add strings click [here](/dev/presence/metadata/adding-new-strings).

#### Setup

The `multiLanguage` setting is a special case, it doesn't require a `title` nor `icon` nor `value` or `values` like other settings but it does require you some more things to setup!

The `multiLanguage` key can be set to the following:

`true`: use this if you are only going to use strings of the `general.json` file and the `<service>.json` file of the [Localization Repository](https://github.com/PreMiD/Localization/tree/master/src/Presence). `string`: name of the file excluding the extension (.json) inside the [Localization Repository](https://github.com/PreMiD/Localization/tree/master/src/Presence) (excluding the `general` file, since it's always loaded). Only common languages of both the `general` and inputted file will be listed. `Array<String>`: if you are using more than one file inside the [Localization Repository](https://github.com/PreMiD/Localization/tree/master/src/Presence) you can specify all the values in an array (excluding the `general` file, since it's always loaded). Only common languages of all the files will be listed.

#### Adding new strings

##### Клонування проекту

1. Відкрийте термінал і введіть `git clone https://github.com/PreMiD/Localization`.
2. Виберіть бажану теку.
3. Відкрийте його у вашому редакторі коду.

##### Creating the file

1. Go into the `src` folder.
2. Go into the `Presence` folder.
3. Make a file named `<service>.json`. (Service is the **name** (not an URL) in lowercase of the service you want to support.)

##### Adding the strings

Each `string` is an `Object` where from the name starts with the service name and then the so called stringName with a dot in between them.

The stringName is a 1 word identifier of the message.

The `Object` has 2 properties; `message` and `description`. `message` is the text that needs to be translated. `description` is a description of the message to help our translators understand what they are translating.

**Note:** Do not add any duplicate strings. (This includes strings out of the `general.json` file but not the other files.)

Visualization of the the file:

```typescript
{
  "<service>.<stringName>": {
    "message": "Text that needs to be translated.",
    "description": "This explains what the message above is."
  },
  "<service>.<stringName>": {
    "message": "Text that needs to be translated.",
    "description": "This explains what the message above is."
  }
}
```

After you have fully made the file with strings you can create a Pull Request on the [Localization Repository](https://github.com/PreMiD/Localization), in the description you **must** include a link to your Pull Request of the presence updated using these new strings from the [Presence Repository](https://github.com/PreMiD/Presences).

#### Default keys
The keys you didn't have to set are automatically set to the following: `title`: "Language" **Note:** This is translated into their default language (browser language). `icon`: "fas fa-language" ([Preview](https://fontawesome.com/icons/language)) `value`: **Set to their browser language if it is available (100% translated), otherwise English.** `values`: **Set to the available languages (languages that have it 100% translated).**

**Note:** These are in no way changeable.

### Методи

Use the following methods to get settings info in your presence files:
#### `getSetting(String)`
Returns value of setting.
```typescript
const setting = await presence.getSetting("pdexID"); //Replace pdexID with the id of the setting
console.log(setting); // This will log the value of the setting
```

#### `hideSetting(String)`
Hides given setting.
```typescript
presence.hideSetting("pdexID"); //Replace pdexID with the id of the setting
```

#### `showSetting(String)`
Shows given setting (Only works if the setting was already hidden).
```typescript
presence.showSetting("pdexID"); //Replace pdexID with the id of the setting
```

## Категорії присутності

Визначаючи присутність, необхідно зазначити категорію, яку створює присутність. Це скомпільований список категорій, які можна використовувати.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Категорія</th>
      <th style="text-align:left">Ім'я</th>
      <th style="text-align:left">Опис</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>аніме</b></td>
      <td style="text-align:left"><b>Аніме</b></td>
      <td style="text-align:left">Все, що пов'язане з анімацією, з форумів до відео-платформ.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>ігри</b></td>
      <td style="text-align:left"><b>Ігри</b></td>
      <td style="text-align:left">Будь-який сайт, який має пов'язаний з грою, наприклад <code>Кахуот</code> або <code>Скорбл.io</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>музика</b></td>
      <td style="text-align:left"><b>Музика</b></td>
      <td style="text-align:left">Це веб-сайти, які пропонують контент, пов'язаний з музикою, чи це трансляцію чи завантаження.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>соціальне</b></td>
        <td style="text-align:left"><b>Соціальне</b></td>
      <td style="text-align:left">Веб-сайти, які використовуються для створення та обміну контентом, або для участі в інших соціальних мережах.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>відео</b></td>
        <td style="text-align:left"><b>Відео & прямі трансляції</b></td>
      <td style="text-align:left">Веб-сайти, які служать цілі визначення відео та потоків.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>інше</b></td>
      <td style="text-align:left"><b>Інше</b></td>
      <td style="text-align:left">Все, що не належить до конкретної категорії, вказаної вище.</td>
    </tr>
  </tbody>
</table>

