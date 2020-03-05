---
title: Presence 开发
description:
published: true
date: 2020-02-08T18：36：25.201Z
tags:
---

> 所有存在现在都存储在这里：https://github.com/PreMiD/Presences 
> 
> {.is-info}

版本 `2.x` 介绍了 [存在商店](https://premid.app/store)。 用户现在可以通过 [网站](https://premid.app/) 的用户界面手动添加和移除他们最喜欢的存在。

# 准则
> 如果您没有遵循所有的准则，您的存在或拉取请求将被从github中删除。 
> 
> {.is-danger}

## 设定

在您开始工作前请记住以下列表。
- 拉取请求必须完成，您需要有一个适当的文件结构。 包含 `dist` 文件夹， `presence.js` 文件，以及 `metadata.json` 文件。
- The presence **must** be related to the website you have chosen.
- 这种存在绝不能是任何非法网站。 这些包括应激剂、药物、儿童猪等...
- 存在的元数据必须有很好的写入内容，包括有效的标题和描述。
- 您所包含的媒体(图标/缩略图)必须与网站相关联，并且应当从大小和质量上易懂。
- 文件结构必须清理和管理，没有随机的文件无法为存在的功能提供任何帮助。
- **不能** 有任何恶意的存在。 这些包括偷窃/泄漏私人信息，对网站行为产生不利影响，等等...
- 如果您设计了网站的存在，而网站会在将来发生更改， 您 **ARE** 负责再次更新存在以按预期工作. 如果您没有在可接受的时间范围内修复它， 其他存在的开发者被允许 **覆盖** 您的存在以适应更改。
- 必须在发表之前对存在进行测试，以确认一切都如预期的那样有效。
- 您的存在必须有SFW图像和描述，不管它是否为 NSFW。 如果您的存在是关于 `nsfw` 网站，请将 `nsfw` 标签添加到您的元数据中。
- 您的存在必须 **不是** 的免费域名或主机 (例如.TK, [所有免费域名], . 如果出示证据表明它是一个付费域，就可以做出例外处理。
- `smallImageKey` and `smallimageText` 字段是为视频站点提供额外的/次要环境(例如"播放"/"已暂停")。 “浏览”常规站点和其他案例)。 您不能推广Discord配置文件或任何与PreMiD无关的内容。
- 不过，标识的要求为512px，缩略图为1:1（平方）。 应该是 [宽促销卡](https://i.imgur.com/3QfIc5v.jpg) 或简单 [屏幕截图](https://i.imgur.com/OAcBmwW.png) 如果第一个不可用。
- 存在至少应有一种标记，这是一种设计上的要求，今后可能是可选择的。
- `url` 字段不能包含 `http:/` 或 `https://` `https://www.google.com/search?gws_rd=ssl` 只有 `www.google.com` 在 `url` field)。
- 描述和标签应该总是以数组为单位，即使只有一个元素。 然而， `url` 字段只应该是一个字符串，如果它是一个域。
- 不断更改 API /域的不稳定站点， 随机的 HTML 元素或刚刚处于重型开发状态，不允许并将从商店中移除。

## 修改

在某些情况下，存在可能出乎意料地行事，或可能利用一些微小的变化来改进其功能。 这是您必须遵循的编译列表才能修改存在。
- 您无权更改存在的创建者。 这只适用于您被允许重写它。 您可以将自己添加为 [贡献者](/dev/presence/metadata)。
- 请确保修改是有用的。 这些可能包括修复(代码和轮胎)、添加(描述和标签)等...
- 确认您的更改在发布前起作用。 不要在不知道您的更改结果的情况下创建合并请求。
- 除非经 `Presence Verifier` 或员工允许，不要重划或覆盖一个存在。

# 验证
> 当您提出有关添加或修改现有存在的合并请求时，您必须包含屏幕截图。 然而，对存在的元数据/tsconfig 的修改不需要屏幕截图。 *您的截图必须用拉取请求直接上传到 github ，不要使用第三方图像共享网站。* 
> 
> {.is-danger}

为了让你的存在能够到达商店，它必须在github上通过一个过程来确认它是否如预期的那样起作用。 当您提出拉取请求时，这里有几件事需要寻找。

我们的存在验证团队有自己的角色，寻找Discord服务器上的 `Presence 验证器` 来了解谁参与了操作。

1. 确认您的存在符合标准需要两个验证器。 如果你碰巧获得更改请求，请做出适当的努力来修复它或它不会被添加。
2. 如果我们请求更改且您的合并请求超过 **7 天的不活动** 而不做必要的修改。 我们将被迫关闭它。
3. 您可以对在其他用户帮助下做出的更改进行屏幕截图。 (例如, 其作者, 如果你出于任何原因不能访问它).
4. 如果它是更新或补丁，屏幕截图必须显示新的添加正常工作，而不是以前的拉取请求中的任何旧功能。
5. 提供的屏幕截图应该是真实的，而不是编辑的。
6. 任何被合并到这个资源库的贡献代码都将被授权在 **Mozilla 公共许可协议2.0** 中。


在所有正确的评论完成后，您的拉取请求将与商店合并。

# 结构 (TypeScript)
您可以选择是否使用 [JavaScript](https://www.javascript.com/) 或  [TypeScript](https://www.typescriptlang.org/) 编码您的Presence。 [TypeScript](https://www.typescriptlang.org/) 有一些额外的香料类型定义，因此修复和识别bug更加容易。 如果您只想使用 [JavaScript](https://www.javascript.com/) ，您可以跳到 [结构 (JavaScript)](/dev/presence#structure-javascript)。

## 安装
1. Install [Git](https://git-scm.com/).
2. 安装 [节点](https://nodejs.org/en/) (带有 [npm](https://www.npmjs.com/)).
3. 安装 [TypeScript](https://www.typescriptlang.org/index.html#download-links) (打开终端和 `npm install -g typescript`).

## 克隆项目
1. 打开终端并输入 `git 克隆https://github.com/PreMiD/Presences`。
2. 选择一个文件夹。
3. 在你的代码编辑器中打开它。

## 创建文件夹和文件

1. 创建您想要支持的服务的 **名称** (而不是URL) 的文件夹。
2. 在其中创建 `存在。ts` 和 `tsconfg.json` 文件。
3. 在内边创建一个名为 `的文件夹`
4. 在 `dist` 文件夹中创建 `metadata.json` 文件。

## 在 tsconfig.json 文件中填充

请在 `tsconfg.json` 文件中放入以下代码。
```javascript
主席:
  "extends": "../tsconfig.json",
  "compilerOptions":
    "outDir": "./dist/"
  }
}
```
要了解更多关于 TypeScript 配置的信息，请点击 [这里](/dev/presence/tsconfig)。

## 填写metadata.json 文件

Click [here](/dev/presence#filling-in-the-metadatajson-file-2) to see how to fill it in. 您将能够轻松地在解释的底部重新点击。

We've made a `metadata.json` file creator for the lazy peeps [here](https://eggsy.codes/projects/premid/mdcreator).

## 入门开始

```javascript
var presence = new Presence({
    clientId: "000000000000000000", //The client ID of the Application created at https://discordapp.com/developers/applications
    mediaKeys: false //Enable use and detection of media key presses
}),

strings = presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
    //You can use this to get translated strings
});

/*

function myOutsideHeavyLiftingFunction(){
    //Grab and process all your data here

    // element grabs //
    // api calls //
    // variable sets //
}

setInterval(10000, myOutsideHeavyLiftingFunction); 
//Run the function seperate from the UpdateData event every 10 seconds to get and set the variables which UpdateData picks up

*/


presence.on("UpdateData", async () => {
    /*UpdateData is always firing, and therefore should be used as your refresh cycle, or `tick`. 在可能的情况下，这被称作是第二次的。

    建议在这个事件函数之外设置另一个函数，这个函数会改变变量值，如果你调用一个 API 的数据，就会进行重提。 /

    var presenceData = Power
        largiveImageKey: "key", /*关于存在的大图像的钥匙(文件名)。 这些已上传并在您的应用程序的 Rich Presence 部分中命名。 名称为 Art Assets*/
        smallImageKey: "key", /* 大图像的关键(文件名) 上的存在。 These are uploaded and named in the Rich Presence section of your application, called Art Assets*/
        smallImageText: "Some hover text", //The text which is displayed when hovering over the small image
        details: "Browsing Page Name", //The upper section of the presence text
        state: "Reading section A", //The lower section of the presence text
        startTimestamp: 1577232000, //The unix epoch timestamp for when to start counting from
        endTimestamp: 1577151472000 //If you want to show Time Left instead of Elapsed, this is the unix epoch timestamp at which the timer ends
    }; /*Optionally you can set a largeImageKey here and change the rest as variable subproperties, for example presenceSata.type = "blahblah"; type examples: details, state, etc.*/

    if (presenceData.details == null) {
        //This will fire if you do not set presence details
        presence.setTrayTitle(); //Clears the tray title for mac users
        presence.setActivity(); /*Update the presence with no data, therefore clearing it and making the large image the Discord Application icon, and the text the Discord Application name*/
    } else {
        //This will fire if you set presence details
        presence.setActivity(presenceData); //Update the presence with all the values from the presenceData object
    }
});
```
您可以将此文件复制到您的 `存在。ts` 文件并编辑值。 设置所有值都是在数据更新事件中完成的。

例如，我们建议看一看1337x或9GAG。

要了解更多关于Presence类的信息，请点击 [这里](/dev/presence/class)。

## 无法获取特定数据？！

许多网站正在使用 [iframe](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([内嵌框架](https://en.wikipedia.org/wiki/HTML_element#Frames))。 这些html 标签可以包含多个来源，如视频。 但它们并非每次都有意义。 有些是隐藏的，有些没有被积极使用。 检查您是否可以提取您需要的信息，而在您做不必要的工作之前不需要这些信息。

1. 通过浏览器控制台检查他们(请确保您在 **元素** 标签上)。
2. 搜索 (<kbd>CTRL</kbd>+<kbd>F</kbd> (Windows) 或 <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS))。
3. 执行 `文档.querySelectorAll("iframe")`

如果您发现您的数据在 iFrame 中，您需要执行以下操作：
1. 创建 `iframe.ts` 文件。
2. 在您的元数据文件中将 iFrame 设置为 `true`。
3. 填写您的 iFrame 文件。
```javascript
var iframe = 新的 iFrame();
iframe n("更新数据", async () => format@@
  /*
  获取你需要从 iFrame 保存它们的所有数据到变量
  然后使用 iframe 发送它们。 结束
  */
  iframe.send(* / 正在发送数据
    video: video,
    time: video). 持续时间
  }； 
})；
```
4. 让您的存在文件从 iFrame 文件接收数据。
```javascript
expresce.on("iFrameworkData", data => }
  iFrameVideo = data.video;
  currentTime = data.time;
});
```
**注意：** 这需要放置在更新数据事件之外。
## 编译中
在您的文件夹中打开控制台，输入 `tsc -w` 来编译 `存在。ts` 到 `/dist` 文件夹。

# 结构 (JavaScript)
## 克隆项目
1. Install [Git](https://git-scm.com/).
2. 打开终端并输入 `git 克隆https://github.com/PreMiD/Presences`。
3. 选择一个文件夹。
4. 在你的代码编辑器中打开它。

## 创建文件夹和文件

1. 创建您想要支持的服务的 **名称** (而不是URL) 的文件夹。
3. 在内边创建一个名为 `的文件夹`
4. 在 `metadata.json` 文件和 `expresence.js` 文件在 `dist` 文件夹中。

## 填写metadata.json 文件

Click [here](/dev/presence#filling-in-the-metadatajson-file-2) to see how to fill it in. 您将能够轻松地在解释的底部重新点击。

We've made a `metadata.json` file creator for the lazy peeps [here](https://eggsy.codes/projects/premid/mdcreator).

## 入门开始

```javascript
var presence = new Presence({
    clientId: "000000000000000000", //The client ID of the Application created at https://discordapp.com/developers/applications
    mediaKeys: false //Enable use and detection of media key presses
}),

strings = presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
    //You can use this to get translated strings
});

/*

function myOutsideHeavyLiftingFunction(){
    //Grab and process all your data here

    // element grabs //
    // api calls //
    // variable sets //
}

setInterval(10000, myOutsideHeavyLiftingFunction); 
//Run the function seperate from the UpdateData event every 10 seconds to get and set the variables which UpdateData picks up

*/


presence.on("UpdateData", () => {
    //UpdateData is always firing, and therefore should be used as your refresh cycle, or `tick`. 在可能的情况下，这被称作是第二次的。

    //It 建议在此事件函数之外设置另一个函数，这个函数将会改变变量值，如果您调用来自 API 的数据，将会进行重提。

    var presceData = Power
        large-ImageKey: "key", /*大图片的关键(文件名) 上的存在。 这些已上传并在您的应用程序的 Rich Presence 部分中命名。 名称为 Art Assets*/
        smallImageKey: "key", /* 大图像的关键(文件名) 上的存在。 These are uploaded and named in the Rich Presence section of your application, called Art Assets*/
        smallImageText: "Some hover text", //The text which is displayed when hovering over the small image
        details: "Browsing Page Name", //The upper section of the presence text
        state: "Reading section A", //The lower section of the presence text
        startTimestamp: 1577232000, //The unix epoch timestamp for when to start counting from
        endTimestamp: 1577151472000 //If you want to show Time Left instead of Elapsed, this is the unix epoch timestamp at which the timer ends
    }; /*Optionally you can set a largeImageKey here and change the rest as variable subproperties, for example presenceSata.type = "blahblah"; type examples: details, state, etc.*/

    if (presenceData.details == null) {
        //This will fire if you do not set presence details
        presence.setTrayTitle(); //Clears the tray title for mac users
        presence.setActivity(); /*Update the presence with no data, therefore clearing it and making the large image the Discord Application icon, and the text the Discord Application name*/
    } else {
        //This will fire if you set presence details
        presence.setActivity(presenceData); //Update the presence with all the values from the presenceData object
    }
});
```
您可以将此文件复制到您的 `presence.js` 文件并编辑值。 设置所有值都是在数据更新事件中完成的。

例如，我们建议看一看1337x或9GAG。

要了解更多关于Presence类的信息，请点击 [这里](/dev/presence/class)。

## 无法获取特定数据？！

许多网站正在使用 [iframe](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([内嵌框架](https://en.wikipedia.org/wiki/HTML_element#Frames))。 这些html 标签可以包含多个来源，如视频。 但它们并非每次都有意义。 有些是隐藏的，有些没有被积极使用。 检查您是否可以提取您需要的信息，而在您做不必要的工作之前不需要这些信息。

1. 通过浏览器控制台检查他们(请确保您在 **元素** 标签上)。
2. 搜索 (<kbd>CTRL</kbd>+<kbd>F</kbd> (Windows) 或 <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS))。
3. 执行 `文档.querySelectorAll("iframe")`

如果您发现您的数据在 iFrame 中，您需要执行以下操作：
1. 创建 `iframe.js` 文件。
2. 在您的元数据文件中将 iFrame 设置为 `true`。
3. 填写您的 iFrame 文件。
```javascript
var iframe = 新的 iFrame();
iframe n("更新数据", () => P
    /*
    从iFrame中获取您需要的所有数据并保存到变量
    然后使用 iframe 发送。 结束
    */
    iframe。 end(请自行/发送数据
        video,
        time:video.) 持续时间  
    }；
})；
```
4. 让您的存在文件从 iFrame 文件接收数据。
```javascript
expresce.on("iFrameworkData", data => }
  iFrameVideo = data.video;
  currentTime = data.time;
});
```
**注意：** 这需要放置在更新数据事件之外。
# 填写metadata.json 文件
We've made a `metadata.json` file creator for the lazy peeps [here](https://eggsy.codes/projects/premid/mdcreator). 仍然有人建议通过这个方法阅读，这样你就知道它是如何工作的。

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
  "version": "VERSION",
  "logo": "URL",
  "缩略图": "URL",
  "color": "#HEX000",
  "tags": ["CATEGORY", "TAG"],
  "category": "Category",
  "regExp": "REGEXP",
  "iFrameRegExp": "REGEXP",
  "iframe": false
}
```

请复制上面的代码并将其放在您的 `metadata.json` 文件中。 您现在需要编辑属性的值。 请注意，在您的 `元数据中，下列属性是可选的。 son` 文件，如果您不计划使用它们，您需要删除它们。
- `贡献者`
- `regExp`
- `iframe`
- `iFrameRegExp`

**澄清某些值预设：**
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
      <td style="text-align:left">此存在支持的服务的标题。 <br>(必须是一切都在这里的文件夹名称)</td>
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
        <b>这个URL必须与网站的 URL 匹配，因为它将检测到这个网站是否注入脚本。</b><br> 不要 <b>不要</b> 添加 <code>https://</code> 或 <code>http:///</code> 网址内或结尾处的斜线：
<code>https://premid。 pp/</code> -> <code>premid.app</code><br>
<b>note</b>: some URLs may have <code>www.</code> 或在他们的域前面的其他东西。 难道 <b>不是</b> 忘记添加它！<br>
您可以通过以下方式添加多个URL：<br>
<code>["URL1", "URL2", "ETC。</code><br>
您也可以使用 regExp 也称为Regex 来完成此任务，下面将作进一步解释。
      </td>
      <td style="text-align:left"><code>字符串，数组&lt;String&gt;</code>
      </td>
      <td style="text-align:left"><code>否</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b>
      </td>
      <td style="text-align:left">用于匹配url的正则表达式字符串。<br>
      regExp 或也称为Regex，如果网站有多个子域，可以使用。<br>
您可以为此使用以下矩阵形式：<br>
<code>([a-z0-9]+)[.]域[.]TLD"</code><br>
TLD 站在顶级域名上： om .net<br> 
<code>([a-z0-9]+)</code> 表示任何从一个 z和 0 到 9 的意思。<br>
        您可以在 <a href="https://regex101.com/">Regex101测试您的regex</a></td>
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
      <td style="text-align:left">用于表示存在的类别的字符串。 在这里查看有效的 <a href="https://docs.premid.app/dev/presence/metadata#presence-categories">餐饮量</a>。</td>
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
      <td style="text-align:left">选择要注入的 iframes 的正则表达式选择器。 查看正则表达式以获取更多信息。</td>
      <td style="text-align:left"><code>字符串</code>
      </td>
      <td style="text-align:left"><code>否</code>
      </td>
    </tr>
  </tbody>
</table>

点击 [在这里](/dev/presence#filling-in-the-metadatajson-file) 返回到 TypeScript 解释。 点击 [在这里](/dev/presence#filling-in-the-metadatajson-file-1) 返回到 JavaScript 解释。

# 正在加载存在
1. 打开弹出窗口并按住键盘上的 <kbd>Shift</kbd> 按钮。
2. **负载存在** 将出现在Presences部分。
3. 当你仍然按住 <kbd>Shift</kbd> 按钮时点击它。
4. 选择您存在的/dist文件夹。

# 一些有用的内容
## 热重新加载
您正在开发的网站每次在文件夹中保存文件时都会自动重新加载。

## 调试
- 您可以放置 `console.log("测试")；` 在您的代码之间并查看您的浏览器控制台是否给您输出。 如果是，然后继续，然后在下一个函数后重试。 如果没有，上面有一个错误。
- 如果这无助于您，那么您就会在我们的 [Discord 服务器](https://discord.gg/PreMiD) 上寻求帮助。

# 文件已解释
- [存在类](/dev/presence/class)
- [iFrame类](/dev/presence/iframe)
- [元数据文件](/dev/presence/metadata)
- [TypeScript 配置](/dev/presence/tsconfig)
{.links-list}