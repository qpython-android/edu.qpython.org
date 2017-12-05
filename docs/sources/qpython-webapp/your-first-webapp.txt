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
As QPython embedded Web development library, Let's look at one of the easiest bottles - Hello world::

    #qpy:webapp: Bottle Sample
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


Click Run, copy the code to the editor and click Run to see the result.

Of course, in QPython, It also provides support for other web development frameworks to help you streamline your work.
