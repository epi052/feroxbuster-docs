---
title: "Stop/Resume Scans"
weight: 10
categories: ["examples"]
tags: ["feature", "resume", "state"]
description: >
  Added in version **1.9.0**
---

## Stop and Resume Scans

Version 1.9.0 adds a few features that allow for completely stopping a scan, and resuming that same scan from a file on
disk.

## Stop the scan 

A simple `Ctrl+C` during a scan will create a file that contains information about the scan that was cancelled.

![save-state](../save-state.png)

```json
// example snippet of state file

{
  "scans": [
    {
      "id": "057016a14769414aac9a7a62707598cb",
      "url": "https://localhost.com",
      "scan_type": "Directory",
      "complete": true
    },
    {
      "id": "400b2323a16f43468a04ffcbbeba34c6",
      "url": "https://localhost.com/css",
      "scan_type": "Directory",
      "complete": false
    }
  ],
  "config": {
    "wordlist": "/wordlists/seclists/Discovery/Web-Content/common.txt",
    "...": "..."
  },
  "responses": [
    {
      "type": "response",
      "url": "https://localhost.com/Login",
      "path": "/Login",
      "wildcard": false,
      "status": 302,
      "content_length": 0,
      "line_count": 0,
      "word_count": 0,
      "headers": {
        "content-length": "0",
        "server": "nginx/1.16.1"
      }
    }
  ]
},
```

## Resume the scan

Based on the example image above, the same scan can be resumed by
using `feroxbuster --resume-from ferox-http_localhost-1606947491.state`. Directories that were already complete are not
rescanned, however partially complete scans are started from the beginning.

![resumed-scan](../resumed-scan.gif)

## Opt-out of saving state 

In order to prevent state file creation when `Ctrl+C` is pressed, you can simply add the entry below to
your `ferox-config.toml`.

```toml
# ferox-config.toml

save_state = false
```
