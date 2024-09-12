---
categories: ["configuration"]
tags: ["default"]
title: "Default Values"
linkTitle: "Default Values"
description: >
  What's baked in already
---

## Default Values

Configuration begins with the following built-in default values baked into the binary:

- timeout: `7` seconds
- follow redirects: `false`
- wordlist: `/usr/share/seclists/Discovery/Web-Content/raft-medium-directories.txt`
- threads: `50`
- verbosity: `0` (no logging enabled)
- scan_limit: `0` (no limit imposed on concurrent scans)
- rate_limit: `0` (no limit imposed on requests per second)
- status_codes: All valid status codes
- user_agent: `feroxbuster/VERSION`
- recursion depth: `4`
- auto-filter wildcards - `true`
- output: `stdout`
- save_state: `true` (create a state file in cwd when `Ctrl+C` is received)
- backup_extensions: `["~", ".bak", ".bak2", ".old", ".1"]`
- protocol: `https`