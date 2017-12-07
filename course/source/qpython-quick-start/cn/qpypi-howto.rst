QPYPI指南
=============
第三方库可以快速扩展你的编程能力。 QPython主要通过QPYPI来管理第三方模块，你可以采用以下方法来更好地使用QPYPI。

工具
----
工具栏目提供了常用的QPython工具，它能帮助你快速安装某些QPython上的应用（如SQLMap tool, Fabric tool等），为编程工作提供快捷助手（如Django manage script, QEditor WebApp, Scapy tool等)，并且我们还会陆续完善更多工具。

.. image:: http://edu.qpython.org/static/qpypi-tools.png
    :alt: QPYPI - 工具


PIP控制台
------------------------------------
INSTALL WITH PYTHON'S PYPI

.. image:: http://edu.qpython.org/static/qpypi-pip.png
    :alt: QPYPI - PIP控制台


通过该工具，你可以使用QPython内置的pip工具来安装很多Python库，它能帮你安装大部分由纯Python语言开发（包括依赖库）的Python库。


注意：一些与c / c++文件混合的库不能通过pip控制台安装，这是由于安卓本身缺少开发编译环境支持，您可以向QPython团队寻求帮助。


库
-------
在库中，你可以安装一些由QPython团队整理和维护的Python的库。它们主要是由PIP控制台无法安装的Python库，或者由混合c/c++开发的但无法在QPython中编译的Python库，如kivy, Paramiko, PIL, Tornado等等。 你可以从这里方便地安装它们。

.. image:: http://edu.qpython.org/static/qpypi-libraries.png
    :alt: QPYPI - 库管理


AIPY库
--------
在AIPY库栏目中，QPython团队专门将与AI相关（包括神经网络、深度学习、数据统计和数学运算等等）的库整理进来，以便用户能够借助QPython在手机上进行AI相关编程学习。

.. image:: http://edu.qpython.org/static/qpypi-aipy.png
    :alt: QPYPI - AIPY


手动管理
------------
如果通过QPYPI无法安装你希望安装的库，你可以将你所要的安装的库复制到设备的 /sdcard/qpython/lib/python2.7/site-packages 目录，这样你就可以在代码中使用 import <module> 的方式来让QPython加载对应的库。

作者 & 更新时间
------------------------------------
作者: `River <https://github.com/riverfor>`_

提交: 2017/11/6

