---
title: 梅塔数据.json
description: 包含关于Presence的基本数据
published: true
date: 2020-12-26T15:03:41.542Z
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

## 了解metadata.json

这个例子看起来真是奇怪的，是好吗？ 别担心，它不是很难理解每个变量的目的。

<table>
  <thead>
    <tr>
      <th style="text-align:left">Variable</th>
      <th style="text-align:left">描述</th>
      <th style="text-align:left">Type</th>
      <th style="text-align:left">可选的</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>作者</b></td>
      <td style="text-align:left">Should contain an Object with the <code>name</code> and <code>id</code> of the presence developer. 名称是您的 Discord 用户名，但没有标识符(#0000)。 用户 <code>id</code> 可以通过启用开发者
        模式和右键点击您的配置文件而从Discord复制.</td>
      <td style="text-align:left"><code>对象</code></td>
      <td style="text-align:left"><code>否</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>贡献者</b></td>
      <td style="text-align:left">Should contain an Object with the <code>name</code> and <code>id</code> of the contributor. Name is your Discord username without the identifier(#0000). User <code>id</code> can be copied from Discord by enabling developer
        mode and right-clicking on your profile.</td>
      <td style="text-align:left"><code>数组&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>否</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>服务</b></td>
      <td style="text-align:left">此存在支持的服务的标题。</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>altnames</b></td>
      <td style="text-align:left">Be able to search the presence using an alternative name.<br>
      Meant to be used for presences that have different names in different languages (e.g. Pokémon and 포켓몬스터).<br>
      You can also use it for presences that have special characters so you don't have to type those (e.g. Pokémon and Pokemon).</td>
      <td style="text-align:left"><code>Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>Yes</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>描述</b></td>
      <td style="text-align:left">Description of the service <b>NOT</b> the presence. 您的描述必须有关键值显示语言以及该特定语言的描述。 Make descriptions with the languages <i>that you know</i>, our translators will make changes to your metadata file. View the category for presence languages for a list. </td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>网址</b></td>
      <td style="text-align:left">URL of the service.<br>
      <b>Example:</b><code>vk.com</code><br>
      <b>This url must match the url of the website as it will be used to detect wherever or not this is the website to inject the script to. This may only be used as an array when there are more than one urls.</b></td>
      <td style="text-align:left"><code>字符串，数组&lt;String&gt;</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b></td>
      <td style="text-align:left">A regular expression string used to match urls.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Yes</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>版本</b></td>
      <td style="text-align:left">您的存在版本。</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>徽标</b></td>
      <td style="text-align:left">链接到服务&apos;s 标识符。</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b></td>
      <td style="text-align:left">链接到您的缩略图</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>颜色</b></td>
      <td style="text-align:left"><code>#十六进制</code> 值。 我们建议使用您的存在所支持的服务
        的主要颜色。</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>标签</b></td>
      <td style="text-align:left">带有标签的数组将帮助用户搜索您在网站上的存在。</td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>类别</b></td>
      <td style="text-align:left">用于表示存在的类别的字符串。</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b></td>
      <td style="text-align:left">定义是否使用 <code>iFrames</code></td>
      <td style="text-align:left"><code>Boolean</code></td>
      <td style="text-align:left"><code>Yes</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b></td>
      <td style="text-align:left">选择要注入的 iframes 的正则表达式选择器。</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Yes</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>readLogs</b></td>
      <td style="text-align:left">Defines whether the extension should be reading logs.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Yes</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>settings</b></td>
      <td style="text-align:left">An array of settings the user can change</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>Yes</code></td>
    </tr>
  </tbody>
</table>

## 正则表达式

如果您想学习正则表达式，这里是几个网站。

#### Learning

• [Quick Starter Video](https://youtu.be/sXQxhojSdZM) • [RegexOne](https://regexone.com/) • [Regular Expressions Info](https://www.regular-expressions.info/tutorial.html)

#### Testing

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

#### Introduction

The `multiLanguage` setting is used to allow users to manually select the language they want to presence to be shown in. This requires you to use strings from our [API](https://api.premid.app/v2/langFile/presence/en), for information on how to add strings click [here](/dev/presence/metadata/adding-new-strings).

#### Setup

The `multiLanguage` setting is a special case, it doesn't require a `title` nor `icon` nor `value` or `values` like other settings but it does require you some more things to setup!

The `multiLanguage` key can be set to the following:

`true`: use this if you are only going to use strings of the `general.json` file and the `<service>.json` file of the [Localization Repository](https://github.com/PreMiD/Localization/tree/master/src/Presence). `string`: name of the file excluding the extension (.json) inside the [Localization Repository](https://github.com/PreMiD/Localization/tree/master/src/Presence) (excluding the `general` file, since it's always loaded). Only common languages of both the `general` and inputted file will be listed. `Array<String>`: if you are using more than one file inside the [Localization Repository](https://github.com/PreMiD/Localization/tree/master/src/Presence) you can specify all the values in an array (excluding the `general` file, since it's always loaded). Only common languages of all the files will be listed.

#### Adding new strings

##### Cloning the project

1. 打开个终端，然后在输入: `git clone https://github.com/PreMiD/Localization`
2. Choose a folder of your choice.
3. Open it in your code editor.

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

### Methods

Use the following methods to get settings info in your presence files:
#### `getSetting(String)`
Returns value of setting.
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

## Presence categories

When making your presence, you must specify a category which the presence falls under. This is a compiled list of the categories that you can use.

<table>
  <thead>
    <tr>
      <th style="text-align:left">类别</th>
      <th style="text-align:left">名称</th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>动漫</b></td>
      <td style="text-align:left"><b>Anime</b></td>
      <td style="text-align:left">任何与动画相关的东西，从论坛到视频流平台。</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>游戏</b></td>
      <td style="text-align:left"><b>Games</b></td>
      <td style="text-align:left">任何具有相关内容的网站，比如 <code>Kahoot</code> or <code>Skribbl.io</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>音乐</b></td>
      <td style="text-align:left"><b>Music</b></td>
      <td style="text-align:left">这些是提供音乐相关内容的网站，无论是流媒体还是下载。</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>社交</b></td>
        <td style="text-align:left"><b>Socials</b></td>
      <td style="text-align:left">用于创建和分享内容或参与其他形式社会网络的网站。</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>视频</b></td>
        <td style="text-align:left"><b>Videos & Streams</b></td>
      <td style="text-align:left">提供视频和流的网站。</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>其他</b></td>
      <td style="text-align:left"><b>Other</b></td>
      <td style="text-align:left">任何不属于上文所列特定类别的行为。</td>
    </tr>
  </tbody>
</table>

