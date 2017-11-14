Editor howto
==============
This is the most used tools by Python developers - editor.

.. image:: http://edu.qpython.org/static/editor-main.png
    :alt: QPython - editor



Features
---------
The editor allows you obviously enter and modify text. Here you can develop your scripts, save them and execute. The editor supports Python syntax highlighting and shows line numbers (there is no ability to go to the line by number though). 

When typing, you can easily control indentation level (which is critical for Python code) using two buttons on the toolbar . Next buttons on the toolbar are Jump to, Run, Search, Undo, Save. Also there are two buttons on the top: Open and New.

When saving, don’t forget to add .py estension to the file name since the editor don’t do it for you.

When you were opening a QPython project, you could swipe on the editor's left to unfolder the project tree drawer, which allow you switch file in project easily.

.. image:: http://edu.qpython.org/static/editor-left.png
    :alt: QPython - project tree


Setting
-------
You can modify the editor's setting bu clicking the top-right icon. You can set some editor's attributes here:

*Show line numbers*

*Word wrap*

*Fling to scroll faster*

*Color theme*

*Text size*

*Change text font*

**Auto-highlight lines**

Sometimes syntax highlight feature make the editor be slow when open a large file on some devices, so we make the editor's highlight being enable when the total lines are lower than this limit(default is 300), you can adjust it to you want.

**Give a try**

..  code-block :: none

    class TestC():
        ^4$def ask_age(self):
            ^8$v = raw_input("> How old are you ?")
            ^8$return v

    tc = TestC()
    tc.ask_age()

<button>Run ...</button>
