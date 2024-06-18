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
  - [Certbot生成ssl证书](#certbot生成ssl证书)
  - [安装docker](#安装docker)

## 基础

- 更新安装源指令`apt-get update`
- [返回顶端](#ubuntu服务器配置)

## tmux

- 安装tmux`sudo apt-get install tmux -y`
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
- 修改sudo权限：`sudo visudo`，添加内容：`用户名 ALL=(ALL:ALL) ALL`
  - 如希望用户sudo不输入密码则是：`用户名 ALL=(ALL:ALL) NOPASSWD:ALL`
- 删除用户：`sudo userdel -rf 用户名`
- [返回顶端](#ubuntu服务器配置)

## ssh

- 生产密钥
  - 在`git bash`执行：`ssh-keygen -t rsa -C "huhuiyu.top" -f huhuiyu.top`生成密钥文件
    - `-t rsa`参数是指定算法
    - `-C "huhuiyu.top"`参数指定密钥标题名称
    - `-f huhuiyu.top`参数指定密码文件名称
    - 命令过程中所有的提示都按回车选择默认值
    - 如果文件存在会出现`xxxxx already exists`的提示,如果要覆盖就输入`y`之后回车，否则将会取消生成
- 服务器端配置
  - 执行`mkdir ~/.ssh`创建ssh目录
  - 执行`chmod 700 ~/.ssh`配置权限
  - 执行`vi ~/.ssh/authorized_keys`编辑密钥文件
    - 将上一步生成的密钥文件中`.pub`公钥内容复制进来然后保存退出
  - 执行`chmod 600 ~/.ssh/authorized_keys`配置权限
- 拒绝使用密码登录-一旦开启，!!!丢失ssh密钥将无法登录!!!
  - 执行`sudo vi /etc/ssh/sshd_config`配置ssh
  - 输入`/PasswordAuthentication`回车找到对应配置项
  - 修改为`PasswordAuthentication no`拒绝使用密码登陆
  - 执行`sudo systemctl restart sshd.service`重启ssh服务生效
- rsa链接失败时的配置
  - 需要在`/etc/ssh/ssh_config`文件中添加一行`PubkeyAcceptedKeyTypes +ssh-rsa`配置启用rsa的ssh连接
  - 也可以在用户目录中添加`~/.ssh/config`文件,内容为`HostKeyAlgorithms +ssh-rsa`配置启用rsa的ssh连接
- [返回顶端](#ubuntu服务器配置)

## 防火墙

- 安装`sudo apt-get install ufw -y`
- 查看状态`sudo ufw status`
- 开启端口（协议）
  - ssh端口：`sudo ufw allow 22/tcp`或者`sudo ufw allow ssh`
  - mysql端口：`sudo ufw allow 3306/tcp`
  - redis端口：`sudo ufw allow 6379/tcp`
  - http：`sudo ufw allow 80/tcp`或者`sudo ufw allow http`
  - https：`sudo ufw allow 443/tcp`或者`sudo ufw allow https`
  - 开放多个端口：`sudo ufw allow 8000:8100/tcp`
- 启用/禁用防火墙`sudo ufw enable`或者`sudo ufw disable`
- 查看防火墙规则编号`sudo ufw status numbered`
- 删除对应编号的规则`sudo ufw delete 2`
- 删除防火墙规则`sudo ufw delete allow 8080/tcp`
- [返回顶端](#ubuntu服务器配置)

## mysql数据库

- 卸载
  - `sudo apt purge mysql-*`
  - `sudo -rf /etc/mysql/ /var/lib/mysql`
  - `sudo apt autoremove`
  - `sudo apt autoclean`
- 安装
  - 下载安装源，更新地址去[mysql官方](https://www.mysql.com/)查找
  - 执行`curl -OL https://dev.mysql.com/get/mysql-apt-config_0.8.29-1_all.deb`，下载找到的安装源
  - 更新安装配置`sudo dpkg -i mysql-apt-config_0.8.29-1_all.deb`，界面选`mysql8`后选`ok`即可
  - 更新安装源`sudo apt-get update`
  - 安装mysql`sudo apt-get install mysql-server -y`中途会出现输入root密码和密码加密模式选项
  - 启动mysql命令行`mysql -uroot -p`
- 通过docker安装
  - 下载mysql镜像：`sudo docker pull mysql`
  - 创建mysql容器：`sudo docker run --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root账号密码 -d mysql`
  - 打开一个mysql的命令行：`sudo docker exec -it mysql bash`，然后在这里面就能执行mysql相关命令了
- [返回顶端](#ubuntu服务器配置)

## git

- 安装git`sudo apt-get install git -y`
- 查看git版本`git --version`
- ssh配置
  - 执行：`vi ~/.ssh/id_rsa`，将私钥内容填写进去
  - 执行：`chmod 600 ~/.ssh/id_rsa`修改文件权限
- [返回顶端](#ubuntu服务器配置)

## jdk

- 查找jdk信息`sudo apt-cache search openjdk`
- 安装jdk21`sudo apt-get install openjdk-21-jdk -y`
- 查看java版本`javac -version`
- [返回顶端](#ubuntu服务器配置)

## tomcat

- 下载（版本更新去官方网站查看）
- 执行：`curl -OL https://dlcdn.apache.org/tomcat/tomcat-8/v8.5.99/bin/apache-tomcat-8.5.99.tar.gz`下载tomcat
- 解压`tar -zxvf apache-tomcat-8.5.99.tar.gz`
- [返回顶端](#ubuntu服务器配置)

## unzip
  
- 安装unzip：`sudo apt-get install unzip -y`
- 解压：`unzip 文件名`
- [返回顶端](#ubuntu服务器配置)
  
## redis

- 安装redis`sudo apt-get install redis-server -y`
- 修改redis配置：`sudo vi /etc/redis/redis.conf`，修改密码查找`requirepass`，修改ip绑定查找`bind`，修改端口查找`port`
- 重启redis服务`sudo systemctl restart redis`
- [返回顶端](#ubuntu服务器配置)

## nginx

- 最新版本安装
  - 安装依赖`sudo apt install curl gnupg2 ca-certificates lsb-release ubuntu-keyring -y`
  - 下载nginx签名相关`sudo curl https://nginx.org/keys/nginx_signing.key | gpg --dearmor | sudo tee /usr/share/keyrings/nginx-archive-keyring.gpg >/dev/null`
  - 配置签名`sudo gpg --dry-run --quiet --no-keyring --import --import-options import-show /usr/share/keyrings/nginx-archive-keyring.gpg`
  - 显示nginx安装列表``echo "deb [signed-by=/usr/share/keyrings/nginx-archive-keyring.gpg] http://nginx.org/packages/ubuntu `lsb_release -cs` nginx" | sudo tee /etc/apt/sources.list.d/nginx.list``
  - 更新源`sudo apt update`
  - 安装nginx`sudo apt-get install nginx -y`
- 默认安装
  - 安装nginx`sudo apt-get install nginx -y`
  - 执行`nginx -v`查看安装是否成功(会显示版本号)
  - 配置nginx服务开机启动指令：`sudo systemctl enable nginx`
  - 关闭nginx服务开机启动指令：`sudo systemctl disable nginx`
  - 启动服务指令：`sudo systemctl start nginx`
  - 停止服务指令：`sudo systemctl stop nginx`
  - 配置文件默认位置：`/etc/nginx/nginx.conf`和`/etc/nginx/conf.d/*.conf`

- [返回顶端](#ubuntu服务器配置)

## nodejs

- 执行：`sudo apt-get install -y nodejs`安装
- 查看nodejs版本`node -v`
- 执行：`sudo apt-get install -y npm`安装
- 查看npm版本`npm -v`
- 执行：`npm config set registry "https://registry.npmmirror.com"`设置成阿里的安装源
- 执行：`npm config get registry`查看安装源
- 更新nodejs
  - 执行`npm install --global n`
  - 执行`n -V`查看n的版本
  - 执行`n lts`更新npm到最新lts版本
  - 重启终端查询版本
- 全局安装和缓存位置配置（建议多用户配置）
  - 修改npm全局安装位置：`npm config set prefix "全局安装路径"`
  - 修改npm全局缓存位置：`npm config set cache "全局缓存路径"`
  - 查看配置信息：`npm config ls`
  - 最后添加npm全局安装路径到PATH环境变量
- [返回顶端](#ubuntu服务器配置)

## webhook

- 安装golang`sudo apt-get install -y golang`
- 查看golang安装信息`go env`
- 查看golang版本`go version`
- 安装webhook`sudo apt-get install -y webhook`
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

- 执行`sudo lvdisplay`查看lvm信息
- 执行`sudo fdisk -l`查看磁盘信息
- 执行`sudo df -h`查看硬盘使用信息
- 执行`sudo lvextend -l +10%FREE /dev/ubuntu-vg/ubuntu-lv`分配扩展磁盘，命名中最后部分的路径为`lvdisplay`查看的信息
- 执行`sudo resize2fs /dev/ubuntu-vg/ubuntu-lv`调整磁盘大小

- [返回顶端](#ubuntu服务器配置)

## Certbot生成ssl证书

- 安装`certbot`
  - `sudo apt-get update`
  - `sudo apt install snapd -y`
  - `sudo snap install core`
  - `sudo snap refresh core`
  - `sudo snap install --classic certbot`
  - `sudo ln -s /snap/bin/certbot /usr/bin/certbot`
- 生成nginx服务器证书
  - 需要先配置好域名对应的nginx服务器，方便验证域名所有权
  - 生成证书：`sudo certbot certonly --email 邮箱 --nginx -d 域名`
  - 查看证书文件夹：`sudo ls /etc/letsencrypt/live/`
  - 重新生成证书（每三个月一次）：`sudo certbot renew`
- [返回顶端](#ubuntu服务器配置)

## 安装docker

- 安装指令
  - `sudo apt update`
  - `sudo apt install docker.ca-certificates curl gnupg`
  - `sudo install -m 0755 -d /etc/apt/keyrings`
  - `curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg`
  - `echo "deb [arch=amd64 signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list`
  - `sudo apt update`
  - `sudo apt install docker-ce`
- 简单指令
  - 查看运行的容器列表：`sudo docker ps`
  - 停止指定名称的容器：`sudo docker stop 容器名称`
  - 重新启动指定名称的容器：`sudo docker start 容器名称`
  - 查看所有的容器列表：`sudo docker ps -a`
  - 删除指定名称的容器：`sudo docker rm 容器名称`

<!-- js处理背景和css样式 -->
<script type="module" src="/js/github.js"></script>
