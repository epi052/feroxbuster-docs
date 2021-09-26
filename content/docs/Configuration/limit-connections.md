---
categories: ["configuration"]
tags: ["threads", "limit", "connections", "rate"]
title: "Threads and Connection Limits"
linkTitle: "Threads and Connection Limits"
description: >
  A brief overview of how to limit concurrent connections
---

## A High-Level Overview

This section explains how the `-t` and `-L` options work together to determine the overall aggressiveness of a scan. The
combination of the two values set by these options determines how hard your target will get hit and to some extent also
determines how many resources will be consumed on your local machine.

## A Note on Green Threads

`feroxbuster` uses so-called [green threads](https://en.wikipedia.org/wiki/Green_threads) as opposed to traditional
kernel/OS threads. This means (at a high-level) that the threads are implemented entirely in userspace, within a single
running process. As a result, a scan with 30 green threads will appear to the OS to be a single process with no
additional light-weight processes associated with it as far as the kernel is concerned. As such, there will not be any
impact to process (`nproc`) limits when specifying larger values for `-t`. However, these threads will still consume
file descriptors, so you will need to ensure that you have a suitable `nlimit` set when scaling up the amount of
threads. More detailed documentation on setting appropriate `nlimit` values can be found in
the [No File Descriptors Available](../../faq/no-file-descriptors/) section of the FAQ

## The Implementation

* **Threads**: The `-t` option specifies the maximum amount of active threads *per-directory* during a scan
* **Connection Limits**: The `-L` option specifies the maximum amount of active connections per thread

## Examples

To truly have only 30 active requests to a site at any given time, `-t 30 -L 1` is necessary. Using `-t 30 -L 2` will
result in a maximum of 60 total requests being processed at any given time for that site. And so on. For a conversation
on this, please see [Issue #126](https://github.com/epi052/feroxbuster/issues/126) which may provide more (or less)
clarity 😉
