#!/bin/bash
LC_ALL=C

local_branch="$(git rev-parse --abbrev-ref HEAD)"

# Put here regex for the branches to enforce
# This is to enforce the commit only to the branche that start with 'feature|improvement|library|prerelease|release|bugfix|hotfix|fix'
valid_branch_regex="^(feature|release|bugfix|hotfix|fix)\/[a-z0-9._-]+$"

message="[enforce-branch-name] There is something wrong with your branch name. Branch names must adhere to this contract: $valid_branch_regex. Your commit will be rejected. You should rename your branch to a valid name and try again."

if [[ ! $local_branch =~ $valid_branch_regex ]]
then
    echo "[enforce-branch-name] You are pushing in --> $branch"
    echo "$message"
    exit 1
fi

exit 0
