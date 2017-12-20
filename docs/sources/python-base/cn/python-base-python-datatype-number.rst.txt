简述
================

Python 中的每个值都有一个数据类型。

在 Python 编程中，**一切（万物）皆对象**，数据类型实际上是类，变量是这些类的实例（对象）。


数据类型
-------------

Python 中有各种数据类型，下面列出了一些重要类型：

  - Number（数字）
  - String（字符串）
  - List（列表）
  - Tuple（元组）
  - Set（集合）
  - Dictionary（字典）

Number（数字）
----------------
  

Python 支持三种不同的数字类型：

   - int（整型）
   - float（浮点型）
   - complex（复数）


**注意**： Py3.x 去除了 long 类型，现在只有一种整型 - int，表示为长整型。

可以使用 type() 函数获取变量或值的类型，使用 isinstance() 函数来检查一个对象是否属于一个特定的类。

::

    i = 5  # 整型
    type(i)

    f = 2.5  # 浮点型
    type(f)
    type(f)

    c = 1+2j  # 复数
    type(c)

<button>Run ...</button>



整数可以是任何长度，只受到可用内存的限制。

浮点数精确到 15 位小数。

复数以 x + yj 的形式写成，其中 x 是实部，y 是虚部。

::

    i = 2 ** 500  # 2 的 500 次幂
    f = 0.12345678901234567890
    c = 5+6j

<button>Run ...</button>

String（字符串）
-----------------


字符串是 Unicode 字符的序列。

