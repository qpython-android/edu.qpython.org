
处理文本（数学表达式）
===========================


在字符串中使用一对 $$ 符号可以利用 Tex 语法打出数学表达式，而且并不需要预先安装 Tex。在使用时我们通常加上 r 标记表示它是一个原始字符串（raw string）




::

    import matplotlib.pyplot as plt
    import numpy as np
    %matplotlib inline




::

    # plain text
    plt.title('alpha > beta')

    plt.show()

<button>Run ...</button>


.. image:: data:image/png;base64,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%0A






::

    # math text
    plt.title(r'$\alpha > \beta$')

    plt.show()


<button>Run ...</button>


.. image:: data:image/png;base64,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%0A


上下标
-------------


使用 _ 和 ^ 表示上下标：


$\alpha_i &gt; \beta_i$：

r'$\alpha_i > \beta_i$'

$\sum\limits_{i=0}^\infty x_i$：

r'$\sum_{i=0}^\infty x_i$'

注：

- 希腊字母和特殊符号可以用 '\ + 对应的名字' 来显示
- {} 中的内容属于一个部分；要打出花括号是需要使用 \{\}


分数，二项式系数，stacked numbers
-----------------------------------------


$\frac{3}{4}, \binom{3}{4}, \stackrel{3}{4}$：

r'$\frac{3}{4}, \binom{3}{4}, \stackrel{3}{4}$'


$\frac{5 - \frac{1}{x}}{4}$：

r'$\frac{5 - \frac{1}{x}}{4}$'


在 Tex 语言中，括号始终是默认的大小，如果要使括号大小与括号内部的大小对应，可以使用 \left 和 \right 选项：

$(\frac{5 - \frac{1}{x}}{4})$

r'$(\frac{5 - \frac{1}{x}}{4})$'

$\left(\frac{5 - \frac{1}{x}}{4}\right)$：

r'$\left(\frac{5 - \frac{1}{x}}{4}\right)$'



根号
-----------


$\sqrt{2}$：

r'$\sqrt{2}$'

$\sqrt[3]{x}$：

r'$\sqrt[3]{x}$'


特殊字体
---------------


默认显示的字体是斜体，不过可以使用以下方法显示不同的字体：



+--------------------------+--------------------------------------------------------------------------+
| 命令	                 |显示                                                                      |
+==========================+==========================================================================+
|\mathrm{Roman}	           | $\mathrm{Roman}$                                                         |    
+--------------------------+--------------------------------------------------------------------------+
| \mathit{Italic}	       |$\mathit{Italic}$                                                         |
+--------------------------+--------------------------------------------------------------------------+
| \mathtt{Typewriter}	   |$\mathtt{Typewriter}$                                                     |
+--------------------------+--------------------------------------------------------------------------+
| \mathcal{CALLIGRAPHY}	   |$\mathcal{CALLIGRAPHY}$                                                   |         
+--------------------------+--------------------------------------------------------------------------+
| \mathbb{blackboard}	   |$\mathbb{blackboard}$                                                     |
+--------------------------+--------------------------------------------------------------------------+
|\mathfrak{Fraktur}	       |$\mathfrak{Fraktur}$                                                      |
+--------------------------+--------------------------------------------------------------------------+
| \mathsf{sansserif}	   |$\mathsf{sansserif}$                                                      |
+--------------------------+--------------------------------------------------------------------------+



$s(t) = \mathcal{A}\ \sin(2 \omega t)$：
s(t) = \mathcal{A}\ \sin(2 \omega t)




- Tex 语法默认忽略空格，要打出空格使用 '\ '
- \sin 默认显示为 Roman 字体



音调
------------

+--------------------------+--------------------------------------------------------------------------+
|命令	                     |结果                                                                      |
+==========================+==========================================================================+
|\acute a	               | $\acute a$                                                               |    
+--------------------------+--------------------------------------------------------------------------+
|\breve a		           |$\breve a$                                                                |
+--------------------------+--------------------------------------------------------------------------+
|\ddot a		           |$\ddot a$                                                                 |
+--------------------------+--------------------------------------------------------------------------+
|\dot a		               |$\dot a$                                                                  |         
+--------------------------+--------------------------------------------------------------------------+
|\tilde a		           |$\tilde a$                                                                |
+--------------------------+--------------------------------------------------------------------------+
|\4vec a		           |$\vec a$                                                                  |
+--------------------------+--------------------------------------------------------------------------+
|\overline{abc}		       |$\overline{abc}$                                                          |
+--------------------------+--------------------------------------------------------------------------+
|\widehat{xyz}		       |$\widehat{xyz}$                                                           |
+--------------------------+--------------------------------------------------------------------------+
|\widetilde{xyz}	       |$\widetilde{xyz}$                                                         |
+--------------------------+--------------------------------------------------------------------------+




