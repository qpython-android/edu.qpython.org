CSV 文件和 csv 模块
=======================
标准库中有自带的 csv (逗号分隔值) 模块处理 csv 格式的文件：


::

  import csv



读 csv 文件
----------------------------------------------------------
假设我们有这样的一个文件：


%% file data.csv

::

	"alpha 1",  100, -1.443
	"beat  3",   12, -0.0934
	"gamma 3a", 192, -0.6621
	"delta 2a",  15, -4.515


打开这个文件，并产生一个文件 reader：



::

	fp = open("data.csv")
	r = csv.reader(fp)

可以按行迭代数据：


::

	for row in r:
	^4$print row
	    
	fp.close()


结果:
::
    
    ['alpha 1', '  100', ' -1.443']
	['beat  3', '   12', ' -0.0934']
	['gamma 3a', ' 192', ' -0.6621']
	['delta 2a', '  15', ' -4.515']


默认数据内容都被当作字符串处理，不过可以自己进行处理：



::

	data = []

	with open('data.csv') as fp:
		^4$r = csv.reader(fp)
		^4$for row in r:

	data.append([row[0], int(row[1]), float(row[2])])
	    
	data


结果:
::
    
	[['alpha 1', 100, -1.443],
	['beat  3', 12, -0.0934],
	['gamma 3a', 192, -0.6621],
	['delta 2a', 15, -4.515]]



::

	import os
	os.remove('data.csv')



写 csv 文件
-------------------------------------------------------------
可以使用 *csv.writer* 写入文件，不过相应地，传入的应该是以写方式打开的文件，不过一般要用 *'wb'* 即二进制写入方式，防止出现换行不正确的问题：


::

	data = [('one', 1, 1.5), ('two', 2, 8.0)]
	with open('out.csv', 'wb') as fp:
	w = csv.writer(fp)
	w.writerows(data)


显示结果：

::

	!cat 'out.csv'


结果:
::

	one,1,1.5
	two,2,8.0





更换分隔符
----------------------------------------------------
默认情况下，*csv* 模块默认 *csv* 文件都是由 *excel* 产生的，实际中可能会遇到这样的问题：


::

	data = [('one, \"real\" string', 1, 1.5), ('two', 2, 8.0)]
	with open('out.csv', 'wb') as fp:
	w = csv.writer(fp)
	w.writerows(data)




::

	!cat 'out.csv'


结果:
::

	"one, ""real"" string",1,1.5
	two,2,8.0


可以修改分隔符来处理这组数据：



::

	data = [('one, \"real\" string', 1, 1.5), ('two', 2, 8.0)]
	with open('out.psv', 'wb') as fp:
	w = csv.writer(fp, delimiter="|")
	w.writerows(data)




::

	!cat 'out.psv'


结果:
::

	"one, ""real"" string" | 1 | 1.5
	two|2|8.0




::

	import os
	os.remove('out.psv')
	os.remove('out.csv')

其他选项
-------------------------------------------------------------------------

*numpy.loadtxt()* 和 *pandas.read_csv()* 可以用来读写包含很多数值数据的 *csv* 文件：



::

	%%file trades.csv
	Order,Date,Stock,Quantity,Price
	A0001,2013-12-01,AAPL,1000,203.4
	A0002,2013-12-01,MSFT,1500,167.5
	A0003,2013-12-02,GOOG,1500,167.5


Writing trades.csv


使用 pandas 进行处理，生成一个 DataFrame 对象：



::

	import pandas
	df = pandas.read_csv('trades.csv', index_col=0)
	print df


             

结果:
::

    Order  Date Stock  Quantity  Price                                 
	A0001  2013-12-01  AAPL      1000  203.4
	A0002  2013-12-01  MSFT      1500  167.5
	A0003  2013-12-02  GOOG      1500  167.5


通过名字进行索引：



::

	df['Quantity'] * df['Price']

结果:
::
    
	Order
	A0001    203400
	A0002    251250
	A0003    251250
	dtype: float64


::

	import os
	os.remove('trades.csv')


作者 & 更新时间
------------------------------------
作者:李金  lijinwithyou@gmail.com