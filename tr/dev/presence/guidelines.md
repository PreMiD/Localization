---
title: Servis Kılavuzu
description: Rules that all presence developers must follow to have their presence added.
published: true
date: 2021-02-23T01:08:58.632Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:45.733Z
---

<div align="center">
    <img src="https://github.com/PreMiD.png?size=2048" width="128px" style="max-width:100%;">
    <h3 style="font-size: 2rem; margin-bottom: 0">Servis Kılavuzu</h3>
    <h4 style="margin-top: 0">Revision 3</h4>
    <br />
</div>

# Guidelines

When publishing Presences to this GitHub, we require you to follow a set of guidelines. Bazıları için bu kurallar katı görünebilir. However, the implementation of these rulesets will keep us and the users from running into any issues.

# Oluşturma

Servis geliştirmenin genel kuralları aşağıdaki gibidir:

- Yaptığınız servisler, seçtiğiniz site ile alakalı olmak **zorundadır**.
- Yaptığınız servis **kesinlikle** yasa dışı bir siteye ait olmamalıdır (örneğin, uyuşturucu satıcılığı, çocuk pornografisi vb.)
- Dosya yapısı temiz ve yönetilmeli, kullanılmayan dosyalar içermemelidir (örneğin, vscode ve git klasörleri, resim ve metin dosyaları, vb.)
- Uygun bir dosya yapısına sahip olmanız gerekir, taslaklar kabul **edilemez**.
- Servisler ( `.onion` ) bulunan internet siteleri ve bedava alan adları (örn, `.TK ` [tüm Freenom alan adları], `.RF` `.GD` gibi...) veya sağlayıcıları için bir servis **geliştiremezsiniz**, alan adı veya sağlayıcı için ödeme sağladıkları bilgiyi iletmeleri durumunda gerekli tolerans gösterilecektir.
- Servisin alan adı en az 2 aylık olmalıdır.
- Tarayıcılara yerleşik sayfalar için yapılan servislere izin verilmemektedir (örneğin, Chrome Web Mağazası, `chrome://`, `about:` sayfaları gibi). Bu sayfalara kod enjekte edebilmek gelişmiş bir ayar aktifleştirmeyi gerektirdiği ve tarayıcılara zarar verebileceğinden dolayı **yasaktır**.
- Yalnızca tek bir sayfa için desteğe sahip varlıklara izin **verilmeyecektir**, çünkü diğer sayfalar için bozuk görünebilirler (örneğin ana sayfa), politika ve iletişim sayfaları (sık kullanılmayan içerik) veya sitelerin diğer ilgisiz içerikleri. (ör. viki sayfaları)
- Presences for online radios are only allowed if the radio has at least 100 weekly listeners and 15 concurrent and must have some features than only showing album/song title etc.
- Düşük kaliteli (veya tek bir işlev gerçekleştiren) servislere **izin verilmemektedir**. Örneğin sadece sitenin simgesini ve hiçbir zaman değişmeyen bir yazı göstermek.)
- With the `buttons` release, we require some guidelines for them:
  - Redirects to main page are prohibited.
  - Promoting websites by them is prohibited.
  - They can't show addinational data when you can't show them in `state` or `details`.
- Including the `dist` folder, `presence.ts` file, `iframe.ts` file, and `metadata.json` file is mandatory so the result would be what is represented in the following schema:

```bash
presence
├── dist
│   └── metadata.json
├── presence.ts
└── tsconfig.json
```

veya eğer `iframe.ts` kullanıyorsanız:

```bash
presence
├── dist
│   └── metadata.json
├── presence.ts
├── iframe.ts
└── tsconfig.json
```

## [**metadata.json**](/dev/presence/metadata)

> `metadata` dosyasınızın doğruluğunu kontrol ettirip geliştiricilere kolaylık sağlamak amacıyla sizlere bir şema sunuyoruz. Bu tamamen isteğe bağlıdır ve inceleme işlemi sırasında gerekli değildir.

> `metadata` dosyanızı burada gösterildiği şekilde organize etmeniz şiddetle tavsiye edilir. Bu dosyadaki servis isimleri, açıklamalar, etiketler ve ayarlar yazım kurallarına uygun olarak yazılmalıdır. Düzgün bir şekilde biçimlendirmemiş hiçbir şey kabul edilmeyecektir.

