#!/bin/bash
# This will update your project version number
# based on your branch name
# If it's the branch name contain fix it will make a patch
# If it's a feature/branch-name it will make a minor

#!/bin/bash
echo 'Updating version...'
stringContain() { [ -z "$1" ] || { [ -z "${2##*$1*}" ] && [ -n "$2" ];};}

branch=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')

if stringContain "feature" $branch; then
  npm version minor
  git add *;
  git commit -m "Bump version"
  git push
  npm publish
elif stringContain "fix" $branch; then
  npm version patch
else
  npm version major
fi
