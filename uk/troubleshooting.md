---
title: Вирішення проблем
description: Усе для вирішення вашої проблеми
published: true
date: 2020-04-20T11:16:55.141Z
tags:
---

> Переконайтеся, що у вас встановлено розширення **і** застосунок! 
> 
> {.is-warning}

### Перезавантажте сторінку
You can press <kbd>CTRL+R</kbd>/<kbd>F5</kbd> (Windows) or <kbd>CMD+R</kbd> (MacOS) on your keyboard too instead of searching for the refresh button.

### Перезавантажте ваш браузер
<kbd>Alt</kbd>+<kbd>F4</kbd> (Windows) або <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS) також виконує гарну роботу. (Ви повинні знову запустити браузер)

### Переконайтеся, що ви активували активність в іграх Discord в налаштуваннях
**Налаштування користувача** > **Ігрова активність** ![gameactivity_edited.png](/gameactivity_edited.png)

### Перезапустіть PreMiD (застосунок)
![quit.png](/quit.png) Після цього ви повинні перезапустити PreMiD.

### Перезавантажте Discord
Press <kbd>CTRL+R</kbd> (Windows) or <kbd>CMD+R</kbd> (MacOS) on your keyboard or restart Discord manually.

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
Windows:    `C:\Users\USER\AppData\Roaming\`` and delete the folder`PreMiD`.
MacOS:`~/users/USER/~Library/Application Support/`та видалити папку`PreMiD``.

### Дистрибутиви на основі Ubuntu/Debian
Якщо ви завантажили Discord через Snapcraft, Розширена присутність не спрацює. Вам потрібно видалити версію Snapcraft, виконавши `sudo snap remove discord` в терміналі, завантажте версію [Linux Discord](https://discordapp.com/api/download?platform=linux) ([або Канару Discord](https://discordapp.com/api/canary/download?platform=linux)), потім перейдіть в каталог, в який ви завантажили Discord (зазвичай `$HOME/Downloads`), потім установіть пакету за допомогою `sudo dpkg -i discord-*. eb`.

### Усе це не вирішило моєї проблеми
Будь ласка, відкрийте тікет у [#support](https://discord.gg/WvfVZ8T).