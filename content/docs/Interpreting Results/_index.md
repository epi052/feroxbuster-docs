---
title: "📊 Interpreting Results"
linkTitle: "📊 Interpreting Results"
categories: ["interface"]
tags: ["interface"]
weight: 4
description: >
  How to interpret the results displayed by feroxbuster 
---

`feroxbuster` attempts to be intuitive and easy to understand, however, if you are wondering about any of the scan's
output and what it means, this is the section for you!  

### Discovered Resource

When `feroxbuster` finds a response that you haven't filtered out, it's reported above the progress bars and looks similar to what's pictured below.  

The number of lines, words, and bytes shown here can be used to [filter those responses](../examples/filter-word-line/)

![response-bar-explained](response-bar-explained.png)

### Overall Scan Progress Bar

The top progress bar, colored yellow, tracks the overall scan status.  Its fields are described in the image below.

![total-bar-explained](total-bar-explained.png)

### Directory Scan Progress Bar

All other progress bars, colored cyan, represent a scan of one particular directory and will look similar to what's below.   

![dir-scan-bar-explained](dir-scan-bar-explained.png)

