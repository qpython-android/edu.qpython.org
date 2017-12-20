with 语句和上下文管理器
================================


::

    # create/aquire some resource
    ...
    try:
        # do something with the resource
        ...
    finally:
        # destroy/release the resource
        ...


处理文件，线程，数据库，网络编程等等资源的时候，我们经常需要使用上面这样的代码形式，以确保资源的正常使用和释放。

好在Python 提供了 with 语句帮我们自动进行这样的处理，例如之前在打开文件时我们使用：



::

    with open('my_file', 'w') as fp:
        ^4$# do stuff with fp
        ^4$data = fp.write("Hello world")

<button>Run ...</button>


这等效于下面的代码，但是要更简便：

::

    fp = open('my_file', 'w')
    try:
        ^4$# do stuff with f
        ^4$data = fp.write("Hello world")
    finally:
        ^4$fp.close()

<button>Run ...</button>

上下文管理器
---------------


其基本用法如下：

::

    with <expression>:
         ^4$<block>


*<expression>* 执行的结果应当返回一个实现了上下文管理器的对象，即实现这样两个方法，*__enter__* 和 *__exit__*：


::

    with open('my_file', 'w') as fp:
        ^4$# do stuff with fp
        ^4$data = fp.write("Hello world")

        ^4$print fp.__enter__
        ^4$print fp.__exit__

输出如下：
::

    <built-in method __enter__ of file object at 0x0000000003C1D540>
    <built-in method __exit__ of file object at 0x0000000003C1D540>



*__enter__ *方法在 *<block>* 执行前执行，而 *__exit__ *在 *<block>* 执行结束后执行：


比如可以这样定义一个简单的上下文管理器：



::

    class ContextManager(object):
        ^4$def __enter__(self):
            ^8$print "Entering"

        ^4$def __exit__(self, exc_type, exc_value, traceback):
            ^4$print "Exiting"



    with ContextManager():
        ^4$print "  Inside the with statement"


<button>Run ...</button>


即使 *<block>* 中执行的内容出错，*__exit__* 也会被执行：



::

    class ContextManager(object):
        ^4$def __enter__(self):
            ^8$print "Entering"

        ^4$def __exit__(self, exc_type, exc_value, traceback):
            ^4$print "Exiting"


    with ContextManager():
        ^4$print 1/0

<button>Run ...</button>

输出会是：

::

    Entering
    Exiting

    ZeroDivisionError Traceback (most recent call last)

    ZeroDivisionError: integer division or modulo by zero


*__enter__* 的返回值
---------------------

如果在 *__enter__ *方法下添加了返回值，那么我们可以使用 *as* 把这个返回值传给某个参数：



::

    class ContextManager(object):
        ^4$def __enter__(self):
            ^8$print "Entering"
            ^8$return "my value"

        ^4$def __exit__(self, exc_type, exc_value, traceback):
            ^8$print "Exiting"


    #将 *__enter__*返回的值传给 *value* 变量：
    with ContextManager() as value:
        ^4$print value

<button>Run ...</button>

输出应该是：

::

    Entering
    my value
    Exiting


一个通常的做法是将 *__enter__* 的返回值设为这个上下文管理器对象本身，文件对象就是这样做的：



::


    fp = open('my_file', 'r')
    print fp.__enter__()
    fp.close()
    import os
    os.remove('my_file')



<button>Run ...</button>


实现方法非常简单：


::

    class ContextManager(object):
        ^4$def __enter__(self):
            ^8$print "Entering"
            ^8$return self

        ^4$def __exit__(self, exc_type, exc_value, traceback):
            ^8$print "Exiting"

<button>Run ...</button>



::

    with ContextManager() as value:
        ^4$print value


输出是：
::

    Entering
    <__main__.ContextManager object at 0x0000000003D48828>
    Exiting


错误处理
-------------

上下文管理器对象将错误处理交给 *__exit__* 进行，可以将错误类型，错误值和 *traceback* 等内容作为参数传递给 *__exit__* 函数：


::

    class ContextManager(object):
        ^4$def __enter__(self):
            ^8$print "Entering"

        ^4$def __exit__(self, exc_type, exc_value, traceback):
            ^8$print "Exiting"
            ^4$if exc_type is not None:
                ^8$print "  Exception:", exc_value

    #如果没有错误，这些值都将是 *None*, 当有错误发生的时候：

    with ContextManager():
        ^4$print 1/0


<button>Run ...</button>

输出是：
::

    Entering
    Exiting
    Exception: integer division or modulo by zero

    ZeroDivisionError Traceback (most recent call last)
    ZeroDivisionError: integer division or modulo by zero


在这个例子中，我们只是简单的显示了错误的值，并没有对错误进行处理，所以错误被向上抛出了，如果不想让错误抛出，只需要将 *__exit__* 的返回值设为* True*：



::

    class ContextManager(object):
        ^4$def __enter__(self):
            ^8$print "Entering"

        ^4$def __exit__(self, exc_type, exc_value, traceback):
            ^8$print "Exiting"
            ^4$if exc_type is not None:
                ^8$print " Exception suppresed:", exc_value
                ^8$return True

    with ContextManager():
        ^4$print 1/0


<button>Run ...</button>


输出是：
::

    Entering
    Exiting
    Exception suppresed: integer division or modulo by zero


