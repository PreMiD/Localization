---
title: API
description: Access resources and perform actions using the PreMiD API
published: true
date: 2020-04-22T17:59:55.315Z
tags:
---

# API

> ベースURL: https://api.premid.app 
> 
> {.is-info}

## APIのバージョン
> 現在、いくつかのAPIやGatewayのバージョンは非推奨で、以下の表にて 廃止 と表記されています。 
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
- [v1 *非推奨*](/dev/api/v1)
- [v2 *推奨*](/dev/api/v2)
{.links-list}