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

### Reinstalling PreMiD
Sometimes there is something wrong with the files... Tutorials for the installation can be found [here](/install).

### Manual removal
Windows: `C:\Users\USER\AppData\Roaming\`` и удалите папку`PreMiD`.
MacOS:`~/users/USER/~Library/Application Support/`and delete the folder`PreMiD``.

### On Ubuntu/Debian based distros
If you have downloaded Discord through Snapcraft, RPC will not work. You have to uninstall the Snapcraft version by executing `sudo snap remove discord` on a terminal, download [Discord's Linux build](https://discordapp.com/api/download?platform=linux) ([or Discord Canary](https://discordapp.com/api/canary/download?platform=linux)), then navigating to the directory you downloaded Discord to (usually `$HOME/Downloads`), then installing the package using `sudo dpkg -i discord-*.deb`.

### McAfee detected PreMiD as virus (Windows)
This is a false positive from McAfee and we have reported the issue to them, for now you can exclude PreMiD from the scan by doing the following steps:

> If you do not feel confident taking these steps, feel free to make a ticket in [#support](https://discord.gg/WvfVZ8T) and one of our Support Agents will be able to help you out! 
> 
> {.is-warning}

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

### That has not solved my problem
Пожалуйста, оставьте заявку в [#support](https://discord.gg/WvfVZ8T).