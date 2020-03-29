---
title: Servis Geliştirme
description:
published: true
date: 2020-03-05T03:52:35.531Z
tags:
---

> Tüm servisler artık [https://github.com/PreMiD/Presences](https://github.com/PreMiD/Presences) adresinde saklanmaktadır. 
> 
> {.is-info}

`2.x` sürümleri, [servis mağazası](https://premid.app/store) özelliği ile birlikte gelir. Kullanıcılar bundan sonra kendi oluşturdukları servisleri [mağazaya](https://premid.app/store) ekletebilecek ve diğer kullanıcıların kullanımına sunabilecek.

# Kurallar
> If you do not follow all of the guidelines, a `Presence Verifier` will request the proper changes or your pull request may even be closed under certain circumstances. 
> 
> {.is-warning}

> When you make pull requests about adding or modifying existing presences, you **MUST** include a screenshot. However, modifications to a presence's `metadata.json` or `tsconfig.json` files do not require a screenshot. *Your screenshot MUST be uploaded directly to GitHub with the pull request, do not use third-party image sharing websites.* 
> 
> {.is-warning}

When publishing presences to this GitHub, we require you to follow a set of guidelines. To some, these strict rules may seem harsh. However, the implementation of these rulesets will keep our servers from running into any issues.

## Oluşturma
> The code you write MUST be *well-written* and MUST be *readable*. `DeepScan` on GitHub will report code quality issues to the `Presence Verification Team`. We recommend that your fork is up to date when you make pull requests, it will help limit false positives. 
> 
> {.is-warning}

- The pull request **MUST** be complete, you need to have a proper file structure, drafts are **NOT** allowed. Including the `dist` folder, `presence.js` file, and `metadata.json` file, which is represented in the following example schema:
```bash
presence
└── dist
    ├── metadata.json
    └── presence.js
```
or if you're using TypeScript and `iframe` (the max you could reach) :
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

Servisiniz üzerinde çalışmaya başlamadan önce aşağıdaki maddeleri inceleyin ve aklınızda bulundurun.
- The presence **MUST** be related to the website you have chosen.
- The presence **MUST NOT** be of any illegal websites. Bunlara, uyuşturucular, çocuk pornografisi gibi siteler dahildir.
- The presence metadata **MUST** have well-written content, including valid titles, and descriptions.
- The media you include (icon/thumbnail) **MUST** be related to the website and should be understandable in terms of size and quality.
- The file structure **MUST** be clean and managed, do not have random files that provide nothing to the presence's function.
- The presence **MUST NOT** have any malicious intentions. Bunlara veri çalma/sızdırma, sitenin işleyişini değiştirme gibi şeyler dahildir.
- Eğer servisini yaptığınız bir site ileride güncellenirse, servisi güncelleyip tekrar çalışır hale getirmek **SİZİN** sorumluluğunuzdur. If you do not fix it within 7 days, other presence developers are allowed to **OVERWRITE** your presence to comply with the changes.
- The presence **MUST** be tested before publishing to confirm that everything works as expected.
- Your presence **MUST** have SFW images and descriptions regardless if it is NSFW or not. If your presence is about an NSFW website, please add the `nsfw` tag to your metadata.
- Your presence **CANNOT** manipulate local storage on the browser.
- Your presence may use cookies to store data. All data stored by the presence should be prefixed with `pmd_`.

## Yapılandırma
> You MUST change the version in the **metadata** to be a higher value from previous version when making changes to either the **presence.js** or **metadata.json**. 
> 
> {.is-warning}

Bazı durumlarda, servisler beklenmedik şekilde tepkiler verebileceği veya yazılan kodun daha iyi bir şekilde yazılabileceği durumlar olabilir. Here is a compiled list that you **MUST** follow to modify presences.
- You are not allowed rewrite a presence or change it's author. If the presence author was banned from the official server or hasn't made required changes in a 7 day period, you may contact a PreMiD `Presence Verifier` to see if you are applicable to rewrite the presence of choice.
- If you make modifications to a presence and change at least a **QUARTER** of the presence's codebase, you are allowed to add yourself as a contributor. Contact a `Presence Verifier` for more information about this subject.
- Değişiklikler yararlı olmalıdır. Bunlara düzeltme (kod ve yazım hataları), eklemeler (farklı dillerdeki açıklamalar) gibi şeyler girebilir. Do not change images if they are not outdated and have a decent resolution.
- Paylaşmadan önce değişikliklerinizin çalıştığından emin olmanız gerekir. Değişikliklerinizin neye sonuç açacağını bilmeden "pull request" açmayın.

# Onaylanma

> If you need to contact someone, please use our official Discord server. All `Presence Verifiers` will have a unique role on their profile.

For your presence to reach the stores, it MUST go through a process on GitHub to confirm that it works as expected. These are a few things to look out for when making your pull request.

1. Yaptığınız servisin doğruluğunu onaylamak için iki farklı inceleme ekibi üyesinin onayı gerekir. Eğer ekip üyesi sizden değişiklikler yapmanızı isterse, uğraşmalı ve yapmalısınız, yoksa mağazaya eklenmeyecek ve emekleriniz boşa gidecektir.
2. If we request changes and your pull request exceeds **7 days of inactivity** without making the necessary ones, we'll be forced to close it.
3. You are allowed to take screenshots of changes made with the help of another user, and you are allowed to stitch screenshots for viewing pleasure. (örn. erişemeyeceğiniz bir şeye erişebilen birini kullanmak).
4. If it is an update or patch, the screenshot **MUST** show the new additions working, not any old features from previous pull requests.
5. Sağlanan ekran görüntüleri gerçek olmalıdır, montajlanmış değil.
6. Katkıda bulunulan ve onaylanan tüm kodlar **Mozilla Public License 2.0** lisansı altında saklanacaktır.
7. Presences for free domains or hosts (e.g. .TK, [all free Freenom domains], .RF.GD, etc...) are **NOT** allowed at all, exceptions can be made if a proof is presented showing that they paid for the domain.
8. The `smallImageKey` and `smallImageText` fields are intended to provide additional/secondary context (such as "playing"/"paused" for video sites, "browsing" for regular sites and other cases) not to promote Discord profiles or anything unrelated to PreMiD.
9. Resimlerin oranı 1:1 (kare), 512 piksel boyutunda, küçük resimler ise [geniş promosyon kartları](https://i.imgur.com/3QfIc5v.jpg) veya bu seçenek servis için mümkün değilse [servisin ekran görüntüsü](https://i.imgur.com/OAcBmwW.png) olmalıdır.
10. Presences should at least have 1 tag, this is a requirement by design and may be optional in the future.
11. The `url` field **MUST NOT** include `http://` or `https://`, neither the parameters (e.g. a presence for `https://www.google.com/search?gws_rd=ssl` will only have `www.google.com` in the `url` field).
12. Açıklamalar ve etiketler, sadece bir adet olsalar bile mutlaka array içerisinde olmalıdır. Sadece `url` kısmı eğer tek bir site içinse array dışına yazılabilir.
13. Sürekli API/alan adı değişiklikleri yapan stabil olmayan, rastgele HTML elementleriyle donatılmış olan veya ağır bir geliştirilme aşamasından geçen siteler kabul edilmeyecek ve marketten silinecektir.

Gereken tüm kontroller tamamlandıktan sonra servisiniz mağazaya eklenecektir.

# Temel (TypeScript)
Servisinizi ister [JavaScript](https://www.javascript.com/), isterseniz de [TypeScript](https://www.typescriptlang.org/) kullanarak yapabilirsiniz. Ancak [TypeScript](https://www.typescriptlang.org/)'in kendi içerisinde birçok kullanışlı araçları ve yararlı eklentileri olduğu için hataları bulmak bununla çok daha kolay olacaktır. Eğer sadece [JavaScript](https://www.javascript.com/) kullanmak istiyorsanız direkt olarak [Temel (JavaScript)](/dev/presence#structure-javascript) kısmına atlayabilirsiniz.

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
2. Create a `presence.ts` and a `tsconfig.json` file inside.
3. Ana klasörün içine `dist` adında bir klasör oluşturun.
4. `dist` klasörünün içine de bir `metadata.json` dosyası oluşturun.

## tsconfig.json dosyasını doldurma
Please put the following code inside of the `tsconfig.json` file.
```javascript
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
}
```
TypeScript konfigürasyonu hakkında daha fazla bilgi almak için [buraya](/dev/presence/tsconfig) tıklayın.

## metadata.json dosyasını doldurma

Nasıl dolduracağınızı öğrenmek için [buraya](/dev/presence#filling-in-the-metadatajson-file-2) tıklayın. Merak etmeyin, açıklamanın sonundaki bağlantıyı kullanarak kolayca buraya geri dönebileceksiniz.

Bu dosyayla fazla uğraşmak istemeyenler için bir `metadata.json` dosyası oluşturucu formu yaptık, görmek için [buraya](https://eggsy.codes/projects/premid/mdcreator) tıklayabilirsiniz.

## Başlarken

```javascript
var presence = new Presence({
    clientId: "000000000000000000" //The client ID of the Application created at https://discordapp.com/developers/applications
}),

strings = presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
    //You can use this to get translated strings
});

/*

function myOutsideHeavyLiftingFunction(){
    //Grab and process all your data here

    // element grabs //
    // api calls //
    // variable sets //
}

setInterval(10000, myOutsideHeavyLiftingFunction); 
//Run the function seperate from the UpdateData event every 10 seconds to get and set the variables which UpdateData picks up

*/


presence.on("UpdateData", async () => {
    /*UpdateData is always firing, and therefore should be used as your refresh cycle, or `tick`. Burayı dikkatli kullanın.

    Daha ağır ve sürekli tekrarlanmaması gereken işlemleri bu alanın dışında yukarıdaki gibi başka fonksiyon kullanarak yaptırmak çok daha iyi olacaktır. */

    let presenceData = {
        largeImageKey: "anahtar", /* Servisin kullanıcının profilinde gözükeceği büyük resminin adı. Buraya yazacağınız resimler, oluşturduğunuz uygulamanın "Rich Presence > Art Assets" kısmına yüklenmeli ve yüklendiği ismiyle girilmiş olmalıdır.
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

1. Tarayıcınızın konsolundan kontrol edin.
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

# Temel (JavaScript)
## Projeyi klonlama
1. [Git](https://git-scm.com/)'i yükleyin.
2. Bir konsol açın ve `git clone https://github.com/PreMiD/Presences` yazın.
3. Bir klasör seçin.
4. Editörünüz ile bu klasörü açın.

## Klasörleri ve dosyaları oluşturma

1. Servisin **adı** (URL'si değil) ile bir klasör oluşturun.
3. Ana klasörün içine `dist` adında bir klasör oluşturun.
4. `dist` klasörünün içine bir `metadata.json` ve `presence.js` dosyası oluşturun.

## metadata.json dosyasını doldurma

Nasıl dolduracağınızı öğrenmek için [buraya](/dev/presence#filling-in-the-metadatajson-file-2) tıklayın. Merak etmeyin, açıklamanın sonundaki bağlantıyı kullanarak kolayca buraya geri dönebileceksiniz.

Bu dosyayla fazla uğraşmak istemeyenler için bir `metadata.json` dosyası oluşturucu formu yaptık, görmek için [buraya](https://eggsy.codes/projects/premid/mdcreator) tıklayabilirsiniz.

## Başlarken

```javascript
var presence = new Presence({
    clientId: "000000000000000000" //The client ID of the Application created at https://discordapp.com/developers/applications
}),

strings = presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
    //You can use this to get translated strings
});

/*

function myOutsideHeavyLiftingFunction(){
    //Grab and process all your data here

    // element grabs //
    // api calls //
    // variable sets //
}

setInterval(10000, myOutsideHeavyLiftingFunction); 
//Run the function seperate from the UpdateData event every 10 seconds to get and set the variables which UpdateData picks up

*/


presence.on("UpdateData", () => {
    //UpdateData is always firing, and therefore should be used as your refresh cycle, or `tick`. Burayı dikkatli kullanın.

    // Daha ağır ve sürekli tekrarlanmaması gereken işlemleri bu alanın dışında yukarıdaki gibi başka fonksiyon kullanarak yaptırmak çok daha iyi olacaktır.

    let presenceData = {
        largeImageKey: "anahtar", /* Servisin kullanıcının profilinde gözükeceği büyük resminin adı. Buraya yazacağınız resimler, oluşturduğunuz uygulamanın "Rich Presence > Art Assets" kısmına yüklenmeli ve yüklendiği ismiyle girilmiş olmalıdır.
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
Bunu `presence.js` dosyanıza kopyalayıp değerleri düzenleyebilirsiniz. Değerleri ayarlama işlemi updateData eventi içinde gerçekleşir.

Örnekler için 1337x veya 9GAG gibi servislerin kodlarını incelemenizi öneririz.

Daha fazla bilgi için lütfen Presence sınıfının tanımını [buraya](/dev/presence/class) tıklayarak okuyun.

## İstediğiniz veriyi alamıyor musunuz?!

Bir çok site [iframe](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([inlineframes](https://en.wikipedia.org/wiki/HTML_element#Frames)) kullanır. Bu HTML etiketleri videolar gibi bir çok kaynak bulundurabilir. Ancak  her zaman aynı sonucu vermez. Bunların bazıları gizli veya hiç kullanılmıyor bile olabilir. İşlemlerinizi yapmadan önce istediğiniz veriyi alıp alamadığınızı kontrol edin, her şey bittikten sonra elinizde bir şey olmazsa boşuna uğraşmış olursunuz.

1. Tarayıcınızın konsolundan kontrol edin.
2. İstediğiniz veriyi bulabilmek için arayın (<kbd>CTRL</kbd>+<kbd>F</kbd> (Windows), <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
3. Konsoldan devam etmek için konsola `document.querySelectorAll("iframe")` yazabilir ve sayfadaki iframe kaynaklarını görebilirsiniz.

Eğer aradığınız veriyi bu yöntemlerle bulamıyorsanız, aşağıdaki adımları takip edebilirsiniz:
1. Bir `iframe.js` dosyası oluşturun.
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
# metadata.json dosyasını doldurma
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
  "service": "SERVİS ADI",
  "description": {
    "en": "AÇIKLAMA",
    "tr": "TÜRKÇE AÇIKLAMA"
  },
  "url": "SİTE LİNKİ",
  "version": "SÜRÜM",
  "logo": "LOGO BAĞLANTISI",
  "thumbnail": "KÜÇÜK RESİM BAĞLANTISI",
  "color": "#HEX000",
  "tags": ["KATEGORİ", "ETİKET"],
  "category": "KATEGORİ",
  "regExp": "REGEXP",
  "iFrameRegExp": "REGEXP",
  "iframe": false
}
```

Yukarıdaki kodu kopyalayın ve `metadata.json` dosyanıza yapıştırın. Bundan sonra belirtilen verileri düzenlemeniz gerekecektir. Eğer aşağıda "opsiyonel" olarak belirtilen kısımları kullanmayacaksanız lütfen bu alanları `metadata.json` dosyanızdan kaldırın.
- `contributors`
- `regExp`
- `iframe`
- `iFrameRegExp`

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
  </tbody>
</table>

TypeScript açıklamasına dönmek için [buraya](/dev/presence#filling-in-the-metadatajson-file) tıklayın. JavaScript açıklamasına dönmek için [buraya](/dev/presence#filling-in-the-metadatajson-file-1) tıklayın.

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
- [Metadata Dosyası](/dev/presence/metadata)
- [TypeScript Konfigürasyonu](/dev/presence/tsconfig)
{.links-list}
