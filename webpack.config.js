var webpack = require("webpack");

module.exports = {
	entry: "./src/index.js",
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: "babel-loader",
				exclude: /node_modules/,
				query: {
					presets: ["react","es2015"]
				}
			},
			{ test: /\.less$/, loader: "style-loader!css-loader!less-loader" }
		],

	},
	output: {
		path: "/build",
		filename: "./index.min.js"
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};
