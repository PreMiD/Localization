---
title: Yönergeler
description: Her geliştiricinin, servisinin eklenebilmesi için takip etmeleri gereken kurallar.
published: true
date: 2020-08-31T02:26:49.039Z
tags:
editor: markdown
---

# Yönergeler

GitHub depomuza servis eklerken, takip etmeniz gereken bir takım kurallarımız bulunmaktadır. Bazıları için bu kurallar zorlayıcı görünebilir. Ancak bu ayarlamalar ve kurallar sunucularımızın düzgün bir biçimde çalışması için bize yardımcı olacaktır.

# Oluşturma

Servis geliştirmenin genel kuralları aşağıdaki gibidir:

- Yaptığınız servisler, seçtiğiniz site ile alakalı olmak **zorundadır**.
- Yaptığınız servis **kesinlikle** yasa dışı bir siteye ait olmamalıdır (örneğin, uyuşturucu satıcılığı, çocuk pornografisi vb.)
- Dosya yapısı temiz ve yönetilmeli, kullanılmayan dosyalar içermemelidir (örneğin, vscode ve git klasörleri, resim ve metin dosyaları, vb.)
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

> Çıplaklık içeren sitelerin servisleri **mutlaka** `nsfw` etiketi içermelidir, ayrıca servisin resmi veya ekran görüntüsü bu içerikleri kesinlikle **barındırmamalıdır**. 
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
  "altnames": ["ALTERNATİF SERVİS İSMİ"],
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

> All images in the `metadata` file must be hosted on `i.imgur.com`. Using content hosted on the website is **not** permitted as they can change the paths and files unwillingly. 
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
- Eğer site, adresini resmi ismi olarak kullanmıyorsa servis ismi olarak sitenin bağlantı adresini **kullanamazsınız**. Eğer isim tanımlayıcı değilse ve belirsiz sayılabilecek ise, bağlantı adresini kullanmak **gereklidir**. (örneğin, `youtube.com` kabul edilmez iken, `YouTube` kabul edilir çünkü bu resmi ve tanımlayıcı bir isimdir. `Top` tanımlayıcı bir isim olmadığından dolayı `top.gg` bağlantısını kullanmak **gereklidir**).

### **`altnames`**

- Bunu **sadece** bir internet sitesinin resmi olarak birden fazla ismi olduğunda (örneğin, Pokémon ve 포켓몬스터) veya servis isminin içerisinde özel karekterlerin olduğu servislerde aramayı kolaylaştırmak için (örneğin, Pokémon ve Pokemon) kullanın. *Kısaltılmış* servis isimleri `tags` alanının altına yazılmalıdır.

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
- Servis, servisin sitesinin içeriğine uyan bir kategori kullanmalıdır. (örneğin, servisin sitesi anime ile alakalı değilse `anime` kullanamazsınız).

### **`regExp`** <br /> **`iFrameRegExp`**

