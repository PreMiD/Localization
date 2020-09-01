---
title: Sorun Giderme
description: Karşılaştığınız hatayı çözebilmek için her şey
published: true
date: 2020-09-01T18:31:28.780Z
tags:
editor: markdown
---

> Uzantıyı **ve** uygulamanın yüklü olduğundan emin olun! 
> 
> {.is-warning}

### Discord uygulamasını mı kullanıyorsunuz?
PreMiD, Discord'un tarayıcı sürümünde **çalışmaz**, [buradan](https://discord.com/download) uygulamayı indirmelisiniz.

### Bir servisi ayarlarla mı kullanıyorsunuz?
Bazı servisler (`Twitch` ve `Soundcloud` buna dahildir) bir eklenti hatasından etkileniyor. Bu hata eklentinin varsayılan ayarları düzgün bir şekilde çekmesini engelliyor.

Bunu çözmek için, tek yapmanız gereken topmost seçeneğini aktif etmek: ![presencesettings.gif](/presencesettings.gif)

### Sayfayı yenileyin
Windows'daysanız <kbd>CTRL+R</kbd>/<kbd>F5</kbd>, Mac üzerindeyseniz ise <kbd>CMD+R</kbd> tuşlarını kullanarak sayfayı yenileyebilirsiniz.

### Tarayıcınızı yeniden başlatın
<kbd>Alt</kbd>+<kbd>F4</kbd> (Windows) ya da <kbd>CMD</kbd>+<kbd>Q</kbd> (MacOS) tuşlarını kullanarak tarayıcınızı kapatın. Kapattıktan sonra elle yeniden açmanız gerekiyor elbette.

### Ayarlardaki Oyun Etkinliği'nin açık olduğuna emin olun
**Kullanıcı Ayarları** > **Oyun Etkinliği** ![gameactivity_edited.png](/gameactivity_edited.png)

### PreMiD Uygulamasını Yeniden Başlatın
![quit.png](/quit.png) PreMiD uygulamasını yeniden başlatmak bazen sorununuzu çözebilir.

### Discord'u yeniden başlatın
Windows üzerindeyseniz <kbd>CTRL+R</kbd>, Mac üzerindeyseniz <kbd>CMD+R</kbd> tuşlarını kullanarak Discord'unuzu yenileyin.

### Discord'un yönetici olarak çalışmadığından emin olun
Bu işlem çok önemlidir. Eğer Discord'u yönetici olarak çalıştırırsanız Discord RPC çalışmayacaktır.

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

### Ubuntu/Debian tabanlı dağıtımlarda
Eğer Discord'u Snapcraft üzerinden indirdiyseniz, RPC özellikleri çalışmayacaktır. Bunu çözebilmek için `sudo snap remove discord` kodu ile Snapcraft üzerinden yüklenen Discord'u silmeli ve [buradaki](https://discordapp.com/api/download?platform=linux) (veya [buradaki](https://discordapp.com/api/canary/download?platform=linux)) adresten Discord'un Linux dosyasını indirmeli, ardından yükleme konumuna (bu genellikle `$HOME/Downloads` olur) girerek `sudo dpkg -i discord-*.deb` kodu ile sisteminize yüklemelisiniz.

### McAfee PreMiD'i virüs olarak tespit etti (Windows)
Bu sorun McAfee'nin PreMiD'e yanlış sonuç vermesinden kaynaklıdır, sorunu çözmeleri için onlarla iletişime geçtik, şimdilik siz aşağıdaki adımları takip ederek PreMiD'i tarama dışı bırakabilirsiniz:

> Eğer bu adımları yapamıyorsanız, Discord sunucumuzdaki [#support](https://discord.gg/WvfVZ8T) kanalında bir destek talebi oluşturabilir, bir destekçinin yardım etmesini bekleyebilirsiniz. 
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

### Bunların hiçbiri sorununuzu çözmediyse
[#support](https://discord.premid.app/) kanalından bir destek kaydı oluşturmayı deneyin.