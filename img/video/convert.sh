#!/bin/bash

FILEPATH="speed.mp4"
echo $FILEPATH
TMPPATH=$(mktemp).mp4

/usr/bin/ffmpeg -i "$FILEPATH" -pix_fmt yuv420p -vcodec libx264 -crf 20 "$TMPPATH"
echo $TMPPATH
/bin/rm -f "$FILEPATH"
/bin/mv "$TMPPATH" "$FILEPATH"
