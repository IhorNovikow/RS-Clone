const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const EslingPlugin = require('eslint-webpack-plugin');

const baseConfig = {
    entry: {
        index: path.resolve(__dirname, './src/index'),
        //basket:path.resolve(__dirname, './src/index-basket'),
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
