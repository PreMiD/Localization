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

### Bạn có đang sử dụng phiên bản ứng dụng của Discord không?
PreMiD sẽ **không** hoạt động trên phiên bản trình duyệt web của Discord, vui lòng tải xuống phiên bản ứng dụng
[tại đây](https://discord. com/download).</p> 



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

Nếu bạn đã tải Discord qua Snapcraft, RPC sẽ không hoạt động. Bạn phải gỡ cài đặt bản Snapcraft bằng cách chạy lệnh `sudo snap remove discord` trong một cửa sổ lệnh, rồi tải xuống [Discord cho Linux](https://discordapp.com/api/download?platform=linux) ([hoặc Discord Canary](https://discordapp.com/api/canary/download?platform=linux)), sau đó chuyển tới thư mục mà bạn đã tải Discord (thường là `$HOME/Downloads`), sau đó cài đặt gói bằng lệnh `sudo dpkg -i discord-*.deb`.



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



### Điều đó chưa giải được vấn đề của tôi

Vui lòng mở một thẻ trong kênh [#support](https://discord.premid.app/).