#!/bin/bash

echo "Running script..." 
cd "/Users/andreaspfeifer/Documents/GitHub/Docker/magicmirror/mounts/modules/MMM-RecyclingCalendar"
# git checkout getCalendarWeekData
git checkout master
# git pull
cd "/Users/andreaspfeifer/Documents/GitHub/Docker/magicmirror/run"
docker-compose up