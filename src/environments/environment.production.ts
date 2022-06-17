export const environment = {
  env: 'production',
  production: true,
  cordova: false,
  hmr: false,
  logConsole: false,
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  appVersion: require('../../package.json').version,
  serverUrl: 'https://mock.codes/',
};
