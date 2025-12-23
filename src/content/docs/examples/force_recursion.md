---
title: Forced Recursion
description: Added in version **2.7.0**
---

## Forced Recursion

Version 2.7.0 added the ability to tell `feroxbuster` to ignore its typical recursion logic in favor 
of recursing into any 'found' asset. A 'found' asset is an endpoint that was not filtered out by 
other scan settings (i.e. --filter-status or similar). 

## When to use Forced Recursion

In order to know when forced recursion is useful, it's useful to know how `feroxbuster` determines 
into what it should and should not recurse. 

If a response's status code is 300-399 and has `Location` header, we check that header's value. If the `Location` header's value is the same as the response's url + `/`, then we can recurse. 

```
example:

http://localhost/assets => http://localhost/assets/
```

Additionally, if the response's status code is 200-299 or 403, and the url ends with a `/`, we can also recurse.  

The logic above works pretty well in most cases. In certain cases there may be a web server that strips all trailing slashes.

```
example:

http://localhost/assets/ => http://localhost/assets
```

In such a case, the logic above will never recurse, even if there are endpoints underneath the discovered content. This is where `--force-recursion` comes into play.

When `--force-recursion` is used, any 'found' endpoint (i.e. one that isn't filtered out) will be recursed into. Effectively, the logic laid out above is ignored. 

A simple sniff test to see if you need `--force-recursion` is to add `--add-slash` to your scan and see if your target returns this style of redirect.

```
http://localhost/assets/ => http://localhost/assets
```
