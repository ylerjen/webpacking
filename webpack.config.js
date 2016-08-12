var path = require('path');

module.exports = {
    entry: ["./src/sass/styleBundle.js", "./src/js/app.js"],
    output: {
        filename: "./dist/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,  // target .js files
                exclude: /node_modules/,
                loader: 'babel-loader', // use the babel-loader
                query: {
                    presets: ['es2015'] // use the preset es2015 for babel
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: ["style", "css", "sass"] // [3] converts css into inline styles | [2] loads up the css | [1] converts scss files to css files
            }
        ]
    },
    sassLoader: {
        includePaths: [path.resolve(__dirname, "./src/sass")]
    },
    watch: true
};

/*
var autoprefixer = require('autoprefixer'),
    webpack = require('webpack'),


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
};*/