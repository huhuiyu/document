# redis安装

[返回目录](/linux/README.md)

---

- 修改下载源为阿里云：`wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-8.repo`
- 安装redis：`yum install redis -y`
- 启动redis服务：`systemctl start redis.service`
- redis默认端口：`6379`
- 查看redis进程：`ps -aux | grep redis`
- 修改redis配置：`vi /etc/redis.conf`，修改密码查找`requirepass`，修改ip绑定查找`bind`，修改端口查找`port`

---
[返回目录](/linux/README.md)
