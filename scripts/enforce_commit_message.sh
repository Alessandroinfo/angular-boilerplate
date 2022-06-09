#!/bin/bash

# Allow commit messages that start with a uppercase letter
REGEX_ISSUE_ID="^([A-Z])"
ISSUE_ID_IN_COMMIT=$(echo $(cat "$1") | grep -o -E "$REGEX_ISSUE_ID")

if [[ -z "$ISSUE_ID_IN_COMMIT" ]]; then
    BRANCH_NAME=$(git symbolic-ref --short HEAD)
    ISSUE_ID=$(echo "$BRANCH_NAME" | grep -o -E "$REGEX_ISSUE_ID")

    if [[ -z "$ISSUE_ID" ]]; then
        echo "[commit-msg-hook] Your commit message is illegal. Please rename your branch with using following regex: $REGEX_ISSUE_ID"
        exit 1
    fi

    echo "$ISSUE_ID | $(cat "$1")" > "$1"
fi
