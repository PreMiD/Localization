---
title: Вирішення проблем
description: Усе для вирішення вашої проблеми
published: true
date: 2020-07-17T19:49:29.170Z
tags:
editor: markdown
---

> Переконайтеся, що у вас встановлено розширення **і** застосунок! 
> 
> {.is-warning}

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

### McAfee detected PreMiD as virus (Windows)
This is a false positive from McAfee and we have reported the issue to them, for now you can exclude PreMiD from the scan by doing the following steps:

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

### Усе це не вирішило моєї проблеми
Будь ласка, відкрийте тікет у [#support](https://discord.gg/WvfVZ8T).