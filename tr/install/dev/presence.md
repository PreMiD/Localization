---
title: Servis Geliştirme
description:
published: true
date: 2020-01-18T20:32:30.306Z
tags:
---

> Tüm servisler artık burada: https://github.com/PreMiD/Presences 
> 
> {.is-info}

Versiyon `2.x` [görünüm mağazasını](https://premid.app/store) tanıtır. Users now have the ability to manually add and remove their favourite presences through the user interface of the [website](https://premid.app/).

# Kuralları
> Tüm yönergelere uymazsanız, servisiniz veya pull request'iniz githubdan silinir. 
> 
> {.is-danger}

## Oluşturma

Servisiniz üzerinde çalışmaya başlamadan önce aşağıdaki listeyi aklınızda bulundurun.
- Pull request tamamen tamamlanmış olmalı ve uygun bir dosya yapısına sahip olmalısınız. Including the `dist` folder, `presence.js` file, and `metadata.json` file.
- Görünüm, seçtiğiniz site ile ilgili **olmak zorunda**.
- Servisin illeagal web sitelerinde olmaması gerekir. Bunlar arasında stres faktörleri, ilaçlar, çocuk pornosu vb...
- Görünüm metadata'sı mutlaka güzelce yazılmalı. Uygun başlıklar ve açıklamalar ile birlikte.
- Koyduğunuz medya (ikon/thumbnail) siteyle ilgili olmalı. Ayrıca boyut ve kalite kurallarına uygun olmalı.
- The file structure must be clean and managed, do not have random files which provide nothing to the presence's function.
- The presence **must not** have any malicious intentions. These include stealing/leaking private information, negatively affecting the behavior of the website, etc...
- If you design a presence for a website and the website happens to change in the future, you **ARE** responsible for updating the presence again to work as expected. If you do not fix it within an acceptable time frame, other presence developers are allowed to **overwrite** your presence to comply with the changes.
- Görünüm paylaşılmadan önce test edilmeli ki hiçbir sorun olmadığına emin olalım.
- Görünümünüz +18 bir siteye ait olsa bile fotoğraflar ve açıklamalar aile dostu olmalı. Eğer siteniz `nsfw` sitesiyse (+18 içerikler, pornografi vs.), lütfen metadata'nıza `nsfw` tagını ekleyin.

## Modifikasyon

Bazı durumlarda, servisler beklenmedik şekilde tepkiler verebileceği veya yazılan kodun daha iyi bir şekilde yazılabileceği durumlar olabilir. Böyle durumlarda aşağıdaki maddeleri bozmadan kendinize ait olmasalar bile hatalı servisleri kendiniz düzenleyebilirsiniz.
- Servisin yapımcısının adını değiştiremezsiniz. Bu sadece servisi baştan aşağı yeniden yapma iznine sahipseniz ve yaptıysanız geçerli olabilir. Bunun yerine kendinizi bir [yardımcı](/dev/presence/metadata) olarak ekleyebilirsiniz.
- Değişiklikler yararlı olmalıdır. Bunlara düzeltme (kod ve yazım hataları), eklemeler (farklı dillerdeki açıklamalar) gibi şeyler girebilir.
- Paylaşmadan önce değişikliklerinizin çalıştığından emin olmanız gerekir. Değişikliklerinizin neye sonuç açacağını bilmeden "pull request" açmayın.
- Servisi bir `Servis İnceleyicisi` veya ekip üyelerinin birinden izin almadıkça değiştirmeyin, yenilemeyin.

# Onaylanma
> Yeni bir servis eklerken veya var olan bir tanesinde değişiklikler yaparken "pull request"inizin içinde ekran görüntüleri bulunmalıdır. Ancak eğer değişiklikler metadata veya tsconfig dosyalarındaysa herhangi bir ekran görüntüsüne gerek yoktur. *Ekran görüntüleriniz GitHub'ın kendisine yüklenmelidir, bunun dışında herhangi bir üçüncü parti servisleri kullanmamalısınız.* 
> 
> {.is-danger}

Servisiniz, mağazada görücüye çıkabilmek için öncelikle GitHub üzerinde çalıştığına emin olmak adına yapılan işlemlerden geçmelidir. Bir Pull Request açarken dikkat edilmesi gerekilenler.

Servis inceleme ekibimiz, Discord sunucumuzda özel bir role sahiptir, `Presence Verifier` rolüne sahip kullanıcılara bakarak ekip üyelerini bulabilirsiniz.

1. Yaptığınız servisin doğruluğunu onaylamak için iki farklı inceleme ekibi üyesinin onayı gerekir. Eğer ekip üyesi sizden değişiklikler yapmanızı isterse, uğraşmalı ve yapmalısınız, yoksa mağazaya eklenmeyecek ve emekleriniz boşa gidecektir.
2. Eğer ekip üyesi sizden değişiklik talep eder ve **7 gün içerisinde** geri dönüş yapmazsanız, açtığınız "Pull Request" kapatılacaktır.
3. Başka kullanıcılardan yardım aldığınız ekran görüntülerini de ekleyebilirsiniz. (örn. erişemeyeceğiniz bir şeye erişebilen birini kullanmak).
4. Eğer bir yenilik veya değişiklikler yaptıysanız, ekran görüntüleri bu değişiklikleri içermelidir, eskiden gönderilmiş ekran görüntülerini değil.
5. Sağlanan ekran görüntüleri gerçek olmalıdır, montajlanmış değil.
6. Katkıda bulunulan ve onaylanan tüm kodlar **Mozilla Public License 2.0** lisansı altında saklanacaktır.


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
2. Bir `presence.ts` ve bir `tsconfg.json` dosyası oluşturun.
3. Ana klasörün içine `dist` adında bir klasör oluşturun.
4. `dist` klasörünün içine de bir `metadata.json` dosyası oluşturun.

## tsconfig.json dosyasını doldurma

Aşağıda gördüğünüz kodu `tsconfg.json` dosyasının içine yapıştırın.
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

    Daha ağır ve sürekli tekrarlanmaması gereken işlemleri bu alanın dışında yukarıdaki gibi başka fonksiyon kullanarak yaptırmak çok daha iyi olacaktır. */

    var presenceData = {
        largeImageKey: "key", /* Servisin kullanıcının profilinde gözükeceği büyük resminin adı. Buraya yazacağınız resimler, oluşturduğunuz uygulamanın "Rich Presence > Art Assets" kısmına yüklenmeli ve yüklendiği ismiyle girilmiş olmalıdır.
        smallImageKey: "key", /* Servisin kullanıcının profilinde gözükeceği küçük resminin adı. These are uploaded and named in the Rich Presence section of your application, called Art Assets*/
        smallImageText: "Some hover text", //The text which is displayed when hovering over the small image
        details: "Browsing Page Name", //The upper section of the presence text
        state: "Reading section A", //The lower section of the presence text
        startTimestamp: 1577232000, //The unix epoch timestamp for when to start counting from
        endTimestamp: 1577151472000 //If you want to show Time Left instead of Elapsed, this is the unix epoch timestamp at which the timer ends
    }; /*Optionally you can set a largeImageKey here and change the rest as variable subproperties, for example presenceSata.type = "blahblah"; type examples: details, state, etc.*/

    if (presenceData.details == null) {
        //This will fire if you do not set presence details
        presence.setTrayTitle(); //Clears the tray title for mac users
        presence.setActivity(); /*Update the presence with no data, therefore clearing it and making the large image the Discord Application icon, and the text the Discord Application name*/
    } else {
        //This will fire if you set presence details
        presence.setActivity(presenceData); //Update the presence with all the values from the presenceData object
    }
});
```
Bunu `presence.ts` dosyanıza kopyalayıp değerleri düzenleyebilirsiniz. Değerleri ayarlama işi updateData eventi içinde olup biter.

Örnekler için 1337x veya 9GAG gibi görünümlerin kodlarını incelemenizi öneririz.

For more information about the Presence class click [here](/dev/presence/class).

## İstediğiniz veriyi alamıyor musunuz?!

Bir çok site [iframe](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([Inlineframes](https://en.wikipedia.org/wiki/HTML_element#Frames)) kullanır. These html tags can contain multiple sources such as videos. But they're not relevant every time. Some are hidden or just not actively used. Check if you can extract, the information you need, without them before you do unnecessary work.

1. Check for them by browser console (be sure that you are on the **Elements** tab).
2. Search (<kbd>Strg</kbd>+<kbd>F</kbd> (Windows) or <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
3. Execute `document.querySelectorAll("iframe")`.

If you find that your data is in a iFrame you need to do the following:
1. Create a `iframe.ts` file.
2. Set iFrame to `true` in your metadata file.
3. Filling in your iFrame file.
```javascript
var iframe = new iFrame();
iframe.on("UpdateData", async () => {
  /*
  Get all the data you need out of the iFrame save them in variables
  and then sent them using iframe.send
  */
  iframe.send({ //sending data
    video: video,
    time: video.duration
  }); 
});
```
4. Making your presence file receive data from the iFrame file.
```javascript
presence.on("iFrameData", data => {
  iFrameVideo = data.video;
  currentTime = data.time;
});
```
**Note:** This needs to be placed outside of the updateData event.
## Derleme
Open a console in your folder and type `tsc -w` to compile the `presence.ts` into the `/dist` folder.

# Temel (JavaScript)
## Projeyi klonlama
1. [Git](https://git-scm.com/)'i yükleyin.
2. Bir konsol açın ve `git clone https://github.com/PreMiD/Presences` yazın.
3. Bir klasör seçin.
4. Editörünüz ile bu klasörü açın.

