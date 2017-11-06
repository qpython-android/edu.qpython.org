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
        return template('<b>Hello {{name}}</b>!', name=name)

    @route('/__exit')
    def exit():
        import os,signal
        os.kill(os.getpid(), signal.SIGKILL)


    run(host='127.0.0.1', port=8080)


Tornado
----------
QPython同样支持Tornado这个高效支持异步通信的Web框架，您可以通过QPYPI来安装它。安装完毕之后，同样可以参考以下方式实现一个WebApp的Hello world。

::

    #qpy:webapp:Tornado Sample
    #qpy://127.0.0.1:8080/

    import tornado
    import tornado.web

    class MainHandler(tornado.web.RequestHandler):
        def get(self):
            self.write("Hello, world")

    class ExitHandler(tornado.web.RequestHandler):
        def get(self):
            import os,signal
            os.kill(os.getpid(), signal.SIGKILL)

    def make_app():
        return tornado.web.Application([
            (r"/", MainHandler),
            (r"/__exit", ExitHandler),
        ])

    if __name__ == "__main__":
        app = make_app()
        app.listen(8080)
        tornado.ioloop.IOLoop.current().start()

Django
----------
作为Python WEB开发的最常用框架，Django同样获得了QPython的支持, 您可以直接通过QPYPI的“INSTALL WITH PYTHON PYPI"来安装Django，安装完之后，为了快速实现Django 的HELLO WORLD,您需要通过TOOLS里的Django manage script来新建一个项目，新建完项目后即可通过编辑器来编辑对应的views.py来实现Hello world。


