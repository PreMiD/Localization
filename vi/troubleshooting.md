---
title: Xử lý sự cố
description: Mọi thứ để giúp bạn xử lý sự cố
published: true
date: 2020-04-20T11:16:55.141Z
tags:
---

> Hãy chắc là bạn có cả tiện ích mở rộng **và** ứng dụng tải về! 
> 
> {.is-warning}

### Tải lại trang
You can press <kbd>CTRL+R</kbd>/<kbd>F5</kbd> (Windows) or <kbd>CMD+R</kbd> (MacOS) on your keyboard too instead of searching for the refresh button.

### Khởi động lại trình duyệt của bạn
Bạn có thể nhấn <kbd>Alt</kbd>+<kbd>F4</kbd> (Windows) hoặc <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS). (Tất nhiên là bạn phải khởi động lại trình duyệt rồi.)

### Hãy chắc chắn là bạn đã cho phép Hoạt động trong game trong Discord trong cài đặt
**Cái đặt người dùng** > **Hoạt động trong game** ![gameactivity_edited.png](/gameactivity_edited.png)

### Khởi động lại PreMiD (Ứng dụng)
![quit.png](/quit.png) Bạn phải khởi động lại PreMiD sau đó.

### Tải lại/khởi động lại Discord
Press <kbd>CTRL+R</kbd> (Windows) or <kbd>CMD+R</kbd> (MacOS) on your keyboard or restart Discord manually.

### Hãy chắc chắn là Discord đang KHÔNG hoạt động ở chế độ administrator
Rất quan trọng. Discord RPC will not work if you run Discord as an administrator.

### Check if you have antivirus or firewall running on your computer
Sometimes antivirus programs and firewalls are blocking applications which are creating/hosting servers or just connecting to the internet. We are using a local server to receive and pass data between our app and extension, so if you will block app's ability to pass data you probably will not be able to use PreMiD.

### Disable your addons
Disable all your addons and see if it works. If yes, try to enable your addons step-by-step and tell us which addon broke PreMiD.

### Khởi động lại máy tính của bạn
I hope you know how to restart a computer.

### Cài đặt lại PreMiD
Đôi khi các tệp có vấn đề... Hướng dẫn cài đặt có thể được tìm thấy [tại đây](/install).

### Gỡ cài đặt thủ công
Windows:    `C:\Users\USER\AppData\Roaming\`` and delete the folder`PreMiD`.
MacOS:`~/users/USER/~Library/Application Support/`và xóa thư mục `PreMiD``.

### On Ubuntu/Debian based distros
If you have downloaded Discord through Snapcraft, RPC will not work. You have to uninstall the Snapcraft version by executing `sudo snap remove discord` on a terminal, download [Discord's Linux build](https://discordapp.com/api/download?platform=linux) ([or Discord Canary](https://discordapp.com/api/canary/download?platform=linux)), then navigating to the directory you downloaded Discord to (usually `$HOME/Downloads`), then installing the package using `sudo dpkg -i discord-*.deb`.

### Điều đó chưa giải được vấn đề của tôi
Vui lòng mở một thẻ trong kênh [#support](https://discord.gg/WvfVZ8T).