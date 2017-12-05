#!/usr/bin/python
#-*- coding: UTF-8 -*- 
import os
import re
import glob

path = './'   #相对路径

filelist = glob.glob(path+"*.html")+glob.glob(path+"*/*.html")+glob.glob(path+"*/*/*.html")


def call_repl_jumpbutton(matchobj):
    return '''
        <button data-url="%s" class="button">%s</button>
    ''' % (matchobj.group(1), matchobj.group(2))

def call_repl_video(matchobj):
    return '''
        <a class="reference external image-reference video" target="_blank" href="%s"
    ''' % matchobj.group(1)

def call_repl_space(matchobj):
    num = matchobj.group(1)
    space_str = ''
    for x in range(int(num)):
        space_str += ' '
    return space_str

for x in filelist:
    _temp= ''
    with open(x, 'r') as f:
        _temp = f.read()

    #处理
    _temp=  _temp.replace('_static', 'static').replace('_images', 'images').replace('<p>&lt;button&gt;', '<button class="button">').replace('&lt;/button&gt;</p>', '</button>').replace('&#8221;','"')
    #jumpbutton
    reg = r'<p>&lt;jumpbutton\s+data-url=["”](.+)["”](?=&gt;)&gt;(.+)&lt;/jumpbutton&gt;</p>'
    _temp = re.sub(reg, call_repl_jumpbutton, _temp)

    #video
    reg = r'<a\s+class="reference\s+external\s+image-reference"\s+href="data-video:&quot;([^&]*)(?=&quot;")&quot;"'
    _temp = re.sub(reg, call_repl_video, _temp)

    reg = r'\^(\d{1,2})\$'
    _temp = re.sub(reg, call_repl_space, _temp)

    with open(x, 'w') as f:
        f.write(_temp)
