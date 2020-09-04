---
title: Metadata.json
description: Contains basic data about the Presence
published: true
date: 2020-05-21T16:01:05.836Z
tags:
---

# Metadata.json

If you want to publish a presence to the store and load it via the extension, you should create the `metadata.json` file in your `dist` folder.

The example of that file can be found below.

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

## Understanding the metadata.json

That example looks really strange, huh? Don't worry, its not that hard to understand what each variable is for.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Variable</th>
      <th style="text-align:left">תיאור</th>
      <th style="text-align:left">סוג</th>
      <th style="text-align:left">Optional</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>מחבר</b>
      </td>
      <td style="text-align:left">Should contain Object with <code>name</code> and <code>id</code> of the presence developer. השם שלך בדיסקורד בלי מזהה (#0000) לדוגמא. User <code>id</code> can be copied from Discord by enabling developer
        mode and right-clicking on your profile.</td>
      <td style="text-align:left"><code>Object</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>תורמים</b>
      </td>
      <td style="text-align:left">Should contain Object with <code>name</code> and <code>id</code> of the contributor. השם שלך בדיסקורד בלי מזהה (#0000) לדוגמא. User <code>id</code> can be copied from Discord by enabling developer
        mode and right-clicking on your profile.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>Yes</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>שירות</b>
      </td>
      <td style="text-align:left">The title of the service that this presence supports.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>שמות משנה</b>
      </td>
      <td style="text-align:left">להיות מסוגל לחפש את התוסף באמצעות שם חלופי. <br> מיועד לשמש תוספים שיש להם שמות שונים בשפות שונות (למשל פוקימון ו- 포켓 몬스터). <br> אתה יכול להשתמש בו גם לתוספים עם תווים מיוחדים כדי שלא תצטרך להקליד אותם (למשל Pokémon and Pokemon).
      </td>
      <td style="text-align:left"><code>Array&lt;String&gt;</code>
      </td>
      <td style="text-align:left"><code>Yes</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>תיאור</b>
      </td>
      <td style="text-align:left">תיאור קטן של הנוכחות, אתה יכול להשתמש בתיאור של השירות אם אתה חסר רעיונות. Your description must have key pair values which indicate the language, and the description in that specific language. תעשה תיאורים בלי השפות שאתה יודע, המתרגמים שלנו יעשו את השינויים לקובץ שלך. View the category for presence languages for a list. </td>
      <td style="text-align:left"><code>Object</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b>
      </td>
      <td style="text-align:left">URL of the service.<br><b>Example:</b><code>vk.com</code><br>
        <b>This url must match the url of the website as it will be used to detect wherever or not this is the website to inject the script to. This may only be used as an array when there are more than one urls.</b>
      </td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b>
      </td>
      <td style="text-align:left">A regular expression string used to match urls.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Yes</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>גרסה</b>
      </td>
      <td style="text-align:left">Version of your presence.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>לוגו</b>
      </td>
      <td style="text-align:left">Link to service&apos;s logotype.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b>
      </td>
      <td style="text-align:left">Link to your presence thumbnail.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>צבע</b>
      </td>
      <td style="text-align:left">ערך <code> #HEX </code>. אנחנו ממליצים לך להשתמש בצבע הראשי של השירות של הנוכחות התמיכה.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>תגים</b>
      </td>
      <td style="text-align:left">מערך עם תגים, הם יעזרו למשתמשים לחפש את התוסף שלך באתר.</td>
      <td
      style="text-align:left"><code>String, Array&lt;String&gt;</code>
        </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>קטגוריה</b>
      </td>
      <td style="text-align:left">מחרוזת המשמשת לייצוג הקטגוריה שבה התוסף נמצא.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b>
      </td>
      <td style="text-align:left">מגדיר אם משתמשים ב- <code> iFrames </code></td>
      <td style="text-align:left"><code>בוליאני</code>
      </td>
      <td style="text-align:left"><code>Yes</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b>
      </td>
      <td style="text-align:left">בורר ביטוי רגיל הבוחר iframes לשייך אליו.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Yes</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>הגדרות</b>
      </td>
      <td style="text-align:left">An array of settings the user can change</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>Yes</code>
      </td>
    </tr>
  </tbody>
</table>

## Regular Expressions

If you want to learn regular expressions, here are a few websites.

#### Learning

• [Quick Starter Video](https://youtu.be/sXQxhojSdZM) • [RegexOne](https://regexone.com/) • [Regular Expressions Info](https://www.regular-expressions.info/tutorial.html)

#### Testing

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

## קטגוריות נוכחות

When making your presence, you must specify a category which the presence falls under. This is a compiled list of the categories that you can use.

<table>
  <thead>
    <tr>
      <th style="text-align:left">קטגוריה</th>
      <th style="text-align:left">שם</th>
      <th style="text-align:left">תיאור</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>אנימה</b></td>
      <td style="text-align:left"><b>אנימה</b></td>
      <td style="text-align:left">כל דבר שקשור לאנימה, מהפורומים לשידור לייבים בפלטפורמות.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>משחקים</b></td>
    <td style="text-align:left"><b>משחקים</b></td>
      <td style="text-align:left">כל אתר שיש בו משחק שקשור לתוכן, כמו קהוט או סקריבל</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>מוזיקה</b></td>
    <td style="text-align:left"><b>מוזיקה</b></td>
      <td style="text-align:left">האתר האלה מציעים מוזיקה שקשורה לתוכן, או כאלה שאפשר לשדר אותם או להורדה.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>חברתי</b></td>
        <td style="text-align:left"><b>חברתי</b></td>
      <td style="text-align:left">אתרים שמשתמשים לכוונה של יצירת או שיתוף תוכן או בשביל להשתתף בצורות אחרות של חברתיות.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>videos</b></td>
        <td style="text-align:left"><b>סרטונים & שידורים</b></td>
      <td style="text-align:left">Websites that serve the purpose of providing videos and streams.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>אחר</b></td>
    <td style="text-align:left"><b>אחר</b></td>
      <td style="text-align:left">Anything that does not fall under a specific category listed above.</td>
      </td>
    </tr>
  </tbody>
</table>

