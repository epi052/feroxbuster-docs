---
title: "Rate Limiting"
weight: 14
categories: ["examples"]
tags: ["feature", "limit", "rate", "connections"]
description: >
  Added in version **2.0.0**
---

## Limit Number of Requests per Second

{{% alert title="Note" %}}
Rate limiting is enforced on a **per-directory** basis.
{{% /alert %}}



Version 2.0.0 added the ability to limit the number of requests per second. 

## Examples

Limit number of requests per second, per directory, to 100 (requests per second will increase by 100 for each active directory found during recursion)

```
./feroxbuster -u http://localhost --rate-limit 100
```

Limit number of requests per second to 100 to the target as a whole (only one directory at a time will be scanned, thus
limiting the number of requests per second overall)

```
./feroxbuster -u http://localhost --rate-limit 100 --scan-limit 1
```

## Demonstration 

![rate-limit](../rate-limit-demo.gif)
