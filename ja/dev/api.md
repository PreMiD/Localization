---
title: API
description: PreMiD APIを使用してリソースにアクセスし、アクションを実行する
published: true
date: 2021-02-01T12:36:44.713Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:03:59.010Z
---

# API

> ベースURL: https://api.premid.app 
> 
> {.is-info}

## APIのバージョン
> API v2は非推奨になりました。今後、削除される予定です。 問題を防ぐために、今後のリクエストにはAPI v3を使用してください。 
> 
> {.is-danger}

PreMiDには異なるバージョンのAPIがあります。 `https://api.premid.app/v{version_number}` のようなリクエストパスを同梱することでバージョンを指定できます。 ルート上からバージョンの番号を省略した場合、自動的に現在のバージョンにルートリクエストされます。(以下にそれに応じてかいてあります)

## 暗号化

PreMiD内のすべてのHTTPレイヤーのサービスやプロトコル (例: http)は TLS 1.2 を使用します。

# ドキュメント
> 現在作成中！ 
> 
> {.is-danger}

**APIのバージョンを選んでください:**
- [v2 *非推奨*](/dev/api/v2)
- [v3 *推奨*](/dev/api/v3)
{.links-list}