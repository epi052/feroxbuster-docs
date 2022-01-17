
---
title: "🧐 Comparison w/ Similar Tools"
linkTitle: "🧐 Comparison w/ Similar Tools"
categories: ["comparison"]
tags: ["gobuster", "ffuf", "rustbuster"]
weight: 8
description: >
  Feature set comparison of similar scanning tools
---

There are quite a few similar tools for forced browsing/content discovery. Burp Suite Pro, Dirb, Dirbuster, etc...
However, in my opinion, there are two that set the standard: [gobuster](https://github.com/OJ/gobuster) and
[ffuf](https://github.com/ffuf/ffuf). Both are mature, feature-rich, and all-around incredible tools to use.

So, why would you ever want to use feroxbuster over ffuf/gobuster? In most cases, you probably won't. ffuf in particular
can do the vast majority of things that feroxbuster can, while still offering boatloads more functionality. Here are a
few of the use-cases in which feroxbuster may be a better fit:

- You want a **simple** tool usage experience
- You want to be able to run your content discovery as part of some crazy 12 command unix **pipeline extravaganza**
- You want to scan through a **SOCKS** proxy
- You want **auto-filtering** of Wildcard responses by default
- You want an integrated **link extractor/robots.txt parser** to increase discovered endpoints
- You want **recursion** along with some other thing mentioned above (ffuf also does recursion)
- You want a **configuration file** option for overriding built-in default values for your scans

|                                                                          | feroxbuster | gobuster | ffuf |
|--------------------------------------------------------------------------|---|---|---|
| fast                                                                     | ✔ | ✔ | ✔ |
| allows recursion                                                         | ✔ |   | ✔ |
| can specify query parameters                                             | ✔ |   | ✔ |
| SOCKS proxy support                                                      | ✔ |   | ✔ |
| multiple target scan (via stdin or multiple -u)                          | ✔ |   | ✔ |
| configuration file for default value override                            | ✔ |   | ✔ |
| can accept urls via STDIN as part of a pipeline                          | ✔ |   | ✔ |
| can accept wordlists via STDIN                                           |   | ✔ | ✔ |
| filter based on response size, wordcount, and linecount                  | ✔ |   | ✔ |
| auto-filter wildcard responses                                           | ✔ |   | ✔ |
| performs other scans (vhost, dns, etc)                                   |   | ✔ | ✔ |
| time delay / rate limiting                                               |   | ✔ | ✔ |
| extracts links from response body to increase scan coverage (`v1.1.0`)   | ✔ |   |   |
| limit number of concurrent recursive scans (`v1.2.0`)                    | ✔ |   |   |
| filter out responses by status code (`v1.3.0`)                           | ✔ | ✔ | ✔ |
| interactive pause and resume of active scan (`v1.4.0`)                   | ✔ |   |   |
| replay only matched requests to a proxy (`v1.5.0`)                       | ✔ |   | ✔ |
| filter out responses by line & word count (`v1.6.0`)                     | ✔ |   | ✔ |
| json output (ffuf supports other formats as well) (`v1.7.0`)             | ✔ |   | ✔ |
| filter out responses by regular expression (`v1.8.0`)                    | ✔ |   | ✔ |
| save scan's state to disk (can pick up where it left off) (`v1.9.0`)     | ✔ |   |   |
| maximum run time limit (`v1.10.0`)                                       | ✔ |   | ✔ |
| use robots.txt to increase scan coverage (`v1.10.2`)                     | ✔ |   |   |
| use example page's response to fuzzily filter similar pages  (`v1.11.0`) | ✔ |   |   |
| cancel a recursive scan interactively (`v1.12.0`)                        | ✔ |   |   |
| limit number of requests per second (`v2.0.0`)                           | ✔ | ✔ | ✔ |
| hide progress bars or be silent (or some variation) (`v2.0.0`)           | ✔ | ✔ | ✔ |
| automatically tune scans based on errors/403s/429s  (`v2.1.0`)           | ✔ |   |   |
| automatically stop scans based on errors/403s/429s  (`v2.1.0`)           | ✔ |   | ✔ |
| run scans in parallel (1 process per target) (`v2.2.0`)                  | ✔ |   |   |
| prevent requests to given domain/folder/file (`v2.3.0`)                  | ✔ |   |   |
| send a random user-agent with each request (`v2.4.0`)                    | ✔ |   |   |
| send arbitrary http methods (GET, POST, etc...) (`v2.5.0`)               | ✔ | ✔ | ✔ |
| auto-detect server's with directory listing (`v2.5.0`)                   | ✔ |   |   |
| scrape html tags for additional content (`v2.5.0`)                       | ✔ |   |   |

Of note, there's another written-in-rust content discovery tool, [rustbuster](https://github.com/phra/rustbuster). I
came across rustbuster when I was naming my tool (😢). I don't have any experience using it, but it appears to be able
to do POST requests with an HTTP body, has SOCKS support, and has an 8.3 shortname scanner (in addition to vhost dns,
directory, etc...). In short, it definitely looks interesting and may be what you're looking for as it has some
capability I haven't seen in similar tools.


