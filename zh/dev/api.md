---
title: API
description: Access ressources and perform actions using the PreMiD API
published: 是
date: 2020-01-19T23:42:12.088Z
tags:
---

# API

> Base URL: https://api.premid.app 
> 
> {.is-info}

## API Versioning
> Some API and Gateway versions are now deprecated and are labeled as discontinued in the table below for posterity. 
> 
> {.is-danger}

PreMiD exposes different versions of our API. You can specify version by including it in the request path like `https://api.premid.app/v{version_number}`. Omitting the version number from the route will route requests to the current default version (marked below accordingly).

## Encryption

All HTTP-layer services and protocols (e.g. http) within the PreMiD API use TLS 1.2.

# 相關文章
> Currently under construction! 
> 
> {.is-danger}

**Choose the API version:**
- [v1 *deprecated*](/dev/api/v1)
- [v2 *active*](/dev/api/v2)
{.links-list}