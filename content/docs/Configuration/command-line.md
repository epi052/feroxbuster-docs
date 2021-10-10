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
    feroxbuster [FLAGS] [OPTIONS] --url <URL>...

FLAGS:
    -f, --add-slash        
            Append / to each request

        --auto-bail        
            Automatically stop scanning when an excessive amount of errors are encountered

        --auto-tune        
            Automatically lower scan rate when an excessive amount of errors are encountered

    -D, --dont-filter      
            Don't auto-filter wildcard responses

    -e, --extract-links    
            Extract links from response body (html, javascript, etc...); make new requests based on findings (default:
            false)
    -h, --help             
            Prints help information

    -k, --insecure         
            Disables TLS certificate validation

        --json             
            Emit JSON logs to --output and --debug-log instead of normal text

    -n, --no-recursion     
            Do not scan recursively

    -q, --quiet            
            Hide progress bars and banner (good for tmux windows w/ notifications)

    -r, --redirects        
            Follow redirects

        --silent           
            Only print URLs + turn off logging (good for piping a list of urls to other commands)

        --stdin            
            Read url(s) from STDIN

    -V, --version          
            Prints version information

    -v, --verbosity        
            Increase verbosity level (use -vv or more for greater effect. [CAUTION] 4 -v's is probably too much)


OPTIONS:
        --debug-log <FILE>                        
            Output file to write log entries (use w/ --json for JSON entries)

    -d, --depth <RECURSION_DEPTH>
            Maximum recursion depth, a depth of 0 is infinite recursion (default: 4)

    -x, --extensions <FILE_EXTENSION>...          
            File extension(s) to search for (ex: -x php -x pdf js)

    -N, --filter-lines <LINES>...                 
            Filter out messages of a particular line count (ex: -N 20 -N 31,30)

    -X, --filter-regex <REGEX>...
            Filter out messages via regular expression matching on the response's body (ex: -X '^ignore me$')

        --filter-similar-to <UNWANTED_PAGE>...
            Filter out pages that are similar to the given page (ex. --filter-similar-to http://site.xyz/soft404)

    -S, --filter-size <SIZE>...                   
            Filter out messages of a particular size (ex: -S 5120 -S 4927,1970)

    -C, --filter-status <STATUS_CODE>...          
            Filter out status codes (deny list) (ex: -C 200 -C 401)

    -W, --filter-words <WORDS>...                 
            Filter out messages of a particular word count (ex: -W 312 -W 91,82)

    -H, --headers <HEADER>...                     
            Specify HTTP headers (ex: -H Header:val 'stuff: things')

    -o, --output <FILE>                           
            Output file to write results to (use w/ --json for JSON entries)

        --parallel <PARALLEL_SCANS>
            Run parallel feroxbuster instances (one child process per url passed via stdin)

    -p, --proxy <PROXY>
            Proxy to use for requests (ex: http(s)://host:port, socks5(h)://host:port)

    -Q, --query <QUERY>...                        
            Specify URL query parameters (ex: -Q token=stuff -Q secret=key)

        --rate-limit <RATE_LIMIT>
            Limit number of requests per second (per directory) (default: 0, i.e. no limit)

    -R, --replay-codes <REPLAY_CODE>...
            Status Codes to send through a Replay Proxy when found (default: --status-codes value)

    -P, --replay-proxy <REPLAY_PROXY>
            Send only unfiltered requests through a Replay Proxy, instead of all requests

        --resume-from <STATE_FILE>
            State file from which to resume a partially complete scan (ex. --resume-from ferox-1606586780.state)

    -L, --scan-limit <SCAN_LIMIT>                 
            Limit total number of concurrent scans (default: 0, i.e. no limit)

    -s, --status-codes <STATUS_CODE>...
            Status Codes to include (allow list) (default: 200 204 301 302 307 308 401 403 405 500)

    -t, --threads <THREADS>                       
            Number of concurrent threads (default: 50)

        --time-limit <TIME_SPEC>                  
            Limit total run time of all scans (ex: --time-limit 10m)

    -T, --timeout <SECONDS>                       
            Number of seconds before a request times out (default: 7)

    -u, --url <URL>...                            
            The target URL(s) (required, unless --stdin used)

        --dont-scan <URL>...                      
            URL(s) or Regex Pattern(s) to exclude from recursion/scans

    -a, --user-agent <USER_AGENT>                 
            Sets the User-Agent (default: feroxbuster/VERSION)

    -w, --wordlist <FILE>                         
            Path to the wordlist
```
