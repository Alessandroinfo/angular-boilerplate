#!/bin/bash
# This will update your project version number
# based on your branch name
# If it's a hotfix/branch-name or bugfix/branch-name or fix/branch-name it will make a patch
# If it's a feature/branch-name it will make a minor

# TODO Manage a better way to increase versions
# isFeature=$(git-branch-is -i -r "^feature/")
# echo "$isFeature"
# if [ "$isFeature" ]; then
#  npm version minor
# fi
# isHotfix=$(git-branch-is -i -r -q "^hotfix/")
# if [ "$isHotfix" ]; then
#  npm version patch
# fi
