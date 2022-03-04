---
title: "Random User-Agents"
weight: 19
categories: ["examples"]
tags: ["feature", "user-agent", "headers"]
description: >
  Added in version **2.4.0** by Daniel Saxton
---

## Randomize User-Agent Header

Version 2.4.0 introduces the `--random-agent` option. When used, `--random-agent` selects a User-Agent value from one of the values below and 
includes it in that particular request.

- `Mozilla/5.0 (Linux; Android 8.0.0; SM-G960F Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.84 Mobile Safari/537.36`
- `Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1`
- `Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Microsoft; RM-1152) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Mobile Safari/537.36 Edge/15.15254`
- `Mozilla/5.0 (Linux; Android 7.0; Pixel C Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/52.0.2743.98 Safari/537.36`
- `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246`
- `Mozilla/5.0 (X11; CrOS x86_64 8172.45.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.64 Safari/537.36`
- `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/601.3.9 (KHTML, like Gecko) Version/9.0.2 Safari/601.3.9`
- `Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36`
- `Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:15.0) Gecko/20100101 Firefox/15.0.1`
- `Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)`
- `Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)`
- `Mozilla/5.0 (compatible; Yahoo! Slurp; http://help.yahoo.com/help/us/ysearch/slurp)`


## Example 

```
feroxbuster -u https://some-example-site.com -k --proxy http://127.0.0.1:8080 --random-agent
```

![random-agent](../random-agent.gif)