QPython是什么
================



关于
-----
QPython (for Android)是安卓上的Python脚本引擎，它能让你在安卓设备上运行Python程序，它包含了Python解析器、控制台、编辑器。除了集成了基础的Python库之外，它还集成了支持WebApp开发的bottle库、支持调用安卓API的SL4A库等常见有用的库。

针对iOS用户的QPython (for iOS)应用也已在appstore上线。

QPython历史
-------------
QPython诞生于2012年, 最初是其作者River为了实现能在安卓程序中实现热更新的一个Python插件SDK，后来作为安卓上的Python App独立发布，一经发布后便引起了广大Python开发者的喜爱，在很短的时间内，在没有任何推广的前提下，有数万的Python用户安装和评论，在15年，其安装使用用户量超过了2,000,000+，它也是目前安卓上最受欢迎的Python集成开发环境。


支持的程序类型
----------------
目前QPython能够运行控制台程序、WebApp程序，后台应用程序，基于图形界面的应用程序等，各个类型的程序适合不同的应用场景，QPython通过特定的头部声明来确定如何运行应用程序，如"#qpy:webapp"表明该程序将会按照WebApp方式发布，"#qpy:kivy"表明该程序是一个kivy程序，"#qpy:qpyapp"声明该程序将会是QPYApp（适合于后台应用场景），而不带头部声明则默认会按照控制台的形式运行。


*WebApp头部声明*
::

    #qpy:webapp


*QPYApp头部声明*
::

    #qpy:qpyapp


*Kivy程序头部声明*
::

    #qpy:kivy


*控制台程序头部声明*
::

    #qpy:console


如何安装第三方库
-----------------
QPython内置了PC版Python的绝大部分库。由于安卓里本身不支持编译工具链，因此你无法像PC上的Python一样能够安装所有的库，但是你可以通过QPYPI安装一些预编译的库，目前已经支持包括kivy, numpy, opencv, pycrypto, tornado 在内的库。此外你还可以用pip控制台从官方或者你指定的第三方QPYPI来安装大多数Python实现的库。


QPython媒体、社区
--------------------
QPython是一个更新迅速，注重倾听用户反馈的项目，包括facebook fan page, twitter, weibo, facebook群组，G+, Wechat/QQ group 等在内的媒体、社群是QPython的重要组成部分。我们鼓励你广泛参加到我们的社群讨论、活动以及QPython的建设当中，这样才能了解和掌握QPython最新的发展动态。


QPython的社区版和商业版
------------------------
QPython分为社区开源版和商业版。社区版提供了基础的Python运行环境（会与商业版保持一致）,使用Apache开源协议，欢迎感兴趣的个人和团队在此基础上定制自己的业务，QPython开发团队同样会积极响应社区版用户的各种问题。
QPython的商业版则致力于提供独特便利的功能和服务，包括在线教程，在线开发，代码分享等。

无论是社区版或者商业版，我们希望都能让大家真正享受到在手机进行Python编程的快乐。



.. image:: http://edu.qpython.org/static/codeanywhere.png
    :target: data-video: "http://player.youku.com/embed/XMzAzMjE3NjI1Ng=="
    :alt: QPython - 随时随地编程

作者 & 更新时间
------------------------------------
作者: `River <https://github.com/riverfor>`_

提交: 2017/8/6

