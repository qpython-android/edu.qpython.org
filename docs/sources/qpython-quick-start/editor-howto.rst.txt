Editor howto
==============
This is the most used tools by Python developers - editor.

.. image:: http://edu.qpython.org/static/editor-main.png
    :alt: QPython - editor



Features
---------
The editor allows you obviously edit or run your QPython script program or project. The QPython editor supports Python syntax highlighting and shows line numbers (there is no ability to go to the line by number though).

There are the open, new, setting on the editor's right-top area, which allow you open script or project, create script or project, and set the editor's behaviors(like theme, font etc.).

Syntax highlight feature make the editor be slow when open a large file, so the editor's highlight is enable when the total lines are lower than this limit(default is 300), and you can adjust it to you want in editor's setting page.


In the editor's bottom, the icons are siwtch to hotkeys, lock keyboard, goto, save, run, find, undo, redo, recent open, snippets.

.. image:: http://edu.qpython.org/static/editor-toolbar-1.png
    :alt: QPython - editor's toolbar

When you switch to the hot keys toolbar, the toolbar shows the following icons: switch to develop toolbar, untab, tab, TAB，DEF(def), IF(if), EF(elif), EL(else), FOR(for), IMT(import), IMF(from import), CLZ(class), RET(return), @, :, =, ", ', ;, ,, +, -, *, /, <, >, (, ), [, ], {, }, #.

.. image:: http://edu.qpython.org/static/editor-toolbar-2.png
    :alt: QPython - editor's hotkey toolbar


Skilled using the toolbar can greatly accelerate your development

When saving, don’t forget to add .py estension to the file name since the editor don’t do it for you.

When you were opening a QPython project, you could swipe on the editor's left to unfolder the project tree drawer, which allow you edit other file in the same project easily.

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
