---
title: "Specify Cookies"
weight: 22
categories: ["examples"]
tags: ["feature", "cookies", "headers"]
description: >
  Added in version **2.5.0** by @7047payloads
---

## Specify Cookies Directly

Version 2.5.0 gave http cookies their own flag, separate from `-H, --headers`. The new `-b, --cookies` is simply
syntactic sugar around `-H, --headers`.

## Example

```
feroxbuster -u https://some-example-site.com -b sessionId=38afes7a8
```

![session-cookie](../session-cookie.png)