---
title: "Scan Management Menu"
weight: 13
categories: ["examples"]
tags: ["feature", "pause", "cancel", "add", "menu"]
description: >
  Added in version **1.12.0**; Revised in versions **2.4.1** and **2.6.2**
---

## Add or Cancel a Recursive Scan Interactively

{{% alert title="Note" %}}
Scans that are started via `-u` or passed in through `--stdin` cannot be cancelled, only scans found via `--extract-links` or recursion are eligible.
{{% /alert %}}


Version 1.12.0 expanded the pause/resume functionality introduced in [v1.4.0](../pause-scan/) by 
adding an interactive menu from which currently running recursive scans can be cancelled, without affecting the overall scan.  Scans can still be paused indefinitely by pressing `ENTER`.

Version 2.4.1 expanded functionality even further with the ability to add a brand-new scan. Now that cancelling is no
longer the only action available to users, the name has been updated to the **Scan Management Menu**™. 

Version 2.6.2 brought yet another capability: users can now add new filters to their current scan. Adding a new filter
works the same as though you had specified `--filter-*` on the command-line. 

## Example 

Below is an example of the Scan ~~Cancel~~ Management Menu™.

![cancel-menu](../cancel-menu.png)

## Usage

Using the menu is pretty simple: from a running scan, press `ENTER` to view the menu

### Cancel a Scan

- Choose a scan to cancel by entering `cancel` or `c` followed by its scan index (`1`)
  - more than one scan can be selected by using a comma-separated list of indexes and/or ranges (`1-4,8,9-13` ... etc)
- Confirm selections, after which all non-cancelled scans will resume
  - To skip confirmation, simply add a `-f` somewhere in your input (`3-5 -f`)

### Add a New Url for Scanning

- Enter `add` or `a` followed by the new url you'd liked you add to the current scan queue 

### Add a New Response Filter 

- Enter `new-filter` or `n`, then the type of filter you'd like to add, and the value to pass to the filter itself.

Valid filter types:
- `status`
- `lines`
- `size`
- `words`
- `regex`
- `similarity`

Examples: 

- `n status 301` - equivalent to command-line option `--filter-status 301`
- `new-filter lines 1` - equivalent to command-line option `--filter-lines 1`
- `new-filter words 7` - equivalent to command-line option `--filter-words 7`
- `n regex token:[0-9a-zA-Z]+` - equivalent to command-line option `--filter-regex 'token:[0-9a-zA-Z]+'`
- `n similarity https://target.url/page/with/csrf-token` - equivalent to command-line option `--filter-similar-to https://target.url/page/with/csrf-token`
- `new-filter size 1337` - equivalent to command-line option `--filter-size 1337`


## Demonstration

Here is a short demonstration of the menu's capabilities.

![cancel-scan](../cancel-scan.gif)
