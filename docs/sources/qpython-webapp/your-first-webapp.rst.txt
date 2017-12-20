QPython’s WebApp
==========================
WebApp is an app allows developers to quickly get started application development, QPython's WebApp has the advantage of supporting common WebApps.Moreover, QPython lets the phone itself become a WebApp's run container, support for handling complex program logic, therefore, it can greatly improve the WebApp user experience, while also increasing the flexibility of the development.WebApp statement

-----------
In QPython, through the header statement to distinguish between program types, When the header has the following definition, we know that it is a WebApp program.

::

    #qpy:webapp:<WebApp Program name>
    #qpy://<WebApp runs on which the IP，generally for this 127.0.0.1>:<The port on which WebApp is running>/<Corresponding WebApp URL path when Initializing>


WebApp's Run process
---------------------
After the program is recognized as a WebApp run，QPython will let the program starts as a background service，At the same time in the front end will start a WebView component，Load the URL you specified in the program header(By the IP, port, URL path combination)For example, If the IP is 127.0.0.1, the port is 8080 and the URL path is hello / test, then the URL that WebView loads is：http://127.0.0.1:8080/hello/test Web application exit principle

Exit the WebApp
-----------------
When you click the Back button to exit WebView, the WebApp daemon also needs to quit. Since QPython started it as a background service in the first place, we need to tell it to quit,QPython is when WebView exits,Issue a http://IP:port/__exit GET request to the background service, By its end of background process, exit the service of work, Therefore, as a completed process, you need to define it in your own WebApp/__exit The corresponding exit service operation, we have an example in the end.

E.g
--------
As QPython embedded Web development library, Let's look at one of the easiest bottles - Hello world

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


Click Run, copy the code to the editor and click Run to see the result.

Of course, in QPython, It also provides support for other web development frameworks to help you streamline your work.
