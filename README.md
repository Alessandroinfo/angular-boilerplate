<p align="center">
<img src="src/assets/imgs/logo.svg" width="64" alt="Logo">

# Angular-Boilerplate
</p>

### Awards
- 100 / 100 Lighthouse

![img.png](src/assets/imgs/README/lighthouse-100.png)

### Integrations 
- TailwindCSS & Material cooperation
- Cordova ready
- Husky git management
- Git-flow management
- Eslint
- Prettier

### Abilities
- PWA
- Icons generator from svg
- Skip link
- Custom webpack
- App-shell
- Loader CSS (Before the boot for FCP)
- Login authentication
- Bundle compression
- Firebase deploy
- Check bundle size
- Index transform
- Log based on environment
- Cypress & e2e testing
- Local HTTP server ready




## Start

`npm i`
`npm i`

## Git flow

Follow [Git branching model](https://nvie.com/posts/a-successful-git-branching-model/)

- `master` is for production
- `develop` for test (next release)


- `release` created from `develop` for merging to `master`
- `hotfix` created from `master` for merging to `master`

#### Install [Git-flow](https://github.com/nvie/gitflow/wiki/Installation)

#### Init Git flow

`git flow init` or use the default git config with `git config --local include.path ../.gitconfig`

---

#### Start new feature

`git flow feature start feature-name`

#### Finish feature development

`git flow finish feature feature-name`

`git push` to update remote

---

#### Start new release for production

`git flow release start 1.0.0`

#### Finish release

`git flow finish release 1.0.0`

---
