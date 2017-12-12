QPython's KivyApp
==========================
Kivy is a support multi-touch cross-platform graphical interface development framework in python.Use Kivy can easily develop GUI applications including games.QPython can support Kivy better.

Kivy's installation
----------
Before using Kivy, you need to have Kivy installed.You can install and upgrade kivy related libraries in QPYPI,QPYPI can automatically install dependent libraries.If Kivy needs to be updated, You can also upgrade operated by QPYPI.

.. image:: http://edu.qpython.org/static/qpypi-kivy.png
    :alt: Manage kivy libraries in QPYPI


KivyApp'sstatement
-----------
In QPython, the program type distinguished by head declarations, When the header has the following definition, we know it is a KivyApp program.

::

    #qpy:kivy

In addition, If you want to make your Kivy program run in full-screen mode, You need to add the following statement.

::

    #qpy:fullscreen


KivyApp's Run Process
--------------
After the program is identified as KivyApp operation, QPython will start the OpenGL engine at the same time, Create a new SDL view, And in which to complete the rendering, output screen.


Exit
-----------------------------
Press quit exiting, QPython will finish the Kivy program, clean up, end OpenGL engine, and exit SDL view.

E.g
--------
Let's look at a simple example about KivyApp,This is the default sample program installed after installing QPython.

::

    #qpy:kivy
    from kivy.app import App
    from kivy.uix.button import Button

    class TestApp(App):
        ^4$def build(self):
            ^8$return Button(text='Hello World')

    TestApp().run()

<button>Run ...</button>

