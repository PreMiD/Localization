---
title: Sorun Giderme
description: Karşılaştığınız hatayı çözebilmek için her şey
published: true
date: 2021-02-08T21:30:58.603Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:03:54.865Z
---

> Uzantıyı **ve** uygulamanın yüklü olduğundan emin olun! 
> 
> {.is-warning}

Bu sayfanın içerikleri:
1. [Genel sorun giderme](https://docs.premid.app/troubleshooting#general)
2. [Linux sorun giderme](https://docs.premid.app/troubleshooting#linux)
3. [MacOS sorun giderme](https://docs.premid.app/troubleshooting#macos)

<a name="general"></a>

# Genel sorun giderme
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
Windows: Dosya gezginine `%appdata%` yazın ve açılan yerden `PreMiD` klasörünü silin. MacOS: `~/users/USER/~Library/ApplicationSupport/` konumuna girin ve `PreMiD` klasörünü silin.

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

### PreMiD durumu Discord'da yanlış görünüyor!
Endişelenme. Yenilemek için Discord penceresi açıkken <kbd>CTRL+R</kbd> (Windows) veya <kbd>CMD+R</kbd> (MacOS) tuşlarına basın.

<a name="linux"></a>

# Linux sorun giderme
### Ubuntu/Debian tabanlı dağıtımlar
Eğer Discord'u Snapcraft üzerinden indirdiyseniz, RPC özellikleri çalışmayacaktır. Önce bir uçbirimde `sudo snap remove discord` komutunu çalıştırarak Snapcraft sürümünü silmeniz, **[Discord'un Linux Sürümünü](https://discordapp.com/api/download?platform=linux)** (**[veya Discord Canary](https://discordapp.com/api/canary/download?platform=linux)**), indirmeniz, sonra da Discord'u indirdiğiniz klasöre gidip (genellikle `$HOME/Downloads`), `sudo dpkg -i discord-*.deb` komutunu çalıştırarak kurmanız gerekir. Eğer AppImage işe yaramazsa, **[bu adresdeki](https://packagecloud.io/premid/linux)** diğer paketlerimize göz atmanız gerekir.

### Arch Linux Tabanlı Dağıtımlar
Arch Linux tabanlı dağıtımlarda <code>premid</code> or <code>premid-git</code> adlı AUR (Arch User Reposity) paketi kullanılmalıdır. (<em x-id="3">UYARI: Bu depo premid'i direk kaynak kodundan derler.</em>). Eğer bir AUR yöneticisi (yay vb.) yüklemek istemiyorsanız, <strong x-id="1"><a href="https://github.com/premid/linux/releases">Linux depomuzdan</a></strong> indirebileceğiniz AppImage paketimize göz atın.
<em x-id="3">Uyarı: <strong x-id="1">AUR</strong> deposundaki paket biz (PreMiD kuruluşu) yerine başkaları tarafından sağlanmaktadır.</em>

### Port ilişkilendirme

<strong x-id="1">PreMiD</strong> kendisini <strong x-id="1">3020</strong> portuna ilişkilendirir. Bu, uygulama ve eklentinin iletişim kurması için gereklidir. Eğer <strong x-id="1">PreMiD</strong> bu portla ilgili bir hata gösteriyorsa, bir uçbirimde<code>sudo lsof -i:3020</code> veya <code>sudo netstat -tnlp | grep :3020</code> çalıştırarak 3020 portuna ilişkilendirilmiş başka bir işlem olup olmadığını kontrol edin. Eğer bu porta ilişkilendirilmiş bir işlem varsa portu boşaltmasını sağlayın ve <code>PreMiD'i</code> yeniden başlatın.

### PreMiD AppImage ile kurulduğunda oturum açarken başlamıyor
**Linux depomuzda** açıkladığımız gibi, AppImage oturum açıldığında başlatılamaz. Bu adımları izleyerek otomatik başlamasını kendiniz sağlayabilirsiniz:
1. <code>/etc</code> klasöründe <strong x-id="1">rc.local</strong> adında bir dosya oluşturun.
2. Bu dosyayı istediğiniz düzenleyici ile açıp bazı değişiklikler yaparak aşağıdaki kodu yapıştırın:
```bash
#!/bin/bash
# /bin/bash olarak çalıştırmak için gereklidir (eğer zsh vb. kullanıyorsanız değiştirebilirsiniz.)

# Örnek: /home/PreMiD/PreMiD*.AppImage
<appimage klasörü>/PreMiD*.AppImage

exit 0
```
3. Dosyayı kaydedin ve chmod ile çalıştırma izni verin `sudo chmod a+x /etc/rc.local`.
4. Bilgisayarınızı yeniden başlattığınızda PreMiD AppImage giriş yaptığınızda otomatik başlar.

<a name="macos"></a>

# MacOS sorun giderme
### Klasör oluşturmada hata
<img src="https://i.imgur.com/td92lf6.png" width="300px" style="max-width:100%;" />

Eğer bu hatayı alıyorsanız, bu hesabınızın Yönetici izinlerine sahip olmadığı anlamına gelir ve klasörü bu adımları izleyerek kendiniz oluşturmanız gerekir:
1. Finder'ı açın ve **Uygulamalar** klasörünü bulun.
2. Boş bir yere sağ tıklayın be **Klasör oluştur**'a tıklayın.
3. Bu klasöre `PreMiD` adını verin (küçük büyük harfe dikkat edin).
4. Yükleyiciyi yeniden başlatın.

# Bunların hiçbiri sorununuzu çözmediyse
Destek kanalımızda ([#support](https://discord.premid.app/)) yardım isteyin.