const webpackMerge = require('webpack-merge');

console.error();

module.exports = (config) => {
  const merge = webpackMerge && webpackMerge.merge ? webpackMerge.merge : webpackMerge;

  const isProd = config.mode === 'production';
  const tailwindConfig = require('./tailwind.config.js')(isProd);

  const maximumInlineSize = 10;
  const autoprefixer = require('autoprefixer');
  const postcssUrl = require('postcss-url');
  const postcssImports = require('postcss-import');
  const postcssPlugins = function (loader) {
    return [
      postcssImports({
        resolve: (url, context) => {
          return new Promise((resolve, reject) => {
            let hadTilde = false;
            if (url && url.startsWith('~')) {
              url = url.substr(1);
              hadTilde = true;
            }
            loader.resolve(context, (hadTilde ? '' : './') + url, (err, result) => {
              if (err) {
                if (hadTilde) {
                  reject(err);
                  return;
                }
                loader.resolve(context, url, (err, result) => {
                  if (err) {
                    reject(err);
                  }
                  else {
                    resolve(result);
                  }
                });
              }
              else {
                resolve(result);
              }
            });
          });
        },
        load: (filename) => {
          return new Promise((resolve, reject) => {
            loader.fs.readFile(filename, (err, data) => {
              if (err) {
                reject(err);
                return;
              }
              const content = data.toString();
              resolve(content);
            });
          });
        }
      }),
      postcssUrl({
        filter: ({ url }) => url.startsWith('~'),
        url: ({ url }) => {
          const fullPath = path.join(projectRoot, 'node_modules', url.substr(1));
          return path.relative(loader.context, fullPath).replace(/\\/g, '/');
        }
      }),
      postcssUrl([
        {
          // Only convert root relative URLs, which CSS-Loader won't process into require().
          filter: ({ url }) => url.startsWith('/') && !url.startsWith('//'),
          url: ({ url }) => {
            if (deployUrl.match(/:\/\//) || deployUrl.startsWith('/')) {
              // If deployUrl is absolute or root relative, ignore baseHref & use deployUrl as is.
              return `${deployUrl.replace(/\/$/, '')}${url}`;
            }
            else if (baseHref.match(/:\/\//)) {
              // If baseHref contains a scheme, include it as is.
              return baseHref.replace(/\/$/, '') +
                `/${deployUrl}/${url}`.replace(/\/\/+/g, '/');
            }
            else {
              // Join together base-href, deploy-url and the original URL.
              // Also dedupe multiple slashes into single ones.
              return `/${baseHref}/${deployUrl}/${url}`.replace(/\/\/+/g, '/');
            }
          }
        },
        {
          // TODO: inline .cur if not supporting IE (use browserslist to check)
          filter: (asset) => {
            return maximumInlineSize > 0 && !asset.hash && !asset.absolutePath.endsWith('.cur');
          },
          url: 'inline',
          // NOTE: maxSize is in KB
          maxSize: maximumInlineSize,
          fallback: 'rebase',
        },
        { url: 'rebase' },
      ]),
      autoprefixer({ grid: true }),
    ];
  };

  return merge(config, {
    module: {
      rules: [
        {
          test: /\.scss$/,
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              ident: 'postcss',
              syntax: 'postcss-scss',
              plugins: [
                postcssPlugins,
                require('tailwindcss')(tailwindConfig)
              ]
            }
          }
        }
      ]
    }
  });
};