特殊字符表
--------------


参见：http://matplotlib.org/users/mathtext.html#symbols



**例子**




::

    import numpy as np
    import matplotlib.pyplot as plt
    t = np.arange(0.0, 2.0, 0.01)
    s = np.sin(2*np.pi*t)

    plt.plot(t,s)
    plt.title(r'$\alpha_i > \beta_i$', fontsize=20)
    plt.text(1, -0.6, r'$\sum_{i=0}^\infty x_i$', fontsize=20)
    plt.text(0.6, 0.6, r'$\mathcal{A}\ \mathrm{sin}(2 \omega t)$',
             ^4$fontsize=20)
    plt.xlabel('time (s)')
    plt.ylabel('volts (mV)')
    plt.show()



<button>Run ...</button>


.. image:: data:image/png;base64,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%0AdOyo+t573p933LhxWrFiRV24cGHI50pPT9dJkyZphw4dVES0V69eBXr9V199pZs3b9abbrpJv/ji%0Ai5DjiQUvvqh6661+RxGa0aNVmzTx5lwUYp6GL8uIeM2WEYku//6320f7qaf8jqRw9u1zo6Z+/x2O%0AP9678y5atIiWLVvyySefcFEQmzmrKocOHeLQoUPs3buX7du3s23bNhYtWsTcuXMZPXp05v7iIsKs%0AWbM477zzgo5n9+7dqCp16tQ5qikrXv3+u5vd/8cfoe317qc77oCaNeGBB0I/VywtI2Li2JVXwm23%0AxW7SGDfO7U/gZcLYtGkTl156KVu3bs2cN+GlunXrFihhAJQpU4Y33niDjh07cvjwYdLS0jJ3EoxX%0ANWu6/V9mzIAsg8piRno6jBjhNj7zS3x/QowvLrjAdSSvWAGnneZ3NAU3fLhLfF564oknOPbYYznz%0AzDzX5Sy0u+66q1Cv++ijj3j55Zd599136dGjh8dRRacrr3T/x7GYNObMgeOO827b4cKw5ikTFrff%0ADrVqQZ8+fkdSMIcPu90Ip01zV6Xx7s4776RevXrUqlUrYSYBzpkD118PS5f6HUnBPfywq2383/95%0Ac77CNE9Z0jBh8d138MwzbtnmWDJ1qmsznj/f70hMuKjCSSe5EUhhqviFTd26MGgQNG7szfkKkzRs%0AyK0Ji9atYd48t0FMLPnmG++bpkx0EYErrnD/17FkxQrYts2fWeBZWdIwYXHMMW4y1bff+h1J8FRd%0AW3eHvHasN3GhQwf3fx1Lhg93yS7J57/aljRM2GR0OMaKJUvccNsCDkIKmldrPM2ePZt7772XDz/8%0AkJ49e/Lbb795EF1iadHC/X9v2OB3JMELxwCNwrA+DRM227dDjRpuTHzp0n5Hk78BA2D9enj99fCc%0A/+DBg2zcuDGkJTsOHDhArVq1mDFjBpUqVWL27NnceeedzJw508NIE8P117stfHv29DuS/G3a5AaW%0AbNzoavFesT4NE1XKl4emTd248lgwbBh06hS+83uxxtPkyZMpXbo0lSpVAqBBgwYsXryYVatWeRBh%0AYrnuOvjkE7+jCM7nn7slerxMGIVl8zRMWF1/vftjfP31fkeSt19/hR07wrNAYXp6Oq+//jrz58+n%0AR48enH/++ZnP/fnnnzz33HPkVVMuWrQojz32GEWLFmXVqlUcn2XWoYiQnJzMwoULj9hLw+SvfXu4%0A+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%0A


作者 & 更新时间
------------------------------------
作者:`李金  <lijinwithyou@gmail.com>`

提交: 2017/12/14


