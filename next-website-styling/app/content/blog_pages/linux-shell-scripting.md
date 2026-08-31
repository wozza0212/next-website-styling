---
title: "Vagrant Basic Commands"
description: A few basic commands and config needed for setting up vagrant 
image: /Images/BlogTitles/mdlogo.png
date: "2022-05-20"
---


### Creating virtual machine

run command

```
vagrant init jasonc/centos7
```

jasonc/centos7 being the VM we want to create

### Command to launch box

```
vagrant up 
```

### To check status of VM

```
vagrant status
```

### Connect using ssh

```
vagrant ssh
```

This connects you to the avgrant machine as the vagrant user

To exit this account run the command

```
exit
```

To then shut down the virtual machine run command

```
vagrant halt
```

If you open the vagrant file in the directory you have created your virtual machine, you may change the host name by adding the new host name underneath the config.vm.box line as follows

We also need to give this virtual machine an i.p address, this is something we can also do in the config
```
  config.vm.box = "jasonc/centos7"
  config.vm.hostname = "testbox01"
  config.vm.network "private_network", ip: "10.9.8.7"
```
to test this connection on a mac, we need to run command

```
ping -c 3 10.9.8.7
```
this will ping the ip address 3 times, this will return something like

> --- 10.9.8.7 ping statistics ---
> 3 packets transmitted, 3 packets received, 0.0% packet loss
> round-trip min/avg/max/stddev = 0.698/2.967/7.442/3.164 ms


You can relaunch the vagrant machine with command

```
vagrant reload
```

### Delete the machine

If you want tyo completely delete the machine, you can run

```
vagrant destroy
```
This will completely remove the virtual machine from virtual box, you will also lose anything saved in there

### Configureing Multiple Virtual Machines

```
  config.vm.box = "jasonc/centos7"

  config.vm.define "test1" do |test1|
    test1.vm.hostname = "test1"
    test1.vm.network "private_network", ip: "10.9.8.5"
  end

  config.vm.define "test2" do |test2|
    test2.vm.hostname = "test2"
    test2.vm.network "private_network", ip: "10.9.8.6"
  end
```

To check connect to a specific virtual machine, you cna run command

```
vagrant ssh test1
```

### checking files from inside virtual machine 

run command 
```
ls /vagrant
```

### View all files in directory

run commmand

```
ls -l
```

When you run the `ls -l` command, the characters at the beginnning onf the line tell you the permissions the file has, as an example
this file:
>-rw-r--r-- 1 vagrant vagrant  100 Aug 30  2026 luser-demo01.sh
Broken up this means
- `rw-` The owner has read and write permissions to this file
- `r--` the group of the file have read permissions
- `r--` Everyone else on the system has read permissions

So in this instance, the vagrant user has read write permissions, the vagrant group has read permissions, and everyone else has read permissions

#### Allow execute script permisions

to change the permissions of the file, and allow a user to execute the script, there are two ways

```
chmod +x ./<FileName>
```
or

```
chmod 755 <FileName>
```

Once running this, `ls -l` returns
>-rwxr-xr-x 1 vagrant vagrant  100 Aug 30 11:26 luser-demo01.sh

### Creating file with vim

To create a file with vim you can run

```
vim <filename>
```

Now to edit file, press `i` so you seee insert on the terminal, and the hit `:wq` after editing to save and close

### Executing the script

run command
```
./<FileName>
```

### Renaming a file
You can easily rename a file with the `mv` command

```
mv <FileName> <NewFileName>
```

### Checking types of shell commands

`type` tells you what type of command something is

```
type echo
```
> echo is a shell builtin

Here we are told echo is a shell builtin, which means this commmand comes built in with the shell

You can get more information about shell buildins using the `help` command

```
help echo
```

Come commands aren't shell built ins, such as uptime

```
type uptime
```
>uptime is /usr/bin/uptime

The help command wont work with these, but you an use the `man` command to poutput the manual
```
man -a uptime
```

### Variables

When accessing vairables that are defined, it's important to always use. a double quote `"`, nad the variable when being accessed should always be preceeded by a `$` sign

```
#!/bin/bash

# this script displays various information to the screen
# display hello

echo 'hello'
WORD='script'

# Display variable
echo "$WORD"
```



