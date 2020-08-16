---
title: Решение проблем
description: Всё для решения вашей проблемы
published: true
date: 2020-08-10T20:42:48.586Z
tags:
editor: markdown
---

> Убедитесь, что у вас установлены расширение **и** приложение! 
> 
> {.is-warning}

### Are you using a presence with settings?
Many presences (including `Twitch` and `SoundCloud`) are affected by an extension issue. This issue causes the extension to not grab the default values of settings properly.

To solve this, all you have to do is toggle the topmost setting: ![presencesettings.gif](/presencesettings.gif)

### Перезагрузите страницу
Вы можете нажать <kbd>CTRL+R</kbd>/<kbd>F5</kbd> (Windows) или <kbd>CMD+R</kbd> (MacOS) на вашей клавиатуре, вместо поиска кнопки обновления страницы.

### Restart your browser
Alt+F4 (Windows) или CMD+Q (MacOS) тоже отлично работают. (Очевидно, вам придется снова запустить браузер)

### Убедитесь, что вы включили Игровую активность Discord
Настройки приложения > Игровая активность ![gameactivity_edited.png](/gameactivity_edited.png)

### Перезапустить PreMiD (Приложение)
![quit.png](/quit.png) Вы должны перезапустить PreMiD.

### Перезагрузить/перезапустить Discord
Нажмите <kbd>CTRL+R</kbd> (Windows) или <kbd>CMD+R</kbd> (MacOS) на вашей клавиатуре или перезапустите Discord самостоятельно.

### Убедитесь, что Discord запущен НЕ как администратор
Очень важно. Discord RPC не будет работать, если вы запускаете Discord от имени администратора.

### Проверьте, запущен ли на вашем компьютере антивирус или брандмауэр
Иногда антивирусные программы и брандмауэры блокируют приложения, которые создают/хостинг или просто подключаются к Интернету. Мы используем локальный сервер для получения и передачи данных между нашим приложением и расширением, поэтому если вы заблокируете возможность передачи данных, вы скорее всего не сможете использовать PreMiD.

### Отключите ваши аддоны
Отключите все ваши аддоны и посмотрите, работает ли он. Если да, то попробуйте включить аддоны пошагово и сообщите нам, какой аддон сломал PreMiD.

### Перезагрузите компьютер
Я надеюсь, что вы знаете, как перезагрузить компьютер.

### Переустановите PreMID
Иногда с файлами что-то не так... Уроки по установке можно найти [здесь](/install).

### Ручное удаление
Windows: `C:\Users\USER\AppData\Roaming\`` и удалите папку`PreMiD`.
MacOS:`~/users/USER/~Library/Application Support/`и удалите папку`PreMiD``.

### На дистрибутивах на основе Ubuntu/Debian
Если вы загрузили Discord через Snapcraft, RPC не будет работать. Вы должны удалить версию Snapcraft, запустив `sudo snap удалить discord` на терминале, скачать [сборку Linux Discord](https://discordapp.com/api/download?platform=linux) ([или Discord Canary](https://discordapp.com/api/canary/download?platform=linux)), затем перейдите в каталог, в который вы загрузили Discord (обычно `$HOME/Downloads`), затем установить пакет с помощью `sudo dpkg -i discord-*. eb`.

### McAfee обнаружил PreMiD как вирус (Windows)
Это ложное положительное впечатление от компании McAfee и мы сообщили им об этой проблеме. теперь вы можете исключить PreMiD из сканирования, выполнив следующие действия:

> Если вы не чувствуете уверенности в том, что делаете эти шаги, не стесняйтесь сделать тикет в [#support](https://discord.gg/WvfVZ8T) и один из наших агентов поддержки сможет вам помочь! 
> 
> {.is-warning}

1. Откройте приложение McAfee и нажмите значок настроек в правом верхнем углу. <img src="https://i.imgur.com/rPLZn6c.png" width="500px" style="max-width:100%;" />
2. Нажмите "Карантированные предметы" (Вторая вверху).
3. Разверните его, и нажмите значок `>` перед элементом с названием "settings.dat".
4. Убедитесь, что путь включает "AppData\Local\Temp\PreMiD", если да, выберите его и нажмите восстановить. <img src="https://i.imgur.com/9nvHmiI.png" width="500px" style="max-width:100%;" />
5. После восстановления вы можете закрыть всплывающее окно "Карантинированные предметы", затем снова нажать на значок настроек в правом верхнем углу.
6. Click "Real-Time Scanning" (Third from the top).
7. Разверните его и нажмите "Добавить файл".
8. Введите "%appdata%" в адресной строке файлового менеджера и нажмите Enter. <img src="https://i.imgur.com/2bchwLe.png" width="500px" style="max-width:100%;" />
9. Откройте папку "PreMiD" и выберите файл "PreMiD.exe" и нажмите открыть. <img src="https://i.imgur.com/aHOyv3V.png" width="500px" style="max-width:100%;" />
10. McAfee should now ignore our file, just launch our application and you should be good to go.

### That has not solved my problem
Пожалуйста, оставьте заявку в [#support](https://discord.gg/WvfVZ8T).