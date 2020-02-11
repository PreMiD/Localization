---
title: API
description: PreMiD APIを使用してリソースにアクセスし、アクションを実行する
published: true
date: 2020-01-19T23:42:12.088Z
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

PreMiDには異なるバージョンのAPIがあります。 `https://api.premid.app/v{version_number}` のようなリクエストパスを同梱することでバージョンを指定できます。 Omitting the version number from the route will route requests to the current default version (marked below accordingly).

## 暗号化

All HTTP-layer services and protocols (e.g. http) within the PreMiD API use TLS 1.2.

# ドキュメント
> Currently under construction! 
> 
> {.is-danger}

**Choose the API version:**
- [v1 *deprecated*](/dev/api/v1)
- [v2 *active*](/dev/api/v2)
{.links-list}