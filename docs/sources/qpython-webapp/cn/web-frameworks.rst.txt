QPython中的WEB框架
==========================
使用WEB开发框架，开发者能够高效迅速地开发出WEB应用。同样，在QPython中，你能用下列WEB框架来快速开发WebApp。

Bottle
----------
Bottle是QPython内置的WebApp开发框架，您无需额外安装，只需要遵循WebApp的规范，参考bottle开发的方法就可以进行。

来看一个最简单的bottle的Hello world。


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


点击运行，将代码复制到编辑器中点击运行即可看见效果。


Tornado
----------
QPython同样支持异步通信Web开发框架Tornado，您可以通过QPYPI来安装它。


.. image:: http://edu.qpython.org/static/qpypi-tornado.png
    :alt: tornado library in QPYPI

*通过QPYPI来安装tornado库*

安装完毕之后，点击以下代码底部的运行即可将代码拷贝到编辑器中，保存运行即可看到基于Tornado的WebApp示例效果。


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

此外值得一提的是，在QPython的AIPY扩展插件中，matlibplot也是默认支持了用Tornado作为绘图展示支持后端。

Django
----------
作为Python WEB开发的最常用框架，Django同样获得了QPython的支持, QPython提供了一个djangoman.py脚本来帮助您快速安装django库和初始化django项目，通过运行该工具，你可以快速创建或者管理django项目。

.. image:: http://edu.qpython.org/static/djangoman.png
    :alt: djangoman.py

*可以通过Django manage script来管理Django项目*

通过djangoman.py来完成项目的初始化之后，您就可以按照WebApp的规范来开发您的WebApp并在QPython上运行。


其他
------
除了上述框架，诸如其他框架如Flask,cherrypy等也有可能被QPython支持，你若感兴趣可以通过QPYPI中的INSTALL FROM PYTHON'S PYPI来探索。
