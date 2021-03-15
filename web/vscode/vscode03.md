# vscode配置

[返回目录](/web/vscode/README.md)

---

![step0001](/web/config-images/vscode/vscode0005.png)

---

![step0001](/web/config-images/vscode/vscode0006.png)

---

![step0001](/web/config-images/vscode/vscode0007.png)

---

一个配置范本（有的配置需要安装对应插件才能生效，配置文件修改后需要按Ctrl + S保存后才会生效，有的配置需要重启vscode后才会生效）

```jsonc
{
  // 转换tab缩进为2个空格
  "editor.tabSize": 2,
  "editor.detectIndentation": true,
  "editor.insertSpaces": true,
  // html单行最大字符数量
  "html.format.wrapLineLength": 400,
  // javascript字符串变单引号（需要安装prettier插件）
  "prettier.singleQuote": true,
  // javascript行尾自动分号（需要安装prettier插件）
  "prettier.semi": true,
  // javascript对齐注释（需要安装prettier插件）
  "prettier.trailingComma": "none",
  // html使用内置格式化功能
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features"
  },
  // javascript使用prettier格式化功能（需要安装prettier插件）
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  // json使用prettier格式化功能（需要安装prettier插件）
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  // vue文件格式化为prettier（需要安装prettier插件）
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  // md文件格式化配置（需要安装markdown-all-in-one插件）
  "[markdown]": {
    "editor.defaultFormatter": "yzhang.markdown-all-in-one"
  },
  // 关闭插件推荐提醒
  "extensions.ignoreRecommendations": true,
  // Dracula颜色主题设置（需要安装Dracula Official插件）
  "workbench.colorTheme": "Dracula",
  // PowerMode效果启用（需要安装Power Mode插件）
  "powermode.enabled": true,
  // PowerMode效果为magic，可以自己选择
  "powermode.presets": "magic",
  // 文件图标主题设置（需要安装VSCode Great Icons插件）
  "workbench.iconTheme": "vscode-great-icons"
}
```

---

![step0001](/web/config-images/vscode/vscode0008.png)

[返回目录](/web/vscode/README.md)
