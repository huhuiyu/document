# putty

- [返回](./README.md)

---

- [putty](#putty)
  - [安装putty](#安装putty)
  - [ssh配置之putty密钥生成](#ssh配置之putty密钥生成)
  - [ssh配置之服务端配置](#ssh配置之服务端配置)

## 安装putty

- [官方网站](https://putty.org/)
- [点击官方下载](https://the.earth.li/~sgtatham/putty/latest/w64/putty-64bit-0.78-installer.msi)
- [点击本地下载](https://media.huhuiyu.top/download/putty-64bit-0.78-installer.msi)

<section class="img-flex-box" >
  <section><img class="lazy-image" data-src="../images/linux/putty-install001.png" alt=""></section>
  <section><img class="lazy-image" data-src="../images/linux/putty-install002.png" alt=""></section>
  <section><img class="lazy-image" data-src="../images/linux/putty-install003.png" alt=""></section>
  <section><img class="lazy-image" data-src="../images/linux/putty-install004.png" alt=""></section>
  <section><img class="lazy-image" data-src="../images/linux/putty-install005.png" alt=""></section>
  <section><img class="lazy-image" data-src="../images/linux/putty-install006.png" alt=""></section>
</section>

- [putty](#putty)
  - [安装putty](#安装putty)
  - [ssh配置之putty密钥生成](#ssh配置之putty密钥生成)
  - [ssh配置之服务端配置](#ssh配置之服务端配置)

## ssh配置之putty密钥生成

<section class="img-flex-box" >
  <section><img class="lazy-image" data-src="../images/linux/putty-ssh001.png" alt=""></section>
  <section><img class="lazy-image" data-src="../images/linux/putty-ssh002.png" alt=""></section>
  <section><img class="lazy-image" data-src="../images/linux/putty-ssh003.png" alt=""></section>
  <section><img class="lazy-image" data-src="../images/linux/putty-ssh004.png" alt=""></section>
  <section><img class="lazy-image" data-src="../images/linux/putty-ssh005.png" alt=""></section>
  <section><img class="lazy-image" data-src="../images/linux/putty-ssh006.png" alt=""></section>
  <section><img class="lazy-image" data-src="../images/linux/putty-ssh007.png" alt=""></section>
  <section><img class="lazy-image" data-src="../images/linux/putty-ssh008.png" alt=""></section>
  <section><img class="lazy-image" data-src="../images/linux/putty-ssh009.png" alt=""></section>
  <section><img class="lazy-image" data-src="../images/linux/putty-ssh010.png" alt=""></section>
  <section><img class="lazy-image" data-src="../images/linux/putty-ssh011.png" alt=""></section>
  <section><img class="lazy-image" data-src="../images/linux/putty-ssh012.png" alt=""></section>
</section>

- [putty](#putty)
  - [安装putty](#安装putty)
  - [ssh配置之putty密钥生成](#ssh配置之putty密钥生成)
  - [ssh配置之服务端配置](#ssh配置之服务端配置)

## ssh配置之服务端配置

- 图中的指令
  - `mkdir ~/.ssh`
  - `chmod 700 ~/.ssh`
  - `vi ~/.ssh/authorized_keys`
  - `chmod 600 ~/.ssh/authorized_keys`

<section class="img-flex-box" >
  <section><img class="lazy-image" data-src="../images/linux/putty-ssh101.png" alt=""></section>
  <section><img class="lazy-image" data-src="../images/linux/putty-ssh102.png" alt=""></section>
  <section><img class="lazy-image" data-src="../images/linux/putty-ssh103.png" alt=""></section>
  <section><img class="lazy-image" data-src="../images/linux/putty-ssh104.png" alt=""></section>
</section>

- 拒绝使用密码登录-一旦开启，!!!丢失ssh密钥将无法登录!!!
  - 执行`vi /etc/ssh/sshd_config`配置ssh
  - 输入`/PasswordAuthentication`回车找到对应配置项
  - 修改为`PasswordAuthentication no`拒绝使用密码登陆
  - 执行`systemctl restart sshd.service`重启ssh服务生效

---

- [putty](#putty)
  - [安装putty](#安装putty)
  - [ssh配置之putty密钥生成](#ssh配置之putty密钥生成)
  - [ssh配置之服务端配置](#ssh配置之服务端配置)

<!-- js处理背景和css样式 -->
<script type="module" src="/js/github.js"></script>
