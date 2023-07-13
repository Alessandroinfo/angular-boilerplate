<p align="center">
<img src="src/assets/imgs/logo.svg" width="64" alt="Logo" />
</p>

# Angular-Boilerplate

Angular project with all the latest web best practices and libraries.

- [Demo live](https://angular-boilerplate-e42af.web.app/)
- See the [Roadmap](https://trello.com/b/lGXOxoR7/angular-boilerplate)


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
- [Skip link](docs/skip-link.md)
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

### Run app

Install dependencies:

- `npm i`

<blockquote>
To ensure you use the same version of Node.js and npm you can use [nvm](https://github.com/nvm-sh/nvm).

After installed nvm:

- `nvm install`
- `nvm use`

This will install and use the version of node configured in `.nvmrc`.
</blockquote>

Launch local server with `test` configuration and open the app on browser

- `npm start`

`.npmrc` contain rules to restrict Node.js version.
In the package.json the property `engines.node` set the version must used to install dependencies.

> You need to run `npm run generate-asset` before run the application if you want the generated assets of each size.

### Project structure

```
dist/                            Compiled production code
.husky/                          Git hooks directory
scripts/                         Various scripts for development and build processes
src/                             Source code directory
├── app/                         Application code directory
│ │... other modules             Other application modules
│ ├── auth/                      Authentication module
│ ├── core/                      Core module (common services)
│ ├── shared/                    Shared module (common modules, components, directives, pipes)
│ ├── shell/                     Shell module (contain the managment for the component shell)
│ ├── home/                      Home module (module eager loader)
│ ├── about/                     About module  (module lazy loaded)
│ ├── app-routing.module.ts      Application routing module
│ ├── app.component.ts           Application root component
│ ├── app.module.ts              Application root module
│ └── app.server.module.ts       Application server module
├── assets/                      Static asset directory
│ ├── design-system/             Design system assets
│ ├── fonts/                     Font assets
│ ├── icons/                     Icon assets
│ └── imgs/                      Image assets
├── environments/                Environment configuration directory
├── global.js                    Global script file
├── index.html                   Application root HTML file
├── main.server.ts               Server-side entry file
├── main.ts                      Client-side entry file
├── manifest.webmanifest         Web app manifest file
├── polyfills.ts                 Polyfills script file
├── preloaded.js                 Preload script file
├── robots.txt                   Robots exclusion standard file
├── styles.scss                  Global styles file
├── test.ts                      Test script file
└── typings.d.ts                 TypeScript typings file
cypress/                         End-to-end testing directory
cypress.config.js                Cypress configuration file
docs/                            Documentation directory
README.md                        Project README file
firebase.json                    Firebase configuration file
firestore.indexes.json           Firestore indexes file
firestore.rules                  Firestore security rules file
git-flow-plus.config             Git-flow configuration file
index-html-transform.js          HTML transformation script file
karma.conf.js                    Karma configuration file
ngsw-config.json                 Angular service worker configuration file
package-lock.json                Dependency lockfile
package.json                     Project dependency and scripts file
angular.json                     Angular CLI configuration file
tailwind.config.js               Tailwind CSS configuration file
tsconfig.app.json                TypeScript configuration file for the app
tsconfig.json                    Root TypeScript configuration file
tsconfig.server.json             TypeScript configuration file for the server
tsconfig.spec.json               TypeScript configuration file for tests
webpack.config.js                Webpack configuration file
.browserslistrc:                 Contains a list of browser versions to support.
.depcheckrc:                     Configuration file for the DepCheck tool, which checks dependencies.
.editorconfig:                   Configuration file that defines coding styles for different editors and IDEs.
.eslintignore:                   Specifies files and directories to be excluded from ESLint linting.
.eslintrc.js:                    Configuration file for the ESLint tool, which checks for code quality and consistency.
.firebaserc:                     Configuration file for Firebase projects.
.lintstagedrc:                   Configuration file for the lint-staged tool, which allows linting only staged files.
.prettierignore:                 Specifies files and directories to be excluded from Prettier code formatting.
.prettierrc:                     Configuration file for the Prettier code formatter, which helps enforce consistent code style.
```

## Main Tasks

Task automation is based on [NPM scripts](https://docs.npmjs.com/misc/scripts).

| Tasks                           | Description                                                                                                                                                                |
|---------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ng-local                        | Use this as npm run ng-local <angularCommandHere> to use local Angular CLI version. See [this](https://github.com/angular/angular-cli/issues/5955#issuecomment-320273493). |
| start                           | Start the development server on `http://localhost:3001/` and open browser                                                                                                  |
| start-dist                      | Serve the local dist/ build on `http://localhost:8080/`                                                                                                                    |
| build                           | Build the production version of the app                                                                                                                                    |
| build:app-shell:demo            | Build a demo app shell                                                                                                                                                     |
| build-start-open:app-shell:demo | Build a demo app shell and serve the production build on `http://localhost:8080/`                                                                                          |
| build:app-shell:production      | Build a production app shell                                                                                                                                               |
| bundle-analyze                  | Build the app and analyze the bundle size                                                                                                                                  |
| compress-dist                   | Compress the `dist/` build with gzip                                                                                                                                       |
| generate-asset                  | Generate PWA assets for the app                                                                                                                                            |
| firebase-login                  | Log in to Firebase                                                                                                                                                         |
| firebase-init                   | Initialize Firebase for the project                                                                                                                                        |
| firebase-deploy                 | Deploy the app to Firebase                                                                                                                                                 |
| deploy-app                      | Generate PWA assets, format the index, build the production version, and deploy                                                                                            |
| deploy-app-shell:demo           | Build and deploy a demo app shell                                                                                                                                          |
| deploy-app-shell:production     | Build and deploy a production app shell                                                                                                                                    |
| cordova-init                    | Create a Cordova project                                                                                                                                                   |
| cordova-add:osx                 | Add the OSX platform to the Cordova project                                                                                                                                |
| cordova-add:windows             | Add the Windows platform to the Cordova project                                                                                                                            |
| cordova-build-production        | Build the production version of the app for Cordova                                                                                                                        |
| cordova-build-platforms         | Build the app for all Cordova platforms                                                                                                                                    |
| cordova-run                     | Run the app on a device or emulator with Cordova                                                                                                                           |
| format-code                     | Format the code using Prettier                                                                                                                                             |
| format-index                    | Format the index.html file using Prettier                                                                                                                                  |
| npm-check-update                | Check for updates to the project's dependencies                                                                                                                            |
| npm-check-unused-pckg           | Check for unused packages in the project                                                                                                                                   |
| lint                            | Lint the code using ESLint                                                                                                                                                 |
| test                            | Run unit tests via Karma                                                                                                                                                   |
| e2e                             | Run e2e tests using Protractor                                                                                                                                             |
| cypress:install                 | Install Cypress for end-to-end testing                                                                                                                                     |
| cypress:open                    | Open the Cypress test runner                                                                                                                                               |
| cypress:run                     | Run Cypress tests in headless mode                                                                                                                                         |
| prepare                         | Install Husky Git hooks                                                                                                                                                    |

When building or serve the application, you can specify the target environment using the additional flag `-c <environmentName>`.

- Build: `ng build -c production`

- Serve: `ng serve -c test`

You can find the environment inside `angular.json` in `.projects.angular-boilerplate.architect.[build | serve].configurations`.


- The default build environment is `production`.

- The default serve environment is `test`.

[//]: # (TODO)
## Environments

Environment-specific configuration:
```
├── environment.cordova.production.ts     environment for Cordova mobile app.
├── environment.demo.ts                   environment with same data as prod but it's not live.
├── environment.production.ts             environment for production use.
├── environment.test.ts                   environment for developer testing.
└── environment.ts                        default environment
```

Each file contains an object defining environment variables:
```
export const environment = {
  // Defines the environment name, which can be customized for different environments
  env: '',
  
  // Specifies whether the app is in production mode
  production: false,
  
  // Specifies whether the app is running on Cordova
  cordova: false,
  
  // Specifies whether Hot Module Replacement (HMR) is enabled
  hmr: false,
  
  // Specifies whether console logging is enabled
  logConsole: true,
  
  // Specifies the current version of the app, retrieved from the package.json file.
  // Note that the @typescript-eslint/no-var-requires directive is used to ignore the error
  // that TypeScript produces when require() is used.
  appVersion: require('../../package.json').version,
  
  // Specifies the URL of the server or API
  serverUrl: '/api',
};
```


## Coding guides
- [Angular Basics](docs/angular.md)
- [Git Flow](docs/git-flow.md)

## Libraries
- [Firebase](docs/firebase.md)
- [Husky](docs/husky.md)
- [Shell scripts](docs/scripts.md)
- [until-destroy](docs/until-destroy.md)
