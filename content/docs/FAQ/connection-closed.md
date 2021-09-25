---
title: "Connection closed before message completed"
linkTitle: "Connection closed before message completed"
description: >
  lower your `-t` value
---

### Connection closed before message completed

The error in question can be boiled down to 'networking stuff'. `feroxbuster`
uses [reqwest](https://docs.rs/reqwest/latest/) which uses [hyper](https://docs.rs/hyper/latest/hyper/) to make requests
to the server. [This issue report](https://github.com/hyperium/hyper/issues/2136#issuecomment-589345238) to the hyper
project explains what is happening (quoted below to save you a click). This isn't a bug so much as it's a
target-specific tuning issue. When lowering the `-t` value, the error doesn't occur (or happens much less frequently).

This isn't a bug. Simply slow down the scan. A `-t` value of 50 was chosen as a sane default that's still quite fast out
of the box. However, network related errors may occur when the client and/or server become over-saturated.
The [Threads and Connection Limits At A High-Level](/docs/configuration/limit-connections/) section details how
to accomplish per-target tuning.

> This is just due to the racy nature of networking.
>
> hyper has a connection pool of idle connections, and it selected one to send your request. Most of the time, hyper will receive the server's FIN and drop the dead connection from its pool. But occasionally, a connection will be selected from the pool and written to at the same time the server is deciding to close the connection. Since hyper already wrote some of the request, it can't really retry it automatically on a new connection, since the server may have acted already.
