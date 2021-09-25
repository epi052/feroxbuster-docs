---
title: "SSL Error ... verify failed"
linkTitle: ""
description: >
  use the `-k|--insecure` flag
---

## SSL Error routines:tls_process_server_certificate:certificate verify failed

In the event you see an error similar to

![self-signed](../insecure.png)

```
error trying to connect: error:1416F086:SSL routines:tls_process_server_certificate:certificate verify failed:ssl/statem/statem_clnt.c:1913: (self signed certificate)
```

You just need to add the `-k|--insecure` flag to your command.

`feroxbuster` rejects self-signed certs and other "insecure" certificates/site configurations by default. You can choose
to scan these services anyway by telling `feroxbuster` to ignore insecure server certs.
