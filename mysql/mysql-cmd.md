# mysql命令

[返回目录](/mysql/README.md)

---

- [mysql命令](#mysql命令)
  - [用户管理](#用户管理)
  - [ssl](#ssl)
  - [主从备份](#主从备份)

## 用户管理

```sql
use mysql;

-- 创建用户
CREATE USER 'abc'@'%' IDENTIFIED BY 'Test4-sql';
-- 用户数据库授权
GRANT ALL ON TestDB.* TO 'abc'@'%';
-- 用户数据库授权并继承权限
GRANT ALL ON TestDB.* TO 'abc'@'%' with grant option;
-- 取消用户数据库授权
REVOKE ALL ON TestDB.* TO 'abc'@'%';
-- 删除用户
DROP USER abc;
-- 修改用户不使用加密密码
ALTER USER 'abc'@'%' IDENTIFIED WITH mysql_native_password 'Test4-sql';
-- 权限功能立即生效
FLUSH PRIVILEGES;
```

[返回顶端](#mysql命令)

## ssl

- 查看是否启用ssl：`show global variables like '%have_ssl%';`
- 在mysql配置文件中`[mysqld]`小节添加`skip_ssl`后重启服务即可关闭ssl功能  
[返回顶端](#mysql命令)

## 主从备份

- 开启主库binarylog,执行`vi /etc/my.cnf`打开mysql配置文件，在`mysqld`小节下面添加配置  

```cnf
log_bin=mysql-bin  
server-id=1  
binlog_do_db=要主从的数据库名称，多个就写多行本配置 
binlog-ignore-db=不需要主从的数据库名称，多个就写多行本配置
```

- 执行`systemctl restart mysqld`重启 mysql
- 执行`show master status\G`查看主库日志状态记住`File`和`Position`，从库需要这个
- 开启从库binarylog,执行`vi /etc/my.cnf`打开mysql配置文件，在`mysqld`小节下面添加配置  

```cnf
log_bin=mysql-bin  
server-id=2  
replicate_do_db=要主从的数据库名称，多个就写多行本配置  
replicate-ignore-db=不需要主从的数据库名称，多个就写多行本配置  
relay_log=relay_bin  
log-slave-updates=ON
```

- 执行`systemctl restart mysqld`重启mysql
- 执行下面的语句初始化从库同步状态,

```sql
CHANGE MASTER TO
MASTER_HOST='主库ip',
MASTER_USER='主库用户',
MASTER_PASSWORD='主库密码',
MASTER_LOG_FILE='上面主库查询的file',
MASTER_LOG_POS=上面主库查询的position;
```

-执行`show slave status\G`查看从库日志状态  
[返回顶端](#mysql命令)

---
[返回目录](/mysql/README.md)
