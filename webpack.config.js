
const path=require("path");
const webpack = require('webpack');
const UnminifiedWebpackPlugin = require('unminified-webpack-plugin');

module.exports={
	entry:"./src/main.js",
	output:{
		path:path.resolve(__dirname,"dist"),
		filename:"acss.min.js"
	},
	devtool:"inline-source-map",
	plugins: [
        new UnminifiedWebpackPlugin()
    ]
}