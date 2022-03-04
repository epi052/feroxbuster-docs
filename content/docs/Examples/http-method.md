---
title: "Specify HTTP Request Method"
weight: 21
categories: ["examples"]
tags: ["feature", "method"]
description: >
  Added in version **2.5.0** by @MD-Levitan
---

## Detect Directory Listing

Version 2.5.0 introduces the ability to specify the HTTP request method sent in each request. Some additional info:

- multiple methods may be used (i.e. `-m POST GET`)
- anything can be specified, not just valid http verbs (i.e. `-m derp`)


## Example

```
feroxbuster -u https://some-example-site.com -m POST GET dErP
```

![http-method](../http-method.gif)