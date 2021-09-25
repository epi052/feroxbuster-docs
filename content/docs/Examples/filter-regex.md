---
title: "Filter by Regex"
weight: 9
categories: ["examples"]
tags: ["feature", "filtering"]
description: >
  Added in version **1.8.0**
---

## Filter Response Using a Regular Expression

{{% alert title="Heads up" color="warning" %}}
Using regular expressions to filter large responses or many regular expressions may negatively impact
performance.
{{% /alert %}}

Version 1.3.0 included an overhaul to the filtering system which allows for a wide array of filters to be added with
minimal effort. The latest addition is a Regular Expression Filter. As responses come back from the scanned server,
the **body** of the response is checked against the filter's regular expression. If the expression is found in the body,
then that response is filtered out.

```
./feroxbuster -u http://127.1 --filter-regex '[aA]ccess [dD]enied.?' --output results.txt --json
```
