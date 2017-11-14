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


注意：一些与c / c++文件混合的库不能通过pip控制台安装，这是由于因为android本身缺少开发编译环境，您可以向qpython团队寻求帮助。


库
-------
在库中，你可以安装一些由QPython团队整理和维护的Python的库。它们主要是由PIP控制台无法安装的Python库，或者由混合c/c++开发的但无法在QPython中编译的Python库，如kivy, Paramiko, PIL, Tornado等等。 你可以从这里方便地安装它们。

.. image:: http://edu.qpython.org/static/qpypi-libraries.png
    :alt: QPYPI - 库管理


AIPY库
--------
在AIPY库栏目中，QPython团队专门将与AI相关（包括神经网络、深度学习、数据统计和数学运算等等）的库整理进来，以便用户能够借助QPython在手机上就方便地进行AI相关编程学习。

.. image:: http://edu.qpython.org/static/qpypi-aipy.png
    :alt: QPYPI - AIPY


手动管理
------------
除了上面的方法，你可以将你所要的安装的及其依赖的库复制到你设备中的 /sdcard/qpython/lib/python2.7/site-packages 目录中来安装上该库（注意，只支持纯Python开发的库）.
