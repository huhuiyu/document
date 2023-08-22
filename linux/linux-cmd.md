# linux命令

- [返回](./README.md)

---

- 查看系统版本：`lsb_release -a`
- 显示内存使用：`free -h`
- 显示cpu和内存使用率：`top`
  - 其中cpu使用率表示：`%us`：表示用户空间程序的cpu使用率，`%sy`：表示系统空间的cpu使用率，`%id`：空闲cpu
  - 启动后可以用`m`切换内存显示模式，`q`退出，`s`修改刷新频率秒数
- 显示磁盘使用：`df -h`
- 显示目录占用磁盘大小：`du -h`
- 查找指定的进程信息：`ps -aux | grep 进程名称`
- 终止pid指定的进程：`kill -9 pid值`
- 显示文件结尾信息：`tail -f 文件名称 -n 查看行数`
- 列表端口使用情况：`netstat -ntlp`
- 查看指定端口使用情况：`lsof -i tcp:端口号`
- 暂停/恢复终端：`ctrl + s`/`ctrl + q`
- 翻动查看指令执行的屏幕信息：`指令 | less`
  - `b`/`pageup`：向上翻页，`d`/`pagedown`：向下翻页，`q`：退出
- 编辑开机启动项：vi /etc/rc.d/rc.local需要注意的是指令需要完整路径
- 查看时区列表和修改时区`timedatectl list-timezones | grep Asia`，`timedatectl set-timezone Asia/Shanghai`
- 安装网络工具`apt install net-tools -y`

---

- [linux命令](#linux命令)

<!-- js处理背景和css样式 -->
<script type="module" src="https://huhuiyu.top/js/github.js"></script>
