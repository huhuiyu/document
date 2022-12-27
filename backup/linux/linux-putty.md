# putty

[返回目录](/linux/README.md)

---

- [putty](#putty)
  - [putty安装](#putty安装)
  - [putty使用](#putty使用)

## putty安装

- [putty官方网站](https://www.putty.org/)

---
![step0001](/images/linux/putty/putty-install-001.png)

---
![step0001](/images/linux/putty/putty-install-002.png)

---
![step0001](/images/linux/putty/putty-install-003.png)

---
![step0001](/images/linux/putty/putty-install-004.png)

---
![step0001](/images/linux/putty/putty-install-005.png)

---
![step0001](/images/linux/putty/putty-install-006.png)

---
![step0001](/images/linux/putty/putty-install-007.png)

---
![step0001](/images/linux/putty/putty-install-008.png)  
[返回顶端](#putty)

## putty使用

- 连接服务器

---
  ![step0001](/images/linux/putty/putty001.png)

---
  ![step0001](/images/linux/putty/putty002.png)

---
  ![step0001](/images/linux/putty/putty003.png)

- ssh连接服务器

---
  ![step0001](/images/linux/putty/putty004.png)

---
  ![step0001](/images/linux/putty/putty005.png)

---
  ![step0001](/images/linux/putty/putty006.png)

---
  ![step0001](/images/linux/putty/putty007.png)

---
  ![step0001](/images/linux/putty/putty008.png)

---
  ![step0001](/images/linux/putty/putty009.png)
  
---
  ![step0001](/images/linux/putty/putty010.png)

---
  ![step0001](/images/linux/putty/putty011.png)

---
  ![step0001](/images/linux/putty/putty012.png)

---
  ![step0001](/images/linux/putty/putty013.png)

- 图中的指令：

```linux
  mkdir ~/.ssh
  chmod 700 ~/.ssh
  vi ~/.ssh/authorized_keys
  chmod 600 ~/.ssh/authorized_keys
```

---
  ![step0001](/images/linux/putty/putty014.png)

---
  ![step0001](/images/linux/putty/putty015.png)

---
  ![step0001](/images/linux/putty/putty016.png)
  
---
  ![step0001](/images/linux/putty/putty017.png)

---
  ![step0001](/images/linux/putty/putty018.png)

---
  ![step0001](/images/linux/putty/putty019.png)

---
  ![step0001](/images/linux/putty/putty020.png)

- 拒绝使用密码登录-一旦开启，!!!丢失ssh密钥将无法登录!!!
  - 执行`vi /etc/ssh/sshd_config`配置ssh
  - 输入`/PasswordAuthentication`回车找到对应配置项
  - 修改为`PasswordAuthentication no`拒绝使用密码登陆
  - 执行`systemctl restart sshd.service`重启ssh服务生效

---
  ![step0001](/images/linux/putty/putty021.png)  
[返回顶端](#putty)

---
[返回目录](/linux/README.md)
