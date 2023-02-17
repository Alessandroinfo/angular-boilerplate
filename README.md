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


### Run app
Install dependencies:
- `npm i`

Launch local server with `test` configuration and open the app on browser
- `npm start`

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
cypress.config.ts                Cypress configuration file
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
```

## Main Tasks

Task automation is based on [NPM scripts](https://docs.npmjs.com/misc/scripts).

| Tasks                           | Description                                                                        |
|---------------------------------|------------------------------------------------------------------------------------|
| ng-local                        | Use this as npm run ng-local <angularCommandHere> to use local Angular CLI version |
| start                           | Start the development server on `http://localhost:3001/` and open browser          |
| start-dist                      | Serve the local dist/ build on `http://localhost:8080/`                            |
| build                           | Build the production version of the app                                            |
| build:app-shell:demo            | Build a demo app shell                                                             |
| build-start-open:app-shell:demo | Build a demo app shell and serve the production build on `http://localhost:8080/`  |
| build:app-shell:production      | Build a production app shell                                                       |
| bundle-analyze                  | Build the app and analyze the bundle size                                          |
| compress-dist                   | Compress the dist/ build with gzip                                                 |
| generate-asset                  | Generate PWA assets for the app                                                    |
| firebase-login                  | Log in to Firebase                                                                 |
| firebase-init                   | Initialize Firebase for the project                                                |
| firebase-deploy                 | Deploy the app to Firebase                                                         |
| deploy-app                      | Generate PWA assets, format the index, build the production version, and deploy    |
| deploy-app-shell:demo           | Build and deploy a demo app shell                                                  |
| deploy-app-shell:production     | Build and deploy a production app shell                                            |
| cordova-init                    | Create a Cordova project                                                           |
| cordova-add:osx                 | Add the OSX platform to the Cordova project                                        |
| cordova-add:windows             | Add the Windows platform to the Cordova project                                    |
| cordova-build-production        | Build the production version of the app for Cordova                                |
| cordova-build-platforms         | Build the app for all Cordova platforms                                            |
| cordova-run                     | Run the app on a device or emulator with Cordova                                   |
| format-code                     | Format the code using Prettier                                                     |
| format-index                    | Format the index.html file using Prettier                                          |
| npm-check-update                | Check for updates to the project's dependencies                                    |
| npm-check-unused-pckg           | Check for unused packages in the project                                           |
| lint                            | Lint the code using ESLint                                                         |
| test                            | Run unit tests via Karma                                                           |
| e2e                             | Run e2e tests using Protractor                                                     |
| cypress:install                 | Install Cypress for end-to-end testing                                             |
| cypress:open                    | Open the Cypress test runner                                                       |
| cypress:run                     | Run Cypress tests in headless mode                                                 |
| prepare                         | Install Husky Git hooks                                                            |

When building or serve the application, you can specify the target environment using the additional flag `-c <environmentName>`
Build: `ng build -c production`
Serve: `ng serve -c test`

You can find the environment inside `angular.json` in `.projects.angular-boilerplate.architect.[build | serve].configurations`


The default build environment is `production`.
The default serve environment is `test`.


## Coding guides
- [Git Flow](docs/git-flow.md)

## Libraries
- [Husky](docs/husky.md)
- [Scripts](docs/scripts.md)