## Klasörleri ve dosyaları oluşturma

1. Servisin **adı** (URL'si değil) ile bir klasör oluşturun.
3. Ana klasörün içine `dist` adında bir klasör oluşturun.
4. Create a `metadata.json` file and a `presence.js` file inside the `dist` folder.

## metadata.json dosyasını doldurma

Nasıl dolduracağınızı öğrenmek için [buraya](/dev/presence#filling-in-the-metadatajson-file-2) tıklayın. Merak etmeyin, açıklamanın sonundaki bağlantıyı kullanarak kolayca buraya geri dönebileceksiniz.

Bu dosyayla fazla uğraşmak istemeyenler için bir `metadata.json` dosyası oluşturucu formu yaptık, görmek için [buraya](https://eggsy.codes/projects/premid/mdcreator) tıklayabilirsiniz.

## Başlarken

```javascript
var presence = new Presence({
    clientId: "000000000000000000", //The client ID of the Application created at https://discordapp.com/developers/applications
    mediaKeys: false //Enable use and detection of media key presses
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

    //It is recommended to set up another function outside of this event function which will change variable values and do the heavy lifting if you call data from an API.

    var presenceData = {
        largeImageKey: "key", /*The key (file name) of the Large Image on the presence. Buraya yazacağınız resimler, oluşturduğunuz uygulamanın "Rich Presence > Art Assets" kısmına yüklenmeli ve yüklendiği ismiyle girilmiş olmalıdır.
        smallImageKey: "key", /* Servisin kullanıcının profilinde gözükeceği küçük resminin adı. These are uploaded and named in the Rich Presence section of your application, called Art Assets*/
        smallImageText: "Some hover text", //The text which is displayed when hovering over the small image
        details: "Browsing Page Name", //The upper section of the presence text
        state: "Reading section A", //The lower section of the presence text
        startTimestamp: 1577232000, //The unix epoch timestamp for when to start counting from
        endTimestamp: 1577151472000 //If you want to show Time Left instead of Elapsed, this is the unix epoch timestamp at which the timer ends
    }; /*Optionally you can set a largeImageKey here and change the rest as variable subproperties, for example presenceSata.type = "blahblah"; type examples: details, state, etc.*/

    if (presenceData.details == null) {
        //This will fire if you do not set presence details
        presence.setTrayTitle(); //Clears the tray title for mac users
        presence.setActivity(); /*Update the presence with no data, therefore clearing it and making the large image the Discord Application icon, and the text the Discord Application name*/
    } else {
        //This will fire if you set presence details
        presence.setActivity(presenceData); //Update the presence with all the values from the presenceData object
    }
});
```
You can copy this into your `presence.js` file and edit the values. Değerleri ayarlama işi updateData eventi içinde olup biter.

Örnekler için 1337x veya 9GAG gibi görünümlerin kodlarını incelemenizi öneririz.

For more information about the Presence class click [here](/dev/presence/class).

## İstediğiniz veriyi alamıyor musunuz?!

Bir çok site [iframe](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([Inlineframes](https://en.wikipedia.org/wiki/HTML_element#Frames)) kullanır. These html tags can contain multiple sources such as videos. But they're not relevant every time. Some are hidden or just not actively used. Check if you can extract, the information you need, without them before you do unnecessary work.

1. Check for them by browser console (be sure that you are on the **Elements** tab).
2. Search (<kbd>Strg</kbd>+<kbd>F</kbd> (Windows) or <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS)).
3. Execute `document.querySelectorAll("iframe")`.

If you find that your data is in a iFrame you need to do the following:
1. Create a `iframe.js` file.
2. Set iFrame to `true` in your metadata file.
3. Filling in your iFrame file.
```javascript
var iframe = new iFrame();
iframe.on("UpdateData", () => {
    /*
    Get all the data you need out of the iFrame save them in variables
    and then sent them using iframe.send
    */
    iframe.send({ //sending data
        video: video,
        time: video.duration  
    });
});
```
4. Making your presence file receive data from the iFrame file.
```javascript
presence.on("iFrameData", data => {
  iFrameVideo = data.video;
  currentTime = data.time;
});
```
**Note:** This needs to be placed outside of the updateData event.
# metadata.json dosyasını doldurma
Bu dosyayla fazla uğraşmak istemeyenler için bir `metadata.json` dosyası oluşturucu formu yaptık, görmek için [buraya](https://eggsy.codes/projects/premid/mdcreator) tıklayabilirsiniz. It's still suggested to read this through so you know how it works.

```javascript
{
  "author": {
    "name": "USER",
    "id": "ID"
  },
  "contributors": [{
    "name": "USER",
    "id": "ID"
  }],
  "service": "SERVICE",
  "description": {
    "en": "DESCRIPTION"
  },
  "url": "URL",
  "version": "VERSION",
  "logo": "URL",
  "thumbnail": "URL",
  "color": "#HEX000",
  "tags": ["CATEGORY", "TAG"],
  "category": "CATEGORY",
  "regExp": "REGEXP",
  "iFrameRegExp": "REGEXP",
  "iframe": false
}
```

Please copy the code above and put it in your `metadata.json` file. You now need to edit values of the properties. Please note that the following properties are optional to have in your `metadata.json` file, if you do not plan on using them you need to remove them.
- `katkıda Bulunanlar`
- `regExp`
- `iframe`
- `iFrameRegExp`

**Clarifying some value presets:**
<table>
  <thead>
    <tr>
      <th style="text-align:left">Değişken</th>
      <th style="text-align:left">Açıklama</th>
      <th style="text-align:left">Tür</th>
      <th style="text-align:left">İsteğe bağlı</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>yapımcı</b>
      </td>
      <td style="text-align:left">Should contain Object with <code>name</code> and <code>id</code> of the presence developer. Name is your Discord username without the identifier(#0000). User <code>id</code> can be copied from Discord by enabling developer
        mode and right-clicking on your profile.</td>
      <td style="text-align:left"><code>Object</code>
      </td>
      <td style="text-align:left"><code>Hayır</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>katkıda Bulunanlar</b>
      </td>
      <td style="text-align:left">Should contain Object with <code>name</code> and <code>id</code> of the presence developer. Name is your Discord username without the identifier(#0000). User <code>id</code> can be copied from Discord by enabling developer
        mode and right-clicking on your profile.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>Evet</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>servis</b>
      </td>
      <td style="text-align:left">Yaptığınız servisin ismi. <br>(Oluşturduğunuz klasör ile aynı isimde olmalıdır)</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Hayır</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>açıklama</b>
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
      <td style="text-align:left"><b>sürüm</b>
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
      <td style="text-align:left"><b>etiketler</b>
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
      <td style="text-align:left">A regular expression selector that selects iframes to inject into. Daha fazla bilgi için regExp kısmına bakın.</td>
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
4. Servisinizin /dist klasörünü bulun ve seçin.

# Bazı yararlı şeyler
## Anında yenileme
Servisinizin çalıştığı sayfalar, yerel dosyalarınızda yaptığınız herhangi bir değişiklikte otomatik olarak yenilenecektir.

## Hata ayıklama
- Kodunuzun çalışıp çalışmadığınızı test edebilmek için kodunuzun bir yerine basitçe `console.log("Test");` koyabilir ve konsola çıktı verip vermediğini kontrol edebilirsiniz. Eğer çıktı veriyorsa, devam edin. Eğer vermiyorsa, kod bu satırdan önce hataya geçmiş demektir.
- Eğer bunların hiçbiri işinize yaramazsa [Discord sunucumuza](https://discord.gg/PreMiD) katılıp diğer geliştiricilerden yardım talep edebilirsiniz.

# Dosyaların açıklamaları
- [Servis Sınıfı](/dev/presence/class)
- [iFrame Sınıfı](/dev/presence/iframe)
- [Metadata Dosyası](/dev/presence/metadata)
- [TypeScript Konfigürasyonu](/dev/presence/tsconfig)
{.links-list}