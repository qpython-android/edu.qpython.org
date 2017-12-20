Python 运算符
================

简述
-----
在 Python 中，for 循环用于迭代序列（例如：列表、元组）或其他可迭代对象，迭代序列称为遍历。

for 循环
----------
语法格式：

::

    for <val> in <序列>:
        ^4$<循环体>


val 是一个变量，在每次迭代中，用于接收将序列中元素的值。

循环会一直继续，直到到达序列的最后一项。循环体与其余的代码使用缩进分隔。

流程图：

.. image:: http://img.blog.csdn.net/20170416152544984


::

    for letter in 'Jay':
        ^4$print('当前字母：', letter)

    songs = ['安静', '蜗牛', '稻香']   
    for song in songs:
        ^4$print('正在播放：', song)

<button>Run ...</button>

运行程序，输出如下：

::

    当前字母： J
    当前字母： a
    当前字母： y
    正在播放： 安静
    正在播放： 蜗牛
    正在播放： 稻香

这里，可以将 for 循环视为歌曲中的顺序播放。

通过索引遍历
---------------

可以使用 range() 函数生成一个数字序列。

还可以定义 range(start, stop[, step]) 中的 start、stop 和 step，如果没有提供 step，步长默认为 1。

要强制该函数输出所有元素，可以使用函数 list()：

::

    # 输出：range(0, 10)
    print(range(10))

    # 输出：[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    print(list(range(10)))

    # 输出：[2, 3, 4, 5, 6, 7]
    print(list(range(2, 8)))

    # 输出：[2, 5, 8, 11, 14, 17]
    print(list(range(2, 20, 3)))    

<button>Run ...</button>

可以在 for 循环中使用 range() 来遍历一个数字序列，它可以与内置函数 len() 结合，使用索引进行序列迭代。

len() 返回列表的长度，即：元素的个数。

::

    songs = ['安静', '蜗牛', '稻香']

    # 通过索引遍历列表
    for i in range(len(songs)):
        ^4$print("正在播放：", songs[i])

<button>Run ...</button>

运行程序，输出如下：

::

    正在播放： 安静
    正在播放： 蜗牛
    正在播放： 稻香


for … else
------------------

for 循环也可以有一个可选的 else 块，如果循环正常执行完（即：不是通过 break 跳出而中断的），则执行 else 部分。

**注意：** break 语句可以用来跳出 for 循环，在这种情况下，else 部分会被忽略。

::

    songs = ['安静', '蜗牛', '稻香']
    for song in songs:
        ^4$print('正在播放：', song)
    else:
        ^4$print('播放结束')

<button>Run ...</button>

运行程序，输出如下：

::

    正在播放： 安静
    正在播放： 蜗牛
    正在播放： 稻香
    播放结束


可以看到，当 for 循环结束时，执行 else 中的代码块。



作者 & 更新时间
------------------------------------
作者: `一去丶二三里 <http://blog.csdn.net/liang19890820>`_

提交: 2017/12/6
