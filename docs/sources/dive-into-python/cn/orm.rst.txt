对象关系映射
=================================

数据库中的记录可以与一个 Python 对象对应。


例如对于上一节中的数据库：


+------------+--------------------------------+-------------------+-----------------------+----------------------+
| Order      | Date                           |          Stock    |             Quantity  |        Price         |
+============+================================+==================================================================+
|A0001       |2013-12-01                      |         AAPL      |              1000     |        203.4         |    
+------------+--------------------------------+-------------------+-----------------------+----------------------+
|A0002       |2013-12-01                      |         MSFT      |              1500     |        167.5         |
+------------+--------------------------------+-------------------+-----------------------+----------------------+
|A0003       |2013-12-02                      |           GOOG    |              150      |        167.5         | 
+------------+--------------------------------+-------------------+-----------------------+----------------------+



可以用一个类来描述：


+------------+--------------------------------+
| Attr.      |  Method                        |          
+============+================================+
|Order id    |  Cost                          |      
+------------+--------------------------------+
|Stock       |                                |       
+------------+--------------------------------+
|Quant.      |                                |           
+------------+--------------------------------+
|Price       |                                |
+------------+--------------------------------+

可以使用 sqlalchemy 来实现这种对应：

::

    from sqlalchemy.ext.declarative import declarative_base
    from sqlalchemy import Column, Date, Float, Integer, String

    Base = declarative_base()

    class Order(Base):
        ^4$__tablename__ = 'orders'
        ^4$order_id = Column(String, primary_key=True)
        ^4$date = Column(Date)
        ^4$symbol = Column(String)
        ^4$quantity = Column(Integer)
        ^4$price = Column(Float)

        ^4$def get_cost(self):
            ^8$return self.quantity*self.price


生成一个 Order 对象：

::

    import datetime
    order = Order(order_id='A0004', date=datetime.date.today(), symbol='MSFT', quantity=-1000, price=187.54)


调用方法：

::

    order.get_cost()


使用上一节生成的数据库产生一个 session：

::

    from sqlalchemy import create_engine
    from sqlalchemy.orm import sessionmaker

    engine = create_engine("sqlite:///my_database.sqlite")   # 相当于 connection
    Session = sessionmaker(bind=engine) # 相当于 cursor
    session = Session()


使用这个 session 向数据库中添加刚才生成的对象：

::

    session.add(order)
    session.commit()

显示是否添加成功：

::

    for row in engine.execute("SELECT * FROM orders"):
        ^4$print row


成功则会输出以下内容
::

    (u'A0001', u'2013-12-01', u'AAPL', 1000, 203.4)
    (u'A0002', u'2013-12-01', u'MSFT', 1500, 167.5)
    (u'A0003', u'2013-12-02', u'GOOG', 1500, 167.5)
    (u'A0004', u'2015-09-10', u'MSFT', -1000, 187.54)

使用 filter 进行查询，返回的是 Order 对象的列表：

::

    for order in session.query(Order).filter(Order.symbol=="AAPL"):
        ^4$print order.order_id, order.date, order.get_cost()

成功则会输出以下内容


::

    A0001 2013-12-01 203400.0

返回列表的第一个：

::

    order_2 = session.query(Order).filter(Order.order_id=='A0002').first()

::

    order_2.symbol


输出： u'MSFT'


作者 & 更新时间
------------------------------------
作者:`李金  <lijinwithyou@gmail.com>`

提交: 2017/12/6
