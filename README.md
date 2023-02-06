<p align="center">
<img src="src/assets/imgs/logo.svg" width="64" alt="Logo" />
</p>

# Angular-Boilerplate


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
  - TailwindCSS class ordering

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

Open the app with:
- `npm i`
- `npm run start`

## Git flow

Follow [Git branching model](https://nvie.com/posts/a-successful-git-branching-model/)

- `master` is for production
- `develop` for test (next release)


- `release` created from _develop_ for merging to _master_
- `hotfix` created from _master_ for merging to _master_


#### Install [Git-flow](https://github.com/petervanderdoes/gitflow-avh/wiki/Installation)

#### Init Git flow

`git flow init` or use the default git config with `git config --local include.path ../.gitconfig`

---

### Development
 Start new feature

`git flow feature start feature-name`

 Finish feature development

`git flow feature finish feature-name`

`git push` to update remote

---

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

