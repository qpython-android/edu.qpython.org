修饰符
================


函数是一种对象
----------------



在 *Python* 中，函数是也是一种对象。



::

    def foo(x):
       print x
    
    print(type(foo))

结果:

::

    type 'function'



查看函数拥有的方法：




::

   dir(foo)
   Out[2]:
   ['__call__',
    '__class__',
    '__closure__',
    '__code__',
    '__defaults__',
    '__delattr__',
    '__dict__',
    '__doc__',
    '__format__',
    '__get__',
    '__getattribute__',
    '__globals__',
    '__hash__',
    '__init__',
    '__module__',
    '__name__',
    '__new__',
    '__reduce__',
    '__reduce_ex__',
    '__repr__',
    '__setattr__',
    '__sizeof__',
    '__str__',
    '__subclasshook__',
    'func_closure',
    'func_code',
    'func_defaults',
    'func_dict',
    'func_doc',
    'func_globals',
    'func_name']



在这些方法中，*__call__* 是最重要的一种方法：




::

   foo.__call__(42)

结果:
::

    42


相当于：

::


   foo(42)

结果:
::

    42


因为函数是对象，所以函数可以作为参数传入另一个函数：


::

   def bar(f, x):
       x += 1
       f(x)


::

   bar(foo, 4)

结果:
::

    5


修饰符
--------


修饰符是这样的一种函数，它接受一个函数作为输入，通常输出也是一个函数：




::

    def dec(f):
        print 'I am decorating function', id(f)
        return f


将 *len* 函数作为参数传入这个修饰符函数：



::


   declen = dec(len)


结果:
::

    I am decorating function 33716168


使用这个新生成的函数：


::


    declen([10,20,30])



结果:
::

    3



上面的例子中，我们仅仅返回了函数的本身，也可以利用这个函数生成一个新的函数，看一个新的例子：




::


    def loud(f):
        def new_func(*args, **kw):
            print 'calling with', args, kw
            rtn = f(*args, **kw)
            print 'return value is', rtn
            return rtn
        return new_func


<button>Run ...</button>




::

    loudlen = loud(len)

    loudlen([10, 20, 30])
    calling with ([10, 20, 30],) {}
    return value is 3

<button>Run ...</button>


结果:
::

    3


用 @ 来使用修饰符
---------------------



*Python* 使用 @ 符号来将某个函数替换为修饰符之后的函数：



例如这个函数：



::

    def foo(x):
        print x
    
    foo = dec(foo)



结果:
::

    I am decorating function 64021672


可以替换为：




::


    @dec
    def foo(x):
        print x


结果:
::

    I am decorating function 64021112



事实上，如果修饰符返回的是一个函数，那么可以链式的使用修饰符：



    @dec1


    @dec2

    def foo(x):

        print x





使用修饰符 *loud* 来定义这个函数：






::


    @loud
    def foo(x):
       print x




::

    foo(42)
    calling with (42,) {}
    42
    return value is None


例子
----------



定义两个修饰器函数，一个将原来的函数值加一，另一个乘二：






::

    def plus_one(f):
        def new_func(x):
            return f(x) + 1
        return new_func

    def times_two(f):
        def new_func(x):
            return f(x) * 2
        return new_func

<button>Run ...</button>


定义函数，先乘二再加一：




::



    @plus_one
    @times_two
    def foo(x):
       return int(x)




::

   foo(13)




结果:
::

    27




修饰器工厂
-------------


*decorators factories* 是返回修饰器的函数，例如：





::


    def super_dec(x, y, z):
        def dec(f):
            def new_func(*args, **kw):
                ^12$print x + y + z
                ^12$return f(*args, **kw)
            return new_func
        return dec



它的作用在于产生一个可以接受参数的修饰器，例如我们想将 *loud* 输出的内容写入一个文件去，可以这样做：





::

    def super_loud(filename):
        fp = open(filename, 'w')
        def loud(f):
            def new_func(*args, **kw):
                ^12$fp.write('calling with' + str(args) + str(kw))
                ^12$# 确保内容被写入
                ^12$fp.flush()
                ^12$fp.close()
                ^12$rtn = f(*args, **kw)
                ^12$return rtn
            return new_func
        return loud




可以这样使用这个修饰器工厂：





::


    @super_loud('test.txt')
    def foo(x):
        print x





调用 *foo* 就会在文件中写入内容：




::
    
    foo(12)


结果:
::

    12



查看文件内容：



::

    with open('test.txt') as fp:
        print fp.read()
    calling with(12,){}





::

    import os
    os.remove('test.txt')


作者 & 更新时间
------------------------------------
作者:李金  lijinwithyou@gmail.com

提交: 2017/12/6
