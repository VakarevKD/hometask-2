const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDev = process.env.NODE_ENV === "development";

const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

module.exports = {
	context: path.resolve(__dirname, "src"),
	mode: "development",
	entry: "./index.js",
	output: {
		filename: `./${filename("js")}`,
		path: path.resolve(__dirname, "dist"),
		clean: true,
		publicPath: ""
	},
	devServer: {
		historyApiFallback: true,
		static: {
			directory: path.resolve(__dirname, "dist"),
		},
		open: true,
		compress: true,
		hot: true,
		port: 3000
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: path.resolve(__dirname, "src/index.html"),
			filename: "index.html",
			minify: {
				collapseWhitespace: !isDev
			}
		}),
		new HTMLWebpackPlugin({
			template: path.resolve(__dirname, "src/detailed-page.html"),
			filename: "detailed-page.html",
			minify: {
				collapseWhitespace: !isDev
			}
		}),
		new MiniCssExtractPlugin({
			filename: `./${filename("css")}`
		})
	],
	module: {
		rules: [
			{
				test: /\.html$/,
				loader: "html-loader"
			},
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader"]
			},
			{
				test: /\.(?:|gif|png|jpg|jpeg|svg)$/i,
				use: [{
					loader: "file-loader",
					options: {
						name: `./img/${filename("[ext]")}`
					}
				}]
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ["babel-loader"]
			}
		]
	}
}