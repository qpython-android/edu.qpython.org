QPython中的WEB框架
==========================
使用WEB开发框架，开发者能够高效迅速地开发出WEB应用。同样，在QPython中，你能用下列WEB框架来快速开发WebApp。

Bottle
----------
Bottle是QPython内置的WebApp开发框架，您无需额外安装，只需要遵循WebApp的规范，参考bottle开发的方法就可以进行。

来看一个最简单的bottle的Hello world。


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
