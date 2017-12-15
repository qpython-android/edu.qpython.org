Kivy App 教程>>一个简单的绘画应用程序
============================================

贡献者
------------------------------------------------------
作者: `Kivy <https://kivy.org/>`_



在接下来的教程中, 您将需要创建一个新的小部件作为引导。 这将在编写Kivy应用程序时提供了丰富并且重要的知识，它可以根据您想要达到的目的让您创建全新的用户界面与自定义元素。 

基本事项
---------------------
在创建应用程序时，你必须问自己三个重要的问题：

- 我的应用程序要处理什么数据？
- 我该如何直观地表示这些数据？
- 用户如何与这些数据交互？


举个例子，如果您想写一个非常简单的线画应用程序，让用户用手指在屏幕上画画， 这就是用户和您的应用程序的交互方式。 当用户这么做时, 应用程序将会记住用户手指的位置， 以便稍后您可以在这些位置进行画线。所以手指所在的点将是您的数据，你在它们之间画的线将是您的视觉表现。


在Kivy上, 应用程序的用户界面由小部件组成。 您在屏幕上所看的的东西都是由这个小部件绘制而成。 通常情况下，你会想要重写之前在不同背景下的写的代码，这就是为什么小部件典型地代表了一个回答上述三个问题的具体实例。 小部件封装数据，定义用户与数据的交互并绘制其可视化表示。 您可以通过嵌套小部件来构建从简单到复杂的用户界面。 这里有很多内置的小部件，如按钮，滑块和其他常见的东西。在很多情况下， 你可能你需要一个超出Kivy附带范围的自定义小部件 (例如：一个医学可视化部件)。


所以，在设计小部件的时候请记住这三个问题。 尝试以最小及可重用的方式写它们 (即一个小部件完全是它应该做的，只不过是其他事情而已。 如果您需要更多，可以编写更多的小部件或编写更小的小部件的其他小部件。 我们试图坚持单一责任原则).



绘制小部件
------------

我们确信您从童年开始就梦想创造属于自己的多点触控画图程序。而我们，可以助您圆梦 。在下面的章节中，您将会学习如何使用Kivy来编写这样的程序。 在此之前，请确保您已经阅读和理解创建一个应用程序。准备好了吗？让我们开始吧！ 


**初始结构**


先来写一个我们需要的基础代码框架。顺便提一句，本节中使用的所有不同的代码片段也可以在Kivy附带的examples / guide / firstwidget目录中找到，所以您可以不用每次都要复制和粘贴 。下面是我们所需要的一个基础代码框架 ：


::

    #qpy:kivy
    from kivy.app import App
    from kivy.uix.widget import Widget


    class MyPaintWidget(Widget):
        ^4$pass


    class MyPaintApp(App):
        ^4$def build(self):
            ^8$return MyPaintWidget()


    if __name__ == '__main__':
        ^4$MyPaintApp().run()

<button>Run ...</button>


说实话，这很简单。保存为paint.py. 如果你运行它，你应该只会看见黑屏。这时你所看到，并不是使用像Button这样的内置小部件（请参阅创建应用程序），我们将继续编写小部件来完成绘图。我们通过一个从小部件(line 5-6)继承的类来实现这一点，虽然这个类暂时还没什么用，但我们还能像正常的Kivy部件一样对待它（line 11）。if __name__ ...结构（第14行）是一种Python机制，可防止在从文件导入时执行if语句中的代码， 即：如果您编写导入绘图，它不会执行一些计划之外的事情，但可以很好地提供文件中定义的类。

*注意: 您可能想知道为什么您必须单独导入App和Widget， 而不是从kivy导入 *. 尽管时间较短，但这会使你的命名造成污染，并导致应用程序的启动速度变慢。它也可能引入歧义类和变量命名，所以通常在Python社区中被人们所诟病。 我们这样做的方式更快，更全面。*


**添加行为**

现在就让我们开始添加一些实际行为，即：即使其对用户输入做出反应。

像这样改编代码：


::
    from kivy.app import App
    from kivy.uix.widget import Widget


    class MyPaintWidget(Widget):
        ^4$def on_touch_down(self, touch):
            ^8$print(touch)


    class MyPaintApp(App):
        ^4$def build(self):
            ^8$return MyPaintWidget()


    if __name__ == '__main__':
        ^4$MyPaintApp().run()


