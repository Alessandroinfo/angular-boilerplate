#!/bin/bash

# Allow commit messages that start with a uppercase letter
# Change the REGEX_TO_MATCH how you want
INPUT_FILE=$1
COMMIT_MSG=`head -n1 $INPUT_FILE`
REGEX_TO_MATCH="^[A-Z]"
if [[ ! $COMMIT_MSG =~ $REGEX_TO_MATCH ]]; then
  echo "[enforce-commit-message] Your commit message ($COMMIT_MSG) is illegal. Please rename your branch with using following regex: $REGEX_TO_MATCH"
  exit 1
fi
