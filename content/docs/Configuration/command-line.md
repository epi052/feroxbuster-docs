---
categories: ["configuration", "interface"]
tags: ["cli", "options", "arguments", "interface"]
title: "Command Line Interface"
linkTitle: "Command Line Interface"
description: >
  Configure feroxbuster settings using the command line 
---

### Command Line Parsing

Finally, after parsing the available config file, any options/arguments given on the commandline will override any
values that were set as a built-in or config-file value.

```
USAGE:
    feroxbuster [OPTIONS]

OPTIONS:
    -h, --help       Print help information
    -V, --version    Print version information

Target selection:
        --resume-from <STATE_FILE>    State file from which to resume a partially complete scan (ex. --resume-from ferox-1606586780.state)
        --stdin                       Read url(s) from STDIN
    -u, --url <URL>                   The target URL (required, unless [--stdin || --resume-from] used)

Composite settings:
        --burp           Set --proxy to http://127.0.0.1:8080 and set --insecure to true
        --burp-replay    Set --replay-proxy to http://127.0.0.1:8080 and set --insecure to true
        --smart          Set --extract-links, --auto-tune, --collect-words, and --collect-backups to true
        --thorough       Use the same settings as --smart and set --collect-extensions to true

Proxy settings:
    -p, --proxy <PROXY>                    Proxy to use for requests (ex: http(s)://host:port, socks5(h)://host:port)
    -P, --replay-proxy <REPLAY_PROXY>      Send only unfiltered requests through a Replay Proxy, instead of all requests
    -R, --replay-codes <REPLAY_CODE>...    Status Codes to send through a Replay Proxy when found (default: --status-codes value)

Request settings:
    -a, --user-agent <USER_AGENT>           Sets the User-Agent (default: feroxbuster/2.7.0)
    -A, --random-agent                      Use a random User-Agent
    -b, --cookies <COOKIE>...               Specify HTTP cookies to be used in each request (ex: -b stuff=things)
        --data <DATA>                       Request's Body; can read data from a file if input starts with an @ (ex: @post.bin)
    -f, --add-slash                         Append / to each request's URL
    -H, --headers <HEADER>...               Specify HTTP headers to be used in each request (ex: -H Header:val -H 'stuff: things')
    -m, --methods <HTTP_METHODS>...         Which HTTP request method(s) should be sent (default: GET)
    -Q, --query <QUERY>...                  Request's URL query parameters (ex: -Q token=stuff -Q secret=key)
    -x, --extensions <FILE_EXTENSION>...    File extension(s) to search for (ex: -x php -x pdf js)

Request filters:
        --dont-scan <URL>...    URL(s) or Regex Pattern(s) to exclude from recursion/scans

Response filters:
    -C, --filter-status <STATUS_CODE>...          Filter out status codes (deny list) (ex: -C 200 -C 401)
        --filter-similar-to <UNWANTED_PAGE>...    Filter out pages that are similar to the given page (ex. --filter-similar-to http://site.xyz/soft404)
    -N, --filter-lines <LINES>...                 Filter out messages of a particular line count (ex: -N 20 -N 31,30)
    -s, --status-codes <STATUS_CODE>...           Status Codes to include (allow list) (default: 200 204 301 302 307 308 401 403 405)
    -S, --filter-size <SIZE>...                   Filter out messages of a particular size (ex: -S 5120 -S 4927,1970)
    -W, --filter-words <WORDS>...                 Filter out messages of a particular word count (ex: -W 312 -W 91,82)
    -X, --filter-regex <REGEX>...                 Filter out messages via regular expression matching on the response's body (ex: -X '^ignore me$')

Client settings:
    -k, --insecure             Disables TLS certificate validation in the client
    -r, --redirects            Allow client to follow redirects
    -T, --timeout <SECONDS>    Number of seconds before a client's request times out (default: 7)

Scan settings:
        --auto-bail                    Automatically stop scanning when an excessive amount of errors are encountered
        --auto-tune                    Automatically lower scan rate when an excessive amount of errors are encountered
    -d, --depth <RECURSION_DEPTH>      Maximum recursion depth, a depth of 0 is infinite recursion (default: 4)
    -D, --dont-filter                  Don't auto-filter wildcard responses
    -e, --extract-links                Extract links from response body (html, javascript, etc...); make new requests based on findings
        --force-recursion              Force recursion attempts on all 'found' endpoints (still respects recursion depth)
    -L, --scan-limit <SCAN_LIMIT>      Limit total number of concurrent scans (default: 0, i.e. no limit)
    -n, --no-recursion                 Do not scan recursively
        --parallel <PARALLEL_SCANS>    Run parallel feroxbuster instances (one child process per url passed via stdin)
        --rate-limit <RATE_LIMIT>      Limit number of requests per second (per directory) (default: 0, i.e. no limit)
    -t, --threads <THREADS>            Number of concurrent threads (default: 50)
        --time-limit <TIME_SPEC>       Limit total run time of all scans (ex: --time-limit 10m)
    -w, --wordlist <FILE>              Path to the wordlist

Dynamic collection settings:
    -B, --collect-backups                     Automatically request likely backup extensions for "found" urls
    -E, --collect-extensions                  Automatically discover extensions and add them to --extensions (unless they're in --dont-collect)
    -g, --collect-words                       Automatically discover important words from within responses and add them to the wordlist
    -I, --dont-collect <FILE_EXTENSION>...    File extension(s) to Ignore while collecting extensions (only used with --collect-extensions)

Output settings:
        --debug-log <FILE>    Output file to write log entries (use w/ --json for JSON entries)
        --json                Emit JSON logs to --output and --debug-log instead of normal text
        --no-state            Disable state output file (*.state)
    -o, --output <FILE>       Output file to write results to (use w/ --json for JSON entries)
    -q, --quiet               Hide progress bars and banner (good for tmux windows w/ notifications)
        --silent              Only print URLs + turn off logging (good for piping a list of urls to other commands)
    -v, --verbosity           Increase verbosity level (use -vv or more for greater effect. [CAUTION] 4 -v's is probably too much)
```
