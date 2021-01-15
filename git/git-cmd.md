# git指令

[返回目录](/git/README.md)

---

几个常用的git服务提供商：[github](https://github.com/)，[阿里云code](https://code.aliyun.com)，[gitee](https://gitee.com/)

---

- [git指令](#git指令)
  - [基本指令](#基本指令)
  - [分支管理](#分支管理)
  - [冲突和更改撤销](#冲突和更改撤销)
  - [同步多个远程资源库](#同步多个远程资源库)
  - [配置信息](#配置信息)

## 基本指令

- 下载远程资源库到本地：`git clone 远程资源库地址`，例如：`git clone git@code.aliyun.com:DarkKnight/document.git`
- 添加跟踪文件：`git add 文件名（支持通配符）`，例如：`git add *`
- 提交更改：`git commit -m "提交的说明信息"`，例如：`git commit -m "添加了项目说明"`
- 推送到远程资源库：`git push`
- 拉取远程资源库更新文件：`git pull`
- 查看资源库状态：`git status`  
[返回顶端](#git指令)

## 分支管理

- 查看分支：`git branch -a`
- 创建并切换分支：`git branch 分支名称`，例如：`git branch test`
- 切换分支：`git checkout 分支名称`，例如：`git checkout test`
- 提交到远程分支：`git push origin 远程分支名:本地分支名`，例如：`git push origin test:test`
- 删除分支：`git branch -D 分支名称`，例如：`git branch -D test`
- 删除远程分支：`git push origin --delete 分支名称`，例如：`git push origin --delete test`
- 合并分支：`git merge 分支名称`，分支名称不能是当前分支
- 切换当前远程推送资源库`git push --set-upstream origin 分支名称`  
[返回顶端](#git指令)

## 冲突和更改撤销

- 查看提交日志信息：`git log`
- 版本回退
  - 回退版本：`git reset --hard 通过git log查看的历史版本号`
  - 推送版本回退到远程分支：`git push -f`
- 冲突解决
  - 拉取版本更新：`git pull`后修改冲突
  - 执行正常的提交和推送  
[返回顶端](#git指令)

## 同步多个远程资源库

- 在aliyun和github上同时创建同名的项目
- 添加新的远程资源库：`git remote add github git@github.com:huhuiyu/github-aliyun-test.git`
- 本地提交完毕后
  - 执行`git push`提交主资源库
  - 执行`git push github`提交github资源库
  - 主资源库提交不同分支需要执行`git push github origin 分支名`，其它资源库不变
- 可以执行`git remote rm github`来删除github资源库
[返回顶端](#git指令)

## 配置信息

- 查看配置信息：`git config --list`
- 设置用户名`git config --global user.name "用户名"`
- 设置用户名`git config --global user.email "用户邮箱"`
[返回顶端](#git指令)

---
[返回目录](/git/README.md)
