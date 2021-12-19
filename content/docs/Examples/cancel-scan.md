---
title: "Scan Management Menu"
weight: 13
categories: ["examples"]
tags: ["feature", "pause", "cancel", "add", "menu"]
description: >
  Added in version **1.12.0**; Revised in version **2.4.1**
---

## Add or Cancel a Recursive Scan Interactively

{{% alert title="Note" %}}
Scans that are started via `-u` or passed in through `--stdin` cannot be cancelled, only scans found via `--extract-links` or recursion are eligible.
{{% /alert %}}


Version 1.12.0 expanded the pause/resume functionality introduced in [v1.4.0](../pause-scan/) by 
adding an interactive menu from which currently running recursive scans can be cancelled, without affecting the overall scan.  Scans can still be paused indefinitely by pressing `ENTER`.

Version 2.4.1 expanded functionality even further with the ability to add a brand-new scan. Now that cancelling is no
longer the only action available to users, the name has been updated to the **Scan Management Menu**™. 

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

## Demonstration

Here is a short demonstration of the menu's capabilities.

![cancel-scan](../cancel-scan.gif)
