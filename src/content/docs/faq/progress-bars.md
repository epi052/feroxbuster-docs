---
title: Progress bars print one line at a time
description: Widen your terminal
---

## Progress bars print one line at a time

`feroxbuster` needs a terminal width of at least the size of what's being printed in order to do progress bar printing
correctly. If your width is too small, you may see output like what's shown below.

![small-term](/feroxbuster-docs/images/faq/../small-term.png)

If you can, simply make the terminal wider and rerun. If you're unable to make your terminal wider consider using `-q`
to suppress the progress bars.

