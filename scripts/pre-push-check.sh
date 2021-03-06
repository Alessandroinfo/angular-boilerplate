#!/bin/bash
set -e
branch=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')

# Add here DevOps conf, if you don't want to be pushed on a certain branch
if [ "$branch" != "notpushhere" ] && [ "$branch" != "andnotpushhere" ]; then
  echo "You are pushing in: $branch"
  echo "You can push!"
  npm version patch
  # If the build fails you cannot push
  npm run-script build || echo \" ----- Error from Husky: check app errors! ----- \"
else
  echo "You are pushing in: $branch"
  echo "You cannot push! Check ./scripts/pre-push-check.sh"
  exit 1
fi
