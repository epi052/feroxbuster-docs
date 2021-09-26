---
title: "Scan Cancel Menu"
weight: 13
categories: ["examples"]
tags: ["feature", "pause", "cancel", "menu"]
description: >
  Added in version **1.12.0**
---

## Cancel a Recursive Scan Interactively

{{% alert title="Note" %}}
Scans that are started via `-u` or passed in through `--stdin` cannot be cancelled, only scans found via `--extract-links` or recursion are eligible.
{{% /alert %}}


Version 1.12.0 expanded the pause/resume functionality introduced in [v1.4.0](docs/examples/pause-scan/) by 
adding an interactive menu from which currently running recursive scans can be cancelled, without affecting the overall scan.  Scans can still be paused indefinitely by pressing `ENTER`, however, the   

## Example 

Below is an example of the Scan Cancel Menu™.

![cancel-menu](../cancel-menu.png)

## Usage

Using the menu is pretty simple:
- Press `ENTER` to view the menu
- Choose a scan to cancel by entering its scan index (`1`)
  - more than one scan can be selected by using a comma-separated list of indexes and/or ranges (`1-4,8,9-13` ... etc)
- Confirm selections, after which all non-cancelled scans will resume
  - To skip confirmation, simply add a `-f` somewhere in your input (`3-5 -f`)

## Demonstration

Here is a short demonstration of force cancelling a range of scans followed by a single scan with interactive prompt.

![cancel-scan](../cancel-scan.gif)
