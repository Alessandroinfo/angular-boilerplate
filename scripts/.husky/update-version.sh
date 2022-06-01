#!/bin/bash
# This will update your project version number
# based on your branch name
# If it's the branch name contain fix it will make a patch
# If it's a feature/branch-name it will make a minor

echo 'Updating version...'
stringContain() { [ -z "$1" ] || { [ -z "${2##*$1*}" ] && [ -n "$2" ];};}

branch=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')

if stringContain "feature" "$branch"; then
  echo 'npm version minor'
  npm version minor
elif stringContain "fix" "$branch"; then
  echo 'npm version patch'
  npm version patch
else
  echo 'npm version major'
  npm version major
fi
