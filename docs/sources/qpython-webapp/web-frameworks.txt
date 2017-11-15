WEB framework in QPython
==========================
By using the WEB development framework, developers can efficiently and quickly develop Web applications. Similarly, in QPython, you can quickly develop WebApp with the following web frameworks.

Bottle
----------
Bottle is a QPython built-in WebApp development framework, you do not need to install additional, just follow the WebApp's specifications, reference bottle development methods can be carried out.

Look at one of the most simple Hello world with bottle

::

    #qpy:webapp:Bottle Sample
    #qpy://127.0.0.1:8080/hello/qpython
    from bottle import route, run, template

    @route('/hello/<name>')
    def index(name):
        ^4$return template('<b>Hello {{name}}</b>!', name=name)

    @route('/__exit')
    def exit():
        ^4$import os,signal
        ^4$os.kill(os.getpid(), signal.SIGKILL)


    run(host='127.0.0.1', port=8080)

<button>Run ...</button>


Click Run, copy the code to the editor and Run to check out the result.


Tornado
----------
QPython also supports the asynchronous Communication Web Development Framework - Tornado, which you can install with QPYPI.

.. image:: http://edu.qpython.org/static/qpypi-tornado.png
    :alt: tornado library in QPYPI

*To install tornado library by QPYPI*

After the installation is complete, click on the bottom of the following code to run the code can be copied to the editor,save the run to check out Tornado-based WebApp sample effects.


::

    #qpy:webapp:Tornado Sample
    #qpy://127.0.0.1:8080/

    import tornado
    import tornado.web

    class MainHandler(tornado.web.RequestHandler):
        ^4$def get(self):
            ^8$self.write("Hello, world")

    class ExitHandler(tornado.web.RequestHandler): 
        ^4$def get(self):
            ^8$import os,signal
            ^8$os.kill(os.getpid(), signal.SIGKILL)

    def make_app():
        ^4$return tornado.web.Application([
            ^8$(r"/", MainHandler),
            ^8$(r"/__exit", ExitHandler),
        ^4$])

    if __name__ == "__main__":
        ^4$app = make_app()
        ^4$app.listen(8080)
        ^4$tornado.ioloop.IOLoop.current().start()

<button>Run ...</button>

Also worth mentioning is that in QPython's AIPY extension,matlibplot also supports Tornado as the default drawing support backend by default.

Django
----------
As the most commonly used framework for Python Web development, Django also received QPython support, QPython provides a djangoman.py scripts to help you quickly install and initialize django library project,By running this tool,You can quickly create or manage django projects.

.. image:: http://edu.qpython.org/static/djangoman.png
    :alt: djangoman.py

*Django projects can be managed by Django manage script*

After djangoman.py to complete the project's initialization,You can follow the WebApp's specifications to develop your WebApp and run it on QPython.

Other
------
In addition to the above framework,Other frameworks such as Flask, Cherrypy, etc. are also likely to be supported by QPython,If you are interested, you can explore through INSTALL FROM PYTHON'S PYPI in QPYPI.
