---
title: Filter by Word/Line Count
description: Added in version **1.6.0**
---

## Filter Response by Word Count & Line Count

In addition to filtering on the size of a response, version 1.6.0 added the ability to filter out responses based on the
number of lines and/or words contained within the response body. This change drove a change to the information displayed
to the user as well. This section will detail the new information and how to make use of it with the new filters
provided.

## Relevant CLI options

```text
    -N, --filter-lines <LINES>...                 
            Filter out messages of a particular line count (ex: -N 20 -N 31,30)

    -W, --filter-words <WORDS>...                 
            Filter out messages of a particular word count (ex: -W 312 -W 91,82)
```

## How output relates to filters

![response-bar-explained](/feroxbuster-docs/images/interpreting-results/response-bar-explained.png)


Filters that correspond to the output above:

- **Response status code**: filtered with `-C|--filter-status`
- **# of lines**: filtered with `-N|--filter-lines`
- **# of words**: filtered with `-W|--filter-words`
- **# of chars (bytes)**: filtered with `-S|--filter-size`
