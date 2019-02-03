const withWorkers = require('@zeit/next-workers');
const withTypescript = require('@zeit/next-typescript');
const withCSS = require('@zeit/next-css');

const nextConf = withCSS(
  withWorkers(
    withTypescript({
      target: 'serverless',
      webpack(config) {
        config.module.rules.unshift({
          test: /\.worker\.ts$/,
          loader: 'worker-loader',
          options: {
            name: 'static/[hash].worker.js',
            publicPath: '/_next/',
          },
        });

        return config;
      },
    })
  )
);

module.exports = nextConf;
