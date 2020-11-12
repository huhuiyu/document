# git指令

[返回目录](/git/README.md)

---

几个常用的git服务提供商：[github](https://github.com/)，[阿里云code](https://code.aliyun.com)，[gitee](https://gitee.com/)

---

- [git指令](#git指令)
  - [基本指令](#基本指令)
  - [分支管理](#分支管理)

## 基本指令

- 下载远程资源库到本地：`git clone 远程资源库地址`，例如：`git clone git@code.aliyun.com:DarkKnight/document.git`
- 添加跟踪文件：`git add 文件名（支持通配符）`，例如：`git add *`
- 提交更改：`git commit -m "提交的说明信息"`，例如：`git commit -m "添加了项目说明"`
- 推送到远程资源库：`git push`
- 拉取远程资源库更新文件：`git pull`
- 查看资源库状态：`git staus`
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

---
[返回目录](/git/README.md)
