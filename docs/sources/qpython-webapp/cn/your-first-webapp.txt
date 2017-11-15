QPython的WebApp
==========================
WebApp是一种Web开发者能够快速上手开发的应用，QPython的WebApp支持常见WebAApp的优势。此外，QPython让手机本身就能成为WebApp的运行容器，支持处理复杂的程序逻辑，因此能能极大地提高WebApp使用体验，同时也增加了开发了灵活度。

WebApp声明
-----------
在QPython中，通过头部声明来区分程序类型，当头部有以下定义时，我们知道它是一个WebApp程序。

::

    #qpy:webapp:<WebApp程序名称>
    #qpy://<WebApp运行所在的IP，一般为127.0.0.1>:<WebApp运行所在的端口>/<初次载入时对应的WebApp Url路径>


WebApp运行流程
--------------
在程序被识别为WebApp运行后，QPython会让程序作为后台服务的方式启动，同时在前端会启动一个WebView组件，载入你在程序头部声明所对应的URL（由IP、端口、URL路径组合而成）

如，如果IP为127.0.0.1，端口为8080，URL路径为hello/test，则WebView载入的URL为：http://127.0.0.1:8080/hello/test


WebApp退出原理
--------------
当你点了后退键退出WebView时，WebApp后台进程也需要退出，由于一开始QPython让其按照后台服务的方式启动，所以我们需要通知其退出，QPython是在WebView退出时，发出一个http://IP:端口/__exit 的GET请求到后台服务，由其处理结束后台进程，退出服务的工作，因此，作为一个完成的流程，您需要在自己的WebApp中定义/__exit 对应的退出服务操作，我们在结尾示例中付有示例。



例子
--------
作为QPython内嵌的Web开发库，来看一个最简单的bottle的Hello world


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

当然，在QPython中，还提供了其他Web开发框架的支持来帮助你简化工作。

