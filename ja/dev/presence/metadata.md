---
title: Metadata.json
description: プレゼンスに関する基本情報を含むファイル
published: true
date: 2021-02-07T17:12:06.799Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:52.965Z
---

# Metadata.json

If you want to publish a presence to the store and load it via the extension, you should create the `metadata.json` file in your `dist` folder.

An example of that file can be found below.

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

## metadata.jsonを理解する

さっきの一例が分かりにくい？ 気にするな！ これらの変数が何に使われているかなんてすぐ分かるさ。

<table>
  <thead>
    <tr>
      <th style="text-align:left">変数</th>
      <th style="text-align:left">概要</th>
      <th style="text-align:left">Type</th>
      <th style="text-align:left">省略可能</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>author</b></td>
      <td style="text-align:left">プレゼンスの開発者の<code>名前</code>と、<code>ユーザーid</code>をObjectに含む必要があります。 <code>name</code>はあなたのDiscordタグから識別子(#0000)を取ったもので、 <code>id</code>はDiscord上で開発者モードをオンにし、プロフィールを右クリックするとコピーできるものです。</td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>不可</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>contributors</b></td>
      <td style="text-align:left">プレゼンスの開発者の<code>name</code>と、ユーザーの<code>id</code>をObjectに含む必要があります。 <code>name</code>はあなたのDiscordタグから識別子(#0000)を取ったもので、 ユーザーの<code>id</code>はDiscord上で開発者モードをオンにし、プロフィールを右クリックするとコピーできます。</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>可</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>service</b></td>
      <td style="text-align:left">このプレゼンスが対応しているサービスの名称です。</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>不可</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>altnames</b></td>
      <td style="text-align:left">追加することで、プレゼンスを複数の名前で検索することができるようになります。<br>
      複数の言語で複数の名前がある場合（例:"Pokémon"と"포켓몬스터"）や、<br>
      特殊な記号がある場合（例:"Pokémon"と"Pokemon"）に使用できます。</td>
      <td style="text-align:left"><code>Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>可</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>description</b></td>
      <td style="text-align:left">Description of the service <b>NOT</b> the presence. 説明文がどの言語かを示すコードと、その言語で書かれた説明文が必要です。 <i>あなたが書ける言語</i>だけで説明文を書いてください。 PreMiDの翻訳者があなたのmetadataファイルを後で編集します。 View the category for presence languages for a list. </td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>不可</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b></td>
      <td style="text-align:left">URL of the service.<br>
      <b>Example:</b><code>vk.com</code><br>
      <b>This url must match the url of the website as it will be used to detect wherever or not this is the website to inject the script to. This may only be used as an array when there are more than one urls.</b></td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>不可</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b></td>
      <td style="text-align:left">URLを検出するのに使用する正規表現です。</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>可</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>version</b></td>
      <td style="text-align:left">プレゼンスのバージョンです。</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>不可</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>logo</b></td>
      <td style="text-align:left">サービスのロゴの画像のURLです。</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>不可</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b></td>
      <td style="text-align:left">あなたのプレゼンスのサムネイルの画像のURLです。</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>不可</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>color</b></td>
      <td style="text-align:left"><code>#HEX</code>コードで指定: あなたのプレゼンスが対応しているサービスのイメージ色を使うとよいでしょう。</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>不可</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>tags</b></td>
      <td style="text-align:left">タグの配列を指定してください。タグは、ウェブサイト上でプレゼンスを見つけるのに役立ちます。</td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>不可</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>category</b></td>
      <td style="text-align:left">プレゼンスが当てはまるカテゴリー名の文字列です。</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>不可</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b></td>
      <td style="text-align:left"><code>iFrames</code>が使われているかどうかの指定</td>
      <td style="text-align:left"><code>Boolean</code></td>
      <td style="text-align:left"><code>可</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b></td>
      <td style="text-align:left">挿入するiframeを検出するのに使用する正規表現</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>可</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>readLogs</b></td>
      <td style="text-align:left">Defines whether the extension should be reading logs.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>可</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>settings</b></td>
      <td style="text-align:left">An array of settings the user can change</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>可</code></td>
    </tr>
  </tbody>
</table>

## 正規表現

正規表現を覚えたい？じゃあこのサイトを見よう！

#### 習得

• [Quick Starter Video](https://youtu.be/sXQxhojSdZM) • [RegexOne](https://regexone.com/) • [Regular Expressions Info](https://www.regular-expressions.info/tutorial.html)

#### 試用

• [Regexr](https://regexr.com/) • [Regex101](https://regex101.com/)

## Presence languages

PreMiD is a polygot service, meaning there are a multitude of languages involved to connect users around the globe. A full list of languages can be found with this [API endpoint](https://api.premid.app/v2/langFile/list). To customize your presence even more you can allow users to select their presence display language see [`multiLanguage`](#multilanguage) for more.

## Presence settings
Setup interactive settings so users can customize the presence!
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

#### 説明

The `multiLanguage` setting is used to allow users to manually select the language they want to presence to be shown in. This requires you to use strings from our [API](https://api.premid.app/v2/langFile/presence/en), for information on how to add strings click [here](/dev/presence/metadata/adding-new-strings).

#### Setup

The `multiLanguage` setting is a special case, it doesn't require a `title` nor `icon` nor `value` or `values` like other settings but it does require you some more things to setup!

The `multiLanguage` key can be set to the following:

`true`: use this if you are only going to use strings of the `general.json` file and the `<service>.json` file of the [Localization Repository](https://github.com/PreMiD/Localization/tree/master/src/Presence). `string`: name of the file excluding the extension (.json) inside the [Localization Repository](https://github.com/PreMiD/Localization/tree/master/src/Presence) (excluding the `general` file, since it's always loaded). Only common languages of both the `general` and inputted file will be listed. `Array<String>`: if you are using more than one file inside the [Localization Repository](https://github.com/PreMiD/Localization/tree/master/src/Presence) you can specify all the values in an array (excluding the `general` file, since it's always loaded). Only common languages of all the files will be listed.

#### Adding new strings

##### プロジェクトをクローンする

1. ターミナルを開き `git clone https://github.com/PreMiD/Localization` と入力する
2. 任意のフォルダーを選択する
3. ソースコードエディタで開く

##### Creating the file

1. Go into the `src` folder.
2. Go into the `Presence` folder.
3. Make a file named `<service>.json`. (Service is the **name** (not an URL) in lowercase of the service you want to support.)

##### Adding the strings

Each `string` is an `Object` where from the name starts with the service name and then the so called stringName with a dot in between them.

The stringName is a 1 word identifier of the message.

The `Object` has 2 properties; `message` and `description`. `message` is the text that needs to be translated. `description` is a description of the message to help our translators understand what they are translating.

**Note:** Do not add any duplicate strings. (This includes strings out of the `general.json` file but not the other files.)

Visualization of the the file:

```typescript
{
  "<service>.<stringName>": {
    "message": "Text that needs to be translated.",
    "description": "This explains what the message above is."
  },
  "<service>.<stringName>": {
    "message": "Text that needs to be translated.",
    "description": "This explains what the message above is."
  }
}
```

After you have fully made the file with strings you can create a Pull Request on the [Localization Repository](https://github.com/PreMiD/Localization), in the description you **must** include a link to your Pull Request of the presence updated using these new strings from the [Presence Repository](https://github.com/PreMiD/Presences).

#### Default keys
The keys you didn't have to set are automatically set to the following: `title`: "Language" **Note:** This is translated into their default language (browser language). `icon`: "fas fa-language" ([Preview](https://fontawesome.com/icons/language)) `value`: **Set to their browser language if it is available (100% translated), otherwise English.** `values`: **Set to the available languages (languages that have it 100% translated).**

**Note:** These are in no way changeable.

### メソッド

Use the following methods to get settings info in your presence files:
#### `getSetting(String)`
設定の値を返します。
```typescript
const setting = await presence.getSetting("pdexID"); //Replace pdexID with the id of the setting
console.log(setting); // This will log the value of the setting
```

#### `hideSetting(String)`
Hides given setting.
```typescript
presence.hideSetting("pdexID"); //Replace pdexID with the id of the setting
```

#### `showSetting(String)`
Shows given setting (Only works if the setting was already hidden).
```typescript
presence.showSetting("pdexID"); //Replace pdexID with the id of the setting
```

## Presenceのカテゴリー

もしプレゼンスを作りたいなら、プレゼンスのカテゴリを指定する必要があります。 使用可能なすべてのカテゴリーは以下の通りです。

<table>
  <thead>
    <tr>
      <th style="text-align:left">カテゴリー</th>
      <th style="text-align:left">名前</th>
      <th style="text-align:left">概要</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>anime</b></td>
      <td style="text-align:left"><b>アニメ</b></td>
      <td style="text-align:left">アニメに関する掲示板や動画サイトなどすべてのもの</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>games</b></td>
      <td style="text-align:left"><b>ゲーム</b></td>
      <td style="text-align:left"><code>Kahoot</code>や<code>Skribbl.io</code>のようなゲーム関連のウェブサイト</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>music</b></td>
      <td style="text-align:left"><b>音楽</b></td>
      <td style="text-align:left">これは、ストリーミングやダウンロードなど、音楽関連のコンテンツを提供するサイト</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>socials</b></td>
        <td style="text-align:left"><b>SNS</b></td>
      <td style="text-align:left">コンテンツの作成と共有や、その他の方法でSNSに関わるウェブサイト</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>videos</b></td>
        <td style="text-align:left"><b>動画と配信</b></td>
      <td style="text-align:left">動画や配信の提供が目的のウェブサイト</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>other</b></td>
      <td style="text-align:left"><b>その他</b></td>
      <td style="text-align:left">以上のカテゴリーのどれにも当てはまらないもの</td>
    </tr>
  </tbody>
</table>

