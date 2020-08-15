#!bin/bash
git add .
DATE=$(date)
git commit -m "changes made on $DATE"
git push origin $1



# how to run/ keep in root folder
# bash github.sh <branch name>
#END

