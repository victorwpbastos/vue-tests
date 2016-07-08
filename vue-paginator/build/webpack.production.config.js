var path = require('path');
var pkg = require('../package.json');

module.exports = function({ BOILER_PATH, webpack, plugins }) {

	return {
		entry: [
			path.resolve(__dirname, '../application/main.js')
		],

		output: {
			path: path.resolve(__dirname, '../dist'),
			filename: 'js/application-[hash].js'
		},

		module: {
			preLoaders: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					loader: 'jshint-loader',
					query: {
						esversion: 6,
						emitErrors: true,
						failOnHint: true
					}
				}
			],

			loaders: [
				{
					test: /\.vue$/i,
					loader: 'vue-loader',
					exclude: /node_modules/
				},
				{
					test: /\.js$/i,
					loader: 'babel-loader',
					exclude: /node_modules/
				},
				{
					test: /\.css$/i,
					loader: plugins.ExtractTextPlugin.extract(['css-loader'], { publicPath: '../../' })
				},
				{
					test: /\.(eot|woff2?|ttf|svg|png|jpg)(\?.*)*$/i,
					loader: 'file-loader',
					query: {
						name: 'assets/img/[name].[ext]'
					}
				},
				{
					test: /\.json$/,
					loader: 'json-loader',
					exclude: /node_modules/
				}
			]
		},

		babel: {
			presets: [ path.resolve(BOILER_PATH, 'node_modules/babel-preset-es2015') ],
			plugins: [ path.resolve(BOILER_PATH, 'node_modules/babel-plugin-transform-runtime') ],
			compact: true
		},

		resolve: {
			root: [
				path.resolve(__dirname, '../'),
				path.resolve(__dirname, '../application'),
				path.resolve(__dirname, '../node_modules'),
				path.resolve(BOILER_PATH, 'node_modules')
			],
			extensions: ['', '.js', '.vue']
		},

		resolveLoader: {
			root: [	path.resolve(BOILER_PATH, 'node_modules') ]
		},

		plugins: [
			new webpack.DefinePlugin({
				'process.env': {
					NODE_ENV: JSON.stringify('production'),
					BABEL_ENV: JSON.stringify('production')
				}
			}),
			new webpack.optimize.UglifyJsPlugin({
				compress: { warnings: false },
				output: { comments: false }
			}),
			new webpack.BannerPlugin([
				pkg.name +  ' ' + pkg.version + ' - ' + pkg.description,
				'\nDevelopers:\n',
				pkg.authors.map(function(a) { return '\t' + a;}).join('\n')
			].join('\n'), { entryOnly: true }),
			new plugins.ExtractTextPlugin('assets/css/application-[hash].css', { allChunks: true }),
			new plugins.HtmlWebpackPlugin({
				filename: 'index.html',
				template: 'index.html',
				favicon: 'favicon.ico'
			}),
			new plugins.Notifier()
		]
	};
};