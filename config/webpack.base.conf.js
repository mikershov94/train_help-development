const PATHS = require('./webpack.paths.conf');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: PATHS.src + '/index.tsx'
    },

    output: {
        filename: PATHS.outputApp,
        path: PATHS.dist,
        publicPath: ''
    },

    module: {
        rules: [
            {
                test: /\.s(a|c)ss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { esModule: false }
                    },
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    }
                ]
            },

            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    },
                    {
                        loader: 'postcss-loader',
                        options: { 
                            sourceMap: true,
                            config: {
                                path: `${__dirname}/postcss.config.js`
                            }
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    },
                ]
            },

            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                options: { generatorOpts: { compact: false } },
                exclude: '/node-modules/'
            },

            {
                test: /\.(png|gif|jpe?g)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: { name: '[path][name].[ext]' }
                    },
                    {
                        loader: 'img-loader'
                    },
                ]
            },

            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: { name: '[path][name].[ext]' }
                    }
                ]
            },

            {
                test: /\.tsx?$/,
                exclude: '/node-modules/',
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: 'config/tsconfig.json'
                        },
                    }
                ]
            }
        ],
    },

    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },

    plugins: [
        new MiniCssExtractPlugin({ filename: PATHS.outputStyle }),
        new HtmlWebpackPlugin({
            hash: false,
            template: PATHS.public + '/index.html',
            filename: 'index.html'
        }),
        new CleanWebpackPlugin(),
    ]
}