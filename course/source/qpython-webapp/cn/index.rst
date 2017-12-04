QPython WebApp Principle
====================================


关于
--------
QPython支持WebApp，能让所有的Web开发者马上开始快速移动开发。

优势
----------
移动开发领域已经有了很多WebApp解决方案，比如cordova, phonegap等等，和它们对比，QPython的WebApp方案有下面的优势：

*QPython是一个强大的Python引擎，能够处理许多逻辑事务，能有效地减少数据传输时间由此极大地提升应用的用户使用体验*

*QPython支持大量的Python库，安装之后，你可以很方便地在项目中使用它们，由此大大节省开发时间*

*使用QPython开发非常方便，你可以在掌上就完成开发任务，同时你也可以在PC上开发然后传输到移动设备上运行*

QPython中的WebApp是如何工作的
----------------------------
QPython的WebApp包含以下几个模块： WebApp服务和Webview。WebApp服务在后台运行并且负责响应用户的输入， WebView是一个前端组件，它负责显示用户交互界面和负责响应用户的交互，比如界面展示，界面滚动，点击等等。

**1** 当你从QPython运行一个WebApp程序时，QPython在后台启动WebApp服务，同时，QPython会在前端启动一个Webview去载入程序头部声明的WebApp入口链接。

::

#qpy:webapp:<webapp-title>
#qpy://<webapp-address>:<webapp-port>/<webapp-path>

**2** 然后用户能够开始用WEB的模式和应用进行交互，因此开发者能够用Web开发的模式去编写代码。

**3** 当用户靠点击左上角的箭头退出应用时，程序将会请求 **http://<webapp-address><:webapp-port>/__exit** 这个URL来退出程序，开发能够重写其对应的逻辑函数 __exit 来定义退出行为。

作者
------------------------------------------------------
作者: `River <https://github.com/riverfor>`_

更新: 2017/10/16

