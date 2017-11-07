RST 自定义补丁说明

rst文件新增三种组件模式
1.普通接控制台运行按钮
    <button></button>
    以html为模板，书写内容即可。eg:<button>Run ...</button>

2.跳转按钮
    <jumpbutton data-url=""></jumpbutton>
    eg:<jumpbutton data-url="http\://www.baidu.com">Watch Tutorial</jumpbutton>
    注意: 链接里的 : 需要转义

3.代码缩进采用正则的开头结尾符号^$，内部直接填写数字即可(js端脚本都有处理处理)
    eg: class TestApp(App):
            ^4$def build(self):
                ^8$# display a button with the text : Hello QPython 
                ^8$return Button(text='Hello QPython')
    注意:请使用不解析代码语法形式
        ..  code-block :: none

4.图片没有target的话不会居中显示，如需居中请使用有链接的(有target)形式，无需链接要求请按照eg,不跳转即可
    eg:    .. image:: http://img4.duitang.com/uploads/item/201408/30/20140830185456_Eijik.jpeg
           :target: javascript:void(0)
           :alt: MathiasLuo is a a"ndroid geek developer

5.视频显示，跳转链接。以图片的形式，将target按eg添加data-video: 视频跳转观看链接
    eg:     .. image:: http://img4.duitang.com/uploads/item/201408/30/20140830185456_Eijik.jpeg
            :target: data-video: "http://www.quseit.cn"
            :alt: MathiasLuo is a a"ndroid geek developer

6.运行代码按钮必须存在有标题之后，且同一个标题下不能有多个按钮！
