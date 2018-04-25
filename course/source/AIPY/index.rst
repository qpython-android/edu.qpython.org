AIPY - Learn AI programming on Mobile
--------------------------------------------------------
.. image:: http://www.aipy.org/img/img_logo.png
    :alt: AIPY Logo
    :target: http://www.aipy.org

AIPY  is a high-level AI learning app, based on related libraries like Numpy, Scipy, theano, keras, etc.... It was developed with a focus on helping you learn and practise AI related programming well and fast.

Now, AIPY is released as a QPython plugin, after being installed, you can see the AIPY category in QPYPI, where you could find Numpy, Scipy, Pandas, Matplotlib, Scikit-learn, Theano, Lasange, Keras.

By installing these libraries, you could start mathematics, scientific, data  analytics, deeplearning etc. with QPython.


How to use
--------------
You should install AIPY application first, then please make sure you have the latest QPython(version >=2.2.3-1) installed.

If you have completed the previous step, then you could launch QPython and enter the QPYPI, you will see the AIPY category, from where you can install the related libraries. They are numpy, scipy, pandas, matplotlib, scikit-learn, theano, Lasagne, keras etc.

.. image:: http://edu.qpython.org/static/qpypi-aipy.png
    :alt: AIPY libraires

*You can install AIPY libraries from QPython's QPYPI*


Keras
-----------
Keras is a high-level neural networks API, written in Python and capable of running on top of TensorFlow, CNTK, or Theano. It was developed with a focus on enabling fast experimentation. Being able to go from idea to result with the least possible delay is key to doing good research.

It runs on top of theano in QPython now, we will try to add tensorflow and other deeplearning frmaework in the future.

Lasange
-----------
Lasagne is a lightweight library to build and train neural networks in Theano.


Theano
-------
Theano is a Python library that allows you to define, optimize, and evaluate mathematical expressions involving multi-dimensional arrays efficiently.


**Besides these high-level AI related libraries, QPython supports the following libraries also.**


Numpy
-----------
NumPy is the fundamental package for scientific computing with Python. It contains the following things:

- 1 A powerful N-dimensional array object
- 2 Sophisticated (broadcasting) functions
- 3 Tools for integrating C/C++ and Fortran code
- 4 Useful linear algebra, Fourier transform, and random number capabilities


Scipy
-------
SciPy is a Python-based ecosystem of open-source software for mathematics, science, and engineering


Pandas
--------
Pandas is a Python package providing fast, flexible, and expressive data structures designed to make working with “relational” or “labeled” data both easy and intuitive. It aims to be the fundamental high-level building block for doing practical, real world data analysis in Python. Additionally, it has the broader goal of becoming the most powerful and flexible open source data analysis / manipulation tool available in any language. It is already well on its way toward this goal.


Matplotlib
------------
Matplotlib is a Python 2D plotting library which produces publication quality figures in a variety of hardcopy formats and interactive environments across platforms.

In QPython you could use the webagg as backends with tornado, please install tornado from QPYPI and make sure your script contains the below declarations.

::

    #qpy:webapp:QPyMatplot
    #qpy://127.0.0.1:8988/

    import matplotlib
    matplotlib.use('webagg')
    ...


Scikit-learn
------------
Scikit-learn is a Machine Learning framework in Python.

It has the following features:

- 1 Simple and efficient tools for data mining and data analysis
- 2 Accessible to everybody, and reusable in various contexts



**It's AIPY's first release, we will keep developing, and bring more amazing features. Please give us any feedback to support@qpython.org.**

.. image:: http://edu.qpython.org/static/aipy.png
    :alt: Get AIPY Application
    :target: http://www.aipy.org

*Get AIPY Application http://www.aipy.org*
