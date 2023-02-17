## [Husky](https://typicode.github.io/husky/#/)

With husky you can execute a script on a [git hook](https://git-scm.com/docs/githooks)

### Install
There a dev dependencies inside the project of husky.

After `npm i` you have only to attach husky to git for the first time with:

`npm run prepare` or `husky install`

Inside `.husky` directory you can find a script named like a git hook (without any extension).

It's will be called when git start that hook.

---

### Configured:
- `commit-msg` Before commit it check if the message it follow the rules in `enforce-commit-message.sh`
- `pre-commit` Before commit it run `lint-staged` (configured in `.lintstagedrc`) for lint and prettify the codebase and also `enforce-branch-name.sh`
- `pre-push`   Before push it check if build fails `enforce-branch-name.sh` and lint the app

---
List of hook you can configure:
- applypatch-msg       
- pre-push
- commit-msg           
- pre-rebase
- post-update          
- prepare-commit-msg
- pre-applypatch       
- update
- pre-commit
