#!/bin/bash

# Allow commit messages that start with a uppercase letter
INPUT_FILE=$1
echo $1
COMMIT_MSG=`head -n1 $INPUT_FILE`
echo $COMMIT_MSG
REGEX_TO_MATCH="^[A-Z]"
if ! [[ "$COMMIT_MSG" =~ $REGEX_TO_MATCH ]]; then
  echo "[enforce-commit-message] Your commit message is illegal. Please rename your branch with using following regex: $REGEX_TO_MATCH"
  exit 1
fi
