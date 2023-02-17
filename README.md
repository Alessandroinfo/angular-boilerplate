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

## Coding guides
- [Git Flow](docs/git-flow.md)
