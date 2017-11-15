Editor howto
==============
This is the most used tools by Python developers - editor.

.. image:: http://edu.qpython.org/static/editor-main.png
    :alt: QPython - editor



Features
---------
The editor allows you obviously edit or run your QPython script program or project. The QPython editor supports Python syntax highlighting and shows line numbers (there is no ability to go to the line by number though).

There are the open, new, setting on the editor's right-top area, which allow you open script or project, create script or project, and set the editor's behaviors(like theme, font etc.).

*Sometimes syntax highlight feature make the editor be slow when open a large file on some devices, so we make the editor's highlight being enable when the total lines are lower than this limit(default is 300), you can adjust it to you want.*


In the editor's bottom, the icons are unfolder, save, run, goto, search, undo, lock keyboard in toolbar. 

.. image:: http://edu.qpython.org/static/editor-toolbar.png
    :alt: QPython - editor's toolbar

When clicking the unfold icon, you could saveas, see recent modified files, and insert code snippets.o

When saving, don’t forget to add .py estension to the file name since the editor don’t do it for you.

When you were opening a QPython project, you could swipe on the editor's left to unfolder the project tree drawer, which allow you switch file in project easily.

.. image:: http://edu.qpython.org/static/editor-left.png
    :alt: QPython - project tree


Other
-------
It's big challenge for mobile inputting, the QPython team offers kinds of tools for improving development efficiency.

**Scan**
In QPython's dashboard, there is a qrcode scanner, which can scan the qrcode and read the code into editor.


**QEditor WebApp**
In QPYPI's tools, there is a QEditor WebApp. After installing and running, it starts a WebApp service, allow user edit files from the computer's browser in the same lan by visit some online editor.


.. image:: http://edu.qpython.org/static/qeditor.png
    :alt: QPython - QEditor

.. image:: http://edu.qpython.org/static/qeditor-run.png
    :alt: QPython - Start QEditor


*As above shows, you could start develop by enter http://192.168.1.191:10000 on your computer browser*


Give a try to run the code in editor ?
------------------------------------------------

..  code-block :: none

    class TestC():
        ^4$def ask_age(self):
            ^8$v = raw_input("> How old are you ?")
            ^8$return v

    tc = TestC()
    tc.ask_age()

<button>Run ...</button>


Author & updated time
------------------------------------------------------
Author: `River <https://github.com/riverfor>`_

Submitted: 2017/10/7
