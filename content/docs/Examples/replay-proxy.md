---
title: "Replay Responses"
weight: 7
categories: ["examples"]
tags: ["feature", "replay", "proxy", "burp"]
description: >
  Added in version **1.5.0**
---

## Replay Responses to a Proxy based on Status Code

{{% alert title="Heads up" color="warning" %}}
this means that for every response that matches your replay criteria, you'll end up sending the request that
generated that response a second time. Depending on the target and your engagement terms (if any), it may not make sense
from a traffic generated perspective.
{{% /alert %}}

The `--replay-proxy` and `--replay-codes` options were added as a way to only send a select few responses to a proxy.
This is in stark contrast to `--proxy` which proxies EVERY request.

Imagine you only care about proxying responses that have either the status code `200` or `302` (or you just don't want
to clutter up your Burp history). These two options will allow you to fine-tune what gets proxied and what doesn't.

```
./feroxbuster -u http://127.1 --replay-proxy http://localhost:8080 --replay-codes 200 302 --insecure
```

![replay-proxy-demo](../replay-proxy-demo.gif)
