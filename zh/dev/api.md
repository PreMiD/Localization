---
title: API
description: Access resources and perform actions using the PreMiD API
published: true
date: 2020-05-29T17:28:31.083Z
tags:
---

# API

> Base URL: https://api.premid.app 
> 
> {.is-info}

## API Versioning
> API v1 has been discontinued, any request should be forwarded to the currently active version 
> 
> {.is-danger}

PreMiD exposes different versions of our API. You can specify version by including it in the request path like `https://api.premid.app/v{version_number}`. Omitting the version number from the route will route requests to the current default version (marked below accordingly).

## 加密

All HTTP-layer services and protocols (e.g. http) within the PreMiD API use TLS 1.2.

# 相關文章
> 正在工程中！ 
> 
> {.is-danger}

**Choose the API version:**
- [版本2 *active*](/dev/api/v2)
- [v3 *work in progress*](/dev/api/v3)
{.links-list}