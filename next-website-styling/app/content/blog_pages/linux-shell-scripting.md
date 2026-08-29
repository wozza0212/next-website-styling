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