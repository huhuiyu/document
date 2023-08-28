# 围棋打谱

- [返回目录](../README.md)

---

- github链接
  - [打谱软件](https://github.com/SabakiHQ/Sabaki)
  - [katago人工智能](https://github.com/lightvector/KataGo)
- 官方网站和下载链接
  - [打谱软件官方网站](https://sabaki.yichuanshen.de/)
  - [打谱软件下载链接](https://github.com/SabakiHQ/Sabaki/releases/download/v0.52.2/sabaki-v0.52.2-win-x64-portable.exe)
  - [katago下载链接](https://github.com/lightvector/KataGo/releases/download/v1.11.0/katago-v1.11.0-eigen-windows-x64.zip)
  - [katago权重文件列表](https://katagotraining.org/networks/)
  - [katago权重文件下载](https://media.katagotraining.org/uploaded/networks/models/kata1/kata1-b60c320-s6769829376-d3067673297.bin.gz)
- 配置打谱软件使用katago
  - 点击文件->首选项，选择引擎页面，点击新增
  - 第一个选项是名称，随意填写
  - 第二个选项是引擎程序文件位置
  - 第三个选项是引擎启动参数配置：格式为`gtp -model model文件路径 -config 配置文件路径`，例如：`gtp -model model.bin -config default_gtp.cfg`

---

<!-- js处理背景和css样式 -->
<script type="module" src="/js/github.js"></script>
