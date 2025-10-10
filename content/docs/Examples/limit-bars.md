---
title: "Limit Number of Progress Bars"
weight: 28
categories: ["examples"]
tags: ["feature", "bars", "progress", "limit"]
description: >
  Added in version **2.11.0**
---

## Limit the number of progress bars shown at any given time

Version 2.11.0 introduces the ability to limit the number of progress bars feroxbuster displays at any given time. This is useful for very large and/or long running scans.

## Example

```
feroxbuster -u https://some-example-site.com --limit-bars 4
```

![limit-bars-demo](../limit-bars-demo.gif)
