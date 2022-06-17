#!/bin/bash
# This will update your project version number
# based on your branch name
# If it's the branch name contain fix it will make a patch
# For example, if it's a feature/branch-name it will make a minor

echo '[update-app-version] Updating version...'
stringContain() { [ -z "$1" ] || { [ -z "${2##*$1*}" ] && [ -n "$2" ];};}

branch=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')

echo "[update-app-version] Branch name is $branch"
if stringContain "feature" "$branch" || stringContain "release" "$branch"; then
  echo '[update-app-version] npm version minor'
  npm version minor
elif stringContain "hotfix" "$branch" || stringContain "bugfix" "$branch" || stringContain "fix" "$branch"; then
  echo '[update-app-version] npm version patch'
  npm version patch
else
  echo '[update-app-version] npm version major'
  npm version major
fi
