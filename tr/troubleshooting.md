---
title: Sorun Giderme
description: Karşılaştığınız hatayı çözebilmek için her şey
published: true
date: 2021-02-08T17:11:28.733Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:03:54.865Z
---

> Uzantıyı **ve** uygulamanın yüklü olduğundan emin olun! 
> 
> {.is-warning}

Included on this page:
1. [General troubleshooting](https://docs.premid.app/troubleshooting#general)
2. [Linux troubleshooting](https://docs.premid.app/troubleshooting#linux)
3. [MacOS troubleshooting](https://docs.premid.app/troubleshooting#macos)

<a name="general"></a>

# General troubleshooting
### Sayfayı yenileyin
Windows'daysanız <kbd>CTRL+R</kbd>/<kbd>F5</kbd>, Mac üzerindeyseniz ise <kbd>CMD+R</kbd> tuşlarını kullanarak sayfayı yenileyebilirsiniz.

### Discord uygulamasını kullandığınıza emin misiniz?
PreMiD, Discord'un tarayıcı sürümünde **çalışamaz**, bu yüzden [buradan](https://discord.com/download) uygulamayı indirmelisiniz.

### Ayarlardaki Oyun Etkinliği'nin açık olduğuna emin olun
**Kullanıcı Ayarları** > **Oyun Etkinliği** ![gameactivity_edited.png](/gameactivity_edited.png)

### Discord'un yönetici olarak çalışmadığından emin olun
Bu işlem çok önemlidir. Eğer Discord'u yönetici olarak çalıştırırsanız Discord RPC çalışmayacaktır.

### Bir servisi ayarlarla mı kullanıyorsunuz?
Bazı servisler (`Twitch` ve `Soundcloud` buna dahildir) bir eklenti hatasından etkileniyor. Bu hata eklentinin varsayılan ayarları düzgün bir şekilde çekmesini engelliyor.

Bunu çözmek için, tek yapmanız gereken topmost seçeneğini aktif etmek: ![presencesettings.gif](/presencesettings.gif)

### Tarayıcınızı yeniden başlatın
<kbd>Alt</kbd>+<kbd>F4</kbd> (Windows) ya da <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS) tuşlarını kullanarak tarayıcınızı kapatın. Kapattıktan sonra elle yeniden açmanız gerekiyor elbette.

### PreMiD Uygulamasını Yeniden Başlatın
![quit.png](/quit.png) PreMiD uygulamasını yeniden başlatmak bazen sorununuzu çözebilir.

### Discord'u yeniden başlatın
Windows üzerindeyseniz <kbd>CTRL+R</kbd>, Mac üzerindeyseniz <kbd>CMD+R</kbd> tuşlarını kullanarak Discord'unuzu yenileyin.

### Bilgisayarınızda çalışan bir antivirüs programı veya güvenlik duvarı olup olmadığını kontrol edin
Bazen antivirüs programlarınız veya güvenlik duvarınız yerel ağınızda sunucu oluşturan/yöneten veya sadece interneti kullanmaya çalışan uygulamaları kısıtlayabilir. Uygulamamız ve eklentimiz arasında veri alışverişi yapabilmek için yerel ağınızda oluşturulmuş bir sunucu kullanmamız gerekiyor, eğer bu yetkiyi uygulamaya vermezseniz, PreMiD'i kullanamazsınız.

### Eklentilerinizi devre dışı bırakın
Tüm eklentileri devre dışı bırakıp eklentimizin çalışıp çalışmadığını kontrol edin. Eğer çalışıyorsa, birer birer devre dışı bıraktığınız eklentileri tekrar aktifleştirin ve hangisinin PreMiD'i bozduğunu bulmaya çalışın.

### Bilgisayarınızı yeniden başlatın
Bir bilgisayarın nasıl yeniden başlatılacağını bildiğinizi umuyoruz.

### PreMiD'i yeniden yükleyin
Bazen dosyalarda bir sorun olabiliyor... Kurulum için gerekli adımları [buradan](/install) öğrenebilirsiniz.

### Manuel kaldırma
Windows:    `C:\Users\USER\AppData\Roaming` yolundan `PreMiD</0>  klasörünü silin.
MacOS: <code>~/users/USER/~Library/ApplicationSupport/ konumuna girin ve PreMiD klasörünü silin`.

### McAfee PreMiD'i virüs olarak tespit etti (Windows)
Bu sorun McAfee'nin PreMiD'e yanlış sonuç vermesinden kaynaklıdır, sorunu çözmeleri için onlarla iletişime geçtik, şimdilik siz aşağıdaki adımları takip ederek PreMiD'i tarama dışı bırakabilirsiniz:

> Eğer bu adımları yapamıyorsanız, Discord sunucumuzdaki [#support](https://discord.premid.app/) kanalında bir destek talebi oluşturabilir, bir destekçinin yardım etmesini bekleyebilirsiniz. 
> 
> {.is-warning}

1. McAfee uygulamasını açın ve sağ üst taraftaki ayarlar simgesini tıklayın. <img src="https://i.imgur.com/rPLZn6c.png" width="500px" style="max-width:100%;" />
2. "Karantinaya Alınan Öğeler"e tıklayın (üstten ikinci seçenek).
3. Geniletin, ve "settings.dat" isimli bir elemandan önceki `>` işaretine tıklayın.
4. Dosya yolunun "AppData\Local\Temp\PreMiD"  içerdiğine emin olun, bulduktan sonra geri yükle tuşuna basın. <img src="https://i.imgur.com/9nvHmiI.png" width="500px" style="max-width:100%;" />
5. Geri yüklendikten sonra "Karantinaya Alınmış Öğeler" penceresini kapatabilir ve sağ üstteki ayarlar simgesine tekrar basabilirsiniz.
6. "Gerçek Zamanlı Tarama"ya tıklayın (üstten üçüncü seçenek).
7. Genişletin ve "Dosya ekle"ye tıklayın.
8. Dosya gezgini URL çubuğuna "%appdata%" yazın ve Enter tuşuna basın. <img src="https://i.imgur.com/2bchwLe.png" width="500px" style="max-width:100%;" />
9. "PreMiD" klasörünü açın ve "PreMiD.exe" dosyasını seçin ve aç'a tıklayın. <img src="https://i.imgur.com/aHOyv3V.png" width="500px" style="max-width:100%;" />
10. McAfee şimdi dosyamızı göz ardı etmeli, uygulamayı çalıştırın ve kullanmaya başlayın.

### PreMiD status bugged on discord!
Don't worry. Just click **ctrl+r** keybind on your discord to restart it. After this it will not show!

<a name="linux"></a>

# Linux troubleshooting
### Ubuntu/Debian based distros
Eğer Discord'u Snapcraft üzerinden indirdiyseniz, RPC özellikleri çalışmayacaktır. You have to uninstall the Snapcraft version by executing `sudo snap remove discord` on a terminal, download **[Discord's Linux build](https://discordapp.com/api/download?platform=linux)** (**[or Discord Canary](https://discordapp.com/api/canary/download?platform=linux)**), then navigating to the directory you downloaded Discord to (usually `$HOME/Downloads`), then installing the package using `sudo dpkg -i discord-*.deb`. If AppImage doesn't work, you should consider checking our other packages by **[this link](https://packagecloud.io/premid/linux)**.

### Arch Linux based distros
Arch Linux based distros should use AUR (Arch User Repository) package that is named `premid` or `premid-git` (*WARNING: This one builds premid from source*). If you don't want to install aur manager (yay etc.), you can check our AppImage that is downloadable from our **[Linux repository](https://github.com/premid/linux/releases)**. *Warning: **AUR** repo is not maintained by us, but by other people.*

### Port binding
You should know that **PreMiD** binds itself to port **3020** that is necessary for Extension and Application communication. If **PreMiD** shows you error about this port, you should check if something binds to port by writing to terminal `sudo lsof -i:3020` or `sudo netstat -tnlp | grep :3020`. If some application is binded to it you should kill it and try running `PreMiD` again.

### PreMiD's AppImage doesn't launch at login?!?!
As we stated in our **Linux repository**, AppImage can't be launched at login. You can add it to autostart manually. Instruction how to do this:
1. Make file named **rc.local** in `/etc` directory.
2. Open this file in your favourite editor and paste-change this:
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

If you get this error, it means that your account doesn't have Administrator permissions and you need to create folder manually. Instruction how to do it:
1. Open finder and open **Applications** folder.
2. Right-click on blank space and click **Create folder**.
3. Create folder named `PreMiD` (remember about upper-cased letters).
4. Open installer again.

# Bunların hiçbiri sorununuzu çözmediyse
Please open a ticket in [#support](https://discord.premid.app/).