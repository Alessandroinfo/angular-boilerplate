// This file is for cordova export

export const environment = {
  env: 'cordova-production',
  production: true,
  cordova: true,
  hmr: false,
  logConsole: true,
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  appVersion: require('../../package.json').version,
  serverUrl: '/api',
};
