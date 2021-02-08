---
title: Решение проблем
description: Всё для решения вашей проблемы
published: true
date: 2021-02-08T18:44:27.435Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:03:54.865Z
---

> Убедитесь, что у вас установлены расширение **и** приложение! 
> 
> {.is-warning}

Included on this page:
1. [General troubleshooting](https://docs.premid.app/troubleshooting#general)
2. [Linux troubleshooting](https://docs.premid.app/troubleshooting#linux)
3. [MacOS troubleshooting](https://docs.premid.app/troubleshooting#macos)

<a name="general"></a>

# General troubleshooting
### Перезагрузите страницу
Вы можете нажать <kbd>CTRL+R</kbd>/<kbd>F5</kbd> (Windows) или <kbd>CMD+R</kbd> (MacOS) на вашей клавиатуре, вместо поиска кнопки обновления страницы.

### Используете ли вы приложение Discord?
PreMiD делает**не** Если вы работаете в версии браузера Discord, вы должны загрузить приложение [сюда](https://discord.com/download).

### Убедитесь, что вы включили Игровую активность Discord
Настройки приложения > Игровая активность ![gameactivity_edited.png](/gameactivity_edited.png)

### Убедитесь, что Discord запущен НЕ как администратор
Очень важно. Discord RPC не будет работать, если вы запускаете Discord от имени администратора.

### Использование сущности с настройками?
Много присутствия (в том числе`Twitch` а также`SoundCloud`) затронуты проблемой расширения. Эта проблема приводит к тому, что расширение не получает значения настроек по умолчанию должным образом.

Чтобы решить эту проблему, все, что вам нужно сделать, это изменить верхнюю настройку: ![presencesettings.gif](/presencesettings.gif)

### Перезапустите браузер
Alt+F4 (Windows) или CMD+Q (MacOS) тоже отлично работают. (Очевидно, вам придется снова запустить браузер)

### Перезапустить PreMiD (Приложение)
![quit.png](/quit.png) Вы должны перезапустить PreMiD.

### Перезагрузить/перезапустить Discord
Нажмите <kbd>CTRL+R</kbd> (Windows) или <kbd>CMD+R</kbd> (MacOS) на вашей клавиатуре или перезапустите Discord самостоятельно.

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

### McAfee обнаружил PreMiD как вирус (Windows)
Это ложное положительное впечатление от компании McAfee и мы сообщили им об этой проблеме. теперь вы можете исключить PreMiD из сканирования, выполнив следующие действия:

> Если вы не чувствуете уверенности в том, что делаете эти шаги, не стесняйтесь сделать тикет в [#support](https://discord.premid.app/) и один из наших агентов поддержки сможет вам помочь! 
> 
> {.is-warning}

1. Откройте приложение McAfee и нажмите значок настроек в правом верхнем углу. <img src="https://i.imgur.com/rPLZn6c.png" width="500px" style="max-width:100%;" />
2. Нажмите "Карантированные предметы" (Вторая вверху).
3. Разверните его, и нажмите значок `>` перед элементом с названием "settings.dat".
4. Убедитесь, что путь включает "AppData\Local\Temp\PreMiD", если да, выберите его и нажмите восстановить. <img src="https://i.imgur.com/9nvHmiI.png" width="500px" style="max-width:100%;" />
5. После восстановления вы можете закрыть всплывающее окно "Карантинированные предметы", затем снова нажать на значок настроек в правом верхнем углу.
6. Щелкните «Сканирование в реальном времени» (третье сверху).
7. Разверните его и нажмите "Добавить файл".
8. Введите "%appdata%" в адресной строке файлового менеджера и нажмите Enter. <img src="https://i.imgur.com/2bchwLe.png" width="500px" style="max-width:100%;" />
9. Откройте папку "PreMiD" и выберите файл "PreMiD.exe" и нажмите открыть. <img src="https://i.imgur.com/aHOyv3V.png" width="500px" style="max-width:100%;" />
10. McAfee теперь должен проигнорировать наш файл, просто запустите наше приложение и всё должно быть хорошо.

### PreMiD status bugged on discord!
Don't worry. Just press the <strong x-id="1">ctrl+r</strong> keybind while focused on your discord window to reload it.

<a name="linux"></a>

# Linux troubleshooting
### Ubuntu/Debian based distros
Если вы загрузили Discord через Snapcraft, RPC не будет работать. You have to uninstall the Snapcraft version by executing `sudo snap remove discord` on a terminal, download **[Discord's Linux build](https://discordapp.com/api/download?platform=linux)** (**[or Discord Canary](https://discordapp.com/api/canary/download?platform=linux)**), then navigating to the directory you downloaded Discord to (usually `$HOME/Downloads`), then installing the package using `sudo dpkg -i discord-*.deb`. If AppImage doesn't work, you should consider checking our other packages by **[this link](https://packagecloud.io/premid/linux)**.

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

# Это не решило мою проблему
Please open a ticket in [#support](https://discord.premid.app/).