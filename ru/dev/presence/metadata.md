---
title: Метадата.джсон
description: Содержит основные данные о присутствии
published: true
date: 2020-04-22T18:33:51.076Z
tags:
---

# Метадата.джсон

If you want to publish a presence to the store and load it via the extension, you should create the `metadata.json` file in your `dist` folder.

Пример этого файла можно найти ниже.

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
  "tags": ["CATEGORY", "TAG"],
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

## Понимание metadata.json

Этот пример выглядит странно, да? Не волнуйтесь, это не так трудно понять для каждой переменной.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Переменная</th>
      <th style="text-align:left">Описание</th>
      <th style="text-align:left">Тип</th>
      <th style="text-align:left">Опционально</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>автор</b>
      </td>
      <td style="text-align:left">Должен содержать Объект с <code>именем</code> и <code>id</code> от разработчика присутствия. Имя пользователя Discord без идентификатора (#0000). Пользователь <code>id</code> может быть скопирован из Discord, включив разработчик
        режим и правый клик на вашем профиле.</td>
      <td style="text-align:left"><code>Объект</code>
      </td>
      <td style="text-align:left"><code>Нет</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>участники</b>
      </td>
      <td style="text-align:left">Должен содержать Объект с <code>именем</code> и <code>id</code> от разработчика присутствия. Имя пользователя Discord без идентификатора (#0000). Пользователь <code>id</code> может быть скопирован из Discord, включив разработчик
        режим и правый клик на вашем профиле.</td>
      <td style="text-align:left"><code>Массив&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>Да</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>услуга</b>
      </td>
      <td style="text-align:left">Название услуги, которую поддерживает это присутствие.</td>
      <td style="text-align:left"><code>Строка</code>
      </td>
      <td style="text-align:left"><code>Нет</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>описание</b>
      </td>
      <td style="text-align:left">Небольшое описание присутствия, вы можете использовать описание сервиса
        , если вы не в идеях. Ваше описание должно иметь значения пары ключей, которые указывают на язык, и описание на этом языке. Сделайте описания языков <i>, которые вы знаете</i>, наши переводчики внесут изменения в ваш файл метаданных. View the category for presence languages for a list. </td>
      <td style="text-align:left"><code>Объект</code>
      </td>
      <td style="text-align:left"><code>Нет</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b>
      </td>
      <td style="text-align:left">URL of the service.<br><b>Example:</b><code>vk.com</code><br>
        <b>This url must match the url of the website as it will be used to detect wherever or not this is the website to inject the script to. This may only be used as an array when there are more than one urls.</b>
      </td>
      <td style="text-align:left"><code>Строка, массив&lt;String&gt;</code>
      </td>
      <td style="text-align:left"><code>Нет</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b>
      </td>
      <td style="text-align:left">Строка регулярных выражений, используемая для совпадения с url.</td>
      <td style="text-align:left"><code>Строка</code>
      </td>
      <td style="text-align:left"><code>Да</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>версия</b>
      </td>
      <td style="text-align:left">Версия вашего присутствия.</td>
      <td style="text-align:left"><code>Строка</code>
      </td>
      <td style="text-align:left"><code>Нет</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>логотип</b>
      </td>
      <td style="text-align:left">Ссылка на сервис&apos;с логотипом</td>
      <td style="text-align:left"><code>Строка</code>
      </td>
      <td style="text-align:left"><code>Нет</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b>
      </td>
      <td style="text-align:left">Ссылка на миниатюру вашего присутствия.</td>
      <td style="text-align:left"><code>Строка</code>
      </td>
      <td style="text-align:left"><code>Нет</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>цвет</b>
      </td>
      <td style="text-align:left"><code>#HEX</code> значение. Мы рекомендуем использовать основной цвет сервиса
        , который поддерживает ваше присутствие.</td>
      <td style="text-align:left"><code>Строка</code>
      </td>
      <td style="text-align:left"><code>Нет</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>метки</b>
      </td>
      <td style="text-align:left">Массив меток, они помогут пользователям найти ваше присутствие на сайте.</td>
      <td
      style="text-align:left"><code>Строка, массив&lt;String&gt;</code>
        </td>
      <td style="text-align:left"><code>Нет</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>категория</b>
      </td>
      <td style="text-align:left">Строка, используемая для представления категории присутствия.</td>
      <td style="text-align:left"><code>Строка</code>
      </td>
      <td style="text-align:left"><code>Нет</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b>
      </td>
      <td style="text-align:left">Определяет, используются ли <code>iFrames</code></td>
      <td style="text-align:left"><code>Boolean</code>
      </td>
      <td style="text-align:left"><code>Да</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b>
      </td>
      <td style="text-align:left">Регулярный селектор выражений, который выбирает iframes для inject into.</td>
      <td style="text-align:left"><code>Строка</code>
      </td>
      <td style="text-align:left"><code>Да</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>settings</b>
      </td>
      <td style="text-align:left">An array of settings the user can change</td>
      <td style="text-align:left"><code>Массив&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>Да</code>
      </td>
    </tr>
  </tbody>
</table>

## Регулярные выражения

Если вы хотите изучать регулярные выражения, вот несколько сайтов.

#### Learning

• [RegexOne](https://regexone.com/) • [Regular Expressions Info](https://www.regular-expressions.info/tutorial.html)

#### Testing

• [Регламент](https://regexr.com/) • [Регламент 101](https://regex101.com/)

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
            "value": "\"%song\" by %artist", //Putting in a string will make the setting an input one, where you can use a custom input.
            "placeholder": "use %song or %artist" //When input is empty it will show this grayed out
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

## Presence categories

When making your presence, you must specify a category which the presence falls under. This is a compiled list of the categories that you can use.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Категория</th>
      <th style="text-align:left">Наименование</th>
      <th style="text-align:left">Описание</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>аниме</b></td>
      <td style="text-align:left"><b>Аниме</b></td>
      <td style="text-align:left">Все что относится к аниме, от форумов до платформ потокового видео.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>игры</b></td>
    <td style="text-align:left"><b>Игры</b></td>
      <td style="text-align:left">Любой сайт, имеющий связанный с игрой контент, например <code>Kahoot</code> или <code>Skribbl.io</code></td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>музыка</b></td>
    <td style="text-align:left"><b>Музыка</b></td>
      <td style="text-align:left">Это веб-сайты, которые предлагают контент, связанный с музыкой, будь то трансляция или загрузка.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>соц. сети</b></td>
        <td style="text-align:left"><b>Соц. сети</b></td>
      <td style="text-align:left">Сайты, которые используются для создания и обмена контентом или для участия в других формах социальных сетей.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>видео</b></td>
        <td style="text-align:left"><b>Видео и Стримы</b></td>
      <td style="text-align:left">Веб-сайты, которые служат цели предоставления видео и потоков.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>прочее</b></td>
    <td style="text-align:left"><b>Прочее</b></td>
      <td style="text-align:left">Все, что не относится к конкретной категории, перечисленной выше.</td>
      </td>
    </tr>
  </tbody>
</table>