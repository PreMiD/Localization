---
title: Решение проблем
description: Всё для решения вашей проблемы
published: true
date: 2020-04-20T11:16:55.141Z
tags:
---

> Убедитесь, что у вас установлено расширение **и** приложение! 
> 
> {.is-warning}

### Перезагрузить страницу
You can press <kbd>CTRL+R</kbd>/<kbd>F5</kbd> (Windows) or <kbd>CMD+R</kbd> (MacOS) on your keyboard too instead of searching for the refresh button.

### Перезапустите браузер
<kbd>Alt</kbd>+<kbd>F4</kbd> (Windows) или <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS) тоже хорошо работает. (Очевидно, вы должны снова запустить ваш браузер.)

### Убедитесь, что вы включили игру Discord в настройках
**Настройки пользователя** > **Игровая активность** ![gameactivity_edited.png](/gameactivity_edited.png)

### Перезапустить PreMiD (Приложение)
![quit.png](/quit.png) Вы должны перезапустить PreMiD.

### Перезагрузить/перезапустить Discord
Press <kbd>CTRL+R</kbd> (Windows) or <kbd>CMD+R</kbd> (MacOS) on your keyboard or restart Discord manually.

### Убедитесь, что Discord не запущен как администратор
Очень важно. Discord RPC не будет работать, если вы запускаете Discord от имени администратора.

### Проверьте, запущен ли на вашем компьютере антивирус или брандмауэр
Иногда антивирусные программы и брандмауэры блокируют приложения, которые создают/хостинг или просто подключаются к Интернету. Мы используем локальный сервер для получения и передачи данных между нашим приложением и расширением, , поэтому если вы заблокируете возможность передачи данных, вы скорее всего не сможете использовать PreMiD.

### Отключить аддоны
Отключите все ваши аддоны и посмотрите, работает ли он. Если да, попробуйте включить аддоны пошагово и сообщите нам, какой аддон сломал PreMiD.

### Перезапуск компьютера
Я надеюсь, что вы знаете, как перезагрузить компьютер.

### Переустановка предMiD
Иногда что-то не так с файлами... Учебники по установке можно найти [здесь](/install).

### Ручное удаление
Windows:    `C:\Users\USER\AppData\Roaming\`` and delete the folder`PreMiD`.
MacOS:`~/users/USER/~Library/Application Support/`и удалите папку`PreMiD``.

### На Ubuntu/Debian дистрибутивах
Если вы загрузили Discord через Snapcraft, RPC не будет работать. Вы должны удалить версию Snapcraft, выполнив `sudo snap удалить discord` на терминале, скачать [сборку Discord для Linux](https://discordapp.com/api/download?platform=linux) ([или Discord Canary](https://discordapp.com/api/canary/download?platform=linux)), затем перейдите в каталог, в который вы скачали Discord (обычно `$HOME/Downloads`), затем установите пакет с помощью `sudo dpkg -i discord-*. eb`.

### Это не позволило решить мою проблему
Please open a ticket in [#support](https://discord.gg/WvfVZ8T).