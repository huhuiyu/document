# Markdown知识

[返回目录](/other/README.md)

---

- [Markdown知识](#markdown知识)
  - [vscode插件](#vscode插件)
  - [基础知识](#基础知识)

## vscode插件

- Markdown提示工具：`Markdown All in One`
- 代码检查工具：`markdownlint`
- 增强版本效果预览：`Markdown Preview Enhanced`  
[返回顶端](#markdown知识)

## 基础知识

- 标题

```markdown
# 一号标题，每个md文件的最开始标记

## 二号标题，标题下面要有空行

### 三号标题

#### 四号标题

##### 五号标题

###### 六号标题
```

- 标题效果
![img0001](/images/markdown/markdown-001.png)

- 字体

```markdown
**粗体**
*斜体*
***粗斜体***
~~删除线~~
~~***粗斜体带删除线***~~
```

- 字体效果： **粗体** *斜体* ~~删除线~~ ~~***粗斜体带删除线***~~

- 清单

```markdown
- 一级清单
  - 二级清单
  - 又二级清单
    - 第三级
- 还是一级清单
```

- 清单效果
- 一级清单
  - 二级清单
  - 又二级清单
    - 第三级
- 还是一级清单

- 超链接（演示都是绝对路径，也支持相对路径）

```markdown
[黑暗骑士的网站](http://huhuiyu.top "黑暗骑士的网站")
![图片链接](https://klcxy.top/myoss/common/queryOssUrl?tbOssInfo.oiid=22&tbOssInfo.obid=1 '程序猿')
```

- 超链接效果
[黑暗骑士的网站](http://huhuiyu.top "黑暗骑士的网站")  
![图片链接](https://klcxy.top/myoss/common/queryOssUrl?tbOssInfo.oiid=22&tbOssInfo.obid=1 '程序猿')

- 引用

```markdown
> vuejs-->渐进式JavaScript 框架
> 程序猿拥抱懒惰吧。  
将重复性的工作自动化，不要重复自己。提示，懒人们应该尽快学会快捷键，这也是优秀程序猿应该做的
```

- 引用效果

> vuejs-->渐进式JavaScript 框架
> 程序猿拥抱懒惰吧。
将重复性的工作自动化，不要重复自己。提示，懒人们应该尽快学会快捷键，这也是优秀程序猿应该做的

- 单行代码

```markdown
执行`ping huhuiyu.top`测试网络是否正常
```

- 单行代码效果
执行`ping huhuiyu.top`测试网络是否正常

- 代码块

````markdown
```代码语言
代码内容
多行代码
```
````

````markdown
```java
public class Demo {
  public static void mani(String[] args) {

  }
}
```
````

- 代码块效果

```java
public class Demo {
  public static void mani(String[] args) {

  }
}
```

- 要显示代码块的代码用四个`符号
- 分割线`---`，需要前置空行  
[返回顶端](#markdown知识)

---
[返回目录](/other/README.md)
