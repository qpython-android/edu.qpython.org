SQL 数据库
===============================
Python 提供了一系列标准的数据库的 API，这里我们介绍 sqlite 数据库的用法，其他的数据库的用法大同小异：

::

    import sqlite3 as db


首先我们要建立或者连接到一个数据库上：

::

    import sqlite3 as db
    connection = db.connect("my_database.sqlite")

不同的数据库有着不同的连接方法，例如 cx-oracle 数据库的链接方式为：


::

    connection = db.connect(username, password, host, port,  'XE')


一旦建立连接，我们可以利用它的 cursor() 来执行 SQL 语句：

::

    import sqlite3 as db
    connection = db.connect("my_database.sqlite")
    cursor = connection.cursor()
    cursor.execute("""CREATE TABLE IF NOT EXISTS orders(
          order_id TEXT PRIMARY KEY,
          date TEXT,
          symbol TEXT,
          quantity INTEGER,
          price NUMBER)""")

    cursor.execute("""INSERT INTO orders VALUES ('A0001', '2013-12-01', 'AAPL', 1000, 203.4)""")
    connection.commit()

<button>Run ...</button>



不过为了安全起见，一般不将数据内容写入字符串再传入，而是使用这样的方式：

::

    import sqlite3 as db
    connection = db.connect("my_database.sqlite")
    cursor = connection.cursor()
    orders = [
        ("A0002","2013-12-01","MSFT",1500,167.5),
        ("A0003","2013-12-02","GOOG",1500,167.5)
    ]
    cursor.executemany("""INSERT INTO orders VALUES
        (?, ?, ?, ?, ?)""", orders)
    connection.commit()

<button>Run ...</button>

cx-oracle 数据库使用不同的方式：

::

    cursor.executemany("""INSERT INTO orders VALUES
        (:order_id, :date, :symbol, :quantity, :price)""",
    orders)


查看支持的数据库格式：

::

    import sqlite3 as db
    print(db.paramstyle)


<button>Run ...</button>

在 query 语句执行之后，我们需要进行 commit，否则数据库将不会接受这些变化，如果想撤销某个 commit，可以使用 rollback() 方法撤销到上一次 commit() 的结果：

::
    try:
        ^4$... # perform some operations
    except:
        ^4$connection.rollback()
        ^4$raise
    else:
        ^4$connection.commit()


使用 SELECT 语句对数据库进行查询：

::

    import sqlite3 as db
    connection = db.connect("my_database.sqlite")
    cursor = connection.cursor()

    stock = 'MSFT'
    cursor.execute("""SELECT *
        FROM orders
        WHERE symbol=?
        ORDER BY quantity""", (stock,))
    for row in cursor:
        print row

<button>Run ...</button>

cursor.fetchone() 返回下一条内容， cursor.fetchall() 返回所有查询到的内容组成的列表（可能非常大）：

::

    import sqlite3 as db
    connection = db.connect("my_database.sqlite")
    cursor = connection.cursor()
    stock = 'AAPL'
    cursor.execute("""SELECT *
    FROM orders
    WHERE symbol=?
    ORDER BY quantity""", (stock,))
    cursor.fetchall()

<button>Run ...</button>


读写完毕数据库之后需要关闭数据库：

::

    cursor.close()
    connection.close()


作者 & 更新时间
------------------------------------
作者:`李金  <lijinwithyou@gmail.com>`

提交: 2017/12/6
