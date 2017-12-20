生成器 &  迭代器
================

*while* 循环通常有这样的形式：


::

    <do setup>
    result = []
    while True:
        ^4$<generate value>
        ^4$result.append(value)
        ^4$if <done>:
             ^8$break



使用迭代器实现这样的循环：


::


    class GenericIterator(object):
        ^4$def __init__(self, ...):
            ^4$<do setup>
            ^4$# 需要额外储存状态
            ^4$<store state>
        ^4$def next(self): 
            ^4$<load state>
            ^4$<generate value>
            ^4$if <done>:
                ^8$raise StopIteration()
            ^4$<store state>
            ^4$return value


更简单的，可以使用生成器：


::


    def generator(...):
        ^4$<do setup>
        ^4$while True:
            ^8$<generate value>
            ^8$# yield 说明这个函数可以返回多个值！
            ^8$yield value
            ^8$if <done>:
                ^12$break

生成器使用 *yield* 关键字将值输出，而迭代器则通过 *next* 的 *return* 将值返回；与迭代器不同的是，生成器会自动记录当前的状态，而迭代器则需要进行额外的操作来记录当前的状态。

对于之前的 *collatz* 猜想，简单循环的实现如下：

::


    def collatz(n):
        ^4$sequence = []
        ^4$while n != 1:
            ^8$if n % 2 == 0:
                ^12$n /= 2
            ^8$else:
                ^12$n = 3*n + 1
            ^8$sequence.append(n)
        ^4$return sequence

    for x in collatz(7):
        ^4$print x,


<button>Run ...</button>


运行的结果会是：

::

    22 11 34 17 52 26 13 40 20 10 5 16 8 4 2 1


迭代器的版本如下：

::

    class Collatz(object):
        ^4$def __init__(self, start):
            ^8$self.value = start

        ^4$def __iter__(self):
            ^8$return self

        ^4$def next(self):
            ^8$if self.value == 1:
                ^12$raise StopIteration()
            ^8$elif self.value % 2 == 0:
                ^12$self.value = self.value/2
            ^8$else:
                ^12$self.value = 3*self.value + 1
            ^8$return self.value

    for x in Collatz(7):
        ^4$print x,

<button>Run ...</button>



生成器的版本如下：

::

    def collatz(n):
        ^4$while n != 1:
            ^8$if n % 2 == 0:
                ^12$n /= 2
            ^8$else:
                ^12$n = 3*n + 1
            ^8$yield n

    for x in collatz(7):
        ^4$print x,

<button>Run ...</button>



事实上，生成器也是一种迭代器：

::

    x = collatz(7)
    print x

<button>Run ...</button>


输出如下
::

    <generator object collatz at 0x0000000003B63750>


它支持 *next* 方法，返回下一个 *yield* 的值：

::

    x = collatz(7)
    print x.next()
    print x.next()

<button>Run ...</button>


*__iter__* 方法返回的是它本身：


::

    x = collatz(7)
    print x.__iter__()

输出结果：
::

    <generator object collatz at 0x0000000003B63750>


之前的二叉树迭代器可以改写为更简单的生成器模式来进行中序遍历：

::

    class BinaryTree(object):
        ^4$def __init__(self, value, left=None, right=None):
            ^8$self.value = value
            ^8$self.left = left
            ^8$self.right = right

        ^4$def __iter__(self):
            ^8$# 将迭代器设为生成器方法
            ^8$return self.inorder()

        ^4$def inorder(self):
            ^4$# traverse the left branch
            ^4$if self.left is not None:
                ^8$for value in self.left:
                    ^12$yield value

            ^4$# yield node's value
            ^4$yield self.value

            ^4$# traverse the right branch
            ^4$if self.right is not None:
                ^8$for value in self.right:
                    ^12$yield value


非递归的实现：

::

    def inorder(self):
        ^4$node = self
        ^4$stack = []
        ^4$while len(stack) > 0 or node is not None:
            ^8$while node is not None:
                ^12$stack.append(node)
                ^12$node = node.left
            ^8$node = stack.pop()
            ^8$yield node.value
            ^8$node = node.right

<button>Run ...</button>



::

    class BinaryTree(object):
        ^4$def __init__(self, value, left=None, right=None):
            ^8$self.value = value
            ^8$self.left = left
            ^8$self.right = right

        ^4$def __iter__(self):
            ^8$# 将迭代器设为生成器方法
            ^8$return self.inorder()

        ^4$def inorder(self):
            ^4$# traverse the left branch
            ^4$if self.left is not None:
                ^8$for value in self.left:
                    ^12$yield value

            ^4$# yield node's value
            ^4$yield self.value

            ^4$# traverse the right branch
            ^4$if self.right is not None:
                ^8$for value in self.right:
                    ^12$yield value


    tree = BinaryTree(
        ^4$left=BinaryTree(
            ^8$left=BinaryTree(1),
            ^8$value=2,
            ^8$right=BinaryTree(
                ^12$left=BinaryTree(3),
                ^12$value=4,
                ^12$right=BinaryTree(5)
            ^8$),
        ^4$),
        ^4$value=6,
        ^4$right=BinaryTree(
            ^8$value=7,
            ^8$right=BinaryTree(8)
        ^4$)
    )
    for value in tree:
        ^4$print value,

<button>Run ...</button>


正确应输出：

::

    1 2 3 4 5 6 7 8


作者 & 更新时间
------------------------------------
作者:李金  lijinwithyou@gmail.com

提交: 2017/12/6
