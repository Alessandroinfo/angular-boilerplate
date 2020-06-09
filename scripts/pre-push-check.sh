#!/bin/bash
set -e

branch=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')

if [ "$branch" != "master" ] && [ "$branch" != "quality" ]; then
  echo "You are pushing in: $branch"
  echo "You can push!"
  npm version patch
  npm run-script build || echo \" ----- Error from Husky: check app errors! ----- \"
else
  echo "You are pushing in: $branch"
  echo "You cannot push! Check ./scripts/pre-push-check.sh"
  exit 1
fi
