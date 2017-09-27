import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const LAUNCH_COMMAND = process.env.npm_lifecycle_event

const isProduction = LAUNCH_COMMAND === 'production'
process.env.BABEL_ENV = LAUNCH_COMMAND

const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'dist'),
};

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: PATHS.app + '/index.html',
    filename: 'index.html',
    inject: 'body'
});

const productionPlugin = new webpack.DefinePlugin({
    'process.env': {
        NODE_ENV: JSON.stringify('production')
    }
});

const base = {
    entry: [
        PATHS.app,
    ],
    output: { 
        path: PATHS.build,
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, use: 'babel-loader'},
            //{ test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
            {test: /\.css$/, 
                use: [ 
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        query: {
                            modules: true,
                            localIdentName: '[path]___[name]__[local]___[hash:base64:5]'
                        }
                    }]
            },
            { test: /\.(jpe?g|png|gif|svg|webp)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/img[name].[ext]'
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            query: {
                                mozjpeg: {
                                    progressive: true,
                                    quality: 65
                                },
                                gifsicle: {
                                    optimizationLevel: 7,
                                    interlaced: false,
                                },
                                optipng: {
                                    optimizationLevel: 7,
                                    interlaced: false
                                },
                                webp: {
                                    progressive: true,
                                    quality: 65
                                }
                            }
                        }
                    }]}
        ]
    },
    resolve: {
        modules: [path.resolve(__dirname, './app/'), 'node_modules']
    }
};

const developmentConfig = {
    devtool: 'cheap-module-inline-source-map',
    devServer: {
        contentBase: PATHS.build,
        hot: true,
        inline: true,
        historyApiFallback: true
    },
    plugins: [HTMLWebpackPluginConfig, new webpack.HotModuleReplacementPlugin()]
};

var productionConfig = {
    devtool: 'cheap-module-source-map',
    plugins: [HTMLWebpackPluginConfig, productionPlugin]
};

export default Object.assign({}, base,
  isProduction === true ? productionConfig : developmentConfig
);