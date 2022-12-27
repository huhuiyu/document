# 防火墙

[返回目录](/linux/README.md)

---

- 查看防火墙状态：`systemctl status firewalld.service`
- 开启防火墙：`systemctl enable firewalld.service`
- 重启防火墙：`systemctl restart firewalld.service`
- 查看防火墙信息：`firewall-cmd --list-all`
- 添加端口(80)：`firewall-cmd --permanent --zone=public --add-port=80/tcp`
- 删除端口(80)：`firewall-cmd --permanent --zone=public --remove-port=80/tcp`
- 添加服务(http)：`firewall-cmd --zone=public --add-service=http`
- 删除服务(http)：`firewall-cmd --permanent --zone=public --remove-service=http`

---
[返回目录](/linux/README.md)