可以使用单引号（''）或双引号（""）来表示字符串，多行字符串可以使用三重引号 ''' 或 """ 来表示。

::

    s = 'Hello, Python!'
    type(s)

<button>Run ...</button>

各种表示方式：

::

    s = 'Hello, Python!'  # 单引号
    s = "Hello, World!"  # 双引号
    s = '''Hello,  # 三重单引号
    World! '''

    s = """  # 三重双引号
    Hello,
    World!
    """



字符串可以被索引和截取，截取的语法格式如下：

变量[头下标:尾下标]

索引值以 0 开始，-1 为从末尾的开始位置。

::

    s = "Hello, World!"
    s[4]  # 第五个字符
    s[7:10]  # 第八个开始到第十个的字符
    s[-4:-1]  # 倒数第四个开始到倒数第一个的字符
    s[5] = 'p'  # 生成错误，字符串是不可变的

<button>Run ...</button>

加号（+）是字符串的连接符， 星号（*） 表示复制当前字符串，紧跟的数字为复制的次数。

::

    s1 = "Hello,"
    s2 = " World!"
    s1 + s2  # 连接字符串
    (s1 + s2) * 3  # 复制 3 次字符串

<button>Run ...</button>

List（列表）
-------------

列表是有序的元素序列，它是 Python 中使用最频繁的数据类型，非常灵活。

列表中元素的类型可以不同，支持数字、字符串，甚至可以包含列表（所谓的嵌套）。

列表用 [] 标识，内部元素用逗号分隔。

::

    l = [1, 5.5, 'Python']
    type(l)

<button>Run ...</button>

和字符串一样，列表同样可以被索引和截取，列表被截取后返回一个包含所需元素的新列表。

::

    l = [3, 2, 5, 4, 1]
    l
    l[2]  # 第三个元素
    l[0:3] # 从第一个元素到第三个元素
    l[3:] # 从第三个元素开始的所有元素

<button>Run ...</button>

列表是可变的，意思是说，列表中元素的值可以被改变。

::

    l = [1, 2, 3]
    l[2] = 5  # 将第三个元素 3 变为 5
    l

<button>Run ...</button>

Tuple（元组）
-------------

元组与列表相同，也是有序序列，唯一的区别是元组是不可变的。

元组适用于保护性的数据，通常比列表快，因为它不能动态更改。

元组用 () 标识，内部元素用逗号分隔。

::

    t = (5, 'Python', 1+2j)
    type(t)

<button>Run ...</button>

元组也可以被索引和截取，但是不能被更改。

::

    t = (3, 2, 5, 4, 1)
    t
    t[1]  # 第二个元素
    t[0:2] # 从第一个元素到第二个元素
    t[0] = 10  # 生成错误，元组是不可变的

<button>Run ...</button>

虽然元组中的元素不可变，但它可以包含可变的对象，例如：List（列表）。

构造一个空的或者包含一个元素的元组比较特殊，所以要采用一些额外的语法规则：

::

    tup1 = ()  # 空元组
    tup2 = (5, )  # 一个元素，需要在元素后添加逗号

<button>Run ...</button>

Set（集合）
-------------


集合是一个无序不重复元素集。

集合用 {} 标识，内部元素用逗号分隔。

可以使用大括号 {} 或者 set() 函数创建集合，注意： 要创建一个空集合，必须使用 set() 而不是 {}，因为 {} 用于创建一个空字典。

::

    s = {5, 'Python', 1+2j}
    type(s)

<button>Run ...</button>


既然集合是无序的，那么索引就没有任何意义，也就是说，切片操作符 [] 不起作用。


::

    s = {"Java", "Python", "PHP"}
    s[1]  # 生成错误，不支持索引

<button>Run ...</button>


不重复，是指集合中相同的元素会被自动过滤掉，只保留一份。


::

    s = {"PHP", "Python", "Java", "Python", "PHP"}
    s

<button>Run ...</button>


除了去重之外，还常用于成员关系的测试。

::

    if ('Python' in s) :
        ^4$print('Python 在集合中')
    else :
        ^4$print('Python 不在集合中')

<button>Run ...</button>



集合之间也可执行运算，例如：并集、差集、交集。

::

    a = set('abcdefg')
    b = set('abghijk')
    a
    >>>{'b', 'f', 'e', 'd', 'a', 'c', 'g'}
    b
    >>>{'b', 'k', 'h', 'i', 'j', 'a', 'g'}

    a - b  # 差集
    >>>{'f', 'c', 'd', 'e'}

    a | b  # 并集
    >>>{'b', 'k', 'f', 'h', 'i', 'e', 'j', 'd', 'a', 'c', 'g'}

    a & b  # 交集
    >>>{'b', 'a', 'g'}

    a ^ b  # 对称差 - 不同时存在的元素
    >>>{'e', 'c', 'k', 'f', 'h', 'i', 'j', 'd'}



对称差公式：A Δ B = (A ? B) ∪(B ? A)。也可表示为两个集合的并集减去它们的交集：A Δ B = (A ∪B) ? (A ∩B)。


Dictionary（字典）
---------------------

字典是键值对的无序集合。

通常在有大量的数据时会使用，在检索数据时字典做了优化，必须知道要检索的 value 所对应的 key。

字典用 {} 标识，其中的每个元素都以 key:value 对的形式出现，key 和 value 可以是任何类型。

**注意**： 字典中的 key 必须是唯一的。

::

    d = {1:'value', 'key':2}
    type(d)

<button>Run ...</button>

可以用 key 来检索相应的 value，但相反则不行。

::

    d = {}  # 创建空字典
    d['name'] = 'Python'  # 增加新的键/值对
    d['site'] = 'www.python.org'
    d
    d['site']  # 键为 'site' 的值
    d['Python']  # 生成错误，不能用 value 检索 key

<button>Run ...</button>


字典有一些内置的函数，例如：keys()、values()、clear() 等。

::

    d.keys()  # 所有键
    dict_keys(['name', 'site'])

    d.values()  # 所有值
    dict_values(['Python', 'www.python.org'])

    d.clear()  # 清空字典
    d

<button>Run ...</button>


数据类型之间的转换
---------------------

可以使用不同的类型转换函数来转换不同的数据类型，例如：int()、float()、str() 等。

从 int 转换为 float：

::

     float(5)

<button>Run ...</button>


从 float 到 int 的转换，值将会被截断（使其接近零）：

::

     int(10.8)
     int(-10.8)

<button>Run ...</button>

字符串的转换必须包含兼容的值：

::

    float('2.5')
    >>>2.5

    str(25)
    >>>'25'

    int('str')
    >>>Traceback (most recent call last):
     File "<stdin>", line 1, in <module>
     ValueError: invalid literal for int() with base 10: 'str'



甚至可以将一个序列转换为另一个序列：

::

    set([1, 2, 3])

    tuple({4, 5, 6})

    list('hello')

<button>Run ...</button>


要转换为字典，每个元素必须是一对：

::

    dict([[1, 'value'], ['key', 2]])

<button>Run ...</button>



作者 & 更新时间
------------------------------------
作者: `一去丶二三里 <http://blog.csdn.net/liang19890820>`_

提交: 2017/12/6
