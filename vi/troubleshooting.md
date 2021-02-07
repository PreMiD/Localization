---
title: Xử lý sự cố
description: Mọi thứ để giúp bạn xử lý sự cố
published: true
date: 2021-01-03T14:12:34.320Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:03:54.865Z
---

> Hãy chắc là bạn có cả tiện ích mở rộng **và** ứng dụng tải về! 
> 
> {.is-warning}

### Tải lại trang
Bạn có thể nhấn <kbd>CTRL+R</kbd>/<kbd>F5</kbd> (Windows) hoặc <kbd>CMD+R</kbd> (MacOS) trên bàn phím của bạn thay vì tìm kiếm nút tải lại.

### Are you using the Discord app?
PreMiD does **not** work on the browser version of Discord, you must download the app [here](https://discord.com/download).

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

### Bản cài đặt cho Ubuntu/Debian
Nếu bạn đã tải Discord qua Snapcraft, RPC sẽ không hoạt động. You have to uninstall the Snapcraft version by executing `sudo snap remove discord` on a terminal, download [Discord's Linux build](https://discordapp.com/api/download?platform=linux) ([or Discord Canary](https://discordapp.com/api/canary/download?platform=linux)), then navigating to the directory you downloaded Discord to (usually `$HOME/Downloads`), then installing the package using `sudo dpkg -i discord-*.deb`.

### McAfee detected PreMiD as virus (Windows)
This is a false positive from McAfee and we have reported the issue to them, for now you can exclude PreMiD from the scan by doing the following steps:

> If you do not feel confident taking these steps, feel free to make a ticket in [#support](https://discord.premid.app/) and one of our Support Agents will be able to help you out! 
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

### Điều đó chưa giải được vấn đề của tôi
Vui lòng mở một thẻ trong kênh [#support](https://discord.premid.app/).