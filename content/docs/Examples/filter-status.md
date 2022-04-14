---
title: "Filter by Status"
weight: 5
categories: ["examples"]
tags: ["feature", "filtering", "status"]
description: >
  Added in version **1.3.0** updated in **2.7.0**
---

## Filter Response by Status Code

Version 1.3.0 included an overhaul to the filtering system which will allow for a wide array of filters to be added with
minimal effort. The first such filter is a **Status Code** Filter. As responses come back from the scanned server, each one
is checked against a list of known filters and either displayed or not according to which filters are set.

```
./feroxbuster -u http://127.1 --filter-status 301
```

## 2.7.0 Update

The `--filter-status` behavior was updated in 2.7.0. `--filter-status` is now a deny-list for the values provided, while
every other status code will be allowed through. 

### Old Behavior (1.3.0 - 2.6.4)

There used to be two points at which a status code was checked for filtering, and both could be used in the same run. These
were the values provided to `--filter-status` and `--status-codes` or `-C` and `-s` for short.

When a response came back, all `--filter-*` options, including those passed to `--filter-status`, were checked to see if the response
should be filtered out. If the response had a status code that matched a filter, it wouldn't proceed beyond this point. That
meant that values passed to `--status-codes` were never checked if a response was filtered out at this point in the process.

If a status code wasn't explicitly filtered out, it moved along until it was checked against the values in `--status-codes`.
If it wasn't explicitly allowed, then it was effectively filtered out at this second gate.

### New Behavior (2.7.0+)

As of 2.7.0, `--filter-status` and `--status-codes` are mutually exclusive options. This means in choosing
one or the other, the one not chosen is ignored. They no longer work in tandem.

`--status-codes` works the same way it always has: by providing an allow-list for status codes. Any status 
code not included in `--status-codes` will be filtered out.

`--filter-status`, on the other hand, now operates wholly on its own. If a value is given to `--filter-status`,
that status code will be filtered out, while all other status codes are allowed to proceed. This is a much
truer version of a deny-list for status codes. It allows you to see 'all other' status code responses. 

![filter-status-demo](../filter-status-demo.gif)
