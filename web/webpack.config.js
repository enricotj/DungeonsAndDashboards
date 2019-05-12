const webpack = require('webpack');

module.exports = {
	entry: "./src/index.jsx",
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /.css$/,
				use: ['style-loader', 'css-loader'],
			}
		],
	},
	resolve: {
		extensions: ["*", ".js", ".jsx", ".css"]
	},
	output: {
		path: __dirname + "/dist",
		publicPath: "/",
		filename: "bundle.js",
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		contentBase: "./dist",
		open: true,
		hot: true,
	}
};