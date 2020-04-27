---
title: Metadata.json
description: Містить основні дані про присутність
published: true
date: 2020-04-24T12:45:27.030Z
tags:
---

# Metadata.json

If you want to publish a presence to the store and load it via the extension, you should create the `metadata.json` file in your `dist` folder.

Нижче ви можете знайти приклад цього файлу.

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
      <td style="text-align:left">Should contain Object with <code>name</code> and <code>id</code> of the contributor. Ім'я - це ваше ім'я користувача Discord без ідентифікатора(#0000). Користувач <code>id</code> може бути скопійований з Discord, увімкнувши режим розробника
        і правою кнопкою миші в вашому профілі.</td>
      <td style="text-align:left"><code>Масив&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>Так</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>сервіс</b>
      </td>
      <td style="text-align:left">Назва служби, яку підтримує ця присутність.</td>
      <td style="text-align:left"><code>Рядок</code>
      </td>
      <td style="text-align:left"><code>Ні</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>опис</b>
      </td>
      <td style="text-align:left">Маленький опис присутності, ви можете використовувати опис сервісу
        , якщо ви не вийшли з ідей. Ваш опис має бути з ключових значень, які вказують на мову, а також опис цієї конкретної мови. Створюйте описи мовами <i>, яких ви знаєте</i>, наші перекладачі будуть вносити зміни до вашого файлу метаданих. View the category for presence languages for a list. </td>
      <td style="text-align:left"><code>Об'єкт</code>
      </td>
      <td style="text-align:left"><code>Ні</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>URL-адреса</b>
      </td>
      <td style="text-align:left">URL of the service.<br><b>Example:</b><code>vk.com</code><br>
        <b>This url must match the url of the website as it will be used to detect wherever or not this is the website to inject the script to. This may only be used as an array when there are more than one urls.</b>
      </td>
      <td style="text-align:left"><code>Стрічка, масив&lt;String&gt;</code>
      </td>
      <td style="text-align:left"><code>Ні</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b>
      </td>
      <td style="text-align:left">Стрічка регулярного виразу, яка використовується для пошуку адрес.</td>
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
      <td style="text-align:left">Рядок, який використовується для представлення категорії, на яку падає присутність.</td>
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
      <td style="text-align:left">Селектор регулярних виразів, який вибирає iframes для впровадження параметрів.</td>
      <td style="text-align:left"><code>Рядок</code>
      </td>
      <td style="text-align:left"><code>Так</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>налаштування</b>
      </td>
      <td style="text-align:left">An array of settings the user can change</td>
      <td style="text-align:left"><code>Масив&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>Так</code>
      </td>
    </tr>
  </tbody>
</table>

## Регулярні вирази

Якщо ви хочете вивчити регулярні вирази, ось декілька веб-сайтів.

#### Навчання

• [RegexOne](https://regexone.com/) • [Regular Expressions Info](https://www.regular-expressions.info/tutorial.html)

#### Тестування

• [Regexr](https://regexr.com/) • [Regex101](https://regex101.com/)

## Presence languages

PreMiD is a polygot service, meaning there are a multitude of languages involved to connect users around the globe. A full list of languages can be found with this [API endpoint](https://api.premid.app/v2/langFile/list).

## Presence settings
Setup interactive settings so users can customize the presence!
```javascript
"settings": [
        { 
            "id": "ID",
            "title": "DISPLAY TITLE",
            "icon": "FONTAWESOME FREE ICON", //Example "fas fa-info"
            "value": true //Boolean value will make it an on/off switch with the value as the default value
        },
        {
            "id": "ID",
            "if": {
                "ID": true //If another setting equals this value (true/false/0/1/etc.) then show this button
            },
            "title": "DISPLAY TITLE",
            "icon": "FONTAWESOME FREE ICON",
            "value": "\"%song%\" by %artist%", //Putting in a string will make the setting an input one, where you can use a custom input.
            "placeholder": "use %song% or %artist%" //When input is empty it will show this grayed out
        },
        {
            "id": "ID",
            "title": "DISPLAY TITLE",
            "icon": "FONTAWESOME FREE ICON",
            "value": 0, //Default value of the selector
            "values": ["1", "2", "etc."] //Will make the setting a selector where you select which one you want
        }
    ]
```

Use the following methods to get settings info in your presence files:
### `getSetting(String)`
Returns value of setting.
```typescript
var setting = await presence.getSetting("pdexID"); //Replace pdexID with the id of the setting
console.log(setting); // This will log the value of the setting
```

### `hideSetting(String)`
Hides given setting.
```typescript
presence.hideSetting("pdexID"); //Replace pdexID with the id of the setting
```

### `showSetting(String)`
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
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>ігри</b></td>
    <td style="text-align:left"><b>Ігри</b></td>
      <td style="text-align:left">Будь-який сайт, який має пов'язаний з грою, наприклад <code>Кахуот</code> або <code>Скорбл.io</code></td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>музика</b></td>
    <td style="text-align:left"><b>Музика</b></td>
      <td style="text-align:left">Це веб-сайти, які пропонують контент, пов'язаний з музикою, чи це трансляцію чи завантаження.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>соціальне</b></td>
        <td style="text-align:left"><b>Соціальне</b></td>
      <td style="text-align:left">Веб-сайти, які використовуються для створення та обміну контентом, або для участі в інших соціальних мережах.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>відео</b></td>
        <td style="text-align:left"><b>Відео & прямі трансляції</b></td>
      <td style="text-align:left">Веб-сайти, які служать цілі визначення відео та потоків.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>інше</b></td>
    <td style="text-align:left"><b>Інше</b></td>
      <td style="text-align:left">Все, що не належить до конкретної категорії, вказаної вище.</td>
      </td>
    </tr>
  </tbody>
</table>