const path = require('path');
const deps = require('./package.json').dependencies;
const isDev = process.env.NODE_ENV === 'development';  // "build:dev: cross-env NODE_ENV=development webpack"

module.exports = (env) => {
  console.log({env}); // put in log here

  return {
    entry: path.resolve(__dirname, 'src', 'index.js'),  // entrypoint, may be several
    mode: env.mode ?? 'development',  // develop or production build mode and dev as default
    output: {
      path: path.resolve(__dirname, 'build'), // where keep bundle
      filename: `[name].${env.mode}.[contenthash].js`,  // bundle name
      clean: true,  // clean build dir before every new build
    }
  };
}
