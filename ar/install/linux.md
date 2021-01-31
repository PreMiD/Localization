---
title: Linux
description: ابدأ بتثبيت PreMiD على لينكس
published: true
date: 2020-11-10T18:06:56.520Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:14.124Z
---

تركيب الملحق شيء مهم جدا لأن لا يمكن للتطبيق أن يفعل أي شيء بنفسه.

> يجب أن يكون مستخدمين Aur الذين يستخدمون حزمة DoomLerd آمنين كما يقول. نحن لا نوصي باستخدامها، ولكن إذا أردت لا يزال بإمكانك استخدامها. شكرا ل DoomLerd على التعامل مع مستودع aur للأن. 
> 
> {.is-warning}

## جدول المحتويات

- **[حول](#about)**
  - [إحصائيات](#stats)
  - [المتطلبات](#requirements)
  - أمثلة (قريبا)
  - الأسئلة الشائعة (قريبا)
  - بناء (قريبا)
  - [الدعم الفني](#support)
  - [شكر و تقدير لـ](#credits)
  - [الترخيص](#license)
- **[Snapcraft](#snapcraft)** (TL;DR : _never_ ™️)
- **[Portable AppImage](#appimage)** (_موصى به_)
  - [إرشادات التثبيت](#appimageinstall)
  - [ملاحظات إضافية](#appimagenotes)
- [**التوزيعات القائمة على ريد هات إنتربرايس لينكس (RHEL)**](#packagecloud)
- [**التوزيعات القائمة على Debian و Ubuntu**](#packagecloud)
- [**التوزيع القائمة على أرش لينكس**](#arch)

<a name="about"></a>

## حول

** PreMiD** هو خدمة بسيطة قابلة للتعديل تستخدم مكتبة RP الخاصة بديسكورد ( Rich Presence ) التي تسمح لك بإظهار ما تفعله على الويب ( وبعض البرامج الآخرى ) على بروفايلك الشخصي في ديسكورد مثل **حالة اللعب**.

<a name="stats"></a>

### إحصائيات

<table>
  <tr>
    <th>النشر</th>
    <th>إجمالي التحميلات</th>
    <th>أحدث إصدار</th>
  </tr>
  <tr>
    <td><a href="https://github.com/PreMiD/Linux/actions"><img src="https://github.com/PreMiD/Linux/workflows/CI/badge.svg?branch=master&event=push" alt="CI"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases"><img src="https://img.shields.io/github/downloads/PreMiD/Linux/total.svg?maxAge=86400" alt="كل الاصدارات"></a></td>
    <td><a href="https://github.com/PreMiD/Linux/releases/latest"><img src="https://img.shields.io/github/v/release/PreMiD/Linux.svg?maxAge=86400" alt="أحدث إصدار"><br><img src="https://img.shields.io/github/downloads/PreMiD/Linux/latest/total.svg?maxAge=86400" alt="اصدارات Github"></a></td>
  </tr>
</table>

<a name="requirements"></a>

### المتطلبات

من الناحية التقنية كل توزيعة يمكنها تشغيل **التطبيق** [الرسمي](https://discordapp.com/download) لديسكورد ( ليس نسخة الويب أو snap ) يمكنها تشغيل PreMiD أيضا؛</br> كما لاحظت، بعض توزيعات لينكس لم تعد تدعم الـ 32 بت (ia32/i686/i386/x86)، ونتيجة لذلك، قمنا بالمثل. ومع ذلك، يمكنك محاولة بناء التطبيق بنفسك إذا كنت بحاجة ماسة إلى استخدامه على توزيعة 32 بت.</br> بما أننا نستخدم إلكترون حاليا كمحرك (ديسكورد يفعل أيضا!)، فإن متطلباته تنطبق أيضا على هذا التطبيق:

- Ubuntu ≥ 12.04
- Fedora ≥ 21
- Debian ≥ 8

ومن غير المعروف ما إذا كانت النسخ الأقدم من التوزيعات الأخرى تدعمها، لذلك فقط حافظ على تحديث التوزيعة الخاص بك واستخدم إصدارات **LTS (دعم طويل الأجل)** إذا كانت التوزيعة الخاصة بك توفرها، كما أنها أكثر إستقرارا (تجنب إصدارات ألفا).

<a name="support"></a>

### الدعم الفني

<div>
  <a target="_blank" href="https://discord.premid.app/" title="انضم الى الديسكورد الخاص بنا!">
    <img height="75px" draggable="false" src="https://discordapp.com/api/guilds/493130730549805057/widget.png?style=banner2" alt="انضم الى الديسكورد الخاص بنا!">
  </a>
</div>

<a name="credits"></a>

### شكر و تقدير لـ

شكرا لـ :

- @nattadasu, @Rubensei, @Cairo2k18, zany130, Immanuel D, Friskytrash, Alexandre (وبعض الأشخاص الآخرين الذين نسيت اسمائهم) لتقديمهم ارائهم على الإصدارات الليلية.
- @apriluwu للمحافظة على نسخ Gentoo
- @SlimShadyIAm و naka لصيانة حزم مستودع مستخدمي أرش سابقاً
- مجتمع إلكترون لحزم مختلفة
- أي شخص آخر ساهم في المشروع بأي شكل من الأشكال.

<a name="license"></a>

### الترخيص

[![حالة FOSSA](https://app.fossa.io/api/projects/git%2Bgithub.com%2FPreMiD%2FLinux.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FPreMiD%2FLinux?ref=badge_large)

<img src="https://i.imgur.com/ACAxtmA.png" width="100" height="100" align="right"></img>
<a name="snapcraft"></a>

## Portable AppImage

حزمة AppImage هي الحزمة الموصى بها إذا كان ديسكورد يعمل لك ولكن حزم PreMiD الأخرى (.deb, .rpm, الخ) لا تعمل.

<a name="appimageinstall"></a>

### إرشادات التثبيت

```bash
wget https://github.com/PreMiD/Linux/releases/latest/download/PreMiD-Portable.AppImage && chmod a+x PreMiD*.AppImage
```

```bash
# فقط إنقر عليها مرتين أو قم بتشغيل
AppImage.*PreMiD/.
```

<a name="appimagenotes"></a>

### ملاحظات إضافية

إما إذا كنت ترغب في تجربة PreMiD أو فقط لا تريد تثبيته، هذا هو الأفضل، إنه دائما حديث ولكن لا يشتغل تلقائيا مع النظام!</br>إذا تعبت من الاضطرار إلى فتحه في كل مرة، استخدم الحزم الأخرى (وفقا للتوزيعة الخاصة بك).

<img src="https://raw.githubusercontent.com/PreMiD/Linux/master/.github/packagecloud.png" width="100" height="100" align="right"></img>
<a name="packagecloud"></a>

# PackageCloud

لقد أصدرنا حزم deb/rpm في مستودع الحزمة الخاص بنا. الرجاء زيارته على https://packagecloud.io/PreMiD/Linux وقم بتنزيل حزمة deb/rpm أو استخدم السكريبت التلقائي.

من أجل **Ubuntu/Debian**:

```bash
curl -s https://packagecloud.io/install/repositories/PreMiD/Linux/script.deb.sh | sudo bash
```

من أجل **Fedora/CentOS/RedHat**:

```bash
curl -s https://packagecloud.io/install/repositories/PreMiD/Linux/script.rpm.sh | sudo bash
```

إذا كان الأمر لا يعمل، قم بتنزيل ملف **deb/rpm** من مستودع packagecloud الخاص بنا أو تجاوز الإعدادات.

<a name="arch"></a>
<img src="https://raw.githubusercontent.com/PreMiD/Linux/86ae2fbd49499785281f388a5305b06e0d3ecfea/.github/iusearchbtw.svg" width="100" height="100" align="right"></img>

## التوزيع القائمة على أرش لينكس

تستخدم [مستودع مستخدمي أرش](https://aur.archlinux.org/packages/premid)؛</br>التوزيعات المدعومة هي _نفسها_، Manjaro، Anarchy، Artix، Arco، ArchLabs، Endeavour، Archman، BlackArch، Liri OS و [كل واحدة تدعم التثبيت من AUR](https://wiki.archlinux.org/index.php/Arch-based_distributions#Active).

<a name="archinstall"></a>

### إرشادات التثبيت

```bash
# باستخدام yay (موصى به)
yay -S premid
```

```bash
# باستخدام pakku
pakku -S premid
```

```bash
# باستخدام trizen
trizen -S premid
```

```bash
# باستخدام pacaur
pacaur -S premid
```

```bash
# ... أنت تحصل على المعنى
```

أو يدوياً من [مستودع مستخدمي أرش](https://aur.archlinux.org/packages/premid) إذا كنت تعرف ما تفعله.

<a name="archnotes"></a>

### ملاحظات إضافية

إذا كانت التوزيعة الخاصة بك تستخدم pacman، فيجب عليك أولاً تثبيت أحد المساعدين. إذا لم يكن لديك أي شيء، يُنصح بتشغيل Yay:

```bash
git clone https://aur.archlinux.org/yay.git && cd yay && makepkg -si
```

```bash
yay -S premid
```

يعمل مساعدو AUR/Pacman الآخرون أيضًا، على الرغم من اختلاف وظائف كل منهم، لذلك قد تواجه مشكلات أثناء استخدامها.