<button>Run ...</button>

这只是为了显示对用户输入做出反应的容易程度。当发生MotionEvent（即触摸，点击等）时，我们将会把关于触摸对象的信息打印6给控制台。 在屏幕上您不会看到任何东西，但是如果您观察从中运行程序的命令行，你会看到每一个触摸的消息。这也表明一个小部件不必具有可视化表示。

这些用户体验并不会让人无所适从。接下来让我们在绘制窗口中添加一些实际的代码：


::

    #qpy:kivy
    from kivy.app import App
    from kivy.uix.widget import Widget
    from kivy.graphics import Color, Ellipse

    class MyPaintWidget(Widget):

        ^4$def on_touch_down(self, touch):
            ^8$with self.canvas:
                ^12$Color(1, 1, 0)
                ^12$d = 30.
                ^12$Ellipse(pos=(touch.x - d / 2, touch.y - d / 2), size=(d, d))


    class MyPaintApp(App):

        ^4$def build(self):
            ^8$return MyPaintWidget()


    if __name__ == '__main__':
        ^4$MyPaintApp().run()

<button>Run ...</button>

.. image:: http://edu.qpython.org/static/kivy-guide-3.jpg
    :alt: screenshot of pong game


如果您通过这些修改运行代码，您会看到每次触摸时，你会触摸到一个小的黄色圆圈。 

它是如何工作的？

- Line 9: 我们使用Python的语句和小部件的Canvas对象 这就像是小部件可以在屏幕上绘制事物来表示自己的一个区域。通过使用with语句，所有正确缩进的连续绘图命令都将修改此画布。 with声明还确保在我们绘制之后，内部状态可以被妥善地清理。
- Line 10: 您可能已经猜到了：这将连续绘制操作的颜色设置为黄色（默认颜色格式为RGB，所以（1,1,0）为黄色）。直到另一个颜色设置。 然后将该颜色当作是您的画笔， 您可以使用它在画布上绘画，直到将画笔切换成另一种颜色。
- Line 11: 我们需要先确定即将绘制的圆的直径。 使用一个可取的变量，因为我们需要参考该值多次，我们并不希望在哪些地方会改变它，假如我们想圆更大或更小
- Line 12: 想要绘制一个圆，我们只需绘制一个宽度和高度相等的椭圆。 由于我们希望在用户触摸的位置绘制圆，我们会将触摸的位置传递给椭圆。 请注意，我们需要在x和y方向上（即向左和向下）将椭圆移动到-d / 2，因为位置指定了椭圆边界框的左下角，我们希望它以我们的触摸为中心。


那很简单，不是吗？ 它变得更好了！ 更新代码如下所示：

::

    #qpy:kivy
    from kivy.app import App
    from kivy.uix.widget import Widget
    from kivy.graphics import Color, Ellipse, Line

    class MyPaintWidget(Widget):

        ^4$def on_touch_down(self, touch):
            ^8$with self.canvas:
                ^12$Color(1, 1, 0)
                ^12$d = 30.
                ^12$Ellipse(pos=(touch.x - d / 2, touch.y - d / 2), size=(d, d))
                ^12$touch.ud['line'] = Line(points=(touch.x, touch.y))

        ^4$def on_touch_move(self, touch):
            ^8$touch.ud['line'].points += [touch.x, touch.y]

    class MyPaintApp(App):

        ^4$def build(self):
            ^8$return MyPaintWidget()

    if __name__ == '__main__':
        ^4$MyPaintApp().run()

<button>Run ...</button>

.. image:: http://edu.qpython.org/static/kivy-guide-4.jpg
    :alt: screenshot of pong game



发生了以下的变化：

