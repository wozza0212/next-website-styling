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

This can also be done without using a variable

```
#!/bin/bash

for COLOUR in red green blue yellow
do
    echo "The colour is $COLOUR"
done
```

### Positional Paramaters

This script will clear the users.txt file, and add the new users to the file

```
#!/bin/bash

echo script name is $0
echo creating a new directory called new-users
mkdir new-users
echo clearing the contents of users.txt
> ./new-users/users.txt
for USER in $@
do
    echo adding $USER to users.txt
    echo $USER >> ./new-users/users.txt
done
echo all users have been added to ./new-users/users.txt

```

This scriupt would be ran with command...
```
./outputUserName.sh Jim Tom
```

