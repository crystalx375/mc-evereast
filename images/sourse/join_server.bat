@echo off
start cmd /k "zrok.exe access private ever --bind 127.0.0.1:25565 && pause"
start cmd /k "zrok.exe access private everudp --bind 127.0.0.1:25565 && pause"
