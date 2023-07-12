## Git flow

Follow [Git branching model](https://nvie.com/posts/a-successful-git-branching-model/)

- `master` is for production
- `develop` for test (next release)


- `feature` created from _develop_ for merging to _develop_
- `release` created from _develop_ for merging to _master_
- `hotfix` created from _master_ for merging to _master_

#### Install [Git-flow](https://github.com/petervanderdoes/gitflow-avh/wiki/Installation)

#### Init Git flow

`git flow init` or `git flow init -f` to force the initialization.

You can also use the default git config with `git config --local include.path ../.gitconfig`

> If you receive some error about a branch that doesn't exist, checkout or create it.
---

### Feature

Start new feature

`git flow feature start feature-name`

Finish feature development

`git flow feature finish feature-name`

`git push` to update remote

---

### Release

Start new release from _develop_ for merge changes to _master_

`git flow release start 1.0.0`

Finish release

`git flow release finish 1.0.0`

`git push` to update remote

---

### Hotfixes

Start new hotfix from _master_

`git flow hotfix start 1.0.1`

Finish hotfix and merged to _master_

`git flow hotfix finish 1.0.1`

`git push` to update remote

---

### Versioning

User [semver](https://semver.org/) for versioning your app

---

### Errors

If you get this error:
`Fatal: Not a gitflow-enabled repo yet. Please run 'git flow init' first`

Solve by doing this:

- Open the .git\config
- Remove from `[gitflow "xxx"]` till the other brackets.
- Rerun `git flow init`

- git commit -m "Saving edits"
- git checkout develop
- git checkout master
- git flow init

