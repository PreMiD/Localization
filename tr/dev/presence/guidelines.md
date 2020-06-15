---
title: Yönergeler
description: Her geliştiricinin, servisinin eklenebilmesi için takip etmeleri gereken kurallar.
published: true
date: 2020-06-11T18:43:52.440Z
tags:
editor: markdown
---

# Yönergeler

GitHub depomuza servis eklerken, takip etmeniz gereken bir takım kurallarımız bulunmaktadır. Bazıları için bu kurallar zorlayıcı görünebilir. Ancak bu ayarlamalar ve kurallar sunucularımızın düzgün bir biçimde çalışması için bize yardımcı olacaktır.

# Oluşturma

Servis geliştirmenin genel kuralları aşağıdaki gibidir:

- Yaptığınız servisler, seçtiğiniz site ile alakalı olmak **zorundadır**.
- Yaptığınız servis **Kesinlikle**, herhangi bir illegal siteninki olmamalıdır. (örneğin, uyuşturucu satıcılığı, çocuk pornografisi vb.)
- Dosya yapısı temiz ve yönetilmeli, belirtilmeyen dosyaları içermemelidir. (örn. vscode ve git klasörleri, resim ve metin dosyaları, vb.)
- Uygun bir dosya yapısına sahip olmanız gerekir, taslaklar kabul **edilemez**.
- Servisler ( `.onion` ) bulunan internet siteleri ve bedava alan adları (örn, `.TK ` [tüm Freenom alan adları], `.RF` `.GD` gibi...) veya sağlayıcıları için bir servis **geliştiremezsiniz**, alan adı veya sağlayıcı için ödeme sağladıkları bilgiyi iletmeleri durumunda gerekli tolerans gösterilecektir.
- Tarayıcılara yerleşik sayfalar için yapılan servislere izin verilmemektedir (örneğin, Chrome Web Mağazası, `chrome://`, `about:` sayfaları gibi). Bu sayfalara kod enjekte edebilmek gelişmiş bir ayar aktifleştirmeyi gerektirdiği ve tarayıcılara zarar verebileceğinden dolayı **yasaktır**.
- Yalnızca tek bir sayfa için desteğe sahip varlıklara izin **verilmeyecektir**, çünkü diğer sayfalar için bozuk görünebilirler (örneğin ana sayfa), politika ve iletişim sayfaları (sık kullanılmayan içerik) veya sitelerin diğer ilgisiz içerikleri. (ör. viki sayfaları)
- Düşük kaliteli (veya tek bir işlev gerçekleştiren) servislere **izin verilmemektedir**. Örneğin sadece sitenin simgesini ve hiçbir zaman değişmeyen bir yazı göstermek.)
- ` dist ` klasörü, ` presence.ts ` dosyası, ` iframe.ts ` dosyası ve ` metadata.json ` dosyası zorunludur sonuç aşağıdaki şemada temsil edilenler olacaktır:

```bash
presence
├── dist
│   ├── metadata.json
│   └── presence.js
├── presence.ts
└── tsconfig.json
```

veya eğer `iframe.ts` kullanıyorsanız:

```bash
presence
├── dist
│   ├── metadata.json
│   ├── presence.js
│   └── iframe.js
├── presence.ts
├── iframe.ts
└── tsconfig.json
```

## [**metadata.json**](https://docs.premid.app/en/dev/presence/metadata)

> `metadata` dosyasınızın doğruluğunu kontrol ettirip geliştiricilere kolaylık sağlamak amacıyla sizlere bir şema sunuyoruz. Bu tamamen isteğe bağlıdır ve inceleme işlemi sırasında gerekli değildir. 
> 
> {.is-info}

> `metadata` dosyanızı burada gösterildiği şekilde organize etmeniz şiddetle tavsiye edilir. Bu dosyadaki servis isimleri, açıklamalar, etiketler ve ayarlar yazım kurallarına uygun olarak yazılmalıdır. Düzgün bir şekilde biçimlendirmemiş hiçbir şey kabul edilmeyecektir. 
> 
> {.is-warning}

> Çıplaklık içeren sitelerin servisleri **mutlaka** `nsfw` tagı içermelidir, ayrıca logo/kapak fotoğrafları bu içerikleri kesinlikle **barındırmamalıdır**. 
> 
> {.is-warning}

