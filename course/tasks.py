# -*- coding: utf-8 -*-
"""invoke for replace Makfile to building edu.qpython.org
"""
__version__ = "EduBuilder v.220628.2142"
__author__ = "Zoom.Quiet"
__license__ = "MIT@2022"

#from cProfile import run
import os
from pprint import pprint as pp

from invoke import task

SROOT = os.path.dirname(os.path.abspath(__file__))
print(SROOT)



@task
def ver(c):
    """echo self Version info."""
    # print('\n\t powded by {}'.format(__version__))
    print('''\n{}
    CLI tools for build site
    '''.format(">"*79))
    print("\t powered by <- {} ".format(__version__))
    print("\t build with ~> {}\n".format(__author__))
    return None


#   support stuff func.
def cd(c, path2, echo=True):
    os.chdir(path2)
    if echo:
        print('\n\t crt. PATH ===')
        c.run('pwd')
        print('='*42)
        c.run('echo \n')


def _fix(c):

    c.run("find . -name '*.html' -exec python ../../analytics.py {} \;")
    c.run("find . -name '*.html' -exec sed -i -e 's/_static/static/g;s/_images/images/g' {} \;")
    c.run("python ../../replace.py")
    c.run("find . -name '*-e' -exec rm {} \;")
    c.run("mv _static static")
    c.run("mv _images  images")

    #ver(c)
    return None

@task
def pub(c):
    """$ inv pub ~ build all and publish through githuba-pages
    """
    c.run("rm -fr ../docs")
    c.run("sphinx-build -b html -d build/doctrees source  build/html")

    with c.cd("build/html"):
        c.run("find . -name '*.html' -exec python ../../analytics.py {} \;")
        c.run("find . -name '*.html' -exec sed -i -e 's/_static/static/g;s/_images/images/g' {} \;")
        c.run("python ../../replace.py")
        c.run("find . -name '*-e' -exec rm {} \;")
        #c.run("mv _static static")
        #c.run("[ -d _images ] && mv _images  images")
        #c.run('ls')
        c.run('python ../../append_ann.py ./')
        print("="*42, "pwd")
        c.run('pwd')
        print("="*42)

    with c.cd(SROOT):
        c.run('ls')
        print("="*42, "pwd")
        c.run('pwd')
        print("="*42)
        print("mv build/html  ../docs")
        c.run("mv build/html  ../docs")
        print("cp -r comments ../docs")
        c.run("cp -r comments ../docs")
        print("cp -r index ../docs")
        c.run("cp -r index ../docs")
        print("cp CNAME ../docs")
        c.run("cp CNAME ../docs")
        print("cp favicon.ico  ../docs")
        c.run("cp favicon.ico  ../docs")
        print("cp index.html ../docs")
        c.run("cp index.html ../docs")

        #c.run("ls ../docs")
        print("mv ../docs/_sources ../docs/sources")
        c.run("mv ../docs/_sources ../docs/sources")
        print("mv ../docs/_static ../docs/static")
        c.run("mv ../docs/_static ../docs/static")
        print("mv ../docs/_images ../docs/images")
        c.run("[ -d _images ] && mv ../docs/_images ../docs/images")

    ver(c)
    return None

