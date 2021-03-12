---
title: Rang iFrame
description:
published: true
date: 2020-05-03T20:17:51.982Z
tags:
---

# Rang iFrame
> Tá fadhbanna leis an gcóras iframe le PreMiD agus féadann sé iompar gan choinne a bheith aige, agus é a úsáid go cúramach. 
> 
> {.is-danger}

## Réamhrá

I roinnt cásanna, b’fhéidir go mbeidh ar do presence rochtain a fháil ar eilimintí taobh istigh de` iframes`.

Déantar an cód a scríobhann tú taobh istigh de do `iframe.ts` chomhad a instealladh i ngach iframe ar an leathanach.

Cosúil le presences, `iframes` tá a gcuid ranganna féin deartha chun sonraí a nuashonrú go huathoibríoch.

```typescript
let iframe = new iFrame();

iframe.on("UpdateData", async () => {
    // Code goes here...
});
```

## Modhanna

### `send(Object)`
Seolann sé sonraí chuig an presence. Trí úsáid a bhaint as an modh seo, caithfear an presence a chaitheamh `iFrameData`.

### `getUrl()`
Filleann sé URL an `iframe`.

## Imeachtaí
In `iframes`, oibríonn imeachtaí ar an gcaoi chéanna leis an mbealach a oibríonn siad sa `presence` rang.

```typescript
iframe.on("UpdateData", async () => {
    // Code goes here...
});
```

Seo liosta de na himeachtaí ar fad:

#### `UpdateData`

Scaoiltear an t-imeacht seo gach uair a dhéantar an iframe a nuashonrú.