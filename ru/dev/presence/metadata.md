---
title: Metadata.json
description: Содержит основные данные о присутствии
published: true
date: 2020-12-26T15:03:41.542Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:52.965Z
---

# Metadata.json

Если вы хотите опубликовать присутствие в магазине и загрузить его через расширение, вы должны создать файла `metadata.json` в папке `dist`.

Пример этого файла можно найти ниже.

```typescript
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
      <th style="text-align:left">Variable</th>
      <th style="text-align:left">Описание</th>
      <th style="text-align:left">Тип</th>
      <th style="text-align:left">Необязательно</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>author</b></td>
      <td style="text-align:left">Should contain an Object with the <code>name</code> and <code>id</code> of the presence developer. Имя пользователя Discord без идентификатора (#0000). Пользователь <code>id</code> может быть скопирован из Discord, включив разработчик
        режим и правый клик на вашем профиле.</td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>Нет</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>contributors</b></td>
      <td style="text-align:left">Должен содержать Object с <code>name</code> и <code>id</code> участника. Name is your Discord username without the identifier(#0000). User <code>id</code> can be copied from Discord by enabling developer
        mode and right-clicking on your profile.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>Да</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>service</b></td>
      <td style="text-align:left">Название услуги, которую поддерживает это присутствие.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Нет</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>altnames</b></td>
      <td style="text-align:left">Be able to search the presence using an alternative name.<br>
      Meant to be used for presences that have different names in different languages (e.g. Pokémon and 포켓몬스터).<br>
      You can also use it for presences that have special characters so you don't have to type those (e.g. Pokémon and Pokemon).</td>
      <td style="text-align:left"><code>Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Yes</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>description</b></td>
      <td style="text-align:left">Описание сервиса <b>НЕ</b> присутствия. Ваше описание должно иметь значения пары ключей, которые указывают на язык, и описание на этом языке. Сделайте описания языков <i>, которые вы знаете</i>, наши переводчики внесут изменения в ваш файл метаданных. Можно посмотреть список категорию для языков присутствия. </td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>Нет</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b></td>
      <td style="text-align:left">URL сервиса.<br><b>Пример:</b><code>vk.com</code><br>
        <b>Этот URL должен совпадать с URL сайта, так как он будет использоваться для определения сайта для вставки скрипта. Это может быть использовано в качестве массива только при наличии более URL's.</b></td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b></td>
      <td style="text-align:left">Строка регулярного выражения, используемая для сопоставления Url-адресов.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Yes</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>version</b></td>
      <td style="text-align:left">Версия вашего присутствия.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>logo</b></td>
      <td style="text-align:left">Ссылка на сервис&apos;с логотипом</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b></td>
      <td style="text-align:left">Ссылка на миниатюру вашего присутствия.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>color</b></td>
      <td style="text-align:left"><code>#HEX</code> значение. Мы рекомендуем использовать основной цвет сервиса
        , который поддерживает ваше присутствие.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>tags</b></td>
      <td style="text-align:left">Массив меток, они помогут пользователям найти ваше присутствие на сайте.</td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>category</b></td>
      <td style="text-align:left">Строка, используемая для представления категории присутствия.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b></td>
      <td style="text-align:left">Определяет, используются ли <code>iFrames</code></td>
      <td style="text-align:left"><code>Boolean</code></td>
      <td style="text-align:left"><code>Yes</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b></td>
      <td style="text-align:left">Регулярный селектор выражений, который выбирает iframes для inject into.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Yes</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>readLogs</b></td>
      <td style="text-align:left">Defines whether the extension should be reading logs.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Yes</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>settings</b></td>
      <td style="text-align:left">Массив настроек, которые пользователь может изменить</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>Yes</code></td>
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

PreMiD - это полиусиленный сервис, что означает наличие множества языков, способных подключить пользователей по всему миру. Полный список языков можно найти на [конечной точке API](https://api.premid.app/v2/langFile/list). Чтобы настроить свое присутствие еще больше, вы можете позволить пользователям выбрать язык отображения присутствия см. [`multiLanguage`](#multilanguage) для больше.

## Настройки присутствия
Настройте интерактивные настройки, чтобы пользователи могли настраивать присутствие!
```typescript
"settings": [
  {
    "id": "ID",
    "multiLanguage": true //See https://docs.premid.app/dev/presence/metadata#multilanguage
  },
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
```

### `multiLanguage`

#### Introduction

Параметр `мультиЯзык` используется для того, чтобы позволить пользователям вручную выбрать язык, на котором они хотят присутствовать. Это требует использования строк из нашего [API](https://api.premid.app/v2/langFile/presence/en), для информации о том, как добавлять строки нажмите [здесь](/dev/presence/metadata/adding-new-strings).

#### Настройки

Параметр `многоязычность` является особым случаем, не требует заголовка `` и `иконки` и не `значения` или `значения` как и другие параметры, но это требует дополнительных настроек!

Клавиша `многоязычность` может быть изменена на следующее:

`true`: используйте это, если вы собираетесь использовать только строки `общего характера. son` файл и файл `<service>.json` в [Репозиторий локализации](https://github.com/PreMiD/Localization/tree/master/src/Presence). `строка`: имя файла, исключая расширение (. son) внутри [Репозитория локализации](https://github.com/PreMiD/Localization/tree/master/src/Presence) (за исключением `общего файла`, так как он всегда загружается). Будут показаны только общие языки `общего` и введенного файла. `Array<String>`: если вы используете более одного файла внутри [Localization Repository](https://github.com/PreMiD/Localization/tree/master/src/Presence) вы можете указать все значения в массиве (за исключением `general` файл, так как он всегда загружен). Будут показаны только общие языки всех файлов.

#### Добавление новых строк

##### Cloning the project

1. Откройте терминал и введите `git clone https://github.com/PreMiD/Localization`.
2. Choose a folder of your choice.
3. Open it in your code editor.

##### Создание файла DjVu

1. Перейдите в папку `src`.
2. Перейдите в папку `src`.
3. Создайте файл с именем `<service>.json`. (Создайте папку с **именем** (не URL) сервиса, который вы хотите поддерживать.)

##### Добавление строк

Каждая `строка` — это объект ``, где от имени начинается с названия службы, а затем так называемое stringName с точкой между ними.

Имя строки является идентификатором 1 слова сообщения.

`Объект` имеет 2 свойства; `сообщение` и `описание`. `сообщение` - это текст, который необходимо перевести. `описание` это описание сообщения, чтобы помочь нашим переводчикам понять, что они переводят.

**Note:** Не добавляйте повторяющиеся строки. (Это включает строки из файла `general.json`, но не из других файлов.)

Визуализация файла:

```typescript
{
  "<service>.<stringName>": {
    "message": "Текст, который нужно перевести.",
    "description": "Это объясняет, что сообщение выше."
  },
  "<service>.<stringName>": {
    "message": "Текст, который нужно перевести.",
    "description": "Это объясняет, что сообщение выше."
  }
```

После того, как вы полностью сделали файл со строками, вы можете создать Pull Request в [Репозиторий локализации](https://github.com/PreMiD/Localization), в описании, которое вы **должны** включить ссылку на ваш Pull Request of the presence updated using these new strings from [Presence Repository](https://github.com/PreMiD/Presences).

#### Ключи по умолчанию
Ключи, которые вы не должны были установить, автоматически устанавливаются на следующее: `заголовок`: "Язык" **Примечание:** Это переведено на язык по умолчанию (язык браузера). `значок`: "fas fa-language" ([Предварительный просмотр](https://fontawesome.com/icons/language)) `значение`: **Установите на их язык браузера, если он доступен (100% переведен), иными словами, английский язык.** `значения`: **Установка на доступные языки (языки, на которых переводятся на 100%).**

**Примечание:** Они ни в коей мере не изменяются.

### Methods

Используйте следующие методы для получения информации о настройках в файлах присутствия:
#### `getSetting(String)`
Возвращает значение настройки.
```typescript
var setting = await presence.getSetting("pdexID"); // Заменить pdexID идентификатором параметра
console.log(setting); // Сообщается установка в логи
```

#### `hideSetting(String)`
Скрывает указанные настройки.
```typescript
presence.hideSetting("pdexID"); // Заменить pdexID идентификатором настройки
```

#### `showSetting(String)`
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
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>anime</b></td>
      <td style="text-align:left"><b>Anime</b></td>
      <td style="text-align:left">Все что относится к аниме, от форумов до платформ потокового видео.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>games</b></td>
      <td style="text-align:left"><b>Games</b></td>
      <td style="text-align:left">Любой сайт, имеющий связанный с игрой контент, например <code>Kahoot</code> или <code>Skribbl.io</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>music</b></td>
      <td style="text-align:left"><b>Music</b></td>
      <td style="text-align:left">Это веб-сайты, которые предлагают контент, связанный с музыкой, будь то трансляция или загрузка.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>socials</b></td>
        <td style="text-align:left"><b>Socials</b></td>
      <td style="text-align:left">Сайты, которые используются для создания и обмена контентом или для участия в других формах социальных сетей.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>videos</b></td>
        <td style="text-align:left"><b>Videos & Streams</b></td>
      <td style="text-align:left">Веб-сайты, которые служат цели предоставления видео и потоков.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>other</b></td>
      <td style="text-align:left"><b>Other</b></td>
      <td style="text-align:left">Все, что не относится к конкретной категории, перечисленной выше.</td>
    </tr>
  </tbody>
</table>

