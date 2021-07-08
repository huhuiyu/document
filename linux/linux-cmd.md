# linux命令

[返回目录](/linux/README.md)

---

- [linux命令](#linux命令)
  - [系统指令](#系统指令)

## 系统指令

- `lsb_release -a`或者`cat /etc/redhat-release`查看系统版本
- `free -h`显示内存使用
- `top`显示cpu和内存使用率，启动后可以用`m`切换内存显示模式，`q`退出，`s`修改刷新频率秒数
  - 其中cpu使用率表示：%us：表示用户空间程序的cpu使用率，%sy：表示系统空间的cpu使用率，%id：空闲cpu
- `df -h`显示磁盘使用  
- `shutdown -r now`重启系统  
- `ps -aux | grep 要查找的进程名称`查找指定的进程信息
- `kill -9 pid`终止pid指定的进程
- `tail -f 文件名称`实时跟踪文件，`-n 20`参数可以看最新的20行
- `netstat -ntlp`查看端口使用情况，`lsof -i tcp:80`查看80端口使用情况

[返回顶端](#linux命令)

---
[返回目录](/linux/README.md)
