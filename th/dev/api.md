---
title: API
description: เข้าถึงทรัพยากรและดำเนินการต่าง ๆ โดยใช้ PreMiD API
published: true
date: 2021-01-29T11:48:45.412Z
tags:
editor: markdown
dateCreated: 2020-06-11T18:03:59.010Z
---

# API

> เส้นทาง URL: https://api.premid.app/ 
> 
> {.is-info}

## เวอร์ชัน API
> API v2 has been deprecated and will be removed in the near future. Please use v3 for any future request to prevent issues in the future. 
> 
> {.is-danger}

การจะใช้ API ของ PreMiD ในเวอร์ชั่นอื่น ๆ ของเรา คุณสามารถระบุเวอร์ชันใน Path Request เช่น `https://api.premid.app/v{version_number}` หากไม่บอกเวอร์ชั่น จะเป็นการคำขอไปยังเวอร์ชันเริ่มต้นปัจจุบัน (ทําเครื่องหมายไว้ด้านล่าง)

## การเข้ารหัส

บริการ HTTP-layer ทั้งหมดรวมถึง Protocol (เช่น http) ที่ถูกใช้โดย API ของ PreMiD จะเข้ารหัสด้วย TLS 1.2

# เอกสารอ้างอิง
> อยู่ระหว่างการพัฒนา! 
> 
> {.is-danger}

**เลือกเวอร์ชัน API:**
- [v2 *deprecated*](/dev/api/v2)
- [v3 *active*](/dev/api/v3)
{.links-list}