- Line 3: 我们现在不仅导入了椭圆绘图指令，还导入了线绘图指令如果您查看Line的文档，您将看到它接受的点参数必须是二维点坐标列表，比如 (x1, y1, x2, y2, ..., xN, yN).
- Line 13: 这是它变得有趣的地方。 touch.ud是一个Python字典（键入<dict>），它允许我们存储触摸的自定义属性。
- Line 13:我们利用我们导入的Line指令，并设置一个Line来绘制。由于这是在on_touch_down中完成的，所以每次新的触摸都会有一个新的线。 通过在with块内创建行， 画布会感应到该线，并将绘制它。 我们只是想稍后修改这行，所以我们在touch.ud字典下面存储了一个对它的引用，这个字典在任意选择的，但是恰当的命名键'line'下面。 通过我们创建初始触摸位置的线，这是我们的线开始的地方。
- Lines 15: 我们添加一个新的方法到我们的小部件。这与on_touch_down方法类似，但不是在发生新的触摸时被调用，当现有的触摸（已经调用on_touch_down）移动，即其位置改变时，他的方法被调用。 请注意，这是具有更新属性的相同MotionEvent对象。 这会让人觉得十分方便，你很快就会明白为什么会有这样的感觉了。
- Line 16: 请记住：这是我们在on_touch_down中获得的触摸对象，因此我们可以简单地访问我们存储在touch.ud字典中的数据！早些时候我们为这条线设置了触摸点，我们现在在当前位置添加新的触摸点。我们需要扩展这条线，因为这发生在on_touch_move上，这只是在触摸移动时才被调用，这正是我们要更新这一行的原因。为了使我们不必将这些触摸点记录到在线簿记中，在touch.ud中存储该行使我们在使用时可以更方便一些。

到目前为止一切还不错，虽然还不算漂亮。这让它看上去有点像意大利面。如何让触摸点有自己的颜色？让我们接着往下看：

::

    #qpy:kivy
    from random import random
    from kivy.app import App
    from kivy.uix.widget import Widget
    from kivy.graphics import Color, Ellipse, Line

    class MyPaintWidget(Widget):

        ^4$def on_touch_down(self, touch):
            ^8$color = (random(), random(), random())
            ^8$with self.canvas:
                ^12$Color(*color)
                ^12$d = 30.
                ^12$Ellipse(pos=(touch.x - d / 2, touch.y - d / 2), size=(d, d))
                ^12$touch.ud['line'] = Line(points=(touch.x, touch.y))

        ^4$def on_touch_move(self, touch):
            ^8$touch.ud['line'].points += [touch.x, touch.y]


    class MyPaintApp(App):

        ^4$def build(self):
            ^8$return MyPaintWidget()


    if __name__ == '__main__':
        ^4$MyPaintApp().run()

<button>Run ...</button>

.. image:: http://edu.qpython.org/static/kivy-guide-5.jpg
    :alt: Screenshot of pong game

Here are the changes:

