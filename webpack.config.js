var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = {
    devtool: 'source-map',
    entry: {
    		vendor: path.resolve('src/js', 'vendor.js'),
    		app: path.resolve('src/js', 'index.js')
	  },
    output: {
        path: path.join(__dirname, 'prod'),
				filename: path.join('assets', '[name].bundle.js')
    },
    devServer: {
        historyApiFallback: true,
        proxy: [{
            path: '/api/*',
            target: 'http://localhost:3001'
        }]
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                exclude: /\/node_modules\//,
                loaders: ['babel'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.css$/,
                exclude: /\/node_modules\//,
                loader: 'style-loader!css-loader'
            },
						{
							test: /\.html$/,
							loader: "html"
						},
            {
              test: /\.(png|jpg|jpeg|gif)$/,
              include: /images/,
              loader: 'url'
            }
        ]
    },

    resolve: {
      modulesDirectories: ['node_modules'],
      extensions:         ['', '.js']
    },

    resolveLoader: {
      modulesDirectories: ['node_modules'],
      moduleTemplates:    ['*-loader', '*'],
      extensions:         ['', '.js']
    },

    plugins:[
      new webpack.NoErrorsPlugin(),
      new webpack.DefinePlugin({
        NODE_ENV : JSON.stringify(NODE_ENV)
      })
      // new webpack.optimize.CommonsChunkPlugin(options)
    ]
}
