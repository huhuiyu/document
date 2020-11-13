# mysql命令

[返回目录](/mysql/README.md)

---

- [mysql命令](#mysql命令)
  - [用户管理](#用户管理)
  - [ssl](#ssl)

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

-- 权限功能立即生效
FLUSH PRIVILEGES;
```

[返回顶端](#git指令)

## ssl

```sql
-- 查看是否启用ssl
show global variables like '%have_ssl%';
```

在mysql配置文件中`[mysqld]`小节添加`skip_ssl`后重启服务即可关闭ssl功能  
[返回顶端](#git指令)

---
[返回目录](/git/README.md)