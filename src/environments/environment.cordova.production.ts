// This file is for cordova export

export const environment = {
  env: 'cordova-production',
  production: true,
  cordova: true,
  hmr: false,
  appVersion: require('../../package.json').version,
  serverUrl: '/api'
};
