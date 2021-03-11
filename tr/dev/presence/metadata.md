---
title: Metadata.json
description: Servis hakkında basit bilgileri bulunduran dosya
published: true
date: 2021-02-07T17:12:06.799Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:52.965Z
---

# Metadata.json

Servisinizi mağazaya eklemek ve test edebilmek için `dist` klasörünün içine bir `metadata.json` dosyası oluşturmalısınız.

Bu dosyanın bir örneği aşağıda bulunabilir.

```typescript
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
  "altnames": ["SERVICE"],
  "description": {
    "en": "DESCRIPTION"
  },
  "url": "URL",
  "regExp": "REGEXP",
  "iFrameRegExp": "REGEXP",
  "version": "VERSION",
  "logo": "URL",
  "thumbnail": "URL",
  "color": "#45A8FC",
  "tags": ["TAG1", "TAG2"],
  "category": "CATEGORY",
  "iframe": false,
  "settings": [
    {
      "id": "ID",
      "title": "DISPLAY TITLE",
      "icon": "FONTAWESOME ICON",
      "value": true
    },
    {
      "id": "ID",
      "if": {
        "ID": true
      },
      "title": "DISPLAY TITLE",
      "icon": "FONTAWESOME ICON",
      "value": "\"%song%\" by %artist%",
      "placeholder": "use %song% or %artist%"
    },
    {
      "id": "ID",
      "title": "DISPLAY TITLE",
      "icon": "FONTAWESOME ICON",
      "value": 0,
      "values": ["1", "2", "etc."]
    }
  ]
}
```

## metadata.json dosyasını anlama

