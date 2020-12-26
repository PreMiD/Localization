---
title: إصلاح الاخطاء
description: كل شيء لحل مشكلتك
published: صحيح
date: 2020-12-15T20:00:08.631Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:03:54.865Z
---

> تأكد من أن لديك الملحق **و** التطبيق مثبتين! 
> 
> {.is-warning}

### هل تستخدم تطبيق ديسكورد؟
**لا يعمل** PreMiD على إصدار ديسكورد للمتصفح، يجب عليك تحميل التطبيق [هنا](https://discord.com/download).

### هل تستخدم presence مع الإعدادات؟
العديد من الpresences (منهم `تويتش` و `ساوند كلاود`) يتأثرون بمشكلة من الملحق. تؤدي هذه المشكلة إلى عدم التقاط الملحق للقيم الافتراضية للإعدادات بشكل صحيح.

لحل هذه المشكلة ، كل ما عليك فعله هو تبديل الإعدادات الموجودة في الاعلى: ![presencesettings.gif](/presencesettings.gif)

### أعد تحميل الصفحة
يمكنك الضغط على <kbd>CTRL+R</kbd>/<kbd>F5</kbd> (ويندوز) أو <kbd>CMD+R</kbd> (MacOS) على لوحة المفاتيح أيضا بدلا من البحث على زر التحديث.

### أعد تشغيل المتصفح
<kbd>Alt</kbd>+<kbd>F4</kbd> (ويندوز) أو <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS) تقوم بعمل جيد أيضا. (يجب عليك أن تشغل المتصفح مرة أخرى بطبيعة الحال.)

### تأكد من أنك قمت بتفعيل نشاط لعبة في الإعدادات الديسكورد
**إعدادات المستخدم** > **نشاط العبة** ![gameactivity_edited.png](/gameactivity_edited.png)

### أعد تشغيل PreMiD (التطبيق)
![quit.png](/quit.png) يجب عليك إعادة تشغيل PreMiD بعد ذلك.

### أعد تشغيل Discord
إضغط على <kbd>CTRL+R</kbd> (ويندوز) أو <kbd>CMD+R</kbd> (MacOS) على لوحة المفاتيح أو أعد تشغيل دسكورد يدويا.

### تأكد من أن ديسكورد لا يعمل كمسؤول
مهم جدا. لن يعمل ديسكورد RPC إذا قمت بتشغيل ديسكورد كمسؤول.

### تحقق مما إذا كان برنامج مكافحة الفيروسات أو جدار الحماية مشتغل في الجهاز
في بعض الأحيان تمنع برامج مكافحة الفيروسات وجدران الحماية التطبيقات التي تصنع خوادم أو تستضيفها أو تتصل فقط بالإنترنت. نحن نستخدم خادم محلي لتلقي البيانات ونقلها بين تطبيقنا وملحقنا، لذلك إذا كنت ستمنع قدرة التطبيق على نقل البيانات فلن تتمكن على الأرجح من استخدام PreMiD.

### قم تعطيل الإضافات الخاصة بك
قم بتعطيل جميع الإضافات الخاصة بك وانظر إذا كان سيعمل. إذا كان الجواب نعم، حاول تشغيل الإضافات الخاصة بك خطوة بعد خطوة وأخبرنا عن أي إضافة كسرت PreMiD.

### إعادة تشغيل جهاز الكمبيوتر
آمل أنك تعرف كيفية إعادة تشغيل الكمبيوتر.

### إعادة تثبيت PreMiD
في بعض الأحيان يكون شيء خاطئ في الملفات... يمكنك العثور على طريقة التثبيت [هنا](/install).

### إزالة يدوياً
ويندوز: `C:\Users\USER\AppData\Roaming\`` وإحذف الملف `PreMiD`.
MacOS: `~/users/USER/~Library/Application Support/` وإحذف الملف `PreMiD``.

### على توزيعات Ubuntu/Debian
إذا قمت بتنزيل ديسكورد من خلال Snapcraft، لن يعمل RPC. You have to uninstall the Snapcraft version by executing `sudo snap remove discord` on a terminal, download [Discord's Linux build](https://discordapp.com/api/download?platform=linux) ([or Discord Canary](https://discordapp.com/api/canary/download?platform=linux)), then navigating to the directory you downloaded Discord to (usually `$HOME/Downloads`), then installing the package using `sudo dpkg -i discord-*.deb`.

### McAfee detected PreMiD as virus (Windows)
This is a false positive from McAfee and we have reported the issue to them, for now you can exclude PreMiD from the scan by doing the following steps:

> If you do not feel confident taking these steps, feel free to make a ticket in [#support](https://discord.premid.app/) and one of our Support Agents will be able to help you out! 
> 
> {.is-warning}

1. Open the McAfee application and click the settings icon in the top right. <img src="https://i.imgur.com/rPLZn6c.png" width="500px" style="max-width:100%;" />
2. Click "Quarantined Items" (Second from the top).
3. Expand it, and click the `>` icon before an item with the name "settings.dat".
4. Make sure the path includes "AppData\Local\Temp\PreMiD", if so select it and press restore. <img src="https://i.imgur.com/9nvHmiI.png" width="500px" style="max-width:100%;" />
5. After it is restored you can close the "Quarantined Items" popup, then press the settings icon again in the top right.
6. Click "Real-Time Scanning" (Third from the top).
7. Expand it and click "Add file".
8. Type "%appdata%" in the URL bar of the file manager and press Enter. <img src="https://i.imgur.com/2bchwLe.png" width="500px" style="max-width:100%;" />
9. Open the "PreMiD" folder and select the "PreMiD.exe" file and click open. <img src="https://i.imgur.com/aHOyv3V.png" width="500px" style="max-width:100%;" />
10. McAfee should now ignore our file, just launch our application and you should be good to go.

### That has not solved my problem
Please open a ticket in [#support](https://discord.premid.app/).