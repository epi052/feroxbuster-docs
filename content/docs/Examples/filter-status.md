---
title: "Filter by Status"
weight: 5
categories: ["examples"]
tags: ["feature", "filtering", "status"]
description: >
  Added in version **1.3.0**
---

## Filter Response by Status Code

Version 1.3.0 included an overhaul to the filtering system which will allow for a wide array of filters to be added with
minimal effort. The first such filter is a **Status Code** Filter. As responses come back from the scanned server, each one
is checked against a list of known filters and either displayed or not according to which filters are set.

```
./feroxbuster -u http://127.1 --filter-status 301
```
