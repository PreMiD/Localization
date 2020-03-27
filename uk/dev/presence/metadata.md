---
title: Метадата.json
description: Містить основні дані про присутність
published: true
date: 2020-02-12T22:33:59.736Z
tags: 
---

# Метадата.json

Якщо ви хочете опублікувати присутність у магазині та завантажити його через розширення, необхідно створити `метадані. son` файл у папці `presence.js`.

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
  "iFrameRegameExp": "REGEXP",
  "version": "VERSION",
  "logo": "URL",
  "thumbnail": "URL",
  "color": "#45A8FC",
  "tags": ["CATEGORY", "TAG"],
  "category": "CATEGORY",
  "iframe": false
}
```

## Розуміння метадатa.json

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
      <td style="text-align:left">Має містити об'єкт з <code>назвою</code> і <code>id</code> розробника присутності. Ім'я - це ваше ім'я користувача Discord без ідентифікатора(#0000). Користувач <code>id</code> може бути скопійований з Discord, увімкнувши режим розробника
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
        , якщо ви не вийшли з ідей. Ваш опис має бути з ключових значень, які вказують на мову, а також опис цієї конкретної мови. Створюйте описи мовами <i>, яких ви знаєте</i>, наші перекладачі будуть вносити зміни до вашого файлу метаданих.</td>
      <td style="text-align:left"><code>Об'єкт</code>
      </td>
      <td style="text-align:left"><code>Ні</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>URL-адреса</b>
      </td>
      <td style="text-align:left">URL сервісу<br><b>Приклад:</b><code>vk. om</code><br>
        <b>Ця URL-адреса має збігатися з URL-адресою сайту, оскільки вона буде використовуватися для виявлення будь-якого місця чи ні для впровадження сайту.</b>
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
  </tbody>
</table>

## Регулярні вирази

Якщо ви хочете вивчити регулярні вирази, ось декілька веб-сайтів.

### Навчання

• [RegexOne](https://regexone.com/) • [Інформація про регулярні вирази](https://www.regular-expressions.info/tutorial.html)

### Тестування

• [Regexr](https://regexr.com/) • [Regex101](https://regex101.com/)

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