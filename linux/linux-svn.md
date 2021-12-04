# linux创建svn服务

[返回目录](/linux/README.md)

---

- [linux创建svn服务](#linux创建svn服务)
  - [安装](#安装)
  - [服务](#服务)
  - [配置文件范本](#配置文件范本)

## 安装

- 执行`yum -y install subversion`安装
- 执行`svn --version`查看版本

## 服务

- 创建资源库：`svnadmin create svn资源库目录`
- 启动服务`svnserve -d -r svn资源库目录`
[返回顶端](#linux创建svn服务)

## 配置文件范本

```authz
authz配置,r为读取，w为写入
[/资源路径]
用户名 = 读写权限
```

```passwd
passwd配置
[users]
用户名 = 密码
```

```svnserve.conf
svnserve.conf配置
[general]
anon-access = none
auth-access = write
password-db = passwd
authz-db = authz
realm = 资源库目录路径
```

[返回顶端](#linux创建svn服务)

---
[返回目录](/linux/README.md)
