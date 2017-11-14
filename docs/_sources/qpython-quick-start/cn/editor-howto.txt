编辑器指南
==============
这是Python开发者最经常用的工具了 - 编辑器。

.. image:: http://edu.qpython.org/static/editor-main.png
    :alt: QPython - 编辑器


特性
---------
编辑器允许输入和修改文本。 在这里你可以开发你的脚本，保存并执行。 该编辑器支持Python语法高亮显示，并显示行号。

输入时，可以使用工具栏上的两个按钮轻松控制缩进级别（对于Python代码而言非常重要）。
工具栏上的其他按钮分别对应跳转，运行，搜索，撤销，保存。 顶部还有两个按钮：打开和新建。

保存新文件时，不要忘记添加.py的后缀因为编辑器不会自动添加后缀。

当你打开一个QPython项目时，你还可以划出侧栏，随时在不同项目文件中切换。

.. image:: http://edu.qpython.org/static/editor-left.png
    :alt: QPython - 项目结构树


设置
-------
您可以通过点击右上角的图标来修改编辑器的设置。 在这里改变一些编辑器的属性：

*显示行号*

*Word换行*

*快速滚动*

*颜色主题*

*字体大小*

*更改文字字体*

**自动高亮语法**

有时语法高亮功能在某些设备上会让打开大文件的速度变慢，因此当总行数低于此限制（默认值为300）时，才打开高亮功能，您也可以根据需要对数值进行调整。

**试一下**

..  code-block :: none

    class TestC():
        ^4$def ask_age(self):
            ^8$v = raw_input("> How old are you ?")
            ^8$return v

    tc = TestC()
    tc.ask_age()

<button>Run ...</button>

.. image:: http://edu.qpython.org/static/course-index-principle.png
    :target: data-video: "http://player.youku.com/embed/XMzE0OTI4NDgyMA=="
    :alt: QPython - 编辑器帮助

作者 & 更新时间
------------------------------------
作者: `River <https://github.com/riverfor>`_

提交: 2017/8/6