在这种情况下，错误就不会被向上抛出。


数据库的例子
-------------

对于数据库的 *transaction* 来说，如果没有错误，我们就将其 *commit* 进行保存，如果有错误，那么我们将其回滚到上一次成功的状态。


::

    class Transaction(object):
        ^4$def __init__(self, connection):
            ^8$self.connection = connection

        ^4$def __enter__(self):
            ^8$return self.connection.cursor()

        ^4$def __exit__(self, exc_type, exc_value, traceback):
            ^8$if exc_value is None:
                ^12$# transaction was OK, so commit
                ^12$self.connection.commit()
            ^8$else:
                ^12$# transaction had a problem, so rollback
                self.connection.rollback()

    #建立一个数据库，保存一个地址表：

    import sqlite3 as db
    connection = db.connect(":memory:")

    with Transaction(connection) as cursor:
        ^4$cursor.execute("""CREATE TABLE IF NOT EXISTS addresses (
            ^8$address_id INTEGER PRIMARY KEY,
            ^8$street_address TEXT,
            ^8$city TEXT,
            ^8$state TEXT,
            ^8$country TEXT,
            ^8$postal_code TEXT
        ^4$)""")


    #插入数据：

    with Transaction(connection) as cursor:
        ^4$cursor.executemany("""INSERT OR REPLACE INTO addresses VALUES (?, ?, ?, ?, ?, ?)""", [
            ^8$(0, '515 Congress Ave', 'Austin', 'Texas', 'USA', '78701'),
            ^8$(1, '245 Park Avenue', 'New York', 'New York', 'USA', '10167'),
            ^8$(2, '21 J.J. Thompson Ave.', 'Cambridge', None, 'UK', 'CB3 0FA'),
            ^8$(3, 'Supreme Business Park', 'Hiranandani Gardens, Powai, Mumbai', 'Maharashtra', 'India', '400076'),
        ^4$])

    #假设插入数据之后出现了问题：
    with Transaction(connection) as cursor:
        ^4$cursor.execute("""INSERT OR REPLACE INTO addresses VALUES (?, ?, ?, ?, ?, ?)""",
            ^8$(4, '2100 Pennsylvania Ave', 'Washington', 'DC', 'USA', '78701'),
        ^4$)
        ^4$raise Exception("out of addresses")

<button>Run ...</button>


输出为：

::

    Exception Traceback (most recent call last)
    ...
    Exception: out of addresses


最新的一次插入将不会被保存，而是返回上一次 commit 成功的状态：



如果继续执行：

::

    cursor.execute("SELECT * FROM addresses")
    for row in cursor:
        ^4$print row


输出为：
::

    (0, u'515 Congress Ave', u'Austin', u'Texas', u'USA', u'78701')

    (1, u'245 Park Avenue', u'New York', u'New York', u'USA', u'10167')

    (2, u'21 J.J. Thompson Ave.', u'Cambridge', None, u'UK', u'CB3 0FA')

    (3, u'Supreme Business Park', u'Hiranandani Gardens, Powai, Mumbai', u'Maharashtra', u'India', u'400076')


contextlib 模块
----------------

很多的上下文管理器有很多相似的地方，为了防止写入很多重复的模式，可以使用 *contextlib* 模块来进行处理。

最简单的处理方式是使用 *closing* 函数确保对象的 *close()* 方法始终被调用：

::

    from contextlib import closing
    import urllib

    with closing(urllib.urlopen('http://www.qpython.com')) as url:
        ^4$html = url.read()

    print html[:100]


<button>Run ...</button>


另一个有用的方法是使用修饰符 *@contextlib*：


::

    from contextlib import contextmanager

    @contextmanager
    def my_contextmanager():
        ^4$print "Enter"
        ^4$yield
        ^4$print "Exit"

    with my_contextmanager():
        ^4$print "  Inside the with statement"

<button>Run ...</button>

输出应是：
::

    Enter
    Inside the with statement
    Exit


*yield *之前的部分可以看成是* __enter__* 的部分，*yield* 的值可以看成是 *__enter__* 返回的值，*yield *之后的部分可以看成是* __exit__* 的部分。

使用 *yield* 的值：



::


    @contextmanager
    def my_contextmanager():
        print "Enter"
        yield "my value"
        print "Exit"

    with my_contextmanager() as value:
        print value


输出是：
::

    Enter
    my value
    Exit


错误处理可以用 *try* 块来完成：

::

    @contextmanager
    def my_contextmanager():
        ^4$print "Enter"
        ^4$try:
            ^8$yield
        except Exception as exc:
            ^8$print "   Error:", exc
        finally:
            ^4$print "Exit"


    with my_contextmanager():
        ^4$print 1/0

<button>Run ...</button>

输出为：
::

    Enter
    Error: integer division or modulo by zero
    Exit


对于之前的数据库 *transaction* 我们可以这样定义：


::

    @contextmanager
    def transaction(connection):
        ^4$cursor = connection.cursor()
        ^4$try:
            ^8$yield cursor
        ^4$except:
            ^8$connection.rollback()
            ^8$raise
        ^4$else:
            ^8$connection.commit()

<button>Run ...</button>


作者 & 更新时间
------------------------------------
作者:`李金  <lijinwithyou@gmail.com>`

提交: 2017/12/6

