#!/bin/bash
# This will update your project version number
# based on your branch name
# If it's a hotfix/branch-name or bugfix/branch-name or fix/branch-name it will make a patch
# If it's a feature/branch-name it will make a minor

#!/bin/bash
branch=$(git branch --show-current | sed -n -e 's/^\* \(.*\)/\1/p')
echo "$branch"
if [[ "feature" == *"$branch"* ]]; then
  echo "It's there."
elif
  [[ "fix" == *"$branch"* ]] || [[ "bugfix" == *"$branch"* ]] || [[ "hotfix" == *"$branch"* ]]; then
    echo "It's here."
else
  echo "It's"
fi
