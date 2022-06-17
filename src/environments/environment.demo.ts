export const environment = {
  env: 'demo',
  production: false,
  cordova: false,
  hmr: false,
  logConsole: true,
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  appVersion: require('../../package.json').version,
  serverUrl: '/api',
};
