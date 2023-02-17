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
- Husky git hooks management
- Git-flow management
- Eslint
- Prettier
- Prettier plugin TailwindCSS

### Abilities
- PWA
- Icons generator from SVG
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

## Getting started

---

### Run app
Install dependencies:
- `npm i`

Launch local server with `test` configuration and open the app on browser
- `npm start`

### Project structure
```
dist/                            .
.husky/                          .
scripts/                         .
src/                             .
├── app/                         .
│ │... other modules             .
│ ├── auth/                      .
│ ├── core/                      .      .
│ ├── shared/                    .        .
│ ├── shell/                     .
│ ├── home/                      .
│ ├── about/                     .
│ ├── app-routing.module.ts      .
│ ├── app.component.ts           .
│ ├── app.module.ts              .
│ └── app.server.module.ts       .
├── assets/                      .
│ ├── design-system/             .
│ ├── fonts/                     .
│ ├── icons/                     .
│ └── imgs/                      .
├── environments/                .
├── global.js                    .
├── index.html                   .
├── main.server.ts               .
├── main.ts                      .
├── manifest.webmanifest         .
├── polyfills.ts                 .
├── preloaded.js                 .
├── robots.txt                   .
├── styles.scss                  .
├── test.ts                      .
└── typings.d.ts                 .
cypress/                         .
cypress.config.ts                .
docs/                            .
README.md                        .
firebase.json                    .
firestore.indexes.json           .
firestore.rules                  .
git-flow-plus.config             .
index-html-transform.js          .
karma.conf.js                    .
ngsw-config.json                 .
package-lock.json                .
package.json                     .
angular.json                     .
tailwind.config.js               .
tsconfig.app.json                .
tsconfig.json                    .
tsconfig.server.json             .
tsconfig.spec.json               .
webpack.config.js                .
```

## Main Tasks

---
Task automation is based on [NPM scripts](https://docs.npmjs.com/misc/scripts).

| Tasks                           | Description                                                                       |
|---------------------------------|-----------------------------------------------------------------------------------|
| ng-local start                  | Start the development server on `http://localhost:3001/`                          |
| start-dist                      | Serve the production build on `http://localhost:8080/`                            |
| build                           | Build the production version of the app                                           |
| build:app-shell:demo            | Build a demo app shell                                                            |
| build-start-open:app-shell:demo | Build a demo app shell and serve the production build on `http://localhost:8080/` |
| build:app-shell:production      | Build a production app shell                                                      |
| bundle-analyze                  | Build the app and analyze the bundle size                                         |
| compress-dist                   | Compress the production build with gzip                                           |
| generate-asset                  | Generate PWA assets for the app                                                   |
| firebase-login                  | Log in to Firebase                                                                |
| firebase-init                   | Initialize Firebase for the project                                               |
| firebase-deploy                 | Deploy the app to Firebase                                                        |
| deploy-app                      | Generate PWA assets, format the index, build the production version, and deploy   |
| deploy-app-shell:demo           | Build and deploy a demo app shell                                                 |
| deploy-app-shell:production     | Build and deploy a production app shell                                           |
| cordova-init                    | Create a Cordova project                                                          |
| cordova-add:osx                 | Add the OSX platform to the Cordova project                                       |
| cordova-add:windows             | Add the Windows platform to the Cordova project                                   |
| cordova-build-production        | Build the production version of the app for Cordova                               |
| cordova-build-platforms         | Build the app for all Cordova platforms                                           |
| cordova-run                     | Run the app on a device or emulator with Cordova                                  |
| format-code                     | Format the code using Prettier                                                    |
| format-index                    | Format the index.html file using Prettier                                         |
| npm-check-update                | Check for updates to the project's dependencies                                   |
| npm-check-unused-pckg           | Check for unused packages in the project                                          |
| lint                            | Lint the code using ESLint                                                        |
| test                            | Run unit tests via Karma                                                          |
| e2e                             | Run e2e tests using Protractor                                                    |
| cypress:install                 | Install Cypress for end-to-end testing                                            |
| cypress:open                    | Open the Cypress test runner                                                      |
| cypress:run                     | Run Cypress tests in headless mode                                                |
| prepare                         | Install Husky Git hooks                                                           |

When building or serve the application, you can specify the target environment using the additional flag `-c <environmentName>`
Build: `ng build -c test`
Serve: `ng serve -c production`

The default build environment is `production`.
The default serve environment is `test`.


## Coding guides
- [Git Flow](docs/git-flow.md)

## Libraries
- [Husky](docs/husky.md)
- [Scripts](docs/scripts.md)
