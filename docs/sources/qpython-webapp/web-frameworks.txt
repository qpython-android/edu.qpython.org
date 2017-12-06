WEB framework in QPython
==========================
By using the WEB development framework, developers can efficiently and quickly develop Web applications. Similarly, in QPython, you can quickly develop WebApp with the following web frameworks.

Bottle
----------
Bottle is a QPython built-in WebApp development framework, you do not need to install additional, just follow the WebApp's specifications, reference bottle development methods can be carried out.

Look at one of the most simple Hello world with bottle

::

    #qpy:webapp:Hello Qpython
    #qpy://127.0.0.1:8080/
    """
    This is a sample for qpython webapp
    """
    from bottle import Bottle, ServerAdapter
    from bottle import run, debug, route, error, static_file, template

    ######### QPYTHON WEB SERVER ###############
    class MyWSGIRefServer(ServerAdapter):
        ^4$server = None
        ^4$def run(self, handler):
            ^8$from wsgiref.simple_server import make_server, WSGIRequestHandler
            ^8$if self.quiet:
                ^12$class QuietHandler(WSGIRequestHandler):
                    ^12$def log_request(*args, **kw): pass
                ^8$self.options['handler_class'] = QuietHandler
            ^4$self.server = make_server(self.host, self.port, handler, **self.options)
            ^4$self.server.serve_forever()

        ^4$def stop(self):
            ^8$import threading
            ^8$threading.Thread(target=self.server.shutdown).start()
            ^8$self.server.server_close()

    ######### BUILT-IN ROUTERS ###############
    @route('/__exit', method=['GET','HEAD'])
    def __exit():
        ^4$global server
        ^4$server.stop()

    @route('/assets/<filepath:path>')
    def server_static(filepath):
        ^4$return static_file(filepath, root='/sdcard')


    ######### WEBAPP ROUTERS WRITE YOUR CODE BELOW###############
    @route('/')
    def home():
        ^4$return template('<h1>Hello {{name}} !</h1><a href="/assets/qpython/projects/WebAppSample/main.py">View source</a><br /><br /> <a href="http://edu.qpython.org/qpython-webapp/index.html">>> About QPython Web App</a>',name='QPython')

    ######### WEBAPP ROUTERS ###############
    app = Bottle()
    app.route('/', method='GET')(home)
    app.route('/__exit', method=['GET','HEAD'])(__exit)
    app.route('/assets/<filepath:path>', method='GET')(server_static)

    try:
        ^4$server = MyWSGIRefServer(host="127.0.0.1", port="8080")
        ^4$app.run(server=server,reloader=False)
    except Exception,ex:
        ^4$print "Exception: %s" % repr(ex)




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
