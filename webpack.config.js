var path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: 'dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};