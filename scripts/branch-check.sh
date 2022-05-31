#!/bin/bash
# Check if you can push on some branches
set -e
branch=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')
echo "You are pushing in ---> $branch"

# Edit here if you don't want to be pushed on a certain branches
if [ "$branch" != "dontpushhere" ] && [ "$branch" != "anddontpushhere" ]; then
  echo "You can push!"

else
  echo "You cannot push! Check ./scripts/can-push-check.sh"
  exit 1
fi
