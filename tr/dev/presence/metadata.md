---
title: Metadata.json
description: Servis hakkında basit bilgileri bulunduran dosya
published: true
date: 2020-05-21T16:01:05.836Z
tags:
---

# Metadata.json

Servisinizi mağazaya eklemek ve test edebilmek için `dist` klasörünün içine bir `metadata.json` dosyası oluşturmalısınız.

`metadata.json` için bir örnek dosyayı aşağıdan bulabilirsiniz.

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
            "icon": "FONTAWESOME FREE ICON",
            "value": true
        },
        {
            "id": "ID",
            "if": {
                "ID": true
            },
            "title": "DISPLAY TITLE",
            "icon": "FONTAWESOME FREE ICON",
            "value": "\"%song%\" by %artist%",
            "placeholder": "use %song% or %artist%"
        },
        {
            "id": "ID",
            "title": "DISPLAY TITLE",
            "icon": "FONTAWESOME FREE ICON",
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
      <td style="text-align:left">Servise katkıda bulunan kişilerin bilgilerinin olduğu, <code>name</code> ve <code>id</code> anahtarlarını içeren bir Object olmalıdır. İsim Discord etiketi (#0000) belirtilmeden yazılmalıdır. Kullanıcı <code>id</code>'leri Discord'da geliştirici modunu aktifleştirerek alınabilir.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>Evet</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>service</b>
      </td>
      <td style="text-align:left">Yaptığınız servisin ismi.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Hayır</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>altadlar</b>
      </td>
      <td style="text-align:left">Bir alternatif isim kullanarak presence arayabilme. <br>Meant to be used for presences that have different names in different languages (e.g. Pokémon and 포켓몬스터).<br>You can also use it for presences that have special characters so you don't have to type those (e.g. Pokémon and Pokemon).
      </td>
      <td style="text-align:left"><code>Array&lt;String&gt;</code>
      </td>
      <td style="text-align:left"><code>Evet</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>description</b>
      </td>
      <td style="text-align:left">Servisin kısa açıklamaları, eğer yazacak bir şey bulamıyorsanız servisin resmi açıklamalarını kullanabilirsiniz. Açıklamalarınız dilin kodu ve bu dille yazılmış açıklamanın kendisini içermelidir. Sadece <i>bildiğiniz</i> dillerin çevirisini yapın, geri kalanları ilerleyen zamanlarda çevirmen ekibimiz halledecektir. Bir liste için servis dilleri kategorisine bakın. </td>
      <td style="text-align:left"><code>Object</code>
      </td>
      <td style="text-align:left"><code>Hayır</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b>
      </td>
      <td style="text-align:left">Servisin linki.<br><b>Örneğin:</b><code>vk.com</code><br>        <b>Girdiğiniz link, yaptığınız servisin linki olmalıdır. Girilen link eklenti tarafından kullanıcının hangi sitede olduğunu belirlemek ve işlem uygulamak için kullanılacaktır. Bu alan, sadece birden fazla girdi olması durumunda Array olarak kullanılmalıdır.</b>
      </td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code>
      </td>
      <td style="text-align:left"><code>Hayır</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b>
      </td>
      <td style="text-align:left">Linkleri yakalamak için bir regex verisi.</td>
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
      <td style="text-align:left">Servisinizin ait olduğu kategori.</td>
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
      <td style="text-align:left">Iframe verisinin alınacağı kaynakları yakalayacak regex verisi.</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>Evet</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>settings</b>
      </td>
      <td style="text-align:left">Kullanıcıların değiştirebileceği ayarlar array'ı</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>Evet</code>
      </td>
    </tr>
  </tbody>
</table>

## Regex Verileri

Regex hakkında daha fazla bilgi almak istiyorsanız aşağıdaki sitelere göz atabilirsiniz.

#### Öğrenme

• [Hızlı Başlangıç Videosu](https://youtu.be/sXQxhojSdZM) • [RegexOne](https://regexone.com/) • [Regular Expression Hakkında Bilgi](https://www.regular-expressions.info/tutorial.html)

#### Test Etme

• [Regexr](https://regexr.com/) • [Regex101](https://regex101.com/)

## Servis Dilleri

PreMiD, dünya çapındaki kullanıcılarla etkileşimde bulunabilmek için geliştirilmiş bir servistir. Bu yüzden birden çok dili destekler. Desteklenen bilgileri [buradaki](https://api.premid.app/v2/langFile/list) bağlantı üzerinde bulabilirsiniz.

## Servis ayarları
İnteraktif ayarlar oluşturarak kullanıcıların servisinizi düzenlemesini sağlayın!
```javascript
"settings": [
        { 
            "id": "ID",
            "title": "AYAR BAŞLIĞI",
            "icon": "FONTAWESOME FREE SİMGESİ", // Örneğin "fas fa-info"
            "value": true // Belirtilen boolean değerinin kullanılacağı bir açma/kapama düğmesi ekler
        },
        {
            "id": "ID",
            "if": {
                "ID": true // Eğer belirtilen ayar bu değeri karşılıyorsa (true/false/0/1/vb.), bu düğmeyi göster
            },
            "title": "BAŞLIK",
            "icon": "FONTAWESOME FREE SİMGESİ",
            "value": "\"%şarkı%\", %sanatçı%", // Bir string verisi kullanmak ayarı bir giriş kutusuna çevirecektir. Bu sayede kullanıcılar özel şeyler belirtebilir.
            "placeholder": "%şarkı% ve %sanatçı% kullanabilirsiniz" // Girilen herhangi bir yazı yoksa silik bir şekilde bu mesaj gözükecektir
        },
        {
            "id": "ID",
            "title": "BAŞLIK",
            "icon": "FONTAWESOME FREE SİMGESİ",
            "value": 0, // Seçim menüsünün varsayılan değeri
            "values": ["1", "2", "vb."] // İstediğinizi seçebileceğiniz bir seçim kutusu oluşturur
        }
    ]
```

Ayarlara servisinizin içinden ulaşabilmek için aşağıdaki metodları kullanın:
### `getSetting(String)`
Bir ayarın versini döner.
```typescript
var setting = await presence.getSetting("pdexID"); // pdexID'yi verisini almak istediğiniz ayar ile değiştirin
console.log(setting); // Konsola o ayarın verisinin çıktısını verecektir
```

### `hideSetting(String)`
Belirtilen ayarı gizler.
```typescript
presence.hideSetting("pdexID"); // pdexID'yi verisini almak istediğiniz ayar ile değiştirin
```

### `showSetting(String)`
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
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>games</b></td>
    <td style="text-align:left"><b>Oyun</b></td>
      <td style="text-align:left">Oyunlarla alakası olan tüm siteler, <code>Kahoot</code> veya <code>Skribbl.io</code> gibi.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>music</b></td>
    <td style="text-align:left"><b>Müzik</b></td>
      <td style="text-align:left">Müzik konusunda içerik barındıran siteler, ister yayınlama ister indirme platformları olabilir.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>socials</b></td>
        <td style="text-align:left"><b>Sosyal</b></td>
      <td style="text-align:left">Oluşturma veya paylaşma gibi basit sosyal medya ilkelerine sahip siteler.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>videos</b></td>
        <td style="text-align:left"><b>Video & Yayın</b></td>
      <td style="text-align:left">Özellikle video yayınlamak için oluşturulmuş platformlar.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>other</b></td>
    <td style="text-align:left"><b>Diğer</b></td>
      <td style="text-align:left">Yukarıdaki kategorilerden hiç birine uygun olmayan her şey.</td>
      </td>
    </tr>
  </tbody>
</table>

