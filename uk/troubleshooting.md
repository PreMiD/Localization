---
title: Вирішення проблем
description: Усе для вирішення вашої проблеми
published: true
date: 2021-02-08T21:30:58.603Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:03:54.865Z
---

> Переконайтеся, що у вас встановлено розширення **і** застосунок! 
> 
> {.is-warning}

Included on this page:
1. [General troubleshooting](https://docs.premid.app/troubleshooting#general)
2. [Linux troubleshooting](https://docs.premid.app/troubleshooting#linux)
3. [MacOS troubleshooting](https://docs.premid.app/troubleshooting#macos)

<a name="general"></a>

# General troubleshooting
### Перезавантажте сторінку
Ви можете натиснути <kbd>Strg+R</kbd>/<kbd>F5</kbd> (Windows) або <kbd>CMD+R</kbd> (MacOS) на вашій клавіатурі теж замість пошуку кнопки оновлення.

### Ви користуєтесь додатком Discord?
PreMiD **не** працює з браузерною версією Discord, ви повинні завантажити його [тут](https://discord.com/download).

### Переконайтеся, що ви активували активність в іграх Discord в налаштуваннях
**Налаштування користувача** > **Ігрова активність** ![gameactivity_edited.png](/gameactivity_edited.png)

### Переконайтеся, що Discord працює не як адміністратор
Дійсно важливе. Discord RPC не працюватиме, якщо ви запустите Discord в якості адміністратора.

### Are you using a presence with settings?
Many presences (including `Twitch` and `SoundCloud`) are affected by an extension issue. This issue causes the extension to not grab the default values of settings properly.

To solve this, all you have to do is toggle the topmost setting: ![presencesettings.gif](/presencesettings.gif)

### Перезавантажте ваш браузер
<kbd>Alt</kbd>+<kbd>F4</kbd> (Windows) або <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS) також виконує гарну роботу. (Ви повинні знову запустити браузер)

### Перезапустіть PreMiD (застосунок)
![quit.png](/quit.png) Після цього ви повинні перезапустити PreMiD.

### Перезавантажте Discord
Натисніть <kbd>Strg+R</kbd> (Windows) або <kbd>CMD+R</kbd> (MacOS) на своїй клавіатурі або перезавантажте Discord вручну.

### Перевірте, чи є антивірус або брандмауер на вашому комп'ютері
Іноді антивірусні програми та брандмауери блокують додатки, які створюють сервер або просто приєднуються до Інтернету. Ми використовуємо локальний сервер для отримання та передачі даних між нашим додатком і розширенням, так що, якщо ви заблокуєте можливість додатку передавати дані, які, ймовірно, не зможуть використовувати PreMiD.

### Вимкніть розширення
Вимкніть всі ваші розширення та перевірте чи працює. Якщо так, то спробуйте ввімкнути ваші додатки покроково, і скажіть нам, яке розширення зламало PreMiD.

### Перезапуск комп'ютера
Сподіваюсь, ви знаєте, як перезапустити комп'ютер.

### Перевстановлення PreMiD
Іноді щось не так з файлами... Підручники для встановлення можна знайти [тут](/install).

### Видалення вручну
Windows:    `C:\Users\USER\AppData\Roaming\`` та видаліть теку`PreMiD`.
MacOS:`~/users/USER/~Library/Application Support/`та видалити папку`PreMiD``.

### McAfee виявив PreMiD як вірус (Windows)
Це помилкова дія від McAfee, і ми повідомили про проблему цих досліджень, тепер ви можете виключати PreMiD з сканування, виконуючи такі дії:

> Якщо ви не відчуваєте впевненості в цьому кроці, не соромтеся робити запит у [#support](https://discord.premid.app/), а один з наших співробітників підтримки зможе допомогти вам! 
> 
> {.is-warning}

1. Відкрийте програму McAfee і клацніть на значок налаштувань у верхньому правому куті. <img src="https://i.imgur.com/rPLZn6c.png" width="500px" style="max-width:100%;" />
2. Натисніть кнопку "Quarantined Items" (другий з верху).
3. Розгорніть його і натисніть на значок `>` перед елементом з назвою "settings.dat".
4. Переконайтеся, що шлях включає "AppData\Local\Temp\PreMiD", якщо ви хочете вибрати його і натисніть "відновити". <img src="https://i.imgur.com/9nvHmiI.png" width="500px" style="max-width:100%;" />
5. Після його відновлення ви зможете закрити спливаюче вікно "Quarantined Items", і знову натиснути піктограму налаштувань у верхньому правому кутку.
6. Натисніть кнопку "Сканування в реальному часі" (третє зверху).
7. Розгорніть його та натисніть кнопку "Додати файл".
8. Введіть "%appdata%" в URL-рядку менеджера файлів і натисніть Enter. <img src="https://i.imgur.com/2bchwLe.png" width="500px" style="max-width:100%;" />
9. Відкрийте папку "PreMiD" та виберіть файл "PreMiD.exe" і натисніть відкрити. <img src="https://i.imgur.com/aHOyv3V.png" width="500px" style="max-width:100%;" />
10. McAfee повинна ігнорувати наш файл, просто запустіть нашу програму, і вам слід зробити її надійною.

### PreMiD status bugged on discord!
Don't worry. Press the <kbd>CTRL+R</kbd> (Windows) or <kbd>CMD+R</kbd> (MacOS) keybind while focused on your discord window to reload it.

<a name="linux"></a>

# Linux troubleshooting
### Ubuntu/Debian based distros
Якщо ви завантажили Discord через Snapcraft, Розширена присутність не спрацює. You have to uninstall the Snapcraft version by executing `sudo snap remove discord` on a terminal, download **[Discord's Linux build](https://discordapp.com/api/download?platform=linux)** (**[or Discord Canary](https://discordapp.com/api/canary/download?platform=linux)**), then navigating to the directory you downloaded Discord to (usually `$HOME/Downloads`), then installing the package using `sudo dpkg -i discord-*.deb`. If AppImage doesn't work, you should consider checking our other packages by **[this link](https://packagecloud.io/premid/linux)**.

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

# Усе це не вирішило моєї проблеми
Please open a ticket in [#support](https://discord.premid.app/).