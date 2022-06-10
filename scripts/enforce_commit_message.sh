#!/bin/bash

# Allow commit messages that start with a uppercase letter
BRANCH_NAME=$(git symbolic-ref --short HEAD)
INPUT_FILE=$1
echo $1
COMMIT_MSG=`head -n1 $INPUT_FILE`
REGEX_TO_MATCH="^[A-Z]"
if ! [[ "$COMMIT_MSG" =~ $REGEX_TO_MATCH ]]; then
  echo $COMMIT_MSG
  echo "[enforce-commit-message] Your commit message is illegal. Please rename your branch with using following regex: $REGEX_TO_MATCH"
  exit 1
fi
