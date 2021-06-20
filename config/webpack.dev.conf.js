const PATHS = require('./webpack.paths.conf');

const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: 'development',

    devtool: 'inline-cheap-module-source-map',

    devServer: {
        overlay: true,
        stats: 'errors-only',
        contentBase: PATHS.public,
        port: 3000
    },
})

module.exports = new Promise((res, rej) => {
    res(devWebpackConfig);
})