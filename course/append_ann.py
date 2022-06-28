#!/usr/bin/env python
# -*- coding: utf-8 -*-
'''主要行为:
    检验已经追加 _ann
    如果没有 就追加
    已经有, 就替换


::...
替换区
...::
</body>

'''

import os
import sys
import time
import shutil
from pprint import pprint as pp


VERSION = "append_ann.py v220628.2142"
class Borg():
    '''base http://blog.youxu.info/2010/04/29/borg
        - 单例式配置收集类
    '''
    __collective_mind = {}
    def __init__(self):
        self.__dict__ = self.__collective_mind

    #PAGE = 'data'
    AIM = 'index.html'
    INC = 'append.html'

    TAG0 = '::...'
    TAG1 = '...::'
    TAGb = '</body>'



# init all cfg. var
CF = Borg()


def append(troot,sroot,bname):
    #print(troot,sroot,bname)
    #print(CF.AIM)
    _inc = '%s/%s'%(troot, CF.INC)
    #_pages = '%s/%s'%(sroot, CF.PAGE)
    #print(_inc, _pages)
    
    _inc_htm = open(_inc,'r').read()
    #print(_inc_htm)
    _aim_pages = _page_walker(sroot)
    pp(_aim_pages)
    print('\n append append.html into all index.html in', bname)
    _replace_inc(_aim_pages,sroot,_inc_htm)
    return None


def _replace_inc(subs,sroot,_inc):
    #print(len(subs),subs[0])
    #print('subs[0]', subs[0], _aim)
    for p in subs:
        _aim = '{}/{}/{}'.format(sroot
                , p
                , CF.AIM)
        #print(_aim)
        if os.path.exists(_aim):
            _htm = open(_aim,'r').readlines()
            print(_aim)
            _exp = ''
            isTAG0 = 0
            isTAG1 = 0
            noTAG = 0
            for l in _htm:
                if CF.TAG0 == l[:5]:
                    #print('got>>>',CF.TAG0)
                    isTAG0 = 1
                    _exp += l
                elif CF.TAG1 == l[:5]:
                    #print('got<<<',CF.TAG1)
                    isTAG1 = 1
                    _exp += _inc
                    _exp += l
                elif CF.TAGb in l:
                    #print('TAGb ~> ',l)
                    if isTAG0 or isTAG1:
                        pass
                    else:
                        noTAG = 1
                        _exp += '\n%s\n'%CF.TAG0
                        _exp += _inc
                        _exp += '\n%s\n'%CF.TAG1
                        _exp += l
                else:
                    if isTAG0:
                        pass
                    else:
                        _exp += l

            #print(_exp)
            open(_aim,'w').write(_exp)


        else:
            continue
    
    return None



def _page_walker(sroot):
    #_pages = '%s/%s'%(sroot, CF.PAGE)
    print(sroot)
    _subs = os.listdir(sroot)
    #print(len(_subs),_subs[0])
    
    return _subs

if __name__ == "__main__":
    #cli(obj={})

    if 2 != len(sys.argv):
        print("""替换所有 ScrapBook 页面缀文
    usage::
    $ python /path/2/append_ann.py /path/2/docs/
            |                       +- 最终页面目录入口
            +- 指出脚本自身
    by  %s 
        """ % VERSION)
    else:
        TPATH = os.path.dirname(os.path.abspath(sys.argv[0]))
        MYBOOK = os.path.abspath(sys.argv[1])
        REPO_NAME = os.path.basename(MYBOOK)
        #print(TPATH,MYBOOK,REPO_NAME)
        append(TPATH,MYBOOK,REPO_NAME)














