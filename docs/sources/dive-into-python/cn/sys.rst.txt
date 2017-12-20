sys 模块简介
=======================

通过以下方式引入sys模块
::

    import sys


命令行参数
----------------------------------------------------------
*sys.argv* 显示传入的参数：

假设print_args.py的内容如下：

::

    import sys
    print sys.argv


用以下方法运行这个程序

::

    python print_args.py 1 foo

将会得到以下的输出

::

    ['print_args.py', '1', 'foo']


第一个参数 （*sys.args[0]*） 表示的始终是执行的文件名，然后依次显示传入的参数。

可以用os.remove删除文件：

::

    import os
    os.remove('print_args.py')


异常消息
-------------------------------------------------------------
*sys.exc_info() *可以显示 *Exception* 的信息，返回一个 *(type, value, traceback)* 组成的三元组，可以与 *try/catch* 块一起使用：

::

    try:
        ^4$x = 1/0

    except Exception:
        ^4$print sys.exc_info()


运行上述代码，将会得到：

::

    (<type 'exceptions.ZeroDivisionError'>, ZeroDivisionError('integer division or modulo by zero',), <traceback object at 0x0000000003C6FA08>)

*sys.exc_clear()* 用于清除所有的异常消息。



标准输入输出流
----------------------------------------------------

以下属性代表python的标准输入输出流操作句柄

- sys.stdin
- ys.stdout
- sys.stderr

退出Python
------------------------------------------------------
*sys.exit(arg=0)* 用于退出 Python。*0* 或者 *None* 表示正常退出，其他值表示异常。

Python Path
--------------------------------------------------------
*sys.path* 表示 Python 搜索模块的路径和查找顺序：

::

    import sys
    print sys.path

<button>Run ...</button>

在程序中可以通过sys.append, sys.insert 等方式添加，修改新的路径。


操作系统信息
----------------------------------------------------------------
*sys.platform* 显示当前操作系统信息：

- Windows: win32
- Mac OSX: darwin
- Linux: linux2

::

    import sys
    sys.platform

<button>Run ...</button>

'win32'
返回*Windows* 操作系统的版本：

::

    import sys
    sys.getwindowsversion()


将会输出
::

    sys.getwindowsversion(major=6, minor=2, build=9200, platform=2, service_pack='')

标准库中有 *planform* 模块提供更详细的信息。

Python 版本信息
------------------------------------------------------------
::

    import sys
    sys.version

::

    import sys
    sys.version_info



作者 & 更新时间
------------------------------------
作者:`李金  <lijinwithyou@gmail.com>`

提交: 2017/12/6

