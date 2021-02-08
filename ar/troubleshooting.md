---
title: إصلاح الاخطاء
description: كل شيء لحل مشكلتك
published: true
date: 2021-02-08T21:30:58.603Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:03:54.865Z
---

> تأكد من أن لديك الملحق **و** التطبيق مثبتين! 
> 
> {.is-warning}

Included on this page:
1. [General troubleshooting](https://docs.premid.app/troubleshooting#general)
2. [Linux troubleshooting](https://docs.premid.app/troubleshooting#linux)
3. [MacOS troubleshooting](https://docs.premid.app/troubleshooting#macos)

<a name="general"></a>

# General troubleshooting
### أعد تحميل الصفحة
يمكنك الضغط على <kbd>CTRL+R</kbd>/<kbd>F5</kbd> (ويندوز) أو <kbd>CMD+R</kbd> (MacOS) على لوحة المفاتيح أيضا بدلا من البحث على زر التحديث.

### هل تستخدم تطبيق ديسكورد؟
**لا يعمل** PreMiD على إصدار ديسكورد للمتصفح، يجب عليك تحميل التطبيق [هنا](https://discord.com/download).

### تأكد من أنك قمت بتفعيل نشاط لعبة في الإعدادات الديسكورد
**إعدادات المستخدم** > **نشاط العبة** ![gameactivity_edited.png](/gameactivity_edited.png)

### تأكد من أن ديسكورد لا يعمل كمسؤول
مهم جدا. لن يعمل ديسكورد RPC إذا قمت بتشغيل ديسكورد كمسؤول.

### هل تستخدم presence مع الإعدادات؟
العديد من الpresences (منهم `تويتش` و `ساوند كلاود`) يتأثرون بمشكلة من الملحق. تؤدي هذه المشكلة إلى عدم التقاط الملحق للقيم الافتراضية للإعدادات بشكل صحيح.

لحل هذه المشكلة ، كل ما عليك فعله هو تبديل الإعدادات الموجودة في الاعلى: ![presencesettings.gif](/presencesettings.gif)

### أعد تشغيل المتصفح
<kbd>Alt</kbd>+<kbd>F4</kbd> (ويندوز) أو <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS) تقوم بعمل جيد أيضا. (يجب عليك أن تشغل المتصفح مرة أخرى بطبيعة الحال.)

### أعد تشغيل PreMiD (التطبيق)
![quit.png](/quit.png) يجب عليك إعادة تشغيل PreMiD بعد ذلك.

### أعد تشغيل Discord
إضغط على <kbd>CTRL+R</kbd> (ويندوز) أو <kbd>CMD+R</kbd> (MacOS) على لوحة المفاتيح أو أعد تشغيل دسكورد يدويا.

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

### تم تحديد PreMiD على إنه فيروس من قبل McAfee (ويندوز)
هذا إبلاغ كذب من McAfee ونحن قمنا بتبليغهم بهذه المسألة، في الوقت الحالي يمكنك استبعاد PreMiD من الفحص عن طريق الخطوات التالية:

> وإذا لم تكن واثق من اتخاذ هذه الخطوات، لا تتردد في فتح تذكرة في [#support](https://discord.premid.app/) وسيكون أحد عملاء الدعم لدينا قادرا على مساعدتك! 
> 
> {.is-warning}

1. افتح تطبيق acAfee وانقر على أيقونة الإعدادات في أعلى اليمين. <img src="https://i.imgur.com/rPLZn6c.png" width="500px" style="max-width:100%;" />
2. انقر فوق "العناصر المعزولة" (الثانية من الأعلى).
3. قم بتوسيعها، وانقر على أيقونة `>` قبل عنصر باسم "settings.dat".
4. تأكد من أن المسار يحتوي على "AppData\Local\Temp\PreMiD"، إذا كان يفعل قم بتحديده واضغط على استعادة. <img src="https://i.imgur.com/9nvHmiI.png" width="500px" style="max-width:100%;" />
5. بعد استعادته يمكنك إغلاق نافذة "العناصر المعزولة"، ثم اضغط على أيقونة الإعدادات مرة أخرى في أعلى اليمين.
6. انقر فوق "الفحص في الوقت الحقيقي" (الثالثة من الأعلى).
7. قم بتوسيعها وانقر على "إضافة ملف".
8. اكتب "%appdata%" في مكان الرابط في مدير الملفات واضغط على زر إنتر. <img src="https://i.imgur.com/2bchwLe.png" width="500px" style="max-width:100%;" />
9. افتح مجلد "PreMiD" وحدد ملف "PreMiD.exe" وانقر على فتح. <img src="https://i.imgur.com/aHOyv3V.png" width="500px" style="max-width:100%;" />
10. يجب أن يتجاهل McAfee ملفنا، فقط ابدأ تطبيقنا وينبغي أن تكون جيداً للذهاب.

### PreMiD status bugged on discord!
Don't worry. Press the <kbd>CTRL+R</kbd> (Windows) or <kbd>CMD+R</kbd> (MacOS) keybind while focused on your discord window to reload it.

<a name="linux"></a>

# Linux troubleshooting
### Ubuntu/Debian based distros
إذا قمت بتنزيل ديسكورد من خلال Snapcraft، لن يعمل RPC. You have to uninstall the Snapcraft version by executing `sudo snap remove discord` on a terminal, download **[Discord's Linux build](https://discordapp.com/api/download?platform=linux)** (**[or Discord Canary](https://discordapp.com/api/canary/download?platform=linux)**), then navigating to the directory you downloaded Discord to (usually `$HOME/Downloads`), then installing the package using `sudo dpkg -i discord-*.deb`. If AppImage doesn't work, you should consider checking our other packages by **[this link](https://packagecloud.io/premid/linux)**.

### Arch Linux based distros
Arch Linux based distros should use AUR (Arch User Repository) package that is named <code>premid</code> or <code>premid-git</code> (<em x-id="3">WARNING: This repository builds premid from our source code.</em>). If you don't want to install an AUR manager (yay etc.), you can check out our AppImage that is downloadable from our <strong x-id="1"><a href="https://github.com/premid/linux/releases">Linux repository</a></strong>.
<em x-id="3">Warning: the package in the <strong x-id="1">AUR</strong> repository is not maintained by us (as PreMiD organization), but by other people.</em>

### Port binding
You should know that <strong x-id="1">PreMiD</strong> binds itself to the port <strong x-id="1">3020</strong>. This is necessary for the Extension and the Application communicate. If <strong x-id="1">PreMiD</strong> shows you an error about this port, you should check if something is binded to the 3020 port by running <code>sudo lsof -i:3020</code> or <code>sudo netstat -tnlp | grep :3020</code> in your terminal. If some process is binded to it you should make sure to free the port and try running <code>PreMiD</code> again.

### PreMiD's AppImage doesn't launch at login
As we stated in our **Linux repository**, AppImage can't be launched at login. You can add it to autostart manually by doing these steps:
1. Make a file named <strong x-id="1">rc.local</strong> in the <code>/etc</code> directory.
2. Open this file in your favourite editor and paste given code with changing some things:
```bash
#!/bin/bash
# Required to run as /bin/bash (if you use zsh etc. you can change it.)

# Example: /home/PreMiD/PreMiD*.AppImage
<directory to appimage>/PreMiD*.AppImage

exit 0
```
3. Save file and chmod it as executable `sudo chmod a+x /etc/rc.local`.
4. Restart your PC and PreMiD AppImage should launch at login.

<a name="macos"></a>

# MacOS troubleshooting
### Error creating directory
<img src="https://i.imgur.com/td92lf6.png" width="300px" style="max-width:100%;" />

If you get this error, it means that your account doesn't have Administrator permissions and you need to create folder manually by doing these steps:
1. Open finder and open **Applications** folder.
2. Right-click on blank space and click **Create folder**.
3. To this folder assign `PreMiD` name (remember about upper-cased letters).
4. Open installer again.

# هذا لم يحل مشكلتي
الرجاء فتح تذكرة في [#support](https://discord.premid.app/).