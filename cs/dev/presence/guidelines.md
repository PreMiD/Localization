---
title: Pokyny
description: Pravidla, která musí všichni vývojáři dodržovat, aby byla jejich presence přidána.
published: true
date: 2020-12-29T02:18:29.846Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:45.733Z
---

# Guidelines

When publishing Presences to [our GitHub Repository](https://github.com/PreMiD/Presences), we require you to follow a set of guidelines. Některým se tato přísná pravidla mohou zdát přísná, However, the implementation of these rule sets will keep us and our users from running into issues.

# Vytváření

Základní pravidla vyvíjení presence jsou následující:

- Presence se **musí** vztahovat k vybranému webu.
- Presence **nesmí** být vytvářena pro nelegální weby (například stresory, obchod s drogami, dětská pornografie a podobně...).
- Struktura souboru musí být čistá a udržována. Nepřikládejte soubory, které nejsou specifikovány (například vscode a git složky, obrázky, textové soubory a podobně).
- Musíte mít řádnou strukturu souboru, koncepty **nejsou** povoleny.
- Presence pro webové stránky s TLD `.onion` nebo stránky s doménou/hostingem zdarma (například `.TK` (Všechny Freenom domény), `.RF`, `.GD`) **není povolena**, ale mohou být uděleny výjimky, pokud bude poskytnut důkaz že za doménu bylo zaplaceno.
- Doména Presence musí být nejméně 2 měsíce stará
- Presence, které cílí na interní stránky prohlížeče (jako je internetový obchod Chrome, stránky `chrome://`, stránky `about:` a podobně...) **nejsou** povoleny, jelikož po uživatelovi vyžadují aktivování zkušebních funkcí a mohli by potencionálně způsobit škodu na jejich prohlížečích.
- Presence podporující jedinou subdoménu **nebudou** povoleny, jelikož se na ostatních stránkách (například na domovské stránce) mohou zdát rozbité. Mohou být uděleny výjimky pro stránky s kontakty nebo se zásadami o ochraně osobních údajů (obsah, který není často využíván), či pro stránky, jejž obsah je nepodstatný (například wikia stránky).
- Presence pro online rádio je povolená pouze, když má 100 týdeních posluchačů a minimálně 15 v jeden moment současně
- Presence nízké kvality (nebo ty s nedostatečným obsahem) **nejsou** povoleny (například zobrazení loga a textu bez další změny).
- Zahrnutí složky `dist` a souborů `presence.ts`, `iframe.ts` a `metadata.json` je povinné a rozvržení souborů musí odpovídat následujícímu schématu:

```bash
presence
├── dist
│   ├── metadata.json
│   └── presence.js
├── presence.ts
└── tsconfig.json
```

nebo pokud používáte soubor `iframe.ts`:

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

> Pro pohodlí našich vývojářů presencí jsme poskytli schéma, které mohou použít pro kontrolu integrity souboru `metadata`. Tento krok je zcela dobrovolný a není vyžadován během procesu kontroly. 
> 
> {.is-info}

> Je důrazně doporučeno zorganizovat Váš `metadata` soubor dle níže zobrazeného vzoru. Pole s jménem služby, popisky, tagy a pole s nastavením musí být bez gramatických chyb. Cokoliv co nebude zorganizováno dle specifikací **nebude** povoleno. 
> 
> {.is-warning}

> Presence webových stránek s explicitním obsahem **musí** mít tag `nsfw` a logo/thumbnail **nesmí** zobrazovat obsah těchto stránek. 
> 
> {.is-warning}

Každá presence má soubor `metadata.json` s popiskami. Tyto metadata mají striktní formát, který nalznete níže:

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

> Pokud je pole v [dokumentaci](https://docs.premid.app/en/dev/presence/metadata) označeno jako nepovinné a Vaše presence pro něj využívá výchozí hodnotu, nezahrnujte ho do souboru `metadata` (například presence s podporou iframe nepotřebuje pole `iframe`). 
> 
> {.is-warning}

> Všechny obrázky v souboru `metadata` musí být nahrány na hostingu `i.imgur.com`. Využívání obsahu z webových stránek **není** povoleno, jelikož tyto stránky mohou měnit cesty k těmto souborům a soubory samotné. 
> 
> {.is-warning}

Seznam polí a jejich pravidla jsou uvedena níže:

### **`$schema`**

- _Klíč_ schema **musí** obsahovat znak dolaru na jeho začátku. Tento znak naznačí Vašemu textovému editoru, že se snažíte ověřit Váš JSON soubor oproti modelu. _Jak bylo již dříve zmíněno, schema nemusíte zahrnovat. Pokud ho ale zahrnete, musíte toto brát v potaz._

### **`author`**

- _Hodnota_ ID **musí** být Vaše Discord snowflake ID. Můžete ho získat aktivováním [developer módu](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-). _Prosím, **nepleťte** si toto s ID Vaší aplikace, které je pouze pro Vaší presenci._

### **`contributors`**

- **Nepřidávejte** sebe jako contributora. **Nepřidávejte** jako contributora někoho, kdo s vývojem presence nepomáhal.

### **`service`**

- Jméno služby **musí** být jménem složky presence. Například, pokud je presence umístěna ve složce `/websites/Y/YouTube/`, jméno služby musí také být `YouTube`.
- URL **nemůžete** použít jako název služby, dokud služba nevyužívá její URL jakož oficiální název. Pokud jméno není dostatečně deskriptivní a může být považováno jako vágní, je **zapotřebí** použít URL (například, `YouTube` je povoleno, protože je to oficiální jméno a je deskriptivní, zatímco `youtube.com` není. `Top` není deskriptivní jméno, takže je **nutné** použít URL `top.gg`

### **`altnames`**

- Toto používejte **pouze** v případě, pokud stránka využívá více oficiálních jmen (například Pokémon a 포켓몬스터), nebo pokud to umožňuje snazší vyhledání presence bez speciálních znaků (například Pokémon a Pokemon). *Zkrácená* jména služby patří pod `tags`.

### **`description`**

- **Všechny** presence **musí** mít anglický popis, nehledě na jazyk webové stránky.
- **Nesnažte** se popisek překládat sami, dokud daný jazyk neovládáte. Pokud to bude nutné, překladatelé upraví Váš `metadata.json` soubor a změní popisek sami.

### **`url`**

- Pokud webová stránka používá pouze jednu doménu, URL **musí** být řetězec. Pokud webová stránka využívá více domén, řetězec změňte na pole a vypište každou doménu.
- **Nezahrnujte** protokoly do URL (například `http` nebo `https`) a do URL nezahrnujte parametry dotazu (například, `www.google.com/search?gws_rd=ssl` by mělo být `www.google.com`)

### **`version`**

- Vždy se ujistěte že číslo verze je dle [sémantického standartu verzování](https://semver.org), které se řídí následujícím schématem: `<NEW-FEATURE>.<HUGE-BUGFIX>.<SMALL-BUGFIX-OR-METADATA-CHANGES>`. Cokoli jiného jako `1.0.0.1`, `1.0`, `1`, `1.0.0-BETA`nebo změna `1.0.0` na `2.0.0` při opravě malé chyby/malé změny **není** povoleno.
- Verzování **musí** vždy začínat s verzí `1.0.0`, dokud nebylo řečeno jinak. Jiné verzování **nebude** povoleno.

### **`logo`**

- Logo **musí** být čtvercový obrázek s poměrem stran `1:1`.
- Obrázek **musí** mít minimální rozlišení `512x512` pixelů. Obrázek může zvětšit pomocí nástroje jako je [waifu2x](http://waifu2x.udp.jp/).

### **`thumbnail`**

- Thumbnail by **měl** být jako [široká promo karta](https://i.imgur.com/3QfIc5v.jpg) nebo [snímek obrazovky](https://i.imgur.com/OAcBmwW.png), pokud to první **není** dostupné.

### **`color`**

- Barva **musí** být hexadecimální hodnota mezi `#000000` a `#FFFFFF`.
- Řetezec s barvou **musí** být předsazen hash symbolem.

### **`tags`**

- **Všechny** presence musí mít alespoň _jeden_ tag.
- Tagy **nesmí** obsahovat žádné mezery, lomítka, uvozovky, Unicode znaky a měli by vždy být napsány s malými písmeny.
- Tagy by **měli** obsahovat alternativní jména služby, aby bylo presence snazší dohledat (Například, pokud presence Amazonu má podporu AWS, měla by mít tagy jako `amazon-web-services` a `aws`).
- ProMáte **povinnost** zahrnout `NSFW` tag, pokud presence je pro NSFW stránku.

### **`category`**

- Kategorie **musí** být jedna ze seznamu v [dokumentaci](https://docs.premid.app/en/dev/presence/metadata#presence-categories).
- Presence musí používat kategorii, která se shoduje s obsahem webové stránky (Například, nepoužívejte `anime` pokud stránka nemá s anime nic společného).

### **`regExp`** <br /> **`iFrameRegExp`**

- Regulární výrazy **musí** být platné. Prosím, otestuje Vaše výrazy s nástroji, které jsou sepsané v [dokumentaci](https://docs.premid.app/en/dev/presence/metadata#testing).

### **`nastavení`**

- Pokud se rozhodnete vytvořit formátovaný řetězec (například `%song% od %artist%`), musíte proměnné obalit s značkou procenta na obou stranách. Proměnné jako `%var`, `var%` nebo `%%var%%` a podobné **nejsou** povoleny z důvodu standardizace.
- Jména nastavení **nesmí** být napsána velkými písmeny. Například, jména jako `SHOW BROWSING STATUS` **nejsou** povolena, ale jména jako `Show Browsing Status` nebo `Show browsing status` povolena jsou.
- Adding custom strings to the [Localization Repository](https://github.com/PreMiD/Localization) to later be used within the `multiLanguage` setting is only allowed if the presence has already been released before and has aquired at least 1000 users.

## [**presence.ts**](https://docs.premid.app/en/dev/presence/class)

> Kód, který napíšete, **musí** být _přehledný_, _čitelný_ a všechny řetězce musí být gramaticky správně (gramatické chyby na webových stránkách mohou být ignorovány). 
> 
> {.is-warning}

> Každá Presence se řídí přísnými pravidly, které se budou kontrolovat během procesu ověřování Presence Několik doporučení můžete vidět dole - [TypeScript Plugin Recommendations for Strict Type Checking](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules) - [ESlint Recommendations](https://eslint.org/docs/rules) 
> 
> {.is-info}

Zde je seznam pravidel, která musíte při psaní Vašeho souboru `presence.ts` dodržet:

- Pro předejitím vzácným chybám **vždy** před deklarováním jiných proměnných deklarujte novou instanci `Presence` třídy. Toto není vyžadováno designem, takže to v budoucnu můžete odstranit.
- **Nikdy** nepoužívejte vlastní funkce, pokud [jsou dostupné jejich nativní varianty](https://docs.premid.app/dev/presence#files-explained). Tímto se ujišťuje, že změny v rozšíření se budou aplikovat i na Vaší presenci. Můžete používat cokoli jiného potřebujete, dokud to nenajdete v dokumentaci.
- Je **zakázáno** programovat presenci pro stránku a nepřidat podporu pro její primární jazyk (například, programovat YouTube presenci s podporou Portugalštiny a Japonštiny ale ne Angličtiny samotné).
- Pole `smallImageKey` a `smallImageText` jsou zamýšlena pro poskytování dodatečného/sekundárního obsahu (jako je `přehrávání/pauza` pro webové stránky, `prohlížení` pro normální stránky a ostatní), ne pro reklamování Discord profilů nebo cokoli jiného, co nesouvicí s PreMiD.
- **Nemáte** povoleno přistupovat k `localStorage`.
- Při přistupování k souborům cookie pro uložená data prosím přidejte ke klíči předponu `PMD_`.
- Pro `premid.app` nebo pro API webu presence můžete využívat pouze HTTP/HTTPS požadavky. Při používání externích domén budete muset vysvětlit proč.
- Po deklaraci data objectu presence **nenastavujte** pole v data objectu presence na undefined, namísto toho použijte klíčové slovo `delete` (například, namísto použití `data.startTimestamp = undefined` použijte `delete data.startTimestamp`).
- Je **zakázáno** programování presence, která mění funkčnost dané webové stránky. Toto se vztahuje na přidání, smazání nebo modifikování DOM prvků.

## [**tsconfig.json**](https://docs.premid.app/en/dev/presence/tsconfig)

> **Nesepisujte** vlastní `tsconfig.json` soubor. Použijte to, co bylo poskytnuto v [dokumentaci](https://docs.premid.app/en/dev/presence/tsconfig). 
> 
> {.is-warning}

# Úpravy

> You **must** change the version in the **metadata** to be a higher value from the previous version when making changes to either the **presence.ts**, **iframe.ts** or **metadata.json**. 
> 
> {.is-warning}

In some situations, presences may behave unexpectedly or could use some minor changes to improve their functionality. Here is a list of rules that you **must** follow while modifiying presences.

- You are **not** allowed to rewrite a presence or change its author. If the presence author was banned from the official server or hasn't made the required changes within a month, you may contact a reviewer to see if you can to rewrite the presence.
- If you make modifications to a presence and change at least a **quarter** of the presence's codebase, you are allowed to add yourself as a contributor. Contact a verifier for more information about this subject.   - If you make modifications to a presence and change at least a **quarter** of the presence's codebase, you are allowed to add yourself as a contributor. Contact a reviewer for more information about this subject.
-  Anyone may provide hotfixes to fix bugs; however, do **not** to make changes that are **not** required. Valid modifications include general fixes (code and typos), additions (descriptions and tags), missing files, etc. Do **not** change images if they are not outdated and are in specifications.

# Ověření

> **Všechen** napsaný kód bude zalicencován pod licencí `Mozilla Public License 2.0` 
> 
> {.is-info}

> If you need to contact someone, please use our official Discord server. All reviewers will have the `Reviewer` role on their profile. 
> 
> {.is-info}

> Please keep in mind that the reviewers work voluntarily and manage other repositories in addition to this one, your pull request may not get reviewed until hours or even days after it has been created. 
> 
> {.is-warning}

> **Always** have an up-to-date fork before creating your pull request. This will help limit false positives from the checks. 
> 
> {.is-warning}

The most important process of presence development is getting your presence on the store. This is done by making a [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) on GitHub on the `PreMiD/Presences` repository. Our reviewers will confirm that your presence is up to standards and will push it onto the store.

<div>
  <h2 style="font-size: 2rem; margin-bottom: 0;">Presence Reviewers</h2>
  <a href="https://github.com/Bas950"><img src="https://github.com/Bas950.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/Timeraa"><img src="https://github.com/Timeraa.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <a href="https://github.com/ririxichan"><img src="https://github.com/ririxichan.png?size=2048" width="48px" style="max-width:100%; border-radius: 50%;"/></a>
  <br />
</div>

## `Restrictions`

Repetitive offenses such as breaking guidelines, spamming pull requests, threats, or innapropriate behavior will get you banned from creating presences.

In this scenerio, the following changes will occur:

- Presences under your management will be transferred to the PreMiD bot or another user (reviewer decision). The application id for each presence will be recreated under the new owner's name.
- All of your issues and pull requests (presence creation, presence contribution, etc) created following the ban will be prompty closed.
- Tickets created under your name regarding presence development will be deleted.


## `Reviewing`

A few things you should know after opening a pull request:

- It takes 2 reviewers to merge a pull request.
- If a pull request is inactive for a period of 14 days, it will be promptly closed.
- All checks **must** be passed in order to merge.
- ⚠️ You **must** provide new, unaltered screenshots (taken by you) showing a side-by-side comparison of your profile and the website to prove that your presence works. _You are allowed to stitch screenshots together for viewing pleasure._ This applies for both creation and modification.
- ⚠️ You are also **required** to include screenshots of the presence settings in the extension if supplied. An example can be seen [here](https://imgur.com/a/OD3sj5R).

## `Checks`

![Checks](https://i.imgur.com/BCDZQe9.png)

Currently, a presence goes through 2 separate stages of checks. All of these checks help the reviewers determine whether your presence is suitable for deployment.

- `Codacy` is a bot that checks for code quality. If you ever receive errors for new issues, you are **required** to fix them.
- `Schema Validation` will scan your `metadata.json` file for any errors (for e.g., missing fields, invalid value types, etc.). If you ever see any new issues, you are also **required** to fix those. Adding a schema field to your `metadata.json` file will allow your text editor (if supported) to show you these errors during development.

## `Additional Rules`

- **Always** make sure to start your presence in the most appropriate folder, if its name starts with _any_ Latin letter then it must be under its alphabetical match (for e.g., `D/dアニメストア` or `G/Google`). Any other Unicode/non-Latin characters **must** be under the `#` folder (for e.g., `#/巴哈姆特`) and numbers under the `0-9` folder (for e.g., `0-9/4anime`).

After meeting all of the guidelines with the proper reviews and checks, your presence will be merged with the store.

# Příspěvky

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
