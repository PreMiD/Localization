---
title: Вирішення проблем
description: Усе для вирішення вашої проблеми
published: true
date: 2020-09-01T18:31:28.780Z
tags:
editor: markdown
---

> Переконайтеся, що у вас встановлено розширення **і** застосунок! 
> 
> {.is-warning}

### Are you using the Discord app?
PreMiD does **not** work on the browser version of Discord, you must download the app [here](https://discord.com/download).

### Are you using a presence with settings?
Many presences (including `Twitch` and `SoundCloud`) are affected by an extension issue. This issue causes the extension to not grab the default values of settings properly.

To solve this, all you have to do is toggle the topmost setting: ![presencesettings.gif](/presencesettings.gif)

### Перезавантажте сторінку
Ви можете натиснути <kbd>Strg+R</kbd>/<kbd>F5</kbd> (Windows) або <kbd>CMD+R</kbd> (MacOS) на вашій клавіатурі теж замість пошуку кнопки оновлення.

### Перезавантажте ваш браузер
<kbd>Alt</kbd>+<kbd>F4</kbd> (Windows) або <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS) також виконує гарну роботу. (Ви повинні знову запустити браузер)

### Переконайтеся, що ви активували активність в іграх Discord в налаштуваннях
**Налаштування користувача** > **Ігрова активність** ![gameactivity_edited.png](/gameactivity_edited.png)

### Перезапустіть PreMiD (застосунок)
![quit.png](/quit.png) Після цього ви повинні перезапустити PreMiD.

### Перезавантажте Discord
Натисніть <kbd>Strg+R</kbd> (Windows) або <kbd>CMD+R</kbd> (MacOS) на своїй клавіатурі або перезавантажте Discord вручну.

### Переконайтеся, що Discord працює не як адміністратор
Дійсно важливе. Discord RPC не працюватиме, якщо ви запустите Discord в якості адміністратора.

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

### Дистрибутиви на основі Ubuntu/Debian
Якщо ви завантажили Discord через Snapcraft, Розширена присутність не спрацює. Вам потрібно видалити версію Snapcraft, виконавши `sudo snap remove discord` в терміналі, завантажте версію [Linux Discord](https://discordapp.com/api/download?platform=linux) ([або Канару Discord](https://discordapp.com/api/canary/download?platform=linux)), потім перейдіть в каталог, в який ви завантажили Discord (зазвичай `$HOME/Downloads`), потім установіть пакету за допомогою `sudo dpkg -i discord-*. eb`.

### McAfee виявив PreMiD як вірус (Windows)
Це помилкова дія від McAfee, і ми повідомили про проблему цих досліджень, тепер ви можете виключати PreMiD з сканування, виконуючи такі дії:

> Якщо ви не відчуваєте впевненості в цьому кроці, не соромтеся робити запит у [#support](https://discord.gg/WvfVZ8T), а один з наших співробітників підтримки зможе допомогти вам! 
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

### Усе це не вирішило моєї проблеми
Будь ласка, відкрийте тікет у [#support](https://discord.premid.app/).