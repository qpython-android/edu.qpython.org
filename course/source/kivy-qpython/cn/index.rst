QPython的KivyApp
==========================
Kivy是Python上一个支持多点触摸的跨平台图形界面开发框架，使用Kivy可以方便地开发包括游戏在内的图形界面程序。QPython能较好地支持Kivy。

Kivy的安装
----------
在使用Kivy之前，您需要先安装Kivy。您可以在QPYPI中安装及升级kivy相关的库，QPYPI能自动安装依赖库。如果Kivy有更新，也可以通过QPYPI来进行升级操作。

.. image:: http://edu.qpython.org/static/qpypi-kivy.png
    :alt: 在QPYPI中管理kivy库


KivyApp声明
-----------
在QPython中，通过头部声明来区分程序类型，当头部有以下定义时，我们知道它是一个KivyApp程序。

::

    #qpy:kivy

此外，如果想要让你的Kivy程序按照全屏模式运行，您需要增加下面声明。

::

    #qpy:fullscreen


KivyApp运行流程
--------------
在程序被识别为KivyApp运行后，QPython会启动OpenGL引擎，新建一个SDL视图，并在其中完成渲染，输出画面。


KivyApp退出流程
--------------
按退出退出时，QPython会结束Kivy程序，进行清理，结束OpenGL引擎，同时退出SDL视图。 

例子
--------
让我们来看一个最简单的KivyApp示例，这个是安装完QPython后默认带的示例程序。

::

    #qpy:kivy
    from kivy.app import App
    from kivy.uix.button import Button

    class TestApp(App):
        ^4$def build(self):
            ^8$return Button(text='Hello World')

    TestApp().run()

<button>Run ...</button>