- Line 1: 我们导入Python的random（）函数，它会给我们在[0.，1）范围内的随机值。
- Line 10: 在这种情况下，我们只需创建一个包含3个随机浮点值的新元组，它们将代表随机的RGB颜色。这样，每一个新的触摸点都将有属于自己的颜色。 不要被使用元组困惑。我们只是将这个元组绑定在颜色上作为这个方法的一个快捷方式。
- Line 12: 和上面一样，我们设置画布的颜色。这一次，我们使用我们生成的随机值，并使用Python的元组解压缩语法将它们提供给颜色类（因为Color类需要三个单独的颜色分量，而不是一个。如果我们要直接传递元组，1值被传递，而不管元组本身包含3个值的事实）。

这看起来好多了！假如你有更多 的技能和耐心，您甚至可以创建一个漂亮的小绘图！


*注意：由于默认情况下，颜色指令采用RGB模式，我们正在向它提供一个带有三个随机浮点值的元组，如果运气不好，很可能会得到黑色。 这并不是好的情况，因为默认情况下，背景颜色也很暗， 这样的话，你会很难看到你自己画的线。有一个很好的技巧来防止这种情况：而不是创建一个具有三个随机值的元组，像这样创建一个元组：（random（），1.，1）。然后，将它传递给颜色指令时，将模式设置为HSV颜色空间：颜色（* color，mode ='hsv'）。这样可能出现的颜色将会变少，但是你得到的颜色将永远是同样明亮的：只有色调会改变。


**奖励积分**


在这一点上，我们可以说我们已经完成了。小部件做了它应该做的事：跟踪触摸并画线。在一条线开始的位置绘制圆圈。

但是，如果用户想要开始一个新的绘图呢？使用当前的代码，清除窗口的唯一方法是重新启动整个应用程序。不过，我们可以做得更好。现在让我们添加一个清除按钮，删除迄今为止绘制的所有线条和圆圈。 有两种选择：

- 我们可以创建按钮作为我们的小部件的附件。这意味着如果您创建多个小部件，则每个小部件都有自己的按钮。如果你不小心，这也将允许用户在按钮上绘制，这可能不是你想要的得到的结果。
- 如果你不小心，这也将允许用户在按钮上绘制，这可能不是你想要的。或者我们只在我们的应用程序类中设置按钮一次，当它被按下时，我们清除这个小部件。

就我们这个简单的例子来说，这并不重要。对于较大的应用程序，您应该考虑一下谁在你的应用程序中做什么。 我们将在这里介绍第二个选项，以便您了解如何在应用程序类的build（）方法中构建应用程序的构件树。我们也将更改为HSV色彩空间（参见前面的注释）：

::

    #qpy:kivy
    from random import random
    from kivy.app import App
    from kivy.uix.widget import Widget
    from kivy.uix.button import Button
    from kivy.graphics import Color, Ellipse, Line

    class MyPaintWidget(Widget):

        ^4$def on_touch_down(self, touch):
            ^8$color = (random(), 1, 1)
            ^8$with self.canvas:
                ^12$Color(*color, mode='hsv')
                ^12$d = 30.
                ^12$Ellipse(pos=(touch.x - d / 2, touch.y - d / 2), size=(d, d))
                ^12$touch.ud['line'] = Line(points=(touch.x, touch.y))

        ^4$def on_touch_move(self, touch):
            ^8$touch.ud['line'].points += [touch.x, touch.y]


    class MyPaintApp(App):

        ^4$def build(self):
            ^8$parent = Widget()
            ^8$self.painter = MyPaintWidget()
            ^8$clearbtn = Button(text='Clear')
            ^8$clearbtn.bind(on_release=self.clear_canvas)
            ^8$parent.add_widget(self.painter)
            ^8$parent.add_widget(clearbtn)
            ^8$return parent

        ^4$def clear_canvas(self, obj):
            ^8$self.painter.canvas.clear()


    if __name__ == '__main__':
        ^4$MyPaintApp().run()

<button>Run ...</button>

.. image:: http://edu.qpython.org/static/kivy-guide-6.jpg
    :alt: screenshot of pong game


将会发生以下的事情：

- Line 4: 我们添加了一个导入语句，以便能够使用Button类。
- Line 25: 我们创建一个虚拟的Widget（）对象作为我们的绘画控件和我们即将添加的按钮的父对象。 这只是一个比较简陋的方法来设置一个小部件树层次结构。 我们也可以使用布局或做其他一些丰富的东西。再一次：这个小部件除了保存我们现在添加的两个小部件以外，完全没有任何功能。
- Line 26:我们像往常一样创建我们的MyPaintWidget（），只是这次我们不直接返回它，而是将它绑定到一个变量名。
- Line 27: 我们创建一个按钮小部件。 它上面会有一个标签，显示文本“清除”。
- Line 28: 然后，我们将按钮的on_release事件（当按钮被按下然后释放时触发）绑定到第33行和第34行上定义的回调函数clear_canvas。
- Line 29 & 30: 我们通过制作虚拟父窗口小部件的画家和clearbtn子元素来设置窗口小部件层次结构。 这意味着画家和clearbtn在通常的计算机科学树术语中是兄弟姐妹。
- Line 33 & 34: 到目前为止，按钮什么也没做。 它在那里，你可以看见它，也可以按它，但什么都不会发生。我们在这里改变：我们创建了一个小的抛弃函数，当按钮被按下时，它将成为我们的回调函数。该功能只是清除画家的画布内容，使其再次变黑。

*注意：Kivy Widget类在设计上保持简单。没有一般属性，如背景颜色和边框颜色。相反，这些示例和文档说明了如何轻松地处理这些简单的事情，就像我们在这里完成的那样，为画布设置颜色并绘制形状。从一个简单的开始，你可以逐渐使它成为更精细的定制。从Widget派生的更高级别的内置小部件（如Button）确实具有诸如background_color之类的便利属性，但这些属性因widget而异。如果您需要添加更多功能，请使用API文档查看小部件提供的内容以及子类。*

恭喜！ 你已经写了你的第一个Kivy部件。很明显，这只是一个快速介绍。还会有更多的东西等着你去发现。 不过我们建议您短暂休息一下，让刚刚学到的东西沉淀一下。 不如先画一些不错的图片让自己放松一下？如果您觉得您已经理解了所有内容，并准备好学习更多，请继续往下阅读。
