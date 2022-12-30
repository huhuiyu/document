# ubuntu服务器配置

- [返回](./README.md)

---

- [ubuntu服务器配置](#ubuntu服务器配置)
  - [基础](#基础)
  - [tmux](#tmux)
  - [用户相关](#用户相关)
  - [ssh](#ssh)
  - [防火墙](#防火墙)
  - [mysql数据库](#mysql数据库)
  - [git](#git)
  - [jdk](#jdk)
  - [tomcat](#tomcat)
  - [unzip](#unzip)
  - [redis](#redis)
  - [nginx](#nginx)
  - [nodejs](#nodejs)
  - [webhook](#webhook)
  - [lvm配置](#lvm配置)

## 基础

- 更新安装源指令`apt-get update`
- [返回顶端](#ubuntu服务器配置)

## tmux

- 安装tmux`apt-get install tmux -y`
- 开启一个session：`tmux`
- 恢复到上次启动的session：`tmux a`
- 查看全部session：`tmux ls`
- 删除指定session：`tmux kill-session -t session名`
- 横向分割窗口：`Ctrl+b` 之后按 `"`
- 竖向分割窗口：`Ctrl+b` 之后按 `%`
- 移动到指定方向的窗口：`Ctrl+b` 之后按 `方向键`
- 关闭当前窗口：`Ctrl+d`
- [返回顶端](#ubuntu服务器配置)

## 用户相关

- 查看用户列表：`ls -l /home/`
- 创建用户：`adduser 用户名`
- 修改用户密码：`passwd 用户名`
- 切换用户：`su - 用户名`，切换root用户：`su -`，退出用户：`exit`或者`Ctrl + d`
- 修改sudo权限：`visudo`，添加内容：`用户名 ALL=(ALL:ALL) ALL`
  - 如希望用户sudo不输入密码则是：`用户名 ALL=(ALL:ALL) NOPASSWD:ALL`
- 删除用户：`userdel -rf 用户名`
- [返回顶端](#ubuntu服务器配置)

## ssh

- 需要在`/etc/ssh/ssh_config`文件中添加一行`PubkeyAcceptedKeyTypes +ssh-rsa`配置启用rsa的ssh连接
- 也可以在用户目录中添加`~/.ssh/config`文件,内容为`HostKeyAlgorithms +ssh-rsa`配置启用rsa的ssh连接
- [返回顶端](#ubuntu服务器配置)

## 防火墙

- 安装`apt-get install ufw -y`
- 查看状态`ufw status`
- 开启端口|协议
  - ssh端口：`ufw allow 22/tcp`或者`ufw allow ssh`
  - mysql端口：`ufw allow 3306/tcp`
  - redis端口：`ufw allow 6379/tcp`
  - http：`ufw allow 80/tcp`或者`ufw allow http`
  - https：`ufw allow 443/tcp`或者`ufw allow https`
- 启用/禁用防火墙`ufw enable`或者`ufw disable`
- 查看防火墙规则编号`ufw status numbered`
- 删除对应编号的规则`ufw delete 2`
- 删除防火墙规则`ufw delete allow 8080/tcp`
- [返回顶端](#ubuntu服务器配置)

## mysql数据库

- 下载安装源，更新地址去[mysql官方](https://www.mysql.com/)查找）
- 执行`curl -OL  https://repo.mysql.com//mysql-apt-config_0.8.24-1_all.deb`，下载找到的安装源
- 更新安装配置`sudo dpkg -i mysql-apt-config_0.8.24-1_all.deb`，界面选`mysql8`后选`ok`即可
- 更新安装源`apt-get update`
- 安装mysql`apt-get install mysql-server -y`中途会出现输入root密码和密码加密模式选项
- 启动mysql命令行`mysql -uroot -p`
- [返回顶端](#ubuntu服务器配置)

## git

- 安装git`apt-get install git -y`
- 查看git版本`git --version`
- ssh配置
  - 执行：`vi ~/.ssh/id_rsa`，将私钥内容填写进去
  - 执行：`chmod 600 ~/.ssh/id_rsa`修改文件权限
- [返回顶端](#ubuntu服务器配置)

## jdk

- 查找jdk信息`apt-cache search openjdk`
- 安装jdk17`apt-get install openjdk-17-jdk -y`
- 查看java版本`javac -version`
- [返回顶端](#ubuntu服务器配置)

## tomcat

- 下载（版本更新去官方网站查看）
- 执行：`curl -OL https://dlcdn.apache.org/tomcat/tomcat-8/v8.5.84/bin/apache-tomcat-8.5.84.tar.gz`下载tomcat
- 解压`tar -zxvf apache-tomcat-8.5.84.tar.gz`
- [返回顶端](#ubuntu服务器配置)

## unzip
  
- 安装unzip：`apt-get install unzip -y`
- 解压：`unzip 文件名`
- [返回顶端](#ubuntu服务器配置)
  
## redis

- 安装redis`apt-get install redis-server -y`
- 修改redis配置：`vi /etc/redis/redis.conf`，修改密码查找`requirepass`，修改ip绑定查找`bind`，修改端口查找`port`
- 重启redis服务`systemctl restart redis`
- [返回顶端](#ubuntu服务器配置)

## nginx

- 安装nginx`apt-get install nginx -y`
- 执行`nginx -v`查看安装是否成功(会显示版本号)
- 配置nginx服务开机启动指令：`systemctl enable nginx`
- 关闭nginx服务开机启动指令：`systemctl disable nginx`
- 启动服务指令：`systemctl start nginx`
- 停止服务指令：`systemctl stop nginx`
- 配置文件默认位置：`/etc/nginx/nginx.conf`和`/etc/nginx/conf.d/*.conf`
- [返回顶端](#ubuntu服务器配置)

## nodejs

- 执行：`apt-get install -y nodejs`安装
- 查看nodejs版本`node -v`
- 查看npm版本`npm -v`
- 更新nodejs
  - 执行`npm install --global n`
  - 执行`n`选择更新版本
  - 执行`npm install --global npm`更新npm
- [返回顶端](#ubuntu服务器配置)

## webhook

- 安装golang`apt-get install -y golang`
- 查看golang安装信息`go env`
- 查看golang版本`go version`
- 安装webhook`apt-get install -y webhook`
- 查看webhook版本`webhook -version`
- 启动webhook服务`webhook -port 服务端口号 -hooks 参数配置文件 -verbose`
  - `-port`参数指定端口,`-hooks`参数指定配置文件，`-verbose`是控制台输出信息`
  - 配置文件中执行的sh脚本文件需要在第一行加上`#!/bin/sh`
  - 配置文件范本

```txt
[
  {
    "id":"pull-server-test-project",
    "execute-command":"/home/huhuiyu/webhook/pull_server-test-project.sh",
    "command-working-directory":"/home/huhuiyu/webhook"
  }
]
```

- [返回顶端](#ubuntu服务器配置)

## lvm配置

- 执行`lvdisplay`查看lvm信息
- 执行`fdisk -l`查看磁盘信息
- 执行`df -h`查看硬盘使用信息
- 执行`lvextend -l +10%FREE /dev/ubuntu-vg/ubuntu-lv`分配扩展磁盘，命名中最后部分的路径为`lvdisplay`查看的信息
- 执行`resize2fs /dev/ubuntu-vg/ubuntu-lv`调整磁盘大小

- [返回顶端](#ubuntu服务器配置)

<!-- js处理背景和css样式 -->
<script type="module" src="https://huhuiyu.top/js/github.js"></script>