> Çıplaklık içeren sitelerin servisleri **mutlaka** `nsfw` etiketi içermelidir, ayrıca servisin resmi veya ekran görüntüsü bu içerikleri kesinlikle **barındırmamalıdır**.

Her servisin kendine ait açıklayıcı bir `metadata.json` dosyası vardır, bu dosya sistem tarafından okunarak ayarlar yapılır. Bu dosyanın bir örneği:

```json
{
  "$schema": "https://schemas.premid.app/metadata/1.3",
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
  "altnames": ["SERVICE"],
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
  "readLogs": false,
  "settings": [
    {
      "id": "multiLanguage",
      "multiLanguage": true
    }
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

> If a field is listed as optional on the [documentation](https://docs.premid.app/en/dev/presence/metadata) or there is a `*` next to the key, and your presence uses the default value for it, do not include it in the `metadata` file. (örneğin, iframe kullanmayan servislerin `iframe` alanına sahip olmaması gerekir

> `metadata` dosyasında ki tüm görseller `i.imgur.com` da barındırılmak zorundadır. Sitenin kendisinde barındırılan resimlerin kullanımına **izin verilmemektedir**, çünkü bu resimler istemsiz de olsa bazen değişiklik gösterebilir.

Bazı alanlar ve alanların kuralları aşağıda belirtilmiştir.

### **`$schema`**

- Bu şema _anahtarı_, **mutlaka** başında dolar işareti barındırmalıdır. Bu işaret editörünüzün buradaki bağlantıyı kullanarak dosyayı doğrulamanızı sağlar. _Önceden de belirtildiği gibi, bir şema belirtmenize gerek olmasa da, belirttiğiniz takdirde bunu düşünmelisiniz._

### **`author`**

- Buradaki ID, Discord'daki kullanıcı ID'niz **olmalıdır**. ID'nizi öğrenmek için açmanız gerek geliştirici ayarlarını nasıl açacağınızı [buraya](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-) tıklayarak öğrenebilirsiniz. _Lütfen bunu sadece servisiniz için kullanılacak olan uygulama ID'si ile **karıştırmayın**._

### **`*contributors`**

- Kendinizi bir katkı sağlayan kişi olarak eklemeyin, eğer servisi yapmanızda kimse yardımcı olmadıysa, bu alana kimseyi eklemeyin.

### **`service`**

- Servisin ismi, servisin içinde bulunduğu klasörle aynı isimde **olmalıdır**. Örneğin, eğer servisiniz `/website/Y/YouTube` yolunda bulunuyorsa, servisinizin ismi `YouTube` olmalıdır.
- Eğer site, adresini resmi ismi olarak kullanmıyorsa servis ismi olarak sitenin bağlantı adresini **kullanamazsınız**. Eğer isim tanımlayıcı değilse ve belirsiz sayılabilecek ise, bağlantı adresini kullanmak **gereklidir**. (örneğin, `youtube.com` kabul edilmez iken, `YouTube` kabul edilir çünkü bu resmi ve tanımlayıcı bir isimdir. `Top` tanımlayıcı bir isim olmadığından dolayı `top.gg` bağlantısını kullanmak **gereklidir**).
- If service has some explicit branding rules of their name, you should follow them.

### **`*altnames`**

- **Only** use this in scenerios where a website goes under multiple official names (e.g. Pokémon and 포켓몬스터). _Shortened_ versions of service names go under `tags`.

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

- The category **must** be one of the following listed on the [documentation](/dev/presence/metadata#presence-categories).
- Servis, servisin sitesinin içeriğine uyan bir kategori kullanmalıdır. (örneğin, servisin sitesi anime ile alakalı değilse `anime` kullanamazsınız).

### **`*regExp`** <br /> **`*iFrameRegExp`**

- Regex verisi **mutlaka** geçerli olmalıdır. Please test your expressions with the tools listed on the [documentation](/dev/presence/metadata#testing).

### **`readLogs`**

- Must be `boolean` value (e.g. `true` or `false`).
- Enables logs for your presence.

### **`warning`**

- Enables warning icon for prompting user that this presence needs more steps than only adding presence.
- Example of presence using this metadata variable is `VLC`.

### **`settings`**

- If you decide to make a format string (for e.g., `%song% by %artist%`), you must have the variables surrounded by a percent sign on either side. Variables like `%var`, `var%`, or `%%var%%` and anything in between are **not** permitted for the sake of standardization.
- The name of settings must **not** be in all capital letters. For example, names such as `SHOW BROWSING STATUS` will **not** be permitted; however, names such as `Show Browsing Status` or `Show browsing status` are permitted.
- If you are using multiLanguage option you should know:
  - **Bolean** type value will only enable strings from [`general.json`](https://github.com/PreMiD/Localization/blob/master/src/Presence/general.json) from Localization repo or from presence file (e.g. when presence name is YouTube, extension will get strings from `youtube.json` too.)
  - **String** type value (e.g. `youtube.json`) will specify name of file that you want get strings from.
  - **Array<String>** type value (e.g. `["youtube.json", "vlive.json"]`) will specify name of files that you want get strings from.

## [**presence.ts**](/dev/presence/class)

> Kodunuz okunabilir ve anlaşılır **olmalıdır**, yazım hatalarına  dikkat etmeli ve kurallara uyulmalıdır. Sitede bulunan yazım hataları göz ardı edilebilir.

> Each presence follows a strict linting ruleset which will be checked during the review process. Aşağıda bir kaç öneri görülebilir. [TypeScript Plugin Recommendations for Strict Type Checking](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules). [ESlint Recommendations](https://eslint.org/docs/rules). [Prettier](https://prettier.io/).

`presence.ts` dosyanızı yazarken izlemeniz gereken kuralların listesi:

- **Always** declare a new instance of the `Presence` class before any other variable to avoid rare issues that may occur; this is not a requirement by design so it could be removed in the future.
- **Never** use custom functions when [native variants are available](https://docs.premid.app/dev/presence#files-explained); this makes sure fixes on the extension level also apply to your presences. You're free to use whatever you need if you do not find them listed in the docs.
- It is **forbidden** to code presences for a site without adding support to its primary language (for e.g., a YouTube presence coded with support only for Portueguese and Japanese, but not English itself.)
- The `smallImageKey` and `smallImageText` fields are intended to provide additional/secondary context (such as `playing/paused` for video sites, `browsing` for regular sites, and other cases) not to promote Discord profiles or anything unrelated to PreMiD.
- You are **not** allowed to access `localStorage`.
- When accessing cookies for stored data, please prefix the key with `PMD_`.
- You many only make HTTP/HTTPS requests to `premid.app` or the presence website API. If you are using external domains, you will be required to explain why it is necessary. Only allowed API to make request is [`Fetch API`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).
- Do **not** set fields in the presence data object to undefined after it has been declared, use the `delete` keyword instead. (for e.g., use `delete data.startTimestamp` instead of `data.startTimestamp = undefined`)
- You are **not** allowed to write presences that change the functionality of a given website. This includes the addition, deletion, or modification of DOM elements.

## [**tsconfig.json**](/dev/presence/tsconfig)

> Do **not** write your own `tsconfig.json` file, use what has been provided on [documentation](/dev/presence/tsconfig).

## Modification

> **presence.ts**, **iframe.ts**  veya **metadata.json** dosyalarından herhangi birine değişiklik yaparken, **metadata** dosyanızda belirtilen sürüm numarasını, daha üst bir sayıya güncellemelisiniz.

Bazı durumlarda, servisler beklenmedik şekilde tepkiler verebileceği veya yazılan kodun daha iyi bir şekilde yazılabileceği durumlar olabilir. Aşağıdan **KESİNLİKLE** dikkat edilmesi gereken servis düzenleme kurallarını görebilirsiniz.

- You are **not** allowed to rewrite a presence or change its author. If the presence author was banned from the official server or hasn't made the required changes within a month, you may contact a reviewer to see if you can to rewrite the presence.
- If you make modifications to a presence and change at least a **quarter** of the presence's codebase, you are allowed to add yourself as a contributor. Contact a reviewer for more information about this subject.
- Anyone may provide hotfixes to fix bugs; however, try **not** to make changes that are **not** required. Valid modifications include general fixes (code and typos), additions (descriptions and tags), missing files, etc. Do **not** change images if they are not outdated and are in specifications.

# Verification

> Katkıda bulunulan kodların **hepis** `Mozilla Public License 2.0` adı altında saklanacaktır.

> Eğer biriyle iletişime geçmek istiyorsanız, lütfen resmi Discord sunucumuzu kullanın. Tüm inceleyicilerin profilinde `Reviewer` rolü vardır.

> Lütfen inceleme ekibimizdeki üyelerin gönüllü olarak çalıştığını ve diğer işlerinin yanında bu işi yaptığını unutmayın, bu nedenle servis isteğiniz gönderildikten saatler, hatta belki günler sonra bile hâlâ onaylanma bekliyor olabilir.

> Bir pull request atmadan önce klon deponuzun güncel olduğuna **emin olun**. Bu, yanlış pozitiflerin denetlenmesini sınırlamaya yardımcı olacaktır.

Servis geliştirmenin en önemli aşamalarından biri servisinizi mağazaya ekletmektir. Bu, GitHub üzerinde bulunan `PreMiD/Presences` deposuna atacağınız bir [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) ile yapılır. Yorumcularımız, servisinin standartlara uygun olduğunu doğrulayacak ve mağazaya ekleyecektir.

<div>
  <h2 style="font-size: 2rem; margin-bottom: 0;">Presence Reviewers</h2>
  <a href="https://github.com/Bas950"><img src="https://github.com/Bas950.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/Timeraa"><img src="https://github.com/Timeraa.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/Alanexei"><img src="https://github.com/Alanexei.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <br />
</div>

## `Restrictions`

Talimatları çiğneme, servis paylaşma işlemini durmadan tekrar etme, tehditler veya uygunsuz davranış gibi tekrarlayan aktivitelerde bulunmak sizi servis oluşturma sisteminden yasaklatacaktır.

Bu durumda, şu değişiklikler olur:

- Presences under your management will be transferred to the PreMiD bot or another user (reviewer decision). The application id for each presence will be recreated under the new owner's name.
- All of your issues and pull requests (presence creation, presence contribution, etc) created following the ban will be prompty closed.
- Tickets created under your name regarding presence development will be deleted.

## `Reviewing`

Bir pull request atmadan önce bilmeniz gereken şeyler:

- It takes 2 reviewers to merge a pull request.
- If a pull request is inactive for a period of 7 days, it will be promptly closed.
- All checks **must** be passed in order to merge.
- ⚠️ You **must** provide new, unaltered screenshots (taken by you) showing a side-by-side comparison of your profile and the website to prove that your presence works. _You are allowed to stitch screenshots together for viewing pleasure_ This applies for both creation and modification.
- ⚠️ You are also **required** to include screenshots of the presence settings in the extension if supplied. An example can be seen [here](https://imgur.com/a/OD3sj5R).

## `Checks`

![Checks](https://i.imgur.com/oqAakOc.png)

Currently, a presence goes through 3 separate stages of checks. Bu doğrulamalar, inceleme ekibimizin kodunuzun çalışmaya hazır olup olmadığını anlamasını kolaylaştırır.

- `Codacy` is a bot that checks for code quality. If you ever receive errors for new issues, you are **required** to fix them. (_WARNING: Codacy bot will be deprecated soon and you will need check errors only from DeepScan!_)
- `DeepScan` is a bot that checks for code quality. If you ever receive errors for new issues, you are **required** to fix them.
- `Schema Validation` will scan your `metadata.json` file for any errors (for e.g., missing fields, invalid value types, etc.). If you ever see any new issues, you are also **required** to fix those. Adding a schema field to your `metadata.json` file will allow your text editor (if supported) to show you these errors during development.

## `Additional Rules`

- **Always** make sure to start your presence in the most appropriate folder, if its name starts with _any_ Latin letter then it must be under its alphabetical match (for e.g., `D/dアニメストア` or `G/Google`). Any other Unicode/non-Latin characters **must** be under the `#` folder (for e.g., `#/巴哈姆特`) and numbers under the `0-9` folder (for e.g., `0-9/4anime`).

Tüm yönergeleri uygun gözden geçirmeler ve kontrollerle karşıladıktan sonra, servisiniz mağazaya eklenecektir.

# Suggestions
If you have some suggestions about our guidelines, you should contact us @ [PreMiD's discord server](https://discord.premid.app) and we will check them!

# Katkılar

`Revision 3` of the guidelines was written and was contributed to by the following individuals:

<div>
<a href="https://github.com/Alanexei"><img src="https://github.com/Alanexei.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
</div>

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