Bu örnekler biraz zor mu gözüküyor? Endişe etmeyin, değişkenlerin ne işe yaradığını anlamak o kadar da zor değil.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Değişken</th>
      <th style="text-align:left">Açıklama</th>
      <th style="text-align:left">Tür</th>
      <th style="text-align:left">Opsiyonel</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>author</b></td>
      <td style="text-align:left">Servis geliştiricisinin <code>isim</code> ve <code>id</code> bilgileri bulunan bir Obje içermelidir. <code>name</code> etiketinizin (#0000) olmadığı Discord kullanıcı adınızdır. Kullanıcı <code>id</code>'leri Discord'da geliştirici modunu aktifleştirerek alınabilir.</td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>Hayır</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>contributors</b></td>
      <td style="text-align:left">Servise katkıda bulunan kişilerin <code>name</code> ve <code>id</code> bilgilerini içeren bir Object içermelidir. <code>name</code> etiketinizin (#0000) olmadığı Discord kullanıcı adınızdır. Kullanıcı <code>id</code>'leri Discord'da geliştirici modunu aktifleştirerek alınabilir.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>Evet</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>service</b></td>
      <td style="text-align:left">Yaptığınız servisin ismi.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Hayır</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>altnames</b></td>
      <td style="text-align:left">Servisi ararken alternatif isimlerle aranabilmesi için kullanabileceğiniz alan. Farklı dillerde veya farklı şekilde yazılan (örneğin Pokémon ve 포켓몬스터) servisler ve isminde özel karakter içeren servisler için kullanılabilir.</td>
      <td style="text-align:left"><code>Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Evet</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>description</b></td>
      <td style="text-align:left">Servisin bağlı olduğu sitenin açıklaması, yaptığınız servisin <b>DEĞİL</b>. Açıklamalarınız dilin kodu ve bu dille yazılmış açıklamanın kendisini içermelidir. Sadece <i>bildiğiniz</i> dillerin çevirisini yapın, geri kalanları ilerleyen zamanlarda çevirmen ekibimiz halledecektir. Bir liste için servis dilleri kategorisine bakın. </td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>Hayır</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b></td>
      <td style="text-align:left">Hizmetin URL'si. <br>
       <b> Örnek:</b><code>vk.com</code> <br>
       <b> Bu adres, komut dosyasının enjekte edileceği servisi tespit etmek için kullanılacağı için internet sitesinin adresi ile eşleşmelidir. Bu alan, sadece birden fazla girdi olması durumunda Array olarak kullanılmalıdır.</b></td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Hayır</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b></td>
      <td style="text-align:left">Linkleri yakalamak için bir regex verisi.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Evet</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>version</b></td>
      <td style="text-align:left">Servis sürümü.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Hayır</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>logo</b></td>
      <td style="text-align:left">Servisin logosunu içeren resim bağlantısı.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Hayır</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b></td>
      <td style="text-align:left">Mağazada gözükecek arka plan resminin bağlantısı.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Hayır</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>color</b></td>
      <td style="text-align:left"><code>#HEX</code> biçimindeki renk. Servisin kullandığı renkleri kullanmanızı tavsiye ediyoruz.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Hayır</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>tags</b></td>
      <td style="text-align:left">Servisinize ait etiketleri içeren bir Array.</td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Hayır</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>category</b></td>
      <td style="text-align:left">Servisinizin ait olduğu kategori.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Hayır</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b></td>
      <td style="text-align:left"><code>iFrame</code> ayarının kullanıp kullanılmadığını belirler.</td>
      <td style="text-align:left"><code>Boolean</code></td>
      <td style="text-align:left"><code>Evet</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b></td>
      <td style="text-align:left">Iframe verisinin alınacağı kaynakları yakalayacak regex verisi.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Evet</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>readLogs</b></td>
      <td style="text-align:left">Servisinizin konsol kayıtlarını okuyup okumayacağını belirler.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Evet</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>settings</b></td>
      <td style="text-align:left">Kullanıcıların değiştirebileceği, Array türündeki ayarlar</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>Evet</code></td>
    </tr>
  </tbody>
</table>

## Regex Verileri

Regex hakkında daha fazla bilgi almak istiyorsanız aşağıdaki sitelere göz atabilirsiniz.

#### Öğrenme

• [Yeni Başlayanlar İçin Video](https://youtu.be/sXQxhojSdZM) • [RegexOne](https://regexone.com/) • [Regular Expressions Info](https://www.regular-expressions.info/tutorial.html)

#### Test Etme

• [Regexr](https://regexr.com/) • [Regex101](https://regex101.com/)

## Servis Dilleri

PreMiD, dünya çapındaki kullanıcılarla etkileşimde bulunabilmek için geliştirilmiş bir servistir. Bu yüzden birden çok dili destekler. Desteklenen bilgileri [buradaki](https://api.premid.app/v2/langFile/list) bağlantı üzerinde bulabilirsiniz. Servisi daha da özelleştirmek için kullanıcıların servisin dilini seçmelerine izin verebilirsiniz, daha fazlası için [` multiLanguage `](#multilanguage)  ayarına bakın.

## Servis ayarları
İnteraktif ayarlar oluşturarak kullanıcıların servisinizi düzenlemesini sağlayın!
```typescript
"settings": [
  {
    "id": "ID",
    "multiLanguage": true //See https://docs.premid.app/dev/presence/metadata#multilanguage
  },
  {
    "id": "ID",
    "title": "DISPLAY TITLE",
    "icon": "FONTAWESOME ICON", //Example "fas fa-info"
    "value": true //Boolean value will make it an on/off switch with the value as the default value
  },
  {
    "id": "ID",
    "if": {
      "ID": true //If another setting equals this value (true/false/0/1/etc.) then show this button
    },
    "title": "DISPLAY TITLE",
    "icon": "FONTAWESOME ICON",
    "value": "\"%song%\" by %artist%", //Putting in a string will make the setting an input one, where you can use a custom input.
    "placeholder": "use %song% or %artist%" //When input is empty it will show this grayed out
  },
  {
    "id": "ID",
    "title": "DISPLAY TITLE",
    "icon": "FONTAWESOME ICON",
    "value": 0, //Default value of the selector
    "values": ["1", "2", "etc."] //Will make the setting a selector where you select which one you want
  }
]
```

### `multiLanguage`

#### Tanıtım

Kullanıcıların servisi istedikleri dilde göstermeyi seçebilmelerini sağlayan ayar `multiLanguage` ayarıdır. Bu seçeneği aktifleştirmek, [API](https://api.premid.app/v2/langFile/presence/en) sistemimizdeki çevirileri kullanmanızı sağlar, daha fazla bilgi için [buraya](/dev/presence/metadata/adding-new-strings) tıklayın.

#### Kurulum

`multiLanguage` ayarı özel bir ayardır, bu yüzden diğer ayarların aksine `title`, `icon`, `value` veya `values` seçeneklerine ihtiyaç duymaz!

`multiLanguage` seçeneği şunlardan biri şeklinde ayarlanabilir:

`true`: eğer sadece `general.json` ve [Localization deposundaki](https://github.com/PreMiD/Localization/tree/master/src/Presence) `<servis>.json` dosyasındakileri kullanacaksanız bunu seçin. `string`: [Localization deposundaki](https://github.com/PreMiD/Localization/tree/master/src/Presence) bir dosya ismi (içerisinde .json uzantısı ve dosyanın adı, zaten her zaman kullanılabilir durumda olduğu için `general` olmamalıdır). Hem `general` hem de girilen dosyanın yalnızca ortak dilleri listelenir. `<String>`: [Localization deposundaki](https://github.com/PreMiD/Localization/tree/master/src/Presence) birden fazla dosyayı kullanıyorsanız hepsini array şeklinde belirtebileceğiniz seçenektir (her durumda yüklü olduğu için `general` dosyasını belirtmenize gerek yoktur. Hem `general` hem de girilen dosyanın yalnızca ortak dilleri listelenir.

#### Yeni çeviriler ekleme

##### Projeyi klonlama

1. Bir konsol açın ve `git clone https://github.com/PreMiD/Localization` yazın.
2. İstediğiniz bir klasörü seçin.
3. Kod düzenleyicinizde açın.

##### Dosyayı oluşturma

1. `src` klasörüne gidin.
2. `Presence` klasörüne gidin.
3. `servis.json` adında bir dosya açın. (Servis **isimdir** (URL değildir) ve küçük harflerle yazılmış olmalıdır.)

##### Çevirileri ekleme

Her `string` bir `Object` türündedir ve aralarında nokta olacak şekilde önce servisin ismi, peşinden de stringName gelecek şekilde belirtilir.

stringName tek kelime olacak şekilde mesajı anlatan bir anahtardır.

`Object` toplamda iki özelliğe sahiptir; `message` ve `description`. `message` çevrilmesi gereken yazıdır. `description` çevirmenlerin anlamasında yardımcı olacak mesajınızdır.

**Not:** Aynı çeviriyi birden fazla kere eklemeyin. (Buna `general.json` dosyasındakiler dahildir, fakat diğer dosyalardakiler dahil değildir.)

Dosyanın örnek bir görüntüsü:

```typescript
{
  "<service>.<stringName>": {
    "message": "Çevrilmesi gereken yazı.",
    "description": "Yukarıdaki mesaj hakkında bilgilendirme veren yazı."
  },
  "<service>.<stringName>": {
    "message": "Çevrilmesi gereken yazı.",
    "description": "Yukarıdaki mesaj hakkında bilgilendirme veren yazı."
  }
}
```

Çevirilerinizi tamamen ekledikten sonra [Localization deposuna](https://github.com/PreMiD/Localization) bir Pull Request atabilirsiniz, bunun içerisinde de **mutlaka** bu çevirileri kullandığınız yeni servis güncellemenizin olduğu [Presence deposundaki](https://github.com/PreMiD/Presences) Pull Request'inizin bağlantısı olmalıdır.

#### Varsayılan anahtarlar
Ayarlamanız gerekmeyen anahtarlar otomatik olarak aşağıdaki gibi ayarlanır: `title`: "Language" **Not:** Bu başlık, kullanıcının tarayıcısının diline uygun olarak değişecektir. `icon` "fas fa-language" ([Önizleme](https://fontawesome.com/icons/language)) `value`: **Eğer çevirisi %100 ise kullanıcının tarayıcısının dili seçeneğini alır, eğer değilse İngilizce olur.** `values`: **Çevirisi %100 tamamlanmış olan dillere ayarlanır.**

**Not:** Bunlar hiçbir şekilde değiştirilemez.

### Metodlar

Ayarlara servisinizin içinden ulaşabilmek için aşağıdaki metodları kullanın:
#### `getSetting(String)`
Bir ayarın versini döner.
```typescript
const setting = await presence.getSetting("pdexID"); // pdexID'yi ayarın ID'si ile değiştirin
console.log(setting); // Ayarın değerinin çıktısını verecektir
```

#### `hideSetting(String)`
Belirtilen ayarı gizler.
```typescript
presence.hideSetting("pdexID"); // pdexID'yi verisini almak istediğiniz ayar ile değiştirin
```

#### `showSetting(String)`
Belirtilen ayarı gösterir (sadece önceden gizlenmişse çalışacaktır).
```typescript
presence.showSetting("pdexID"); // pdexID'yi verisini almak istediğiniz ayar ile değiştirin
```

## Servis kategorileri

Bir servis oluştururken, servisin bulunacağı geçerli bir kategori belirtmelisiniz. Geçerli kategoriler aşağıda açıklamalarıyla birlikte belirtilmiştir.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Kategori</th>
      <th style="text-align:left">İsim</th>
      <th style="text-align:left">Açıklama</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>anime</b></td>
      <td style="text-align:left"><b>Anime</b></td>
      <td style="text-align:left">Anime hakkında yapılan forumlar, video platformları gibi her şey.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>games</b></td>
      <td style="text-align:left"><b>Games</b></td>
      <td style="text-align:left">Oyunlarla alakası olan tüm siteler, <code>Kahoot</code> veya <code>Skribbl.io</code> gibi.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>music</b></td>
      <td style="text-align:left"><b>Music</b></td>
      <td style="text-align:left">Müzik konusunda içerik barındıran siteler, ister yayınlama ister indirme platformları olabilir.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>socials</b></td>
        <td style="text-align:left"><b>Socials</b></td>
      <td style="text-align:left">Oluşturma veya paylaşma gibi basit sosyal medya ilkelerine sahip siteler.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>videos</b></td>
        <td style="text-align:left"><b>Videos & Streams</b></td>
      <td style="text-align:left">Özellikle video yayınlamak için oluşturulmuş platformlar.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>other</b></td>
      <td style="text-align:left"><b>Other</b></td>
      <td style="text-align:left">Yukarıdaki kategorilerden hiç birine uygun olmayan her şey.</td>
    </tr>
  </tbody>
</table>

