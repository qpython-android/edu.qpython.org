编辑器指南
==============
这是Python开发者最经常用的工具了 - 编辑器。

.. image:: http://edu.qpython.org/static/editor-1.png
    :alt: QPython - 编辑器


特性
---------
在QPython编辑器里你可以编写或运行你的QPython脚本程序或项目。 QPython编辑器支持Python语法高亮显示，并显示行号。

编辑器顶部右上角分别是打开、新建、编辑器设置，分别让你打开脚本或项目，新建脚本或项目，以及设置编辑器属性（主题，默认字体等）。

在文件比较大时，语法高亮功能在某些设备上会让打开大文件的速度变慢，因此当总行数低于某个限制（默认值为300）时，编辑器才会开启语法高亮，当然，您可以根据需要在辑器设置中对高亮行数数值进行调整。

在编辑器底部，工具栏上的按钮分别对应切换到热键工具栏，锁定键盘，跳转，保存，运行，查找，撤销，重做，最近打开，代码片段。

.. image:: http://edu.qpython.org/static/editor-toolbar-1.png
    :alt: QPython - 编辑器开发工具栏


切换到热键助手之后，工具栏的按钮分别为切换为开发工具栏, 反TAB, TAB，DEF(def), IF(if), EF(elif), EL(else), FOR(for), IMT(import), IMF(from import), CLZ(class), RET(return), @, :, =, ", ', ;, ,, +, -, *, /, <, >, (, ), [, ], {, }, #.

.. image:: http://edu.qpython.org/static/editor-toolbar-2.png
    :alt: QPython - 编辑器热键工具栏


熟练使用工具栏能够大大加快你的开发。

保存新文件时，不要忘记添加.py的后缀因为编辑器不会自动添加后缀。

当你打开一个QPython项目时，你还可以划出侧栏，让你更容易编辑相同项目中的其他文件。

.. image:: http://edu.qpython.org/static/editor-left.png
    :alt: QPython - 项目结构树


其他
-------
在手机上高效输入是一个比较有挑战的事情，为了加快输入效率，QPython团队提供了各种辅助工具。

**扫描二维码**
在QPython首页，还有一个二维码扫描功能，能够方便地扫描二维码，将里面的内容读取到编辑器中。

**QEditor WebApp**
在QPYPI的工具集中，有一个QEditor WebApp程序，在安装和运行之后，它会在手机上开启一项WebApp服务，允许用户从相同局域网的电脑用户通过访问指定地址来打开一个在线的编辑器，可以通过电脑浏览器来直接在手机上进行编程。

.. image:: http://edu.qpython.org/static/qeditor.png
    :alt: QPython - QEditor

.. image:: http://edu.qpython.org/static/qeditor-run.png
    :alt: QPython - 启动QEditor

*如上图启动后，你可以在电脑上输入http://192.168.1.191:10000即可在浏览器上进行开发*


在编辑器中试试运行以下代码？
---------------------------

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
