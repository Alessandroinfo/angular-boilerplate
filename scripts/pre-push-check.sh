#!/bin/bash
# Edit notpushere to block push on some branch
# This also patch your project so update the version number
set -e
branch=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')

# Add here DevOps conf, if you don't want to be pushed on a certain branch
if [ "$branch" != "notpushhere" ] && [ "$branch" != "andnotpushhere" ]; then
  echo "You are pushing in: $branch"
  echo "You can push!"

  # If the build fails you cannot push
  #npm run-script build || echo \" ----- Error from Husky: check app errors! ----- \"

  # Manage a better way to increase versions
  isFeature=$(git-branch-is -i -r "^feature/")
  echo "$isFeature"
  if [ "$isFeature" ]; then
    npm version minor
  fi
  isHotfix=$(git-branch-is -i -r -q "^hotfix/")
  if [ "$isHotfix" ]; then
    npm version patch
  fi
else
  echo "You are pushing in: $branch"
  echo "You cannot push! Check ./scripts/pre-push-check.sh"
  exit 1
fi
