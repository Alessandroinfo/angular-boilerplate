## Scripts


Inside the directory `scripts` you can find:

- `build-checks.sh` Check if the build fails
- `enforce-commit-message.sh` Based on a parameter it return error if the filename don't follow the rules
- `enforce-branch-name.sh` Based on current branch name it return error if the branch name don't follow the rules
- `renormalize-line-endings.sh` It renormalize the line endings of the whole codebase after changing line endings in git
- `update-app-version.sh` It update the app version based on branch name
- `scripts-permissions.sh` To give the right permission for the directory of the repository

#### NOTE:
_Every script prepend at the echo message the name of the file between square for make easily understand from where is the log._

_eg.: `echo "[build-check] Your app build has one or more errors!"`_
