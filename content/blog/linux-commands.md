---
title: Linux find command
description: Linux find commands
date: 2023-11-010
cover: linux.png
tags:
  - linux
  - find
---

## Find file

```bash
find . -name file.txt

find /home -name "*.jpg"

# look for empty file
find . -type f -empty 

# find .db files that have been changed in the preceding 6 days by user called randomperson
find /home -user randomperson -mtime 6 -name ".db"

# -iname - search ignoring text case 
# -d - look for directory 
# -O1 – (Default) filter based on file name first
# -O2 – File name first, then file-type
# -O3 – Allow find to automatically re-order the search based on efficient use of resources and likelihood of success
# -maxdepth X – Search this directory along with all sub-directories to a level of X
# -not – Only produce results that don’t match the test case


find . -type f -exec grep "forinstance" '{}' \; -print


```

