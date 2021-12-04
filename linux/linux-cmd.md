# linux命令

[返回目录](/linux/README.md)

---

- [linux命令](#linux命令)
  - [系统指令](#系统指令)
  - [yum指令](#yum指令)

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
- `ctrl + S`暂停终端，`ctrl + Q`恢复
- `指令 | less`可以翻动指令执行的屏幕信息
- `vi /etc/rc.d/rc.local`编辑开机启动项，需要注意的是指令需要完整路径

## yum指令

- 安装软件：`yum install -y 软件包名`
- 卸载软件：`yum remove -y 软件包名`
- 查看更新：`yum check-update`
- 更新全部软件：`yum update`，更新指定软件：`yum update 软件包名`
- 查找软件：`yum search 关键字|grep 过滤条件`

[返回顶端](#linux命令)

---
[返回目录](/linux/README.md)