- Regex verisi **mutlaka** geçerli olmalıdır. Lütfen buraya yazdığınız değeri, [doküman sayfamızda](https://docs.premid.app/en/dev/presence/metadata#testing) belirtilen araçlarla deneyip çalıştığına emin olun.

### **`settings`**

- Eğer bir değişken belirlerseniz (örneğin, `%sarki% -%sanatci%`), bu değişkenleri yüzde işaretleri arasına almalısınız. `%var`, `var%`, ya da `%%var%%` şeklinde yazılan değişkenlerin hiçbiri, standartlar gereği kabul edilmeyecektir.
- Ayarların adlarının hepsi büyük harfle **olmamalıdır**. Örneğin, `GÖZ ATMA DURUMUNU GÖSTER` kabul **edilmeyecektir**; fakat, `Göz Atma Durumunu Göster` ya da `Göz atma durumunu göster` kabul edilecektir.

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
- `premid.app` ya da servisin sitesinin API'sine sadece HTTP/HTTPS istekleri yapabilirsiniz. Eğer farklı bir alan adına istek atıyorsanız, nedenini açıklamanız gerekir.
- Veri objesinin üzerindeki verileri "undefined" veya "null" olarak ayarlamak yerine `delete` aracını kullanın. (örneğin, `data.startTimestamp = undefined` yerine `delete data.startTimestamp` kullanın)
- You are **not** allowed to write presences that change the functionality of a given website. This includes the addition, deletion, or modification of DOM elements.

## [**tsconfig.json**](https://docs.premid.app/en/dev/presence/tsconfig)

> `tsconfig.json` dosyasını [doküman](https://docs.premid.app/en/dev/presence/tsconfig) sayfasında gösterilenin dışında herhangi bir şekilde düzenlemeyin. 
> 
> {.is-warning}

# Yapılandırma

> **presence.ts**, **iframe.ts**  veya **metadata.json** dosyalarından herhangi birine değişiklik yaparken, **metadata** dosyanızda belirtilen sürüm numarasını, daha üst bir sayıya güncellemelisiniz. 
> 
> {.is-warning}

Bazı durumlarda, servisler beklenmedik şekilde tepkiler verebileceği veya yazılan kodun daha iyi bir şekilde yazılabileceği durumlar olabilir. Aşağıdan **KESİNLİKLE** dikkat edilmesi gereken servis düzenleme kurallarını görebilirsiniz.

- Bir servisi baştan aşağıya yazmak ve yapımcısının adını değiştirme yetkisine sahip **değilsiniz**. If the presence author was banned from the official server or hasn't made the required changes within a month, you may contact a reviewer to see if you can to rewrite the presence.
- Herhangi biri kodda önemli düzeltmeler yapabilir, yine de, düzeltme gerektirmeyen yerleri düzeltmek **mecburi değildir**. Valid modifications are, but **not** limited to, _missing paths_, _typos_, _missing images_, etc.   - Anyone may provide hotfixes to fix bugs; however, try **not** to make changes to code that does **not** need to be fixed. Geçerli düzeltmeler şunlar gibi olabilir; _eksik yollar_, _kelime hataları_, _geçersiz resimler_, vb.
- Eğer düzenleme yaptığınız servisin **çeyreğini** düzenlediyseniz, kendinizi o servise bir "katılımcı" olarak ekleyebilirsiniz. Bu konu hakkında daha detaylı bilgi alabilmek için bir Servis Onaylayıcısı ile iletişime geçebilirsiniz.   - Eğer düzenleme yaptığınız servisin **çeyreğini** düzenlediyseniz, kendinizi o servise bir "katılımcı" olarak ekleyebilirsiniz. Contact a reviewer for more information about this subject.
- Değişiklikler yararlı olmalıdır. Bunlara düzeltme (kod ve yazım hataları), eklemeler (farklı dillerdeki açıklamalar) gibi şeyler girebilir. Resimler eğer geçerliliğini yitirmemiş veya kalitesi düşük değilse, değiştirmeyin.    - Değişiklikler yararlı olmalıdır. Bunlara düzeltme (kod ve yazım hataları), eklemeler (farklı dillerdeki açıklamalar) gibi şeyler girebilir. Resimler eğer geçerliliğini yitirmemiş veya kalitesi düşük değilse, değiştirmeyin.

# Onaylanma

> Eğer biriyle iletişime geçmek istiyorsanız, lütfen resmi Discord sunucumuzu kullanın. All reviewers will have the `Reviewer` role on their profile. 
> 
> {.is-info}

> Please keep in mind that the reviewers work voluntarily and manage other repositories in addition to this one, your pull request may not get reviewed until hours or even days after it has been created. 
> 
> {.is-warning}

> Katkıda bulunulan kodların **hepis** `Mozilla Public License 2.0` adı altında saklanacaktır. 
> 
> {.is-info}

> Bir pull request atmadan önce klon deponuzun güncel olduğuna **emin olun**. Böylelikle `DeepScan`'in vereceği hatalardan kurtulabilirsiniz. 
> 
> {.is-warning}

Servis geliştirmenin en önemli aşamalarından biri servisinizi mağazaya ekletmektir. Bu, GitHub üzerinde bulunan `PreMiD/Presences` deposuna atacağınız bir [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) ile yapılır. Our reviewers will confirm that your presence is up to standards and it will be pushed onto the store.

<div>
  <h2 style="font-size: 2rem; margin-bottom: 0;">Reviewers</h2>
  <a href="https://github.com/Alanexei"><img src="https://github.com/Alanexei.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/Bas950"><img src="https://github.com/Bas950.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/doomlerd"><img src="https://github.com/doomlerd.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/frozaum"><img src="https://github.com/frozaum.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/TheDropX"><img src="https://github.com/TheDropX.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <br />
</div>

## `Restrictions`

Repetitive offenses such as breaking guidelines, spamming pull requests, threats, or innapropriate behavior will get you banned from creating presences.

In this scenerio, the following changes will occur:

- Presences under your management will be transferred to the PreMiD bot or another user (reviewer decision). The application id for each presence will be recreated under the new owner's name.
- All of your issues and pull requests (presence creation, presence contribution, etc) created following the ban will be prompty closed.
- Tickets created under your name regarding presence development will be deleted.


## `İnceleme`

Bir pull request atmadan önce bilmeniz gereken şeyler:

- Pull request'inizin birleştirilmesi, ekipten 2 kişinin onayıyla gerçekleşir.
- Eğer bir pull request, 14 günden daha uzun bir süre boyunca inaktif olursa, otomatik olarak kapatılacaktır.
- Birleştirme için isteğinizin tüm isteklerden geçmesi **gereklidir**.
- ⚠️ İsteğinize, kendinizin çektiği, sitenin ve profilinizin yan yana gözüktüğü bir ekran görüntüsü ekleyerek servisinizin çalıştığını **kanıtlamalısınız**. _Oluşturma ve düzenleme içinde de ekran görüntüleri belirtebilirsiniz_. Bu izin, hem servisi oluştururken, hem de servisi güncellerken kullanılabilir.
- ⚠️ Eğer ayarlar sekmesini kullanıyorsanız, ayrıca buranın da bir ekran görüntüsünü atmanız **gereklidir**. [Buradan](https://imgur.com/a/OD3sj5R) bir örneğine ulaşabilirsiniz.

## `Kontroller`

![Kontroller](https://i.imgur.com/bk0A1iY.png)

Şu anda, bir servis, 2 adet otomatik doğrulama aşamasından geçmektedir. All of these checks help the reviewers determine whether your presence is suitable for deployment.

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
