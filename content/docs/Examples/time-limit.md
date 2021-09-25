---
title: "Enforce Time Limit"
weight: 11
categories: ["examples"]
tags: ["feature", "limit", "time"]
description: >
  Added in version **1.10.0**
---

## Enforce a Time Limit on Your Scan

Version 1.10.0 adds the ability to set a maximum runtime, or time limit, on your scan. The usage is pretty simple: a
number followed directly by a single character representing seconds, minutes, hours, or days.  `feroxbuster` refers to
this combination as a time_spec.

Examples of possible time_specs:

- `30s` - 30 seconds
- `20m` - 20 minutes
- `1h`  - 1 hour
- `1d`  - 1 day (why??)

A valid time_spec can be passed to `--time-limit` in order to force a shutdown after the given time has elapsed.

![time-limit](../time-limit.gif)
