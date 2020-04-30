---
title: PreMiD開発入門
description: 近いうちにコーディングを始めたひとのためのアドバイス
published: true
date: 2020-04-09T14:21:58.246Z
tags:
---

> ソースコードエディターが必要です。 Visual Studio Codeをおすすめしています。 
> 
> {.is-info}

# 必要なコンポーネントをインストールする
1. [Git](https://git-scm.com/)をインストールする。
2. [Node](https://nodejs.org/en/)をインストールする。 ([npm](https://www.npmjs.com/)と一緒に)
3. [TypeScript](https://www.typescriptlang.org/index.html#download-links)をインストールする (ターミナルを開き、`npm install -g typescript`と入力する)。

# プロジェクトをクローンする
1. ターミナルを開き、`git clone URL`と入力する。 **URL の部分を寄与したいリポジトリーのリンク** 例 `git clone https://github.com/PreMiD/PreMiD` **に置き換える**
2. 任意のフォルダーを選択する
3. ソースコードエディターで開く

# 依存関係のインストール
> はじめに、[npm](https://www.npmjs.com/) (Node Package Manager) がインストールされていることを確認してください。  [Node](https://nodejs.org/en/)がインストールされている場合、npmは自動でインストールされます。 
> 
> {.is-warning}

- リポジトリー内でターミナルを開き、 `npm i` と入力する
- 依存関係のタイプを更新する際は `npm update` と入力する

> 依存関係を更新すると、多数の機能が壊れる可能性があります。テストを必ず行ってください！ 
> 
> {.is-danger}

# 空想をコーディングする
コードの構成を維持してください。 私たちはプロジェクトを混乱させたくありません。 混沌としたファイルは了承されない場合があります。

# あなたの夢を申請する
あなたが貢献したいPreMiDの[GitHubリポジトリー](https://github.com/PreMiD/)にてPull Requestを行ってください。 心配しないでください、私たちはあなたが申請したものを管理します。 もしPull Requestを行うのが初めてであれば、こちらの[チュートリアル](https://help.github.com/en/articles/creating-a-pull-request)を参考にして下さい。

# 承認をもらう
私たちの主な目的は、ユーザーと可能な限り友好的に、尊重し、有益になるように仕事を行うことです。 私たちの[Discordサーバー](https://discord.gg/WvfVZ8T)で開発者にメンションを送って、GitHubの内容のレビューをもらうことができます。 コードの質やアセットの外観、通常の機能性に依存します。