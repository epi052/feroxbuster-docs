---
title: Silent/Quiet Output
description: Added in version **2.0.0**
---

## Silence all Output or Be Kinda Quiet

Version 2.0.0 introduces `--silent` which is almost equivalent to version 1.x.x's `--quiet`.  

### `--silent`

Good for piping a list of urls to other commands:
  - disables logging (no error messages to screen)
  - don't print banner
  - only display urls during scan

#### example output
```
https://localhost.com/contact
https://localhost.com/about
https://localhost.com/terms
```

### `--quiet`

Good for tmux windows that have notifications enabled as the only updates shown by the scan are new valid responses
and new directories found that are suitable for recursion.
  - hide progress bars
  - don't print banner

#### example output

```
302        0l        0w        0c https://localhost.com/Login
200      126l      281w     4091c https://localhost.com/maintenance
200      126l      281w     4092c https://localhost.com/terms
... more individual entries, followed by the directories being scanned ...
Scanning: https://localhost.com
Scanning: https://localhost.com/homepage
Scanning: https://localhost.com/api
```
