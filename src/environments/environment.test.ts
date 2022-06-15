export const environment = {
  env: 'test',
  production: false,
  cordova: false,
  hmr: true,
  logConsole: true,
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  appVersion: require('../../package.json').version,
  serverUrl: '/api',
};
