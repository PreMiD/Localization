---
title: 梅塔数据.json
description: 包含关于Presence的基本数据
published: true
date: 2020-01-19T23:42:34.658Z
tags:
---

# 梅塔数据.json

如果您想要将存在发布到商店并通过扩展加载它，您应该创建 `元数据。 您 <code>presence.js` 文件夹中的son</code> 文件。

该文件的例子可在下面找到。

```javascript
主席:
  "author":
    "name": "USER",
    "id": "ID"
  },
  "贡献者": [□
    "name": "USER",
    "id": "ID"
  }],
  "service": "服务",
  "description": vol.
    "en": "DESCRIPTION"
  },
  "url": "URL",
  "regExp": "REGEXP",
  "iFrameRegExp": "REGEXP",
  "version": "VERSION",
  "logo": "URL",
  "缩略图": "URL",
  "color": "#45A8FC",
  "tags": ["CATEGORY", "TAG",
  "category": "Category",
  "iframe": false
}
```

## 了解metadata.json

这个例子看起来真是奇怪的，是好吗？ 别担心，它不是很难理解每个变量的目的。

<table>
  <thead>
    <tr>
      <th style="text-align:left">变量</th>
      <th style="text-align:left">描述</th>
      <th style="text-align:left">类型</th>
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
      <td style="text-align:left">服务URL。<br><b>示例：</b><code>vk。 om</code><br>
        <b>此网址必须匹配网站的 url ，因为它将用于检测网站的哪里是否是要注入脚本。</b>
      </td>
      <td style="text-align:left"><code>字符串，数组&lt;String&gt;</code>
      </td>
      <td style="text-align:left"><code>否</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b>
      </td>
      <td style="text-align:left">用于匹配url的正则表达式字符串。</td>
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

## 正则表达式

如果您想学习正则表达式，这里是几个网站。

### 学习

• [RegexOne](https://regexone.com/) • [正则表达式信息](https://www.regular-expressions.info/tutorial.html)

### 测试

• [Regexr](https://regexr.com/) • [Regex101](https://regex101.com/)

## 存在类别

当您出现时，您必须指定一个存在的类别。 这是您可以使用的分类编译列表。

<table>
  <thead>
    <tr>
      <th style="text-align:left">类别</th>
      <th style="text-align:left">名称</th>
      <th style="text-align:left">描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>动漫</b></td>
      <td style="text-align:left"><b>动漫</b></td>
      <td style="text-align:left">任何与动画相关的东西，从论坛到视频流平台。</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>游戏</b></td>
    <td style="text-align:left"><b>游戏</b></td>
      <td style="text-align:left">任何具有相关内容的网站，比如 <code>Kahoot</code> or <code>Skribbl.io</code></td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>音乐</b></td>
    <td style="text-align:left"><b>音乐</b></td>
      <td style="text-align:left">这些是提供音乐相关内容的网站，无论是流媒体还是下载。</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>社交</b></td>
        <td style="text-align:left"><b>社交</b></td>
      <td style="text-align:left">用于创建和分享内容或参与其他形式社会网络的网站。</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>视频</b></td>
        <td style="text-align:left"><b>视频与直播</b></td>
      <td style="text-align:left">提供视频和流的网站。</td>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>其他</b></td>
    <td style="text-align:left"><b>其他</b></td>
      <td style="text-align:left">任何不属于上文所列特定类别的行为。</td>
      </td>
    </tr>
  </tbody>
</table>