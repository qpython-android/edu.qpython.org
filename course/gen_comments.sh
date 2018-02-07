#!/bin/bash
commentFolder=./comments
tamplate=./comments/data-analytics-index.html 
for i in ./source/* ; do
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
