QPython Courses
======================

![Course](http://dl.qpy.io/assets/banners/activity-qpython-edu.png "QPython EDU")


About
-------
QPython courses is a social Python learning project, based on QPython community, we hope more and more people could join us wo help write or translate and share QPython learning materials which could help other friends learn Python with more fun.

How to contribute
------------------
* We extend sphinx to organize the courses,  you need to learn some [sphinx's syntax](https://www.sphinx-doc.org/)
* Fork & clone our project on github, [project address](https://github.com/qpython-android/course)
* Add new course or improve the current course or translate to other language
* Send pull reuqest to us


Course structure
-----------------

    Course root
        |
        - LICENSE
        |
        - README.md
        |
        - RST_UP_README.md (Extended rst syntax introduction )
        |
        - docs (Auto generated html pages from course)
        |
        - course (courses source and the files that were used to generate the website)
            |
            - CNAME  analytics.py analyticscode.txt favicon.ico Makefile  replace.py media  (You could ignore these files, they are used when generated the html files)
            |
            - build.sh (the shellscript generate the docs)
            |
            - source (courses source)
                |
                - _static conf.py qtheme _templates (you could ignore them, they are the website's template or other style files)
                |
                - *.rst (real courses)
                |
                - qpython-quick-start (The qpython quick start chapter)
                |
                - kivy-qpython (The kivy chapter)
                |
                - qpython-webapp (The webapp chapter)
                |
                - data-analytics (The data analytics chapter)


Other
---------------------
... To be continued



Thank you for contributing



