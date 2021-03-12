---
title: Presence تطوير الـ
description:
published: true
date: 2021-02-07T17:11:34.449Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:02.843Z
---

> كل الpresences الان تخزن هنا: https://github.com/PreMiD/Presences 
> 
> {.is-info}

الإصدار `2.x` يقدم [متجر الpresence](https://premid.app/store). الأن لدى المستخدمين القدرة لاضافة وحذف الpresences المفضلين لهم يدويا من خلال واجهة المستخدم في [الموقع](https://premid.app/).

> قبل البدء، يوصى بشدة أن تنظروا إلى المبادئ التوجيهية للpresence الخاصة بنا. 
> 
> {.is-warning}

- [الإرشادات](https://docs.premid.app/dev/presence/guidelines)
{.links-list}

# الهيكل

كل الpresences مبرمجة علي [TypeScript](https://www.typescriptlang.org/). [TypeScript](https://www.typescriptlang.org/) لديها بعض التعاريف الإضافية على جافا سكريبت، لذلك فإن إصلاح وتحديد الأخطاء أسهل بكثير.

## تثبيت

1. قم بتثبيت [ Git ](https://git-scm.com/).
2. تثبيت [ Node ](https://nodejs.org/en/) (يأتي مع [ npm ](https://www.npmjs.com/)).
3. قم بتثبيت [ TypeScript ](https://www.typescriptlang.org/index.html#download-links) (افتح محطة و ` npm install -g typescript `).

## استنساخ المشروع

1. قم بفتح لوحة التحكم و اكتب `git clone https://github.com/PreMiD/Presences`.
2. اختيار مجلد من اختيارك.
3. افتح علي محرر الكود الخاص بك.

## إنشاء المجلدات والملفات

1. إنتقل إلى مجلد `websites` ثم إنتقل إلى المجلد الذي يحتوي على الحرف الأول من **إسم** (ليس الرابط) الخدمة التي تريد دعمها.
2. إنشاء مجلد باسم **** (ليس عنوان URL) للخدمة التي تريد دعمها.
3. قم بإنشاء ملف `presence.ts` و `tsconfig.json` داخله.
4. إنشاء مجلد اسمه `dist` في الداخل.
5. إنشاء ملف `metadata.json` داخل مجلد `dist`.

## ملء ملف tsconfig.json

الرجاء وضع الكود التالي داخل ملف `tsconfig.json`.

```typescript
{
  "extends": "../../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
}
```

لمعرفة المزيد حول تعديل TypeScript انقر [هنا](/dev/presence/tsconfig).

## ملء ملف metadata.json

لقد صنعنا منشئ ملف `metadata.json` للكسلة [هنا](https://eggsy.xyz/projects/premid/mdcreator). لا يزال من المقترح قراءة هذا من أجل معرفة كيف يعمل.

```json
{
  "$schema": "https://schemas.premid.app/metadata/1.3",
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
  "readLogs": false,
  "settings": [
    {
      "id": "ID",
      "multiLanguage": true
    },
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

الرجاء نسخ الكود أعلاه ووضعه في ملف `metadata.json`. تحتاج الآن إلى تعديل قيم الخصائص. يرجى ملاحظة أن الخصائص التالية اختيارية للحصول عليها في ملف `metadata.json` الخاص بك، إذا كنت لا تخطط لاستخدامهم تحتاج إلى إزالتهم.

- `contributors`
- `altnames`
- `regExp`
- `iframe`
- `iFrameRegExp`
- `readLogs`
- `settings`

**توضيح بعض قيم الخصائص:**

<table>
  <thead>
    <tr>
      <th style="text-align:left">متغير</th>
      <th style="text-align:left">الوصف</th>
      <th style="text-align:left">النوع</th>
      <th style="text-align:left">إختياري</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>author</b></td>
      <td style="text-align:left">يجب أن تحتوي على أوبجكت مع <code>إسم</code> و <code>أيدي</code> مطور الpresence. <code>name</code> is your Discord username without the identifier(#0000). يمكن نسخ معرف المستخدم <code></code> من ديسكورد عن طريق تمكين وضع المطور
        والنقر الأيمن على ملفك الشخصي.</td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>لا</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>contributors</b></td>
      <td style="text-align:left">يجب أن تحتوي على أوبجكت مع <code>إسم</code> و <code>أيدي</code> مطور الpresence. <code>name</code> is your Discord username without the identifier(#0000). يمكن نسخ معرف المستخدم <code></code> من ديسكورد عن طريق تمكين وضع المطور
        والنقر الأيمن على ملفك الشخصي.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>نعم</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>service</b></td>
      <td style="text-align:left">إسم الخدمة التي يدعمها هذا الpresence.<br>
      (يجب أن يكون نفس اسم المجلد حيث يوجد كل شيء)</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>لا</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>altnames</b></td>
      <td style="text-align:left">كن قادر على البحث عن الpresence باستخدام اسم بديل. <br>
      من المفترض أن تُستخدم في الpresences التي لها أسماء مختلفة بلغات مختلفة (مثل بوكيمون و 포켓 몬스터). <br>
      يمكنك أيضًا استخدامه للpresences التي تحتوي على أحرف خاصة حتى لا تضطر إلى كتابتها (مثل Pokémon و Pokemon).</td>
      <td style="text-align:left"><code>Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>نعم</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>description</b></td>
      <td style="text-align:left">وصف صغير للpresence، يمكنك استخدام وصف الخدمة إذا لم تكن لديك فكرة. يجب أن يحتوي الوصف الخاص بك على قيم أزواج رئيسية تشير إلى اللغة، والوصف في تلك اللغة المحددة. اصنع وصفاً باللغات <i>التي تعرفها</i>، سوف يقوم مترجمونا بإجراء تغييرات على ملف البيانات الوصفية الخاص بك.</td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>لا</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b></td>
      <td style="text-align:left">عنوان URL الخاص بالموقع.<br><b>مثال:</b><code>vk.com</code><br>
      <b>يجب أن يتطابق عنوان URL هذا مع عنوان URL الخاص بالموقع حيث سيكتشف ما إذا كان هذا هو موقع الويب الذي سيتم حقن السكريبت فيه أم لا.</b><br><b>لا</b> تضف <code>https://</code> أو <code>http://</code> داخل عنوان URL ولا سلاش في النهاية:
      <code>https://premid.app/</code> -> <code>premid.com</code><br>
      <b>ملاحظة</b>: قد يكون لبعض العناوين <code>www.</code> أو شيء أخر أمام الدومين. <b>لا</b> تنسى أن تضيفها!<br>
      يمكنك إضافة عناوين URL متعددة بالقيام بالتالي:<br>
      <code>["URL1", "URL2", "إلخ."]</code><br>
      يمكنك أيضا إستخدام regExp معروف أيضا بRegex لهذه المهمة، مع المزيد من التوضيح أدناه.</td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>لا</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b></td>
      <td style="text-align:left">سلسلة تعبير عادية تستخدم لمطابقة عناوين urls.<br>
      regExp أو المعروف أيضًا باسم Regex، يمكن استخدامه إذا كان الموقع يحتوي على عدة مجالات فرعية.<br>
يمكنك استخدام regExp التالية من أجل:<br>
<code>([a-z0-9]+)[.]نطاق[.]TLD"</code><br>
TLD تقف لنطاق المستوى الأعلى لaxample: م .net<br> 
<code>([a-z0-9]+)</code> يعني أي شيء من 0 إلى 9 .<br>
        يمكنك الحصول على بداية سريعة من خلال مشاهدة هذا <a href="https://youtu.be/sXQxhojSdZM">الفيديو</a><br>
        يمكنك اختبار regExp الخاص بك في <a href="https://regex101.com/">Regex101</a>.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>نعم</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>version</b></td>
      <td style="text-align:left">نسخة من حضورك.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>لا</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>logo</b></td>
      <td style="text-align:left">رابط الخدمة&apos;لـ شعار</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>لا</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b></td>
      <td style="text-align:left">رابط للصورة المصغره لالpresence الخاص بك.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>لا</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>color</b></td>
      <td style="text-align:left">قيمة <code>#HEX</code>. نوصي باستخدام لون أساسي من الخدمة
        التي يدعمها وجودك.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>لا</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>tags</b></td>
      <td style="text-align:left">مصفوفة مع العلامات، ستساعد المستخدمين على البحث عن وجودك على الموقع.</td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>لا</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>category</b></td>
      <td style="text-align:left">وتندرج تحت هذا البند سلسلة تستخدم لتمثيل الفئة التي يوجد فيها. مشاهدة الأخاديد الصالحة <a href="https://docs.premid.app/dev/presence/metadata#presence-categories">هنا</a>.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>لا</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b></td>
      <td style="text-align:left">يحدد ما إذا كان <code>iFrames</code> يستخدم.</td>
      <td style="text-align:left"><code>Boolean</code></td>
      <td style="text-align:left"><code>نعم</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b></td>
      <td style="text-align:left">محدد تعبير عادي يحدد إطارات ifram للحقن. انظر regExp لمزيد من المعلومات.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>نعم</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>readLogs</b></td>
      <td style="text-align:left">يحدد ما إذا كان يجب أن يكون الملحق سجلات قراءة.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>نعم</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>settings</b></td>
      <td style="text-align:left">مجموعة من الإعدادات التي يمكن للمستخدم تغييرها.<br>
      اقرأ المزيد حول إعدادات الحضور <a href="https://docs.premid.app/dev/presence/metadata#presence-settings">هنا</a>.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>نعم</code></td>
    </tr>
  </tbody>
</table>

لقد صنعنا منشئ ملف `metadata.json` للكسلة [هنا](https://eggsy.xyz/projects/premid/mdcreator).

## البدء

```typescript
const وجود = وجود جديد ({
    العميل: "00000000000000000000000000" //معرف العميل للتطبيق الذي تم إنشاؤه في https://discordapp. om/developers/applications
  }),
  strings = presence.getStrings({
    play: "presence.playback.playing",
    وقفة مؤقتة: "presence.playback". تم الإنقاذ"
    ////يمكنك استخدام هذا للحصول على المقاطع المترجمة في لغة المتصفح الخاصة بها
  })؛

/*

دالة myOutsideHeavyLiftingFunction(){
    //grab وتجهيز جميع بياناتك هنا

    // عنصر الاستيلاء // /
    // باي المكالمات //
    // مجموعات متغيرة //
}

setInterval(myOutsideHeavyLiftingFunction, 10000)؛
//تشغيل الدالة منفصلة عن حدث تحديث البيانات كل 10 ثوان للحصول على وتعيين المتغيرات التي يلتقطها تحديث البيانات

*/

وجود. n("UpdateData", async () => {
  /*UpdateData يطلق دائمًا، ولذلك يجب أن تستخدم كدورة تحديث أو "دك". يتم استدعاء هذا عدة مرات في الثانية حيثما أمكن.

    من المستحسن إنشاء وظيفة أخرى خارج وظيفة الحدث هذه التي ستغير القيم المتغيرة وتقوم بالرفع الثقيل إذا اتصلت ببيانات من API. /

  const presenceData: PresenceData = {
    ImageKey:
      "key" /*The key (اسم الملف) للصورة الكبيرة على الوجود. These are uploaded and named in the Rich Presence section of your application, called Art Assets*/,
    smallImageKey:
      "key" /*The key (file name) of the Large Image on the presence. These are uploaded and named in the Rich Presence section of your application, called Art Assets*/,
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

يمكنك نسخ هذا إلى ملف `presence.ts` الخاص بك وتعديل القيم. يتم تعيين جميع القيم داخل حدث بيانات التحديث.

ومن الأمثلة على ذلك، نقترح النظر في مدونة أشكال الوجود مثل: 1337x أو 9GAG. For more information about the `Presence` class click [here](/dev/presence/class).

Since v2.2.0 there are now Slideshows, this allows you to show multiple `PresenceData` interfaces on an interval, for more information click about the `Slideshow` class [here](/dev/presence/slideshow).

## لا يمكنك الحصول على بيانات معينة؟!

A lot of websites are using [iframes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([Inlineframes](https://en.wikipedia.org/wiki/HTML_element#Frames)). These html tags can contain multiple sources such as videos. لكنها ليست لها صلة في كل مرة. بعضها مخفي أو لم يتم استخدامه بفعالية. تحقق مما إذا بإمكانك استخراج، المعلومات التي تحتاجها، بدونها قبل قيامك بعمل غير ضروري.

1. Check for them in your browsers console (be sure that you are on the **Elements** tab).
2. Search (<kbd>CTRL</kbd>+<kbd>F</kbd> (Windows) or <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
3. Execute `document.querySelectorAll("iframe")`.

If you find that your data is in a iFrame you need to do the following:

1. Create a `iframe.ts` file.
2. Set iFrame to `true` in your metadata file.
3. Filling in your iFrame file.

```typescript
const iframe = new iFrame();
iframe.on("UpdateData", async () => {
  /*
  Get all the data you need out of the iFrame save them in variables
  and then sent them using iframe.send
  */
  iframe.send({
    //sending data
    video: video,
    time: video.duration
  });
});
```

4. Making your presence file receive data from the iFrame file.

```typescript
presence.on("iFrameData", (data) => {
  iFrameVideo = data.video;
  currentTime = data.time;
});
```

**Note:** This needs to be placed outside of the updateData event.

## تجميع

Open a console in your folder and type `tsc -w` to compile the `presence.ts` into the `/dist` folder.

# تحميل الوجود

1. افتح الإضافة المنبثقة في المتصفح واضغط على زر <kbd>Shift</kbd> على لوحة المفاتيح الخاصة بك.
2. **Load Presence** will appear in the Presences section.
3. Click on it while you are still holding the <kbd>Shift</kbd> button.
4. Select the /dist folder of your presence.

# Some helpful things

## إعادة التحميل

الموقع الذي تقوم بتطويره يقوم تلقائياً بإعادة تحميل كل مرة تقوم بحفظ ملف في مجلدك.

## تصحيح الأخطاء

- يمكنك وضع `console.log("اختبار")؛` بين التعليمات البرمجية الخاصة بك ومعرفة ما إذا كانت وحدة تحكم المتصفح الخاصة بك تعطيك المخرجات. إذا كان الجواب نعم، ثم حاول مرة أخرى بعد الدالة القادمة. إذا لم يكن فهناك خطأ أعلاه.
- If that doesn't help you either then ask a presence developer on our [Discord server](https://discord.premid.app/) for help.

# الملفات الموضحة

- [فئة الpresence](/dev/presence/class)
- [فئة عرض الشريحة](/dev/presence/slideshow)
- [فئة iFrame](/dev/presence/iframe)
- [ملف بيانات التعريف](/dev/presence/metadata)
- [إعدادات TypeScript](/dev/presence/tsconfig ""){.links-list}
