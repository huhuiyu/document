# ubuntu服务器配置

- 更新安装源指令`apt-get update`
- 安装tmux`apt-get install tmux -y`
- ssh
  - 需要在`/etc/ssh/ssh_config`文件中添加一行`PubkeyAcceptedKeyTypes +ssh-rsa`配置启用rsa的ssh连接
  - 也可以在用户目录中添加`~/.ssh/config`文件,内容为`HostKeyAlgorithms +ssh-rsa`配置启用rsa的ssh连接
- 防火墙
  - 安装`apt-get install ufw -y`
  - 查看状态`ufw status`
  - 开启端口|协议
    - ssh端口：`ufw allow 22/tcp`|`ufw allow ssh`
    - mysql端口：`ufw allow 3306/tcp`
    - redis端口：`ufw allow 6379/tcp`
    - http：`ufw allow 80/tcp`|`ufw allow http`
    - https：`ufw allow 443/tcp`|`ufw allow https`
  - 启用/禁用防火墙`ufw enable`|`ufw disable`
  - 查看防火墙规则编号`ufw status numbered`
  - 删除对应编号的规则`ufw delete 2`
  - 删除防火墙规则`ufw delete allow 8080/tcp`
- mysql数据库
  - 下载安装源（更新地址去mysql官方查找）`curl -OL  https://repo.mysql.com//mysql-apt-config_0.8.22-1_all.deb`
  - 更新安装配置`sudo dpkg -i mysql-apt-config_0.8.22-1_all.deb`，界面选mysql8后选ok即可
  - 更新安装源`apt-get update`
  - 安装mysql`apt-get install mysql-server -y`中途会出现输入root密码和密码加密模式选项
  - 启动mysql命令行`mysql -uroot -p`
- git
  - 安装git`apt-get install git -y`
  - 查看git版本`git --version`
- jdk
  - 查找jdk信息`apt-cache search openjdk`
  - 安装jdk17`apt-get install openjdk-17-jdk -y`
  - 查看java版本`javac -version`
- tomcat
  - 下载（版本更新去官方网站查看）`curl -OL https://dlcdn.apache.org/tomcat/tomcat-8/v8.5.81/bin/apache-tomcat-8.5.81.tar.gz`
  - 解压`tar -zxvf apache-tomcat-8.5.81.tar.gz`
- unzip
  - 安装unzip：`apt-get install unzip -y`
  - 解压：`unzip 文件名`
- redis
  - 安装redis`apt-get install redis-server -y`
  - 修改redis配置：`vi /etc/redis/redis.conf`，修改密码查找`requirepass`，修改ip绑定查找`bind`，修改端口查找`port`
  - 重启redis服务`systemctl restart redis`
- nginx
  - 安装nginx`apt-get install nginx -y`
  - 执行`nginx -v`查看安装是否成功(会显示版本号)
  - 配置nginx服务开机启动指令：`systemctl enable nginx`
  - 关闭nginx服务开机启动指令：`systemctl disable nginx`
  - 启动服务指令：`systemctl start nginx`
  - 停止服务指令：`systemctl stop nginx`
  - 配置文件默认位置：`/etc/nginx/nginx.conf`和`/etc/nginx/conf.d/*.conf`
- nodejs
  - nodesource安装源`curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -`
  - 安装`apt-get install -y nodejs`
  - 查看nodejs版本`node -v`
  - 查看npm版本`npm -v`
  - 修改全局安装和缓存配置
    - 修改npm全局安装位置：`npm config set prefix "全局安装路径"`
    - 修改npm全局缓存位置：`npm config set cache "全局缓存路径"`
    - 查看配置信息：`npm config ls`
    - 最后修改环境变量，添加全局安装路径
- webhook
  - 安装golang`apt-get install -y golang`
  - 查看golang安装信息`go env`
  - 查看golang版本`go version`
  - 安装webhook`apt-get install -y webhook`
  - 查看webhook版本`webhook -version`
  - 启动webhook服务`webhook -port 10000 -hooks webhook-config.json -verbose`
    - `-port参数指定端口,-hooks参数指定配置文件，-verbose是控制台输出信息`
    - 配置文件中执行的sh脚本文件需要在第一行加上`#!/bin/sh`
    - 配置文件范本

```json
[
  {
    "id":"pull-server-test-project",
    "execute-command":"/home/huhuiyu/webhook/pull_server-test-project.sh",
    "command-working-directory":"/home/huhuiyu/webhook"
  }
]
```
