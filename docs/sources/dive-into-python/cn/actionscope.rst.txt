作用域
-------


在函数中，*Python* 从命名空间中寻找变量的顺序如下：


- local function scope
- enclosing scope
- global scope
- builtin scope


例子：

local 作用域
---------------


 

::


    def foo(a,b): 
       ^4$c = 1 
       ^4$d = a + b + c



这里所有的变量都在 *local* 作用域。



global 作用域
---------------

 

::


     c = 1
     def foo(a,b): 
       ^4$d = a + b + c


这里的 *c* 就在 *global* 作用域。




global 关键词
-----------------


使用 *global* 关键词可以在 *local* 作用域中修改 *global* 作用域的值。



 

::

   c = 1
   def foo(): 
      ^4$global c 
      ^4$c = 2
    
   print c
   foo()
   print c

结果:

::

  1
  2



其作用是将 *c* 指向 *global* 中的 *c*



如果不加关键词，那么 *local* 作用域的 *c* 不会影响 *globa* 作用域中的值：



 

::

   c = 1
   def foo(): 
       ^4$c = 2
    
   print c
   foo()
   print c

结果:

::

  1
  1



built-in 作用域
-----------------

::



    def list_length(a): 
       ^4$return len(a)

    a = [1,2,3]
    print list_length(a)



结果:

::

  3


这里函数 *len *就是在* built-in* 作用域中：




 

::

    import __builtin__

    __builtin__.len




class 中的作用域
----------------------


+------------+------------+
|Global      |	MyClass   |
+============+============+
|var = 0     |            | 
+------------+------------+
|MyClass     |    var = 1 |
+------------+------------+
|access_class|access_class|
+------------+------------+

 


::

    # global
    var = 0

    class MyClass(object): 
       ^4$# class variable 
       ^4$var = 1
     
       ^4$def access_class_c(self): 
       ^4$^4$    print 'class var:', self.var
     
       ^4$def write_class_c(self): 
       ^4$ ^4$    MyClass.var = 2 
       ^4$ ^4$    print 'class var:', self.var 
       ^4$def access_global_c(self): 
       ^4$ ^4$    print 'global var:', var
     
       ^4$def write_instance_c(self): 
       ^4$ ^4$    self.var = 3 
       ^4$ ^4$    print 'instance var:', self.var



::

  Global	 MyClass	obj
  var = 0 
  MyClass 
  [access_class] 
  obj	         var = 1
  access_class	


 

::


   obj = MyClass()



查询 *self.var* 时，由于 *obj* 不存在 *var*，所以跳到 **MyClass** 中：

::

   Global	 MyClass	obj
   var = 0 
   MyClass 
   [access_class 
   self] 
   obj	         var = 1
   access_class	


 

::

   obj.access_class_c()


class var: 1


查询 *var* 直接跳到 *global* 作用域：

::

   Global	MyClass	obj
   var = 0 
   MyClass 
   [access_class 
   self] 
   obj	       var = 1
   access_class	



 

::


    obj.access_global_c()


global var: 0


修改类中的 *MyClass.var*：


::

   Global	MyClass	obj
   var = 0 
   MyClass 
   [access_class 
   self] 
   obj	      var = 2
   access_class	



 

::

   obj.write_class_c()
   class var: 2

修改实例中的 *var* 时，会直接在 *obj* 域中创建一个：


::

  Global	MyClass	obj
  var = 0 
  MyClass 
  [access_class 
  self] 
  obj	var = 2
  access_class	var = 3




 

::

   obj.write_instance_c()


instance var: 3


 

::

    MyClass.var


结果:

::

  2



*MyClass* 中的 *var* 并没有改变。



词法作用域
-------------



对于嵌套函数：



 

::

    def outer(): 
      ^4$a = 1 
      ^4$def inner():
 
       ^4$ ^4$    print "a =", a
 
       ^4$ ^4$inner()
    
    outer() 


结果:

::

  a = 1




如果里面的函数没有找到变量，那么会向外一层寻找变量，如果再找不到，则到 global 作用域。

返回的是函数的情况：



 

::

    def outer(): 
       ^4$a = 1 
       ^4$def inner(): 
       ^4$ ^4$   return a 
       ^4$return inner
    
    func = outer()

    print 'a (1):', func()



结果:

::

  a (1): 1


*func()* 函数中调用的* a *要从它定义的地方开始寻找，而不是在 *func* 所在的作用域寻找。





作者 & 更新时间
------------------------------------
作者:李金  lijinwithyou@gmail.com

提交: 2017/12/6

   