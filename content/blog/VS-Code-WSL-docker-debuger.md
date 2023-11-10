---
title: VSCode WSL Docker xDebugger set up
description: VSCode WSL Docker xDebugger set up
date: 2023-11-10
cover: vscode.png
tags:
  - vscode
  - docker
  - WSL
---

# setting in 20-xdebug.ini

```text
    zend_extension = xdebug
    #for xdebug 2
    xdebug.remote_enable = 1
    xdebug.remote_autostart = 1
    xdebug.remote_port = 9003
    xdebug.remote_hots = 'host.docker.internal'
    xdebug.remote_log = /tmp/xdebug.log

    #for xdebug 3
    xdebug.mode = debug
    xdebug.start_with_reuest = yes
    xdebug.client_port = 9003
    xdebug.client_host = 'host.docker.internal'
```


## debugger set up in launch.json in VS code

```json lines
    {
        "name": "WSL Docker Purplemash",
        "type": "php",
        "request": "launch",
        "hostname": "0.0.0.0", // important
        "port": 9003,
        "pathMappings": {
            "/var/www/project": "${workspaceRoot}" 
        },
        "log": true,

        // "program": "${file}",
        // "cwd": "${fileDirname}",
        //"stopOnEntry": true,
        // "env": {
        //     "XDEBUG_MODE": "debug",
        //     "XDEBUG_TRIGGER": "VSCODE"
        // }
    }
```