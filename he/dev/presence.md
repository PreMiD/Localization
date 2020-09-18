---
title: פיתוח תוסף
description:
published: true
date: 2020-08-29T21:39:03.946Z
tags:
editor: markdown
---

> כל הנוכחות מאוחסנות כעת כאן: https://github.com/PreMiD/Presences 
> 
> {.is-info}

גרסה `2.x` introduces the [presence store](https://premid.app/store). למשתמשים יש כעת אפשרות להוסיף ולהסיר ידנית את הנוכחות המועדפת עליהם דרך ממשק המשתמש של [website](https://premid.app/).

> Before getting started, it is highly recommended that you look at our presence guidelines. 
> 
> {.is-warning}

- [הנחיות](https://docs.premid.app/en/dev/presence/guidelines)
{.links-list}

# Structure
All presence are coded in [TypeScript](https://www.typescriptlang.org/). [TypeScript](https://www.typescriptlang.org/) has some extra spicy type definitions over JavaScript, so fixing and identifying bugs is way easier.

## התקנה
1. התקן [Git](https://git-scm.com/).
2. Install [Node](https://nodejs.org/en/) (comes with [npm](https://www.npmjs.com/)).
3. התקן [TypeScript](https://www.typescriptlang.org/index.html#download-links) (פתח מהסוף ו- `npm install -g typescript`).

## שכפל את הפרויקט
1. פתח מהסוף והקלד ` git clone https://github.com/PreMiD/Presences `.
2. Choose a folder of your choice.
3. פתח אותו בעורך הקוד שלך.

## יצירת תיקיות וקבצים

1. צור תיקייה עם השם ** </ strong> (לא כתובת אתר) של השירות שאתה רוצה לתמוך בו.</li>
2 צור `presence.ts` וגם `tsconfig.json` קובץ בפנים.
3 צור תיקיה הנקראת `dist` בפנים.
4 צור `metadata.json` קובץ בתוך `dist` תיקיה.</ol>

## מילוי הקובץ tsconfig.json
אנא הכנס את הקוד הבא לקובץ ` tsconfig.json `.
```javascript
{
  "extends": "../../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
}
```
למידע נוסף על תצורת TypeScript לחץ [ כאן ](/dev/presence/tsconfig).

## מילוי הקובץ metadata.json
יצרנו `metadata.json` יוצר קבצים לאנשים העצלנים [here](https://eggsy.codes/projects/premid/mdcreator). עדיין מומלץ לקרוא זאת כדי שתדעו איך זה עובד.

```json
{
  "$schema": "https://schemas.premid.app/metadata/1.0",
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

אנא העתק את הקוד מעל והכנס אותו לקובץ ` metadata.json ` שלך. כעת עליך לערוך את ערכי המאפיינים. לידיעתך, המאפיינים הבאים הם אופציונליים בקובץ ` metadata.json ` שלך, אם אינך מתכנן להשתמש בהם עליך להסיר אותם.
- `תורמים`
- `regExp`
- `iframe`
- `iFrameRegExp`
- `הגדרות`

**בירור כמה הגדרות קבועות מראש:**
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
      <td style="text-align:left">Should contain Object with <code>name</code> and <code>id</code> of the presence developer. השם שלך בדיסקורד בלי מזהה (#0000) לדוגמא. User <code>id</code> can be copied from Discord by enabling developer
        mode and right-clicking on your profile.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>Yes</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>שירות</b>
      </td>
      <td style="text-align:left">The title of the service that this presence supports. <br> (חייב להיות שם זהה לתיקיה בה הכל נמצא)</td>
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
      <td style="text-align:left">תיאור קטן של הנוכחות, אתה יכול להשתמש בתיאור של השירות אם אתה חסר רעיונות. Your description must have key pair values which indicate the language, and the description in that specific language. תעשה תיאורים בלי השפות שאתה יודע, המתרגמים שלנו יעשו את השינויים לקובץ שלך.</td>
      <td style="text-align:left"><code>Object</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b>
      </td>
      <td style="text-align:left">URL of the service.<br><b>Example:</b><code>vk.com</code><br>
        <b>This URL must match the URL of the website as it will detect whether or not this is the website to inject the script to.</b><br> Do <b>NOT</b> add <code>https://</code> or <code>http://</code> inside of the URL nor a slash at the end:
<code>https://premid.app/</code> -> <code>premid.app</code><br>
<b>Note</b>: Some URLs may have <code>www.</code> or something else in front of their domain. Do <b>NOT</b> forget to add it!<br>
You can add multiple URLs by doing the following:<br>
<code>["URL1", "URL2", "ETC."]</code><br>
You could also use regExp also known as Regex for this task, explained further below.
      </td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code>
      </td>
      <td style="text-align:left"><code>No</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b>
      </td>
      <td style="text-align:left">A regular expression string used to match urls.<br>
      regExp or also known as Regex, can be used if a website has multiple subdomains.<br>
You could use the following regExp for that:<br>
<code>([a-z0-9]+)[.]domain[.]TLD"</code><br>
TLD standing for Top Level Domain for axample: .com .net<br> 
<code>([a-z0-9]+)</code> means anything from a to z and from 0 to 9.<br>
        You can get a quick starter by watching this <a href="https://youtu.be/sXQxhojSdZM">video</a><br>
        You can test your regExp at <a href="https://regex101.com/">Regex101</a>
      </td>
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
      <td style="text-align:left">מחרוזת המשמשת לייצוג הקטגוריה שבה התוסף נמצא. עיין בקטגוריות החוקיות <a href="https://docs.premid.app/dev/presence/metadata#presence-categories"> כאן </a>.</td>
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
      <td style="text-align:left">בורר ביטוי רגיל הבוחר iframes לשייך אליו. ראה regExp למידע נוסף.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Yes</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>הגדרות</b>
      </td>
      <td style="text-align:left">מערך הגדרות שהמשתמש יכול לשנות. <br>
      קרא עוד על הגדרות התוספים <a href="https://docs.premid.app/dev/presence/metadata#presence-settings"> כאן </a>.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>Yes</code>
      </td>
    </tr>
  </tbody>
</table>

יצרנו `metadata.json` יוצר קבצים לאנשים העצלנים [here](https://eggsy.codes/projects/premid/mdcreator).

## מתחילים

```javascript
var presence = new Presence({
    clientId: "000000000000000000" //The client ID of the Application created at https://discordapp.com/developers/applications
}),

strings = presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
    //You can use this to get translated strings
});

/*

function myOutsideHeavyLiftingFunction(){
    //Grab and process all your data here

    // element grabs //
    // api calls //
    // variable sets //
}

setInterval(myOutsideHeavyLiftingFunction, 10000); 
//Run the function separate from the UpdateData event every 10 seconds to get and set the variables which UpdateData picks up

*/


presence.on("UpdateData", async () => {
    /*UpdateData is always firing, and therefore should be used as your refresh cycle, or `tick`. זה נקרא כמה פעמים בשנייה במידת האפשר.

    It is recommended to set up another function outside of this event function which will change variable values and do the heavy lifting if you call data from an API.*/

    var presenceData: presenceData = {
        largeImageKey: "key", /*The key (file name) of the Large Image on the presence. אלה מועלים ושמם בקטע התוסף העשיר של היישום שלך, הנקרא Art Assets * /. These are uploaded and named in the Rich Presence section of your application, called Art Assets*/
        smallImageText: "Some hover text", //The text which is displayed when hovering over the small image
        details: "Browsing Page Name", //The upper section of the presence text
        state: "Reading section A", //The lower section of the presence text
        startTimestamp: 1577232000, //The unix epoch timestamp for when to start counting from
        endTimestamp: 1577151472000 //If you want to show Time Left instead of Elapsed, this is the unix epoch timestamp at which the timer ends
    }; /*Optionally you can set a largeImageKey here and change the rest as variable subproperties, for example presenceSata.type = "blahblah"; type examples: details, state, etc.*/

    if (presenceData.details == null) {
        //This will fire if you do not set presence details
        presence.setTrayTitle(); //Clears the tray title for mac users
        presence.setActivity(); /*Update the presence with no data, therefore clearing it and making the large image the Discord Application icon, and the text the Discord Application name*/
    } else {
        //This will fire if you set presence details
        presence.setActivity(presenceData); //Update the presence with all the values from the presenceData object
    }
});
```
באפשרותך להעתיק זאת לקובץ התוסף שלך ולערוך את הערכים. `presence.ts` הגדרת כל הערכים מתבצעת בתוך האירוע updataData.

לדוגמאות אנו מציעים להסתכל על קוד התוסף כמו: 1337x או 9GAG.

למידע נוסף על מחלקת התוספים לחץ [ כאן ](/dev/presence/class).

## לא מצליחים לקבל נתונים מסוימים ?!

A lot of websites are using [iframes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([Inlineframes](https://en.wikipedia.org/wiki/HTML_element#Frames)). These html tags can contain multiple sources such as videos. But they're not relevant every time. Some are hidden or just not actively used. Check if you can extract, the information you need, without them before you do unnecessary work.

1. Check for them in your browsers console (be sure that you are on the **Elements** tab).
2. Search (<kbd>CTRL</kbd>+<kbd>F</kbd> (Windows) or <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
3. Execute `document.querySelectorAll("iframe")`.

If you find that your data is in a iFrame you need to do the following:
1. Create a `iframe.ts` file.
2. Set iFrame to `true` in your metadata file.
3. Filling in your iFrame file.
```javascript
var iframe = new iFrame();
iframe.on("UpdateData", async () => {
  /*
  Get all the data you need out of the iFrame save them in variables
  and then sent them using iframe.send
  */
  iframe.send({ //sending data
    video: video,
    time: video.duration
  }); 
});
```
4. Making your presence file receive data from the iFrame file.
```javascript
presence.on("iFrameData", data => {
  iFrameVideo = data.video;
  currentTime = data.time;
});
```
**Note:** This needs to be placed outside of the updateData event.
## Compiling
Open a console in your folder and type `tsc -w` to compile the `presence.ts` into the `/dist` folder.

# Loading the presence
1. Open the popup and hold the <kbd>Shift</kbd> button on your keyboard.
2. **Load Presence** will appear in the Presences section.
3. Click on it while you are still holding the <kbd>Shift</kbd> button.
4. Select the /dist folder of your presence.

# Some helpful things
## Hot-reloading
The website you are developing on is automatically reloading every time you save a file in your folder.

## Debugging
- You can put `console.log("Test");` between your code and see if your browser console gives you that output. If yes then go on and try again after the next function. If not then there is an error above.
- If that doesn't help you either then ask a presence developer on our [Discord server](https://discord.premid.app/) for help.

# Files explained
- [Presence Class](/dev/presence/class)
- [iFrame Class](/dev/presence/iframe)
- [Metadata File](/dev/presence/metadata)
- [TypeScript Configuration](/dev/presence/tsconfig)
{.links-list}
