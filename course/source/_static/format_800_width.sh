#!/bin/bash

{
	F_NAME="${1}"

	if test -f "${F_NAME}"
	then
		convert "${F_NAME}" -resize 800 "${F_NAME}"
		echo 'resize finish'
	elif test -d "${F_NAME}"
	then
		find $1 -type f -name "*.png" | while read png; do
			convert "$png" -resize 800 "$png"
		done
		echo 'resize finish'
	else                                   
	   echo "${F_NAME} is not valid"
	fi
} || {
	echo 'please install imagemagick by'
	echo '1. sudo apt-get install imagemagick'
	echo '2. brew install imagemagick'
	echo 'or any package manager you have'
}
exit 0

