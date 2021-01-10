---
title: Presence 개발
description:
published: true
date: 2020-12-26T15:02:54.817Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:04:02.843Z
---

> 모든 Presence들은 이곳에 저장되어 있습니다. https://github.com/PreMiD/Presences 
> 
> {.is-info}

버전 `2.x`에는 [Presence 상점](https://premid.app/store) 기능이 추가됩니다. 사용자들은 이제 저희 [홈페이지](https://premid.app/) 에서 자신이 좋아하는 Presence를 좋아요 표시할 수 있습니다.

> 시작하기 전에, 우리의 이용 약관을 꼭 확인하는 것을 추천해요. 
> 
> {.is-warning}

- [Guidelines](https://docs.premid.app/dev/presence/guidelines)
{.links-list}

# 구조

모든 Presence들은 [TypeScript](https://www.typescriptlang.org/)에 코딩되어 있어요. [TypeScript](https://www.typescriptlang.org/)는 JavaScript에 비해 더 구체적인 정보를 담고 있어, 버그를 찾아내어 고치는 것이 쉬워요.

## Installation

1. Install [Git](https://git-scm.com/).
2. Install [Node](https://nodejs.org/en/) (comes with [npm](https://www.npmjs.com/)).
3. [TypeScript](https://www.typescriptlang.org/index.html#download-links) 설치하기 (터미널 실행 후 "`npm install -g typescript`" 입력하기)

## Cloning the project

1. 터미널을 열어 `git clone https://github.com/PreMiD/Presences`를 입력하세요.
2. Choose a folder of your choice.
3. Open it in your code editor.

## 폴더 및 파일 생성하기

1. `websites` 폴더로 이동한 후 지원하고 싶은 서비스의 첫 **알파벳** (URL 아님)을 가진 폴더로 이동하세요.
2. 지원하고 싶은 서비스의 **이름**(URL 아님)을 폴더 명으로 하는 폴더를 만드세요.
3. 폴더 안에 `presence.ts`파일과 `tsconfig.json`파일을 생성하세요.
4. 안에 `dist`라는 이름의 폴더를 만드세요.
5. `dist` 폴더 안에 `metadata.json`파일을 생성하세요.

## tsconfig.json 파일에 입력하기

`tsconfig.json` 파일 안에 다음 코드를 입력해주세요.

```typescript
{
  "extends": "../../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/"
  }
}
```

TypeScript 구성에 대해서 더 자세히 알아보려면 [여기](/dev/presence/tsconfig)를 클릭하세요.

## metadata.json 파일에 입력하기

게으른 녀석들을 위해 우리가 `metadata.json`파일 생성기를 만들었어요. [여기를 클릭하세요](https://eggsy.xyz/projects/premid/mdcreator). 그래도 어떻게 작동하는지 알아보기 위해 다음을 읽어보기를 추천해요.

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
      "id": "ID",
      "multiLanguage": true
    },
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

다음 코드를 복사해 `metadata.json` 파일에 붙여 넣으세요. 이제 속성 값을 수정해야 해요. 참고로 다음 속성들은 당신의 `metadata.json` 파일에 선택 사항이기 때문에, 만약 쓰지 않을 것이라면 지워주세요.

- `contributors`
- `altnames`
- `regExp`
- `iframe`
- `iFrameRegExp`
- `readLogs`
- `settings`

**다음은 변수들에 대한 설명입니다:**

<table>
  <thead>
    <tr>
      <th style="text-align:left">Variable</th>
      <th style="text-align:left">Description</th>
      <th style="text-align:left">Type</th>
      <th style="text-align:left">Optional</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>author</b></td>
      <td style="text-align:left">Should contain an Object with the <code>name</code> and <code>id</code> of the presence developer. Name is your Discord username without the identifier(#0000). User <code>id</code> can be copied from Discord by enabling developer
        mode and right-clicking on your profile.</td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>contributors</b></td>
      <td style="text-align:left">Should contain an Object with the <code>name</code> and <code>id</code> of the presence developer. Name is your Discord username without the identifier(#0000). User <code>id</code> can be copied from Discord by enabling developer
        mode and right-clicking on your profile.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>Yes</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>service</b></td>
      <td style="text-align:left">The title of the service that this presence supports.<br>
      (Must be the same name as the folder where everything is in)</td>
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
      <td style="text-align:left"><b>description</b></td>
      <td style="text-align:left">Small description of the presence, you can use description of the service if you are out of ideas. Your description must have key pair values which indicate the language, and the description in that specific language. Make descriptions with the languages <i>that you know</i>, our translators will make changes to your metadata file.</td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>url</b></td>
      <td style="text-align:left">URL of the service.<br><b>Example:</b><code>vk.com</code><br>
      <b>This URL must match the URL of the website as it will detect whether or not this is the website to inject the script to.</b><br> Do <b>NOT</b> add <code>https://</code> or <code>http://</code> inside of the URL nor a slash at the end:
      <code>https://premid.app/</code> -> <code>premid.app</code><br>
      <b>Note</b>: Some URLs may have <code>www.</code> or something else in front of their domain. Do <b>NOT</b> forget to add it!<br>
      You can add multiple URLs by doing the following:<br>
      <code>["URL1", "URL2", "ETC."]</code><br>
      You could also use regExp also known as Regex for this task, explained further below.</td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>regExp</b></td>
      <td style="text-align:left">A regular expression string used to match urls.<br>
      regExp or also known as Regex, can be used if a website has multiple subdomains.<br>
      You could use the following regExp for that:<br>
      <code>([a-z0-9]+)[.]domain[.]TLD"</code><br>
      TLD standing for Top Level Domain for axample: .com .net (but do not enter the dot).<br>
      <code>([a-z0-9]+)</code> means anything from a to z and from 0 to 9.<br>
      You can get a quick starter by watching this <a href="https://youtu.be/sXQxhojSdZM">video</a>.<br>
      You can test your regExp at <a href="https://regex101.com/">Regex101</a>.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>Yes</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>version</b></td>
      <td style="text-align:left">Version of your presence.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>logo</b></td>
      <td style="text-align:left">Link to service&apos;s logotype.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>thumbnail</b></td>
      <td style="text-align:left">Link to your presence thumbnail.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>color</b></td>
      <td style="text-align:left"><code>#HEX</code> value. We recommend to use a primary color of the service
        that your presence supports.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>tags</b></td>
      <td style="text-align:left">Array with tags, they will help users to search your presence on the website.</td>
      <td style="text-align:left"><code>String, Array&lt;String&gt;</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>category</b></td>
      <td style="text-align:left">A string used to represent the category the presence falls under. See the valid catergories <a href="https://docs.premid.app/dev/presence/metadata#presence-categories">here</a>.</td>
      <td style="text-align:left"><code>String</code></td>
      <td style="text-align:left"><code>No</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iframe</b></td>
      <td style="text-align:left">Defines whether <code>iFrames</code> are used.</td>
      <td style="text-align:left"><code>Boolean</code></td>
      <td style="text-align:left"><code>Yes</code></td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iFrameRegExp</b></td>
      <td style="text-align:left">A regular expression selector that selects iframes to inject into. See regExp for more info.</td>
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
      <td style="text-align:left">An array of settings the user can change.<br>
      Read more about presence settings <a href="https://docs.premid.app/dev/presence/metadata#presence-settings">here</a>.</td>
      <td style="text-align:left"><code>Array&lt;Object&gt;</code></td>
      <td style="text-align:left"><code>Yes</code></td>
    </tr>
  </tbody>
</table>

We've made a `metadata.json` file creator for the lazy peeps [here](https://eggsy.xyz/projects/premid/mdcreator).

## 시작하기

```typescript
const presence = new Presence({
    clientId: "000000000000000000" //The client ID of the Application created at https://discordapp.com/developers/applications
  }),
  strings = presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
    //You can use this to get translated strings in their browser language
  });

/*

function myOutsideHeavyLiftingFunction(){
    //Grab and process all your data here

    // element grabs //
    // api calls //
    // variable sets //
}

setInterval(myOutsideHeavyLiftingFunction, 10000);
//Run the function separate from the UpdateData event every 10 seconds to get and set the variables which UpdateData picks up

*/

presence.on("UpdateData", async () => {
  /*UpdateData is always firing, and therefore should be used as your refresh cycle, or `tick`. This is called several times a second where possible.

    It is recommended to set up another function outside of this event function which will change variable values and do the heavy lifting if you call data from an API.*/

  const presenceData: PresenceData = {
    largeImageKey:
      "key" /*The key (file name) of the Large Image on the presence. These are uploaded and named in the Rich Presence section of your application, called Art Assets*/,
    smallImageKey:
      "key" /*The key (file name) of the Large Image on the presence. These are uploaded and named in the Rich Presence section of your application, called Art Assets*/,
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

For examples we suggest to look at the code of presences like: 1337x or 9GAG. For more information about the `Presence` class click [here](/dev/presence/class).

Since v2.2.0 there are now Slideshows, this allows you to show multiple `PresenceData` interfaces on an interval, for more information click about the `Slideshow` class [here](/dev/presence/slideshow).

## 특정 데이터를 얻을 수 없나요?

많은 웹사이트들이 [iframes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) ([Inlineframes](https://en.wikipedia.org/wiki/HTML_element#Frames))를 사용중이에요. 이러한 HTML 태그들은 비디오와 같은 다양한 소스들을 포함하고 있을 수 있어요. 하지만 항상 그런 것은 아니랍니다. 어떤 것들은 숨겨져 있거나 비활성화 되어있어요. 무모한 삽질을 하기 전에 당신이 필요한 정보들을 추출 할 수 있는지 확인해보세요.

1. 브라우저 콘솔에서 확인하기 (**Elements**탭에서 찾아봐요).
2. 검색하기 (<kbd>CTRL</kbd>+<kbd>F</kbd> (윈도우) or <kbd>CMD</kbd>+<kbd>F</kbd> (macOS)).
3. `document.querySelectorAll("iframe")` 실행하기.

만약 당신의 데이터가 iFrame안에 있다면 다음을 수행하세요.

1. `iframe.ts` 파일 생성하기
2. 메타데이터 파일에서 iFrame을 `true`로 설정하기
3. iFrame 파일을 다음 코드로 채우기

```typescript
const iframe = new iFrame();
iframe.on("UpdateData", async () => {
  /*
  Get all the data you need out of the iFrame save them in variables
  and then sent them using iframe.send
  */
  iframe.send({
    //sending data
    video: video,
    time: video.duration
  });
});
```

4. presence 파일이 iFrame 파일의 데이터를 받을 수 있도록 설정하기

```typescript
presence.on("iFrameData", (data) => {
  iFrameVideo = data.video;
  currentTime = data.time;
});
```

**확인:** 이것은 updateData 이벤트 밖에 있어야 해요.

## 컴파일링

`presence.ts`를 `/dist` 폴더에 컴파일하기 위해 당신의 폴더에서 콘솔을 연 후 `tsc -w`를 입력하세요.

# presence 불러오기

1. 팝업을 열고 키보드의 <kbd>Shift</kbd>버튼을 누르고 있어요.
2. **Presence 불러오기**가 Presences 항목에 뜰 거에요.
3. <kbd>Shift</kbd> 버튼을 누른 채로 클릭하세요.
4. presence의 /dist 폴더를 선택하세요.

# 유용한 기능들

## Hot-reloading (핫-리로딩)

현재 개발하고 있는 웹사이트가 당신이 폴더에 파일을 저장할 때마다 자동으로 다시 로딩합니다.

## 디버깅

- 당신의 코드들 사이에 `console.log("Test");`를 넣어 브라우저 콘솔이 그 결과를 출력하는 지 알 수 있습니다. 만약 한다면 다음 함수로 넘어가 다시 시도해보세요. 만약 하지 않는다면 앞에서 오류가 생긴 거예요.
- 만약 이 방법으로 해결되지 않았다면 우리의 [디스코드 서버](https://discord.premid.app/)에 있는 presence 개발자에게 물어볼 수 있어요.

# 파일 설명

- [Presence Class](/dev/presence/class)
- [Slideshow Class](/dev/presence/slideshow)
- [iFrame Class](/dev/presence/iframe)
- [Metadata File](/dev/presence/metadata)
- [TypeScript Configuration](/dev/presence/tsconfig ""){.links-list}
