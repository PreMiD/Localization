---
title: Metadata.json
description: Contains basic data about the Presence
published: true
date: 2020-01-18T20:32:58.015Z
tags:
---

# Metadata.json

If you want to publish a presence to the store and load it via the extension, you should create the `metadata.json` file in your `presence.js` folder.

The example of that file can be found below.

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

## Understanding the metadata.json

That example looks really strange, huh? Don't worry, its not that hard to understand what each variable is for.

<table>
  <thead>
    <tr>
      <th style="text-align:left">变量</th>
      <th style="text-align:left">描述</th>
      <th style="text-align:left">Type</th>
      <th style="text-align:left">可选的</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>作者</b>
      </td>
      <td style="text-align:left">应该包含当前开发者的 <code>name</code> 和 <code>id</code> 的对象。 名称是您的 Discord 用户名，但没有标识符(#0000)。 用户 <code>id</code> 可以通过启用开发者
        模式和右键点击您的配置文件而从Discord复制.</td>
      <td style="text-align:left"><code>对象</code>
      </td>
      <td style="text-align:left"><code>否</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>贡献者</b>
      </td>
      <td style="text-align:left">应该包含当前开发者的 <code>name</code> 和 <code>id</code> 的对象。 名称是您的 Discord 用户名，但没有标识符(#0000)。 用户 <code>id</code> 可以通过启用开发者
        模式和右键点击您的配置文件而从Discord复制.</td>
      <td style="text-align:left"><code>数组&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>否</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>服务</b>
      </td>
      <td style="text-align:left">此存在支持的服务的标题。</td>
      <td style="text-align:left"><code>字符串</code>
      </td>
      <td style="text-align:left"><code>否</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>描述</b>
      </td>
      <td style="text-align:left">对于存在的小描述，如果您不想要，您可以使用服务描述
。 您的描述必须有关键值显示语言以及该特定语言的描述。 Make descriptions with the languages <i>that you know</i>, our translators will make changes to your metadata file.</td>
      <td style="text-align:left"><code>对象</code>
      </td>
      <td style="text-align:left"><code>否</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>网址</b>
      </td>
      <td style="text-align:left">URL of the service.<br><b>Example:</b><code>vk.com</code><br>
        <b>This url must match the url of the website as it will be used to detect wherever or not this is the website to inject the script to.</b>
      </td>
      <td style="text-align:left"><code>字符串，数组&lt;String&gt;</code>
      </td>
      <td style="text-align:left"><code>否</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b>
      </td>
      <td style="text-align:left">A regular expression string used to match urls.</td>
      <td style="text-align:left"><code>字符串</code>
      </td>
      <td style="text-align:left"><code>否</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>版本</b>
      </td>
      <td style="text-align:left">您的存在版本。</td>
      <td style="text-align:left"><code>字符串</code>
      </td>
      <td style="text-align:left"><code>否</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>徽标</b>
      </td>
      <td style="text-align:left">链接到服务&apos;s 标识符。</td>
      <td style="text-align:left"><code>字符串</code>
      </td>
      <td style="text-align:left"><code>否</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b>
      </td>
      <td style="text-align:left">链接到您的缩略图</td>
      <td style="text-align:left"><code>字符串</code>
      </td>
      <td style="text-align:left"><code>否</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>颜色</b>
      </td>
      <td style="text-align:left"><code>#十六进制</code> 值。 我们建议使用您的存在所支持的服务
        的主要颜色。</td>
      <td style="text-align:left"><code>字符串</code>
      </td>
      <td style="text-align:left"><code>否</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>标签</b>
      </td>
      <td style="text-align:left">带有标签的数组将帮助用户搜索您在网站上的存在。</td>
      <td
      style="text-align:left"><code>字符串，数组&lt;String&gt;</code>
        </td>
      <td style="text-align:left"><code>否</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>类别</b>
      </td>
      <td style="text-align:left">用于表示存在的类别的字符串。</td>
      <td style="text-align:left"><code>字符串</code>
      </td>
      <td style="text-align:left"><code>否</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b>
      </td>
      <td style="text-align:left">定义是否使用 <code>iFrames</code></td>
      <td style="text-align:left"><code>Boolean</code>
      </td>
      <td style="text-align:left"><code>否</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b>
      </td>
      <td style="text-align:left">选择要注入的 iframes 的正则表达式选择器。</td>
      <td style="text-align:left"><code>字符串</code>
      </td>
      <td style="text-align:left"><code>否</code>
      </td>
    </tr>
  </tbody>
</table>

## Regular Expressions

If you want to learn regular expressions, here are a few websites.

### Learning

• [RegexOne](https://regexone.com/) • [Regular Expressions Info](https://www.regular-expressions.info/tutorial.html)

### Testing

• [Regexr](https://regexr.com/) • [Regex101](https://regex101.com/)

## Presence categories

When making your presence, you must specify a category which the presence falls under. This is a compiled list of the categories that you can use.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Category</th>
      <th style="text-align:left">Name</th>
      <th style="text-align:left">描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>动漫</b></td>
      <td style="text-align:left"><b>动漫</b></td>
      <td style="text-align:left">Anything related to anime, from forums to video streaming platforms.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>游戏</b></td>
    <td style="text-align:left"><b>游戏</b></td>
      <td style="text-align:left">Any website that has game related content, such as <code>Kahoot</code> or <code>Skribbl.io</code></td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>音乐</b></td>
    <td style="text-align:left"><b>音乐</b></td>
      <td style="text-align:left">These are websites that offer music related content, whether that be streaming or downloading.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>社交</b></td>
        <td style="text-align:left"><b>社交</b></td>
      <td style="text-align:left">Websites that are used for the purpose of creating and sharing content or  for participating in other forms of social networking.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>videos</b></td>
        <td style="text-align:left"><b>视频与直播</b></td>
      <td style="text-align:left">Websites that serve the purpose of providing videos and streams.</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>其他</b></td>
    <td style="text-align:left"><b>其他</b></td>
      <td style="text-align:left">Anything that does not fall under a specific category listed above.</td>
      </td>
    </tr>
  </tbody>
</table>