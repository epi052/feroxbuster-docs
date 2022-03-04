---
title: "Detect Directory Listing"
weight: 20
categories: ["examples"]
tags: ["feature", "extract", "heuristic"]
description: >
  Added in version **2.5.0** by @godylockz; revised in **2.6.0**
---

## Detect Directory Listing

Version 2.5.0 introduces the ability to detect when a server has directory listing enabled. When such a directory is found, `feroxbuster` will either report, or report and scan, depending on whether or not `--extract-links` was used.


## Examples

### Without `--extract-links`

When `--extract-links` is **not** used, directory listing is simply reported. No further actions are taken.

```
feroxbuster -u https://some-example-site.com
```

![dir-list-no-tack-e](../dir-list-no-tack-e.png)

### With `--extract-links`

When `--extract-links` is used, each link in the response is extracted and requested.

```
feroxbuster -u https://some-example-site.com --extract-links
```

![dir-list-with-tack-e](../dir-list-with-tack-e.png)