Her servisin kendine ait açıklayıcı bir `metadata.json` dosyası vardır, bu dosya sistem tarafından okunarak ayarlar yapılır. Bu dosyanın bir örneği:

```json
{
  "$schema": "https://schemas.premid.app/metadata/1.0",
  "author": {
    "name": "KULLANICI ADI",
    "id": "ID"
  },
  "contributors": [{
    "name": "KULLANICI ADI",
    "id": "ID"
  }],
  "service": "SERVİS İSMİ",
  "description": {
    "en": "AÇIKLAMA",
    "tr": "TÜRKÇE AÇIKLAMA"
  },
  "url": "LİNK",
  "version": "SÜRÜM",
  "logo": "LOGO LİNKİ",
  "thumbnail": "KÜÇÜK RESİM LİNKİ",
  "color": "#HEX000",
  "tags": ["ETİKET1", "ETİKET2"],
  "category": "KATEGORİ",
  "regExp": "REGEXP",
  "iFrameRegExp": "REGEXP",
  "iframe": false,
  "settings": [
        { 
            "id": "ID",
            "title": "BAŞLIK",
            "icon": "FONTAWESOME FREE SİMGESİ",
            "value": true
        },
        {
            "id": "ID",
            "if": {
                "ID": true
            },
            "title": "BAŞLIK",
            "icon": "FONTAWESOME FREE SİMGESİ",
            "value": "\"%şarkı%\", %sanatçı%",
            "placeholder": "%şarkı% ve %sanatçı% kullanabilirsiniz"
        },
        {
            "id": "ID",
            "title": "BAŞLIK",
            "icon": "FONTAWESOME FREE SİMGESİ",
            "value": 0,
            "values": ["1", "2", "vb."]
        }
    ]
}
    }
  ]
}
```

