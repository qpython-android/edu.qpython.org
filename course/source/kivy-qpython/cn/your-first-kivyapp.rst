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
在程序被识别为KivyApp运行后，QPython会同事启动OpenGL引擎，新建一个SDL视图，并在其中完成渲染，输出画面。


KivyApp退出流程
--------------
按退出退出时，QPython会结束Kivy程序，进行清理，结束OpenGL引擎，同时退出SDL视图。


例子
--------
让我们来看一个最简单的KivyApp示例，这个是安装完QPython后默认带的示例程序。

::

    #qpy:kivy

    # Check if the kivy library installed
    try:
        ^4$import kivy
    except ImportError:
        ^4$import androidhelper
        ^4$droid = androidhelper.Android()
        ^4$title = 'KivySample'

        ^4$message = 'You must to have kivy-qpython installed, please install it through QPYPI'
        ^4$droid.dialogCreateAlert(title, message)
        ^4$droid.dialogSetPositiveButtonText('Close')
        ^4$droid.dialogShow()

        ^4$import sys
        ^4$sys.exit(1)


    # Main process
    kivy.require('1.0.6')
    from glob import glob
    from random import randint
    from os.path import join, dirname
    from kivy.app import App
    from kivy.logger import Logger
    from kivy.uix.scatter import Scatter
    from kivy.properties import StringProperty
    from kivy.core.window import Window

    #
    class Picture(Scatter):
        ^4$'''Picture is the class that will show the image with a white border and a
        shadow. They are nothing here because almost everything is inside the
        picture.kv. Check the rule named <Picture> inside the file, and you'll see
        how the Picture() is really constructed and used.

        The source property will be the filename to show.
        '''

        ^4$source = StringProperty(None)

    class PicturesApp(App):

        ^4$def build(self):
            ^8$# the root is created in pictures.kv
            ^8$root = self.root
            ^8$# get any files into images directory
            ^8$curdir = dirname(__file__)
            ^8$for filename in glob(join(curdir, 'images', '*')):
                ^12$try:
                    ^16$# load the image
                    ^16$picture = Picture(source=filename, rotation=randint(-30,30))
                    ^16$# add to the main field
                    ^16$root.add_widget(picture)
                ^12$except Exception, e:
                    ^16$Logger.exception('Pictures: Unable to load <%s>' % filename)

        ^4$def on_pause(self):
            ^8$return True

    if __name__ == '__main__':
        ^4$PicturesApp().run()

<button>Run ...</button>

.. image:: http://edu.qpython.org/static/kivy-sample.png
    :alt: KivySample运行效果

