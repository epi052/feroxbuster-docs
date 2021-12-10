---
title: "Extract Links"
weight: 3
categories: ["examples"]
tags: ["feature", "extract", "links"]
description: >
  Added in version **1.1.0**
---

## Extract Links from Response Body 

Search through the body of valid responses (html, javascript, etc...) for additional endpoints to scan. This turns
`feroxbuster` into a hybrid that looks for both linked and unlinked content.

Example request/response with `--extract-links` enabled:

- Make request to `http://example.com/index.html`
- Receive, and read in, the `body` of the response
- Search the `body` for absolute and relative links (i.e. `homepage/assets/img/icons/handshake.svg`)
- Add the following directories for recursive scanning:
    - `http://example.com/homepage`
    - `http://example.com/homepage/assets`
    - `http://example.com/homepage/assets/img`
    - `http://example.com/homepage/assets/img/icons`
- Make a single request to `http://example.com/homepage/assets/img/icons/handshake.svg`

```
./feroxbuster -u http://127.1 --extract-links
```

## Comparison 

Here's a comparison of a wordlist-only scan vs `--extract-links`
using [Feline](https://www.hackthebox.eu/home/machines/profile/274) from Hack the Box:

### Wordlist only

![normal-scan-cmp-extract](../normal-scan-cmp-extract.gif)

### With `--extract-links`

![extract-scan-cmp-normal](../extract-scan-cmp-normal.gif)

## Extract from robots.txt (`v1.10.2`)

In addition to [extracting links from the response body](#extract-links-from-response-body), using
`--extract-links` makes a request to `/robots.txt` and examines all `Allow` and `Disallow` entries. Directory entries
are added to the scan queue, while file entries are requested and then reported if appropriate.

## Using Extract Links for Web Crawling

By supplying a single line word list containing only the root path `feroxbuster` can also be used to simulate web
crawling behavior. This appears to give results comparable to [hakrawlwer](https://github.com/hakluke/hakrawler)
although `feroxbuster` is not quite as fast.
