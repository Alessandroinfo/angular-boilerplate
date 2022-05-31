#!/bin/bash
# Edit notpushere to block push on some branch
set -e
branch=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')

# Edit here if you don't want to be pushed on a certain branches
if [ "$branch" != "notpushhere" ] && [ "$branch" != "andnotpushhere" ]; then
  echo "You are pushing in: $branch"
  echo "You can push!"

else
  echo "You are pushing in: $branch"
  echo "You cannot push! Check ./scripts/can-push-check.sh"
  exit 1
fi
