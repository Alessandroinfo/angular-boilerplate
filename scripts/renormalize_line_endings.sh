git add . -u &&
git commit -m "Saving files before refreshing line endings" &&
git add --renormalize . &&
git status &&
git commit -m "Normalize all the line endings"
