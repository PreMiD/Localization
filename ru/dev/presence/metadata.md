---
title: Metadata.json
description: Содержит основные данные о присутствии
published: true
date: 2020-05-21T16:01:05.836Z
tags:
---

# Metadata.json

Если вы хотите опубликовать присутствие в магазине и загрузить его через расширение, вы должны создать файла `metadata.json` в папке `dist`.

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
      <td style="text-align:left"><b>author</b>
      </td>
      <td style="text-align:left">Должен содержать Объект с <code>именем</code> и <code>id</code> от разработчика присутствия. Имя пользователя Discord без идентификатора (#0000). Пользователь <code>id</code> может быть скопирован из Discord, включив разработчик
        режим и правый клик на вашем профиле.</td>
      <td style="text-align:left"><code>Object</code>
      </td>
      <td style="text-align:left"><code>Нет</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>contributors</b>
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
      <td style="text-align:left"><b>altnames</b>
      </td>
      <td style="text-align:left">Возможность поиска присутствия с использованием альтернативного имени. <br>Среднее значение для присутствия, имеющего разные имена на разных языках (например, Pokéмон и <unk> <unk> <unk> <unk> <unk> <unk> <unk> <unk> <unk> <unk> <unk> <unk> ).<br>Вы также можете использовать его для присутствия со специальными символами, так что вам не обязательно вводить их (например, Pokémon и Pokemon).
      </td>
      <td style="text-align:left"><code>Array&lt;String&gt;</code>
      </td>
      <td style="text-align:left"><code>Да</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>description</b>
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
      <td style="text-align:left">Строка регулярного выражения, используемая для сопоставления Url-адресов.</td>
      <td style="text-align:left"><code>Строка</code>
      </td>
      <td style="text-align:left"><code>Да</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>version</b>
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
      <td style="text-align:left"><b>tags</b>
      </td>
      <td style="text-align:left">Массив меток, они помогут пользователям найти ваше присутствие на сайте.</td>
      <td
      style="text-align:left"><code>String, Array&lt;String&gt;</code>
        </td>
      <td style="text-align:left"><code>Нет</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>category</b>
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

• [Быстрый Стартер Видео](https://youtu.be/sXQxhojSdZM) • [RegexOne](https://regexone.com/) • [Информация о регулярных выражениях](https://www.regular-expressions.info/tutorial.html)

#### Проверка

• [Regexr](https://regexr.com/) • [Regex101](https://regex101.com/)

## Языки присутствия

PreMiD - это полиусиленный сервис, что означает наличие множества языков, способных подключить пользователей по всему миру. Полный список языков можно найти на [конечной точке API](https://api.premid.app/v2/langFile/list).

## Настройки присутствия
Настройте интерактивные настройки, чтобы пользователи могли настраивать присутствие!
```javascript
"settings": [
        { 
            "id": "ID",
            "title": "ВИДИМЫЙ ЗАГОЛОВОК",
            "icon": "ИКОНКА", // Например "fas fa-info"
            "value": true // Boolean значение сделает переключатель вкл/выкл с значением по умолчанию
        },
        {
            "id": "ID",
            "if": {
                "ID": true // Если другое, то значение равно этому значению (true/false/0/1/etc.) затем показывать эту кнопку
            },
            "title": "ВИДИМЫЙ ЗАГОЛОВОК",
            "icon": "ИКОНКА",
            "value": "\"%song%\" от %artist%", // Ввод в строку сделает настройку ввода, где можно использовать пользовательские входы.
            "placeholder": "Используйте %song% или %artist%" // Когда введено поле ввода пусто, оно будет показывать этот серый цвет
        },
        {
            "id": "ID",
            "title": "ВИДИМЫЙ ЗАГОЛОВОК",
            "icon": "ИКОНКА",
            "value": 0, // Значение по умолчанию селектора
            "values": ["1", "2", "т.д."] // Выберете нужный селектор для этого параметра
        }
    ]
```

Используйте следующие методы для получения информации о настройках в файлах присутствия:
### `getSetting(String)`
Возвращает значение настройки.
```typescript
var setting = await presence.getSetting("pdexID"); // Заменить pdexID идентификатором параметра
console.log(setting); // Сообщается установка в логи
```

### `hideSetting(String)`
Скрывает указанные настройки.
```typescript
presence.hideSetting("pdexID"); // Заменить pdexID идентификатором настройки
```

### `showSetting(String)`
Показывают данные настройки (работает только если настройка была скрыта).
```typescript
presence.showSetting("pdexID"); // Заменить pdexID идентификатором настройки
```

## Категории присутствия

При создании вашего присутствия, вы должны указать категорию, в которой находится присутствие. Это список категорий, которые вы можете использовать.

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
      <td style="text-align:left"><b>anime</b></td>
      <td style="text-align:left"><b>Аниме</b></td>
      <td style="text-align:left">Все что относится к аниме, от форумов до платформ потокового видео.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>games</b></td>
    <td style="text-align:left"><b>Игры</b></td>
      <td style="text-align:left">Любой сайт, имеющий связанный с игрой контент, например <code>Kahoot</code> или <code>Skribbl.io</code></td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>music</b></td>
    <td style="text-align:left"><b>Музыка</b></td>
      <td style="text-align:left">Это веб-сайты, которые предлагают контент, связанный с музыкой, будь то трансляция или загрузка.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>socials</b></td>
        <td style="text-align:left"><b>Соц. сети</b></td>
      <td style="text-align:left">Сайты, которые используются для создания и обмена контентом или для участия в других формах социальных сетей.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>videos</b></td>
        <td style="text-align:left"><b>Видео и Стримы</b></td>
      <td style="text-align:left">Веб-сайты, которые служат цели предоставления видео и потоков.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>other</b></td>
    <td style="text-align:left"><b>Прочее</b></td>
      <td style="text-align:left">Все, что не относится к конкретной категории, перечисленной выше.</td>
      </td>
    </tr>
  </tbody>
</table>

