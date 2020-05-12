---
title: Metadata.json
description: Содержит основные данные о присутствии
published: true
date: 24 апреля 2020г. 12:45:27
tags:
---

# Metadata.json

Если вы хотите опубликовать присутствие в магазине и загрузить его через расширение, вы должны создать файла `metadata.json` в папке `dist`.

Пример этого файла можно найти ниже.

```javascript
{
  "author": {
    "name": "ПОЛЬЗОВАТЕЛЬ",
    "id": "ID"
  },
  "contributors": [{
    "name": "ПОЛЬЗОВАТЕЛЬ",
    "id": "ID"
  }],
  "service": "СЕРВИС",
  "description": {
    "en": "ОПИСАНИЕ"
  },
  "url": "ССЫЛКА",
  "regExp": "REGEXP",
  "iFrameRegExp": "REGEXP",
  "version": "ВЕРСИЯ",
  "logo": "ССЫЛКА",
  "thumbnail": "ССЫЛКА",
  "color": "#45A8FC",
  "tags": ["TAG1", "TAG2"],
  "category": "КАТЕГОРИИ",
  "iframe": false,
  "settings": [
        { 
            "id": "ID",
            "title": "ВИДИМЫЙ ЗАГОЛОВОК",
            "icon": "ИКОНКА",
            "value": true
        },
        {
            "id": "ID",
            "if": {
                "ID": true
            },
            "title": "ВИДИМЫЙ ЗАГОЛОВОК",
            "icon": "ИКОНКА",
            "value": "\"%song%\" by %artist%",
            "placeholder": "use %song% or %artist%"
        },
        {
            "id": "ID",
            "title": "ВИДИМЫЙ ЗАГОЛОВОК",
            "icon": "ИКОНКА",
            "value": 0,
            "values": ["1", "2", "etc."]
        }
    ]
}
```

## Описание файла metadata.json

Этот пример выглядит странно, да? Не волнуйтесь, это не так трудно понять для каждой переменной.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Переменная</th>
      <th style="text-align:left">Описание</th>
      <th style="text-align:left">Тип</th>
      <th style="text-align:left">Необязательно</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>автор</b>
      </td>
      <td style="text-align:left">Должен содержать Объект с <code>именем</code> и <code>id</code> от разработчика присутствия. Имя пользователя Discord без идентификатора (#0000). Пользователь <code>id</code> может быть скопирован из Discord, включив разработчик
        режим и правый клик на вашем профиле.</td>
      <td style="text-align:left"><code>Object</code>
      </td>
      <td style="text-align:left"><code>Нет</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>участники</b>
      </td>
      <td style="text-align:left">Должен содержать Object с <code>name</code> и <code>id</code> участника. Имя пользователя Discord без идентификатора (#0000). Пользователь <code>id</code> может быть скопирован из Discord, включив разработчик
        режим и правый клик на вашем профиле.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>Да</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>service</b>
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
        , если вы не в идеях. Ваше описание должно иметь значения пары ключей, которые указывают на язык, и описание на этом языке. Сделайте описания языков <i>, которые вы знаете</i>, наши переводчики внесут изменения в ваш файл метаданных. Можно посмотреть список категорию для языков присутствия. </td>
      <td style="text-align:left"><code>Object</code>
      </td>
      <td style="text-align:left"><code>Нет</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b>
      </td>
      <td style="text-align:left">URL сервиса.<br><b>Пример:</b><code>vk.com</code><br>
        <b>Этот URL должен совпадать с URL сайта, так как он будет использоваться для определения сайта для вставки скрипта. Это может быть использовано в качестве массива только при наличии более URL's.</b>
      </td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code>
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
      <td style="text-align:left"><b>logo</b>
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
      <td style="text-align:left"><b>color</b>
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
      style="text-align:left"><code>String, Array&lt;String&gt;</code>
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
      <td style="text-align:left"><b>настройки</b>
      </td>
      <td style="text-align:left">Массив настроек, которые пользователь может изменить</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>Да</code>
      </td>
    </tr>
  </tbody>
</table>

## Регулярные выражения (Regex)

Если вы хотите изучать регулярные выражения, вот несколько сайтов.

#### Обучение

• [RegexOne](https://regexone.com/) • [Регулярные выражения информация](https://www.regular-expressions.info/tutorial.html)

#### Проверка

• [Regexr](https://regexr.com/) • [Regex101](https://regex101.com/)

## Языки присутствия

PreMiD - это полиусиленный сервис, что означает наличие множества языков, способных подключить пользователей по всему миру. Полный список языков можно найти на [конечной точке API](https://api.premid.app/v2/langFile/list).

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