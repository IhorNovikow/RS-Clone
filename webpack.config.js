const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const EslingPlugin = require('eslint-webpack-plugin');

const baseConfig = {
    entry: {
        index: path.resolve(__dirname, './src/index'),
        gameJS: path.resolve(__dirname, './src/gameJS'),
        startJS: path.resolve(__dirname, './src/startJS'),
    },
    mode: 'development',
    module: {
        rules: [
            { 
                test: /\.ts$/i,
                use: 'ts-loader'
            },
            {
                test: /\.css$/i,
                use:['style-loader', 'css-loader'],
            },
            {
                test: /\.(jpg|png|svg|gif)$/,
                type: 'asset/resource',
          },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: `js/[name].js`,
        path: path.resolve(__dirname, './dist'),
    },
    plugins: [
        new EslingPlugin({ extensions: 'ts' }),
        new HtmlWebpackPlugin(
        {
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
            inject:false,
        }
        ),
        new HtmlWebpackPlugin(
            {
                template: path.resolve(__dirname, './src/game.html'),
                filename: 'game.html',
                inject:false,
            }
        ),
        new HtmlWebpackPlugin(
            {
                template: path.resolve(__dirname, './src/start.html'),
                filename: 'start.html',
                inject:false,
            }
        ),

        new CopyPlugin({
            patterns: [
              { from: "src/photo", to: "photo" },
            ],
          }),
        new CleanWebpackPlugin(),
    ],
};

module.exports = ({ mode }) => {
    const isProductionMode = mode === 'prod';
    const envConfig = isProductionMode ? require('./webpack.prod.config') : require('./webpack.dev.config');


    return merge(baseConfig, envConfig);
};
