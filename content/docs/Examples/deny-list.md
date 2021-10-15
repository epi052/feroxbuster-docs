---
title: "Deny List"
weight: 18
categories: ["examples"]
tags: ["feature", "deny", "block"]
description: >
  Added in version **2.3.0**
---

## Prevent Specific Domain/Directory Scans

{{% alert title="Heads up" color="warning" %}}
This action is taken **BEFORE** a request is sent to the target, which differs from the filter-* options that are applied to responses
{{% /alert %}}

{{% alert title="Heads up" color="info" %}}
Version 2.3.4 added the ability to pass **regular expressions** to `--dont-scan` (`/[jc]ss?`). 
{{% /alert %}}

Version 2.3.0 introduces the `--dont-scan` option. The values passed to `--dont-scan` act as a deny-list.  The values 
can be an entire domain (`http://some.domain`), a specific folder (`http://some.domain/js`), or a specific file 
(`http://some.domain/some-application/stupid-page.php`).  If a folder/domain is used any sub-folder/sub-file of the 
url passed to `--dont-scan` will be **blocked before it can be requested**.

At the request of GitHub user [@mzpqnxow](https://github.com/mzpqnxow), support for regular expressions was added to 
feroxbuster in version 2.4.0. A given regular expression is applied to the **entire url**. This means you can prevent 
requests based on the url's scheme, domain, ip, port, path, etc...

## URL Example 

Given the command 

```
./feroxbuster -u http://some.domain --dont-scan http://some.domain/js
```

`http://some.domain` will be scanned recursively, but any url path that begins with `/js/` will not be requested at all.

### Denying a Parent Directory

{{% alert title="Heads up" color="warning" %}}
This behavior is only available when passing an absolute url to `--dont-scan` 
{{% /alert %}}

A caveat to the sub-folder/sub-file rule is when the value passed to `--dont-scan` is a parent of the scan you want to 
perform. When denying at a hierarchical level higher than your scan, only sub-files/sub-folders of your `-u|--stdin` 
value(s) will be processed.

```
./feroxbuster -u http://some.domain/some-application --dont-scan http://some.domain/
```

In the command above, only `http://some.domain/some-application` and children of that directory found via recursion will
be scanned. Anything *outside* of `/some-application` will not be scanned.

## Regular Expression Example

At its most basic, the regular expression can simply be a patten to a folder that you'd like to avoid scanning. A prime
target for this is the `css` directory.

```
./feroxbuster -u http://some.domain --dont-scan '/css'
```

`http://some.domain` will be scanned recursively, but any url path that contains `/css` will not be requested
at all. Note that this will prevent requests to urls such as `http://some.domain/some/folder/css` and 
`http://some.domain/cssssssssssssssssssssssssss`.  Without additional context to the regular expression, it's simply
a naive match anywhere in the given url. 

### Additional Examples 

Avoid falling into match/rewrite traps that some servers and reverse-proxies have, which can result in recursion loops
like `/.bower-cache/.bower-registry/.bower-cache/`

```
./feroxbuster -u http://some.domain --dont-scan '/\..*?/\.'
```

Prevent requests to any `http` url

```
./feroxbuster -u http://some.domain --dont-scan http:
```

Prevent multiple directories with a single regex

```
./feroxbuster -u http://some.domain --dont-scan '/[jc]ss?'
```
```
./feroxbuster -u http://some.domain --dont-scan '/(js|css|images|img)'
```
