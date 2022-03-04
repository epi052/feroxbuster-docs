---
title: "Filter by Page Similarity"
weight: 12
categories: ["examples"]
tags: ["feature", "filtering", "similar", "fuzzy"]
description: >
  Added in version **1.11.0**
---

## Filter Response by Similarity to A Given Page

{{% alert title="Heads up" color="warning" %}}
- SSDeep/`--filter-similar-to` does not do well at detecting similarity of very small responses
  - The lack of accuracy with very small responses is considered a fair trade-off for not negatively impacting performance
- Using a bunch of `--filter-similar-to` values **may** negatively impact performance
{{% /alert %}}

Version 1.11.0 adds the ability to specify an example page for filtering pages that are similar to the given example.

For example, consider a site that attempts to redirect new users to a `/register` endpoint. The `/register` page has a
CSRF token that alters the page's response slightly with each new request (sometimes affecting overall length). This
means that a simple line/word/char filter won't be able to filter all responses. In order to filter those redirects out,
one could use a command like this:

```
./feroxbuster -u https://somesite.xyz --filter-similar-to https://somesite.xyz/register
```

`--filter-similar-to` requests the page passed to it via CLI (`https://somesite.xyz/register`), after which it hashes 
the response body using the [SSDeep algorithm](https://ssdeep-project.github.io/ssdeep/index.html).  All subsequent 
pages are hashed and compared to the original request's hash. If the comparison of the two hashes meets a certain 
percentage of similarity (currently 95%), then that request will be filtered out.

SSDeep was selected as it does a good job of identifying near-duplicate pages once content-length reaches a certain 
size, while remaining performant.  Other algorithms were tested but resulted in huge performance hits (orders of 
magnitude slower on requests/second).
