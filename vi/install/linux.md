---
title: Linux
description: Tải PreMiD trên Linux
published: true
date: 2020-02-12T22:25:37.593Z
tags: 
---

> Trước khi cài đặt, hãy chắc chắn rằng hệ thống của bạn phù hợp với [yêu cầu hệ thống](/install/requirements).{.is-info}

Việc cài đặt tiện ích rất quan trọng vì ứng dụng không thể hoạt động một mình.

# Cài đặt
> Không có một bản cài đặt chính thức cho hệ điều hành này. Đó có nghĩa là sẽ không có hỗ trợ chính thức cho nó. Nhưng bạn có thể trao đổi thông tin với những người dùng Linux khác trên [server Discord](https://discord.gg/premid/) của chúng tôi.{.is-info}

1. Cài đặt [NodeJS](https://nodejs.org/en/).
2. Mở terminal.
3. Clone the repository: `git clone https://github.com/PreMiD/PreMiD.git`
4. Change the working directory: `cd PreMiD/src`
5. Install the dependencies and the application: `npm install`
6. Change the working directory: `cd ..`
7. Nhập: `npm run init`
8. Chạy ứng dụng: `npm start`

Ứng dụng sẽ được chạy tự động. Kiểm tra biểu tượng trên thanh menu.

> The following methods are deprecated and no longer recommended. Use at your own risk. 
> 
> {.is-warning}

## Arch Linux
If you are on Arch Linux or an Arch based distribution, PreMiD is available on the [Arch Linux Repository](https://aur.archlinux.org/packages/premid/) (AUR) under `premid`. Use your favorite package manager to grab it from there!

## Other distributions
- Installation script: `wget -qO- http://bit.ly/install-premid | bash` or `curl -sL https://bit.ly/install-premid | bash`, wait for it to install, double-click the "PreMiD" shortcut created on your Desktop, and that's it!
- If you want to uninstall PreMiD, you can run `wget -qO- http://bit.ly/uninstall-premid | bash` or `curl -sL https://bit.ly/uninstall-premid | bash`.

> Do not forget to [add the **extension**](/install).{.is-warning}

![](https://a.icons8.com/TqgWTTfw/Oy7xHF/svg.svg) {.align-abstopright}