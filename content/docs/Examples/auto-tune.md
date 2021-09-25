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

The AutoTune policy enforces a rate limit on individual directory scans when one of the criteria above is met.  The rate limit self-adjusts every (`timeout / 2`) seconds. If the number of errors have increased during that time, the allowed rate of requests is lowered.  On the other hand, if the number of errors hasn't moved, the allowed rate of requests is increased.  If no additional errors are found after a certain number of checks, the rate limit will be removed completely. 

![auto-tune](../auto-tune-demo.gif)

#### -\-auto-bail

The AutoBail policy aborts individual directory scans when one of the criteria above is met.  They just stop getting scanned, no muss, no fuss. 

![auto-bail](../auto-bail-demo.gif)
