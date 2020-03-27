---
title: Metadata.json
description: プレゼンスに関する基本情報を含むファイル
published: true
date: 2020-02-22T23:18:54.250Z
tags:
---

# Metadata.json

もしあなたがプレゼンスをストアに公開し拡張機能を使って読み込む場合は `presence.js`フォルダの中に`metadata.json`を作る必要があります

ファイルの構成の例は以下の通りです:

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
  "regExp": "REGEXP",
  "iFrameRegExp": "REGEXP",
  "version": "VERSION",
  "logo": "URL",
  "thumbnail": "URL",
  "color": "#45A8FC",
  "tags": ["CATEGORY", "TAG"],
  "category": "CATEGORY",
  "iframe": false
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
      <td style="text-align:left"><b>author</b>
      </td>
      <td style="text-align:left">プレゼンスの開発者の<code>name</code>と<code>id</code>が入ったオブジェクトを指定。 名前はあなたのDiscordのユーザーネームから識別子(#0000)を取ったもの、 ユーザーの<code>id</code>はDiscord上で開発者モードをオンにし、プロフィールを右クリックするとコピーできます。</td>
      <td style="text-align:left"><code>Object</code>
      </td>
      <td style="text-align:left"><code>不可</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>contributors</b>
      </td>
      <td style="text-align:left">プレゼンスの開発者の<code>name</code>と<code>id</code>が入ったオブジェクトを指定。 名前はあなたのDiscordのユーザーネームから識別子(#0000)を取ったもの、 ユーザーの<code>id</code>はDiscord上で開発者モードをオンにし、プロフィールを右クリックするとコピーできます。</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>可</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>service</b>
      </td>
      <td style="text-align:left">このプレゼンスが対応しているサービスの名称です。</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>不可</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>description</b>
      </td>
      <td style="text-align:left">プレゼンスの短い説明です。 何も思いつかない場合、サービスの説明文を引用してもよいです。 説明文がどの言語かを示すコードと、その言語で書かれた説明文が必要です。 <i>あなたが書ける言語</i>だけ説明文を書いてください。 PreMiDの翻訳者があなたのmetadataファイルを後に編集します。 View the category for presence languages for a list. </td>
      <td style="text-align:left"><code>Object</code>
      </td>
      <td style="text-align:left"><code>不可</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b>
      </td>
      <td style="text-align:left">URL of the service.<br><b>Example:</b><code>vk.com</code><br>
        <b>This url must match the url of the website as it will be used to detect wherever or not this is the website to inject the script to. This may only be used as an array when there are more than one urls.</b>
      </td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code>
      </td>
      <td style="text-align:left"><code>不可</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b>
      </td>
      <td style="text-align:left">URLを検出するのに使用する正規表現です。</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>可</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>version</b>
      </td>
      <td style="text-align:left">プレゼンスのバージョンです。</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>不可</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>logo</b>
      </td>
      <td style="text-align:left">サービスのロゴの画像のURLです。</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>不可</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b>
      </td>
      <td style="text-align:left">あなたのプレゼンスのサムネイルの画像のURLです。</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>不可</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>color</b>
      </td>
      <td style="text-align:left"><code>#HEX</code>コードで指定: あなたのプレゼンスが対応しているサービスのイメージ色を使うとよいでしょう。</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>不可</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>tags</b>
      </td>
      <td style="text-align:left">タグの配列を指定してください。タグは、ウェブサイト上でプレゼンスを見つけるのに役立ちます。</td>
      <td
      style="text-align:left"><code>String, Array&lt;String&gt;</code>
        </td>
      <td style="text-align:left"><code>不可</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>category</b>
      </td>
      <td style="text-align:left">プレゼンスが当てはまるカテゴリー名の文字列です。</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>不可</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b>
      </td>
      <td style="text-align:left"><code>iFrames</code>が使われているかどうかの指定</td>
      <td style="text-align:left"><code>Boolean</code>
      </td>
      <td style="text-align:left"><code>可</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b>
      </td>
      <td style="text-align:left">挿入するiframeを検出するのに使用する正規表現</td>
      <td style="text-align:left"><code>String</code>
      </td>
      <td style="text-align:left"><code>可</code>
      </td>
    </tr>
  </tbody>
</table>

## 正規表現

正規表現を覚えたい？じゃあこのサイトを見よう！

#### 習得

• [RegexOne](https://regexone.com/) • [Regular Expressions Info](https://www.regular-expressions.info/tutorial.html)

#### 試用

• [Regexr](https://regexr.com/) • [Regex101](https://regex101.com/)

## Presence languages

PreMiD is a polygot service, meaning there are a multitude of languages involved to connect users around the globe. A full list of languages can be found with this [API endpoint](https://api.premid.app/v2/langFile/list).

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
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>games</b></td>
    <td style="text-align:left"><b>ゲーム</b></td>
      <td style="text-align:left"><code>Kahoot</code>や<code>Skribbl.io</code>のようなゲーム関連のウェブサイト</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>music</b></td>
    <td style="text-align:left"><b>音楽</b></td>
      <td style="text-align:left">これは、ストリーミングやダウンロードなど、音楽関連のコンテンツを提供するサイト</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>socials</b></td>
        <td style="text-align:left"><b>SNS</b></td>
      <td style="text-align:left">コンテンツの作成と共有や、その他の方法でSNSに関わるウェブサイト</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>videos</b></td>
        <td style="text-align:left"><b>動画と配信</b></td>
      <td style="text-align:left">動画や配信の提供が目的のウェブサイト</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>other</b></td>
    <td style="text-align:left"><b>その他</b></td>
      <td style="text-align:left">以上のカテゴリーのどれにも当てはまらないもの</td>
      </td>
    </tr>
  </tbody>
</table>