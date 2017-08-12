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



License
----------------
<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/Text" property="dct:title" rel="dct:type">This tutorial </span> is contributed by <a xmlns:cc="http://creativecommons.org/ns#" href="http://plus.google.com/u/1/communities/111340957575273631204" property="cc:attributionName" rel="cc:attributionURL">QPython course community</a>，and licensed under a  <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>.
