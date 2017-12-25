动态编译
================


标准编程语言
---------------


对于 **C** 语言，代码一般要先编译，再执行。

::

   .c -> .exe


解释器语言
--------------


::

    shell 脚本

       .sh -> interpreter


Byte Code 编译
------------------


**Python**, **Java** 等语言先将代码编译为 byte code（不是机器码），然后再处理：


::

    .py -> .pyc -> interpreter



eval 函数
--------------

::
 
    eval(statement, glob, local)



使用 *eval* 函数动态执行代码，返回执行的值：




::
 
   a = 1

   eval("a+1")



结果:
::

    2



可以接收明明空间参数：





::


   local = dict(a=2)
   glob = {}
   eval("a+1", glob, local)



结果:
::

    3



这里 *local* 中的 *a* 先被找到。



exec 函数
--------------

::

   exec(statement, glob, local)



使用 *exec* 可以添加修改原有的变量。






::

   a = 1

   exec("b = a+1")

   print b

结果:
::

  2




::


   local = dict(a=2)
   glob = {}
   exec("b = a+1", glob, local)

   print local



结果:
::

  {'a': 2, 'b': 3}


执行之后，*b* 在 *local* 命名空间中。



警告
--------


动态执行的时候要注意，不要执行不信任的用户输入，因为它们拥有 *Python* 的全部权限。



compile 函数生成 byte code
------------------------------


     compile(str, filename, mode)





::


   a = 1
   c = compile("a+2", "", 'eval')

   eval(c)



结果:
::

    3






::


   a = 1
   c = compile("b=a+2", "", 'exec')

   exec(c)
   b


结果:
::

    3



abstract syntax trees
-----------------------





::

    import ast





::


    tree = ast.parse("a+2", "", "eval")

    ast.dump(tree)



结果:
::

    "Expression(body=BinOp(left=Name(id='a', ctx=Load()), op=Add(), right=Num(n=2)))"



改变常数的值：






::


    tree.body.right.n = 3

    ast.dump(tree)



结果:
::

    "Expression(body=BinOp(left=Name(id='a', ctx=Load()), op=Add(), right=Num(n=3)))"







::

   a = 1
   c = compile(tree, '', 'eval')

   eval(c)



结果:
::

    4




安全的使用方法 *literal_eval* ，只支持基本值的操作：





::


   ast.literal_eval("[10.0, 2, True, 'foo']")


结果:
::

    [10.0, 2, True, 'foo']



作者 & 更新时间
------------------------------------
作者:李金  lijinwithyou@gmail.com

提交: 2017/12/6
