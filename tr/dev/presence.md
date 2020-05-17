---
title: Servis Geliştirme
description:
published: true
date: 2020-05-17T00:54:47.699Z
tags:
---

> Tüm servisler artık [https://github.com/PreMiD/Presences](https://github.com/PreMiD/Presences) adresinde saklanmaktadır. 
> 
> {.is-info}

`2.x` sürümleri, [servis mağazası](https://premid.app/store) özelliği ile birlikte gelir. Kullanıcılar bundan sonra kendi oluşturdukları servisleri [mağazaya](https://premid.app/store) ekletebilecek ve diğer kullanıcıların kullanımına sunabilecek.

# Kurallar
> Burada belirtilen kuralları takip **etmezseniz**, bir `Servis Onaylayıcısı` sizden gerekli değişiklikleri yapmanızı, gereken durumlarda da isteğinizi sonlandırma yetkisini kullanabilir. 
> 
> {.is-warning}

> Eğer attığınız "pull request" yeni bir servis eklemek veya olan bir servis üzerinde değişiklikler yapmak için ise, açıklamanıza **MUTLAKA** ekran görüntüleri eklemelisiniz. `metadata.json` veya `tsconfig.json` dosyalarına yapılacak değişikliklerde ekran görüntülerine ihtiyaç yoktur. _Ekran görüntüleriniz **mutlaka** GitHub'ın kendisine yüklenmelidir. Üçüncü parti resim yükleme siteleri kullanamazsınız._ 
> 
> {.is-warning}

GitHub depomuza servis eklerken, takip etmeniz gereken bir takım kurallarımız bulunmaktadır. Bazıları için bu kurallar zorlayıcı görünebilir. Ancak bu ayarlamalar ve kurallar sunucularımızın düzgün bir biçimde çalışması için bize yardımcı olacaktır.

## Oluşturma
> Yazdığınız kod MUTLAKA *düzgün yazılmış* ve *okunaklı* olmalıdır. GitHub üzerindeki `DeepScan`, kodunuzda bulunan hataları size ve `Servis Onaylama Ekibi` üyelerine iletecektir. Yeni bir "pull request" atarken, depo kopyanızın güncel olmasını tavsiye ederiz, bu sayede daha az hatayla karşılaşacaksınız. 
> 
> {.is-warning}

- "Pull request"iniz **MUTLAKA** tamamlanmış olmalıdır, doğru dosya yolu biçimi ve gerekli kurallara uyulmuş olunmalıdır. Taslaklar **KESİNLİKLE** kabul edilmeyecektir. Servisinizin klasöründe , birer adet `presence.ts` ve `tsconfig.json` dosyası, `dist` klasörü, bunun içerisinde birer adet `presence.js` ve `metadata.json` dosyası olmalıdır. Dosya yolları gösterilen şekilde olmalıdır:
```bash
websites
└── {type}
    └── presence
        ├── dist
        │   ├── metadata.json
        │   └── presence.js
        ├── presence.ts
        └── tsconfig.json
```
veya eğer `iframe` kullanıyorsanız:
```bash
websites
└── {type}
    └── presence
        ├── dist
        │   ├── metadata.json
        │   ├── presence.js
        │   └── iframe.js
        ├── presence.ts
        ├── iframe.ts
        └── tsconfig.json
```
- {type} A'dan Z'ye, alfabetik olmayan başlangıçlar için "#" ve sayılarla başlayanlar için "0-9" dir.
<br>
Servisiniz üzerinde çalışmaya başlamadan önce aşağıdaki maddeleri inceleyin ve aklınızda bulundurun.
- Yaptığınız servis, seçtiğiniz site ile alakalı olmak **zorundadır**.
- Yaptığınız servis **KESİNLİKLE**, herhangi bir illegal siteninki olmamalıdır. Bunlara, uyuşturucular, çocuk pornografisi gibi siteler dahildir.
- Servisin "metadata" dosyası, **KESİNLİKLE** düzgün bir biçimde hazırlanmış, geçerli başlıklar ve açıklamalar içeren bir dosya olmalıdır.
- The media you include ( icon/thumbnail ) **MUST** be related to the site and should be understandable in terms of size and quality.
- Dosya sisteminiz **MUTLAKA** temiz, düzgün ve rastgele/gereksiz dosyalarla dolu olmamalıdır.
- Servis güvensiz **hiçbir** amaç barındırmamalıdır. Bunlara veri çalma/sızdırma, sitenin işleyişini değiştirme gibi şeyler dahildir.
- Eğer servisinizi yaptığınız bir internet sitesi ileride değişim gösterir ve servisinizin çalışmasını engellerse, servisinizi tekrar çalışır duruma getirecek düzenlemeleri yapmak **zorundasınız**. Eğer gerekli değişiklikleri **7 gün** içerisinde yapmazsanız, başka bir geliştirici sizin yerinize kodunuzu düzenleyebilir.
- Servis, incelemeye gönderilmeden önce **test edilmeli** ve her şeyin çalıştığına emin olunmalıdır.
- Servisiniz, ne olursa olsun yetişkin içerik **barındırmayan** resimler içermelidir. Eğer servis uygunsuz içerikler barındırıyorsa, etiketlerinize `nsfw` etiketini de eklemeniz gerekmektedir.
- Yaptığınız servis, tarayıcının yerel depolamasını (local storage) **kontrol edemez**.
- Servisiniz veri saklamak için çerezleri kullanabilir, kullanacağınız tüm çerezlerin başına `pmd_` gelmelidir.
- Servisinizin ismi, servisin klasörüyle **aynı isimde** olmalıdır. Örneğin, `Google Docs` adlı servisin klasörünün ismi de `/Google Docs/` olmalıdır ( You should include all spaces, periods, commas, and any other special characters. )

## Yapılandırma
> **presence.ts**/**presence.js**  ya da **metadata.json** dosyalarından herhangi birine değişiklik yaparken, **metadata** dosyanızda belirtilen sürüm numarasını, daha üst bir sayıya güncellemelisiniz. 
> 
> {.is-warning}

Bazı durumlarda, servisler beklenmedik şekilde tepkiler verebileceği veya yazılan kodun daha iyi bir şekilde yazılabileceği durumlar olabilir. Aşağıdan **KESİNLİKLE** dikkat edilmesi gereken servis düzenleme kurallarını görebilirsiniz.

- Bir servisi baştan aşağıya yazmak ve yapımcısının adını değiştirme yetkisine sahip **değilsiniz**. Eğer servisin yapımcısı resmi sunucumuzdan yasaklanmış veya 7 gün içerisinde herhangi bir değişiklik yapmadıysa, bir `Servis Onaylayıcısı` ile iletişime geçip servis üzerinde değişiklik yapma talebinde bulunabilirsiniz.
- Herhangi biri kodda önemli düzeltmeler yapabilir, yine de, düzeltme gerektirmeyen yerleri düzeltmek **mecburi değildir**. Geçerli düzeltmeler şunlar gibi olabilir; _eksik yollar_, _kelime hataları_, _geçersiz resimler_, vebenzeri.
- Eğer düzenleme yaptığınız servisin **ÇEYREĞİNİ** düzenlediyseniz, kendinizi o servise bir "katılımcı" olarak ekleyebilirsiniz. Bu konu hakkında daha detaylı bilgi alabilmek için bir `Servis Onaylayıcısı` ile iletişime geçebilirsiniz.
- Değişiklikler yararlı olmalıdır. These may include fixes ( code and typos ), additions ( descriptions and tags ), etc. Resimler eğer geçerliliğini yitirmemiş veya kalitesi düşük değilse, değiştirmeyin.
- Paylaşmadan önce değişikliklerinizin çalıştığından emin olmanız gerekir. Değişikliklerinizin neye sonuç açacağını bilmeden "pull request" açmayın.
- When you make changes to a presence, modify the `presence.ts` file and compile it, do not make changes to the `presence.js` file directly.

# Onaylanma

> ⚠️ **Warning**: Presence developers are now required to use `TypeScript`, the option for `JavaScript` presences has been completely removed. 
> 
> {.is-warning}

> **Confirm** that your presence's [metadata](https://docs.premid.app/en/dev/presence/metadata) is valid and has all of the necessary fields before making a pull request. If your metadata contains an optional variable that is set to the default value, remove it ( Presence Verifiers will request you to remove them ). 
> 
> {.is-warning}

> Eğer biriyle iletişime geçmek istiyorsanız, lütfen resmi Discord sunucumuzu kullanın. Tüm `Servis Onaylayıcısı` üyeleri, sunucumuzda özel bir role sahiptir.

Servisiniz, mağazada görücüye çıkabilmek için öncelikle GitHub üzerinde çalıştığına emin olmak adına yapılan işlemlerden geçmelidir. Aşağıdan bir "pull request" açarken dikkat etmeniz gereken maddeleri bulabilirsiniz.

1. Yaptığınız servisin doğruluğunu onaylamak için iki farklı inceleme ekibi üyesinin onayı gerekir. Eğer ekip üyesi sizden değişiklikler yapmanızı isterse, uğraşmalı ve yapmalısınız, yoksa mağazaya eklenmeyecek ve emekleriniz boşa gidecektir.
2. Eğer ekip üyesi sizden değişiklik talep eder ve **7 gün içerisinde** geri dönüş yapmazsanız, açtığınız "Pull Request" kapatılacaktır.
3. Başka bir kullanıcının yardımıyla aldığınız ekran görüntülerini, kolaylık açısından yazınıza iliştirebilirsiniz ( örn. erişemeyeceğiniz bir şeye erişebilen birini kullanmak ).
4. Eğer bir yenilik veya değişiklikler yaptıysanız, ekran görüntüleri bu değişiklikleri **içermelidir**, eskiden gönderilmiş ekran görüntülerini değil.
5. Belirtilen ekran görüntüleri gerçek olmalıdır, **düzenlenmiş değil**.
6. Katkıda bulunulan ve onaylanan tüm kodlar **Mozilla Public License 2.0** lisansı altında saklanacaktır.
7. Presences for free domains or hosts ( e.g., .TK, [all free Freenom domains], .RF.GD, etc ) are **NOT** allowed at all, exceptions can be made if a proof is presented showing that they paid for the domain.
8. `smallImageKey` ve `smallImageText` alanları, ek/ikincil bilgiler koyabileceğiniz ("oynatılıyor", "durduruldu" gibi) kısımlardır. Burada bir Discord hesabının reklamını yapamaz, PreMiD ile alakasız herhangi bir şey kullanamazsınız.
9. Resimlerin oranı 1:1 (kare), 512 piksel boyutunda, küçük resimler ise [geniş promosyon kartları](https://i.imgur.com/3QfIc5v.jpg) veya bu seçenek servis için mümkün değilse [servisin ekran görüntüsü](https://i.imgur.com/OAcBmwW.png) olmalıdır.
10. Servisde en az bir adet etiket bulunmalıdır. Bu etiketlerde boşluk, taksim, tırnak işaretleri, Unicode karakterleri **bulunmamalı** ve her zaman küçük harflerden oluşmalıdır.
11. The `url` field **MUST NOT** include `http://` or `https://`, neither the parameters ( e.g. a Presence for `https://www.google.com/search?gws_rd=ssl` will only have `www.google.com` in the `url` field ).
12. Açıklamalar ve etiketler, sadece bir adet olsalar bile mutlaka array içerisinde olmalıdır. Sadece `url` kısmı eğer tek bir site içinse array dışına yazılabilir.
13. Tags should be used as alternate names whenever possible, and shortened versions must be included as well ( e.g., if an Amazon Presence had included AWS support, it would have its tags like "amazon-web-services" and "aws" ).
14. Sürekli API/alan adı değişiklikleri yapan stabil olmayan, rastgele HTML elementleriyle donatılmış olan veya ağır bir geliştirilme aşamasından geçen siteler kabul edilmeyecek ve marketten silinecektir.
15. Servisinizde belirteceğiniz resimler `i.imgur.com`'a veya kendinize ait bir resim servisinden olmalıdır, başka servisler kullanıyorsanız da servisin size bu resimleri düzenleme yetkisi verdiğinden emin olmanız gerekir.
16. Verifiers will check if the Presence contains an `__awaiter` function at the beginning of the code ( which comes from an earlier version of ECMAScript ), and in addition to that, make sure the `UpdateData` event used is similar to this:

```ts
presence.on("UpdateData", async () => {
  /*...*/
  // Eventlerde async'ı sadece await kullanacağınız zaman bulundurun
  data.smallImageText = (await strings).playing;
  /*...*/
});
```

Altta gördüğünüz ise **yanlış** kullanımıdır:

```ts
presence.on("UpdateData", () => __awaiter(this, void 0, void 0, function* () {
  /*...*/
  // Hiçbir zaman yield kullanmayın
  data.smallImageText = (yield strings).playing;
  /*...*/
});
```

17. When **Deepscan** throws a lot of errors ( and it will ), it is mostly an issue with your branch being outdated, always update your GitHub fork when making pull requests.
18. The version in your metadata **MUST** start with `1.0.0` unless specified, any other version will **NOT** be permitted.
19. Low-quality Presences ( or ones with one context ) are **NOT** allowed ( e.g., only showing the logo and some text but never changing again ).
20. **ASLA** [PreMiD'in içinde barındırdığı](https://docs.premid.app/dev/presence#files-explained) fonksiyonlarla yapılabilecek bir işlemi özel fonksiyonlar yazarak yaptırmaya çalışmayın. Belirtilen doküman sayfasında bulamadığınız herhangi bir fonksiyonu yazmakta özgürsünüz, ancak belirtilenlere ihtiyaç duyduğunuzda kendiniz yazamazsınız.
21. Servisinizin değişkenini her şeyden **ÖNCE** belirleyin. Bu sayede çok nadir oluşabilecek hatalardan kurtulabilirsiniz; bu madde tasarımsal bir gereklilik olmadığı için ileride kaldırılabilir.
22. Presences that target internal browser pages ( like Chrome Web Store, `chrome://`, `about:` pages, etc ) are **NOT** allowed as they require an _experimental flag_ to be enabled on the user's end and could potentially cause damage to their browsers.
23. Servislere, yapıldığı internet sitesinin ana dilinin eklenmemesi **yasaktır**, mesela YouTube'un Türkçe ve İspanyolca kodlanması ancak İngilizce'yi desteklememesi gibi.
24. You **MUST** compile all `TypeScript` files in your presence before making a pull request.
25. Declare the presence variable before anything, ( can cause some users issues that can be prevented ).
26. Do **NOT** edit the `tsconfig.json` file, use exactly what is specified on the [documentation](https://docs.premid.app/en/dev/presence/tsconfig#presence-configuration).
27. Presences with support only for a single subdomain will **NOT** be permitted, as they may seem broken for other pages ( like the homepage ), exceptions can be made for policy and contact pages ( content that isn't used much ) or sites where the other content is unrelated ( e.g wikia pages ).
28. All presences **MUST**  include an English description, including websites that aren't natively English.


Belirtilen tüm gereksinimleri karşıladığınızda ve servisiniz 2 ony aldığında, servisiniz mağazaya eklenecektir.

# Yapı
Tüm serivlser [TypeScript](https://www.typescriptlang.org/) ile kodlanır. [TypeScript](https://www.typescriptlang.org/)'in içerisinde bulundurduğu bir çok tanımlamalar ile kodunuzdaki hataları bulmak çok daha kolay olacaktır.

## Yükleme
1. [Git](https://git-scm.com/)'i yükleyin.
2. [Node](https://nodejs.org/en/)'u yükleyin.
3. Konsolunuzu açın ve [TypeScript](https://www.typescriptlang.org/index.html#download-links)'i yüklemek için `npm install -g typescript` yazın.

## Projeyi klonlama
1. Bir konsol açın ve `git clone https://github.com/PreMiD/Presences` yazın.
2. Bir klasör seçin.
3. Editörünüz ile bu klasörü açın.

## Klasörleri ve dosyaları oluşturma

1. Servisin **adı** (URL'si değil) ile bir klasör oluşturun.
2. Bir `presence.ts` ve bir `tsconfig.json` dosyası oluşturun.
3. Ana klasörün içine `dist` adında bir klasör oluşturun.
4. `dist` klasörünün içine de bir `metadata.json` dosyası oluşturun.

## tsconfig.json dosyasını doldurma
Aşağıda gördüğünüz kodu `tsconfig.json` dosyasının içine yapıştırın.
```javascript
{
  "extends": "../../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
}
```
TypeScript konfigürasyonu hakkında daha fazla bilgi almak için [buraya](/dev/presence/tsconfig) tıklayın.

## metadata.json dosyasını doldurma
Bu dosyayla fazla uğraşmak istemeyenler için bir `metadata.json` dosyası oluşturucu formu yaptık, görmek için [buraya](https://eggsy.codes/projects/premid/mdcreator) tıklayabilirsiniz. Eğer isterseniz bu kısmı okuyarak bu dosyanın nasıl çalıştığını anlayabilirsiniz.

```javascript
{
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
```

Yukarıdaki kodu kopyalayın ve `metadata.json` dosyanıza yapıştırın. Bundan sonra belirtilen verileri düzenlemeniz gerekecektir. Eğer aşağıda "opsiyonel" olarak belirtilen kısımları kullanmayacaksanız lütfen bu alanları `metadata.json` dosyanızdan kaldırın.
- `contributors`
- `regExp`
- `iframe`
- `iFrameRegExp`
- `ayarlar`

**Bu veriler hakkında daha fazla bilgi istiyorsanız:**
<table>
  <thead>
    <tr>
      <th style="text-align:left">Anahtar</th>
      <th style="text-align:left">Açıklama</th>
      <th style="text-align:left">Tür</th>
      <th style="text-align:left">Opsiyonel</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>author</b>
      </td>
      <td style="text-align:left">Servisi oluşturan kişinin bilgilerinin olduğu, <code>name</code> ve <code>id</code> anahtarlarını içeren bir Object verisi biçiminde olmalıdır. İsim Discord etiketiniz (#0000) olmadan yazılmalıdır. Kullanıcı <code>id</code>'leri Discord'da geliştirici modunu aktifleştirerek alınabilir.</td>
      <td style="text-align:left"><code>Object</code>
      </td>
      <td style="text-align:left"><code>Hayır</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>contributors</b>
      </td>
      <td style="text-align:left">Servisi oluşturan kişinin bilgilerinin olduğu, <code>name</code> ve <code>id</code> anahtarlarını içeren bir Object verisi biçiminde olmalıdır. İsim Discord etiketiniz (#0000) olmadan yazılmalıdır. Kullanıcı <code>id</code>'leri Discord'da geliştirici modunu aktifleştirerek alınabilir.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>Evet</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>service</b>
      </td>
      <td style="text-align:left">Yaptığınız servisin ismi. <br>(Oluşturduğunuz klasör ile aynı isimde olmalıdır)</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Hayır</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>description</b>
      </td>
      <td style="text-align:left">Servisin kısa açıklamaları, eğer yazacak bir şey bulamıyorsanız servisin resmi açıklamalarını kullanabilirsiniz. Açıklamalarınız dilin kodu ve bu dille yazılmış açıklamanın kendisini içermelidir. Sadece <i>bildiğiniz</i> dillerin çevirisini yapın, geri kalanları ilerleyen zamanlarda çevirmen ekibimiz halledecektir.</td>
      <td style="text-align:left"><code>Object</code>
      </td>
      <td style="text-align:left"><code>Hayır</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b>
      </td>
      <td style="text-align:left">Servisin URL'si.<br><b>Örneğin:</b><code>vk.com</code><br>        <b>Gireceğiniz URL servisin URL'si olmalıdır, kullanıcının sitede olup olmadığı böyle kontrol edilecektir.</b><br>URL'nin başına <b>SAKIN</b> <code>https://</code> veya <code>http://</code> eklemeyin:
<code>https://premid.app/</code> -> <code>premid.app</code><br><b>Not</b>: Bazı URL'ler başlarında <code>www.</code> veya belli şeylerle başlar, bunları da yazmalısınız. Eklemeyi unutmazsınız herhalde.
Aşağıdaki biçimi kullanarak birden fazla URL ekleyebilirsiniz:<br>
<code>["URL1", "URL2", "GİBİ."]</code><br>
Ayrıca isterseniz regExp kısmını da kullanabilirsiniz, ileride açıklaması yapılacaktır.
      </td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code>
      </td>
      <td style="text-align:left"><code>Hayır</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b>
      </td>
      <td style="text-align:left">Bir regex, URL'leri daha kolay yakalamakta kullanılır.<br>
      regExp seçeneği eğer sitenin çok fazla alt domaini varsa çok kullanışlıdır.<br>
Böyle durumlarda regExp olarak bunu kullanabilirsiniz:<br>
<code>([a-z0-9]+)[.]domain[.]TLD"</code><br> 
TLD (Top Level Domain) yani .com, .net gibi popüler alan adları demektir.<br> 
<code>([a-z0-9]+)</code> a'dan z'ye, 0'dan 9'a anlamına gelir.<br>
        regExp'inizi <a href="https://regex101.com/">Regex101</a> sitesinde test edebilirsiniz.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Evet</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>version</b>
      </td>
      <td style="text-align:left">Servis sürümü.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Hayır</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>logo</b>
      </td>
      <td style="text-align:left">Servisin logosunu içeren resim bağlantısı.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Hayır</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b>
      </td>
      <td style="text-align:left">Mağazada gözükecek arka plan resminin bağlantısı.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Hayır</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>color</b>
      </td>
      <td style="text-align:left"><code>#HEX</code> biçimindeki renk. Servisin kullandığı renkleri kullanmanızı tavsiye ediyoruz.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Hayır</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>tags</b>
      </td>
      <td style="text-align:left">Servisinize ait etiketleri içeren bir Array.</td>
      <td
      style="text-align:left"><code>String, Array&lt;String&gt;</code>
        </td>
      <td style="text-align:left"><code>Hayır</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>category</b>
      </td>
      <td style="text-align:left">Servisinizin ait olduğu kategori. Geçerli kategorileri görmek için <a href="https://docs.premid.app/dev/presence/metadata#presence-categories">buraya</a> tıklayabilirsiniz.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Hayır</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b>
      </td>
      <td style="text-align:left"><code>iFrame</code> ayarının kullanıp kullanılmadığını belirler.</td>
      <td style="text-align:left"><code>Boolean</code>
      </td>
      <td style="text-align:left"><code>Evet</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b>
      </td>
      <td style="text-align:left">Iframe verisinin alınacağı kaynakları yakalayacak regex verisi. Daha fazla bilgi için regExp kısmına bakın.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Evet</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>ayarlar</b>
      </td>
      <td style="text-align:left">Kullanıcıların değiştirebileceği ayarlar array'ı. Daha fazla bilgi için <a href="https://docs.premid.app/dev/presence/metadata#presence-settings">buraya</a> gözatın.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>Evet</code>
      </td>
    </tr>
  </tbody>
</table>

Bu dosyayla fazla uğraşmak istemeyenler için bir `metadata.json` dosyası oluşturucu formu yaptık, görmek için [buraya](https://eggsy.codes/projects/premid/mdcreator) tıklayabilirsiniz.

## Başlarken

```javascript
let presence = new Presence({
    clientId: "000000000000000000" // Discord'dan (https://discordapp.com/developers/applications) aldığınız uygulama ID'si
}),

strings = presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
    // Çevirileri almak için bu fonksiyonu kullanabilirsiniz
});

/*

function disaridaOlmasiDahaIyiOlacakFonksiyonum(){
    // Tüm verilerinizi toplayıp bu gibi fonksiyonlarda işleyebilirsiniz

    // ekstra işlemler //
    // API işlemleri //
    // değişken ayarlamaları //
}

setInterval(10000, disaridaOlmasiDahaIyiOlacakFonksiyonum); 
// Oluşturduğunuz fonksiyonu UpdateData eventinden ayrıyeten her 10 saniyede bir çalıştırarak içindeki işlemleri tekrar ettirin.

*/

presence.on("UpdateData", async () => {
    /* UpdateData kullanıcı serviste gezdiği süre boyunca sürekli gönderilecektir, bu yüzden büyük işlemler kullanıcıları etkilememesi için buranın dışında tutulmalıdır. Burayı dikkatli kullanın.

    Daha ağır ve sürekli tekrarlanmaması gereken işlemleri bu alanın dışında yukarıdaki gibi başka fonksiyon kullanarak yaptırmak önerilir. */

    var presenceData = {
        largeImageKey: "anahtar", /* Servisin kullanıcının profilinde gözükeceği büyük resmin adı. Buraya yazacağınız resimler, oluşturduğunuz uygulamanın "Rich Presence > Art Assets" kısmına yüklenmeli ve yüklendiği ismiyle girilmiş olmalıdır.
        smallImageKey: "anahtar", /* Servisin kullanıcının profilinde gözükeceği küçük resminin adı. Buraya yazacağınız resimler, oluşturduğunuz uygulamanın "Rich Presence > Art Assets" kısmına yüklenmeli ve yüklendiği ismiyle girilmiş olmalıdır. */
        smallImageText: "Falan da filan", // Küçük resmin üzerine gelindiğinde gözükecek yazı.
        details: "Bir sayfaya göz atıyor", // Üst kısımda gözükecek yazı.
        state: "Ana Sayfa",  // Alt kısımda gözükecek yazı.
        startTimestamp: 1577232000, // Unix Epoch biçiminde yazılmış zaman verisi
        endTimestamp: 1577151472000 // Eğer "kaldı" biçiminde bir veri göstermek istiyorsanız, bitiş zamanını da aynı biçimde burada belirtmelisiniz.
    }; /* Eğer isterseniz burada sadece belli bir şey belirtebilir veya hiç belirtmeden daha sonra bunları belirtebilirsiniz. Bunun için de presenceData.state = "Ana Sayfa"; yapabilirsiniz. */

    if (presenceData.details == null) {
        // Bu kısım presenceData objesinde "details" anahtarı bulunmadığı zaman devreye girecektir.
        presence.setTrayTitle(); // Mac kullanıcıları için menü yazısını temizler.
        presence.setActivity(); // Bu şekilde fonksiyona bir veri girmeden girerseniz, büyük resim Discord uygulamasının simgesine dönüşecek ve başka bir bilgi gösterilmeyecektir.
    } else {
        // Yukarıdaki durumun dışında herhangi bir şey gerçekleşirse burası devreye girecektir.
        presence.setActivity(presenceData); // Aktiviteyi belirtilen verilerle ayarlar.
    }
});
```
Bunu `presence.ts` dosyanıza kopyalayıp değerleri düzenleyebilirsiniz. Değerleri ayarlama işlemi updateData eventi içinde gerçekleşir.

Örnekler için 1337x veya 9GAG gibi servislerin kodlarını incelemenizi öneririz.

Daha fazla bilgi için lütfen Presence sınıfının tanımını [buraya](/dev/presence/class) tıklayarak okuyun.

## İstediğiniz veriyi alamıyor musunuz?!

Bir çok site [iframe](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([inlineframes](https://en.wikipedia.org/wiki/HTML_element#Frames)) kullanır. Bu HTML etiketleri videolar gibi bir çok kaynak bulundurabilir. Ancak  her zaman aynı sonucu vermez. Bunların bazıları gizli veya hiç kullanılmıyor bile olabilir. İşlemlerinizi yapmadan önce istediğiniz veriyi alıp alamadığınızı kontrol edin, her şey bittikten sonra elinizde bir şey olmazsa boşuna uğraşmış olursunuz.

1. Tarayıcınızın konsolundan kontrol edin (**Elements** sekmesinde olduğunuza emin olun).
2. Search (<kbd>CTRL</kbd>+<kbd>F</kbd> (Windows) or <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
3. Konsoldan devam etmek için konsola `document.querySelectorAll("iframe")` yazabilir ve sayfadaki iframe kaynaklarını görebilirsiniz.

Eğer aradığınız veriyi bu yöntemlerle bulamıyorsanız, aşağıdaki adımları takip edebilirsiniz:
1. Bir `iframe.ts` dosyası oluşturun.
2. "metadata" dosyasında `iFrame` kısmını `true` olarak ayarlayın.
3. iFrame dosyanızı şu şekilde dolurun:
```javascript
let iframe = new iFrame();
iframe.on("UpdateData", async () => {
  /*
  Gereken tüm veriyi aldırın ve aşağıdaki yöntemle
  ana koda gönderin.
  */
  iframe.send({ // veriyi gönderme
    video: video,
    time: video.duration
  }); 
});
```
4. Yukarıdaki gibi gönderilen bir veriyi servis kodunun içinde alabilmek için aşağıdaki yöntemi kullanın.
```javascript
presence.on("iFrameData", data => {
  iFrameVideo = data.video;
  currentTime = data.time;
});
```
**Not:** Bu kısım, kendi başına bir event olduğu için `updateData` eventinin dışında yapılmalıdır.
## Derleme
Klasörünüzün içindeyken bir terminal açın ve kodunuzu `dist` klasörüne derlemek için `tsc -w` komutunu kullanın.

# Servisi test etme
1. Eklenti penceresini açın ve <kbd>Shift</kbd>'e basılı tutun.
2. Servisler kısmının hemen sağında **Servis Yükle** yazısı çıkacaktır.
3. <kbd>Shift</kbd>'e basılı tutarken bu yazıya tıklayın.
4. Servisinizin dist klasörünü bulun ve seçin.

# Bazı yararlı şeyler
## Anında yenileme
Servisinizin çalıştığı sayfalar, yerel dosyalarınızda yaptığınız herhangi bir değişiklikte otomatik olarak yenilenecektir.

## Hata ayıklama
- Kodunuzun çalışıp çalışmadığınızı test edebilmek için kodunuzun bir yerine basitçe `console.log("Test");` koyabilir ve konsola çıktı verip vermediğini kontrol edebilirsiniz. Eğer çıktı veriyorsa, devam edin. Eğer vermiyorsa, kod bu satırdan önce hataya geçmiş veya hiç bu satıra ulaşamamış demektir.
- Eğer bunların hiçbiri işinize yaramazsa [Discord sunucumuza](https://discord.gg/WvfVZ8T) katılıp diğer geliştiricilerden yardım talep edebilirsiniz.

# Dosyaların açıklamaları
- [Presence Sınıfı](/dev/presence/class)
- [iFrame Sınıfı](/dev/presence/iframe)
- [Metadata Dosyası](/dev/presence/iframe)
- [TypeScript Konfigürasyonu](/dev/presence/tsconfig)
{.links-list}
