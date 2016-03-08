var autoprefixer = require('autoprefixer'),
    webpack = require('webpack'),
    path = require('path');


module.exports = {
    entry: {
        app: './src/js/app',
        sass: './src/sass/entry'
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, './dist'),
        publicPath: '/dist'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,  // target .js files
                loader: 'babel-loader', // use the babel-loader
                query: {
                    presets: ['es2015'] // use the preset es2015 for babel
                }
            },{
                test: /\.scss$/,    // target the .scss files
                loader: "style-loader!css-loader!postcss-loader!sass-loader"    // The first one the sass-loader (read from right to left) will compile Sass into CSS then the css-loader will create a style tag that will be injected into your page on run time
            }
        ]
    },
    postcss: [
        autoprefixer({
            browsers: ['last 2 versions']
        })
    ]
};