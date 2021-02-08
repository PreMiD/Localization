---
title: Xử lý sự cố
description: Mọi thứ để giúp bạn xử lý sự cố
published: true
date: 2021-02-08T18:44:27.435Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:03:54.865Z
---

> Hãy chắc là bạn có cả tiện ích mở rộng **và** ứng dụng tải về! 
> 
> {.is-warning}

Included on this page:
1. [General troubleshooting](https://docs.premid.app/troubleshooting#general)
2. [Linux troubleshooting](https://docs.premid.app/troubleshooting#linux)
3. [MacOS troubleshooting](https://docs.premid.app/troubleshooting#macos)

<a name="general"></a>

# General troubleshooting
### Tải lại trang
Bạn có thể nhấn <kbd>CTRL+R</kbd>/<kbd>F5</kbd> (Windows) hoặc <kbd>CMD+R</kbd> (MacOS) trên bàn phím của bạn thay vì tìm kiếm nút tải lại.

### Bạn có đang sử dụng phiên bản ứng dụng của Discord không?
PreMiD sẽ **không** hoạt động trên phiên bản trình duyệt web của Discord, vui lòng tải xuống phiên bản ứng dụng [tại đây](https://discord.com/download).

### Hãy chắc chắn là bạn đã cho phép Hoạt động trong game trong Discord trong cài đặt
**Cái đặt người dùng** > **Hoạt động trong game** ![gameactivity_edited.png](/gameactivity_edited.png)

### Hãy chắc chắn là Discord đang KHÔNG hoạt động ở chế độ administrator
Rất quan trọng. Discord RPC sẽ không hoạt động nếu bạn chạy Discord dưới quyền quản trị viên.

### Bạn có đang sử dụng presence có nút cài đặt không?
Nhiều presence (bao gồm `Twitch` và `SoundCloud`) đang bị ảnh hưởng bởi một lỗi bên trong tiện ích mở rộng. Lỗi này làm cho tiện ích mở rộng không lấy đúng giá trị mặc định của cài đặt.

Để giải quyết vấn đề này, bạn chỉ cần bật tắt cài đặt đầu tiên: ![presencesettings.gif](/presencesettings.gif)

### Khởi động lại trình duyệt của bạn
Bạn có thể nhấn <kbd>Alt</kbd>+<kbd>F4</kbd> (Windows) hoặc <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS). (Tất nhiên là bạn phải khởi động lại trình duyệt rồi.)

### Khởi động lại PreMiD (Ứng dụng)
![quit.png](/quit.png) Bạn phải khởi động lại PreMiD sau đó.

### Tải lại/khởi động lại Discord
Nhấn <kbd>CTRL+R</kbd> (Windows) hoặc <kbd>CMD+R</kbd> (MacOS) trên bàn phím của bạn để khởi động lại Discord một cách thủ công.

### Kiểm tra nếu như bạn có phần mềm diệt vi-rút hoặc tường lửa trên máy tính của bạn
Đôi lúc phần mềm diệt vi-rút và tường lửa sẽ chặn các ứng dụng nếu chúng tạo/lưu trữ máy chủ hoặc chỉ là kết nối Internet. Chúng tôi đang sử dụng máy chủ cục bộ để nhận và truyền dữ liệu giữa ứng dụng của chúng tôi và tiện ích mở rộng, nếu bạn chặn tính năng truyền dữ liệu thì có thể bạn sẽ không dùng được PreMiD.

### Hãy tắt các tiện ích mở rộng khác
Hãy tắt các tiện ích mở rộng khác và thử lại. Nếu được, hãy mở từng tiện ích một sau đó hãy cho chúng tôi biết tiện ích nào gây xung đột với PreMiD.

### Khởi động lại máy tính của bạn
Tôi mong là bạn biết cách khởi động lại máy tính.

### Cài đặt lại PreMiD
Đôi khi các tệp có vấn đề... Hướng dẫn cài đặt có thể được tìm thấy [tại đây](/install).

### Gỡ cài đặt thủ công
Hệ điều hành Windows:    `C:\Users\USER\AppData\Roaming\`` và xoá thư mục `PreMiD`.
MacOS:`~/users/USER/~Library/Application Support/`và xóa thư mục `PreMiD``.

### McAfee phát hiện PreMiD là vi-rút (Windows)
Đây là một cảnh báo sai từ McAfee và chúng tôi đã báo cáo vấn đề này tới họ, hiện tại bạn có thể loại trừ PreMiD khỏi quá trình quét qua các bước sau:

> Nếu bạn vẫn còn chần chừ, đừng ngần ngại tạo ticket hỗ trợ tại [#support](https://discord.premid.app/) và một trong những Người Trợ giúp của chúng tôi sẽ giúp bạn! 
> 
> {.is-warning}

1. Mở ứng dụng McAfee và bấm nút cài đặt ở trên cùng phía bên phải. <img src="https://i.imgur.com/rPLZn6c.png" width="500px" style="max-width:100%;" />
2. Chọn "Tệp tin cách ly" (Thứ hai từ trên đầu).
3. Mở rộng nó, và click vào nút `>` trước tệp tin với tên "settings.dat".
4. Hãy chắc chắn đường dẫn là "AppData\Local\Temp\PreMiD", sau đó chọn nó và bấm phục hồi. <img src="https://i.imgur.com/9nvHmiI.png" width="500px" style="max-width:100%;" />
5. Sau khi phục hồi xong bạn có thể đóng cửa sổ "Tệp tin cách ly", sau đó bấm vào nút cài đặt ở trên cùng bên phải một lần nữa.
6. Chọn "Quét thời gian thực" (Thứ ba từ trên đầu).
7. Mở rộng nó và bấm "Chọn tệp tin".
8. Gõ "%appdata%" vào thanh địa chỉ sau đó bấm Enter. <img src="https://i.imgur.com/2bchwLe.png" width="500px" style="max-width:100%;" />
9. Mở thư mục "PreMiD" và chọn tệp tin "PreMiD.exe" và bấm "mở". <img src="https://i.imgur.com/aHOyv3V.png" width="500px" style="max-width:100%;" />
10. McAfee sẽ bỏ qua tệp tin này, chỉ cần mở ứng dụng của chúng tôi là xong.

### PreMiD status bugged on discord!
Don't worry. Just press the <strong x-id="1">ctrl+r</strong> keybind while focused on your discord window to reload it.

<a name="linux"></a>

# Linux troubleshooting
### Ubuntu/Debian based distros
Nếu bạn đã tải Discord qua Snapcraft, RPC sẽ không hoạt động. You have to uninstall the Snapcraft version by executing `sudo snap remove discord` on a terminal, download **[Discord's Linux build](https://discordapp.com/api/download?platform=linux)** (**[or Discord Canary](https://discordapp.com/api/canary/download?platform=linux)**), then navigating to the directory you downloaded Discord to (usually `$HOME/Downloads`), then installing the package using `sudo dpkg -i discord-*.deb`. If AppImage doesn't work, you should consider checking our other packages by **[this link](https://packagecloud.io/premid/linux)**.

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

# Điều đó chưa giải được vấn đề của tôi
Vui lòng mở một thẻ trong kênh [#support](https://discord.premid.app/).