# nginx安装

[返回目录](/linux/README.md)

---

- 执行`vi /etc/yum.repos.d/nginx.repo`编辑nginx下载源，内容如下  

```text
[nginx-stable]
name=nginx stable repo
baseurl=http://nginx.org/packages/centos/$releasever/$basearch/
gpgcheck=1
enabled=1
gpgkey=https://nginx.org/keys/nginx_signing.key
module_hotfixes=true
```

- 执行`yum install nginx -y`安装nginx
- 执行`nginx -v`查看安装是否成功(会显示版本号)
- 配置nginx服务开机启动指令：`systemctl enable nginx`
- 关闭nginx服务开机启动指令：`systemctl disable nginx`
- 启动服务指令：`systemctl start nginx`
- 停止服务指令：`systemctl stop nginx`
- 配置文件默认位置：`/etc/nginx/nginx.conf`和`/etc/nginx/conf.d/*.conf`

---
[返回目录](/linux/README.md)
