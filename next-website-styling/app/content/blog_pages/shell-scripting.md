---
title: Shell Scripting - The Basic Guide
description: A quick guide on shell scripting
image: /Images/BlogTitles/rust-logo.png
date: "2026-03-25"
---

Example basic script

```
MY_SHELL="zsh"
if [ "$MY_SHELL" = "zsh" ]; then
    echo "My shell is zsh"
else
    echo "My shell is not zsh"
fi
```

chmod +x ./firstScript.sh

./firstScript.sh

The chmod command changes access permissions for files and directories in Unix and Linux systems

: Read (r)2
: Write (w)1
: Execute (x)


Elif Script

```
#!/bin/bash
MY_SHELL="bash"
if [ "$MY_SHELL" = "zsh" ]; then
    echo "My shell is zsh"
elif [ "$MY_SHELL" = "bash" ]; then
    echo "My shell is bash"
else
    echo "My shell is not zsh or bash"
fi

```

### For Loops

Looping through items in a list

```
#!/bin/bash

COLOURS="red green blue yellow"
for COLOUR in $COLOURS
do
    echo "Colour: $COLOUR"
done
```

