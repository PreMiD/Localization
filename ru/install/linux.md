---
title: Linux
description: Начните установку PreMiD на Linux
published: true
date: 2020-02-12T22:22:18.057Z
tags: 
---

> Прежде чем продолжить, убедитесь, что ваша система соответствует [требованиям](/install/requirements).{.is-info}

Установка приложения очень важна, так как расширение не может делать ничего самостоятельно.

# Установить
> Для этой операционной системы нет официальных установок. Это означает, что для этого нет официальной поддержки. Однако вы можете обмениваться информацией с другими пользователями Linux на нашем [сервере Discord](https://discord.gg/premid/).{.is-info}

1. Install [NodeJS](https://nodejs.org/en/).
2. Открыть терминал.
3. Клонировать репозиторий: `git clone https://github.com/PreMiD/PreMiD.git`
4. Изменить рабочий каталог: `cd PreMiD/src`
5. Установите зависимости и приложение: `npm install`
6. Изменить рабочую директорию: `cd ..`
7. Тип: `npm запущен в`
8. Запустить приложение: `npm запуск`

Приложение будет запущено автоматически. Отметьте символ в строке меню.

> Следующие методы устарели и больше не рекомендуются. Используйте на свой страх и риск. 
> 
> {.is-warning}

## Arch Linux
Если вы используете Arch Linux или дистрибутив на основе Arch, PreMiD доступен на [Linux Arch Linux Repository](https://aur.archlinux.org/packages/premid/) (AUR) под `премьером`. Используйте ваш любимый менеджер пакетов, чтобы получить его оттуда!

## Другие дистрибутивы
- Скрипт установки: `wget -qO- http://bit.ly/install-premid | bash` или `curl -sL https://bit. y/install-premid | bash`, дождитесь установки, дважды щелкните клавишу "PreMiD", созданную на вашем рабочем столе, и это все!
- Если вы хотите удалить PreMiD, вы можете запустить `wget -qO- http://bit.ly/uninstall-premid | bash` или `curl -sL https://bit.ly/uninstall-premid | bash`.

> Не забудьте [добавить **расширение**](/install).{.is-warning}

![](https://a.icons8.com/TqgWTTfw/Oy7xHF/svg.svg) {.align-abstopright}