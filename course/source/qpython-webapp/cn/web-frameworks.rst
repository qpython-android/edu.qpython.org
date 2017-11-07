QPython中的WEB框架
==========================
基于WEB开发框架，我们能够高效迅速地开发出一个WEB应用，同样，在QPython中你能用下列WEB框架来QPython进行快速WebApp开发。

Bottle
----------
Bottle是QPython内置的WebApp开发框架，无需额外安装。你只需要遵循WebApp的规范，以及参考bottle开发的方法就可以进行。来看一个最简单的bottle的Hello world.


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


Tornado
----------
QPython同样支持Tornado这个高效支持异步通信的Web框架，您可以通过QPYPI来安装它。安装完毕之后，打开编辑器，输入以下代码并保存运行即可看到效果

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

此外值得一提的是，在QPython的AIPY栏目中，matlibplot也是默认支持了用Tornado作为后段的WebApp模式。

Django
----------
作为Python WEB开发的最常用框架，Django同样获得了QPython的支持, QPython提供了一个djangoman.py脚本来帮助您快速安装django库和初始化django项目，通过运行该工具，你可以快速创建或者管理django项目，以下为过程说明及简介。

.. image:: http://edu.qpython.org/static/djangoman.png
    :alt: djangoman.py

*Djangoman - manage django projects*
