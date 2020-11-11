# vscode图标和字体配置

[返回目录](/web/README.md)

---
[下载字体压缩包](/download/cascadia.zip)

---
![step0001](/images/vscode/vscode-config01-012.png)

---
![step0001](/images/vscode/vscode-config01-013.png)

---
![step0001](/images/vscode/vscode-config01-014.png)

---
![step0001](/images/vscode/vscode-config01-015.png)

---
![step0001](/images/vscode/vscode-config01-016.png)

---
在首选项-设置中添加：`"editor.fontFamily": "'Cascadia Code','Cascadia Mono'"`

---
![step0001](/images/vscode/vscode-config01-017.png)

---
![step0001](/images/vscode/vscode-config01-018.png)

---
在首选项-设置中添加：`"workbench.iconTheme": "vscode-great-icons"`

---
插件列表：

```text
Chinese (Simplified) Language Pack for Visual Studio Code
Bracket Pair Colorizer
HTML CSS Support
Live Server
Prettier - Code formatter
VSCode Great Icons
```

---
配置文件内容：

```json
{
  "editor.tabSize": 2,
  "editor.detectIndentation": true,
  "editor.insertSpaces": true,
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.fontFamily": "'Cascadia Code','Cascadia Mono'",
  "workbench.iconTheme": "vscode-great-icons"
}
```

[返回目录](/web/README.md)
