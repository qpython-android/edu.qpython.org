A hands-on introduction to Python for beginning programmers
===========================================================

If you are a new guy to QPython, you should watch the tutorial video and just follow the steps to learn how to run script with QPython

<jumpbutton data-url="http\://www.baidu.com">Watch Tutorial</jumpbutton>

Running with Console
-----------------------------------

Running QPython’s simple script with console model

..  code-block :: none

    qpy:2
    #qpy:console
    #qpy:http://qpython.com/s/qpy-sample.py
    class Calculator(object):
        ^4$#define class to simulate a simple calculator
        ^4$def __init__ (self):
            ^8$#start with zero
            ^8$self.current = 0
        ^4$def add(self, amount):
            ^8$#add number to current
            ^8$self.current += amount
        ^4$def getCurrent(self):
            ^8$return self.current
    myBuddy = Calculator() # make myBuddy into a Calculator object
    myBuddy.add(2) #use myBuddy's new add method derived from the Calculator class
    print(myBuddy.getCurrent()) #print myBuddy's current instance variable

<button>Run ...</button>

Running with Kivy
---------------------------

Running QPython’s script with GUI model ( Kivy library )

..  code-block :: none

    #qpy:2
    #qpy:kivy
    #qpy:http://qpython.com/s/qpy-guisample.py

    from kivy.app import App
    from kivy.uix.button import Button

    class TestApp(App):
        ^4$def build(self):
            ^8$# display a button with the text : Hello QPython 
            ^8$return Button(text='Hello QPython')

    TestApp().run()

<button>Run ...</button>

Running as Web App
---------------------------------

Running Web App with QPython

..  code-block :: none

    #qpy:2
    #qpy:webapp:Hello Qpython
    #qpy://localhost:8080/hello
    """
    This is a sample for qpython webapp
    """
    from bottle import route, run

    @route('/hello')
    def hello():
        ^4$return "Hello World!"

    run(host='localhost', port=8080)

<button>Run ...</button>
