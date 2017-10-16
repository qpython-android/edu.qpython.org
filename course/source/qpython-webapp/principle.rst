QPython WebApp Principle
====================================

Chapter Author, contributor and updated time
------------------------------------------------------
Author: `River <https://github.com/riverfor>`_

Submitted: 2017/10/16

About
--------
QPython supports WebApp, the goal is to enable all developers to the fastest development of mobile applications.

Advantages
----------
There are lots of mobile WebApp solutions, like cordova, phonegap etc, and compared to them, QPython's WebApp has the following advantages.

*QPython is a powerful Python engine that can handle many logical jobs, effectively reducing data transfer time and enhancing the user experience*

*QPython supports massive Python libraries, you could import them in your project, so that you could save much time.*

*It is very convenient for development with QPython, you can complete your development just in palm. And you could develop from PC then transfer to your mobile in the end*

How does WebApp work in QPython
----------------------------
QPython WebApp contains the following roles: WebApp service, WebApp WebView.

**1** When you run a WebApp program from QPython, QPython launch the WebApp service in the background, at the same time, QPython will start a webview which loads the entry link declared in the program header in the front.

::

#qpy:webapp:<webapp-title>
#qpy://<webapp-address>:<webapp-port>/<webapp-path>

**2** Then the user can start to interact with the applicaton with the web mode. So the developer could write the logic code with the web development way.

**3** When the user exit by clicking the left arrow, the application will request the **http://<webapp-address><:webapp-port>/__exit** to exit the application
The developer could rewrite the __exit function to defines the exit behaviors.


Run a minimal webapp
--------------------

::

    #qpy:webapp:Hello Qpython
    #qpy://127.0.0.1:8080/
    #This is a sample for qpython webapp
    from bottle import Bottle, ServerAdapter
    from bottle import run, debug, route, error, static_file, template
    ######### QPYTHON WEB SERVER ###############
    class MyWSGIRefServer(ServerAdapter):
        ^4$server = None
        ^4$def run(self, handler):
            ^8$from wsgiref.simple_server import make_server, WSGIRequestHandler
            ^8$if self.quiet:
                ^12$class QuietHandler(WSGIRequestHandler):
                    ^16$def log_request(*args, **kw): pass
                ^12$self.options['handler_class'] = QuietHandler
            ^8$self.server = make_server(self.host, self.port, handler, **self.options)
            ^8$self.server.serve_forever()

        ^4$def stop(self):
            ^8$import threading
            ^8$threading.Thread(target=self.server.shutdown).start()
            ^8$#self.server.shutdown()
            ^8$self.server.server_close() #<--- alternative but causes bad fd exception
            ^8$print "# qpyhttpd stop"
    ######### BUILT-IN ROUTERS ###############
    @route('/__exit', method=['GET','HEAD'])
    def __exit():
        ^4$global server
        ^4$server.stop()

    @route('/__ping')
    def __ping():
        ^4$return "ok"


    @route('/assets/<filepath:path>')
    def server_static(filepath):
        ^4$return static_file(filepath, root='/sdcard')

    ######### WEBAPP ROUTERS ###############
    @route('/')
    def home():
        ^4$return template('<h1>Hello {{name}} !</h1><a href="/assets/qpython/projects/WebAppSample/main.py">View source</a><br /><br /> <a href="http://wiki.qpython.org/doc/program_guide/web_app/">>> About QPython Web App</a>',name='QPython')

    ######### WEBAPP ROUTERS ###############
    app = Bottle()
    app.route('/', method='GET')(home)
    app.route('/__exit', method=['GET','HEAD'])(__exit)
    app.route('/__ping', method=['GET','HEAD'])(__ping)
    app.route('/assets/<filepath:path>', method='GET')(server_static)

    try:
        ^4$server = MyWSGIRefServer(host="127.0.0.1", port="8080")
        ^4$app.run(server=server,reloader=False)
    except Exception,ex:
        ^4$print "Exception: %s" % repr(ex)

<button>Run ...</button>
