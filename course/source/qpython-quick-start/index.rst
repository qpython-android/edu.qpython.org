What is QPython
========================

About
--------
QPython(for Android) is a Python script engine for Android system, which runs Python programs on any Android device. It contains a Python interpreter, a console, and an editor. Besides a basic Python library, QPython also integrates a bottle library that supports WebApp development, and an SL4A library that supports invoking Android APIs.

A QPython (iOS) application designed for iOS users is also released in Appstore.


History of QPython
------------------------------------------------------
Born in 2012, QPython at first was a Python script SDK created by River for the rapid release of hotfix on Android programs, and was later independently released as a Python App on Android system. Ever since its release, QPython has been widely favored by Python developers, and received hundreds of thousands of installations and reviews in a very short time even in the circumstances of none market promotion. In 2015, the total installations exceeded more than 2,000,000. Until now, it is the most popular Python integrated development environment on Android.

Supported program types
------------------------------------------------------
Currently, QPython can run console applications, WebApp applications, backend applications, graphic interface-based applications, and so on. Each type of program fits with a different application scenario, Python determines how to  run an application according to a unique head statement. For example, #qpy:webapp indicates that the program will be released in the WebApp manner, #qpy:kivy indicates that the program is a ivy program, #qpy:qpyapp indicates that the program is a QPYApp (fits with the backend application scenario), and a program without head statement will by default run in the console manner (for easy debugging).

How to install a third party library
------------------------------------------------------
QPython is imbedded with most of the Python libraries for PCs. As Android system itself does not support compilation tool links, you cannot install all libraries like Python on PCs. However, you can install some pre-compiled libraries via QPYPI, which supports libraries including kivy, numpy, opencv, pycrypto, tornado and so on . In addition, you can use the pip client to install most libraries implemented by Python from the official website or from a third party Pypi designated by you.


*WebApp header declaration*
::

    #qpy:webapp


*QPYApp header declaration*
::

    #qpy:qpyapp


*Kivy header declaration*
::

    #qpy:kivy

*Console header declaration*
::

    #qpy:console




QPython media and community
------------------------------------------------------
QPython is a rapidly updated program which pays attention to user feedbacks, including feedbacks from Facebook fan page, twitter, weibo, Facebook group, G+, WeChat/QQ group, and other medias. Social groups are a significant part of QPython. We welcome you to join in our social group discussion, activities, and QPython construction, so as to learn and understand the latest development state of QPython.


Open source branch and business branch of QPython
------------------------------------------------------
QPython has two branches: the open source branch and the business branch. The open source branch provides a basic Python operating environment (which is consistent with the business branch), and uses the Apache license. We welcome any person or company of interest to customize your own service on this basis. Our QPython development team will also actively respond to any kinds of questions from users of the open source branch.
The business branch of QPython, on the other hand, is dedicated to providing unique and convenient features and services, including online tutoring, online development, code sharing, etc.

No matter which branch you are using, we hope everyone can really enjoy Python programing on cell phones.



*Video: QPython - Code Anywhere，Study Anytime*


.. image:: http://edu.qpython.org/static/codeanywhere.png
    :target: data-video: "https://youtu.be/HqfUUiftrRw"
    :alt: QPython - Code Anywhere，Study Anytime

Author & updated time
------------------------------------------------------
Author: `River <https://github.com/riverfor>`_

Translator: `TGJ <http://quseit.com/>`_

Submitted: 2017/8/6
Updated: 2018/04/25