> Eğer bu alanlardan biri [dokümanda](https://docs.premid.app/en/dev/presence/metadata) opsiyonel olarak işaretlenmişse ve değeriniz, varsayılan değer ile aynıysa, `metadata` dosyanızda bu değeri belirtmeyin (örneğin, iframe kullanmayan servislerin `iframe` alanına sahip olmaması gerekir 
> 
> {.is-warning}

> `metadata` dosyasında belirtilen tüm resimler `i.imgur.com` veya size direkt bir erişim sunan bir CDN'de barındırılmalıdır. Sitenin kendisinde barındırılan resimlere izin verilmemektedir, çünkü bu resimler istemsizde olsa bazen değişiklik gösterebilir. 
> 
> {.is-warning}

Bazı alanlar ve alanların kuralları aşağıda belirtilmiştir.

### **`$schema`**

- Bu şema _anahtarı_, **mutlaka** başında dolar işareti barındırmalıdır. Bu işaret editörünüzün buradaki bağlantıyı kullanarak dosyayı doğrulamanızı sağlar. _Önceden de belirtildiği gibi, bir şema belirtmenize gerek olmasa da, belirttiğiniz takdirde bunu düşünmelisiniz._

### **`author`**

- Buradaki ID, Discord'daki kullanıcı ID'niz **olmalıdır**. ID'nizi öğrenmek için açmanız gerek geliştirici ayarlarını nasıl açacağınızı [buraya](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-) tıklayarak öğrenebilirsiniz. _Lütfen bunu sadece servisiniz için kullanılacak olan uygulama ID'si ile **karıştırmayın**._

### **`contributors`**

- Kendinizi bir katkı sağlayan kişi olarak eklemeyin, eğer servisi yapmanızda kimse yardımcı olmadıysa, bu alana kimseyi eklemeyin.

### **`service`**

- Servisin ismi, servisin içinde bulunduğu klasörle aynı isimde **olmalıdır**. Örneğin, eğer servisiniz `/website/Y/YouTube` yolunda bulunuyorsa, servisinizin ismi `YouTube` olmalıdır.

### **`description`**

- **Tüm** servislerin, İngilizce açıklamaya sahip olması **zorunludur**, bu zorunluluk sitenin İngilizce destekleyip desteklememesiyle bağlantılı değildir.
- Bilmediğiniz bir dilde açıklama **eklemeyin**, çevirmenler, gerekli olduğu durumda sizin için sizin `metadata.json` dosyanıza gereken çevirileri ekleyecektir.

### **`url`**

- Adres, eğer internet sitesi tek bir alan adına sahipse string türünde olmalıdır. Eğer site birden fazla alan adı kullanıyorsa, bu veri, her birini belirttiğiniz bir array olmalıdır.
- Bu alanda HTTP protokollerini (örneğin, `http` veya `https`), parametreleri (örneğin,  `www.google.com/search?gws_rd=ssl` -bu değerin doğrusu `www.google.com` olacaktır) belirtmeyin.

### **`version`**

- Sürüm numaranızın her zaman [anlamsal sürümlendirme standartlarını](https://semver.org) takip ettiğine emin olun. Bu, sürüm isimlerinizi `<YENİ-ÖZELLİK>.<BÜYÜK-HATA-DÜZELTMESİ>.<KÜÇÜK-VE-METADATA-DÜZELTMELERİ>` şeklidir. Bunların dışında herhangi bir biçimlendirme (`1.0.0.1`, `1.0`, `1`, `1.0.0-BETA` vb.) ve ufak bir hata için sürüm numarasını `1.0.0`'dan `2.0.0`'a değiştirmeye izin verilmemektedir.
- Sürüm numarası ilk yayımda her zaman `1.0.0` olmalıdır, aksi belirtilmediği sürece bunu değiştirmek yasaktır.

### **`logo`**

- Logo, `1:1` en boy oranına sahip kare bir resim **olmalıdır**.
- Resim en az `512x512` piksel çözünürlüğünde olmalıdır. [waifu2x](http://waifu2x.udp.jp/) gibi araçlar kullanarak resminizi boyutlandırabilirsiniz.

### **`thumbnail`**

- Önizleme resmi (thumbnail), **tercihen** siteyi tanıtan bir afiş olmalıdır, bunun sağlanamadığı durumlarda [sitenin ekran görüntüsü](https://i.imgur.com/OAcBmwW.png) kullanılmalıdır.

### **`color`**

- Renk **mutlaka** hex değeri olmalıdır ve seçtiğiniz renk `#000000` ile `#FFFFFF` arasında olmalıdır.
- Bu alanın içine yazacağınız string, **mutlaka** hash işaretiyle (#) başlamalıdır.

### **`tags`**

- **Tüm** servisler en az _bir adet_ etikete sahip olmalıdır.
- Bu etiketlerde boşluk, taksim (/), tırnak işaretleri, unicode karakterleri gibi karakterler **bulundurmamalı** ve her zaman küçük harflerden oluşmalıdır.
- Etiketler, tercihen servis için alternatif isimler içermelidir. Bu sayede aramalarda çıkması daha kolaylaşır (örneğin, eğer YouTube servisi yapıyorsanız, etiketlerde `youtube` ve `video` etiketlerini belirtebilirsiniz)
- NSFW servisler için `NSFW` etiketi eklemeniz **gerekmektedir**.

### **`category`**

- Seçtiğiniz kategori, [bu doküman yazısında](https://docs.premid.app/en/dev/presence/metadata#presence-categories) belirtilen kategorilerden birisi **olmalıdır**.

### **`regExp`** <br /> **`iFrameRegExp`**

- Regex verisi **mutlaka** geçerli olmalıdır. Lütfen buraya yazdığınız değeri, [doküman sayfamızda](https://docs.premid.app/en/dev/presence/metadata#testing) belirtilen araçlarla deneyip çalıştığına emin olun.

### **`settings`**

- Eğer bir değişken belirlerseniz (örneğin, `%sarki% -%sanatci%`), bu değişkenleri yüzde işaretleri arasına almalısınız. `%var`, `var%`, ya da `%%var%%` şeklinde yazılan değişkenlerin hiçbiri, standartlar gereği kabul edilmeyecektir.

## [**presence.ts**](https://docs.premid.app/en/dev/presence/class)

> Kodunuz okunabilir ve anlaşılır **olmalıdır**, yazım hatalarına  dikkat etmeli ve kurallara uyulmalıdır. Sitede bulunan yazım hataları göz ardı edilebilir. 
> 
> {.is-warning}

`presence.ts` dosyanızı yazarken izlemeniz gereken kuralların listesi:

- `Presence` sınıfının tanımını, nadir görülen hatalardan kurtulmak için, **her zaman** herhangi bir değişkenden önce belirtin; bu bir kural olmadığı için ileride bu listeden kaldırılabilir.
- [Eklentinin içerisinde bulunan fonksiyonlar](https://docs.premid.app/dev/presence#files-explained) ile yapabileceğiniz şeyi kendi fonksiyonlarınızı yazarak **yapmayın**; bu şekilde eklenti ile iletişimde sorun çekmezsiniz. Dokümanda görmediğiniz herhangi bir fonksiyonu kendiniz yazmakta özgürsünüz.
- Servislere, yapıldığı internet sitesinin ana dilinin eklenmemesi **yasaktır**, mesela YouTube'un Türkçe ve İspanyolca kodlanması ancak İngilizceyi desteklememesi gibi
- `smallImageKey` ve `smallImageText` alanları, ek/ikincil bilgiler koyabileceğiniz (oynatılıyor/durduruldu gibi) kısımlardır. Burada bir Discord hesabının reklamını yapamaz, PreMiD ile alakasız herhangi bir şey kullanamazsınız.
- `localStorage`'a erişmenize **izin verilmemektedir**.
- Çerezlerden bilgi alışverişi yaparken, çerezlerin başına her zaman `PMD_` ekini koyun.
- Sadece `premid.app` ve servisin sitesinin API'sine HTTP/HTTPS isteklerinde bulunabilirsiniz. Eğer farklı bir alan adına istek atıyorsanız, nedenini açıklamanız gerekir.

## [**tsconfig.json**](https://docs.premid.app/en/dev/presence/tsconfig)

> `tsconfig.json` dosyasını [doküman](https://docs.premid.app/en/dev/presence/tsconfig) sayfasında gösterilenin dışında herhangi bir şekilde düzenlemeyin. 
> 
> {.is-warning}

# Yapılandırma

> **presence.ts**, **iframe.ts**  veya **metadata.json** dosyalarından herhangi birine değişiklik yaparken, **metadata** dosyanızda belirtilen sürüm numarasını, daha üst bir sayıya güncellemelisiniz. 
> 
> {.is-warning}

Bazı durumlarda, servisler beklenmedik şekilde tepkiler verebileceği veya yazılan kodun daha iyi bir şekilde yazılabileceği durumlar olabilir. Aşağıdan **KESİNLİKLE** dikkat edilmesi gereken servis düzenleme kurallarını görebilirsiniz.

- Bir servisi baştan aşağıya yazmak ve yapımcısının adını değiştirme yetkisine sahip **değilsiniz**. Eğer servisin yapımcısı resmi sunucumuzdan yasaklanmış veya bir ay içerisinde herhangi bir değişiklik yapmadıysa, bir Servis Onaylayıcısı ile iletişime geçip servis üzerinde değişiklik yapma talebinde bulunabilirsiniz.
- Herhangi biri kodda önemli düzeltmeler yapabilir, yine de, düzeltme gerektirmeyen yerleri düzeltmek **mecburi değildir**. Geçerli düzeltmeler şunlar gibi olabilir; _eksik yollar_, _kelime hataları_, _geçersiz resimler_, vb.
- Eğer düzenleme yaptığınız servisin **çeyreğini** düzenlediyseniz, kendinizi o servise bir "katılımcı" olarak ekleyebilirsiniz. Bu konu hakkında daha detaylı bilgi alabilmek için bir Servis Onaylayıcısı ile iletişime geçebilirsiniz.
- Değişiklikler yararlı olmalıdır. Bunlara düzeltme (kod ve yazım hataları), eklemeler (farklı dillerdeki açıklamalar) gibi şeyler girebilir. Resimler eğer geçerliliğini yitirmemiş veya kalitesi düşük değilse, değiştirmeyin.

# Onaylanma

> Eğer biriyle iletişime geçmek istiyorsanız, lütfen resmi Discord sunucumuzu kullanın. Tüm doğrulayıcıların profilinde `Presence Verifier` rolü vardır. 
> 
> {.is-info}

> Katkıda bulunulan kodların **hepis** `Mozilla Public License 2.0` adı altında saklanacaktır. 
> 
> {.is-info}

> Bir pull request atmadan önce klon deponuzun güncel olduğuna **emin olun**. Böylelikle `DeepScan`'in vereceği hatalardan kurtulabilirsiniz. 
> 
> {.is-warning}

Servis geliştirmenin en önemli aşamalarından biri servisinizi mağazaya ekletmektir. Bu, GitHub üzerinde bulunan `PreMiD/Presences` deposuna atacağınız bir [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) ile yapılır. Servis inceleme ekibimizdekiler, servisiniz mağazaya eklenmeden önce, servisinizin kodunu inceleyecek ve standartlara uyup uymadığını kontrol edecektir.

<div>
  <h2 style="font-size: 2rem; margin-bottom: 0;">Servis Onaylayıcıları</h2>
  <a href="https://github.com/Alanexei"><img src="https://github.com/Alanexei.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/Bas950"><img src="https://github.com/Bas950.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/doomlerd"><img src="https://github.com/doomlerd.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/frozaum"><img src="https://github.com/frozaum.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/TheDropX"><img src="https://github.com/TheDropX.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <br />
</div>

## `İnceleme`

Bir pull request atmadan önce bilmeniz gereken şeyler:

- Pull request'inizin birleştirilmesi, ekipten 2 kişinin onayıyla gerçekleşir.
- Eğer bir pull request, 7 günden daha uzun bir süre boyunca inaktif olursa, otomatik olarak kapatılacaktır.
- Birleştirme için isteğinizin tüm isteklerden geçmesi **gereklidir**.
- ⚠️ İsteğinize, kendinizin çektiği, sitenin ve profilinizin yan yana gözüktüğü bir ekran görüntüsü ekleyerek servisinizin çalıştığını **kanıtlamalısınız**. _Oluşturma ve düzenleme içinde de ekran görüntüleri belirtebilirsiniz_. Bu izin, hem servisi oluştururken, hem de servisi güncellerken kullanılabilir.

## `Kontroller`

![Kontroller](https://i.imgur.com/bk0A1iY.png)

Şu anda, bir servis, 2 adet otomatik doğrulama aşamasından geçmektedir. Bu iki doğrulama, servis onaylayıcısının kodunuzun çalışmaya hazır olup olmadığını ayırt etmesinde kolaylık sağlar.

- `DeepScan` kod kalitesini kontrol eden bir otomattır. Hata almanız durumunda, aldığınız hatayı düzeltmekle **yükümlüsünüz**.
- `Schmea Validation` ise `metadata.json` dosyanızı tarayıp, hatalı veya eksik veriler olup olmadığını kontrol etmek için vardır. Eğer burada da bir hata ile karşılaşırsanız, o hatayı da düzeltmelisiniz. `metadata.json` dosyanıza bir şema değeri eklemek, kodlama sırasında (eğer destekliyorsa) editörünüzün size hatalarını belirtmesini sağlar.

## `Ek Kurallar`

- Servisiniz **her zaman** en uygun klasörde bulundurun. Servisinizin ismi bir Latin karakteriyle başlıyorsa, servisinizi o karaktere karşılık gereken klasörün içine koyun (örneğin, `D/dアニメストア` veya `G/Google`). Geriye kalan tüm unicode/Latin olmayan karakterler `#` klasörünün içine konulmalıdır (örneğin, `/#/巴哈姆特` gibi), numara ile başlayanlar ise `0-9` klasöründe olmalıdır (örneğin, `/0-9/4anime`).

Tüm yönergeleri uygun gözden geçirmeler ve kontrollerle karşıladıktan sonra, servisiniz mağazaya eklenecektir.

# Katkılar

Bu kılavuzun `ikinci nesli` aşağıdaki şahıslar tarafından hazırlanmıştır:

<div>
<a href="https://github.com/Alanexei"><img src="https://github.com/Alanexei.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
</div>

`Birinci nesli` ise aşağıdaki kişiler tarafından yönetilmiştir:

<div>
<a href="https://github.com/Alanexei"><img src="https://github.com/Alanexei.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
<a href="https://github.com/Bas950"><img src="https://github.com/Bas950.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
<a href="https://github.com/doomlerd"><img src="https://github.com/doomlerd.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
</div>
