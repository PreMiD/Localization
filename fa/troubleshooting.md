---
title: اشکال‌زدایی
description: Everything to solve your problem
published: true
date: 2021-02-08T21:30:58.603Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:03:54.865Z
---

> Make sure you have the extension **and** the application installed! 
> 
> {.is-warning}

شامل شده در این صفحه:
1. [اشکال‌زدایی کلی](https://docs.premid.app/troubleshooting#general)
2. [اشکال‌زدایی لینوکس](https://docs.premid.app/troubleshooting#linux)
3. [اشکال‌زدایی MacOS](https://docs.premid.app/troubleshooting#macos)

<a name="general"></a>

# اشکال‌زدایی کلی
### صفحه را مجددا بارگزاری کنید
شما می توانید با فشردن <kbd>CTRL+R</kbd>/<kbd>F5</kbd> (Windows) یا <kbd>CMD+R</kbd> (MacOS) در صفحه کلیدتان نیز بجای پیدا کردن دکمه بارگزاری مجدد، فشار دهید.

### آیا از برنامه دیسکورد استفاده می کنید؟
PreMiD با نسخه های وب دیسکورد کار **نمی کند**، شما باید برنامه‌اش را از [اینجا](https://discord.com/download) دانلود کنید.

### مطمعن شوید که Game Activity را در تنظیمات دیسکورد فعال کرده باشید
**تنظیمات کاربر** > **Game Activity** ![gameactivity_edited.png](/gameactivity_edited.png)

### مطمعن شوید که دیسکورد روی حالت administrator اجرا نمی شود
بسیار مهم. RPC دیسکورد اگر شما دیسکورد را روی حالت ادمین بازکنید، کار نمی کند.

### آیا شما از یک presence با تنظیمات استفاده می کنید؟
خیلی از presence ها(از جمله `Twitch` و `SoundCloud`) تحت تاثیر مشکلات افزونه‌ای قرار می‌گیرند. این مشکل باعث می شود افزونه مقادیر پیشفرض تنظیمات را به نادرستی بردارد.

برای حل این مشکل، تمام کاری که باید انجام دهید این است که دکمه topmost تنظیمات را تغییر وضعیت دهید: ![presencesettings.gif](/presencesettings.gif)

### مرورگر خود را دوباره باز کنید
<kbd>Alt</kbd>+<kbd>F4</kbd> (Windows) یا <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS) کار را هم خوب انجام می دهند. (مشخصا باید دوباره مرورگر خودتان را دوباره باز کنید.)

### باز کردن مجدد PreMiD (برنامه)
![quit.png](/quit.png) بعد از آن باید PreMiD را دوباره باز کنید.

### بارگزاری/اجرای مجدد دیسکورد
<kbd>CTRL+R</kbd> (Windows) یا <kbd>CMD+R</kbd> (MacOS) را روی صفحه کلید خود فشار دهید یا به طور دستی دیسکورد خود را مجددا باز نمایید.

### Check if you have antivirus or firewall running on your computer
بعضی مواقع برنامه های ضد ویروس یا دیوار آتش مانع اجرای برنامه هایی می شوند که درحال ساخت/میزبانی سرور هستند یا فقط درحال به اینترنت می باشند. ما از سرور محلی برای دریافت و انتقال اطلاعات بین برنامه و افزونه‌مان استفاده می کنیم، پس اگر شما دسترسی انتقال اطلاعات برنامه را بلاک کنید، احتمالا نمی توانید از PreMiD استفاده کنید.

### Disable your addons
همه افزونه های خود را غیر فعال کنید و ببینید که کار می کند یا نه. اگر بله، سعی کنید افزونه های خود را یکی یکی فعال کنید و امتحان کنید، و بعد به ما افزونه ای که PreMiD را خراب کرده به ما بگویید.

### Restarting your computer
امیدوارم بدونید که چطور میشه کامپیوتر رو ریستارت کرد.

### Reinstalling PreMiD
بعضی مواقع مشکل از فایل ها می‌باشد... آموزش برای نصب را می توانید از [اینجا](/install) بیابید.

### Manual removal
Windows:    `C:\Users\USER\AppData\Roaming\`` و حذف کنید پوشه`PreMiD`.
MacOS:`~/users/USER/~Library/Application Support/`و حذف کنید پوشه`PreMiD``.

### McAfee برنامه PreMiD را به عنوان ویروس شناسایی کرده (Windows)
This is a false positive from McAfee and we have reported the issue to them, for now you can exclude PreMiD from the scan by doing the following steps:

> اگر مطمعن نیستید که این مراحل را انجام دهید، می توانید یک تیکت در [#support](https://discord.premid.app/) ایجاد کنید و یکی از پشتیبانان ما در دسترس برای کمک به شما خواهد بود! 
> 
> {.is-warning}

1. برنامه McAfee را باز کنید و روی آیکن تنظیمات در سمت راست بالا کلیک کنید. <img src="https://i.imgur.com/rPLZn6c.png" width="500px" style="max-width:100%;" />
2. روی "Quarantined Items" کلیک کنید (مورد دوم از بالا).
3. به طور گسترده بازش کنید، روی آیکن `>` قبل از آیتمی که نام "settings.dat" را دارد کلیک کنید.
4. مطمعن شوید که مسیر مشخص شده شامل "AppData\Local\Temp\PreMiD" می باشد، در این صورت رویش کلیک کنید و restore را بزنید. <img src="https://i.imgur.com/9nvHmiI.png" width="500px" style="max-width:100%;" />
5. بعد از آنکه بازیابی انجام شد می توانید پنجره "Quarantined Items" را ببندید و دوباره روی آیکن تنظیمات بالا سمت راست صفحه کلیک کنید.
6. روی "Real-Time Scanning" کلیک کنید (مورد سوم از بالا).
7. به حالت گسترده بازش کنید و روی "Add file" بزنید.
8. در نوار آدرس مدیریت فایل "%appdata%" را وارد کنید و Enter صفحه کلید را بزنید. <img src="https://i.imgur.com/2bchwLe.png" width="500px" style="max-width:100%;" />
9. پوشه "PreMiD" را باز کنید و فایل "PreMiD.exe" را انتخاب کنید و روی باز کردن بزنید. <img src="https://i.imgur.com/aHOyv3V.png" width="500px" style="max-width:100%;" />
10. از الان به بعد McAfee دیگر نباید کاری به فایل هایمان داشته باشد، برنامه را دوباره باز کنید و از این به بعد همه چیز باید خوب پیش برود.

### وضعیت PreMiD در دیسکورد باگ خورده!
نگران نباشید. Press the <kbd>CTRL+R</kbd> (Windows) or <kbd>CMD+R</kbd> (MacOS) keybind while focused on your discord window to reload it.

<a name="linux"></a>

# اشکال‌زدایی لینوکس
### Distros های برپایه Ubuntu/Debian
اگر شما دیسکورد را از طریق Snapcraft دانلود کرده‌اید، RPC کار نخواهد کرد. شما باید نسخه Snapcraft را با اجرای دستور `sudo snap remove discord` در ترمینال حذف کنید، **[Discord's Linux build](https://discordapp.com/api/download?platform=linux)** (**[یا Discord Canary](https://discordapp.com/api/canary/download?platform=linux)**) را دانلود کنید، سپس مستقیما به محل دایرکتوری دیسکورد بروید (معمولا `$HOME/Downloads`)، و بعد بسته را با دستور `sudo dpkg -i discord-*.deb` نصب کنید. اگر AppImage کار نکرد، شما باید بسته های ما را با **[با این لینک](https://packagecloud.io/premid/linux)** چک کنید.

### Distros های بر پایه Arch Linux
Distros های بر پایه Arch Linux باید از بسته AUR (Arch User Repository) که نامیده شده <code>premid</code> یا <code>premid-git</code> استفاده کند (<em x-id="3"> اخطار: نسخه های ساخته شده این مخزن premid از منبع کد خودمان می باشد.</em>). اگر شما نمی خواهید مدیریت AUR را نصب کنید (هورا و...)، شما می توانید AppImage ما را که از طریق <strong x-id="1"><a href="https://github.com/premid/linux/releases">Linux repository</a></strong> در معرض دانلود می باشد را چک نمایید.
<em x-id="3">اخطار: ای بسته در <strong x-id="1">AUR</strong> repository تحت حمایت ما نمی باشد ( به عنوان تشکیلات PreMiD)، ولی در دست دیگر مردم می باشد.</em>

### Port binding
شما باید بدانید که <strong x-id="1">PreMiD</strong> خودش را به پورت <strong x-id="1">3020</strong> تعیین می کند. این برای برقراری ارتباط بین افزونه و برنامه ضروری می باشد. اگر <strong x-id="1">PreMiD</strong> به شما خطاهایی مبطنی بر این پورت نشان می دهد، شما باید چک کنید که چیزی به پورت 3020 تعیین شده در حال اجرای <code>sudo lsof -i:3020</code> یا <code>sudo netstat -tnlp | grep :3020</code> در ترمینال شما هست یا نه. اگر بعضی پردازش ها روی این تعیین شده باشند شما باید از آزاد بودن پورت اطمینان حاصل کنید و سعی کنید که دوباره <code>PreMiD</code> را باز کنید.

### PreMiD AppImage در حین ورود اجرا نمی شود
همانطور که ما **Linux repository** خود را شروع نموده‌ایم، AppImage نمی تواند در ورود اجرا شود. شما می توانید به طور دستی این برنامه را به اجرای خودکار اضافه کنید با دنبال کردن مراحل زیر:
1. فایلی را درست کنید و نامش را <strong x-id="1">rc.local</strong> بزارید در مسیر <code>/...</code>.
2. این فایل را در ویرایشگر محبوبتان باز کنید و کد داده شده زیر را به آن اضافه کنید با انجام دادن یه سری تغییرات در آن:
```bash
#!/bin/bash
# لازم است از این طریق اجرا شود /bin/bash (اگر شما از zsh استفاده می کنید و... شما می توانید تغییرش دهید.)

مثال: /home/PreMiD/PreMiD*.AppImage
<directory to appimage>/PreMiD*.AppImage

exit 0
```
3. فایل را ذخیره کنید و chmod اش را به عنوان `sudo chmod a+x /etc/rc.local` اجرا کنید.
4. کامپیوتر شخصی خود را ریستارت کنید و PreMiD AppImage باید هنگام ورود اجرا شود.

<a name="macos"></a>

# اشکال‌زدایی MacOS
### خطا در ساخت دایرکتوری
<img src="https://i.imgur.com/td92lf6.png" width="300px" style="max-width:100%;" />

اگر شما این خطا را دریافت می کنید، بدان معناست که حساب شما دسترسی Administrator را ندارد و باید پوشه را به طور دستی با انجام مراحل زیر ایجاد کنید:
1. Finder را باز کنید و پوشه **Applications** را باز کنید.
2. روی فضای خالی راست کلیک کنید و روی **Create folder** بزنید.
3. در این پوشه نام `PreMiD` را اضافه کنید (حروف بزرگ و کوچک مهم‌اند و بخاطر بسپارید).
4. نصب کننده را دوباره باز کنید.

# این نتوانست مشکل من را حل کند
لطفا در [#support](https://discord.premid.app/) تیکت باز کنید.