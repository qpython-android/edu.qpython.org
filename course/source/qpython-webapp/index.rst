QPython WebApp Principle
====================================


About
--------
QPython supports WebApp, the goal is to enable all WEB developers to the fastest development of mobile applications.

Advantages
----------
There are lots of mobile WebApp solutions, like cordova, phonegap etc, and compared to them, QPython's WebApp has the following advantages.

*QPython is a powerful Python engine that can handle many logical jobs, effectively reducing data transfer time and enhancing your app's user experience*

*QPython supports massive Python libraries, you could import them in your project, so that you could save much develop time.*

*It is very convenient for development with QPython, you can complete your development just in palm. And you could develop from PC then transfer to your mobile to run*

How does WebApp work in QPython
----------------------------
QPython WebApp contains the following components: WebApp service and Webview. The WebApp service runs in the background and is responsible for responding to user's input. WebView is a front component, which shows the user interface and and is responsible for responding to render user interactions, such as scrolling, click the button and so on.

**1** When you run a WebApp program from QPython, QPython launch the WebApp service in the background, at the same time, QPython will start a webview which loads the entry link declared in the program header in the front.

::

#qpy:webapp:<webapp-title>
#qpy://<webapp-address>:<webapp-port>/<webapp-path>

**2** Then the user can start to interact with the applicaton with the web mode. So the developer could write the logic code with the web development way.

**3** When the user exit by clicking the left arrow, the application will request the **http://<webapp-address><:webapp-port>/__exit** to exit the application
The developer could rewrite the __exit function to defines the exit behaviors.

Chapter Author, contributor and updated time
------------------------------------------------------
Author: `River <https://github.com/riverfor>`_

Submitted: 2017/10/16

