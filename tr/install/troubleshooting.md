---
title: Sorun Giderme
description: Karşılaştığınız hatayı çözebilmek için her şey
published: true
date: 2020-01-18T20:32:24.820Z
tags:
---

> Uzantıyı **ve** uygulamanın yüklü olduğundan emin olun! 
> 
> {.is-warning}

### Sayfayı yenileyin
İster yenileme butonuna tıklayın, isterseniz de klavyenizden <kbd>CTRL+R/F5</kbd> (Windows)/<kbd>CMD+R</kbd> (macOS) tuşlarına basın.

### Tarayıcınızı yeniden başlatın
<kbd>Alt</kbd>+<kbd>F4</kbd> (Windows) ya da <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS) tuşlarını kullanarak tarayıcınızı kapatın. Kapattıktan sonra elle yeniden açmanız gerekiyor elbette.

### Ayarlardaki Oyun Etkinliği'nin açık olduğuna emin olun
**Kullanıcı Ayarları** > **Oyun Etkinliği** ![oyunaktivitesi-düzenlenmiş.png](/gameactivity_edited.png)

### PreMiD Uygulamasını Yeniden Başlatın
![çık.png](/quit.png) Daha sonra PreMiD'i yeniden başlatınız.

### Discord'u yeniden başlatınız
El ile yapmak istiyorsanız klavyenizde ki Strg+R (Windows) ya da CMD+R (MacOS) tuşlarına basınız.

### Discord'un yönetici olarak çalıştırılmadığından emin olunuz
Çok önemli. Eğer Discord'u yönetici olarak çalıştırırsanız Discord RPC çalışmayacaktır.

### Bilgisayarınızda çalışan bir antivirüs ya da firewall varsa kontrol ediniz
Bazı antivirüs ya da firewall programları İnternete bağlanmaya çalışan ya da serverleri yöneten bir uygulamayı engellemeye çalışabilir. Uygulamamız ve uzantımız arasında veri almak için ve aktarmak için yerel bir sunucu kullanıyoruz bu nedenle uygulamanın veri aktarma özelliğini engellediğiniz için PreMiD'i kullanamayacaksınız.

### Eklentilerinizi devre dışı bırakınız
Tüm eklentilerinizi devre dışı bırakınız ve çalışıp çalışmadığını görünüz. Eğer evet ise eklentilerinizi adım adım açın ve bize hangi eklentinin PreMiD'i bozduğunu söyleyiniz.

### Bilgisayarınızı yeniden başlatın
Bilgisayarınızı nasıl yeniden başlatacağınızı bildiğinizi umuyorum.

### PreMiD'i yeniden yükleyin
Bazen dosyalarda bir sorun olabiliyor... Kurulum için öğreticiyi burdan <ahref="/install"> öğrenebilirsiniz.

### Manuel kaldırma
Windows: C:\Users\USER\Program Files (x86)\`` konumuna girin ve PreMiD'i silin. MacOS:~/users/USER/~Library/ApplicationSupport/ konumuna girin ve PreMiD'i silin.

### Ubuntu ve Debian tabanlı işletim sistemlerinde
Discord'u Snapcraft üzerinden indirdiyseniz çalışmaz. You have to uninstall the Snapcraft version by executing `sudo snap remove discord` on a terminal, download [Discord's Linux build](https://discordapp.com/api/download?platform=linux) ([or Discord Canary](https://discordapp.com/api/canary/download?platform=linux)), then navigating to the directory you downloaded Discord to (usually `$HOME/Downloads`), then installing the package using `sudo dpkg -i discord-*.deb`.

### Bu benim sorunumu çözmedi
Lütfen #support yerine destek açınız.