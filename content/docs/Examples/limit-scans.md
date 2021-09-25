---
title: "Limit Number of Scans"
weight: 4
categories: ["examples"]
tags: ["feature", "limit", "connections"]
description: >
  Added in version **1.2.0**
---

## Limit Total Number of Concurrent Scans

Limit the number of scans permitted to run at any given time. Recursion will still identify new directories, but newly
discovered directories can only begin scanning when the total number of active scans drops below the value passed to
`--scan-limit`.

```
./feroxbuster -u http://127.1 --scan-limit 2
```

![limit-demo](../limit-demo.gif)
