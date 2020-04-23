---
title: Presence 开发
description:
published: true
date: 2020-04-23T23:25:59.632Z
tags:
---

> 所有存在现在都存储在这里：https://github.com/PreMiD/Presences 
> 
> {.is-info}

版本 `2.x` 介绍了 [存在商店](https://premid.app/store)。 用户现在可以通过 [网站](https://premid.app/) 的用户界面手动添加和移除他们最喜欢的存在。

# 准则
> If you do not follow all of the guidelines, a `Presence Verifier` will request the proper changes or your pull request may even be closed under certain circumstances. 
> 
> {.is-warning}

> When you make pull requests about adding or modifying existing presences, you **MUST** include a screenshot. However, modifications to a presence's `metadata.json` or `tsconfig.json` files do not require a screenshot. *Your screenshot MUST be uploaded directly to GitHub with the pull request, do not use third-party image sharing websites.* 
> 
> {.is-warning}

When publishing presences to this GitHub, we require you to follow a set of guidelines. To some, these strict rules may seem harsh. However, the implementation of these rulesets will keep our servers from running into any issues.

## 设定
> The code you write MUST be *well-written* and MUST be *readable*. `DeepScan` on GitHub will report code quality issues to the `Presence Verification Team`. We recommend that your fork is up to date when you make pull requests, it will help limit false positives. 
> 
> {.is-warning}

- The pull request **MUST** be complete, you need to have a proper file structure, drafts are **NOT** allowed. Including the `dist` folder, `presence.js` file, and `metadata.json` file, which is represented in the following example schema:
```bash
presence
└── dist
    ├── metadata.json
    └── presence.js
```
or if you're using TypeScript and `iframe` (the max you could reach) :
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

Before you begin working on your presence, keep the following list in mind.
- The presence **MUST** be related to the website you have chosen.
- The presence **MUST NOT** be of any illegal websites. These include stressors, drugs, child porn, etc...
- The presence metadata **MUST** have well-written content, including valid titles, and descriptions.
- The media you include (icon/thumbnail) **MUST** be related to the website and should be understandable in terms of size and quality.
- The file structure **MUST** be clean and managed, do not have random files that provide nothing to the presence's function.
- The presence **MUST NOT** have any malicious intentions. These include stealing/leaking private information, negatively affecting the behavior of the website, etc...
- If you design a presence for a website and the website happens to change in the future, you **ARE** responsible for updating the presence again to work as expected. If you do not fix it within 7 days, other presence developers are allowed to **OVERWRITE** your presence to comply with the changes.
- The presence **MUST** be tested before publishing to confirm that everything works as expected.
- Your presence **MUST** have SFW images and descriptions regardless if it is NSFW or not. If your presence is about an NSFW website, please add the `nsfw` tag to your metadata.
- Your presence **CANNOT** manipulate local storage on the browser.
- Your presence may use cookies to store data. All data stored by the presence should be prefixed with `pmd_`.
- Tags should be used as alternate names whenever possible, shortened versions must be included as well (e.g. if an Amazon presence had included AWS support it would have its tags like : "amazon-web-services" and "aws"). This is not required if it's not possible, but will make it easier for users when searching.
- Tags must not include any spaces, slashes, single/double quotation marks, unicode characters and should always be lowercase.

## 修改
> You MUST change the version in the **metadata** to be a higher value from previous version when making changes to either the **presence.js** or **metadata.json**. 
> 
> {.is-warning}

In some situations, presences may behave unexpectedly or could use some minor changes to improve its functionality. Here is a compiled list that you **MUST** follow to modify presences.
- You are not allowed rewrite a presence or change it's author. If the presence author was banned from the official server or hasn't made required changes in a 7 day period, you may contact a PreMiD `Presence Verifier` to see if you are applicable to rewrite the presence of choice.
- If you make modifications to a presence and change at least a **QUARTER** of the presence's codebase, you are allowed to add yourself as a contributor. Contact a `Presence Verifier` for more information about this subject.
- Make sure the modifications are useful. These may include fixes (code and typos),  additions (descriptions and tags), etc... Do not change images if they are not outdated and have a decent resolution.
- Confirm that your changes work before publishing. Do not create pull requests without knowing the outcome of your changes.

# 验证

> If you need to contact someone, please use our official Discord server. All `Presence Verifiers` will have a unique role on their profile.

For your presence to reach the stores, it MUST go through a process on GitHub to confirm that it works as expected. These are a few things to look out for when making your pull request.

1. 确认您的存在符合标准需要两个验证器。 如果你碰巧获得更改请求，请做出适当的努力来修复它或它不会被添加。
2. If we request changes and your pull request exceeds **7 days of inactivity** without making the necessary ones, we'll be forced to close it.
3. You are allowed to take screenshots of changes made with the help of another user, and you are allowed to stitch screenshots for viewing pleasure. (例如, 其作者, 如果你出于任何原因不能访问它).
4. If it is an update or patch, the screenshot **MUST** show the new additions working, not any old features from previous pull requests.
5. 提供的屏幕截图应该是真实的，而不是编辑的。
6. 任何被合并到这个资源库的贡献代码都将被授权在 **Mozilla 公共许可协议2.0** 中。
7. Presences for free domains or hosts (e.g. .TK, [all free Freenom domains], .RF.GD, etc...) are **NOT** allowed at all, exceptions can be made if a proof is presented showing that they paid for the domain.
8. The `smallImageKey` and `smallImageText` fields are intended to provide additional/secondary context (such as "playing"/"paused" for video sites, "browsing" for regular sites and other cases) not to promote Discord profiles or anything unrelated to PreMiD.
9. The requirements for logos are 1:1 (Square) in 512px, thumbnails, however, should either be [wide promotional cards](https://i.imgur.com/3QfIc5v.jpg) or simply [screenshots](https://i.imgur.com/OAcBmwW.png) if the first is not available.
10. Presences should at least have 1 tag, this is a requirement by design and may be optional in the future.
11. The `url` field **MUST NOT** include `http://` or `https://`, neither the parameters (e.g. a presence for `https://www.google.com/search?gws_rd=ssl` will only have `www.google.com` in the `url` field).
12. Descriptions and tags should always be in arrays, even when it's only one element. The `url` field, however, should only be a string if it's one domain.
13. Unstable sites that constantly change APIs/domains, randomize HTML elements or just still being in heavy development are not allowed and will be removed from the store.

After all of the proper reviews have been met, your pull request will be merged with the store.

# 结构 (TypeScript)
You can choose if you want to code your Presence with [JavaScript](https://www.javascript.com/) or  [TypeScript](https://www.typescriptlang.org/). [TypeScript](https://www.typescriptlang.org/) has some extra spicy type definitions, so fixing and identifying bugs is way easier. If you just want to use [JavaScript](https://www.javascript.com/) you can skip to [Structure (JavaScript)](/dev/presence#structure-javascript).

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
2. Create a `presence.ts` and a `tsconfig.json` file inside.
3. 在内边创建一个名为 `的文件夹`
4. 在 `dist` 文件夹中创建 `metadata.json` 文件。

## 在 tsconfig.json 文件中填充
Please put the following code inside of the `tsconfig.json` file.
```javascript
主席:
  "extends": "../tsconfig.json",
  "compilerOptions":
    "outDir": "./dist/"
  }
}
```
To learn more about TypeScript configuration click [here](/dev/presence/tsconfig).

## 填写metadata.json 文件

Click [here](/dev/presence#filling-in-the-metadatajson-file-2) to see how to fill it in. You will be able to easily click back at the bottom of the explanation.

We've made a `metadata.json` file creator for the lazy peeps [here](https://eggsy.codes/projects/premid/mdcreator).

## 入门开始

```javascript
var presence = new Presence({
    clientId: "000000000000000000" //The client ID of the Application created at https://discordapp.com/developers/applications
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
    /*UpdateData is always firing, and therefore should be used as your refresh cycle, or `tick`. This is called several times a second where possible.

    It is recommended to set up another function outside of this event function which will change variable values and do the heavy lifting if you call data from an API.*/

    var presenceData = {
        largeImageKey: "key", /*The key (file name) of the Large Image on the presence. These are uploaded and named in the Rich Presence section of your application, called Art Assets*/
        smallImageKey: "key", /*The key (file name) of the Large Image on the presence. These are uploaded and named in the Rich Presence section of your application, called Art Assets*/
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
You can copy this into your `presence.ts` file and edit the values. Setting all the values is done inside of the updataData event.

For examples we suggest to look at the code of presences like: 1337x or 9GAG.

For more information about the Presence class click [here](/dev/presence/class).

## 无法获取特定数据？！

A lot of websites are using [iframes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([Inlineframes](https://en.wikipedia.org/wiki/HTML_element#Frames)). These html tags can contain multiple sources such as videos. But they're not relevant every time. Some are hidden or just not actively used. Check if you can extract, the information you need, without them before you do unnecessary work.

1. Check for them in your browsers console (be sure that you are on the **Elements** tab).
2. 搜索 (<kbd>CTRL</kbd>+<kbd>F</kbd> (Windows) 或 <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS))。
3. 执行 `文档.querySelectorAll("iframe")`

If you find that your data is in a iFrame you need to do the following:
1. 创建 `iframe.ts` 文件。
2. 在您的元数据文件中将 iFrame 设置为 `true`。
3. 填写您的 iFrame 文件。
```javascript
var iframe = new iFrame();
iframe.on("UpdateData", async () => {
  /*
  Get all the data you need out of the iFrame save them in variables
  and then sent them using iframe.send
  */
  iframe.send({ //sending data
    video: video,
    time: video.duration
  }); 
});
```
4. 让您的存在文件从 iFrame 文件接收数据。
```javascript
presence.on("iFrameData", data => {
  iFrameVideo = data.video;
  currentTime = data.time;
});
```
**Note:** This needs to be placed outside of the updateData event.
## 编译中
Open a console in your folder and type `tsc -w` to compile the `presence.ts` into the `/dist` folder.

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

Click [here](/dev/presence#filling-in-the-metadatajson-file-2) to see how to fill it in. You will be able to easily click back at the bottom of the explanation.

We've made a `metadata.json` file creator for the lazy peeps [here](https://eggsy.codes/projects/premid/mdcreator).

## 入门开始

```javascript
var presence = new Presence({
    clientId: "000000000000000000" //The client ID of the Application created at https://discordapp.com/developers/applications
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
    //UpdateData is always firing, and therefore should be used as your refresh cycle, or `tick`. This is called several times a second where possible.

    //It is recommended to set up another function outside of this event function which will change variable values and do the heavy lifting if you call data from an API.

    var presenceData = {
        largeImageKey: "key", /*The key (file name) of the Large Image on the presence. These are uploaded and named in the Rich Presence section of your application, called Art Assets*/
        smallImageKey: "key", /*The key (file name) of the Large Image on the presence. These are uploaded and named in the Rich Presence section of your application, called Art Assets*/
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
You can copy this into your `presence.js` file and edit the values. Setting all the values is done inside of the updataData event.

For examples we suggest to look at the code of presences like: 1337x or 9GAG.

For more information about the Presence class click [here](/dev/presence/class).

## 无法获取特定数据？！

A lot of websites are using [iframes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([Inlineframes](https://en.wikipedia.org/wiki/HTML_element#Frames)). These html tags can contain multiple sources such as videos. But they're not relevant every time. Some are hidden or just not actively used. Check if you can extract, the information you need, without them before you do unnecessary work.

1. Check for them in your browsers console (be sure that you are on the **Elements** tab).
2. 搜索 (<kbd>CTRL</kbd>+<kbd>F</kbd> (Windows) 或 <kbd>CMD</kbd>+<kbd>F</kbd> (MacOS))。
3. 执行 `文档.querySelectorAll("iframe")`

If you find that your data is in a iFrame you need to do the following:
1. 创建 `iframe.js` 文件。
2. 在您的元数据文件中将 iFrame 设置为 `true`。
3. 填写您的 iFrame 文件。
```javascript
var iframe = new iFrame();
iframe.on("UpdateData", () => {
    /*
    Get all the data you need out of the iFrame save them in variables
    and then sent them using iframe.send
    */
    iframe.send({ //sending data
        video: video,
        time: video.duration  
    });
});
```
4. 让您的存在文件从 iFrame 文件接收数据。
```javascript
presence.on("iFrameData", data => {
  iFrameVideo = data.video;
  currentTime = data.time;
});
```
**Note:** This needs to be placed outside of the updateData event.
# 填写metadata.json 文件
We've made a `metadata.json` file creator for the lazy peeps [here](https://eggsy.codes/projects/premid/mdcreator). It's still suggested to read this through so you know how it works.

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
  "version": "VERSION",
  "logo": "URL",
  "thumbnail": "URL",
  "color": "#HEX000",
  "tags": ["CATEGORY", "TAG"],
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
            "value": "\"%song\" by %artist",
            "placeholder": "use %song or %artist"
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

Please copy the code above and put it in your `metadata.json` file. You now need to edit values of the properties. Please note that the following properties are optional to have in your `metadata.json` file, if you do not plan on using them you need to remove them.
- `贡献者`
- `regExp`
- `iframe`
- `iFrameRegExp`
- `settings`

**Clarifying some value presets:**
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
      <td style="text-align:left">此存在支持的服务的标题。 <br>(Must be the same name as the folder where everything is in)</td>
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
        <b>This URL must match the URL of the website as it will detect whether or not this is the website to inject the script to.</b><br> Do <b>NOT</b> add <code>https://</code> or <code>http://</code> inside of the URL nor a slash at the end:
<code>https://premid.app/</code> -> <code>premid.app</code><br>
<b>Note</b>: Some URLs may have <code>www.</code> or something else in front of their domain. Do <b>NOT</b> forget to add it!<br>
You can add multiple URLs by doing the following:<br>
<code>["URL1", "URL2", "ETC."]</code><br>
You could also use regExp also known as Regex for this task, explaned further below.
      </td>
      <td style="text-align:left"><code>字符串，数组&lt;String&gt;</code>
      </td>
      <td style="text-align:left"><code>否</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b>
      </td>
      <td style="text-align:left">A regular expression string used to match urls.<br>
      regExp or also known as Regex, can be used if a website has multiple subdomains.<br>
You could use the following regExp for that:<br>
<code>([a-z0-9]+)[.]domain[.]TLD"</code><br>
TLD standing for Top Level Domain for axample: .com .net<br> 
<code>([a-z0-9]+)</code> means anything from a to z and from 0 to 9.<br>
        You can test your regExp at <a href="https://regex101.com/">Regex101</a></td>
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
      <td style="text-align:left">用于表示存在的类别的字符串。 See the valid catergories <a href="https://docs.premid.app/dev/presence/metadata#presence-categories">here</a>.</td>
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
      <td style="text-align:left">选择要注入的 iframes 的正则表达式选择器。 See regExp for more info.</td>
      <td style="text-align:left"><code>字符串</code>
      </td>
      <td style="text-align:left"><code>否</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>settings</b>
      </td>
      <td style="text-align:left">An array of settings the user can change.<br>
      Read more about presence settings <a href="https://docs.premid.app/dev/presence/metadata#presence-settings">here</a>.</td>
      <td style="text-align:left"><code>数组&lt;Object&gt;</code>
      </td>
      <td style="text-align:left"><code>否</code>
      </td>
    </tr>
  </tbody>
</table>

Click [here](/dev/presence#filling-in-the-metadatajson-file) to go back to the TypeScript explanation. Click [here](/dev/presence#filling-in-the-metadatajson-file-1) to go back to the JavaScript explanation.

# 正在加载存在
1. 打开弹出窗口并按住键盘上的 <kbd>Shift</kbd> 按钮。
2. **负载存在** 将出现在Presences部分。
3. 当你仍然按住 <kbd>Shift</kbd> 按钮时点击它。
4. 选择您存在的/dist文件夹。

# 一些有用的内容
## 热重新加载
The website you are developing on is automatically reloading every time you save a file in your folder.

## 调试
- You can put `console.log("Test");` between your code and see if your browser console gives you that output. If yes then go on and try again after the next function. If not then there is an error above.
- If that doesn't help you either then ask a presence developer on our [Discord server](https://discord.gg/WvfVZ8T) for help.

# 文件已解释
- [存在类](/dev/presence/class)
- [iFrame类](/dev/presence/iframe)
- [Metadata File](/dev/presence/metadata)
- [TypeScript 配置](/dev/presence/tsconfig)
{.links-list}
