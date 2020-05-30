---
title: Servis Geliştirme
description:
published: true
date: 2020-05-29T21:55:04.008Z
tags:
---

> Tüm servisler artık [https://github.com/PreMiD/Presences](https://github.com/PreMiD/Presences) adresinde saklanmaktadır. 
> 
> {.is-info}

`2.x` sürümleri, [servis mağazası](https://premid.app/store) özelliği ile birlikte gelir. Kullanıcılar bundan sonra kendi oluşturdukları servisleri [mağazaya](https://premid.app/store) ekletebilecek ve diğer kullanıcıların kullanımına sunabilecek.

# Kurallar

GitHub depomuza servis eklerken, takip etmeniz gereken bir takım kurallarımız bulunmaktadır. To some, these strict rules may seem harsh. Ancak bu ayarlamalar ve kurallar sunucularımızın düzgün bir biçimde çalışması için bize yardımcı olacaktır.

## Oluşturma

Servis geliştirmenin genel kuralları aşağıdaki gibidir:

- Yaptığınız servisler, seçtiğiniz site ile alakalı olmak **zorundadır**.
- Yaptığınız servis **Kesinlikle**, herhangi bir illegal siteninki olmamalıdır. (örn. uyuşturucu satıcılığı, çocuk pornografisi vb. )
- Dosya yapısı temiz ve yönetilmeli, belirtilmeyen dosyaları içermemelidir. (örn. vscode ve git klasörleri, reism ve metin dosyaları, vb. )
- Uygun bir dosya yapısına sahip olmanız gerekir, taslaklar kabul **edilemez**.
- Servisler ( `.onion` ) bulunan websiteleri ve bedava alan adları (örn, `.TK ` [tüm Freenom alan adları], `.RF` `.GD` gibi...) veya sağlayıcıları için bir servis **geliştiremezsiniz**, alan adı veya sağlayıcı için ödeme sağladıkları bilgiyi iletmeleri durumunda gerekli tolerans gösterilecektir.
- Tarayıcılara yerleşik sayfalar için yapılan servislere izin verilmemektedir (örneğin, Chrome Web Mağazası, `chrome://`, `about:` sayfaları gibi). Bu sayfalara kod enjekte edebilmek gelişmiş bir ayar aktifleştirmeyi gerektirdiği ve tarayıcılara zarar verebileceğinden dolayı **yasaktır**.
- Yalnızca tek bir sayfa için desteğe sahip varlıklara izin **verilmeyecektir**, çünkü diğer sayfalar için bozuk görünebilirler (örneğin ana sayfa), politika ve iletişim sayfaları (sık kullanılmayan içerik) veya sitelerin diğer ilgisiz içerikleri. (ör. wiki sayfaları)
- Düşük kaliteli (veya tek bir işlev gerçekleştiren) servislere **izin verilmemektedir**. Örneğin sadece sitenin simgesini ve hiçbir zaman değişmeyen bir yazı göstermek. )
- ` dist ` klasörü, ` presence.ts ` dosyası, ` iframe.ts ` dosyası ve ` metadata.json ` dosyası zorunludur sonuç aşağıdaki şemada temsil edilenler olacaktır:

```bash
presence
├── dist
│   ├── metadata.json
│   └── presence.js
├── presence.ts
└── tsconfig.json
```

veya eğer `iframe` kullanıyorsanız:

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

> Varlık geliştiricilerimizin rahatlığı için bütünlüğü doğrulamak için kullanabileceğiniz bir şema sağladık ` metadata ` dosyanızın. Bu tamamen isteğe bağlıdır ve inceleme işlemi sırasında gerekli değildir.

> It is highly recommended that you organize your `metadata` file in the format shown below, and you must have grammatically correct service names, descriptions, tags, and setting fields. Anything not organized to specifications will **not** be permitted. 
> 
> {.is-warning}

Each presence has a descriptor file called `metadata.json`, the metadata has a strict standard and an example of this file can be seem below:

```json
{
  "$schema": "https://schemas.premid.app/metadata/1.0",
  "author": {
    "name": "USER",
    "id": "ID"
  },
  "contributors": [
    {
      "name": "USER",
      "id": "ID"
    }
  ],
  "service": "SERVICE",
  "description": {
    "en": "DESCRIPTION"
  },
  "url": "URL",
  "version": "VERSION",
  "logo": "URL",
  "thumbnail": "URL",
  "color": "#HEX000",
  "tags": ["TAG1", "TAG2"],
  "category": "CATEGORY",
  "regExp": "REGEXP",
  "iFrameRegExp": "REGEXP",
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

> If a field is listed as optional on the [documentation](https://docs.premid.app/en/dev/presence/metadata) and your presence uses the default value for it, do not include it in the `metadata` file. ( for e.g., a presence without iframe support would not need the `iframe` field. ) 
> 
> {.is-warning}

> All images in the `metadata` file must be hosted on `i.imgur.com` or on a CDN that gives you permissions to **change** image files. Content hosted on the website itself is **not** permitted as they can change the locations unwillingly. 
> 
> {.is-warning}

A list of fields and their rules are listed below:

### **`$schema`**

- The schema _key_ **must** include a dollar sign at the beginning of it, this will signal your text editor that you want to validate your JSON file against a model. _As stated earlier, you do not need to include a schema, but if you include it you must take this into account._

### **`author`**

- The ID _value_ **must** be your Discord snowflake ID. You can get it by enabling [developer mode](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-). _Please do **not** confuse this with your application ID, which is only for your presence._

### **`contributors`**

- Do **not** add yourself as a contributor, and do not add someone else as a contributor unless they have helped with the presence.

### **`service`**

- The service name **must** be the name of the presence directory. For example, if the presence is located at `/websites/Y/YouTube/`, the service name must be `YouTube`.

### **`description`**

- **All** presences are **required** to have an English description regardless of the website's prefered language.
- Do **not** try and translate the description yourself unless you know that language, translators will modify your `metadata.json` and change the descriptions if necessary.

### **`url`**

- The url **must** be a string if the website only uses one domain. If the website uses multiple, make this an array and specify each one.
- Do **not** include protocols in the url ( for e.g., `http` or `https` ), and do not include query parameters in the url ( for e.g., `www.google.com/search?gws_rd=ssl` which should be `www.google.com/`)

### **`version`**

- Always make sure the version number follows [semantic versioning standards](https://semver.org), which translates to the following scheme: `<NEW-FEATURE>.<HUGE-BUGFIX>.<SMALL-BUGFIX-OR-METADATA-CHANGES>`. Anything else like `1.0.0.1`, `1.0`, `1`, `1.0.0-BETA` or changing `1.0.0` to `2.0.0` on a bug fix/small change is **not** permitted.
- The version **must** always start at `1.0.0` unless told otherwise, other versions will **not** be permitted.

### **`logo`**

- The logo **must** be a square image with a `1:1` aspect ratio.
- The image is **required** to have a minimum resolution of `512x512` pixels. You can upsize the imagine using a tool like [waifu2x](http://waifu2x.udp.jp/).

### **`thumbnail`**

- The thumbnail **should** preferably be a [wide promotional card](https://i.imgur.com/3QfIc5v.jpg) or a [screenshot](https://i.imgur.com/OAcBmwW.png) if the first is **not** available.

### **`color`**

- The color **must** be a hexadecimal value between `#000000` and `#FFFFFF`.
- The color string **must** be prepended with a hash symbol.

### **`tags`**

- **All** presences are required to have at least _one_ tag.
- Tags must **not** include any spaces, slashes, single/double quotation marks, Unicode characters, and should always be lowercase.
- Tags **should** preferably include alternate service names to make searching easier ( for e.g., if an Amazon presence had included AWS support, it would have its tags like `amazon-web-services` and `aws` )
- You are **required** to add an `NSFW` tag if the presence is for an NSFW website.

### **`category`**

- The category **must** be one of the following listed on the [documentation](https://docs.premid.app/en/dev/presence/metadata#presence-categories).

### **`regExp`** <br /> **`iFrameRegExp`**

- Regular expressions **must** be valid. Please test your expressions with the tools listed on the [documentation](https://docs.premid.app/en/dev/presence/metadata#testing).

### **`ayarlar`**

- If you decide to make a format string ( for e.g., `%song% by %artist%` ), you must have the variables surrounded by a percent sign on either side. Variables like `%var`, `var%`, or `%%var%%` and anything in between are **not** permitted for the sake of standardization.

## [**presence.ts**](https://docs.premid.app/en/dev/presence/class)

> The code you write **must** be _well-written_ and **must** be _readable_ and all strings must be grammatically correct ( grammar errors on websites can be ignored ). 
> 
> {.is-warning}

Here is a list of rules you must follow when writing your `presence.ts` file:

- **Always** declare a new instance of the `Presence` class before any other variable to avoid rare issues that may occur; this is not a requirement by design so it could be removed in the future.
- **Never** use custom functions when [native variants are available](https://docs.premid.app/dev/presence#files-explained); this makes sure fixes on the extension level also apply to your presences. You're free to use whatever you need if you do not find them listed in the docs.
- It is **forbidden** to code presences for a site without adding support to its primary language ( for e.g., a YouTube presence coded with support only for Portueguese and Japanese, but not English itself. )
- The `smallImageKey` and `smallImageText` fields are intended to provide additional/secondary context ( such as `playing/paused` for video sites, `browsing` for regular sites, and other cases ) not to promote Discord profiles or anything unrelated to PreMiD.
- You are **not** allowed to access `localStorage`.
- When accessing cookies for stored data, please prefix the key with `PMD_`.
- Making requests to external domains is **not** allowed unless you can specify why you are needing to do so.

## [**tsconfig.json**](https://docs.premid.app/en/dev/presence/tsconfig)

> Do **not** write your own `tsconfig.json` file, use what has been provided on [documentation](https://docs.premid.app/en/dev/presence/tsconfig). 
> 
> {.is-warning}

## Yapılandırma

> You **must** change the version in the **metadata** to be a higher value from the previous version when making changes to either the **presence.ts**, **iframe.ts** or **metadata.json**. 
> 
> {.is-warning}

In some situations, presences may behave unexpectedly or could use some minor changes to improve their functionality. Here is a list of rules that you **must** follow while modifiying presences.

- You are **not** allowed to rewrite a presence or change its author. If the presence author was banned from the official server or hasn't made the required changes within a month, you may contact a verifier to see if you can to rewrite the presence.
- Anyone may provide hotfixes to fix bugs; however, try **not** to make changes to code that does **not** need to be fixed. Valid modifications are, but **not** limited to, _missing paths_, _typos_, _missing images_, etc.
- If you make modifications to a presence and change at least a **quarter** of the presence's codebase, you are allowed to add yourself as a contributor. Contact a verifier for more information about this subject.
- Değişiklikler yararlı olmalıdır. These may include fixes ( code and typos ), additions ( descriptions and tags ), etc. Do **not** change images if they are not outdated and are in specifications.

# Onaylanma

> Eğer biriyle iletişime geçmek istiyorsanız, lütfen resmi Discord sunucumuzu kullanın. All verifiers will have the `Presence Verifier` role on their profile.

> **All** code contributed to the store will be licensed under the `Mozilla Public License 2.0`.

> **Always** have an up-to-date fork before creating your pull request. This will help limit false positives from `DeepScan`. 
> 
> {.is-warning}

The most important process of presence development is getting your presence on the store. This is done by making a [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) on GitHub on the `PreMiD/Presences` repository. Our verifiers will confirm that your presence is up to standards and it will be pushed onto the store.

<div>
  <h2 style="font-size: 2rem; margin-bottom: 0;">Verifiers</h2>
  <a href="https://github.com/Alanexei"><img src="https://github.com/Alanexei.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/Bas950"><img src="https://github.com/Bas950.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/doomlerd"><img src="https://github.com/doomlerd.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/frozaum"><img src="https://github.com/frozaum.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/TheDropX"><img src="https://github.com/TheDropX.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <br />
</div>

## `Reviewing`

A few things you should know after opening a pull request:

- It takes 2 reviewers to merge a pull request.
- If a pull request is inactive for a period of 7 days, it will be promptly closed.
- All checks **must** be passed in order to merge.
- ⚠️ You **must** provide new, unaltered screenshots ( taken by you ) showing a side-by-side comparison of your profile and the website to prove that your presence works. _You are allowed to stitch screenshots together for viewing pleasure_ This applies for both creation and modification.

## `Checks`

![Checks](https://i.imgur.com/bk0A1iY.png)

Currently, a presence goes through 2 separate stages of checks. All of these checks help the verifiers determine whether your presence is suitable for deployment.

- `DeepScan` is a bot that checks for code quality. If you ever receive errors for new issues, you are **required** to fix them.
- `Schema Validation` will scan your `metadata.json` file for any errors ( for e.g., missing fields, invalid value types, etc. ). If you ever see any new issues, you are also **required** to fix those. Adding a schema field to your `metadata.json` file will allow your text editor ( if supported ) to show you these errors during development.

## `Additional Rules`

- **Always** make sure to start your presence in the most appropriate folder, if its name starts with _any_ Latin letter then it must be under its alphabetical match ( for e.g., `D/dアニメストア` or `G/Google` ). Any other Unicode/non-Latin characters **must** be under the `#` folder ( for e.g., `#/巴哈姆特` ) and numbers under the `0-9` folder ( for e.g., `0-9/4anime` ).

After meeting all of the guidelines with the proper reviews and checks, your presence will be merged with the store.

# Contributions

`Revision 2` of the guidelines was written and was contributed to by the following individuals:

<div>
<a href="https://github.com/Alanexei"><img src="https://github.com/Alanexei.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
</div>

`Revision 1` was maintained by the following individuals:

<div>
<a href="https://github.com/Alanexei"><img src="https://github.com/Alanexei.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
<a href="https://github.com/Bas950"><img src="https://github.com/Bas950.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
<a href="https://github.com/doomlerd"><img src="https://github.com/doomlerd.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
</div>

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

```json
{
    "$schema": "https://schemas.premid.app/metadata/1.0",
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
  "tags": ["TAG1", "TAG2"],
  "category": "CATEGORY",
  "regExp": "REGEXP",
  "iFrameRegExp": "REGEXP",
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
        <a href="https://youtu.be/sXQxhojSdZM">Buraya</a> tıklayarak güzel bir eğitim videosunu izleyebilirsiniz.<br>
        regExp'inizi <a href="https://regex101.com/">Regex101</a> sitesinde test edebilirsiniz.
      </td>
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
- If that doesn't help you either then ask a presence developer on our [Discord server](https://discord.gg/WvfVZ8T) for help.

# Dosyaların açıklamaları
- [Presence Sınıfı](/dev/presence/class)
- [iFrame Sınıfı](/dev/presence/iframe)
- [Metadata Dosyası](/dev/presence/metadata)
- [TypeScript Konfigürasyonu](/dev/presence/tsconfig)
{.links-list}
