QSL4A - QPython的安卓脚本层
==============================================
SL4A是Scripting Layer for Android 的缩写，中文直译为“安卓的脚本层”，QSL4A是QPython的安卓脚本层。


什么是SL4A
----------
SL4A的全称为Scripting Layer for Android, 顾名思义就是Android的脚本架构层，它的目的就是可以用熟知的脚本开发语言来开发Android应用程序。其工作原理基于RPC远程调用，通过本地的脚本解析器和远端的原生态Android Server层的APK进行信息交互，即实现一个远程代理，把本地脚本的函数调用通过json格式的封装，传递给远程原生态Server APK进行实际的android系统函数呼叫，最后将操作的执行结果反馈给本地脚本解析器，然后再在终端显示出运行结果。

QPython中集成了SL4A的支持，通过SL4A，用户可以很方便地通过Python代码来调用安卓特性。


QSL4A支持的接口
-------------------

您需要在安卓系统设置中开启QPython对应的权限设置才能使用相关的SL4A接口。

**系统应用接口**

* Android：包括剪贴板、Intent对象、广播、震动、网络状态、版本号、发送邮件、提示、输入框等在内的接口 `(接口文档) <http://www.qpython.org/en/guide_androidhelpers.html>`_
* 应用：主要为应用管理接口 `(接口文档) <http://www.qpython.org/en/guide_androidhelpers.html#applicationmanagerfacade>`_
* ActivityResult：安卓里控制ActivityResult行为的接口 `(接口文档) <http://www.qpython.org/en/guide_androidhelpers.html#activityresultfacade>`_
* 通用Intent：访问二维码，用XX应用查看的接口 `(接口文档) <http://www.qpython.org/en/guide_androidhelpers.html#commonintentsfacade>`_

**安卓相关设备接口**

* 相机：访问&调用设备的相机接口 `(接口文档) <http://www.qpython.org/en/guide_androidhelpers.html#camerafacade>`_
* 联系人：联系人访问接口 `(接口文档) <http://www.qpython.org/en/guide_androidhelpers.html#contactsfacade>`_
* 地理位置：访问地理位置接口 `(接口文档) <http://www.qpython.org/en/guide_androidhelpers.html#locationfacade>`_
* 电话：访问电话接口 `(接口文档) <http://www.qpython.org/en/guide_androidhelpers.html#phonefacade>`_
* 媒体录制：能够控制录音或者视频 `(接口文档) <http://www.qpython.org/en/guide_androidhelpers.html#mediarecorderfacade>`_
* 感应器管理：访问&控制设备的传感器 `(接口文档) <http://www.qpython.org/en/guide_androidhelpers.html#sensormanagerfacade>`_
* 设置：能够设置设备的屏幕、飞行模式、铃声模式、震动模式、音量、亮度等 `(接口文档) <http://www.qpython.org/en/guide_androidhelpers.html#settingsfacade>`_
* 短信：能够访问设备的短信 `(接口文档) <http://www.qpython.org/en/guide_androidhelpers.html#smsfacade>`_
* 语音识别：能够识别用户的讲话并返回最可能的结果 `(接口文档) <http://www.qpython.org/en/guide_androidhelpers.html#speechrecognitionfacade>`_
* 音调生成器：能够由给定的电话号码生成DTMF的语音 `(接口文档) <http://www.qpython.org/en/guide_androidhelpers.html#tonegeneratorfacade>`_
* 唤醒锁：设备的唤醒锁接口 `(接口文档) <http://www.qpython.org/en/guide_androidhelpers.html#wakelockfacade>`_
* WIFI：设备的WIFI管理 `(接口文档) <http://www.qpython.org/en/guide_androidhelpers.html#wififacade>`_
* 电池管理：提供设备的电池管理接口 `(接口文档) <http://www.qpython.org/en/guide_androidhelpers.html#batterymanagerfacade>`_
* 媒体播放器：媒体播放器设置 `(接口文档) <http://www.qpython.org/en/guide_androidhelpers.html#mediaplayerfacade>`_
* 偏好设置：访问／控制偏好设置 `(接口文档) <http://www.qpython.org/en/guide_androidhelpers.html#preferencesfacade>`_
* 文字语音：控制文字到语音输出 `(接口文档) <http://www.qpython.org/en/guide_androidhelpers.html#texttospeechfacade>`_
* 蓝牙：控制手机上的蓝牙设备 `(接口文档) <http://www.qpython.org/en/guide_androidhelpers.html#bluetoothfacade>`_
* 信号强度：访问手机信号强度信息 `(接口文档) <http://www.qpython.org/en/guide_androidhelpers.html#signalstrengthfacade>`_
* 网络摄像头：能够控制手机的摄像机 `(接口文档) <http://www.qpython.org/en/guide_androidhelpers.html#webcamfacade>`_
* 用户交互界面：用于控制UI界面相关的展现，如文本对话框，密码输入框、状态栏、进度条、日期选择器等 `(接口文档) <http://www.qpython.org/en/guide_androidhelpers.html#uifacade>`_
* NFC：NFC相关的控制，主要提供了NFC中的master/slave交换信息的方式 `(接口文档) <http://www.qpython.org/en/guide_androidhelpers.html#nfc>`_
* USB宿主序列：用于控制来自安卓的拥有USB主机控制器的类USB序列的设备 `(接口文档) <http://www.qpython.org/en/guide_androidhelpers.html#usb-host-serial-facade>`_


**QPython相关的接口**

* QPy接口：在手机上运行QPython脚本 `(接口文档) <http://www.qpython.org/en/guide_androidhelpers.html#qpyinterfacefacade>`_


示例代码
-----------
在安卓中，可以引入androidhelper模块来载入QSL4A的支持。下面我们来运行一个简单的QSL4A脚本来体验下：


::

    ^0$import androidhelper
    ^0$droid = androidhelper.Android()
    ^0$line = droid.dialogGetInput()
    ^0$s = "Hello, %s" % (line.result,)
    ^0$droid.makeToast(line)


<button>Run ...</button>

