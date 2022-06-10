# Refreshing a repository after changing line endings
# https://docs.github.com/en/get-started/getting-started-with-git/configuring-git-to-handle-line-endings
git add . -u &&
git commit -m "Saving files before refreshing line endings" &&
git add --renormalize . &&
git status &&
git commit -m "Normalize all the line endings"
