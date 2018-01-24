#!/bin/bash
rm -fr ../docs
make html

#mv static static
#mv sources sources

cd build/html && find . -name "*.html" -exec python2 ../../analytics.py {} \; && find . -name "*.html" -exec sed -i -e 's/_static/static/g;s/_images/images/g' {} \; && python ../../replace.py && find . -name "*-e" -exec rm {} \;&& mv _static static && [ -d _images ] &&  mv _images  images

cd ../.. && mv build/html  ../docs && cp -r comments ../docs && cp -r index ../docs && cp CNAME ../docs  && cp favicon.ico  ../docs && cp index.html ../docs && ls ../docs && mv ../docs/_sources ../docs/sources
