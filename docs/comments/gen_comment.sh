#!/bin/bash
subFolder=/Users/Hmei/DL:ML/course/docs 
commentFolder=/Users/Hmei/DL:ML/course/docs/comments
tamplate=/Users/Hmei/DL:ML/course/docs/comments/data-analytics-index.html 
for i in "$subFolder"/* ; do
    if [ -d "$i" ]; then
        basename=$(basename "$i").html
        file=$commentFolder/$basename
        echo $file
        touch $file 
        chmod +x $file        
        while read line; do
            echo ${line/data-analytics-index.html/$basename} >> $file
        done < $tamplate
    fi
done
