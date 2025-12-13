---
title: "Auto-tune / Auto-bail"
weight: 16
categories: ["examples"]
tags: ["feature", "limit", "rate"]
description: >
  Added in version **2.1.0**
---

## Auto-tune or Auto-bail from scans

Version 2.1.0 introduces the `--auto-tune` and `--auto-bail` flags. You can think of these flags as Policies. Both actions (tuning and bailing) are triggered by the same criteria (below).  Policies are only enforced after at least 50 requests have been made (or # of threads, if that's > 50).

Policy Enforcement Criteria:
  - number of general errors (timeouts, etc) is higher than half the number of threads (or at least 25 if threads are lower) (per directory scanned)
  - 90% of responses are `403|Forbidden` (per directory scanned)
  - 30% of requests are `429|Too Many Requests` (per directory scanned)

> both demo gifs below use --timeout to overload a single-threaded python web server and elicit timeouts

#### -\-auto-tune

The auto-tune policy enforces a rate limit on individual directory scans when one of the criteria above is met.  The rate limit self-adjusts every (`timeout / 2`) seconds. If the number of errors have increased during that time, the allowed rate of requests is lowered.  On the other hand, if the number of errors hasn't moved, the allowed rate of requests is increased. After three consecutive upward rate adjustments without new errors, the rate limit increases back to the original request rate and is then removed. 

**Interaction with --rate-limit:** As of version 2.13.1, when both `--auto-tune` and `--rate-limit` are used together, `--rate-limit` serves as a hard cap on auto-tune's adjustments. auto-tune will never exceed the specified rate limit, and when it would normally remove the rate limit entirely (after successful recovery), it will instead reset to the `--rate-limit` value. See the [Rate Limiting](../rate-limit) page for more details and examples.

![auto-tune](../auto-tune-demo.gif)

#### -\-auto-bail

The AutoBail policy aborts individual directory scans when one of the criteria above is met.  They just stop getting scanned, no muss, no fuss. 

![auto-bail](../auto-bail-demo.gif)
