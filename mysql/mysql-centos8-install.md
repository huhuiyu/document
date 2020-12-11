# centos安装mysql

[返回目录](/mysql/README.md)

---

- [yum源地址](https://dev.mysql.com/downloads/repo/yum/)
- 下载：`wget https://repo.mysql.com//mysql80-community-release-el8-1.noarch.rpm`
- 安装源：`yum install mysql80-community-release-el8-1.noarch.rpm -y`
- 查看安装配置文件：`vi /etc/yum.repos.d/mysql-community.repo`
- 禁用mysql5：`dnf config-manager --disable mysql57-community`
- 启用mysql8：`dnf config-manager --enable mysql80-community`
- 关闭默认mysql：`yum module disable mysql`
- 安装mysql`yum install mysql-community-server -y`
- 启用mysql服务：`systemctl enable mysqld`
- 启动mysql服务：`systemctl start  mysqld`
- 查看mysql的默认root密码：`grep 'temporary password' /var/log/mysqld.log`
- 修改root默认密码，否则不能执行其它管理命令：`ALTER USER 'root'@'localhost' IDENTIFIED BY '新密码';`
- 添加用户：`CREATE USER '用户名'@'%' IDENTIFIED BY '密码';`
- 用户授权：`GRANT ALL ON *.* TO '用户名'@'%' with grant option;`
- 权限功能立即生效：FLUSH PRIVILEGES;  
[返回顶端](#centos安装mysql)

---
[返回目录](/mysql/README.md)
