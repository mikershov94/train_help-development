const PATHS = require('./webpack.paths.conf');

const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const prodWebpackConfig = merge(baseWebpackConfig, {
    mode: 'production',

})

module.exports = new Promise((res, rej) => {
    resolve(prodWebpackConfig);
})