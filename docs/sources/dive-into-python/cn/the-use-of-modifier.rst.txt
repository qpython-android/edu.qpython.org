修饰符的使用
================



@classmethod 修饰符
--------------------


在 *Python* 标准库中，有很多自带的修饰符，例如 *classmethod* 将一个对象方法转换了类方法：


 

::

    class Foo(object):
        @classmethod
        ^4$def bar(cls, x):
            ^8$print 'the input is', x
        
        ^4$def __init__(self):
            ^8$pass



类方法可以通过 **类名.方法** 来调用：



 

::

   Foo.bar(12)


结果:
::
    12


@property 修饰符
-----------------


有时候，我们希望像 **Java** 一样支持 *getters* 和 *setters* 的方法，这时候就可以使用 *property* 修饰符：



 

::


    class Foo(object):
        ^4$def __init__(self, data):
            ^8$self.data = data
    
        ^4$@property
        ^4$def x(self):
            ^8$return self.data



此时可以使用* .x* 这个属性查看数据（不需要加上括号）：



 

::

   foo = Foo(23)
   foo.x

结果: 
::

    23


这样做的好处在于，这个属性是只读的：

::


   foo.x = 1



如果想让它变成可读写，可以加上一个修饰符 *@x.setter*：




 


::

    class Foo(object):
    def __init__(self, data):
        ^4$self.data = data
    
    @property
    def x(self):
        ^4$return self.data
    
    @x.setter
    def x(self, value):
        ^4$self.data = value



 


::

    foo = Foo(23)
    print foo.x

结果:
::

    23


可以通过属性改变它的值：



 

::


   foo.x = 1
   print foo.x


结果:
::

    1


Numpy 的 @vectorize 修饰符
---------------------------

*numpy* 的 *vectorize* 函数讲一个函数转换为 *ufunc*，事实上它也是一个修饰符：



 


::
     
    from numpy import vectorize, arange

    @vectorize
    def f(x):
        ^4$if x <= 0:
            ^8$return x
        ^4$else:
            ^8$return 0

    f(arange(-10.0,10.0))




结果: 
::

    
    array([-10.,  -9.,  -8.,  -7.,  -6.,  -5.,  -4.,  -3.,  -2.,  -1.,   0.,0.,   0.,   0.,   0.,   0.,   0.,   0.,   0.,   0.])



注册一个函数
------------------


来看这样的一个例子，定义一个类：



 

::


    class Registry(object):
    def __init__(self):
        ^4$self._data = {}
    def register(self, f, name=None):
        ^4$if name == None:
            ^8$name = f.__name__
        ^4$self._data[name] = f
        ^4$setattr(self, name, f)


*register* 方法接受一个函数，将这个函数名作为属性注册到对象中。




产生该类的一个对象：



 

::

    registry = Registry()



使用该对象的 *register* 方法作为修饰符：



 

::

    @registry.register
    def greeting():
        ^4$print "hello world"


这样这个函数就被注册到 *registry* 这个对象中去了：



 

::


    registry._data


结果: 
::

    {'greeting': <function __main__.greeting>}



 

::


    registry.greeting


结果: 
::

    <function __main__.greeting>



*flask* ，一个常用的网络应用，处理 url 的机制跟这个类似。




使用 @wraps
----------------


一个通常的问题在于：



 

::

     def logging_call(f):
        ^4$def wrapper(*a, **kw):
            ^8$print 'calling {}'.format(f.__name__)
            ^8$return f(*a, **kw)
        ^4$return wrapper

    @logging_call
    def square(x):
        '''
       square function.
        '''
       return x ** 2

    print square.__doc__, square.__name__



None wrapper



我们使用修饰符之后，*square* 的 *metadata* 完全丢失了，返回的函数名与函数的 *docstring* 都不对。

一个解决的方法是从 *functools* 模块导入 *wraps* 修饰符来修饰我们的修饰符：



 

::

     import functools

    def logging_call(f):
        @functools.wraps(f)
        ^4$def wrapper(*a, **kw):
            ^8$print 'calling {}'.format(f.__name__)
            ^8$return f(*a, **kw)
        ^4$return wrapper

    @logging_call
    def square(x):
       '''
       square function.
       '''
       return x ** 2

    print square.__doc__, square.__name__
 

<button>Run ...</button>


    square function.
     square



现在这个问题解决了，所以在自定义修饰符方法的时候为了避免出现不必要的麻烦，尽量使用* wraps* 来修饰修饰符！

Class 修饰符
---------------



与函数修饰符类似，类修饰符是这样一类函数，接受一个类作为参数，通常返回一个新的类。



作者 & 更新时间
------------------------------------
作者:李金  lijinwithyou@gmail.com

提交: 2017/12/6

