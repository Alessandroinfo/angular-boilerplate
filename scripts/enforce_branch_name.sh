#!/bin/bash
LC_ALL=C

LOCAL_BRANCH="$(git rev-parse --abbrev-ref HEAD)"

# Put here regex for the branches to enforce
# This is to enforce the commit only to the branches that start with 'feature|release|bugfix|hotfix|fix'
VALID_BRANCH_REGEX="^(feature|release|bugfix|hotfix|fix)\/[a-z0-9._-]+$"

MESSAGE="[enforce-branch-name] There is something wrong with your branch name. Branch names must adhere to this contract: $valid_branch_regex. Your commit will be rejected. You should rename your branch to a valid name and try again."
echo "[enforce-branch-name] You are pushing in --> $LOCAL_BRANCH"

if [[ ! $LOCAL_BRANCH =~ $VALID_BRANCH_REGEX ]]
then
    echo "$MESSAGE"
    exit 1
fi

exit 0
