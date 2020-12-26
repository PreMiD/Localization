---
title: Linux
description: البدء مع تثبيت PreMiD على لينكس
published: صحيح
date: 2020-11-10T18:06:56.520Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:14.124Z
---

تركيب الملحق شيء مهم جدا لأن لا يمكن للتطبيق أن يفعل أي شيء بنفسه.

> يجب أن يكن مستخدمين Aur الذين يستخدم حزمة DoomLerd آمنين كما يقول. نحن لا نوصي باستخدامها، ولكن إذا أردت لا يزال بإمكانك استخدامها. شكرا ل DoomLerd على التعامل مع مستودع aur للأن. 
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
  - [المساهمون](#credits)
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

**PreMiD** بسيط، خدمة قابلة للتعديل تستخدم مكتبة RP الخاصة بديسكرد ( Rich Presence ) التي تسمح لك بإظهار ما تفعله على الويب ( وبعض البرامج ) على بروفايلك الشخصي في ديسكورد ك**حالة اللعب**.

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

من الناحية التقنية كل توزيعة يمكنها تشغيل **التطبيق** [الرسمي](https://discordapp.com/download) لديسكورد ( ليس نسخة الويب أو snap ) يمكنها تشغيل PreMiD أيضا؛</br> كما يمكن أن تكن لاحظت في السنوات الأخيرة، بعض توزيعات لينكس بدأت في إسقاط الدعم ل 32 بت المعمارية (ia32/i686/i386/x86)، ونتيجة لذلك، قمنا بذلك أيضا. ومع ذلك، يمكنك محاولة بناء التطبيق بنفسك إذا كنت بحاجة ماسة إلى استخدامه على توزيعة 32 بت.</br> بما أننا نستخدم إلكترون حاليا كمحرك (ديسكورد يفعل أيضا!)، فإن متطلباته تنطبق أيضا على هذا التطبيق:

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

### المساهمون

شكرا ل :

- @nattadasu, @Rubensei, @Cairo2k18, zany130, Immanuel D, Friskytrash, Alexandre (وقليل من الأشخاص الآخرين الذين نسيت أسماءهم) لتقديمهم تعليقات على الإصدارات الليلية.
- @apriluwu للمحافضة على ابنية Gentoo
- @SlimShadyIAm و naka لصيانة حزم مستودع مستخدمي أرش سابقاً
- مجتمع إلكترون لحزم مختلفة
- أي شخص آخر ساهم في المشروع بأي شكل من الأشكال.

<a name="license"></a>

### الترخيص

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FPreMiD%2FLinux.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FPreMiD%2FLinux?ref=badge_large)

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
./PreMiD*.AppImage
```

<a name="appimagenotes"></a>

### ملاحظات إضافية

إما إذا كنت ترغب في تجربة PreMiD أو فقط لا تريد تثبيته، هذا هو الأفضل، إنه دائما حديث ولكن لا يشتغل تلقائيا مع النظام!</br>إذا تعبت من الاضطرار إلى فتحه في كل مرة، استخدم الحزم الأخرى (وفقا للتوزيعة الخاصة بك).

<img src="https://raw.githubusercontent.com/PreMiD/Linux/master/.github/packagecloud.png" width="100" height="100" align="right"></img>
<a name="packagecloud"></a>

# PackageCloud

We released deb/rpm packages at our packagecloud repo. Please visit it at https://packagecloud.io/PreMiD/Linux and download your deb/rpm package or use automatic script.

For **Ubuntu/Debian**:

```bash
curl -s https://packagecloud.io/install/repositories/PreMiD/Linux/script.deb.sh | sudo bash
```

For **Fedora/CentOS/RedHat**:

```bash
curl -s https://packagecloud.io/install/repositories/PreMiD/Linux/script.rpm.sh | sudo bash
```

If command doesn't work, download **deb/rpm** file from our packagecloud repo or override settings.

<a name="arch"></a>
<img src="https://raw.githubusercontent.com/PreMiD/Linux/86ae2fbd49499785281f388a5305b06e0d3ecfea/.github/iusearchbtw.svg" width="100" height="100" align="right"></img>

## التوزيع القائمة على أرش لينكس

Uses [Arch User Repository](https://aur.archlinux.org/packages/premid);</br> Supported distributions are _itself_, Manjaro, Anarchy, Artix, Arco, ArchLabs, Endeavour, Archman, BlackArch, Liri OS and [every one that supports installing from AUR](https://wiki.archlinux.org/index.php/Arch-based_distributions#Active).

<a name="archinstall"></a>

### إرشادات التثبيت

```bash
# Using yay (recommended)
yay -S premid
```

```bash
# Using pakku
pakku -S premid
```

```bash
# Using trizen
trizen -S premid
```

```bash
# Using pacaur
pacaur -S premid
```

```bash
# ... you get the point
```

or manually from the [Arch User Repository](https://aur.archlinux.org/packages/premid) if you know what you're doing.

<a name="archnotes"></a>

### ملاحظات إضافية

If your distro uses pacman, then you have to install one of the helpers first. إذا لم يكن لديك أي شيء، يُنصح بتشغيل Yay:

```bash
git clone https://aur.archlinux.org/yay.git && cd yay && makepkg -si
```

```bash
yay -S premid
```

Other AUR/Pacman helpers work as well, although each one's functionality is different so you may face issues while using them.